import CarbonEmissionImg from "@/images/make-a-difference-section/carbon-emission-img.svg";
import ElectricityImg from "@/images/make-a-difference-section/electricity-consumption-img.svg";
import WaterConsumptionImg from "@/images/make-a-difference-section/water-consumption-img.svg";
import Image from "next/image";

const MakeDifference = () => {
  return (
    <section className="w-full bg-green text-darkBlue pt-16 pb-8 px-4 mo-sm:px-8 lg:px-14 flex">
      <div className="w-[45%] mr-20">
        <h1 className="text-2xl mo-lg:text-3xl font-bold mb-6">How we make a difference?</h1>
        <p>
          We’re on a mission to create a world without waste. Because waste is
          just a waste! Of time, money, resources and especially the
          environment...
        </p>
        <p>
          And just like you, we don’t want to add to the big pile of waste
          already collecting in the world oceans, forests, deserts and
          landfills...
        </p>
        <p>
          So, we make sure we reduce as much waste as possible, while making our
          you look good. We only use only recycled and biodegradable materials
          to make the high quality eyewear that allows you to…
        </p>
        <p>Look good for your planet.</p>
      </div>

      <div className="w-[45%]">
        <div>
          <h3>Energy</h3>
          <p>
            We save 924kwh of energy per 1000 frames produced, which is the same
            as 132 phone batteries
          </p>
          <Image src={ElectricityImg} alt="Electricity Consumption Image" />
        </div>
        <div>
          <h3>CO2</h3>
          <p>
            We save 263kg of CO2 emission per 1000 frames produced, which is the
            same as 1 Amsterdam Milano car
          </p>
          <Image src={CarbonEmissionImg} alt="Carbon Emission Image" />
        </div>
        <div>
          <h3>Water</h3>
          <p>
            We save 5000 liter of water per 1000 frames produced, which is the
            same as 67 showers
          </p>
          <Image src={WaterConsumptionImg} alt="Water Consumption Image" />
        </div>
      </div>
    </section>
  );
};

export default MakeDifference;
