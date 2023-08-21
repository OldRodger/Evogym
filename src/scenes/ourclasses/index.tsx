import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image2
    },
    {
        name: "Ab Core Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis",
        image: image6
    }
]

type Props = {
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

function OurClasses({ setSelectedPage }: Props) {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="md:w-3/5">
                        <h1 className="heading">our classes</h1>
                        <p className="py-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ad doloribus. Corporis tenetur voluptas aspernatur dolorem laboriosam odit. Praesentium molestias natus veniam error autem et debitis in incidunt officia possimus.
                        </p>
                    </div>
                </motion.div>
                <div
                    className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
                >
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, idx) => (
                            <Class
                                key={`${item.name}-${idx}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>

                </div>

            </motion.div>
        </section>
    );
}

export default OurClasses;