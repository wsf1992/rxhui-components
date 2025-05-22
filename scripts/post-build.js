import { rename, copyFile } from 'fs/promises';
import { join } from 'path';

async function postBuild() {
  try {
    const docsDir = join(process.cwd(), 'docs');
    const iframePath = join(docsDir, 'iframe.html');
    const indexPath = join(docsDir, 'index.html');

    // 复制 iframe.html 到 index.html
    await copyFile(iframePath, indexPath);
    console.log('Successfully created index.html');
  } catch (error) {
    console.error('Error during post-build:', error);
    process.exit(1);
  }
}

postBuild(); 