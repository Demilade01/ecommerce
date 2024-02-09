import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || '';

const client = sanityClient({
  projectId: 'itj5ehjn',
  dataset: 'production',
  apiVersion: '2024-02-09',
  useCdn: true,
  token: token
});

const builder = imgUrlBuilder(client);

const urlFor = (source) => builder.image(source);

export { client, urlFor };
