"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="flex h-screen items-center justify-center overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-4/5">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Katana Studio - Your Partner in Digital Journey
              </h4>
              <h1 className="mb-5 pr-10 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Empowering Your{"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Business
                </span>
                {"   "}with Innovative IT Solutions
              </h1>
              <p>
                We provide tailored IT consulting services to simplify your
                operations, enhance productivity, and drive digital
                transformation.
              </p>
              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <Link href="/support">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get a Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
