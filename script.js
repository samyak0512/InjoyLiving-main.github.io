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
