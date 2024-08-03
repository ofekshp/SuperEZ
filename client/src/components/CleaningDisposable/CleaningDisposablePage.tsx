import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/CleaningDisposable/${imageName}`);
  } catch (error) {
    return null;
  }
};

const CleaningDisposablePage: React.FC = () => {
  const { addProduct } = useBasket(); 

  const initialPaper = [
    {
      name: "נייר טואלט 32 גלילים",
      image: importImage('toilet_paper_32_rolls.jpeg'),
    }
  ];

  const initialLaundryproducts = [
    {
      name: "אבקת כביסה לכביסה לבנה וצבעונית",
      image: importImage('washing_powder_for_white_and_colored_laundry.jpeg'),
    }
  ];

  const initialCleaningproducts = [
    {
      name: "נוזל לניקוי כלים בניחוח לימון",
      image: importImage('lemon_scented_dishwashing_liquid.jpeg'),
    }
  ];

  const initialKitchencleaning = [
    {
      name: "מסיר שומנים",
      image: importImage('degreaser_product.jpeg'),
    }
  ];

  const initialGeneralcleaning = [
    {
      name: "אקונומיקה",
      image: importImage('bleach.jpeg'),
    }
  ];

  const initialFloorcleaning = [
    {
      name: "נוזל רצפות בריח לבנדר",
      image: importImage('lavender_scented_floor_liquid.jpeg'),
    }
  ];

  const initialBathroomtoilecleaning = [
    {
      name: "נוזל לניקוי אסלות",
      image: importImage('liquid_for_cleaning_toilets.jpeg'),
    }
  ];

  const initialPesticideproducts = [
    {
      name: "קוטל חרקים",
      image: importImage('an_insects_killer.jpeg'),
    }
  ];

  const initialCleaningaccessories = [
    {
      name: "מטליות לניקוי כללי",
      image: importImage('cloths_for_general_cleaning.jpeg'),
    }
  ];

  const initialDisposableproducts = [
    {
      name: "שרוול כוסות פלסטיק",
      image: importImage('plastic_cup_sleeve.jpeg'),
    }
  ];

  const initialBagspackagingproducts = [
    {
      name: "רדיד אלומיניום",
      image: importImage('foil.jpeg'),
    }
  ];

  const [paper, setPaper] = useState<{ name: string; image: string | null; count: number }[]>(
    initialPaper.map(item => ({ ...item, count: 0 }))
  );

  const [laundryproducts, setLaundryproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialLaundryproducts.map(item => ({ ...item, count: 0 }))
  );

  const [cleaningproducts, setCleaningproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCleaningproducts.map(item => ({ ...item, count: 0 }))
  );

  const [kitchencleaning, setKitchencleaning] = useState<{ name: string; image: string | null; count: number }[]>(
    initialKitchencleaning.map(item => ({ ...item, count: 0 }))
  );

  const [generalcleaning, setGeneralcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
    initialGeneralcleaning.map(item => ({ ...item, count: 0 }))
  );

  const [floorcleaning, setFloorcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFloorcleaning.map(item => ({ ...item, count: 0 }))
  );

  const [bathroomtoilecleaning, setBathroomtoilecleaning] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBathroomtoilecleaning.map(item => ({ ...item, count: 0 }))
  );

  const [pesticideproducts, setPesticideproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialPesticideproducts.map(item => ({ ...item, count: 0 }))
  );

  const [cleaningaccessories, setCleaningaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCleaningaccessories.map(item => ({ ...item, count: 0 }))
  );

  const [disposableproducts, setDisposableproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDisposableproducts.map(item => ({ ...item, count: 0 }))
  );

  const [bagspackagingproducts, setBagspackagingproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBagspackagingproducts.map(item => ({ ...item, count: 0 }))
  );

  const handleIncrement = (name: string) => {
    setPaper(paper.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setLaundryproducts(laundryproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCleaningproducts(cleaningproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setKitchencleaning(kitchencleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setGeneralcleaning(generalcleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFloorcleaning(floorcleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setPesticideproducts(pesticideproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCleaningaccessories(cleaningaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDisposableproducts(disposableproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBagspackagingproducts(bagspackagingproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
  };

  const handleDecrement = (name: string) => {
    setPaper(paper.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setLaundryproducts(laundryproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCleaningproducts(cleaningproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setKitchencleaning(kitchencleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setGeneralcleaning(generalcleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setFloorcleaning(floorcleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setPesticideproducts(pesticideproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCleaningaccessories(cleaningaccessories.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setDisposableproducts(disposableproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBagspackagingproducts(bagspackagingproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
  };

  const handleSave = async () => {
    const paperToSave = paper.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const laundryproductsToSave = laundryproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const cleaningproductsToSave = cleaningproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const kitchencleaningToSave = kitchencleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const generalcleaningToSave = generalcleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const floorcleaningToSave = floorcleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const bathroomtoilecleaningToSave = bathroomtoilecleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const pesticideproductsToSave = pesticideproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const cleaningaccessoriesToSave = cleaningaccessories.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const disposableproductsToSave = disposableproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const bagspackagingproductsToSave = bagspackagingproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    const allItemsToSave = [
      ...paperToSave,
      ...laundryproductsToSave,
      ...cleaningproductsToSave,
      ...kitchencleaningToSave,
      ...generalcleaningToSave,
      ...floorcleaningToSave,
      ...bathroomtoilecleaningToSave,
      ...pesticideproductsToSave,
      ...cleaningaccessoriesToSave,
      ...disposableproductsToSave,
      ...bagspackagingproductsToSave
    ];

    allItemsToSave.forEach(item => addProduct(item));

    setPaper(paper.map(item => ({ ...item, count: 0 })));
    setLaundryproducts(laundryproducts.map(item => ({ ...item, count: 0 })));
    setCleaningproducts(cleaningproducts.map(item => ({ ...item, count: 0 })));
    setKitchencleaning(kitchencleaning.map(item => ({ ...item, count: 0 })));
    setGeneralcleaning(generalcleaning.map(item => ({ ...item, count: 0 })));
    setFloorcleaning(floorcleaning.map(item => ({ ...item, count: 0 })));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => ({ ...item, count: 0 })));
    setPesticideproducts(pesticideproducts.map(item => ({ ...item, count: 0 })));
    setCleaningaccessories(cleaningaccessories.map(item => ({ ...item, count: 0 })));
    setDisposableproducts(disposableproducts.map(item => ({ ...item, count: 0 })));
    setBagspackagingproducts(bagspackagingproducts.map(item => ({ ...item, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={paper}
          categoryTitle="נייר ומוצריו"
          icon={<img alt="" src={importImage('paper_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={laundryproducts}
          categoryTitle="מוצרי כביסה"
          icon={<img alt="" src={importImage('laundry_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cleaningproducts}
          categoryTitle="ניקוי כלים"
          icon={<img alt="" src={importImage('cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={kitchencleaning}
          categoryTitle="ניקוי מטבח"
          icon={<img alt="" src={importImage('kitchen_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={generalcleaning}
          categoryTitle="ניקוי כללי"
          icon={<img alt="" src={importImage('general_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={floorcleaning}
          categoryTitle="ניקוי רצפה"
          icon={<img alt="" src={importImage('floor_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={bathroomtoilecleaning}
          categoryTitle="ניקוי אמבטיה ושירותים"
          icon={<img alt="" src={importImage('bathroom_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={pesticideproducts}
          categoryTitle="מוצרי הדברה"
          icon={<img alt="" src={importImage('pesticide_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cleaningaccessories}
          categoryTitle="אביזרי ניקוי"
          icon={<img alt="" src={importImage('cleaning_accessories_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={disposableproducts}
          categoryTitle="מוצרים חד פעמיים"
          icon={<img alt="" src={importImage('disposable_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={bagspackagingproducts}
          categoryTitle="שקיות ומוצרי אריזה"
          icon={<img alt="" src={importImage('bag_packaging_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default CleaningDisposablePage;
