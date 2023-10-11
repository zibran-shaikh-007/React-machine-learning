const PasswordStrengthIndicator = ({ password }) => {
  let strength = "";

  switch (true) {
    case password.length < 5:
      strength = "Weak";
      break;
    case password.length >= 5 && password.length < 8:
      strength = "Moderate";
      break;
    case password.length >= 8:
      strength = "Strong";
      break;
    default:
      strength = "";
  }

  return (
    <div className="password_strength_indicator ">
      <label>Password Strength :</label>
      <label>{strength}</label>
    </div>
  );
};
export default PasswordStrengthIndicator;
