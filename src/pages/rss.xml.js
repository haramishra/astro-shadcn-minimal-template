import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { siteDetails } from '@/global';

export async function GET(context) {
  return rss({
    title: siteDetails.name,
    description: siteDetails.description,
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./**/*.md')
    ),
    customData: `<language>${siteDetails.language}</language>`,
  });
}
