import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('landing') // 'landing' or 'problems'

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

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "49.1%",
      status: "Not Started"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      acceptance: "37.4%",
      status: "Not Started"
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "33.8%",
      status: "Not Started"
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "35.2%",
      status: "Not Started"
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      acceptance: "32.1%",
      status: "Not Started"
    },
    {
      id: 6,
      title: "Zigzag Conversion",
      difficulty: "Medium",
      acceptance: "40.2%",
      status: "Not Started"
    },
    {
      id: 7,
      title: "Reverse Integer",
      difficulty: "Medium",
      acceptance: "27.5%",
      status: "Not Started"
    },
    {
      id: 8,
      title: "String to Integer (atoi)",
      difficulty: "Medium",
      acceptance: "16.6%",
      status: "Not Started"
    },
    {
      id: 9,
      title: "Palindrome Number",
      difficulty: "Easy",
      acceptance: "52.1%",
      status: "Not Started"
    },
    {
      id: 10,
      title: "Regular Expression Matching",
      difficulty: "Hard",
      acceptance: "28.1%",
      status: "Not Started"
    }
  ]



  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
            V
          </div>
          <span className="text-2xl font-bold text-white">
            VeetCode
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => setCurrentView('landing')}
            className={`hover:text-blue-400 transition-colors ${currentView === 'landing' ? 'text-blue-400' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentView('problems')}
            className={`hover:text-blue-400 transition-colors ${currentView === 'problems' ? 'text-blue-400' : ''}`}
          >
            Problems
          </button>
          {/* <a href="#" className="hover:text-blue-400 transition-colors">Contests</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Discuss</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Premium</a> */}
          <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-800 z-20 p-6">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => {setCurrentView('landing'); setIsMenuOpen(false)}}
              className={`text-left hover:text-blue-400 transition-colors ${currentView === 'landing' ? 'text-blue-400' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => {setCurrentView('problems'); setIsMenuOpen(false)}}
              className={`text-left hover:text-blue-400 transition-colors ${currentView === 'problems' ? 'text-blue-400' : ''}`}
            >
              Problems
            </button>
            {/* <a href="#" className="hover:text-blue-400 transition-colors">Contests</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Discuss</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Premium</a> */}
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Conditional Content Rendering */}
      {currentView === 'landing' && (
        <>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Master Algorithms
                <br />
                Build Your Future
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Join millions of developers mastering data structures and algorithms. 
                Practice coding problems and land your dream tech job.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setCurrentView('problems')}
                  className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Coding Now
                </button>
                <button className="border border-slate-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20 py-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-blue-400">VeetCode?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Everything you need to master algorithms and ace technical interviews
              </p>
            </div>
            
            {/* Feature 1: Smart Problem Sets */}
            <div className="py-20 border-b border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Smart Problem Sets
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Curated algorithms and data structures problems that adapt to your skill level. 
                    Our AI-powered system learns from your progress and recommends the perfect next challenge.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Adaptive Learning</span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Curated Content</span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Skill Tracking</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <span className="text-slate-300">Array Problems</span>
                        <span className="text-green-400 text-sm">✓ Completed</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <span className="text-slate-300">Dynamic Programming</span>
                        <span className="text-yellow-400 text-sm">In Progress</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <span className="text-slate-300">Graph Algorithms</span>
                        <span className="text-slate-500 text-sm">Not Started</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Real-time Execution */}
            <div className="py-20 border-b border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                    <div className="bg-slate-900 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-slate-400 font-mono">
                        <div className="text-blue-400">function</div>
                        <div className="text-white ml-4">twoSum(nums, target) {`{`}</div>
                        <div className="text-green-400 ml-8">// Your solution here</div>
                        <div className="text-white ml-4">{`}`}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Test Cases: 3/3 passed</span>
                      <span className="text-green-400">✓ Accepted</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-2xl mb-8">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Real-time Execution
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Test your code instantly with our lightning-fast judge system. 
                    Get immediate feedback and detailed error analysis to accelerate your learning.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">Instant Feedback</span>
                    <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">Error Analysis</span>
                    <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">Performance Metrics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Progress Analytics */}
            <div className="py-20 border-b border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-2xl mb-8">
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Progress Analytics
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Track your improvement with detailed performance insights and statistics. 
                    Visualize your coding journey and identify areas for growth.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">Performance Tracking</span>
                    <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">Visual Analytics</span>
                    <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">Growth Insights</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Problems Solved</span>
                          <span className="text-white">127/200</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '63.5%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Accuracy Rate</span>
                          <span className="text-white">89%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Streak</span>
                          <span className="text-white">15 days</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Competitive Coding */}
            <div className="py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">Weekly Contest</h4>
                      <p className="text-slate-400">Top Performers</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <span className="text-white">Alex_Coder</span>
                        </div>
                        <span className="text-yellow-400">2,450 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <span className="text-white">CodeMaster</span>
                        </div>
                        <span className="text-gray-400">2,380 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <span className="text-white">AlgoNinja</span>
                        </div>
                        <span className="text-orange-400">2,320 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600/20 rounded-2xl mb-8">
                    <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Competitive Coding
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Join contests and climb the leaderboard with fellow programmers. 
                    Compete in real-time challenges and prove your coding skills.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm">Live Contests</span>
                    <span className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm">Leaderboards</span>
                    <span className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm">Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
            <div className="bg-slate-800 rounded-lg p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Crack Tech Interviews?
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Join the community of passionate developers and start your journey to coding mastery today.
              </p>
              <button 
                onClick={() => setCurrentView('problems')}
                className="bg-blue-600 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </>
      )}

      {currentView === 'problems' && (
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Problems</h1>
            <p className="text-slate-400">Practice coding problems to improve your skills</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white">
              <option>All Topics</option>
              <option>Array</option>
              <option>String</option>
              <option>Hash Table</option>
              <option>Dynamic Programming</option>
            </select>
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white">
              <option>All Difficulties</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white">
              <option>All Status</option>
              <option>Not Started</option>
              <option>Tried</option>
              <option>Solved</option>
            </select>
          </div>

          {/* Problems Table */}
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-300">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-300">Title</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-300">Difficulty</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-300">Acceptance</th>
                  </tr>
                </thead>
                <tbody>
                  {problems.map((problem) => (
                    <tr key={problem.id} className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer">
                      <td className="py-4 px-6">
                        <div className="w-4 h-4 border-2 border-slate-500 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-medium text-blue-400 hover:text-blue-300">
                          {problem.id}. {problem.title}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          problem.difficulty === 'Easy' ? 'bg-green-600/20 text-green-400' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-600/20 text-yellow-400' :
                          'bg-red-600/20 text-red-400'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        {problem.acceptance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 bg-blue-600 rounded-lg text-white">1</button>
            <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              2
            </button>
            <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              3
            </button>
            <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                V
              </div>
              <span className="text-xl font-bold">VeetCode</span>
            </div>
            <div className="flex space-x-8 text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
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