document.getElementById("video_player").src = "https://download.blender.org/durian/movies/Sintel.2010.720p.mkv";

var overlay_header = document.querySelector('h1');
overlay_header.textContent = "Welcome to my Video Player"

function changeHeader()
{
    var overlay_header = document.querySelector('h1');
    overlay_header.textContent = "changed text using function";
}

function changeVideo()
{
    document.getElementById("video_player").src = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v";
}

function skipVideo()
{
    document.getElementById("video_player").currentTime = 473;
}

function loadSintel()
{
    document.getElementById("video_player").src = "https://download.blender.org/durian/movies/Sintel.2010.720p.mkv";
    
}