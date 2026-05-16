let activeTimer;

function startMeter() {
    clearInterval(activeTimer);
    
    // Reset vizuálů
    const display = document.getElementById('percentage');
    const fill = document.getElementById('fill');
    const windowBox = document.getElementById('main-window');
    const bikisser = document.getElementById('bikisser-small');
    
    windowBox.classList.remove('madness');
    display.classList.remove('big-text');
    bikisser.classList.add('hidden');
    display.style.color = "blue";
    
    let name = document.getElementById('username').value.trim();
    if (!name) return alert("Zadej jméno!");
    
    let lowName = name.toLowerCase();
    let current = 0;
    
    // Klasický hash pro náhodné (ale stejné) procento
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
    let target = (hash % 100) + 1;

    // Podmínky pro speciální jména
    if (lowName === "the_tora" || lowName === "con hổ tên là tora") target = 9;
    if (lowName === "magnetikk" || lowName === "kuhorcraft") target = 72;

    // Start stoupání
    activeTimer = setInterval(() => {
        if (current < target) {
            current++;
            display.innerText = current + "%";
            fill.style.width = current + "%";
        } else {
            clearInterval(activeTimer);
            
            // CO SE STANE POTOM:
            
            // rapha
            if (lowName === "the_tora" || lowName === "con hổ tên là tora") {
                setTimeout(() => {
                    windowBox.classList.add('madness');
                    display.classList.add('big-text');
                    activeTimer = setInterval(() => {
                        current += Math.floor(Math.random() * 200);
                        display.innerText = current + "%";
                        // Posuvník se rozletí přes celou obrazovku
                        fill.style.width = (100 + (current / 5)) + "%";
                    }, 40);
                }, 500);
            }
            
            // já
            if (lowName === "magnetikk" || lowName === "kuhorcraft") {
                setTimeout(() => {
                    let dropTimer = setInterval(() => {
                        if (current > 55) {
                            current--;
                            display.innerText = current + "%";
                            fill.style.width = current + "%";
                        } else {
                            clearInterval(dropTimer);
                            // Zobrazit malý obrázek dole
                            bikisser.classList.remove('hidden');
                        }
                    }, 40);
                }, 500);
            }
        }
    }, 40);
}
