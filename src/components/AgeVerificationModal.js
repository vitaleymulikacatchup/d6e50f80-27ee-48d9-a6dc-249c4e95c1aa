import React from 'react';

const AgeVerificationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
        
        {/* Megogo mascot placeholder */}
        <div className="relative z-10 mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-16 h-16 bg-purple-400 rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <h2 className="text-white text-2xl font-bold mb-4 relative z-10">
          Підтвердження віку
        </h2>
        
        <p className="text-white/90 text-sm mb-8 leading-relaxed relative z-10">
          Продовжуючи користуватися MEGOGO, ви підтверджуєте, що вам виповнилося 21 рік, та погоджуєтеся із Угодою користувача та Політикою конфіденційності
        </p>
        
        <button 
          onClick={onClose}
          className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors relative z-10 w-full"
        >
          Підтверджую
        </button>
      </div>
    </div>
  );
};

export default AgeVerificationModal;