import { Dispatch, SetStateAction, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { navLinks } from "@/utils/script";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type NavBarProps = {
    isTopOfPage: boolean,
    selectedPage: string,
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

function NavBar({ selectedPage, setSelectedPage, isTopOfPage }: NavBarProps) {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
    const navBarBackground = !isTopOfPage && "bg-primary-100 drop-shadow"

    return (
        <nav>
            <div
                className={`${navBarBackground} ${flexBetween} fixed top-0 w-full py-6 z-30`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="Logo" />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreen ?
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    {navLinks.map(link => <Link
                                        key={link}
                                        page={link}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}

                                    />)}
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div> :
                            (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon
                                        className="h-6 w-6 text-white" />
                                </button>
                            )}
                    </div>
                </div>

            </div>

            {/* MOBILE VIEW */}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOS ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="w-6 h-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        {navLinks.map(link => <Link
                            key={link}
                            page={link}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}

                        />)}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;