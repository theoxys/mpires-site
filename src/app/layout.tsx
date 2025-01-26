import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Web Developer',
  description: 'Professional portfolio and blog of a web developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-primary">
                Portfolio
              </Link>
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </nav>
        </header>
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <footer className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About</h3>
                <p className="text-muted-foreground">
                  Professional web developer passionate about creating modern and efficient web applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                      contact@example.com
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-primary transition-colors">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}