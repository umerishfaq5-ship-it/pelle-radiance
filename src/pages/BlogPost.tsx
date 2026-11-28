import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, MessageCircle, Tag } from "lucide-react";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPostBySlug(slug);
  const related = post ? blogPosts.filter((p) => post.relatedSlugs.includes(p.slug)) : [];

  usePageSeo(
    post
      ? { title: post.title + " | Pelle Aesthetic Islamabad", description: post.metaDescription, canonicalPath: `/insights/${slug}`, keywords: post.keywords }
      : { title: "Insights | Pelle Aesthetic", description: "Aesthetic medical insights from Pelle Aesthetic Islamabad." }
  );

  // BlogPosting schema (more precise than Article; includes speakable for AI Overviews)
  useEffect(() => {
    if (!post) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: {
        "@type": "ImageObject",
        url: `https://drtasneemshakir.com${post.featuredImage}`,
        width: 1200,
        height: 630,
      },
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      keywords: post.keywords,
      inLanguage: "en-PK",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".article-subtitle", ".article-intro"],
      },
      author: {
        "@type": "Person",
        name: "Dr. Tasneem Elahi",
        jobTitle: "Cosmetologist & Aesthetic Physician",
        url: "https://drtasneemshakir.com",
        worksFor: { "@type": "MedicalClinic", name: "Pelle Aesthetic & Cosmetic", url: "https://drtasneemshakir.com" },
      },
      publisher: {
        "@type": "Organization",
        name: "Pelle Aesthetic & Cosmetic",
        url: "https://drtasneemshakir.com",
        logo: {
          "@type": "ImageObject",
          url: "https://drtasneemshakir.com/logo.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://drtasneemshakir.com/insights/${slug}`,
      },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json"; s.id = "article-ld";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.getElementById("article-ld")?.remove(); };
  }, [post, slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <NavLight />
        <div className="container-luxe py-40 text-center">
          <h1 className="font-display text-5xl">Article not found</h1>
          <Link to="/insights" className="link-underline mt-8 inline-block">Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={post.featuredImage} alt={post.featuredImageAlt} className="h-full w-full object-cover grayscale-[30%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="container-luxe py-10 md:py-14">
          <Link to="/insights" className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-3 w-3" /> All Insights
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 border border-accent/40 bg-accent/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-accent"><Tag className="h-3 w-3" />{post.category}</span>
            <span className="flex items-center gap-1.5 font-body text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
            <span className="font-body text-xs text-muted-foreground">{new Date(post.publishDate).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="font-display text-4xl leading-tight md:text-6xl max-w-4xl">{post.title}</h1>
          <p className="article-subtitle mt-4 font-display text-xl italic text-accent max-w-3xl">{post.subtitle}</p>
        </div>
      </section>

      {/* Body */}
      <article className="container-luxe py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Main content */}
          <div className="md:col-span-8 prose-content">
            {post.sections.map((sec, i) => {
              if (sec.type === "paragraph") return <p key={i} className="font-body text-base leading-[1.85] text-foreground/80 mb-6">{sec.content}</p>;
              if (sec.type === "h2") return <h2 key={i} className="font-display text-3xl mt-12 mb-5 md:text-4xl">{sec.content}</h2>;
              if (sec.type === "h3") return <h3 key={i} className="font-display text-2xl mt-8 mb-4">{sec.content}</h3>;
              if (sec.type === "list") return (
                <ul key={i} className="mb-6 space-y-2">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                      <span className="text-accent mt-1 shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              );
              if (sec.type === "quote") return (
                <blockquote key={i} className="my-10 border-l-2 border-accent bg-secondary/40 p-8">
                  <p className="font-display text-xl italic leading-relaxed text-foreground/90 mb-4">"{sec.text}"</p>
                  <footer className="font-body text-xs uppercase tracking-[0.22em] text-accent">{sec.attribution}</footer>
                </blockquote>
              );
              if (sec.type === "table") return (
                <div key={i} className="my-10 overflow-x-auto">
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">{sec.caption}</div>
                  <table className="w-full border border-border/50 text-sm">
                    <thead>
                      <tr className="bg-secondary/60">
                        {sec.headers.map((h) => <th key={h} className="border border-border/30 px-4 py-3 text-left font-body text-xs uppercase tracking-[0.15em] text-foreground/70">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                          {row.map((cell, ci) => <td key={ci} className="border border-border/20 px-4 py-3 font-body text-sm text-foreground/75">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
              if (sec.type === "image") return (
                <figure key={i} className="my-10">
                  <img src={sec.src} alt={sec.alt} className="w-full object-cover" loading="lazy" />
                  <figcaption className="mt-3 font-body text-xs text-muted-foreground text-center italic">{sec.caption}</figcaption>
                </figure>
              );
              return null;
            })}

            {/* Good to Know */}
            <div className="mt-12 border border-accent/30 bg-accent/5 p-8">
              <div className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-5">✦ Good to Know — Key Takeaways</div>
              <ul className="space-y-3">
                {post.goodToKnow.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <span className="text-accent shrink-0 mt-0.5">◈</span>{tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-foreground p-8 text-background">
              <div className="eyebrow !text-accent">Book a Consultation</div>
              <h3 className="mt-3 font-display text-3xl">Ready to discuss your treatment?</h3>
              <p className="mt-3 font-body text-sm text-background/70">Speak directly with Dr. Tasneem Elahi. All consultations are private, appointment-only, at our I-8/3 clinic, Islamabad.</p>
              <a href="https://wa.me/923335100650" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-body text-xs uppercase tracking-[0.22em] text-white hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> WhatsApp Dr. Tasneem
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Author */}
              <div className="border border-border/50 bg-secondary/30 p-6">
                <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Written by</div>
                <div className="font-display text-xl mb-1">Dr. Tasneem Elahi</div>
                <div className="font-body text-xs text-muted-foreground mb-3">Cosmetologist & Aesthetic Physician<br />30+ Years Clinical Experience<br />Pelle Aesthetic & Cosmetic, Islamabad</div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="border border-border/50 p-6">
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Related Articles</div>
                  <div className="space-y-5">
                    {related.map((r) => (
                      <Link key={r.slug} to={`/insights/${r.slug}`} className="group block">
                        <div className="font-body text-[10px] uppercase tracking-[0.18em] text-accent mb-1">{r.category}</div>
                        <div className="font-display text-base leading-tight group-hover:text-primary transition-colors">{r.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Location links */}
              <div className="border border-border/50 p-6">
                <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">We Serve</div>
                <div className="space-y-2">
                  {[
                    { label: "DHA Islamabad", slug: "dha-islamabad" },
                    { label: "F-6 & F-7 Islamabad", slug: "f6-f7-islamabad" },
                    { label: "Bahria Town", slug: "bahria-town-islamabad" },
                    { label: "E-11 & F-10", slug: "e11-f10-islamabad" },
                    { label: "Gulberg Greens", slug: "gulberg-greens-islamabad" },
                  ].map((l) => (
                    <Link key={l.slug} to={`/location/${l.slug}`} className="block font-body text-xs text-foreground/70 hover:text-accent transition-colors py-1 border-b border-border/20">
                      → {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <GeoDataLayer />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default BlogPost;
