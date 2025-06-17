import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, Download, ArrowLeft, File, Image } from "lucide-react";
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
      // For PDF, we'll create a simple text content (in real implementation, use a PDF library)
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">OCR Tool</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Tamil OCR Text Extraction
            </h2>
            <p className="text-xl text-gray-300">
              Upload your Tamil documents and extract text with advanced OCR technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="border-2 border-gray-700 shadow-xl bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-white">File Upload</CardTitle>
                <CardDescription className="text-gray-300">
                  Drag and drop or click to upload JPG, PNG, JPEG, or PDF files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Drag and Drop Area */}
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                    isDragActive 
                      ? 'border-white bg-gray-800' 
                      : 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-white font-medium">Drop the files here...</p>
                  ) : (
                    <div>
                      <p className="text-gray-300 mb-2">
                        Drag & drop files here, or <span className="text-white font-medium">browse</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        Supported formats: JPG, PNG, JPEG, PDF
                      </p>
                    </div>
                  )}
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-white">Uploaded Files:</Label>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded">
                          <div className="flex items-center space-x-2">
                            {file.type.startsWith('image/') ? (
                              <Image className="h-4 w-4 text-gray-400" />
                            ) : (
                              <File className="h-4 w-4 text-gray-400" />
                            )}
                            <span className="text-sm truncate text-gray-300">{file.name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 hover:bg-gray-700"
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page Count Input */}
                <div className="space-y-2">
                  <Label htmlFor="pageCount" className="text-white">Number of Pages to Extract</Label>
                  <Input
                    id="pageCount"
                    type="number"
                    min="1"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    placeholder="Enter number of pages"
                    className="border-gray-600 bg-gray-800 text-white focus:border-white"
                  />
                </div>

                {/* Output Format Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Output Format</Label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="border-gray-600 bg-gray-800 text-white focus:border-white">
                      <SelectValue placeholder="Select output format" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="txt" className="text-white hover:bg-gray-700">Plain Text (.txt)</SelectItem>
                      <SelectItem value="json" className="text-white hover:bg-gray-700">JSON Format (.json)</SelectItem>
                      <SelectItem value="pdf" className="text-white hover:bg-gray-700">PDF Document (.pdf)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Process Button */}
                <Button
                  onClick={processFiles}
                  disabled={isProcessing || uploadedFiles.length === 0}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Extract Text
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="border-2 border-gray-700 shadow-xl bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Extracted Text</CardTitle>
                <CardDescription className="text-gray-300">
                  Your extracted Tamil text will appear here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {extractedText ? (
                  <>
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 max-h-64 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm font-mono text-gray-200">
                        {extractedText}
                      </pre>
                    </div>
                    <Button
                      onClick={downloadExtractedText}
                      className="w-full bg-gray-200 text-black hover:bg-gray-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download as {outputFormat.toUpperCase()}
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                    <p>Upload files and click "Extract Text" to see results here</p>
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
