// Obtener los elementos de los botones y las ventanas modales
const productosBtn = document.getElementById("productosBtn");
const promosBtn = document.getElementById("promosBtn");
const productosModal = document.getElementById("productosModal");
const promosModal = document.getElementById("promosModal");
const productosClose = document.getElementById("productosClose");
const promosClose = document.getElementById("promosClose");

// Mostrar la ventana modal de PRODUCTOS al hacer clic en el botón "PRODUCTOS"
productosBtn.addEventListener("click", () => {
  productosModal.style.display = "block";
});

// Mostrar la ventana modal de PROMOS Y MAS al hacer clic en el botón "PROMOS Y MAS"
promosBtn.addEventListener("click", () => {
  promosModal.style.display = "block";
});

// Cerrar la ventana modal de PRODUCTOS al hacer clic en la "X" o fuera de la ventana
productosClose.addEventListener("click", () => {
  productosModal.style.display = "none";
});

// Cerrar la ventana modal de PROMOS Y MAS al hacer clic en la "X" o fuera de la ventana
promosClose.addEventListener("click", () => {
  promosModal.style.display = "none";
});

// Cerrar la ventana modal de PRODUCTOS al hacer clic fuera de la ventana
window.addEventListener("click", (event) => {
  if (event.target === productosModal) {
    productosModal.style.display = "none";
  }
});

// Cerrar la ventana modal de PROMOS Y MAS al hacer clic fuera de la ventana
window.addEventListener("click", (event) => {
  if (event.target === promosModal) {
    promosModal.style.display = "none";
  }
});
