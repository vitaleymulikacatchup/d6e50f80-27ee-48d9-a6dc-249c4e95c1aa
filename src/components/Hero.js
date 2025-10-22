import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
              ЕКСКЛЮЗИВНО
            </div>
            
            <div className="text-lg text-gray-300 mb-2">
              22:00, 22 жовтня | Студія 21:00
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Реал Мадрид
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8">
              {/* Real Madrid Logo */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">RM</span>
                </div>
              </div>
              
              <div className="text-6xl font-bold text-white">VS</div>
              
              {/* Juventus Logo */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Дивитися зараз
              </button>
              <button className="btn-secondary">
                Додати в список
              </button>
            </div>
          </div>
          
          {/* Right Content - Players */}
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Player Images Placeholder */}
              <div className="relative">
                <div className="w-48 h-64 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg mr-4 transform rotate-3"></div>
                <div className="w-48 h-64 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg absolute top-0 left-8 transform -rotate-3"></div>
              </div>
            </div>
            
            {/* Champions League Logo */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="text-blue-900 font-bold text-xs text-center">
                <div>UEFA</div>
                <div>CL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;