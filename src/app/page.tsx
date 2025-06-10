"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import {
  Play,
  Upload,
  Scissors,
  Share2,
  Clock,
  Users,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Clip Detection",
      description:
        "Our advanced AI identifies viral moments, hooks, and peak engagement points automatically",
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Smart Auto-Editing",
      description:
        "Perfect cuts, smooth transitions, and optimal pacing for maximum viewer retention",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Speaker-Aware Subtitles",
      description:
        "Dynamic subtitles that recognize different speakers with customizable styling",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Multi-Platform Ready",
      description:
        "Optimized for YouTube Shorts, Instagram Reels, TikTok, and more",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎙️</span>
            <span className="text-xl font-bold">AI Podcast Clipper</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white">How it Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/login">
              <Button className = "bg-white text-black">
                Login
              </Button>
            </a>
            <a href="/signup">
              <Button className="bg-white text-black">Sign Up</Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 px-4 py-6">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a href="/login">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Login
                  </Button>
                </a>
                <a href="/signup">
                  <Button className="w-full bg-white text-black">Sign Up</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-transparent via-white/2 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative px-4 pt-12 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">AI-Powered Viral Content</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Turn Podcasts Into<br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Viral Gold
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Upload your podcast and get <span className="text-white font-semibold">5 viral-ready clips</span> in minutes. 
              AI-edited, subtitled, and optimized for maximum engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="/signup">
                <Button size="lg" className="bg-white text-black font-semibold px-8 py-4 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-200">
                  Start Creating Clips
                  <ArrowRight className="w-5 h-5 ml-2 text-black" />
                </Button>
              </a>
             <Button size="lg" className="bg-white text-black font-semibold px-8 py-4 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50M+</div>
                <div className="text-gray-400">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10 Min</div>
                <div className="text-gray-400">Average Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Viral Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="relative px-4 py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">From Podcast to Viral in 3 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Upload className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Upload</h3>
              <p className="text-gray-300">Drag and drop your podcast file. We support MP3, MP4, WAV, and more.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-800 text-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. AI Magic</h3>
              <p className="text-gray-300">AI analyzes your content, finds viral moments, and clips them with subtitles.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20">
                <Share2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Go Viral</h3>
              <p className="text-gray-300">Download clips and post them to YouTube Shorts, Instagram Reels, and TikTok.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-200 transition-colors">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
     

      {/* CTA */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Viral?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of creators generating millions of views.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/signup">
              <Button size="lg" className="bg-white text-black font-semibold px-12 py-4 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-200">
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2 text-black" />
              </Button>
            </a>
            <a href="/login">
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm">
                Login
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • 5 free clips • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">🎙️ AI Podcast Clipper</div>
          <p className="text-gray-400">Transform your podcasts into viral content with AI</p>
        </div>
      </footer>
    </div>
  );
}
