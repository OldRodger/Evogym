import { SelectedPage } from "@/shared/types";
import { Dispatch, SetStateAction } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


type LinkProps = {
    page: string,
    selectedPage: string,
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}


function Link({ page, selectedPage, setSelectedPage }: LinkProps) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ""} transition duration-100 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage) }
           
        >
            {page}
        </AnchorLink>
    );
}

export default Link; 