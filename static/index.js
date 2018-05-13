$(document).keypress((e) => {
    if (e.which === 13) {
        window.location.assign('/query?term=' + $('#searchTerm').val().toString().replace(/ /g, '+'))

        $(window).bind('hashchange', function() {
		    $('#statusText').text('Finding song...')

		    /*$(window).bind('hashchange', function() {
			    $('#statusText').text('Downloading song...');

			    $(window).bind('hashchange', function() {
				    $('#statusText').text('Download finished!');
				});
			});*/
		});
    }
});