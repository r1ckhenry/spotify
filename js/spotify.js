// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE

$('#search-keyword').on('keyup', getUserInput)

function getUserInput() {
  $('#results').empty();
  userInput = this.value;
  typeChoice = '';
  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/search?q=' + userInput + '&type=track'
  }).done(function(response){
    console.log(response);
    currentTrack = response.tracks.items;
    for (var i = 0; i < currentTrack.length; i++) {
      var track = '<figcaption><figure>';
          track += '<img src="' + currentTrack[i].album.images[1].url + '"></figure>';
          track += '<audio src="' + currentTrack[i].preview_url + '" preload="auto" controls></audio>'
          track += '<div class="song-info"><b>' + currentTrack[i].name + '</b>';
          track += '<small>' + currentTrack[i].artists[0].name + '</small></div></figcaption>';
      $('#results').append(track);
    }
  })
}





  


