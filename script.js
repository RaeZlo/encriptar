function encriptar() {
    let input = document.getElementById("inputTexto").value;
    let encrypted = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    displayOutput(encrypted);
}

function desencriptar() {
    let input = document.getElementById("inputTexto").value;
    let decrypted = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    displayOutput(decrypted);
}

function copyText() {
    let outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then();
}
function displayOutput(text) {
    document.getElementById('placeholderImage').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('outputText').value = text;
    document.getElementById('copyButton').style.display = 'block';
}
