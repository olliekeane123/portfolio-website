export function sidebar() {
    return /* html */ `
    <aside>
        <div id="dark-mode-container">
        </div>
        <div id="scroll-tracker-container">
            <div id="scroll-tracker">
                <div class="scroll-dot" data-section="1"></div>
                <div class="scroll-dot" data-section="2"></div>
                <div class="scroll-dot" data-section="3"></div>
                <div class="scroll-dot" data-section="4"></div>
            </div>
        </div>
        <div id="socials-section">
            <div id="socials-container">
                <div class="socials-logo-container"> <img src="src/assets/github-logo.svg"></div>
                <div class="socials-logo-container"> <img src="src/assets/linkedin-logo.svg"></div>
                <div> <p>CV</p></div>
            </div>
        </div>
    </aside>
    `
}
