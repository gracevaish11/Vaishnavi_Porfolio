import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Github,
  Terminal,
  Database,
  Wrench,
  BarChart3,
  GraduationCap,
  Briefcase,
  Send,
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
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "AI Data Annotator",
    company: "Outlier",
    location: "Freelance · Remote",
    period: "Dec 2025 — Present",
    points: [
      "Review and validate AI-generated outputs against structured quality guidelines.",
      "Perform data annotation to improve model accuracy and consistency.",
      "Deliver high-quality work under tight turnaround windows.",
    ],
  },
  {
    role: "Technical Demonstrator",
    company: "Maynooth University",
    location: "Ireland",
    period: "Feb 2025 — Jun 2025",
    points: [
      "Provided technical support to 50+ users across Windows and Linux environments.",
      "Resolved system and application issues within SLA windows.",
      "Improved support efficiency through structured root cause analysis.",
    ],
  },
  {
    role: "IT Application Support Analyst",
    company: "Bombay Stock Exchange",
    location: "Mumbai, India",
    period: "Dec 2023 — Aug 2024",
    points: [
      "Supported application deployments and data validation across environments.",
      "Managed incidents end-to-end while maintaining strict SLA compliance.",
      "Collaborated with dev and QA teams using SVN and internal ticketing tools.",
    ],
  },
];

const SKILLS = [
  {
    label: "IT & Support",
    icon: Wrench,
    items: [
      "Application Support",
      "Incident Management",
      "Troubleshooting",
      "Windows & Linux",
      "Technical Documentation",
      "SLA Management",
    ],
  },
  {
    label: "Data & Analysis",
    icon: BarChart3,
    items: [
      "Data Validation",
      "SQL",
      "R",
      "Excel",
      "Bayesian Modelling",
      "Data Imputation",
    ],
  },
  {
    label: "Tools",
    icon: Database,
    items: ["SVN", "Power BI", "PostGIS"],
  },
];

const PROJECTS = [
  {
    title: "NYC Flights Data Analysis",
    tag: "R · Data Analysis",
    desc: "Analysed 336,000+ flight records in R to identify delay patterns and airline performance trends.",
  },
  {
    title: "Bayesian Modelling — MSc Thesis",
    tag: "JAGS · Statistics",
    desc: "Applied Bayesian SUR modelling with Horseshoe prior and missForest imputation across 46 environmental predictors for incomplete ecological plant trait datasets.",
  },
  {
    title: "Doctor Appointment Booking System",
    tag: "Database · Full-stack",
    desc: "Built a database-driven application for patient records and scheduling. Awarded 1st place in an inter-college competition.",
  },
  {
    title: "Spatial Data Analysis",
    tag: "SQL · PostGIS",
    desc: "Queried geospatial datasets to evaluate accessibility metrics and ensure data quality across regions.",
  },
  {
    title: "CollabSync",
    tag: "MERN Stack",
    desc: "Team task management application built with MongoDB, Express, React, and Node.js.",
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
    period: "",
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
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
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

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Available in Dublin · Onsite / Hybrid
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6">
              Vaishnavi
              <br />
              <span className="text-gradient">Rajput.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-display text-muted-foreground mb-4">
              IT Support Analyst
            </p>
            <p className="max-w-xl text-base text-muted-foreground mb-8 leading-relaxed">
              Dublin-based support analyst pairing SLA-driven application
              support experience with an analytical, data-first mindset.
              Ready for onsite and hybrid IT support roles across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-glow transition-all"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition-colors font-medium"
              >
                <Download className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-border bg-surface grid place-items-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <span className="relative font-display font-bold text-7xl sm:text-8xl text-gradient">
                VR
              </span>
              <div className="absolute bottom-4 mono text-[10px] tracking-widest text-muted-foreground">
                &gt; SUPPORT.READY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" kicker="01 / About" title="Analytical support, delivered.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a{" "}
              <span className="text-foreground font-medium">
                Data Analytics postgraduate
              </span>{" "}
              with hands-on IT application support experience — skilled in
              troubleshooting, incident management, and system support across
              Windows and Linux environments.
            </p>
            <p>
              I combine strong analytical and data-driven problem-solving
              skills from my{" "}
              <span className="text-foreground font-medium">
                MSc in Data Science &amp; Analytics
              </span>{" "}
              with practical, SLA-driven technical support — resolving user
              issues quickly, maintaining clear technical documentation, and
              improving support efficiency through root cause analysis.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 space-y-4">
            <StatRow label="Base" value="Dublin, IE" />
            <StatRow label="Focus" value="IT / Application Support" />
            <StatRow label="Education" value="MSc Data Science" />
            <StatRow label="Experience" value="Support · Analytics" />
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" kicker="02 / Experience" title="Where I've worked.">
        <div className="relative border-l border-border pl-6 md:pl-8 space-y-10">
          {EXPERIENCE.map((x) => (
            <div key={x.role + x.company} className="relative group">
              <span className="absolute -left-[31px] md:-left-[39px] top-2 grid h-4 w-4 place-items-center">
                <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              </span>
              <div className="rounded-xl border border-border bg-surface hover:bg-surface-elevated transition-colors p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{x.role}</h3>
                  <span className="mono text-xs text-accent">{x.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <Briefcase className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                  {x.company} · {x.location}
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
      </Section>

      {/* SKILLS */}
      <Section id="skills" kicker="03 / Skills" title="Toolbox.">
        <div className="grid md:grid-cols-3 gap-5">
          {SKILLS.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.label}
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
      <Section id="projects" kicker="04 / Projects" title="Selected work.">
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-xl border border-border bg-surface p-6 hover:bg-surface-elevated hover:border-accent/40 transition-all ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="mono text-xs text-accent">{p.tag}</span>
                <Terminal className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
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

      {/* EDUCATION */}
      <Section id="education" kicker="05 / Education" title="Academic path.">
        <div className="grid md:grid-cols-2 gap-5">
          {EDUCATION.map((e) => (
            <div
              key={e.degree}
              className="rounded-xl border border-border bg-surface p-6 flex gap-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent shrink-0">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-semibold mb-1">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 mono text-xs">
                  {e.period && <span className="text-accent">{e.period}</span>}
                  <span className="text-muted-foreground">{e.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="06 / Contact" title="Let's talk.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Open to IT Support Analyst and helpdesk roles across Dublin and
              Ireland. The quickest way to reach me is email or LinkedIn.
            </p>
            <ContactLine icon={Mail} label="Email" value="vaishnavi.rajput2002@gmail.com" href="mailto:vaishnavi.rajput2002@gmail.com" />
            <ContactLine icon={Phone} label="Phone" value="+353 89 239 6308" href="tel:+353892396308" />
            <ContactLine
              icon={Linkedin}
              label="LinkedIn"
              value="vaishnavi-rajput-73948322a"
              href="https://linkedin.com/in/vaishnavi-rajput-73948322a"
            />
            <ContactLine icon={MapPin} label="Location" value="Dublin, Ireland" />
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition-colors font-medium"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <form
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
              {sent ? "Message sent ✓" : (<><Send className="h-4 w-4" /> Send message</>)}
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
        <div className="mb-12">
          <div className="mono text-xs text-accent mb-3">{kicker}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="mono text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
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
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
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
