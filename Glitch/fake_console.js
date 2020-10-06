console.info("fake_console.js version 1.0.0.0");

play();
function play(){
	let printText = $('.text').data('text');

	let content= printText.split('/n');
	let max = content.length-1;
	$.each(content, function (index, newLine) {
		$('.text').append('<span style="display:block;" class="row_line" id="' + index + '"></span>');
	 
		let lineID = index;
		let self = $(this);
		setTimeout(function () {
			$.each(self, function (index, chunk) {
				setTimeout(function () {
					$('#' + lineID).append("<span class='code'>" + chunk + "</span>");
						$('#' + lineID).fadeOut(6000,function(){ 

						if(lineID == max){
							//Loop effect
							//play();

							//Changement content
							$('#center_text').fadeOut(250,function() {
								$('#center_text').html('Accès autorisé');
								$('#center_text').addClass('success');
								$('#center_text').fadeIn(250,function(){
									$('.glitch').fadeOut(500,function(){
										$('.glitch').remove();
									});
								});
							});
						}

						$(this).remove();					
					});
				}, index * 15);
			});
		
		}, index * 100);
	});


	
	
}