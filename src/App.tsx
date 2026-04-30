import { useState } from "react";
import { MainScreen } from "./components/MainScreen";
import { ProductDetailScreen } from "./components/ProductDetailScreen";
import { ProductDetailScreen2 } from "./components/ProductDetailScreen2";
import { AIFittingScreen } from "./components/AIFittingScreen";
import { BodyMeasurementsScreen } from "./components/BodyMeasurementsScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { AIFittingResultScreen } from "./components/AIFittingResultScreen";
import { AIFittingResultScreenFemale } from "./components/AIFittingResultScreenFemale";
import { AIFittingResultScreenFemale2 } from "./components/AIFittingResultScreenFemale2";


type Screen = "main" | "product" | "product2" | "aiFitting" | "bodyMeasurements" | "loading" | "aiFittingResult";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("main");
  const [selectedProduct, setSelectedProduct] = useState<"male" | "female" | "female2">("male");
  const [preselectGender, setPreselectGender] = useState<"male" | "female" | "female2" | null>(null);
  const [bodyMeasurements, setBodyMeasurements] = useState({
    height: "173cm",
    weight: "85kg",
    bodyType: "타원형",
  });

  if (currentScreen === "loading") {
    return (
      <LoadingScreen
        onClose={() => setCurrentScreen("bodyMeasurements")}
        onComplete={() => setCurrentScreen("aiFittingResult")}
        onHome={() => setCurrentScreen("main")}
      />
    );
  }

  if (currentScreen === "bodyMeasurements") {
    return (
      <BodyMeasurementsScreen
        onClose={() => {
          if (preselectGender !== null) {
            // Returned via Ruler icon from result screen
            setCurrentScreen("aiFittingResult");
          } else {
            // Initial flow from camera/input screen
            setCurrentScreen(selectedProduct === "male" ? "product" : "product2");
          }
        }}
        onHomeClick={() => setCurrentScreen("main")}
        onSaveClick={(gender) => {
          setSelectedProduct(gender);
          if (gender === "female") {
            setBodyMeasurements({
              height: "161cm",
              weight: "53.5kg",
              bodyType: "삼각형",
            });
          } else if (gender === "female2") {
            setBodyMeasurements({
              height: "161cm",
              weight: "60kg",
              bodyType: "삼각형",
            });
          } else {
            setBodyMeasurements({
              height: "173cm",
              weight: "85kg",
              bodyType: "타원형",
            });
          }
          setCurrentScreen("loading");
        }}
        productType={selectedProduct}
        initialGender={preselectGender}
      />
    );
  }

  if (currentScreen === "aiFitting") {
    return (
      <AIFittingScreen
        onClose={() => setCurrentScreen(selectedProduct === "male" ? "product" : "product2")}
        onInputClick={() => {
          setPreselectGender(null);
          setCurrentScreen("bodyMeasurements");
        }}
        onHomeClick={() => setCurrentScreen("main")}
      />
    );
  }

  if (currentScreen === "aiFittingResult") {
    if (selectedProduct === "female") {
      return (
        <AIFittingResultScreenFemale
          onClose={() => setCurrentScreen("product2")}
          onHomeClick={() => setCurrentScreen("main")}
          onPurchaseClick={() => setCurrentScreen("product2")}
          onEditMeasurements={() => {
            setPreselectGender("female");
            setCurrentScreen("bodyMeasurements");
          }}
          height={bodyMeasurements.height}
          weight={bodyMeasurements.weight}
          bodyType={bodyMeasurements.bodyType}
        />
      );
    }
    if (selectedProduct === "female2") {
      return (
        <AIFittingResultScreenFemale2
          onClose={() => setCurrentScreen("product2")}
          onHomeClick={() => setCurrentScreen("main")}
          onPurchaseClick={() => setCurrentScreen("product2")}
          onEditMeasurements={() => {
            setPreselectGender("female2");
            setCurrentScreen("bodyMeasurements");
          }}
          height={bodyMeasurements.height}
          weight={bodyMeasurements.weight}
          bodyType={bodyMeasurements.bodyType}
        />
      );
    }
    return (
      <AIFittingResultScreen
        onClose={() => setCurrentScreen("product")}
        onHomeClick={() => setCurrentScreen("main")}
        onPurchaseClick={() => setCurrentScreen("product")}
        onEditMeasurements={() => {
          setPreselectGender("male");
          setCurrentScreen("bodyMeasurements");
        }}
        height={bodyMeasurements.height}
        weight={bodyMeasurements.weight}
        bodyType={bodyMeasurements.bodyType}
      />
    );
  }

  if (currentScreen === "product") {
    return (
      <ProductDetailScreen
        onClose={() => setCurrentScreen("main")}
        onAIFittingClick={() => {
          setSelectedProduct("male");
          setCurrentScreen("aiFitting");
        }}
      />
    );
  }

  if (currentScreen === "product2") {
    return (
      <ProductDetailScreen2
        onClose={() => setCurrentScreen("main")}
        onHomeClick={() => setCurrentScreen("main")}
        onAIFittingClick={() => {
          setSelectedProduct("female");
          setCurrentScreen("aiFitting");
        }}
      />
    );
  }

  return (
    <MainScreen
      onProductClick={() => setCurrentScreen("product")}
      onProduct2Click={() => setCurrentScreen("product2")}
    />
  );
}

export default App;
