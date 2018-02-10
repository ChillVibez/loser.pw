if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded();});}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded();});}
function loaded(){setInterval(loop,400);}
var x=0;var titleText=[" ุ  ุ  ุ  ุ l"," ุ  ุ  ุ lo"," ุ  ุ lo$"," ุ lo$e","lo$er","o$er ุ ","$er ุ  ุ ","er ุ  ุ  ุ ","r ุ  ุ  ุ  ุ "];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}
window.oncontextmenu=function(){console.log("get tf out of my site bruh");return false;}