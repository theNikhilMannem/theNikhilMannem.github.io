
import React from 'react';
import ReactMarkdown from 'react-markdown';

const post = `
# First Blog Post
This is an example markdown blog post.
`;

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ReactMarkdown>{post}</ReactMarkdown>
    </div>
  );
}
