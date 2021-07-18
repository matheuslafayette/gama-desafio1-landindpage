var menuButton = document.getElementById("menuButton")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px"

menuButton.onclick = function () {

    if (sideNav.style.right == "-250px") {

        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }

    else {

        sideNav.style.right = "-250px"
        menu.src = "images/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});



const form = document.getElementById('register-form');

form.addEventListener( 'submit', (e) => {

    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {

        name,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('register-button'); 

    let loading = `<p>loading...</p>`

    let finished = `<p>registration completed</p>`

    content.innerHTML = loading;

    setTimeout(() => {

        content.innerHTML = finished;
    }, 1000)

})