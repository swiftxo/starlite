
import Navbar from "../components/Navbar";
import FooterSec from "../components/FooterSec";
import '../globals.css';
import { getAllPosts } from '../../lib/posts';

export default async function Writings() {
  const posts = getAllPosts();


  return (
    <div className="flex flex-col min-h-screen background-svg">
      <Navbar />
      <main className="flex-grow container mt-24 mx-auto px-12 py-4">
        <h1 className="text-6xl font-header font-medium mb-8">My Writings</h1>

        {/* Blog post listing */}
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-200 pb-4">
              <a href={`/writings/${post.slug}`} className="text-2xl font-body font-semibold hover:underline">
                {post.title}
              </a>
              <p className=" font-body text-[#cccccc]">{post.description}</p>
              <span className=" font-body text-gray-400">{post.date}</span>
            </li>
          ))}
        </ul>
        

        <FooterSec />
      </main>
    </div>
  );
}

