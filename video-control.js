sentil_url = "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"

document.getElementById("video_player").src = sentil_url;

var overlay_header = document.querySelector('h1');
overlay_header.textContent = "Welcome to my Video Player"

// set header based on command line
const remote = require("electron").remote;
var argv = require('electron').remote.process.argv;
var pos_header_arg = argv.indexOf('header')
if (pos_header_arg > 0)
    {
        text_index = pos_header_arg + 1;
        if (text_index < argv.length)
        {
            var overlay_header = document.querySelector('h1');
            overlay_header.textContent = argv[text_index];
        }
    }

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
    document.getElementById("video_player").src = sentil_url;
    
}