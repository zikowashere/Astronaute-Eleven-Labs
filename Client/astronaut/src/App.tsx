import "./App.css";
import { ContextFormProvider } from "./core/contexts/FormAstronautContext";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextFormProvider>
        <Home />
      </ContextFormProvider>
    </QueryClientProvider>
  );
}

export default App;
