import { useEffect, useState } from 'react'
import './App.css'
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail, 
  Phone, 
  Code2,
  Palette,
  Layers,
  Award,
  Trophy,
  ArrowUpRight,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Heart,
  Menu,
  X
} from 'lucide-react'

const PORTFOLIO_DATA = {
  // Personal Info
  name: "Toni Blair",
  tagline: "Full Stack Developer & UI/UX Designer",
  subtitle: "3rd Year UG Student at IIT Kharagpur",
  email: "toniblair909@gmail.com",
  phone: "+91 9234261447",
  location: "IIT Kharagpur, India",
  
  // Social Links
  socials: {
    github: "https://github.com/toni8283",
    linkedin: "https://www.linkedin.com/in/toni-blair-a61b57297/",
    behance: "https://behance.net/toniblair",
  },
  
  // About Section
  about: {
    description: `I am an Ocean Engineering student at IIT Kharagpur, passionate about building intelligent systems and impactful digital products. My focus is on Artificial Intelligence and full-stack development, where I aim to create solutions that solve real-world problems at scale. I am not just interested in coding, I am driven to build products that people actually use. I believe technology should be simple and accessible, so I design applications with a strong focus on UI/UX, ensuring that even non-technical users can use them without confusion or complexity. Currently, I am learning, experimenting, and working towards creating something big in the tech space.`,
    education: [
      {
        school: "Indian Institute of Technology, Kharagpur",
        degree: "Dual Degree: Ocean Engg & Naval Arch",
        year: "2023 - Present",
        grade: "CGPA: 7.4"
      },
      {
        school: "Tata DAV School, Jamadoba",
        degree: "12th CBSE Board",
        year: "2023",
        grade: "83.30%"
      },
      {
        school: "Denobili School F.R.I, Dighwadih",
        degree: "10th ICSE Board",
        year: "2021",
        grade: "85.00%"
      }
    ]
  },
  
  // Skills
  skills: {
    design: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research"],
    frontend: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Responsive Design"],
    backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
    tools: ["Git", "GitHub", "VS Code", "Canva", "Photoshop", "Krita"],
    languages: ["Java", "C", "C++", "Python", "JavaScript"]
  },
  
  // Projects
  projects: [
    {
      id: 1,
      title: "Cinema AI",
      description: "A full-stack web app that combines live movie data with AI sentiment analysis to give you more than just ratings, it tells you how the world feels about a film.",
      newdescription: "Search any movie by its IMDb ID to get a complete profile: poster, plot, cast, ratings, and release info pulled from the OMDb API. Alongside that, the app sends the title and plot to Google Gemini for a sentiment classification, positive, mixed, or negative, surfaced through a clean UI. Built to practice full-stack Next.js concepts including App Router, server-side API routes, and client-server data flow, with a sleek Netflix-inspired red/black theme.",
      tech: ["TypeScript", "React"],
      github: "https://github.com/toni8283/CINEMA_AI",
      live: "https://cinema-ai-jxj8.vercel.app/",
      image: "/project_cinema_ai.jpg",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "VC Intelligence Interface",
      description: "Responsive interface for accessing venture capital and startup intelligence data. Features reusable components and efficient data visualization.",
      newdescription: "Features include global search with multi-filter support (industry, stage, funding), live AI-powered company enrichment that fetches and analyzes public website data server-side, smart list management with CSV export, saved search queries, and internal team annotations. Built with Next.js 14, TypeScript, Tailwind CSS, and Zustand for persistent state with all enrichment API keys secured server-side via Next.js API routes, never exposed to the browser.",
      tech: ["TypeScript", "React"],
      github: "https://github.com/toni8283/VC_intelligence_interface",
      live: "https://vc-intelligence-interface-gamma.vercel.app/",
      image: "/project_vc.jpg",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "MERN E-commerce Platform",
      description: "A fully functional e-commerce platform built end-to-end from authentication and product management to cart, checkout, and an analytics-driven admin dashboard.",
      newdescription: "Wyrm Store implements the complete shopping workflow: user registration and login with JWT authentication, protected cart and checkout flows, order tracking with pay/cancel actions, and a role-based admin panel with sales analytics (last 30 days), inventory management, user role controls, and order status updates. Product images are handled via Cloudinary for scalable catalog management. The backend exposes 20+ RESTful API endpoints across auth, products, cart, orders, and admin.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/toni8283/eCommerce_website",
      live: "",
      image: "/project_ecommerce.jpg",
      category: "Back-end & Database"
    },
    {
      id: 4,
      title: "TB Fitness App",
      description: "Mobile fitness tracking app with 4 screens (Login, Home, Stats, Profile). Features custom activity ring component with circular progress indicators.",
      newdescription: "",
      tech: ["Figma", "UI Design"],
      github: "",
      live: "https://www.figma.com/design/wYtExxpe1ckjiBV8lhrYeq/Fitness-App?node-id=0-1&t=tmTLtzM3oDWArtwS-1",
      image: "/project-fitness.jpg",
      category: "UI/UX Design"
    },
    {
      id: 5,
      title: "RMgX Workspace",
      description: "End-to-end UX design for an internal employee platform. Includes moodboard, IA, wireframes, and interactive HTML/CSS/JS prototype.",
      newdescription: "",
      tech: ["Figma", "UX Research", "Prototyping"],
      github: "",
      live: "https://www.figma.com/design/yy4v0EPCy2T8ZBquTW2ar5/RMgx-Workspace-design?t=tmTLtzM3oDWArtwS-1",
      image: "/project-rmgx.jpg",
      category: "UI/UX Case Study"
    },
    {
      id: 6,
      title: "AlgoZenith Ad Design",
      description: "Bilingual social media ad targeting placement-prep students. Features stop-scroll hook with before/after comparison layout.",
      newdescription: "",
      tech: ["Canva", "Visual Design"],
      github: "",
      live: "https://www.figma.com/design/4czcodsO75JYu8PSsTLjWL/Homepage?node-id=0-1&t=tmTLtzM3oDWArtwS-1",
      image: "/project-algozenith.jpg",
      category: "Visual Design"
    }
  ],
  
  // Experience
  experience: [
    {
      role: "Design Sub-Head",
      organization: "Samudramanthan (OENA Dept Fest), IIT Kharagpur",
      duration: "Nov 2024 - Present",
      description: "Led the complete visual identity for IIT Kharagpur's premier Ocean Engineering technical fest. Designed all fest collateral including posters, banners, ID cards, certificates, and digital creatives.",
      highlights: ["17th edition fest (21-23 March 2025)", "Managed event photography", "Oversaw visual output across all channels"]
    },
    {
      role: "Maintenance & Socult Secretary",
      organization: "Rajendra Prasad Hall, IIT Kharagpur",
      duration: "Aug 2024 - May 2025",
      description: "Designed hall merchandise including t-shirts and hoodies. Coordinated social and cultural activities for the hall's student community.",
      highlights: ["Designed hall merchandise", "Coordinated cultural activities", "Student welfare responsibilities"]
    }
  ],
  
  // Achievements
  achievements: [
    {
      title: "Inter IIT Cultural Meet 7.0",
      description: "Gold Medal - Illumination (2nd Position), Rangoli (2nd Position)",
      year: "2024",
      icon: "trophy"
    },
    {
      title: "IIT JEE Advanced 2023",
      description: "Secured rank under 18,000 among 2 Lakh+ eligible candidates",
      year: "2023",
      icon: "award"
    },
    {
      title: "JEE Mains 2023",
      description: "Top 10% among 15 Lakh+ candidates",
      year: "2023",
      icon: "award"
    },
    {
      title: "Inter-Hall General Championship",
      description: "Gold Medal (Team) - Sketching Event",
      year: "2024",
      icon: "trophy"
    }
  ]
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }
  
  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-[var(--cream)]/90 backdrop-blur-md shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="text-xl font-semibold tracking-tight relative z-[60]" style={{ fontFamily: 'Playfair Display, serif' }}>
          TB.
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-link link-hover">
              {item.label}
            </button>
          ))}
        </div>
        
          <div className="hidden md:flex items-center gap-3">
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={18} />
            </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={18} />
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden relative z-[60] w-11 h-11 rounded-full border border-[var(--border)] bg-white/50 backdrop-blur-sm text-[var(--charcoal)] transition-all duration-300 hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] flex items-center justify-center"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
    <div
      className={`mobile-menu-backdrop md:hidden ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={() => setMobileMenuOpen(false)}
    />
    <div className={`md:hidden fixed top-24 inset-x-0 z-[55] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'}`}>
      <div className="mobile-menu-layout px-8 py-6">
        <div className="flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link link-hover mobile-nav-link text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon bg-white/30 backdrop-blur-sm">
            <Github size={18} />
          </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon bg-white/30 backdrop-blur-sm">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[var(--terracotta)] text-sm font-medium tracking-widest uppercase mb-6 fade-in">
          {PORTFOLIO_DATA.subtitle}
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 fade-in stagger-1" style={{ fontFamily: 'Playfair Display, serif' }}>
          {PORTFOLIO_DATA.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--warm-gray)] mb-8 fade-in stagger-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          {PORTFOLIO_DATA.tagline}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 fade-in stagger-3">
          <a href={PORTFOLIO_DATA.socials.behance} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
            <Palette size={18} />
            View Designs
          </a>
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
            <Github size={18} />
            View Code
          </a>
        </div>
        
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--warm-gray)] hover:text-[var(--terracotta)] transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="tag mb-4">About Me</p>
          <h2 className="section-title">The Story So Far</h2>
          <div className="section-divider" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg leading-relaxed text-[var(--warm-gray)] mb-8">
              {PORTFOLIO_DATA.about.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-[var(--terracotta)]" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--warm-gray)]">Frontend Development</p>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.frontend.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--warm-gray)]">Backend & Database</p>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.backend.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--warm-gray)]">Design</p>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.design.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--warm-gray)]">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.tools.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-[var(--terracotta)]" />
              Education
            </h3>
            
            <div className="space-y-6">
              {PORTFOLIO_DATA.about.education.map((edu, i) => (
                <div key={i} className="p-6 bg-white/50 rounded-[1.75rem] border border-[var(--border)]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{edu.school}</h4>
                    <span className="text-sm text-[var(--terracotta)]">{edu.year}</span>
                  </div>
                  <p className="text-[var(--warm-gray)] text-sm mb-1">{edu.degree}</p>
                  <p className="text-sm font-medium">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const renderProjectPlaceholder = (category: string) => {
    if (category === "UI/UX Design" || category === "Visual Design") {
      return <Palette size={48} className="text-[var(--terracotta)]/30" />
    }

    if (category === "Full Stack") {
      return <Layers size={48} className="text-[var(--terracotta)]/30" />
    }

    return <Code2 size={48} className="text-[var(--terracotta)]/30" />
  }

  return (
    <section id="projects" className="py-24 px-6 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="tag mb-4">Projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="project-card group bg-[var(--cream)] rounded-[1.75rem] overflow-hidden border border-[var(--border)] card-hover">
              <div className="relative h-48 bg-gradient-to-br from-[var(--sand)] to-[var(--cream)] flex items-center justify-center overflow-hidden">
                {!failedImages[project.image] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={() =>
                      setFailedImages((current) => ({
                        ...current,
                        [project.image]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {renderProjectPlaceholder(project.category)}
                  </div>
                )}
                <div className="project-image-overlay flex items-end p-4">
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--terracotta)] hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--terracotta)] hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <span className="absolute top-4 left-4 tag">{project.category}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-[var(--terracotta)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[0.77rem] leading-6 text-[var(--terracotta)] mb-4">
                  {project.description}
                </p>
                {project.newdescription ? (
                  <p className="text-sm leading-7 text-[var(--warm-gray)] mb-4">
                    {project.newdescription}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-[var(--sand)] rounded-full text-[var(--warm-gray)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={PORTFOLIO_DATA.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--terracotta)] hover:text-[var(--charcoal)] transition-colors link-hover"
          >
            View All Projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="tag mb-4">Experience</p>
          <h2 className="section-title">Leadership & Roles</h2>
          <div className="section-divider" />
        </div>
        
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, i) => (
            <div key={i} className="p-8 bg-white/50 rounded-[1.75rem] border border-[var(--border)] card-hover">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
                  <p className="text-[var(--terracotta)]">{exp.organization}</p>
                </div>
                <span className="text-sm text-[var(--warm-gray)] bg-[var(--sand)] px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-[var(--warm-gray)] mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, j) => (
                  <span key={j} className="text-sm text-[var(--warm-gray)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[var(--terracotta)] rounded-full" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="tag mb-4">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.achievements.map((achievement, i) => (
            <div key={i} className="p-6 bg-[var(--cream)] rounded-[1.75rem] border border-[var(--border)] flex items-start gap-4 card-hover">
              <div className="w-12 h-12 bg-[var(--sand)] rounded-[1.25rem] flex items-center justify-center flex-shrink-0">
                {achievement.icon === "trophy" ? (
                  <Trophy size={22} className="text-[var(--terracotta)]" />
                ) : (
                  <Award size={22} className="text-[var(--terracotta)]" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium mb-1">{achievement.title}</h3>
                  <span className="text-sm text-[var(--warm-gray)]">{achievement.year}</span>
                </div>
                <p className="text-sm text-[var(--warm-gray)]">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="tag mb-4">Get In Touch</p>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="section-divider mb-8" />
        
        <p className="text-lg text-[var(--warm-gray)] mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/50 rounded-full border border-[var(--border)] hover:border-[var(--terracotta)] transition-colors"
          >
            <Mail size={20} className="text-[var(--terracotta)]" />
            <span>{PORTFOLIO_DATA.email}</span>
          </a>
          
          <a 
            href={`tel:${PORTFOLIO_DATA.phone}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/50 rounded-full border border-[var(--border)] hover:border-[var(--terracotta)] transition-colors"
          >
            <Phone size={20} className="text-[var(--terracotta)]" />
            <span>{PORTFOLIO_DATA.phone}</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-4">
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href={PORTFOLIO_DATA.socials.behance} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Briefcase size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-[var(--warm-gray)]">
          © 2026 . {PORTFOLIO_DATA.name} . <span className="text-[var(--terracotta-light)]">PORTFOLIO</span>
        </p>
        
        <p className="text-sm text-[var(--warm-gray)] flex items-center gap-2">
          Built with
          <Heart
            size={16}
            className="text-[var(--terracotta-light)]"
            strokeWidth={1.8}
          />
        </p>
      </div>
    </footer>
  )
}
function App() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
