import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const userDashboard = () => {
  return (
    <div style={{
      backgroundImage: `url(${require('.././pics/756e80c0-9ece-4ba2-b03a-22fdb6ce68f4.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <center>
        <h1 style={{ color: 'white' }}>Dashboard</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pythonTutorial">
            <img
              src={require('.././pics/Python-Logo.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/JavaScriptTutorial">
            <img
              src={require('.././pics/JavaScript-logo.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>

          <Link to="/HTMLTutorial">
            <img
              src={require('.././pics/html5-logo-png-transparent.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>



          <Link to="/CSSTutorial">
            <img
              src={require('.././pics/css3-logo-png-transparent.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/CTutorial">
            <img
              src={require('.././pics/C_Logo.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/CsharpTutorial">
            <img
              src={require('.././pics/Logo_C_sharp.svg.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/Cplusplus_Tutorial">
            <img
              src={require('.././pics/C++_logo.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '150px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/JavaTutorial">
            <img
              src={require('.././pics/java-4-logo-png-transparent.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '90px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
          <Link to="/DockerTutorial">
            <img
              src={require('.././pics/docker-logo-png-transparent.png')} // Replace with your image path
              alt="Python Tutorial"
              style={{
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Adjust shadow properties
                width: '180px', // Adjust image size
                height: 'auto',
                borderRadius: '10px', // Optional: Rounded corners
                margin: '0 40px', // Add margin to create space between images
              }}
            />
          </Link>
        </div>
      </center>
    </div>
  );
};

export default userDashboard;
