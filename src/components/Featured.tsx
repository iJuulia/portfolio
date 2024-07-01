export default function Featured() {
  return (
    <section id="featured" className="container">
      <h3 className="text-sm font-normal capitalize text-indigo-600 lg:text-lg xl:text-xl">
        Featured project
      </h3>
      <div className="flex items-center gap-4">
        <h2 className="title uppercase">Gatil Aruak</h2>
        <a className="size-6 xs:size-[1.875rem] lg:size-9 xl:size-12" href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </a>
      </div>
      <p className="description default-margin">
        Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
        voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
        consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
        do aliquip nulla laboris.
      </p>
      <div className="flex flex-wrap gap-4 *:min-w-60 *:flex-1">
        <div>
          <h3 className="featured__label">Tech stack</h3>
          <ul>
            <li className="default-text text-slate-800 dark:text-slate-600">
              TailwindCSS
            </li>
            <li className="default-text text-slate-800 dark:text-slate-600">
              ReactJS
            </li>
            <li className="default-text text-slate-800 dark:text-slate-600">
              NextJS
            </li>
          </ul>
        </div>
        <div>
          <h3 className="featured__label">Project type</h3>
          <p className="default-text text-slate-800 dark:text-slate-600">
            Fullstack-Jamstack
          </p>
        </div>
        <div>
          <h3 className="featured__label">Timeline</h3>
          <p className="default-text text-slate-800 dark:text-slate-600">
            December 2022 - present
          </p>
        </div>
      </div>
      <div className="featured__container">
        <div className="img__wrapper">
          <img loading="lazy" src="/feat_proj.png" alt="Gatil Aruak project" />
        </div>
        <div className="img__wrapper">
          <img
            loading="lazy"
            src="/feat_proj_1.png"
            alt="Gatil Aruak project"
          />
        </div>
        <div className="img__wrapper">
          <img
            loading="lazy"
            src="/feat_proj_2.png"
            alt="Gatil Aruak project"
          />
        </div>
        <div className="img__wrapper">
          <img
            loading="lazy"
            src="/feat_proj_3.png"
            alt="Gatil Aruak project"
          />
        </div>
      </div>
    </section>
  );
}
