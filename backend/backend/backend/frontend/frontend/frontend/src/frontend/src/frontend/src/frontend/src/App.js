import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookOpen, Layout, Users } from "lucide-react";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import AdminBlog from "./pages/AdminBlog";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Weight Management Institute
              </h1>
              <p className="text-gray-600 mt-1">Blog Management System</p>
            </div>
            <a
              href="https://weightmanagementinstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit Main Site →
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Professional Blog Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage and publish evidence-based content on metabolic health, weight management, and wellness
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link
            to="/blog"
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border-2 border-transparent hover:border-blue-500 group"
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">View Blog</h3>
            <p className="text-gray-600 mb-4">
              Browse all published articles and explore content by category
            </p>
            <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
              Explore Blog →
            </div>
          </Link>

          <Link
            to="/admin/blogs"
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border-2 border-transparent hover:border-green-500 group"
          >
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Layout className="w-8 h-8 text-green-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Admin Panel</h3>
            <p className="text-gray-600 mb-4">
              Create, edit, and manage blog posts with our intuitive CMS
            </p>
            <div className="text-green-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
              Manage Content →
            </div>
          </Link>

          <a
            href="https://weightmanagementinstitute.org/book-consultation/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border-2 border-transparent hover:border-purple-500 group"
          >
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
              <Users className="w-8 h-8 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Book Consultation</h3>
            <p className="text-gray-600 mb-4">
              Schedule an appointment with Dr. Imran Badshah and our team
            </p>
            <div className="text-purple-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
              Get Started →
            </div>
          </a>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">SEO Optimized</h4>
                <p className="text-gray-600 text-sm">Meta descriptions, tags, and structured content for better search rankings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Category Management</h4>
                <p className="text-gray-600 text-sm">Organize content by topics like PCOS, diabetes, metabolic health</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Rich Content Editor</h4>
                <p className="text-gray-600 text-sm">HTML support for formatting, images, and scientific references</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Analytics Tracking</h4>
                <p className="text-gray-600 text-sm">View counts and engagement metrics for each post</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Responsive Design</h4>
                <p className="text-gray-600 text-sm">Perfect viewing experience on desktop, tablet, and mobile</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Professional Theme</h4>
                <p className="text-gray-600 text-sm">Medical-focused design matching your brand identity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Weight Management Institute. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Professional medical weight management in Perth, Western Australia
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/blogs" element={<AdminBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
