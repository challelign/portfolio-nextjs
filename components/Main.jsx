import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className=" w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto py-3 flex justify-center items-center ">
				<div>
					<p className="uppercase text-2xl sm:text-4xl md:text-4xl tracking-widest text-gray-600 gap-10">
						LET'S BUILD
						<span className="text-[#ff4040] font-bold">SOMETHING</span> TOGETHER
					</p>
					<h1 className="py-4 text-2xl sm:text-4xl md:text-4xl text-gray-700">
						Hi, I'm <span className="">Challelign</span>
					</h1>
					<h1 className="py-2 text-2xl sm:text-4xl md:text-4xl text-gray-700">
						<span className="text-[#ff4040]">A Full Stack</span> Web Developer
					</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] md:max-w-[70%] m-auto text-lg sm:text-xl md:text-xl">
						I’m a Fullstack Developer building responsive front-end and backend
						web applications integrating back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/clint-briley-50056920a/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/fireclint"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>
						<Link href="/resume">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
