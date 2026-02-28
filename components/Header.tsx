"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import logo from '@/public/assets/icons/logo.png'

const Header = ({ user }: { user: User }) => {

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="stockInsights"
                        width={140}
                        height={50}
                        className="h-8 w-auto cursor-pointer rounded-lg"
                    />
                </Link>
                <nav className="hidden sm:block">
                    {/* NavItems */}
                    <NavItems />
                </nav>
                {/* UserDropDown */}
                <UserDropdown user={user} />
            </div>
        </header>
    );
};

export default Header;
