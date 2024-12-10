// JavaScript for Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const age = document.getElementById("age").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const subject = document.getElementById("subject").value;

    // Validate fields
    if (!firstName) return alert("First Name is required.");
    if (!lastName) return alert("Last Name is required.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) return alert("Invalid Email.");
    if (!contactNumber || contactNumber.length < 10) return alert("Invalid Contact Number.");
    if (!age || age < 10 || age > 100) return alert("Invalid Age.");
    if (!birthdate) return alert("Birthdate is required.");
    if (!gender) return alert("Please select a gender.");
    if (!subject) return alert("Please select a subject.");

    // Success message
    alert("Registration successful!");
});