// JavaScript Document


function playit_onload()
{
var preval=""
preval=document.getElementById("preselectedValue").value
if (preval!="")
{
change_position(preval)
var x=document.getElementsByTagName("input")
var l=x.length
for (i=0;i<l;i++)
{
if (x[i].value==preval)
{
x[i].checked=true
}
}
document.getElementById("container").style.display="block";
}
}

function click_position(obj)
{
change_position(obj.value)
}

function change_position(val)
{

var s="demoDIV";

s="myDIV ";
s=s.trim();

document.getElementById(s).style.transform=val;

document.getElementById(s).style.WebkitTransform=val;

document.getElementById(s).style.MozTransform=val;

document.getElementById(s).style.OTransform=val;

cc=val;
if ("msTransform" === "msFlexDirection") {
if (val === "normal") {cc = "row"; }
if (val === "reverse") {cc = "row-reverse"; }
}
document.getElementById(s).style.msTransform=cc;

var x="transform:<span id='enlargecssprop'>" + val + "</span>";
var y="#myDIV {<br>background-color:lightblue;<br>###CSSPROP###;<br>}<br>";
var z=y.replace("###CSSPROP###",x);

document.getElementById("styleDIV").innerHTML=z;

}
if (!String.prototype.trim) {
   String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}
