function xuan(n){document.getElementById("eva_form").getElementsByTagName("label")[n-1].click();document.getElementById("next_eva").click()}
function dan(n){document.getElementById("eva_form").getElementsByTagName("label")[n-1].click();}
function key(code){return code.charCodeAt(0)-32;}
function get(n){
	var tt=document.getElementsByTagName("span")[9].textContent;
	var id=document.URL.split('/')[7];
	if(tt.indexOf("肯定VS否定")>-1){var txt=document.getElementById("eva_form").getElementsByTagName("td")[0].textContent.replace("\n","").split("【问题】:")[1].split("【答案】")[0];
	localStorage.setItem(id+"#"+n+"@"+txt,"");}
}
window.document.onkeydown = disableRefresh;
function disableRefresh(evt){
    evt = (evt) ? evt : window.event
    if (evt.keyCode) {
			 if(evt.keyCode == key('a')){xuan(1);get(1)}
		else if(evt.keyCode == key('s')){xuan(2);get(2)}
		else if(evt.keyCode == key('d')){xuan(3);get(3)}
		else if(evt.keyCode == key('f')){xuan(4);get(4)}
		else if(evt.keyCode == key('1')+32){dan(1);get(1)}
		else if(evt.keyCode == key('2')+32){dan(2);get(2)}
		else if(evt.keyCode == key('3')+32){dan(3);get(3)}
		else if(evt.keyCode == key('4')+32){dan(4);get(4)}
		else if(evt.keyCode == key('w')){document.location=document.location}
		else if(evt.keyCode == key('z')){document.getElementById("img_show_id14").getElementsByTagName("img")[0].click();document.getElementById("next_eva").click()}
		else if(evt.keyCode == key('c')){document.getElementById("next_eva").click();document.getElementById("confirm_agree").click()}
		else if(evt.keyCode == key('m')){var txt="";for(var i=0;i<localStorage.length;i++){if(localStorage.key(i).indexOf(document.URL.split('/')[7])>-1){txt+=localStorage.key(i)+"<br>";}}document.body.innerHTML=txt;}
		else if(evt.keyCode == 9){document.getElementById("next_eva").click()}//tab
    }
}