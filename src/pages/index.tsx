import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Update the title text */}
        <h1 className="hero__title">Bruin Supermileage</h1>
        
        {/* Update the tagline text */}
        <p className="hero__subtitle">We are Bruin Supermileage</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The SMV documentation dump">
      <HomepageHeader />
      <main>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img
            src="img/my-large-image.png" // Replace with the path to your large image
            alt="My large image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </main>
    </Layout>
  );
}
