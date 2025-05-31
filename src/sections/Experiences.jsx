import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { Particles } from "../components/Particles"; // import Particles

const Experiences = () => {
  return (
    <section className="relative w-full min-h-screen"> 
      {/* container must be relative for absolute particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="relative w-full">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
