/*
var texto, resultado;
texto = prompt("Ingresar numero: ")
resultado = Math.sqrt(texto)
document.write(resultado);
console.texto(resultado);
alert(resultado);
*/
/*
var w = prompt("N: ");
var i, sum = 0;
for(i=1; i<=w; i++);{
    sum+=i*i;
}
document.write(sum);
*/
/*var a, b, op;
a = parseFloat(prompt("n1: "));
b = parseFloat(prompt("n2: "));
op = parseInt(prompt("op: "));*/
/*
if(a>b){
    mostrar(a);
}else if(b>a){
    mostrar(b);
}else{
    mostrar("iguales");
}
*/
function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}
/*
switch(op){
    case 1: mostrar(suma());
             break;
    case 2: mostrar(resta());
             break;
    case 3: mostrar(multi());
             break;
    case 4: mostrar(divi());
             break;
    default: break; 
}
*/
function suma(){
    return(a+b);
}
function resta(){
    return(a-b);    
}
function multi(){
    return(a*b);
}
function divi(){
   if(b==0){
        return "No se puede dividir entre 0"
   }
   return(a/b);
}

var a, b, op;
var res = document.getElementById("result");
function calcular(){
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);
    op = document.getElementById("oper").value;
    switch (op) {
        case '1':
            res.value = suma();
            break;
        case '2':
            res.value = resta();
            break;
        case '3':
            res.value = multi();
            break;
        case '4':
            res.value = divi();
            break;
        default:
            break;
    }
}



