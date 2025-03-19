// Extract File Name & Extension – Given a file path, extract the filename and extension.

// import path from "path"

// function getFileNameAndExtension(filepath) {
//     return {
//         fileName: path.basename(filepath),
//         fileNameWithoutExt: path.basename(filepath, path.extname(filepath)),
//         extension: path.extname(filepath)   
//     }
// }

// console.log(getFileNameAndExtension("/home/neuralit/Desktop/newlearning/backendnodejs/Practice6/text.txt"));


// { 
// fileName: 'text.txt', 
// fileNameWithoutExt: 'text', 
// extension: '.txt' 
// }





// import path from "path";

// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }


// console.log(isAbsolutePath("/home/user/documents/file.txt")); // Linux/Mac
// console.log(isAbsolutePath("C:\\Users\\John\\Desktop\\image.png")); // Windows
// console.log(isAbsolutePath("../data/file.txt")); // Relative Path
// console.log(isAbsolutePath("./logs/error.log")); // Relative Path


// true
// false
// false
// false




// import path from "path";

// function getAbsolutePath(relativePath) {
//     return path.resolve(relativePath);
// }

// console.log(getAbsolutePath("./data/file.txt"));
// console.log(getAbsolutePath("../logs/error.log"));
// console.log(getAbsolutePath("subfolder/script.js"));




