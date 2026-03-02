export const LoginPage = ({ onLogin }: { onLogin?: () => void }) => (
  <div>
    <h1>Login Page</h1>
    {onLogin && <button onClick={onLogin}>Mock Login</button>}
  </div>
);
