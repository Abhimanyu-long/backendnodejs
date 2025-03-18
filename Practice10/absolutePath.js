// Print the Absolute Path of the Current File 

import path from "path";
import { fileURLToPath } from "url";    

// get the absolute path of the current file 
const fileName = fileURLToPath(import.meta.url);
console.log("Absolute Path of Current File:", fileName);

