import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const defaultPersonalDetails = {
    name: "Sricharan Mahavadi",
    role: "Data & AI Engineering Professional",
    summary: "Data & AI Engineering professional with 4+ years of experience. I build production-grade ETL pipelines, scalable data warehouses, and actionable dashboards. Currently specializing in integrating agentic AI models with enterprise systems using Model Context Protocol (MCP), LangChain, and advanced RAG orchestrations.",
    location: "San Francisco, CA (Open to Relocation)",
    phone: "+(617)-259-6784",
    email: "smahavadi.official@gmail.com",
    social: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/sricharan-mahavadi",
            iconName: "LinkedIn"
        },
        {
            platform: "GitHub",
            url: "https://github.com/mscharan-analytics",
            iconName: "GitHub"
        },
        {
            platform: "Email",
            url: "mailto:smahavadi.official@gmail.com",
            iconName: "Email"
        }
    ]
};

const defaultSkills = {
    dataEngineering: ["Python", "SQL", "Databricks", "Snowflake", "Apache Spark", "Kafka", "AWS", "GCP", "Azure", "PostgreSQL"],
    analyticsML: ["Model Context Protocol (MCP)", "LangChain", "CrewAI", "RAG Pipelines", "Power BI", "Tableau", "Streamlit", "Scikit-Learn", "A/B Testing", "XGBoost"],
    development: ["Git", "Docker", "FastAPI / Flask", "CI/CD Workflows", "n8n Automation", "Data Structures & Algorithms", "Agile / Scrum"]
};

const defaultExperience = [
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

const defaultProjects = [
    {
        title: "agentic-platform",
        category: "mcp",
        description: "An open-source Python-first autonomous multi-agent platform for enterprises. Supports 12 specialized agents communicating via Agent Context Protocol (ACP) and Agent-to-Agent (A2A) protocol, local-first inference (Ollama), RBAC controls, and policy-as-code enforcement.",
        tech: ["Python", "Ollama", "ACP SDK", "fastmcp", "Pydantic", "Docker"],
        github: "https://github.com/mscharan-analytics/agentic-platform",
        stars: 34,
        forks: 5,
        language: "Python",
        cloneCommand: "pip install enterprise-agent-platform\nagentic-platform --goal 'Safe build pipeline'",
        mcpDemo: {
            tools: [
                { name: "orchestrate_workflow", desc: "Decompose a goal and route tasks to specialized agents (Solver, Planner, Critic)" },
                { name: "evaluate_policy", desc: "Scan proposed actions against YAML RBAC and safety policies" }
            ],
            queries: [
                {
                    prompt: "Deploy a microservice under strict security guidelines",
                    sql: "agentic-platform --goal 'Deploy microservice with safety checks'",
                    result: "[\n  {\"agent\": \"Orchestrator\", \"action\": \"Decomposed goal: PolicyCheck -> Deploy\"},\n  {\"agent\": \"Critic\", \"action\": \"Enforced strict RBAC: user 'sricharan' authorized\"},\n  {\"agent\": \"Recovery\", \"action\": \"Verified rollout health, all checks passed\"},\n  {\"status\": \"SUCCESS\", \"audit_log_sha\": \"6829eb7796aef59b34\"}\n]"
                },
                {
                    prompt: "Analyze query code compliance",
                    sql: "agentic-platform --goal 'Audit code-worker output for syntax compliance'",
                    result: "[\n  {\"agent\": \"CodeWorker\", \"action\": \"Generated candidate Python script\"},\n  {\"agent\": \"Evaluator\", \"action\": \"Validated lint/typechecks successfully\"},\n  {\"status\": \"COMPLIANT\"}\n]"
                }
            ]
        }
    },
    {
        title: "mcp-snowflake-server",
        category: "mcp",
        description: "An open-source Model Context Protocol (MCP) server that exposes Snowflake data warehouse capabilities to LLM clients, enabling autonomous schema exploration, read-only SQL queries, and metadata extraction.",
        tech: ["Python", "MCP SDK", "Snowflake", "SQLAlchemy"],
        github: "https://github.com/mscharan-analytics/mcp-snowflake-server",
        stars: 42,
        forks: 9,
        language: "Python",
        cloneCommand: "npm install -g @modelcontextprotocol/sdk\n# or git clone, pip install -e .",
        mcpDemo: {
            tools: [
                { name: "query_snowflake", desc: "Run analytical SQL queries on Snowflake" },
                { name: "get_schema", desc: "Fetch table definitions and database schemas" }
            ],
            queries: [
                {
                    prompt: "Find total marketing conversions by channel",
                    sql: "SELECT channel, SUM(conversions) FROM mktg.conversions GROUP BY channel ORDER BY 2 DESC;",
                    result: "[\n  {\"CHANNEL\": \"Paid Search\", \"CONVERSIONS\": 18450},\n  {\"CHANNEL\": \"Email\", \"CONVERSIONS\": 15200},\n  {\"CHANNEL\": \"Social\", \"CONVERSIONS\": 9840}\n]"
                },
                {
                    prompt: "Get active database schemas",
                    sql: "SHOW SCHEMAS IN DATABASE PROD_ANALYTICS;",
                    result: "[\n  {\"NAME\": \"MERCHANDISING\"},\n  {\"NAME\": \"MARKETING\"},\n  {\"NAME\": \"COMMERCIAL\"}\n]"
                }
            ]
        }
    },
    {
        title: "mcp-postgres-analytics",
        category: "mcp",
        description: "Model Context Protocol adapter for PostgreSQL databases. Exposes performance tracing tools, query planner analysis, and structured table query hooks directly to agentic environments.",
        tech: ["TypeScript", "Node.js", "PostgreSQL", "MCP SDK"],
        github: "https://github.com/mscharan-analytics/mcp-postgres-analytics",
        stars: 28,
        forks: 4,
        language: "TypeScript",
        cloneCommand: "git clone https://github.com/mscharan-analytics/mcp-postgres-analytics.git",
        mcpDemo: {
            tools: [
                { name: "analyze_query_plan", desc: "Expose EXPLAIN ANALYZE results for query optimization" },
                { name: "read_database_schema", desc: "Fetch PostgreSQL system catalog tables" }
            ],
            queries: [
                {
                    prompt: "List active table lock statuses",
                    sql: "SELECT relation::regclass, mode, granted FROM pg_locks WHERE NOT granted;",
                    result: "[] // No blocked locks. System healthy."
                }
            ]
        }
    },
    {
        title: "Transactional Email Monetization",
        category: "pipeline",
        description: "Architected and productionized Albertsons transactional email monetization data pipelines tracking user metrics against a $9M annual revenue target.",
        tech: ["Python", "Apache Spark", "BigQuery", "Airflow"],
        github: "https://github.com/mscharan-analytics",
        stars: 14,
        forks: 3,
        language: "Python",
        impact: "$9M revenue target tracked"
    },
    {
        title: "NFPT Transaction Projection Pipeline",
        category: "pipeline",
        description: "Implemented a daily projections pipeline ingestion process handling 10M+ transaction records into governed analytical tables for Albertsons' banners.",
        tech: ["Python", "SQL", "GCP Cloud Functions", "dbt"],
        github: "https://github.com/mscharan-analytics",
        stars: 19,
        forks: 6,
        language: "Python",
        impact: "10M+ transaction records daily"
    },
    {
        title: "Grant Discovery & n8n Automation",
        category: "pipeline",
        description: "A custom grant discovery tool and workflow pipeline built using Streamlit and n8n, saving $1,000+ monthly in operational costs for a non-profit.",
        tech: ["Python", "Streamlit", "n8n", "PostgreSQL"],
        github: "https://github.com/mscharan-analytics",
        stars: 25,
        forks: 8,
        language: "Python",
        impact: "Saved $1,000+/mo, 80% manual effort cut"
    },
    {
        title: "Novartis Commercial RLT Pipeline",
        category: "pipeline",
        description: "Production clinical data ingestion pipeline processing ~2TB/day of distributor datasets, supported by automated quality checks and 90% SLA thresholds.",
        tech: ["AWS", "Snowflake", "Alteryx", "Python"],
        github: "https://github.com/mscharan-analytics",
        stars: 11,
        forks: 2,
        language: "Python",
        impact: "2TB/day throughput, 90%+ SLA"
    }
];

const defaultEducation = [
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

const defaultCertifications = [
    {
        title: "Microsoft Certified: Power BI Data Analyst Associate",
        issuer: "Microsoft",
        date: "2025",
        details: "Designing and building scalable data models, cleaning and transforming data, and enabling advanced analytic capabilities.",
        badge: "Power BI Associate"
    },
    {
        title: "Databricks Certified Data Engineer Associate",
        issuer: "Databricks Academy",
        date: "2025",
        details: "Designing, building, and maintaining transactional data processing pipelines, Delta Lake tables, and lakehouse architectures.",
        badge: "Data Engineer Associate"
    },
    {
        title: "Databricks Certified Data Analyst Associate",
        issuer: "Databricks Academy",
        date: "2025",
        details: "Performing query design, optimization, dashboard building, and data visualization on Databricks SQL warehouses.",
        badge: "Data Analyst Associate"
    },
    {
        title: "Databricks Certified Generative AI Engineer Associate",
        issuer: "Databricks Academy",
        date: "2026",
        details: "Developing and deploying Retrieval-Augmented Generation (RAG) pipelines, choosing and tuning LLMs, and implementing agentic guards.",
        badge: "Generative AI Engineer"
    },
    {
        title: "Alteryx Designer Core Certified",
        issuer: "Alteryx",
        date: "2025",
        details: "Designing workflow automation pipelines, data preparation, parsing, blending, and advanced spatial analytics in Alteryx Designer.",
        badge: "Alteryx Core"
    }
];

// Combine loaded states
const loadedData = {
    personalDetails: defaultPersonalDetails,
    skills: defaultSkills,
    experience: defaultExperience,
    projects: defaultProjects,
    education: defaultEducation,
    certifications: defaultCertifications
};

if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('sricharan_portfolio_data');
    if (stored && stored.includes('agentic-platform')) {
        try {
            const parsed = JSON.parse(stored);
            if (parsed.personalDetails) loadedData.personalDetails = parsed.personalDetails;
            if (parsed.skills) loadedData.skills = parsed.skills;
            if (parsed.experience) loadedData.experience = parsed.experience;
            if (parsed.projects) loadedData.projects = parsed.projects;
            if (parsed.education) loadedData.education = parsed.education;
            if (parsed.certifications) loadedData.certifications = parsed.certifications;
        } catch (e) {
            console.error("Failed to parse stored portfolio data", e);
        }
    }
}

// Icon mapper
const getSocialIcon = (platform) => {
    if (platform === 'LinkedIn') return Linkedin;
    if (platform === 'GitHub') return Github;
    return Mail;
};

// Export actual active states
export const personalDetails = {
    ...loadedData.personalDetails,
    social: loadedData.personalDetails.social.map(s => ({
        ...s,
        icon: getSocialIcon(s.platform)
    }))
};

export const skills = loadedData.skills;
export const experience = loadedData.experience;
export const projects = loadedData.projects;
export const education = loadedData.education;
export const certifications = loadedData.certifications;
