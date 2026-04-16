import { readFileSync } from 'node:fs';
import path from 'node:path';

export default function SessionMergedPage() {
  const htmlPath = path.join(process.cwd(), 'session-merged.html');
  const html = readFileSync(htmlPath, 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
