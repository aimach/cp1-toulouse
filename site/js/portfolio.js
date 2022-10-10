//CHANGEMENT DE L'AVATAR
const avatar = document.querySelector('#avatar');
avatar.addEventListener('click', () => {
    avatar.src = "image/avatar-bis.png";
});

//MODIFICATION DU NOM ET COULEUR
const button = document.querySelector("button");
const span = document.querySelector("#name");
const backgroundPink = document.querySelectorAll(".pink-bg");
const titlePink = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll("a");
console.log(links)

button.addEventListener('click', () => {
    let colorUser = prompt('Enter a color')
    let nameUser = prompt('Enter your name');
    span.innerHTML = nameUser;
    span.style.color = "white";
    titlePink.forEach(element => element.style.color = colorUser)
    backgroundPink.forEach(element => element.style.backgroundColor = colorUser)
    links.forEach(element => element.style.textDecoration = none)
    links.forEach(element => element.style.color = colorUser)

})