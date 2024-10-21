import EducationImg from "../assets/education.png";
export default function Education() {
  return (
    <section className="flex flex-col py-20 px-5 md:flex-row justify-center bg-secondary text-white" id="education">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">
            Education
          </h1>
          <h2 className="font-bold">SSLC</h2>
          <p>Holy Cross Matriculation Higher Seconday School</p>
          <p>Year of Passing: 2017</p>
          <p>Percentage: 89%</p>
          <br/>
          <h2 className="font-bold">HSC</h2>
          <p>Holy Cross Matriculation Higher Seconday School</p>
          <p>Year of Passing: 2019</p>
          <p>Percentage: 64%</p>
          <br/>
          <h2 className="font-bold">Bachelors Degree</h2>
          <p>Insitution: SNS College of Engineering</p>
          <p>B.Tech Information Technology</p>
          <p>Year of Passing: 2023</p>
          <p>CGPA: 8.3</p>
          </div>
      </div>
      {/*<div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
            <div className="relative">
            <img className="h-[200px] w-[500px]"src={websiteImg1} />
            <div className="project-desc">
                <p className="text-center px-5 py-5">Project 1 </p>
            </div>
            </div>
            <div className="relative">
            <img className="h-[200px] w-[500px]"src={websiteImg2} />
            <div className="project-desc">
                <p className="text-center px-5 py-5">Project 2 </p>
            </div>
            </div>
            <div className="relative">
            <img className="h-[200px] w-[500px]"src={websiteImg3} />
            <div className="project-desc">
                <p className="text-center px-5 py-5">Project 3 </p>
            </div>
            </div>
        </div>
      </div>*/}
       <img className="md: w-1/3" src={EducationImg} />
    </section>
  );
}
