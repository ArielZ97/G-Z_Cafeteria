let unaFoto = document.getElementById("Izquierda");
let unaFoto2 = document.getElementById("Frontal");
let unaFoto3 = document.getElementById("Derecha");

let Imagenes = [
    "Imagenes/img9.jpg", 
    "Imagenes/img4.jpg", 
    "Imagenes/img16.jpg", 
    "Imagenes/img18.jpg", 
    "Imagenes/img3.jpg", 
    "Imagenes/img2.jpg"
];

let indiceActual = 0;
        let indiceAnt = Imagenes.length -1;
        let indiceSig = 1;


        function actualizarImagen() {
            unaFoto.src = Imagenes[indiceAnt];
            unaFoto2.src = Imagenes[indiceActual];
            unaFoto3.src = Imagenes[indiceSig];
        }
        actualizarImagen();

        document.getElementById("siguiente").addEventListener("click", function() {
            indiceAnt = indiceActual;
            indiceActual++;
            indiceSig++;
            if (indiceSig >= Imagenes.length){
                indiceSig = 0;
            }
            if (indiceActual >= Imagenes.length) {
        indiceActual = 0;
        }
            actualizarImagen();
        });

        document.getElementById("anterior").addEventListener("click", function() {
            indiceSig = indiceActual;
            indiceActual--;
            indiceAnt--;
        if (indiceActual < 0) {
        indiceActual = Imagenes.length - 1;
        indiceAnt = Imagenes.length - 2;
    }
    if (indiceAnt < 0) {
        indiceAnt = Imagenes.length - 1;
    }
    actualizarImagen();
        });