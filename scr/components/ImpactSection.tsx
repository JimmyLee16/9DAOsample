import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, Shield, Zap, Vote, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Participation",
    description: "More wallets and ADA actively participating in governance decisions"
  },
  {
    icon: Shield,
    title: "Enhanced Decentralization",
    description: "Broader distribution of voting power across the community"
  },
  {
    icon: Zap,
    title: "Better Decision Quality",
    description: "More diverse perspectives leading to improved proposals and outcomes"
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Stronger, more engaged Cardano community with shared ownership"
  }
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            How This Benefits the{' '}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Cardano Ecosystem
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our initiative creates lasting positive changes that strengthen 
            the entire Cardano network and community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-white group-hover:text-teal-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 p-6 rounded-2xl border border-teal-500/20 mt-8"
            >
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-teal-400 mr-3" />
                <h4 className="text-lg text-white">Long-term Vision</h4>
              </div>
              <p className="text-slate-300">
                Creating a self-sustaining culture of participation that continues 
                to grow and strengthen Cardano's democratic governance for years to come.
              </p>
            </motion.div>
          </motion.div>

          {/* Voting Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl border border-slate-600">
              <h4 className="text-xl text-white mb-8 text-center">
                Governance Participation Growth
              </h4>

              {/* Before and After Comparison */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-300">Before Initiative</span>
                    <span className="text-red-400">1.5% Participation</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "1.5%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-300">After Initiative</span>
                    <span className="text-teal-400">Target: 15% Participation</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Voting Nodes Visualization */}
              <div className="mt-8 relative">
                <div className="grid grid-cols-8 gap-3">
                  {[...Array(64)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, backgroundColor: '#475569' }}
                      whileInView={{ 
                        scale: 1, 
                        backgroundColor: i < 10 ? '#0f766e' : (i < 20 ? '#0891b2' : '#475569')
                      }}
                      transition={{ 
                        duration: 0.2, 
                        delay: 0.8 + (i * 0.02) 
                      }}
                      viewport={{ once: true }}
                      className="aspect-square rounded-full"
                    />
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-center space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mr-2" />
                    <span className="text-xs text-slate-400">Active Voters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-2" />
                    <span className="text-xs text-slate-400">New Participants</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-slate-500 rounded-full mr-2" />
                    <span className="text-xs text-slate-400">Potential</span>
                  </div>
                </div>
              </div>

              {/* Floating Vote Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <Vote className="w-4 h-4 text-teal-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}