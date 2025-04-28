const express = require('express');
const router = express.Router(); // 👈 ESTO es lo que falta
const Usuario = require('../models/usuario');

// Registrar usuario
router.post('/register', async (req, res) => {
  try {
    const { nombre, correo, contrasena, rol } = req.body;
    const nuevoUsuario = new Usuario({ nombre, correo, contrasena, rol });
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registrando usuario' });
  }
});

// Login usuario
router.post('/login', async (req, res) => {
  try {
    const { correo, contrasena } = req.body;
    const usuario = await Usuario.findOne({ correo });

    if (!usuario || usuario.contrasena !== contrasena) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({ message: 'Login exitoso', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en login' });
  }
});

module.exports = router;
