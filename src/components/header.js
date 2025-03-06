export function header() {
    const date = new Date()
    let time = date.toLocaleTimeString().split(/^(\d+:\d+)/)[1]
    return /* html */ `
    <section id="header-section">
        <p>OK</p>
        <p id="time">${time}</p>
        <ul id="nav-bar">
            <li id="about-button">about</li>
            <li>projects</li>
            <li>contact</li>
        </ul>
    </section>
    `
}

function updateTime() {
    const date = new Date()
    let time = date.toLocaleTimeString().split(/^(\d+:\d+)/)[1]
    const timeElement = document.getElementById("time")
    if (timeElement) {
        timeElement.textContent = time
    }
}

setInterval(updateTime, 1000)
