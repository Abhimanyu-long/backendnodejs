// Read and Write JSON File
// 👉 Task: Create a JSON file (data.json) with some sample data. 
// Write a program that reads the JSON file, modifies a value, and writes it back.
// Hint: Use JSON.parse(), JSON.stringify(), and fs.readFileSync() / fs.writeFileSync().


import fs from "fs";
const filePath = "./data.json";

async function jsonFile(){
    try{
        if(fs.existsSync("/home/neuralit/Desktop/newlearning/backendnodejs/PracticeDay7/data.json")){
            const jsondata = fs.readFileSync(filePath, "utf-8")
            let data = JSON.parse(jsondata);

            data.users[0].name= "manu";

            fs.writeFileSync(filePath, JSON.stringify(data,null, 2));

            console.log("JSON file updated successfully:", data);

        }else{
            console.log("Json file not found"); 
        }
    }catch(err){
        console.log(err);
    }
}

jsonFile();