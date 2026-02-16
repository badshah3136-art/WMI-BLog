
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${API}/blogs/${slug}`);
      setBlog(response.data);
      setLoading(false);
      
      // Fetch related blogs
      const allBlogs = await axios.get(`${API}/blogs?status=published&limit=4`);
      const related = allBlogs.data
        .filter(b => b.slug !== slug && b.category === response.data.category)
        .slice(0, 3);
      setRelatedBlogs(related);
    } catch (error) {
      console.error('Error fetching blog:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-blue-600 text-xl">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">{blog.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <div className="font-medium text-gray-900">{blog.author}</div>
              <div className="text-sm text-gray-500">{blog.author_title}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(blog.publish_date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{blog.read_time} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        {blog.featured_image && (
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          style={{
            color: '#374151',
            lineHeight: '1.8'
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="blog-content"
          />
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
          <p className="text-gray-700">
            <strong>{blog.author}</strong> is a {blog.author_title} specializing in metabolic health and weight management at the Weight Management Institute in Perth, Western Australia.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Take Control of Your Health?
          </h3>
          <p className="text-blue-100 mb-6">
            Book a consultation with our expert team at Weight Management Institute
          </p>
          <a
            href="https://weightmanagementinstitute.org/book-consultation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map(relatedBlog => (
              <Link
                key={relatedBlog.id}
                to={`/blog/${relatedBlog.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                  {relatedBlog.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {relatedBlog.excerpt}
                </p>
                <div className="text-blue-600 text-sm font-medium">Read more →</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
