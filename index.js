console.log("===========Starting point==========");
const fs= require("fs");

// fs.readFile("learning.txt", "utf8", (error, data)=>{
//     if (error) {
//         console.log("Failed to read data from the File..."); 
//     }else{
//         console.log("File Content ");
//         console.log(data);   
//     } 
// });

let content = "Hello I am writing content in the File";
fs.writeFile("output.txt", content, "utf8", (err) => {
  if (err){
    console.log(err); 
  }
  console.log('The file has been saved!');
});

console.log("======= File Stat =============");
fs.stat("output.txt", (error, stat)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log(`File Size: ${stat.size} bytes`);
    console.log(` Is this File:  ${stat.isFile()}`);
    console.log(` Is this Directory:  ${stat.isDirectory()}`);
    console.log(` File Creation:  ${stat.birthtime}`);
     console.log(` File Modified:  ${stat.mtime}`);
});

const filePath ="text.txt";
fs.unlink (filePath,(err)=> {
    if (err){
        console.error(err);
        return;
    }
    console.log(`file has been deleted.`)
});