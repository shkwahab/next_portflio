import { createClient } from 'contentful-management';

// Create a Contentful client
const crudClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_TOKEN || "CFPAT-9VcPXY66zfsce_YADktz-Lut5s5JPY_ermThjoiNmpg"
});

export {crudClient}
