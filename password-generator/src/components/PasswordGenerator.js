import React, { useState } from "react";
import UsePasswordGenerator from "../hooks/usePasswordGenerator";
import Button from "./Button";
import Checkbox from "./Checkbox";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const PasswordGenerator = () => {
  const [length, setLength] = useState(0);
  const [copied, setCopied] = useState(false);
  const [passProperty, setPassProperty] = useState([
    {
      title: "Include Uppercase Letters",
      check: false,
    },
    {
      title: "Include Lowercase Letters",
      check: false,
    },
    {
      title: "Include Numbers",
      check: false,
    },
    {
      title: "Include Symbols",
      check: false,
    },
  ]);

  const handleChecked = (i) => {
    const passwordPropertyChecked = [...passProperty];
    passwordPropertyChecked[i].check = !passwordPropertyChecked[i].check;
    setPassProperty(passwordPropertyChecked);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const { password, handleGeneratePassword, error } = UsePasswordGenerator();

  return (
    <div className="passwordGenerator_Container">
      {/* password text & copy */}
      {password ? (
        <div className="generated_password">
          <span>{password}</span>

          <Button className={"copy_btn"} onClick={handleCopy} title={copied ? "copied" : "copy"} />
        </div>
      ) : (
        <></>
      )}
      {/* password length  & range */}
      <div className="password_length_display">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>

        <input
          className="password_length"
          type="range"
          value={length}
          min={4}
          max={15}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* checkbox */}
      <div className="checkboxes">
        {passProperty?.map((property, index) => {
          return (
            <Checkbox
              key={index}
              name={property.title}
              checked={property.check}
              onChange={() => handleChecked(index)}
            />
          );
        })}
      </div>
      {/* Strength of password */}
      {password ? <PasswordStrengthIndicator password={password} /> : <></>}
      {/* Error Handling */}
      {error ? <div className="error">{error}</div> : <></>}
      {/* generate password button */}

      <Button
        className={"generate_password_btn"}
        onClick={() => handleGeneratePassword(passProperty, length)}
        title={"Generate Password"}
      />
    </div>
  );
};

export default PasswordGenerator;
