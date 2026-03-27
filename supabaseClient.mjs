import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfleywupfmluoxkkjyqt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbGV5d3VwZm1sdW94a2tqeXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MTQxMTcsImV4cCI6MjA5MDE5MDExN30.IA1VlKFnP-Sq9hSxBGlJa95mqGXmbFOfR_OSK_HzzmU'

export const supabase = createClient(supabaseUrl, supabaseKey)


async function testInsert() {
    console.log("Intentando conectar con Supabase...");

    const { data, error } = await supabase
        .from('usuarios')
        .insert([{
            nombre: 'Josue',
            email: 'jac100257@gmail.com'
        }])
        .select()

    if (error) {
        console.error(' Error al insertar:', error.message)
    } else {
        console.log(' ¡Conexión exitosa! Dato guardado en la nube:', data)
    }
}


testInsert();