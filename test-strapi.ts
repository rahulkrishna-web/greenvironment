import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(process.cwd(), '.env') });
config({ path: path.resolve(process.cwd(), '.env.local') });

import { getTestimonials } from './lib/strapi';

async function run() {
  try {
    const res = await getTestimonials();
    console.log(JSON.stringify(res, null, 2));
  } catch (e) {
    console.error("Error:", e);
  }
}

run();
