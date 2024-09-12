import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'visitor_count.json');

export async function GET() {
  let count = 0;

  // Read current count from the file
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    count = JSON.parse(fileData).count;
  }

  // Increment and update count
  count++;
  fs.writeFileSync(filePath, JSON.stringify({ count }), 'utf8');

  return NextResponse.json({ count });
}
