const Usuario = require("../models/usuario");

// Iniciar sesión
const loginUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });

    if (!usuario || usuario.contrasena !== contrasena) {
      return res.status(400).json({ mensaje: "Correo o contraseña incorrectos" });
    }

    // Redirigir a diferentes páginas según el rol del usuario
    res.status(200).json({
      mensaje: "Login exitoso",
      nombre: usuario.nombre,
      rol: usuario.rol,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};

// Registro
const registrarUsuario = async (req, res) => {
  const { nombre, correo, contrasena, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ correo });

    if (usuarioExistente) {
      return res.status(400).json({ mensaje: "El correo ya está registrado." });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contrasena,
      rol,
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: "Usuario registrado exitosamente." });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};

module.exports = { loginUsuario, registrarUsuario };
