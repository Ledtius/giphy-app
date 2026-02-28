import "./App.css";
import { Form } from "./components/Form";
import { GifList } from "./components/GifList";
import { GifHistoryList } from "./components/GifHistoryList";
import { GiphyProvider } from "./context/GiphyProvider";
import { GiphyFetch } from "./components/GiphyFetch";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";
import { animations } from "./components/animations";
import { Header } from "./components/Header";
import { DarModeProvider } from "./context/DarkModeContext";
function App() {
  const { containerAnimation } = animations();

  return (
    <motion.div
      className="flex flex-col items-center w-screen h-screen sm:h-fit dark:dark:bg-slate-900 p-8 bg-white"
      key="-4xx"
      id="principal"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 5,
        ease: "ease-out",
        staggerChildren: 2,
        delayChildren: 2,
      }}
      exit="out"
    >
      <GiphyProvider>
        <DarModeProvider>
          <GiphyFetch />
          <Header />
          <Form />
          <GifHistoryList />
          <Loader />
          <GifList />
          <Footer />
        </DarModeProvider>
      </GiphyProvider>
    </motion.div>
  );
}

export default App;
