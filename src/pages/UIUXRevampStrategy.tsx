import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Youtube, ExternalLink, Eye, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const UIUXRevampStrategy = () => {
  const title = "UI/UX Revamp Strategy - Intellimark AI";
  const description = "Explore our comprehensive UI/UX revamp strategy with detailed PDF documentation and video walkthrough.";

  // YouTube video ID - replace with actual video ID
  const youtubeVideoId = 'mF5nJ7PpQ64';
  // PDF path - place PDF in public folder or use external URL
  const pdfUrl = '/UIUX_Revamp_Strategy.pdf';

  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
        setIsLoading(false);
      } catch (err: any) {
        console.error('Error loading PDF:', err);
        if (isMounted) {
          setPdfError(err?.message || 'Failed to load PDF');
          setIsLoading(false);
        }
      }
    };
    loadPdf();
    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  // Render current page to main canvas
  useEffect(() => {
    if (!pdfDoc) return;
    let renderTask: any = null;

    const render = async () => {
      try {
        const page = await pdfDoc.getPage(currentPage);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const viewport = page.getViewport({ scale: 1.2 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        renderTask = page.render({ canvasContext: ctx, viewport });
        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error('Error rendering page:', err);
        }
      }
    };

    render();
    return () => {
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, currentPage]);

  // Generate thumbnails for all pages and header
  useEffect(() => {
    if (!pdfDoc || totalPages === 0) return;
    let isCancelled = false;

    const generateThumbnails = async () => {
      const thumbs: Record<number, string> = {};
      for (let i = 1; i <= totalPages; i++) {
        if (isCancelled) break;
        try {
          const page = await pdfDoc.getPage(i);
          const viewport = page.getViewport({ scale: 0.3 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            await page.render({ canvasContext: ctx, viewport }).promise;
            const dataUrl = canvas.toDataURL('image/png');
            thumbs[i] = dataUrl;
            if (i === 1) {
              setThumbnail(dataUrl);
            }
          }
        } catch (err) {
          console.error(`Error generating thumbnail for page ${i}:`, err);
        }
      }
      if (!isCancelled) {
        setThumbnails(thumbs);
      }
    };

    generateThumbnails();
    return () => {
      isCancelled = true;
    };
  }, [pdfDoc, totalPages]);

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Strategy Document
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              UI/UX Revamp Strategy
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Comprehensive strategy document and video walkthrough for transforming user experience across all touchpoints.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('pdf-viewer')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl"
              >
                <FileText className="w-5 h-5 mr-2" />
                View PDF
              </button>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Walkthrough
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch the detailed walkthrough of the UI/UX revamp strategy implementation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="UI/UX Revamp Strategy Walkthrough"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section with Thumbnail */}
      <section id="pdf-viewer" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategy Document
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              View the complete UI/UX Revamp Strategy PDF document. Use navigation to browse pages.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {thumbnail ? (
                      <img src={thumbnail} alt="PDF Thumbnail" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <FileText className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">UIUX_Revamp_Strategy.pdf</h3>
                    <p className="text-sm text-gray-500">{totalPages} pages</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in New Tab
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
              
              {/* Thumbnail strip (if multi-page) */}
              {totalPages > 1 && !isLoading && (
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`flex-shrink-0 w-20 h-28 rounded-lg border-2 transition-all ${
                          currentPage === pageNum
                            ? 'border-purple-600 ring-2 ring-purple-600/20'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: '#f3f4f6' }}
                      >
                        {thumbnails[pageNum] ? (
                          <img 
                            src={thumbnails[pageNum]} 
                            alt={`Page ${pageNum}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <FileText className="w-6 h-6" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Main PDF Viewer */}
              <div className="relative min-h-[600px] bg-gray-100 flex items-center justify-center p-4">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
                    <p>Loading PDF...</p>
                  </div>
                ) : pdfDoc ? (
                  <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <canvas 
                      ref={canvasRef} 
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Unable to load PDF</p>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline mt-2 inline-block">
                      Open PDF directly
                    </a>
                  </div>
                )}
              </div>
              
              {/* Page Navigation */}
              {totalPages > 1 && !isLoading && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="text-gray-700 font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Focus Areas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Youtube, title: "User Research", desc: "Deep dive into user behaviors and pain points" },
              { icon: FileText, title: "Design System", desc: "Unified component library and design tokens" },
              { icon: ArrowRight, title: "Implementation", desc: "Phased rollout with measurable outcomes" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UIUXRevampStrategy;