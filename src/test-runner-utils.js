exports.getReportDir = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();  
  return yyyy+'/'+mm+'/'+dd;
};

exports.getReportName = function() {
    var currentdate = new Date(); 
   var datetime = "Report_" + currentdate.getDate() + "_"
                + (currentdate.getMonth()+1)  + "_" 
                + currentdate.getFullYear() + "@"  
                + currentdate.getHours() + "_"  
                + currentdate.getMinutes() + "_" 
                + currentdate.getSeconds();
  return datetime;
};