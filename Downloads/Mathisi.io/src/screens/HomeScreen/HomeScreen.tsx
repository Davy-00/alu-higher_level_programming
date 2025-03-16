import React from "react";
import { Bell, Search, Home, BookOpen, Calendar, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCard {
  title: string;
  description: string;
  image: string;
  progress: number;
  duration: string;
}

export const HomeScreen = (): JSX.Element => {
  const navigate = useNavigate();

  const courses: CourseCard[] = [
    {
      title: "Introduction to UI/UX Design",
      description: "Learn the fundamentals of UI/UX design and create stunning user interfaces",
      image: "https://placehold.co/600x400/png",
      progress: 60,
      duration: "2h 30m"
    },
    {
      title: "Web Development Basics",
      description: "Master the core concepts of web development and build responsive websites",
      image: "https://placehold.co/600x400/png",
      progress: 30,
      duration: "3h 45m"
    }
  ];

  const handleSearch = () => {
    navigate("/search");
  };

  const handleNotifications = () => {
    navigate("/notifications");
  };

  const handleCourseClick = (index: number) => {
    navigate(`/course/${index}`);
  };

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-20">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#003096] flex items-center justify-center cursor-pointer"
               onClick={() => handleNavigation("/profile")}>
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <h2 className="text-[#1D2939] font-semibold">John Doe</h2>
            <p className="text-sm text-[#667085]">Student</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="w-10 h-10 rounded-full bg-[#F2F4F7] flex items-center justify-center hover:bg-[#E4E7EC] transition-colors"
            onClick={handleSearch}
          >
            <Search className="w-5 h-5 text-[#667085]" />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-[#F2F4F7] flex items-center justify-center hover:bg-[#E4E7EC] transition-colors"
            onClick={handleNotifications}
          >
            <Bell className="w-5 h-5 text-[#667085]" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-[#1D2939] mb-6">My Courses</h1>
        
        {/* Course Cards */}
        <div className="grid gap-4">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCourseClick(index)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[200px] object-cover rounded-xl mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1D2939]">{course.title}</h3>
                <p className="text-sm text-[#667085]">{course.description}</p>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#1D2939]">{course.progress}% Complete</span>
                    <span className="text-[#667085]">{course.duration}</span>
                  </div>
                  <div className="h-2 bg-[#F2F4F7] rounded-full">
                    <div
                      className="h-full bg-[#003096] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F2F4F7] px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => handleNavigation("/home")}
          >
            <div className="w-6 h-6 bg-[#003096] rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-[#003096] font-medium">Home</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => handleNavigation("/courses")}
          >
            <div className="w-6 h-6 bg-[#F2F4F7] rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#667085]" />
            </div>
            <span className="text-xs text-[#667085]">Courses</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => handleNavigation("/schedule")}
          >
            <div className="w-6 h-6 bg-[#F2F4F7] rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#667085]" />
            </div>
            <span className="text-xs text-[#667085]">Schedule</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => handleNavigation("/settings")}
          >
            <div className="w-6 h-6 bg-[#F2F4F7] rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4 text-[#667085]" />
            </div>
            <span className="text-xs text-[#667085]">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};