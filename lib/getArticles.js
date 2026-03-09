// lib/getArticles.js
import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const cleanImage = (url) => url?.trim().replace(/,+$/, '') || null;

export async function getAllArticles() {
  try {
    console.log("🔥 Fetching all articles from Firestore...");
    const snapshot = await getDocs(collection(db, 'articlesdb'));
    if (snapshot.empty) {
      console.log("⚠️ No articles found in articlesdb collection");
      return [];
    }
    const articles = snapshot.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        ...data,
        featuredImage: cleanImage(data.featuredImage),
        image: cleanImage(data.image),
      };
    });
    console.log(`✅ Fetched ${articles.length} articles`);
    return articles;
  } catch (error) {
    console.error("❌ Error fetching articles:", error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      name: error.name
    });
    return [];
  }
}

export async function getArticlesByTag(tag) {
  try {
    console.log(`🔥 Searching for tag: "${tag}"`);
    const snapshot = await getDocs(collection(db, 'articlesdb'));
    if (snapshot.empty) {
      console.log("⚠️ No articles found in articlesdb collection");
      return [];
    }
    const filtered = snapshot.docs.filter((d) => {
      const data = d.data();
      const tags = data.tags;
      if (!tags) return false;
      const tagLower = tag.toLowerCase().trim();
      if (Array.isArray(tags)) {
        return tags.some((t) =>
          typeof t === 'string' && t.split(',').some((p) => p.trim().toLowerCase() === tagLower)
        );
      }
      if (typeof tags === 'string') {
        return tags.split(',').some((p) => p.trim().toLowerCase() === tagLower);
      }
      return false;
    });
    const articles = filtered.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        ...data,
        featuredImage: cleanImage(data.featuredImage),
        image: cleanImage(data.image),
      };
    });
    console.log(`✅ Found ${articles.length} articles with tag "${tag}"`);
    return articles;
  } catch (error) {
    console.error(`❌ Error fetching articles by tag "${tag}":`, error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      name: error.name
    });
    return [];
  }
}

export async function getArticleById(articleId) {
  try {
    console.log(`🔥 Fetching article with ID: "${articleId}"`);
    const docRef = doc(db, 'articlesdb', articleId);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      console.log(`⚠️ Article with ID "${articleId}" not found`);
      return null;
    }
    const data = snapshot.data();
    const article = {
      id: snapshot.id,
      ...data,
      featuredImage: cleanImage(data.featuredImage),
      image: cleanImage(data.image),
    };
    console.log(`✅ Successfully fetched article: "${article.title}"`);
    return article;
  } catch (error) {
    console.error(`❌ Error fetching article ${articleId}:`, error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      name: error.name
    });
    return null;
  }
}