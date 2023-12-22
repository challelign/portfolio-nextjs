import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useToaster } from "react-hot-toast";

import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { sendContactForm } from "../pages/lib/api";
import { toast } from "react-hot-toast";

const Contact = () => {
	const { toasts, handlers } = useToaster();

	const initValues = { name: "", email: "", subject: "", message: "" };

	const initState = { isLoading: false, error: "", values: initValues };
	const [state, setState] = useState(initState);
	const [message, setMessage] = useState("");
	const [touched, setTouched] = useState({});
	const { values, isLoading, error } = state;
	const onBlur = ({ target }) =>
		setTouched((prev) => ({ ...prev, [target.name]: true }));

	const handleChange = ({ target }) =>
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));
		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			setMessage("Message sent. Thank Your");

			toast.success("Message sent. Thank Your", {
				duration: 3000,
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
			toast.error(
				{ error },
				{
					duration: 3000,
				}
			);
		}
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const fromData = {};
	// 	Array.from(e.currentTarget.elements).forEach((field) => {
	// 		if (!field.name) return;
	// 		fromData[field.name] = field.value;
	// 	});

	// 	await sendContactForm(fromData);
	// };
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
				<p className="text-xl tracking-widest uppercase text-[#ff4040]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={ContactImg}
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2">Challelign Tilahun</h2>
								<p>Backend and Front-End Developer</p>
								<p className="py-4">
									I am available for freelance or full-time positions. Contact
									me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/challelign-tilahun-95190611a/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href="https://github.com/challelign"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
									</a>

									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<AiOutlineMail />
									</div>
									<Link href="/resume">
										<a>
											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
												<BsFillPersonLinesFill />
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							{message !== "" ? (
								<div className="error">
									<div
										className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
										role="alert"
									>
										<span className="font-medium">Will Contact You soon</span>
										{" ,"}
										{message}
									</div>
								</div>
							) : (
								""
							)}
							<form
								onSubmit={onSubmit}
								method="POST"
								encType="multipart/form-data"
							>
								<div className="grid md:grid-cols gap-4 w-full py-2">
									<div
										className="flex flex-col"
										isRequired
										isInvalid={touched.name && !values.name}
									>
										<label className="uppercase text-sm py-2">Name</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name="name"
											value={values.name}
											onChange={handleChange}
											onBlur={onBlur}
										/>
										<FormErrorMessage>Required</FormErrorMessage>
									</div>
								</div>
								<div
									className="flex flex-col py-2"
									isRequired
									isInvalid={touched.email && !values.email}
								>
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										// onChange={handleChange}
										name="email"
										value={values.email}
										onChange={handleChange}
										onBlur={onBlur}
									/>
									<FormErrorMessage>Required</FormErrorMessage>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										isRequired
										isInvalid={touched.subject && !values.subject}
									>
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name="subject"
										value={values.subject}
										onChange={handleChange}
										onBlur={onBlur}
									/>
									<FormErrorMessage>Required</FormErrorMessage>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										isRequired
										isInvalid={touched.message && !values.message}
									>
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										// onChange={handleChange}
										rows="3"
										name="message"
										value={values.message}
										onChange={handleChange}
										onBlur={onBlur}
									></textarea>
									<FormErrorMessage>Required</FormErrorMessage>
								</div>
								<button
									className="w-full p-4 text-gray-100 mt-4"
									colorScheme="blue"
									isLoading={isLoading}
									disabled={
										!values.name ||
										!values.email ||
										!values.subject ||
										!values.message
									}
									onClick={onSubmit}
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<a>
							<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
								<HiOutlineChevronDoubleUp
									className="text-[#ff4040]"
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
