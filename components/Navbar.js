import Link from "next/link";
import Image from "../components/Image";

export default function Navbar(params) {
  return (
    <nav className="relative z-10 shadow-md">
      <div className="flex h-20 items-center justify-between uppercase">
        <Link href={`/`}>
          <a className="flex items-center px-4">
            <Image
              src={`/images/brand/logo.svg`}
              width={153}
              height={30}
              alt={`UpTap`}
            />
          </a>
        </Link>
        <div className="relative hidden h-full basis-1/2 before:absolute before:-left-20 before:-z-10 before:h-full before:w-20 before:-skew-x-[40deg] before:bg-[#00000010] md:block">
          <ul className="relative flex h-full items-center space-x-6 bg-[#c01733] pl-8 pr-4 text-xl font-bold text-white before:absolute before:-left-10 before:-z-10 before:h-full before:w-20 before:-skew-x-[40deg] before:bg-[#c01733] xl:space-x-20">
            <li>
              <Link href={`/`}>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href={`/#games`}>
                <a>Games</a>
              </Link>
            </li>
            <li>
              <Link href={`/#contact`}>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
