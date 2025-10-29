// src/controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';
const JWT_EXPIRES = '7d';

// Registrar novo usuário
exports.register = async (req, res) => {
  try {
    const { email, password, username, full_name } = req.body;

    // Validação básica
    if (!email || !password || !username) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email, password and username are required' 
      });
    }

    // Verificar se usuário já existe
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .or(`email.eq.${email},username.eq.${username}`)
      .single();

    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'Email or username already exists' 
      });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar usuário
    const { data: newUser, error } = await supabase
      .from('users')
      .insert([{
        id: uuidv4(),
        email,
        username: username.toLowerCase(),
        full_name: full_name || username,
        password_hash: hashedPassword,
        created_at: new Date().toISOString()
      }])
      .select('id, email, username, full_name, created_at')
      .single();

    if (error) throw error;

    // Gerar token JWT
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: newUser,
        token
      }
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error registering user',
      error: error.message 
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Buscar usuário
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    
    if (!isValidPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Gerar token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    // Remover senha do objeto de resposta
    delete user.password_hash;

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user,
        token
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error during login',
      error: error.message 
    });
  }
};

// Verificar token
exports.verifyToken = async (req, res) => {
  try {
    const { data: user } = await supabase
      .from('users')
      .select('id, email, username, full_name, avatar_url, bio')
      .eq('id', req.user.userId)
      .single();

    res.json({
      success: true,
      data: { user }
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error verifying token' 
    });
  }
};