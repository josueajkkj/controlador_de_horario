// simuladorMCP.js
class SimuladorMCP {
    /**
     * Simula una conexión MCP validando un token
     * @param {string} token - Token a validar
     * @returns {Object} - Resultado de la conexión
     */
    static conectar(token) {
        // Validar que el token existe
        if (!token) {
            return {
                exito: false,
                mensaje: "Error: Token no proporcionado",
                codigo: 400
            };
        }

        // Validar longitud del token (mínimo 8 caracteres)
        if (token.length < 8) {
            return {
                exito: false,
                mensaje: "Error: Token inválido - longitud mínima 8 caracteres",
                codigo: 401,
                longitudRecibida: token.length
            };
        }

        // Simular conexión exitosa
        return {
            exito: true,
            mensaje: "Conexión MCP exitosa",
            codigo: 200,
            tokenValidado: token,
            timestamp: new Date().toISOString(),
            sessionId: Math.random().toString(36).substring(2, 15)
        };
    }

    /**
     * Versión asíncrona con simulación de delay
     */
    static async conectarAsync(token, delayMs = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.conectar(token));
            }, delayMs);
        });
    }
}

// Ejemplos de uso
console.log("=== SIMULADOR MCP ===\n");

// Caso 1: Token válido
console.log("Caso 1 - Token válido:");
console.log(SimuladorMCP.conectar("token123456"));

// Caso 2: Token corto
console.log("\nCaso 2 - Token corto:");
console.log(SimuladorMCP.conectar("123"));

// Caso 3: Sin token
console.log("\nCaso 3 - Sin token:");
console.log(SimuladorMCP.conectar());

// Caso 4: Versión asíncrona
console.log("\nCaso 4 - Versión asíncrona:");
SimuladorMCP.conectarAsync("miTokenSeguro", 500).then(console.log);

module.exports = SimuladorMCP;
