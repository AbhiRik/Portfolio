particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#ffffff" },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.7, // Increased particle opacity
        "random": true,
        "anim": {
          "enable": true, // Enabled opacity animation
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5, // Increased particle size
        "random": true,
        "anim": {
          "enable": true, // Enabled size animation
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100, // Reduced distance between particles
        "color": "#ff0000", // Changed line color to match particles
        "opacity": 0.5, // Increased line opacity
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3, // Reduced particle speed
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true
  });