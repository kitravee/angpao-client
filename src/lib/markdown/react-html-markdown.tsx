import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Link from '@/components/link';

interface Props {
  children: string;
}

export const ReactHtmlMarkdown: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        // Map `h1` (`# heading`) to use `h2`s.
        h1: ({ children, ...props }) => (
          <Typography variant="h1" {...props}>
            {children}
          </Typography>
        ),
        h2: ({ children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        h3: ({ children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        h4: ({ children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        h5: ({ children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        h6: ({ children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        p: ({ children, ...props }) => (
          <Typography variant="body1" {...props}>
            {children}
          </Typography>
        ),
        a: ({ children, ...props }) => (
          <Link href={props.href as string}>{children}</Link>
        ),
      }}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
};
