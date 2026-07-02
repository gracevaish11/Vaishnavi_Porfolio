import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Terminal,
  Database,
  Wrench,
  BarChart3,
  Code2,
  GraduationCap,
  Briefcase,
  Send,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "AI Data Annotator",
    company: "Outlier",
    location: "Freelance · Remote",
    period: "Dec 2025 — Present",
    story:
      "The current chapter — where volume meets precision.",
    points: [
      "Evaluate 100+ AI-generated outputs daily against structured quality rubrics, catching inconsistencies before they compound.",
      "Turn recurring error patterns into structured feedback that measurably sharpens model output quality.",
      "Hold accuracy at high volume, under pressure — the discipline that makes every review count.",
    ],
  },
  {
    role: "Technical Demonstrator",
    company: "National University of Ireland Maynooth",
    location: "Maynooth, Ireland",
    period: "Feb 2025 — Jun 2025",
    story:
      "Where teaching became its own form of support engineering.",
    points: [
      "Supported 300+ students per session across Windows and Linux, applying root cause analysis to cut down repeat incidents.",
      "Assessed 300+ assignments per semester as part of a 10-person team, keeping feedback consistent at scale.",
      "Documented recurring failure patterns into a shared knowledge base — leaving the team stronger than I found it.",
    ],
  },
  {
    role: "Release & Application Support Analyst",
    company: "Bombay Stock Exchange (BSE)",
    location: "Mumbai, India",
    period: "Jun 2022 — Aug 2024",
    story:
      "The proving ground — 26+ months of SLA-driven, client-facing support.",
    points: [
      "Triaged 40+ monthly incidents through Jira and Redmine while holding 100% SLA compliance across all client-facing services.",
      "Ran pre-release data validation across 3 deployment environments to catch defects before they shipped.",
      "Produced operational reports that gave leadership clear visibility into system health and incident trends.",
      "Handled data access requests for 200+ users with strict care for confidentiality and audit trails.",
      "Recognised twice as Employee of the Month in 2023 — the payoff of consistency under pressure.",
    ],
  },
];

const SKILLS = [
  {
    label: "IT Support & Operations",
    icon: Wrench,
    items: [
      "Incident Management & Triage",
      "Root Cause Analysis",
      "Application Support",
      "Technical Troubleshooting",
      "SLA Management",
      "Release & Deployment Support",
      "Data Validation & Integrity",
      "Technical Documentation",
      "User Access & Query Handling",
    ],
  },
  {
    label: "Dev Tools & Platforms",
    icon: Terminal,
    items: ["Jira", "Redmine", "Git", "SVN", "GitHub", "Windows", "Linux", "Microsoft 365"],
  },
  {
    label: "Data Analysis & Reporting",
    icon: BarChart3,
    items: [
      "Python (pandas, NumPy, scikit-learn, matplotlib)",
      "SQL",
      "R",
      "Power BI",
      "Excel (Pivot, VLOOKUP)",
      "Statistical Modelling",
    ],
  },
  {
    label: "Databases & Web",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "RESTful APIs",
    ],
  },
];

const PROJECTS = [
  {
    title: "NYC Flights Data Analysis",
    tag: "Python · pandas · matplotlib",
    desc: "Ingested and analysed 336,000+ flight records to surface delay patterns and benchmark carrier efficiency — turning raw operational data into a clear insights report.",
  },
  {
    title: "Bayesian Modelling of Ecological Data",
    tag: "R · JAGS · MCMC",
    desc: "Applied Bayesian regression and MCMC inference to a dataset riddled with missing values across 46 environmental predictors, using multiple imputation to still produce robust estimates.",
  },
  {
    title: "Python Job Alert Bot",
    tag: "Python · REST APIs · SQLite",
    desc: "Built an end-to-end real-time data pipeline using the Reed and Adzuna APIs — automating ingestion, deduplication, and delivery.",
  },
  {
    title: "Spatial Data Analysis",
    tag: "PostGIS · SQL",
    desc: "Queried 10,000+ geospatial records to map accessibility gaps and support evidence-based decisions across regions.",
  },
  {
    title: "CollabSync",
    tag: "MERN · Real-time",
    desc: "Full-stack real-time collaboration platform on MongoDB, Express, React, and Node.js — authentication, live sync, full ownership start to finish.",
  },
  {
    title: "Doctor Appointment Booking System",
    tag: "Relational DB · Full-stack",
    desc: "Designed a database-driven app for patient records and scheduling. Awarded 1st place in an inter-college competition.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Coursera",
    status: "In Progress",
  },
  {
    name: "Power BI Essential Training",
    issuer: "LinkedIn Learning",
    status: "Completed",
  },
];

const EDUCATION = [
  {
    degree: "MSc Data Science & Analytics",
    school: "Maynooth University, Ireland",
    period: "2024 — 2025",
    grade: "First Class Honours",
  },
  {
    degree: "BSc Information Technology",
    school: "University of Mumbai, India",
    period: "2019 — 2022",
    grade: "First Class Honours",
  },
];

function Portfolio() {
  const [active, setActive] = useState("home");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });

    // Reveal-on-scroll
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            reveal.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    return () => {
      io.disconnect();
      reveal.disconnect();
    };
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
        [data-reveal].is-visible{opacity:1;transform:translateY(0)}
        [data-reveal-delay="1"]{transition-delay:.08s}
        [data-reveal-delay="2"]{transition-delay:.16s}
        [data-reveal-delay="3"]{transition-delay:.24s}
        [data-reveal-delay="4"]{transition-delay:.32s}
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground font-display font-bold shrink-0">
              VR
            </span>
            <span className="hidden sm:block font-display font-semibold tracking-tight">
              Vaishnavi Rajput
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active === n.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* Scroll progress line */}
      <ScrollProgress />

      {/* HERO — Cybernetic neural terminal */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[55%] bg-accent/15 blur-[110px] rounded-full animate-pulse" />
          <div
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[55%] bg-[oklch(0.55_0.2_270)]/15 blur-[110px] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Terminal chrome */}
            <div data-reveal className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-destructive/60" />
                <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.15_85)]/70" />
                <span className="w-2 h-2 rounded-full bg-accent/70" />
                <span className="mono text-[10px] text-muted-foreground ml-3 tracking-wider">
                  ~/vaishnavi — support.session
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 mono text-[10px] px-2 py-1 rounded border border-accent/25 bg-accent/5 text-accent tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                System: Active
              </div>
            </div>

            <div
              data-reveal
              data-reveal-delay="1"
              className="inline-flex items-center gap-2 mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface text-muted-foreground mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Dublin, Ireland · Open to IT Support roles
            </div>

            <h1
              data-reveal
              data-reveal-delay="1"
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] mb-6"
            >
              Vaishnavi
              <br />
              <span className="text-gradient">Rajput.</span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="2"
              className="text-xl sm:text-2xl font-display text-foreground mb-4"
            >
              IT Support Analyst
              <span className="text-accent"> / </span>
              <span className="text-muted-foreground">Data-driven</span>
            </p>

            <p
              data-reveal
              data-reveal-delay="3"
              className="max-w-xl text-base text-muted-foreground mb-8 leading-relaxed"
            >
              Dublin-based IT Support Analyst bringing{" "}
              <span className="text-foreground font-medium">
                data-analytics rigor
              </span>{" "}
              to SLA-driven support work — grounded in Windows and Linux, and
              sharper for the SQL, Python, and structured validation habits
              earned along the way.
            </p>

            {/* Status chips */}
            <div
              data-reveal
              data-reveal-delay="3"
              className="flex flex-wrap gap-2 mb-8"
            >
              <StatusChip color="accent" label="SUPPORT.CORE" />
              <StatusChip color="blue" label="DATA_ANALYTICS.mod" />
              <StatusChip color="accent" label="SLA_100%" />
            </div>

            <div
              data-reveal
              data-reveal-delay="4"
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-glow transition-all"
              >
                Initialize contact
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-accent/40 transition-colors font-medium"
              >
                <Download className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>

          {/* Right column — avatar with orbits */}
          <div
            data-reveal
            data-reveal-delay="2"
            className="relative mx-auto md:mx-0"
          >
            {/* Orbit rings */}
            <div className="absolute -inset-8 rounded-full border border-accent/15 [animation:spin_18s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/25 [animation:spin_28s_linear_infinite_reverse]" />
            <div className="absolute -inset-12 rounded-full bg-accent/20 blur-3xl" />

            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60" />

            <div className="relative h-60 w-60 sm:h-72 sm:w-72 rounded-full border-2 border-accent/50 bg-surface grid place-items-center overflow-hidden shadow-[0_0_60px_-10px_var(--accent-glow)]">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-accent/10" />

              <span className="relative font-display font-bold text-7xl sm:text-8xl text-gradient">
                VR
              </span>

              {/* Scanning beam */}
              <div className="absolute left-0 right-0 h-[2px] bg-accent/60 shadow-[0_0_12px_var(--accent-glow)] [animation:scanbeam_3.2s_ease-in-out_infinite]" />

              <div className="absolute bottom-4 mono text-[10px] tracking-widest text-muted-foreground">
                &gt; SUPPORT.READY
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -top-2 -right-6 hidden sm:flex items-center gap-1.5 mono text-[10px] px-2 py-1 rounded border border-accent/40 bg-background/80 backdrop-blur text-accent shadow-lg animate-[float_5s_ease-in-out_infinite]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              ANALYTICS: ON
            </div>
            <div
              className="absolute -bottom-2 -left-6 hidden sm:flex items-center gap-1.5 mono text-[10px] px-2 py-1 rounded border border-[oklch(0.65_0.18_255)]/40 bg-background/80 backdrop-blur text-[oklch(0.75_0.15_255)] shadow-lg animate-[float_6s_ease-in-out_infinite_reverse]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.18_255)]" />
              SUPPORT: ACTV
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 mono text-[10px] tracking-widest text-muted-foreground animate-pulse">
          scroll to begin the story ↓
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" kicker="Chapter 01 · About" title="Where the story begins.">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-reveal className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm an{" "}
              <span className="text-foreground font-medium">
                IT Support Analyst
              </span>{" "}
              who brings{" "}
              <span className="text-foreground font-medium">
                data-analytics skills
              </span>{" "}
              into every ticket — 26+ months across fast-paced, SLA-driven
              environments, backed by an MSc in Data Science &amp; Analytics
              (First Class Honours) from Maynooth University.
            </p>
            <p>
              I've diagnosed issues across Windows and Linux, triaged
              incidents through Jira and Redmine, and built the instinct for{" "}
              <span className="text-foreground font-medium">
                root cause analysis
              </span>{" "}
              that turns repeat problems into permanent fixes.
            </p>
            <p>
              My analytics toolkit — SQL, Python, structured data
              validation — isn't a parallel career. It's what makes my
              support work sharper: more evidence-based, more thorough, less
              guesswork.
            </p>
          </div>
          <div data-reveal data-reveal-delay="2" className="rounded-xl border border-border bg-surface p-6 space-y-5">
            <h4 className="mono text-xs uppercase tracking-widest text-accent">
              Education
            </h4>
            {EDUCATION.map((e) => (
              <div key={e.degree} className="pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="font-display font-semibold text-sm mb-1">
                  {e.degree}
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  {e.school}
                </div>
                <div className="flex flex-wrap gap-x-3 mono text-[11px]">
                  <span className="text-accent">{e.period}</span>
                  <span className="text-muted-foreground">{e.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        kicker="Chapter 02 · Experience"
        title="The journey, one milestone at a time."
      >
        <div className="relative">
          {/* Glowing thread */}
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/80 via-accent/30 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCE.map((x, i) => (
              <div key={x.role} data-reveal data-reveal-delay={String(Math.min(i + 1, 3))} className="relative pl-10 md:pl-14">
                <span className="absolute left-0 md:left-1 top-3 grid h-5 w-5 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-accent/30 blur-md" />
                  <span className="relative h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                </span>
                <div className="rounded-xl border border-border bg-surface hover:bg-surface-elevated hover:border-accent/40 transition-colors p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold">{x.role}</h3>
                    <span className="mono text-xs text-accent">{x.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <Briefcase className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                    {x.company} · {x.location}
                  </p>
                  <p className="text-sm italic text-foreground/80 mb-4 border-l-2 border-accent/50 pl-3">
                    {x.story}
                  </p>
                  <ul className="space-y-2">
                    {x.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-accent mt-1.5">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" kicker="Chapter 03 · Skills" title="The tools she reaches for.">
        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.label}
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
                className="rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="mono text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" kicker="Chapter 04 · Projects" title="Moments where it all came together.">
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
              className={`group relative rounded-xl border border-border bg-surface p-6 hover:bg-surface-elevated hover:border-accent/40 transition-all ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="mono text-xs text-accent">{p.tag}</span>
                <Code2 className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" kicker="Chapter 05 · Certifications" title="Still learning, still building.">
        <div className="grid md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.name}
              data-reveal
              data-reveal-delay={String(i + 1)}
              className="rounded-xl border border-border bg-surface p-6 flex gap-4 hover:border-accent/40 transition-colors"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent shrink-0">
                <Award className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
                <span
                  className={`inline-block mt-3 mono text-[10px] px-2 py-0.5 rounded-full border ${
                    c.status === "In Progress"
                      ? "border-accent/40 text-accent"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <BookOpen className="h-4 w-4 text-muted-foreground shrink-0" />
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="Chapter 06 · Contact" title="The next chapter starts here.">
        <div className="grid md:grid-cols-2 gap-8">
          <div data-reveal className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If this story resonates — whether it's an IT Support Analyst
              role, a helpdesk opening, or just a conversation — I'd love to
              hear from you. Email and LinkedIn are the fastest routes.
            </p>
            <ContactLine
              icon={Mail}
              label="Email"
              value="vaishnavi.rajput2002@gmail.com"
              href="mailto:vaishnavi.rajput2002@gmail.com"
            />
            <ContactLine
              icon={Phone}
              label="Phone"
              value="+353 89 239 6308"
              href="tel:+353892396308"
            />
            <ContactLine
              icon={Linkedin}
              label="LinkedIn"
              value="vaishnavi-rajput-73948322a"
              href="https://linkedin.com/in/vaishnavi-rajput-73948322a"
            />
            <ContactLine icon={MapPin} label="Location" value="Dublin 24, Ireland" />
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition-colors font-medium"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <form
            data-reveal
            data-reveal-delay="2"
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-surface p-6 space-y-4"
          >
            <Field label="Name">
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                placeholder="you@company.com"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                placeholder="Tell me about the role..."
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-glow transition-all"
            >
              {sent ? (
                <>
                  <Sparkles className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs mono text-muted-foreground">
          <span>© 2026 Vaishnavi Rajput · Built in Dublin</span>
          <span>&gt; system.status: ready_to_help</span>
        </div>
      </footer>
    </div>
  );
}

function StatusChip({ color, label }: { color: "accent" | "blue"; label: string }) {
  const isBlue = color === "blue";
  return (
    <span
      className={`inline-flex items-center gap-2 mono text-[10px] px-2.5 py-1 rounded-md border ${
        isBlue
          ? "border-[oklch(0.65_0.18_255)]/30 bg-[oklch(0.65_0.18_255)]/10 text-[oklch(0.78_0.15_255)]"
          : "border-accent/30 bg-accent/10 text-accent"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isBlue ? "bg-[oklch(0.7_0.18_255)]" : "bg-accent"
        }`}
      />
      {label}
    </span>
  );
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (ref.current) ref.current.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-[64px] left-0 right-0 z-40 h-px bg-transparent">
      <div ref={ref} className="h-full bg-accent shadow-[0_0_10px_var(--accent-glow)] transition-[width] duration-100" />
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12" data-reveal>
          <div className="mono text-xs text-accent mb-3 uppercase tracking-widest">
            {kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-surface hover:border-accent/40 transition-colors">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
          {label}
        </div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent shrink-0" />
      )}
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
