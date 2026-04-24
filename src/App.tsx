import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Award, Monitor, MapPin, X, Database, Terminal, Cpu, Wrench } from 'lucide-react';
import { FaPython, FaCuttlefish, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, FaGitAlt, FaJira } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn, SiPandas, SiDjango, SiFlask, SiFastapi, SiPostgresql, SiSqlite, SiMysql, SiArduino, SiRaspberrypi, SiGooglecloud, SiRos, SiCplusplus } from 'react-icons/si';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cvData = {
  name: "Ye Yint Thu (Walter)",
  title: "Software Engineer / AI Specialist",
  tagline: "Engineer with 3+ years of AI, Software & Robotics Projects experience",
  email: "walteryeyint@gmail.com",
  phone: "+61493946506",
  github: "https://github.com/WalterYeYint",
  linkedin: "https://www.linkedin.com/in/walter-yang-9a97b7149/",
  portfolio: "https://walteryeyint.github.io/",
  about: `A passionate software engineer with extensive experience in AI, Robotics, and Computer Vision. Pursuing a Master of Artificial Intelligence at UTS. Dedicated to building high-quality, scalable systems, and currently specializing in multiple AI agents with tools and LLMs. I bring hands-on experience in MLOps, backend frameworks, and computer vision architectures to the table.`,
  
  skills: [
    { 
      category: "Programming", icon: Terminal, 
      items: [
        { name: "Python", i: FaPython }, { name: "C++", i: SiCplusplus }, { name: "C", i: FaCuttlefish }, { name: "PHP", i: FaPhp }, { name: "Javascript", i: FaNodeJs }
      ] 
    },
    { 
      category: "Frameworks & Platforms", icon: Cpu, 
      items: [
        { name: "Tensorflow", i: SiTensorflow }, { name: "Pytorch", i: SiPytorch }, { name: "OpenCV", i: SiOpencv }, 
        { name: "Scikit-learn", i: SiScikitlearn }, { name: "pandas", i: SiPandas }, { name: "LangChain", i: Cpu }, 
        { name: "LangGraph", i: Cpu }, { name: "transformers", i: Cpu }, { name: "RAG", i: Database }, 
        { name: "Django", i: SiDjango }, { name: "Flask", i: SiFlask }, { name: "FastAPI", i: SiFastapi }, 
        { name: "React", i: FaReact }, { name: "Docker", i: FaDocker }, { name: "ROS", i: SiRos }
      ] 
    },
    { 
      category: "Database", icon: Database, 
      items: [
        { name: "MySQL", i: SiMysql }, { name: "Sqlite3", i: SiSqlite }, { name: "Chroma", i: Database }, { name: "PostgreSQL", i: SiPostgresql }
      ] 
    },
    { 
      category: "Hardware & Tools", icon: Wrench, 
      items: [
        { name: "Arduino", i: SiArduino }, { name: "Raspberry Pi", i: SiRaspberrypi }, { name: "Git", i: FaGitAlt }, 
        { name: "Jira", i: FaJira }, { name: "CI/CD", i: Terminal }, { name: "GCP", i: SiGooglecloud }, { name: "AWS", i: FaAws }
      ] 
    },
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Qibitech Inc",
      date: "March 2022 - Present",
      resp: [
        "Develop, test, and maintain multithreaded/asynchronous control systems for warehouse robots and robot arms using C++, Python, ROS & Docker.",
        "Collaborate in an Agile environment using Jira + Bitbucket.",
        "Implement and debug features for autonomous systems, including TCP/UDP communication, logging and pathfinding algorithms for robot control/fleet management.",
      ]
    },
    {
      role: "Freelance Software Engineer",
      company: "Upwork Platform",
      date: "October 2021 - January 2022",
      resp: [
        "Developed two computer-vision systems for detecting defects on white papers and Logos."
      ]
    },
    {
      role: "Junior Machine Learning Engineer Intern",
      company: "Omdena",
      date: "July 2021 - September 2021",
      resp: [
        "Took part in two-month project for developing object detection for symbols, lines and recognize texts in piping and instrumentation diagrams."
      ]
    }
  ],
  projects: [
    {
        "name": "Multi-Agent AI System for Company Finance Risk Analysis",
        "date": "Project",
        "desc": "The demo video shows SonicJob app: an AI job assisting platform for both job seekers and recruiters. Job seekers can upload their resumes, get them analyzed and get most suitable jobs recommended to them. Similarly, recruiters can upload their job descriptions, candidates' CVs and get the most suitable candidates for that job. It was developed in 3 agile sprints. The system is implemented using Streamlit for frontend, Flask for backend. Job description data are scraped from LinkedIn on a daily basis. Different resume, job description datasets were preprocessed and standardized into one format. An end-to-end MLOps pipeline was created using ClearML as shown below (BERT, Roberta models were trained). Github Action was used for CI pipeline workflow that runs MLOps pipeline. The final Roberta model achieved overall F1 score of 0.81."
,
      "video": "https://www.youtube.com/embed/uUxpRscA9CE"    },
    {
        "name": "Navigating Textual Environments through Reinforcement Learning in TextWorld Game",
        "date": "Project",
        "desc": "Microsoft\u2019s TextWorld is a text-based platform designed for benchmarking intelligent agents that combine natural language understanding with sequential decision-making. We investigated how Reinforcement Learning (RL) techniques can be applied to the Cooking Game, a TextWorld scenario where the agent must interpret textual descriptions and perform cooking-related tasks to achieve specific goals. We experimented with two Reinforcement Learning paradigms, Actor-Critic and Deep Q-Network (DQN), and two text encoding architectures, GRU and LSTM to address key challenges inherent to interactive text games, such as partial observability and sparse reward signals. The experimental results demonstrate that our trained agents can efficiently complete the Easy, Medium, and Hard levels, indicating the effectiveness of our application to acquire and generalize complex sequential decision-making skills in text-based environments."
,
      "video": "https://www.youtube.com/embed/g5qL34-JdiY"    },
    {
        "name": "Improving Math Reasoning of LLMs via Multi-Reward RL",
        "date": "Project",
        "desc": "The goal of this project is to enhance mathematical reasoning capability of LLMs using a two-stage fine-tuning pipeline: initial Supervised Fine-Tuning (SFT) on high-quality Chain-of-Thought (CoT) traces, followed by GRPO with a multi-reward system. SFT will first aligns base models to produce basic structured reasoning steps enclosed in and tags to ensure step-by-step interpretability. GRPO, a model-free on-policy reinforcement learning algorithm, will then further optimizes the models with 4 specialized rewards, including strict and partial structural format adherence, numerical correctness and number extraction ability. Experiments were conducted with 3 foundational models, Qwen3-1.7B-Base, Llama-3.2-1B, and Llama-3.2-3B, which are trained using LoRA (Low Rank Adaptation), an efficient adaptation for parameter and resource efficiency. Evaluation on the benchmark GSM8K dataset showed significant performance improvements when employing our pipeline compared to when using base models, with Qwen3-1.7B-Base achieving 99% correct format and 76.88% correct answers. The results confirm that multi-reward GRPO training with structured reasoning can enhance interpretability, reasoning reliability and numeric accuracy in computationally efficient models."
,
      "video": "https://www.youtube.com/embed/c3sdV6T45jQ"    },
    {
        "name": "Sonic Job: AI Job Assisting Platform",
        "date": "Project",
        "desc": "The demo video shows SonicJob app: an AI job assisting platform for both job seekers and recruiters. Job seekers can upload their resumes, get them analyzed and get most suitable jobs recommended to them. Similarly, recruiters can upload their job descriptions, candidates' CVs and get the most suitable candidates for that job. It was developed in 3 agile sprints. The system is implemented using Streamlit for frontend, Flask for backend. Job description data are scraped from LinkedIn on a daily basis. Different resume, job description datasets were preprocessed and standardized into one format. An end-to-end MLOps pipeline was created using ClearML as shown below (BERT, Roberta models were trained). Github Action was used for CI pipeline workflow that runs MLOps pipeline. The final Roberta model achieved overall F1 score of 0.81."
,
      "video": "https://www.youtube.com/embed/Vru72y6XFks",
      "image": "images/MLOps_pipeline_1.png"    },
    {
        "name": "Personal Protective Equipment Detection System",
        "date": "Project",
        "desc": "The demo link below shows the personal protective equipment detection system. It is implemented using YOLOv8 and hosted on a streamlit platform. The system is able to detect 9 different classes. User can upload desired image/video to detect these classes, or they can use their camera to detect them real-time. (Some latency exists for real-time detection)"
    },
    {
        "name": "Analyzing and Visualizing Australia's Import & Export Data",
        "date": "Project",
        "desc": "The document shows the analysis and visualization of Australia's Import & Export Data using Tableau."
    },
    {
        "name": "Analyzing and Visualizing AUS Open Tennis dataset",
        "date": "Project",
        "desc": "The document shows the analysis and visualization of AUS Open Tennis dataset using Tableau."
    },
    {
        "name": "Analyzing and Visualizing housing data of Penshurst, New South Wales",
        "date": "Project",
        "desc": "The document shows the analysis and visualization of housing data of Penshurst, New South Wales using Microsoft Excel."
    },
    {
        "name": "Online Food Ordering Web-App with Recommendation System",
        "date": "Project",
        "desc": "The video shows the online food ordering web-app prototype with K-Nearest Neighbors model for recommendation. It demonstrates how to use the customer website and admin panel."
,
      "video": "https://www.youtube.com/embed/B8PQDUpEVEI"    },
    {
        "name": "Logo Defect Detection System",
        "date": "Project",
        "desc": "The video shows the demonstration of logo defect detection using OpenCV. The logo without defects are shown in green boxes, and those with defects are shown in red boxes."
,
      "video": "https://www.youtube.com/embed/8KtrFRpd3X0"    },
    {
        "name": "Wrinkle Defect Detection System",
        "date": "Project",
        "desc": "The video shows the demonstration of wrinkle defect detection using OpenCV. The wrinkles and other defects on a paper are filtered and shown in red, and sensitivity and other parameters can be adjusted using keyboard keys."
,
      "video": "https://www.youtube.com/embed/teupHDE_P4k"    },
    {
        "name": "Symbol and Text Recognition for Piping and Instrumentation Diagrams",
        "date": "Project",
        "desc": "This is a two-month group project at Omdena. The images shows how symbols and texts are recognized in Piping and Instrumentation Diagrams. I took part in developing object detection for symbols and text recognition models. The end product was developed using YOLOv5 and EasyOCR."
,
      "image": "images/piping&instrumentation_1.jpg"    },
    {
        "name": "Autonomous Vehicle with Lane Centering Assist & Traffic Sign Detection",
        "date": "Project",
        "desc": "The videos show the autonomous navigation of the vehicle prototype on a lane and how it acts according to different traffic signs. Lane following was done using OpenCV, the wheel speeds and direction were controlled using PID algorithms and traffic sign detection was done using SSD-MobileNet-V2 Tensorflow Object Detection API. The traffic sign detection was run on a remote PC for real-time traffic sign detection."
,
      "video": "https://www.youtube.com/embed/Jsps1qxy6_8"    },
    {
        "name": "Python Sudoku Solver using Keras and OCR",
        "date": "Project",
        "desc": "The video shows the demonstration of Python Sudoku Solver. A custom digit classifier model was trained using tensorflow keras. The sudoku was solved using Python sudoku library."
,
      "video": "https://www.youtube.com/embed/nSbyHW3ybs0"    },
    {
        "name": "Khet Laser Chess Game using Python Flask",
        "date": "Project",
        "desc": "The video shows the demonstration of Khet Laser Chess Game, a personal project developed using Python Flask. The goal of the game is to eliminate your opponent\u2019s Pharaoh by bouncing your laser beam off mirrored pieces and around the playing field. See the instruction manual by Thinkfun for more details."
    }
],
  education: [
    {
      degree: "Master of Artificial Intelligence",
      school: "University of Technology Sydney (UTS)",
      date: "Feb 2024 - Nov 2025",
      details: ["GPA: 6.69/7", "Dean's List 2025", "Post Graduate Academic Excellence Scholarship"]
,
      "video": "https://www.youtube.com/embed/HhzEbOtBR0M"    },
    {
      degree: "B.Sc (Computing) (Honours)",
      school: "University of Greenwich",
      date: "Jan 2022 - Feb 2023",
      details: ["First Class Honours"]
    }
  ],
  certificates: [
    "AWS Certified Machine Learning Engineer – Associate (Sep 2025 - Present)",
    "Production Machine Learning Systems - Google Cloud Skills Boost (June 2024)",
    "Deep Learning Specialization - deeplearning.ai (Sep 2019 - Aug 2020)"
  ]
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] font-sans selection:bg-[#2997FF] selection:text-white overflow-x-hidden relative flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#2997FF] opacity-10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7524FF] opacity-10 blur-[140px]" />
      </div>

      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "bg-[#000000]/70 backdrop-blur-xl border-white/5 py-4" : "py-6"
      )}>
        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center text-[13px] font-medium tracking-wide">
          <motion.div initial={{ opacity:0, x: -10}} animate={{ opacity:1, x:0}} className="text-white flex items-center space-x-2 font-semibold tracking-tight text-lg">
            <span>Walter.YYT</span>
          </motion.div>
          <motion.nav initial={{ opacity:0, x: 10}} animate={{ opacity:1, x:0}} className="hidden md:flex gap-8 text-[#86868B]">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-[#2997FF] border border-[#2997FF]/30 rounded-full bg-[#2997FF]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-pulse"></span>
               Available for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-white leading-[1.05]">
              Hello, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997FF] to-[#7524FF]">{cvData.name.split(' (')[0]}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#86868B] font-semibold tracking-tight mt-2">
              {cvData.title}
            </p>
            <p className="text-[#86868B] max-w-xl md:text-lg leading-relaxed mt-2">
              {cvData.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/Ye_Yint_Thu_CV.pdf" download="Ye_Yint_Thu_CV.pdf" className="primary-btn px-7 py-3.5 flex items-center justify-center gap-2 text-sm font-medium">
                Download CV
              </a>
              <a href={cvData.github} target="_blank" rel="noreferrer" className="glass-btn px-6 py-3.5 flex items-center gap-2 text-sm font-medium text-white">
                <Github size={18} /> GitHub
              </a>
              <a href={cvData.linkedin} target="_blank" rel="noreferrer" className="glass-btn px-6 py-3.5 flex items-center gap-2 text-sm font-medium text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">About Me</h2>
            <div className="glass-card p-10 leading-relaxed text-[#86868B]">
              <p className="text-lg md:text-xl font-light">{cvData.about}</p>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Experience</h2>
            <div className="relative space-y-8">
              {cvData.experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.1} className="glass-card p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                      <h4 className="text-[#86868B] text-lg font-medium mt-1">{exp.company}</h4>
                    </div>
                    <span className="text-sm font-medium text-[#2997FF] bg-[#2997FF]/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">{exp.date}</span>
                  </div>
                  <ul className="space-y-4">
                    {exp.resp.map((item, idx) => (
                      <li key={idx} className="flex gap-4 text-[#86868B] leading-relaxed">
                        <span className="text-[#2997FF]/50 mt-2 align-top flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2997FF]"/>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.projects.map((project, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div onClick={() => setSelectedProject(project)} className="glass-card p-8 h-full flex flex-col cursor-pointer group">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#2997FF] group-hover:text-white transition-all duration-300 text-[#86868B]">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-[#86868B]">{project.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#2997FF] transition-colors">{project.name}</h3>
                    <p className="text-[#86868B] leading-relaxed flex-grow font-light">
                      {project.desc.length > 120 ? project.desc.substring(0, 120) + "..." : project.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.skills.map((skillGroup, i) => (
                <div key={i} className="glass-card p-8">
                  <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
                    <skillGroup.icon className="w-5 h-5 text-[#2997FF]" /> 
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, idx) => (
                      <span key={idx} className="px-4 py-2.5 flex items-center gap-2 bg-white/5 rounded-full text-[#F5F5F7] text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
                        <item.i className="w-4 h-4 opacity-70" /> {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="education" className="scroll-mt-32 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Education</h2>
            <div className="space-y-6">
              {cvData.education.map((edu, i) => (
                <div key={i} className="glass-card p-8">
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                  <div className="text-[#86868B] mb-4">{edu.school}</div>
                  <div className="text-xs font-semibold text-[#2997FF] mb-6 bg-[#2997FF]/10 inline-block px-3 py-1 rounded-full uppercase tracking-wider">{edu.date}</div>
                  <ul className="text-[15px] text-[#86868B] space-y-3 font-light">
                    {edu.details.map((dt, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#2997FF]/50 mt-1.5 flex-shrink-0"><div className="w-1 h-1 rounded-full bg-[#2997FF]"/></span> {dt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Certifications</h2>
            <div className="space-y-4">
              {cvData.certificates.map((cert, i) => (
                <div key={i} className="flex items-center gap-5 p-6 glass-card">
                  <Award className="text-[#2997FF] flex-shrink-0" size={24} />
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
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
                   <span className="text-sm font-medium text-white">{cvData.email}</span>
                 </div>
                 <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 transition-all hover:bg-white/10">
                   <Monitor className="text-[#2997FF] mb-3" size={24} />
                   <span className="text-sm font-medium text-white">{cvData.phone}</span>
                 </div>
                 <div className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 transition-all hover:bg-white/10">
                   <MapPin className="text-[#2997FF] mb-3" size={24} />
                   <span className="text-sm font-medium text-white">Sydney, Australia</span>
                 </div>
               </div>
               
               <a href={`mailto:${cvData.email}`} className="primary-btn px-10 py-4 text-base font-semibold tracking-wide z-10 shadow-[0_4px_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
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
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#000000]/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-10"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-8 pr-16 mt-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Monitor className="text-[#2997FF] w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
              </div>
              
              {(selectedProject.video || selectedProject.image) && (
                <div className="w-full aspect-video bg-black/50 rounded-2xl overflow-hidden mb-8 relative border border-white/10">
                  {selectedProject.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedProject.video}
                      title="Project Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  ) : (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  )}
                </div>
              )}
              
              <div className="text-[#86868B] text-lg leading-relaxed font-light">
                <p>{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
