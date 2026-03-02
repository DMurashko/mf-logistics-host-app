export const RegisterPage = ({ onRegister }: { onRegister?: () => void }) => (
  <div>
    <h1>Register Page</h1>
    {onRegister && <button onClick={onRegister}>Mock Register</button>}
  </div>
);
