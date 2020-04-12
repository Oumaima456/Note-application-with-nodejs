const yargs=require('yargs')

let appNotes=require('./appNotes.js')




let command=yargs.argv._[0]

let title=yargs.argv.title

let body=yargs.argv.body



if(command==='add'){

	appNotes.addNote(title, body);
	
	
}else
if(command==='remove'){

	appNotes.removeNote(title)
	
}
else
if(command==='read'){
	
appNotes.readNote(title)
	
}
else
if(command==='list'){
	appNotes.list() 
}
else{
		console.log('this command is unknown !!! ')
		
}