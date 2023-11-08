// Si termina en tarjeta es de la imagen de la tarjeta y si termina en Input es lo que el usuario ingreso.

const numeroFrontalInput = document.getElementById("large-number-card");
const nombrePersonaInput = document.getElementById("name-person");
const fechaMesInput = document.getElementById("month-person");
const fechaAñoInput = document.getElementById("year-person");
const numeroTraseroInput = document.getElementById("password-card");


const numeroFrontalTarjeta = document.querySelector(".front-card-number");
const nombrePersonaTarjeta = document.querySelector(".card-name");
const fechaMesTarjeta = document.querySelector(".month");
const fechaAñoTarjeta = document.querySelector(".year");
const numeroTraseroTarjeta = document.querySelector(".back-card-number");


const btnEnviarFormulario = document.querySelector(".btn-send-form");

// Errores que se muestran en un P
const mensajeErrorNumeroLargo = document.getElementById('mensajeErrorNumeroLargo')
const mensajeErrorNombre = document.getElementById('mensajeErrorNombre');
const mensajeErrorMes = document.getElementById('mensajeErrorMes')
const mensajeErrorAño = document.getElementById('mensajeErrorAño')
const mensajeErrorNumeroTrasero = document.getElementById('mensajeErrorNumeroTrasero')







function mostrarCaracteres(input, tarjeta) {
    input.addEventListener("input", function() {
        const inputValue = input.value;
        tarjeta.textContent = inputValue;
    })
}

mostrarCaracteres(numeroFrontalInput, numeroFrontalTarjeta);
mostrarCaracteres(nombrePersonaInput, nombrePersonaTarjeta);
mostrarCaracteres(fechaMesInput, fechaMesTarjeta);
mostrarCaracteres(fechaAñoInput, fechaAñoTarjeta);
mostrarCaracteres(numeroTraseroInput, numeroTraseroTarjeta);



btnEnviarFormulario.addEventListener("click", function(e) {
    todasLasValidacionesExitosas = true; // Restablece la variable al inicio de cada envío


    // Validacion para el numero frontal largo, tiene que tener 16 caracteres, no permite letras ni espacios
    const valorNumeroFrontal = numeroFrontalInput.value;
    const patronNumeroFrontal = /^[0-9]{16}$/; // Expresión regular para 16 dígitos
    
    if (!patronNumeroFrontal.test(valorNumeroFrontal)) {
        mensajeErrorNumeroLargo.textContent = 'Enter exactly 16 digits';
        todasLasValidacionesExitosas = false; // Establece la variable en falso si la validación falla
    } else {
        mensajeErrorNumeroLargo.textContent = '';
    }



    // validacion para el nombre de la persona, tiene que ingresar solo letras
    const valorNombre = nombrePersonaInput.value;
    const contieneNumeros = /[0-9]/.test(valorNombre); // Comprueba si contiene números

    if (contieneNumeros) {
        mensajeErrorNombre.textContent = 'Enter only letters (name and surname).';
        todasLasValidacionesExitosas = false; // Establece la variable en falso si la validación falla
    } else {
        mensajeErrorNombre.textContent = '';
    }



    // Validacion para el mes de la persona, tiene que ingresar solo 2 numeros y no pueden ser mayor a 12
    const valorMes = fechaMesInput.value;
    const patronMes = /^(0[1-9]|1[0-2])$/; // Expresión regular para validar el mes

    if (!patronMes.test(valorMes)) {
        mensajeErrorMes.textContent = 'Enter a valid month(01-12).';
        todasLasValidacionesExitosas = false; // Establece la variable en falso si la validación falla
    } else {
        mensajeErrorMes.textContent = '';
    }



    // Validacion para el año de la persona, tiene que ingresar solo 2 numeros y no pueden ser mayor a 99
    const valorAño = fechaAñoInput.value;
    const patronAño = /^(0[1-9]|[0-9][0-9])$/; // Expresión regular para validar el año

    if (!patronAño.test(valorAño)) {
        mensajeErrorAño.textContent = 'Enter a valid year(00-99).';
        todasLasValidacionesExitosas = false; // Establece la variable en falso si la validación falla
    } else {
        mensajeErrorAño.textContent = '';
    }



    // Validacion para el numero trasero de la tarjeta (CVC)
    const valorNumeroTrasero = numeroTraseroInput.value;
    const patronNumeroTrasero = /^\d{3}$/; // Expresión regular para tres dígitos numéricos

    if (!patronNumeroTrasero.test(valorNumeroTrasero)) {
        mensajeErrorNumeroTrasero.textContent = 'Enter 3 numbers.';
        todasLasValidacionesExitosas = false; // Establece la variable en falso si la validación falla
    } else {
        mensajeErrorNumeroTrasero.textContent = '';
    }




    if (todasLasValidacionesExitosas) {
        const containerFormCompleted = document.querySelector(".container-form-completed");
        const form = document.querySelector(".form");
        containerFormCompleted.style.display = "flex"
        form.style.display = "none"
    }
})