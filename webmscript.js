//Posts with WEBM sources and create a automatic playlist.
//Great for music WEBM threads

aArray = document.getElementsByClassName("fileThumb");	//Gets all a tags with fileThumb as the class name

vidArray = [];
parentEle = document.getElementsByClassName("navLinks desktop")[0]; //Parent element to hold the playlist
container = document.createElement("div");

//Creating buttons
var buttons = document.createElement("div");

var btnPrev = document.createElement("BUTTON");
btnPrev.innerHTML = "<"
btnPrev.addEventListener("click", playPrev);

var btnNext = document.createElement("BUTTON");
btnNext.innerHTML = ">"
btnNext.addEventListener("click", playNext);

var btnPlay = document.createElement("BUTTON");
btnPlay.innerHTML = "Play"
btnPlay.addEventListener("click", Play);

var btnPause = document.createElement("BUTTON");
btnPause.innerHTML = "Pause"
btnPause.addEventListener("click", Pause);

parentEle.append(container);


buttons.append(btnPrev);
buttons.append(btnPlay);
buttons.append(btnPause);
buttons.append(btnNext);

container.append(buttons)

//Area to display where in the song que you are
var displayArea = document.createElement("div");

container.append(displayArea)



playCounter = 0;


//Creates a new video tag for each WEBM and adds it to the vid array
for(var a in aArray){
	vid = document.createElement("video");
	source = document.createElement("source");
	
	if(aArray[a].href != undefined)
	{
		href = aArray[a].href;
		
		//Only webms
		console.log(href);
		//console.log(href.substring(href.length-4, href.length));
		if(href.substring(href.length-4, href.length) == "webm")
		{
			source.setAttribute("type", "video/webm");
			source.setAttribute("src", href);
			
			vid.setAttribute("controls", "");
			
			vid.append(source);
			vid.addEventListener("ended", playNext);
			vidArray.push(vid);	
		}
	}
}

//Play the first video	
vidArray[playCounter].play();

displayArea.innerText = "Currently playing " + (playCounter + 1) + " of " + vidArray.length;


//A function that plays the next video as long as there is another video to be played
function playNext(){
	vidArray[playCounter].pause(); //Pause Current
	
	if(playCounter >= vidArray.length-1){
		playCounter = 0;
	}	
	else{
		playCounter++
	}		

	vidArray[playCounter].play();
	displayArea.innerText = "Currently playing " + (playCounter + 1) + " of " + vidArray.length;
}

function playPrev(){
	vidArray[playCounter].pause(); //Pause Current
	
	if(playCounter == 0){
		playCounter = vidArray.length-1;
	}
	else{
		playCounter--;
	}
	
	vidArray[playCounter].play();
	displayArea.innerText = "Currently playing " + (playCounter + 1) + " of " + vidArray.length;
}

function Play(){
	if(vidArray[playCounter].paused == true)
	{
		vidArray[playCounter].play();
	}
}

function Pause(){
	if(vidArray[playCounter].paused == false)
	{
		vidArray[playCounter].pause();
	}
}



/// TODO
// FIND OUT HOW TO CONTROL VIDEO TIME.
// INTEGRATE Gracenote's Music recognition
// Rip audio and save to pc