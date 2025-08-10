import { motion } from 'motion/react';
import { Target, Calendar, Users, Trophy } from 'lucide-react';

const goals = [
  {
    icon: Target,
    number: "01",
    title: "Foundation Building",
    timeframe: "Months 1-2",
    deliverables: [
      "Educational content creation",
      "Platform setup and testing",
      "Community outreach planning",
      "Initial partnerships"
    ],
    color: "from-blue-500 to-teal-500"
  },
  {
    icon: Users,
    number: "02", 
    title: "Community Engagement",
    timeframe: "Months 2-4",
    deliverables: [
      "Launch educational workshops",
      "Social media campaigns",
      "Mentor program rollout",
      "Local meetup organization"
    ],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Calendar,
    number: "03",
    title: "Scale & Optimize",
    timeframe: "Months 4-5",
    deliverables: [
      "Expand multi-language content",
      "Gamification implementation",
      "Advanced tool training",
      "Cross-chain collaboration"
    ],
    color: "from-green-500 to-blue-500"
  },
  {
    icon: Trophy,
    number: "04",
    title: "Measure & Sustain",
    timeframe: "Month 6",
    deliverables: [
      "Impact assessment report",
      "Community feedback analysis",
      "Sustainability planning",
      "Knowledge transfer"
    ],
    color: "from-blue-500 to-purple-500"
  }
];

export function GoalsTimeline() {
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
            Goals & Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive 6-month roadmap with clear milestones, 
            deliverables, and measurable outcomes.
          </p>
        </motion.div>

        {/* Timeline connector line - hidden on mobile */}
        <div className="hidden lg:block relative mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 via-green-500 to-purple-500 rounded-full origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute -top-12 left-1/2 transform -translate-x-1/2"
              >
                <div className={`w-4 h-4 bg-gradient-to-r ${goal.color} rounded-full shadow-lg`} />
              </motion.div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group border border-slate-200 hover:border-teal-300">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${goal.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <goal.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <div className={`text-6xl bg-gradient-to-r ${goal.color} bg-clip-text text-transparent opacity-20 mb-2`}>
                    {goal.number}
                  </div>
                  
                  <h3 className="text-xl mb-2 text-slate-900">
                    {goal.title}
                  </h3>
                  
                  <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full inline-block">
                    {goal.timeframe}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-wide text-slate-500 mb-4">
                    Key Deliverables
                  </h4>
                  {goal.deliverables.map((deliverable, deliverableIndex) => (
                    <motion.div
                      key={deliverableIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + deliverableIndex * 0.1 + 0.5 
                      }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${goal.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {deliverable}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.8 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-6 border-t border-slate-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500">Progress</span>
                    <span className="text-xs text-slate-700">{index === 0 ? '25%' : index === 1 ? '50%' : index === 2 ? '75%' : '100%'}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 1) * 25}%` }}
                      transition={{ duration: 1.5, delay: index * 0.15 + 1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-slate-200">
            <h3 className="text-2xl mb-4 text-slate-900">
              Timeline Overview
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              This structured approach ensures steady progress while allowing for 
              flexibility and adaptation based on community feedback and emerging opportunities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl text-teal-600 mb-2">6</div>
                <div className="text-sm text-slate-600">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-blue-600 mb-2">16</div>
                <div className="text-sm text-slate-600">Key Deliverables</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-600 mb-2">4</div>
                <div className="text-sm text-slate-600">Major Milestones</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}