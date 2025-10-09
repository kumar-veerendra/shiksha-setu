# Shiksha Setu – Remote Learning Platform

Shiksha Setu is an AI-powered e-learning platform designed to bridge the educational gap in rural and low-bandwidth areas. It provides students with a seamless learning experience using intelligent content delivery, offline access, and adaptive learning technologies. The project focuses on accessibility, inclusivity, and personalization, ensuring that students with limited internet connectivity can still access quality education resources.

## 🚀 Features

- **Low-Bandwidth Optimization:** Smart slide and content compression for smooth performance even on slow networks.  
- **AI-Assisted Learning:** Personalized study recommendations, content summarization, and quiz generation using AI.  
- **JWT Authentication:** Secure login and role-based access for students, teachers, and admins.  
- **Offline Mode:** Access important study materials and notes without an active internet connection.  
- **Interactive Slide Share:** Enables teachers to share slides efficiently using optimized transfer for low bandwidth.  
- **Analytics Dashboard:** Track student progress, attendance, and performance metrics in real-time.  
- **Secure File Sharing:** Encrypted data transmission to ensure privacy and security.  

## 🧠 Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT (JSON Web Token)  
**AI/ML Integration:** OpenAI APIs for smart summarization and adaptive content  
**Hosting & Deployment:** Render / Vercel (Frontend), Railway / MongoDB Atlas (Backend & Database)  

## 🧩 System Architecture

1. **Frontend:**  
   - Handles user interface and dynamic rendering using React.  
   - Manages authentication tokens and local storage for offline access.  

2. **Backend:**  
   - RESTful API built on Express.js for user management, course handling, and AI integration.  
   - Uses JWT for secure authentication and authorization.  

3. **Database (MongoDB):**  
   - Stores user profiles, progress data, and educational content.  

4. **AI Layer:**  
   - Generates quizzes, explains topics, and summarizes chapters.  

5. **Slide Transfer Module:**  
   - Optimizes and compresses slides for low-data transmission.  

## 🔒 Authentication & Security

- JWT-based authentication for user sessions.  
- Role-based authorization (Student, Teacher, Admin).  
- Encrypted file uploads and downloads.  
- Secure REST API endpoints with validation and rate limiting.  

## 📊 Key Modules

- **Student Dashboard:** Personalized learning materials and progress tracking.  
- **Teacher Dashboard:** Upload lessons, monitor students, and create quizzes.  
- **Admin Panel:** Manage users, reports, and content moderation.  
- **AI Assistant:** Summarizes content, explains difficult topics, and provides smart suggestions.  

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/kumar-veerendra/shiksha-setu.git

# Navigate to project directory
cd Shiksha-Setu

# Install dependencies
npm install

# Start the backend server
cd backend
npm run dev

# Start the frontend server
cd ../frontend
npm run dev


