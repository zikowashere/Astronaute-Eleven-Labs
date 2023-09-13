import "./App.css";
import Header from "./core/components/header/Header";
import FormAstronaut from "./core/components/formAstronaut/FormAstronaut";
import Astronaut from "./core/components/astronaut/Astronaut";

function App() {
  return (
    <div>
      <Header />
      <FormAstronaut />
      <Astronaut />
      <Astronaut />
    </div>
  );
}

export default App;
