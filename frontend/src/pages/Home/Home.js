import React from 'react';
import { ArrowRight, Check, MapPin, Phone, Maximize2 } from 'lucide-react';

const Home = () => {
  const features = [
    { id: 1, text: 'HMDA Approved Layout' },
    { id: 2, text: 'Gated Community' },
    { id: 3, text: '24/7 Security' },
    { id: 4, text: "Children's Play Area" },
    { id: 5, text: 'Underground Drainage System' },
    { id: 6, text: 'Well Planned Roads' }
  ];

  const landmarks = [
    { name: "BEL", distance: "2 km" },
    { name: "Outer Ring Road", distance: "5 km" },
    { name: "Ramoji Film City", distance: "8 km" },
    { name: "TCS Campus", distance: "6 km" }
  ];
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/vandebharatdevelopers_brochure.jpg';
    link.download = 'vandebharat_developers_brochure.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                HMDA Approved Plots in Manchala
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Starting from ₹16 Lakhs onwards | Premium plots up to ₹45 Lakhs
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Manchala, Hyderabad</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+919876543210" className="hover:text-blue-600">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
            <button 
              onClick={handleDownload}
              className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Download Brochure</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Master Plan Layout */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Plan Layout</h2>
            <img 
              src="/images/plots.jpg" 
              alt="HMDA Approved Layout Plan" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Development Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <img 
                src="/images/plots land.jpg" 
                alt="Plot Development Progress" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-600">Current development status of plots</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <img 
                src="/images/ibrahimpatnam.jpg" 
                alt="Road Infrastructure" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-600">Road infrastructure development</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center text-gray-700 space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Location Advantages
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold">{landmark.name}</h3>
                    <p className="text-gray-600">{landmark.distance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;