// // controllers/slidesController.js
// import path from "path";
// import fs from "fs";
// import sharp from "sharp";

// // Save compressed slides
// export const uploadSlides = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ message: "No files uploaded" });
//     }

//     const roomId = req.body.roomId;
//     const compressedSlides = [];

//     for (const file of req.files) {
//       const inputPath = file.path;
//       const outputFilename = `${file.filename}.webp`;
//       const outputPath = path.join("uploads", outputFilename);

//       // compress to webp ~100KB
//       await sharp(inputPath)
//         .resize({ width: 1024 }) // keep it lightweight
//         .webp({ quality: 60 })
//         .toFile(outputPath);

//       // remove original temp file
//       fs.unlinkSync(inputPath);

//       compressedSlides.push({
//         url: `/uploads/${outputFilename}`,
//         size: fs.statSync(outputPath).size,
//       });
//     }

//     // Respond with compressed slide metadata
//     res.json({
//       message: "Slides uploaded successfully",
//       slides: compressedSlides,
//       roomId,
//     });

//     // 🔔 Optional: emit socket event
//     // req.io.to(roomId).emit("slides-update", { slides: compressedSlides });
//   } catch (error) {
//     console.error("Slide upload error:", error);
//     res.status(500).json({ message: "Error uploading slides" });
//   }
// };







// controllers/slidesController.js
import path from "path";
import fs from "fs";
import sharp from "sharp";

// Save compressed slides
export const uploadSlides = async (req, res) => {
  try {
    console.log('=== UPLOAD DEBUG START ===');
    console.log('Files received:', req.files?.length || 0);
    console.log('Room ID:', req.body.roomId);
    console.log('Request body:', req.body);
    
    if (!req.files || req.files.length === 0) {
      console.log('ERROR: No files received');
      return res.status(400).json({ message: "No files uploaded" });
    }

    const roomId = req.body.roomId;
    if (!roomId) {
      console.log('ERROR: No roomId provided');
      return res.status(400).json({ message: "Room ID is required" });
    }

    const compressedSlides = [];

    // Create uploads directory if it doesn't exist
    const uploadsDir = "uploads";
    if (!fs.existsSync(uploadsDir)) {
      console.log('Creating uploads directory:', uploadsDir);
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Create room-specific directory
    const roomUploadsDir = path.join(uploadsDir, roomId);
    if (!fs.existsSync(roomUploadsDir)) {
      console.log('Creating room directory:', roomUploadsDir);
      fs.mkdirSync(roomUploadsDir, { recursive: true });
    }

    console.log('Processing', req.files.length, 'files...');

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      console.log(`\n--- Processing File ${i + 1}/${req.files.length} ---`);
      console.log('Original filename:', file.originalname);
      console.log('File mimetype:', file.mimetype);
      console.log('Original size:', file.size, 'bytes');
      console.log('Temp file path:', file.path);

      // Check if temp file exists
      if (!fs.existsSync(file.path)) {
        console.log('ERROR: Temp file does not exist:', file.path);
        continue;
      }

      const inputPath = file.path;
      const timestamp = Date.now();
      const outputFilename = `${timestamp}_${i}_${file.originalname.split('.')[0]}.webp`;
      const outputPath = path.join(roomUploadsDir, outputFilename);

      console.log('Input path:', inputPath);
      console.log('Output path:', outputPath);

      try {
        // Compress image to WebP format
        console.log('Starting Sharp compression...');
        
        await sharp(inputPath)
          .resize({ 
            width: 1024, 
            height: 768, 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 60,
            effort: 4 // Better compression
          })
          .toFile(outputPath);

        // Get compressed file size
        const compressedStats = fs.statSync(outputPath);
        const compressedSize = compressedStats.size;
        
        console.log('Compressed size:', compressedSize, 'bytes');
        console.log('Compression ratio:', ((file.size - compressedSize) / file.size * 100).toFixed(2) + '%');
        console.log('Size reduction:', (file.size - compressedSize), 'bytes saved');

        // Remove original temp file
        console.log('Removing temp file:', inputPath);
        fs.unlinkSync(inputPath);

        // Add to compressed slides array
        compressedSlides.push({
          url: `/uploads/${roomId}/${outputFilename}`,
          originalName: file.originalname,
          originalSize: file.size,
          compressedSize: compressedSize,
          compressionRatio: ((file.size - compressedSize) / file.size * 100).toFixed(2) + '%'
        });

        console.log('File processed successfully!');

      } catch (sharpError) {
        console.error('Sharp processing error for file', file.originalname, ':', sharpError);
        
        // If Sharp fails, copy original file
        const fallbackPath = path.join(roomUploadsDir, `fallback_${outputFilename}`);
        fs.copyFileSync(inputPath, fallbackPath);
        fs.unlinkSync(inputPath);
        
        compressedSlides.push({
          url: `/uploads/${roomId}/fallback_${outputFilename}`,
          originalName: file.originalname,
          originalSize: file.size,
          compressedSize: file.size,
          compressionRatio: '0%',
          fallback: true
        });
      }
    }

    console.log('\n=== UPLOAD SUMMARY ===');
    console.log('Total files processed:', compressedSlides.length);
    console.log('Upload directory:', roomUploadsDir);
    console.log('Compressed slides:', compressedSlides);

    // Check if files actually exist
    console.log('\n=== FILE VERIFICATION ===');
    compressedSlides.forEach((slide, index) => {
      const fullPath = path.join(process.cwd(), slide.url.substring(1)); // Remove leading slash
      const exists = fs.existsSync(fullPath);
      console.log(`File ${index + 1} exists:`, exists, '- Path:', fullPath);
    });

    console.log('=== UPLOAD DEBUG END ===\n');

    // Respond with compressed slide metadata
    res.json({
      message: "Slides uploaded successfully",
      slides: compressedSlides,
      roomId,
      totalFiles: compressedSlides.length,
      uploadPath: roomUploadsDir
    });

  } catch (error) {
    console.error("=== UPLOAD ERROR ===");
    console.error("Error details:", error);
    console.error("Stack trace:", error.stack);
    
    res.status(500).json({ 
      message: "Error uploading slides",
      error: error.message 
    });
  }
};