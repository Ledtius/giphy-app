import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { GifList } from "./components/GifList";
import { GifHistoryList } from "./components/GifHistoryList";

import { GiphyProvider } from "./context/GiphyProvider";
import { GiphyFetch } from "./components/GiphyFetch";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { animations } from "./components/animations";

function App() {
  const { containerAnimation } = animations();
  console.log(containerAnimation);
  return (
    <motion.div
      className="flex flex-col items-center"
      key="-4xx"
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
        <GiphyFetch />
        <Title />
        <Form />
        <GifHistoryList />
        <Loader />
        <GifList />
        <Footer />
      </GiphyProvider>
    </motion.div>
  );
}

export default App;
