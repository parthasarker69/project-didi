import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import img1 from '../../../assets/ai logos/image1.png'
import img2 from '../../../assets/ai logos/image2.png'
import img3 from '../../../assets/ai logos/image3.png'
import img4 from '../../../assets/ai logos/image4.png'
import img5 from '../../../assets/massege characters/image5.png'


import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";


export default function MenuDefault() {
    return (
        <div className="px-2 relative w-full">
            <Menu>
                <MenuHandler>
                    <Button className="bg-[#E6E6E6] text-black w-48 text-[15px] flex items-center gap-3 px-9 rounded-none"><img className="w-[23px] h-[23px]" src={img1} alt="" />Model <AiOutlineDown></AiOutlineDown></Button>
                </MenuHandler>
                <MenuList className="bg-[#B8B8B8] p-0 rounded-none">
                    <MenuItem className="text-black bg-[#334155] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img1} alt="" /> ChatGpt</MenuItem>
                    <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img2} alt="" /> UnternehmensGPT</MenuItem>
                    <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img3} alt="" /> Llama 2</MenuItem>
                    <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img4} alt="" /> DALL-e 2</MenuItem>
                </MenuList>
            </Menu>
            <div className="h-[450px] overflow-y-scroll messages">

                <div className="w-1/2 flex items-start ms-auto right-0 my-5">
                    <p className="text-[11px] bg-[#424242] text-white min-h-[80px] flex items-center px-3 rounded-md min-w-[400px] max-w-[800px]">Messages from the user</p>
                    <img className="w-[60px] h-[60px]" src={img5} alt="" />
                </div>

                <div className="flex items-start  gap-2 w-2/3">
                    <img className="w-[40px] h-[40px]" src={img1} alt="" />
                    <p className="text-[11px] bg-[#424242] text-white min-h-[80px] flex items-center px-3 rounded-md min-w-[400px] max-w-[800px]">Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.
                        Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.
                        Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.</p>
                </div>
                <div className="flex items-start w-1/2 ms-auto my-5 ">
                    <p className="text-[11px] bg-[#424242] text-white min-h-[80px] flex items-center px-3 rounded-md min-w-[400px] ">Messages from the user</p>
                    <img className="w-[60px] h-[60px]" src={img5} alt="" />
                </div>
                <div className="flex items-start gap- w-2/3">
                    <img className="w-[40px] h-[40px]" src={img1} alt="" />
                    <p className="text-[11px] bg-[#424242] text-white min-h-[80px] flex items-center px-3 rounded-md min-w-[400px] max-w-[800px]">Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.
                        Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.
                        Answers from AI Model are shown here. Answers from AI Model are shown here. Answers from AI Model are shown here.</p>
                </div>
               
            </div>
            <div className="w-full p-5 absolute bottom-0 bg-white left-0">
                <div className=" w-3/5 mx-auto flex justify-between border border-black rounded-md px-5 py-1 sticky bottom-0">
                    <input type="search" name="Send Massege" id="" placeholder="Send Massege" className="p-3 w-full active:outline-none focus:outline-none"></input>
                    <button><IoMdSend className="text-2xl"></IoMdSend></button>
                </div>
            </div>
        </div>
    );
}