# coderhouse-backend-proyecto-final
Proyecto final para el curso de Backend de Coderhouse

# Proyecto subido a Heroku:
https://backend-proyecto-final-pinto.herokuapp.com/

Para probar el código:

```bash
# Clonar el repositorio
$ git clone https://github.com/emmapinto/coderhouse-backend-proyecto-final

# Instalar dependencias y librerias utilizadas
$ npm install

# Crear un archivo .env utilizando como base el .env.example y completar las variables de entorno correspondientes (necesarias para BD de Mongo, Nodemailer y Twilio).

# Para ingresar a la "Vista de administrador" y poder agregar/editar productos, completar la variable de entorno ADMIN_USER con el mail al que se desee otorgar acceso.

# Correr el servidor
$ npm run start

# Correr con nodemon
$ npm run dev

# Tambien se pueden usar constantes globales:
  # ADMIN_EMAIL es el correo donde se enviarán los avisos de registro y orden
  # ADMIN_PHONE el celular donde se enviarán los whatsapp de aviso de orden
  # puerto indica el puerto en el que correrá el servidor (8080 por defecto)
  # modo indica si el servidor iniciará en modo cluster o fork (fork por defecto)

$ [ADMIN_EMAIL={email}] [ADMIN_PHONE={telefono}] node index.js --puerto={puerto} [--modo=cluster] [--useCloudDB=true]

```

El proyecto final incluye:
- Separación de capa de ruteo, middleware, controladores, lógica y persistencia
- Se usa DOT/ENV para variables de entorno
- Se hace uso de DTOs de salida para estandarizar la información
- Uso de factories para permitir la escalabilidad
- Accediendo en modo admin, se permite agregar y editar productos
- Cuando se registra un nuevo usuario, se envia un mail al admin con los datos del nuevo usuario
- Cuando se completa la orden de compra se envia un sms al cliente y un mail al admin con los el usuario y los productos ordenados
- Manejo de errores
- Se implementa handlebars para el renderizado de las paginas

