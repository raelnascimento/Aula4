//Exercicio 1

/*
var a=prompt("Entre com o primeiro valor: ");
var b=prompt("Entre com o segundo valor: ");
var c=prompt("Entre com o terceiro valor: ");

if (b>a && b>c) {
    document.write("O maior valor é: " + b);
} else if (c>a && c>b) {
    document.write("O maior valor é: " + c);
}else{
    document.write("O maior valor é: " + a);
}
*/

//Exercicio 2
/*
var a=prompt("Entre com o primeiro valor: ");
var b=prompt("Entre com o segundo valor: ");
var c=prompt("Entre com o terceiro valor: ");

if (a > b && a > c) {
    if (b>c) {
        document.write("Valores em ordem: " + c + ", "+ b + ", " + a);
    } else { 
        document.write("Valores em ordem: " + b + ", "+ c + ", " + a);
    }
}  else {
    if (b > c) {
        if (c>ac) {
            document.write("Valores em ordem: " + a + ", "+ c + ", " + b);
        } else { 
            document.write("Valores em ordem: " + c + ", "+ a + ", " + b);
        }
    } else {
        if (b>a){
            document.write("Valores em ordem: " + a + ", "+ b + ", " + c);
        } else { 
            document.write("Valores em ordem: " + b + ", "+ a + ", " + c);
        }
    }
}


*/

//Exercicio 3

/*
var quant=prompt("Quantidade de vezes para repetir: ");
var nome=prompt("Digite um nome: ");

for (var i = 0; i < quant; i++) {
    document.write("Seu nome é: " + nome + "<br>");
}
*/

//Exercicio 4

/*
var a=prompt("Entre com o primeiro valor: ");
var b=prompt("Entre com o segundo valor: ");
var receb = 0;

for (var i = 1; i <= a; i++) {
    if (i%b ==0) {
        receb++;
    }
    
}
document.write("A quantidade de valor é " + receb + "<br>");
*/