function validation() {
  let form = document.getElementById('form')
  let email = document.getElementById('email').value
  let text = document.getElementById('text')
  let pattern = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/

  if (email.match(pattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid')
    text.innerHTML = "Your Email Address is valid"
    text.style.color = '#2ca324'
    return true; // Return true if email is valid
  } else {
    form.classList.remove('valid')
    form.classList.add('invalid')
    text.innerHTML = "Please Enter Valid Email Address"
    text.style.color = '#aa3025'
    return false; // Return false if email is invalid
  }

  if (email == '') {
    form.classList.remove('valid')
    form.classList.remove('invalid')
    text.innerHTML = ""
    text.style.color = '#00ff00'
    return false; // Return false if email is empty
  }
}

const submitButton = document.getElementById('submitButton');
const popupCard = document.getElementById('popupCard');

// Add click event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  if (validation()) { // Check if email is valid before showing the popup
      showPopup();
  }
});

// Function to show the popup
function showPopup() {
  popupCard.style.display = 'block';
  setTimeout(() => {
      popupCard.style.display = 'none';
  }, 3000); // Hide the popup after 3 seconds (adjust as needed)
}







document.getElementById('readMoreBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
  var blurElements = document.getElementsByClassName('blurr');
  for (var i = 0; i < blurElements.length; i++) {
    blurElements[i].classList.add('blur');
  }
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  var blurElements = document.getElementsByClassName('blurr');
  for (var i = 0; i < blurElements.length; i++) {
    blurElements[i].classList.remove('blur');
  }
}

function togglecollapse2() {
  var collapse2 = document.getElementById('collapse2');
  collapse2.classList.toggle('active');
}
function validateEmail() {
  var email = document.getElementById('email');
  var submitButton = document.getElementById('submitButton');
  var submitBtn = document.getElementById('submitBtn');
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  submitBtn.disabled = !emailRegex.test(email.value);
}


function sendMail() {
  var params = {
    email : document.getElementById("email").value,
  }
  emailjs.send("service_r92zzmc","template_hkff0ey", params).then(
  function(){
  var float = document.getElementByClassName("float")[0];
  float.style.visibility = 'visible';
  setTimeout(function() {
    float.style.visibility = 'hidden';
    }, 3000);
  })
}

