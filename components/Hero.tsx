export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
  {/* Video Background */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src="https://picsum.photos/1920/1080" 
      alt="Creative studio workspace" 
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70"></div>
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
        <span className="text-sm font-medium text-white">Award-Winning Creative Studio</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        Data-Driven Creativity<br />
        That Delivers Results
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
        Multidisciplinary team of creative experts crafting award-winning campaigns across industries with measurable impact
      </p>

      {/* Key Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-sm text-slate-200">Industry Awards</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">15+</div>
          <div className="text-sm text-slate-200">Creative Disciplines</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">300%</div>
          <div className="text-sm text-slate-200">Avg. ROI Increase</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-colors">
          View Our Portfolio
        </button>
        <button className="px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
          Start Your Project
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center gap-2 text-white/60">
      <span className="text-sm font-medium">Scroll to explore</span>
      <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
  );
}