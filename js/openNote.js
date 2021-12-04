async function noteOpen(){
	var noteContainer = document.getElementsByClassName("note-container")[0];
	var note = document.getElementsByClassName("note")[0];
	var noteGuides = document.getElementsByClassName("note-guide-container")[0];
	var noteBotPaper = document.getElementsByClassName("note-bot-paper")[0];
	var noteTopPaper = document.getElementsByClassName("note-top-paper")[0];

	noteGuides.style.opacity = "0"
	noteContainer.style.height = "300%"
	noteBotPaper.style.height = "0%"
	await sleep(200)
	noteGuides.style.display = "none"
	noteTopPaper.style = ""
	await sleep(500)
	note.style.minHeight = "390px"
	noteBotPaper.remove();
	noteGuides.remove();
	note.style.clipPath = "polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)"
	giveGuide();
}

async function giveGuide() {
	await sleep(10000)
	var flipGuide = document.getElementById("flip-guide")
	flipGuide.style.opacity = 1;
	await sleep(2000)
	flipGuide.style.opacity = 0;
}
