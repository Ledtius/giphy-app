export const Toggle = () => {
  return (
    <>
      <div className="w-fit flex items-center gap-2 relative">
        <input
          className="hidden peer"
          type="checkbox"
          id="check"
          htmlFor="icon"
        />
        <label
          htmlFor="check"
          className="block w-18 h-6 bg-amber-400 rounded-full before:content-[''] before:bg-gray-100 before:w-8 before:h-4 before:block before:rounded-full before:absolute before:m-1 peer-checked:bg-blue-800 peer-checked:before:translate-x-8 peer-checked:before:transition-all before:transition-all"
        ></label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          id="icon"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun-icon lucide-su peer-not-checked:stroke-amber-300 absolute -left-8 "
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          htmlFor="check"
          className="lucide lucide-moon-icon lucide-moon peer-checked:stroke-blue-800"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      </div>
    </>
  );
};
