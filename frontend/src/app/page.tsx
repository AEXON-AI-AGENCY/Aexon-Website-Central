"use client";

import { FormEvent, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  CalendarClock,
  Check,
  ChevronDown,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    copy: "Replace repetitive admin, reporting, scheduling, outreach, and communication tasks with intelligent workflows that keep moving.",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Agents",
    copy: "Build assistants around your actual processes, platforms, documents, team roles, and client experience instead of one-size-fits-all tools.",
  },
  {
    icon: Network,
    title: "AI Operational Systems",
    copy: "Design connected environments where AI, dashboards, CRMs, calendars, email, and team channels work as one operational layer.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Infrastructure",
    copy: "Create support systems that can start lean, then expand as your business adds more clients, departments, automations, and data sources.",
  },
];

const outcomes = [
  "Reduced operational bottlenecks",
  "Faster execution across daily workflows",
  "Cleaner team communication",
  "Less manual administrative load",
  "Systems that scale with business growth",
  "Better organization from intake to delivery",
];

const audienceSegments = [
  "Small businesses",
  "Startups",
  "Service teams",
  "Operators",
  "Sales teams",
  "Founders",
  "Admin teams",
  "Growing companies",
];

const buildProcess = [
  {
    step: "01",
    title: "Find the ROI opportunity",
    copy: "We locate the repetitive work, missed handoffs, and slow processes where AI can create a clear business return.",
  },
  {
    step: "02",
    title: "Design the workflow",
    copy: "We shape the AI agents, automations, and handoff paths around how your team already works.",
  },
  {
    step: "03",
    title: "Build and connect",
    copy: "We integrate the system across the tools that matter, from email and calendars to CRMs, dashboards, and team channels.",
  },
  {
    step: "04",
    title: "Launch and optimize",
    copy: "We help the team adopt the system, then refine it so the business keeps gaining time, consistency, and operational clarity.",
  },
];

const proposalSteps = [
  {
    label: "Discovery Call",
    text: "A focused conversation about your business, bottlenecks, tools, team structure, and growth goals.",
  },
  {
    label: "Environment Assessment",
    text: "We review the current operational flow and identify where AI can create practical business value.",
  },
  {
    label: "Custom Proposal",
    text: "You receive a clear implementation plan with recommended systems, priorities, pricing, and timeline.",
  },
  {
    label: "Onboarding",
    text: "When you are ready, we guide the transition and support your team from the first operational handoff.",
  },
];

const systemNodes = [
  { name: "Email", className: "node-email" },
  { name: "CRM", className: "node-crm" },
  { name: "Calendar", className: "node-calendar" },
  { name: "Dashboards", className: "node-dashboard" },
  { name: "Slack", className: "node-slack" },
  { name: "Reports", className: "node-reports" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aexon AI Agency",
  url: "https://aexonai.com",
  logo: "https://aexonai.com/aexon-logo.png",
  email: "aexonaisupport@gmail.com",
  description:
    "Aexon AI builds workflow automations, custom AI agents, and operational systems for modern businesses.",
  areaServed: "United States",
  serviceType: [
    "AI workflow automation",
    "Custom AI agents",
    "AI operational systems",
    "Business process automation",
  ],
};

const calendlyWidgetScript = "https://assets.calendly.com/assets/external/widget.js";
const calendlyWidgetStylesheet =
  "https://assets.calendly.com/assets/external/widget.css";

type CalendlyWindow = Window & {
  Calendly?: {
    initPopupWidget: (options: {
      url: string;
      prefill?: {
        name?: string;
        email?: string;
      };
    }) => void;
  };
};

function loadCalendlyStylesheet() {
  if (document.querySelector(`link[href="${calendlyWidgetStylesheet}"]`)) {
    return;
  }

  const stylesheet = document.createElement("link");
  stylesheet.href = calendlyWidgetStylesheet;
  stylesheet.rel = "stylesheet";
  document.head.appendChild(stylesheet);
}

function loadCalendlyWidget() {
  return new Promise<CalendlyWindow["Calendly"]>((resolve) => {
    const calendlyWindow = window as CalendlyWindow;

    loadCalendlyStylesheet();

    if (calendlyWindow.Calendly) {
      resolve(calendlyWindow.Calendly);
      return;
    }

    const script = document.createElement("script");

    const resolveWithCurrentWidget = () => {
      window.clearTimeout(timeoutId);
      resolve(calendlyWindow.Calendly);
    };

    script.src = calendlyWidgetScript;
    script.async = true;
    script.onload = resolveWithCurrentWidget;
    script.onerror = resolveWithCurrentWidget;

    const timeoutId = window.setTimeout(resolveWithCurrentWidget, 5000);
    document.body.appendChild(script);
  });
}

export default function Home() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.14 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const name = `${firstName} ${lastName}`.trim();
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

    if (calendlyUrl && typeof window !== "undefined") {
      const calendly = await loadCalendlyWidget();

      if (calendly) {
        calendly.initPopupWidget({
          url: calendlyUrl,
          prefill: {
            name,
            email,
          },
        });
        return;
      }
    }

    const subject = "Aexon AI inquiry";
    const body = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Work Email: ${email}`,
      `Company: ${data.get("company") ?? ""}`,
      `Company Website: ${data.get("website") ?? ""}`,
      `Role: ${data.get("role") ?? ""}`,
      `Company Size: ${data.get("size") ?? ""}`,
      "",
      "Project:",
      `${data.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:aexonaisupport@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="intro-stage" aria-label="Aexon AI opening">
        <div className="intro-grid" />
        <div className="signal-rain" />
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-lockup" href="#top" aria-label="Aexon AI home">
            <Image
              src="/aexon-logo.png"
              alt="Aexon AI logo"
              width={56}
              height={38}
              style={{ width: "56px", height: "auto" }}
              priority
            />
            <span>AEXON AI</span>
          </a>
          <div className="nav-links">
            <a href="#systems">Systems</a>
            <a href="#process">Process</a>
            <a href="#consultation">Consultation</a>
          </div>
        </nav>

        <div className="intro-content" id="top">
          <div className="logo-orbit" aria-hidden="true">
            <div className="aexon-mark">
              <div className="brain-field">
                <div className="mesh mesh-one" />
                <div className="mesh mesh-two" />
                <div className="mesh mesh-three" />
                <span className="mini-node mini-one" />
                <span className="mini-node mini-two" />
                <span className="mini-node mini-three" />
                <span className="mini-node mini-four" />
                <span className="mini-node mini-five" />
              </div>
              <span className="aexon-letter">A</span>
            </div>
            <div className="neuron neuron-a" />
            <div className="neuron neuron-b" />
            <div className="neuron neuron-c" />
            <div className="neuron neuron-d" />
            <div className="pulse-line line-a" />
            <div className="pulse-line line-b" />
            <div className="pulse-line line-c" />
          </div>
          <p className="intro-kicker">Intelligent business systems</p>
          <h1>AEXON</h1>
          <p className="intro-copy">
            We connect AI agents, workflow automation, and operational
            infrastructure into systems that help businesses move faster with
            less friction.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#consultation">
              Start the Conversation <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#systems">
              Explore Systems <ChevronDown size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section value-section" data-reveal>
        <div className="section-heading" data-reveal>
          <p className="eyebrow">What Aexon AI provides</p>
          <h2>AI operations that feel connected, not patched together.</h2>
          <p>
            Aexon AI designs business systems
            where every workflow, tool, and AI assistant can pass the right
            signal to the next part of the operation.
          </p>
        </div>
        <div
          className="audience-marquee"
          aria-label="Aexon client segments"
          data-reveal
        >
          <div>
            {[...audienceSegments, ...audienceSegments].map(
              (segment, index) => (
                <span key={`${segment}-${index}`}>{segment}</span>
              ),
            )}
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" data-reveal key={service.title}>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section system-section" id="systems" data-reveal>
        <div className="system-copy" data-reveal>
          <p className="eyebrow">Operational nervous system</p>
          <h2>One intelligent layer across the tools your business already uses.</h2>
          <p>
            Aexon AI can integrate with email systems, Slack, Discord,
            dashboards, CRMs, calendars, and other tools depending on client
            requirements. The goal is simple: less disconnected work, more
            coordinated execution.
          </p>
          <div className="outcome-list">
            {outcomes.map((outcome) => (
              <div className="outcome" key={outcome}>
                <Check size={18} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="axon-map"
          aria-label="Aexon operational system map"
          data-reveal
        >
          <div className="map-ring" />
          <div className="core-node">
            <BrainCircuit size={44} />
            <span>AEXON AIOS</span>
          </div>
          {systemNodes.map((node) => (
            <div className={`outer-node ${node.className}`} key={node.name}>
              {node.name}
            </div>
          ))}
          <div className="flow-line flow-one" />
          <div className="flow-line flow-two" />
          <div className="flow-line flow-three" />
        </div>
      </section>

      <section className="section process-section" id="process" data-reveal>
        <div className="section-heading compact" data-reveal>
          <p className="eyebrow">How the build works</p>
          <h2>From operational friction to intelligent infrastructure.</h2>
        </div>
        <div className="process-grid">
          {buildProcess.map((item) => (
            <article className="process-step" data-reveal key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-section" data-reveal>
        <div className="vision-panel" data-reveal>
          <div>
            <p className="eyebrow">AIOS vision</p>
            <h2>Beyond isolated tools: AI environments built for real operations.</h2>
          </div>
          <p>
            Aexon AI&apos;s long-term direction is to build AI-powered
            operational environments that combine automation, workflow
            coordination, intelligent business management, and scalable support
            into unified systems.
          </p>
        </div>
        <div className="metrics-row" data-reveal>
          <div>
            <strong>24/7</strong>
            <span>workflow support potential</span>
          </div>
          <div>
            <strong>1</strong>
            <span>connected operational layer</span>
          </div>
          <div>
            <strong>Custom</strong>
            <span>systems per business model</span>
          </div>
        </div>
      </section>

      <section className="section consultation-section" id="consultation" data-reveal>
        <div className="consultation-copy" data-reveal>
          <p className="eyebrow">Next step</p>
          <h2>From conversation to proposal in 48 hours.</h2>
          <div className="timeline">
            {proposalSteps.map((step, index) => (
              <div className="timeline-step" key={step.label}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside
          className="inquiry-panel"
          aria-label="Submit an Aexon AI inquiry"
          data-reveal
        >
          <div className="cta-icon">
            <CalendarClock size={32} />
          </div>
          <h3>Submit an Inquiry</h3>
          <p>
            Share the basics of your business and what you want the system to
            solve. Aexon AI will review the fit and follow up with the next step.
          </p>
          <form className="inquiry-form" onSubmit={handleInquirySubmit}>
            <label>
              First Name
              <input name="firstName" placeholder="First Name" type="text" required />
            </label>
            <label>
              Last Name
              <input name="lastName" placeholder="Last Name" type="text" required />
            </label>
            <label>
              Work Email
              <input
                name="email"
                placeholder="you@company.com"
                type="email"
                required
              />
            </label>
            <label>
              Company
              <input name="company" placeholder="Your company" type="text" />
            </label>
            <label className="form-span">
              Company Website
              <input
                name="website"
                placeholder="https://yourcompany.com"
                type="url"
              />
            </label>
            <label>
              Your Role
              <select name="role" defaultValue="">
                <option value="" disabled>
                  Select your role
                </option>
                <option>CEO / Founder</option>
                <option>COO / Head of Operations</option>
                <option>CFO / Finance Lead</option>
                <option>CIO / CTO / Head of Data</option>
                <option>VP / Director</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Company Size
              <select name="size" defaultValue="">
                <option value="" disabled>
                  Number of employees
                </option>
                <option>1 - 50</option>
                <option>50 - 100</option>
                <option>100 - 500</option>
                <option>500+</option>
              </select>
            </label>
            <label className="form-span">
              Tell Us About Your Project
              <textarea
                name="message"
                placeholder="What challenges are you facing? What does success look like for your business?"
                rows={5}
              />
            </label>
            <button className="submit-button form-span" type="submit">
              Submit Inquiry <ArrowRight size={18} />
            </button>
          </form>
        </aside>
      </section>

      <footer className="footer">
        <div>
          <Image
            src="/aexon-logo.png"
            alt="Aexon AI logo"
            width={78}
            height={52}
            style={{ width: "78px", height: "auto" }}
          />
          <span>AEXON AI</span>
        </div>
        <p>Building intelligent business systems for the modern operational era.</p>
        <a href="mailto:aexonaisupport@gmail.com">
          aexonaisupport@gmail.com <ArrowRight size={16} />
        </a>
      </footer>
    </main>
  );
}
