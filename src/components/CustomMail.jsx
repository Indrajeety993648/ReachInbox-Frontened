import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
	FaCaretDown,
	FaEye,
	FaImage,
	FaRegSmile,
	FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }) {
	const [replyData, setReplyData] = useState({
		to: "",
		from: "",
		subject: "",
		body: "",
	});

	const handleSendReply = async () => {
		const token = localStorage.getItem("token");
		try {
			await axios.post(
				`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
				{
					to: replyData.to,
					from: replyData.from,
					subject: replyData.subject,
					body: replyData.body,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			);
			console.log("Reply sent successfully");
			onClose();
		} catch (error) {
			console.error("Error sending reply:", error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setReplyData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleTextAreaChange = (e) => {
		const { name, value } = e.target;
		setReplyData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div className="bg-gray-400/25 fixed top-0 left-0 flex justify-center items-center h-full w-full z-20 p-4">
			<div className="bg-white dark:bg-[#141517] w-full sm:w-4/5 lg:w-1/2 h-full sm:h-4/5 rounded-lg border border-[#E0E0E0] dark:border-[#41464B] flex flex-col">
				<div className="flex justify-between items-center px-4 bg-[#F8F9FA] dark:bg-[#23272C] rounded-t-lg py-2 border-b border-[#E0E0E0] dark:border-[#41464B]">
					<div className="text-[#5B5F66] pl-4 text-sm font-bold dark:text-white">
						Reply
					</div>
					<div onClick={onClose}>
						<RxCross2 className="text-[#5B5F66] text-xl cursor-pointer dark:text-white" />
					</div>
				</div>

				<div className="flex flex-col p-4 flex-grow overflow-y-auto">
					<div className="flex text-sm py-2 border-b border-[#E0E0E0] dark:border-[#41464B]">
						<div className="text-[#5B5F66] dark:text-[#BAB9BD]">To :</div>
						<input
							className="bg-transparent ml-4 flex-grow dark:text-white border-b border-[#E0E0E0] dark:border-[#41464B] focus:outline-none"
							placeholder="Recipient's Email"
							name="to"
							value={replyData.to}
							onChange={handleInputChange}
						/>
					</div>

					<div className="flex text-sm py-2 border-b border-[#E0E0E0] dark:border-[#41464B]">
						<div className="text-[#5B5F66] dark:text-[#BAB9BD]">From :</div>
						<input
							className="bg-transparent ml-4 flex-grow dark:text-white border-b border-[#E0E0E0] dark:border-[#41464B] focus:outline-none"
							placeholder="Your Email"
							name="from"
							value={replyData.from}
							onChange={handleInputChange}
						/>
					</div>

					<div className="flex text-sm py-2 border-b border-[#E0E0E0] dark:border-[#41464B]">
						<div className="text-[#5B5F66] dark:text-[#BAB9BD]">Subject :</div>
						<input
							className="bg-transparent ml-4 flex-grow dark:text-white border-b border-[#E0E0E0] dark:border-[#41464B] focus:outline-none"
							placeholder="Subject"
							name="subject"
							value={replyData.subject}
							onChange={handleInputChange}
						/>
					</div>

					<div className="flex text-sm py-2 px-1 flex-grow">
						<textarea
							className="bg-transparent w-full h-full dark:text-white border border-[#E0E0E0] dark:border-[#41464B] p-2 resize-none focus:outline-none"
							placeholder="Message Body"
							name="body"
							value={replyData.body}
							onChange={handleTextAreaChange}
						/>
					</div>
				</div>

				<div className="bg-[#F8F9FA] dark:bg-[#23272C] border-t border-[#E0E0E0] dark:border-[#41464B] px-4 py-2 flex items-center justify-between">
					<div
						className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-4 py-2 rounded-md flex items-center cursor-pointer text-white text-sm"
						onClick={handleSendReply}
					>
						Send <FaCaretDown className="ml-2" />
					</div>
					<div className="flex space-x-3 text-[#5B5F66] dark:text-[#ADADAD] text-sm">
						<div>
							<BsLightningChargeFill />
						</div>
						<div>
							<FaEye />
						</div>
						<div>
							<FaImage />
						</div>
						<div>
							<FaRegSmile />
						</div>
						<div>
							<FaUserMinus />
						</div>
						<div>
							<IoMdCode />
						</div>
						<div>
							<IoLinkSharp />
						</div>
						<div>
							<TbSquareLetterA />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomMail;
