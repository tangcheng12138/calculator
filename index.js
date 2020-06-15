var number=document.getElementsByClassName("number");
var content=document.getElementById("content");
var figure=document.getElementById("figure");
var del=document.getElementById("del");
var ac=document.getElementById("ac");


for(var i=0;i<number.length;i++){
    number[i].onclick=function(e){
//     console.log(e.target.textContent);
        var text=e.target.textContent;
        var node = document.createTextNode(text);
        content.appendChild(node);
    };
}

figure.onclick=function(){
    var s=content.innerHTML;
    for(var m=0;m<s.length;m++){
        if(s[m]=="+"||s[m]=="-"||s[m]=="*"||s[m]=="/"){
            var s1=s[0];
            for(var n=1; n<m;n++){
                s1+=s[n];
            }
            var s2=s[m+1];
            for(var n1=m+2; n1<s.length;n1++){
                s2+=s[n1];
            }if(s[m]=="+"){
                s=parseFloat(s1)+parseFloat(s2);
            }
            if(s[m]=="-"){
                s=parseFloat(s1)-parseFloat(s2);
            }
            if(s[m]=="*"){
                s=parseFloat(s1)*parseFloat(s2);
            }
            if(s[m]=="/"){
                s=parseFloat(s1)/parseFloat(s2);
            }
            content.innerHTML="";
//       console.log(s2);
//   s=parseFloat(s1)+parseFloat(s2);
//       console.log(s);
            var node = document.createTextNode(s);
            content.appendChild(node);
        }
    }
};

del.onclick=function(){
    var s=content.innerHTML;
    s=s.substring(0,s.length-1);
    content.innerHTML="";
    var node = document.createTextNode(s);
    content.appendChild(node);
//   console.log(s);
};

ac.onclick=function(){
    content.innerHTML="";
};