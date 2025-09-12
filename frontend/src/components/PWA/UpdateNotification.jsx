import React, { useState, useEffect } from 'react';
import { FaSync, FaTimes, FaDownload, FaCheck } from 'react-icons/fa';
import { usePWA } from '../../hooks/usePWA';
import { toast } from 'react-hot-toast';

const UpdateNotification = () => {
  const { updateAvailable, updatePWA } = usePWA();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (updateAvailable && !isDismissed) {
      toast.custom((t) => (
        <div className={`
          ${t.visible ? 'animate-slide-down' : 'animate-slide-up'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5
        `}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaSync className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Güncelleme Mevcut
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Yeni özellikler ve iyileştirmeler için uygulamayı güncelleyin.
                </p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isUpdating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Güncelleniyor...
                  </>
                ) : (
                  <>
                    <FaDownload className="h-4 w-4 mr-2" />
                    Güncelle
                  </>
                )}
              </button>
              <button
                onClick={handleDismiss}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaTimes className="h-4 w-4 mr-2" />
                Daha Sonra
              </button>
            </div>
          </div>
        </div>
      ), {
        duration: Infinity,
        position: 'top-center',
      });
    }
  }, [updateAvailable, isDismissed]);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const success = await updatePWA();
      if (success) {
        toast.success('Uygulama güncellendi!', {
          icon: <FaCheck className="text-green-500" />,
        });
        setIsDismissed(true);
      } else {
        toast.error('Güncelleme başarısız oldu');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Güncelleme sırasında hata oluştu');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    toast.dismiss();
  };

  // Reset dismissed state when new update is available
  useEffect(() => {
    if (updateAvailable) {
      setIsDismissed(false);
    }
  }, [updateAvailable]);

  return null; // This component only shows toast notifications
};

export default UpdateNotification;
