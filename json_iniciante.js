let notafiscal = {
    nome: "Marcos",
    idade: 51,
    imposto: "98.90"
};
for(let chave in notafiscal){
    console.log("o campo " + chave + " tem o valor " +notafiscal[chave]);
}