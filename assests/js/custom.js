document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("crossIcon").addEventListener("click", function() {
    document.getElementById("searchInput").value = "";
    let searchIc = document.getElementById("searchIcon");
    searchIc.style.display = "inline-block";
    let crossIc = document.getElementById("crossIcon");
    crossIc.style.display = "none";

    // let getId = document.getElementById("birdFirst");
    // let dataId = getId.getAttribute('data-image');
  }); 
  document.getElementById("searchIcon").addEventListener("click" , function() {
    let crossIc = document.getElementById("crossIcon");
    crossIc.style.display = "inline-block";
    let searchIc = document.getElementById("searchIcon");
    searchIc.style.display = "none";
    let inputId = document.getElementById("searchInput").value;
    let allImg = document.getElementsByTagName("img");
    let lenImg = allImg.length;
    // let imgContainer = document.getElementById("imageContainer");
    // imgContainer.style.visibility = "hidden";
    console.log(lenImg);
    for (let i = 0; i < lenImg; i++) {
      let imgAtt = allImg[i].getAttribute("data-image");
      console.log(imgAtt);
      console.log(inputId);
      if (imgAtt == inputId) {
        allImg[i].style.display = "";
      }
      else {
        allImg[i].style.display = "none";
      }
    }
    // alert(lenimg);
  });
}());