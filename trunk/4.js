var n=4;
var id=document.URL.split('/')[7];
try{var tt=document.getElementsByClassName("question-example")[0].textContent.replace("                    ","").replace("\n","").replace("\n","");
localStorage.setItem(id+"	#"+n+"%	"+tt,"1");}catch(err){}
document.getElementById("eva_form").getElementsByTagName("label")[n-1].click();document.getElementById("next_eva").click()