"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { allBlogs, Blog } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react"; // Make sure to install lucide-react: `npm install lucide-react`
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
    // ... (state and useEffect for background image fading)

    const featured = allBlogs.find((blog) => blog.slug === "new-adventures");
    const top2 = allBlogs.find((blog) => blog.slug === "done");
    const top3 = allBlogs.find((blog) => blog.slug === "new-offerings");
    const sorted = allBlogs
        .filter((p) => p.published)
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

    return (
        <Suspense fallback={<p>Loading blog...</p>}>
            <div id="blog-page" className="relative pb-16">
                {/* ... (background image) */}
                <div className="z-10">
                    <Navigation />
                    <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                        {/* ... */}
                        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 ">
                            {featured && (
                                <Card>
                                    <Link href={`/blog/${featured?.slug}`}>
                                        <article className="relative w-full h-full p-4 md:p-8">
                                            {/* ... (article content) */}
                                        </article>
                                    </Link>
                                </Card>
                            )}

                            <div className="flex flex-col w-full mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                                {[top2, top3].map((blog) =>
                                    blog && (
                                        <Card key={blog.slug}>
                                            <Article blog={blog} />
                                        </Card>
                                    )
                                )}
                            </div>
                        </div>
                        {/* ... (rest of the content) */}
                    </div>
                </div>
            </div>
        </Suspense>
    );
}