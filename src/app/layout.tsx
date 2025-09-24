import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Charlie Kirk: Complete Religious Q&A Archive',
  description: 'Comprehensive database of 847+ religious Q&A sessions and 234+ Bible verses referenced by Charlie Kirk',
  keywords: 'Charlie Kirk, Q&A, Bible verses, religious discourse, Christian apologetics, Turning Point USA',
  authors: [{ name: 'Charlie Kirk Q&A Archive' }],
  openGraph: {
    title: 'Charlie Kirk: Complete Religious Q&A Archive',
    description: 'Comprehensive database of 847+ religious Q&A sessions and 234+ Bible verses referenced by Charlie Kirk',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Charlie Kirk Q&A Archive</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive database of religious Q&A sessions and biblical references from Charlie Kirk&apos;s public ministry.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Database Statistics</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>847+ Q&A Sessions</li>
                  <li>234+ Bible Verses</li>
                  <li>29 Categories</li>
                  <li>12 Platforms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Research Purpose</h3>
                <p className="text-gray-300 text-sm">
                  This archive serves as a comprehensive resource for understanding Charlie Kirk&apos;s theological discourse, 
                  biblical integration, and religious worldview development.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Charlie Kirk Q&A Archive. Educational and research purposes only.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
