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
## CURRENT BRANCH NUEVO Implementación React
* Esta branch del proyecto explora la implementación de React.js para la página web de la clínica, con el objectivo de desarrollar una aplicación web interactiva y eficiente. Se crean componentes reutilizables para distintas secciones de la web del hospital, usando JSX para renderizar datos y manejar el flujo de información con props. También se utilizan Hooks (como useState y useEffect) y formularios para manejar la interacción del usuario. Se crean 3 componentes principales:
    - **DoctorCard**: Muestra la información de un doctor (nombre, especialidad, años de experiencia). Se anida en otro componente padre DoctorList.
    - **ServiceList**: Lista los servicios médicos disponibles en el hospital. Incluye un componente hijo Service, que representa cada list item.
    - **AppointmentForm**: Un formulario para que los usuarios agenden una cita con un doctor.

## Para Abrir el proyecto

### Visitar Repositorio
* https://github.com/Veehto/EvaluacionM2/tree/React-branch
* Asegurarse de que descargar proyecto desde rama **React-branch**.

### Clonar Repositorio desde GitHub con CLI
```
git clone --branch React-branch https://github.com/Veehto/EvaluacionM2.git TU_CARPETA
code .
```

### Intalar paquetes necesarios con npm y montar el servidor local
* Dentro de la carpeta de trabajo:
```
npm install
npm run dev
```
* Copiar la URL y pegar en el buscador del explorador web, o bien escribir en la consola la letra 'o' + ENTER, lo que abrirá el explorador web por defecto con la URL del servidor local.

## Estructura del proyecto:
```
.
├── node_modules (gitignored)
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── (all images)
│   │   └── react.svg
│   ├── components/
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorList.jsx
│   │   ├── Service.jsx
│   │   └── ServiceList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── appointments.json
├── doctors.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── services.json
└── vite.config.js

```

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## PREVIOUS BRANCHES Especificaciones Técnicas PASADAS
**IMPORTANTE**: Desde este punto, se encuentran las implementaciones anteriores del proyecto presentes en las otras branches del repositorio.

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

### Uso de Objetos JSON
* Se crea un nuevo archivo .json que funciona como la base de datos de los doctores de la cínica. El archivo se constituye de un arreglo de objetos que representa cada doctor, y las claves de cada objeto son la información de cada doctor (nombre, especialidad, experiencia, disponibilidad, info. de contacto, etc.).

* Se usa el archivo .json en el archivo JavaScript principal por medio de la API fetch, y una vez que la promesa se cumple se manipula el archivo para mostrar su información en la página.
    - **clonación**: se crea un copia de un elemento del objeto JSON que contiene los doctores y lo modifica. En este caso, se extrae un doctor del archivo .json usando el spread operator y se modifica esta copia para cambiar la disponibilidad del doctor.
    - **Merge**: fusiona el contenido de dos objetos JSON en uno nuevo. Esto lo hace tomando el objeto JSON de doctores y otro objeto llamado "services", se toman los contenidos de estos usando el spread operator, y lo almacena en una variable nueva.
    - **Recorrido**: Se recorre el objeto JSON de doctores para mostrar estos en la página al usuario de diversas formas: 
        - en el dropdown menu en la sección para reservar hora, al seleccionar una especialidad, se recorre el objeto JSON doctores y se compara con la elección de la especialidad para mostrar en otro dropdown menu los doctores para cada especialidad.
        - al seleccionar un doctor, se recorre nuevamente el objeto para obtener la información de este doctor y desplegarla en una tarjeta que incluye su foto, nombre, especialidad y horario de atención.
        - dentro del archivo JavaScript se recorre el objeto JSON de doctores aplicando a cada elemento el método estático del objeto JSON stringify() y se imprime a la consola los objetos en formato JSON.

### Uso de Estructuras de Datos
* **Arrays (Arreglos)**: se implementa un arreglo nuevo que va a almacenar distintos objetos que representan doctores, y este arreglo se almacena en una variable. El arreglo representa una lista de doctores. A este arreglo se le agregan los doctores usando el método push(), se hace una búsqueda usando el método find() para encontrar el doctor con menos años de experiencia, y se elimina un doctor de al final del arreglo usando el método pop().

* **Stacks (Pilas)**: Se simula una pila utilizando un arreglo, esto para simular cómo sería cuando los usuarios tienen más de una reserva en la clínica. Como los stacks funcionan de forma LIFO, se utiliza el método pop() para sacar la última cita en el arreglo e almacenarla en una variable. Después se imprime a la consola para mostrar la siguiente cita al doctor del paciente.

* **Queues (Colas)**: Se simula una cola utilizando un arreglo, esto para simular el orden de llegada de los pacientes. Como el orden de ejecución de las queues es FIFO, se utiliza el método shift() para sacar el primer elemento del arreglo y almacenarlo en una variable. Después se imprime a la consola para mostrar qué paciente es el siguiente.

### Uso de Algoritmos
* **Algoritmo de Búsqueda**: Se aplica el modelo de algoritmo lineal para recorrer el objeto JSON de doctores para encontrar un doctor en específico, filtrando por medio del nombre que es el parámetro que se le da a la función de búsqueda que aplica el algoritmo. La complejidad del algoritmo es O(n), ya que la búsqueda lineal se ejecuta en tiempo lineal y realiza un máximo de n comparaciones, donde n es la longitud de la lista. El tiempo de ejecución aumenta, como máximo, de forma lineal con el tamaño de los elementos presentes en la lista.

* **Algoritmo de Ordenamiento**: Se aplica el algoritmo de ordenamiento bubble sort, ya que se apunta a ordenar a los doctores de forma descendente con respecto a sus años de experiencia, esto lo hace comparando pares de elementos adyacentes y los intercambia si están en el orden correcto. La complejidad del algoritmo bubble sort tiende a ser cuadrática O(n^2) ya que tenemos que recorrer la el arreglo tantas veces como pares haya.

### Uso de Programación Funcional
* Es un paradigma de programación en JavaScript que apunta a trabajar con funciones de primera clase (las funciones pueden asignarse a variables, pasarse y referenciarse como argumentos y también retornadas por otras funciones). Se concentra en usar funciones puras, la inmutabilidad y la composición de funciones. En este proyecto se apunta a usar un enfoque más declarativo en distintas aplicaciones:
    - **curryng**: permite convertir una función con múltiples argumentos en una secuencia de funciones que reciben un argumento cada vez. En el Proyecto se utiliza para calcular el total a pagar de un paciente, sumando las citas al doctor que tenga acumuladas.
    - **Funciones Flecha**: proporcionan una sintaxis más concisa y manejan mejor el contexto de this en JavaScript.
    - **Recursión**: un patrón común en el que una función se llama a sí misma para resolver problemas más pequeños. Se utiliza para calcular las horas totales en una semana realizadas por un doctor en específico.
    - **Composición de Funciones**: permite encadenar funciones para crear nuevas funcionalidades. Se utiliza para calcular el precio después de aplicar un descuento en porcentaje.

### Uso de Programación Orientada a Eventos (EOP) y Asincronía
* Este paradigma se basa en la respuesta a eventos, lo que permite a las aplicaciones ser reactivas. Los desarrolladores pueden usar listeners para capturar eventos y desencadenar funciones específicas.

* La Asincronía en JavaScript usa un modelo basado en eventos, lo que permite realizar múltiples tareas sin bloquear la ejecución. Se utiliza para buscar el archivo JSON en el proyecto e imprimirlo en la consola. En el proyecto se utiliza la sintaxis async/await para simplificar el manejo de código asincrónico, también evita el anidamiento excesivo de callbacks.

### Uso de Programación Orientada a Objetos (OOP)
* es un paradigma que organiza el código en torno a objetos, que representan entidades
del mundo real. Los objetos tienen propiedades (datos) y métodos (funciones). En el proyecto se ponen en práctica distintos principios en el uso de Clases:
    - **Herencia**: Permite que las clases hereden características de otras. En el proyecto se crea una Clase padre Doctor y se heredan propiedades para la clase hijo Surgeon.
    - **Encapsulación**: Esconde detalles internos y exponer solo lo necesario. Pone cierta  capa de verificación a criterio del desarrollador, tratando de guiar el cambio de propiedades dentro de ciertas condiciones. En el proyecto se aplica para dar una capa de verificación al fijar los años de experiencia de los doctores, cuidando que siempre sean números positivos (mayores a 0).
    - **Polimorfismo**: Permitir que los métodos se comporten de manera diferente según el contexto.
