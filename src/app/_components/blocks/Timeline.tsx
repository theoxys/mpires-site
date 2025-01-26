import React from 'react';

const Timeline: React.FC<any> = ({ block }) => {
  const { title, items } = block;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className="max-w-4xl mx-auto">
          {items?.map((item: any, index: number) => (
            <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.company}</p>
                <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {item.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech: any, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;