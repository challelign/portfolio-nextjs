import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
// import NavLogo from "../public/assets/navLogo.png";
import NavLogo from "../public/logoipsum-224.svg";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#1f2937");
	// const [position, setPosition] = useState('fixed')
	// const router = useRouter();

	// useEffect(() => {
	//   if (
	//     router.asPath === '/property' ||
	//     router.asPath === '/crypto' ||
	//     router.asPath === '/netflix' ||
	//     router.asPath === '/twitch'
	//   ) {
	//     setNavBg('transparent');
	//     setLinkColor('#ecf0f3');
	//   } else {
	//     setNavBg('#ecf0f3');
	//     setLinkColor('#1f2937');
	//   }
	// }, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2   2xl:px-16">
				<div className="items-center flex text-2xl">
					<Link href="/">
						<a>
							<Image
								src={NavLogo}
								alt="/"
								width="125"
								height="50"
								className="cursor-pointer flex items-center justify-center"
							/>
						</a>
					</Link>
					<Link
						href="/"
						className="cursor-pointer text-4xl flex items-center justify-center font-bold"
					>
						Challelign
					</Link>
				</div>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link className="active" href="/">
								Home
							</Link>
						</li>
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link href="/#about">About</Link>
						</li>
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link href="/#skills">Skills</Link>
						</li>
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link href="/#projects">Projects</Link>
						</li>
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link href="/resume">Resume</Link>
						</li>
						<li className="ml-10 text-md uppercase hover:border-b hover:text-[#ff4040] hover:font-bold  ">
							<Link href="/#contact">Contact</Link>
						</li>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							{/* <Link href="/">
								<a>
									<Image src={NavLogo} width="87" height="35" alt="/" />
								</a>
							</Link> */}

							<div className="items-center flex ">
								<Link href="/">
									<a>
										<Image
											src={NavLogo}
											alt="/"
											width="125"
											height="50"
											className="cursor-pointer flex items-center justify-center"
										/>
									</a>
								</Link>
								<p className="cursor-pointer text-4xl flex items-center justify-center">
									Challelign
								</p>
							</div>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4 font-bold justify-center text-center">
								Let&#39;s build something legendary together
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									Projects
								</li>
							</Link>
							<Link href="/resume">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									Resume
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm hover:border-b hover:text-[#ff4040] hover:font-bold"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#ff4040]">
								Let&#39;s Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a
									href="https://www.linkedin.com/in/clint-briley-50056920a/"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedinIn />
									</div>
								</a>
								<a
									href="https://github.com/fireclint"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
								</a>
								<Link href="/#contact">
									<div
										onClick={() => setNav(!nav)}
										className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
									>
										<AiOutlineMail />
									</div>
								</Link>
								<Link href="/resume">
									<div
										onClick={() => setNav(!nav)}
										className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
									>
										<BsFillPersonLinesFill />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
