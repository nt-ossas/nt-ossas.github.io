function show(n){
    const color = document.getElementById("color").value;
    const cpu = document.getElementById("cpu");
    const gpu = document.getElementById("gpu");
    const ram = document.getElementById("ram");
    const memoria = document.getElementById("memorie");
    const psu = document.getElementById("psu");
    const case1 = document.getElementById("case");
    const mobo = document.getElementById("mobo");
    const aio = document.getElementById("aio");
    const intro = document.getElementById("intro");
    const cpu_list = document.getElementById("cpu_list");
    const gpu_list = document.getElementById("gpu_list");
    const ram_list = document.getElementById("ram_list");
    const memoria_list = document.getElementById("memorie_list");
    const psu_list = document.getElementById("psu_list");
    const case1_list = document.getElementById("case_list");
    const mobo_list = document.getElementById("mobo_list");
    const aio_list = document.getElementById("aio_list");

    let array = [cpu, gpu, mobo, ram, memoria, aio, psu, case1];
    let array_list = [cpu_list, gpu_list, mobo_list, ram_list, memoria_list, aio_list, psu_list, case1_list];
    intro.classList.add("hidden");

    for (let i = 0; i < 8; i++) {
        if (array[i] == array[n]) {
            array[i].classList.remove("hidden");
            array_list[i].classList.add("choosen");
        } else {
            array[i].classList.add("hidden");
            array_list[i].classList.remove("choosen");
        }
        if (!array_list[i].classList.contains('choosen')) {
            array_list[i].style.color = 'cornsilk';
        }
        else{
            array_list[i].style.color = color;
        }
    }
}