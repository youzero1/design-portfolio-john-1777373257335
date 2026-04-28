import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';
import styles from './Projects.module.css';

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          label="Work"
          title="All Projects"
          subtitle="Everything I've built — from passion projects to production systems."
        />

        {/* Filter */}
        <div className={styles.filters}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No projects found for "{activeTag}".</p>
          </div>
        )}
      </div>
    </div>
  );
}
