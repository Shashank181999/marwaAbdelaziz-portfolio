// app/articles/category/[category]/page.js
export async function generateStaticParams() {
  return [
    { category: 'leadership' },
    { category: 'inspiration' },
    { category: 'personal-development' },
  ];
}

import CategoryPageClient from './CategoryPageClient';

export default function CategoryPage({ params }) {
  return <CategoryPageClient params={params} />;
}