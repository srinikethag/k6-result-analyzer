import { log } from 'console';
import { VertexAIAdapter } from '../aiModels/vertexAIAdapter.js';
import fs from 'fs';
import path from 'path';

const vertexAIAdapter = new VertexAIAdapter();

const logpath = path.join(__dirname, 'k6Logs.json');

const logs = fs.readFileSync(logpath, 'utf8');

export function performAiAnalysis(logs) {
    return vertexAIAdapter.analyzeLogs(logs);
}