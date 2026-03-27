# 03 - Explicación de MCP y Conexión con Supabase

## 1. ¿Qué es MCP (Model Context Protocol)?
El **Model Context Protocol (MCP)** es un estándar abierto que permite a los modelos de IA (como Antigravity) conectarse de forma segura y directa con herramientas externas, bases de datos y APIs. 

En lugar de que el desarrollador tenga que programar cada función manualmente, el servidor MCP actúa como un "traductor" que le otorga a la IA habilidades específicas (como crear tablas o leer registros) de manera inmediata.

## 2. El rol del Access Token
El **Access Token** de Supabase es la credencial de seguridad que permite la comunicación entre el servidor MCP y mi proyecto en la nube.
* **Función:** Identifica quién está intentando realizar cambios y otorga los permisos necesarios para que la IA pueda "tocar" la base de datos.
* **Importancia:** Sin este token, Antigravity no tendría autorización para ejecutar comandos SQL o gestionar mi infraestructura de backend.

## 3. ¿Cómo usa Antigravity las herramientas?
Antigravity utiliza el servidor MCP de Supabase como una **extensión de sus capacidades**. El proceso funciona así:
1. Yo le doy una instrucción en lenguaje natural (ej: *"Crea una tabla de usuarios"*).
2. Antigravity busca en su catálogo de herramientas de MCP la función adecuada (`create_table`).
3. La IA envía los parámetros necesarios al servidor MCP, el cual ejecuta la acción real en Supabase.
4. Recibo una confirmación en tiempo real de que la tabla fue creada.

## 4. Riesgos de Seguridad y Permisos Peligrosos
Configurar MCP requiere responsabilidad. Algunos riesgos críticos son:
* **Privilegios Administrativos:** Si se usa un token con permisos totales (`Service Role`), la IA podría borrar bases de datos completas (`DROP TABLE`) por error o ante un ataque de *Prompt Injection*.
* **Exposición de Datos:** Si no se configuran correctamente las políticas de seguridad (RLS - Row Level Security), cualquier persona que interactúe con el agente de IA podría extraer información privada de otros usuarios.
* **Mejor Práctica:** Se recomienda siempre usar el principio de "mínimo privilegio" y limitar las acciones que la IA puede realizar de forma autónoma.

---
*Documentación generada para el Día 4 del curso de Agentes de IA.*