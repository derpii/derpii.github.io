$(document).ready(function() { 
	$('#choosecolor').on('click', 'input', function() { 
		$(this).attr('value', '')
	});
	var randomColor;
	$('#randomizer').on('click', 'button', function() { 
		randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$('#shape').css('background-color', randomColor);
	});
	var color;
	$('.colorchosen').on('click', 'button', function() {
		color = $('#colors').val();
		$('#shape').css('background-color', color);
	});
});
