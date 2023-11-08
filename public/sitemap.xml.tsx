export default function Sitemap() {
    return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx:...) => {
    ctx.res.setHeader("Content-Type", "text/xml");
    const xml = await generateSitemap();
    ctx.res.write(xml);
    ctx.res.end();

    return {
        props: {},
    };

}

async function generateSitemap(): Promise<string> {
    const pages = await getPages(

    );
    const 


    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.example.com/foo.html</loc>
        <lastmod>2022-06-04</lastmod>
      </url>
    </urlset>`
}