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
* **Media Queries**: Se implementaron puntos de quebre para aplicar cambios a la página dependiendo del tamaño de la pantalla, esto permite una mejor visibilidad en dispositivos de escritorio, tabletas y celulares.

* **Implementación Sass**: Se implementa el preprocesador Sass para modularizar los estilos aplicados y hacer más llevadero futuras modificaciones. Se usa la arquitectura 7-1 para organizar los archivos parciles dentro de la carpeta sass/, el archivo main.scss importa todos los parciales.

* **Metodología BEM**: También se cambia la convención de nombres de clases en las guías de estilo a BEM, para factorizar las reglas de estilo, mejorando la comprensión del código y si reutilización.

* **Bootstrap package**: Uso del paquete de Bootstrap para agilizar e unificar la implementación del código. Se ocupan  principalmente 4 componentes: Nav Bar, Modal, Form y Carousel. También se hacen modificaciones personalizadas a algunos estilos de colores de Bootstrap, con la finalidad de ajustarse a la imagen e identidad de la clínica.


## Implementación de JavaScript
Se elige implementar JavaScript al proyecto en curso por ser la opción más pertinente considerando la mano de obra, tiempo a disposición del equipo, y familiaridad con el lenguaje. 
Otra razón importante es que el por las necesidades de la institución que precisa una página web, ésta necesitará tener una funcionalidad que permita atender las solicitudes de los visitantes y posibles futuros pacientes, sin olvidar también que el internet de hoy en día llama a la presencia de aplicaciones web, más que a la implementación de páginas estáticas, 
a menos que solamente las características de éstas últimas satisfagan las necesidades actuales del cliente.

* **Página de contactos**: Se implementan prompts para solicitar información al usuario (nombre, email, teléfono) y luego se despliega una alert para mostrar la información recién ingresada al usuario. Para evitar que el usuario omita un campo o ingrese caracteres que no corresponden (e.g., ingresar letras en el campo de teléfono), se implementa validación de datos para cada campo:
    - nombre: validación por medio de regex, asegura que sólo se ingresen letras mayúsculas o minúsculas.
    - email: asegura que el correo ingresado contenga @, .com o .cl.
    - teléfono: asegura que sólo se ingresen números.

* **Sección para Agendar Hora**: Al apretar el botón para Agendar Hora, se despliega un Bootstrap modal pop-up para elegir el tipo de consulta, tipo de ID que el usuario quiere usar, y un menú desplegable para elegir especialidad. Al clickear una especialidad, se genera dinámicamente un nuevo menú despegable con los doctores disponibles para esa especialidad. Se implementa el uso de la función fetch para obtener una lista de doctores en un archivo .json, después de tener los datos estos se convierten a un objeto JSON y se usan junto con manipulación del DOM para obtener la elección del usuario en la especialidad, que se compara iterando la lista de doctores con la key "specialty" que cada doctor tiene. Cuando encuentra coincidencias, toma los nombres de los doctores y los muestra en el nuevo menú desplegable generado dinámicamente.

### Arquitectura del Lenguaje JavaScript
* **Event Loop**: Es como el código puede ser realmente no bloqueante (non-blocking) y pasar a otras tareas mientras espera que se completen las operaciones asincrónicas. Así es como JavaScript puede emular la concurrencia (dos o más procedimientos al mismo tiempo). Las partes que forman el event loop son:
    - **Call Stack**: hace un seguimiento de qué función se está ejecutando actualmente. Cuando invoca una función, se agrega un frame al stack. Los frames conectan los argumentos de esa función y las variables locales heap. Los frames ingresan al stack en orden LIFO (último en entrar, primero en salir). La función que se ejecuta en un momento dado está en la parte superior del stack. Existe un frame global o anónimo que cuando se inicia un programa por primera vez, el contexto de ejecución global se agrega al call stack, que contiene la variable global y el entorno léxico.
    - **Heap**: El heap es un bloque de memoria donde almacenamos objetos de manera desordenada. Las variables y objetos de JavaScript (como arrays, objects o funciones) que están en uso en un momento se almacenan en el heap.
    - **Event Queue**: Es una lista de mensajes correspondientes a funciones que esperan ser procesadas. Estos mensajes ingresan al event queue desde fuentes como web APIs o funciones asincrónicas que se llamaron y devuelven eventos adicionales para que el call stack los gestione. Los mensajes ingresan al queue en orden FIFO (primero en entrar, primero en salir). No se ejecuta ningún código en el event queue; sino que contiene funciones que esperan ser agregadas nuevamente al stack.
    - **Event Loop**: Los mensajes que están esperando en el event queue para ser agregados nuevamente al call stack se agregan nuevamente a través del event loop. Cuando el call stack está vacío, si hay algo en el event queue, el event loop puede agregarlos de a uno al call stack para su ejecución.

### Variables y Scope
* **var**: Para declarar variables de las que se puede reasignar su valor. Su scope es de función, un tipo de scope local, que hace la variable disponible en cualquier parte de una función. Estas variables son suceptibles a hoisting, que es cuando la declaración de la variable se separa de su inicialización y se va al inicio de su scope (al inicio de la función a la que pertenezca o al inicio del scope global). Esto puede crear problemas al usar **var** en loops o en condiciones if, ya que el valor puede filtrarse a otras secciones de código.

* **let**: Introducida en ES6, sirve para declarar variables de las que se puede reasignar su valor. Su scope es de bloque, un tipo de scope local, que hace la variable disponible en sólo dentro del bloque {}.
* **const**: Introducida en ES6, sirve para declarar variables de las que no se puede reasignar su valor. Estas tiene que ser inicializadas con un valor al momento de ser declaradas.

### Uso de debugger
* La instrucción debugger invoca cualquier función de depuración disponible, como por ejemplo, la configuración de un punto de interrupción. Cuando se invoca el debugger, la ejecución se detiene en la instrucción del depurador. Es como un punto de interrupción en el código fuente del script. Si no hay ninguna función de depuración disponible, esta instrucción no tiene ningún efecto.

### Uso de Prompts y Validación de Datos
* El uso de la función prompt despliega una ventana pop-up en el navegador visible para el usuario y que este puede responder con información. La respuesta se puede guardar en una variable para pasar por distintos métodos de validación y procesación de la información facilitada por el usuario. En la sección **Página de Contactos** se detallan las validaciones aplicadas en este proyecto.

### Uso de Operadores Lógicos, de Comparación, de Incremento, y de Negación
* **&&**: el operador "and" chequea si dos expresiones evalúan como verdaderas (truthy) o como Boolean true. Se puede usar dentro de condiciones if, else if.
* **||**: el operador "or" chequea si una expresió evalúan como verdaderas (truthy) o como Boolean true. Se puede usar dentro de condiciones if, else if. Importante destacar que las expresiones con || siempre evalúan de izquierda a derecha, y si la expresión de la izquierda se evalúa como verdadera, la de la derecha se ignorará.
* **===**: Comparación de identidad o estricta, evalúa si coincide en tipo y valor
* **==**: comparación, ve si hay coincidencia en valor.
* **<**: menor que.
* **<=**: menor o igual que.
* **>**: mayor que.
* **>=**: mayor o igual que.
* **!==**: distinto o no igual que.
* **!**: negación o operador bang, revierte o niega el valor de un Boolean.

### Uso de try/catch
* La sentencia try siempre comienza con un bloque try. Luego, debe estar presente un bloque catch o un bloque finally. También es posible tener bloques catch y finally. Esto nos da tres formas para la sentencia try. Un bloque catch contiene instrucciones que especifican qué hacer si se lanza una excepción en el bloque try. Si alguna instrucción dentro del bloque try (o en una función llamada desde dentro del bloque try) lanza una excepción, el control se transfiere inmediatamente al bloque catch. Si no se lanza ninguna excepción en el bloque try, se omite el bloque catch. El bloque finally siempre se ejecutará antes de que el flujo de control salga de la construcción try...catch...finally. Siempre se ejecuta, independientemente de si se generó o detectó una excepción.


## Para Abrir el proyecto

### Visitar Repositorio
* https://github.com/Veehto/EvaluacionM2/tree/JS-branch
* Asegurarse de que descargar proyecto desde rama **JS-branch**.

### Clonar Repositorio desde GItHub con CLI
```
git clone --branch JS-branch https://github.com/Veehto/EvaluacionM2.git TU_CARPETA
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
├── js/
│   ├── contact.js
│   └── load-list.js
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
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _carousel.scss
│   │   ├── _narrative.scss
│   │   └── _welcome-banner.scss
│   ├── layout/
│   │   ├── _footer.scss
│   │   ├── _forms.scss
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
├── doctors.json
├── index.html
├── medics.html
├── package-lock.json
├── package.json
└── README.md

```