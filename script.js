function changeContent(page) {
  var contentDiv = document.getElementById("content");

  switch (page) {
    case "home":
      contentDiv.innerHTML = `
        <h1>🅒🅞🅜🅟🅤🅢🅤🅓</h1>
        <br>
        <p>Esta es la página principal</p>
        `;
      break;
    case "about":
      contentDiv.innerHTML = `
        <h1>Quiénes somos?</h1>
        <br>
        <p>Esta es la página acerca de</p>
        `;
      break;
    case "contact":
      contentDiv.innerHTML = `
        <h1>Contacto</h1>
        <br>
        <p>Esta es la página de contacto</p>
        `;
      break;
    default:
      contentDiv.innerHTML = `<h2>Pagina no encontrada (Error 404)</h2>`
      break;
  }
}
