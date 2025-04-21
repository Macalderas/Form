import { renderHeader } from './componentes/header/header.js';
import { renderCuerpo } from './componentes/cuerpo/cuerpo.js';
import { renderFormulario } from './componentes/formulario/formulario.js';

function iniciarApp() {
  const root = document.getElementById('root');

  let header = renderHeader();
  let cuerpo = renderCuerpo();
  let formulario = renderFormulario();

  root.appendChild(header);
  root.appendChild(cuerpo);
  root.appendChild(formulario);
}

window.addEventListener('DOMContentLoaded', iniciarApp);
