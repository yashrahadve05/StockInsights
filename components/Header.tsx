import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

const Header = () => {
    return (
        <header className="sticky top-0 table-header-group">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="stockInsights" width={140} className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    {/* NavItems */}
                    <NavItems />
                </nav>
                {/* UserDropDown */}
            </div>
        </header>
    );
};

export default Header;
