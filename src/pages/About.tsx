import { skills } from '@/data/skills';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import clsx from 'clsx';
import styles from './About.module.css';
import type { Skill } from '@/types/index';

const categories: { key: Skill['category']; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools & Cloud' },
];

const timeline = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    place: 'TechCorp Inc.',
    period: '2022 — Present',
    description: 'Led the frontend architecture for a SaaS platform serving 100k+ users. Migrated legacy codebase to React + TypeScript, improving performance by 40%.',
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    place: 'StartupXYZ',
    period: '2020 — 2022',
    description: 'Built and scaled a real-time collaboration tool from 0 to 10k users. Designed RESTful APIs and WebSocket infrastructure with Node.js and PostgreSQL.',
  },
  {
    type: 'education',
    title: 'B.Sc. Computer Science',
    place: 'University of Technology',
    period: '2016 — 2020',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and distributed systems. Senior thesis on reactive UI architectures.',
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Bio */}
        <section className={styles.bio}>
          <div className={styles.bioImage}>
            <img
              src="https://placehold.co/500x500?text=John+Doe"
              alt="John Doe"
            />
            <div className={styles.bioImageGlow} />
          </div>
          <div className={styles.bioText}>
            <span className={styles.bioLabel}>About Me</span>
            <h1 className={styles.bioTitle}>Passionate about building great software</h1>
            <p className={styles.bioParagraph}>
              Hi! I'm John Doe, a full-stack developer with 5+ years of experience building
              scalable web applications. I'm passionate about clean code, intuitive UX, and
              using technology to solve meaningful problems.
            </p>
            <p className={styles.bioParagraph}>
              When I'm not coding, you'll find me contributing to open source, writing technical
              blog posts, hiking, or experimenting with generative AI art. I believe the best
              products come from the intersection of engineering excellence and human empathy.
            </p>
            <Button href="#" size="lg">
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.skillsSection}>
          <SectionTitle
            label="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies I've been working with professionally."
          />
          <div className={styles.skillsGrid}>
            {categories.map(({ key, label }) => (
              <div key={key} className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>{label}</h3>
                <div className={styles.skillList}>
                  {skills
                    .filter((s) => s.category === key)
                    .map((skill) => (
                      <div key={skill.name} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <div
                            className={styles.skillFill}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <SectionTitle
            label="Journey"
            title="Experience & Education"
          />
          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={clsx(styles.timelineIcon, item.type === 'education' && styles.educationIcon)}>
                  {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineMeta}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                  </div>
                  <span className={styles.timelinePlace}>{item.place}</span>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
