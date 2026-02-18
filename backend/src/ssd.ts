import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'data.json');

export function writeDB(data: any): void {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export function readDB(): any {
    if (!fs.existsSync(dbPath)) {
        console.log('DB file not found, creating new one');
        fs.writeFileSync(dbPath, JSON.stringify({}, null, 2));
        return {};
    }

    const content = fs.readFileSync(dbPath, 'utf-8');

    if (!content) {
        return {};
    }

    return JSON.parse(content);
}
