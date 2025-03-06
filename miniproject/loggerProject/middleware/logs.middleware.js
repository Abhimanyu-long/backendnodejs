import { error } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log("this is file path", __filename);
const __dirname = path.dirname(__filename);
console.log("this is directory path", __dirname);

// middleware for all logs

const logsmiddleware = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url} \n`;
  const logfile = path.join(__dirname, "../logs/logs.txt");

  fs.appendFile(logfile, log, (error) => {
    if (error) {
      console.log("error in logs", error);
    }
  });
  next();
};

export default logsmiddleware;