interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Circulo implements FormaGeometrica {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

class Rectangulo implements FormaGeometrica {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

class Triangulo implements FormaGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        // Para simplificar, asumimos un triángulo equilátero
        return 3 * this.base;
    }
}

while (true) {
    const forma = prompt("¿Qué forma geométrica deseas calcular? (circulo, rectangulo, triangulo, salir)");

    if (forma === "circulo") {
        const radio = parseFloat(prompt("Ingresa el radio del círculo:"));
        const circulo = new Circulo(radio);
        alert(`Área: ${circulo.calcularArea().toFixed(2)}\nPerímetro: ${circulo.calcularPerimetro().toFixed(2)}`);
    } else if (forma === "rectangulo") {
        const ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
        const alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));
        const rectangulo = new Rectangulo(ancho, alto);
        alert(`Área: ${rectangulo.calcularArea().toFixed(2)}\nPerímetro: ${rectangulo.calcularPerimetro().toFixed(2)}`);
    } else if (forma === "triangulo") {
        const base = parseFloat(prompt("Ingresa la base del triángulo:"));
        const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
        const triangulo = new Triangulo(base, altura);
        alert(`Área: ${triangulo.calcularArea().toFixed(2)}\nPerímetro (triángulo equilátero): ${triangulo.calcularPerimetro().toFixed(2)}`);
    } else if (forma === "salir") {
        break;
    } else {
        alert("Forma no reconocida");
    }
}
