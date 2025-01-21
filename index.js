// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
  
    
    let leftNumbers = dodger.style.left.replace("px", ""); 
    let left = parseInt(leftNumbers, 10);
  
    
    if (left < 360) { 
      dodger.style.left = `${left + 7}px`;
    }
  }
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  