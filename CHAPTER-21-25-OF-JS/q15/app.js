var password=prompt("Make a new password: ");
if (
    password.length < 6 ||                              
    !/[a-zA-Z]/.test(password) ||                       
    !/\d/.test(password) ||                              
    /^\d/.test(password)                                
  ) {
    alert("Password must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long. Please enter a valid password.");
   
  } else {
    alert("Password is valid!");
  }
