class Tarea {
    nombre: string;
    fechaDeVencimiento: Date;
    completada: boolean;

    constructor(nombre: string, fechaDeVencimiento: Date) {
        this.nombre = nombre;
        this.fechaDeVencimiento = fechaDeVencimiento;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }
}

class ListaDeTareas {
    tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea) {
        this.tareas.push(tarea);
    }

    completarTarea(nombre: string) {
        const tarea = this.tareas.find(t => t.nombre === nombre);
        if (tarea) {
            tarea.completar();
        } else {
            alert("Tarea no encontrada");
        }
    }

    eliminarTarea(nombre: string) {
        const index = this.tareas.findIndex(t => t.nombre === nombre);
        if (index !== -1) {
            this.tareas.splice(index, 1);
        } else {
            alert("Tarea no encontrada");
        }
    }

    mostrarTareas() {
        let lista = "";
        this.tareas.forEach(tarea => {
            lista += `Nombre: ${tarea.nombre}, Fecha de vencimiento: ${tarea.fechaDeVencimiento}, Completada: ${tarea.completada}\n`;
        });
        alert(lista);
    }
}

const lista = new ListaDeTareas();

while (true) {
    const accion = prompt("¿Qué deseas hacer? (agregar, completar, eliminar, mostrar, salir)");

    if (accion === "agregar") {
        const nombre = prompt("Ingresa el nombre de la tarea:");
        const fecha = prompt("Ingresa la fecha de vencimiento (YYYY-MM-DD):");
        lista.agregarTarea(new Tarea(nombre, new Date(fecha)));
    } else if (accion === "completar") {
        const nombre = prompt("Ingresa el nombre de la tarea a completar:");
        lista.completarTarea(nombre);
    } else if (accion === "eliminar") {
        const nombre = prompt("Ingresa el nombre de la tarea a eliminar:");
        lista.eliminarTarea(nombre);
    } else if (accion === "mostrar") {
        lista.mostrarTareas();
    } else if (accion === "salir") {
        break;
    } else {
        alert("Acción no reconocida");
    }
}
