import Image from "next/image";
import { getInstagramPosts } from "./api/getInstagramPosts";

export default function Gallery({ posts, images }) {
  const items = posts?.map((p) => (
    <div className="col-md-3 col-sm-4 col-xs-6 image-gallery" key={p.id}>
      {/* <img src={images[p.id]} alt={p.caption} /> */}
      <span>{p.caption}</span>
    </div>
  ));

  return (
    <>
      <div className="block-heading-two">
        <h3>
          <span>Galería</span>
        </h3>
      </div>

      <div>{items}</div>
    </>
  );
}

export async function getStaticProps() {
  // const data = await getInstagramPosts();
  const data = {};
  return {
    props: { ...data },
  };
}
