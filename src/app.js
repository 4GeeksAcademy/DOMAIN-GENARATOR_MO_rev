// Arrays de partes de dominio
const pronoun = ["the", "our"];
const adj = ["big", "great"];
const noum = ["jogger", "racoon"];
const extensions = [".com", ".net"];

// Función para generar dominios
function generateDomains() {
  const domains = [];

  // Bucles anidados para combinar las partes
  for (const p of pronoun) {
    for (const a of adj) {
      for (const n of noum) {
        for (const e of extensions) {
          domains.push(p + a + n + e);
        }
      }
    }
  }

  return domains;
}

// Función para mostrar los dominios generados
function displayDomains() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Limpiar resultados previos

  const domains = generateDomains();

  const fragment = document.createDocumentFragment(); // Usar fragmento para minimizar el reflujo

  domains.forEach(domain => {
    const p = document.createElement("p");
    p.textContent = domain;
    fragment.appendChild(p);
  });

  resultsDiv.appendChild(fragment); // Añadir todo el fragmento de una vez al DOM
}

// Agregar evento al botón
document
  .getElementById("generateButton")
  .addEventListener("click", displayDomains);
