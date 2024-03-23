import SEA_Logo from "../../public/assets/Logo_SEA_Webstudio.svg"
import Image from "next/image"


export function Header(){
    return (
       <header className="fixed flex items-start w-full max-h-20 p-4 z-10">
        <nav className="flex items-center justify-between px-4 max-h-20 w-full rounded-2xl border border-white border-opacity-25 backdrop-blur-2xl bg-opacity-25 bg-white overflow-visible  ">
                <a href="/" className="flex justify-start">
                    <Image src={SEA_Logo} alt="logo SEA Webstudio" className="w-20 transition-transform" />
                    </a>
                <div className="flex items-center space-x-4">
                <a href="/about" className="hover:text-primary">{('header.about')}</a>
                <a href="/services" className="hover:text-primary">{('header.about')}</a>
                <a href="/contact" className="hover:text-primary">{('header.contact')}</a>
        
            </div>
        </nav>

       </header>
    )
}