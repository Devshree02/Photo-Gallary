document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("crossIcon").addEventListener("click", function() {
    location.reload(); 
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

    
    
    for (let i=0; i<lenImg; i++) {
      let imgAtt = allImg[i].getAttribute("data-image");
      console.log(imgAtt);
      if (imgAtt.includes(inputSubString)) {
        let image = document.createElement("img");
        image.src = allImg[i].src;
        document.getElementById("searchResult").appendChild(image);
      }
    }

  });
}());