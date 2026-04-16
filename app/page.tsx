import { readFileSync } from 'node:fs';
import path from 'node:path';

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), 'index.html');
  const html = readFileSync(htmlPath, 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
