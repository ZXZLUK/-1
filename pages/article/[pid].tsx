import { useRouter } from 'next/router';

export default function ArticlePage() {
  const router = useRouter();
  const { pid } = router.query;

  // 模拟文章数据
  const article = {
    title: 'How to build web apps with Next.js',
    author: 'John Doe',
    date: '2026-01-13',
    description: 'Learn the basics of Next.js and build your first application.',
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build fast and SEO-friendly web applications.</p>

      <h2>Getting Started</h2>
      <p>To get started with Next.js, you need to have Node.js installed on your machine. You can create a new Next.js app by running:</p>

      <pre><code>npx create-next-app my-app</code></pre>

      <h2>Key Features</h2>
      <ul>
        <li>File-based routing</li>
        <li>Server-side rendering</li>
        <li>Automatic code splitting</li>
        <li>API routes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Next.js is a great choice for building modern web applications. Give it a try!</p>
    `,
  };

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>

        <hr />

        <div className="article-actions">
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
        </div>
      </div>
    </div>
  );
}
