
import React, { useState } from 'react';

import HeroSection from '../components/home/HeroSection';
import CarSearchFilter from '../components/home/CarSearchFilter';
import FeaturedCars from '../components/home/FeaturedCars';
import HowItWorks from '../components/home/HowItWorks';
import DealerPriceComparisonSection from '../components/home/DealerPriceComparisonSection';
import BulkPurchaseSection from '../components/home/BulkPurchaseSection';
import SideBySideComparisonModal from '../components/customer/SideBySideComparisonModal';
import NewRequestModal from '../components/customer/NewRequestModal';

import { useMarketplace } from '../context/MarketplaceContext';
import { getModels, getVariants } from '../services/api';

export default function HomePage() {
  const {
    cars,
    manufacturers,
    manufacturersLoading,
    manufacturersError
  } = useMarketplace();

  // FILTER STATES
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedBudget, setSelectedBudget] = useState('All Budgets');
  const [selectedFuel, setSelectedFuel] = useState('All Fuels');
  const [selectedBodyType, setSelectedBodyType] = useState('All Types');

  // MANUFACTURER STATES
  const [models, setModels] = useState([]);
  const [modelsLoading, setModelsLoading] = useState(false);
  const [modelsError, setModelsError] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  // VARIANT STATES
  const [variants, setVariants] = useState([]);
  const [variantsLoading, setVariantsLoading] = useState(false);
  const [variantsError, setVariantsError] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  // MODAL STATES
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // HANDLE MANUFACTURER CLICK
  const handleManufacturerClick = async (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setSelectedBrand(manufacturer.name);

    setModels([]);
    setSelectedModel(null);
    setVariants([]);

    setModelsError(null);
    setVariantsError(null);
    setModelsLoading(true);

    try {
      const data = await getModels(manufacturer.manufacturer_id);
      setModels(data);
    } catch (error) {
      setModelsError(error.message);
    } finally {
      setModelsLoading(false);
    }
  };

  // HANDLE MODEL CLICK
  const handleModelClick = async (model) => {
    setSelectedModel(model);
    setVariants([]);
    setVariantsError(null);
    setVariantsLoading(true);

    try {
      const data = await getVariants(model.model_id);
      setVariants(data);
    } catch (error) {
      setVariantsError(error.message);
    } finally {
      setVariantsLoading(false);
    }
  };

  // CLEAR MANUFACTURER AND MODEL SELECTION
  const handleClearSelection = () => {
    setSelectedManufacturer(null);
    setSelectedModel(null);
    setModels([]);
    setVariants([]);
    setSelectedBrand('All Brands');
  };

  // FILTER CARS
  const filteredCars = cars.filter((car) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();

      const matchName = car.name.toLowerCase().includes(q);
      const matchBrand = car.brand.toLowerCase().includes(q);
      const matchVariant = car.variant.toLowerCase().includes(q);
      const matchFeatures = car.features.some((f) =>
        f.toLowerCase().includes(q)
      );

      if (!matchName && !matchBrand && !matchVariant && !matchFeatures) {
        return false;
      }
    }

    if (selectedBrand !== 'All Brands' && car.brand !== selectedBrand) {
      return false;
    }

    if (selectedFuel !== 'All Fuels' && car.fuel !== selectedFuel) {
      return false;
    }

    if (selectedBodyType !== 'All Types' && car.category !== selectedBodyType) {
      return false;
    }

    if (
      selectedBudget === 'Under ₹15 Lakh' &&
      car.bestMarketplacePrice >= 1500000
    ) {
      return false;
    }

    if (
      selectedBudget === '₹15 Lakh - ₹25 Lakh' &&
      (car.bestMarketplacePrice < 1500000 ||
        car.bestMarketplacePrice > 2500000)
    ) {
      return false;
    }

    if (
      selectedBudget === '₹25 Lakh - ₹35 Lakh' &&
      (car.bestMarketplacePrice < 2500000 ||
        car.bestMarketplacePrice > 3500000)
    ) {
      return false;
    }

    if (
      selectedBudget === 'Above ₹35 Lakh' &&
      car.bestMarketplacePrice <= 3500000
    ) {
      return false;
    }

    return true;
  });

  // RESET FILTERS
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All Brands');
    setSelectedBudget('All Budgets');
    setSelectedFuel('All Fuels');
    setSelectedBodyType('All Types');
  };

  return (
    <div className="space-y-12 pb-16">

      {/* HERO SECTION */}
      <HeroSection />

      {/* DATABASE MANUFACTURERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Browse by Manufacturer
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Manufacturers loaded directly from the ZYVANTA database
          </p>
        </div>

        {manufacturersLoading ? (
          <p className="text-slate-400">
            Loading manufacturers...
          </p>
        ) : manufacturersError ? (
          <p className="text-red-400">
            {manufacturersError}
          </p>
        ) : manufacturers.length === 0 ? (
          <p className="text-slate-400">
            No manufacturers found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

            {manufacturers.map((manufacturer) => (
              <button
                key={manufacturer.manufacturer_id}
                onClick={() => handleManufacturerClick(manufacturer)}
                className="bg-slate-900 border border-slate-800 hover:border-red-500 rounded-xl p-5 text-left transition-all"
              >
                <h3 className="text-white font-semibold">
                  {manufacturer.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2">
                  {manufacturer.country_of_origin || 'Automobile Manufacturer'}
                </p>
              </button>
            ))}

          </div>
        )}
      </section>

      {/* DATABASE MODELS SECTION */}
      {selectedManufacturer && (
        <section
          id="manufacturer-models"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedManufacturer.name} Models
            </h2>

            <button
              onClick={handleClearSelection}
              className="text-red-400 hover:text-red-300"
            >
              Clear Selection
            </button>
          </div>

          {modelsLoading ? (
            <p className="text-slate-400">
              Loading models...
            </p>
          ) : modelsError ? (
            <p className="text-red-400">
              {modelsError}
            </p>
          ) : models.length === 0 ? (
            <p className="text-slate-400">
              No models found for this manufacturer yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

              {models.map((model) => (
                <button
                  key={model.model_id}
                  onClick={() => handleModelClick(model)}
                  className={`bg-slate-900 border rounded-xl p-4 text-left transition-all ${
                    selectedModel?.model_id === model.model_id
                      ? 'border-red-500'
                      : 'border-slate-800 hover:border-red-500'
                  }`}
                >
                  <h3 className="text-white font-semibold">
                    {model.name}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    {model.body_type || 'Body type not specified'}
                  </p>

                  <p className="text-xs text-slate-500">
                    {model.segment || 'Segment not specified'}
                  </p>

                  <p className="text-xs text-red-400 mt-3">
                    View Variants →
                  </p>
                </button>
              ))}

            </div>
          )}
        </section>
      )}

      {/* DATABASE VARIANTS SECTION */}
      {selectedModel && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedModel.name} Variants
          </h2>

          {variantsLoading ? (
            <p className="text-slate-400">
              Loading variants...
            </p>
          ) : variantsError ? (
            <p className="text-red-400">
              {variantsError}
            </p>
          ) : variants.length === 0 ? (
            <p className="text-slate-400">
              No variants available in the database yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {variants.map((variant) => (
                <div
                  key={variant.variant_id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                >
                  <h3 className="text-white font-semibold">
                    {variant.variant_name}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Fuel: {variant.fuel_type || 'Not specified'}
                  </p>

                  <p className="text-sm text-slate-400">
                    Transmission: {variant.transmission_type || 'Not specified'}
                  </p>

                  <p className="text-sm text-slate-400">
                    Model Year: {variant.model_year || 'Not specified'}
                  </p>

                  <p className="text-sm text-slate-400">
                    Seating: {variant.seating_capacity || 'Not specified'}
                  </p>
                </div>
              ))}

            </div>
          )}

        </section>
      )}

      {/* CAR SEARCH AND FILTER SECTION */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="search-and-cars"
      >
        <div className="space-y-8">

          <CarSearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedBudget={selectedBudget}
            setSelectedBudget={setSelectedBudget}
            selectedFuel={selectedFuel}
            setSelectedFuel={setSelectedFuel}
            selectedBodyType={selectedBodyType}
            setSelectedBodyType={setSelectedBodyType}
            onResetFilters={handleResetFilters}
            totalResults={filteredCars.length}
          />

          {/* FEATURED CARS */}
          <div className="pt-2">

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Featured Cars in Chennai
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Compare on-road prices, active group pools, and instant reverse auction discounts
                </p>
              </div>
            </div>

            <FeaturedCars
              cars={filteredCars}
              onOpenQuoteModal={() => setQuoteModalOpen(true)}
              onOpenCompareModal={() => setCompareModalOpen(true)}
            />

          </div>
        </div>
      </section>

      {/* HOW GROUP BUYING WORKS */}
      <HowItWorks />

      {/* DEALER PRICE COMPARISON */}
      <DealerPriceComparisonSection />

      {/* BULK PURCHASE */}
      <BulkPurchaseSection />

      {/* MODALS */}
      <SideBySideComparisonModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

      <NewRequestModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

    </div>
  );
}
