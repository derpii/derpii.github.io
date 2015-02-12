$(document).ready(function() {
	$('.message').on('click', 'input', function() {
		$(this).attr('value', '');
	});
	var yourmessage;
	$('.button').on('click', 'button', function() {
	yourmessage = $('#message').val();
		$('#message-entered').html('<p>' +yourmessage+ '</p>').addClass('submit');
	});
});
