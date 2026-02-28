import { Title } from "./Title";
import { Toggle } from "./Toggle";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full flex-wrap flex-col sm:flex-row dark:bg-red-200">
      <Title />
      <Toggle />
    </div>
  );
};
