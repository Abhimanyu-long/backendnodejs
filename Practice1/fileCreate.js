// Create and Write to a File
// Task: Write a program that creates a new file (test.txt) and writes "Hello, World!" into it.
// Hint: Use fs.writeFile() or fs.writeFileSync().

// import fs from "fs";

// async function createFile() {
//     try{
//         await fs.writeFileSync("test.txt", "Hello!");
//     }catch(err){
//         console.log(err);
//     }
// }

// createFile();



import fs from "fs";

async function createFile(){
    try{
       await fs.writeFileSync("test.txt", "hello to this first learning nodejs");
    }catch(err){
        console.error(err);
    }
}

createFile();