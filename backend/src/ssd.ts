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

export async function writeDB(data: Data): void {
   await fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export async function readDB(): Data {
    if (!fs.existsSync(dbPath)) {
        console.log('DB file not found, creating new one');
        await fs.writeFileSync(dbPath, JSON.stringify({}, null, 2));
        return  {};
    }

    const content = await fs.readFileSync(dbPath, 'utf-8');

    if (!content) {
        return {};
    }

    return JSON.parse(content);
}
