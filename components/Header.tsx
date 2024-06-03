import Cart from "./Cart";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header(){
  return(
    <nav className="w-full sticky z-50 top-0 inset-x-0 h-16 bg-black flex items-center">
      <MaxWidthWrapper>
        <div className="flex justify-end gap-3 text-white items-center text-3xl">
          <FaRegUserCircle />
          <Cart />
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}