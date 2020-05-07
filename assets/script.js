$(document).ready(function() {

	console.log('script loaded!');


	$('.column-one').click(function(){
		$('.column-two').toggle();
	});

	$('.by-year').click(function(){
		$('.column-three').toggle();
	});

	// $('.column-two').on('click', '#by-year', '#by-alphabet' (function(){
	// 	$('.by-alphabet').click(function(){
	// 		$('#by-year').hide();
	// 		$('#by-alphabet').show();
	// 	$('#by-year').click(function(){
	// 		$('#by-alphabet').hide();
	// 		$('#by-year').show();
	// });



	// $('.column-three').click(function(){
	// 	$('#article').toggle();
	// });

	// $('.by-alphabet').click(function(){
	// 	$('#by-year').hide();
	// 	$('#by-alphabet').show();
	// });

	// $('.by-year').click(function(){
	// 	$('#by-alphabet').hide();
	// 	$('#by-year').show();
	// });

	

	$('.section').click(function(){
		let articleKey = $('a', this).attr('id');
		// $('.column-four').show();
		let articleURL = articleKey + ".html";
		console.log(articleURL);
		$('#selected-article').load(articleURL + ' #content');

	});


// 	$(document).ready(function(){
//   $("div").on("click", ".section", function(event){
//     $(event.delegateTarget).css(".section:active", "black");
//   });
// });


})