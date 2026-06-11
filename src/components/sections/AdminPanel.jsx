import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Key, 
    Lock, 
    User, 
    LogOut, 
    Save, 
    RotateCcw, 
    Plus, 
    Trash2, 
    Copy, 
    Check, 
    Briefcase, 
    Sparkles, 
    BookOpen, 
    Code, 
    Award,
    AlertCircle,
    Info,
    Upload,
    Globe,
    Terminal,
    Loader2
} from 'lucide-react';

// Default static definitions matching resumeData.js structure
const defaultPersonalDetails = {
    name: "Sricharan Mahavadi",
    role: "Data & AI Engineering Professional",
    summary: "Data & AI Engineering professional with 4+ years of experience. I build production-grade ETL pipelines, scalable data warehouses, and actionable dashboards. Currently specializing in integrating agentic AI models with enterprise systems using Model Context Protocol (MCP), LangChain, and advanced RAG orchestrations.",
    location: "San Francisco, CA (Open to Relocation)",
    phone: "+(617)-259-6784",
    email: "smahavadi.official@gmail.com",
    social: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/sricharan-mahavadi", iconName: "LinkedIn" },
        { platform: "GitHub", url: "https://github.com/mscharan-analytics", iconName: "GitHub" },
        { platform: "Email", url: "mailto:smahavadi.official@gmail.com", iconName: "Email" }
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

const AdminPanel = () => {
    // Auth States
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authError, setAuthError] = useState('');

    // Editor Data State
    const [formData, setFormData] = useState({
        personalDetails: { ...defaultPersonalDetails },
        skills: { ...defaultSkills },
        experience: [ ...defaultExperience ],
        projects: [ ...defaultProjects ],
        education: [ ...defaultEducation ],
        certifications: [ ...defaultCertifications ]
    });

    const [activeTab, setActiveTab] = useState('personal');
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [copied, setCopied] = useState(false);

    // PDF Upload States
    const [resumeFile, setResumeFile] = useState(null);
    const [isUploadingPdf, setIsUploadingPdf] = useState(false);
    const [pdfUploadStatus, setPdfUploadStatus] = useState('');

    // GitHub API Deploy States
    const [githubToken, setGithubToken] = useState('');
    const [repoOwner, setRepoOwner] = useState('mscharan-analytics');
    const [repoName, setRepoName] = useState('mscharan-analytics.github.io');
    const [deployLogs, setDeployLogs] = useState([]);
    const [isDeploying, setIsDeploying] = useState(false);
    const [deployStatus, setDeployStatus] = useState('');

    // Load active changes on mount
    useEffect(() => {
        const stored = localStorage.getItem('sricharan_portfolio_data');
        if (stored && stored.includes('agentic-platform')) {
            try {
                const parsed = JSON.parse(stored);
                setFormData(prev => ({
                    personalDetails: parsed.personalDetails || prev.personalDetails,
                    skills: parsed.skills || prev.skills,
                    experience: parsed.experience || prev.experience,
                    projects: parsed.projects || prev.projects,
                    education: parsed.education || prev.education,
                    certifications: parsed.certifications || prev.certifications
                }));
            } catch (e) {
                console.error("Error loading localStorage config in admin workspace", e);
            }
        }
        
        // Auto authenticate if already session active
        if (sessionStorage.getItem('admin_session') === 'active') {
            setIsAuthenticated(true);
        }

        // Load GitHub config from local storage
        setGithubToken(localStorage.getItem('sricharan_github_token') || '');
        setRepoOwner(localStorage.getItem('sricharan_repo_owner') || 'mscharan-analytics');
        setRepoName(localStorage.getItem('sricharan_repo_name') || 'mscharan-analytics.github.io');
    }, []);

    // Authenticate credentials
    const handleLogin = (e) => {
        e.preventDefault();
        if (username.toLowerCase() === 'sricharan' && password === 'admin123') {
            setIsAuthenticated(true);
            setAuthError('');
            sessionStorage.setItem('admin_session', 'active');
        } else {
            setAuthError('Invalid username or password. (Hint: sricharan / admin123)');
        }
    };

    // Logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_session');
    };

    // Save temporary edits in localStorage
    const handleSaveToLocal = () => {
        localStorage.setItem('sricharan_portfolio_data', JSON.stringify(formData));
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    // Reset localStorage configurations
    const handleResetToDefault = () => {
        if (window.confirm("Are you sure you want to discard your edits and revert to default resume data?")) {
            localStorage.removeItem('sricharan_portfolio_data');
            setFormData({
                personalDetails: { ...defaultPersonalDetails },
                skills: { ...defaultSkills },
                experience: [ ...defaultExperience ],
                projects: [ ...defaultProjects ],
                education: [ ...defaultEducation ],
                certifications: [ ...defaultCertifications ]
            });
            window.location.reload();
        }
    };

    // Copy formatted JavaScript block to clipboard
    const generateCodeString = () => {
        return `import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const defaultPersonalDetails = ${JSON.stringify(formData.personalDetails, null, 4)};

const defaultSkills = ${JSON.stringify(formData.skills, null, 4)};

const defaultExperience = ${JSON.stringify(formData.experience, null, 4)};

const defaultProjects = ${JSON.stringify(formData.projects, null, 4)};

const defaultEducation = ${JSON.stringify(formData.education, null, 4)};

const defaultCertifications = ${JSON.stringify(formData.certifications, null, 4)};

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

const getSocialIcon = (platform) => {
    if (platform === 'LinkedIn') return Linkedin;
    if (platform === 'GitHub') return Github;
    return Mail;
};

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
`;
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(generateCodeString());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Save GitHub configs in localStorage
    const handleSaveGithubConfig = (e) => {
        e.preventDefault();
        localStorage.setItem('sricharan_github_token', githubToken);
        localStorage.setItem('sricharan_repo_owner', repoOwner);
        localStorage.setItem('sricharan_repo_name', repoName);
        alert('GitHub API configuration credentials saved locally!');
    };

    // File SHA fetcher helper
    const fetchFileSha = async (path, token) => {
        const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (response.status === 404) return null;
            const data = await response.json();
            return data.sha;
        } catch (e) {
            console.error("Error fetching file SHA", e);
            return null;
        }
    };

    // Commit file via PUT REST endpoint helper
    const commitFileToGithub = async (path, contentBase64, sha, token) => {
        const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;
        const body = {
            message: `Update portfolio file [${path}] via Admin Console`,
            content: contentBase64
        };
        if (sha) body.sha = sha;

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'GitHub API error');
        }
        return await response.json();
    };

    // Trigger Production Deploy CMS Pipeline
    const handleDeployToProd = async () => {
        if (!githubToken) {
            alert("Please configure your GitHub Personal Access Token under 'Deploy to GitHub' first!");
            return;
        }
        
        setIsDeploying(true);
        setDeployStatus('');
        setDeployLogs([`[CMS] Initializing Git commit pipeline for production...`]);

        try {
            // 1. Commit resumeData.js
            setDeployLogs(prev => [...prev, `[CMS] Compiling active resumeData.js configuration...`]);
            const jsCode = generateCodeString();
            const jsBase64 = btoa(unescape(encodeURIComponent(jsCode)));
            
            setDeployLogs(prev => [...prev, `[GitHub API] Querying repo metadata for src/data/resumeData.js...`]);
            const jsSha = await fetchFileSha('src/data/resumeData.js', githubToken);
            setDeployLogs(prev => [...prev, jsSha ? `[GitHub API] Current file SHA resolved: ${jsSha}` : `[GitHub API] File not found. Creating fresh source.`]);
            
            setDeployLogs(prev => [...prev, `[GitHub API] Sending PUT commit request to update resumeData.js...`]);
            await commitFileToGithub('src/data/resumeData.js', jsBase64, jsSha, githubToken);
            setDeployLogs(prev => [...prev, `[GitHub API] ✔ resumeData.js committed successfully!`]);

            // 2. Commit resume.pdf if present
            if (resumeFile) {
                setDeployLogs(prev => [...prev, `[CMS] Found modified resume file: ${resumeFile.name}`]);
                setDeployLogs(prev => [...prev, `[CMS] Converting PDF binary data to Base64 stream...`]);
                
                const readAsBase64 = (file) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            const base64 = reader.result.split(',')[1];
                            resolve(base64);
                        };
                        reader.onerror = error => reject(error);
                    });
                };
                
                const pdfBase64 = await readAsBase64(resumeFile);
                
                setDeployLogs(prev => [...prev, `[GitHub API] Querying repo metadata for public/resume.pdf...`]);
                const pdfSha = await fetchFileSha('public/resume.pdf', githubToken);
                setDeployLogs(prev => [...prev, pdfSha ? `[GitHub API] Current file SHA resolved: ${pdfSha}` : `[GitHub API] File not found. Creating fresh source.`]);
                
                setDeployLogs(prev => [...prev, `[GitHub API] Sending PUT commit request to update resume.pdf...`]);
                await commitFileToGithub('public/resume.pdf', pdfBase64, pdfSha, githubToken);
                setDeployLogs(prev => [...prev, `[GitHub API] ✔ resume.pdf committed successfully!`]);
            } else {
                setDeployLogs(prev => [...prev, `[CMS] No changes detected for resume.pdf (Skipping upload).`]);
            }

            setDeployLogs(prev => [
                ...prev, 
                `[CMS] Deploy complete! GitHub Actions Pages build triggered successfully.`,
                `[CMS] Deployed live site will mirror updates in 1-2 minutes.`
            ]);
            setDeployStatus('success');
        } catch (error) {
            console.error(error);
            setDeployLogs(prev => [...prev, `[ERROR] Deployment failed: ${error.message}`]);
            setDeployStatus('failed');
        } finally {
            setIsDeploying(false);
        }
    };

    // Upload & Replace PDF locally
    const handlePdfUpload = async (e) => {
        e.preventDefault();
        if (!resumeFile) return;

        setIsUploadingPdf(true);
        setPdfUploadStatus('');
        try {
            const response = await fetch('/api/upload-resume', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/pdf'
                },
                body: resumeFile
            });
            const result = await response.json();
            if (result.success) {
                setPdfUploadStatus('✔ Resume PDF uploaded and replaced successfully!');
            } else {
                setPdfUploadStatus('❌ Upload failed: ' + result.message);
            }
        } catch (error) {
            setPdfUploadStatus('❌ Server endpoint unreachable. File uploads are supported when running the local dev server.');
        } finally {
            setIsUploadingPdf(false);
        }
    };

    // Skills additions / deletions
    const handleSkillChange = (category, idx, val) => {
        const list = [...formData.skills[category]];
        list[idx] = val;
        setFormData({
            ...formData,
            skills: { ...formData.skills, [category]: list }
        });
    };

    const handleAddSkill = (category) => {
        setFormData({
            ...formData,
            skills: { 
                ...formData.skills, 
                [category]: [...formData.skills[category], "New Skill"] 
            }
        });
    };

    const handleRemoveSkill = (category, idx) => {
        const list = formData.skills[category].filter((_, i) => i !== idx);
        setFormData({
            ...formData,
            skills: { ...formData.skills, [category]: list }
        });
    };

    // Experience additions / deletions
    const handleExpChange = (idx, field, val) => {
        const list = [...formData.experience];
        list[idx] = { ...list[idx], [field]: val };
        setFormData({ ...formData, experience: list });
    };

    const handleExpBulletChange = (expIdx, bulletIdx, val) => {
        const list = [...formData.experience];
        const bullets = [...list[expIdx].description];
        bullets[bulletIdx] = val;
        list[expIdx] = { ...list[expIdx], description: bullets };
        setFormData({ ...formData, experience: list });
    };

    const handleAddExpBullet = (expIdx) => {
        const list = [...formData.experience];
        list[expIdx] = { 
            ...list[expIdx], 
            description: [...list[expIdx].description, "New accomplishment achievement bullet point."] 
        };
        setFormData({ ...formData, experience: list });
    };

    const handleRemoveExpBullet = (expIdx, bulletIdx) => {
        const list = [...formData.experience];
        const bullets = list[expIdx].description.filter((_, i) => i !== bulletIdx);
        list[expIdx] = { ...list[expIdx], description: bullets };
        setFormData({ ...formData, experience: list });
    };

    const handleAddExperience = () => {
        const newExp = {
            company: "New Company LLC",
            role: "Role Title",
            period: "Jan 2026 - Present",
            description: ["Core achievement or project responsibilities."]
        };
        setFormData({
            ...formData,
            experience: [newExp, ...formData.experience]
        });
    };

    const handleRemoveExperience = (idx) => {
        if (window.confirm("Delete this experience milestone?")) {
            setFormData({
                ...formData,
                experience: formData.experience.filter((_, i) => i !== idx)
            });
        }
    };

    // Project additions / deletions
    const handleProjectChange = (idx, field, val) => {
        const list = [...formData.projects];
        list[idx] = { ...list[idx], [field]: val };
        setFormData({ ...formData, projects: list });
    };

    const handleAddProject = () => {
        const newProj = {
            title: "New Portfolio Product",
            category: "pipeline",
            description: "Detailed description of pipeline, model context integrations, or database dashboards.",
            tech: ["Python", "SQL"],
            github: "https://github.com/mscharan-analytics",
            stars: 0,
            forks: 0,
            impact: "Quantified business ROI or performance metrics."
        };
        setFormData({
            ...formData,
            projects: [newProj, ...formData.projects]
        });
    };

    const handleRemoveProject = (idx) => {
        if (window.confirm("Remove this project from dashboard?")) {
            setFormData({
                ...formData,
                projects: formData.projects.filter((_, i) => i !== idx)
            });
        }
    };

    // If unauthorized, render simple login screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />
                    
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-400">
                            <Lock size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-mono">Portfolio Admin Gate</h2>
                        <p className="text-xs text-slate-400 mt-1.5 font-light">Enter credentials to edit your resume details live.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">Username</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-3.5 text-slate-500" size={16} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-slate-600 transition-colors font-mono"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">Password</label>
                            <div className="relative">
                                <Key className="absolute left-3.5 top-3.5 text-slate-500" size={16} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-slate-600 transition-colors font-mono"
                                    required
                                />
                            </div>
                        </div>

                        {authError && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2.5 text-red-400 text-xs font-light">
                                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                                <span>{authError}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/10 mt-2"
                        >
                            <Sparkles size={13} />
                            AUTHENTICATE_SESSION
                        </button>
                    </form>
                </motion.div>
                
                <a href="#home" className="text-slate-500 hover:text-slate-300 text-xs font-mono mt-6 flex items-center gap-1.5 transition-all">
                    &larr; Return to main page
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pt-8 pb-16">
            <div className="container mx-auto px-6 max-w-6xl flex-grow flex flex-col">
                
                {/* Admin Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-5 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
                            <Sparkles className="text-blue-500 animate-pulse" size={20} />
                            Sricharan's Resume Console
                        </h1>
                        <p className="text-xs text-slate-400 mt-1 font-light">Edit data segments. Values are instantly mirrored locally. Deploy to production or copy configurations below.</p>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleResetToDefault}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
                            title="Discard edits and reload defaults"
                        >
                            <RotateCcw size={12} />
                            Reset Default
                        </button>
                        
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-950/20 hover:bg-red-950/30 border border-red-500/20 text-red-400 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
                        >
                            <LogOut size={12} />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-start flex-grow">
                    
                    {/* Tabs sidebar */}
                    <div className="lg:col-span-3 flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold px-3 py-1.5 mb-1.5">Resume Sectors</span>
                        
                        {[
                            { id: 'personal', name: 'Personal Bio', icon: User },
                            { id: 'skills', name: 'Skills Grid', icon: Code },
                            { id: 'experience', name: 'Experience', icon: Briefcase },
                            { id: 'projects', name: 'Featured Projects', icon: Sparkles },
                            { id: 'education', name: 'Education', icon: BookOpen },
                            { id: 'resume', name: 'Upload PDF Resume', icon: Upload },
                            { id: 'deploy', name: 'Deploy to GitHub', icon: Globe },
                            { id: 'export', name: 'Export Code File', icon: Award }
                        ].map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-mono font-bold text-left transition-all ${
                                        activeTab === tab.id 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                                    }`}
                                >
                                    <Icon size={14} />
                                    {tab.name}
                                </button>
                            );
                        })}

                        <div className="pt-4 border-t border-slate-800/60 mt-4 px-1.5">
                            <button
                                onClick={handleSaveToLocal}
                                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10 transition-all"
                            >
                                <Save size={12} />
                                Apply to Live Preview
                            </button>

                            {saveSuccess && (
                                <span className="text-[10px] text-emerald-400 font-mono block text-center mt-2.5 font-bold animate-pulse">
                                    ✔ Applied changes live!
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Editor Workspace */}
                    <div className="lg:col-span-9 bg-slate-900 border border-slate-800 rounded-xl p-6 relative min-h-[460px]">
                        
                        {activeTab === 'personal' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">Personal & Bio Details</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.personalDetails.name}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, name: e.target.value }
                                            })}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Job Title Role</label>
                                        <input
                                            type="text"
                                            value={formData.personalDetails.role}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, role: e.target.value }
                                            })}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Elevator Summary Bio</label>
                                        <textarea
                                            value={formData.personalDetails.summary}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, summary: e.target.value }
                                            })}
                                            rows={4}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-light leading-relaxed resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Location</label>
                                        <input
                                            type="text"
                                            value={formData.personalDetails.location}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, location: e.target.value }
                                            })}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.personalDetails.email}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, email: e.target.value }
                                            })}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Phone Number</label>
                                        <input
                                            type="text"
                                            value={formData.personalDetails.phone}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                personalDetails: { ...formData.personalDetails, phone: e.target.value }
                                            })}
                                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">Technical Skills Map</h3>
                                
                                {['dataEngineering', 'analyticsML', 'development'].map(category => (
                                    <div key={category} className="space-y-3 p-4 bg-slate-950/20 border border-slate-800 rounded-xl">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                                {category === 'dataEngineering' ? 'Data Engineering' : category === 'analyticsML' ? 'Analytics & Machine Learning' : 'Development Ops'}
                                            </h4>
                                            <button
                                                onClick={() => handleAddSkill(category)}
                                                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px] font-mono flex items-center gap-1 font-semibold"
                                            >
                                                <Plus size={10} /> Add Tag
                                            </button>
                                        </div>

                                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                                            {formData.skills[category].map((skill, idx) => (
                                                <div key={idx} className="flex gap-1">
                                                    <input
                                                        type="text"
                                                        value={skill}
                                                        onChange={(e) => handleSkillChange(category, idx, e.target.value)}
                                                        className="flex-grow bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-lg px-2.5 py-1.5 text-xs text-white"
                                                    />
                                                    <button
                                                        onClick={() => handleRemoveSkill(category, idx)}
                                                        className="p-1.5 bg-red-950/10 hover:bg-red-950/30 border border-red-500/10 hover:border-red-500/30 text-red-400 rounded-lg"
                                                    >
                                                        <Trash2 size={12} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                    <h3 className="text-lg font-bold text-white font-mono">Work History Timeline</h3>
                                    <button
                                        onClick={handleAddExperience}
                                        className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/15"
                                    >
                                        <Plus size={12} /> Add Milestone
                                    </button>
                                </div>

                                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                                    {formData.experience.map((exp, idx) => (
                                        <div key={idx} className="p-4 bg-slate-950/30 border border-slate-800/80 rounded-xl space-y-4 relative group">
                                            <button
                                                onClick={() => handleRemoveExperience(idx)}
                                                className="absolute top-4 right-4 p-2 bg-red-950/10 hover:bg-red-950/30 border border-red-500/15 text-red-400 rounded-lg opacity-80 hover:opacity-100"
                                                title="Delete milestone"
                                            >
                                                <Trash2 size={13} />
                                            </button>
 
                                            <div className="grid sm:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Company</label>
                                                    <input
                                                        type="text"
                                                        value={exp.company}
                                                        onChange={(e) => handleExpChange(idx, 'company', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-bold"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Role Title</label>
                                                    <input
                                                        type="text"
                                                        value={exp.role}
                                                        onChange={(e) => handleExpChange(idx, 'role', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Period</label>
                                                    <input
                                                        type="text"
                                                        value={exp.period}
                                                        onChange={(e) => handleExpChange(idx, 'period', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-mono"
                                                    />
                                                </div>
                                            </div>

                                            {/* Bullet Points list */}
                                            <div className="space-y-2.5">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider font-bold">Accomplishment Bullets</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleAddExpBullet(idx)}
                                                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[9px] font-mono font-semibold"
                                                    >
                                                        + Add Bullet
                                                    </button>
                                                </div>
                                                {exp.description.map((bullet, bIdx) => (
                                                    <div key={bIdx} className="flex gap-2">
                                                        <textarea
                                                            value={bullet}
                                                            onChange={(e) => handleExpBulletChange(idx, bIdx, e.target.value)}
                                                            rows={2}
                                                            className="flex-grow bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-slate-300 font-light resize-none leading-relaxed"
                                                        />
                                                        <button
                                                            onClick={() => handleRemoveExpBullet(idx, bIdx)}
                                                            className="p-2 bg-slate-900 border border-slate-800 hover:border-red-500/20 text-slate-500 hover:text-red-400 rounded-lg shrink-0 self-center"
                                                        >
                                                            <Trash2 size={12} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                    <h3 className="text-lg font-bold text-white font-mono">Portfolio Solutions</h3>
                                    <button
                                        onClick={handleAddProject}
                                        className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/15"
                                    >
                                        <Plus size={12} /> Add Project
                                    </button>
                                </div>

                                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                                    {formData.projects.map((proj, idx) => (
                                        <div key={idx} className="p-4 bg-slate-950/30 border border-slate-800/80 rounded-xl space-y-4 relative group animate-fade">
                                            <button
                                                onClick={() => handleRemoveProject(idx)}
                                                className="absolute top-4 right-4 p-2 bg-red-950/10 hover:bg-red-950/30 border border-red-500/15 text-red-400 rounded-lg opacity-80 hover:opacity-100"
                                                title="Delete project card"
                                            >
                                                <Trash2 size={13} />
                                            </button>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Project Title</label>
                                                    <input
                                                        type="text"
                                                        value={proj.title}
                                                        onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-mono font-bold"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Category Type</label>
                                                    <select
                                                        value={proj.category}
                                                        onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                                    >
                                                        <option value="mcp">MCP Server (Open Source)</option>
                                                        <option value="pipeline">Production Data Pipeline</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Project Summary Description</label>
                                                <textarea
                                                    value={proj.description}
                                                    onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                                                    rows={3}
                                                    className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-slate-300 font-light resize-none leading-relaxed"
                                                />
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">GitHub repository URL</label>
                                                    <input
                                                        type="text"
                                                        value={proj.github}
                                                        onChange={(e) => handleProjectChange(idx, 'github', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Quantified ROI Impact</label>
                                                    <input
                                                        type="text"
                                                        value={proj.impact || ''}
                                                        onChange={(e) => handleProjectChange(idx, 'impact', e.target.value)}
                                                        className="w-full bg-slate-950 border border-slate-855 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                                        placeholder="E.g., $9M revenue target tracked"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">Education Degrees & Certifications</h3>
                                
                                <div className="space-y-4">
                                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Academic Degrees</h4>
                                    {formData.education.map((edu, idx) => (
                                        <div key={idx} className="grid sm:grid-cols-3 gap-4 p-4 bg-slate-950/20 border border-slate-800 rounded-xl">
                                            <div className="sm:col-span-2 space-y-3">
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Institution</label>
                                                    <input
                                                        type="text"
                                                        value={edu.institution}
                                                        onChange={(e) => {
                                                            const list = [...formData.education];
                                                            list[idx].institution = e.target.value;
                                                            setFormData({ ...formData, education: list });
                                                        }}
                                                        className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-bold"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Degree Focus</label>
                                                    <input
                                                        type="text"
                                                        value={edu.degree}
                                                        onChange={(e) => {
                                                            const list = [...formData.education];
                                                            list[idx].degree = e.target.value;
                                                            setFormData({ ...formData, education: list });
                                                        }}
                                                        className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Graduation Year</label>
                                                <input
                                                    type="text"
                                                    value={edu.year}
                                                    onChange={(e) => {
                                                        const list = [...formData.education];
                                                        list[idx].year = e.target.value;
                                                        setFormData({ ...formData, education: list });
                                                    }}
                                                    className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-mono"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'resume' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">Resume PDF Ingestion</h3>
                                
                                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                                    <Info className="text-blue-400 shrink-0 mt-0.5" size={16} />
                                    <div className="text-xs text-slate-300 font-light leading-relaxed">
                                        Upload a new PDF to replace the current file at `public/resume.pdf` on your filesystem. This feature works locally when running the Vite dev server. 
                                    </div>
                                </div>

                                <form onSubmit={handlePdfUpload} className="space-y-5">
                                    <div className="border-2 border-dashed border-slate-800 rounded-xl p-8 text-center bg-slate-950/20 hover:border-blue-500/40 transition-colors cursor-pointer relative group">
                                        <input 
                                            type="file" 
                                            accept=".pdf" 
                                            onChange={(e) => setResumeFile(e.target.files[0])}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <Upload className="mx-auto text-slate-500 group-hover:text-blue-400 transition-colors mb-3" size={32} />
                                        <span className="text-xs font-mono font-bold text-slate-300 block">
                                            {resumeFile ? resumeFile.name : 'Select or drag your new resume.pdf here'}
                                        </span>
                                        {resumeFile && (
                                            <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                                                Size: {(resumeFile.size / 1024).toFixed(1)} KB
                                            </span>
                                        )}
                                    </div>

                                    {pdfUploadStatus && (
                                        <div className={`p-3 border rounded-xl text-xs font-light ${
                                            pdfUploadStatus.startsWith('❌') ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                        }`}>
                                            {pdfUploadStatus}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isUploadingPdf || !resumeFile}
                                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 shadow-md transition-all"
                                    >
                                        <Upload size={12} />
                                        {isUploadingPdf ? 'UPLOADING...' : 'REPLACE RESUME.PDF'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'deploy' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">GitHub Production CMS Deployer</h3>
                                
                                <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl flex items-start gap-3">
                                    <Info className="text-purple-400 shrink-0 mt-0.5" size={16} />
                                    <div className="text-xs text-slate-300 font-light leading-relaxed">
                                        This module uses the **GitHub REST API** to commit updates directly to your git repository. To enable this, paste a GitHub **Personal Access Token (classic or fine-grained)** with `repo` file write permissions below. The token is stored privately in your browser's local `localStorage`.
                                    </div>
                                </div>

                                <form onSubmit={handleSaveGithubConfig} className="grid md:grid-cols-2 gap-4 p-4 bg-slate-950/20 border border-slate-800 rounded-xl">
                                    <div className="md:col-span-2">
                                        <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">GitHub Personal Access Token (PAT)</label>
                                        <input
                                            type="password"
                                            value={githubToken}
                                            onChange={(e) => setGithubToken(e.target.value)}
                                            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                                            className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-mono"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Repository Owner</label>
                                        <input
                                            type="text"
                                            value={repoOwner}
                                            onChange={(e) => setRepoOwner(e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Repository Name</label>
                                        <input
                                            type="text"
                                            value={repoName}
                                            onChange={(e) => setRepoName(e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 focus:outline-none rounded-lg p-2.5 text-xs text-white font-mono"
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 border border-slate-850 transition-all"
                                        >
                                            Save GitHub credentials
                                        </button>
                                    </div>
                                </form>

                                <div className="pt-4 border-t border-slate-800/40 space-y-4">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                        <div>
                                            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Commit & Trigger Live Rebuild</h4>
                                            <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">Will push your current inputs and any uploaded PDF directly to your Git repository.</p>
                                        </div>
                                        
                                        <button
                                            type="button"
                                            onClick={handleDeployToProd}
                                            disabled={isDeploying || !githubToken}
                                            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all shrink-0"
                                        >
                                            {isDeploying ? <Loader2 size={13} className="animate-spin" /> : <Globe size={13} />}
                                            {isDeploying ? 'COMMITTING TO GITHUB...' : 'COMMIT & DEPLOY TO PROD'}
                                        </button>
                                    </div>

                                    {/* Deploy Logs console */}
                                    {deployLogs.length > 0 && (
                                        <div className="bg-slate-950 rounded-xl border border-slate-850 p-4 flex flex-col h-[180px] font-mono text-[10px] overflow-hidden relative">
                                            <div className="text-[8px] text-slate-500 border-b border-slate-900 pb-1.5 mb-2.5 flex items-center gap-1">
                                                <Terminal size={10} /> deploy-console://github-actions-publisher
                                            </div>
                                            <div className="flex-grow overflow-y-auto space-y-1 text-slate-400 scrollbar-thin">
                                                {deployLogs.map((log, i) => (
                                                    <div key={i} className="flex gap-1.5">
                                                        <span className="text-indigo-400 font-bold">&gt;&gt;</span>
                                                        <span className={`${
                                                            log.includes('ERROR') ? 'text-red-400' : log.includes('✔') ? 'text-emerald-400' : 'text-slate-300'
                                                        } leading-tight`}>{log}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {deployStatus === 'success' && (
                                                <div className="text-[10px] text-emerald-400 font-bold mt-2 pt-2 border-t border-slate-900 animate-pulse text-center">
                                                    ✔ Commit pushed! Rebuild triggered on GitHub Pages.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'export' && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">Permanent Config Exporter</h3>
                                
                                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                                    <Info className="text-blue-400 shrink-0 mt-0.5" size={16} />
                                    <div className="text-xs text-slate-300 font-light leading-relaxed">
                                        Applying changes to Live Preview saves data in your local browser storage. To make these changes **permanent** for all visitors in the Git repo, click **"Copy JS Config Code"** below, open [src/data/resumeData.js](file:///Users/mscharan/mscharan-analytics.github.io/src/data/resumeData.js), overwrite its contents with the copied code, and push the commit!
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Generated Javascript Code</span>
                                        <button
                                            onClick={handleCopyCode}
                                            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/15"
                                        >
                                            {copied ? <Check size={12} className="text-green-300" /> : <Copy size={12} />}
                                            {copied ? 'COPIED!' : 'COPY JS CONFIG CODE'}
                                        </button>
                                    </div>

                                    <div className="bg-slate-950 rounded-xl border border-slate-800/80 p-4 font-mono text-[10px] text-emerald-300 overflow-x-auto max-h-[260px] scrollbar-thin select-all">
                                        <pre>{generateCodeString()}</pre>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;
