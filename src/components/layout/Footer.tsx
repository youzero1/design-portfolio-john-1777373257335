import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const socials = [
  { label: 'GitHub', url: 'https://github.com', Icon: Github },
  { label: 'LinkedIn', url: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Twitter', url: 'https://twitter.com', Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          Built with <Heart size={14} className={styles.heart} /> by John Doe &copy; {new Date().getFullYear()}
        </p>
        <div className={styles.socials}>
          {socials.map(({ label, url, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
