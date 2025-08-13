      
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Moon, 
  Sun, 
  Bug, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Zap,
  Download,
  MapPin,
  Phone,
  Calendar,
  ChevronDown,
  Star,
  TestTube,
  FileCheck,
  Settings,
  BarChart3,
  Users,
  Clock,
  Award
} from 'lucide-react'
import './App.css'
import Skill from './components/Skill.jsx'
import Education from './components/Education.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const testingSkills = [
    { 
      category: 'Testing Types', 
      items: ['Manual Testing', 'Automated Testing', 'API Testing', 'Performance Testing', 'Security Testing'],
      icon: TestTube,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Tools & Frameworks', 
      items: ['Selenium', 'Cypress', 'Jest', 'Postman', 'JMeter'],
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Methodologies', 
      items: ['Agile', 'Scrum', 'TDD', 'BDD', 'Risk-Based Testing'],
      icon: FileCheck,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      category: 'Analytics & Reporting', 
      items: ['Test Metrics', 'Defect Tracking', 'JIRA', 'TestRail', 'Allure Reports'],
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    }
  ]


  // Project Section

  const projects = [
    {
      title: 'E-Commerce Testing Suite',
      description: 'Comprehensive testing strategy for a large-scale e-commerce platform including functional, performance, and security testing.',
      technologies: ['Selenium', 'TestNG', 'REST Assured', 'JMeter', 'JIRA'],
      testCases: '500+',
      defectsFound: '150+',
      coverage: '95%',
      gradient: 'from-blue-600 to-purple-600',
      featured: true,
      img: '/AutoWorx.jpg',
      testPlan: 'https://github.com/sakibkst/Performance_Testing_Using_Jmeter_Autoworx', // <-- Replace with your actual link
      viewResult: 'https://github.com/sakibkst/Performance_Testing_Using_Jmeter_Autoworx', // <-- Replace with your actual link
    },


    {
      title: 'Mobile Banking App QA',
      description: 'End-to-end testing of mobile banking application with focus on security, usability, and cross-platform compatibility.',
      technologies: ['Appium', 'Cypress', 'Postman', 'BrowserStack', 'TestComplete'],
      testCases: '300+',
      defectsFound: '80+',
      coverage: '98%',
      gradient: 'from-green-600 to-teal-600',
      featured: true
    },
    {
      title: 'Healthcare System Validation',
      description: 'Validation and verification of healthcare management system ensuring HIPAA compliance and data integrity.',
      technologies: ['Manual Testing', 'SQL', 'Postman', 'LoadRunner', 'Zephyr'],
      testCases: '400+',
      defectsFound: '120+',
      coverage: '92%',
      gradient: 'from-orange-600 to-pink-600',
      featured: false
    }
  ]

  const experience = [
    {
      title: 'Senior QA Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead QA engineer responsible for testing strategy, automation framework development, and team mentoring.',
      achievements: ['Reduced testing time by 60%', 'Improved defect detection by 40%', 'Led team of 5 QA engineers'],
      technologies: ['Selenium', 'Cypress', 'Jenkins', 'Docker']
    },
    {
      title: 'QA Engineer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description: 'Performed comprehensive testing of web and mobile applications with focus on automation and performance.',
      achievements: ['Automated 80% of test cases', 'Established CI/CD pipeline', 'Reduced regression testing time'],
      technologies: ['TestComplete', 'Postman', 'JMeter', 'Git']
    },
    {
      title: 'Junior QA Analyst',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Entry-level position focusing on manual testing, test case creation, and defect reporting.',
      achievements: ['Created 200+ test cases', 'Found 100+ critical bugs', 'Learned automation tools'],
      technologies: ['Manual Testing', 'JIRA', 'TestRail', 'SQL']
    }
  ]

  const certifications = [
    { name: 'ISTQB Foundation Level', issuer: 'ISTQB', year: '2023' },
    { name: 'Certified Agile Tester', issuer: 'iSQI', year: '2022' },
    { name: 'Selenium WebDriver', issuer: 'Udemy', year: '2021' },
    { name: 'API Testing with Postman', issuer: 'Coursera', year: '2021' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Md Omar Faruk Sakib
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-primary transition-colors relative ${
                  activeSection === section ? 'text-primary' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              SQA Engineer
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Ensuring software quality through comprehensive testing strategies, automation, 
              and continuous improvement. Passionate about delivering bug-free, high-performance applications.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
                  View Test Projects
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              {/* GitHub Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://github.com/sakibkst" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Github className="h-6 w-6" />
                  </Button>
                </a>
              </motion.div>
              {/* LinkedIn Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://www.linkedin.com/in/md-omar-faruk-sakib-773341251/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </a>
              </motion.div>
              {/* Mail Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="mailto:sakibkst38@gmail.com">
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Mail className="h-6 w-6" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating QA elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30 relative">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.about ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Myself Md Omar Faruk Sakib. I'm a dedicated SQA Engineer with over 2 years of experience in software quality assurance. 
                I specialize in creating comprehensive testing strategies, developing automation frameworks, 
                and ensuring the highest quality standards for software products.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans across Grey Box testing, manual and automated testing, performance testing, API testing, 
                and security testing. I'm passionate about continuous learning and staying updated with 
                the latest testing tools and methodologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Kuril Bissoroad,Kuratoli,Dhaka</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for opportunities</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/engineer-photo.jpg" 
                  alt="SQA Engineer Professional Photo"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section (Component) */}
      <Skill />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.skills ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Testing Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <motion.div 
                      className={`mx-auto mb-4 p-3 bg-gradient-to-r ${skillGroup.color} rounded-full w-fit`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skillGroup.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.projects ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Testing Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Star className="h-3 w-3" />
                        Featured
                      </motion.div>
                    )}
                    {project.img ? (
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Bug className="h-16 w-16 text-white/80" />
                      </motion.div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.testCases}</div>
                        <div className="text-xs text-muted-foreground">Test Cases</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{project.defectsFound}</div>
                        <div className="text-xs text-muted-foreground">Defects Found</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-500">{project.coverage}</div>
                        <div className="text-xs text-muted-foreground">Coverage</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {project.testPlan ? (
                          <a href={project.testPlan} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="group">
                              <FileCheck className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              Test Plan
                            </Button>
                          </a>
                        ) : (
                          <Button variant="outline" size="sm" className="group">
                            <FileCheck className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            Test Plan
                          </Button>
                        )}
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {project.viewResult ? (
                          <a href={project.viewResult} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="group">
                              <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              View Results
                            </Button>
                          </a>
                        ) : (
                          <Button size="sm" className="group">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            View Results
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.experience ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-8 last:pb-0"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {index < experience.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="ml-4 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {exp.title}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Target className="h-4 w-4 text-primary" />
                        </motion.div>
                      </CardTitle>
                      <CardDescription>
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-muted/30">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.certifications ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Certifications & Training
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      className="mx-auto mb-2 p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-fit"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer} • {cert.year}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate={isVisible.contact ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6">Let's discuss quality assurance</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new QA opportunities and challenging projects. 
                Whether you need help with testing strategy, automation, or quality processes, 
                feel free to reach out!
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'sakibkst38@gmail.com' },
                  { icon: Phone, text: '+880 1732546538' },
                  { icon: MapPin, text: 'Kuril Bissoroad, Kuratoli, Dhaka' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <span className="group-hover:text-primary transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input placeholder="Your Name" className="transition-all duration-300 focus:ring-2 focus:ring-primary" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input placeholder="Your Email" type="email" className="transition-all duration-300 focus:ring-2 focus:ring-primary" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input placeholder="Subject" className="transition-all duration-300 focus:ring-2 focus:ring-primary" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea placeholder="Your Message" rows={4} className="transition-all duration-300 focus:ring-2 focus:ring-primary" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full group">
                      Send Message
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Mail className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-4 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.p 
            className="text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            © 2025 • Md Omar Faruk Sakib • All Rights Reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

