import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillsProps {
  block: {
    title: string;
    skills: Array<{
      category: string;
      items: Array<{
        name: string;
        proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      }>;
    }>;
  };
}

const getProficiencyValue = (proficiency: string): number => {
  switch (proficiency) {
    case 'beginner':
      return 25;
    case 'intermediate':
      return 50;
    case 'advanced':
      return 75;
    case 'expert':
      return 100;
    default:
      return 0;
  }
};

const Skills: React.FC<SkillsProps> = ({ block }) => {
  const { title, skills } = block;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items?.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground capitalize">
                          {skill.proficiency}
                        </span>
                      </div>
                      <Progress
                        value={getProficiencyValue(skill.proficiency)}
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;