//Arrow function
/*let aprendiendo;
aprendiendo = function(){
     console.log('Aprendiendo Java Script');
}
//arrow function
aprendiendo = () =>{
     console.log('Aprendiendo Java Script');
}
//arrow function en una linea no necesita llaves
aprendiendo = () => console.log('Aprendiendo Java Script');
aprendiendo();
//Retornar un valor
aprendiendo = () => 'Aprendiendo Java Script';
console.log(aprendiendo());
//Debolver un objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo Java Script'});
//pasar parametros a un arrow function
aprendiendo = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);
aprendiendo('Java Script', 'HTML');*/
//pasar arrow function con callback
const productos = ['Pantalon', 'Camisa', 'Disco'];
const letrasProductos = productos.map(producto =>{
     return producto.length;
});
console.log(productos);
//for Each con arrow  primera forma
productos.forEach(producto => {
     console.log(producto);
});
//for Each con arrow  segunda forma
productos.forEach(producto => console.log(producto));
