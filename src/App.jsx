import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Share2, 
  Target, 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Menu,
  X,
  Sparkles,
  Search,
  MessageSquare,
  Globe,
  Award,
  MousePointer2,
  Phone,
  FileText,
  Quote,
  TrendingUp,
  Layout,
  Layers,
  Users
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight bg-black text-white px-3 py-1 rounded-lg">
          A<span className="text-orange-400">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Services', 'Work', 'Tools', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
              {item}
            </a>
          ))}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-orange-500 transition-colors">
            CV <FileText className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-charcoal px-6 py-3 text-sm">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="px-6 py-2 border border-black/10 rounded-full font-bold text-sm mb-10 bg-white shadow-sm inline-flex items-center gap-2">
        Hello! 👋
        <Sparkles className="text-orange-400 w-4 h-4" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
          I'm <span className="text-[#FF8A00]">Afinand</span>,<br />
          <span className="text-black/90 text-4xl md:text-6xl block mt-2">Digital Marketing Specialist</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Growth Marketer & Performance Ads Specialist. I help brands grow from 0 to 1M+ reach using data-driven performance and creative strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a href="#work" className="btn-primary flex items-center gap-3 px-10 py-5 text-lg">
            View My Work <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="btn-charcoal px-10 py-5 text-lg">Let's Talk</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-black/5 pt-12">
            <div className="text-center">
                <p className="text-4xl font-black text-black">1+ Year</p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">Experience</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-black">500+</p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">Campaigns Optimized</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-black">3x</p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">Avg. ROI Boost</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-black">1M+</p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">Managed Reach</p>
            </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
    const partners = ["qilinlab", "calenq", "eduley", "heyllo ai", "buy4ever", "washmecare", "socialnetwork", "happyycloud"];
    return (
        <section className="py-12 bg-white border-b border-black/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-[10px] font-bold text-black/30 uppercase tracking-[0.3em] mb-10">Trusted By Brands & Agencies</p>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                    {partners.map((partner) => (
                        <span key={partner} className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">{partner}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <section id="about" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 italic underline decoration-orange-400">My Story<span className="text-orange-500">.</span></h2>
            <div className="space-y-8 text-black/80 text-xl md:text-2xl font-medium leading-tight tracking-tight">
                <p>
                    I am a Growth Marketer obsessed with the intersection of data-driven psychology and creative performance. My journey isn't just about clicks—it's about building scalable engines that turn brand vision into market legacy.
                </p>
                <p>
                    Over the past year, I've mastered the art of managing complex growth funnels for high-impact brands. I bridge the technical gap between deep SEO/PPC and high-end creative strategy.
                </p>
                <p className="font-black text-black text-3xl">
                    I don't just run ads; I architect results.
                </p>
            </div>
            <div className="mt-16">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-charcoal inline-flex items-center gap-4 px-10 py-5">
                    Download My CV <FileText className="w-6 h-6" />
                </a>
            </div>
        </div>
    </section>
);

const Services = () => {
    const services = [
        { title: "Social Media Marketing", desc: "Building thumb-stopping content and community strategies that drive viral engagement.", icon: Share2 },
        { title: "SEO Optimization", desc: "Technical & on-page expertise to dominate search rankings and capture organic intent.", icon: Search },
        { title: "Paid Ads (PPC)", desc: "Hyper-targeted Meta & Google Ads designed to lower CAC and maximize conversion ROI.", icon: Target },
        { title: "Content Marketing", desc: "Story-led content clusters that build authority and trust for long-term growth.", icon: MessageSquare },
        { title: "Email Marketing", desc: "Automated retention funnels that turn one-time buyers into lifetime brand advocates.", icon: Mail },
        { title: "Branding & Strategy", desc: "Full-scale brand identities and market positioning for new-age startups.", icon: Layers },
    ];

    return (
        <section id="services" className="section-padding bg-[#FAFAFA]">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-black mb-6">Expert Services<span className="text-orange-500">.</span></h2>
                <p className="text-black/40 font-bold uppercase tracking-widest">Focused on Scalable Results</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[40px] border border-black/5 hover:border-orange-200 transition-all shadow-sm group">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-3 mb-8 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                        <p className="text-black/50 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};



const ProfessionalSkills = () => {
    const categories = [
        {
            title: "Performance Marketing",
            skills: ["Meta Ads (FB & IG)", "Google Ads", "YouTube Ads", "LinkedIn Ads", "Twitter (X) Ads", "CBO & Budget Strategy", "Retargeting Funnels"]
        },
        {
            title: "Search & Growth",
            skills: ["Technical SEO", "On-Page/Off-Page SEO", "E-commerce SEO", "CRO & A/B Testing", "Landing Page Optm.", "Heatmap Analysis"]
        },
        {
            title: "Content & Social",
            skills: ["Content Strategy", "Conversion Copywriting", "Viral Content Strategy", "Community Building", "Email Automation", "Retention Funnels"]
        },
        {
            title: "Automation & Data",
            skills: ["Lead Automation", "CRM Workflow Setup", "GA4 Reporting", "KPI Monitoring", "Dashboard Creation", "Visual Storytelling"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-[#FAFAFA]">
            <div className="mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-6 italic underline decoration-orange-400">Professional Skills<span className="text-orange-500">.</span></h2>
                <p className="text-black/40 font-bold uppercase tracking-widest">Mastery Across the Funnel</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((cat, i) => (
                    <div key={i} className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm hover:border-orange-200 transition-all">
                        <h3 className="text-xl font-black mb-8 text-black uppercase tracking-tighter">{cat.title}</h3>
                        <ul className="space-y-4">
                            {cat.skills.map((skill, j) => (
                                <li key={j} className="text-sm font-bold text-black/60 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Toolkit = () => {
    const tools = [
        { name: "Google Analytics", url: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
        { name: "Google Ads", url: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" },
        { name: "Meta Business", url: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
        { name: "SEMrush", url: "https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg" },
        { name: "Ahrefs", url: "https://www.vectorlogo.zone/logos/ahrefs/ahrefs-icon.svg" },
        { name: "Zapier", url: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
        { name: "HubSpot", url: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
        { name: "Figma", url: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ];

    return (
        <section id="tools" className="section-padding bg-white">
            <div className="mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-6 italic underline decoration-orange-400">Digital Toolkit<span className="text-orange-500">.</span></h2>
                <p className="text-black/40 font-bold uppercase tracking-widest">Industry Standard Infrastructure</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center max-w-7xl mx-auto">
                {tools.map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center p-5 border border-black/5 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/10 transition-all duration-500">
                            <img src={tool.url} alt={tool.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em]">{tool.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Achievements = () => (
    <section className="section-padding bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,0,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-24 italic text-center">Results Dashboard<span className="text-orange-500">.</span></h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                    <p className="text-6xl font-black text-orange-400 mb-4">$50K+</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/50">Managed Ad Spend</p>
                </div>
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                    <p className="text-6xl font-black text-orange-400 mb-4">100K+</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/50">Leads Generated</p>
                </div>
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                    <p className="text-6xl font-black text-orange-400 mb-4">500+</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/50">Campaigns Optimized</p>
                </div>
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                    <p className="text-6xl font-black text-orange-400 mb-4">3x</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/50">Average ROI Boost</p>
                </div>
            </div>

            <div className="bg-orange-500 p-12 md:p-20 rounded-[60px] text-black">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <Linkedin className="w-10 h-10" />
                            <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1">LinkedIn Ads Specialist</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">Dominating B2B Lead Gen & Conversion.</h3>
                    </div>
                    <div className="space-y-6">
                        <p className="text-2xl font-bold leading-relaxed italic">
                            "Mainly I work in LinkedIn Ads. I've spent 10 to 20 Lakhs, generating 100+ high-quality requests and converting 10 to 15 key clients per campaign."
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-black text-white rounded-full font-black text-sm uppercase">High Quality Requests</div>
                            <div className="px-6 py-3 bg-white text-black rounded-full font-black text-sm uppercase">15% Conversion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);



const Certifications = () => {
    const list = [
        { 
            name: "Google Ads Certification", 
            org: "Google", 
            logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
            desc: "Covers: Search, Display, Video Ads. Proves ability to manage complex paid campaigns for global reach."
        },
        { 
            name: "GA4 Analytics Certification", 
            org: "Google Analytics", 
            logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
            desc: "Focuses on data-driven decision making, tracking conversions, and understanding user behavior patterns."
        },
        { 
            name: "HubSpot Digital Marketing", 
            org: "HubSpot Academy", 
            logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
            desc: "Complete marketing foundation covering SEO, content, email, and inbound growth strategies."
        },
        { 
            name: "Meta Ads Certification", 
            org: "Meta Business", 
            logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
            desc: "Specialized in high-demand Meta ads for startups & D2C brands, optimizing for ROI and scale."
        },
        { 
            name: "SEMrush SEO Expert", 
            org: "SEMrush Academy", 
            logo: "https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg",
            desc: "Advanced keyword research and ranking strategies for long-term organic brand growth."
        },
    ];

    return (
        <section id="certifications" className="section-padding bg-[#FAFAFA] border-y border-black/5">
             <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 italic underline decoration-orange-400">Certification<span className="text-orange-500">.</span></h2>
                <p className="text-black/40 font-bold uppercase tracking-widest">Validated Industry Expertise</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {list.map((cert, i) => (
                    <div key={i} className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm hover:border-orange-400 transition-all flex flex-col gap-6">
                        <div className="w-14 h-14 flex-shrink-0 bg-slate-50 p-3 rounded-2xl">
                            <img src={cert.logo} alt={cert.org} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h4 className="font-black text-xl mb-2">{cert.name}</h4>
                            <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">{cert.org}</p>
                            <p className="text-sm font-medium text-black/50 leading-relaxed">{cert.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="section-padding bg-white">
        <div className="bg-black rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[120px] rounded-full" />
            <div className="relative z-10">
                <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">Ready to grow<br /><span className="text-orange-400">together?</span></h2>
                <p className="text-white/60 mb-12 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                    Available for high-impact growth roles and performance marketing consultancy. Let's discuss your brand goals today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <a href="mailto:afinandfi29@gmail.com" className="btn-primary flex items-center gap-3 px-8 py-4">
                        <Mail className="w-5 h-5" /> afinandfi29@gmail.com
                    </a>
                    <a href="https://wa.me/919037090838" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-green-500/20">
                        <Phone className="w-5 h-5" /> WhatsApp Me
                    </a>
                </div>
                <div className="flex justify-center gap-8 text-white/50 font-bold uppercase tracking-widest text-xs">
                    <a href="https://linkedin.com/in/afinand" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 flex items-center gap-2">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">Resume</a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 border-t border-black/5 mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black">AFINAND<span className="text-orange-500">.</span></div>
            <div className="text-xs font-bold text-black/30 uppercase tracking-widest">© 2026 Built for Growth & Performance</div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
                <a href="#about" className="hover:text-orange-500 transition-colors">Privacy</a>
            </div>
        </div>
    </footer>
);

export default function App() {
  return (
    <div className="selection:bg-orange-200 min-h-screen font-sans bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <ProfessionalSkills />
        <Toolkit />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
