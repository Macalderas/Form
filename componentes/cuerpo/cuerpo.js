export function renderCuerpo() {
    let cuerpo = document.createElement('section');
    cuerpo.id = 'cuerpo';
  
    let seccionDesign = crearSeccion('DESIGN', [
      'Create icons for a dashboard',
      'Prepare a design presentation'
    ]);
  
    let seccionPersonal = crearSeccion('PERSONAL', [
      'Stretch for 15 minutes',
      'Plan your meal',
      'Review daily goals before sleeping. Add some new if time permits'
    ]);
  
    let seccionHouse = crearSeccion('HOUSE', [
      'Water indoor plants'
    ]);
  
    cuerpo.appendChild(seccionDesign);
    cuerpo.appendChild(seccionPersonal);
    cuerpo.appendChild(seccionHouse);
  
    return cuerpo;
  }
  
  function crearSeccion(titulo, tareas) {
    let contenedor = document.createElement('div');
    contenedor.className = 'section';
  
    let tituloElemento = document.createElement('p');
    tituloElemento.className = 'section-title';
    tituloElemento.textContent = titulo;
  
    contenedor.appendChild(tituloElemento);
  
    tareas.forEach(tarea => {
      let item = document.createElement('div');
      item.className = 'task';
  
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      let texto = document.createTextNode(` ${tarea}`);
  
      item.appendChild(checkbox);
      item.appendChild(texto);
      contenedor.appendChild(item);
    });
  
    return contenedor;
  }
  