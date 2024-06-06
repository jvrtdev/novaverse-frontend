import Cart from "./Cart";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { FaRegUserCircle } from "react-icons/fa";
import User from "./User";

export default function Header(){
  return(
    <nav className="w-full sticky z-50 top-0 inset-x-0 h-16 bg-black flex items-center">
      <MaxWidthWrapper>
        <div className="flex justify-end gap-3 text-white items-center text-3xl">
          <User /> <Cart />
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}