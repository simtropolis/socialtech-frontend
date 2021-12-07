import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItCheckbox from 'markdown-it-checkbox';

import styles from './Markdown.module.scss';

export const md: MarkdownIt = MarkdownIt({ breaks: true, linkify: true })
  .use(MarkdownItAnchor, { level: 3 })
  .use(MarkdownItCheckbox);

interface Props {
  content?: string;
}

export function Markdown({ content }: Props) {
  if (typeof content === 'undefined') return null;
  if (content.length === 0) return null;

  return (
    <span
      className={styles.markdown}
      dangerouslySetInnerHTML={{
        __html: md.render(content),
      }}
    />
  );
}
