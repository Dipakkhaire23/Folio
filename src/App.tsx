/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import axios from 'axios';
import.meta.env.BASE_URL

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle');

  const portfolioData = {
    achievements: [
      {
        title: "Nirman Hackathon Top-6",
        description: "Conducted By I2IC Training And Placement Cell VIIT",
        date: "On 30 to 31 Jan 2025",
        icon: "TrophyIcon",  // Replace with your icon (Trophy for Hackathon)
        images: [
          "public/assets/k.jpg",
          "public/assets/n.jpg",
          "public/assets/p.jpg",
          "public/assets/Screenshot 2025-01-31 224635.png",
          "public/assets/Screenshot 2025-01-31 224800.png",
          "public/assets/Screenshot 2025-01-31 224830.png",
          "public/assets/Screenshot 2025-01-31 224910.png",
          "public/assets/Screenshot 2025-01-31 224951.png",
          // Add more image URLs
        ],
      },
     
    ],
    name: "Dipak Khaire",
    title: "APP && JAVA FULLSTACK DEVLOPER",
    about: "I Am Dipak, a passionate and skilled developer with expertise in Flutter for mobile and web development, along with Spring Boot for backend services. With strong problem-solving abilities, I have successfully built and deployed various projects on GitHub and Vercel. Check out my projects!",
    photo: "/assets/dk.jpg",
    resumeUrl: "/assets/m_resume.pdf", // Add your resume URL here
    email: "dipak.22310640@viit.ac.in",
    collegeName: "Student At VIIT, Pune",
    ph:"/assets/image.jpg",
    activitiesPhoto:"/assets/image.jpg",


    travelPhoto:'/assets/trivelling.jpg',
    readingPhoto:"/assets/new.jpg ",
    sportsPhoto:"/assets/sport.jpg ",
    cookingPhoto:"/assets/swimming.jpg ",






    education: [
      {
        degree: "Artificial Intelligence and Data Science",
        school: "Vishwakarma Institute of Information Technology, Pune",
        graduationYear: "2023-27",
      },
    ],
    skills: [
      { name: "Core and Advanced Java" },
      { name: "Flutter" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Spring Framework 6 & Spring Boot 3" },
      { name: "Spring Data JPA" },
      { name: "Docker" },
      { name: "Rest API" },
      { name: "C++" },
      { name: "DSA" },
      { name: "Spring MVC" },
      { name: "Backend Development" },
      { name: "App Development" },
    ],
    experience: [
      {
        position: "Developer Team",
        company: "Researchers And Innovators Cell At VIIT",
        responsibilities: [
          "Skill",
          "HTML,CSS ,JS,React.",
          "Spring Boot 3 for Backend Services.",
          "MySQL,Firebase"
        ],
      },
      {
        position: "Activity Team",
        company: "Cisco Club At VIIT",
        responsibilities: [
          "Conduct Various Fun Activities During Events",
        ],
      },
    ],
    projects: [
      {
        title: "Grade_Card_Portal",
        description: "Features Faculty Dashboard: Input marks and auto-generate grade cards. Student Dashboard: View real-time grade cards. Automated grade calculation and generation. Tech Stack Frontend: HTML5, CSS, JavaScript Backend: PHP, MySQL (XAMPP) Editor: Visual Studio Code",
        link: "https://github.com/Dipakkhaire23/Student_GradeCard_Showing_Portal.git"
      },
      {
        title: "Booking Plant APP",
        description: "The Booking Plant App is a mobile application where customers can browse, view, and book various plants (e.g., indoor plants, outdoor plants, flowers) for delivery or pickup. The app would allow users to search for plants, view details, place orders, and track their bookings. It uses Flutter for the frontend and Firebase for the backend.",
        link: "https://github.com/Dipakkhaire23/Booking-Plant-App.git"
      },
      {
        title: "Notes Application",
        description: "The Daily Notes App is a mobile application designed for users to easily create, manage, and organize their notes on a daily basis. Users can add, update, delete, and view their notes with the ability to organize them based on dates or categories. The app allows users to securely log in and access their notes across devices with real-time syncing, powered by Firebase.",
        link: "https://github.com/Dipakkhaire23/Notes-appliction.git"
      },
      {
        title: "Educonnect",
        description: "Teacher’s Dashboard: Effortlessly upload assignments, manage grades, organize online classrooms, create CIE tests, track submissions, and more.Student’s Dashboard: Submit assignments, access grades, attend CIE tests, check timetables, and track academic progress .The Tech Behind the Magic: Frontend: React & Tailwind CSS for a sleek, responsive design Backend: Spring Boot 3, Spring MVC, and Spring JPA for scalable and efficient performance Authentication: JWT & OAuth 2 for secure and seamless user authentication Database: MySQL for reliable data storage",
        link: "https://github.com/Dipakkhaire23/Edutech.git"
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const response = await axios.post('https://backend-nw3j.vercel.app/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        setSubmitStatus('error'); // You could use a new state to show an error
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('success'); // Indicate success
      }
    } catch (error) {
      console.error('Error caught:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', error.response?.data);
        console.error('Axios error message:', error.message);
      } else {
        console.error('General error:', error);
      }

      setSubmitStatus('error');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 4000);
    }
  };
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-white text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold text-center md:text-left">{portfolioData.collegeName}</h1>
          <div className="flex gap-10 ml-auto">
            <a href="#home" className="text-lg md:text-xl font-semibold text-black hover:text-gray-700 transition-all">Home</a>
            <a href="#projects" className="text-lg md:text-xl font-semibold text-black hover:text-gray-700 transition-all">Projects</a>
            <a href="#contact" className="text-lg md:text-xl font-semibold text-black hover:text-gray-700 transition-all">Connect Me</a>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div id="home" className="bg-gradient-to-b from-blue-300 to-transparent text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 animate-fade-in-up">
              <div className="flex items-center gap-20">
                <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-blue-500 animate-slide-in-left">
                  {portfolioData.name}
                </h1>
                <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" /> Hire Me
                </a>
              </div>
              <h2 className="text-xl md:text-2xl mb-6 animate-slide-in-left animation-delay-200 font-bold text-green-600">{portfolioData.title}</h2>
              <p className="text-lg mb-8 animate-slide-in-left animation-delay-400 text-gray-600 font-bold">{portfolioData.about}</p>
              <div className="flex gap-4 animate-slide-in-left animation-delay-600">
                <a href={ import.meta.env.BASE_URL + portfolioData.resumeUrl} 
                download 
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105">
                  <Download className="w-5 h-5 mr-2" /> Download Resume
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 animate-fade-in">
              <img src={  import.meta.env.BASE_URL + portfolioData.photo} alt={portfolioData.name} className="w-48 h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
      {/* activit */}
      <div id="activities" className="bg-gradient-to-b from-green-300 to-transparent text-white">
  <div className="container mx-auto px-4 py-10">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-green-500 animate-slide-in-left">
      Activities & Interests
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-200">
        <img src={ import.meta.env.BASE_URL + portfolioData.travelPhoto} alt="Traveling" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Traveling</h3>
        <p>Exploring new cultures and destinations</p>
      </div>
      {/* <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-400">
        <img src={ import.meta.env.BASE_URL + portfolioData.photographyPhoto} alt="Photography" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Video Editing</h3>
        <p>Capturing moments and landscapes</p>
      </div> */}
      <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-600">
        <img src={ import.meta.env.BASE_URL + portfolioData.readingPhoto} alt="Reading" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Learning New Technology</h3>
        <p> Moving towords the IT,AI world</p>
      </div>
      <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-800">
        <img src={ import.meta.env.BASE_URL + portfolioData.sportsPhoto} alt="Sports" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Sports</h3>
        <p>Playing and watching various sports, especially KHO-KHO and KABBADI</p>
      </div>
      <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-1000">
        <img src={ import.meta.env.BASE_URL + portfolioData.cookingPhoto} alt="Cooking" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Swimming</h3>
        <p>Enjoying the water and staying fit</p>
      </div>
      {/* <div className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-1200">
        <img src={ import.meta.env.BASE_URL + portfolioData.technologyPhoto} alt="Technology" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">Technology</h3>
        <p>Keeping up with the latest tech trends and gadgets</p>
      </div> */}
    </div>
  </div>
</div>



      {/* Education Section */}
      <div id="education" className="bg-white text-blue-600 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left animate-slide-in-left text-blue-800">Education</h2>
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 animate-fade-in-up">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium text-blue-500 mb-1">{edu.school}</p>
                  <p className="text-lg text-blue-500 mb-2">{edu.graduationYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-gradient-to-b from-blue-300 to-transparent text-white bg-cover bg-center relative rounded-lg" style={ {backgroundImage: 'url(assets/image.jpg)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left animate-slide-in-left text-white-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center animate-fade-in-up">
                <div className="w-full bg-white border-2 border-blue-600 text-center text-blue-600 font-semibold py-4 px-6 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-gradient-to-b from-blue-500 to-transparent py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black-500 animate-slide-in-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-white text-green-600 rounded-lg shadow-lg p-6 animate-slide-in-left animation-delay-200">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all">
                  <ExternalLink className="w-5 h-5 mr-2" /> View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Achievements Section */}
<div id="achievements" className="bg-gradient-to-b from-blue-600 to-transparent py-20 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white animate-slide-in-left">
      Achievements
    </h2>
    
    {/* Single Achievement (Full Width) */}
    <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 mx-auto w-full max-w-4xl animate-slide-in-left animation-delay-200">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-200 text-white flex items-center justify-center">
          {/* <achievement.icon className="w-8 h-8" /> */}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{portfolioData.achievements[0].title}</h3>
          <p className="text-gray-600 mt-2">{portfolioData.achievements[0].description}</p>
          <p className="text-sm text-gray-400 mt-1">{portfolioData.achievements[0].date}</p>
        </div>
      </div>

      {/* Hackathon Achievement with Images */}
      {portfolioData.achievements[0].title === "Nirman Hackathon Top-6" && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-4">Event Photos</h4>
          <div className="flex gap-4 overflow-x-scroll">
            {portfolioData.achievements[0].images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`hackathon-image-${index}`}
                className="w-72 h-72 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</div>




      {/* Experience Section */}
      <div id="experience" className="bg-white text-blue-600 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left animate-slide-in-left text-blue-800">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 animate-fade-in-up">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{exp.position}</h3>
                  <p className="text-lg font-medium text-blue-500 mb-1">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-lg text-blue-600">- {task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Contact Section */}
<div id="contact" className="bg-gradient-to-b from-sky-50 to-sky-100 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center text-sky-900 animate-fade-in transition-all duration-500 hover:text-sky-700">
      Get In Touch With Me
    </h2>
    
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-500">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Success/Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-green-50 text-green-800 p-4 rounded-md animate-fade-in">
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'success' && (
          // <div className="bg-red-50 text-red-800 p-4 rounded-md animate-fade-in">
          //   Oops! Something went wrong. Try again.
          // </div>
          <div className="bg-green-50 text-green-800 p-4 rounded-md animate-fade-in">
            Message sent successfully!
          </div>
        )}

        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-sky-700">Name</label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-4 pl-10 rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 3l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-sky-700">Email</label>
          <div className="mt-1 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 pl-10 rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l4 4-4 4M21 9l-4 4 4 4" />
            </svg>
          </div>
        </div>

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-sky-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-4 rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className={`w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:bg-sky-700 hover:scale-[1.05] ${submitStatus === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'}`}
        >
          {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/dipakkhaire23"
          className="text-sky-600 hover:text-sky-700 transition-all transform hover:scale-110 duration-300"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=dipak-khaire-1a4227291"
          className="text-sky-600 hover:text-sky-700 transition-all transform hover:scale-110 duration-300"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</div>





    </div>
  );
}

export default App;
