var minsize=14;
var maxsize=16;
function increaseFontSize() {
	// var x = incFontSize(document.getElementsByTagName('p'));
	var x = incFontSize(document.getElementById('ChangeSize'));
}
function incFontSize(p) {
   var s;
      if(p.style.fontSize) {
         s = parseInt(p.style.fontSize.replace("px",""));
      }
	  else {
         s = minsize;
      }
      if(s != maxsize) {
         s = maxsize;
      }
      p.style.fontSize = s+"px";
	  document.getElementById('Swap').innerHTML = '<a href="javascript:decreaseFontSize();"><img alt="[Smaller type]" src="../images/minus.png">Smaller type</a>';
   return true;
}
function decreaseFontSize() {
	// var x = decFontSize(document.getElementsByTagName('p'));
	var x = decFontSize(document.getElementById('ChangeSize'));
}
function decFontSize(p) {
   var s;
      if(p.style.fontSize) {
         s = parseInt(p.style.fontSize.replace("px",""));
      }
	  else {
         s = minsize;
      }
      if(s != minsize) {
         s = minsize;
      }
      p.style.fontSize = s+"px";
 	  document.getElementById('Swap').innerHTML = '<a href="javascript:increaseFontSize();"><img alt="[Larger type]" src="../images/plus.png">Larger type</a>';
   return true;
}