"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
];

const images = [
    "/2023-10-oludeniz1700-sunsetheart-compressed.webp",
    "/2023-10-oludeniz1700-flyovercloud.webp",
    //"/image3.png",
    // Add more image URLs here
];

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadingOut(true);

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadingOut(false);
            }, 1000); // Adjust timing to match your CSS transition duration

        }, 25000); // Change 5000 to your desired interval in milliseconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <div
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                className={`absolute inset-0 z-0 bg-gray-900 bg-center bg-cover 
                   transition-opacity duration-1000 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Content that should not fade */}
            <div className="z-10">
                <nav className="my-16 animate-fade-in">
                    <ul className="flex items-center justify-center gap-5">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg duration-500 text-white hover:text-zinc-500 font-medium hover:font-bold"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />
                <div className="flex items-center justify-center"> {/* Added flex container */}
                    <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                        tangerine 🍊
                    </h1>
                </div> {/* Close flex container */}

                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-base text-white">

                        Servus, I am Tangerine! I cofounded {" "}

                        <Link
                            target="_blank"
                            href="https://22dconsulting.com"
                            className="underline duration-500 hover:text-zinc-500"
                        >
                            22d consulting
                        </Link>

                        {" "}<wbr />and I am investing through {" "}

                        <Link
                            target="_blank"
                            href="https://dahoam.ventures"
                            className="underline duration-500 hover:text-zinc-500"
                        >
                            dahoam ventures
                        </Link>

                        {" "}at night. See all my{" "}

                        <Link
                            target=""
                            href="/projects"
                            className="underline duration-500 hover:text-zinc-500"
                        >
                            Projects
                        </Link>

                        . <br /><br />Follow my paragliding adventures on{" "}

                        <Link
                            target="_blank"
                            href="https://youtube.com/@daallgeier"
                            className="underline duration-500 hover:text-zinc-500"
                        >
                            YouTube
                        </Link>

                        {" "} and see all my other socials on the{" "}
                        <Link
                            target=""
                            href="/contact"
                            className="underline duration-500 hover:text-zinc-500"
                        >
                            Contact
                        </Link>

                        {" "} page.

                    </h2>
                </div>
            </div>
        </div>
    );
}