/*operadores aritmeticos relacionales y logicos*/ 





let personas = [
    {
        nombre : "cristian",
        apellido : "ibarra",
        edad: 20,
        salud : true,
        antecedentes: true
    },
    {
        nombre : "esteban",
        apellido : "valdobino",
        edad: 35,
        salud : false,
        antecedentes: true
    },
    {
        nombre : "sebastian",
        apellido : "diaz",
        edad: 17,
        salud : true,
        antecedentes: true
    },
    {
        nombre : "angel",
        apellido : "sosa",
        edad: 25,
        salud : false,
        antecedentes: false
    }
]

function test(persona) {
    let apta 
    apta = persona.edad >= 18 && persona.edad <= 35
    apta = apta && persona.antecedentes
    apta = apta && persona.salud
    apta = apta && persona.apellido != "rey"
    console.log(persona.nombre + " " + persona.apellido + " apto para la guerra " + apta);
    

}


personas.map(persona => test(persona))



