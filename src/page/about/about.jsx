import  hero  from '../../assets/MedicoCare.MP4';
import  staff  from '../../assets/staff.webp';
import Button from "../../components/button/Button";
import { Title } from "../../components/title/title"


export const About = () => {
  return (
    <>
      <Title title="Why Choose Us" />
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        {/* Left Column */}
        <div className=" col-span-2">
          <img
            src={staff}
            alt="Staff or Facilities"
            className="w-full h-auto rounded-lg"
          />
          {/* Or for video, use */}
          <video
            className="w-full h-96 rounded-lg border-2 border-blue-500 p-2 mt-4"
            controls
          >
            <source className="rounded-lg" src={hero} type="video/mp4" />
          </video>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:pl-10 mt-5 md:mt-0">
          <ul className="list-disc pl-5 mb-4">
            <li>Experienced Doctors</li>
            <li>Modern Equipment</li>
            <li>24/7 Emergency Care</li>
            <li>Compassionate Care</li>
          </ul>
          <a href="#meet-doctors">
            <Button label="Meet Our Doctors" />
          </a>
        </div>
      </div>
    </>
  );
}
