import { useState } from 'react'

function App() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: "🧠",
      title: "Smart Problem Sets",
      description: "Curated algorithms and data structures problems that adapt to your skill level"
    },
    {
      icon: "⚡",
      title: "Real-time Execution",
      description: "Test your code instantly with our lightning-fast judge system"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Track your improvement with detailed performance insights and statistics"
    },
    {
      icon: "🏆",
      title: "Competitive Coding",
      description: "Join contests and climb the leaderboard with fellow programmers"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer @ Google",
      content: "VeetCode helped me land my dream job. The problems are challenging yet educational.",
      avatar: "SC"
    },
    {
      name: "Alex Kumar",
      role: "CS Student @ MIT",
      content: "Best platform for mastering algorithms. The interface is incredibly intuitive.",
      avatar: "AK"
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Developer @ Meta",
      content: "I use VeetCode daily to keep my problem-solving skills sharp. Highly recommended!",
      avatar: "MR"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
            V
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            VeetCode
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">Problems</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contests</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Discuss</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Premium</a>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            Sign In
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-20 p-6">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Problems</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contests</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Discuss</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Premium</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all w-full">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Master
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              {" "}Algorithms
            </span>
            <br />
            Build Your Future
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join millions of developers mastering data structures and algorithms. 
            Practice coding problems, compete with others, and land your dream tech job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              Start Coding Now
            </button>
            <button className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2M+</div>
              <div className="text-slate-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1500+</div>
              <div className="text-slate-400">Problems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="text-purple-400">VeetCode?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`text-4xl mb-4 transition-transform duration-300 ${hoveredFeature === index ? 'scale-110' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our <span className="text-blue-400">Users Say</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-purple-300">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join the community of passionate developers and start your journey to coding mastery today.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Get Started Free
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">
                V
              </div>
              <span className="text-xl font-bold">VeetCode</span>
            </div>
            <div className="flex space-x-8 text-slate-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="text-center text-slate-500 mt-8">
            © 2025 VeetCode. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App