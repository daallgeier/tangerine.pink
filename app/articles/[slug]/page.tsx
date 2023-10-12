import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allArticles
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "articles", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header article={article} views={views} />
			<ReportView slug={article.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={article.body.code} />
			</article>
		</div>
	);
}
