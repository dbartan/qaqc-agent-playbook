import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QAQC Agent Playbook',
  description: 'Static Mermaid documentation published via Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
