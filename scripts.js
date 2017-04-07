// Get API responses from API servers
$(document).on('ready', function() {
    var
        $pokeBtn = $('#pokeapi'),
        $swapiBtn = $('#swapi'),
        pokeUrl = 'http://pokeapi.co/api/v2/pokemon/1/',
        swapiUrl = 'https://swapi.co/api/people/1/';
    
    $pokeBtn.on('click', function(e) {
        $.get(pokeUrl, function(data) {
            console.log(data);
        });
    });
    
    $swapiBtn.on('click', function(e) {
        $.get(swapiUrl, function(data) {
            console.log(data);
        });
    });
});
