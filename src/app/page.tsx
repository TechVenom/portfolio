"use client";

import Hero from "../components/Hero";
import SkillMatrix from "../components/SkillMatrix";
import FeaturedProjects from "../components/FeaturedProjects";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillMatrix />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Contact />
    </>
  );
}
