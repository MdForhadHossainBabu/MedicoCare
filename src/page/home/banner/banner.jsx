import hero from '../../../assets/hero.webp';
import trustBadge1 from '../../../assets/trustBadge1.webp';
import trustBadge2 from '../../../assets/trustBadge2.webp';
import Button from '../../../components/button/Button';


export const Banner = () => {
  return (
    <div>
      <img className="w-full h-[100vh]" src={hero} alt="" />
      {/* hero overlay and shadow */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Comprehensive Care from Trusted Experts
        </p>
        {/* button parent div */}
        <div className="my-6 flex items-center gap-12">
          {/* booking consultation button */}
          <Button label="Book a Consultation" />

          {/* learn more button */}
          <Button label="learn more.." />
        </div>
      {/* Trust badges */}
      <div className="flex mt-8 space-x-6">
        <div className="flex items-center space-x-2">
          <img src={trustBadge1} alt="Trust Badge 1" className="w-12 h-12 rounded-full rounded-tl-none " />
          <p>Trusted by 10,000 Patients</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={trustBadge2} alt="Certification" className="w-12 rounded-full rounded-tl-none  h-12" />
          <p>Certified by Health Organization</p>
        </div>
      </div>
      </div>
    </div>
  );
}
