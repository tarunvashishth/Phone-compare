# 📱 Phone Compare

A modern, responsive React application built with react that allows users to search, select, and compare smartphones side-by-side.

## 🚀 Features

- **Product Search**: Real-time filtering of products by name or brand.
- **Side-by-Side Comparison**: Compare up to 3 products at once on a dedicated comparison page.
- **Client-Side Routing**: Smooth navigation between the product list and comparison views using `react-router-dom`.
- **Dynamic Feature Comparison**: Automatically highlights differences in specifications between products.
- **Theme Support**: Includes a Dark/Light mode toggle for comfortable viewing.
- **Responsive Design**: Optimized for mobile with a 2-column view and smooth horizontal scrolling.
- **Persistence**: Remembers your selected products across page reloads using `localStorage`.
- **Clear All**: Quickly reset your selection from either the home page or the comparison view.

## 🛠️ Setup Instructions

Follow these steps to get the project running locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone and Install
```bash
# Navigate to the project directory
cd product-compare

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

## 📁 Project Structure

- `src/components/`: Reusable React components (Header, ProductCard, ComparisonPage, etc.).
- `src/data/`: Contains the `products.js` file with our mock dataset.
- `src/App.jsx`: Main routing logic and state management.
- `src/index.css`: Global styles including theme variables and responsive breakpoints.

## 🧪 Built With

- **React**: UI Framework
- **Vite**: Build Tool
- **React Router**: Routing
- **Vanilla CSS**: Custom styling with CSS Variables
# Phone-compare
