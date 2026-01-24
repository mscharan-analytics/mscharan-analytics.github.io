import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalDetails, skills, experience, projects, education } from "../data/resumeData";

// Resume context for the AI
const resumeContext = `
You are an AI assistant for Sricharan Mahavadi's portfolio website. 
Your goal is to answer questions about Sricharan's professional background, skills, and experience professionally and concisely.

Here is Sricharan's Resume Data:

Contact Info:
- Name: ${personalDetails.name}
- Email: ${personalDetails.email}
- Phone: ${personalDetails.phone}
- Location: ${personalDetails.location}
- Summary: ${personalDetails.summary}

Skills:
- Data Engineering: ${skills.dataEngineering.join(", ")}
- Analytics & ML: ${skills.analyticsML.join(", ")}
- Development: ${skills.development.join(", ")}

Experience:
${experience.map(exp => `
- Acccording to resume Sricharan worked as ${exp.role} at ${exp.company} (${exp.period}).
  Details: ${exp.description.join(" ")}
`).join("\n")}

Projects:
${projects.map(proj => `
- ${proj.title}: ${proj.description} (Tech: ${proj.tech.join(", ")})
`).join("\n")}

Education:
${education.map(edu => `
- ${edu.degree} from ${edu.institution} (${edu.year})
`).join("\n")}

Guidelines:
1. Always speak in the first person ("I am Sricharan's assistant") or third person ("Sricharan is...").
2. Be enthusiastic but professional.
3. If asked about something not in the resume, admit you don't know but suggest contacting him.
4. Keep answers under 3-4 sentences unless asked for detail.
`;

let genAI = null;
let model = null;

export const initializeGemini = (apiKey) => {
    if (!apiKey) return false;
    try {
        genAI = new GoogleGenerativeAI(apiKey);
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        return true;
    } catch (error) {
        console.error("Failed to initialize Gemini:", error);
        return false;
    }
};

export const getGeminiResponse = async (userMessage) => {
    if (!model) {
        return "I'm not connected to the AI brain right now. Please provide an API Key.";
    }

    try {
        const prompt = `${resumeContext}\n\nUser Question: ${userMessage}\nAnswer:`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Sorry, I had trouble thinking of an answer. Please try again later.";
    }
};
