import './App.css'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Set the html dir attribute based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      
      {!isLoading && (
        <div className={`app-container ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
          <Navbar />
          <Hero />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App