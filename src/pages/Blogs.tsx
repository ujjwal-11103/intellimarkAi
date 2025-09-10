import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const blogData = [
  {
    title: "Decoding-the-Mysteries-of-AI",
    description: "Explore LIME, SHAP, and other XAI tools that make AI predictions transparent and understandable.",
    category: "AI",
  },
  {
    title: "Harnessing-AI-for-Strategic-Pricing-in-Consumer-Goods",
    description:
      "Discover how AI-driven pricing strategies help CPG companies optimize profits and adapt to market dynamics.",
    category: "Pricing",
  },
  {
    title: "Illuminating-the-Path-Forward",
    description:
      "Learn about the evolution of Explainable AI (XAI) and its growing role in ethical, transparent AI systems.",
    category: "XAI",
  },
  {
    title: "Integrating-GenAI-with-Traditional-Data-Science",
    description:
      "See how combining Generative AI with traditional forecasting improves accuracy and operational efficiency for CPG companies.",
    category: "Forecasting",
  },
  {
    title: "Marketing-Mix-Modeling",
    description:
      "Understand how MMM helps marketers measure ROI and optimize campaigns in a post-cookie, privacy-focused era.",
    category: "Marketing",
  },
  {
    title: "The-Future-of-AI",
    description:
      "Explore the future of Explainable AI, its societal impact, and the opportunities and challenges for adoption.",
    category: "AI",
  },
  {
    title: "Unveiling-AI",
    description:
      "A guide to top XAI technologies like LIME and SHAP, highlighting benefits, limitations, and their applications.",
    category: "XAI",
  },
]

function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-14">

      <Helmet>
        <title>Blogs - Intellimark AI</title>
        <meta name="description" content="Read the latest articles and insights from Intellimark AI on marketing, AI technology, and industry trends." />
        <meta property="og:title" content="Blogs - Intellimark AI" />
        <meta property="og:description" content="Stay updated with Intellimark AI’s expert insights on AI-driven marketing strategies and industry innovations." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge perspectives on AI, data science, and technology innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ padding: "2px" }}
              >
                <div className="bg-white rounded-2xl h-full w-full"></div>
              </div>

              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm">
                    {blog.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  {blog.title.replace(/-/g, " ")}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{blog.description}</p>

                <Link
                  to={`/${blog.title}`}
                  className="group/btn inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Read Full Article
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
