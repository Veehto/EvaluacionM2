# Clínica Misión Real
========================================

El proposito del proyecto es brindar una solucion a la Clínica Misión Real para solucionar su falta de presencia en línea. Para esto se ha creado una página web estática y responsiva que refleja la identidad del hospital, con información sobre los servicios médicos, el equipo médico, la ubicación de la clínica, redes sociales para contactarse y conectar de más formas, y con una sección de testimonios de los mismos paciente para demostrar que la preferencia del público.

### Secciones y Características de la página Principal:
* Menú de navegación para acceder a todas las secciones de página.
* Bienvenida con el nombre de la clínica, botón para reservar hora con un profesional, y foto de la clínica.
* Misión y visión de el establecimiento de salud.
* Servicios prestador por la clínica.
* Testimonios de pacientes que se han atendido aquí y que están satisfechos con la experiencia recibida.

### Página del Equipo Médico
* Presentar al equipo de médicos, representantes de las especialidades que ofrece el establecimiento.

### Página de Contacto
* Formulario de contacto donde se ingresa el nombre, correo electrónico, asunto y mensaje.


## Especificaciones Técnicas
* Media Queries: Se implementaron puntos de quebre para aplicar cambios a la página dependiendo del tamaño de la pantalla, esto permite una mejor visibilidad en dispositivos de escritorio, tabletas y celulares.

* Implementación Sass: Se implementa el preprocesador Sass para modularizar los estilos aplicados y hacer más llevadero futuras modificaciones. Se usa la arquitectura 7-1 para organizar los archivos parciles dentro de la carpeta sass/, el archivo main.scss importa todos los parciales.

* Metodología BEM: También se cambia la convención de nombres de clases en las guías de estilo a BEM, para factorizar las reglas de estilo, mejorando la comprensión del código y si reutilización.


## Para Abrir el proyecto

### Visitar Repositorio
* https://github.com/Veehto/EvaluacionM2/tree/BEM-Sass-branch
* Asegurarse de que descargar proyecto desde rama **BEM-Sass-branch**.

### Clonar Repositorio desde GItHub con CLI
```
git clone --branch BEM-Sass-branch https://github.com/Veehto/EvaluacionM2.git TU_CARPETA
code .
```

### Abrir el Proyecto Localmente en un Navegador

* Descomprimir el archivo .zip que incluye todos los archivos necesarios para abrir la página.
* Una vez descomprimido, abrir el archivo index.html con el navegador web de preferencia.


## Estructura del proyecto:

.Evaluación M2/
├── assets/
│   ├── css/
│   │   └── styles.css (vanilla css, antes de aplicar BEM y Sass.)
│   └── images/
│       └── (todas las imágenes.)
├── sass/
│   ├── abstracts/
│   │   └── _variables.scss
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _components.scss
│   │   ├── _carousel.scss
│   │   └── _welcome-banner.scss
│   ├── layout/
│   │   ├── _footer.scss
│   │   ├── _forms.scss
│   │   ├── _header.scss
│   │   ├── _location.scss
│   │   └── _navigation.scss
│   ├── pages/
│   │   ├── _contact.scss
│   │   ├── _index.scss
│   │   └── _medics.scss
│   ├── themes/ (vacía)
│   ├── vendors/
│   │   └── _bootstrap.scss
│   ├── main.scss
│   ├── style.css
│   └── style.css.map
├── contact.html
├── index.html
├── medics.html
└── README.md
