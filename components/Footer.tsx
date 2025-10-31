export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-12 gap-8 mb-12">
      {/* Brand Column - Smaller */}
      <div className="md:col-span-3">
        <h3 className="text-2xl font-bold mb-4">FORGE Creative</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Crafting exceptional digital experiences with creativity and precision.
        </p>
      </div>

      {/* Quick Links - Smaller */}
      <div className="md:col-span-2">
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
          <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">Portfolio</a></li>
          <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
        </ul>
      </div>

      {/* Resources - Smaller */}
      <div className="md:col-span-2">
        <h4 className="text-lg font-semibold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
          <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</a></li>
          <li><a href="#guides" className="text-gray-300 hover:text-white transition-colors text-sm">Guides</a></li>
          <li><a href="#support" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a></li>
          <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a></li>
        </ul>
      </div>

      {/* Social Media - HEAVY (Larger Column) */}
      <div className="md:col-span-5">
        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
        <p className="text-gray-300 text-sm mb-6">Follow us on social media for updates, insights, and creative inspiration.</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a href="#linkedin" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <a href="#twitter" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
            <span className="text-sm font-medium">Twitter</span>
          </a>
          
          <a href="#instagram" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm font-medium">Instagram</span>
          </a>
          
          <a href="#facebook" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-sm font-medium">Facebook</span>
          </a>
          
          <a href="#youtube" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-medium">YouTube</span>
          </a>
          
          <a href="#dribbble" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-3 rounded-lg">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.66 6.67c1.14 1.53 1.84 3.41 1.91 5.45-2.28-.49-4.34-.49-6.13-.16.17-.42.33-.85.48-1.29 2.01-.82 3.77-2.1 4.74-4zm-1.39-1.86c-.85 1.67-2.38 2.85-4.18 3.61-.74-1.37-1.57-2.68-2.48-3.94 2.35-.37 4.75-.13 6.66.33zM12 1.93c1.43 0 2.78.31 4 .86-.64.28-1.29.64-1.93 1.08-.89-.47-1.85-.8-2.85-.98.26-.32.52-.64.78-.96zm-3.07.91c1.01.18 1.98.51 2.89.99-.64.44-1.28.93-1.89 1.47-.94-.88-1.96-1.64-3.05-2.27.64-.08 1.29-.13 1.95-.13.04 0 .07-.04.1-.06zM2.26 6.67c1.14-.82 2.38-1.43 3.68-1.82.98.59 1.89 1.28 2.73 2.06-.76.66-1.47 1.39-2.11 2.18-1.53-.64-3.18-.98-4.91-.98-.13 0-.26 0-.39.01.28-1.15.72-2.23 1.32-3.19.23-.08.46-.17.68-.26zm-.33 5.45c1.82 0 3.56.35 5.18 1.02-.28.88-.49 1.78-.63 2.7-1.89.42-3.87.42-5.91 0-.42-1.22-.64-2.52-.64-3.87 0-.28.01-.56.03-.85.32.01.65.01.97 0zm1.4 8.21c-1.14-1.53-1.84-3.41-1.91-5.45 1.82.37 3.56.37 5.18 0 .14.85.35 1.68.63 2.49-1.96.82-3.68 2.1-4.65 3.96-.08-.33-.17-.67-.25-1zm9.67 1.74c-1.43 0-2.78-.31-4-.86.64-.28 1.29-.64 1.93-1.08.89.47 1.85.8 2.85.98-.26.32-.52.64-.78.96zm3.07-.91c-1.01-.18-1.98-.51-2.89-.99.64-.44 1.28-.93 1.89-1.47.94.88 1.96 1.64 3.05 2.27-.64.08-1.29.13-1.95.13-.04 0-.07.04-.1.06zm5.67-5.49c-1.14.82-2.38 1.43-3.68 1.82-.98-.59-1.89-1.28-2.73-2.06.76-.66 1.47-1.39 2.11-2.18 1.53.64 3.18.98 4.91.98.13 0 .26 0 .39-.01-.28 1.15-.72 2.23-1.32 3.19-.23.08-.46.17-.68.26z"/>
            </svg>
            <span className="text-sm font-medium">Dribbble</span>
          </a>
        </div>
        
        <div className="bg-slate-800 px-4 py-3 rounded-lg">
          <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-slate-700 text-white text-sm px-3 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-700 pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">&copy; 2025 FORGE Creative. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}