function displayFormData(event) {
    event.preventDefault(); 

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const formDataDiv = document.getElementById("formData");
    formDataDiv.innerHTML = `
        <h2>Submitted Form Data</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
    
    document.getElementById("signupForm").reset();
}

