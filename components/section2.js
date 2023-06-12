import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
// import getPost from "@/lib/helper";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return <Error></Error>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not an array</div>;
  }
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, subtitle, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
              src={img || "/"}
              width={500}
              className="rounded"
              height={350}
              alt="img1"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "UNKNOWN"}
            </a>
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "UNKNOWN"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle || "subtitle"}</p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
