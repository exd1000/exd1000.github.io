import Parser from 'rss-parser';

type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

export async function getSubstackFeed(): Promise<Post[]> {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://exd1000.substack.com/feed');
    return feed.items.slice(0, 3).map(item => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      contentSnippet: item.contentSnippet || ''
    }));
  } catch (error) {
    console.error("🔴 Failed to fetch Substack feed:", error);
    return [];
  }
}