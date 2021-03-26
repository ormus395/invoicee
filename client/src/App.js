import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Button from "./components/Button";

//
function App() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [invoices, setInvoices] = useState([]);

  // on app load, determine if the user is logged in or not
  // store the JWT in local storage (this inst the safest option)
  useEffect(() => {});
  return (
    <div className="App">
      <NavBar />
      <Button variant="fourth">Delete</Button>
    </div>
  );
}

export default App;
