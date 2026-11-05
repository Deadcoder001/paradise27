import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ReservationModal from './components/ReservationModal';
import MenuDrawer from './components/MenuDrawer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isSubPage = location.pathname !== '/';

  return (
    <div
      className={`min-h-screen ${
        isSubPage ? 'bg-[#BF2A2E]' : 'bg-[#090909]'
      } text-white flex flex-col font-sans selection:bg-[#FB6218] selection:text-white transition-colors duration-500`}
    >
      <ScrollToTop />

      {/* Fixed Luxury Navigation */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Routed Content with Smooth Page Transitions */}
      <main className="flex-grow relative overflow-x-clip overflow-y-visible">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage
                    onOpenReserve={() => setIsReserveOpen(true)}
                    onOpenMenu={() => setIsMenuOpen(true)}
                  />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage
                    onOpenReserve={() => setIsReserveOpen(true)}
                    onOpenMenu={() => setIsMenuOpen(true)}
                  />
                </PageTransition>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageTransition>
                  <GalleryPage
                    onOpenReserve={() => setIsReserveOpen(true)}
                    onOpenMenu={() => setIsMenuOpen(true)}
                  />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage
                    onOpenReserve={() => setIsReserveOpen(true)}
                    onOpenMenu={() => setIsMenuOpen(true)}
                  />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />

      {/* Interactive Tasting Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenReserve={() => setIsReserveOpen(true)}
      />

      {/* Persistent Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />
    </div>
  );
}
