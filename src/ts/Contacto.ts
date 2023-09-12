class Contacto {
    nombre: string;
    correoElectronico: string;
    numeroDeTelefono: string;

    constructor(nombre: string, correoElectronico: string, numeroDeTelefono: string) {
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.numeroDeTelefono = numeroDeTelefono;
    }

    mostrarInformacion(): string {
        return `Nombre: ${this.nombre}\nCorreo Electrónico: ${this.correoElectronico}\nNúmero de Teléfono: ${this.numeroDeTelefono}`;
    }
}

class GestorDeContactos {
    contactos: Contacto[] = [];

    agregarContacto(contacto: Contacto) {
        this.contactos.push(contacto);
    }

    buscarContacto(nombre: string): Contacto | null {
        return this.contactos.find(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
    }

    listarContactos() {
        let lista = "";
        this.contactos.forEach(contacto => {
            lista += contacto.mostrarInformacion() + "\n\n";
        });
        return lista;
    }
}

const gestor = new GestorDeContactos();

while (true) {
    const accion = prompt("¿Qué deseas hacer? (agregar, buscar, listar, salir)");

    if (accion === "agregar") {
        const nombre = prompt("Ingresa el nombre del contacto:");
        const correoElectronico = prompt("Ingresa el correo electrónico del contacto:");
        const numeroDeTelefono = prompt("Ingresa el número de teléfono del contacto:");
        gestor.agregarContacto(new Contacto(nombre, correoElectronico, numeroDeTelefono));
        alert("Contacto agregado con éxito.");
    } else if (accion === "buscar") {
        const nombre = prompt("Ingresa el nombre del contacto a buscar:");
        const contacto = gestor.buscarContacto(nombre);
        if (contacto) {
            alert(contacto.mostrarInformacion());
        } else {
            alert("Contacto no encontrado.");
        }
    } else if (accion === "listar") {
        const lista = gestor.listarContactos();
        if (lista) {
            alert(lista);
        } else {
            alert("No hay contactos en la lista.");
        }
    } else if (accion === "salir") {
        break;
    } else {
        alert("Acción no reconocida");
    }
}
