import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.296h-3.123V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.946 13.946 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.596 3.417A9.867 9.867 0 010 21.542a13.934 13.934 0 007.548 2.212c9.055 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.265 2.368 4.265 5.452v6.289zM5.337 7.433a2.065 2.065 0 01-2.065-2.065 2.065 2.065 0 012.065-2.065 2.065 2.065 0 012.065 2.065 2.065 2.065 0 01-2.065 2.065zM6.761 20.452H3.913V9h2.848v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
