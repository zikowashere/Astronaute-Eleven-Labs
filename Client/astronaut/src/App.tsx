import "./App.css";
import { ContextFormProvider } from "./core/contexts/FormAstronautContext";
import { ContextAppProvider } from "./core/contexts/ListAstronautContext";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ContextFormProvider>
        <ContextAppProvider>
          <Home />
        </ContextAppProvider>
      </ContextFormProvider>
    </div>
  );
}

export default App;
