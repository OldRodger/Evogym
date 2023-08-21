import { BenefitType, SelectedPage } from "@/shared/types";
import { Dispatch, SetStateAction } from "react";
import {
    UserGroupIcon,
    HomeModernIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';



const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="w-6 h-6" />,
        title: 'State of the Art Facilities',
        description: 'Ducimus molestias ratione fugiat dolorem consequuntur facilis doloribus, asperiores laboriosam veniam culpa labore eos sunt'
    },
    {
        icon: <UserGroupIcon className="w-6 h-6" />,
        title: "100's of Diverse Classes",
        description: 'Ducimus molestias ratione fugiat dolorem consequuntur facilis doloribus, asperiores laboriosam veniam culpa labore eos sunt'
    },
    {
        icon: <AcademicCapIcon className="w-6 h-6" />,
        title: 'Expert and Pro Trainers',
        description: 'Ducimus molestias ratione fugiat dolorem consequuntur facilis doloribus, asperiores laboriosam veniam culpa labore eos sunt'
    },
]


type Props = {
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: .2 }
    }
}


function Benefits({ setSelectedPage }: Props) {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"

    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }}
                transition={{ duration: .5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <h1 className="heading">more than just a gym</h1>
                <p className="text-sm my-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias ratione fugiat dolorem consequuntur facilis doloribus, asperiores laboriosam veniam culpa labore eos sunt architecto quos iste!
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => <Benefit
                    key={benefit.title}
                    title={benefit.title}
                    description={benefit.description}
                    icon={benefit.icon}
                    setSelectedPage={setSelectedPage}
                />)}
            </motion.div>

        </motion.div>

        {/* GRAPHIC && DESCRIPTION */}
        <div className="mt-16 justify-between items-center gap-20 md:flex md:mt-28">
            {/* GRAPHIC */}
            <img
                className="mx-auto"
                src={BenefitsPageGraphic}
                alt="benefirs-page-graphics"
            />

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div
                        className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstarctwaves"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: .5 }}
                            transition={{ duration: .5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            className="heading"
                        >
                            <span>Millions of happy members getting </span>
                            <span className="text-primary-500">fit</span>
                            <span>.</span>
                        </motion.div>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: .5, delay: .2 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rerum rem nesciunt, quis atque deleniti temporibus, distinctio eligendi a optio debitis praesentium expedita repudiandae eveniet deserunt impedit consequuntur, quia explicabo!
                        Exercitationem similique reiciendis eligendi voluptatibus odit tempore
                    </p>
                    <p className="mb-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis quidem? Eligendi cupiditate, ducimus autem et ab ipsam, quibusdam officiis explicabo iusto repellat saepe. Eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores eaque incidunt corrupti! Est dignissimos adipisci vero iure, pariatur nam.
                    </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            <span>Join Now</span>
                        </ActionButton>
                    </div>
                </div>
            </div>

        </div>
    </section>
}

export default Benefits;