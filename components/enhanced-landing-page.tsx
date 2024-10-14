'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ShieldAlert, Zap, Cog, BarChart3, Facebook, Twitter, Linkedin, AlertTriangle, Clock, DollarSign, Target, Database, ZapIcon, Eye, Cpu, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function EnhancedLandingPageComponent() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [accuracyCount, setAccuracyCount] = useState(0)
  const [objectsCount, setObjectsCount] = useState(0)
  const [processingCount, setProcessingCount] = useState(0)

  const xrayBrands = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smiths-detection-vector-logo-kT5PkAgQBMh1smswcRpDZZv8UzK9qC.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nuctech-8GBkoAxAsQ38p7FXBDwpRT1eBmNiMQ.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAPISCAN_Logo-k7sH4qiQ6w3wq3A45KQkUreDgDpvNg.png",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCountUp(setAccuracyCount, 99, 2000)
            animateCountUp(setObjectsCount, 1000000, 3000)
            animateCountUp(setProcessingCount, 1, 1500)
          }
        })
      },
      { threshold: 0.5 }
    )

    const detectionSection = document.getElementById('detection-capabilities')
    if (detectionSection) {
      observer.observe(detectionSection)
    }

    return () => {
      if (detectionSection) {
        observer.unobserve(detectionSection)
      }
    }
  }, [])

  const animateCountUp = (setter, target, duration) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setter(Math.floor(progress * target))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Navbar */}
      <header className="w-full py-4 px-6 bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-500">Asgard-AI</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-white hover:text-red-400 transition-colors duration-300 text-lg font-medium">Features</Link>
            <Link href="#why-ai" className="text-white hover:text-red-400 transition-colors duration-300 text-lg font-medium">Why AI</Link>
            <Link href="#implementation" className="text-white hover:text-red-400 transition-colors duration-300 text-lg font-medium">Implementation</Link>
            <Link href="#contact" className="text-white hover:text-red-400 transition-colors duration-300 text-lg font-medium">Contact</Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            See Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-transparent animate-gradient-x"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_600px] lg:gap-20 xl:grid-cols-[1fr_800px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  Transform Security with Asgard-AI
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl mx-auto lg:mx-0">
                  AI-Assisted Threat Recognition for Faster and Smarter Screening
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <TooltipProvider>
                  <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                    <TooltipTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                        onMouseEnter={() => setIsTooltipOpen(true)}
                        onMouseLeave={() => setIsTooltipOpen(false)}
                      >
                        Get Started with Asgard-AI
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click here to learn more about Asgard-AI</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="flex items-center justify-center animate-fade-in-right">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xray3-cqBox8Fda1hW8Qj3gWhoPdyD9epjYV.gif"
                alt="Asgard-AI X-ray Scanning Interface"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* X-ray Brand Compatibility Section */}
      <section className="w-full py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Compatible with Leading X-ray Brands
          </h2>
          <div className="flex justify-center items-center space-x-8">
            {xrayBrands.map((logo, index) => (
              <div key={index} className="w-60 h-20 flex items-center justify-center animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <Image src={logo} alt={`X-ray Brand ${index + 1}`} width={240} height={80} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="security-challenge" className="w-full py-32 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">The Security Challenge</h2>
          <p className="text-center mb-16 text-gray-600 max-w-2xl mx-auto">
            Current security screening processes face significant challenges that impact efficiency and effectiveness.
          </p>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: AlertTriangle, title: "Human Error", description: "Current systems are prone to human error, leading to missed dangerous items." },
              { icon: Clock, title: "Slow Manual Screening", description: "Manual screening processes are time-consuming and inefficient." },
              { icon: DollarSign, title: "High CAPEX for New Machines", description: "Upgrading to new security machines requires significant capital expenditure." }
            ].map((challenge, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <challenge.icon className="h-12 w-12 text-red-500 mb-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{challenge.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section id="features" className="w-full py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-conic from-red-500/40 via-transparent to-transparent animate-spin-slow"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">AI-Powered Security with Asgard-AI</h2>
          <p className="text-center mb-16 text-gray-400 max-w-2xl mx-auto">
            Asgard-AI leverages cutting-edge artificial intelligence to revolutionize security screening, offering unparalleled accuracy and efficiency.
          </p>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldAlert, title: "Advanced Threat Detection", description: "Utilizes cutting-edge AI and computer vision algorithms to identify potential threats with unprecedented accuracy." },
              { icon: Zap, title: "Real-Time Scanning", description: "Processes X-ray images in milliseconds, providing instant threat analysis with minimal false alarms." },
              { icon: Cog, title: "Seamless Integration", description: "Easily integrates with your existing X-ray machines, enhancing their capabilities without the need for hardware replacement." },
              { icon: BarChart3, title: "Continuous Improvement", description: "Leverages machine learning to constantly refine detection algorithms, adapting to new and evolving threats." }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <feature.icon className="h-16 w-16 text-white mb-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{feature.title}: {feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI & Asgard-AI Section */}
      <section id="why-ai" className="w-full py-32 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl  font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Why Asgard-AI?</h2>
          <p className="text-center mb-16 text-gray-600 max-w-2xl mx-auto">
            Asgard-AI revolutionizes security screening by harnessing the power of advanced AI, offering unparalleled efficiency, accuracy, and adaptability.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Eye, title: "Superior Threat Detection", description: "Our AI algorithms can identify threats that human operators might miss, significantly reducing the risk of security breaches." },
              { icon: Zap, title: "Lightning-Fast Processing", description: "Asgard-AI analyzes  X-ray images in milliseconds, dramatically reducing wait times and improving throughput." },
              { icon: Cpu, title: "Continuous Learning", description: "Our system constantly learns and adapts, staying ahead of emerging threats and improving its detection capabilities over time." },
              { icon: DollarSign, title: "Cost-Effective Solution", description: "Integrate Asgard-AI with your existing X-ray machines, avoiding the need for expensive hardware upgrades." },
              { icon: Lock, title: "Enhanced Security Compliance", description: "Meet and exceed security standards with our advanced threat detection capabilities." },
              { icon: BarChart3, title: "Data-Driven Insights", description: "Gain valuable insights into your security operations with our comprehensive analytics and reporting tools." }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration Section */}
      <section className="w-full py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Seamless Integration with Existing Systems</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-400">
            Asgard-AI integrates seamlessly with current X-ray machines without replacing hardware, avoiding costly disruptions and maximizing your current investments.
          </p>
          <Tabs defaultValue="decentralized" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="decentralized">Decentralized Integration</TabsTrigger>
              <TabsTrigger value="centralized">Centralized Integration</TabsTrigger>
            </TabsList>
            <TabsContent value="decentralized">
              <Card className="bg-white border-gray-200 shadow-lg animate-fade-in-left">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Decentralized Integration</h3>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decentralised-cDhEgEzFjZmwIHyQLdyMuY8en4ep9M.png"
                    alt="Decentralized Integration Diagram"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-4"
                  />
                  <p className="text-gray-600">
                    In the decentralized model, Asgard-AI is integrated directly with each existing X-ray machine, 
                    providing real-time threat detection and analysis at each screening point. This approach offers 
                    immediate enhancements to your current security infrastructure without the need for centralized processing.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="centralized">
              <Card className="bg-white border-gray-200 shadow-lg animate-fade-in-right">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Centralized Integration</h3>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/centralised-w2Ymqkhw8mzA9SxZjyEwzc8O2PgKJg.png"
                    alt="Centralized Integration Diagram"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mb-4"
                  />
                  <p className="text-gray-600">
                    The centralized integration model connects multiple X-ray machines to a central Asgard-AI system. 
                    This approach allows for comprehensive data analysis across all screening points, enabling more 
                    sophisticated threat detection and providing a holistic view of your security operations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Unmatched Detection Capabilities Section */}
      <section id="detection-capabilities" className="w-full py-32 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Unmatched Detection Capabilities</h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Asgard-AI's advanced algorithms provide unparalleled accuracy and speed in threat detection, revolutionizing security screening processes.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Detection Accuracy", value: accuracyCount, suffix: "%", tooltip: "Industry-leading accuracy in threat detection" },
              { icon: Database, title: "Objects Recognized", value: objectsCount.toLocaleString(), suffix: "+", tooltip: "Extensive database of recognizable objects" },
              { icon: ZapIcon, title: "Processing Time", value: processingCount, suffix: " sec", tooltip: "Lightning-fast processing for real-time results" },
            ].map((stat, index) => (
              <Card key={index} className="bg-white border-red-200 shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <stat.icon className="h-12 w-12 text-red-500 mb-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{stat.title}</h3>
                  <p className="text-3xl font-bold text-red-600">
                    {stat.value}{stat.suffix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Implement Section */}
      <section id="implementation" className="w-full py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Simple Steps to Implement Asgard-AI</h2>
          <p className="text-center mb-16 text-gray-400 max-w-2xl mx-auto">
            Integrating Asgard-AI into your existing security infrastructure is a straightforward process designed to minimize disruption and maximize efficiency.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "Consultation & Assessment", description: "Our experts analyze your current setup and security needs." },
              { step: 2, title: "Installation & Configuration", description: "Seamless integration of Asgard-AI with your existing X-ray systems." },
              { step: 3, title: "AI Training & Optimization", description: "Customization of AI models to your specific security requirements." },
              { step: 4, title: "Monitoring & Continuous Improvement", description: "Ongoing support and AI model updates for peak performance." }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-4xl font-bold text-red-500 mb-2">{item.step}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Step {item.step}: {item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Get Started Section */}
      <section id="contact" className="w-full py-32 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Get Started with Asgard-AI Today</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
            Ready to revolutionize your security operations? Contact our team or request a demo to see how Asgard-AI can transform your screening processes.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                    Contact Us
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reach out for more information about Asgard-AI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Request Demo
            </Button>
          </div>
          <Card className="max-w-md mx-auto bg-white border-gray-200 shadow-lg animate-fade-in-up">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">About Asgard-AI</h3>
              <p className="text-sm mb-4">Asgard-AI is revolutionizing airport security with cutting-edge AI technology, enhancing threat detection and improving operational efficiency.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
                <li><Link href="#features" className="hover:text-red-400 transition-colors">Features</Link></li>
                <li><Link href="#why-ai" className="hover:text-red-400 transition-colors">Why AI</Link></li>
                <li><Link href="#implementation" className="hover:text-red-400 transition-colors">Implementation</Link></li>
                <li><Link href="#contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-red-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:text-red-400 transition-colors"><Facebook /></Link>
                <Link href="#" className="hover:text-red-400 transition-colors"><Twitter /></Link>
                <Link href="#" className="hover:text-red-400 transition-colors"><Linkedin /></Link>
              </div>
              <p className="text-sm">&copy; 2024 Asgard-AI Team. All rights reserved.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">Asgard-AI is committed to enhancing global security through innovative AI solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}