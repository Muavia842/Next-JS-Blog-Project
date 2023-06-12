import Image from "next/image";
import Link from "next/link";
export default function author({ name, img, designation }) {
  if (!name && !img) return <></>;
  return (
    <div className="author flex py-5 ">
      <Image
        height={60}
        width={40}
        src={img}
        alt="author"
        className="rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">
            {name}
          </a>
        </Link>
        <span className="text-sm text-gray-500">{designation}</span>
      </div>
    </div>
  );
}
