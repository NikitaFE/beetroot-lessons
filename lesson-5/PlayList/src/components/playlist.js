function PlayList () {
  this.songs = [];
  this.currentIndex = 0;
}

PlayList.prototype.add = function(song) {
  this.songs.push(song);
}

PlayList.prototype.play = function() {
  let song = this.songs[this.currentIndex];
  song.play();
}

PlayList.prototype.stop = function() {
  let song = this.songs[this.currentIndex];
  song.stop();
}

PlayList.prototype.next = function() {
  this.stop();
  this.currentIndex++;
  if(this.currentIndex === this.songs.length) this.currentIndex = 0;
  let song = this.songs[this.currentIndex];
  song.play();
}

PlayList.prototype.render = function(list) {
  list.innerHTML = '';
  let songsList = ''; 
  this.songs.forEach(song => songsList += song.toHtml());
  list.innerHTML = songsList;
}

export default PlayList;