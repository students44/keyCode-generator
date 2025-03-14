let container = document.getElementById('key-container');
let mainContainer = document.getElementById('main-container');

container.innerHTML = generateHTML("-", "-", "-")

container.addEventListener('click', () => {
  console.log("Clicked!");
  mainContainer.classList.toggle("magenta-bg")
});

window.addEventListener('keydown', (e) => {
  container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
})

function generateHTML(key, code, keycode) {
  return `
  
  <div class="key-container">
        <h4>Key</h4>
        <div class="key-content"> ${key === "" ? "space" : key}
        </div>
        </div>

         <div class="key-container">
        <h4>code</h4>
        <div class="key-content"> ${code}
        </div>
        </div>

            <div class="key-container">
        <h4>Key code</h4>
        <div class="key-content"> ${keycode}
        </div>
        </div>
  
  `
}
