import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const sections = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Log in, navigate the interface, and get up to speed fast.',
    to: '/docs/getting-started/welcome',
  },
  {
    icon: '📊',
    title: 'Dashboard',
    description: 'Understand your personal dashboard, widgets, and quick actions.',
    to: '/docs/dashboard/overview',
  },
  {
    icon: '🗂️',
    title: 'Catalogue',
    description: 'Browse products, view details, and add items to requests.',
    to: '/docs/catalogue/product-catalog',
  },
  {
    icon: '📋',
    title: 'Purchase Requests',
    description: 'Create, submit, and track purchase requests from start to finish.',
    to: '/docs/purchase-requests/understanding',
  },
  {
    icon: '✅',
    title: 'Approvals',
    description: 'Review and approve requests, and manage out-of-office delegations.',
    to: '/docs/approvals/reviewing-and-approving',
  },
  {
    icon: '🔍',
    title: 'Sourcing',
    description: 'Request products not in the catalogue through sourcing workflows.',
    to: '/docs/sourcing/sourcing-requests',
  },
  {
    icon: '🔔',
    title: 'Notifications',
    description: 'Stay on top of updates, approvals, and activity across your account.',
    to: '/docs/notifications/',
  },
  {
    icon: '👤',
    title: 'Profile & Settings',
    description: 'Manage your account, preferences, and security settings.',
    to: '/docs/profile/',
  },
  {
    icon: '💰',
    title: 'Budgets',
    description: 'Track spend, monitor budget limits, and understand cost allocation.',
    to: '/docs/budgets/',
  },
];

function SectionCard({ icon, title, description, to }) {
  return (
    <Link to={to} className={styles.sectionCard}>
      <div className={styles.sectionIcon}>{icon}</div>
      <Heading as="h3" className={styles.sectionTitle}>{title}</Heading>
      <p className={styles.sectionDescription}>{description}</p>
      <span className={styles.sectionArrow}>Read more →</span>
    </Link>
  );
}

function HomepageHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src="/img/brand/syncor-logo-white.png"
          alt="Syncor"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          Syncor Documentation
        </Heading>
        <p className={styles.heroSubtitle}>
          Everything your team needs to master Syncor — from placing your first
          purchase request to managing approvals and budgets.
        </p>
        <div className={styles.heroCta}>
          <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/getting-started/welcome">
            Get Started
          </Link>
          <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/docs/purchase-requests/understanding">
            Place a Request
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Documentation" description="Everything your team needs to use Syncor">
      <HomepageHero />
      <main className={styles.main}>
        <div className="container">
          <Heading as="h2" className={styles.sectionHeading}>
            Browse by Topic
          </Heading>
          <div className={styles.sectionGrid}>
            {sections.map((s) => (
              <SectionCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
