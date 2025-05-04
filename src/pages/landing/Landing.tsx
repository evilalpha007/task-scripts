import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 8,
    minutes: 13,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-2 w-2 bg-white rounded-full opacity-70 top-1/4 left-1/5 animate-pulse"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full opacity-60 top-1/3 left-2/3 animate-pulse"></div>
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full opacity-80 top-2/3 left-1/4 animate-pulse"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full opacity-50 top-1/2 left-3/4 animate-pulse"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full opacity-70 top-3/4 left-1/6 animate-pulse"></div>
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full opacity-60 top-1/6 left-5/6 animate-pulse"></div>
        {/* Add more stars as needed */}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 py-6 px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-light tracking-widest uppercase">
                SPACEX
              </span>
              <span className="ml-2 text-xs uppercase tracking-wider text-purple-300">
                luxury space travel
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
           
            <Link
              to="/login"
              className="text-sm uppercase tracking-widest text-purple-200 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 top-full bg-indigo-900 bg-opacity-95 backdrop-blur-sm z-30`}
        >
          <div className="px-4 py-4 space-y-3">
           
            <Link
              to="/login"
              className="block text-sm uppercase tracking-widest text-purple-200 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-12 pt-8 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative">
            <div className="absolute -top-16 -left-4 w-32 h-32 rounded-full bg-purple-500 bg-opacity-20 filter blur-xl"></div>

            <div className="relative w-28 h-28 rounded-full bg-purple-400 bg-opacity-30 mb-6 overflow-hidden backdrop-blur-sm">
            
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            </div>

            <p className="text-sm uppercase tracking-wider text-purple-300 mb-2">
              Beyond the Horizon
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-none">
              LUXURY
              <br />
              AMONG
              <br />
              STARS
            </h1>

            <p className="text-sm text-purple-200 max-w-sm">
              Experience unparalleled comfort and breathtaking views on our
              premium orbital voyages. The future of luxury travel is here.
            </p>
          </div>

          <div className="w-full lg:w-1/3 relative flex justify-center items-center mb-10 lg:mb-0">
            <div className="absolute inset-0 border border-purple-400 border-opacity-20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-purple-400 border-opacity-10 rounded-full animate-spin-slower"></div>

            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white rounded-full"></div>

            

            <div className="absolute bottom-1/4 left-0 bg-white bg-opacity-10 backdrop-blur-md p-3 rounded-lg text-sm max-w-xs border border-purple-300 border-opacity-30">
              <h3 className="font-semibold uppercase tracking-wider text-xs mb-1">
                AURIONIS PRIME
              </h3>
              <p className="text-xs text-purple-100">
                430 light-years from Earth in the constellation{" "}
                <span className="text-purple-300">Lyra</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 bg-opacity-30 rounded-full p-8 w-56 h-56 flex flex-col items-center justify-center text-center mb-8">
              <p className="text-xs uppercase tracking-wider mb-2">
                next expedition in
              </p>

              <div className="flex space-x-4 mb-4">
                <div>
                  <div className="text-4xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs text-purple-200">days</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs text-purple-200">minutes</div>
                </div>
              </div>

              <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-colors">
                Reserve your seat
              </button>
            </div>

            <div className="text-center mb-2">
              <span className="text-3xl font-bold">12</span>
              <p className="text-xs text-purple-300">seats available</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-purple-500 border-opacity-20">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-xs text-purple-300 text-center">
                weeks in space
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-xs text-purple-300 text-center">
                total people
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">63</div>
              <div className="text-xs text-purple-300 text-center">
                hours floating
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute -bottom-64 -left-32 w-full h-full">
        <div className="w-full h-full relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-300 opacity-70"></div>
           
          </div>
        </div>
      </div>
    </div>
  );
}


