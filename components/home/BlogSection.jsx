import Image from "next/image";
import Recycled from "@/images/our-stories/recycled-stainless-steel.webp";

const BlogSection = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl mo-lg:text-3xl font-semibold px-4 mo-sm:px-8 lg:px-14 mb-9">Stories Worth Telling</h1>

      <div className="text-darkBlue grid grid-flow-col gap-8 overflow-x-scroll hide-scrollbar w-full mb-16 px-4 mo-sm:px-8 lg:px-14 pb-4">
        <div className="w-[300px] mo-lg:w-[400px] lg:w-[500px]">
          <Image src={Recycled} alt="Recycled" className="mb-8 w-full" />
          <h2 className="font-bold text-xl mo-lg:text-2xl mb-4">Recycled Stainless Steel</h2>
          <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque eligendi fugiat optio odit incidunt assumenda. Iure nihil libero, autem vero hic, quod, id tenetur quae recusandae est dicta porro.</p>
          <button className="bg-white text-darkBlue hover:bg-darkBlue hover:text-white border-[1.5px] border-darkBlue rounded-full mt-4 px-6 py-3 transition-all duration-500">Learn more</button>
        </div>
      </div>
    </section>
  );
}
 
export default BlogSection;