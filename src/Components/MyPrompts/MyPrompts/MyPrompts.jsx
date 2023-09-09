import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import person from '../../../assets/massege characters/image5.png'
import React from "react";

import img1 from '../../../assets/color plates/Rectangle 1.png'
import img2 from '../../../assets/color plates/Rectangle 2.png'
import img3 from '../../../assets/color plates/Rectangle 3.png'
import img4 from '../../../assets/color plates/Rectangle 4.png'
import img5 from '../../../assets/color plates/Rectangle 5.png'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Prompt } from "../../Library/Components/Prompt/Prompt";

const MyPrompts = () => {

    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "Meine Prompts",
            value: "html",
        },
        {
            label: "My List",
            value: "react",

        },
        {
            label: "FavoritesFavorites",
            value: "vue",
        },
        {
            label: "Liked Prompts",
            value: "angular",

        },
    ];

    const prompts = [
        {
            id: 1,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 2,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 3,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 4,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 5,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
        {
            id: 6,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 8,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        }
    ]

    return (
        <div className="grow">
            <div className="flex">
                <div className="w-1/4">
                    <div>
                        <h1 className="flex gap-3 text-[25px] font-extrabold items-center mt-[31px] mb-[25px] ms-[10px]"> <AiOutlineStar className="font-extrabold "></AiOutlineStar> My Prompts </h1>
                    </div>
                    <div className="bg-[#424242]  mb-3 items-center py-5 rounded-md">
                        <button className="bg-white text-black py-1 ps-5 w-[80px] rounded-md flex items-center text-xs relative ms-auto right-3">Edit<FiEdit3 ></FiEdit3></button>
                        <div className="text-center">
                            <img src={person} className="bg-[#424242] rounded-full w-[120px] h-[120px] mx-auto " alt="" />
                            <h1 className="text-xl font-bold text-white mt-6">Digital Dieter</h1>
                            <p className="text-white text-[15px] mt-2">User</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-2/3 ms-3 me-auto mt-[86px]">
                        <Tabs value={activeTab}>
                            <TabsHeader
                                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                                indicatorProps={{
                                    className:
                                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                                }}
                            >
                                {data.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className={activeTab === value ? "text-gray-900" : ""}
                                    >
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value, desc }) => (
                                    <TabPanel key={value} value={value}>
                                        {desc}
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>
                    <div className="grid grid-cols-4 mt-5 ms-4 gap-[10px] clear-left w-5/6 mb-3">
                        {prompts.map(prompt => <Prompt
                            key={prompt.id}
                            prompt={prompt}
                        ></Prompt>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPrompts;