

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl", 
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      }
    }
  }
};
