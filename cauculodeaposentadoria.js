const nome = "Paulo";
const sexo = "M";
const idade = 54;
const contribuicao = 42;

var c = idade + contribuicao

if (c >= 85 && sexo === "F") {
    console.log(`${nome}, você pode se aposentar!`)
}else if (c >= 95 && sexo === "M") {
    console.log (`${nome}, Você pode se aposentar!`)
}else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}