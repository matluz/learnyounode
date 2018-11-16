var fs = require('fs')
var myArray = undefined

function splitAndCall(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {    
    myArray = String(fileContents)
    myArray = myArray.split("\n")
    
    callback()
  })
}

function logMyNumber(){
    console.log(myArray.length - 1) 
}


splitAndCall(logMyNumber)
