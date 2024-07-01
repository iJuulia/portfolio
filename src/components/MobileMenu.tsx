export default function MobileMenu() {
  const Redirect = () => {
    const Menu = document.getElementById("MobileMenu");
    Menu?.classList.replace("flex", "hidden");
    document.body.style.overflowY = "auto";
  };

  const ToggleMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div
      id="MobileMenu"
      className="absolute left-0 top-0 z-[999] hidden size-full items-center justify-center bg-slate-100 text-center dark:bg-slate-950"
    >
      <nav>
        <ul className="flex flex-col items-center justify-center gap-4">
          <li>
            <a href="#about" className="hidden__item" onClick={Redirect}>
              About
            </a>
          </li>
          <li>
            <a href="#featured" className="hidden__item" onClick={Redirect}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hidden__item" onClick={Redirect}>
              Contact
            </a>
          </li>
          <li className="border border-solid border-slate-600 pr-6"></li>
          <li>
            <button className="sun" onClick={ToggleMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </button>
          </li>
          <li>
            <a href="#" className="btn text-xs sm:text-sm">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
