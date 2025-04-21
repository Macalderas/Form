export function renderHeader() {
    let header = document.createElement('header');
  
    let titulo = document.createElement('h1');
    titulo.textContent = 'Today';
  
    header.appendChild(titulo);
  
    return header;
  }
  