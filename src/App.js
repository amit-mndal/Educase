
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Account from "./pages/accounts"; 
import CreateAccount from "./pages/createAccount";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}