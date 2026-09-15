import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader2, ArrowLeft, CalendarDays } from "lucide-react";
import Seo from "../components/Seo";
import Section from "../components/Section";
import { api } from "../lib/api";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPost(null);
    setError(null);
    api
      .getBlogPost(slug)
      .then(setPost)
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) {
    return (
      <Section>
        <div className="text-center py-16">
          <p className="text-ink-soft">{error}</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-1.5 font-display font-semibold text-blue">
            <ArrowLeft className="h-4 w-4" />
            Blog'a dön
          </Link>
        </div>
      </Section>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center py-24 text-ink-soft">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <Section>
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-blue mb-6">
            <ArrowLeft className="h-4 w-4" />
            Tüm Yazılar
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wide text-mint-dark">
            <CalendarDays className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <h1 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">{post.title}</h1>
          {post.image ? (
            <img
              src={post.image}
              alt=""
              aria-hidden="true"
              className="mt-6 h-56 sm:h-72 w-full rounded-3xl object-cover"
            />
          ) : null}
          <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
