// src/App.js
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { profile } from "./data/profile";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`site-root theme-${theme}`}>
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="header-left">
            <div className="header-logo">
              <span className="logo-initial">
                {profile.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="header-name">{profile.name}</div>
              <div className="header-role">{profile.role}</div>
            </div>
          </div>

          <div className="header-right">
            <nav className="header-nav">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="site-main">
        {/* Hero */}
        <motion.section
          id="hero"
          className="section hero-section"
          variants={sectionVariants}
          initial="hidden"
          animate="show"
          custom={0.05}
        >
          <div className="container hero-layout">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="dot-live" />
                Open to Internships & Junior Developer Roles
              </div>

              <h1 className="hero-title">
                Turning{" "}
                <span className="hero-highlight">code, cloud & creativity</span>{" "}
                into real-world projects.
              </h1>

              <p className="hero-subtitle">{profile.headline}</p>

              <p className="hero-body">{profile.about}</p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View my projects
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact me
                </a>
              </div>

              <div className="hero-meta-row">
                <div className="meta-block">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{profile.location}</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">Core Focus</span>
                  <span className="meta-value">
                    Python · Django · MERN · Cloud
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo-card">
                <div className="hero-photo-glow" />
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="hero-photo"
                />
                <div className="hero-photo-tag">
                  <span className="dot-live small" />
                  B.Tech CSE · 2026
                </div>
              </div>

              <div className="hero-pill-row">
                <span className="chip">Certified Python Developer</span>
                <span className="chip">Certified AWS Cloud Developer</span>
                <span className="chip">Full-stack • Cloud-native</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.05}
        >
          <div className="container">
            <div className="section-header">
              <h2>About</h2>
              <p>
                A quick snapshot of who I am as a developer and how I like to
                work.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  I&apos;m a Computer Science engineering student who loves
                  taking ideas from scratch and turning them into working
                  products. I enjoy combining{" "}
                  <strong>clean backend logic</strong>,{" "}
                  <strong>usable frontend interfaces</strong>, and{" "}
                  <strong>cloud deployment</strong> into one smooth pipeline.
                </p>
                <p>
                  My recent work includes building a plagiarism checker
                  platform, portfolio applications, and cloud-hosted full-stack
                  systems using Django, React, Node.js, and modern DevOps
                  practices.
                </p>
              </div>
              <div className="about-side">
                <div className="about-card">
                  <h3>What I like building</h3>
                  <ul>
                    <li>Developer tools & dashboards</li>
                    <li>APIs and backend services</li>
                    <li>Portfolio / product web apps</li>
                    <li>Cloud-hosted full-stack projects</li>
                  </ul>
                </div>
                <div className="about-card">
                  <h3>Currently exploring</h3>
                  <ul>
                    <li>Advanced DevOps workflows</li>
                    <li>Scalable cloud-native architectures</li>
                    <li>AI integrations into web products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="section section-alt"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.07}
        >
          <div className="container">
            <div className="section-header">
              <h2>Skills</h2>
              <p>
                The technologies I use to design, build, and deploy applications
                end-to-end.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>Languages</h3>
                <div className="chip-row">
                  {profile.skills.languages.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <h3>Frameworks & Libraries</h3>
                <div className="chip-row">
                  {profile.skills.frameworks.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <h3>Cloud & Databases</h3>
                <div className="chip-row">
                  {profile.skills.cloud.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                  {profile.skills.databases.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <h3>Tools & Platforms</h3>
                <div className="chip-row">
                  {profile.skills.tools.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.09}
        >
          <div className="container">
            <div className="section-header">
              <h2>Projects</h2>
              <p>Some of the work that represents how I think and build.</p>
            </div>

            <div className="projects-grid">
              {profile.projects.map((project) => (
                <motion.article
                  key={project.name}
                  className="project-card"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <h3>{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-highlight">{project.highlight}</p>
                  <div className="chip-row">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-github-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          className="section section-alt"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.11}
        >
          <div className="container">
            <div className="section-header">
              <h2>Experience</h2>
              <p>Where I&apos;ve applied my skills in real projects.</p>
            </div>

            <div className="timeline">
              {profile.experience.map((exp) => (
                <div className="timeline-item" key={exp.company}>
                  <div className="timeline-dot" />
                  <div className="timeline-body">
                    <h3>{exp.role}</h3>
                    <p className="timeline-meta">
                      {exp.company} · {exp.duration}
                    </p>
                    <ul>
                      {exp.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education & Contact */}
        <motion.section
          id="contact"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.13}
        >
          <div className="container">
            <div className="edu-contact-grid">
              <div>
                <div className="section-header small-gap">
                  <h2>Education</h2>
                  <p>My academic background.</p>
                </div>
                <div className="education-list">
                  {profile.education.map((ed) => (
                    <div className="education-item" key={ed.degree}>
                      <h3>{ed.degree}</h3>
                      <p className="education-meta">
                        {ed.institute} · {ed.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="section-header small-gap">
                  <h2>Contact</h2>
                  <p>Let&apos;s work on something together.</p>
                </div>

                <div className="contact-list">
                  <a
                    href={`mailto:${profile.email}`}
                    className="contact-row"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope />
                    <span>{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`} className="contact-row">
                    <FaPhoneAlt />
                    <span>{profile.phone}</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    className="contact-row"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                <div className="cert-box">
                  <p className="cert-title">Certifications</p>
                  <ul>
                    {profile.certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-left">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
