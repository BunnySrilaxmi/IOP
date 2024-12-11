document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Fetch input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // You can perform validation here before sending the data to the server
    // For example, check if the email is valid, or if the password meets certain criteria
  
    // Here, you would typically send this data to a server for account creation
    // For this example, let's just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Optionally, you can clear the form fields after submission
    document.getElementById('accountForm').reset();
  });
  