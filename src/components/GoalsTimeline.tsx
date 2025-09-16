import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { CheckCircle, Circle, FileText, Video, Radio, HelpCircle, Gamepad2, Vote, ArrowLeft } from 'lucide-react';

const output = [
  {
    period: 'Month 1-2',
    title: 'Research and Planning',
    status: 'planning',
    details: [
      'Research product structure',
      'Study the short clip structure',
      'Make a list of recommended projects',
      'Plan to write articles, produce clips, and organize livestreams',
      'Write and post basic content about decentralized governance'
    ],
    deliverables: [
      { icon: FileText, text: '01 document describing structures, list of articles, and plan.', type: 'document' },
      { icon: FileText, text: '02 basic introductory articles.', type: 'article' }
    ],
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    period: 'Month 3',
    title: 'Deployment of Set 1',
    status: 'active',
    details: [
      'Write articles in Set 1',
      'Make a short clip for a project in Set 1',
      'Check and post articles',
      'Conduct Livestream #1',
      'Create quizzes for Set 1 projects',
      'Launch the first mini-game to encourage community engagement'
    ],
    deliverables: [
      { icon: FileText, text: '04 articles', type: 'article' },
      { icon: Video, text: '01 short clip (8–10 minutes long)', type: 'video' },
      { icon: Radio, text: '01 live stream session', type: 'stream' },
      { icon: HelpCircle, text: '01 quiz set: 15 questions', type: 'quiz' },
      { icon: Gamepad2, text: '01 mini-game', type: 'game' },
      { icon: Vote, text: '01 on-chain voting session', type: 'voting' }
    ],
    gradient: 'from-teal-500 to-green-500'
  },
  {
    period: 'Month 4',
    title: 'Deployment of Set 2',
    status: 'upcoming',
    details: [
      'Write articles in Set 2',
      'Make a short clip for a project in Set 2',
      'Check and post articles',
      'Create quiz set: 15 questions',
      'Conduct Livestream #2',
      'Launch the second mini-game to encourage community engagement'
    ],
    deliverables: [
      { icon: FileText, text: '04 articles', type: 'article' },
      { icon: Video, text: '01 short clip (8–10 minutes long)', type: 'video' },
      { icon: Radio, text: '01 live stream session', type: 'stream' },
      { icon: Gamepad2, text: '01 mini-game', type: 'game' },
      { icon: Vote, text: '01 on-chain voting session', type: 'voting' }
    ],
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    period: 'Month 5',
    title: 'Deployment of Set 3',
    status: 'upcoming',
    details: [
      'Write articles in Set 3',
      'Make a short clip for a project in Set 3',
      'Check and post articles',
      'Create quiz set: 15 questions',
      'Conduct Livestream #3',
      'Launch the third mini-game to encourage community engagement'
    ],
    deliverables: [
      { icon: FileText, text: '04 articles', type: 'article' },
      { icon: Video, text: '01 short clip (8–10 minutes long)', type: 'video' },
      { icon: Radio, text: '01 live stream session', type: 'stream' },
      { icon: Gamepad2, text: '01 mini-game', type: 'game' },
      { icon: Vote, text: '01 on-chain voting session', type: 'voting' }
    ],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    period: 'Month 6',
    title: 'Closing and Reporting',
    status: 'upcoming',
    details: [
      'Make the fourth short clip',
      'Write an analysis and summary',
      'Present and report results to the community'
    ],
    deliverables: [
      { icon: FileText, text: '01 article', type: 'article' },
      { icon: Video, text: '01 short clip (8–10 minutes long)', type: 'video' },
      { icon: FileText, text: '01 final report document', type: 'report' }
    ],
    gradient: 'from-orange-500 to-red-500'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    case 'active':
      return <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse" />;
    case 'planning':
      return <Circle className="w-6 h-6 text-blue-500" />;
    default:
      return <Circle className="w-6 h-6 text-slate-400" />;
  }
};

const getDeliverableColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'text-blue-600 dark:text-blue-400';
    case 'video':
      return 'text-red-600 dark:text-red-400';
    case 'stream':
      return 'text-purple-600 dark:text-purple-400';
    case 'quiz':
      return 'text-green-600 dark:text-green-400';
    case 'game':
      return 'text-yellow-600 dark:text-yellow-400';
    case 'voting':
      return 'text-teal-600 dark:text-teal-400';
    case 'document':
      return 'text-slate-600 dark:text-slate-400';
    case 'report':
      return 'text-orange-600 dark:text-orange-400';
    default:
      return 'text-slate-600 dark:text-slate-400';
  }
};

export function GoalsTimeline() {
  const [viewMode, setViewMode] = useState<{ [key: number]: 'output' | 'deliverables' }>({});

  const toggleView = (index: number, mode: 'output' | 'deliverables') => {
    setViewMode(prev => ({ ...prev, [index]: mode }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-white">
            Project Roadmap
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Monthly breakdown of deliverables and milestones
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {output.map((phase, index) => {
            const mode = viewMode[index] || 'output';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Status icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 max-w-md">
                    <Card className="p-6 shadow-lg bg-white dark:bg-slate-800 border-0">
                      {mode === 'output' ? (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-lg text-slate-900 dark:text-white mb-1">
                                {phase.period}
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {phase.title}
                              </p>
                            </div>
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                          </div>

                          <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                            {phase.details.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>

                          <div className="mt-6 text-right">
                            <button
                              onClick={() => toggleView(index, 'deliverables')}
                              className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                            >
                              View Deliverables
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg text-slate-900 dark:text-white">
                              Deliverables
                            </h3>
                            <button
                              onClick={() => toggleView(index, 'output')}
                              className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900"
                            >
                              <ArrowLeft className="w-4 h-4" />
                              <span>Back</span>
                            </button>
                          </div>

                          <div className="space-y-3">
                            {phase.deliverables.map((d, i) => (
                              <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                                <d.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getDeliverableColor(d.type)}`} />
                                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {d.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </Card>
                  </div>

                  <div className="flex-1 max-w-md" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
