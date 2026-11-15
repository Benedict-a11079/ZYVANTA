# 🚗 ZYVANTA
### 🤖 AI-Powered Automotive Price Intelligence & Collective Purchasing Platform

**✨ Compare smarter. Buy together. Get better offers.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20ZYVANTA-2563EB?style=for-the-badge)](https://zyvanta-rho.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Benedict-a11079/ZYVANTA)
[![Built with React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

---

## 🌟 Overview

ZYVANTA is an automotive marketplace designed to make the car-buying journey more transparent, informed, and collaborative. It brings vehicle discovery, dealership quotation comparison, and collective purchasing opportunities into one digital experience.

Instead of evaluating dealership offers in isolation, buyers can review pricing information, understand cost components, compare competing offers, and explore opportunities to strengthen their purchasing position through aggregated demand.

**Our vision:** Transform fragmented car-buying decisions into a transparent, intelligent, and collaborative purchasing experience.

> 🌍 **Our mission:** Make every stage of the car-buying journey easier to understand, compare, and navigate.

## ⚠️ The Problem

Buying a car involves more than comparing the advertised ex-showroom price. Final quotations may include insurance, registration, accessories, handling charges, and optional add-ons. These components can make it difficult for buyers to compare dealership offers accurately.

At the same time, buyers often approach dealerships individually, limiting their ability to benefit from collective demand.

Key challenges:

- **Fragmented information:** Vehicle and dealership details are spread across different sources.
- **Complex quotations:** Additional charges make offer-to-offer comparisons difficult.
- **Limited negotiating power:** Individual buyers negotiate independently.
- **Disconnected demand:** Buyers interested in the same vehicle may not benefit from collective purchasing opportunities.

## 💡 Our Solution

ZYVANTA connects the major stages of the car-buying journey through a unified platform:

1. **Discover** vehicles and explore available variants.
2. **Review** dealership quotations and identify individual cost components.
3. **Compare** offers using a structured view of the total price.
4. **Connect** with other interested buyers through collective purchasing opportunities.
5. **Compete** for better offers through a dealer-facing competitive process.

## 🚀 Key Features

### 1. Vehicle Discovery
Explore vehicles and variants through a focused automotive marketplace experience.

### 2. Dealership Quotation Management
Review dealership offers and their pricing details in one place.

### 3. AI-Powered Quotation Intelligence
Use AI-assisted document analysis to extract and organize vehicle pricing information from dealership quotations. This capability is subject to the implementation available in the current build.

### 4. Transparent Price Breakdown
Understand the different components of a vehicle quotation, including ex-showroom price, insurance, registration, accessories, and discounts.

### 5. Multi-Dealer Price Comparison
Compare competing dealership offers and identify differences in the final on-road price.

### 6. Collective Purchasing
Bring together buyers interested in similar vehicles to explore group-buying opportunities and aggregated demand.

### 7. Dealer Competition / Reverse Auction
Enable dealerships to submit competitive offers in response to aggregated buyer demand.

## 🏆 What Makes ZYVANTA Different?

| Traditional Car Buying | ZYVANTA |
|---|---|
| Buyers compare offers manually | Centralized quotation comparison |
| Pricing components can be difficult to evaluate | Structured price breakdown |
| Buyers negotiate individually | Collective purchasing opportunities |
| Offers are collected independently | Competitive dealer-offer workflow |
| Information is spread across sources | Connected purchasing experience |

## 🧠 AI & Intelligence Layer

ZYVANTA explores the use of Google's Gemini ecosystem to support intelligent quotation processing and automotive price analysis.

The intended AI workflow includes:

- Extracting vehicle and pricing information from dealership quotation documents.
- Identifying cost components such as insurance, registration, and accessories.
- Converting unstructured quotation details into structured information.
- Comparing pricing differences across dealership offers.
- Generating useful insights to support buyer decisions.

**Note:** Describe individual Gemini models or AI capabilities as implemented only when they are connected and verified in the current application.

## 🛠️ Technology Stack

### 🎨 Frontend

- React
- Vite
- JavaScript
- React Router
- Tailwind CSS
- Lucide React

### ⚙️ Backend

The repository includes a `backend/` directory. Add the exact backend framework, database, APIs, and infrastructure here after verifying them against the current source code.

## 📁 Project Structure

```text
ZYVANTA/
├── backend/             # Backend application and services
├── src/                 # Frontend source code
├── index.html           # Application entry HTML
├── package.json         # Frontend dependencies and scripts
├── package-lock.json    # Locked npm dependency tree
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (LTS version recommended)
- npm
- Git

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Benedict-a11079/ZYVANTA.git
cd ZYVANTA
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 4️⃣ Create a production build

```bash
npm run build
```

### 5️⃣ Preview the production build

```bash
npm run preview
```

> Backend setup and environment variables depend on the backend implementation. Check the `backend/` directory for its specific instructions. Never commit API keys, database credentials, or other secrets.

## 🌐 Live Application

Explore the deployed application:

**https://zyvanta-rho.vercel.app/**

## 🔗 Project Links

- **Live Website:** https://zyvanta-rho.vercel.app/
- **GitHub Repository:** https://github.com/Benedict-a11079/ZYVANTA

## 🗺️ Roadmap

- [ ] Refine vehicle and variant discovery.
- [ ] Improve dealership quotation capture and validation.
- [ ] Standardize quotation data for reliable comparisons.
- [ ] Implement and validate AI-assisted quotation extraction.
- [ ] Develop buyer-demand aggregation and group-buying workflows.
- [ ] Implement the dealer competitive-offer workflow.
- [ ] Add automated tests and deployment checks.
- [ ] Expand backend API and setup documentation.

## 🤝 Contributing

Contributions, suggestions, and issue reports are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add: describe your change"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a pull request with a clear description of your changes.

## 🔐 Security

- Never commit `.env` files, API keys, access tokens, or database credentials.
- Store sensitive configuration in environment variables.
- Report security concerns privately to the repository maintainers.

## 📄 License

No license has currently been specified. Unless a license is added to the repository, the project should not be assumed to be available for reuse, modification, or redistribution under an open-source license.

---

**🚘 ZYVANTA — Making automotive purchasing more transparent, competitive, and collaborative.**
