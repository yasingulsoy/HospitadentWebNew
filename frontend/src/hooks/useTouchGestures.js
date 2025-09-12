import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Touch gesture hook for mobile interactions
 * Supports swipe, pinch, tap, and long press gestures
 */
export const useTouchGestures = (options = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    onTap,
    onLongPress,
    onDoubleTap,
    swipeThreshold = 50,
    pinchThreshold = 0.1,
    longPressDelay = 500,
    doubleTapDelay = 300,
  } = options;

  const [gestures, setGestures] = useState({
    isTouching: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    deltaX: 0,
    deltaY: 0,
    velocity: 0,
    direction: null,
    scale: 1,
    rotation: 0,
  });

  const touchRef = useRef(null);
  const longPressTimer = useRef(null);
  const lastTapTime = useRef(0);
  const lastTapPosition = useRef({ x: 0, y: 0 });

  const getTouchPosition = useCallback((touches) => {
    if (touches.length === 1) {
      return { x: touches[0].clientX, y: touches[0].clientY };
    }
    // Multi-touch: calculate center point
    const x = Array.from(touches).reduce((sum, touch) => sum + touch.clientX, 0) / touches.length;
    const y = Array.from(touches).reduce((sum, touch) => sum + touch.clientY, 0) / touches.length;
    return { x, y };
  }, []);

  const getDistance = useCallback((touches) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const getAngle = useCallback((touches) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.atan2(touch2.clientY - touch1.clientY, touch2.clientX - touch1.clientX);
  }, []);

  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    const touches = e.touches;
    const position = getTouchPosition(touches);
    const distance = getDistance(touches);
    const angle = getAngle(touches);

    setGestures(prev => ({
      ...prev,
      isTouching: true,
      startX: position.x,
      startY: position.y,
      currentX: position.x,
      currentY: position.y,
      deltaX: 0,
      deltaY: 0,
      velocity: 0,
      direction: null,
      initialDistance: distance,
      initialAngle: angle,
    }));

    // Long press detection
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    longPressTimer.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress(e, position);
      }
    }, longPressDelay);

  }, [getTouchPosition, getDistance, getAngle, onLongPress, longPressDelay]);

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    if (!gestures.isTouching) return;

    const touches = e.touches;
    const position = getTouchPosition(touches);
    const distance = getDistance(touches);
    const angle = getAngle(touches);

    const deltaX = position.x - gestures.startX;
    const deltaY = position.y - gestures.startY;
    const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate direction
    let direction = null;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      direction = deltaY > 0 ? 'down' : 'up';
    }

    // Calculate scale for pinch gestures
    const scale = gestures.initialDistance > 0 ? distance / gestures.initialDistance : 1;
    const rotation = angle - gestures.initialAngle;

    setGestures(prev => ({
      ...prev,
      currentX: position.x,
      currentY: position.y,
      deltaX,
      deltaY,
      velocity,
      direction,
      scale,
      rotation,
    }));

    // Pinch gesture detection
    if (touches.length === 2 && onPinch) {
      const pinchDelta = scale - 1;
      if (Math.abs(pinchDelta) > pinchThreshold) {
        onPinch(e, { scale, delta: pinchDelta, rotation });
      }
    }

  }, [gestures.isTouching, gestures.startX, gestures.startY, gestures.initialDistance, gestures.initialAngle, getTouchPosition, getDistance, getAngle, onPinch, pinchThreshold]);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    
    // Clear long press timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }

    if (!gestures.isTouching) return;

    const { deltaX, deltaY, velocity, direction } = gestures;

    // Swipe detection
    if (velocity > swipeThreshold) {
      switch (direction) {
        case 'left':
          if (onSwipeLeft) onSwipeLeft(e, { deltaX, deltaY, velocity });
          break;
        case 'right':
          if (onSwipeRight) onSwipeRight(e, { deltaX, deltaY, velocity });
          break;
        case 'up':
          if (onSwipeUp) onSwipeUp(e, { deltaX, deltaY, velocity });
          break;
        case 'down':
          if (onSwipeDown) onSwipeDown(e, { deltaX, deltaY, velocity });
          break;
      }
    } else {
      // Tap detection
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTapTime.current;
      const position = getTouchPosition(e.changedTouches);
      const distance = Math.sqrt(
        Math.pow(position.x - lastTapPosition.current.x, 2) + 
        Math.pow(position.y - lastTapPosition.current.y, 2)
      );

      if (timeDiff < doubleTapDelay && distance < 30) {
        // Double tap
        if (onDoubleTap) {
          onDoubleTap(e, position);
        }
        lastTapTime.current = 0; // Reset to prevent triple tap
      } else {
        // Single tap
        if (onTap) {
          onTap(e, position);
        }
        lastTapTime.current = currentTime;
        lastTapPosition.current = position;
      }
    }

    setGestures(prev => ({
      ...prev,
      isTouching: false,
      deltaX: 0,
      deltaY: 0,
      velocity: 0,
      direction: null,
      scale: 1,
      rotation: 0,
    }));

  }, [gestures, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, onDoubleTap, swipeThreshold, doubleTapDelay, getTouchPosition]);

  const handleTouchCancel = useCallback((e) => {
    e.preventDefault();
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    setGestures(prev => ({
      ...prev,
      isTouching: false,
      deltaX: 0,
      deltaY: 0,
      velocity: 0,
      direction: null,
      scale: 1,
      rotation: 0,
    }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  const bind = {
    ref: touchRef,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: {
      touchAction: 'manipulation',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      WebkitTouchCallout: 'none',
    },
  };

  return {
    gestures,
    bind,
    isTouching: gestures.isTouching,
    deltaX: gestures.deltaX,
    deltaY: gestures.deltaY,
    velocity: gestures.velocity,
    direction: gestures.direction,
    scale: gestures.scale,
    rotation: gestures.rotation,
  };
};

export default useTouchGestures;
