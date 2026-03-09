import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import AboutSection from './components/AboutSection';
import WikiSection from './components/WikiSection';
import VideoQuoteSection from './components/VideoQuoteSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import GallerySection from './components/GallerySection';
import ArticlesSection from './components/ArticlesSection';
import EbookSection from './components/Ebooksection';
import TestimonialsSection from './components/TestimonialsSection';
import YouTubeSection from './components/YouTubeSection';
import Footer from './components/Footer';
import FixedSidebar from './components/FixedSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
          {/* <FixedSidebar /> */}
      <Header />
      <HomeBanner />
  
      <WikiSection />
      <VideoQuoteSection />
      <ExperienceSection />
           <EbookSection />
          <AboutSection />
      <EducationSection />
     
      <ArticlesSection />
    <YouTubeSection />
      <TestimonialsSection />
   
       <GallerySection />
      <Footer />
    </div>
  );
}