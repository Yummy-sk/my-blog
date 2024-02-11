// import fs from 'fs';
// import RSS from 'rss';
// import * as Env from '../src/utils/env.js';
// import * as Articles from '../src/actions/articles.js';

// const Blog = {
//   make: async () => {
//     const BASE_URL = Env.get({ key: 'BASE_URL' });

//     const rss = new RSS({
//       title: 'SangKwon Yeum Blog',
//       description: 'SangKwon Yeum Blog',
//       feed_url: `${BASE_URL}/rss`,
//       site_url: BASE_URL,
//       pubDate: new Date(),
//       copyright: `All rights reserved ${new Date().getFullYear()}, SangKwon Yeum`,
//     });

//     const articles = await Articles.get({}).then((res) => res);

//     articles.forEach((article) => {
//       rss.item({
//         title: article.title,
//         description: article.description,
//         url: `${BASE_URL}/articles/${article.slug}`,
//         date: new Date(article.created_at),
//       });
//     });

//     return fs.writeFileSync('./public/rss.xml', rss.xml({ indent: true }));
//   },
// };

const run = async () => {
  try {
    // await Blog.make(); // Blog.make() 호출
    console.log('TEMP: ', process.env.BASE_URL);
    console.log('BASE: ', process.env.SUPABASE_URL);
    console.log('KEY: ', process.env.SUPABASE_ANON_KEY);
    console.log('Prebuild completed successfully.'); // 성공 메시지 출력
  } catch (error) {
    console.error('Prebuild failed:', error); // 실패 메시지 및 에러 출력
    process.exit(1); // 프로세스 종료
  }
};

export default run;
