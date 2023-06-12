import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newslatter from "./_child/newslatter";
export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    // backgroundImage: "url(`/images/footer.png`)",
    // backgroundRepeat: "no repeat",
    // backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"} legacyBehavior>
              <a>
                <ImFacebook />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImTwitter />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImYoutube />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Coptright 2023 All rights reserved | This template is made with by
            Muavia Haidri
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
