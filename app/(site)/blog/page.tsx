import BlogItem from "@/components/Blog/BlogItem";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Katana Studio",
  description:
    "This is Blog page for Katana studio - Your Partner in Digital Journey",
  // other metadata
  openGraph: {
    title: "Blog Page - Katana Studio",
    description:
      "This is Blog page for Katana studio - Your Partner in Digital Journey",
    type: "website",
    url: "https://katana.studio/blog",
    images: "/assets/images/logo/logo-light.svg",
  },
};

const BlogPage = async () => {
  const allPosts = getAllPosts();

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {allPosts.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
