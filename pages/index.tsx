import Link from 'next/link';

export default function Home() {
  // 模拟文章数据
  const articles = [
    {
      slug: 'article-1',
      title: 'How to build web apps with Next.js',
      author: 'John Doe',
      date: '2026-01-13',
      description: 'Learn the basics of Next.js and build your first application.',
    },
    {
      slug: 'article-2',
      title: 'Understanding React Hooks',
      author: 'Jane Smith',
      date: '2026-01-12',
      description: 'A comprehensive guide to React Hooks and how to use them effectively.',
    },
    {
      slug: 'article-3',
      title: 'TypeScript for Beginners',
      author: 'Bob Wilson',
      date: '2026-01-11',
      description: 'Start your journey with TypeScript and improve your JavaScript code.',
    },
  ];

  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {articles.map((article) => (
              <div key={article.slug} className="article-preview">
                <div className="article-meta">
                  <a href={`/profile/${article.author}`}>
                    <img src="" alt={article.author} />
                  </a>
                  <div className="info">
                    <a href={`/profile/${article.author}`} className="author">
                      {article.author}
                    </a>
                    <span className="date">{article.date}</span>
                  </div>
                </div>
                <Link href={`/article/${article.slug}`}>
                  <a className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <a href="" className="tag-pill">programming</a>
                <a href="" className="tag-pill">javascript</a>
                <a href="" className="tag-pill">react</a>
                <a href="" className="tag-pill">nextjs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
