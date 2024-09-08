import { BrowserRouter } from "react-router-dom";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-4">
        <Header />
      </div>
      <ButtonGradient />
    </BrowserRouter>
  );
}
