
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, GraduationCap, Zap, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-black" />
            <h1 className="text-2xl font-bold text-black">
              KalviX
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-black transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              தமிழ் கல்வியின் எதிர்காலம்
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Tamil Nadu students' ultimate study companion with AI-powered Edubot and advanced OCR technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Try Edubot
              </Button>
              <Link to="/ocr">
                <Button size="lg" variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 text-lg px-8 py-4">
                  <FileText className="mr-2 h-5 w-5" />
                  Try OCR Tool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-black">Our Products</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering Tamil Nadu students with cutting-edge educational technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Edubot Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 bg-white hover:border-gray-400">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">Edubot</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  AI-Powered Study Companion for Classes 10, 11 & 12
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">Tamil Subject Specialization</h4>
                  <p className="text-gray-700">Expert assistance in Tamil literature, grammar, and language studies</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Zap className="h-5 w-5" />
                  <span>Instant doubt resolution</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Users className="h-5 w-5" />
                  <span>Personalized learning paths</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Star className="h-5 w-5" />
                  <span>Exam preparation & practice tests</span>
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800 mt-6">
                  Start Learning with Edubot
                </Button>
              </CardContent>
            </Card>

            {/* OCR Tool Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 bg-white hover:border-gray-400">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">OCR Tool</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Advanced Tamil Text Recognition & Conversion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">Tamil Language Processing</h4>
                  <p className="text-gray-700">Accurate extraction and digitization of Tamil text from images and PDFs</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <FileText className="h-5 w-5" />
                  <span>Multiple format support (JPG, PNG, PDF)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Zap className="h-5 w-5" />
                  <span>Export to JSON, PDF, TXT formats</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Star className="h-5 w-5" />
                  <span>Batch processing & page extraction</span>
                </div>
                <Link to="/ocr" className="block w-full">
                  <Button className="w-full bg-gray-800 text-white hover:bg-gray-900 mt-6">
                    Try OCR Tool
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 text-black">Why Choose KalviX?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">Tamil Nadu Focused</h4>
              <p className="text-gray-600">Specially designed for Tamil Nadu curriculum and educational needs</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">AI-Powered</h4>
              <p className="text-gray-600">Advanced artificial intelligence for personalized learning experiences</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">Easy to Use</h4>
              <p className="text-gray-600">Intuitive interface designed for students of all technical levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">KalviX</span>
            </div>
            <p className="text-gray-400">© 2024 KalviX. Empowering Tamil education with technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
