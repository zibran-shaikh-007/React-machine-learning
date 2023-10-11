import React, { lazy, Suspense } from "react";
import "./App.css";
const PasswordGenerator = lazy(() => import("./components/PasswordGenerator"));

function App() {
 

  return (
    <Suspense fallback={"...Loading"}>
      <PasswordGenerator /> 
    </Suspense>
  );
}

export default App;
