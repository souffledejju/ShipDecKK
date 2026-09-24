var navigasi = document.getElementById("navigasi");
   
function showMenu(){
    navigasi.style.right = "0";
}
    
function hideMenu(){
    navigasi.style.right = "-200px";
}


const rf = document.getElementById('register-form');

rf.onsubmit = function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const dob = document.getElementById('dob');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorPassword = document.getElementById('error-password');
    const errorDob = document.getElementById('error-dob');
    const errorGender = document.getElementById('error-gender'); // this was missing in your latest code

    let valid = true;

    // Clear errors first
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorDob.textContent = "";
    errorGender.textContent = "";

    // Name validation
    if (name.value.length < 2) {
        errorName.textContent = "Name must be at least 2 characters!";
        valid = false;
    }

    // Email validation
    if (!email.value.endsWith("@gmail.com")) {
        errorEmail.textContent = "Email must end with @gmail.com !";
        valid = false;
    }

    // Password validation
    if (password.value.length < 8) {
        errorPassword.textContent = "Password must be at least 8 characters!";
        valid = false;
    }

    // Date of Birth validation
    if (dob.value === "") {
        errorDob.textContent = "Date of Birth must be filled in!";
        valid = false;
    }

    // Gender validation
    const gender = document.getElementsByName("gender");
    let selected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        errorGender.textContent = "Please select your gender!";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }
};
