# Backend - Soñar EPS

Bienvenido al proyecto **Backend** de **Soñar EPS**. Este backend está desarrollado con **Node.js**, **Express** y **MongoDB** para la gestión de citas médicas, autenticación de usuarios y demás funcionalidades relacionadas con la plataforma Soñar EPS.

## Requisitos

Antes de comenzar con la configuración del backend, asegúrate de tener instalado lo siguiente:

1. **Node.js** (Recomendado: LTS)  
   Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/).

2. **MongoDB** (si usas MongoDB local)  
   Asegúrate de tener MongoDB corriendo en tu máquina local o usar una base de datos en la nube. Si usas MongoDB localmente, debe estar en el puerto `27017`.

## Instalación

### 1. Clona el Repositorio

Abre tu terminal y clona el repositorio del backend:

```bash
git clone https://github.com/tu-usuario/sonar-eps-backend.git
cd sonar-eps-backend



Endpoints Principales
1. POST /api/auth/login
Autentica a un usuario y genera un token JWT.

Parámetros:

correo: Correo electrónico del usuario.

contrasena: Contraseña del usuario.

Respuesta Exitosa:

Un token JWT que el frontend usará para las futuras peticiones.

2. POST /api/auth/register
Registra un nuevo usuario en el sistema.

Parámetros:

nombre: Nombre completo del usuario.

correo: Correo electrónico del usuario.

contrasena: Contraseña del usuario.

rol: Rol del usuario (puede ser usuario o funcionario).

3. GET /api/citas
Consulta todas las citas médicas existentes.

Respuesta:

Lista de citas agendadas.

4. POST /api/citas
Agendar una nueva cita médica.

Parámetros:

paciente: Nombre del paciente.

fecha: Fecha de la cita.

hora: Hora de la cita.

especialidad: Especialidad médica.

5. PUT /api/citas/:id
Modificar una cita existente.

Parámetros:

Los mismos que para crear una cita, pero con el ID de la cita que se desea modificar.

6. DELETE /api/citas/:id
Eliminar una cita.

Conexión a MongoDB
La base de datos de MongoDB se conecta mediante el URI configurado en el archivo .env (DB_URI). Asegúrate de que MongoDB esté corriendo en tu máquina o que tengas una instancia de MongoDB en la nube.

Estructura del Proyecto:

src/controllers: Controladores que gestionan las peticiones HTTP de autenticación y citas.

src/models: Modelos de datos para MongoDB (por ejemplo, Usuario, Cita).

src/routes: Rutas para gestionar las peticiones HTTP y asignarlas a los controladores.

src/middleware: Middleware para la autenticación con JWT y validación de datos.

