document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()

    // Obtener los valores de los campos
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const datebirthday = document.getElementById('datebirthday').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const address = document.getElementById('address').value

    // Validar campos (ejemplo básico)
    if (
        id.trim() === '' ||
        name.trim() === '' ||
        surname.trim() === '' ||
        datebirthday.trim() === '' ||
        email.trim() === '' ||
        phone.trim() === '' ||
        address.trim() === ''
    ) {
        alert('Por favor, complete todos los campos.')
        return
    }

    // Crear objeto de cliente
    const client = {
        id: id,
        name: name,
        surname: surname,
        datebirthday: datebirthday,
        email: email,
        phone: phone,
        address: address,
    }

    // Obtener clientes almacenados previamente
    let clients = JSON.parse(localStorage.getItem('clients')) || []

    // Añadir el nuevo cliente a la lista
    clients.push(client)

    // Guardar la lista de clientes actualizada en el Local Storage
    localStorage.setItem('clients', JSON.stringify(clients))

    // Confirmación de registro
    alert('Cliente registrado con éxito!')

    // Limpiar el formulario
    document.getElementById('form').reset()
})
