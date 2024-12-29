import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// Image Carousel Component
const ImageCarousel = ({ images, titles }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentImageIndex]}
        alt={titles[currentImageIndex]}
        className="w-full h-full object-cover"
      />
      
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
};

// Plot Details Component
const PlotDetails = ({ plotSizes, approvalNumber }) => {
  const details = [
    { label: "Starting Price", value: plotSizes.start },
    { label: "Premium Plots", value: plotSizes.premium },
    { label: "HMDA Approval No", value: approvalNumber }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Plot Details</h3>
      <div className="space-y-3">
        {details.map(({ label, value }, index) => (
          <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
            <span className="text-gray-600">{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Amenities Component
const Amenities = ({ amenities }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">Amenities</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>{amenity}</span>
        </div>
      ))}
    </div>
  </div>
);

// Location Highlights Component
const LocationHighlights = ({ highlights }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Location Highlights</h3>
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Contact Card Component
const ContactCard = () => (
  <div className="mt-8 bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Contact us</h3>
    <div className="space-y-3">
      <p>Vande Bharat Developers</p>
      <p>Flat No. 306, 3rd Floor, Ratna Complex,</p>
      <p>Beside Image Hospital, Ameerpet,</p>
      <p>Hyderabad-73</p>
      <p>Email: vandebharatdevelopers@gmail.com</p>
    </div>
  </div>
);

// Main Property Card Component
const PropertyCard = ({ propertyDetails }) => {
  const images = [
    "/plot1.jpg",  // Replace with actual image path for plot 1
    "/plot2.jpg",  // Replace with actual image path for plot 2
    "/plot3.jpg",  // Replace with actual image path for plot 3
    "/plot4.jpg"   // Replace with actual image path for plot 4
  ];

  const imageTitles = [
    "Plot View with Road Development",
    "Plot Layout Overview",
    "Wide Internal Roads",
    "Infrastructure Development"
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="relative h-96">
        <ImageCarousel images={images} titles={imageTitles} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{propertyDetails.title}</h2>
          <a 
            href="https://maps.app.goo.gl/hVQBAPbeMUqqbaHv5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white gap-2 hover:text-blue-200 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span>{propertyDetails.location}</span>
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="space-y-2">
            <p className="text-gray-600">Starting from</p>
            <p className="text-xl font-semibold">{propertyDetails.plotSizes.start}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <PlotDetails 
              plotSizes={propertyDetails.plotSizes}
              approvalNumber={propertyDetails.approvalNumber}
            />
            <Amenities amenities={propertyDetails.amenities} />
          </div>

          <div>
            <LocationHighlights highlights={propertyDetails.nearbyHighlights} />
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Properties Component
const Properties = () => {
  const propertyDetails = {
    id: 1,
    title: "Gokul - HMDA Approved Villa Plots",
    location: "Manchal & Ibrahimpatnam",
    propertyType: "HMDA Approved Layout",
    plotSizes: {
      start: "166 Sq. Yards (16 Lakhs)",
      premium: "450 Sq. Yards (45 Lakhs)"
    },
    approvalNumber: "LP No: 20/LO/PLG/HMDA/2021",
    amenities: [
      "100ft & 30ft Wide Roads",
      "Overhead Water Tank",
      "Underground Drainage System",
      "Electricity with Transformers",
      "Avenue Plantation",
      "Children's Park",
      "Street Lights",
      "Security Cabin"
    ],
    nearbyHighlights: [
      "BEL (Bharat Electronics Limited)",
      "BDL (Bharat Dynamics Limited)",
      "NSG (National Security Guard)",
      "NIA (National Investigation Agency)",
      "TCS (Tata Consultancy Services)",
      "Aero Space SEZ",
      "Pharmacity",
      "Ramoji Film City",
      "ORR (Outer Ring Road)",
      "Regional Ring Road",
      "30+ Private & Govt. Colleges"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Properties</h1>
      <PropertyCard propertyDetails={propertyDetails} />
    </div>
  );
};

export default Properties;