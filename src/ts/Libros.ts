class Libro {
    titulo: string;
    autor: string;
    prestado: boolean;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false;
    }

    prestar() {
        if (this.prestado) {
            alert("El libro ya está prestado.");
        } else {
            this.prestado = true;
            alert("Libro prestado con éxito.");
        }
    }

    devolver() {
        if (this.prestado) {
            this.prestado = false;
            alert("Libro devuelto con éxito.");
        } else {
            alert("El libro no estaba prestado.");
        }
    }
}

class Biblioteca {
    libros: Libro[] = [];

    agregarLibro(libro: Libro) {
        this.libros.push(libro);
    }

    buscarLibro(titulo: string): Libro | null {
        return this.libros.find(libro => libro.titulo === titulo) || null;
    }

    listarLibros() {
        let lista = "";
        this.libros.forEach(libro => {
            lista += `Título: ${libro.titulo}, Autor: ${libro.autor}, Prestado: ${libro.prestado ? "Sí" : "No"}\n`;
        });
        alert(lista);
    }
}

const biblioteca = new Biblioteca();

while (true) {
    const accion = prompt("¿Qué deseas hacer? (agregar, prestar, devolver, listar, salir)");

    if (accion === "agregar") {
        const titulo = prompt("Ingresa el título del libro:");
        const autor = prompt("Ingresa el autor del libro:");
        biblioteca.agregarLibro(new Libro(titulo, autor));
    } else if (accion === "prestar") {
        const titulo = prompt("Ingresa el título del libro a prestar:");
        const libro = biblioteca.buscarLibro(titulo);
        if (libro) {
            libro.prestar();
        } else {
            alert("Libro no encontrado.");
        }
    } else if (accion === "devolver") {
        const titulo = prompt("Ingresa el título del libro a devolver:");
        const libro = biblioteca.buscarLibro(titulo);
        if (libro) {
            libro.devolver();
        } else {
            alert("Libro no encontrado.");
        }
    } else if (accion === "listar") {
        biblioteca.listarLibros();
    } else if (accion === "salir") {
        break;
    } else {
        alert("Acción no reconocida");
    }
}
