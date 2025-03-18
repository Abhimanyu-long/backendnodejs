// Read Large Files Using Streams: Use fs.createReadStream() to read a large file in chunks.

import fs from "fs";

const filePath = "largeFile.txt";

const stream = fs.createReadStream(filePath, { encoding: "utf8", highWaterMark: 1024 });

console.log("stream",stream);

stream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
});

stream.on("end", () => {
    console.log("✅ Finished reading the file.");
});

stream.on("error", (err) => {
    console.error("Error reading file:", err);
});
