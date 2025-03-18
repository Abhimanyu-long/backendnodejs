// List All Files in a Directory
// 👉 Task: Write a program that lists all files in a given directory (./myfolder).
// Hint: Use fs.readdir() or fs.readdirSync().

import fs from "fs";

const directoryPath =
  "/home/neuralit/Desktop/newlearning/backendnodejs/miniproject"; // Specify the folder path

async function readDir() {
  try {
    const files = fs.readdirSync(directoryPath);

    console.log("Files in the directory:");
    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

readDir();
