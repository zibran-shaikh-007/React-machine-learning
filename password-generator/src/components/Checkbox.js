const Checkbox = ({ className = "", name, checked, onChange }) => {
  return (
    <label >
      <input className={className} type="checkbox" name={name} checked={checked} onChange={onChange} />
      {name}
    </label>
  );
};

export default Checkbox;
