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
    "AI Agents | LLM | Neuro Tech | Edge AI | CI/CD | Deep Learning | Computer Vision"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RfSLL5fIpMLjQqcbmY7eZkoH5kx2BCgz/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kapeleshh",
  linkedin: "https://www.linkedin.com/in/kapeleshh",
  gmail: "kapeleshh@gmail.com",
  scholar: "https://scholar.google.com/citations?user=mXiuuq4AAAAJ&hl=en",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I ship production ready AI Agents, EEG/Signal Processing, Computer Vision solutions and LLM SYSTEMS",
  skills: [
    emoji(
      "⚡ Build LLM-powered applications: multilingual STT→summarization with speaker diarization, semantic search, RAG pipelines, and transformer-based NLP."
    ),
    emoji(
      "⚡ Architect & ship end-to-end AI products — drug discovery pipelines, LLM meeting summarization, anomaly diagnosis — from prototype to cloud/edge production (AWS, Jetson)"
    ),
    emoji(
      "⚡ Engineer real-time computer vision systems for autonomous driving (ADAS), industrial defect detection, and privacy-first video anonymization"
    ),
    emoji(
      "⚡ Develop EEG/biosignal ML systems for mental health detection, cognitive aging research, and epilepsy diagnosis — with published peer-reviewed results"
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
      logo: require("./assets/images/IIT_Madras_Logo.svg.png"),
      subHeader: "Dual Degree (B.Tech + M.Tech) in Biological Engineering",
      duration: "2015 – 2020",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Korea Advanced Institute of Science and Technology (KAIST)",
      logo: require("./assets/images/KAIST_logo.svg.png"),
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
      companylogo: require("./assets/images/macnica_logo.png"),
      date: "May 2022 – Present",
      desc: "Building production-grade AI systems at the intersection of computer vision, EEG/signal ML, LLM applications, and cloud/edge deployment for industrial partners across Japan.",
      descBullets: [
        "RAG Knowledge Base for Drug Discovery: Architected an ETL + embedding pipeline ingesting 30+ years of R&D assets (PDFs, PPTs, Excel, chemical structures) into a vector-searchable knowledge base, cutting researcher retrieval time from hours to seconds.(OCR, LangChain, embeddings, AWS S3)",
        "Multilingual Meeting Intelligence Agent: Designed and deployed an end-to-end STT -> diarization -> LLM summarization pipeline with speaker attribution and action-item extraction, supporting English/Japanese cross-language workflows. (Whisper, pyannote, Transformers, FastAPI)",
        "CI/CD Hardening for AI Services: Identified systemic flaky-test and integration gaps from production failure signals; introduced targeted unit/integration tests and security gates, measurably reducing failed deploys and rollback frequency. (GitHub Actions, Docker, AWS)",
        "Multi-Tenant AWS Infrastructure: Standardized cloud architecture across tenant environments and resolved critical UI/UX defects, accelerating new tenant onboarding and improving platform reliability. (AWS Lambda, S3, CloudWatch)",
        "Privacy-First Video Anonymization: Fine-tuned YOLOv8 for face and license-plate detection with post-processing blur; packaged for edge inference on roadway datasets to meet compliance requirements. (PyTorch, OpenCV, TensorRT)",
        "Japanese Fraud/Duplicate Detection: Built a semantic textual similarity system for Japanese-language duplicate and fraud detection using transformer-based sentence embeddings, deployed as a production API.(Sentence-Transformers, Japanese tokenizers, FastAPI)",
        "Anomaly RCA for Autonomous Heavy Machinery: Engineered a telemetry ingestion and statistical root-cause analysis system for interoperability faults, reducing unplanned downtime for autonomous machinery fleets. (Pandas, scikit-learn, time-series analytics)",
        "EEG Cognitive Aging Research (APSIPA 2024): Led EEG connectivity analysis on the LEMON dataset; published findings on cognitive resilience and aging at APSIPA ASC 2024. (MNE-Python, graph connectivity)",
        "Mental Health Detection (BMK Center, Hiroshima University): Built a deep learning pipeline fusing EEG and physiological markers for early-stage depression and stress detection. (PyTorch, signal processing)",
        "Real-Time RSVP EEG Classification: Engineered a real-time EEG inference system processing 100--120 images/min, accelerating stimulus-response tagging throughput for cognitive experiments by3x times vs. manual labeling. (EEG, real-time inference, Python)",
        "Enzyme Reaction Atom Mapping for Drug Discovery (Tech Lead): Architected a graph neural network system for reactant-to-product atom mapping, training GCN, GIN, and GraphSAGE backbones alongside transformer-based models on 15,000+ enzyme reactions; achieved 97% accuracy via a novel Weisfeiler-Lehman graph hashing framework that correctly resolves chemically equivalent atoms, outperforming standard evaluation metrics.(PyTorch, PyTorch Geometric, RDKit)",
        "LLM Agentic Pipeline for Reaction Explainability: Built a modular LangGraph pipeline integrating GNN-based atom mapping with multimodal LLMs to auto-generate step-by-step mechanistic explanations of chemical reactions — covering bond changes, electron flow, and product prediction with annotated visual diffs. Engineered a provider-agnostic architecture supporting Gemini, GPT-4o, and local Ollama with auto-retry quality validation. (LangGraph, RDKit, Gemini/GPT-4o)"
      ]
    },
    {
      role: "AI Product Developer",
      company: "Bipolar Factory, India",
      companylogo: require("./assets/images/bpf_logo.png"),
      date: "2020 – 2022",
      desc: "Prototyped and deployed AI/ML products for edge devices and industrial automation in the Indian market.",
      descBullets: [
        "Edge Driver Drowsiness Detection: Designed and deployed a real-time fatigue detection system on Jetson Nano + GPS for logistics fleets; achieved sub-100ms inference latency with TensorRT-optimized models for highway transit safety. (PyTorch, OpenCV, TensorRT, ONNX)",
        "Automotive Defect Detection: Built and deployed a machine-vision defect classification system for precision automotive parts, improving on-line quality control accuracy and reducing manual inspection overhead. (CV, deep learning, scikit-learn)"
      ]
    },
    {
      role: "Master's Thesis Researcher",
      company: "IIT Madras — Rehabilitation Bioengineering Group",
      companylogo: require("./assets/images/rbg_logo.png"),
      date: "May 2019 – Jul 2020",
      desc: "Guide: Dr. Venkatesh Balasubramanian. Conducted statewide analysis of Pediatric Resuscitation Emergency Medical (PREM) services in collaboration with the State Health Ministry.",
      descBullets: [
        "Conducted the first statewide data-driven audit of Pediatric Resuscitation Emergency Medical (PREM) services in collaboration with the Tamil Nadu State Health Ministry, covering multiple public hospital networks}.",
        "Designed and executed a stratified demographic analysis pipeline — cleaning, merging, and analyzing structured EHR and referral records — to surface disparities in response timelines, survival outcomes, and inter-hospital transfer patterns.",
        "Applied multivariate statistical modelling (logistic regression, comorbidity association analysis) to identify protocol gaps; findings directly informed state-level emergency care standardization recommendations."
      ]
    },
    {
      role: "Summer Research Intern",
      company: "ICHIT, Taipei Medical University",
      companylogo: require("./assets/images/tmu_logo.svg.png"),
      date: "Jun 2019 – Jul 2019",
      desc: "Research internship under Dr. Yu-Chuan Jack Li and Dr. Shabbir Syed-Abdul at the International Center for Health Information Technology (ICHIT).",
      descBullets: [
        "Built a deep learning risk stratification model for Chronic Kidney Disease (CKD) onset prediction using longitudinal Taiwan National Health Insurance claims data (100k+ patient records); achieved 0.95 AUROC for 12-month onset — results published in Healthcare (MDPI, 2021).",
        "Applied gradient-based attribution maps (saliency/GradCAM) to surface clinically interpretable risk factors, enabling physician validation of model decisions and supporting regulatory review.",
        "Collaborated in an international research team across Taiwan and India, delivering a complete ML pipeline — data preprocessing, model training, evaluation, and clinical reporting — within a 6-week internship."
      ]
    },
    {
      role: "Director and COO",
      company: "Eufloria Marketing, India",
      companylogo: require("./assets/images/budsnstrings_logo.jpg"),
      date: "2016 – 2018",
      desc: "Founded and scaled a tech-enabled B2B cut-flower fair-price marketplace from the ground up.",
      descBullets: [
        "Founded a tech-enabled B2B agri-marketplace connecting flower farmers directly to retailers, eliminating 2--3 middlemen layers and establishing fair-price discovery for both ends of the supply chain.",
        "Scaled from zero to 50+ farmer partners and 70+ retail clients across 4 states within 6 months by building a demand-aggregation model and standardized grading/packaging protocols.",
        "Owned end-to-end operations — logistics routing, cold-chain vendor management, and payment reconciliation — achieving a 95%+ on-time delivery rate and cutting post-harvest spoilage losses by 40%.",
        "Identified a higher-margin vertical and executed a strategic pivot to \textbf{farm-to-weddings} (bulk event contracts), growing gross margins by \textbf{2.3$\times$} and reducing revenue volatility through longer-term commitments."
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
      projectName: "KashU — Cross-Platform Investment Portfolio Tracker",
      projectDesc:
        "Shipped a production-grade Flutter app targeting 6 platforms (iOS, Android, Web, macOS, Linux, Windows) from a single Dart codebase; designed a feature-first clean architecture with repository pattern, service abstraction layer, and Riverpod dependency injection. Built a multi-source price aggregation engine routing 8 asset types across 3 APIs (Yahoo Finance, CoinGecko, Open Exchange Rates) through a unified PriceService interface with 30-minute in-memory caching and rate-limit-aware request spacing. Engineered a multi-step commodity pricing pipeline and solved Flutter Web CORS restrictions by building a custom Python 3 proxy server with host whitelisting and OPTIONS preflight handling. Stack: Flutter/Dart 3, Riverpod 2, Hive NoSQL, fl_chart, Yahoo Finance, CoinGecko, Open Exchange Rates, Python 3",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/kashU"
        }
      ]
    },
    {
      projectName:
        "Personal Fitness Coach — AI-Powered Health Analytics Platform",
      projectDesc:
        "Architected a full-stack health intelligence platform ingesting real Garmin biometric data (35+ metrics/day: sleep stages, HRV, body battery, stress, respiration) via a dual-path pipeline — live OAuth sync through Garmin Connect API and a manual export parser. Built a Python statistical analytics engine implementing Pearson correlation matrices across 12 metrics, time-lagged cross-correlations, score anomaly detection with Bessel's correction, personal percentile baselines, and 7-day rolling trend analysis — all served via a 14-endpoint REST API. Designed a composite health score algorithm and a workout readiness predictor with rule-based insight generation and a chat interface architected for LLM drop-in replacement. Shipped a Flutter frontend with 7 screens deployed to Web with iOS/Android ready from a single codebase. Stack: Python 3.12, Flutter/Dart 3, Provider, fl_chart, Syncfusion Charts, Garmin Connect API (OAuth/garth)",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/fitness_coach"
        }
      ]
    },
    {
      projectName: "LLM Planning Agent — Tree-Search Sokoban Solver",
      projectDesc:
        "Integrated Mistral-7B with tree-search algorithms (A*, MCTS, Beam, Adaptive) to solve 155 Sokoban puzzles across 10 difficulty levels, benchmarking LLM planning under combinatorial constraints. Built a multi-agent framework with 6 collaborating AI personas, consensus building, self-improvement loops, and real-time strategy adaptation. Delivered a production-ready research platform: modular Python system with pluggable LLM backends, automated tests, comprehensive CLI, and visualization dashboards for constraint-based LLM planning. Stack: Python, Mistral-7B, Transformers, NetworkX, FastAPI, PyTest",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kapeleshh/pathfinder-llm"
        }
      ]
    },
    {
      projectName: "qEEG Analysis Toolkit",
      projectDesc:
        "Built a production-ready quantitative EEG package with modules for preprocessing, spectral analysis, epileptiform detection, and ML classification — supporting ADHD, anxiety, autism, and depression research. Shipped with Dockerized deployment, CLI, automated tests, and full docs; implemented biomedical algorithms including theta/beta ratio, frontal asymmetry, Brodmann area mapping, and real-time ICA artifact removal. Stack: Python, MNE-Python, scikit-learn, SciPy, Docker, pytest, Sphinx, PyWavelets, NiBabel, NiLearn",
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
      image: require("./assets/images/apsipa_logo.png"),
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
      image: require("./assets/images/mdpi_logo.png"),
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
      image: require("./assets/images/embs_logo.png"),
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
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
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
