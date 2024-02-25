
// Trazendo valores recebidos no HTML

    const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

// Calculando a multa

    const contrato = Number(frm.tempContrato.value);
    const valor = Number(frm.numValor.value);

    const calculo = (24 - contrato);
    const subcalculo = (calculo * valor);
    const porcentagem = (subcalculo * 30);
    let resposta = (porcentagem / 100);

contrato >= 18 ? alert("Não têm multa, fidelidade cumprida.") : alert(`R$${resposta.toFixed(2)}`);


})
