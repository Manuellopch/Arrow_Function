document.getElementById('txtBtn').addEventListener('click', CargarPrimera);
document.getElementById('jsonBtn').addEventListener('click', CargarSegundo);
document.getElementById('apiBTN').addEventListener('click', CargarTercero);
function CargarPrimera(){
     fetch('datos.txt')
     .then(res => res.text())
     .then(empleados => document.getElementById('resultado').innerHTML = empleados)
     .catch(error => console.log(error))
}
     
function CargarSegundo(){
     fetch('empleados.json')
     .then(res => res.json())
     .then(data => {
          let html = '';
          data.forEach(function(empleado){
               html += `<li>Nombre:${empleado.nombre} || Puesto:${empleado.puesto}</li>`
          })
          document.getElementById('resultado').innerHTML = html;
     })
     .catch(error => console.log(error))
}

function CargarTercero(){
     fetch('https://picsum.photos/list')
     .then(res => res.json())
     .then(imagenes => {
          let html = '';
          imagenes.forEach(function(imagen){
          html = `
          <li>
          <a href="${imagen.post_url}">Ver Imagen</a>
          ${imagen.author}
          </li>`
     })
     document.getElementById('resultado').innerHTML = html;
     })
     .catch(error => console.log(error));
}
