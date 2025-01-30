document.addEventListener("DOMContentLoaded", () => {
    const playlist = [
        "iphone-ringtone-47958.mp3",
        "ashique2-bansuri-2821.mp3",
        "vivo-y12-2020-ringtone-50494.mp3"
    ];
    
    let currentSongIndex = 0;
    const player = document.getElementById("audio-player");

    // Function to load and play the selected song
    function loadSong(index) {
        player.src = playlist[index];
        player.load();
        player.play();
    }
    
    // Play the next song in the playlist
    document.getElementById("next-btn").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    });
    
    // Play the previous song in the playlist
    document.getElementById("prev-btn").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    });
    
    // Add a new song to the playlist
    document.getElementById("add-btn").addEventListener("click", () => {
        const newSong = prompt("Enter the song URL:");
        if (newSong) {
            playlist.push(newSong);
            alert("Song added to playlist!");
        }
    });
    
    // Delete the current song from the playlist
    document.getElementById("delete-btn").addEventListener("click", () => {
        if (playlist.length > 1) {
            playlist.splice(currentSongIndex, 1);
            alert("Song deleted!");
            
            // Ensure the currentSongIndex doesn't go out of bounds
            currentSongIndex = currentSongIndex % playlist.length;
            loadSong(currentSongIndex);
        } else {
            alert("Cannot delete the last song in the playlist!");
        }
    });
    
    // Add event listener to each song in the Digital Library
    const libraryItems = document.querySelectorAll("#digital-library .song");
    libraryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            loadSong(index);  // Load the song when clicked
        });
    });
    
    // Initial song load
    loadSong(currentSongIndex);
});
