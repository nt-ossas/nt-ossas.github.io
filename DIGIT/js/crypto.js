// Funzione per selezionare la criptovaluta
function btc(n) {
    const btc = document.getElementById("btc");
    const eth = document.getElementById("eth");
    const solana = document.getElementById("solana");
    const btc_logo = document.getElementById("btc-logo");
    const eth_logo = document.getElementById("eth-logo");
    const solana_logo = document.getElementById("solana-logo");

    let array = [btc, eth, solana];
    let array_logo = [btc_logo, eth_logo, solana_logo];

    for (let i = 0; i < 3; i++) {
        if (array[i] == array[n]) {
            array[i].classList.remove("hidden");
            array_logo[i].classList.add("selected");
        } else {
            array[i].classList.add("hidden");
            array_logo[i].classList.remove("selected");
        }
    }
}