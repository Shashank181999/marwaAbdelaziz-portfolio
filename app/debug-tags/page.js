// Create this file at: app/debug-tags/page.js
// Then visit: http://localhost:3000/debug-tags

import { getAllArticles } from '../../lib/getArticles';

export default async function DebugTagsPage() {
  const articles = await getAllArticles();
  
  console.log("\n\n🔍🔍🔍 FULL ARTICLES DEBUG 🔍🔍🔍\n");
  
  articles.forEach((article, index) => {
    console.log(`\n📄 Article ${index + 1}:`);
    console.log(`   ID: ${article.id}`);
    console.log(`   Title: ${article.title}`);
    console.log(`   Author: ${article.author}`);
    console.log(`   Date: ${article.date}`);
    console.log(`   Tags: ${JSON.stringify(article.tags)}`);
    console.log(`   Image: ${article.image}`);
    console.log(`   Full Object Keys: ${Object.keys(article).join(', ')}`);
  });

  const allTags = new Set();
  articles.forEach(article => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach(tag => allTags.add(tag));
    }
  });

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      padding: '40px',
      fontFamily: 'monospace',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#ef4444', fontSize: '32px', marginBottom: '20px' }}>
        🔍 Full Article Debug
      </h1>
      
      {/* Summary Section */}
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#ef4444', fontSize: '20px' }}>📊 Database Summary</h2>
        <p>Total Articles: <strong style={{ color: '#22c55e' }}>{articles.length}</strong></p>
        <p>Unique Tags: <strong style={{ color: '#22c55e' }}>{allTags.size}</strong></p>
        <p style={{ color: '#999', marginTop: '10px', fontSize: '12px' }}>
          Article Fields: {articles[0] ? Object.keys(articles[0]).join(', ') : 'No articles'}
        </p>
      </div>

      {/* All Unique Tags */}
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#ef4444', fontSize: '20px' }}>🏷️ All Unique Tags</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
          {Array.from(allTags).map((tag, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#ef4444',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              {tag}
            </div>
          ))}
          {allTags.size === 0 && (
            <span style={{ color: '#999' }}>No tags found</span>
          )}
        </div>
      </div>

      <h2 style={{ color: '#ef4444', fontSize: '24px', marginBottom: '20px' }}>
        📚 All Articles
      </h2>

      {articles.map((article, index) => (
        <div 
          key={article.id}
          style={{
            backgroundColor: '#1a1a1a',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            border: '1px solid #333'
          }}
        >
          <div style={{ 
            color: '#ef4444', 
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            #{index + 1} - {article.title || 'No Title'}
          </div>
          
          {/* All Fields */}
          <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
            <div>
              <span style={{ color: '#ef4444' }}>ID: </span>
              <span style={{ color: '#fff' }}>{article.id}</span>
            </div>
            
            <div>
              <span style={{ color: '#ef4444' }}>Author: </span>
              <span style={{ color: '#fff' }}>{article.author || 'N/A'}</span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Date: </span>
              <span style={{ color: '#fff' }}>{article.date || 'N/A'}</span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Slug: </span>
              <span style={{ color: '#fff' }}>{article.slug || 'N/A'}</span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Category: </span>
              <span style={{ color: '#fff' }}>{article.category || 'N/A'}</span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Published: </span>
              <span style={{ color: article.published ? '#22c55e' : '#ef4444' }}>
                {String(article.published)}
              </span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Excerpt: </span>
              <span style={{ color: '#999' }}>
                {article.excerpt ? `${article.excerpt.substring(0, 100)}...` : 'N/A'}
              </span>
            </div>

            <div>
              <span style={{ color: '#ef4444' }}>Content Length: </span>
              <span style={{ color: '#fff' }}>
                {article.content ? `${article.content.length} chars` : 'No content'}
              </span>
            </div>
          </div>

          {/* Image URLs Section */}
          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px', 
            borderTop: '1px solid #333' 
          }}>
            <p style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '10px' }}>
              🖼️ Image URLs:
            </p>
            <div style={{ fontSize: '12px', display: 'grid', gap: '5px' }}>
              <div>
                <span style={{ color: '#999' }}>image: </span>
                <span style={{ color: article.image ? '#22c55e' : '#666', wordBreak: 'break-all' }}>
                  {article.image || 'undefined'}
                </span>
              </div>
              <div>
                <span style={{ color: '#999' }}>thumbnail: </span>
                <span style={{ color: article.thumbnail ? '#22c55e' : '#666', wordBreak: 'break-all' }}>
                  {article.thumbnail || 'undefined'}
                </span>
              </div>
              <div>
                <span style={{ color: '#999' }}>featuredImage: </span>
                <span style={{ color: article.featuredImage ? '#22c55e' : '#666', wordBreak: 'break-all' }}>
                  {article.featuredImage || 'undefined'}
                </span>
              </div>
              <div>
                <span style={{ color: '#999' }}>coverImage: </span>
                <span style={{ color: article.coverImage ? '#22c55e' : '#666', wordBreak: 'break-all' }}>
                  {article.coverImage || 'undefined'}
                </span>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px', 
            borderTop: '1px solid #333' 
          }}>
            <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🏷️ Tags: </span>
            {article.tags && Array.isArray(article.tags) && article.tags.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {article.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    style={{
                      backgroundColor: '#ef4444',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '12px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <span style={{ color: '#999', marginLeft: '10px' }}>No tags</span>
            )}
            <div style={{ marginTop: '5px', fontSize: '11px', color: '#666' }}>
              Type: {typeof article.tags} | IsArray: {String(Array.isArray(article.tags))} | Raw: {JSON.stringify(article.tags)}
            </div>
          </div>

          {/* Raw JSON */}
          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px', 
            borderTop: '1px solid #333' 
          }}>
            <p style={{ color: '#ef4444', marginBottom: '10px' }}>📋 Raw JSON:</p>
            <pre style={{ 
              backgroundColor: '#0a0a0a',
              padding: '15px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '11px',
              color: '#22c55e',
              maxHeight: '150px'
            }}>
              {JSON.stringify(article, null, 2)}
            </pre>
          </div>
        </div>
      ))}

      {/* No Articles */}
      {articles.length === 0 && (
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ef4444', fontSize: '18px' }}>⚠️ No articles found</p>
        </div>
      )}

      {/* Footer */}
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#1a1a1a',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#999', fontSize: '14px' }}>
          ✅ Check terminal for detailed logs
        </p>
        <a 
          href="/articles"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '12px 24px',
            backgroundColor: '#ef4444',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold'
          }}
        >
          ← Back to Articles
        </a>
      </div>
    </div>
  );
}