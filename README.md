API de Citas Celebres de Tecnologia

Esta es una interfaz de programacion de aplicaciones (API) publica de tipo RESTful, desarrollada sobre el entorno de ejecucion Node.js utilizando el framework Express. Su proposito es servir una coleccion de reflexiones y citas de figuras prominentes en la historia de la informatica y el desarrollo de software.

La API ha sido configurada para permitir el acceso libre a desarrolladores externos que deseen integrar este contenido en sus propios proyectos, ya sean sitios web, aplicaciones moviles o paneles informativos.

Despliegue en Produccion

El servicio se encuentra operativo y puede ser consultado de forma publica a traves de la siguiente direccion:

https://ut-3-actividad-pr-ctica-creemos-una.vercel.app/

Tecnologias Utilizadas

Node.js: Entorno de ejecucion del lado del servidor.

Express: Framework para la gestion de rutas y peticiones HTTP.

CORS: Middleware para habilitar el consumo de datos desde cualquier dominio (Cross-Origin Resource Sharing).

Vercel: Plataforma para el despliegue y alojamiento en la nube.

Puntos de Acceso (Endpoints)

Obtener el listado completo de citas

Este endpoint devuelve un objeto JSON que contiene la coleccion completa de citas, incluyendo el autor y el año de la declaracion.

URL: /api/quotes

Metodo: GET

Ejemplo de respuesta:

[
  {
    "id": 1,
    "quote": "Los programas deben ser escritos para que las personas los lean, y solo incidentalmente para que las maquinas los ejecuten.",
    "author": "Harold Abelson",
    "year": 1984
  }
]


Guia de Consumo

Para integrar estos datos en un proyecto frontend mediante JavaScript, se puede utilizar el estandar fetch de la siguiente manera:

fetch('[https://ut-3-actividad-pr-ctica-creemos-una.vercel.app/api/quotes](https://ut-3-actividad-pr-ctica-creemos-una.vercel.app/api/quotes)')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error al consultar la API:', error));


Configuracion en el Entorno Local

Descargue o clone el repositorio.

Instale las dependencias necesarias con npm install.

Inicie el servicio con npm start.

Acceda localmente en http://localhost:3000.

Desarrollado para la practica UT3 - Despliegue de Aplicaciones Web.