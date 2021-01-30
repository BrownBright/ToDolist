 
 
module.exports = getdate;

 function getdate (){
 let today = new Date();
 let options = {
 weekday: "long",
 day: "numeric",
 month: "long"
 };
 let day = today.toLocaleString("en-US", options);
 return day;
 }
