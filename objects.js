<<<<<<< HEAD
var playlist = { Nas: "One Mic"}

function updatePlaylist (object, artistName, songTitle) {
  object[artistName] = songTitle;
  
  return object;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
=======
var playlist = {name: "song title"}

function updatePlaylist (object, name, songtitle) {
  object.name = 'songtitle';
>>>>>>> 8219c8cc3384b5430b32d7540b461086273abe7d
}