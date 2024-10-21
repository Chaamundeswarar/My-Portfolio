import ResumeImg from "../assets/resume.jpg";
export default function Resume() {
  return (
    <section className="flex flex-col md:flex-row bg-primary px-5" id="resume">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]"src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">My Resume <a className="btn"href="/ChamuNewResume.pdf" download="Chamu_Resume.pdf">Download</a> </p>
        </div>
      </div>
    </section>
  );
}

