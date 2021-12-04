function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function HintText1(hidden){
	var clickMeText = document.getElementsByClassName("clickMe");
	if(hidden){
		// clickMeText[0].style.color = "transparent"
		clickMeText[1].style.color = "transparent"
	}else{
		// clickMeText[0].style.color = ""
		clickMeText[1].style.color = ""
	}
}

function envelopeGoDownAnim(){
	var mail = document.getElementsByClassName("mailRatioHack");
	var screenHeight = screen.height * 4;
	mail[0].style.marginTop = screenHeight.toString()+"px";
}


async function paperGoUp(hidden){

	var noteContainer = document.getElementsByClassName("note-container");
	var note = document.getElementsByClassName("note");

	if(hidden){
		noteContainer[0].style.clipPath = "polygon(0 200%, 0 0, 200% 0, 200% 200%, 50% 270%)";
		note[0].style.transform = "scale("
	}
	else{
		noteContainer[0].style.clipPath = "polygon(0 1px, 0 0, 100% 0, 100% 1px, 50% 70%)";
	}
}


async function firstAnim(){
	var lid = document.getElementById("mailLid");
	var note = document.getElementsByClassName("note")[0];
	var fakeLid = document.getElementById("mailLidFake");
	var button = document.getElementsByClassName("textConfinement");
	var mailSkin = document.getElementsByClassName("mailRatioHack");
	var noteGuides = document.getElementsByClassName("note-guide-container")[0];
	var noteBotPaper = document.getElementsByClassName("note-bot-paper")[0];
	var noteTopPaper = document.getElementsByClassName("note-top-paper")[0];
	var noteContainer = document.getElementsByClassName("note-container")[0];

	playMusic()

	if(lid.className == "triangle triangle-lid-real"){
		lid.className = "triangle triangle-lid-real triangle-lid-open"
		fakeLid.className = "triangle triangle-lid  triangle-lid-open"
		HintText1(1);
		paperGoUp(1);
	}else{
		lid.className = "triangle triangle-lid-real"
		fakeLid.className = "triangle triangle-lid"
		HintText1(0);
		paperGoUp(0);
	}

	if(note.offsetHeight > 255 && note.offsetWidth > 450){
		noteGuides.remove();
		noteBotPaper.remove();
		note.style.clipPath = "polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)"
		note.style.minHeight = "370px"
		noteTopPaper.style = ""
		noteContainer.style.height = "300%"
		giveGuide();
	}

	await sleep(400);
	fakeLid.hidden = 1;
	button[0].className += " just-hide-it";
	await sleep(400);

	envelopeGoDownAnim();

	await sleep(200);
	mailSkin[0].remove();
}

