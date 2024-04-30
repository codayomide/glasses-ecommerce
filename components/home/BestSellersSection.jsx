import Image from "next/image";
import Link from "next/link";
import glassesImg from "@/images/glasses/glasses1.webp";

const BestSellersSection = () => {
  return (
    <section className="pt-16">
      <h2 className="text-3xl font-semibold px-4 mo-sm:px-8 lg:px-14 pb-10">
        Bestsellers
      </h2>

      <div className="grid grid-flow-col gap-8 overflow-x-scroll hide-scrollbar w-full px-4 mo-sm:px-8 lg:px-14 pb-4">
        <Link href={`/`} className="w-[300px] mo-lg:w-[400px] lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src={glassesImg}
              alt="Glasses"
              width={300}
              height={300}
              className="w-full hover:scale-110 transition-all ease-in duration-300"
            />
          </div>
          <p className="text-2xl font-semibold mt-5 mb-4">Sunglasses</p>
          <h3 className="text-2xl font-extrabold">£333</h3>
        </Link>

        <Link href={`/`} className="w-[300px] mo-lg:w-[400px] lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src={glassesImg}
              alt="Glasses"
              width={300}
              height={300}
              className="w-full hover:scale-110 transition-all ease-in duration-300"
            />
          </div>
          <p className="text-2xl font-semibold mt-5 mb-4">Sunglasses</p>
          <h3 className="text-2xl font-extrabold">£333</h3>
        </Link>

        <Link href={`/`} className="w-[300px] mo-lg:w-[400px] lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src={glassesImg}
              alt="Glasses"
              width={300}
              height={300}
              className="w-full hover:scale-110 transition-all ease-in duration-300"
            />
          </div>
          <p className="text-2xl font-semibold mt-5 mb-4">Sunglasses</p>
          <h3 className="text-2xl font-extrabold">£333</h3>
        </Link>

        <Link href={`/`} className="w-[300px] mo-lg:w-[400px] lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src={glassesImg}
              alt="Glasses"
              width={300}
              height={300}
              className="w-full hover:scale-110 transition-all ease-in duration-300"
            />
          </div>
          <p className="text-2xl font-semibold mt-5 mb-4">Sunglasses</p>
          <h3 className="text-2xl font-extrabold">£333</h3>
        </Link>

      </div>

      <Link href={`/`}>Shop all sunglasses</Link>
    </section>
  );
};

export default BestSellersSection;
