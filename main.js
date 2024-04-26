const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const id = document.getElementById('id').value.trim()
    const name = document.getElementById('name').value.trim()
    const surname = document.getElementById('surname').value.trim()
    const datebirthday = document.getElementById('datebirthday').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const address = document.getElementById('address').value.trim()

    // Validación de cédula
    if (id.length !== 10 || isNaN(id)) {
        alert('Por favor ingrese una cédula válida de 10 dígitos numéricos.')
        return
    }

    // Validación de nombres y apellidos
    if (!name || !surname) {
        alert('Por favor ingrese tanto nombres como apellidos.')
        return
    }

    // Validación de fecha de nacimiento
    const today = new Date()
    const inputDate = new Date(datebirthday)
    if (inputDate >= today) {
        alert('La fecha de nacimiento debe ser anterior a la fecha actual.')
        return
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert('Por favor ingrese un correo electrónico válido.')
        return
    }

    // Validación de número de teléfono
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
        alert('Por favor ingrese un número de teléfono válido de 10 dígitos numéricos.')
        return
    }

    // Si todas las validaciones son exitosas, puedes enviar el formulario aquí
    alert('Formulario enviado con éxito!')
    
})
