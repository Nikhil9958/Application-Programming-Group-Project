// GROUP MEMBERS of this project(CHAPTER 6 PROJECT 3) are 
//   
// NIKHIL KUMAR ARORA (11912063) (IT BRANCH)
// VAIBHAV BHASKAR    (11912060) (IT BRANCH)
// SIDDHANT TIWARI    (11912070) (IT BRANCH)
// PULKIT GOYAL       (11912066) (IT BRANCH)
   
// IIIT SONEPAT
window.onload = function () {
    
    var images = document.querySelectorAll(".PIC");
    for (var i = 0; i < images.length; i++) {
	images[i].onmouseover = function() {
	    var newNode = document.createElement("img");
	    var oldsrc=this.src;
	    var parts=oldsrc.split("/");
	    newNode.src="images" + parts[parts.length-1];
	    newNode.style="border:solid 2px black;";
	    newNode.className='bigImg';
	    this.parentNode.appendChild(newNode);
		console.log(this.src);
		transform: scale(1.5);
	}
	images[i].onmouseout = function(){
	    var images = document.querySelectorAll(".bigImg");
	    for (var i=0; i < images.length; i++){
		images[i].parentNode.removeChild(images[i]);
	    }
	}
    }
}