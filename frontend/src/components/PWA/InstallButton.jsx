import React, { useState } from 'react';
import { FaDownload, FaCheck, FaTimes, FaMobile, FaDesktop } from 'react-icons/fa';
import { usePWA } from '../../hooks/usePWA';
import { useMobile } from '../../hooks/useResponsive';

const InstallButton = ({ 
  variant = 'default', 
  size = 'md', 
  showText = true,
  className = '',
  onInstall,
  onCancel 
}) => {
  const { isInstallable, isInstalled, installPWA } = usePWA();
  const { isMobile } = useMobile();
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async () => {
    if (!isInstallable) return;
    
    setIsInstalling(true);
    try {
      const success = await installPWA();
      if (success) {
        onInstall?.();
      }
    } catch (error) {
      console.error('Installation failed:', error);
    } finally {
      setIsInstalling(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // Don't show if already installed or not installable
  if (isInstalled || !isInstallable) {
    return null;
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    default: 'bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white hover:from-[#0a3d5f] hover:to-[#1e9bc4]',
    outline: 'border-2 border-[#0f4f78] text-[#0f4f78] hover:bg-[#0f4f78] hover:text-white',
    ghost: 'text-[#0f4f78] hover:bg-[#0f4f78]/10',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={handleInstall}
        disabled={isInstalling}
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          rounded-lg font-semibold transition-all duration-200
          flex items-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-95 transform
          shadow-lg hover:shadow-xl
          ${isMobile ? 'touch-manipulation' : ''}
        `}
      >
        {isInstalling ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            {showText && 'Yükleniyor...'}
          </>
        ) : (
          <>
            {isMobile ? <FaMobile className="text-lg" /> : <FaDesktop className="text-lg" />}
            {showText && 'Uygulamayı Yükle'}
          </>
        )}
      </button>
      
      {onCancel && (
        <button
          onClick={handleCancel}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Kapat"
        >
          <FaTimes className="text-sm" />
        </button>
      )}
    </div>
  );
};

export default InstallButton;
