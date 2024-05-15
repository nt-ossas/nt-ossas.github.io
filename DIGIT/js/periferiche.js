// Funzione per selezionare la periferica
function cambia(n) {
    const monitor = document.getElementById("monitor");
    const keyboard = document.getElementById("keyboard");
    const mouse = document.getElementById("mouse");
    const monitor_logo = document.getElementById("monitor_logo");
    const keyboard_logo = document.getElementById("keyboard_logo");
    const mouse_logo = document.getElementById("mouse_logo");

    let array = [monitor, mouse, keyboard];
    let array_logo = [monitor_logo,  mouse_logo, keyboard_logo];

    for (let i = 0; i < 3; i++) {
        if (array_logo[i] == array_logo[n]) {
            array[i].classList.remove("hidden");
            array_logo[i].classList.add("selezionato");
        } else {
            array[i].classList.add("hidden");
            array_logo[i].classList.remove("selezionato");
        }
    }
}