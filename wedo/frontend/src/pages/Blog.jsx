import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, ArrowRight, CalendarDays } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { api } from "../lib/api";

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getBlogPosts()
      .then(setPosts)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Seo title="Blog" description="STEM, robotik ve çocuk gelişimi üzerine yazılarımızı okuyun." />
      <PageHero eyebrow="Blog" title="STEM ve Robotik Dünyasından" subtitle="Ebeveynler ve eğitimciler için yazılar." />

      <Section>
        {!posts && !error ? (
          <div className="flex justify-center py-16 text-ink-soft">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : null}

        {error ? <p className="text-center text-coral-dark">{error}</p> : null}

        {posts?.length === 0 ? (
          <p className="text-center text-ink-soft">Henüz yayınlanmış bir yazı yok, yakında burada olacak!</p>
        ) : null}

        {posts?.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-3xl bg-white shadow-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                ) : null}
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wide text-mint-dark">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <h2 className="mt-3 font-display font-extrabold text-xl text-ink group-hover:text-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display font-semibold text-sm text-coral">
                    Devamını Oku
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </Section>
    </>
  );
}
