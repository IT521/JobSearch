var jq=$.noConflict();
jq(document).ready(function(){
	jq("#Swap").click(function(){
		var x = document.getElementById('ChangeSize');
		if (x.style.fontSize=="14px") {
			jq(this).html("<a><img alt='[Smaller type]' src='../images/minus.png'>Smaller type</a>");
			jq("#ChangeSize").css({"font-size":"16px"});	
		}
		else {
			jq(this).html("<a><img alt='[Larger type]' src='../images/plus.png'>Larger type</a>");
			jq("#ChangeSize").css({"font-size":"14px"});
		}
	});
});