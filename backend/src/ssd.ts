import { error } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'data.json');

type Data = {
    [key: string]: {
        count: number;
    };
}

export function writeDB(data: Data): void {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch {
        throw new Error(`file SSD.ts / 21 line = write database does not work`);
    }
   
}

export function readDB() {
    if (!fs.existsSync(dbPath)) {
        console.log('DB file not found, creating new one');
        fs.writeFileSync(dbPath, JSON.stringify({}, null, 2));
        return  {};
    }

    const content = fs.readFileSync(dbPath, 'utf-8');

    if (!content) {
        return {};
    }

    return JSON.parse(content);
}
