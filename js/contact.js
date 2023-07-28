document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle it manually

    // Get form input values
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the form (you can add more complex validation logic if needed)
    if (name.trim() === '' || phoneNumber.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

        // Validate email address
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
          }


    // Send the message to Gmail (You need a backend to handle sending emails)
    // Here, we are just showing an alert that the message has been sent.
    console.log('Message sent to Gmail!', name , phoneNumber , email , message);

    // Optionally, you can clear the form after submission
    document.getElementById('contactForm').reset();
  });

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }