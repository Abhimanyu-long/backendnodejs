// Check if a File Exists
// 👉 Task: Check if test.txt exists before reading it. If it exists, read and print its content. 
// If not, print "File not found" message.
// Hint: Use fs.existsSync().


import fs from "fs";

async function existFile(){
    try{
        if(fs.existsSync("text.txt")){
           const data=await fs.readFileSync("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay6/text.txt", "utf-8")
            console.log("reading text => ",data);
        }else{
            console.log("File not found");
        }
    }catch(err){
        console.log(err);
    }
}

existFile();
