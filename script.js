
var slider_img = document.querySelector('.slider-img');
var images = ["1.jpg", "2.jpg", "3.jpg"];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}




let a = 10;
let x = 15;
document.getElementById('myButton').onclick = function () {
	var userRes = document.getElementById('loginn').value;
	var userPass = document.getElementById('passwordd').value;
	if (userRes.length > a && userPass.length < x) {
		alert('Բարի գալուստ Պատանի Հանդիսատեսի Թատրոն')
	}else {
		alert('Դուք մուտքագրել եք սխալ գաղտնաբառ')
	}
	
	}
