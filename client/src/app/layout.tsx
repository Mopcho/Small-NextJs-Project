import { ReactNode } from 'react';
import '../public/stylesheets/global.css';
import { NextAuthProvider } from './providers';

export const metadata = {
  title: 'CyberBlog',
  description: 'A blog in the style of cyberpunk',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
