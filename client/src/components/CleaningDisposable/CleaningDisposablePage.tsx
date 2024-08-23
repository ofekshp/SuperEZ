import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/CleaningDisposable/${imageName}`);
  } catch (error) {
    return null;
  }
};

const CleaningDisposablePage: React.FC = () => {
  const { addProduct , removeProduct } = useBasket(); 
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

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

  initialBagspackagingproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));


const [paper, setPaper] = useState<{ name: string; image: string | null; count: number }[]>(
  initialPaper.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [laundryproducts, setLaundryproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialLaundryproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cleaningproducts, setCleaningproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCleaningproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [kitchencleaning, setKitchencleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialKitchencleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [generalcleaning, setGeneralcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialGeneralcleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [floorcleaning, setFloorcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFloorcleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bathroomtoilecleaning, setBathroomtoilecleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBathroomtoilecleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [pesticideproducts, setPesticideproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialPesticideproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cleaningaccessories, setCleaningaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCleaningaccessories.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [disposableproducts, setDisposableproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDisposableproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bagspackagingproducts, setBagspackagingproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBagspackagingproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

useEffect(() => {
  handleSave();
}, [paper, laundryproducts, cleaningproducts, kitchencleaning, generalcleaning, floorcleaning, bathroomtoilecleaning, pesticideproducts, cleaningaccessories, disposableproducts, bagspackagingproducts]);

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
    setPaper(paper.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setLaundryproducts(laundryproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setCleaningproducts(cleaningproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setKitchencleaning(kitchencleaning.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setGeneralcleaning(generalcleaning.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setFloorcleaning(floorcleaning.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setPesticideproducts(pesticideproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setCleaningaccessories(cleaningaccessories.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setDisposableproducts(disposableproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setBagspackagingproducts(bagspackagingproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
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