import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const personalDetails = {
    name: "Sricharan Mahavadi",
    role: "Data Engineering & Analytics Professional",
    summary: "Analytics and Data Engineering professional with 4+ years delivering commercial insights and data products across healthcare and retail. Specialize in segmentation and targeting, marketing monetization, and end-to-end ETL/ELT from RDBMS to data warehousing, deploying production-grade pipelines and dashboards using Python/SQL on GCP/Azure.",
    location: "San Francisco, CA (Open to Relocation)",
    phone: "+(617)-259-6784",
    email: "smahavadi.official@gmail.com",
    social: [
        {
            platform: "LinkedIn",
            url: "#", // User provided "LinkedIn" in resume but no URL, placeholder
            icon: Linkedin,
        },
        {
            platform: "GitHub",
            url: "https://github.com/mscharan-analytics",
            icon: Github,
        },
        {
            platform: "Email",
            url: "mailto:smahavadi.official@gmail.com",
            icon: Mail,
        }
    ]
};

export const skills = {
    dataEngineering: ["Python", "SQL", "Databricks", "Snowflake", "Spark", "Kafka", "AWS", "GCP", "Azure", "MySQL"],
    analyticsML: ["Power BI", "Tableau", "Streamlit", "scikit-learn", "A/B testing", "XGBoost", "LangChain", "CrewAI", "RAG pipeline"],
    development: ["Git", "Docker", "Flask/FastAPI", "CI/CD", "JIRA", "Agile/Scrum", "Alteryx", "Data Structures & Algorithms"]
};

export const experience = [
    {
        company: "Albertsons Companies",
        role: "Data Engineer (Merchandising & Marketing Analytics)",
        period: "May 2025 - Present",
        description: [
            "Delivered the production data pipeline for transactional email monetization toward a $9M annual CPG revenue target, establishing tracking-ready datasets and API-backed reporting hooks.",
            "Shipped and deployed daily NFPT projection ETL pipelines processing 10M+ transactional records into a governed data warehouse (RDBMS/BigQuery), enabling category performance reporting and planning across 12 divisions.",
            "Led a cross-functional workstream with architects to operationalize a scenario-based projections workflow for 20 Albertsons banners, enabling faster performance-driven adjustments.",
            "Spearheaded a price elasticity POC across 10 categories; built an explainable model with RDBMS + data warehouse, ETL, and deployment approach for pricing decisions."
        ]
    },
    {
        company: "H.Y.P.E to Empower Inc.",
        role: "Business Analyst (Program Analytics)",
        period: "Feb 2025 - May 2025",
        description: [
            "Architected grant discovery tool using Python and Streamlit to identify and track funding opportunities for HIV-focused nonprofit, replacing paid platform and saving $1,000+ monthly in operational costs.",
            "Optimized grant tracking and management workflows using Python and n8n, reducing manual effort by 80% and improving operational accuracy by 20% across application and reporting processes."
        ]
    },
    {
        company: "Novartis Pharmaceuticals",
        role: "Data Engineering & Field Insights Analyst (Commercial Analytics)",
        period: "Jul 2022 - Aug 2023",
        description: [
            "Architected and productionized RLT data pipelines (Snowflake, AWS, Python, Alteryx) processing ~2TB/day, translating requirements into technical design and supporting test/UAT and SLA-based operations (~90% SLA).",
            "Orchestrated RLT segmentation and targeting analytics, converting adoption and opportunity signals into prioritized HCP lists and territory-level insights to drive go-to-market execution.",
            "Operationalized incentive compensation analytics by linking field sales performance to IC metrics, improving goal-attainment transparency and accelerating monthly/quarterly IC cycles.",
            "Automated and fortified ingestion and data quality validation across 30+ distributors and 27 vendors, mentoring a team of 3 junior analysts to improve timeliness and reduce downstream reporting defects."
        ]
    },
    {
        company: "IQVIA (Quintiles and IMS Health)",
        role: "Data Strategy Analyst (Healthcare Analytics)",
        period: "Aug 2020 - Jul 2022",
        description: [
            "Identified treatment switching patterns across 500K+ patient records for F-500 pharma brands (Amgen, Sanofi, UCB, Novartis), pinpointing market drivers that shaped commercial strategy for 15+ products.",
            "Engineered real-time pharmacy tracking system capturing prescription trends, enabling sales teams to pivot territory strategies within days instead of weeks.",
            "Delivered 40+ automated Power BI and Tableau dashboards, eliminating 20+ manual hours monthly and accelerating report delivery from one week to 24 hours.",
            "Optimized campaign measurement across 14 territories using claims and sales data, aligning KPIs for 10+ stakeholders and reducing GDPR validation cycles by 15%."
        ]
    }
];

export const projects = [
    {
        title: "Grant Discovery Tool",
        description: "Architected a grant discovery tool using Python and Streamlit to identify and track funding opportunities for HIV-focused nonprofit, replacing paid platform.",
        tech: ["Python", "Streamlit", "Data Processing"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    },
    {
        title: "Real-time Pharmacy Tracking",
        description: "Engineered real-time pharmacy tracking system capturing prescription trends, enabling sales teams to pivot territory strategies days faster.",
        tech: ["SQL", "Tableau", "ETL"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    },
    {
        title: "RLT Data Pipelines",
        description: "Architected and productionized RLT data pipelines processing ~2TB/day, translating requirements into technical design.",
        tech: ["Snowflake", "AWS", "Python", "Alteryx"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    },
    {
        title: "Customer Segmentation Engine",
        description: "Built a K-Means clustering model to segment 1M+ customers based on purchasing behavior, integrating results into Salesforce for targeted marketing campaigns.",
        tech: ["Python", "Scikit-learn", "SQL", "Pandas"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    },
    {
        title: "Airflow ETL Orchestrator",
        description: "Designed a distributed ETL orchestration system using Apache Airflow and Docker, reducing data latency by 40% and ensuring 99.9% pipeline uptime.",
        tech: ["Apache Airflow", "Docker", "Python", "PostgreSQL"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    },
    {
        title: "Predictive Sales Forecasting",
        description: "Developed an XGBoost-based forecasting API deployed on FastAPI to predict weekly sales trends for 200+ retail locations with 85% accuracy.",
        tech: ["XGBoost", "FastAPI", "Python", "Azure"],
        link: "#",
        github: "https://github.com/mscharan-analytics"
    }
];

export const education = [
    {
        institution: "Boston University, Questrom School of Business",
        degree: "M.S. in Business Analytics (Healthcare Analytics)",
        year: "Jan 2025"
    },
    {
        institution: "National Institute of Technology, India",
        degree: "B-Tech in Engineering",
        year: "May 2020"
    }
];
