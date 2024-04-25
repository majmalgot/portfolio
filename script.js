// Scroll to top button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  project descriptions
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('show-description');
    });
});

// Light/dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Update contact information dynamically
document.addEventListener("DOMContentLoaded", function() {
    var contactInfoList = document.getElementById("contactInfoList");
    var newContactInfo = '<li><strong>Email:</strong> new@example.com</li>' +
                         '<li><strong>Phone:</strong> +9876543210</li>' +
                         '<li><strong>Address:</strong> 456 Oak Street, City, Country</li>';
    contactInfoList.innerHTML = newContactInfo;
});

// Open social media links in new tabs
document.getElementById("facebook").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.facebook.com", "_blank");
});

document.getElementById("twitter").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.twitter.com", "_blank");
});

document.getElementById("instagram").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.instagram.com", "_blank");
});

document.getElementById("linkedin").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.linkedin.com", "_blank");
});

