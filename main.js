// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// create event listener on click on heart

const hearts = document.getElementsByClassName("like-glyph");
for (i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', handleHeart);
}

function handleHeart(e) {
  // debugger;
  let heart = e.target;

  mimicServerCall()
    .then(function(){
      if (heart.innerText === EMPTY_HEART) {
        // change heart to full when clicked
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart")
      } else {
        // changing heart back to empty - change class name to empty string
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch(() => {
      const error = document.getElementById('modal');
      // console.log(error.childNodes);
      error.classList.remove('hidden');
      error.childNodes[3].innerText = "Random server error. Try again."
      setTimeout(function(){
        error.classList.add('hidden');
       }, 3000);
    })
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
