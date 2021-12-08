import { ArrowRight } from '@styled-icons/feather';
import Head from 'next/head';

import { Footer } from '../components/Footer';
import { JoinLinks } from '../components/JoinLinks';
import { JoinPrompt } from '../components/JoinPrompt';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.scss';
import URLs from '../urls';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SocialTech</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bpi8rtm.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.9, user-scalable=0"
        />

        <meta property="og:title" content="SocialTech" />
        <meta property="og:url" content="https://socialtech.live" />
        <meta
          property="og:image"
          content="https://socialtech.live/socialtech.gif"
        />
        <meta
          property="og:description"
          content="Our vision is to make technology universally accessible. We are building a new tech ecosystem that connects people and give them the tools to build their own systems of innovation and solutions empowering technological choice."
        />

        <meta property="twitter:title" content="SocialTech" />
        <meta property="twitter:site" content="@socialtech.live" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://socialtech.live/socialtech.gif"
        />
        <meta
          property="twitter:image:alt"
          content="Open Technology Collaboration"
        />
        <meta
          property="twitter:description"
          content="Our vision is to make technology universally accessible. We are building a new tech ecosystem that connects people and give them the tools to build their own systems of innovation and solutions empowering technological choice."
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        {
          // Disabled scroll snapping.
          /* // Firefox only: Scroll snapping.
                    // Doesn't work properly with Chromium.
                    typeof window !== 'undefined' &&
                    typeof (window as any).InstallTrigger !== 'undefined' &&
                    <style dangerouslySetInnerHTML={{ __html: `html { scroll-snap-type: y mandatory; }` }} /> */
        }
      </Head>
      <main>
        <section className={styles.hero}>
          <Navbar />
          <div className={styles.overview}>
            <div className={styles.left}>
              <div className={styles.tagline}>
                <h1>
                  A new model for
                  <br />
                  open collaboration.
                </h1>
                <p>
                  Run an organisation where members get rewarded for their
                  <br />
                  contributions with fraction ownership.
                </p>
                <JoinLinks />
              </div>
            </div>
            <div className={styles.graphic}>
              <img src="/assets/images/feature2.svg" draggable={false} />
            </div>
          </div>
        </section>
        <section className={styles.section} data-reverse="true">
          <div className={styles.image}>
            <img
              src="/appearance.jpg"
              draggable={false}
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className={styles.content}>
            <div>
              <h1>
                Kickstart an organisation
                <br /> with your co-founders.
              </h1>
              <p>
                It’s the early days, you just had a long conversation with two
                friends about a meaningful challenge that you’re all passionate
                about and have a potential solution for. You’re ready to embark
                the startup journey.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.content}>
            <div>
              <h1>
                Onboard users, investors
                <br /> and advisors as you grow
              </h1>
              <p>
                You’ve bootstrapped and delivered an MVP, and some investors and
                advisors are interested in having a chat with you. As an Open
                Enterprise, you can onboard them seamlessly into your digital
                organization and align them with your success.
              </p>
              <a
                className={styles.link}
                href={URLs.GitHub}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRight size={24} strokeWidth={2} />
                View project on GitHub
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/opensource.svg" draggable={false} />
          </div>
        </section>
        <section className={styles.section} data-reverse="true">
          <div className={styles.image}>
            <img src="/everywhere.svg" draggable={false} />
          </div>
          <div className={styles.content}>
            <div>
              <h1>
                Engage highly committed
                <br />
                contributors
              </h1>
              <p>
                You need talented people on-demand across various tasks that
                your full-time workforce can’t prioritize at the moment. As an
                Open Enterprise, you can easily fund tasks and have people apply
                to work on them in return for funds or shares.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.content}>
            <div>
              <h1>
                Reimagining what it means
                <br />
                to innovation.
              </h1>
              <p>
                Our mission is to{' '}
                <u>augment human capacity and advance social well-being</u> by
                helping make technology universally accessible. We are building
                are building a new tech ecosystem that connects people and give
                them the tools to build their own systems of innovation and
                solutions empowering technological choice.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/privacy.svg" draggable={false} />
          </div>
        </section>
        <JoinPrompt />
        <Footer />
      </main>
    </div>
  );
}
