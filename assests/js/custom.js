// document.addEventListener('DOMContentLoaded', function () {
//   let toggle = document.getElementsByClassName("icon-toggle");


//   function toggleIcon() {
//     if (document.getAttribute("data-click") == "search") {
      
//       alert("search");
//     }

//     else {
//       alert("Search Clicked")
     
//     }
//   }
//   // toggleIcon();
  
//   toggle[0].addEventListener("click", function() {
//     let at = toggle[0].getAttribute("data-click");
//     alert(at);
//   });

//   function searchImage() {

//     let imgContainer = document.getElementById("imageContainer");
//     imgContainer.style.display = "none";

//     let crossIc = document.getElementById("crossIcon");
//     crossIc.style.display = "inline-block";

//     let searchIc = document.getElementById("searchIcon");
//     searchIc.style.display = "none";

//     let inputId = document.getElementById("searchInput").value;
//     let inputSubString = inputId.slice(0,3);

//     let allImg = document.getElementsByTagName("img");
//     let lenImg = allImg.length;

    
    
//     for (let i=0; i<lenImg; i++) {
//       let imgAtt = allImg[i].getAttribute("data-image");
//       // console.log(imgAtt);
//       if (imgAtt.includes(inputSubString)) {
//         let image = document.createElement("img");
//         image.src = allImg[i].src;
//         document.getElementById("searchResult").appendChild(image);
//       }
//     }

//   }

//   document.getElementById("searchIcon").addEventListener("click" ,searchImage);
//   document.getElementById("searchIcon").addEventListener("keyup" , function(event) {
//     if (event.keyCode == 13) {
//       console.log("Enter key pressed");
//       this.searchImage
//     }
//   });

// }());

