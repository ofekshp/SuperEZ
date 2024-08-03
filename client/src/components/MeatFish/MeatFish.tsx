import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/MeatFish/${imageName}`);
  } catch (error) {
    return null;
  }
};

const MeatFish: React.FC = () => {
  const { addProduct } = useBasket();

  const initialChickenproducts = [

    {
      name: "כנפיים עוף",
      image: importImage("chicken_wings_cleaned.jpeg"),
    },
    {
      name: "עוף שלם טרי",
      image: importImage("whole_chicken.jpeg"),
    },
    {
      name: "שניצל עוף פרוס טרי",
      image: importImage("thin_chicken_schnitzel.jpeg"),
    },
    {
      name: "טחול עוף טרי",
      image: importImage("chicken_spleen.jpeg"),
    },
    {
      name: "לבבות עוף טרי",
      image: importImage("chicken_hearts.jpeg"),
    },
    {
      name: "כבד עוף טרי",
      image: importImage("chicken_liver.jpeg"),
    },
    {
      name: "שוקיים עוף טרי",
      image: importImage("chicken_drums.jpeg"),
    },
    {
      name: "ירכיים עוף טרי",
      image: importImage("chicken_thighs.jpeg"),
    },
    {
      name: "כרעיים עוף טרי",
      image: importImage("chicken_legs.jpeg"),
    },
    {
      name: "עוף טרי מפורק",
      image: importImage("chicken_pieces.jpeg"),
    },
    {
      name: "חזה עוף טרי",
      image: importImage("chicken_breast_cleaned.jpeg"),
    },
    {
      name: "קוביות פרגיות טרי",
      image: importImage("chicken_thigh_cubes.jpeg"),
    },
    {
      name: "גב עוף טרי",
      image: importImage("chicken_back.jpeg"),
    },
    {
      name: "סטייק פרגיות טרי",
      image: importImage("chicken_thigh_steak.jpeg"),
    },
    {
      name: "קוביות חזה עוף טרי",
      image: importImage("chicken_breast_cubes.jpeg"),
    },
    {
      name: "פילה עוף טרי",
      image: importImage("chicken_fillet.jpeg"),
    },
    {
      name: "גרון עוף טרי",
      image: importImage("chicken_neck.jpeg"),
    },
    {
      name: "קורקבן עוף טרי",
      image: importImage("chicken_gizzard.jpeg"),
    },
    {
      name: "פרגיות עוף שלם טרי",
      image: importImage("whole_chicken_thigh.jpeg"),
    },
  ];
  initialChickenproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialIndiaproducts = [
    {
      name: "לבבות הודו טרי",
      image: importImage("turkey_hearts_fresh.jpeg"),
    },
    {
      name: "שוקיים הודו טרי",
      image: importImage("turkey_drums_fresh.jpeg"),
    },
    {
      name: "כנפיים הודו טרי",
      image: importImage("turkey_wings_fresh.jpeg"),
    },
    {
      name: "חזה הודו טרי",
      image: importImage("turkey_breast_fresh.jpeg"),
    },
    {
      name: "שניצל הודו פרוס טרי",
      image: importImage("turkey_schnitzel_fresh.jpeg"),
    },
    {
      name: "שווארמה הודו קוביות/רצועות טרי",
      image: importImage("turkey_shawarma_fresh.jpeg"),
    },
    {
      name: "ירך הודו טרי",
      image: importImage("turkey_thigh_fresh.jpeg"),
    },
    {
      name: "גרון הודו טרי",
      image: importImage("turkey_neck_fresh.jpeg"),
    },
    {
      name: "קורקבן הודו טרי",
      image: importImage("turkey_gizzard_fresh.jpeg"),
    },
    {
      name: "כבד הודו טרי",
      image: importImage("turkey_liver_fresh.jpeg"),
    },
    {
      name: "בשר הודו אדום טרי",
      image: importImage("turkey_red_meat_fresh.jpeg"),
    },
    {
      name: "שווארמה הודו טרי",
      image: importImage("turkey_shawarma_fresh_2.jpeg"),
    },
  ];
  initialIndiaproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialBeeflamb = [
    {
      name: "אנטריקוט טרי",
      image: importImage("fresh_entrecote.jpeg"),
    },
    {
      name: "שקדי עגל טרי",
      image: importImage("fresh_calf_sweetbreads.jpeg"),
    },
    {
      name: "סטייק דנבר טרי",
      image: importImage("fresh_denver_steak.jpeg"),
    },
    {
      name: "סטייק טומהוק עם עצם טרי",
      image: importImage("fresh_tomahawk_steak_with_bone.jpeg"),
    },
    {
      name: "סטייק אנטריקוט עם עצם",
      image: importImage("fresh_entrecote_steak_with_bone.jpeg"),
    },
    {
      name: "רוטפלש טרי (נתח קצבים)",
      image: importImage("fresh_butcher_cut_roastbeef.jpeg"),
    },
    {
      name: "אסאדו עם עצם טרי",
      image: importImage("fresh_rib_with_bone_asado.jpeg"),
    },
    {
      name: "אוסובוקו עגל טרי",
      image: importImage("fresh_calf_osso_bucco.jpeg"),
    },
    {
      name: "בקר טחון טרי",
      image: importImage("fresh_ground_beef.jpeg"),
    },
    {
      name: "בקר טחון טרי עם כבש",
      image: importImage("fresh_ground_beef_with_lamb.jpeg"),
    },
    {
      name: "צלי כתף טרי",
      image: importImage("fresh_shoulder_roast.jpeg"),
    },
    {
      name: "בשר צלעות טרי",
      image: importImage("fresh_rib_meat.jpeg"),
    },
    {
      name: "בשר ראש טרי",
      image: importImage("fresh_head_meat.jpeg"),
    },
    {
      name: "בשר שריר טרי",
      image: importImage("fresh_shank_meat.jpeg"),
    },
    {
      name: "חזה בקר פרוס עם עצם טרי",
      image: importImage("fresh_sliced_beef_breast_with_bone.jpeg"),
    },
    {
      name: "סינטה טרי",
      image: importImage("fresh_sirloin.jpeg"),
    },
    {
      name: "עצמות בקר טרי",
      image: importImage("fresh_beef_bones.jpeg"),
    },
    {
      name: "עצמות מח טרי",
      image: importImage("fresh_marrow_bones.jpeg"),
    },
    {
      name: "פילה מדומה טרי",
      image: importImage("fresh_mock_fillet.jpeg"),
    },
    {
      name: "צוואר טרי",
      image: importImage("fresh_neck_meat.jpeg"),
    },
    {
      name: "גולאש עגל טרי",
      image: importImage("fresh_calf_goulash.jpeg"),
    },
    {
      name: "זנב עגל טרי",
      image: importImage("fresh_calf_tail.jpeg"),
    },
    {
      name: "בשר כתף עגל טרי",
      image: importImage("fresh_calf_shoulder_meat.jpeg"),
    },
    {
      name: "כבד עגל טרי",
      image: importImage("fresh_calf_liver.jpeg"),
    },
    {
      name: "לב עגל טרי",
      image: importImage("fresh_calf_heart.jpeg"),
    },
    {
      name: "פילה עגל טרי",
      image: importImage("fresh_calf_fillet.jpeg"),
    },
    {
      name: "ריאות עגל טרי",
      image: importImage("fresh_calf_lungs.jpeg"),
    },
    {
      name: "שייטל עגל טרי",
      image: importImage("fresh_calf_shank.jpeg"),
    },
    {
      name: "לשון עגל טרי",
      image: importImage("fresh_calf_tongue.jpeg"),
    },
    {
      name: "מוח עגל טרי",
      image: importImage("fresh_calf_brain.jpeg"),
    },
    {
      name: "חזה כבש טרי",
      image: importImage("fresh_lamb_breast.jpeg"),
    },
    {
      name: "כתף טלה טרי",
      image: importImage("fresh_lamb_shoulder.jpeg"),
    },
    {
      name: "צוואר כבש טרי",
      image: importImage("fresh_lamb_neck.jpeg"),
    },
    {
      name: "צלעות כבש טרי",
      image: importImage("fresh_lamb_chops.jpeg"),
    },
    {
      name: "שומן כבש טרי",
      image: importImage("fresh_lamb_fat.jpeg"),
    },
    {
      name: "אסאדו בלי עצם טרי",
      image: importImage("fresh_boneless_asado.jpeg"),
    },
  ];
  initialBeeflamb.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialFrozenbeefchicken = [
    {
      name: "עוף טחון קפוא",
      image: importImage("frozen_ground_chicken.jpeg"),
    },
    {
      name: "בשר בקר טחון קפוא",
      image: importImage("frozen_ground_beef.jpeg"),
    },
    {
      name: "סטייק אנטריקוט דק דק קפוא",
      image: importImage("frozen_thin_ribeye_steak.jpeg"),
    },
    {
      name: "אצבעות אנטריקוט קפוא",
      image: importImage("frozen_ribeye_fingers.jpeg"),
    },
    {
      name: "קבב כבש קפוא",
      image: importImage("frozen_lamb_kebab.jpeg"),
    },
    {
      name: "קבב מזרחי קפוא",
      image: importImage("frozen_eastern_kebab.jpeg"),
    },
    {
      name: "קבב רומני קפוא",
      image: importImage("frozen_romanian_kebab.jpeg"),
    },
    {
      name: "בורגר בקר קפוא",
      image: importImage("frozen_beef_burger.jpeg"),
    },
    {
      name: "סטייק בורגר קפוא",
      image: importImage("frozen_premium_burger.jpeg"),
    },
    {
      name: "בורגר עוף קפוא",
      image: importImage("frozen_chicken_burger.jpeg"),
    },
    {
      name: "אנטריקוט בורגר מנתח מובחר קפוא",
      image: importImage("frozen_ribeye_burger.jpeg"),
    },
    {
      name: "שוקיים עוף קפוא ארוז",
      image: importImage("frozen_packed_chicken_drumsticks.jpeg"),
    },
    {
      name: "שניצל בקר קפוא ארוז",
      image: importImage("frozen_packed_beef_schnitzel.jpeg"),
    },
    {
      name: "סטייק פרגיות קפוא ארוז",
      image: importImage("frozen_packed_chicken_steak.jpeg"),
    },
    {
      name: "שיפודי פרגיות קפוא ארוז",
      image: importImage("frozen_packed_chicken_skewers.jpeg"),
    },
    {
      name: "סטייק עוף ארוז קפוא",
      image: importImage("frozen_packed_chicken_steak.jpeg"),
    },
    {
      name: "כנפיים עוף קפוא ארוז",
      image: importImage("frozen_packed_chicken_wings.jpeg"),
    },
    {
      name: "סטייק עין קפוא",
      image: importImage("frozen_ribeye_steak.jpeg"),
    },
    {
      name: "נקניקיות מרגז קפוא",
      image: importImage("frozen_merguez_sausages.jpeg"),
    },
    {
      name: "נקניקיות צ'וריסוס קפוא",
      image: importImage("frozen_chorizo_sausages.jpeg"),
    },
    {
      name: "נקניקיות מיני מרגז קפוא",
      image: importImage("frozen_mini_merguez_sausages.jpeg"),
    },
    {
      name: "שווארמה הודו קפוא",
      image: importImage("frozen_seasoned_turkey_shawarma.jpeg"),
    },
    {
      name: "בשר ראש קפוא ארוז",
      image: importImage("frozen_packed_head_meat.jpeg"),
    },
    {
      name: "גרון עוף ארוז קפוא",
      image: importImage("frozen_packed_chicken_neck.jpeg"),
    },
    {
      name: "עצמות עגל קפוא ארוז",
      image: importImage("frozen_packed_calf_bones.jpeg"),
    },
    {
      name: "קורנדביף קפוא ארוז",
      image: importImage("frozen_packed_corned_beef.jpeg"),
    },
    {
      name: "שווארמה פרגיות קפוא",
      image: importImage("frozen_shawarma_poultry_tnuva_chef_plancha.jpeg"),
    },
    {
      name: "שווארמה ריב אנטריקוט קפוא",
      image: importImage("frozen_ribeye_shawarma_tnuva_chef_plancha.jpeg"),
    },
  ];
  initialFrozenbeefchicken.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialFreshfish = [
    {
      name: "דג אמנון טרי",
      image: importImage("fresh_tilapia.jpeg"),
    },
    {
      name: "דג בורי טרי",
      image: importImage("fresh_large_mullet.jpeg"),
    },
    {
      name: "דג בס טרי",
      image: importImage("fresh_bass.jpeg"),
    },
    {
      name: "דג ברמונדי טרי",
      image: importImage("fresh_barramundi.jpeg"),
    },
    {
      name: "דג דניס טרי",
      image: importImage("fresh_seabream.jpeg"),
    },
    {
      name: "דג לברק טרי",
      image: importImage("fresh_seabass.jpeg"),
    },
    {
      name: "דג קרפיון טרי",
      image: importImage("fresh_carp.jpeg"),
    },
    {
      name: "סטייק סלמון טרי",
      image: importImage("fresh_salmon_steak.jpeg"),
    },
    {
      name: "פילה סלמון שלם טרי",
      image: importImage("fresh_salmon_fillet_no_skin.jpeg"),
    },
  ];
  initialFreshfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialFrozenfish = [
    {
      name: "פילה סול קפוא",
      image: importImage("filet_sole.jpeg"),
    },
    {
      name: "פילה אמנון קפוא",
      image: importImage("frozen_tilapia_with_skin.jpeg"),
    },
    {
      name: "פילה לברק קפוא",
      image: importImage("frozen_japanese_seabass_ice_glazed.jpeg"),
    },
    {
      name: "פילה סלמון קפוא",
      image: importImage("frozen_norwegian_salmon_fillet.jpeg"),
    },
    {
      name: "פילה נסיכת הנילוס קפוא",
      image: importImage("sliced_nile_perch_fillet_goldag.jpeg"),
    },
    {
      name: "דג הליבוט קפוא",
      image: importImage("halibut_sliced_tray.jpeg"),
    },
    {
      name: "דגי מקרל קפוא",
      image: importImage("mackerel_fish.jpeg"),
    },
  ];
  initialFrozenfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [chickenproducts, setChickenProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialChickenproducts.map(item => ({ ...item, count: 0 }))
  );
  const [indiaProducts, setIndiaProducts] = useState(
    initialIndiaproducts.map(item => ({ ...item, count: 0 }))
  );
  
  const [beefLambProducts, setBeefLambProducts] = useState(
    initialBeeflamb.map(item => ({ ...item, count: 0 }))
  );
  
  const [frozenBeefChickenProducts, setFrozenBeefChickenProducts] = useState(
    initialFrozenbeefchicken.map(item => ({ ...item, count: 0 }))
  );
  
  const [freshFishProducts, setFreshFishProducts] = useState(
    initialFreshfish.map(item => ({ ...item, count: 0 }))
  );
  
  const [frozenFishProducts, setFrozenFishProducts] = useState(
    initialFrozenfish.map(item => ({ ...item, count: 0 }))
  );

  const handleIncrement = (name: string) => {
    setChickenProducts(chickenproducts.map(item =>   item.name === name ? { ...item, count: item.count + 1 } : item ));
    setIndiaProducts(indiaProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setBeefLambProducts(beefLambProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFreshFishProducts(freshFishProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
    setFrozenFishProducts(frozenFishProducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item ));
  };

  const handleDecrement = (name: string) => {
    setChickenProducts(chickenproducts.map(item =>  item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
    setIndiaProducts(indiaProducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
    setBeefLambProducts(beefLambProducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
    setFreshFishProducts(freshFishProducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
    setFrozenFishProducts(frozenFishProducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count- 1 } : item ));
  };

  const handleSave = async () => {
    const chickenToSave = chickenproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const indiaToSave = indiaProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const beefLambToSave = beefLambProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const frozenBeefChickenToSave = frozenBeefChickenProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const freshFishToSave = freshFishProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const frozenFishToSave = frozenFishProducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const allItems = [...chickenToSave, ...indiaToSave, ...beefLambToSave, ...frozenBeefChickenToSave, ...freshFishToSave, ...frozenFishToSave];
    allItems.forEach(item => addProduct(item));

    setChickenProducts(chickenproducts.map(item => ({ ...item, count: 0 })));
    setIndiaProducts(indiaProducts.map(item => ({ ...item, count: 0 })));
    setBeefLambProducts(beefLambProducts.map(item => ({ ...item, count: 0 })));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(item => ({ ...item, count: 0 })));
    setFreshFishProducts(freshFishProducts.map(item => ({ ...item, count: 0 })));
    setFrozenFishProducts(frozenFishProducts.map(item => ({ ...item, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage   
          products={chickenproducts}
          categoryTitle="מוצרי עוף"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={indiaProducts}
          categoryTitle="מוצרי הודו"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
    </div>
    <div>
      <ProductsPage
        products={beefLambProducts}
        categoryTitle="בשר בקר וכבש"
        icon={<img alt="" src={importImage('')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
    </div>
    <div>
      <ProductsPage
        products={frozenBeefChickenProducts}
        categoryTitle="בשר בקר ועוף קפוא"
        icon={<img alt="" src={importImage('')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
    </div>
    <div>
      <ProductsPage
        products={freshFishProducts}
        categoryTitle="דגים טריים"
        icon={<img alt="" src={importImage('')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
    </div>
    <div>
      <ProductsPage
        products={frozenFishProducts}
        categoryTitle="דגים קפואים"
        icon={<img alt="" src={importImage('')} />}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSave={handleSave}
      />
    </div>
  </div>
  );
};

export default MeatFish;