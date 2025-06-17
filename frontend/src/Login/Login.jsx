// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import img from './login.jpg';
// import logo from '..//assets/logo22.gif'; // Import your logo image

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         window.alert('Successfully logged in!');
//         localStorage.setItem('token', data.token); // Store the token in local storage
//         navigate('/Home'); // Redirect to another page (e.g., dashboard)
//       } else {
//         setError(data.errors); // Display errors if any
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-section">
//         <div className="login-image">
//           <img src={img} alt="Login Visual" />
//         </div>
//         <div className="login-form">
//           <div className="login-logo-container">
//             <img src={logo} alt="Logo" className="login-logo" />
//           </div>
//           <h2 className='login-h2'>Login</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="login-input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="login-input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="forgot-password">
//               <Link to='/ForgetPassword'>Forgot password?</Link>
//             </div>
//             <button type="submit" className="login-page-button">Login</button>
//           </form>
//           <div className="signup-prompt">
//             Don't have an account? <Link to='/signup'> Sign up </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'; // Import jwtDecode as a named import
// import './Login.css';
// import img from './login.jpg';
// import logo from '../assets/logo22.gif'; // Import your logo image

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         window.alert('Successfully logged in!');
//         const token = data.token;

//         // Store the token in localStorage
//         localStorage.setItem('token', token);

//         // Decode the token to extract user ID
//         const decodedToken = jwt_decode(token);
//         const userId = decodedToken.user.id; // Access the user ID from token

//         // Store the user ID in localStorage
//         localStorage.setItem('userId', userId);

//         // Redirect to another page (e.g., Home or Dashboard)
//         navigate('/Home');
//       } else {
//         setError(data.errors); // Display errors if any
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-section">
//         <div className="login-image">
//           <img src={img} alt="Login Visual" />
//         </div>
//         <div className="login-form">
//           <div className="login-logo-container">
//             <img src={logo} alt="Logo" className="login-logo" />
//           </div>
//           <h2 className="login-h2">Login</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="login-input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="login-input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="forgot-password">
//               <Link to="/ForgetPassword">Forgot password?</Link>
//             </div>
//             <button type="submit" className="login-page-button">Login</button>
//           </form>
//           <div className="signup-prompt">
//             Don't have an account? <Link to="/signup"> Sign up </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwt_decode correctly
import './Login.css';
import img from './login.jpg';
import logo from '../assets/logo22.gif'; // Import your logo image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        window.alert('Successfully logged in!');
        const token = data.token;

        // Store the token in localStorage
        localStorage.setItem('token', token);

        // Decode the token to extract user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user.id; // Access the user ID from the token

        // Store the user ID in localStorage
        localStorage.setItem('userId', userId);

        // Log user ID to verify it's stored
        console.log('User ID stored in localStorage:', userId);

        // Redirect to another page (e.g., Home or Dashboard)
        navigate('/Home');
      } else {
        setError(data.errors); // Display errors if any
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-image">
          <img src={img} alt="Login Visual" />
        </div>
        <div className="login-form">
          <div className="login-logo-container">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>
          <h2 className="login-h2">Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-password">
              <Link to="/ForgetPassword">Forgot password?</Link>
            </div>
            <button type="submit" className="login-page-button">Login</button>
          </form>
          <div className="signup-prompt">
            Don't have an account? <Link to="/signup"> Sign up </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
