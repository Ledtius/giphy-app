import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { List } from "./components/List";

import { GiphyProvider } from "./context/GiphyProvider";
import { GiphyFetch } from "./services/GiphyFetch";

function App() {
  return (
    <>
      <GiphyProvider>
        <GiphyFetch />
        <Title />
        <Form />
        <List />
      </GiphyProvider>
    </>
  );
}

export default App;
