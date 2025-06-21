
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, Download, ArrowLeft, File, Image, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OCRTool = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [pageCount, setPageCount] = useState<string>("1");
  const [outputFormat, setOutputFormat] = useState<string>("txt");
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState<string>("");
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      return validTypes.includes(file.type);
    });

    if (validFiles.length !== acceptedFiles.length) {
      toast({
        title: "Invalid file type",
        description: "Please upload only JPG, PNG, JPEG, or PDF files.",
        variant: "destructive",
      });
    }

    setUploadedFiles(prev => [...prev, ...validFiles]);
    
    if (validFiles.length > 0) {
      toast({
        title: "Files uploaded successfully",
        description: `${validFiles.length} file(s) ready for processing.`,
      });
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/pdf': ['.pdf']
    },
    multiple: true
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one file to process.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      const sampleTamilText = `
தமிழ் மொழி உலகின் மிகப் பழமையான மொழிகளில் ஒன்றாகும். 
இது தமிழ்நாடு, புதுச்சேரி, இலங்கை, சிங்கப்பூர் மற்றும் மலேசியாவில் அதிகாரப்பூர்வ மொழியாக உள்ளது.

தமிழ் இலக்கியம் மிகவும் வளமானது. சங்க இலக்கியம், திருக்குறள், சிலப்பதிகாரம், 
மணிமேகலை போன்ற பல சிறந்த படைப்புகள் தமிழில் உள்ளன.

தமிழ் மொழியின் இலக்கணம் மிகவும் நுட்பமானது. அகர முதலி, தொல்காப்பியம் போன்ற 
நூல்கள் தமிழ் இலக்கணத்தின் அடிப்படையை வகுத்துள்ளன.
      `.trim();
      
      setExtractedText(sampleTamilText);
      setIsProcessing(false);
      
      toast({
        title: "OCR Processing Complete",
        description: `Successfully extracted text from ${uploadedFiles.length} file(s).`,
      });
    }, 3000);
  };

  const downloadExtractedText = () => {
    if (!extractedText) {
      toast({
        title: "No text to download",
        description: "Please process files first to extract text.",
        variant: "destructive",
      });
      return;
    }

    let content = extractedText;
    let mimeType = 'text/plain';
    let fileName = `extracted_text.${outputFormat}`;

    if (outputFormat === 'json') {
      content = JSON.stringify({ 
        extracted_text: extractedText,
        timestamp: new Date().toISOString(),
        page_count: parseInt(pageCount),
        file_count: uploadedFiles.length
      }, null, 2);
      mimeType = 'application/json';
    } else if (outputFormat === 'pdf') {
      toast({
        title: "PDF Export",
        description: "PDF export functionality would be implemented with a PDF library.",
      });
      return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: `Your ${outputFormat.toUpperCase()} file is downloading.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
            <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">OCR Tool</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Tamil OCR Text Extraction
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Upload your Tamil documents and extract text with advanced OCR technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Section */}
            <Card className="border-2 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-white flex items-center">
                  <Sparkles className="mr-3 h-8 w-8" />
                  File Upload
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Drag and drop or click to upload JPG, PNG, JPEG, or PDF files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Drag and Drop Area */}
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragActive 
                      ? 'border-white bg-gray-700/50 scale-105' 
                      : 'border-gray-600 hover:border-gray-400 hover:bg-gray-700/30'
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Upload className="h-8 w-8 text-black" />
                    </div>
                    {isDragActive ? (
                      <p className="text-white font-semibold text-lg">Drop the files here...</p>
                    ) : (
                      <div>
                        <p className="text-gray-300 mb-3 text-lg">
                          Drag & drop files here, or <span className="text-white font-semibold">browse</span>
                        </p>
                        <p className="text-sm text-gray-400">
                          Supported formats: JPG, PNG, JPEG, PDF
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-white">Uploaded Files:</Label>
                    <div className="space-y-3 max-h-40 overflow-y-auto">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-xl border border-gray-600">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                              {file.type.startsWith('image/') ? (
                                <Image className="h-5 w-5 text-gray-300" />
                              ) : (
                                <File className="h-5 w-5 text-gray-300" />
                              )}
                            </div>
                            <span className="text-sm font-medium truncate text-gray-200">{file.name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-900/20 w-8 h-8 p-0"
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page Count Input */}
                <div className="space-y-3">
                  <Label htmlFor="pageCount" className="text-white text-lg font-semibold">Number of Pages to Extract</Label>
                  <Input
                    id="pageCount"
                    type="number"
                    min="1"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    placeholder="Enter number of pages"
                    className="border-gray-600 bg-gray-800 text-white focus:border-white text-lg py-6"
                  />
                </div>

                {/* Output Format Selection */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">Output Format</Label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="border-gray-600 bg-gray-800 text-white focus:border-white text-lg py-6">
                      <SelectValue placeholder="Select output format" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="txt" className="text-white hover:bg-gray-700 py-3">Plain Text (.txt)</SelectItem>
                      <SelectItem value="json" className="text-white hover:bg-gray-700 py-3">JSON Format (.json)</SelectItem>
                      <SelectItem value="pdf" className="text-white hover:bg-gray-700 py-3">PDF Document (.pdf)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Process Button */}
                <Button
                  onClick={processFiles}
                  disabled={isProcessing || uploadedFiles.length === 0}
                  className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-3 h-5 w-5" />
                      Extract Text
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="border-2 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-white flex items-center">
                  <FileText className="mr-3 h-8 w-8" />
                  Extracted Text
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Your extracted Tamil text will appear here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {extractedText ? (
                  <>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-600 max-h-80 overflow-y-auto shadow-inner">
                      <pre className="whitespace-pre-wrap text-base font-mono text-gray-200 leading-relaxed">
                        {extractedText}
                      </pre>
                    </div>
                    <Button
                      onClick={downloadExtractedText}
                      className="w-full bg-gray-200 text-black hover:bg-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Download as {outputFormat.toUpperCase()}
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-20 text-gray-400">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <FileText className="h-10 w-10 text-gray-600" />
                    </div>
                    <p className="text-lg">Upload files and click "Extract Text" to see results here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCRTool;
