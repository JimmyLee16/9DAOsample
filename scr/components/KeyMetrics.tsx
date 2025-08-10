import { motion } from 'motion/react';
import { Users, Rocket, Eye, Handshake } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: "5,000+",
    label: "Participants using DAO tools",
    description: "Community members actively engaged with governance platforms",
    color: "from-blue-500 to-teal-500"
  },
  {
    icon: Rocket,
    value: "25+",
    label: "Cardano projects introduced",
    description: "New projects onboarded to governance participation",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Eye,
    value: "100K+",
    label: "Article & video views",
    description: "Educational content consumption across all channels",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: Handshake,
    value: "15+",
    label: "Collaborations achieved",
    description: "Strategic partnerships with community organizations",
    color: "from-blue-500 to-purple-500"
  }
];

export function KeyMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Key Metrics & Expected Outcomes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Measurable targets that demonstrate the impact and success 
            of our governance education initiative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg hover:shadow-teal-100 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className={`text-4xl lg:text-5xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">
                    {metric.label}
                  </h3>
                </motion.div>

                <p className="text-slate-600 leading-relaxed">
                  {metric.description}
                </p>

                {/* Progress indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="mt-6"
                >
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${75 + (index * 5)}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${metric.color} rounded-full origin-left`}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Progress toward target</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-200 max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4 text-slate-900">
              Measuring Success
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              These metrics are tracked continuously throughout the initiative, 
              with monthly progress reports shared with the community. Our success 
              is measured not just in numbers, but in the quality of engagement 
              and the long-term sustainability of increased participation.
            </p>
            
            {/* Mini progress dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Engagement Rate', 'Retention Rate', 'Quality Score', 'Impact Score'].map((label, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl text-teal-600 mb-1">{85 + i * 2}%</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}