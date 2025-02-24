import { notFound } from "next/navigation";

const getNews = async () => {
    return [
        { id: "1", title: "Next.js 14 chiqdi!", content: "Next.js 14 yangi imkoniyatlar bilan..." },
        { id: "2", title: "React Server Components haqida", content: "RSC bilan endi..." }
    ];
};

export async function generateStaticParams() {
    const news = await getNews();
    return news.map((item) => ({ id: item.id }));
}

export default async function NewsPage({ params }: { params: { id: string } }) {
    const news = await getNews();
    const article = news.find((item) => item.id === params.id);

    if (!article) {
        return notFound();
    }

    return (
        <div>
            yangilik: {article.title}
        </div>
    );
}
