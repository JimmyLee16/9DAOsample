import { motion } from 'motion/react';
import { DollarSign, Target, CheckCircle, Calendar, Coins } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: "Milestone 1",
    amount: 5675,
    description: "Research & making plan",
    icon: Target,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Milestone 2", 
    amount: 3900,
    description: "Deployment of set 1",
    icon: CheckCircle,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Milestone 3",
    amount: 3900, 
    description: "Deployment of set 2",
    icon: Calendar,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 4,
    title: "Milestone 4",
    amount: 3900,
    description: "Deployment of set 3",
    icon: Coins,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 5,
    title: "Report & Close out ",
    amount: 2125,
    description: "Launch & Documentation",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600"
  }
];

const totalBudget = milestones.reduce((sum, milestone) => sum + milestone.amount, 0);

export function BudgetSection() {
  return (
    <section id="budget" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
            <span className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
              Project Budget
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white">
            Funding{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Breakdown
            </span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Transparent allocation of resources across key development phases
          </p>
        </motion.div>

        {/* Total Budget Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-sm border border-blue-200/50 dark:border-slate-700/50 shadow-2xl" />
            
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Coins className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl text-slate-900 dark:text-white">Total Project Budget</h3>
              </div>
              
              <div className="text-6xl md:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {totalBudget.toLocaleString()}
              </div>
              
              <div className="text-xl text-slate-600 dark:text-slate-400">
                ADA
              </div>
              
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  5 Milestone Structure
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Milestones Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group ${milestone.id === 5 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 rounded-2xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    {milestone.description}
                  </p>
                  
                  {/* Amount */}
                  <div className="space-y-2">
                    <div className="text-3xl text-slate-900 dark:text-white">
                      {milestone.amount.toLocaleString()}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      ADA
                    </div>
                  </div>
                  
                  {/* Percentage of total */}
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                    <span className="text-xs text-slate-600 dark:text-slate-300">
                      {((milestone.amount / totalBudget) * 100).toFixed(1)}% of total
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}