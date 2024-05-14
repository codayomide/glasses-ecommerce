import Image from "next/image";
import Recycled from "@/images/our-stories/recycled-stainless-steel.webp";

const BlogSection = () => {
  return (
    <section>
      <h1>Stories Worth Telling</h1>

      <div>
        <div>
          <Image src={Recycled} alt="Recycled" />
          <h2>Recycled Stainless Steel</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque eligendi fugiat optio odit incidunt assumenda. Iure nihil libero, autem vero hic, quod, id tenetur quae recusandae est dicta porro.</p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
}
 
export default BlogSection;