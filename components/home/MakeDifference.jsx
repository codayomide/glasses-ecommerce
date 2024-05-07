import CarbonEmissionImg from "@/images/make-a-difference-section/carbon-emission-img.svg";
import ElectricityImg from "@/images/make-a-difference-section/electricity-consumption-img.svg";
import WaterConsumptionImg from "@/images/make-a-difference-section/water-consumption-img.svg";
import Image from "next/image";

const MakeDifference = () => {
  return (
    <section className="w-full bg-green text-darkBlue pt-16 pb-8 px-4 mo-sm:px-8 lg:px-14 flex flex-col">
      <div className="font-medium mb-8">
        <h1 className="text-2xl mo-lg:text-3xl font-bold mb-6">How we make a difference?</h1>
        <p className="mb-4">
          We’re on a mission to create a world without waste. Because waste is
          just a waste! Of time, money, resources and especially the
          environment...
        </p>
        <p className="mb-4">
          And just like you, we don’t want to add to the big pile of waste
          already collecting in the world oceans, forests, deserts and
          landfills...
        </p>
        <p className="mb-4">
          So, we make sure we reduce as much waste as possible, while making our
          you look good. We only use only recycled and biodegradable materials
          to make the high quality eyewear that allows you to…
        </p>
        <b className="font-black">Look good for your planet.</b>
      </div>

      <div className="">
        <div className="mb-8">
          <h3 className="font-bold mb-4">Energy</h3>
          <p className="mb-8">
            We save 924kwh of energy per 1000 frames produced, which is the same
            as 132 phone batteries
          </p>
          <Image src={ElectricityImg} alt="Electricity Consumption Image" />
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-4">CO<sub>2</sub></h3>
          <p className="mb-8">
            We save 263kg of CO2 emission per 1000 frames produced, which is the
            same as 1 Amsterdam Milano car
          </p>
          <Image src={CarbonEmissionImg} alt="Carbon Emission Image" className="w-[140px]" />
        </div>
        <div>
          <h3 className="font-bold mb-4">Water</h3>
          <p className="mb-8">
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
