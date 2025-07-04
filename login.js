document.addEventListener('DOMContentLoaded', function() {
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Store user accounts (in a real app, this would be server-side)
const userAccounts = {};

// Toggle between login and signup forms
showSignup.addEventListener('click', function(e) {
    e.preventDefault();
    loginSection.classList.add('hidden');
    signupSection.classList.remove('hidden');
});

showLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (userAccounts[username] && userAccounts[username] === password) {
        alert('Login successful! Redirecting...');
        // Redirect to main page
        window.location.href="main.html"

    } else {
        alert('Invalid username or password');
    }
});
    

// Handle signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('new-username').value.trim();
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password should be at least 6 characters');
        return;
    }
    
    if (userAccounts[username]) {
        alert('Username already exists');
        return;
    }
    
    // Store the new account
    userAccounts[username] = password;
    alert('Account created successfully! Please log in.');
    
    // Switch to login form
    signupSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    
    // Clear the signup form
    signupForm.reset();
});
});