import { MaxWidthWrapper } from "./MaxWidthWrapper";


export default function Header(){
  return(
    <nav className="w-full sticky z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        Header
      </MaxWidthWrapper>
    </nav>
  )
}