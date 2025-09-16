import { motion } from 'motion/react';
import { TrendingUp, Shield, Zap, Users, BarChart3, Activity, Target, ArrowUpRight, Star } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Participation",
    description: "More wallets and ADA actively participating in governance decisions",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Enhanced Decentralization", 
    description: "Broader distribution of voting power across the community",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Better Decision Quality",
    description: "More diverse perspectives leading to improved proposals and outcomes", 
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Stronger, more engaged Cardano community with shared ownership",
    gradient: "from-cyan-500 to-cyan-600"
  }
];

const keyMetrics = [
  {
    label: "Wallet Participation",
    current: 1.5,
    target: 15,
    unit: "%",
    description: "of Cardano wallets participate in governance voting",
    color: "from-red-500 to-red-600",
    icon: Activity
  },
  {
    label: "ADA Participation", 
    current: 10,
    target: 45,
    unit: "%",
    description: "of staked ADA participates in governance decisions",
    color: "from-orange-500 to-orange-600",
    icon: BarChart3
  }
];

const impactGoals = [
  { label: "Voter Growth", value: "10x", description: "Increase in active voters", color: "text-blue-400" },
  { label: "Engagement", value: "+850%", description: "Boost in participation", color: "text-purple-400" },
  { label: "Proposals", value: "+45%", description: "Quality improvement", color: "text-indigo-400" }
];

export function ImpactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-6 h-6 text-blue-400 mr-3" />
            <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
              Ecosystem Impact
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-8 text-white">
            Transforming Cardano's{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Democratic Future
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Creating lasting positive changes that strengthen the entire Cardano network 
            and empower every community member to shape our shared future.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Key Participation Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 dark:from-slate-800/70 dark:to-slate-900/70 rounded-3xl backdrop-blur-sm border border-slate-700/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <metric.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-1">{metric.label}</h3>
                        <p className="text-slate-400 text-sm">{metric.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl text-white mb-1">
                        {metric.current}
                        <span className="text-2xl text-slate-400">{metric.unit}</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        Target: {metric.target}{metric.unit}
                      </div>
                    </div>
                  </div>

                  {/* Progress Visualization */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Current Progress</span>
                      <span>{Math.round((metric.current / metric.target) * 100)}% of target</span>
                    </div>
                    
                    <div className="relative h-4 bg-slate-700/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(metric.current / metric.target) * 100}%` }}
                        transition={{ duration: 2, delay: 0.6 + index * 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${metric.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>

                    {/* Target Indicator */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-slate-500">
                        <Target className="w-4 h-4 mr-2" />
                        <span>Goal: {metric.target}{metric.unit}</span>
                      </div>
                      <div className="flex items-center text-sm text-blue-400">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        <span>
                          {((metric.target / metric.current) - 1).toFixed(1)}x growth needed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Goals Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {impactGoals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/70 to-slate-900/70 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                
                <div className="relative p-8 text-center">
                  <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${goal.color}`}>
                    {goal.value}
                  </div>
                  <h4 className="text-lg text-slate-300 mb-2">{goal.label}</h4>
                  <p className="text-sm text-slate-500">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/40 dark:to-slate-900/40 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-lg group-hover:shadow-xl transition-all duration-500" />
                
                <div className="relative p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl backdrop-blur-sm border border-slate-700/30 shadow-2xl" />
            
            <div className="relative p-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl text-white">Long-term Vision</h4>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Creating a self-sustaining culture of participation that continues to grow 
                and strengthen Cardano's democratic governance for generations to come.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Building the Future Together</span>
                <Star className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-2 h-2 bg-blue-400/20 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}