/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "kapeleshh",
  title: "Hi, I'm Kapeleshh KS",
  subTitle: emoji(
    "AI Engineer with 5+ years at the intersection of biotech, robotics & AI 🚀 — shipping production systems in computer vision, EEG/signal ML, LLM applications, and edge deployment (AWS, Jetson)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m8C0hvhwYRcZFykEbWDOCtzR7E4aIhpp/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kapeleshh",
  linkedin: "https://www.linkedin.com/in/kapeleshh",
  gmail: "kapeleshh@gmail.com",
  scholar:
    "https://scholar.google.com/citations?user=mXiuuq4AAAAJ&hl=en",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AI ENGINEER SPECIALIZING IN COMPUTER VISION, EEG/SIGNAL ML, AND LLM SYSTEMS",
  skills: [
    emoji(
      "⚡ Architect & ship end-to-end AI products — drug discovery pipelines, LLM meeting summarization, anomaly diagnosis — from prototype to cloud/edge production (AWS, Jetson)"
    ),
    emoji(
      "⚡ Engineer real-time computer vision systems for autonomous driving (ADAS), industrial defect detection, and privacy-first video anonymization"
    ),
    emoji(
      "⚡ Develop EEG/biosignal ML systems for mental health detection, cognitive aging research, and epilepsy diagnosis — with published peer-reviewed results"
    ),
    emoji(
      "⚡ Build LLM-powered applications: multilingual STT→summarization with speaker diarization, semantic search, RAG pipelines, and transformer-based NLP for Japanese text"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "R / MATLAB",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "EEG / Signal",
      fontAwesomeClassname: "fas fa-wave-square"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Madras (IITM)",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Dual Degree (B.Tech + M.Tech) in Biological Engineering",
      duration: "2015 – 2020",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Korea Advanced Institute of Science and Technology (KAIST)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Semester Abroad in Bio and Brain Engineering",
      duration: "August 2018 – December 2018",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Disabled — proficiency bars removed
  experience: [],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer — AI & Digital Business Development",
      company: "Macnica, Japan",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2022 – Present",
      desc: "Building production-grade AI systems at the intersection of computer vision, EEG/signal ML, LLM applications, and cloud/edge deployment for industrial partners across Japan.",
      descBullets: [
        "Built a data ingestion pipeline converting 30+ years of drug discovery R&D documents (PDFs, PPTs, Excel, chemical structures) into a centralized searchable knowledge base using OCR, OSR, and rule-based heuristics",
        "Implemented semantic textual similarity engine using transformer-based models for Japanese text to detect duplicate entries for fraud detection",
        "Delivered multi-language speech-to-text + LLM summarization pipeline with speaker diarization and cross-language translation for accurate, speaker-aware meeting summaries",
        "Optimized CI/CD pipeline for AI deployments: identified flaky tests, vulnerabilities, and integration issues; strengthened reliability via targeted unit and integration testing",
        "Streamlined multi-tenant AWS operations, improving infrastructure consistency and scalability; resolved UI/UX inconsistencies to enhance product reliability",
        "Improved object detection performance for traffic signs, vehicles, license plates, and faces by fine-tuning CNN-based pipelines for ADAS anonymization and accuracy",
        "Created a statistical root-cause diagnosis system to analyze anomalies in autonomous heavy machinery, reducing downtime from interoperability issues",
        "Drove EEG-based research on cognitive aging and brain connectivity for MCI patients using the LEMON dataset — co-authored a peer-reviewed publication at APSIPA 2024",
        "Built EEG and physiological-marker based mental health detection system for early signs of depression and stress in working adults (BMK Center, Hiroshima University partnership)",
        "Engineered real-time RSVP EEG classification system decoding 100–120 images/min for high-speed visual cognition experiments"
      ]
    },
    {
      role: "AI Product Developer",
      company: "Bipolar Factory, India",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "2020 – 2022",
      desc: "Prototyped and deployed AI/ML products for edge devices and industrial automation in the Indian market.",
      descBullets: [
        "Prototyped a deployable drowsiness detection system using Jetson Nano + GPS for fatigue monitoring in Indian logistics fleets, issuing real-time alerts during highway transit",
        "Designed and deployed a machine vision system for automated defect detection in precision automotive components, improving classification accuracy on the assembly line",
        "Engineered an EEG-based epilepsy detection pipeline using Quantitative EEG (QEEG) metrics — extracted spectral, amplitude, and connectivity features benchmarked against normative statistical datasets to identify abnormal neurological patterns"
      ]
    },
    {
      role: "Master's Thesis Researcher",
      company: "IIT Madras — Rehabilitation Bioengineering Group",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "May 2019 – Jul 2020",
      desc: "Guide: Dr. Venkatesh Balasubramanian. Conducted statewide analysis of Pediatric Resuscitation Emergency Medical (PREM) services in collaboration with the State Health Ministry.",
      descBullets: [
        "Performed stratified demographic analysis and assessed treatment timelines, resuscitation outcomes, and referral trends across public hospitals",
        "Led comorbidity-treatment association study using multivariate statistics to inform standardization of emergency medical protocols",
        "Collaborated directly with State Health Ministry to evaluate emergency care delivery at a system level"
      ]
    },
    {
      role: "Summer Research Intern",
      company: "ICHIT, Taipei Medical University",
      companylogo: require("./assets/images/googleAssistant.svg"),
      date: "Jun 2019 – Jul 2019",
      desc: "Research internship under Dr. Yu-Chuan Jack Li and Dr. Shabbir Syed-Abdul at the International Center for Health Information Technology (ICHIT).",
      descBullets: [
        "Developed a deep learning-based risk prediction tool for Chronic Kidney Disease (CKD) using CNNs on Taiwan's EHR claims data, achieving 0.95 AUROC for 12-month onset prediction",
        "Visualized feature saliency using gradient attribution maps to enhance interpretability for clinical decision-making support",
        "Co-authored peer-reviewed publication in Healthcare (MDPI) 2021"
      ]
    },
    {
      role: "Director and COO",
      company: "Eufloria Marketing, India",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2016 – 2018",
      desc: "Founded and scaled a tech-enabled B2B cut-flower fair-price marketplace from the ground up.",
      descBullets: [
        "Onboarded 50+ farmers and delivered daily supply to 70+ retailers across 4 states within 6 months",
        "Achieved 95%+ on-time delivery rate and reduced spoilage losses by 40% through streamlined logistics and vendor operations",
        "Pivoted operating model from farm-to-retail to farm-to-weddings, increasing gross margins by 2.3x through long-term high-value client contracts"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open-Source Projects",
  subtitle: "AI/ML PROJECTS AND RESEARCH TOOLS I'VE BUILT AND OPEN-SOURCED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Cookify — Multimodal Recipe Extraction",
      projectDesc:
        "End-to-end multimodal pipeline that converts cooking videos into structured JSON recipes by fusing CV + ASR + NLP signals. Features YOLOv8, Whisper, spaCy, and modular Python architecture.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/cookify"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Tree-Based Sokoban Planner (LLM Planning)",
      projectDesc:
        "End-to-end planning system integrating Mistral-7B with tree search (A*, MCTS, Beam, Adaptive) to solve 155 Sokoban puzzles. Features multi-agent framework with 6 collaborating AI personas.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/pathfinder-llm"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Quantitative EEG Analysis Toolkit",
      projectDesc:
        "Comprehensive qEEG package with modules for preprocessing, spectral analysis, epileptiform detection, and ML classification. Supports research in ADHD, anxiety, autism, and depression.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/qeeg-toolkit"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Research Publications & Achievements 🏆"),
  subtitle:
    "Peer-reviewed publications and presentations at top AI/biomedical engineering conferences",

  achievementsCards: [
    {
      title: "APSIPA ASC 2024 — First Author",
      subtitle:
        "Exploring Brain Connectivity Patterns and Cognitive Resilience in Aging: A Study with the LEMON Dataset. Published in APSIPA ASC 2024.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "APSIPA 2024 Publication",
      footerLink: [
        {
          name: "View Publication",
          url: "https://doi.org/10.1109/APSIPAASC63619.2025.10849345"
        }
      ]
    },
    {
      title: "Healthcare MDPI 2021 — Co-Author",
      subtitle:
        "Machine learning prediction models for chronic kidney disease using national health insurance claim data in Taiwan. Published in Healthcare (MDPI) 2021.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Healthcare MDPI Publication",
      footerLink: [
        {
          name: "View Publication",
          url: "https://doi.org/10.3390/healthcare9050546"
        }
      ]
    },
    {
      title: "IEEE EMBS 2024 — Poster Presentation",
      subtitle:
        "Label Distribution Learning for Memory Decline: A Deep Learning Approach Using EEG Analysis. Presented at IEEE EMBS 2024.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IEEE EMBS 2024 Poster",
      footerLink: [
        {
          name: "Conference Info",
          url: "https://embc.embs.org/2024/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "kapeleshh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
