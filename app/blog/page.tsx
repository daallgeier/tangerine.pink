"use client"; 

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { allBlogs } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { Suspense } from 'react'

const redis = Redis.fromEnv();

export const revalidate = 60;

const images = [
    '/2023-10-oludeniz1700-sunsetheart-compressed.webp',
    '/2023-10-oludeniz1700-flyovercloud.webp',
    // '/image3.png',
    // Add more image URLs here
];

export default async function BlogPage() {
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

    const views = (
        await redis.mget<number[]>(
            ...allBlogs.map((p) => ["pageviews", "blog", p.slug].join(":")),
        )
    ).reduce((acc, v, i) => {
        acc[allBlogs[i].slug] = v ?? 0;
        return acc;
    }, {} as Record<string, number>);


    const featured = allBlogs.find((blog) => blog.slug === "new-adventures")!;
    const top2 = allBlogs.find((blog) => blog.slug === "done")!;
    const top3 = allBlogs.find((blog) => blog.slug === "new-offerings")!;
    const sorted = allBlogs
        .filter((p) => p.published)
        /* .filter(
            (blog) =>
                blog.slug !== featured.slug
        ) */
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

    return (
        <Suspense fallback={<p>Loading blog...</p>}>
            <div className="relative pb-16"> {/* Added relative wrapper */}
                <div 
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    className={`absolute inset-0 z-0 bg-gray-900 bg-center bg-cover 
                        transition-opacity duration-1000 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}
                />
                <div className="z-10"> {/* Added z-index for content */}
                    <Navigation />
                    <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                        {/* ... (rest of your content remains the same) */}
                    </div>
                </div>
            </div>
        </Suspense>
    );
}