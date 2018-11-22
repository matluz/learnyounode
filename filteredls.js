var fs = require('fs');
 
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory")
    process.exit(-1)
}
 
var path = process.argv[2]
 
fs.readdir(path, function(err, items) {
    
 
  for (i = items.length - 1; i >= 0; i -= 1) {
      
    if (items.indexOf('.txt') != -1){
      items.splice(i,1)
    }
    console.log(".")

  }

  console.log(items)

});
