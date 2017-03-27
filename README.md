## Ejemplo nodejs + express. Servidor de un HTML estatico (Podria ser contenido DEV o PROD de cualquier aplicacion)

Se ha creado el servidor nodejs con <b>node init</b>.

Se modifica el fichero <b>package.json</b> para cargar la dependencia de express

Se ejecuta <b>npm install</b> para descargar node_modules (express...)

Se crea un fichero HTML muy simple dentro de carpeta: myapp (contenido estatico HTML para ser ejecutado por servidor nodejs)

Se crea index.js con las instrucciones necesarias para que lance myapp en el servidor localhost:3001

Se ejecuta con <b>node index.js</b> la aplicación que estará corriendo en localhost:3001 en este caso.
