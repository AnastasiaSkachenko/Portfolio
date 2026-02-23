import { Code2, Database, Cloud, Layout, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: Layout,
      title: 'Frontend',
      description: 'Building responsive and interactive user interfaces',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      icon: Code2,
      title: 'Backend',
      description: 'Creating robust server-side applications',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
    },
    {
      icon: Database,
      title: 'Database',
      description: 'Managing and optimizing data storage',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Drizzle', 'Supabase']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Deploying and scaling applications',
      skills: ['Docker', 'CI/CD', 'GitHub Actions', 'Kubernetes']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative isolate">
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive toolkit for building modern web applications from frontend to deployment
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6 ">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-black">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div 
                          className="p-2 bg-blue-100 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
      <img className="absolute top-25 w-55 z-0" src="src/assets/blob-1.gif" />
      <img className="absolute bottom-15 right-5 w-55 z-0" src="src/assets/blob-2.gif" />

    </section>
  );
}