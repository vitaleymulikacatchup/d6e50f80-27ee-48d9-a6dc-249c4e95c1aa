import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal';

function App() {
  const [showAgeModal, setShowAgeModal] = useState(true);

  const contentSections = [
    {
      title: 'Зараз на телебаченні',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Програма ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Зараз'
      }))
    },
    {
      title: 'Прем\'єри в стрічці в кінотеатрі',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Фільм ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: '2024'
      }))
    },
    {
      title: 'Прем\'єри',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Прем\'єра ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Новинка'
      }))
    },
    {
      title: 'У жанрі детектив',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Детектив ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Детектив'
      }))
    },
    {
      title: 'Топ серіали MEGOGO',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Серіал ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Серіал'
      }))
    },
    {
      title: 'Топ серіали Netflix',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Netflix ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Netflix'
      }))
    },
    {
      title: 'Топ фільми в кінотеатрі',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Топ фільм ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Кінотеатр'
      }))
    },
    {
      title: 'Що дивити сьогодні',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Рекомендація ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Рекомендовано'
      }))
    },
    {
      title: 'Серіали HBO',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `HBO ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'HBO'
      }))
    },
    {
      title: 'Популярні серіали українською',
      items: Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Український серіал ${i + 1}`,
        image: '/images/placeholder.jpg',
        meta: 'Українською'
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-megogo-dark">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {contentSections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </main>
      
      <Footer />
      
      {showAgeModal && (
        <AgeVerificationModal onClose={() => setShowAgeModal(false)} />
      )}
    </div>
  );
}

export default App;