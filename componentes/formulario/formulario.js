export function renderFormulario() {
    let seccion = document.createElement('section');
    seccion.className = 'formulario';
  
    let contenedor = document.createElement('div');
    contenedor.className = 'add-task';
  
    let input = document.createElement('input');
    input.id = 'nuevaTarea';
    input.type = 'text';
    input.placeholder = 'Write a task...';
  
    let boton = document.createElement('button');
    boton.id = 'btnAgregar';
    boton.textContent = 'Add';
  
    boton.addEventListener('click', agregarTarea);
  
    contenedor.appendChild(input);
    contenedor.appendChild(boton);
    seccion.appendChild(contenedor);
  
    return seccion;
  }
  
  function agregarTarea() {
    let input = document.getElementById('nuevaTarea');
    let valor = input.value.trim();
    if (valor === '') return;
  
    let nuevaTarea = document.createElement('div');
    nuevaTarea.className = 'task';
  
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
  
    let texto = document.createTextNode(` ${valor}`);
  
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(texto);
  
    let cuerpo = document.getElementById('cuerpo');
    if (cuerpo) {
      cuerpo.appendChild(nuevaTarea);
      input.value = '';
    }
  }
  
  