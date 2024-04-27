import Image from "next/image";

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
    </section>
  );
};

export default BestSellersSection;
