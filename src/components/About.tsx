export default function About() {
  return (
    <section
      id="about"
      className="container flex flex-col gap-4 xs:gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex flex-col gap-4 xs:gap-6 xl:gap-8">
        <h2 className="title">About</h2>
        <p className="description">
          Hello there! I'm Julia, a{" "}
          <strong>Frontend / Fullstack-Jamstack</strong> web developer based
          near Montreal. I wake up in the morning, grab a cup of coffee, open up
          my laptop and build things that live on the web all day, everyday.
        </p>
        <p className="description">
          People who know me say I'm obsessed, that's fair, I am very driven and
          love learning new things.
        </p>
        <p className="description">
          I recently created a YouTube channel called <a>Slaying The Dragon</a>{" "}
          where I upload videos on front-end web development topics.
        </p>
        <hr className="border-slate-800" />
        <h3 className="text-sm text-slate-800 xs:text-base dark:text-slate-400">
          Technologies
        </h3>
        <div className="flex">
          <ul className="about__list">
            <li className="about__item">JavaScript (ES6+)</li>
            <li className="about__item">CSS</li>
            <li className="about__item">HTML</li>
          </ul>
          <ul className="about__list">
            <li className="about__item">ReactJS</li>
            <li className="about__item">NextJS</li>
            <li className="about__item">TailwindCSS</li>
          </ul>
        </div>
      </div>
      <div className="sm:mx-auto">
        <img
          loading="lazy"
          className="sm:w-[28.6875rem] xl:w-[30.75rem]"
          src="/profile.jpg"
          alt="Profile picture"
        />
      </div>
    </section>
  );
}
