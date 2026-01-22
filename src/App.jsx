import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";

import { GiphyProvider } from "./context/GiphyProvider";

function App() {
  return (
    <>
      <GiphyProvider>
        <Title />
        <Form />
      </GiphyProvider>
    </>
  );
}

export default App;
