import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { Dispatch, SetStateAction } from "react";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

function Home({ setSelectedPage }: Props) {

    const isAboveMeiumScreens = useMediaQuery("(min-width:1060px)");

    return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <div className="md:flex md:h-5/6 mx-auto w-5/6 items-center justify-center">
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur magni obcaecati impedit molestias dolores nam laudantium totam fugit, exercitationem odio odit omnis sint ratione animi voluptatum vel maiores eveniet?
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: .5, delay: .2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink> 
                </motion.div>
            </div>

            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </div>

        {/* SPONSORS */}
        {isAboveMeiumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between">
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
}

export default Home;