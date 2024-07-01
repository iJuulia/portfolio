import Project from "./Project";

export default function Work() {
  return (
    <section className="container text-center">
      <h2 className="title">Projects</h2>
      <p className="description default-margin mx-auto">
        Mollit pariatur tempor nisi dolor non consequat magna cupidatat
        reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo
        deserunt ipsum.
      </p>
      <div className="mx-auto space-y-20 sm:space-y-0 xl:w-[80%] 2xl:w-[70%]">
        <Project
          title="DevLinks"
          image="/project_1.png"
          caption="Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt exercitation excepteur do reprehenderit fugiat Lorem sint ut."
          description="Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non amet nostrud officia duis."
        />
        <Project
          title="Gatil Aruak"
          image="/project_2.png"
          caption="Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim pariatur deserunt do ad exercitation."
          description="Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint."
        />
        <Project
          title="Artren"
          image="/project_2.png"
          caption="Aliquip eu ad est reprehenderit veniam irure exercitation in velit enim ipsum."
          description="Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim."
        />
        <Project
          title="Platform Pro"
          image="https://building-a-portfolio-website.vercel.app/platformpro.png"
          caption="Aliquip eu ad est reprehenderit veniam irure exercitation in velit enim ipsum."
          description="Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim."
        />
        <Project
          title="Wallys Vegan"
          image="https://building-a-portfolio-website.vercel.app/wallysvegan.png"
          caption="Aliquip eu ad est reprehenderit veniam irure exercitation in velit enim ipsum."
          description="Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim."
        />
        <Project
          title="Old Portfolio"
          image="https://building-a-portfolio-website.vercel.app/portfolio.png"
          caption="Aliquip eu ad est reprehenderit veniam irure exercitation in velit enim ipsum."
          description="Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim."
        />
      </div>
    </section>
  );
}
