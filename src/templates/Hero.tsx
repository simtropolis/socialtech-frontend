import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://glowing-parcel-496.notion.site/SocialTech-Live-2066a0f2144541b9bc6ecabe51031b2e">
            <a>About</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    {/*     <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'Technology is a programming of nature. It is a capturing of phenomena and a harnessing of these to human purpose.'
            }
          </>
        }
        description=""
        button={undefined}
      />
    </Section> */}
  </Background>
);

export { Hero };
