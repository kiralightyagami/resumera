# Resumera

**AI-Powered Resume Analysis & ATS Optimization Platform**

Resumera is a modern web application that provides comprehensive resume analysis using AI technology. Get detailed feedback on your resume's ATS compatibility, content quality, structure, and receive actionable improvement tips tailored to specific job applications.

## ✨ Features

### 🤖 AI-Powered Analysis
- **ATS Scoring**: Evaluate how well your resume performs with Applicant Tracking Systems
- **Multi-Dimensional Feedback**: Get scored analysis across 5 key areas:
  - ATS Compatibility
  - Tone & Style
  - Content Quality
  - Structure & Format
  - Skills Assessment

### 🎯 Job-Specific Optimization
- **Tailored Analysis**: Upload your resume with specific job details (company, role, job description)
- **Contextual Feedback**: Receive tips and suggestions based on the actual job you're applying for
- **Real-time Processing**: Fast PDF analysis with visual feedback during processing

### 📊 Comprehensive Dashboard
- **Resume Portfolio**: Track multiple resumes and their performance scores
- **Visual Scoring**: Easy-to-read score gauges and progress indicators
- **Detailed Reports**: In-depth breakdown of strengths and improvement areas

### 🔐 Secure & Cloud-Based
- **Puter Integration**: Secure cloud storage for your resumes and analysis data
- **User Authentication**: Protected access to your personal resume data
- **File Management**: Automatic PDF to image conversion for analysis

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Cloud Services**: Puter (File Storage, AI, Authentication, Key-Value Store)
- **File Processing**: PDF.js for PDF handling and conversion
- **UI Components**: Custom React components with modern design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Puter account for cloud services

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd resumera
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Puter configuration:
   ```env
   # Add your Puter API keys and configuration here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 How to Use

### 1. Authentication
- Sign in with your Puter account to access the platform
- Your data is securely stored in the cloud

### 2. Upload Resume
- Navigate to the upload page
- Fill in job details:
  - **Company Name**: Target company
  - **Job Title**: Position you're applying for
  - **Job Description**: Full job posting description
- Upload your PDF resume

### 3. AI Analysis
- The system automatically:
  - Converts your PDF to image format
  - Analyzes content using AI
  - Generates comprehensive feedback
  - Stores results securely

### 4. Review Results
- View your overall score (0-100)
- Explore detailed breakdowns for each category
- Read specific improvement tips
- Download or share your analysis

### 5. Track Progress
- Dashboard shows all your analyzed resumes
- Compare performance across different applications
- Track improvements over time

## 📁 Project Structure

```
resumera/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── components/        # Reusable React components
│   │   ├── ATS.tsx       # ATS score display
│   │   ├── Details.tsx   # Detailed feedback view
│   │   ├── FileUploader.tsx  # Drag & drop uploader
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── ResumeCard.tsx    # Resume preview cards
│   │   ├── ScoreGauge.tsx    # Score visualization
│   │   └── Summary.tsx   # Analysis summary
│   ├── lib/              # Utility libraries
│   │   ├── puter.ts     # Puter SDK integration
│   │   ├── pdf2img.ts   # PDF conversion utilities
│   │   └── utils.ts     # Helper functions
│   ├── resume/[id]/      # Dynamic resume detail pages
│   ├── types/            # TypeScript type definitions
│   └── upload/           # Resume upload workflow
├── constants/            # Application constants
│   └── resumes.ts       # AI prompts and sample data
├── public/              # Static assets
│   ├── icons/          # SVG icons
│   └── images/         # Application images
└── README.md           # This file
```

## 🔧 Key Components

### Resume Analysis Pipeline
1. **File Upload**: Secure PDF upload via Puter storage
2. **Image Conversion**: PDF-to-image conversion for AI processing
3. **AI Analysis**: Comprehensive resume evaluation using Puter AI
4. **Data Storage**: Results stored in Puter Key-Value store
5. **Visualization**: Rich UI components display results

### Feedback Categories
- **ATS Score**: Applicant Tracking System compatibility
- **Content**: Relevance, achievements, and impact
- **Structure**: Layout, formatting, and organization
- **Tone & Style**: Professional presentation and language
- **Skills**: Technical and soft skills alignment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Check the existing issues in the repository
- Create a new issue with detailed description
- Provide steps to reproduce any bugs

## 🎯 Roadmap

- [ ] Additional file format support (Word, etc.)
- [ ] Resume template suggestions
- [ ] Industry-specific analysis
- [ ] Cover letter analysis
- [ ] Export reports to PDF
- [ ] Mobile application

---

Built with ❤️ by Asvin Shrivas, using Next.js and Puter Cloud Services
