# 🧮 Sum Calculator App

A simple and elegant React application that allows users to input two numbers and calculate their sum dynamically. This project demonstrates fundamental React concepts including state management, controlled components, and event handling.

![React](https://img.shields.io/badge/React-18.x-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS3](https://img.shields.io/badge/CSS-3-blue)

## 🎯 Project Overview

This application was created as part of a Web Application Development assignment to practice:
- React Hooks (`useState`)
- Controlled form components
- Event handling (`onChange`, `onClick`, `onKeyPress`)
- Input validation
- Component-based architecture
- Responsive design

## ✨ Features

- ✅ **Two Number Input Fields** - Clean and intuitive input interface
- ✅ **Real-time Validation** - Validates inputs for empty fields and non-numeric values
- ✅ **Dynamic Sum Calculation** - Instantly calculates and displays the sum
- ✅ **Error Handling** - User-friendly error messages for invalid inputs
- ✅ **Reset Functionality** - Clear all inputs and start fresh
- ✅ **Keyboard Support** - Press Enter to calculate
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Beautiful UI** - Modern gradient design with smooth animations

## 📁 Project Structure

```
sum-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── SumCalculator.jsx    # Main calculator component
│   ├── App.js                    # Root component
│   ├── App.css                   # Application styles
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the source code)
   ```bash
   git clone <repository-url>
   cd sum-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

1. Enter the first number in the **Number 1** input field
2. Enter the second number in the **Number 2** input field
3. Click the **Calculate Sum** button (or press Enter)
4. View the result displayed below
5. Click **Reset** to clear all fields and start over

### Input Validation

The app handles the following scenarios:
- ❌ Empty input fields - Shows error: "Please enter both numbers"
- ❌ Non-numeric values - Shows error: "Please enter valid numbers"
- ✅ Valid numbers - Displays the calculated sum with equation

## 🛠️ Technologies Used

- **React** (v18.x) - JavaScript library for building user interfaces
- **React Hooks** - useState for state management
- **CSS3** - Modern styling with gradients, animations, and flexbox
- **JavaScript ES6+** - Arrow functions, destructuring, etc.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized production-ready files.

## 🌐 Deployment

This app can be deployed to various hosting platforms:

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
1. Add homepage to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/sum-app"
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 Code Quality

- ✅ Well-structured and modular components
- ✅ Comprehensive code comments and documentation
- ✅ Proper use of React Hooks
- ✅ Input validation and error handling
- ✅ Accessible UI with ARIA labels
- ✅ Responsive design for all screen sizes

## 🎓 Learning Outcomes

This project demonstrates understanding of:

1. **State Management** - Using `useState` to manage component state
2. **Controlled Components** - Form inputs controlled by React state
3. **Event Handling** - Handling user interactions (clicks, input changes, keyboard events)
4. **Validation** - Implementing input validation and error handling
5. **Component Architecture** - Building reusable, maintainable components
6. **React Best Practices** - Following React conventions and patterns

## 👤 Author

**Student Name**: [Nguyễn Minh Duy]  
**Course**: Web Application Development (WAD)  
**Assignment**: Sum Calculator App

## 📄 License

This project is created for educational purposes as part of a university assignment.

## 🤝 Contributing

This is an educational project, but suggestions and feedback are welcome!

---

Made with ❤️ using React
