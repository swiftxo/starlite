// src/app/components/MarkdownRenderer.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <h1 className="text-3xl text-white font-header my-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl text-white font-header my-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl text-white font-header my-2">{children}</h3>,
        p: ({ children }) => <p className="my-2 text-[#e4e4e4] font-body">{children}</p>,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={solarizedlight}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={`${className} bg-gray-200 rounded p-1`} {...props}>
              {children}
            </code>
          );
        },
        a: ({ children, href }) => (
          <a href={href} className="text-blue-600 hover:underline">
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="list-disc list-inside my-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside my-2">{children}</ol>,
        li: ({ children }) => <li className="my-1">{children}</li>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
