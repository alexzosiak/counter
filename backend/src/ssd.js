"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDB = readDB;
exports.writeDB = writeDB;
var fs = require("fs");
var path = require("path");
var dbPath = path.join(__dirname, "data.json");
console.log(dbPath);
function readDB() {
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}
function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
