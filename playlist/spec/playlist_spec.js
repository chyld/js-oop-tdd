// var Song = require('../song');
// var Playlist = require('../playlist');

// describe('Playlist', function() {

//   var itHadToBeYou = new Song('It had to be you', 100);
//   var butNotForMe = new Song('But Not for Me', 50);
//   var autumnInNewYork = new Song('Autumn In New York', 25);

//   it("is empty by default", function() {
//     var playlist = new Playlist('jazz');
//     expect(playlist.name).toEqual('jazz');
//     expect(playlist.isEmpty()).toEqual(true);

//     var playlist2 = new Playlist('classic rock');
//     expect(playlist2.name).toEqual('classic rock');
//     expect(playlist2.isEmpty()).toEqual(true);
//   });

//   // it("allows you to add a song", function() {
//   //   var playlist = new Playlist('jazz');
//   //
//   //   playlist.addSong(itHadToBeYou);
//   //
//   //   expect(playlist.isEmpty()).toEqual(false);
//   //
//   //   var playlist2 = new Playlist('classic rock');
//   //   expect(playlist2.isEmpty()).toEqual(true);
//   // });
//   //
//   // it("allows you to see all song names in the order they were added", function() {
//   //   var playlist = new Playlist('jazz');
//   //
//   //   expect(playlist.songNames()).toEqual([]);
//   //
//   //   playlist.addSong(itHadToBeYou);
//   //   expect(playlist.songNames()).toEqual(['It had to be you']);
//   //
//   //   playlist.addSong(butNotForMe)
//   //   expect(playlist.songNames()).toEqual([
//   //     'It had to be you',
//   //     'But Not for Me'
//   //   ]);
//   // });
//   //
//   // it("tells you the total duration of the playlist", function() {
//   //   var itHadToBeYou = new Song('It had to be you', 100);
//   //   var butNotForMe = new Song('But Not for Me', 50);
//   //   var autumnInNewYork = new Song('Autumn In New York', 25);
//   //
//   //   var playlist = new Playlist('jazz');
//   //
//   //   expect(playlist.totalDuration()).toEqual(0);
//   //
//   //   playlist.addSong(itHadToBeYou);
//   //   expect(playlist.totalDuration()).toEqual(100);
//   //
//   //   playlist.addSong(butNotForMe);
//   //   playlist.addSong(autumnInNewYork);
//   //   expect(playlist.totalDuration()).toEqual(175);
//   // });
//   //
//   //
//   // it("allows you to swap songs", function() {
//   //   var playlist = new Playlist('jazz');
//   //
//   //   playlist.addSong(itHadToBeYou);
//   //   playlist.addSong(butNotForMe);
//   //   playlist.addSong(autumnInNewYork);
//   //
//   //   playlist.swap(itHadToBeYou, autumnInNewYork);
//   //   expect(playlist.songNames()).toEqual([
//   //     'Autumn In New York',
//   //     'But Not for Me',
//   //     'It had to be you',
//   //   ]);
//   //
//   //   playlist.swap(butNotForMe, autumnInNewYork);
//   //   expect(playlist.songNames()).toEqual([
//   //     'But Not for Me',
//   //     'Autumn In New York',
//   //     'It had to be you',
//   //   ]);
//   // });
//   //
//   // it("allows you remove a song from the playlist", function() {
//   //   var playlist = new Playlist('jazz');
//   //
//   //   playlist.addSong(itHadToBeYou);
//   //   expect(playlist.isEmpty()).toEqual(false);
//   //
//   //   playlist.addSong(butNotForMe);
//   //
//   //   expect(playlist.songNames()).toEqual([
//   //     'It had to be you',
//   //     'But Not for Me',
//   //   ]);

// });
