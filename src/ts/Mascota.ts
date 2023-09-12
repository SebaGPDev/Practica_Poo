abstract class Mascota {
    nombre: string;
    nivelDeFelicidad: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.nivelDeFelicidad = 5; // Supongamos que el nivel de felicidad va de 0 a 10.
    }

    abstract hacerRuido(): void;

    alimentar() {
        this.nivelDeFelicidad += 2;
        if (this.nivelDeFelicidad > 10) this.nivelDeFelicidad = 10;
        alert(`${this.nombre} ha sido alimentado. Felicidad: ${this.nivelDeFelicidad}`);
    }

    jugar() {
        this.nivelDeFelicidad += 3;
        if (this.nivelDeFelicidad > 10) this.nivelDeFelicidad = 10;
        alert(`${this.nombre} ha jugado. Felicidad: ${this.nivelDeFelicidad}`);
    }

    cuidar() {
        this.nivelDeFelicidad += 1;
        if (this.nivelDeFelicidad > 10) this.nivelDeFelicidad = 10;
        alert(`${this.nombre} ha sido cuidado. Felicidad: ${this.nivelDeFelicidad}`);
    }
}

class Perro extends Mascota {
    hacerRuido() {
        alert("¡Guau guau!");
    }
}

class Gato extends Mascota {
    hacerRuido() {
        alert("¡Miau miau!");
    }
}

class CriaturaImaginaria extends Mascota {
    hacerRuido() {
        alert("¡Blargh blargh!");
    }
}

let mascota: Mascota | null = null;

while (true) {
    const accion = prompt("¿Qué deseas hacer? (crear, alimentar, jugar, cuidar, ruido, salir)");

    if (accion === "crear") {
        const tipo = prompt("¿Qué tipo de mascota deseas? (perro, gato, imaginaria)");
        const nombre = prompt("Ingresa el nombre de tu mascota:");
        if (tipo === "perro") {
            mascota = new Perro(nombre);
        } else if (tipo === "gato") {
            mascota = new Gato(nombre);
        } else if (tipo === "imaginaria") {
            mascota = new CriaturaImaginaria(nombre);
        } else {
            alert("Tipo de mascota no reconocido");
        }
    } else if (mascota && accion === "alimentar") {
        mascota.alimentar();
    } else if (mascota && accion === "jugar") {
        mascota.jugar();
    } else if (mascota && accion === "cuidar") {
        mascota.cuidar();
    } else if (mascota && accion === "ruido") {
        mascota.hacerRuido();
    } else if (accion === "salir") {
        break;
    } else {
        alert("Acción no reconocida o no tienes una mascota creada aún.");
    }
}
