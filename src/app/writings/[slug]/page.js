// src/app/writings/[slug]/page.js

import { getPostBySlug, getAllPosts } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import FooterSec from '@/app/components/FooterSec';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import '@/app/globals.css';

export default async function Writing({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug); 

  if (!post) {
    notFound(); 
  }


  return (
    <main className="background-svg min-h-screen">
      <Navbar />  
      <div className="container mt-24 mx-auto px-12 py-4">
        <h1 className="text-4xl font-header  mb-4">{post.title}</h1>
        <p className="font-body text-[#a1a1a1] mb-4">{post.date}</p>
        <div className="font-body text-[#bdbdbd]">
        <MarkdownRenderer content={post.content} /> 
        </div>
        <FooterSec />  
      </div>
    </main>
  );
}

// Optional: Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug); 

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Generate static params based on your posts
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
