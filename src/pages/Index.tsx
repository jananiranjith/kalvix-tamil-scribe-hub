import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, GraduationCap, Zap, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              KalviX
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
          </nav>
          <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-lg">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              KalviX
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Tamil Nadu students' ultimate study companion with AI-powered Edubot and advanced OCR technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/edubot">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Try Edubot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/ocr">
                <Button size="lg" variant="outline" className="border-2 border-gray-600 text-white hover:bg-white hover:text-black text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <FileText className="mr-3 h-6 w-6" />
                  Try OCR Tool
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Products</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering Tamil Nadu students with cutting-edge educational technology designed for excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Edubot Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <BookOpen className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Edubot</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  AI-Powered Study Companion for Classes 10, 11 & 12
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                  <h4 className="font-bold text-white mb-3 text-lg">Tamil Subject Specialization</h4>
                  <p className="text-gray-300">Expert assistance in Tamil literature, grammar, and language studies</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium">Instant doubt resolution</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium">Personalized learning paths</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium">Exam preparation & practice tests</span>
                  </div>
                </div>
                <Link to="/edubot" className="block w-full">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 mt-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Learning with Edubot
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* OCR Tool Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <FileText className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">OCR Tool</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Advanced Tamil Text Recognition & Conversion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                  <h4 className="font-bold text-white mb-3 text-lg">Tamil Language Processing</h4>
                  <p className="text-gray-300">Accurate extraction and digitization of Tamil text from images and PDFs</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">Multiple format support (JPG, PNG, PDF)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">Export to JSON, PDF, TXT formats</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">Batch processing & page extraction</span>
                  </div>
                </div>
                <Link to="/ocr" className="block w-full">
                  <Button className="w-full bg-gray-200 text-black hover:bg-white mt-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Coming soon 
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose KalviX?</h3>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Tamil Nadu Focused</h4>
              <p className="text-gray-300 text-lg leading-relaxed">Specially designed for Tamil Nadu curriculum and educational needs</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">AI-Powered</h4>
              <p className="text-gray-300 text-lg leading-relaxed">Advanced artificial intelligence for personalized learning experiences</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Easy to Use</h4>
              <p className="text-gray-300 text-lg leading-relaxed">Intuitive interface designed for students of all technical levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-black" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">KalviX</span>
            </div>
            <p className="text-gray-400 text-lg">© 2024 KalviX. Empowering Tamil education with technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
