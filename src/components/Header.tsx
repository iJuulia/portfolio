export default function Header() {
  const OpenMenu = () => {
    const Menu = document.getElementById("MobileMenu");
    if (Menu?.classList.contains("hidden")) {
      Menu.classList.replace("hidden", "flex");
      document.body.style.overflowY = "hidden";
    } else {
      Menu?.classList.replace("flex", "hidden");
      document.body.style.overflowY = "auto";
    }
  };
  const ToggleMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="container relative z-[9999] flex items-center justify-end py-8">
      <nav>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a className="header__item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header__item" href="#featured">
              Work
            </a>
          </li>
          <li>
            <a className="header__item" href="#contact">
              Contact
            </a>
          </li>
          <li className="border border-solid border-slate-600 pt-6"></li>
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
            <a href="#" className="btn text-xs lg:text-sm">
              Resume
            </a>
          </li>
        </ul>
        <button className="bars" onClick={OpenMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
