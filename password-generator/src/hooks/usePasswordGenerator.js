import { useState } from "react";

const UsePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let charSet = "";
  let generatedPassword = "";

  const handleGeneratePassword = (properties, length) => {
    const selectedProperties = properties?.filter((property) => property.check);

    if (selectedProperties.length === 0 || length === 0) {
      setError("Select atleast one Option or increase length!");
      setPassword("");
      return;
    }
    selectedProperties.forEach((property) => {
      switch (property.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "1234567890";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()_+";
          break;
        default:
          charSet = "";
      }
    });

    for (let i = 0; i < length; i++) {
      const charSetIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[charSetIndex];
    }
    setPassword(generatedPassword);
    setError("");
  };

  return { password, handleGeneratePassword, error };
};

export default UsePasswordGenerator;
