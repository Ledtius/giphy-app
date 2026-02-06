import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { List } from "./components/List";
import { ListSearch } from "./components/ListSearch";

import { GiphyProvider } from "./context/GiphyProvider";
import { GiphyFetch } from "./services/GiphyFetch";
import { Loader } from "./components/Loader";

function App() {
  return (
    <>
      <GiphyProvider>
        <GiphyFetch />
        <Title />
        <Form />
        <ListSearch />
        <Loader />
        <List />
      </GiphyProvider>
    </>
  );
}

export default App;
