function LoginForm({ onLogin }){
  return(
    <div>
      <p id="status">Please log in</p>
      <button id="login-btn" onClick={onLogin}>Log In</button>
    </div>
  );
}

function LogoutForm({ onLogout }){
  return(
    <div>
      <span id="badge">Online</span>
      <p id="status">Welcome back!</p>
      <button id="logout-btn" onClick={onLogout}>Log Out</button>
    </div>
  );
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }
  
  return (
    <div>
      {/* Your conditional rendering here */}
      {isLoggedIn ? (
          <LogoutForm onLogout={handleLogout} /> 
        ) : (
          <LoginForm onLogin={handleLogin} /> 
      )}
    </div>
  );
}