import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-megogo-gray mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Користувачам і партнерам</h3>
            <ul className="space-y-2 text-megogo-text-gray text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Все про передплати</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Програма лояльності</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Активувати промокод</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Угода користувача</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доступність</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Розваженню MEGOGO разом</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Спосіб оплати</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансії</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MEGOGO BOOKS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Листівки близьким на MEGOGO</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Партнери</h3>
            <ul className="space-y-2 text-megogo-text-gray text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Вихідні</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Структура</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гайдлайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Передплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Співпраця</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Додати</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Партнери</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дистрибуція передплат</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Підтримка користувачів</h3>
            <ul className="space-y-2 text-megogo-text-gray text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Усі контакти</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Питання та відповіді</a></li>
            </ul>
            
            <div className="mt-8">
              <div className="text-white text-2xl font-bold mb-2">0 800 60 12 34</div>
              <div className="text-megogo-text-gray text-sm mb-1">За дзвінки мобільного оператора може стягуватися плата</div>
              <div className="text-megogo-text-gray text-sm mb-1">+380 93 555 51 25</div>
              <div className="text-megogo-text-gray text-sm mb-4">+380 67 555 51 25</div>
              <div className="text-megogo-text-gray text-sm">support@megogo.net</div>
            </div>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Наші застосунки</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-megogo-light-gray rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-megogo-text-gray rounded"></div>
                </div>
                <span className="text-megogo-text-gray text-sm">Download for Smart TV</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-megogo-light-gray rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-megogo-text-gray rounded"></div>
                </div>
                <span className="text-megogo-text-gray text-sm">Download on the App Store</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-megogo-light-gray rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-megogo-text-gray rounded"></div>
                </div>
                <span className="text-megogo-text-gray text-sm">Get it on Google Play</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-megogo-light-gray rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-megogo-text-gray rounded"></div>
                </div>
                <span className="text-megogo-text-gray text-sm">Download on the AppGallery</span>
              </div>
            </div>
            
            <h3 className="text-white font-semibold mb-4">Ми в соцмережах</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <Facebook size={16} className="text-megogo-text-gray" />
              </a>
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <Instagram size={16} className="text-megogo-text-gray" />
              </a>
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <MessageCircle size={16} className="text-megogo-text-gray" />
              </a>
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <MessageCircle size={16} className="text-megogo-text-gray" />
              </a>
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <MessageCircle size={16} className="text-megogo-text-gray" />
              </a>
              <a href="#" className="w-8 h-8 bg-megogo-light-gray rounded-full flex items-center justify-center hover:bg-megogo-border transition-colors">
                <Youtube size={16} className="text-megogo-text-gray" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-megogo-border mt-12 pt-8 text-center">
          <div className="text-megogo-text-gray text-sm mb-4">
            © 2025 MEGOGO. Всі права захищені.
          </div>
          <div className="w-8 h-8 bg-megogo-light-gray rounded mx-auto"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;