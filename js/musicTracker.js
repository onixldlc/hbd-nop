var musicCheckInterval;
var musicLength=0;

function trackMusic(audio){
	musicCheckInterval = setInterval(function(){
		setCookie('timePlayed', audio.currentTime);
		// console.log(audio.currentTime, audio.duration)
		if(audio.currentTime === audio.duration){
			audio.currentTime = 0;
			setCookie('timePlayed', 0);
			stopMusic();
			stopTrackingMusic();
		}
	}, 1000)
}

function playMusic(){
	var audio = document.getElementById("music");
	var tillPlayed = getCookie('timePlayed');

	if(tillPlayed && tillPlayed != 0){
		audio.currentTime = tillPlayed;
	}

	audio.play();
	trackMusic(audio);
}

function stopMusic(){
	var audio = document.getElementById("music");
	audio.pause()
}

function stopTrackingMusic(){
	clearInterval(musicCheckInterval);
}

function checkIfItHasPlayed(){
	var tillPlayed = getCookie('timePlayed');
	if(tillPlayed != 0 && tillPlayed){
		playMusic();
	}
}

checkIfItHasPlayed()
