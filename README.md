# 🚗 MJAuto

> A modern automotive dealership web application built with React, TypeScript, and Vite.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---

## Overview

**MJAuto** is a fully responsive automotive dealership website that allows users to browse vehicle inventory, explore financing options, learn how to purchase a car, find dealership locations, and get in touch with the sales team.

---

## ✨ Features

- 🏠 **Home** — Landing page showcasing the dealership brand and featured vehicles
- 🚘 **Inventory** — Browse and filter the available vehicle catalog
- 💰 **Financing** — Explore financing plans and payment options
- 🛒 **How to Buy** — Step-by-step guide to purchasing a vehicle
- 📍 **Locations** — Find dealership branches near you
- 📬 **Contact** — Reach out to the sales and support team

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Static typing |
| [Vite](https://vite.dev/) | ^8 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | ^7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [ESLint](https://eslint.org/) | ^10 | Code linting |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)

> You can install pnpm globally with:
> ```bash
> npm install -g pnpm
> ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yoscarmjp/MJAuto.git
   cd MJAuto
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Running the App

Start the development server:

```bash
pnpm dev
```

The app will be available at **http://localhost:5173** by default.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint to check for code issues |