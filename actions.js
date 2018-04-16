function enlarge(picture, des1, des2) {
	var clickedImg = document.getElementById(picture); //gets object by id bpic1
	//console.log(clickedImg);
	//console.log(picture); //stores id=bpic1
	//clickedImg.style.display = "none";
	document.getElementById('cpic1').src=picture;
	document.getElementById('big-box-description').textContent=des1;
	document.getElementById('big-box-description2').textContent=des2;

	
}

