import "./style.css"
import { header } from "/src/components/header.js"
import { sidebar } from "./components/sidebar"
import { home } from "/src/components/home.js"
import { about } from "/src/components/about.js"
import { projects } from "/src/components/projects.js"

// const app = document.getSelection("body")

document.body.innerHTML = /* html */ `
${header()}
${sidebar()}
<div id="app">
  ${home()}
  ${about()}
  ${projects()}
</div>
`













/* const headerSection = document.getElementById("header-section")
const homeSection = document.getElementById("home-section")


const changeSection = (section) => {
    // document.getElementById(`${currentSection}`).id += "-hidden"

    app.classList.add('exit-animation')
    /* headerSection.style.opacity = "0"
    currentSection.style.opacity = "0"
    app.style.transform = "scale(0.05)" // Shrink to 10% size

    setTimeout(scaleBack, 800)
    function scaleBack() {
        app.style.transform = "scale(1)"
        headerSection.style.opacity = "1"
        homeSection.style.opacity = "1"
    } 

}

document.getElementById("about-button").addEventListener("click", () => {
    changeSection("about")
}) */

