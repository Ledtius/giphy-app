import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { GifList } from "./components/GifList";
import { GifHistoryList } from "./components/GifHistoryList";

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
        <GifHistoryList />
        <Loader />
        <GifList />
      </GiphyProvider>
    </>
  );
}

export default App;
