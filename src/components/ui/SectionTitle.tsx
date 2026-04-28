import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
