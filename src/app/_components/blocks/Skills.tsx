import React from 'react';

const Skills: React.FC<any> = ({ block }) => {
  const { title, skills } = block;

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'beginner':
        return 'bg-blue-200';
      case 'intermediate':
        return 'bg-blue-400';
      case 'advanced':
        return 'bg-blue-600';
      case 'expert':
        return 'bg-blue-800';
      default:
        return 'bg-blue-400';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills?.map((category: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items?.map((skill: any, skillIndex: number) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm capitalize">
                        {skill.proficiency}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-full rounded-full ${getProficiencyColor(
                          skill.proficiency
                        )}`}
                        style={{
                          width:
                            skill.proficiency === 'beginner'
                              ? '25%'
                              : skill.proficiency === 'intermediate'
                              ? '50%'
                              : skill.proficiency === 'advanced'
                              ? '75%'
                              : '100%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;