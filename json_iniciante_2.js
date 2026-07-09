let notaFiscal = {
  nome: "Marcos",
  idade: 28,
  impostos: "98.90"
};


for (let chave in notaFiscal) {
  

  console.log("O campo " + chave + " tem o valor " + notaFiscal[chave]);
}