import { AIModelAdapter } from './aiModelAdapter.js';
import { VertexAI } from '@google-cloud/vertexai';
import * as prompts from './data/prompts.js';

export class VertexAIAdapter extends AIModelAdapter {
    constructor() {
        super();

        // get all the required environment variables
        const projectId = process.env.VERTEX_AI_PROJECT_ID;
        const location = process.env.VERTEX_AI_LOCATION;
        const systemPrompt = prompt.SYSTEM_PROMPT;

        // initialize the Vertex AI client
        this.vertexAI = new VertexAI({ projectId, location });
        this.generativeModel = vertexAI.getGenerativeModel({
            model: textModel,
            safetySettings: [{ category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE }],
            generationConfig: { maxOutputTokens: 256 },
            systemInstruction: {
                role: 'system',
                parts: [{ "text": systemPrompt }]
            },
        });
    }

    async analyzeLogs(logs) {
        const userPrompt = prompts.USER_PROMPT;

        userPrompt = userPrompt + "\nLog data of k6 execution is as below: \n " + logs.JSON.stringify();

        const request = {
            contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        };

        const result = await this.generativeModel.generateContent(request);
        const response = result.response;
        console.log('Response: ', JSON.stringify(response));
        return response;

    }
}