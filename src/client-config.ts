
// <------ CLIENT VALUES ------->

export const clientConfig = {

  // Themes / Colors
  daisy_theme: "business",
  logo_color: "#FDC700",
  // Set primary / secondary colors in index.css

  // General
  short_name: "John's Auto Repair",
  long_name: "John's Auto Repair LLC",
  phone: "(801) 555-1234",
  phoneLink: "8015551234",
  email: "AMR_Auto@gmail.com",
  address: "1145 Richards St,",
  addressSecondary: "Salt Lake City, UT 84101",

  // Header
  logo: "/brand_imgs/logo.png",

};

// <------ COMPONENT SELECTION ------->

export const componentSelection = {
  // default, contact
  header: "contact"
}

// <------ LANDING VALUES ------->

export const landingConfig = {
  landing_img: "/brand_imgs/hero.png",
  landing_title: "Action Mobile Auto Repair",
  landing_subtext: "Honest, skilled mechanics serving Salt Lake City and beyond. We keep you running smoothly.",
  landing_cta: "Give Us A Call",
  landing_type: 0,
}


// <------- SERVICE VALUES ------->

export const servicesConfig = [
  {
    title: "Tire Services",
    description: "We handle all your tire needs with expert care.",
    image: "/service_imgs/tire_services.jpg",
    items: [
      "Tire repair",
      "Tire balancing",
      "Tire swapping"
    ]
  },
  {
    title: "Engine Repair",
    description: "Keep your engine running like new.",
    image: "/service_imgs/engine_repair.jpg",
    items: [
      "Diagnostics",
      "Timing belt replacement",
      "Engine rebuild"
    ]
  },
  {
    title: "Scheduled Maintenance",
    description: "Regular service to keep your vehicle in top shape.",
    image: "/service_imgs/scheduled_maintenance.jpg",
    items: [
      "Oil change",
      "Battery testing",
      "Fluid change"
    ]
  },
  {
    title: "Brakes",
    description: "Stay safe with professional brake service.",
    image: "/service_imgs/brakes.jpg",
    items: [
      "Brake pad replacement",
      "Rotor resurfacing",
      "Fluid bleed"
    ]
  }
];

// <------- CONTACT INFO -------->

export const contactConfig = {
  phone: "(801) 555-1234",
  phoneLink: "8015551234",
  email: "AMR_Auto@gmail.com",
  location: {
    address: "1145 Richards St,",
    addressSecondary: "Salt Lake City, UT 84101",
    googleMapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.7052202371249!2d-111.89263766984047!3d40.74396671929422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f53ab3a61df5%3A0x16439d32409dd44b!2sAction%20Mobile%20Repair!5e0!3m2!1sen!2sus!4v1748289559907!5m2!1sen!2sus",
    googleMapLink: "https://www.google.com/maps?q=Action+Mobile+Repair&ll=40.7439845,-111.892386",
    appleMapLink: "https://maps.apple.com/?q=Action+Mobile+Repair&ll=40.7439845,-111.892386"
  },
  hours: [
    { day: "Monday", time: "8 AM - 6 PM" },
    { day: "Tuesday", time: "8 AM - 6 PM" },
    { day: "Wednesday", time: "8 AM - 6 PM" },
    { day: "Thursday", time: "8 AM - 6 PM" },
    { day: "Friday", time: "8 AM - 6 PM" },
    { day: "Saturday", time: "9 AM - 4 PM" },
    { day: "Sunday", time: "Closed" },
  ]
}