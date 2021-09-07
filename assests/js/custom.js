document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("crossIcon").addEventListener("click", function() {
    location.reload(); 
    document.getElementById("searchInput").value = "";
    let searchIc = document.getElementById("searchIcon");
    searchIc.style.display = "inline-block";
    let crossIc = document.getElementById("crossIcon");
    crossIc.style.display = "none";

    // let getId = document.getElementById("birdFirst");
    // let dataId = getId.getAttribute('data-image');
  }); 
  document.getElementById("searchIcon").addEventListener("click" , function() {

    let imgContainer = document.getElementById("imageContainer");
    imgContainer.style.display = "none";

    let crossIc = document.getElementById("crossIcon");
    crossIc.style.display = "inline-block";

    let searchIc = document.getElementById("searchIcon");
    searchIc.style.display = "none";

    let inputId = document.getElementById("searchInput").value;
    let inputSubString = inputId.slice(0,3);

    let allImg = document.getElementsByTagName("img");
    let lenImg = allImg.length;

    
    // console.log(lenImg);
    // for (let i = 0; i < lenImg; i++) {
    //   let imgAtt = allImg[i].getAttribute("data-image");
    //   console.log(imgAtt);
    //   console.log(inputId);
    //   if (imgAtt == inputId) {
    //     allImg[i].style.display = "";
    //   }
    //   else {
    //     allImg[i].style.display = "none";
    //   }
    // }
    // alert(lenimg);

    // for (let i=0; i< lenImg; i++) {
    //   let imgAtt = allImg[i].getAttribute("data-image");
    //   if (inputId == imgAtt){
        
    //     // let srcImg = allImg[i].src;
    //     // console.log(srcImg);
    //     document.getElementById("searchResult").appendChild(allImg[i]);
    //     console.log(allImg[i]);
    //   }
    // }

    for (let i=0; i<lenImg; i++) {
      let imgAtt = allImg[i].getAttribute("data-image");
      // console.log(imgAtt);
      if (imgAtt.includes(inputSubString)) {
        let image = document.createElement("img");
        image.src = allImg[i].src;
        document.getElementById("searchResult").appendChild(image);
      }
    }

  });
}());