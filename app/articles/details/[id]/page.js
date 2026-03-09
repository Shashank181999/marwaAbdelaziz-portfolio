import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getArticleById, getAllArticles } from '../../../../lib/getArticles';

// Add this between imports and component
export async function generateStaticParams() {
  try {
    console.log('🔥 Generating static params for article details...');
    const articles = await getAllArticles();
 console.log(`✅ Found ${articles.length} articles to pre-generate`);
//          ^ Add parenthesis here
    
   // ✅ CORRECT
return articles.map((article) => ({
  id: String(article.id),  // Convert to string
}));
  } catch (error) {
    console.error('❌ Error generating static params:', error);
    return [];
  }
}
export default async function ArticleDetailPage({ params }) {
  const resolvedParams = await params;
  const articleId = resolvedParams.id;
  
  const article = await getArticleById(articleId);
  
  console.log(`📌 Article detail page loaded article:`, article?.id);
  console.log(`📌 Article tags raw:`, article?.tags);
  console.log(`📌 Article date raw:`, article?.date);
  console.log(`📌 Article contents:`, article?.articleContents?.length, 'items');

  // ✅ FIXED: Parse tags properly - handles "PM,SG" format
  const parseTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) {
      // Flatten: ["PM,SG"] → ["PM", "SG"]
      return tags.flatMap(tag => 
        typeof tag === 'string' 
          ? tag.split(',').map(t => t.trim()).filter(t => t.length > 0)
          : [tag]
      );
    }
    if (typeof tags === 'string') {
      return tags.split(',').map(t => t.trim()).filter(t => t.length > 0);
    }
    return [];
  };

  // ✅ FIXED: Parse date properly - handles multiple formats
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    // Remove any extra spaces
    const cleaned = String(dateString).trim();
    
    let day, month, year;
    
    // Format: "12-21-2020" (MM-DD-YYYY with dashes)
    if (cleaned.includes('-')) {
      const parts = cleaned.split('-');
      if (parts.length === 3) {
        month = parts[0].padStart(2, '0');
        day = parts[1].padStart(2, '0');
        year = parts[2];
      }
    }
    // Format: "12/21/2020" (MM/DD/YYYY with slashes)
    else if (cleaned.includes('/')) {
      const parts = cleaned.split('/');
      if (parts.length === 3) {
        month = parts[0].padStart(2, '0');
        day = parts[1].padStart(2, '0');
        year = parts[2];
      }
    }
    // Format: "03212019" (MMDDYYYY - 8 digits)
    else if (/^\d{8}$/.test(cleaned)) {
      month = cleaned.substring(0, 2);
      day = cleaned.substring(2, 4);
      year = cleaned.substring(4, 8);
    }
    // Format: "3212019" (MDDYYYY - 7 digits)
    else if (/^\d{7}$/.test(cleaned)) {
      month = cleaned.substring(0, 1).padStart(2, '0');
      day = cleaned.substring(1, 3);
      year = cleaned.substring(3, 7);
    }
    // Try parsing as regular date
    else {
      try {
        const date = new Date(cleaned);
        if (!isNaN(date.getTime())) {
          day = date.getDate().toString().padStart(2, '0');
          month = (date.getMonth() + 1).toString().padStart(2, '0');
          year = date.getFullYear();
        }
      } catch {
        return cleaned;
      }
    }
    
    if (day && month && year) {
      return `${day}/${month}/${year}`;
    }
    
    return cleaned;
  };

  // Parse the article tags
  const articleTags = parseTags(article?.tags);
  console.log(`📌 Parsed tags:`, articleTags);

  // Get related articles (same tag)
  let relatedArticles = [];
  if (article && articleTags.length > 0) {
    const allArticles = await getAllArticles();
    relatedArticles = allArticles
      .filter(a => {
        if (a.id === article.id) return false;
        const aTags = parseTags(a.tags);
        return aTags.some(tag => articleTags.includes(tag));
      })
      .slice(0, 3);
  }
  
  console.log(`📌 Found ${relatedArticles.length} related articles`);

  // Get category name from tag
  const getCategoryName = (tag) => {
    if (!tag) return '';
    const tagLower = tag.toLowerCase().trim();
    switch(tagLower) {
      case 'pm': return 'Project Management';
      case 'sg': return 'Self Growth';
      case '70ways': return '70 Ways To Live Your Dream Life';
      case 'ways': return '70 Ways To Live Your Dream Life';
      default: return tag;
    }
  };

  // Get category slug from tag
  const getCategorySlug = (tag) => {
    if (!tag) return '';
    const tagLower = tag.toLowerCase().trim();
    switch(tagLower) {
      case 'pm': return 'leadership';
      case 'sg': return 'personal-development';
      case '70ways': return 'inspiration';
      case 'ways': return 'inspiration';
      default: return tagLower;
    }
  };

  // Calculate read time from content
  const calculateReadTime = (contents) => {
    if (!contents || !Array.isArray(contents)) return '5 min read';
    const totalText = contents
      .map(c => c.value || c.content || '')
      .join(' ');
    const wordCount = totalText.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <div className="text-6xl mb-6">📭</div>
            <h1 className="text-3xl font-black text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">This article doesn't exist or has been removed.</p>
            <Link 
              href="/articles"
              className="px-6 py-3 bg-red-900 text-white font-bold rounded-full hover:bg-red-800 transition-colors"
            >
              Back to Articles
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ✅ FIXED: Render content based on type - using 'value' field
// ✅ FIXED: Render content based on type - using 'value' field
// Better readable sizes for web and mobile
// ✅ FIXED: Full renderContent function with SMALLER headers/headings
// Copy this entire function and replace your renderContent function

const renderContent = (content, index) => {
  const type = content.type?.toLowerCase();
  const text = content.value || content.content || '';
  
  switch(type) {
    case 'title':
      return (
        <h1 
          key={index} 
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-snug"
        >
          {text}
        </h1>
      );
    
    case 'header':
    case 'subtitle':
      return (
        <h2 
          key={index} 
          className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 mt-6 md:mt-8 pb-2 border-b border-zinc-800"
        >
          {text}
        </h2>
      );
    
    case 'heading':
      return (
        <h3 
          key={index} 
          className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 md:mb-3 mt-5 md:mt-6"
        >
          {text}
        </h3>
      );
    
    case 'subheading':
      return (
        <h4 
          key={index} 
          className="text-sm sm:text-base md:text-lg font-medium text-gray-200 mb-2 mt-4"
        >
          {text}
        </h4>
      );
    
    case 'paragraph':
      const paragraphs = text.split('\n').filter(p => p.trim());
      return (
        <div key={index} className="mb-3 md:mb-4">
          {paragraphs.map((para, idx) => (
            <p 
              key={idx}
              className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3"
            >
              {para}
            </p>
          ))}
        </div>
      );
    
    case 'quote':
      return (
        <blockquote 
          key={index} 
          className="relative my-5 md:my-8 px-4 sm:px-6 md:px-8 py-4 md:py-6 bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-l-4 border-red-600 rounded-r-xl"
        >
          <div className="absolute -top-3 left-4 sm:left-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white font-medium italic leading-relaxed mt-1">
            "{text}"
          </p>
          {content.author && (
            <cite className="block mt-3 text-xs sm:text-sm text-red-400 font-semibold not-italic">
              — {content.author}
            </cite>
          )}
        </blockquote>
      );
    
    case 'highlight':
      return (
        <div 
          key={index} 
          className="my-4 md:my-6 p-3 sm:p-4 bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30 rounded-lg"
        >
          <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
            {text}
          </p>
        </div>
      );
    
    case 'list':
      const listItems = text.split('\n').filter(item => item.trim());
      return (
        <ul 
          key={index} 
          className="my-3 md:my-4 space-y-2 pl-2"
        >
          {listItems.map((item, i) => (
            <li 
              key={i} 
              className="flex items-start gap-2 text-sm sm:text-base text-gray-300"
            >
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-red-500 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    
    case 'numbered-list':
      const numberedItems = text.split('\n').filter(item => item.trim());
      return (
        <ol 
          key={index} 
          className="my-3 md:my-4 space-y-2 pl-2"
        >
          {numberedItems.map((item, i) => (
            <li 
              key={i} 
              className="flex items-start gap-2 text-sm sm:text-base text-gray-300"
            >
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <span className="mt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    
    case 'image':
      const imageUrl = content.value || content.url || content.src;
      return (
        <figure key={index} className="my-4 md:my-6">
          <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src={imageUrl}
              alt={content.caption || 'Article image'}
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          {content.caption && (
            <figcaption className="mt-2 text-center text-xs text-gray-500 italic">
              {content.caption}
            </figcaption>
          )}
        </figure>
      );
    
    case 'divider':
      return (
        <div key={index} className="my-6 md:my-8 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-red-600 to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
        </div>
      );
    
    case 'callout':
      return (
        <div 
          key={index} 
          className="my-4 md:my-6 p-3 sm:p-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl flex items-start gap-2 sm:gap-3"
        >
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-900 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {text}
          </p>
        </div>
      );
    
    case 'tip':
      return (
        <div 
          key={index} 
          className="my-4 md:my-6 p-3 sm:p-4 bg-gradient-to-br from-green-950/30 to-zinc-900/50 border border-green-900/30 rounded-lg sm:rounded-xl flex items-start gap-2 sm:gap-3"
        >
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-700 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-green-400 mb-1">Pro Tip</p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      );
    
    case 'warning':
      return (
        <div 
          key={index} 
          className="my-4 md:my-6 p-3 sm:p-4 bg-gradient-to-br from-yellow-950/30 to-zinc-900/50 border border-yellow-900/30 rounded-lg sm:rounded-xl flex items-start gap-2 sm:gap-3"
        >
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-yellow-400 mb-1">Important</p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      );
    
    default:
      const defaultParagraphs = text.split('\n').filter(p => p.trim());
      return (
        <div key={index} className="mb-3 md:mb-4">
          {defaultParagraphs.map((para, idx) => (
            <p 
              key={idx}
              className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3"
            >
              {para}
            </p>
          ))}
        </div>
      );
  }
};
  const readTime = article.readTime || calculateReadTime(article.articleContents);

  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end bg-black overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src={article.featuredImage || article.image || '/pm1.png'}
            alt={article.title}
            fill
            className="object-cover opacity-30"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-8 sm:pb-12 md:pb-16">
          {/* Back Button */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>

          <div className="max-w-4xl">
            {/* Category Badge - Using parsed tags */}
            {articleTags.length > 0 && (
              <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                {articleTags.map((tag, index) => (
                  <Link 
                    key={index}
                    href={`/articles/category/${getCategorySlug(tag)}`}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-900 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
                  >
                    {getCategoryName(tag)}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-900 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/image2.png"
                    alt={article.author || 'Author'}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold">{article.author || 'Marwa Abdelaziz'}</span>
              </div>
              <span className="text-gray-600">|</span>
              <span>{formatDate(article.date)}</span>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
              </div>
              {article.views && (
                <>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {article.views} views
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
            
            {/* Article Content */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-12 bg-zinc-900">
                <Image
                  src={article.featuredImage || article.image || '/pm1.png'}
                  alt={article.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>

              {/* Article Body - Dynamic Content */}
              <div className="prose prose-invert max-w-none">
                {article.articleContents && article.articleContents.length > 0 ? (
                  article.articleContents.map((content, index) => renderContent(content, index))
                ) : article.content ? (
                  // Fallback if content is a string
                  <div className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {article.content.split('\n').map((para, idx) => (
                      <p key={idx} className="mb-4">{para}</p>
                    ))}
                  </div>
                ) : (
                  // Fallback if no content
                  <div className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    <p>{article.excerpt || 'No content available.'}</p>
                  </div>
                )}
              </div>

              {/* Tags Section - Using parsed tags */}
              {articleTags.length > 0 && (
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Topics</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {articleTags.map((tag, index) => (
                      <Link 
                        key={index}
                        href={`/articles/category/${getCategorySlug(tag)}`}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-900 border border-zinc-800 text-gray-300 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:bg-red-900/20 hover:border-red-900/50 transition-colors"
                      >
                        #{getCategoryName(tag)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800">
                <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Share Article</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-zinc-900 hover:bg-[#1DA1F2] text-white text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="hidden sm:inline">Twitter</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-zinc-900 hover:bg-[#0077B5] text-white text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-zinc-900 hover:bg-red-900 text-white text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Copy Link</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                
                {/* Author Card */}
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-red-900">
                      <Image
                         src="/image2.png"
                        alt="Marwa Abdelaziz"
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white mb-1 sm:mb-2">{article.author || 'Marwa Abdelaziz'}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                      Real Estate Developer & Leadership Expert
                    </p>
                    <Link 
                      href="/about"
                      className="inline-flex items-center gap-2 text-red-500 font-bold text-xs sm:text-sm hover:gap-3 transition-all"
                    >
                      View Profile
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Article Stats</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {article.views && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Views
                        </span>
                        <span className="text-white font-bold text-sm sm:text-base">{article.views}</span>
                      </div>
                    )}
                    {article.likes && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Likes
                        </span>
                        <span className="text-white font-bold text-sm sm:text-base">{article.likes}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Read Time
                      </span>
                      <span className="text-white font-bold text-sm sm:text-base">{readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Published
                      </span>
                      <span className="text-white font-bold text-sm sm:text-base">{formatDate(article.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Category Link */}
                {articleTags.length > 0 && (
                  <Link
                    href={`/articles/category/${getCategorySlug(articleTags[0])}`}
                    className="block bg-gradient-to-r from-red-900 to-red-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-[1.02] transition-transform"
                  >
                    <h3 className="text-white font-black text-sm sm:text-base mb-1 sm:mb-2">More {getCategoryName(articleTags[0])} Articles</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Explore all articles in this category</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="relative py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-black border-t border-zinc-900">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Articles</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">Continue your journey of growth and discovery</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedArticles.map((related) => {
                const relatedTags = parseTags(related.tags);
                return (
                  <Link
                    key={related.id}
                    href={`/articles/details/${related.id}`}
                    className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.featuredImage || related.image || '/pm1.png'}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{formatDate(related.date)}</span>
                        <span>|</span>
                        <span>{related.readTime || calculateReadTime(related.articleContents)}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-3">
                        {related.excerpt || (related.articleContents?.[0]?.value?.substring(0, 100) + '...')}
                      </p>
                      <span className="inline-flex items-center gap-2 text-red-500 font-bold text-xs sm:text-sm">
                        Read Article
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8 sm:mt-10">
              <Link 
                href="/articles"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 text-white font-bold text-sm sm:text-base rounded-full hover:bg-red-900 hover:border-red-900 transition-all"
              >
                View All Articles
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}