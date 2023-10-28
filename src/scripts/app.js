document.querySelector('.homeNavIcon').addEventListener('click',test)

function test() {
    window.location.href = '/'
}

let themesShown = false

document.querySelector(".themes button").addEventListener('click', onclickShowThemes);

function onclickShowThemes(e) {
    if(!themesShown) {
        e.target.parentElement.children[1].style.display = "flex";
        themesShown=true
    } else {
        e.target.parentElement.children[1].style.display = "none";
        themesShown=false
    }
}

let defaultTheme = "#1e9bff";


const themeColors = {
  red: "red",
  green: "green",
  blue: "#1e9bff",
  yellow: "yellow",
};

// const body = document.querySelector('body')
// body.style.setProperty('--theme-color', defaultTheme)

let themeContainer = document.querySelector(".colorsContainer");
themeContainer.style.setProperty("--theme-color", defaultTheme);

let themes = document.querySelectorAll('.colorsContainer li img')

for (let el of themes) {
    el.addEventListener('mouseenter', hoverOnTheme)
    el.addEventListener('mouseleave', unHoverTheme )
    el.addEventListener('click', onclickChangeTheme)
}

function hoverOnTheme(e) {
    let changedShadow = document.querySelector('.colorsContainer')
    changedShadow.style.setProperty('--theme-color', themeColors[e.target.id])
}

function unHoverTheme(e) {
    let changedShadow = document.querySelector(".colorsContainer");
    changedShadow.style.setProperty("--theme-color", defaultTheme);
}

function onclickChangeTheme(e) {
    let id = e.target.id
    let theme = themeColors[id]
    defaultTheme = theme
    body.style.setProperty("--theme-color", defaultTheme)
}