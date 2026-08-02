# 🛒 Shopping Cart — React Context API + useReducer

A modern shopping cart application built with **React 19** and **Vite**, using only React's built-in **Context API** and **`useReducer`** for global state — no external state management library required. Browse products fetched from a live API, filter by category or search term, manage your cart in real time, and check out.

## ✨ Features

- **Product catalog** — Products are fetched asynchronously from [Fake Store API](https://fakestoreapi.com/) inside a `ProductsProvider` and shared app-wide via Context.
- **Search & filter** — Search products by title and filter by category, synced with URL query parameters (`?search=...&category=...`) so filters persist on refresh and are shareable.
- **Product details page** — Dedicated route (`/products/:id`) with full product info: image, description, category, and price.
- **Cart management** — Add, remove, increase, and decrease item quantities directly from the product cards or the checkout page, powered by a `useReducer`-based cart store.
- **Checkout summary** — Live total price and item count calculation, with a one-click checkout action that clears the cart.
- **Client-side routing** — Powered by `react-router`, including a custom 404 page for unmatched routes.
- **Loading states** — Simple loading indicator while product data is being fetched.

## 🧰 Tech Stack

| Category | Tools |
|---|---|
| UI Library | React 19 |
| State Management | React Context API + `useReducer` |
| Routing | React Router 7 |
| HTTP Client | Axios |
| Build Tool | Vite 7 |
| Icons | Lucide React |
| Dev Tools | ESLint |

## 🆚 How this compares to the other versions

This repo is part of a set of shopping cart implementations by the same author, each swapping out the state management approach while keeping the UI and features identical:

- [`shopping-cart-redux-toolkit`](https://github.com/parsaabedi03/shopping-cart-redux-toolkit) — Redux Toolkit slices with `createAsyncThunk`.
- [`shopping-cart-zustand`](https://github.com/parsaabedi03/shopping-cart-zustand) — Zustand hook-based stores.
- **`shopping-cart`** (this repo) — Vanilla React Context + `useReducer`, no external dependency for state.

This version is the most "batteries-included" option in terms of React itself: two separate contexts (`CartContext`, `ProductsContext`) each wrapped in their own provider component and combined through a single `AppProviders` wrapper, with custom hooks (`useCart`, `useProducts`) that throw a clear error if used outside their provider.

## 📁 Project Structure

```
src/
├── context/
│   ├── cart/
│   │   ├── CartContext.jsx   # Cart context definition
│   │   ├── CartProvider.jsx  # Cart reducer: ADD, REMOVE, INCREASE, DECREASE, CHECKOUT
│   │   └── useCart.js        # Custom hook to consume CartContext
│   └── products/
│       ├── ProductsContext.jsx  # Products context definition
│       ├── ProductsProvider.jsx # Fetches products and provides them app-wide
│       └── useProducts.js       # Custom hook to consume ProductsContext
├── providers/
│   └── AppProviders.jsx      # Combines ProductsProvider + CartProvider
├── components/
│   ├── ProductCard.jsx       # Product card with cart controls
│   ├── CartItem.jsx          # Cart line-item with quantity controls
│   ├── SearchBar.jsx         # Search input
│   ├── Categories.jsx        # Category filter list
│   └── Loading.jsx           # Loading spinner/state
├── helper/
│   └── helper.js             # Utility functions (e.g. text shortening)
├── layouts/
│   ├── Header.jsx            # Site header with cart link
│   ├── Footer.jsx            # Site footer
│   └── Layouts.jsx           # Page wrapper (Header + content + Footer)
├── pages/
│   ├── ProductsPage.jsx      # Main product listing with search/filter
│   ├── ProductDetailsPage.jsx# Single product detail view
│   ├── CheckoutPage.jsx      # Cart summary and checkout
│   └── 404page.jsx           # Not found page
├── services/
│   └── config.js             # Axios instance pointing to Fake Store API
├── App.jsx                   # Route definitions
└── main.jsx                  # App entry point (Router + AppProviders)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone git@github.com:parsaabedi03/shopping-cart.git
cd shopping-cart
npm install
```

### Running the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Other scripts

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 🗂️ State Management Overview

The app relies on two independent Context + Provider pairs, composed together by `AppProviders`:

- **`ProductsProvider`** — Fetches the product list on mount and exposes the raw array through `ProductsContext`. Consumed via the `useProducts()` hook.
- **`CartProvider`** — Wraps a `useReducer` with actions `ADD`, `REMOVE`, `INCREASE`, `DECREASE`, and `CHECKOUT`, exposing `{ state, dispatch }` through `CartContext`. Consumed via the `useCart()` hook, which components call directly to `dispatch` actions (e.g. `dispatch({ type: "ADD", payload: product })`).

Both custom hooks (`useCart`, `useProducts`) guard against being called outside their provider by throwing a descriptive error, making misuse easy to catch during development.

## 🌐 Data Source

Product data is pulled from the [Fake Store API](https://fakestoreapi.com/), a free REST API for e-commerce prototyping.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
