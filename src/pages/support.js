import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './support.module.css';

export default function SupportPage() {
  return (
    <Layout title="Support" description="Get support for Syncor">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <Heading as="h1" className={styles.title}>Syncor Support</Heading>
            <p className={styles.subtitle}>
              Need help with setup, requests, approvals, or day-to-day usage? We are here to help.
            </p>
          </div>
        </section>

        <section className="container">
          <div className={styles.grid}>
            <article className={styles.card}>
              <Heading as="h2" className={styles.cardTitle}>Contact Details</Heading>
              <p><strong>Phone:</strong> <a href="tel:+4551346387">+45 51 34 63 87</a></p>
              <p><strong>Email:</strong> <a href="mailto:sam@sc-codecraft.com">sam@sc-codecraft.com</a></p>
              <p className={styles.small}>Typical response time: same business day.</p>
            </article>

            <article className={styles.card}>
              <Heading as="h2" className={styles.cardTitle}>Send a Support Request</Heading>
              <form name="syncor-support-top" method="POST" data-netlify="true" netlify-honeypot="bot-field" className={styles.form}>
                <input type="hidden" name="form-name" value="syncor-support-top" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <label>
                  Name
                  <input type="text" name="name" required />
                </label>

                <label>
                  Email
                  <input type="email" name="email" required />
                </label>

                <label>
                  Company (optional)
                  <input type="text" name="company" />
                </label>

                <label>
                  Message
                  <textarea name="message" rows="6" required />
                </label>

                <button type="submit" className="button button--primary">Send message</button>
              </form>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
