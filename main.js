Array=[];
function submit() {
    var sname1=document.getElementById("Name1").value;
    var sname2=document.getElementById("Name2").value;
    var sname3=document.getElementById("Name3").value;
    var sname4=document.getElementById("Name4").value;
    Array.push(sname1);
    Array.push(sname2);
    Array.push(sname3);
    Array.push(sname4);
    console.log(Array); document.getElementById("displayname").innerHTML=Array;
    document.getElementById("submit1").style.display="none";
    document.getElementById("sort1").style.display="inline-block";}
    function sort(){
        Array.sort();
        console.log(Array);
    document.getElementById("displayname").innerHTML=Array;    }