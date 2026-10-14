import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Download, ChevronLeft, ChevronRight,
  Maximize2, Minimize2, Check, Copy, BookOpen, Play,
  TrendingUp, Sparkles, CheckCircle2, Zap, Layers,
  FileText, Youtube, ExternalLink
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// 13-Slide presentation outline mapping directly to UIUX_Revamp_Strategy.pdf
const SLIDE_DECK = [
  { page: 1, title: 'Strategy Overview', subtitle: 'Designing for the shortest path to target in high-cadence field sales', topic: 'Executive Summary' },
  { page: 2, title: 'Field vs Consumer UX', subtitle: 'Why consumer e-commerce patterns fail retail route sales reps', topic: 'User Research' },
  { page: 3, title: '3 Outcomes & 6 Principles', subtitle: 'The foundational UX framework that anchors every screen decision', topic: 'Design Principles' },
  { page: 4, title: 'Single-Screen Architecture', subtitle: 'The revamped order screen fitting the full sales conversation', topic: 'App Architecture' },
  { page: 5, title: 'Persistent Header & KPIs', subtitle: 'Retailer context, cycle pacing, and three color-coded live KPIs', topic: 'Context Ribbon' },
  { page: 6, title: 'Accept SOQ Engine', subtitle: 'Turning basket-building into reviewing AI recommendations', topic: 'Prescriptive Ordering' },
  { page: 7, title: 'Commercial Priority Sort', subtitle: 'Top of screen is always the highest-value commercial conversation', topic: 'Priority Engine' },
  { page: 8, title: 'Resolved Net Trade Schemes', subtitle: 'Calculated by the system as one net landed rate—no slab tables', topic: 'Pricing Logic' },
  { page: 9, title: '2-Click SKU Discovery', subtitle: 'Any requested product at most 2 clicks away via lenses and search', topic: 'Fast Navigation' },
  { page: 10, title: '1-Tap Product Pitch Sheet', subtitle: 'Equipping the rep to pitch New Products, then returning to punching', topic: 'Rep Enablement' },
  { page: 11, title: 'Interaction Nuances', subtitle: 'Small UI details saving seconds per line that compound across 50+ calls', topic: 'Field Ergonomics' },
  { page: 12, title: 'Pilot Metrics & Baselines', subtitle: 'Measuring rep productivity and commercial lift in pilot rollout', topic: 'Measurement' },
  { page: 13, title: 'Strategic Engagement', subtitle: 'Partnering with Intellimark AI to customize for your route-to-market', topic: 'Next Steps' },
];

// Video walkthrough chapter timestamps
const VIDEO_CHAPTERS = [
  { time: '00:00', title: 'The Field Reality: 50 Stores in 6 Hours', desc: 'Why field reps need transactional speed, not catalog browsing.' },
  { time: '01:45', title: 'Why Consumer E-Commerce Fails in Kiranas', desc: 'The hidden cognitive friction of multi-step carts on street corners.' },
  { time: '03:20', title: '3 Outcomes & 6 Guiding UX Principles', desc: 'Translating revenue targets into ergonomic interface rules.' },
  { time: '05:15', title: 'Single-Screen Architecture Teardown', desc: 'Fitting context, live pacing, catalog, and cart into one unified scroll.' },
  { time: '07:30', title: 'One-Tap "Accept SOQ" Engine', desc: 'How pre-filled baskets cut order punching from 3m 40s to 45s.' },
  { time: '09:10', title: 'Automated Net Trade Schemes', desc: 'Ending calculator disputes with transparent post-scheme pricing.' },
  { time: '11:00', title: 'Pilot Rollout & ROI Measurement', desc: 'Establishing baselines for rep speed, focus lines, and strike rates.' },
];

const UIUXRevampStrategy = () => {
  const title = "Field-Sales Order-Taking UI/UX Revamp Strategy | Intellimark AI";
  const description = "Case study and 13-slide strategy presentation by Rahul Ranjan Srivastava on redesigning enterprise FMCG field sales order-taking for maximum speed and commercial velocity.";

  const youtubeVideoId = 'mF5nJ7PpQ64';
  const pdfUrl = '/UIUX_Revamp_Strategy.pdf';

  // Presentation Player State
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(13);
  const [slideImages, setSlideImages] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const fullscreenStageRef = useRef<HTMLDivElement | null>(null);
  const filmstripRef = useRef<HTMLDivElement | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isPointerDown, setIsPointerDown] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Load PDF document
  useEffect(() => {
    let isMounted = true;
    const loadPdf = async () => {
      setIsLoading(true);
      setPdfError(null);
      try {
        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const pdf = await loadingTask.promise;
        if (!isMounted) return;
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
      } catch (err: unknown) {
        console.error('Error loading PDF:', err);
        if (isMounted) {
          setPdfError((err as Error)?.message || 'Failed to load presentation PDF');
          setIsLoading(false);
        }
      }
    };
    loadPdf();
    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  // Pre-render slides as high-definition 16:9 images for butter-smooth 60fps GPU transitions
  useEffect(() => {
    if (!pdfDoc || totalPages === 0) return;
    let isCancelled = false;

    const renderAllSlides = async () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const scale = 1.6 * pixelRatio;

      // Render slide 1 immediately
      try {
        const page1 = await pdfDoc.getPage(1);
        const viewport1 = page1.getViewport({ scale });
        const canvas1 = document.createElement('canvas');
        canvas1.width = viewport1.width;
        canvas1.height = viewport1.height;
        const ctx1 = canvas1.getContext('2d');
        if (ctx1) {
          await page1.render({ canvasContext: ctx1, viewport: viewport1, canvas: canvas1 }).promise;
          const dataUrl1 = canvas1.toDataURL('image/png');
          if (!isCancelled) {
            setSlideImages(prev => ({ ...prev, 1: dataUrl1 }));
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error('Error rendering initial slide:', err);
      }

      // Render remaining slides in background
      for (let i = 2; i <= totalPages; i++) {
        if (isCancelled) break;
        try {
          const page = await pdfDoc.getPage(i);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            await page.render({ canvasContext: ctx, viewport, canvas }).promise;
            const dataUrl = canvas.toDataURL('image/png');
            if (!isCancelled) {
              setSlideImages(prev => ({ ...prev, [i]: dataUrl }));
            }
          }
        } catch (err) {
          console.error(`Error rendering slide ${i}:`, err);
        }
      }
    };

    renderAllSlides();
    return () => {
      isCancelled = true;
    };
  }, [pdfDoc, totalPages]);

  // Jump to specific slide
  const goToSlide = useCallback((pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  }, [totalPages]);

  // Active non-passive mouse wheel navigation: smoothly flips slides without jumping the outer webpage
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 18) return;

      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 340) return;

      if (delta > 0) {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
        lastWheelTime = now;
      } else if (delta < 0) {
        setCurrentPage(prev => Math.max(prev - 1, 1));
        lastWheelTime = now;
      }
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [totalPages]);

  // Wheel navigation inside fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;
    const stage = fullscreenStageRef.current;
    if (!stage) return;

    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 18) return;
      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime < 340) return;

      if (delta > 0) {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
        lastWheelTime = now;
      } else if (delta < 0) {
        setCurrentPage(prev => Math.max(prev - 1, 1));
        lastWheelTime = now;
      }
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [isFullscreen, totalPages]);

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent) => {
    setTouchStartX(e.clientX);
    setIsPointerDown(true);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown || touchStartX === null) return;
    const diff = e.clientX - touchStartX;
    if (diff < -45 && currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else if (diff > 45 && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
    setIsPointerDown(false);
    setTouchStartX(null);
  };

  // Auto-scroll active thumbnail in bottom filmstrip
  useEffect(() => {
    if (filmstripRef.current) {
      const activeBtn = filmstripRef.current.querySelector(`[data-page="${currentPage}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToSlide(currentPage + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToSlide(currentPage - 1);
      } else if (e.key === 'Home') {
        goToSlide(1);
      } else if (e.key === 'End') {
        goToSlide(totalPages);
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isFullscreen, goToSlide]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rahul@intellimark.ai');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const currentSlide = SLIDE_DECK.find(s => s.page === currentPage) || {
    page: currentPage,
    title: `Slide ${currentPage}`,
    subtitle: 'Strategy Presentation',
    topic: 'Presentation'
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: id === 'deck-viewer' ? 'center' : 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-purple-600 selection:text-white antialiased">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="UI/UX revamp, field sales app, FMCG order taking, Suggested Order Quantity, SOQ, trade schemes, enterprise UX, Intellimark AI" />
      </Helmet>

      {/* Brand Purple Hero Section Below Navbar */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-950 text-white border-b border-purple-500/30 py-6 md:py-8">
        {/* Subtle geometric SVG background pattern (matching HomePage and site brand theme) */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Context, Presenter, Title, Metric Badges, Actions */}
            <div className="lg:col-span-7 space-y-5">
              {/* Metadata & Presenter line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-purple-200 font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30 backdrop-blur-md shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  New Strategy Release
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-md shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Presenter: Rahul Ranjan Srivastava • Intellimark AI
                </span>
                
                <span className="hidden sm:inline-flex text-white/40">•</span>
                <span className="hidden sm:inline-flex text-purple-200">13 Slides & 12-Min Masterclass</span>
              </div>

              {/* Main Title & Problem Statement */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Redesigning the Field-Sales Order-Taking Experience
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-purple-100/90 leading-relaxed font-normal">
                  Why consumer e-commerce UX fails in high-cadence FMCG retail, and how moving to a single-canvas, prescriptive order flow cuts punching time from <strong className="text-white font-bold underline decoration-amber-400 underline-offset-4">3.5 minutes down to 45 seconds</strong>.
                </p>
              </div>

              {/* 4 Interactive Impact Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                    <Zap className="w-3 h-3" /> Punch Speed
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">45s</div>
                  <div className="text-[10px] text-purple-200/80">down from 3m 40s</div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" /> Basket SOQ
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">1-Tap</div>
                  <div className="text-[10px] text-purple-200/80">prescriptive AI</div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-300 uppercase tracking-wider">
                    <TrendingUp className="w-3 h-3" /> Focus Lines
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">+24%</div>
                  <div className="text-[10px] text-purple-200/80">strike rate uplift</div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-purple-300 uppercase tracking-wider">
                    <Layers className="w-3 h-3" /> Scheme Net
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">100%</div>
                  <div className="text-[10px] text-purple-200/80">zero slab math</div>
                </div>
              </div>

              {/* Direct Jump Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSection('deck-viewer')}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-800 hover:bg-white/95 rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-purple-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <BookOpen className="w-4 h-4 text-purple-700" />
                  View 13-Slide Presentation
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>

                <button
                  onClick={() => scrollToSection('video-walkthrough')}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-current text-white" />
                  Watch Video Walkthrough
                </button>

                <a
                  href={pdfUrl}
                  download="Intellimark_UIUX_Revamp_Strategy.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 text-purple-200 hover:text-white bg-purple-900/40 hover:bg-purple-900/60 border border-white/10 rounded-xl text-xs font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Deck (PDF)
                </a>
              </div>
            </div>

            {/*
            Right Column: Interactive Deck Teaser / Quick Chapter Navigator
            <div className="lg:col-span-5">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-2xl space-y-3.5">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                      Presentation Quick Navigator
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-white/10 text-purple-100 border border-white/15">
                    13 Slides
                  </span>
                </div>

                <div 
                  onClick={() => scrollToSection('deck-viewer')}
                  className="group relative cursor-pointer aspect-video rounded-xl overflow-hidden bg-purple-950/80 border border-white/20 shadow-inner"
                >
                  {slideImages[1] ? (
                    <img
                      src={slideImages[1]}
                      alt="Presentation Slide 1 Preview"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-purple-800 to-indigo-900">
                      <BookOpen className="w-10 h-10 text-purple-300 mb-2" />
                      <div className="text-xs font-bold text-white">Slide 1: Strategy Overview</div>
                      <div className="text-[11px] text-purple-200">Designing for high-cadence field sales</div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-purple-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex flex-col items-center justify-center gap-2 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white text-purple-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 text-purple-700" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Launch Single-Frame Deck →
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90">
                    Slide 1: Executive Summary
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-purple-200 uppercase tracking-wider">
                    Direct Jump to Key Slides:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      onClick={() => { goToSlide(1); scrollToSection('deck-viewer'); }}
                      className="text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-300/40 text-purple-100 hover:text-white transition-all truncate"
                    >
                      <span className="font-mono text-purple-300 mr-1.5">01</span> Overview
                    </button>
                    <button
                      onClick={() => { goToSlide(4); scrollToSection('deck-viewer'); }}
                      className="text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-300/40 text-purple-100 hover:text-white transition-all truncate"
                    >
                      <span className="font-mono text-purple-300 mr-1.5">04</span> Single-Screen
                    </button>
                    <button
                      onClick={() => { goToSlide(6); scrollToSection('deck-viewer'); }}
                      className="text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-300/40 text-purple-100 hover:text-white transition-all truncate"
                    >
                      <span className="font-mono text-purple-300 mr-1.5">06</span> Accept SOQ
                    </button>
                    <button
                      onClick={() => { goToSlide(8); scrollToSection('deck-viewer'); }}
                      className="text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-300/40 text-purple-100 hover:text-white transition-all truncate"
                    >
                      <span className="font-mono text-purple-300 mr-1.5">08</span> Net Schemes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            */}

          </div>

        </div>
      </header>

      {/* The 13-Slide Presentation Showcase (Fully Visible in One Frame, Butter-Smooth GPU Scrolling) */}
      <section id="deck-viewer" className="py-6 sm:py-8 bg-gray-50/70 border-b border-gray-200 scroll-mt-14">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Deck Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 border border-purple-200 text-purple-700 font-bold font-mono text-xs flex items-center justify-center">
                {String(currentPage).padStart(2, '0')}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-gray-950">
                    The Strategy Presentation
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                    Slide {currentPage} of {totalPages}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {currentSlide.title} — {currentSlide.subtitle}
                </p>
              </div>
            </div>

            {/* Stage Controls */}
            <div className="flex items-center gap-2">
              <select
                value={currentPage}
                onChange={(e) => goToSlide(Number(e.target.value))}
                aria-label="Select slide"
                className="text-xs font-medium bg-white text-gray-700 border border-gray-300 rounded-lg px-2.5 py-1.5 shadow-2xs hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {SLIDE_DECK.map(s => (
                  <option key={s.page} value={s.page}>
                    {s.page}. {s.title}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setIsFullscreen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold border border-gray-300 transition-colors shadow-2xs"
                title="Fullscreen presentation mode"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Presentation Card (Height-Budgeted for Single-Screen Frame) */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
            
            {/* The 16:9 Slide Stage */}
            <div
              ref={stageRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              className="relative bg-gray-950/[0.02] flex items-center justify-center p-2 sm:p-3 select-none overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* Floating Glider (Prev) */}
              <button
                onClick={(e) => { e.stopPropagation(); goToSlide(currentPage - 1); }}
                disabled={currentPage === 1}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-purple-600 hover:text-white text-gray-800 flex items-center justify-center shadow-lg border border-gray-200 disabled:opacity-0 disabled:pointer-events-none transition-all hover:scale-105 active:scale-95 group backdrop-blur-sm"
                title="Previous Slide (← or Wheel Up)"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Floating Glider (Next) */}
              <button
                onClick={(e) => { e.stopPropagation(); goToSlide(currentPage + 1); }}
                disabled={currentPage === totalPages}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-purple-600 hover:text-white text-gray-800 flex items-center justify-center shadow-lg border border-gray-200 disabled:opacity-0 disabled:pointer-events-none transition-all hover:scale-105 active:scale-95 group backdrop-blur-sm"
                title="Next Slide (→ or Wheel Down)"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* 16:9 Aspect Frame Container (Guarantees entire slide is visible without vertical scroll) */}
              <div className="w-full aspect-[16/9] h-[min(52vh,480px)] min-h-[240px] max-w-[calc(min(52vh,480px)*16/9)] mx-auto overflow-hidden rounded-xl bg-white shadow-2xs border border-gray-200/90 relative">
                
                {isLoading && !slideImages[1] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 text-purple-700">
                    <div className="w-8 h-8 border-3 border-purple-600 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-medium text-gray-500">Loading strategy slides...</span>
                  </div>
                ) : pdfError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-gray-500">
                    <FileText className="w-8 h-8 text-red-500 mb-2" />
                    <p className="text-xs text-gray-600 mb-3">{pdfError}</p>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-medium"
                    >
                      Open PDF Directly
                    </a>
                  </div>
                ) : (
                  /* GPU-Composited 60fps Transform Track */
                  <div
                    className="w-full h-full flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                    style={{ transform: `translate3d(-${(currentPage - 1) * 100}%, 0, 0)` }}
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <div
                        key={pageNum}
                        className="w-full h-full flex-shrink-0 flex items-center justify-center bg-white"
                      >
                        {slideImages[pageNum] ? (
                          <img
                            src={slideImages[pageNum]}
                            alt={`Slide ${pageNum}: ${SLIDE_DECK[pageNum - 1]?.title || ''}`}
                            className="w-full h-full object-contain pointer-events-none select-none block"
                            draggable={false}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-purple-600">
                            <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-medium text-gray-500">Loading slide {pageNum}...</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Compact Player Toolbar */}
            <div className="px-4 py-2.5 bg-gray-50/90 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToSlide(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors border border-gray-300 shadow-2xs flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Prev
                </button>

                {/* 13 Slide Dots */}
                <div className="flex items-center gap-1.5 px-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => goToSlide(pageNum)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentPage === pageNum
                          ? 'w-5 bg-purple-600'
                          : 'w-2 bg-gray-300 hover:bg-purple-300'
                      }`}
                      title={`Go to Slide ${pageNum}: ${SLIDE_DECK[pageNum - 1]?.title || ''}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goToSlide(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors border border-gray-300 shadow-2xs flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Progress & Shortcut Hints */}
              <div className="flex items-center gap-3 text-gray-500">
                <span className="font-mono text-gray-600 font-medium">
                  {currentPage} of {totalPages}
                </span>
                <span className="hidden md:inline text-gray-400">|</span>
                <span className="hidden md:inline text-[11px] text-gray-500">
                  Navigate with mouse wheel, swipe, or <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 text-gray-700 font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 text-gray-700 font-mono text-[10px]">→</kbd>
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {totalPages > 1 && (
              <div className="px-3 py-2 bg-white border-t border-gray-150">
                <div
                  ref={filmstripRef}
                  className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-thin scrollbar-thumb-purple-300"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      data-page={pageNum}
                      onClick={() => goToSlide(pageNum)}
                      className={`relative flex-shrink-0 h-11 w-[74px] aspect-[16/9] rounded-md overflow-hidden border-2 transition-all bg-gray-100 ${
                        currentPage === pageNum
                          ? 'border-purple-600 ring-2 ring-purple-600/30 scale-105 z-10'
                          : 'border-gray-200 hover:border-gray-400 opacity-65 hover:opacity-100'
                      }`}
                      title={`Slide ${pageNum}: ${SLIDE_DECK[pageNum - 1]?.title || ''}`}
                    >
                      {slideImages[pageNum] ? (
                        <img
                          src={slideImages[pageNum]}
                          alt={`Thumb ${pageNum}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-[9px] font-mono">
                          {pageNum}
                        </div>
                      )}
                      <div className="absolute bottom-0 right-0 px-1 py-0.2 rounded-tl bg-gray-950/80 text-[8px] font-mono text-white">
                        {pageNum}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Fullscreen Presentation Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col select-none"
          >
            <div className="p-3 sm:p-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold truncate">
                  {currentSlide.title}
                </span>
                <span className="text-xs text-purple-400 font-mono font-bold">
                  Slide {currentPage} / {totalPages}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToSlide(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors"
                  title="Previous Slide (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goToSlide(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors"
                  title="Next Slide (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-1.5 sm:p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors border border-red-500/30 ml-2"
                  title="Exit Presentation Mode (Esc)"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={fullscreenStageRef}
              className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden relative"
            >
              <button
                onClick={() => goToSlide(currentPage - 1)}
                disabled={currentPage === 1}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/90 hover:bg-purple-600 text-white flex items-center justify-center shadow-2xl border border-slate-700 disabled:opacity-0 disabled:pointer-events-none transition-all hover:scale-110 active:scale-95"
                title="Previous Slide (←)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => goToSlide(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/90 hover:bg-purple-600 text-white flex items-center justify-center shadow-2xl border border-slate-700 disabled:opacity-0 disabled:pointer-events-none transition-all hover:scale-110 active:scale-95"
                title="Next Slide (→)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="w-full max-w-6xl aspect-[16/9] max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 bg-black flex items-center justify-center relative">
                <div
                  className="w-full h-full flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{ transform: `translate3d(-${(currentPage - 1) * 100}%, 0, 0)` }}
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <div
                      key={pageNum}
                      className="w-full h-full flex-shrink-0 flex items-center justify-center bg-black"
                    >
                      {slideImages[pageNum] ? (
                        <img
                          src={slideImages[pageNum]}
                          alt={`Slide ${pageNum}`}
                          className="w-full h-full object-contain block select-none pointer-events-none"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Navigate: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">←</kbd> Prev</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">→</kbd> Next</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Wheel</kbd> Scroll</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Esc</kbd> Exit</span>
              </div>
              <div className="text-purple-300 font-medium">
                Intellimark AI Field-Sales Revamp Strategy
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*
      Case Study Section 1: The Field Reality (Natural Editorial Format)
      <section className="py-16 md:py-20 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Field Research & User Reality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Why Consumer E-Commerce Patterns Collapse in Wholesale Kirana Stores
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Most enterprise field sales apps fail because product teams borrow patterns from Amazon, Swiggy, or consumer e-commerce. But the reality of a field sales representative is fundamentally different from a relaxed consumer shopping on their sofa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                The Consumer App Paradigm
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Browsing, Exploration & Large Imagery
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Consumer apps optimize for leisurely session duration, algorithmic discovery banners, and multi-step cart drawers. Shoppers browse 20 minutes to buy 3 items in a quiet living room.
              </p>
              <div className="text-xs text-red-600 font-medium pt-2 border-t border-gray-200">
                Fails in wholesale stores: High visual noise, excessive taps, and severe battery drain on low-tier phones.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-purple-50/50 border border-purple-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
                The Field Rep Paradigm
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                4-Minute Audits, Ambient Chaos & 50 Daily Calls
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A territory rep visits 50 to 60 stores a day. The storekeeper is multitasking with 3 customers and wholesale deliveries. The rep has at most 3 to 4 minutes to conduct stock audit, pitch focus SKUs, and punch the order.
              </p>
              <div className="text-xs text-emerald-700 font-semibold pt-2 border-t border-purple-200">
                Requires: High data density, instant re-order presets, and zero navigational drill-downs.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gray-900 text-white space-y-2">
            <div className="text-xs font-mono text-purple-300 font-semibold uppercase tracking-wider">
              The Guiding Heuristic
            </div>
            <p className="text-base sm:text-lg font-medium leading-snug">
              "Every extra second per order line multiplied by 15 lines across 50 stores equals 12.5 wasted hours every month per rep. Seconds saved compound into productive calls gained."
            </p>
          </div>

        </div>
      </section>
      */}

      {/* Video Masterclass Section */}
      <section id="video-walkthrough" className="py-16 md:py-20 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
              <Youtube className="w-4 h-4 text-red-600" />
              Video Masterclass
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              12-Minute Design Teardown & Interaction Walkthrough
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Rahul Ranjan Srivastava walks through the end-to-end design thinking, commercial trade-offs, and field testing learnings across the 13 presentation slides.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Video Player */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
                  title="Field-Sales UI/UX Revamp Strategy Walkthrough"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Presenter: Rahul Ranjan Srivastava • Intellimark AI</span>
                <a
                  href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 font-semibold inline-flex items-center gap-1"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Video Chapters Rail */}
            <div className="lg:col-span-4 bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3">
              <div className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-gray-200">
                Timestamped Chapters
              </div>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-300">
                {VIDEO_CHAPTERS.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-gray-200 hover:border-purple-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-purple-700">
                        {c.time}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">
                        Part {idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 leading-snug">
                      {c.title}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendation System Video */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-950">
                Please see this, our recommendation system
              </h3>
            </div>

            <div className="max-w-4xl">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/vnEssZQBoOw?rel=0"
                  title="Our Recommendation System"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>Intellimark AI • Recommendation System</span>
                <a
                  href="https://www.youtube.com/watch?v=vnEssZQBoOw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 font-semibold inline-flex items-center gap-1"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The 6 Guiding UX Principles (Clean Editorial Guide) */}
      <section className="py-16 md:py-20 border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Field Ergonomics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              The 6 Principles of the Field Sales Interface
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Every interaction was governed by six foundational rules to keep the app lightning fast under harsh street conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                title: 'Context Before Content',
                body: 'Store name, beat sequence, and monthly visit count (e.g. "Visit 3 of 4") orient the rep in 500ms before order punching begins.'
              },
              {
                num: '02',
                title: 'Color Carries Status',
                body: 'Achieved metrics glow in emerald green; targets sit in clean neutral text. Reps read status via peripheral vision without squinting.'
              },
              {
                num: '03',
                title: 'Scoreboard vs Workspace',
                body: 'A compact sticky header grounds executive status while preserving 85%+ of screen height for rapid line entry.'
              },
              {
                num: '04',
                title: 'Three, Not Ten',
                body: 'Live KPIs are capped strictly at 3 to prevent cognitive overload during chaotic 4-minute retail store conversations.'
              },
              {
                num: '05',
                title: 'Editing Over Building',
                body: 'One-tap Accept SOQ turns order-taking into reviewing AI recommendations rather than keying every SKU from memory.'
              },
              {
                num: '06',
                title: 'Commercial Priority Sort',
                body: 'The list hierarchy mirrors revenue targets: high-margin focus SKUs and active scheme deals always lead the conversation.'
              }
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2"
              >
                <div className="font-mono text-xs font-bold text-purple-700">
                  Principle {p.num}
                </div>
                <h3 className="text-base font-bold text-gray-950">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pilot ROI Framework */}
      <section className="py-16 md:py-20 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Implementation & Measurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Measuring Pilot Outcomes in Route-to-Market
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Prior to scaling across territory routes, we recommend a 30-day pilot measuring both rep ergonomics and commercial uplift.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Rep Productivity
              </div>
              <div className="text-3xl font-extrabold text-purple-700">
                45 Seconds
              </div>
              <div className="text-xs font-semibold text-gray-900">
                Average order punch time (down from 3m 40s)
              </div>
              <p className="text-xs text-gray-600 pt-1 leading-normal">
                Yields 50+ extra minutes per rep each day, enabling 4 to 6 more productive store visits.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Commercial Focus
              </div>
              <div className="text-3xl font-extrabold text-emerald-700">
                +24% Lift
              </div>
              <div className="text-xs font-semibold text-gray-900">
                Strike rate on priority focus lines
              </div>
              <p className="text-xs text-gray-600 pt-1 leading-normal">
                Commercial priority sorting ensures enterprise target lines are pitched first in every store.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Promotion Uptake
              </div>
              <div className="text-3xl font-extrabold text-amber-700">
                +32% Lift
              </div>
              <div className="text-xs font-semibold text-gray-900">
                Trade scheme adoption rate
              </div>
              <p className="text-xs text-gray-600 pt-1 leading-normal">
                Displaying net landed rates and milestone progress bars eliminates mental math disputes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Billing Accuracy
              </div>
              <div className="text-3xl font-extrabold text-blue-700">
                99.8%
              </div>
              <div className="text-xs font-semibold text-gray-900">
                Depot billing compliance
              </div>
              <p className="text-xs text-gray-600 pt-1 leading-normal">
                Exact system net calculation removes credit-note re-issues and delivery disputes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Author Consultation & Next Steps */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
              Slide 13 • Next Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Explore This for Your Route-to-Market?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you are evaluating a mobile revamp for 500 reps or looking to benchmark your current store visit durations, we are happy to share field methodologies and SOQ algorithms.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-gray-800/80 border border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-gray-400">Strategy Contact:</div>
              <div className="text-base font-mono font-bold text-white">
                rahul@intellimark.ai
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Rahul Ranjan Srivastava • Strategy & Design, Intellimark AI
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs font-medium transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:rahul@intellimark.ai?subject=Inquiry%20regarding%20UI/UX%20Revamp%20Strategy"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span>Related Intellimark Platforms:</span>
            <Link to="/Forecasting" className="text-purple-400 hover:text-white underline underline-offset-4">
              Demand Forecasting (Teresa)
            </Link>
            <span>•</span>
            <Link to="/Recommendation" className="text-purple-400 hover:text-white underline underline-offset-4">
              Assortment Recommendation
            </Link>
            <span>•</span>
            <Link to="/RevenueGrowthManagement" className="text-purple-400 hover:text-white underline underline-offset-4">
              Revenue Growth Management
            </Link>
          </div>

        </div>
      </footer>
    </main>
  );
};

export default UIUXRevampStrategy;