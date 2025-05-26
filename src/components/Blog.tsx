import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development.',
    image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'June 15, 2025',
    readTime: '8 min read',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Optimizing Website Performance: A Comprehensive Guide',
    excerpt: 'Learn proven strategies to improve your website speed, user experience, and conversion rates.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 28, 2025',
    readTime: '6 min read',
    category: 'Performance'
  },
  {
    id: 3,
    title: 'Responsive Design Best Practices for 2025',
    excerpt: 'Discover the latest approaches to building websites that provide optimal viewing experiences across all devices.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 10, 2025',
    readTime: '5 min read',
    category: 'Design'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Stay updated with our latest articles on web development trends, best practices, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-indigo-600 font-medium">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;