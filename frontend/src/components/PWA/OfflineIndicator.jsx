import React, { useState, useEffect } from 'react';
import { FaWifi, FaWifiSlash, FaSync } from 'react-icons/fa';
import { usePWA } from '../../hooks/usePWA';

const OfflineIndicator = () => {
  const { isOnline } = usePWA();
  const [showIndicator, setShowIndicator] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowIndicator(true);
      setWasOffline(true);
    } else if (wasOffline) {
      // Show briefly when coming back online
      setShowIndicator(true);
      setTimeout(() => {
        setShowIndicator(false);
        setWasOffline(false);
      }, 2000);
    }
  }, [isOnline, wasOffline]);

  if (!showIndicator) return null;

  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50
      ${isOnline 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
      }
      transition-all duration-300 ease-in-out
      ${showIndicator ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center space-x-2">
          {isOnline ? (
            <>
              <FaWifi className="text-lg animate-pulse" />
              <span className="text-sm font-medium">
                Bağlantı yeniden kuruldu
              </span>
            </>
          ) : (
            <>
              <FaWifiSlash className="text-lg" />
              <span className="text-sm font-medium">
                İnternet bağlantısı yok - Çevrimdışı modda çalışıyorsunuz
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfflineIndicator;
