import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const importImage = (imageName: string) => {
  try {
    return require(`../../assets/MeatFish/${imageName}`);
  } catch (error) {
    return null;
  }
};

const MeatFish: React.FC = () => {
  const { addProduct , removeProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialChickenproducts = [
    {
      name: "כנפיים עוף",
      image: importImage("chicken_wings_cleaned.jpeg"),
      id: 6,
    },
    {
      name: "עוף שלם טרי",
      image: importImage("whole_chicken.jpeg"),
      id: 6,
    },
    {
      name: "שניצל עוף פרוס טרי",
      image: importImage("thin_chicken_schnitzel.jpeg"),
      id: 6,
    },
    {
      name: "טחול עוף טרי",
      image: importImage("chicken_spleen.jpeg"),
      id: 6,
    },
    {
      name: "לבבות עוף טרי",
      image: importImage("chicken_hearts.jpeg"),
      id: 6,
    },
    {
      name: "כבד עוף טרי",
      image: importImage("chicken_liver.jpeg"),
      id: 6,
    },
    {
      name: "שוקיים עוף טרי",
      image: importImage("chicken_drums.jpeg"),
      id: 6,
    },
    {
      name: "ירכיים עוף טרי",
      image: importImage("chicken_thighs.jpeg"),
      id: 6,
    },
    {
      name: "כרעיים עוף טרי",
      image: importImage("chicken_legs.jpeg"),
      id: 6,
    },
    {
      name: "עוף טרי מפורק",
      image: importImage("chicken_pieces.jpeg"),
      id: 6,
    },
    {
      name: "חזה עוף טרי",
      image: importImage("chicken_breast_cleaned.jpeg"),
      id: 6,
    },
    {
      name: "קוביות פרגיות טרי",
      image: importImage("chicken_thigh_cubes.jpeg"),
      id: 6,
    },
    {
      name: "גב עוף טרי",
      image: importImage("chicken_back.jpeg"),
      id: 6,
    },
    {
      name: "סטייק פרגיות טרי",
      image: importImage("chicken_thigh_steak.jpeg"),
      id: 6,
    },
    {
      name: "קוביות חזה עוף טרי",
      image: importImage("chicken_breast_cubes.jpeg"),
      id: 6,
    },
    {
      name: "פילה עוף טרי",
      image: importImage("chicken_fillet.jpeg"),
      id: 6,
    },
    {
      name: "גרון עוף טרי",
      image: importImage("chicken_neck.jpeg"),
      id: 6,
    },
    {
      name: "קורקבן עוף טרי",
      image: importImage("chicken_gizzard.jpeg"),
      id: 6,
    },
    {
      name: "פרגיות עוף שלם טרי",
      image: importImage("whole_chicken_thigh.jpeg"),
      id: 6,
    },
  ];    

  const initialIndiaproducts = [
    {
      name: "לבבות הודו טרי",
      image: importImage("turkey_hearts_fresh.jpeg"),
      id: 6,
    },
    {
      name: "שוקיים הודו טרי",
      image: importImage("turkey_drums_fresh.jpeg"),
      id: 6,
    },
    {
      name: "כנפיים הודו טרי",
      image: importImage("turkey_wings_fresh.jpeg"),
      id: 6,
    },
    {
      name: "חזה הודו טרי",
      image: importImage("turkey_breast_fresh.jpeg"),
      id: 6,
    },
    {
      name: "שניצל הודו פרוס טרי",
      image: importImage("turkey_schnitzel_fresh.jpeg"),
      id: 6,
    },
    {
      name: "שווארמה הודו קוביות/רצועות טרי",
      image: importImage("turkey_shawarma_fresh.jpeg"),
      id: 6,
    },
    {
      name: "ירך הודו טרי",
      image: importImage("turkey_thigh_fresh.jpeg"),
      id: 6,
    },
    {
      name: "גרון הודו טרי",
      image: importImage("turkey_neck_fresh.jpeg"),
      id: 6,
    },
    {
      name: "קורקבן הודו טרי",
      image: importImage("turkey_gizzard_fresh.jpeg"),
      id: 6,
    },
    {
      name: "כבד הודו טרי",
      image: importImage("turkey_liver_fresh.jpeg"),
      id: 6,
    },
    {
      name: "בשר הודו אדום טרי",
      image: importImage("turkey_red_meat_fresh.jpeg"),
      id: 6,
    },
    {
      name: "שווארמה הודו טרי",
      image: importImage("turkey_shawarma_fresh_2.jpeg"),
      id: 6,
    },
  ];
  
  const initialBeeflamb = [
    {
      name: "אנטריקוט טרי",
      image: importImage("fresh_entrecote.jpeg"),
      id: 6,
    },
    {
      name: "שקדי עגל טרי",
      image: importImage("fresh_calf_sweetbreads.jpeg"),
      id: 6,
    },
    {
      name: "סטייק דנבר טרי",
      image: importImage("fresh_denver_steak.jpeg"),
      id: 6,
    },
    {
      name: "סטייק טומהוק עם עצם טרי",
      image: importImage("fresh_tomahawk_steak_with_bone.jpeg"),
      id: 6,
    },
    {
      name: "סטייק אנטריקוט עם עצם",
      image: importImage("fresh_entrecote_steak_with_bone.jpeg"),
      id: 6,
    },
    {
      name: "רוטפלש טרי (נתח קצבים)",
      image: importImage("fresh_butcher_cut_roastbeef.jpeg"),
      id: 6,
    },
    {
      name: "אסאדו עם עצם טרי",
      image: importImage("fresh_rib_with_bone_asado.jpeg"),
      id: 6,
    },
    {
      name: "אוסובוקו עגל טרי",
      image: importImage("fresh_calf_osso_bucco.jpeg"),
      id: 6,
    },
    {
      name: "בקר טחון טרי",
      image: importImage("fresh_ground_beef.jpeg"),
      id: 6,
    },
    {
      name: "בקר טחון טרי עם כבש",
      image: importImage("fresh_ground_beef_with_lamb.jpeg"),
      id: 6,
    },
    {
      name: "צלי כתף טרי",
      image: importImage("fresh_shoulder_roast.jpeg"),
      id: 6,
    },
    {
      name: "בשר צלעות טרי",
      image: importImage("fresh_rib_meat.jpeg"),
      id: 6,
    },
    {
      name: "בשר ראש טרי",
      image: importImage("fresh_head_meat.jpeg"),
      id: 6,
    },
    {
      name: "בשר שריר טרי",
      image: importImage("fresh_shank_meat.jpeg"),
      id: 6,
    },
    {
      name: "חזה בקר פרוס עם עצם טרי",
      image: importImage("fresh_sliced_beef_breast_with_bone.jpeg"),
      id: 6,
    },
    {
      name: "סינטה טרי",
      image: importImage("fresh_sirloin.jpeg"),
      id: 6,
    },
    {
      name: "עצמות בקר טרי",
      image: importImage("fresh_beef_bones.jpeg"),
      id: 6,
    },
    {
      name: "עצמות מח טרי",
      image: importImage("fresh_marrow_bones.jpeg"),
      id: 6,
    },
    {
      name: "פילה מדומה טרי",
      image: importImage("fresh_mock_fillet.jpeg"),
      id: 6,
    },
    {
      name: "צוואר טרי",
      image: importImage("fresh_neck_meat.jpeg"),
      id: 6,
    },
    {
      name: "גולאש עגל טרי",
      image: importImage("fresh_calf_goulash.jpeg"),
      id: 6,
    },
    {
      name: "זנב עגל טרי",
      image: importImage("fresh_calf_tail.jpeg"),
      id: 6,
    },
    {
      name: "בשר כתף עגל טרי",
      image: importImage("fresh_calf_shoulder_meat.jpeg"),
      id: 6,
    },
    {
      name: "כבד עגל טרי",
      image: importImage("fresh_calf_liver.jpeg"),
      id: 6,
    },
    {
      name: "לב עגל טרי",
      image: importImage("fresh_calf_heart.jpeg"),
      id: 6,
    },
    {
      name: "פילה עגל טרי",
      image: importImage("fresh_calf_fillet.jpeg"),
      id: 6,
    },
    {
      name: "ריאות עגל טרי",
      image: importImage("fresh_calf_lungs.jpeg"),
      id: 6,
    },
    {
      name: "שייטל עגל טרי",
      image: importImage("fresh_calf_shank.jpeg"),
      id: 6,
    },
    {
      name: "לשון עגל טרי",
      image: importImage("fresh_calf_tongue.jpeg"),
      id: 6,
    },
    {
      name: "מוח עגל טרי",
      image: importImage("fresh_calf_brain.jpeg"),
      id: 6,
    },
    {
      name: "חזה כבש טרי",
      image: importImage("fresh_lamb_breast.jpeg"),
      id: 6,
    },
    {
      name: "כתף טלה טרי",
      image: importImage("fresh_lamb_shoulder.jpeg"),
      id: 6,
    },
    {
      name: "צוואר כבש טרי",
      image: importImage("fresh_lamb_neck.jpeg"),
      id: 6,
    },
    {
      name: "צלעות כבש טרי",
      image: importImage("fresh_lamb_chops.jpeg"),
      id: 6,
    },
    {
      name: "שומן כבש טרי",
      image: importImage("fresh_lamb_fat.jpeg"),
      id: 6,
    },
    {
      name: "אסאדו בלי עצם טרי",
      image: importImage("fresh_boneless_asado.jpeg"),
      id: 6,
    },
  ];  

  const initialFrozenbeefchicken = [
    {
      name: "עוף טחון קפוא",
      image: importImage("frozen_ground_chicken.jpeg"),
      id: 6,
    },
    {
      name: "בשר בקר טחון קפוא",
      image: importImage("frozen_ground_beef.jpeg"),
      id: 6,
    },
    {
      name: "סטייק אנטריקוט דק דק קפוא",
      image: importImage("frozen_thin_ribeye_steak.jpeg"),
      id: 6,
    },
    {
      name: "אצבעות אנטריקוט קפוא",
      image: importImage("frozen_ribeye_fingers.jpeg"),
      id: 6,
    },
    {
      name: "קבב כבש קפוא",
      image: importImage("frozen_lamb_kebab.jpeg"),
      id: 6,
    },
    {
      name: "קבב מזרחי קפוא",
      image: importImage("frozen_eastern_kebab.jpeg"),
      id: 6,
    },
    {
      name: "קבב רומני קפוא",
      image: importImage("frozen_romanian_kebab.jpeg"),
      id: 6,
    },
    {
      name: "בורגר בקר קפוא",
      image: importImage("frozen_beef_burger.jpeg"),
      id: 6,
    },
    {
      name: "סטייק בורגר קפוא",
      image: importImage("frozen_premium_burger.jpeg"),
      id: 6,
    },
    {
      name: "בורגר עוף קפוא",
      image: importImage("frozen_chicken_burger.jpeg"),
      id: 6,
    },
    {
      name: "אנטריקוט בורגר מנתח מובחר קפוא",
      image: importImage("frozen_ribeye_burger.jpeg"),
      id: 6,
    },
    {
      name: "שוקיים עוף קפוא",
      image: importImage("frozen_packed_chicken_drumsticks.jpeg"),
      id: 6,
    },
    {
      name: "שניצל בקר קפוא",
      image: importImage("frozen_packed_beef_schnitzel.jpeg"),
      id: 6,
    },
    {
      name: "סטייק פרגיות קפוא",
      image: importImage("frozen_packed_chicken_steak.jpeg"),
      id: 6,
    },
    {
      name: "שיפודי פרגיות קפוא",
      image: importImage("frozen_packed_chicken_skewers.jpeg"),
      id: 6,
    },
    {
      name: "סטייק עוף קפוא",
      image: importImage("frozen_packed_chicken_steak.jpeg"),
      id: 6,
    },
    {
      name: "כנפיים עוף קפוא",
      image: importImage("frozen_packed_chicken_wings.jpeg"),
      id: 6,
    },
    {
      name: "סטייק עין קפוא",
      image: importImage("frozen_ribeye_steak.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות מרגז קפוא",
      image: importImage("frozen_merguez_sausages.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות צ'וריסוס קפוא",
      image: importImage("frozen_chorizo_sausages.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות מיני מרגז קפוא",
      image: importImage("frozen_mini_merguez_sausages.jpeg"),
      id: 6,
    },
    {
      name: "שווארמה הודו קפוא",
      image: importImage("frozen_seasoned_turkey_shawarma.jpeg"),
      id: 6,
    },
    {
      name: "בשר ראש קפוא",
      image: importImage("frozen_packed_head_meat.jpeg"),
      id: 6,
    },
    {
      name: "גרון עוף קפוא",
      image: importImage("frozen_packed_chicken_neck.jpeg"),
      id: 6,
    },
    {
      name: "עצמות עגל קפוא",
      image: importImage("frozen_packed_calf_bones.jpeg"),
      id: 6,
    },
    {
      name: "קורנדביף קפוא",
      image: importImage("frozen_packed_corned_beef.jpeg"),
      id: 6,
    },
    {
      name: "שווארמה פרגיות קפוא",
      image: importImage("frozen_shawarma_poultry_tnuva_chef_plancha.jpeg"),
      id: 6,
    },
    {
      name: "שווארמה ריב אנטריקוט קפוא",
      image: importImage("frozen_ribeye_shawarma_tnuva_chef_plancha.jpeg"),
      id: 6,
    },
  ];  

  const initialSausage = [
    {
      name: "נקניקיות עוף והודו",
      image: importImage("turkey_chicken_sausage_oftov.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות עוף",
      image: importImage("chicken_sausage_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות פרגית",
      image: importImage("pargit_sausage_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות חריפות",
      image: importImage("spicy_sausage_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות וינר",
      image: importImage("wiener_sausage_1kg_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות ביס",
      image: importImage("bite_sized_sausage_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות וינר ללא חומרים משמרים",
      image: importImage("preservative_free_wiener_sausage_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות צ'ופר",
      image: importImage("choper_sausage_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "נקניקיות עוף ובקר",
      image: importImage("bockwurst_chicken_beef_sausage_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "צ'וריסו",
      image: importImage("chorizo_sausage_premium_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "קנקרס",
      image: importImage("knackers_turkey_chicken_sausage_zoglowek.jpeg"),
      id: 6,
    },
  ];  

  const initialFreshfish = [
    {
      name: "דג אמנון טרי",
      image: importImage("fresh_tilapia.jpeg"),
      id: 6,
    },
    {
      name: "דג בורי טרי",
      image: importImage("fresh_large_mullet.jpeg"),
      id: 6,
    },
    {
      name: "דג בס טרי",
      image: importImage("fresh_bass.jpeg"),
      id: 6,
    },
    {
      name: "דג ברמונדי טרי",
      image: importImage("fresh_barramundi.jpeg"),
      id: 6,
    },
    {
      name: "דג דניס טרי",
      image: importImage("fresh_seabream.jpeg"),
      id: 6,
    },
    {
      name: "דג לברק טרי",
      image: importImage("fresh_seabass.jpeg"),
      id: 6,
    },
    {
      name: "דג קרפיון טרי",
      image: importImage("fresh_carp.jpeg"),
      id: 6,
    },
    {
      name: "סטייק סלמון טרי",
      image: importImage("fresh_salmon_steak.jpeg"),
      id: 6,
    },
    {
      name: "פילה סלמון שלם טרי",
      image: importImage("fresh_salmon_fillet_no_skin.jpeg"),
      id: 6,
    },
  ];  

  const initialFrozenfish = [
    {
      name: "פילה סול קפוא",
      image: importImage("filet_sole.jpeg"),
      id: 6,
    },
    {
      name: "פילה אמנון קפוא",
      image: importImage("frozen_tilapia_with_skin.jpeg"),
      id: 6,
    },
    {
      name: "פילה לברק קפוא",
      image: importImage("frozen_japanese_seabass_ice_glazed.jpeg"),
      id: 6,
    },
    {
      name: "פילה סלמון קפוא",
      image: importImage("frozen_norwegian_salmon_fillet.jpeg"),
      id: 6,
    },
    {
      name: "פילה נסיכת הנילוס קפוא",
      image: importImage("sliced_nile_perch_fillet_goldag.jpeg"),
      id: 6,
    },
    {
      name: "דג הליבוט קפוא",
      image: importImage("halibut_sliced_tray.jpeg"),
      id: 6,
    },
    {
      name: "דגי מקרל קפוא",
      image: importImage("mackerel_fish.jpeg"),
      id: 6,
    },
  ];  
  
  initialChickenproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialIndiaproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialBeeflamb.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenbeefchicken.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSausage.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFreshfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));

 
  const [chickenProducts, setChickenProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialChickenproducts.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [indiaProducts, setIndiaProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialIndiaproducts.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [beefLambProducts, setBeefLambProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBeeflamb.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [frozenBeefChickenProducts, setFrozenBeefChickenProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFrozenbeefchicken.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [sausageProducts, setSausageProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialSausage.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [freshFishProducts, setFreshFishProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFreshfish.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [frozenFishProducts, setFrozenFishProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFrozenfish.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  useEffect(() => {
    handleSave();
  }, [chickenProducts, indiaProducts, beefLambProducts, frozenBeefChickenProducts, sausageProducts, freshFishProducts, frozenFishProducts]);

  const handleIncrement = (name: string) => {
    setChickenProducts(chickenProducts.map(item =>   item.name === name ? { ...item, count: item.count + 1 } : item ));
    setIndiaProducts(indiaProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setBeefLambProducts(beefLambProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setSausageProducts(sausageProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFreshFishProducts(freshFishProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFrozenFishProducts(frozenFishProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
  };

  const handleDecrement = (name: string) => {
    setChickenProducts(chickenProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setIndiaProducts(indiaProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setBeefLambProducts(beefLambProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setSausageProducts(sausageProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setFreshFishProducts(freshFishProducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setFrozenFishProducts(frozenFishProducts.map(item => {
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
    const chickenToSave = chickenProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const indiaToSave = indiaProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const beefLambToSave = beefLambProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const frozenBeefChickenToSave = frozenBeefChickenProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const sausageToSave = sausageProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const freshFishToSave = freshFishProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const frozenFishToSave = frozenFishProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const allItems = [...chickenToSave, ...indiaToSave, ...beefLambToSave, ...frozenBeefChickenToSave,...sausageToSave, ...freshFishToSave, ...frozenFishToSave];
    allItems.forEach(item => addProduct(item));
  };
   
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

const filterChickenProducts = chickenProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterIndiaProducts = indiaProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterBeefLambProducts = beefLambProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterFrozenBeefChickenProducts = frozenBeefChickenProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterSausageProducts = sausageProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterFreshFishProducts = freshFishProducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterFrozenFishProducts = frozenFishProducts.filter(product =>
  product.name.includes(searchTerm)
);

  return (<div>
    <div style={{
      position: 'absolute',
      marginTop: '100px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="חפש מוצר בשר/עוף/דגים"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: '100%',
        
            padding: '5px 40px 5px 5px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            textAlign: 'right',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        <i className="fas fa-search" style={{
          position: 'absolute',
          right: '-30px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#aaa',
          pointerEvents: 'none',
        }}></i>
      </div>
  
  </div>
  <div>

  {filterChickenProducts.length > 0 && (
         <ProductsPage
         products={filterChickenProducts}
         categoryTitle={
           <div style={{ display: 'flex', alignItems: 'center' }}>
             <span style={{ verticalAlign: 'middle' }}>מוצרי עוף</span>
             <img 
               src={importImage('chicken.png')} 
               alt="" 
               style={{ width: '50px', height: '50px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
             />
           </div>
         }
         icon={null}
         onIncrement={handleIncrement}
         onDecrement={handleDecrement}
         onSave={handleSave}
         />
)}
</div>
<div>
{filterIndiaProducts.length > 0 && (
     <ProductsPage
     products={filterIndiaProducts}
     categoryTitle={
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <span style={{ verticalAlign: 'middle' }}>מוצרי הודו</span>
         <img 
           src={importImage('india.png')} 
           alt="" 
           style={{ width: '50px', height: '50px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
         />
       </div>
     }
     icon={null}
     onIncrement={handleIncrement}
     onDecrement={handleDecrement}
     onSave={handleSave}
     />
)}
</div>
<div>
{filterBeefLambProducts.length > 0 && (
    <ProductsPage
    products={filterBeefLambProducts}
    categoryTitle={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ verticalAlign: 'middle' }}>בשר בקר וכבש</span>
        <img 
          src={importImage('beef_lamb.png')} 
          alt="" 
          style={{ width: '50px', height: '50px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
        />
      </div>
    }
    icon={null}
    onIncrement={handleIncrement}
    onDecrement={handleDecrement}
    onSave={handleSave}
    />
)}
</div>
<div>

{filterFrozenBeefChickenProducts.length > 0 && (
    <ProductsPage
    products={filterFrozenBeefChickenProducts}
    categoryTitle={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ verticalAlign: 'middle' }}>בשר בקר ועוף קפוא</span>
        <img 
          src={importImage('frozen_beef_chicken.png')} 
          alt="" 
          style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
        />
      </div>
    }
    icon={null}
    onIncrement={handleIncrement}
    onDecrement={handleDecrement}
    onSave={handleSave}
    />
)}
</div>
<div>

{filterSausageProducts.length > 0 && (
      <ProductsPage
      products={filterSausageProducts}
      categoryTitle={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ verticalAlign: 'middle' }}>נקניקיות</span>
          <img 
            src={importImage('sausage.png')} 
            alt="" 
            style={{ width: '60px', height: '40px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
          />
        </div>
      }
      icon={null}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
      />
)}
</div>
<div>

{filterFreshFishProducts.length > 0 && (
       <ProductsPage
       products={filterFreshFishProducts}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>דגים טריים</span>
           <img 
             src={importImage('fresh_fish.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
       />
)}
</div>
<div>

{filterFrozenFishProducts.length > 0 && (
        <ProductsPage
        products={filterFrozenFishProducts}
        categoryTitle={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ verticalAlign: 'middle' }}>דגים קפואים</span>
            <img 
              src={importImage('frozen_fish.png')} 
              alt="" 
              style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle', borderRadius: '20%' }} 
            />
          </div>
        }
        icon={null}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
        />
)}
</div>

  </div>
  );
};

export default MeatFish;