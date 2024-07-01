export default function Hero() {
  return (
    <section className="container mt-8 flex flex-col items-center gap-4 text-center xs:gap-6 xl:gap-8">
      <img
        className="size-24 rounded-full xs:size-[6.5rem] lg:size-32 xl:size-40"
        src="/profile.jpg"
        alt="Profile picture"
      />
      <h2 className="line-tight text-base text-slate-800 xs:text-lg lg:text-2xl xl:text-4xl">
        Hi, I'm Julia 👋
      </h2>
      <h1 className="line-tight text-4xl uppercase tracking-tighter text-slate-800 xs:text-5xl lg:text-7xl xl:text-9xl dark:text-slate-400">
        Front-end
        <br /> web developer.
      </h1>
      <p className="description">
        A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
        developer and <strong>UI/UX</strong> enthusiast specialized in building
        stunning pixel-perfect interactive websites/applications.
      </p>
      <a href="#" className="btn default-text capitalize">
        Reach out
      </a>
    </section>
  );
}
