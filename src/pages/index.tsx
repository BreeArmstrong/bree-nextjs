import Head from "next/head";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

// TODO: Global color reference
export default function Home() {
  return (
    <div className="h-screen snap-y snap-proximity overflow-scroll z-0">
      <Head>
        <title>Bree | Web Dev</title>
        <meta
          name="description"
          content="A portfolio created using NextJs, Tailwind, and more"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Genos"
          rel="stylesheet"
        ></link>
      </Head>
      {/* Navbar */}
      {/* Moved to _app.tsx */}
      {/* hero */}
      <section className="snap-top" id="hero">
        <Hero />
      </section>
      {/* Skills */}
      {/* This will be a basic break down of my skills with a link to my full work experience page */}
      <section className="snap-center" id="skills">
        <Skills />
      </section>
      {/* projects */}
      {/* contact me */}
    </div>
  );
}
