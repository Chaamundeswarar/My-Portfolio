import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">Hello, I am Chaamundeswarar FullStack Developer </p>
          <p className="pb-5">
            I am looking for a web development. I have good knowledge in front-end web development and a sufficient knowledge in HTML ,CSS ,JAVASCRIPT and Framework (Reactjs).
          </p>
          <p className="pb-5"></p>
        </div>
      </div>
    </section>
  );
}
