
const menu = document.querySelector(".menu-links");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger_container= document.querySelector(".toggle-btn");
const closeIcon= document.querySelector(".close");
const hamburgerIcon = document.querySelector(".hamburger");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

hamburger_container.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  );


  // FORM VALIDATION

  const form = document.getElementById('myForm');
const btn = document.getElementById('submit-btn');
const username = document.getElementById('sender');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const NameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phone.value.trim();
    const messageValue = message.value.trim();

    if(NameValue === ''){
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }


    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email');
    } else {
        setSuccess(email);
    }

    if(phoneNumberValue === ''){
        setError(phone, 'Phone number is required');
    } else if(!isValidPhone(phoneNumberValue)){
        setError(phone, 'Provide a valid phone number');
    } else {
        setSuccess(phone);
    }

    if(messageValue === ''){
        setTextAreaError(message, 'Message is required');
    } else {
        setTextAreaSuccess(message);
    }

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorStyle = inputControl.querySelector('input');

    errorStyle.classList.add('err');

    errorDisplay.innerText = message;
};

const setTextAreaError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorStyle = inputControl.querySelector('textarea');

    errorStyle.classList.add('err');

    errorDisplay.innerText = message;
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorStyle = inputControl.querySelector('input');

    errorStyle.classList.remove('err');
    errorStyle.classList.add('suc');

    errorDisplay.innerText = '';
    // inputControl.classList.add('success');
    // inputControl.classList.remove('error');
};

const setTextAreaSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorStyle = inputControl.querySelector('textarea');

    errorStyle.classList.remove('err');
    errorStyle.classList.add('suc');

    errorDisplay.innerText = '';
    // inputControl.classList.add('success');
    // inputControl.classList.remove('error');
};

const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = phone_number =>{
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(phone_number);
};


// SCROLL UP

function totop(){

    window.scroll({
        top: 0, left: 0, behavior: 'smooth'
    });
}

function togtop(){

    if (window.scrollY >= 300){
        document.getElementById("scroll-up").classList.add("showScroll");
    } else {
        document.getElementById("scroll-up").classList.remove("showScroll");
    }

}
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);
