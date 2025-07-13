# Tripleten web_project_around_express

Proyecto WEB PROJECT AROUND WITH EXPRESS

Este es un proyecto web basado en Express.js que utiliza un archivo JSON para almacenar información de usuarios. El archivo JSON se encuentra en la ruta `data/users.json`. El proyecto tiene una ruta `/users/:_id` que permite obtener información de un usuario específico por su ID. Si el usuario no se encuentra, se devuelve un mensaje de error 404.
Tambien utiliza un archivo JSON para almacenar informacion de las tarjetas de la web. El archivo JSON se encuentra en la ruta `data/tarjetas.json`. El proyecto tiene una ruta `/cards/:_id` que permite obtener información de una tarjeta específica por su ID. Si la tarjeta no se encuentra, se devuelve un mensaje de error 404.

Se usan las siguientes dependencias:
- Express.js
- JSON.parse
- fs.readFileSync
