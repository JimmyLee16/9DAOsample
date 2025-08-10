import { motion } from 'motion/react';
import { AlertTriangle, Users, Wallet } from 'lucide-react';

export function ProblemStatement() {
  return (
    <section className="py-20 bg-white">
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
              className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6"
            >
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
              The Governance Gap
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Despite Cardano's robust governance infrastructure, community participation remains 
              critically low. This undermines the democratic potential of our ecosystem and 
              concentrates decision-making power among a small group of participants.
            </p>
          </div>

          {/* Statistics Infographic */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                <div className="flex items-center mb-4">
                  <Wallet className="w-8 h-8 text-red-600 mr-4" />
                  <h3 className="text-2xl text-slate-900">Wallet Participation</h3>
                </div>
                <div className="text-5xl mb-2 text-red-600">1.5%</div>
                <p className="text-slate-600">of Cardano wallets participate in governance voting</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-orange-600 mr-4" />
                  <h3 className="text-2xl text-slate-900">ADA Participation</h3>
                </div>
                <div className="text-5xl mb-2 text-orange-600">10%</div>
                <p className="text-slate-600">of staked ADA participates in governance decisions</p>
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
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h4 className="text-xl mb-8 text-center text-slate-900">Governance Participation Visualization</h4>
                
                {/* Wallet Participation Visual */}
                <div className="mb-8">
                  <p className="text-sm text-slate-600 mb-3">Wallet Participation (1.5%)</p>
                  <div className="w-full bg-slate-200 rounded-full h-4 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "1.5%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-slate-700">98.5% Not Participating</span>
                    </div>
                  </div>
                </div>

                {/* ADA Participation Visual */}
                <div>
                  <p className="text-sm text-slate-600 mb-3">ADA Participation (10%)</p>
                  <div className="w-full bg-slate-200 rounded-full h-4 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "10%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-slate-700">90% Not Participating</span>
                    </div>
                  </div>
                </div>

                {/* Network Effect Illustration */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="grid grid-cols-10 gap-2">
                    {[...Array(100)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, backgroundColor: '#e2e8f0' }}
                        whileInView={{ 
                          scale: 1, 
                          backgroundColor: i < 10 ? '#f59e0b' : '#e2e8f0' 
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
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Each square represents 1% of staked ADA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}