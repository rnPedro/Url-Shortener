function encurtarURL() {
    let urlInput = document.getElementById("urlInput").value;
    if (!urlInput) {
        alert("Por favor, insira uma URL.");
        return;
    }

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `url=${encodeURIComponent(urlInput)}`
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("result").innerHTML = `URL curta: <a href="${result}" target="_blank">${result}</a>`;
    })
    .catch(error => console.error("Erro:", error));
}
