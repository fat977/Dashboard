import "./Toggle.scss";
export const Toggle = ({handleChange,isChecked}) => {
  return (
    <div className="toggle-container mb-3">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
}
