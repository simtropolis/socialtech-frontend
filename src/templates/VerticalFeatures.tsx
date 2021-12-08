import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The Critical Issue of Technological Choice"
    description=" Our mission is to augment human capacity and advance social well-being by helping make technology universally accessible. We are building a new tech ecosystem that connects people and give them the tools to build their own systems of innovation and solutions empowering technological choice. "
  >
    <VerticalFeatureRow
      title="Coditor"
      description="A visual development environment designed to easily create, collaborate and run software with any programming language on any platform using Web Assembly, Visual Tools and Code Assistants"
      image="/assets/images/coditor.svg"
      imageAlt="Coditor"
    />
    <VerticalFeatureRow
      title="Simtropolis"
      description="A digital nerve center of collaboration, knowledge management, learning and productivity. Designed to provide omni-channel environments for real time communication using recent advances in modern digital technologies."
      image="/assets/images/simtropolis.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Robotory"
      description="A rapidly deployable, remotely managed, modular manufacturing supply chain network enabled by industrial digital technologies. Using recent advances in 2D Materials, 3D Printing, Manufacturing Technologies and Robotics."
      image="/assets/images/robotory.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
