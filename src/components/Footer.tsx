import { motion } from 'motion/react';
import { MessageCircle, Facebook, Youtube, ExternalLink, Mail, Globe } from 'lucide-react';

const socialLinks = [
  {
    icon: MessageCircle,
    name: 'Telegram',
    url: 'https://t.me/ADA_VIET',
    color: 'hover:text-blue-400'
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/groups/cardanoviet',
    color: 'hover:text-blue-600'
  },
  {
    icon: Youtube,
    name: 'YouTube',
    url: 'https://www.youtube.com/@vcoincheck',
    color: 'hover:text-red-500'
  },
  {
    icon: Mail,
    name: 'Email',
    url: 'mailto:vietcoreteam@gmail.com', // Email phải dùng mailto:
    color: 'hover:text-green-500'
  }
];

const quickLinks = [
  { name: 'Full Proposal', url: 'https://jimmy-lee.gitbook.io/9daosample/' },
  { name: 'Governance Guide', url: 'https://jimmy-lee.gitbook.io/9daosample/reference/cardano-constitution' },
  { name: 'Community Forum', url: 'https://forum.cardano.org/' },
  { name: 'Project Catalyst', url: 'https://projectcatalyst.io' }
];

export default function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-4 py-3 rounded-lg border border-slate-600 text-slate-200 transition-colors duration-300 ${link.color}`}
          >
            <Icon className="mr-2 h-5 w-5" />
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-xl text-white">Cardano Governance Initiative</span>
            </div>

            <h3 className="text-2xl leading-tight">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Building the Future of Cardano Governance Together
              </span>
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Empowering community participation through education, 
              collaboration, and innovative engagement strategies.
            </p>

            {/* Catalyst Proposal key search */}
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Key search: 9 DAO sample</p>
                  <p className="text-teal-400 font-mono">ID: 0198ae22-46be-7f98-9fd9-596dcab350ea</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Additional Resources */}
            <div className="mt-8">
              <h5 className="text-sm uppercase tracking-wide text-slate-500 mb-4">Resources</h5>
              <div className="space-y-2">
                <a
                  href="https://forum.cardano.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Cardano Official
                </a>
                <a
                  href="https://projectcatalyst.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Project Catalyst
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6 text-white">Connect With Us</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 group ${social.color}`}
                >
                  <social.icon className="w-5 h-5 mr-3 text-slate-400 group-hover:text-current transition-colors duration-300" />
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Community Stats */}
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h5 className="text-sm text-slate-400 mb-3">Community Impact</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Active Supporters</span>
                  <span className="text-teal-400 text-sm">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Proposal Views</span>
                  <span className="text-blue-400 text-sm">15,923</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Engagement Rate</span>
                  <span className="text-green-400 text-sm">87%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 text-sm">
              © 2025 Cardano Governance Education Initiative. Built with ❤️ for the Cardano community.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="hello" className="text-slate-500 hover:text-slate-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="hello" className="text-slate-500 hover:text-slate-300 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="hello" className="text-slate-500 hover:text-slate-300 transition-colors duration-300 text-sm">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Powered by notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-slate-600 text-xs">
              Powered by the Cardano community • Built for transparent governance • Funded through Project Catalyst
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
