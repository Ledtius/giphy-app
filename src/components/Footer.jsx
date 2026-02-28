import { motion } from "motion/react";
import { animations } from "./animations";

export const Footer = () => {
  const { componentsAnimation } = animations();
  return (
    <motion.footer
      variants={componentsAnimation}
      key="footer"
      className="mt-10 text-center dark:text-slate-400"
    >
      <small className="">
        {" "}
        © 2026 -{" "}
        <a
          className="font-medium hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400"
          href="https://github.com/Ledtius"
          target="_blank"
        >
          Calet Devia {""}
        </a>
        - Todos los Derechos Reservados
      </small>
    </motion.footer>
  );
};
