import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, // BI
    Database,        // Data Eng
    BarChart3,       // Data Analyst
    TrendingUp,      // Business Analyst
    Cpu,             // AI Engineer
    Brain,           // Data Scientist
    Workflow,        // Generalist
    ArrowRight, 
    Sparkles, 
    Terminal, 
    Check, 
    HelpCircle,
    FileText,
    Upload,
    Play,
    Info,
    CheckCircle2,
    Search
} from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

// Dynamic role configurations
const rolesData = {
    generalist: {
        title: "Full-Stack Data Professional",
        subtitle: "The Synergy of 6 Disciplines",
        icon: Workflow,
        color: "from-blue-500 via-purple-500 to-emerald-500",
        glowColor: "rgba(168, 85, 247, 0.15)",
        radarValues: { bi: 85, de: 90, da: 85, ba: 80, ai: 90, ds: 80 },
        superpower: "Bridging the gaps across the entire data lifecycle—from raw database engineering to machine learning models, dashboard insights, and agentic AI integrations.",
        edge: "In a world of siloed specialists, I act as a force multiplier. I build pipelines that know what downstream analysts need, design dashboards that understand the underlying schema, and deploy AI agents that can securely query enterprise databases.",
        highlights: [
            "4+ years of end-to-end data value creation across pharma, retail, and nonprofit sectors",
            "Specialist in Model Context Protocol (MCP) for database-LLM agent orchestrations",
            "Successfully saved $1,000+/mo via automated workflows and custom Streamlit solutions"
        ]
    },
    bi: {
        title: "Business Intelligence Engineer",
        subtitle: "Translating Data into Interactive Vision",
        icon: LayoutDashboard,
        color: "from-blue-600 to-cyan-500",
        glowColor: "rgba(59, 130, 246, 0.2)",
        radarValues: { bi: 98, de: 75, da: 90, ba: 85, ai: 65, ds: 70 },
        superpower: "Designing intuitive, real-time visual dashboards and semantic layers that stakeholders actually use to make high-stakes business decisions.",
        edge: "Most BI developers are blocked by slow data pipelines. Because I have a strong Data Engineering background, I build my own optimized pipelines in Snowflake and Databricks, securing low latency and rich dimensions.",
        highlights: [
            "Delivered 40+ automated dashboards reducing reporting cycles from 7 days to 24 hrs",
            "Established API-backed reporting hooks for Albertsons email monetization campaigns",
            "Designed RLT segmentation sheets tracking HCP adoption and market signals"
        ]
    },
    de: {
        title: "Data Engineer",
        subtitle: "Architecting Production pipelines at Scale",
        icon: Database,
        color: "from-cyan-500 to-teal-400",
        glowColor: "rgba(6, 182, 212, 0.2)",
        radarValues: { bi: 75, de: 98, da: 75, ba: 65, ai: 85, ds: 75 },
        superpower: "Engineering robust, high-throughput batch and streaming ETL/ELT pipelines, governed lakehouses, and structured database architectures.",
        edge: "I don't just dump raw files into a data warehouse. I understand how downstream Data Scientists and Business Analysts query tables. I architect governed schemas (RDBMS, Snowflake, BigQuery) with indexing, partitioning, and automated QA.",
        highlights: [
            "Shipped daily projection pipelines handling 10M+ transaction records",
            "Architected clinical RLT pipeline processing ~2TB/day under strict 90%+ SLAs",
            "Built open-source MCP Snowflake & PostgreSQL connectors for autonomous query execution"
        ]
    },
    da: {
        title: "Data Analyst",
        subtitle: "Uncovering Opportunities and User Patterns",
        icon: BarChart3,
        color: "from-emerald-500 to-teal-500",
        glowColor: "rgba(16, 185, 129, 0.2)",
        radarValues: { bi: 85, de: 75, da: 98, ba: 80, ai: 60, ds: 85 },
        superpower: "Drilling into massive datasets, identifying anomalies, segmenting cohorts, and presenting quantitative proof of business phenomena.",
        edge: "I don't rely on simple spreadsheets. I run optimized database queries, leverage Python for exploratory data analysis, and use explainable statistics (A/B testing, regression) to separate real signals from noise.",
        highlights: [
            "Identified switching patterns across 500K+ patient records for Fortune-500 pharma brands",
            "Engineered real-time prescription tracking system for field sales reps",
            "Developed pricing price-elasticity insights across 10 categories at Albertsons"
        ]
    },
    ba: {
        title: "Business Analyst",
        subtitle: "Quantifying Value and Automating Operations",
        icon: TrendingUp,
        color: "from-amber-500 to-orange-400",
        glowColor: "rgba(245, 158, 11, 0.2)",
        radarValues: { bi: 80, de: 60, da: 85, ba: 98, ai: 70, ds: 65 },
        superpower: "Connecting data architectures directly to financial bottom lines. Aligning cross-functional stakeholders and modeling operational cost-cuts.",
        edge: "While typical business analysts work with static mockups, I build live interactive prototypes (using Streamlit, n8n, and Python) to automate manual bottlenecks, immediately saving operational budget.",
        highlights: [
            "Built Streamlit grant discovery app saving HIV-focused nonprofit $1,000+ monthly",
            "Automated grant application tracking via n8n, cutting manual workflows by 80%",
            "Supported monetization pipeline for email campaigns aiming at a $9M CPG revenue target"
        ]
    },
    ai: {
        title: "AI Engineer",
        subtitle: "Connecting Large Language Models to Enterprise Data",
        icon: Cpu,
        color: "from-violet-600 to-indigo-500",
        glowColor: "rgba(139, 92, 246, 0.2)",
        radarValues: { bi: 65, de: 85, da: 70, ba: 70, ai: 98, ds: 80 },
        superpower: "Integrating LLM architectures with backend databases, implementing advanced RAG, and building agentic workflows via Model Context Protocol.",
        edge: "Many AI developers only build wrapper apps. I build the foundational connectors (MCP Servers) that allow AI models to introspect database structures, write optimized SQL, and take action securely.",
        highlights: [
            "Created 'mcp-snowflake-server' for autonomous database schema exploration",
            "Built 'mcp-postgres-analytics' for performance tracking via LLM tool calls",
            "Experienced in LangChain, CrewAI, and automated agent orchestration"
        ]
    },
    ds: {
        title: "Data Scientist",
        subtitle: "Training Actionable and Explainable Models",
        icon: Brain,
        color: "from-indigo-600 to-purple-500",
        glowColor: "rgba(79, 70, 229, 0.2)",
        radarValues: { bi: 70, de: 75, da: 85, ba: 75, ai: 80, ds: 98 },
        superpower: "Formulating business questions as scientific models. Applying statistical machine learning algorithms to predict trends and optimize strategy.",
        edge: "I build *explainable* models rather than black boxes, and I have the engineering skills to deploy my models. I write the pipelines that feed features, rather than just delivering offline notebooks.",
        highlights: [
            "Developed price elasticity models across 10 category banners at Albertsons",
            "Created client targeting logic linking incentive performance metrics",
            "Proficient in explainable ML, XGBoost, clustering, and predictive schemas"
        ]
    }
};

// Preset template CSV datasets for the live RAG playground
const datasets = {
    albertsons: {
        name: "Albertsons Campaigns (CPG)",
        description: "Monetized email transactions and marketing channel performance.",
        csv: `transaction_id,channel,conversions,revenue,division
TXN-101,Email Monetization,142,4260.00,NorCal
TXN-102,Email Monetization,98,2940.00,SoCal
TXN-103,Paid Search,240,7200.00,NorCal
TXN-104,Paid Search,185,5550.00,Intermountain
TXN-105,Social Ad,88,1760.00,NorCal
TXN-106,Social Ad,124,2480.00,SoCal
TXN-107,Email Monetization,310,9300.00,Intermountain
TXN-108,Paid Search,95,2850.00,SoCal
TXN-109,Social Ad,150,3000.00,Intermountain
TXN-110,Email Monetization,220,6600.00,NorCal`,
        suggestions: [
            "Compare revenue by channel",
            "Total conversions for Email Monetization",
            "Compare conversions by division",
            "Average revenue by division"
        ]
    },
    novartis: {
        name: "Novartis Clinical Targeting",
        description: "RLT segmentation and HCP adoption signals.",
        csv: `provider_id,specialty,territory,adoption_score,potential_value,incentive_tier
HCP-901,Oncology,Northeast,88,125000,Tier 1
HCP-902,Cardiology,Southeast,65,85000,Tier 2
HCP-903,Oncology,Midwest,92,140000,Tier 1
HCP-904,Neurology,West,45,60000,Tier 3
HCP-905,Cardiology,West,78,95000,Tier 2
HCP-906,Oncology,Northeast,54,75000,Tier 3
HCP-907,Neurology,Southeast,82,110000,Tier 1
HCP-908,Cardiology,Midwest,90,130000,Tier 1`,
        suggestions: [
            "Compare potential_value by specialty",
            "Average adoption_score by territory",
            "Total potential_value for Oncology",
            "Count providers by incentive_tier"
        ]
    },
    nonprofit: {
        name: "Nonprofit Grant Operations",
        description: "H.Y.P.E to Empower grant tracking and savings.",
        csv: `grant_id,foundation,focus_area,amount_requested,status,savings_enabled
GRT-001,MAC AIDS Fund,Prevention,15000,Approved,Yes
GRT-002,Gilead Sciences,Community Care,25000,Approved,Yes
GRT-003,HRSA Federal,Capacity Building,75000,Pending,No
GRT-004,Elton John Foundation,Advocacy,10000,Approved,Yes
GRT-005,Broadway Cares,Direct Relief,12000,Approved,Yes
GRT-006,ViiV Healthcare,Youth Education,30000,Pending,No`,
        suggestions: [
            "Compare amount_requested by focus_area",
            "Total amount_requested for Approved",
            "Compare amount_requested by status",
            "Count grants by savings_enabled"
        ]
    }
};

// Preset Job Designs for the MCP Matcher (pushed to bottom)
const mcpSimulatorPresets = [
    {
        name: "Retrieve Albertsons Merchandising Inventory",
        prompt: "Fetch the active inventory tiers where margin matches values above 12%",
        sql: "SELECT category, tier, margin FROM merch.inventory WHERE margin > 0.12 ORDER BY margin DESC;",
        result: "[\n  {\"CATEGORY\": \"Produce\", \"TIER\": \"A\", \"MARGIN\": 0.185},\n  {\"CATEGORY\": \"Bakery\", \"TIER\": \"B\", \"MARGIN\": 0.142}\n]"
    },
    {
        name: "Novartis Segment Adoption Aggregations",
        prompt: "Summarize commercial territory GTM adoption rates",
        sql: "SELECT territory, AVG(adoption_score) FROM commercial.hcp_segments GROUP BY territory;",
        result: "[\n  {\"TERRITORY\": \"Northeast\", \"AVG\": 71.0},\n  {\"TERRITORY\": \"Midwest\", \"AVG\": 91.0},\n  {\"TERRITORY\": \"West\", \"AVG\": 61.5}\n]"
    }
];

const CareerPrism = () => {
    const [selectedRole, setSelectedRole] = useState('generalist');
    
    // Live RAG Simulator States
    const [selectedDatasetKey, setSelectedDatasetKey] = useState('albertsons');
    const [csvContent, setCsvContent] = useState('');
    const [customFilename, setCustomFilename] = useState('');
    const [ragLogs, setRagLogs] = useState([]);
    const [isIngesting, setIsIngesting] = useState(false);
    const [datasetSummary, setDatasetSummary] = useState(null); // { headers, rows }
    const [queryText, setQueryText] = useState('');
    const [isProcessingQuery, setIsProcessingQuery] = useState(false);
    const [queryResult, setQueryResult] = useState(null); // { text, chartData: [{ label, value }] }

    // MCP simulator states (bottom)
    const [mcpIdx, setMcpIdx] = useState(0);
    const [mcpLogs, setMcpLogs] = useState([]);
    const [isMcpRunning, setIsMcpRunning] = useState(false);
    const [mcpResult, setMcpResult] = useState('');

    const currentRole = rolesData[selectedRole];

    // SVG radar calculations
    const labels = [
        { key: 'bi', name: 'BI Engineering', x: 160, y: 35 },
        { key: 'de', name: 'Data Engineering', x: 265, y: 95 },
        { key: 'ai', name: 'AI Engineering', x: 265, y: 225 },
        { key: 'ds', name: 'Data Science', x: 160, y: 285 },
        { key: 'da', name: 'Data Analysis', x: 55, y: 225 },
        { key: 'ba', name: 'Business Analysis', x: 55, y: 95 }
    ];

    const generatePolygonPath = (values) => {
        const center = 160;
        const maxRadius = 110;
        const angles = [0, 60, 120, 180, 240, 300].map(deg => (deg * Math.PI) / 180);

        const keys = ['bi', 'de', 'ai', 'ds', 'da', 'ba'];
        const points = angles.map((angle, idx) => {
            const key = keys[idx];
            const value = values[key] || 50;
            const radius = (value / 100) * maxRadius;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);
            return `${x},${y}`;
        });

        return `M ${points.join(' L ')} Z`;
    };

    const getGridPath = (level) => {
        const center = 160;
        const maxRadius = 110;
        const radius = (level / 100) * maxRadius;
        const angles = [0, 60, 120, 180, 240, 300].map(deg => (deg * Math.PI) / 180);
        const points = angles.map(angle => {
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);
            return `${x},${y}`;
        });
        return `M ${points.join(' L ')} Z`;
    };

    // Client-side CSV parser
    const parseCSVText = (text) => {
        const lines = [];
        let row = [""];
        let inQuotes = false;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const next = text[i+1];
            if (char === '"') {
                if (inQuotes && next === '"') {
                    row[row.length - 1] += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                row.push('');
            } else if ((char === '\r' || char === '\n') && !inQuotes) {
                if (char === '\r' && next === '\n') i++;
                lines.push(row);
                row = [''];
            } else {
                row[row.length - 1] += char;
            }
        }
        if (row.length > 1 || row[0] !== '') {
            lines.push(row);
        }
        
        if (lines.length < 2) return null;
        
        const headers = lines[0].map(h => h.trim().replace(/^"(.*)"$/, '$1'));
        const rows = lines.slice(1)
            .filter(r => r.length === headers.length && r.some(cell => cell.trim() !== ''))
            .map(r => {
                const obj = {};
                r.forEach((cell, colIdx) => {
                    obj[headers[colIdx]] = cell.trim().replace(/^"(.*)"$/, '$1');
                });
                return obj;
            });
        return { headers, rows };
    };

    // Run client-side ingestion pipeline
    const runIngestionPipeline = (text, name) => {
        setIsIngesting(true);
        setQueryResult(null);
        setQueryText('');
        
        const logs = [
            `[Data Engineering] Opening file stream: ${name}...`,
            `[Data Engineering] Ingesting CSV raw bytes. Chunking row streams...`,
            `[Data Engineering] Standardizing columns & catalog metadata...`
        ];

        setRagLogs(logs);

        setTimeout(() => {
            const parsed = parseCSVText(text);
            if (!parsed) {
                setRagLogs(prev => [...prev, `[ERROR] Failed to parse file headers. Invalid CSV schema.`]);
                setIsIngesting(false);
                return;
            }

            // Inferred schema
            const columnsInfo = parsed.headers.map(header => {
                const sampleValues = parsed.rows.slice(0, 5).map(r => r[header]);
                const isNumeric = sampleValues.every(val => !isNaN(parseFloat(val)) && isFinite(val));
                return `${header} (${isNumeric ? 'Numeric' : 'Categorical/Text'})`;
            });

            setRagLogs(prev => [
                ...prev,
                `[Data Engineering] Successfully inferred columns: ${columnsInfo.join(', ')}`,
                `[Data Engineering] Validating datatypes on ${parsed.rows.length} rows...`,
                `[AI Engineering] Building client-side inverse frequency text index (RAG catalog)...`,
                `[AI Engineering] Indexed ${parsed.rows.length} entity documents. Catalog ready for retrieval!`
            ]);

            setDatasetSummary(parsed);
            setIsIngesting(false);
        }, 1200);
    };

    // Initialize with Albertsons Template
    useEffect(() => {
        setCsvContent(datasets.albertsons.csv);
        runIngestionPipeline(datasets.albertsons.csv, "albertsons_merchandising.csv");
    }, []);

    // Handle File Upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setCustomFilename(file.name);
        setSelectedDatasetKey('custom');

        const reader = new FileReader();
        reader.onload = (event) => {
            const txt = event.target.result;
            setCsvContent(txt);
            runIngestionPipeline(txt, file.name);
        };
        reader.readAsText(file);
    };

    // Ingest Preset Template
    const handleSelectTemplate = (key) => {
        setSelectedDatasetKey(key);
        setCustomFilename('');
        const content = datasets[key].csv;
        setCsvContent(content);
        runIngestionPipeline(content, `${key}_analytics.csv`);
    };

    // Client-side RAG search logic & Javascript aggregate executor
    const handleQuerySubmit = (e) => {
        if (e) e.preventDefault();
        if (!queryText.trim() || !datasetSummary) return;

        setIsProcessingQuery(true);
        setQueryResult(null);

        const lowerQuery = queryText.toLowerCase();
        
        // Dynamic logs mimicking prompt analysis
        const logs = [
            `[AI Agent] Introspecting schema: [${datasetSummary.headers.join(', ')}]`,
            `[AI Agent] Running semantic matcher over candidate columns...`,
        ];

        setTimeout(() => {
            const headers = datasetSummary.headers;
            const rows = datasetSummary.rows;

            // 1. Identify target numeric column (what we aggregate: revenue, conversions, potential_value, amount_requested)
            let numericCol = headers.find(h => {
                const isNum = rows.every(r => !isNaN(parseFloat(r[h])));
                const matched = lowerQuery.includes(h.toLowerCase());
                return isNum && matched;
            });

            // Default fallback if no numeric column mentioned
            if (!numericCol) {
                numericCol = headers.find(h => rows.every(r => !isNaN(parseFloat(r[h]))));
            }

            // 2. Identify grouping column (categorical column that is mentioned or fits best: channel, specialty, focus_area, division, territory, status)
            let groupCol = headers.find(h => {
                const isNum = rows.every(r => !isNaN(parseFloat(r[h])));
                const matchesBy = lowerQuery.includes('by ' + h.toLowerCase()) || lowerQuery.includes('each ' + h.toLowerCase()) || lowerQuery.includes('compare ' + h.toLowerCase());
                return !isNum && matchesBy;
            });

            // 3. Identify specific filtering criteria (e.g. "for Approved", "Email Monetization")
            let filterCol = null;
            let filterVal = null;
            
            headers.forEach(h => {
                const isNum = rows.every(r => !isNaN(parseFloat(r[h])));
                if (!isNum) {
                    // check distinct values
                    const uniqueVals = Array.from(new Set(rows.map(r => r[h])));
                    uniqueVals.forEach(v => {
                        if (lowerQuery.includes(v.toLowerCase())) {
                            filterCol = h;
                            filterVal = v;
                        }
                    });
                }
            });

            // Build dynamic text output and aggregate calculations
            let answerText = "";
            let chartData = [];

            if (groupCol && numericCol) {
                // We do group aggregation
                logs.push(`[AI Agent] Grouping matches: '${numericCol}' by unique fields in '${groupCol}'`);
                logs.push(`[Data Analyst] Compiling SQL query plan: SELECT ${groupCol}, SUM(${numericCol}) GROUP BY ${groupCol}`);

                const groups = {};
                rows.forEach(r => {
                    const groupKey = r[groupCol] || "Unknown";
                    const val = parseFloat(r[numericCol]) || 0;
                    groups[groupKey] = (groups[groupKey] || 0) + val;
                });

                chartData = Object.entries(groups).map(([label, val]) => ({
                    label,
                    value: Math.round(val * 100) / 100
                })).sort((a,b) => b.value - a.value);

                answerText = `Aggregated total **${numericCol}** grouped by **${groupCol}**. Found **${chartData.length}** distinct records.`;
            } else if (filterCol && filterVal && numericCol) {
                // Filtered aggregation
                logs.push(`[AI Agent] Matching column: '${filterCol}' = '${filterVal}'`);
                
                const isCount = lowerQuery.includes('count') || lowerQuery.includes('number of');
                const isAvg = lowerQuery.includes('average') || lowerQuery.includes('avg');

                logs.push(`[Data Analyst] Query plan: SELECT ${isCount ? 'COUNT(*)' : isAvg ? `AVG(${numericCol})` : `SUM(${numericCol})`} WHERE ${filterCol} = '${filterVal}'`);

                const matchedRows = rows.filter(r => r[filterCol] === filterVal);
                let total = 0;
                matchedRows.forEach(r => {
                    total += parseFloat(r[numericCol]) || 0;
                });

                let resultVal = 0;
                if (isCount) {
                    resultVal = matchedRows.length;
                    answerText = `Found **${resultVal}** records where **${filterCol}** matches **${filterVal}**.`;
                } else if (isAvg) {
                    resultVal = matchedRows.length > 0 ? (total / matchedRows.length) : 0;
                    resultVal = Math.round(resultVal * 100) / 100;
                    answerText = `The average **${numericCol}** for **${filterVal}** is **$${resultVal.toLocaleString()}**.`;
                } else {
                    resultVal = Math.round(total * 100) / 100;
                    answerText = `The sum of **${numericCol}** for **${filterVal}** is **$${resultVal.toLocaleString()}**.`;
                }

                chartData = matchedRows.map((r, i) => ({
                    label: r[headers[0]] || `Row ${i+1}`,
                    value: parseFloat(r[numericCol]) || 0
                })).slice(0, 6); // Cap at 6 points for visualization
            } else if (numericCol) {
                // Simple total aggregation
                const isAvg = lowerQuery.includes('average') || lowerQuery.includes('avg');
                logs.push(`[Data Analyst] Query plan: SELECT ${isAvg ? 'AVG' : 'SUM'}(${numericCol}) FROM table`);

                let sum = 0;
                rows.forEach(r => {
                    sum += parseFloat(r[numericCol]) || 0;
                });

                const resultVal = isAvg ? (sum / rows.length) : sum;
                const formatted = Math.round(resultVal * 100) / 100;

                answerText = `Calculated database total: The ${isAvg ? 'average' : 'overall sum'} of **${numericCol}** is **$${formatted.toLocaleString()}** (across ${rows.length} rows).`;
                
                // Show raw rows for visualization
                chartData = rows.map((r, i) => ({
                    label: r[headers[0]] || `Row ${i+1}`,
                    value: parseFloat(r[numericCol]) || 0
                })).slice(0, 6);
            } else {
                // Count records general
                logs.push(`[Data Analyst] Query plan: SELECT COUNT(*) FROM table`);
                answerText = `Your query matches **${rows.length}** active records in the dataset schema.`;
                
                // Show breakdown by first text column
                const textCol = headers.find(h => rows.every(r => isNaN(parseFloat(r[h]))));
                if (textCol) {
                    const counts = {};
                    rows.forEach(r => {
                        counts[r[textCol]] = (counts[r[textCol]] || 0) + 1;
                    });
                    chartData = Object.entries(counts).map(([label, value]) => ({ label, value }));
                }
            }

            setRagLogs(prev => [...prev, ...logs, `[BI Engineer] Success! Rendering responsive UI visualizations...`]);
            setQueryResult({ text: answerText, chartData });
            setIsProcessingQuery(false);
        }, 1000);
    };

    // Preset suggestion click
    const handleSelectSuggestion = (txt) => {
        setQueryText(txt);
        setTimeout(() => {
            // Submit immediately
            const mockEvent = { preventDefault: () => {} };
            // Need updated queryText, so trigger search logic with manual query text parameter
        }, 50);
    };

    // Bottom MCP handshake simulation
    const runMcpDemo = () => {
        if (isMcpRunning) return;
        setIsMcpRunning(true);
        setMcpLogs([]);
        setMcpResult('');

        const preset = mcpSimulatorPresets[mcpIdx];
        const logs = [
            `[Handshake] Declaring capability schemas to host LLM...`,
            `[Handshake] Initialized Snowflake/Postgres MCP client...`,
            `[Client] LLM requesting tool execution: query_database`,
            `[Tool Call] Executing matching SQL queries: ${preset.sql}`,
            `[Handshake] Success. Packaging record output stream...`
        ];

        let logIdx = 0;
        const timer = setInterval(() => {
            if (logIdx < logs.length) {
                setMcpLogs(prev => [...prev, logs[logIdx]]);
                logIdx++;
            } else {
                clearInterval(timer);
                setMcpResult(preset.result);
                setIsMcpRunning(false);
            }
        }, 500);
    };

    return (
        <section id="role-prism" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.04),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                {/* 1. Header (Roles Prism Intro) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4 tracking-wide uppercase">
                        <Sparkles size={12} className="animate-pulse" /> The Generalist Edge
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The Data & AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 font-mono">Persona Prism</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
                        Sricharan operates at the intersection of six distinct disciplines. Toggle a profile lens to see his capability balance and how his generalist approach drives cohesive systems.
                    </p>
                </motion.div>

                {/* 2. Interactive SVG Radar & Role Pitch Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
                    
                    {/* Left Column: SVG Radar Widget */}
                    <div className="lg:col-span-5 flex flex-col items-center bg-slate-950/40 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
                        
                        {/* Selector grid of roles */}
                        <div className="w-full grid grid-cols-3 gap-2 mb-6">
                            {Object.entries(rolesData).map(([key, data]) => {
                                const Icon = data.icon;
                                const isActive = selectedRole === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedRole(key)}
                                        className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-center transition-all ${
                                            isActive 
                                                ? `bg-slate-900 border-indigo-500/40 text-white shadow-lg` 
                                                : `bg-slate-950/20 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700`
                                        }`}
                                    >
                                        <Icon size={16} className={isActive ? 'text-indigo-400' : 'text-slate-600'} />
                                        <span className="text-[10px] font-mono mt-1 font-semibold block leading-tight truncate w-full">
                                            {key === 'generalist' ? 'Generalist' : key.toUpperCase()}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Interactive SVG Radar Web */}
                        <div className="relative w-[320px] h-[320px] flex items-center justify-center select-none">
                            <div 
                                className="absolute w-48 h-48 rounded-full blur-[80px] transition-colors duration-500 pointer-events-none" 
                                style={{ backgroundColor: currentRole.glowColor }}
                            />

                            <svg width="320" height="320" className="relative z-10 overflow-visible">
                                {/* Web Guidelines */}
                                {[25, 50, 75, 100].map((level) => (
                                    <path
                                        key={level}
                                        d={getGridPath(level)}
                                        fill="none"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                    />
                                ))}

                                {/* Web Axes lines */}
                                {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                                    const rad = (angle * Math.PI) / 180;
                                    const x2 = 160 + 110 * Math.sin(rad);
                                    const y2 = 160 - 110 * Math.cos(rad);
                                    return (
                                        <line
                                            key={idx}
                                            x1="160"
                                            y1="160"
                                            x2={x2}
                                            y2={y2}
                                            stroke="rgba(255,255,255,0.08)"
                                            strokeWidth="1"
                                        />
                                    );
                                })}

                                {/* Morphed Polygon */}
                                <motion.path
                                    d={generatePolygonPath(currentRole.radarValues)}
                                    fill={`url(#radarGradient-${selectedRole})`}
                                    stroke={`url(#radarStroke-${selectedRole})`}
                                    strokeWidth="2.5"
                                    initial={false}
                                    animate={{ d: generatePolygonPath(currentRole.radarValues) }}
                                    transition={{ type: "spring", stiffness: 80, damping: 14 }}
                                />

                                {/* Interactive Dot Handles at Polygon Vertices */}
                                {labels.map((lbl, idx) => {
                                    const val = currentRole.radarValues[lbl.key];
                                    const angle = (idx * 60 * Math.PI) / 180;
                                    const x = 160 + (val / 100) * 110 * Math.sin(angle);
                                    const y = 160 - (val / 100) * 110 * Math.cos(angle);
                                    return (
                                        <motion.circle
                                            key={idx}
                                            cx={x}
                                            cy={y}
                                            r="4.5"
                                            className="fill-slate-950 stroke-white"
                                            strokeWidth="2"
                                            initial={false}
                                            animate={{ cx: x, cy: y }}
                                            transition={{ type: "spring", stiffness: 80, damping: 14 }}
                                        />
                                    );
                                })}

                                {/* Gradients Definitions */}
                                <defs>
                                    {Object.entries(rolesData).map(([key, data]) => (
                                        <React.Fragment key={key}>
                                            <linearGradient id={`radarGradient-${key}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor={key === 'generalist' ? '#3b82f6' : key === 'bi' ? '#2563eb' : key === 'de' ? '#06b6d4' : key === 'da' ? '#10b981' : key === 'ba' ? '#f59e0b' : key === 'ai' ? '#8b5cf6' : '#4f46e5'} stopOpacity="0.3" />
                                                <stop offset="100%" stopColor={key === 'generalist' ? '#8b5cf6' : key === 'bi' ? '#06b6d4' : key === 'de' ? '#14b8a6' : key === 'da' ? '#06b6d4' : key === 'ba' ? '#d97706' : key === 'ai' ? '#6366f1' : '#7c3aed'} stopOpacity="0.05" />
                                            </linearGradient>
                                            <linearGradient id={`radarStroke-${key}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor={key === 'generalist' ? '#60a5fa' : key === 'bi' ? '#3b82f6' : key === 'de' ? '#22d3ee' : key === 'da' ? '#34d399' : key === 'ba' ? '#fbbf24' : key === 'ai' ? '#a78bfa' : '#818cf8'} />
                                                <stop offset="100%" stopColor={key === 'generalist' ? '#a78bfa' : key === 'bi' ? '#22d3ee' : key === 'de' ? '#2dd4bf' : key === 'da' ? '#22d3ee' : key === 'ba' ? '#f59e0b' : key === 'ai' ? '#4f46e5' : '#a78bfa'} />
                                            </linearGradient>
                                        </React.Fragment>
                                    ))}
                                </defs>

                                {/* Labels */}
                                {labels.map((lbl, idx) => {
                                    let textAnchor = "middle";
                                    if (lbl.x > 180) textAnchor = "start";
                                    if (lbl.x < 140) textAnchor = "end";
                                    return (
                                        <text
                                            key={idx}
                                            x={lbl.x}
                                            y={lbl.y}
                                            textAnchor={textAnchor}
                                            className="fill-slate-400 font-mono text-[9px] font-semibold"
                                            alignmentBaseline="middle"
                                        >
                                            {lbl.name}
                                        </text>
                                    );
                                })}
                            </svg>
                        </div>
                        
                        <div className="w-full text-center mt-3 text-[10px] text-slate-500 font-mono">
                            Interactive Morphing Web (Baseline Skill Cap)
                        </div>
                    </div>

                    {/* Right Column: Dynamic Content & Persona Pitch */}
                    <div className="lg:col-span-7 flex flex-col justify-between self-stretch bg-slate-950/20 rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden">
                        <div>
                            {/* Role Title Header */}
                            <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-5">
                                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                                    <currentRole.icon size={26} className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight font-mono">
                                        {currentRole.title}
                                    </h3>
                                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mt-0.5">
                                        {currentRole.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Superpower Paragraph */}
                            <div className="mb-6">
                                <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-2">Core Competency Focus</h4>
                                <p className="text-slate-200 text-sm leading-relaxed font-light">
                                    {currentRole.superpower}
                                </p>
                            </div>

                            {/* The Generalist Edge */}
                            <div className="mb-8 bg-blue-500/5 rounded-xl border border-blue-500/10 p-4 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 text-white/5 pointer-events-none">
                                    <HelpCircle size={48} />
                                </div>
                                <h4 className="text-[10px] text-blue-400 uppercase tracking-widest font-mono mb-1.5 font-bold flex items-center gap-1.5">
                                    <Workflow size={11} /> The generalist edge
                                </h4>
                                <p className="text-slate-300 text-xs leading-relaxed font-light">
                                    {currentRole.edge}
                                </p>
                            </div>

                            {/* Experience highlights matching this role */}
                            <div>
                                <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-3">Key Portfolio Evidences</h4>
                                <ul className="space-y-3">
                                    {currentRole.highlights.map((bullet, idx) => (
                                        <motion.li 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start text-xs text-slate-300 font-light"
                                        >
                                            <span className="p-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-md mr-3 mt-0.5 shrink-0">
                                                <Check size={10} />
                                            </span>
                                            <span className="leading-relaxed">{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Live CSV Ingestion & RAG Query Playground (Mastery Showcase) */}
                <div className="bg-slate-950/40 rounded-2xl border border-slate-800/80 p-6 md:p-8 relative overflow-hidden mb-16">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-5">
                        <div>
                            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                                <Database className="text-blue-400" size={20} />
                                Hands-on: Local RAG & CSV Data Agent
                            </h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                Upload your own CSV or click a preset to parse schemas, run client-side indexing, and query the dataset in natural language.
                            </p>
                        </div>

                        {/* Presets and custom triggers */}
                        <div className="flex flex-wrap gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-xl self-start">
                            {Object.entries(datasets).map(([key, item]) => (
                                <button
                                    key={key}
                                    onClick={() => handleSelectTemplate(key)}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all ${
                                        selectedDatasetKey === key ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </button>
                            ))}
                            
                            <label className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                                selectedDatasetKey === 'custom' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                            }`}>
                                <Upload size={10} />
                                {customFilename ? customFilename : 'Upload CSV'}
                                <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Central Grid for RAG Operations */}
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* Control panel & suggestions */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-1">Loaded Dataset Context</span>
                                    <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                                        <h4 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                                            <CheckCircle2 size={13} className="text-emerald-400" />
                                            {selectedDatasetKey === 'custom' ? customFilename : datasets[selectedDatasetKey].name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                                            {selectedDatasetKey === 'custom' ? "Custom uploaded spreadsheet data schema." : datasets[selectedDatasetKey].description}
                                        </p>
                                    </div>
                                </div>

                                {/* Dynamic RAG Prompts suggestions based on dataset */}
                                <div>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-2.5">Suggested Query Prompts</span>
                                    <div className="space-y-2">
                                        {(selectedDatasetKey === 'custom' 
                                            ? ["Compare data rows", "Calculate totals", "Find average values"]
                                            : datasets[selectedDatasetKey].suggestions
                                        ).map((suggestion, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => { setQueryText(suggestion); }}
                                                className="w-full text-left p-3 text-[11px] bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl font-sans leading-relaxed transition-all flex items-center justify-between group"
                                            >
                                                <span className="truncate pr-3">"{suggestion}"</span>
                                                <ArrowRight size={10} className="text-slate-600 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Ingestion Console Status */}
                            <div className="mt-6 border-t border-slate-800/40 pt-4">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-2">ETL Pipeline Log</span>
                                <div className="bg-slate-950/90 rounded-xl border border-slate-800/80 p-4 font-mono text-[9px] text-slate-400 space-y-1 max-h-[100px] overflow-y-auto scrollbar-thin">
                                    {ragLogs.map((log, idx) => (
                                        <div key={idx} className="flex gap-1.5">
                                            <span className="text-blue-500 font-bold">&gt;</span>
                                            <span className="text-slate-300 leading-tight">{log}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Query Execution Console */}
                        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/60 rounded-xl border border-slate-800 p-5 relative overflow-hidden">
                            <div className="absolute top-2 right-4 flex gap-1 select-none pointer-events-none">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center border border-white/5"><span className="w-1 h-1 bg-red-500 rounded-full"></span></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center border border-white/5"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center border border-white/5"><span className="w-1 h-1 bg-green-500 rounded-full"></span></div>
                            </div>
                            
                            <div className="text-[10px] text-slate-500 font-mono border-b border-slate-900 pb-2 mb-4">
                                local-mcp-rag-agent://agentic-query-console
                            </div>

                            {/* User input Form */}
                            <form onSubmit={handleQuerySubmit} className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={queryText}
                                    onChange={(e) => setQueryText(e.target.value)}
                                    placeholder="Query dataset in plain English (e.g. Compare revenue by channel)..."
                                    className="flex-grow bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isProcessingQuery || !queryText.trim()}
                                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-mono font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                                >
                                    <Play size={10} className={isProcessingQuery ? 'animate-spin' : ''} />
                                    Query
                                </button>
                            </form>

                            {/* Query Output Display */}
                            <div className="flex-grow flex flex-col justify-center min-h-[140px]">
                                <AnimatePresence mode="wait">
                                    {isProcessingQuery ? (
                                        <motion.div 
                                            key="loader"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center gap-2 py-8"
                                        >
                                            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                            <span className="text-[10px] font-mono text-slate-500">Retrieving documents & aggregating schema...</span>
                                        </motion.div>
                                    ) : queryResult ? (
                                        <motion.div
                                            key="result"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-4"
                                        >
                                            <div className="text-xs text-slate-300 font-light flex items-start gap-2 bg-slate-900/30 p-3 rounded-lg border border-slate-800/40">
                                                <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />
                                                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: queryResult.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-mono font-semibold">$1</strong>') }}></p>
                                            </div>

                                            {/* Responsive HTML CSS Bar Chart */}
                                            {queryResult.chartData && queryResult.chartData.length > 0 && (
                                                <div className="space-y-2 bg-slate-900/10 p-3 rounded-lg border border-slate-800/30">
                                                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block font-bold mb-2">Live Dynamic Visualization</span>
                                                    <div className="space-y-2 max-h-[100px] overflow-y-auto pr-2 scrollbar-thin">
                                                        {queryResult.chartData.map((data, idx) => {
                                                            const maxVal = Math.max(...queryResult.chartData.map(d => d.value), 1);
                                                            const pct = Math.max(8, Math.round((data.value / maxVal) * 100));
                                                            return (
                                                                <div key={idx} className="flex items-center gap-3">
                                                                    <span className="w-24 text-[10px] font-mono text-slate-400 truncate text-right">{data.label}</span>
                                                                    <div className="flex-grow bg-slate-900 rounded-full h-2.5 overflow-hidden">
                                                                        <motion.div 
                                                                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: `${pct}%` }}
                                                                            transition={{ type: "spring", stiffness: 60 }}
                                                                        />
                                                                    </div>
                                                                    <span className="w-16 text-[10px] font-mono text-slate-300 font-semibold text-left">{data.value.toLocaleString()}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <div key="placeholder" className="text-center py-8 text-slate-600 font-mono text-[11px] leading-relaxed">
                                            No query loaded. Type a question or click a suggestion above to retrieve data.
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 4. MCP Ingress Simulator Handshake (Exposes snowflake/postgres open-source tech focus) */}
                <div className="bg-slate-950/20 rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
                        <div>
                            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                                <Cpu className="text-indigo-400" size={18} />
                                MCP Database Connector Handshake
                            </h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                Demonstrating my open-source Model Context Protocol (MCP) servers linking LLMs safely to private Snowflake or PostgreSQL instances.
                            </p>
                        </div>
                        
                        <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-lg shrink-0">
                            {mcpSimulatorPresets.map((preset, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setMcpIdx(idx); setMcpResult(''); setMcpLogs([]); }}
                                    className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold transition-all ${
                                        mcpIdx === idx ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {preset.name.split(' ')[0]} Server
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 space-y-4">
                            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-1">Simulated User Request</span>
                                <p className="text-xs text-slate-200 font-mono italic">
                                    "{mcpSimulatorPresets[mcpIdx].prompt}"
                                </p>
                            </div>

                            <button
                                onClick={runMcpDemo}
                                disabled={isMcpRunning}
                                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/10"
                            >
                                <Sparkles size={12} className={isMcpRunning ? 'animate-spin' : ''} />
                                {isMcpRunning ? 'RESOLVING MCP SCHEMA...' : 'CONNECT MCP AGENT HANDSHAKE'}
                            </button>
                        </div>

                        {/* MCP Handshake Console Output */}
                        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-850 p-4 flex flex-col h-[180px] font-mono text-[10px] overflow-hidden relative">
                            <div className="text-[8px] text-slate-500 border-b border-slate-900 pb-1.5 mb-2.5 flex items-center gap-1">
                                <Terminal size={10} /> mcp-console://snowflake-postgres-connector
                            </div>
                            
                            <div className="flex-grow overflow-y-auto space-y-1.5 text-slate-400 scrollbar-thin">
                                {mcpLogs.map((log, i) => (
                                    <div key={i} className="flex gap-1.5">
                                        <span className="text-indigo-400 font-bold">&gt;&gt;</span>
                                        <span className="text-slate-300 leading-tight">{log}</span>
                                    </div>
                                ))}
                                {mcpLogs.length === 0 && (
                                    <div className="text-slate-700 italic mt-6 text-center">
                                        Press "CONNECT MCP AGENT HANDSHAKE" to stream logs.
                                    </div>
                                )}
                            </div>

                            {mcpResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="border-t border-slate-900 pt-2.5 mt-2"
                                >
                                    <div className="text-[8px] text-emerald-400 font-semibold mb-0.5">Response JSON returned:</div>
                                    <pre className="text-emerald-300/95 text-[9px] leading-tight max-h-[50px] overflow-y-auto">{mcpResult}</pre>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareerPrism;
