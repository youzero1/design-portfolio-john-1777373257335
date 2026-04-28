import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message."
        />

        <div className={styles.layout}>
          {/* Info */}
          <aside className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <Mail size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoItemLabel}>Email</span>
                    <span className={styles.infoItemValue}>john@example.com</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoItemLabel}>Phone</span>
                    <span className={styles.infoItemValue}>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <MapPin size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoItemLabel}>Location</span>
                    <span className={styles.infoItemValue}>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className={styles.infoSocials}>
                <p className={styles.infoSocialsLabel}>Find me on</p>
                <div className={styles.infoSocialsRow}>
                  {[
                    { href: 'https://github.com', Icon: Github, label: 'GitHub' },
                    { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
                    { href: 'https://twitter.com', Icon: Twitter, label: 'Twitter' },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.infoSocialLink} aria-label={label}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.availability}>
                <span className={styles.availDot} />
                <span>Available for new projects</span>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <Button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>
                <Button type="submit" size="lg">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
