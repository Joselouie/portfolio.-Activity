import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close the menu when a section is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: "Calculator",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/calculator/index.html",
      image: "/calculator.png"
    },
    {
      id: 2,
      title: "Loop",
      description: "Performs sum, factorial, odd/even operations on input number",
      tags: ["HTML", "JavaScript", "CSS"],
      link: "/loop/index.html",
      image: "/2.png"
    },
    {
      id: 3,
      title: "Employee Management",
      description: "Add and display employee data using basic HTML, JS, and DOM manipulation.",
      tags: ["HTML", "JavaScript", "DOM"],
      link: "/array/index.html",
      image: "/3.png"
    },
    {
      id: 4,
      title: "Login Page",
      description: "A basic login form styled using internal CSS.",
      tags: ["HTML", "CSS"],
      link: "/CSS_Selectors/index.html",
      image: "/4.png"
    },
    {
      id: 5,
      title: "CSS Demo",
      description: "Demonstrates Inline, Internal, and External CSS styling methods.",
      tags: ["HTML", "CSS", "Styling"],
      link: "/CSS_Type/index.html",
      image: "/5.png"
    }



  ];


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* Navbar */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-gray-800 shadow-lg py-2' : 'bg-gray-900 py-4'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-green-400">Joselito Castillo</div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'projects', 'social'].map((section) => (
                <button
                  key={section}
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${activeSection === section
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  onClick={() => handleNavigation(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800 text-white mt-2 py-2 rounded-md shadow-md">
              {['home', 'about', 'projects', 'social'].map((section) => (
                <button
                  key={section}
                  className={`block w-full px-4 py-2 text-left font-medium ${activeSection === section ? 'bg-green-600' : 'hover:bg-gray-700'}`}
                  onClick={() => handleNavigation(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 container mx-auto px-4">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="text-center max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <img
                src="/97fe9e57-8ee1-4c3b-a49b-1116779e2eb4.jpg"
                alt="Profile"
                className="mx-auto rounded-full mb-4 w-48 h-48 object-cover border-4 border-green-500 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold shadow-md">
                Sweet and Caring BF
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-green-400">Joselito Castillo</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-medium">
              Full Stack Developer | Web Designer | Tech Enthusiast
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I create elegant, performant digital experiences with modern web technologies.
              Passionate about solving problems through clean, efficient code and intuitive design.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleNavigation('projects')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => handleNavigation('social')}
                className="border border-green-600 text-green-400 hover:bg-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-200"
              >
                Contact Me
              </button>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Professional Background</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a full-stack developer with 5+ years of experience building web applications
                for startups and enterprises. My expertise spans the entire development stack,
                from crafting responsive UIs to designing scalable backend architectures.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in JavaScript technologies including React, Node.js, and Express,
                with additional experience in Python and Java. I'm passionate about clean code,
                performance optimization, and creating delightful user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Skills & Technologies</h3>
                <ul className="space-y-2">
                  {[
                    'React & Next.js', 'Node.js & Express', 'TypeScript',
                    'Tailwind CSS', 'MongoDB & PostgreSQL', 'GraphQL',
                    'Docker & Kubernetes', 'AWS & GCP', 'CI/CD Pipelines'
                  ].map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Education & Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white">BSIT 3rd Year</h4>
                    <p className="text-gray-400 text-sm">University of Abra</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              My <span className="text-green-400">Projects</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-green-500"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-200"
                      >
                        View Project
                      </a>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Social Section */}
        {activeSection === 'social' && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Let's <span className="text-green-400">Connect</span>
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-green-400">Get in Touch</h3>
                  <p className="text-gray-300 mb-6">
                    Interested in working together or have questions about my work?
                    Feel free to reach out through any of these channels.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-gray-700 p-3 rounded-full mr-4">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">castillojoselito63@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-700 p-3 rounded-full mr-4">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-white">09164429636</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-green-400">Social Media</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joselito-castillo-b86101362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                      { name: 'GitHub', url: 'https://github.com/Joselouie', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                      { name: 'Facebook', url: 'https://www.facebook.com/castillo.joselito.14?mibextid=ZbWKwL', icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-3 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.icon} />
                        </svg>
                        <span className="text-white">{social.name}</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Joselito Castillo. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;