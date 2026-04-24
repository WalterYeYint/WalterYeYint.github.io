import re

with open("src/App.tsx", "r") as f:
    code = f.read()

# Extract cvData
cv_match = re.search(r'(const cvData = \{.*?\n\};)', code, re.DOTALL)
if not cv_match:
    print("FAILED TO EXTRACT CVDATA")
    exit(1)
cvDataStr = cv_match.group(1)

new_app = f"""import React, {{ useEffect, useState }} from 'react';
import {{ motion, AnimatePresence }} from 'framer-motion';
import {{ Github, Linkedin, Mail, Briefcase, Code, GraduationCap, Award, ChevronDown, Monitor, MapPin, X, Database, Terminal, Cpu, Wrench }} from 'lucide-react';
import {{ FaPython, FaCuttlefish, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, FaGitAlt, FaJira }} from 'react-icons/fa';
import {{ SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn, SiPandas, SiDjango, SiFlask, SiFastapi, SiPostgresql, SiSqlite, SiMysql, SiArduino, SiRaspberrypi, SiGooglecloud, SiRos, SiCplusplus }} from 'react-icons/si';
import {{ clsx, type ClassValue }} from 'clsx';
import {{ twMerge }} from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {{
  return twMerge(clsx(inputs));
}}

{cvDataStr}

const FadeIn = ({{ children, delay = 0, className = "" }}: {{ children: React.ReactNode, delay?: number, className?: string }}) => (
  <motion.div
    initial={{{{ opacity: 0, y: 20 }}}}
    whileInView={{{{ opacity: 1, y: 0 }}}}
    viewport={{{{ once: true, margin: "-50px" }}}}
    transition={{{{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}}}
    className={{className}}
  >
    {{children}}
  </motion.div>
);

export default function App() {{
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {{
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }}, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] font-sans selection:bg-[#2997FF] selection:text-white overflow-x-hidden relative flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#2997FF] opacity-10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7524FF] opacity-10 blur-[140px]" />
      </div>

      <header className={{cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "bg-[#000000]/70 backdrop-blur-xl border-white/5 py-4" : "py-6"
      )}}>
        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center text-[13px] font-medium tracking-wide">
          <motion.div initial={{{{ opacity:0, x: -10}}}} animate={{{{ opacity:1, x:0}}}} className="text-white flex items-center space-x-2 font-semibold tracking-tight text-lg">
            <span>Walter.YYT</span>
          </motion.div>
          <motion.nav initial={{{{ opacity:0, x: 10}}}} animate={{{{ opacity:1, x:0}}}} className="hidden md:flex gap-8 text-[#86868B]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </motion.nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32 flex-grow">
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative">
          <motion.div 
            initial={{{{ opacity: 0, y: 20 }}}}
            animate={{{{ opacity: 1, y: 0 }}}}
            transition={{{{ duration: 1, ease: [0.16, 1, 0.3, 1] }}}}
            className="flex flex-col gap-6 items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-[#2997FF] border border-[#2997FF]/30 rounded-full bg-[#2997FF]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-pulse"></span>
               Available for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-white leading-[1.05]">
              Hello, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997FF] to-[#7524FF]">{{cvData.name.split(' (')[0]}}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#86868B] font-semibold tracking-tight mt-2">
              {{cvData.title}}
            </p>
            <p className="text-[#86868B] max-w-xl md:text-lg leading-relaxed mt-2">
              {{cvData.tagline}}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/Ye_Yint_Thu_CV.pdf" download="Ye_Yint_Thu_CV.pdf" className="primary-btn px-7 py-3.5 flex items-center justify-center gap-2 text-sm font-medium">
                Download CV
              </a>
              <a href={{cvData.github}} target="_blank" rel="noreferrer" className="glass-btn px-6 py-3.5 flex items-center gap-2 text-sm font-medium text-white">
                <Github size={18} /> GitHub
              </a>
              <a href={{cvData.linkedin}} target="_blank" rel="noreferrer" className="glass-btn px-6 py-3.5 flex items-center gap-2 text-sm font-medium text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">About Me</h2>
            <div className="glass-card p-10 leading-relaxed text-[#86868B]">
              <p className="text-lg md:text-xl font-light">{{cvData.about}}</p>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Experience</h2>
            <div className="relative space-y-8">
              {{cvData.experience.map((exp, i) => (
                <FadeIn key={{i}} delay={{i * 0.1}} className="glass-card p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{{exp.role}}</h3>
                      <h4 className="text-[#86868B] text-lg font-medium mt-1">{{exp.company}}</h4>
                    </div>
                    <span className="text-sm font-medium text-[#2997FF] bg-[#2997FF]/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">{{exp.date}}</span>
                  </div>
                  <ul className="space-y-4">
                    {{exp.resp.map((item, idx) => (
                      <li key={{idx}} className="flex gap-4 text-[#86868B] leading-relaxed">
                        <span className="text-[#2997FF]/50 mt-2 align-top flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2997FF]"/>
                        </span>
                        {{item}}
                      </li>
                    ))}}
                  </ul>
                </FadeIn>
              ))}}
            </div>
          </FadeIn>
        </section>

        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {{cvData.projects.map((project, i) => (
                <FadeIn key={{i}} delay={{i * 0.1}}>
                  <div onClick={{() => setSelectedProject(project)}} className="glass-card p-8 h-full flex flex-col cursor-pointer group">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#2997FF] group-hover:text-white transition-all duration-300 text-[#86868B]">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-[#86868B]">{{project.date}}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#2997FF] transition-colors">{{project.name}}</h3>
                    <p className="text-[#86868B] leading-relaxed flex-grow font-light">
                      {{project.desc.length > 120 ? project.desc.substring(0, 120) + "..." : project.desc}}
                    </p>
                  </div>
                </FadeIn>
              ))}}
            </div>
          </FadeIn>
        </section>

        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {{cvData.skills.map((skillGroup, i) => (
                <div key={{i}} className="glass-card p-8">
                  <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
                    <skillGroup.icon className="w-5 h-5 text-[#2997FF]" /> 
                    {{skillGroup.category}}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {{skillGroup.items.map((item, idx) => (
                      <span key={{idx}} className="px-4 py-2.5 flex items-center gap-2 bg-white/5 rounded-full text-[#F5F5F7] text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
                        <item.i className="w-4 h-4 opacity-70" /> {{item.name}}
                      </span>
                    ))}}
                  </div>
                </div>
              ))}}
            </div>
          </FadeIn>
        </section>

        <section id="education" className="scroll-mt-32 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Education</h2>
            <div className="space-y-6">
              {{cvData.education.map((edu, i) => (
                <div key={{i}} className="glass-card p-8">
                  <h3 className="text-xl font-semibold text-white mb-1">{{edu.degree}}</h3>
                  <div className="text-[#86868B] mb-4">{{edu.school}}</div>
                  <div className="text-xs font-semibold text-[#2997FF] mb-6 bg-[#2997FF]/10 inline-block px-3 py-1 rounded-full uppercase tracking-wider">{{edu.date}}</div>
                  <ul className="text-[15px] text-[#86868B] space-y-3 font-light">
                    {{edu.details.map((dt, idx) => (
                      <li key={{idx}} className="flex gap-3">
                        <span className="text-[#2997FF]/50 mt-1.5 flex-shrink-0"><div className="w-1 h-1 rounded-full bg-[#2997FF]"/></span> {{dt}}
                      </li>
                    ))}}
                  </ul>
                </div>
              ))}}
            </div>
          </FadeIn>
          <FadeIn delay={{0.2}}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Certifications</h2>
            <div className="space-y-4">
              {{cvData.certificates.map((cert, i) => (
                <div key={{i}} className="flex items-center gap-5 p-6 glass-card">
                  <Award className="text-[#2997FF] flex-shrink-0" size={24} />
                  <span className="text-white font-medium">{{cert}}</span>
                </div>
              ))}}
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="scroll-mt-32">
          <FadeIn>
            <div className="glass-card p-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-[#2997FF]/5 to-transparent pointer-events-none" />
               <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 z-10 box-content">
                  <Mail className="w-8 h-8 text-[#2997FF]" />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white z-10">Let's Connect</h2>
               <p className="text-[#86868B] max-w-xl mx-auto mb-12 text-lg z-10 font-light">
                 Currently open for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-12 z-10">
                 <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 transition-all hover:bg-white/10">
                   <Mail className="text-[#2997FF] mb-3" size={24} />
                   <span className="text-sm font-medium text-white">{{cvData.email}}</span>
                 </div>
                 <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 transition-all hover:bg-white/10">
                   <Monitor className="text-[#2997FF] mb-3" size={24} />
                   <span className="text-sm font-medium text-white">{{cvData.phone}}</span>
                 </div>
                 <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 transition-all hover:bg-white/10">
                   <MapPin className="text-[#2997FF] mb-3" size={24} />
                   <span className="text-sm font-medium text-white">Sydney, Australia</span>
                 </div>
               </div>
               
               <a href={{`mailto:${{cvData.email}}`}} className="primary-btn px-10 py-4 text-base font-semibold tracking-wide z-10 shadow-[0_4px_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
                 Say Hello
               </a>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="w-full text-center py-8 text-[#86868B] text-sm mt-auto border-t border-white/5">
        <p>Built with React, Tailwind & Framer Motion</p>
      </footer>

      <AnimatePresence>
        {{selectedProject && (
          <motion.div
            initial={{{{ opacity: 0 }}}}
            animate={{{{ opacity: 1 }}}}
            exit={{{{ opacity: 0 }}}}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#000000]/80 backdrop-blur-xl"
            onClick={{() => setSelectedProject(null)}}
          >
            <motion.div
              initial={{{{ scale: 0.95, opacity: 0, y: 20 }}}}
              animate={{{{ scale: 1, opacity: 1, y: 0 }}}}
              exit={{{{ scale: 0.95, opacity: 0, y: 20 }}}}
              transition={{{{ type: "spring", damping: 25, stiffness: 300 }}}}
              onClick={{(e) => e.stopPropagation()}}
              className="glass-card p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={{() => setSelectedProject(null)}}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-10"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-8 pr-16 mt-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Monitor className="text-[#2997FF] w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{{selectedProject.name}}</h2>
              </div>
              
              {{(selectedProject.video || selectedProject.image) && (
                <div className="w-full aspect-video bg-black/50 rounded-2xl overflow-hidden mb-8 relative border border-white/10">
                  {{selectedProject.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={{selectedProject.video}}
                      title="Project Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  ) : (
                    <img 
                      src={{selectedProject.image}} 
                      alt={{selectedProject.name}}
                      className="w-full h-full object-cover opacity-90"
                    />
                  )}}
                </div>
              )}}
              
              <div className="text-[#86868B] text-lg leading-relaxed font-light">
                <p>{{selectedProject.desc}}</p>
              </div>
            </motion.div>
          </motion.div>
        )}}
      </AnimatePresence>
      
    </div>
  );
}}
"""

with open("src/App.tsx", "w") as f:
    f.write(new_app)

