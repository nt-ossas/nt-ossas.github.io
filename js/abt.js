//About list p1
function show1() {
    const p1 = document.getElementById("max");
    p1.classList.remove("hidden");
    const p2 = document.getElementById("ossas");
    p2.classList.add("hidden");
    const p3 = document.getElementById("p3");
    p3.classList.add("hidden");
}

//About list p2
function show2() {
    const p1 = document.getElementById("max");
    p1.classList.add("hidden");
    const p2 = document.getElementById("ossas");
    p2.classList.remove("hidden");
    const p3 = document.getElementById("p3");
    p3.classList.add("hidden");
}

//About list p3
function show3() {
    const p1 = document.getElementById("max");
    p1.classList.add("hidden");
    const p2 = document.getElementById("ossas");
    p2.classList.add("hidden");
    const p3 = document.getElementById("p3");
    p3.classList.remove("hidden");
}
