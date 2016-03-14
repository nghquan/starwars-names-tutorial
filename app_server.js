//node_modules
var express = require('express');
var path = require('path');
var fs = require("fs");

//global variables
var app = express();
var rootFolder = 'mochawesome-reports';

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, rootFolder))); //  "public" off of current is root

//public Mocha report page
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

// application -------------------------------------------------------------
app.get('/home', function(req, res) {
   res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/api/reports', function (req, res) {
  var data = getFolders();
  res.end( JSON.stringify({
      "debug": req.params,
      "rs": data
  }) );
 
})

app.get('/api/reports/:year', function (req, res) {
  var data = getFolders(req.params.year);
  res.end( JSON.stringify({
      "debug": req.params,
      "rs": data
  }) ); 
})

app.get('/api/reports/:year/:month', function (req, res) {
  var data = getFolders(req.params.year + '/' + req.params.month);
  res.end( JSON.stringify({
      "debug": req.params,
      "rs": data
  }) ); 
})

app.get('/api/reports/:year/:month/:date', function (req, res) {
  var data = getReports(req.params.year + '/' + req.params.month + '/' + req.params.date);
  res.end( JSON.stringify({
      "debug": req.params,
      "rs": data
  }) ); 
})

//Return the report with its name and URL to the report
function getReports(dir){  
    var reports = [];
    dir = dir || '';    
    var fullDir = rootFolder + '/' + dir;
    var files = fs.readdirSync(fullDir);
    for (var i in files){
        var name = fullDir + '/' + files[i];
        if (!fs.statSync(name).isDirectory()
            && name.indexOf('.html') > -1){//filter files that does contain '.html'            
            reports.push({
                "name": files[i],
                "reportUrl": dir + '/' + files[i]
            });
        }
    }
    return reports;
}

//Return the report folders
function getFolders (dir, folders_){
    folders_ = folders_ || [];
    dir = dir || '';
    var fullDir = rootFolder + '/' + dir;
    var files = fs.readdirSync(fullDir);
    for (var i in files){
        var name = fullDir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){            
            folders_.push({
                "name": files[i],
                "childrenUrl": getChildrenUrl(dir,files[i])
            });
        }
    }
    return folders_;
}

//Populate the children URL
function getChildrenUrl(dir,name){
    if(dir == ''){
        return dir + '/' + name;
    }
    return '/' + dir + '/' + name;
}

app.listen(8080);
console.log('Listening on port 8080');