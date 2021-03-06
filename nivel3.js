/*ní
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Curso: Informática para Internet
 * Disciplina: Lógica de Programação e Estrutura de Dados
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 * 
 * Código de Domínio Público, sinta-se livre para usá-lo, modificá-lo e redistribuí-lo.
 *
 */

// Computa o valor de y na equação y = ax2 + bx + c


var valorA = 1987;
var valorB = 20;
var valorC = 0;
var coeficiente1;
var coeficiente2

var delta = (valorB * valorB) - 4 * valorA * valorC;

//validando valores de delta
if (delta <0) {
	console.log("Para Delta negativo, não existem raízes reais");
}
else{
console.log("Para Delta positivo, raízes diferentes:");  
  
  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
  
  console.log("x' = " + coeficiente1);
  console.log("x'' = " + coeficiente2);
}
console.log("Valor de Delta => " + delta);
