const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Nombre Descriptivo de variables
const nombre = document.querySelector('#name'); // Selector de clase "."
const blog = document.querySelector('#blog'); // Selector de clase "."
const locacion = document.querySelector('#location');
const avatar = document.querySelector('#avatar'); // Elemento avatar

async function displayUser(username) { // Declarar la keyword ASYNC
   nombre.textContent = 'cargando...';
   // Se consume la promesa FETCH de manera adecuada
   await fetch(`${usersEndpoint}/${username}`)
   .then(response => {
    return response.json();
   })
   .then(data => {
    avatar.innerHTML = `<img src="${data.avatar_url}" height="200px">`
    nombre.textContent = `${data.name}`;
    blog.textContent = `${data.blog}`;
    locacion.textContent = `${data.location}`;
   })
   .catch(handleError);
}

function handleError(err) {
   console.log('OH NO!');
   console.log(err);
   nombre.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);