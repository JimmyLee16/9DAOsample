import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ExternalLink, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function LatestArticles() {
  const [isLoading, setIsLoading] = useState(true);

  // Mock articles data (in a real implementation, this would come from an API)
  const articles = [
    {
      title: "Foreword",
      excerpt: "From my hands-on experience within Cardano, I have come to realize that decentralized governance is not only a core pillar of any blockchain ecosystem but also one of its most frequent activities. It manifests across all levels:",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Education",
      url: "https://jimmy-lee.gitbook.io/9daosample"
    },
    {
      title: "What is DAO",
      excerpt: "A Decentralized Autonomous Organization (DAO) is an organization represented by transparent rules encoded as a computer program",
      date: "2024-12-10",
      readTime: "8 min read",
      category: "Base knowledge",
      url: "https://jimmy-lee.gitbook.io/9daosample/articles/singularity-dao"
    },

    {
      title: "Cardano blockchain ecosystem constitution",
      excerpt: "With these purposes in mind, we, the Cardano Community, affirm our intention to abide by this Constitution in order to participate in the governance of the Cardano Blockchain ecosystem.",
      date: "2024-12-15",
      readTime: "60 min read",
      category: "Base knowledge",
      url: "https://jimmy-lee.gitbook.io/9daosample/knowledge-base/cardano/cardano-constitution"
    },
    {
      title: "SingularityDAO: Revolutionizing DeFi with AI-Powered Investment Strategies",
      excerpt: "Explore how SingularityDAO is transforming decentralized finance through advanced artificial intelligence and machine learning algorithms to optimize investment returns.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Dapp",
      url: "https://jimmy-lee.gitbook.io/9daosample/articles/singularity-dao"
    },


  ];

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
              Knowledge Hub
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white">
            Latest Articles
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, research, and developments in Cardano governance and DeFi innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Featured Article Iframe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-[600px] p-6 bg-white dark:bg-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Featured Article</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                  onClick={() => window.open('https://jimmy-lee.gitbook.io/9daosample/articles/singularity-dao', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Full Article
                </Button>
              </div>
              
              <div className="h-[calc(100%-60px)] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-600">
                {isLoading && (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                  </div>
                )}
                <iframe
                  src="https://jimmy-lee.gitbook.io/9daosample/articles/singularity-dao"
                  className="w-full h-full"
                  title="SingularityDAO Article"
                  onLoad={() => setIsLoading(false)}
                  style={{ display: isLoading ? 'none' : 'block' }}
                />
                
                {/* Fallback content if iframe fails to load */}
                <div className={`p-6 h-full overflow-y-auto ${isLoading ? 'hidden' : 'block'}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-3 text-slate-900 dark:text-white">
                        SingularityDAO: Revolutionizing DeFi with AI
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          December 15, 2024
                        </div>
                        <span>8 min read</span>
                      </div>
                    </div>
                    
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p>
                        SingularityDAO represents a groundbreaking approach to decentralized finance, 
                        leveraging artificial intelligence and machine learning to optimize investment 
                        strategies and maximize returns for participants.
                      </p>
                      
                      <h4>Key Innovation Areas</h4>
                      <ul>
                        <li>AI-powered portfolio management</li>
                        <li>Dynamic asset allocation strategies</li>
                        <li>Risk assessment and mitigation</li>
                        <li>Automated trading optimization</li>
                      </ul>
                      
                      <p>
                        The integration of advanced AI technologies with DeFi protocols opens up 
                        new possibilities for creating more efficient, responsive, and profitable 
                        investment strategies that can adapt to market conditions in real-time.
                      </p>
                      
                      <h4>Community Impact</h4>
                      <p>
                        By democratizing access to sophisticated AI-driven investment tools, 
                        SingularityDAO is helping to level the playing field between institutional 
                        and retail investors in the cryptocurrency space.
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
                        onClick={() => window.open('https://jimmy-lee.gitbook.io/9daosample/articles/singularity-dao', '_blank')}
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Article List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-[600px] p-6 bg-white dark:bg-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-slate-900 dark:text-white">Recent Articles</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="space-y-6 h-[calc(100%-80px)] overflow-y-auto pr-2">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => window.open(article.url, '_blank')}
                  >
                    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-500 hover:shadow-lg transition-all duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-700">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full">
                          {article.category}
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                      
                      <h4 className="text-lg mb-2 text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border-teal-200 dark:border-teal-700">
            <h3 className="text-2xl mb-4 text-slate-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Subscribe to receive the latest articles and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8">
                Subscribe
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}