import "./TeamMember.css";
import MemberCard from "./../MemberCard/MemberCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import member1 from "./../../assets/images/04.webp";
import member2 from "./../../assets/images/z.png";
import member3 from "./../../assets/images/06.webp";
import member4 from "./../../assets/images/07.webp";
import envato from "./../../assets/images/envato-blue.png";
import envato2 from "./../../assets/images/envato-gray.png";

const teamData = [
  { name: "Masirul Islam", title: "Web Designer", imageSrc: member1 },
  { name: "Jessica Mardol", title: "Cyber Expert", imageSrc: member2 },
  { name: "Arnold Hemingway", title: "Web Expert", imageSrc: member3 },
  { name: "Shikon Haque", title: "Data Analyst", imageSrc: member4 },
];

export default function TeamMember() {
  return (
    <section className="TeamMember container p-5">
      <div className=" d-flex justify-content-between align-items-center flex-wrap">
        <div className=" mb-4 services-titlte ">
          <p className="text-primary fw-bold">
            {" "}
            <IoIosArrowRoundBack /> TEAM MEMBERS <IoIosArrowRoundForward />
          </p>
          <h2 className="fw-bold">Our Dedicated Team Member</h2>
        </div>
        <div className="d-flex justify-content-end mb-3 ">
          <button className="btn bg-primary member-btn ">
            All Members
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>

      <div className="team-members-container">
        {teamData.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            title={member.title}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>

      <div className="envato ">
        <div className="envato-title">
          <div className="line w-25"></div>
          <h3>1k + Brands Trust Us</h3>
          <div className="line w-25"></div>
        </div>
      </div>
      <div className="container specilaize">
        <ul className="flex-list-brand ">
          <li>
            <img src={envato2} alt="asterisk" />
          </li>
          <li>
            <img src={envato2} alt="asterisk" />
          </li>
          <li>
            <img src={envato} alt="asterisk" className="blue-envato" />
          </li>
          <li>
            <img src={envato2} alt="asterisk" />
          </li>
          <li>
            <img src={envato2} alt="asterisk" />
          </li>
        </ul>
      </div>
    </section>
  );
}
