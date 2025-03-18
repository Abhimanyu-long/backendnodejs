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









// this also one of best approach 

// import fs from "fs";

// const filePath = "./data.json";

// function jsonFile() {
//     try {
//         if (!fs.existsSync(filePath)) {
//             console.log("JSON file not found. Creating one...");

//             const sampleData = {
//                 name: "John Doe",
//                 age: 30,
//                 city: "New York"
//             };

//             fs.writeFileSync(filePath, JSON.stringify(sampleData, null, 2));
//             console.log("Sample JSON file created.");
//         }

//         const jsonData = fs.readFileSync(filePath, "utf-8");
//         let data = JSON.parse(jsonData);

//         data.age += 1; 

//         fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//         console.log("JSON file updated successfully:", data);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// jsonFile();
