import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

// Eagerly loaded — above the fold, always needed
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy loaded — only downloaded when user navigates to these pages
const Category = lazy(() => import("./pages/Category.tsx"));
const Treatment = lazy(() => import("./pages/Treatment.tsx"));
const Welfare = lazy(() => import("./pages/Welfare.tsx"));
const Sitemap = lazy(() => import("./pages/Sitemap.tsx"));
const Location = lazy(() => import("./pages/Location.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));

const queryClient = new QueryClient();

// Minimal inline loading state — avoids flash, no extra lib needed
const PageLoader = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--background, #0e0b07)",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: "2px solid #c9a96e30",
        borderTop: "2px solid #c9a96e",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/category/:catSlug/:slug" element={<Treatment />} />
            <Route path="/welfare" element={<Welfare />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/location/:slug" element={<Location />} />
            <Route path="/insights" element={<Blog />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
