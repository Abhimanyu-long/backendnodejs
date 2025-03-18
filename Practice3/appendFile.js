// Append Data to a File
// 👉 Task: Modify the file test.txt to add "Welcome to Node.js!" at the end.
// Hint: Use fs.appendFile() or fs.appendFileSync().



import fs from "fs";

async function appendFileData() {
    try{
      await fs.appendFile("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay1/test.txt", "\nGood morning my l...!", (err)=>{
        if (err) {
            console.error("Error appending to file:", err);
        } else {
            console.log("Data appended successfully!");
        }
      })
    }catch(err){
        console.log(err);
    }
}

appendFileData();