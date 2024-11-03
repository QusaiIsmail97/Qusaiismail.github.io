import React, { useState, useEffect } from 'react';
import { Book, Briefcase, Code, FileText, GraduationCap, User } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  
  const sections = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'publications', icon: Book, label: 'Publications' },
    { id: 'projects', icon: FileText, label: 'Projects' }
  ];

  // Animation nodes state
  const [nodes, setNodes] = useState([]);
  
  useEffect(() => {
    // Create initial nodes
    const initialNodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 300, // Header height
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 2
    }));
    setNodes(initialNodes);

    // Animation frame
    let animationFrameId;
    const animate = () => {
      setNodes(prevNodes => prevNodes.map(node => ({
        ...node,
        x: node.x + node.vx,
        y: node.y + node.vy,
        vx: (node.x <= 0 || node.x >= window.innerWidth) ? -node.vx : node.vx,
        vy: (node.y <= 0 || node.y >= 300) ? -node.vy : node.vy
      })));
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with AI Animation */}
      <header className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16 px-4 overflow-hidden">
        {/* Animated nodes */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size}
                className="fill-blue-300/30"
              />
              {nodes.map((otherNode, j) => {
                const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                if (distance < 100 && i < j) {
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={node.x}
                      y1={node.y}
                      x2={otherNode.x}
                      y2={otherNode.y}
                      className="stroke-blue-300/20"
                      strokeWidth="1"
                    />
                  );
                }
                return null;
              })}
            </g>
          ))}
        </svg>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Qusai Ismail</h1>
          <p className="text-xl mb-6">Computer Science Researcher & AI Specialist</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:qusaibanyismail@gmail.com" className="hover:text-blue-200 transition">
              qusaibanyismail@gmail.com
            </a>
            <span>|</span>
            <a href="tel:0770131516" className="hover:text-blue-200 transition">
              0770131516
            </a>
            <span>|</span>
            <a href="https://linkedin.com/in/qusai-ismail-465b44116" className="hover:text-blue-200 transition">
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white text-blue-900 rounded-lg hover:-translate-y-1 transition">
              GS
            </a>
            <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-teal-500 text-white rounded-full hover:-translate-y-1 transition">
              RG
            </a>
          </div>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2">
            {sections.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  activeSection === id 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className={`${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Qusai Ismail is pursuing his M.Sc. in computer science at the Jordan University of Science and Technology. 
              He received his B.Sc. Degree in Computer Science from Yarmouk University in 2019 with honors. His research 
              interests include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Pattern Recognition, 
              Model Interpretation, and Natural Language Processing.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              He is also a researcher in the field of natural language processing (NLP) and computational linguistics, 
              known for his work in lexical complexity prediction. He co-authored a paper for the SemEval-2021 competition, 
              specifically working on Task 1, which involved predicting lexical complexity.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className={`${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="border-l-4 border-blue-600 pl-4 mb-6">
                <h3 className="text-xl font-semibold">Teaching and Research Assistant</h3>
                <p className="text-gray-600">Al Hussein Technical University (HTU)</p>
                <p className="text-gray-500">Mar 2023 - Present</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">Teacher Assistant</h3>
                <p className="text-gray-600">Jordan University of Science and Technology</p>
                <p className="text-gray-500">Feb 2021 - Jun 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={`${activeSection === 'education' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 className="text-xl font-semibold">Master's degree in Computer Science</h3>
              <p className="text-gray-600">Jordan University of Science and Technology</p>
              <p className="text-gray-500">Sep 2020 - Jun 2023</p>
              <p className="text-blue-600 font-medium">GPA: Distinguished</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Bachelor's degree in Computer Science</h3>
              <p className="text-gray-600">Yarmouk University</p>
              <p className="text-gray-500">2015 – 2019</p>
              <p className="text-blue-600 font-medium">With Honors (Ranked Second)</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Programming & Tools</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">Python (Advanced)</li>
                  <li className="text-gray-600">C++</li>
                  <li className="text-gray-600">PHP</li>
                  <li className="text-gray-600">Java</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">Machine Learning Algorithms</li>
                  <li className="text-gray-600">Deep Learning (LSTM, RNN)</li>
                  <li className="text-gray-600">Transformers (BERT, RoBERTa, T5)</li>
                  <li className="text-gray-600">Computer Vision (Transfer Learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className={`${activeSection === 'publications' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Using Machine Learning Algorithms to Predict the State of Financial Inclusion in Africa</h3>
                <p className="text-gray-600">2021 12th International Conference on Information and Communication Systems (ICICS)</p>
                <p className="text-gray-500">2021</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold">JUST-BLUE at SemEval-2021 Task 1: Predicting Lexical Complexity using BERT and RoBERTa Pre-trained Language Models</h3>
                <p className="text-gray-600">Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021)</p>
                <p className="text-gray-500">2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Projects & Competitions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Notable Competitions</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="text-gray-600">SemEval-2021 Task 1: Predicting Lexical Complexity (Rank 1 out of 189)</li>
                    <li className="text-gray-600">COVID-19 tweets classification (Rank 1 out of 38)</li>
                    <li className="text-gray-600">Sentiment analysis about COVID-19 Vaccine</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Projects</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold">Graduation Project</h4>
                  <p className="text-gray-600">Jordanian money Classification based on CNN Algorithm (Unity Application)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
