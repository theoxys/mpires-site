import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  block: {
    title: string;
    items: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
      technologies?: Array<{
        name: string;
      }>;
    }>;
  };
}

const Timeline: React.FC<TimelineProps> = ({ block }) => {
  const { title, items } = block;

  return (
    <section className="py-20 bg-gray-50">
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
        <div className="max-w-4xl mx-auto space-y-8">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.company} • {item.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  {item.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;