var playlist = {
queen: "Killer Queen",
coral: "In my Room",
fooFighters: "All my Life"}

function updatePlaylist(obj, artist, song){
  obj.artist = song;
  return obj
}

function removeFromPlaylist(obj,artist){
  delete obj.artist;
  return obj
}
