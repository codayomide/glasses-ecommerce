import Image from "next/image";
import Link from "next/link";
import glassesImg from "@/images/glasses/glasses1.webp"

const BestSellersSection = () => {
  return (
    <section className="pt-16">
      <h2 className="text-3xl font-semibold px-8 pb-10">Bestsellers</h2>

      <div className="grid grid-flow-col gap-6 overflow-x-scroll hide-scrollbar w-full px-8 pb-4">
        <div className="w-[300px]">
          <Image src={glassesImg} alt="Glasses" width={300} height={300} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div className="w-[300px]">
          <Image src={glassesImg} alt="Glasses" width={300} height={300} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div className="w-[300px]">
          <Image src={glassesImg} alt="Glasses" width={300} height={300} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div className="w-[300px]">
          <Image src={glassesImg} alt="Glasses" width={300} height={300} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
      </div>

      <Link href={`/`}>Shop all sunglasses</Link>
    </section>
  );
};

export default BestSellersSection;
