import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { blogPosts } from "@/data/blog";
import { usePageSeo } from "@/hooks/usePageSeo";

const Blog = () => {
  usePageSeo({
    title: "Aesthetic Insights Blog | Pelle Aesthetic & Cosmetic Islamabad",
    description: "Expert articles on cosmetic surgery, laser skincare, Botox trends, and skin health in Islamabad. Written by Dr. Tasneem Elahi's clinic — evidence-based, Pakistan-specific.",
    canonicalPath: "/insights",
    keywords: "cosmetic surgery blog islamabad, botox blog pakistan, laser skin blog islamabad, aesthetic insights islamabad, dr tasneem elahi blog",
  });

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      {/* Hero */}
      <section className="border-b border-border bg-secondary/30 py-24 md:py-32">
        <div className="container-luxe">
          <div className="eyebrow">Aesthetic Insights</div>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl max-w-3xl">
            Medical knowledge.<br />No jargon.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Evidence-based articles on cosmetic surgery, laser treatments, injectables, and skin health — written from 30+ years of clinical practice at Pelle Aesthetic & Cosmetic, Islamabad.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="container-luxe py-16 md:py-24">
        <div className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-8">Featured Article</div>
        <Link to={`/insights/${featured.slug}`} className="group grid gap-0 border border-border hover:border-primary transition-colors md:grid-cols-12">
          <div className="md:col-span-7 overflow-hidden">
            <img
              src={featured.featuredImage}
              alt={featured.featuredImageAlt}
              className="h-64 w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-105 md:h-full"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-secondary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="border border-accent/40 bg-accent/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-accent">{featured.category}</span>
              <span className="flex items-center gap-1 font-body text-[11px] text-muted-foreground"><Clock className="h-3 w-3" />{featured.readTime}</span>
            </div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl group-hover:text-primary transition-colors">{featured.title}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-accent group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </Link>
      </section>

      {/* Rest of posts */}
      <section className="container-luxe pb-24 md:pb-32">
        <div className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">More Insights</div>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {rest.map((post) => (
            <Link key={post.slug} to={`/insights/${post.slug}`} className="group bg-background hover:bg-secondary/30 transition-colors p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.2em] text-accent"><Tag className="h-3 w-3" />{post.category}</span>
                <span className="flex items-center gap-1 font-body text-[11px] text-muted-foreground"><Clock className="h-3 w-3" />{post.readTime}</span>
              </div>
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                className="w-full h-48 object-cover mb-6 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <h2 className="font-display text-2xl leading-tight mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-accent group-hover:gap-3 transition-all">
                Read <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <GeoDataLayer />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Blog;
