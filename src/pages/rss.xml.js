import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/** Map display dates like "November 2026" to a real Date (1st of that month) for the feed only. */
function toPubDate(dateStr) {
  const months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
  };
  const m = String(dateStr).trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const month = months[m[1].toLowerCase()];
    const year = Number(m[2]);
    if (month !== undefined && Number.isFinite(year)) {
      return new Date(Date.UTC(year, month, 1));
    }
  }
  // Fallback: keep feed valid even if a date string is unexpected
  return new Date();
}

export async function GET(context) {
  const interviews = (await getCollection('interviews'))
    .sort((a, b) => b.data.number - a.data.number);

  return rss({
    title: 'The Session Notes',
    description:
      'Interviews with the people who make music work: players, teachers, engineers, bookers, managers, and label people talking about how they got started and what a music career actually takes.',
    site: context.site,
    items: interviews.map((post) => ({
      title: post.data.title,
      description: post.data.intro,
      pubDate: toPubDate(post.data.date),
      link: `/interviews/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
