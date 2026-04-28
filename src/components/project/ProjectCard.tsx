import { ExternalLink, Github } from 'lucide-react';
import Tag from '@/components/ui/Tag';
import styles from './ProjectCard.module.css';
import type { Project } from '@/types/index';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.overlay}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
            <ExternalLink size={20} />
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
