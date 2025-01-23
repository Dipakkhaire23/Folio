/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import axios from 'axios';
import.meta.env.BASE_URL

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const portfolioData = {
    name: "Dipak Khaire",
    title: "App & Java Fullstack Developer",
    about: "I'm a web and app developer passionate about building various, user-friendly applications. I have created some projects using Java and Flutter. Currently, I'm focusing on improving my problem-solving abilities through Data Structures and Algorithms and diving into competitive programming/DP. With experience in web development (HTML, CSS, JavaScript, MySQL) and app development (Flutter, Firebase), I'm always learning new technologies. Check out my projects!",
    photo: "/assets/dk.jpg",
    resumeUrl: "/assets/my_resume.pdf", // Add your resume URL here
    email: "dipak.22310640@viit.ac.in",
    collegeName: "Student At VIIT, Pune",
    ph:"/assets/image.jpg",
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
      { name: "SQL" },
      { name: "Backend Development" },
      { name: "App Development" },
    ],
    experience: [
      {
        position: "Developer Team",
        company: "Researchers And Innovators Cell At VIIT",
        responsibilities: [
          "Developed web applications using JavaScript, HTML, and CSS.",
          "Built mobile applications using Flutter and integrated Firebase.",
          "Collaborated with a team to implement user authentication and database management systems."
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
   
      console.log('Response:', response);
   
      if (response.status === 200) {
        setSubmitStatus('success');
       
   
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.log('Error status:', response.status);
        setFormData({ name: '', email: '', message: '' });
        throw new Error(' Message sent successfully!');
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
                <a href={ import.meta.env.BASE_URL + portfolioData.resumeUrl} download className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105">
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
      <div id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-sky-900 animate-fade-in">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-semibold mb-3 text-sky-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
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
      <div id="contact" className="bg-gradient-to-b from-sky-50 to-sky-100">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-sky-900 animate-fade-in">Get In Touch With Me</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded-md animate-fade-in">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                 <div className="bg-green-50 text-green-800 p-4 rounded-md animate-fade-in">
                 Message sent successfully!
               </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sky-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sky-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sky-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:bg-sky-700 hover:scale-[1.02] ${submitStatus === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'}`}
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/dipakkhaire23" className="text-sky-600 hover:text-sky-700 transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/dipak-khaire-1a4227291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sky-600 hover:text-sky-700 transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
