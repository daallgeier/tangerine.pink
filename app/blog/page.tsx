"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { allBlogs, Blog } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";
import { Suspense } from 'react';

interface Props {
    blog: Blog;
    views?: number;
}

function Article({ blog, views }: Props) {
    return (
        <article className="relative flex flex-col p-4 md:p-6 lg:p-8">
            <div className="flex items-center justify-between gap-2">
                <div className="text-sm text-zinc-400">
                    {blog.date ? (
                        <time dateTime={new Date(blog.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                                dateStyle: "long",
                            }).format(new Date(blog.date))}
                        </time>
                    ) : (
                        <span> </span>
                    )}
                </div>
                {views !== undefined && (
                    <span className="flex items-center gap-1 text-sm text-zinc-400">
                        <Eye className="w-4 h-4" />{" "}
                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
                    </span>
                )}
            </div>
            <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl font-display">
                {blog.title}
            </h2>
            <p className="mt-4 leading-7 text-zinc-200">{blog.description}</p>
            <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 text-sm font-medium text-white hover:text-zinc-500"
            >
                Read more <span aria-hidden="true">&rarr;</span>
            </Link>
        </article>
    );
}

export const revalidate = 60;

const images = [
    '/2023-10-oludeniz1700-sunsetheart-compressed.webp',
    '/2023-10-oludeniz1700-flyovercloud.webp',
    '/image3.png',
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

        }, 5000); // Change 5000 to your desired interval in milliseconds

        return () => clearInterval(intervalId);
    }, []);


    const featured = allBlogs.find((blog) => blog.slug === "new-adventures");
    const top2 = allBlogs.find((blog) => blog.slug === "done");
    const top3 = allBlogs.find((blog) => blog.slug === "new-offerings");
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
            <div className="relative pb-16">
                <div
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    className={`absolute inset-0 z-0 bg-gray-900 bg-center bg-cover 
                        transition-opacity duration-1000 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}
                />
                <div className="z-10">
                    <Navigation />
                    <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                        <div className="max-w-2xl mx-auto lg:mx-0">
                            <h2 className="text-3xl pt-8 font-bold tracking-tight text-white sm:text-4xl">
                                Blog
                            </h2>
                            <p className="mt-4 text-white">
                                Welcome to my Blogs and Articles.  I am sharing my thoughts and experiences on topics like Organisational Security and Privacy as well as updates from my Sports and Adventures.
                            </p>
                        </div>
                        <div className="w-full h-px bg-zinc-800" />

                        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 ">
                            <Card>
                                <Link href={`/blog/${featured.slug}`}>
                                    <article className="relative w-full h-full p-4 md:p-8">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-xs text-zinc-100">
                                                {featured.date ? (
                                                    <time dateTime={new Date(featured.date).toISOString()}>
                                                        {Intl.DateTimeFormat(undefined, {
                                                            dateStyle: "medium",
                                                        }).format(new Date(featured.date))}
                                                    </time>
                                                ) : (
                                                    <span> </span>
                                                )}
                                            </div>
                                        </div>

                                        <h2
                                            id="featured-post"
                                            className="mt-4 text-3xl font-bold text-white group-hover:text-white sm:text-4xl font-display"
                                        >
                                            {featured.title}
                                        </h2>
                                        <p className="mt-4 leading-8 duration-150 text-white group-hover:text-white">
                                            {featured.description}
                                        </p>
                                        <div className="absolute bottom-4 md:bottom-8">
                                            <p className="hidden text-white hover:text-zinc-50 lg:block">
                                                Read more <span aria-hidden="true">&rarr;</span>
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </Card>

                            <div className="flex flex-col w-full mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                                {[top2, top3].map((blog) => (
                                    <Card key={blog.slug}>
                                        <Article blog={blog} /> 
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className="hidden w-full h-px md:block bg-zinc-800" />

                        <div className="grid grid-cols-1 mx-auto lg:mx-0 md:grid-cols-3">
                            <div className="grid grid-cols-1">
                                {sorted
                                    .filter((_, i) => i % 3 === 0)
                                    .map((blog) => (
                                        <Card key={blog.slug}>
                                            <Article blog={blog} />
                                        </Card>
                                    ))}
                            </div>
                            <div className="grid grid-cols-1">
                                {sorted
                                    .filter((_, i) => i % 3 === 1)
                                    .map((blog) => (
                                        <Card key={blog.slug}>
                                            <Article blog={blog} />
                                        </Card>
                                    ))}
                            </div>
                            <div className="grid grid-cols-1">
                                {sorted
                                    .filter((_, i) => i % 3 === 2)
                                    .map((blog) => (
                                        <Card key={blog.slug}>
                                            <Article blog={blog} />
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}