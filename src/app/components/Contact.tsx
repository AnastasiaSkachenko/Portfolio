import { Mail, MapPin, Phone, LucideIcon, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent} from './ui/card';
import { motion } from 'motion/react';

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  href?: string
}

export const Contact = () =>  {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! (This is a demo)');
  };

  const contactInfo: ContactInfo[] = [
    { icon: Mail, title: 'Email', content: 'skachenkoa@gmail.com' },
    { icon: Phone, title: 'Phone', content: '+48 73 359 68 94' },
    { icon: MapPin, title: 'Location', content: 'Stockholm, Sweden'},
    { icon: Github, title: 'Github', content: 'AnastasiaSkachenko', href: "https://github.com/AnastasiaSkachenko"},
    { icon: Linkedin, title: 'LinkedIn', content: 'Anastasiia Skachenko', href: "https://www.linkedin.com/in/anastasiia-skachenko/"},
    { icon: Send, title: "Telegram", content: "@mngi_s" }
    
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>
        
        <div >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 ">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <motion.div 
                            className="p-2 bg-blue-100 rounded-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          <div>
                            <h3 className="mb-1">{item.title}</h3>
                            {
                              item.href ? (
                                <a href={item.href} className="text-sm text-gray-600">{item.content}</a>
                              ) : (
                                <p className="text-sm text-gray-600">{item.content}</p>
                              )
                            }
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}