const Button = ({ className = "", onClick, title, type = "button" }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
