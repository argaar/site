import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  SiGithub,
  SiGitlab
} from "@icons-pack/react-simple-icons";
import LocaleSwitcher from "./i18n/LocaleSwitcher";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-100 focus:text-zinc-950 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
      >
        {t("skip")}
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">Davide Foschi</h1>

          {/* Desktop Navigation */}
          <nav aria-label={t("main_aria_link")} className="hidden sm:flex space-x-4 text-sm text-zinc-200">
            <a href="#about" className="hover:text-white focus:text-white focus:outline-none focus:underline">{t("about")}</a>
            <a href="#skills" className="hover:text-white focus:text-white focus:outline-none focus:underline">{t("skills")}</a>
            <a href="#projects" className="hover:text-white focus:text-white focus:outline-none focus:underline">{t("projects")}</a>
            <a href="#principles" className="hover:text-white focus:text-white focus:outline-none focus:underline">{t("principles")}</a>
            <a href="#contact" className="hover:text-white focus:text-white focus:outline-none focus:underline">{t("contact")}</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("main_mobile_button")}
            aria-expanded={mobileMenuOpen}
            className="sm:hidden p-2 rounded-lg hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <LocaleSwitcher />
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav aria-label={t("main_mobile_menu")} className="sm:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col space-y-3 text-sm text-zinc-200">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white focus:text-white focus:outline-none focus:underline py-2"
              >
                {t("about")}
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white focus:text-white focus:outline-none focus:underline py-2"
              >
                {t("skills")}
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white focus:text-white focus:outline-none focus:underline py-2"
              >
                {t("projects")}
              </a>
              <a
                href="#principles"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white focus:text-white focus:outline-none focus:underline py-2"
              >
                {t("principles")}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white focus:text-white focus:outline-none focus:underline py-2"
              >
                {t("contact")}
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main id="main-content">
        {/* Hero */}
        <section aria-label={t("hero_aria_section")} className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            DevOps & Platform Engineer
          </h2>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
            {t("hero_1")}
          </p>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
            {t("hero_2")}
          </p>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
            {t("hero_3")}
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/argaar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("hero_aria_link_github")}
              className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 px-4 py-2 rounded-xl transition-colors"
            >
              <SiGithub size={20} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://gitlab.com/argaar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("hero_aria_link_gitlab")}
              className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 px-4 py-2 rounded-xl transition-colors"
            >
              <SiGitlab size={20} aria-hidden="true" /> GitLab
            </a>
            <a
              href="https://www.linkedin.com/in/davidefoschi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("hero_aria_link_linkedin")}
              className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 px-4 py-2 rounded-xl transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="about-heading" className="text-2xl font-semibold mb-4">{t("about")}</h3>
          <p className="text-zinc-300 max-w-3xl">
            {t("about_1")}
          </p>
        </section>

        {/* Skills */}
        <section id="skills" aria-labelledby="skills-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="skills-heading" className="text-2xl font-semibold mb-6">{t("skills")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_1")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Kubernetes & Rancher</li>
                <li>Ubuntu & Talos Linux</li>
                <li>Docker & Helm</li>
                <li>ArgoCD & GitOps</li>
                <li>Harbor & Nexus Registries</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_2")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>GitLab CI/CD</li>
                <li>Jenkins</li>
                <li>Git version control</li>
                <li>{t("skills_2_4")}</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_3")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>OpenTelemetry</li>
                <li>Prometheus, Grafana & Kibana</li>
                <li>Elasticsearch & Graylog</li>
                <li>Metrics & Alerting</li>
                <li>{t("skills_3_5")}</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_4")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>SonarQube (SAST)</li>
                <li>OWASP ZAP (DAST)</li>
                <li>Dependency Track (SBOM)</li>
                <li>Grype, Trivy & DefectDojo</li>
                <li>ClamAV</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_5")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>PostgreSQL & MySQL/MariaDB</li>
                <li>MongoDB & Redis</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_6")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Linux (Ubuntu, Debian, CentOS, Rocky)</li>
                <li>Python, NodeJS, PHP</li>
                <li>Bash, Perl, JavaScript</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_7")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Cisco, HP, Brocade</li>
                <li>PaloAlto & Fortinet</li>
                <li>Firewalls & Load Balancers</li>
                <li>Nginx, HAProxy & KrakenD</li>
                <li>Nagios & Icinga</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("skills_title_8")}</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Arduino & RaspberryPi</li>
                <li>ESP32 & ESP8266</li>
                <li>{t("skills_8_3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Stack */}
        <section id="stack" aria-labelledby="stack-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="stack-heading" className="text-2xl font-semibold mb-6">{t("current_stack")}</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm" role="list">
            {["Kubernetes (on-prem & cloud)", "Rancher", "GitLab CI/CD & GitOps", "Helm & OCI images", "Docker / Buildah", "Ansible", "Prometheus, Grafana, Elastic", "OTEL", "DevSecOps (SBOM, SAST, DAST)", "DefectDojo", "Harbor & Nexus registries", "NGINX / HAProxy"].map(item => (
              <div key={item} role="listitem" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">{item}</div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="experience-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="experience-heading" className="text-2xl font-semibold mb-6">{t("experience")}</h3>
          <div className="space-y-6">
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold">Lead DevOps Engineer - CGI Italia</h4>
              <p className="text-sm text-zinc-300">{t("experience_cgi_date")}</p>
              <p className="mt-2 text-sm text-zinc-200">
                {t("experience_cgi")}
              </p>
            </article>
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold">DevOps Engineer - Lutech S.p.A.</h4>
              <p className="text-sm text-zinc-300">{t("experience_lutech_date")}</p>
              <p className="mt-2 text-sm text-zinc-200">
                {t("experience_lutech")}
              </p>
            </article>
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold">System & Network Engineer</h4>
              <p className="text-sm text-zinc-300">{t("experience_other_date")}</p>
              <p className="mt-2 text-sm text-zinc-200">
                {t("experience_other")}
              </p>
            </article>
          </div>
        </section>

        {/* Now */}
        <section id="now" aria-labelledby="now-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="now-heading" className="text-2xl font-semibold mb-6">{t("now")}</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-sm text-zinc-200">
              {t("now_1")}
            </p>
            <p className="text-sm text-zinc-200">
              {t("now_2")}
            </p>
            <p className="text-xs text-zinc-400 mt-4">{t("now_3")}</p>
          </div>
        </section>

        {/* Uses */}
        <section id="uses" aria-labelledby="uses-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="uses-heading" className="text-2xl font-semibold mb-6">{t("uses")}</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Platform & DevOps</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Kubernetes & Talos Linux</li>
                <li>GitLab CI/CD & GitOps</li>
                <li>Helm, Docker, Buildah</li>
                <li>Ansible</li>
                <li>Harbor, Nexus</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Observability & Systems</h4>
              <ul className="space-y-1 text-zinc-200">
                <li>Prometheus, Grafana & OTEL</li>
                <li>Linux (Ubuntu/Debian)</li>
                <li>NGINX, HAProxy & KrakenD</li>
                <li>{t("uses_2_4")}</li>
                <li>{t("uses_2_5")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" aria-labelledby="principles-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="principles-heading" className="text-2xl font-semibold mb-6">{t("principles")}</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("principles_1_title")}</h4>
              <p className="text-zinc-200">{t("principles_1_text")}</p>
            </article>
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("principles_2_title")}</h4>
              <p className="text-zinc-200">{t("principles_2_text")}</p>
            </article>
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("principles_3_title")}</h4>
              <p className="text-zinc-200">{t("principles_3_text")}</p>
            </article>
            <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">{t("principles_4_title")}</h4>
              <p className="text-zinc-200">{t("principles_4_text")}</p>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="projects-heading" className="text-2xl font-semibold mb-2">{t("projects")}</h3>
          <p className="text-zinc-300 mb-6">{t("projects_title")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Project
              title={t("projects_bledeck_title")}
              description={t("projects_bledeck_desc")}
              link="https://github.com/argaar/BLEDeck"
            />
            <Project
              title={t("projects_tracker_title")}
              description={t("projects_tracker_desc")}
              link="https://github.com/argaar/ttgo-lora32-v2-ttn-tracker"
            />
            <Project
              title={t("projects_traccar_title")}
              description={t("projects_traccar_desc")}
              link="https://gitlab.com/argaar/traccar-telegram-bot"
            />
            <Project
              title={t("projects_teltonika_title")}
              description={t("projects_teltonika_desc")}
              link="https://github.com/argaar/GPS_Teltonika_Server"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h3 id="contact-heading" className="text-2xl font-semibold mb-4">{t("contact")}</h3>
          <p className="text-zinc-300 mb-6">{t("contact_1")}</p>
          <nav aria-label={t("contact_aria_section")} className="flex gap-4">
            <p>{t("contact_2")}&nbsp;
              <a
                href="https://gitlab.com/argaar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded px-1"
              >
                GitLab
              </a>
              <a
                href="https://github.com/argaar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded px-1"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/davidefoschi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded px-1"
              >
                LinkedIn
              </a>
            </p>
          </nav>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-zinc-400 py-10 border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Davide Foschi - argaar.net</p>
        <p>{t("footer_tagline")}</p>
      </footer>
    </div>
  );
}

function Project({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} project - ${description}`}
      className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-colors"
    >
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-zinc-300">{description}</p>
    </a>
  );
}
