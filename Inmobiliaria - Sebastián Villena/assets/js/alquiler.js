import propiedadesAlquiler from './data/propiedades_alquiler.js';

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId);

    const propiedadesIndex = propiedades

    propiedadesIndex.forEach((propiedad) => {
        const { nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets } = propiedad;

        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `  
        
        <div class="card">
                        <img src="${src}"
                            class="card-img-top" alt="Imagen del departamento" />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${nombre}
                            </h5>
                            <p class="card-text">
                                ${descripcion}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${ubicacion}
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${habitaciones}
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${costo}</p>
                            <p class="${smoke ? 'text-success' : 'text-danger'}">
                            <i class="fas ${smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                            ${smoke ? 'Permitido fumar' : 'No se permite fumar'}
                            </p>
                            <p class="${pets ? 'text-success' : 'text-danger'}">
                            <i class="${pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i>
                            ${pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                            </p>
                        </div>
                    </div>
        `;
        container.appendChild(card);
    });
};

const init = () => {
    mostrarPropiedades(propiedadesAlquiler, "propiedadesAlquilerContainer")
}
window.addEventListener('load', init);