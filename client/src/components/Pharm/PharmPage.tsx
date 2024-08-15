import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Pharm/${imageName}`);
  } catch (error) {
    return null;
  }
};

const PharmPage: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');
  
  const initialShampoo = [
    { name: "שמפו לשיער רגיל", image: importImage('shampoo_for_normal_hair.jpeg') },
  ];
  const initialConditioner = [
    { name: "מרכך לשיער רגיל", image: importImage('conditioner_for_normal_hair.jpeg') },
  ];
  const initialBathsoap = [
    { name: "תחליב רחצה קלאסי", image: importImage('classic_shower_lotion.png') },
  ];
  const initialDeodorantforwomen = [
    { name: "דאודורנט סטיק אוריגינל", image: importImage('original_deodorant_stick.png') },
  ];
  const initialDeodorantformen = [
    { name: "דאודורנט ספריי גוף לגבר ICE", image: importImage('deodorant_body_spray_for_men_ICE.jpeg') },
  ];
  const initialSunprotection = [
    { name: "ג'ל אלוורה להרגעה ורענון העור", image: importImage('aloe_vera_gel_for_soothing_and_refreshing_the_skin.jpeg') },
  ];
  const initialShavingpreparationsaccessories = [
    { name: "סכיני גילוח פיוזן", image: importImage('fusion_razors.jpeg') },
  ];
  const initialToothpastesmouthwash = [
    { name: "זוג משחת שיניים קולגייט טוטאל הלבנה", image: importImage('A_pair_of_colgate_total_whitening_toothpaste.png') },
  ];
  const initialToothbrushesdentalaccessories = [
    { name: "מברשת שיניים חשמלית עם סוללות אדבנס פאוור", image: importImage('electric_toothbrush_with_advance_power_batteries.jpeg') },
  ];
  const initialCosmeticsfacialcare = [
    { name: "תרחיץ פנים לכל סוגי העור", image: importImage('face_wash_for_all_skin_types.jpeg') },
  ];
  const initialHaircarestyling = [
    { name: "קרם לחות לשיער יבש מאוד ופגום עם חוחבה", image: importImage('moisturizer_for_very_dry_and_damaged_hair_with_guava.png') },
  ];
  const initialFemininehygieneabsorbentproducts = [
    { name: "מגיני תחתון יאנג נורמל", image: importImage('young_normal_bottom_protectors.jpeg') },
  ];
  const initialCareaccessories = [
    { name: "מקלוני עץ", image: importImage('wooden_sticks.jpeg') },
  ];
  const initialBodycare = [
    { name: "קרם לחות רב שימושי Soft", image: importImage('soft_multipurpose_moisturizer.jpeg') },
  ];
  const initialFirstaid = [
    { name: "אלכוג'ל לשמירה על הייגיינת הידיים", image: importImage('alcohol_gel_to_maintain_hand_hygiene.jpeg') },
  ];
  const initialVitaminsnutritionalsupplements = [
    { name: "בנפייבר סיבים תזונתיים אבקת דקסטרין חיטה", image: importImage('benefiber_dietary_fiber_wheat_dextrin_powder.jpeg') },
  ];
  const initialAirperfume = [
    { name: "מבשם אוויר אריגים וארונות בניחוח מאסק", image: importImage('musk-scented_fabric_and_closet_air_freshener.jpeg') },
  ];
  const initialCandlesmatches = [
    { name: "נר נשמה 26 שעות", image: importImage('26_hour_soul_candle.jpeg') },
  ];

const [shampoo, setShampoo] = useState<{ name: string; image: string | null; count: number }[]>(
  initialShampoo.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [conditioner, setConditioner] = useState<{ name: string; image: string | null; count: number }[]>(
  initialConditioner.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bathsoap, setBathsoap] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBathsoap.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [deodorantforwomen, setDeodorantforwomen] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDeodorantforwomen.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [deodorantformen, setDeodorantformen] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDeodorantformen.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [sunprotection, setSunprotection] = useState<{ name: string; image: string | null; count: number }[]>(
  initialSunprotection.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [shavingpreparationsaccessories, setShavingpreparationsaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialShavingpreparationsaccessories.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [toothpastesmouthwash, setToothpastesmouthwash] = useState<{ name: string; image: string | null; count: number }[]>(
  initialToothpastesmouthwash.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [toothbrushesdentalaccessories, setToothbrushesdentalaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialToothbrushesdentalaccessories.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cosmeticsfacialcare, setCosmeticsfacialcare] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCosmeticsfacialcare.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [haircarestyling, setHaircarestyling] = useState<{ name: string; image: string | null; count: number }[]>(
  initialHaircarestyling.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [femininehygieneabsorbentproducts, setFemininehygieneabsorbentproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFemininehygieneabsorbentproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [careaccessories, setCareaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCareaccessories.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bodycare, setBodycare] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBodycare.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [firstaid, setFirstaid] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFirstaid.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [vitaminsnutritionalsupplements, setVitaminsnutritionalsupplements] = useState<{ name: string; image: string | null; count: number }[]>(
  initialVitaminsnutritionalsupplements.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [airperfume, setAirperfume] = useState<{ name: string; image: string | null; count: number }[]>(
  initialAirperfume.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [candlesmatches, setCandlesmatches] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCandlesmatches.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);


  const handleIncrement = (name: string) => {
    setShampoo(shampoo.map(item =>  item.name === name ? { ...item, count: item.count + 1 } : item));
    setConditioner(conditioner.map(item =>  item.name === name ? { ...item, count: item.count + 1 } : item));
    setBathsoap(bathsoap.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDeodorantforwomen(deodorantforwomen.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDeodorantformen(deodorantformen.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setSunprotection(sunprotection.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setShavingpreparationsaccessories(shavingpreparationsaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setToothpastesmouthwash(toothpastesmouthwash.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setToothbrushesdentalaccessories(toothbrushesdentalaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCosmeticsfacialcare(cosmeticsfacialcare.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setHaircarestyling(haircarestyling.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFemininehygieneabsorbentproducts(femininehygieneabsorbentproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCareaccessories(careaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBodycare(bodycare.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFirstaid(firstaid.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setVitaminsnutritionalsupplements(vitaminsnutritionalsupplements.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setAirperfume(airperfume.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCandlesmatches(candlesmatches.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
  };

  const handleDecrement = (name: string) => {
    setShampoo(shampoo.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setConditioner(conditioner.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBathsoap(bathsoap.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setDeodorantforwomen(deodorantforwomen.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setDeodorantformen(deodorantformen.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setSunprotection(sunprotection.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setShavingpreparationsaccessories(shavingpreparationsaccessories.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setToothpastesmouthwash(toothpastesmouthwash.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setToothbrushesdentalaccessories(toothbrushesdentalaccessories.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCosmeticsfacialcare(cosmeticsfacialcare.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setHaircarestyling(haircarestyling.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setFemininehygieneabsorbentproducts(femininehygieneabsorbentproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCareaccessories(careaccessories.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBodycare(bodycare.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setFirstaid(firstaid.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setVitaminsnutritionalsupplements(vitaminsnutritionalsupplements.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setAirperfume(airperfume.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCandlesmatches(candlesmatches.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
  };

  const handleSave = () => {
    const allItems = [
      ...shampoo,
      ...conditioner,
      ...bathsoap,
      ...deodorantforwomen,
      ...deodorantformen,
      ...sunprotection,
      ...shavingpreparationsaccessories,
      ...toothpastesmouthwash,
      ...toothbrushesdentalaccessories,
      ...cosmeticsfacialcare,
      ...haircarestyling,
      ...femininehygieneabsorbentproducts,
      ...careaccessories,
      ...bodycare,
      ...firstaid,
      ...vitaminsnutritionalsupplements,
      ...airperfume,
      ...candlesmatches,
    ];

    const itemsToSave = allItems.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    itemsToSave.forEach(item => addProduct(item));
  };
  return (
    <div>
      <ProductsPage
        products={shampoo}
        categoryTitle="שמפו"
        icon={<img alt="" src={importImage('shampoo_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={conditioner}
        categoryTitle="מרכך"
        icon={<img alt="" src={importImage('conditioner_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={bathsoap}
        categoryTitle="תחליב רחצה"
        icon={<img alt="" src={importImage('bathsoap_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={deodorantforwomen}
        categoryTitle="דאודורנט לנשים"
        icon={<img alt="" src={importImage('deodorantforwomen_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={deodorantformen}
        categoryTitle="דאודורנט לגברים"
        icon={<img alt="" src={importImage('deodorantformen_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={sunprotection}
        categoryTitle="הגנה מהשמש"
        icon={<img alt="" src={importImage('sunprotection_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={shavingpreparationsaccessories}
        categoryTitle="אביזרי גילוח"
        icon={<img alt="" src={importImage('shavingpreparationsaccessories_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={toothpastesmouthwash}
        categoryTitle="משחות שיניים ומי פה"
        icon={<img alt="" src={importImage('toothpastesmouthwash_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={toothbrushesdentalaccessories}
        categoryTitle="מברשות שיניים ואביזרי שיניים"
        icon={<img alt="" src={importImage('toothbrushesdentalaccessories_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={cosmeticsfacialcare}
        categoryTitle="קוסמטיקה וטיפוח הפנים"
        icon={<img alt="" src={importImage('cosmeticsfacialcare_icon.png')} />} 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={haircarestyling}
        categoryTitle="טיפוח ועיצוב שיער"
        icon={<img alt="" src={importImage('haircarestyling_icon.png')} />} 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={femininehygieneabsorbentproducts}
        categoryTitle="היגיינה נשית ומוצרי ספיגה"
        icon={<img alt="" src={importImage('femininehygieneabsorbentproducts_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={careaccessories}
        categoryTitle="אביזרי טיפוח"
        icon={<img alt="" src={importImage('careaccessories_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={bodycare}
        categoryTitle="טיפוח גוף"
        icon={<img alt="" src={importImage('bodycare_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={firstaid}
        categoryTitle="ערכות עזרה ראשונה"
        icon={<img alt="" src={importImage('firstaid_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={vitaminsnutritionalsupplements}
        categoryTitle="ויטמינים ותוספי תזונה"
        icon={<img alt="" src={importImage('vitaminsnutritionalsupplements_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={airperfume}
        categoryTitle="מבעים לאוויר"
        icon={<img alt="" src={importImage('airperfume_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
      <ProductsPage
        products={candlesmatches}
        categoryTitle="נרות ותואמי הדלקה"
        icon={<img alt="" src={importImage('candlesmatches_icon.png')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
    </div>
  );
}
export default PharmPage;