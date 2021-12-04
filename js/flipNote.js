
async function flipNote(){
	note = document.getElementsByClassName("note-top-paper")[0];
	textTop = document.getElementsByClassName("front-of-note")[0];
	textBot = document.getElementsByClassName("back-of-note")[0];

	note.style = "";

	await sleep(100);
	note.classList.add("flipping");
	
	await sleep(250);

	if(textBot.classList.contains("backside")){
		textBot.classList.remove("backside");
		textTop.classList.add("backside");
	}
	else{
		textTop.classList.remove("backside");
		textBot.classList.add("backside");
	}

	await sleep(250);
	note.classList.remove("flipping")

}