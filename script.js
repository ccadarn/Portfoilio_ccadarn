const nightMode = document.getElementById("body");
const nightModeAnchor = document.getElementsByTagName("a"); // anchor
const nightModeNightImg = document.getElementById("nightimg"); // day/night button
const nightModeImg1 = document.getElementById("img1"); // About Image
const nightModeImg2 = document.getElementById("img2"); // Projects Image
const nightModeImg3 = document.getElementById("img3"); // Skills Image
const nightModeImg31 = document.getElementById("img31"); // HTML Icon
const nightModeImg32 = document.getElementById("img32"); // CSS Icon
const nightModeImg33 = document.getElementById("img33"); // JS Icon
const nightModeImg4 = document.getElementById("img4"); // Contacts Image
const nightModeImg5 = document.getElementById("img5"); // GitHub Image
const nightModeImg6 = document.getElementById("img6"); // LinkedIn Image
const nightModeUpButton = document.getElementById("upButton"); // Up Scroll Button


let isWhite = true; // Initial state

function toggleBackgroundColor() {
  // Background color
  if (isWhite) {
    nightMode.style.backgroundColor = "white";
  } else {
    nightMode.style.backgroundColor = "black";
  }

  // Text color
  if (isWhite) {
    nightMode.style.color = "black";
  } else {
    nightMode.style.color = "white";
  }

  // Anchor text color - Loop through anchor elements
  for (const anchor of nightModeAnchor) {
    if (isWhite) {
      anchor.style.color = "purple";
    } else {
      anchor.style.color = "darkGreen";
    }
  }

  //day/night image change
  if (isWhite) {
    nightModeNightImg.src = "Images/night.png";
  } else {
    nightModeNightImg.src = "Images/nightN.png";
  }

  //About image change
  if (isWhite) {
    nightModeImg1.src = "Images/swordsman.png";
  } else {
    nightModeImg1.src = "Images/swordsmanN.png";
  }

  //Projects image change
  if (isWhite) {
    nightModeImg2.src = "Images/project.png";
  } else {
    nightModeImg2.src = "Images/projectN.png";
  }

  //Skills image change
  if (isWhite) {
    nightModeImg3.src = "Images/skill.png";
  } else {
    nightModeImg3.src = "Images/skillN.png";
  }

  //HTML icon change
  if (isWhite) {
    nightModeImg31.src = "Images/html.png";
  } else {
    nightModeImg31.src = "Images/htmlN.png";
  }

  //CSS icon change
  if (isWhite) {
    nightModeImg32.src = "Images/css.png";
  } else {
    nightModeImg32.src = "Images/cssN.png";
  }

  //JS icon change
  if (isWhite) {
    nightModeImg33.src = "Images/js.png";
  } else {
    nightModeImg33.src = "Images/jsN.png";
  }

  //Contacts image change
  if (isWhite) {
    nightModeImg4.src = "Images/contact.png";
  } else {
    nightModeImg4.src = "Images/contactN.png";
  }

  //GtHub image change
  if (isWhite) {
    nightModeImg5.src = "Images/github.png";
  } else {
    nightModeImg5.src = "Images/githubN.png";
  }

  //Linked In image change
  if (isWhite) {
    nightModeImg6.src = "Images/linkedin.png";
  } else {
    nightModeImg6.src = "Images/linkedinN.png";
  }

//Up Scroll Button image change
if (isWhite) {
  nightModeUpButton.src = "Images/up.png";
} else {
  nightModeUpButton.src = "Images/upN.png";
}

  isWhite = !isWhite; // Toggle the state
}


// Function to check scroll position and show/hide the scroll-to-top button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Display the button when scrolling down 50 pixels from the top
  if (document.documentElement.scrollTop > 50) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
}

// Function to scroll to the top when the button is clicked
document.getElementById("upButton").addEventListener("click", function() {
  document.documentElement.scrollTop = 0; 
});
