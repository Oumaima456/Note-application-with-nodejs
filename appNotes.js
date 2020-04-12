const fs = require('fs');

var fetchnote=()=>{
try{
return JSON.parse(fs.readFileSync('notes.txt'))
}catch(err){
return []
}
}

const addNote=(title,body)=>{
let notes =fetchnote()
    let note={
        title,
        body
    };
    let double=notes.filter(el=>el.title===title)
    if(double.length==0){
    notes.push(note)
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    Show(note)
    }
    else
        {console.log('this title is already existing')}
    

};
const removeNote=(title)=>{
    let notes=fetchnote()
    let deleted = notes.filter(el=>el.title!==title)
    fs.writeFileSync("notes.txt",JSON.stringify(deleted));
    
}
const readNote=(title)=>{
    let notes=fetchnote()
    
    let filtrednotes=notes.filter(el=>el.title===title)
    Show(filtrednotes[0])
}
const list=()=>{
    let notes=fetchn()
    notes.forEach(note=>Show(note))
    
}
const Show=(note)=>{
    console.log('**********************************')
    console.log(`title: ${note.title}`)
    console.log(`body: ${note.body}`)
}
module.exports={

addNote,
removeNote,
readNote,
list
}