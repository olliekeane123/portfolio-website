export function header() {
    const date = new Date()
    let time = date.toLocaleTimeString().split(/^(\d+:\d+)/)[1]
    if(time.length === 4){
        time = '0' + time 
    }
    return /* html */ `
    <header>
        
        <p id="logo">OK</p>
        <p id="time">${time}</p>
        <nav id="nav-bar">
            <li id="about-button">about</li>
            <li>projects</li>
            <li>contact</li>
        </nav>
    </header>
    `
}

function getTime() {
    return
}

function updateTime() {
    const date = new Date()
    let time = date.toLocaleTimeString().split(/^(\d+:\d+)/)[1]
    if(time.length === 4){
        time = '0' + time 
    }
    const timeElement = document.getElementById("time")
    if (timeElement) {
        timeElement.textContent = time
    }
}

setInterval(updateTime, 1000)
