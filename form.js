function validateForm() {
  const form = document.getElementById('registrationForm');
  const phone = form.phone.value.trim();
  

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
