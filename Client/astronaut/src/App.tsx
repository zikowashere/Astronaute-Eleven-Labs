import "./App.css";
import { ContextFormProvider } from "./core/contexts/FormAstronautContext";
import { ContextAppProvider } from "./core/contexts/ListAstronautContext";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextFormProvider>
        <ContextAppProvider>
          <Home />
        </ContextAppProvider>
      </ContextFormProvider>
    </QueryClientProvider>
  );
}

export default App;
