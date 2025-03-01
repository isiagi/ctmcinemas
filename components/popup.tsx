/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const PopupMessage = ({ color, message, onClose }: any) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000); // Auto-hide after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`fixed top-5 right-5 border-0 border-l-2 ${color === 'success' ? 'border-green-600 bg-green-200 text-green-900' : 'border-red-600 bg-red-200 text-red-900'} px-6 py-3 rounded-sm shadow-lg transition-all animate-fadeIn z-50`}>
      {message}
    </div>
  );
};

export default PopupMessage;
