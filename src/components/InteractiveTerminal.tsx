import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionContext } from '../context/SectionContext';

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: string;
}

interface Command {
  name: string;
  description: string;
  action: () => void;
}

const InteractiveTerminal: React.FC = () => {
  const { showSection, hideSection } = useSectionContext();
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 0,
      type: 'output',
      content: '🚀 Welcome to venomx\'s Dynamic Portfolio Terminal v3.0.0',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 1,
      type: 'output',
      content: '─'.repeat(40),
    },
    {
      id: 2,
      type: 'output',
      content: '🎯 DYNAMIC LOADING: Sections load only when you navigate to them!',
    },
    {
      id: 3,
      type: 'output',
      content: '💡 Type commands to explore my portfolio dynamically',
    },
    {
      id: 4,
      type: 'output',
      content: '📋 Quick start: "help" | "about" | "projects" | "showall"',
    },
    {
      id: 5,
      type: 'output',
      content: '🎮 Fun commands: "hack" | "matrix" | "skills"',
    },
    {
      id: 6,
      type: 'output',
      content: '🔄 Toggle "Scroll Mode" button to switch to traditional navigation',
    },
    {
      id: 7,
      type: 'output',
      content: '',
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, Command> = {
    help: {
      name: 'help',
      description: 'Show available commands',
      action: () => {
        const helpText = [
          'Available Commands:',
          '─'.repeat(60),
          'Section Overlays (appear as animated popups):',
          '  about        - Show About section overlay',
          '  projects     - Show Projects section overlay',
          '  services     - Show Services section overlay',
          '  contact      - Show Contact section overlay',
          '  timeline     - Show Timeline section overlay',
          '  overview     - Show Overview section overlay',
          '  testimonials - Show Testimonials section overlay',
          '  showall      - Show ALL sections as overlays at once',
          '  home         - Close all overlays and return to home',
          '',
          'Information:',
          '  whoami       - Display user information',
          '  skills       - List technical skills',
          '  experience   - Show work experience',
          '  education    - Display education background',
          '',
          'System:',
          '  clear        - Clear terminal screen',
          '  history      - Show command history',
          '  date         - Display current date and time',
          '  pwd          - Print working directory',
          '  ls           - List available sections',
          '',
          'Social:',
          '  github       - Open GitHub profile',
          '  linkedin     - Open LinkedIn profile',
          '  email        - Show contact email',
          '',
          'Fun:',
          '  matrix       - Enable matrix mode',
          '  hack         - Run hacking simulation',
          '  quote        - Display random quote',
          '',
          '🎯 Single Page App: Sections appear as animated overlays!',
          '💡 Click outside overlay or X button to close sections'
        ];
        
        helpText.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 50);
        });
      }
    },
    
    clear: {
      name: 'clear',
      description: 'Clear the terminal',
      action: () => {
        setLines([]);
      }
    },
    
    whoami: {
      name: 'whoami',
      description: 'Display user information',
      action: () => {
        const info = [
          'User: venomx',
          'Role: Computer System Engineer & AI Developer',
          'Location: Kenya',
          'Specialization: Cybersecurity, AI Development, Full Stack',
          'Status: Available for opportunities',
          'Security Clearance: Ethical Hacker'
        ];
        
        info.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 100);
        });
      }
    },
    
    about: {
      name: 'about',
      description: 'Show About section overlay',
      action: () => {
        addLine('output', 'Executing about_me.sh...');
        setTimeout(() => {
          showSection('about');
          addLine('output', '✓ About section overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },
    
    projects: {
      name: 'projects',
      description: 'Show Projects section overlay',
      action: () => {
        addLine('output', 'Executing projects.sh...');
        setTimeout(() => {
          showSection('projects');
          addLine('output', '✓ Projects overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },
    
    services: {
      name: 'services',
      description: 'Show Services section overlay',
      action: () => {
        addLine('output', 'Executing services.sh...');
        setTimeout(() => {
          showSection('services');
          addLine('output', '✓ Services overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },
    
    contact: {
      name: 'contact',
      description: 'Show Contact section overlay',
      action: () => {
        addLine('output', 'Executing contact.sh...');
        setTimeout(() => {
          showSection('contact');
          addLine('output', '✓ Contact overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },
    
    skills: {
      name: 'skills',
      description: 'List technical skills',
      action: () => {
        const skills = [
          'Technical Skills:',
          '─'.repeat(30),
          'Languages: Python, JavaScript, TypeScript, Java, C++',
          'Frameworks: React, Node.js, Django, FastAPI',
          'AI/ML: TensorFlow, PyTorch, Scikit-learn',
          'Security: Penetration Testing, Vulnerability Assessment',
          'Cloud: AWS, Azure, Google Cloud',
          'Databases: PostgreSQL, MongoDB, Redis',
          'Tools: Docker, Kubernetes, Git, Linux'
        ];
        
        skills.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 80);
        });
      }
    },
    
    ls: {
      name: 'ls',
      description: 'List available sections',
      action: () => {
        const sections = [
          'drwxr-xr-x  2 venomx venomx 4096 Jan 19 2025 about/',
          'drwxr-xr-x  2 venomx venomx 4096 Jan 19 2025 projects/',
          'drwxr-xr-x  2 venomx venomx 4096 Jan 19 2025 services/',
          'drwxr-xr-x  2 venomx venomx 4096 Jan 19 2025 timeline/',
          'drwxr-xr-x  2 venomx venomx 4096 Jan 19 2025 contact/',
          '-rw-r--r--  1 venomx venomx 2048 Jan 19 2025 resume.pdf'
        ];
        
        sections.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 100);
        });
      }
    },
    
    date: {
      name: 'date',
      description: 'Display current date and time',
      action: () => {
        const now = new Date();
        addLine('output', now.toString());
      }
    },
    
    pwd: {
      name: 'pwd',
      description: 'Print working directory',
      action: () => {
        addLine('output', '/home/venomx/portfolio');
      }
    },
    
    history: {
      name: 'history',
      description: 'Show command history',
      action: () => {
        if (commandHistory.length === 0) {
          addLine('output', 'No commands in history');
          return;
        }
        
        commandHistory.forEach((cmd, index) => {
          setTimeout(() => {
            addLine('output', `${index + 1}  ${cmd}`);
          }, index * 50);
        });
      }
    },
    
    github: {
      name: 'github',
      description: 'Open GitHub profile',
      action: () => {
        addLine('output', 'Opening GitHub profile...');
        setTimeout(() => {
          window.open('https://github.com/venomx', '_blank');
          addLine('output', '✓ GitHub profile opened in new tab');
        }, 1000);
      }
    },
    
    matrix: {
      name: 'matrix',
      description: 'Enable matrix mode',
      action: () => {
        addLine('output', 'Entering the Matrix...');
        // Add matrix effect to terminal
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            setTimeout(() => {
              const matrixLine = Array.from({ length: 50 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('');
              addLine('output', matrixLine);
            }, i * 100);
          }
        }, 500);
      }
    },
    
    hack: {
      name: 'hack',
      description: 'Run hacking simulation',
      action: () => {
        const hackingSteps = [
          'Initializing penetration test...',
          'Scanning for open ports...',
          'Port 22: SSH - OPEN',
          'Port 80: HTTP - OPEN', 
          'Port 443: HTTPS - OPEN',
          'Running vulnerability assessment...',
          'Checking for SQL injection...',
          'Testing XSS vulnerabilities...',
          'Analyzing security headers...',
          'Generating security report...',
          '✓ Ethical hacking simulation complete',
          'No vulnerabilities found - System is secure!'
        ];
        
        hackingSteps.forEach((step, index) => {
          setTimeout(() => {
            addLine('output', step);
          }, index * 300);
        });
      }
    },

    quote: {
      name: 'quote',
      description: 'Display random quote',
      action: () => {
        const quotes = [
          '"The best way to predict the future is to invent it." - Alan Kay',
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"Security is not a product, but a process." - Bruce Schneier',
          '"AI is the new electricity." - Andrew Ng',
          '"The only way to do great work is to love what you do." - Steve Jobs'
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        addLine('output', randomQuote);
      }
    },

    timeline: {
      name: 'timeline',
      description: 'Show Timeline section overlay',
      action: () => {
        addLine('output', 'Executing timeline.sh...');
        setTimeout(() => {
          showSection('timeline');
          addLine('output', '✓ Timeline overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },

    education: {
      name: 'education',
      description: 'Display education background',
      action: () => {
        const education = [
          'Education Background:',
          '─'.repeat(30),
          'Computer System Engineering',
          'Specialization: AI & Cybersecurity',
          'Focus Areas:',
          '  • Machine Learning & Deep Learning',
          '  • Ethical Hacking & Penetration Testing',
          '  • Full Stack Development',
          '  • Cloud Computing & DevOps'
        ];

        education.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 100);
        });
      }
    },

    experience: {
      name: 'experience',
      description: 'Show work experience',
      action: () => {
        const experience = [
          'Work Experience:',
          '─'.repeat(30),
          'AI Developer & Cybersecurity Specialist',
          '• Developed AI-powered security solutions',
          '• Conducted penetration testing and vulnerability assessments',
          '• Built full-stack applications with modern frameworks',
          '• Implemented machine learning models for threat detection',
          '• Collaborated on open-source security projects'
        ];

        experience.forEach((line, index) => {
          setTimeout(() => {
            addLine('output', line);
          }, index * 120);
        });
      }
    },

    email: {
      name: 'email',
      description: 'Show contact email',
      action: () => {
        addLine('output', 'Email: venomx0@protonmail.com');
        addLine('output', 'Feel free to reach out for collaborations!');
      }
    },

    linkedin: {
      name: 'linkedin',
      description: 'Open LinkedIn profile',
      action: () => {
        addLine('output', 'Opening LinkedIn profile...');
        setTimeout(() => {
          window.open('https://linkedin.com/in/venomx', '_blank');
          addLine('output', '✓ LinkedIn profile opened in new tab');
        }, 1000);
      }
    },

    home: {
      name: 'home',
      description: 'Return to home (close all overlays)',
      action: () => {
        addLine('output', 'Returning to home...');
        // Close all overlays by hiding all sections except home
        ['about', 'overview', 'timeline', 'services', 'projects', 'testimonials', 'contact'].forEach(section => {
          hideSection(section);
        });
        addLine('output', '✓ All overlays closed - Welcome back home');
      }
    },

    overview: {
      name: 'overview',
      description: 'Show Overview section overlay',
      action: () => {
        addLine('output', 'Executing overview.sh...');
        setTimeout(() => {
          showSection('overview');
          addLine('output', '✓ Overview overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },

    testimonials: {
      name: 'testimonials',
      description: 'Show Testimonials section overlay',
      action: () => {
        addLine('output', 'Executing testimonials.sh...');
        setTimeout(() => {
          showSection('testimonials');
          addLine('output', '✓ Testimonials overlay loaded');
          addLine('output', 'Click outside overlay or X button to close');
        }, 500);
      }
    },

    showall: {
      name: 'showall',
      description: 'Show all sections as overlays',
      action: () => {
        addLine('output', 'Loading all sections...');
        setTimeout(() => {
          // Show all sections as overlays
          showSection('about');
          showSection('overview');
          showSection('timeline');
          showSection('services');
          showSection('projects');
          showSection('testimonials');
          showSection('contact');
          addLine('output', '✓ All section overlays loaded');
          addLine('output', 'Multiple overlays are now open - click outside or X to close individual sections');
          addLine('output', 'Use "home" command to close all overlays at once');
        }, 500);
      }
    }
  };

  const addLine = (type: 'command' | 'output' | 'error', content: string) => {
    const newLine: TerminalLine = {
      id: Date.now() + Math.random(),
      type,
      content,
      timestamp: type === 'command' ? new Date().toLocaleTimeString() : undefined
    };
    
    setLines(prev => [...prev, newLine]);
  };

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim();
    
    // Add command to history
    if (trimmedInput && !commandHistory.includes(trimmedInput)) {
      setCommandHistory(prev => [...prev, trimmedInput]);
    }
    
    // Add command line to terminal
    addLine('command', `venomx@portfolio:~$ ${trimmedInput}`);
    
    if (!trimmedInput) return;
    
    const [command] = trimmedInput.split(' ');
    
    if (commands[command]) {
      setIsTyping(true);
      setTimeout(() => {
        commands[command].action();
        setIsTyping(false);
      }, 200);
    } else {
      addLine('error', `Command not found: ${command}. Type 'help' for available commands.`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full h-full bg-black border border-green-400/30 rounded-lg overflow-hidden font-mono text-xs">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-green-400/30 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-green-400 text-xs truncate">venomx@portfolio:~</div>
        <div className="text-green-400 text-xs hidden sm:block">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex flex-col h-full">
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 space-y-0.5 scrollbar-hide min-h-0"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer 10+ */
            maxHeight: 'calc(100% - 140px)' // Reserve space for input area
          }}
          onClick={() => inputRef.current?.focus()}
        >
          <AnimatePresence>
            {lines.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`break-words overflow-wrap-anywhere leading-tight text-[10px] sm:text-xs ${
                  line.type === 'command'
                    ? 'text-green-400'
                    : line.type === 'error'
                    ? 'text-red-400'
                    : 'text-gray-300'
                }`}
                style={{ wordBreak: 'break-all', overflowWrap: 'anywhere' }}
              >
                {line.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Current Input Line - Fixed at bottom */}
        <div className="flex-shrink-0 p-3 sm:p-4 border-t border-green-400/30 bg-black/20">
          <motion.div
            className="flex items-center text-green-400 bg-black/50 p-2 rounded-lg border-2 border-green-400/50 text-xs shadow-lg shadow-green-400/20"
            animate={{
              borderColor: ['rgba(34, 197, 94, 0.5)', 'rgba(34, 197, 94, 0.8)', 'rgba(34, 197, 94, 0.5)'],
              boxShadow: [
                '0 4px 20px rgba(34, 197, 94, 0.2)',
                '0 4px 25px rgba(34, 197, 94, 0.4)',
                '0 4px 20px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2 text-cyan-400 font-mono flex-shrink-0 text-xs font-bold">venomx@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-green-400 caret-green-400 placeholder-gray-400 font-mono text-xs min-w-0 font-medium"
              placeholder={isTyping ? "Processing..." : "Type a command and press Enter..."}
              disabled={isTyping}
              style={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-green-400 font-bold text-xs flex-shrink-0 ml-1"
            >
              █
            </motion.span>
          </motion.div>

          {/* Input Helper Text */}
          <div className="mt-1 text-[10px] text-gray-500 text-center">
            Press <span className="text-green-400 font-mono">Enter</span> to execute • <span className="text-green-400 font-mono">↑↓</span> for history
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
