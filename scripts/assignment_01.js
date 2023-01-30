//Assignment 01 - Declare 20 variables from a popular web application (Spotify)

let playPauseButton = true; //Boolean
let randomPlay = false; //Boolean
let onRepeat = false; //Boolean
let saveToYourLibrary = false; //Boolean
let profileName = "lere.rentesca"; //String
let volumeBar = 1.0; //Double
let muteButton = false; //Boolean
let fullScreenButton = false; //Boolean
let profilePicture = "local/document/pic.png"; //String
let languageSettings = "English (English)"; //String
let explicitContentButton = true; //Boolean
let autoplayButton = true; //Boolean
let searchBar = "The weeknd - Out of Time"; //String
let streamingQuality = "Automatic"; //String
let downloadButton = "High"; //String
let crossfadeSongs = 6; //int
let equalizerPresets = "Bass booster"; //String
let compatibility = true; //Boolean
let createPlaylist = "Bellaqueo"; //String
let songDuration = 163; //int

document.write(`
    <h3>The variables that i recognize are:</h3>
    <p>The play and pause button: ${playPauseButton}</p>
    <p>The random play button: ${randomPlay}</p>
    <p>The on repeat button: ${onRepeat}</p>
    <p>The save to your library: ${saveToYourLibrary}</p>
    <p>The profile name: ${profileName}</p>
    <p>The volume bar: ${volumeBar}</p>
    <p>The mute button: ${muteButton}</p>
    <p>The fullscreen button: ${fullScreenButton}</p>
    <p>The profile picture: ${profilePicture}</p>
    <p>The language settings: ${languageSettings}</p>
    <p>The explicit content button: ${explicitContentButton}</p>
    <p>The autoplay button: ${autoplayButton}</p>
    <p>The search bar: ${searchBar}</p>
    <p>The streaming quality: ${streamingQuality}</p>
    <p>The download button: ${downloadButton}</p>
    <p>The crossfade songs: ${crossfadeSongs}</p>
    <p>The equalizer presets: ${equalizerPresets}</p>
    <p>The compatibility: ${compatibility}</p>
    <p>The create playlist: ${createPlaylist}</p>
    <p>The song duration: ${songDuration}</p>
`);