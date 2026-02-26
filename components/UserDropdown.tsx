"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = ({ user }: { user: User }) => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex px-2 py-6 items-center gap-3 text-gray-400 hover:text-yellow-500 hover:bg-gray-700 cursor-pointer"
                >
                    <div className="hidden md:flex flex-col items-center">
                        <span className="text-base font-medium text-gray-400">
                            {user.name.toUpperCase().split(' ')[0]}
                        </span>
                    </div>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400 bg-gray-800">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0].toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center">
                            <span className="text-base font-medium text-gray-400">
                                {user.name.toLocaleUpperCase()}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-gray-100 text-md font-medium focus:text-yellow-500 focus:bg-transparent transition-colors"
                >
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    LogOut
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />

                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
