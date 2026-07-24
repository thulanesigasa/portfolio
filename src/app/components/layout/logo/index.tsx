import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/logo.svg")}
          alt="T.s Industries Web Development Portfolio Logo"
          width={70}
          height={70}
        />
      </Link>
    </>
  );
};

export default Logo;
