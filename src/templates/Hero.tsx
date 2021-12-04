import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
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
        <li>
          <Link href="https://glowing-parcel-496.notion.site/de077abfe9ea492198a46c04341bcbba?v=09bf4087a52c4f8e9291c6eb6a9605cf">
            <a>Project Tracker</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'A new model for open collaboration.'}</>}
        description=""
        button={
          <Link href="#">
            <a>
              <Button xl>I AM CURIOUS</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
