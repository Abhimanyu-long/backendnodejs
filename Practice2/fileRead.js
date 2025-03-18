// Read a File and Display Content
// 👉 Task: Write a program that reads the contents of test.txt and prints it to the console.
// Hint: Use fs.readFile() or fs.readFileSync().


import fs from "fs";

async function readFile() {
    try {
        const data = fs.readFileSync("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay1/test.txt", "utf-8"); // Now await works correctly
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile();