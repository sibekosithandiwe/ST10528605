// Welcome Button

function learnMore() {
    alert("Thank you for your interest in Blue Bees Recovery! Explore our website to learn more about our programmes and services.");
}


// CONTACT FORM VALIDATION

function validateContactForm() {

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if(name === "" || email === "" || message === "") {

        alert("Please complete all fields.");
        return false;
    }

    alert("Thank you! Your message has been sent successfully.");
    return false; // prevents page refresh
}


// VOLUNTEER FORM VALIDATION

function validateVolunteerForm() {

    let name = document.getElementById("volunteerName").value;
    let email = document.getElementById("volunteerEmail").value;

    if(name === "" || email === "") {

        alert("Please complete all required fields.");
        return false;
    }

    alert("Thank you for volunteering with Blue Bees Recovery!");
    return false;
}


// SEARCH FEATURE

function searchContent() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input.includes("beekeeping")) {

        alert("Beekeeping programmes can be found on the Programs & Services page.");
    }

    else if(input.includes("volunteer")) {

        alert("Volunteer opportunities can be found on the Get Involved page.");
    }

    else if(input.includes("contact")) {

        alert("Contact information is available on the Contact page.");
    }

    else {

        alert("No matching content found.");
    }
}


// DYNAMIC COPYRIGHT YEAR

window.onload = function() {

    let year = document.getElementById("year");

    if(year){
        year.innerHTML = new Date().getFullYear();
    }

}