// Ex 1: Display selected image

document.addEventListener("load", function() {

    console.log("a");

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    imgs[0].onclick = function(e) {
        
        console.log(e.target.nodeName);

    };

});