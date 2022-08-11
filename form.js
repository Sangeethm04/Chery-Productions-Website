var firebaseConfig = {
    apiKey: "AIzaSyCXzICID63CX5N6zhRAtEVxJj77HIDw-Cs",
    authDomain: "chery-productions.firebaseapp.com",
    projectId: "chery-productions",
    storageBucket: "chery-productions.appspot.com",
    messagingSenderId: "855970789887",
    appId: "1:855970789887:web:5c59a6cc727eef7ea74fca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Testimonies');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var location = getInputVal('location');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, location, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 15000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, location, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        location: location,
        email: email,
        phone: phone,
        message: message,
    })
}