// // routes/slides.routes.js
// import express from "express";
// import multer from "multer";
// import path from "path";
// import { uploadSlides } from "../controllers/slidesController.js";

// const router = express.Router();

// // Multer storage (temporary uploads)
// const upload = multer({ dest: "tmp_uploads/" });

// // POST /api/v1/slides/upload
// router.post("/upload", upload.array("slides"), uploadSlides);

// export default router;





// routes/slides.routes.js
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { uploadSlides } from "../controllers/slidesController.js";

const router = express.Router();

// Create temp directory if it doesn't exist
const tempDir = "tmp_uploads";
if (!fs.existsSync(tempDir)) {
  console.log('Creating temp directory:', tempDir);
  fs.mkdirSync(tempDir, { recursive: true });
}

// Improved Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Multer - storing file in:', tempDir);
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename with timestamp and random number
    const uniqueName = `${Date.now()}_${Math.round(Math.random() * 1E9)}_${file.originalname}`;
    console.log('Multer - temp filename:', uniqueName);
    cb(null, uniqueName);
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  console.log('Multer - checking file type:', file.mimetype);
  
  // Accept images and PDFs
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    console.log('Multer - file accepted');
    cb(null, true);
  } else {
    console.log('Multer - file rejected, invalid type:', file.mimetype);
    cb(new Error(`Invalid file type: ${file.mimetype}. Only images and PDFs are allowed.`), false);
  }
};

// Configure multer with improved settings
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB limit per file
    files: 20, // Maximum 20 files at once
    fieldSize: 2 * 1024 * 1024 // 2MB field size limit
  }
});

// Debug middleware
const debugMiddleware = (req, res, next) => {
  console.log('\n=== ROUTE DEBUG START ===');
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Content-Type header:', req.get('content-type'));
  console.log('Content-Length header:', req.get('content-length'));
  next();
};

// Error handling middleware for multer
const handleMulterError = (err, req, res, next) => {
  console.error('Multer error:', err);
  
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ 
        message: 'File too large. Maximum size is 15MB per file.' 
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ 
        message: 'Too many files. Maximum is 20 files at once.' 
      });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ 
        message: 'Unexpected field name. Use "slides" as the field name.' 
      });
    }
  }
  
  res.status(400).json({ 
    message: err.message || 'File upload error' 
  });
};

// POST /api/v1/slides/upload
router.post("/upload", 
  debugMiddleware,
  upload.array("slides", 20), // Accept up to 20 files with field name "slides"
  (req, res, next) => {
    console.log('=== MULTER COMPLETED ===');
    console.log('Files received:', req.files?.length || 0);
    console.log('Body received:', req.body);
    
    if (req.files) {
      req.files.forEach((file, index) => {
        console.log(`File ${index + 1}:`, {
          originalname: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          path: file.path,
          exists: fs.existsSync(file.path)
        });
      });
    }
    
    console.log('=== PASSING TO CONTROLLER ===\n');
    next();
  },
  uploadSlides,
  handleMulterError
);

// GET route to serve uploaded files
router.get('/file/:roomId/:filename', (req, res) => {
  const { roomId, filename } = req.params;
  const filePath = path.join(process.cwd(), 'uploads', roomId, filename);
  
  console.log('Serving file:', filePath);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.log('File not found:', filePath);
    res.status(404).json({ message: 'File not found' });
  }
});

export default router;