import Image from "next/image";
import Link from "next/link";

const BestSellersSection = () => {
  return (
    <section>
      <h2>Bestsellers</h2>
      <div>
        <div>
          <Image src={`/`} alt="Glasses" width={30} height={30} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div>
          <Image src={`/`} alt="Glasses" width={30} height={30} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div>
          <Image src={`/`} alt="Glasses" width={30} height={30} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
        <div>
          <Image src={`/`} alt="Glasses" width={30} height={30} />
          <p>Sunglasses</p>
          <h3>£333</h3>
        </div>
      </div>

      <Link href={`/`}>Shop all sunglasses</Link>
    </section>
  );
};

export default BestSellersSection;
