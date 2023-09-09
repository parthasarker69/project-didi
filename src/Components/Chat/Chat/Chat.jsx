import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import ChatHistory from "../ChatHistory/ChatHistory";
import Messages from "../Messages/Messages";

const Chat = () => {
    return (
        <div>
            <div>
                <h1 className="flex gap-3 text-[25px] font-extrabold items-center mt-[31px] mb-[25px] ms-[10px]"> <BsChatDots className="font-extrabold "></BsChatDots> Chat </h1>
            </div>
            <div className="flex">
                <ChatHistory></ChatHistory>
                <Messages></Messages>
            </div>
        </div>
    );
};

export default Chat;