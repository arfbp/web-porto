import { Suspense, lazy } from 'react';
import { Layout } from "./components/Layout";

// Lazy load sections for better mobile performance
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div className="py-24 px-6 flex items-center justify-center">
    <div className="animate-pulse text-theme-text-muted">Loading...</div>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </Layout>
  );
}
