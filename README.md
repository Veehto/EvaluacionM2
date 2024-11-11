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

* Bootstrap package: Uso del paquete de Bootstrap para agilizar e unificar la implementación del código. Se ocupan  principalmente 4 componentes: Nav Bar, Modal, Form y Carousel. También se hacen modificaciones personalizadas a algunos estilos de colores de Bootstrap, con la finalidad de ajustarse a la imagen e identidad de la clínica.


## Implementación de JavaScript

Se elige implementar JavaScript al proyecto en curso por ser la opción más pertinente considerando la mano de obra, tiempo a disposición del equipo, y familiaridad con el lenguaje. 
Otra razón importante es que el por las necesidades de la institución que precisa una página web, ésta necesitará tener una funcionalidad que permita atender las solicitudes de los visitantes 
y posibles futuros pacientes, sin olvidar también que el internet de hoy en día llama a la presencia de aplicaciones web, más que a la implementación de páginas estáticas, 
a menos que solamente las características de éstas últimas satisfagan las necesidades actuales del cliente.


## Para Abrir el proyecto

### Visitar Repositorio
* https://github.com/Veehto/EvaluacionM2/tree/Bootstrap-Sass-BEM
* Asegurarse de que descargar proyecto desde rama **Bootstrap-Sass-BEM**.

### Clonar Repositorio desde GItHub con CLI
```
git clone --branch Bootstrap-Sass-BEM https://github.com/Veehto/EvaluacionM2.git TU_CARPETA
code .
```

### Abrir el Proyecto Localmente en un Navegador

* Descomprimir el archivo .zip que incluye todos los archivos necesarios para abrir la página.
* Una vez descomprimido, abrir el archivo index.html con el navegador web de preferencia.


## Estructura del proyecto:
```
.
├── assets/
│   ├── css/
│   │   └── styles.css (vanilla css, antes de aplicar BEM y Sass.)
│   └── images/
│       └── (todas las imágenes)
├── node_modules (gitignored)
├── sass/
│   ├── abstracts/
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _fonts.scss
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
│   ├── themes
│   ├── vendors/
│   │   └── _bootstrap.scss
│   ├── main.scss
│   ├── style.css
│   └── style.css.map
├── .gitignore
├── contact.html
├── index.html
├── medics.html
├── package-lock.json
├── package.json
└── README.md

```