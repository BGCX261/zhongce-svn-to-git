var li=document.getElementsByClassName("s_members_list members_list ")[0].getElementsByTagName("li");
var div="<h1 style='color:red;'>【Ctrl+A】全选，1.复制并粘贴到txt文件，2.再次复制txt的文本，粘贴到excel表格即可。</h1>\
	<a target='_blank' href='http://www.zuanqian123.com/'><h1 style='color:green;'>更多工具在123赚钱网：www.zuanqian123.com (点击这里)</h1></a><hr>";
var txt=div+"昵称	q号	邮箱	群身份<br>";
for(var i=0;i<li.length;i++){
	var id=li[i].getElementsByTagName("a")[0].href.replace("http://user.qzone.qq.com/","");
	var name=li[i].getElementsByTagName("a")[1].textContent.replace("<br>","").replace("<br>","").replace("<br>","").replace("<br>","");
	var role=li[i].getElementsByClassName("member_role")[0].textContent;
	txt += name+"	"+id+"	"+id+"@qq.com"+"	"+role+"<br>";
}
document.body.innerHTML=txt;