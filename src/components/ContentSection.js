import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContentSection = ({ title, items }) => {
  return (
    <section className="mb-12">
      <div className="section-title">
        <h2>{title}</h2>
        <button className="text-megogo-text-gray hover:text-white transition-colors flex items-center">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.id} className="content-card">
            <div className="aspect-[3/4] bg-megogo-light-gray flex items-center justify-center">
              <div className="w-12 h-12 bg-megogo-border rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-megogo-text-gray rounded-full"></div>
              </div>
            </div>
            <div className="content-card-info">
              <h3 className="content-card-title">{item.title}</h3>
              <div className="content-card-meta">{item.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;