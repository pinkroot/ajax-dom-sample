function addFunc(id){
	$.post("", {}, function(json){
			var elm = $("#button" + id + ">.num");
			var count = elm.text();
			elm.fadeOut("normal", function(){
				elm.text(++count);
				elm.fadeIn("normal");
			});
		});
}
