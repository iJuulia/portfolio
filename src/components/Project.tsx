interface ProjectProps {
  title: string;
  image: string;
  caption: string;
  description: string;
}

export default function Project({
  title,
  image,
  caption,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col place-items-center sm:odd:flex-row-reverse sm:even:flex-row">
      <h3 className="mb-4 flex text-base xs:mb-6 xs:text-lg sm:hidden">
        {title}
      </h3>
      <div className="img__wrapper flex-1">
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="flex-1 *:px-4">
        <h3 className="hidden text-base sm:block sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="my-4 text-sm text-slate-800 xs:my-6 xs:text-base sm:m-[1em] sm:text-xs md:text-sm lg:text-base xl:text-lg dark:text-slate-600">
          {caption}
        </p>
        <p className="mb-4 text-sm text-slate-800 xs:text-base sm:mb-[1em] sm:text-xs md:text-sm lg:text-base xl:text-lg dark:text-slate-400">
          {description}
        </p>
        <a
          href="#"
          className="btn text-sm xs:text-base sm:text-xs md:text-sm lg:text-base xl:text-lg"
        >
          Website
        </a>
      </div>
    </div>
  );
}
