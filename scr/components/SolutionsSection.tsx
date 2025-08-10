import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Users, Megaphone } from 'lucide-react';

const solutions = [
  {
    icon: GraduationCap,
    title: "Education & Awareness",
    points: [
      "Comprehensive governance tutorials and guides",
      "Interactive workshops on Catalyst voting",
      "Multi-language educational content"
    ],
    gradient: "from-blue-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Community Building",
    points: [
      "Local governance meetups and events",
      "Mentor-mentee governance programs",
      "Cross-cultural collaboration initiatives"
    ],
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Megaphone,
    title: "Outreach & Engagement",
    points: [
      "Social media awareness campaigns",
      "Influencer and thought leader partnerships",
      "Gamified participation incentives"
    ],
    gradient: "from-green-500 to-blue-500"
  }
];

export function SolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Our Comprehensive Solution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A three-pronged approach to dramatically increase governance participation 
            through education, community building, and strategic outreach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-8 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-center mb-6"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4 text-slate-900">
                    {solution.title}
                  </h3>
                </motion.div>

                <ul className="space-y-4">
                  {solution.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (index * 0.2) + (pointIndex * 0.1) + 0.3 
                      }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative Bottom Element */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: (index * 0.2) + 0.5 }}
                  viewport={{ once: true }}
                  className={`w-full h-1 bg-gradient-to-r ${solution.gradient} rounded-full mt-8 origin-left`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-slate-900">
              Integrated Approach
            </h3>
            <p className="text-slate-600 leading-relaxed">
              These solutions work synergistically to create a comprehensive ecosystem 
              that not only educates but also motivates and supports ongoing participation 
              in Cardano's governance processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}