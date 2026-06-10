import { articles } from "../data";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/blog/ArticleContent";

export async function generateStaticParams() {
  return articles.map(a=>({ slug:a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles.find(x=>x.slug===slug);
  if (!a) return {};
  return {
    title:`${a.title} — Blog Coderaft`,
    description:a.excerpt,
    openGraph:{ title:a.title, description:a.excerpt },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find(a=>a.slug===slug);
  if (!article) notFound();
  const related = articles.filter(a=>a.slug!==slug&&a.category===article.category).slice(0,2);
  return <ArticleContent article={article} related={related} />;
}
