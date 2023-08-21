import { Dispatch, ReactNode, SetStateAction } from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    children: ReactNode,
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

function ActionButton({ children, setSelectedPage }: Props) {
    return (
        <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <button type="button" className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                {children}
            </button>
        </AnchorLink>

    );
}

export default ActionButton;