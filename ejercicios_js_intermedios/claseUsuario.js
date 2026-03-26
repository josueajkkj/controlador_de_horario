class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Usuario: ${this.nombre} | Email: ${this.email}`;
    }
}

// Prueba
const usuario1 = new Usuario(1, "Josue", "josue@gmail.com");
console.log(usuario1.mostrarInfo());