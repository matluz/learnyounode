var fs = require('fs');
 
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory")
    process.exit(-1)
}
 
var path = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(path, function(err, items) {
    
 
  for (i = items.length - 1; i >= 0; i -= 1) {
      
    if (items[i].indexOf(extension) == -1){
      items.splice(i,1)
    }

  }

  for (i = 0; i < items.length; i++){
    console.log(items[i]);
  }

  

});
