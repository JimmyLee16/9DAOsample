import { motion } from 'motion/react';
import { AlertTriangle, Users, Wallet, CheckCircle, XCircle, ToggleLeft, ToggleRight, GitBranch, FileSearch, Database } from 'lucide-react';
import { useState } from 'react';

const prosData = [
  "Independent individuals can come together to act as a single entity, enabling fair and decentralized governance.",
  "More people get involved in planning, strategy, and operations.",
  "Since votes are recorded publicly on the blockchain, token holders are encouraged to act more responsibly.",
  "DAO members feel empowered to collaborate with others who share the same goals within a common community."
];

const consData = [
  "Decisions take longer because multiple people need to vote.",
  "User education is required, as participants have varying levels of knowledge and understanding.",
  "Collecting votes is time-consuming due to decentralization.",
  "Security risks (e.g., exploits or loss of funds) if the DAO is not properly designed and maintained."
];

export function ProblemStatement() {
  const [showPros, setShowPros] = useState(true);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-6"
            >
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white">
              The Governance Gap
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Despite Cardano's robust governance infrastructure, community participation remains 
              critically low. This undermines the democratic potential of our ecosystem and 
              concentrates decision-making power among a small group of participants.
            </p>
          </div>

          {/* Statistics Infographic */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-500/30">
                <div className="flex items-center mb-4">
                  <Wallet className="w-8 h-8 text-red-600 dark:text-red-400 mr-4" />
                  <h3 className="text-2xl text-slate-900 dark:text-white">Wallet Participation</h3>
                </div>
                <div className="text-5xl mb-2 text-red-600 dark:text-red-400">1.5%</div>
                <p className="text-slate-600 dark:text-slate-300">of Cardano wallets participate in governance voting</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-500/30">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mr-4" />
                  <h3 className="text-2xl text-slate-900 dark:text-white">ADA Participation</h3>
                </div>
                <div className="text-5xl mb-2 text-orange-600 dark:text-orange-400">10%</div>
                <p className="text-slate-600 dark:text-slate-300">of staked ADA participates in governance decisions</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Visual Representation */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
                <h4 className="text-xl mb-8 text-center text-slate-900 dark:text-white">Governance Participation Visualization</h4>
                
                {/* Wallet Participation Visual */}
                <div className="mb-8">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Wallet Participation (1.5%)</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-4 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "1.5%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    />
                  </div>
                </div>

                {/* ADA Participation Visual */}
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">ADA Participation (10%)</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-4 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "10%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Network Effect Illustration */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-600">
                  <div className="grid grid-cols-10 gap-2">
                    {[...Array(100)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, backgroundColor: '#e2e8f0' }}
                        whileInView={{ 
                          scale: 1, 
                          backgroundColor: i < 10 ? '#f59e0b' : (document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0') 
                        }}
                        transition={{ 
                          duration: 0.1, 
                          delay: 0.8 + (i * 0.01) 
                        }}
                        viewport={{ once: true }}
                        className="aspect-square rounded-sm"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                    Each square represents 1% of staked ADA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Governance Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl mb-6 text-slate-900 dark:text-white">
                Governance Complexity Challenge
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Beyond participation rates, the governance landscape faces structural challenges that limit effective decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-500/30"
              >
                <div className="flex items-center mb-4">
                  <GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-xl text-slate-900 dark:text-white">Complex Variations</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Decentralized governance is complex, varying by project type and scale (e.g., L1 vs. dApp).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-100 dark:border-purple-500/30"
              >
                <div className="flex items-center mb-4">
                  <FileSearch className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                  <h4 className="text-xl text-slate-900 dark:text-white">Scattered Information</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  DAO documents are scattered and often incomplete, making informed participation difficult.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-500/30"
              >
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h4 className="text-xl text-slate-900 dark:text-white">No Central Source</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  No single source provides structured analysis and comparison of governance models.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Pros and Cons Tables with Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl mb-4 text-slate-900 dark:text-white">
                Decentralized Governance Analysis
              </h3>
              
              {/* Toggle Switch */}
              <div className="flex items-center justify-center space-x-4">
                <span className={`transition-colors duration-300 ${showPros ? 'text-green-600 dark:text-green-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  Pros
                </span>
                <motion.button
                  onClick={() => setShowPros(!showPros)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center"
                >
                  {showPros ? (
                    <ToggleLeft className="w-12 h-6 text-green-500 dark:text-green-400" />
                  ) : (
                    <ToggleRight className="w-12 h-6 text-red-500 dark:text-red-400" />
                  )}
                </motion.button>
                <span className={`transition-colors duration-300 ${!showPros ? 'text-red-600 dark:text-red-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  Cons
                </span>
              </div>
            </div>

            {/* Animated Table Content */}
            <motion.div
              key={showPros ? 'pros' : 'cons'}
              initial={{ opacity: 0, x: showPros ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-center mb-6">
                {showPros ? (
                  <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400 mr-3" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-500 dark:text-red-400 mr-3" />
                )}
                <h4 className="text-xl text-slate-900 dark:text-white">
                  {showPros ? 'Advantages' : 'Disadvantages'} of Decentralized Governance
                </h4>
              </div>

              <div className="space-y-4">
                {(showPros ? prosData : consData).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      showPros 
                        ? 'bg-green-100 dark:bg-green-900/30' 
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      {showPros ? (
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}