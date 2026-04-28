import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/project/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import styles from './Home.module.css';

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            Available for freelance work
          </div>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>John Doe</span>
            <br />
            Full-Stack Developer
          </h1>
          <p className={styles.heroSubtitle}>
            I craft beautiful, performant web applications that solve real problems.
            Specializing in React, Node.js, and modern cloud architectures.
          </p>
          <div className={styles.heroActions}>
            <Button href="#" size="lg">
              <Download size={18} />
              Download CV
            </Button>
            <Link to="/projects">
              <Button variant="secondary" size="lg">
                View Projects
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className={styles.heroSocials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing} />
            <div className={styles.avatarRing2} />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
              alt="John Doe"
              className={styles.avatar}
            />
          </div>
          <div className={styles.floatCard1}>
            <span className={styles.floatDot} />
            <span>Open to Work</span>
          </div>
          <div className={styles.floatCard2}>
            <strong>5+</strong>
            <span>Years Exp.</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '15+', label: 'Tech Stack' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <SectionTitle
            label="Portfolio"
            title="Featured Projects"
            subtitle="A selection of my most recent and impactful work."
          />
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link to="/projects">
              <Button variant="secondary" size="lg">
                View All Projects
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
