// Delete a File
// 👉 Task: Delete newTest.txt.
// Hint: Use fs.unlink() or fs.unlinkSync().

import fs from "fs";

async function deleteFile() {
    try{
        await fs.unlink("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay1/mannu.txt", (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("file deleted successfully");
            }
        })
    }catch(error){
        console.log(error);
    }
}

deleteFile();