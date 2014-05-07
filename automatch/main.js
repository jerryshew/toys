$(document).ready(function(){

	$("#automatch").on("keyup", function(event){
		var keyCode = event.keyCode,
				inputStr = $(this).val(),
			 	$list = $("ul#hints");				

		if (inputStr) {			
			$.ajax({
				url: "http://127.0.0.1:4000/fetch?q="+ inputStr,
				method: "GET",
				dataType: "jsonp",
				crossDomain: true,
				success: function(data){
					$list.find("li").remove();
					for(var i = 0; i < data.length; i++ ){
						var $item = $("<li></li>").addClass("hit-item");
						$item.text(data[i].name);
						$item.appendTo($list);
					}
				},
				error: function(xhr, status, error){
					console.log(error);
				}
			});
		}

	});


});

