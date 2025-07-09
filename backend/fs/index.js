




const fs=require("fs")
const kits=require("kits")
const content  ="\n hello"
//fs.writeFile('kits.txt',content,(err)=>{
  //  if(err){
    //    console.err(err);
      //  return;
    //}
    //console.log("content written in kits.txt successfully");
//})
//fs.readFile('kits.txt','utf-8',(err,data)=> {
    //if (err){
       // console.log(err);
        //return;
    //}
    //console.log("file has",data);
//}
//)
fs.appendFile('kits.txt',content,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("content appended");
}
)
fs.mkdir('raji',()=>{});
fs.writeFileSync('cse.txt',"cse__");
const data=fs.readFileSync('cse.txt','utf-8');
console.log(data)







//fs.readFile()
//console.log("line5")
