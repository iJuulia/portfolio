export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center gap-4 text-center xs:gap-6 xl:gap-8"
    >
      <h2 className="title capitalize">Get in contact</h2>
      <p className="description">
        Whether you are starting a project, have business inquiries or just want
        to say hi, my inbox is always open so feel free to reach out and I will
        get back to you as soon as possible.
      </p>
      <a
        href="mailto:jmstrauch04@gmail.com"
        target="_blank"
        className="btn default-text capitalize"
      >
        Reach out
      </a>
    </section>
  );
}
