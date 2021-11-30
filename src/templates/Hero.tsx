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
          <Link href="https://github.com/devsocialtech">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/devsocialtech">
            <a>Project Tracker</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'To augment human capacity, advance social well-being and innovation.'
            }
          </>
        }
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
