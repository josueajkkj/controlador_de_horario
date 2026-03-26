// Probado en localhost con node
class SimuladorMCP {
 
    static conectar(token) {
   
        if (!token) {
            return {
                exito: false,
                mensaje: "Error: Token no proporcionado",
                codigo: 400
            };
        }

       
       if (!token || token.trim() === "") {
    return {
        exito: false,
        mensaje: "Error: Token no proporcionado o vacío",
        codigo: 400,
        sugerencia: "Envía un token válido con al menos 8 caracteres"
    };
}
 
        return {
            exito: true,
            mensaje: "Conexión MCP exitosa",
            codigo: 200,
            tokenValidado: token,
            timestamp: new Date().toISOString(),
            sessionId: Math.random().toString(36).substring(2, 15)
        };
    }

  
    static async conectarAsync(token, delayMs = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.conectar(token));
            }, delayMs);
        });
    }
}


console.log("=== SIMULADOR MCP ===\n");


console.log("Caso 1 - Token válido:");
console.log(SimuladorMCP.conectar("token123456"));


console.log("\nCaso 2 - Token corto:");
console.log(SimuladorMCP.conectar("123"));


console.log("\nCaso 3 - Sin token:");
console.log(SimuladorMCP.conectar());


console.log("\nCaso 4 - Versión asíncrona:");
SimuladorMCP.conectarAsync("miTokenSeguro", 500).then(console.log);

module.exports = SimuladorMCP;
