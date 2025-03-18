// Rename a File
// 👉 Task: Rename test.txt to newTest.txt.
// Hint: Use fs.rename() or fs.renameSync().

import fs from "fs";

async function renameFile() {
    try{
        await fs.rename("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay1/test.txt", "/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay1/mannu.txt", (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("file rename successfully");
            }
        })
    }catch(err){
        console.error(err);
    }
}

renameFile();