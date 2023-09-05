import React, { useState, useContext } from 'react';
import Layout from '../../Components/Layout';
import Register from '../../Components/Register';
import { ShoppingCartContext } from '../../Context';


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Accede al contexto de ShoppingCart para guardar el token de autenticación
  const context = useContext(ShoppingCartContext);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Datos del usuario para iniciar sesión
    const userData = {
      username,
      password,
    };

    // Endpoint de autenticación
    const loginEndpoint = 'https://fakestoreapi.com/auth/login';

    // Configuración de la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    try {
      // Realizar la solicitud de inicio de sesión
      const response = await fetch(loginEndpoint, requestOptions);
      if (!response.ok) {
        throw new Error('No se pudo iniciar sesión');
      }

      const data = await response.json();

      // Verificar si se obtuvo un token de autenticación
      if (data.token) {
        console.log('Inicio de sesión exitoso');
        console.log('Token de autenticación:', data.token);

        // Guarda el token en el contexto de ShoppingCart
        context.setAuthToken(data.token);

        // Redirige a otra página o realiza alguna acción después del inicio de sesión
        // Puedes usar react-router-dom para redirigir a una página específica, por ejemplo.
      } else {
        console.error('No se pudo obtener el token de autenticación');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl mb-4">Login</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              {/* Botón para abrir el formulario de registro */}
              <button onClick={handleRegisterClick}>Register</button>
            </div>
          </form>
        </div>
      </div>
      {/* Mostrar el formulario de registro como un modal si showRegisterModal es verdadero */}
      {showRegisterModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Agrega el formulario de registro aquí */}
            <Register />
            <button onClick={() => setShowRegisterModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default SignIn;
