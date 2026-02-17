import fs from "fs";
import path from "path"


const dbPath = path.join(__dirname, "db.json");

export function readDB(): any  {
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}
export function writeDB(data: any): void  {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}


