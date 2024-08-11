import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
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

  const initialSausage = [
    {
      name: "נקניקיות עוף והודו",
      image: importImage("turkey_chicken_sausage_oftov.jpeg"),
    },
    {
      name: "נקניקיות עוף",
      image: importImage("chicken_sausage_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות פרגית",
      image: importImage("pargit_sausage_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות חריפות",
      image: importImage("spicy_sausage_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות וינר",
      image: importImage("wiener_sausage_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות עוף 1 ק\"ג",
      image: importImage("chicken_sausage_1kg_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות וינר 1 ק\"ג",
      image: importImage("wiener_sausage_1kg_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות ביס",
      image: importImage("bite_sized_sausage_yachiam.jpeg"),
    },
    {
      name: "נקניקיות וינר ללא חומרים משמרים",
      image: importImage("preservative_free_wiener_sausage_yachiam.jpeg"),
    },
    {
      name: "נקניקיות צ'ופר",
      image: importImage("choper_sausage_yachiam.jpeg"),
    },
    {
      name: "נקניקיות עוף 1.5 ק\"ג",
      image: importImage("jumbo_chicken_sausage_1.5kg_zoglowek.jpeg"),
    },
    {
      name: "נקניקיות עוף ובקר",
      image: importImage("bockwurst_chicken_beef_sausage_zoglowek.jpeg"),
    },
    {
      name: "צ'וריסו",
      image: importImage("chorizo_sausage_premium_zoglowek.jpeg"),
    },
    {
      name: "קנקרס",
      image: importImage("knackers_turkey_chicken_sausage_zoglowek.jpeg"),
    },
  ];


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

  initialChickenproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialIndiaproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialBeeflamb.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenbeefchicken.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSausage.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFreshfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));



  const [chickenproducts, setChickenProducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialChickenproducts.map(chickenproducts => ({ ...chickenproducts, count: 0 }))
  );
  const [indiaProducts, setIndiaProducts] = useState(
    initialIndiaproducts.map(indiaProducts => ({ ...indiaProducts, count: 0 }))
  );
  
  const [beefLambProducts, setBeefLambProducts] = useState(
    initialBeeflamb.map(beefLambProducts => ({ ...beefLambProducts, count: 0 }))
  );
  
  const [frozenBeefChickenProducts, setFrozenBeefChickenProducts] = useState(
    initialFrozenbeefchicken.map(frozenBeefChickenProducts => ({ ...frozenBeefChickenProducts, count: 0 }))
  );

  const [sausageProducts, setsausageProducts] = useState(
    initialSausage.map(sausageProducts => ({ ...sausageProducts, count: 0 }))
  );
  
  const [freshFishProducts, setFreshFishProducts] = useState(
    initialFreshfish.map(freshFishProducts => ({ ...freshFishProducts, count: 0 }))
  );
  
  const [frozenFishProducts, setFrozenFishProducts] = useState(
    initialFrozenfish.map(frozenFishProducts => ({ ...frozenFishProducts, count: 0 }))
  );


  const handleIncrement = (name: string) => {
    setChickenProducts(chickenproducts.map(chickenproducts =>   chickenproducts.name === name ? { ...chickenproducts, count: chickenproducts.count + 1 } : chickenproducts ));
    setIndiaProducts(indiaProducts.map(indiaProducts => indiaProducts.name === name ? { ...indiaProducts, count: indiaProducts.count + 1 } : indiaProducts ));
    setBeefLambProducts(beefLambProducts.map(beefLambProducts => beefLambProducts.name === name ? { ...beefLambProducts, count: beefLambProducts.count + 1 } : beefLambProducts ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(frozenBeefChickenProducts => frozenBeefChickenProducts.name === name ? { ...frozenBeefChickenProducts, count: frozenBeefChickenProducts.count + 1 } : frozenBeefChickenProducts ));
    setsausageProducts(sausageProducts.map(sausageProducts => sausageProducts.name === name ? { ...sausageProducts, count: sausageProducts.count + 1 } : sausageProducts ));
    setFreshFishProducts(freshFishProducts.map(freshFishProducts => freshFishProducts.name === name ? { ...freshFishProducts, count: freshFishProducts.count + 1 } : freshFishProducts ));
    setFrozenFishProducts(frozenFishProducts.map(frozenFishProducts => frozenFishProducts.name === name ? { ...frozenFishProducts, count: frozenFishProducts.count + 1 } : frozenFishProducts ));
  };

  const handleDecrement = (name: string) => {
    setChickenProducts(chickenproducts.map(chickenproducts =>  chickenproducts.name === name && chickenproducts.count > 0 ? { ...chickenproducts, count: chickenproducts.count - 1 } : chickenproducts ));
    setIndiaProducts(indiaProducts.map(indiaProducts => indiaProducts.name === name && indiaProducts.count > 0 ? { ...indiaProducts, count: indiaProducts.count - 1 } : indiaProducts ));
    setBeefLambProducts(beefLambProducts.map(beefLambProducts => beefLambProducts.name === name && beefLambProducts.count > 0 ? { ...beefLambProducts, count: beefLambProducts.count - 1 } : beefLambProducts ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(frozenBeefChickenProducts => frozenBeefChickenProducts.name === name && frozenBeefChickenProducts.count > 0 ? { ...frozenBeefChickenProducts, count: frozenBeefChickenProducts.count - 1 } : frozenBeefChickenProducts ));
    setsausageProducts(sausageProducts.map(sausageProducts => sausageProducts.name === name && sausageProducts.count > 0 ? { ...sausageProducts, count: sausageProducts.count- 1 } : sausageProducts ));
    setFreshFishProducts(freshFishProducts.map(freshFishProducts => freshFishProducts.name === name && freshFishProducts.count > 0 ? { ...freshFishProducts, count: freshFishProducts.count - 1 } : freshFishProducts ));
    setFrozenFishProducts(frozenFishProducts.map(frozenFishProducts => frozenFishProducts.name === name && frozenFishProducts.count > 0 ? { ...frozenFishProducts, count: frozenFishProducts.count- 1 } : frozenFishProducts ));
  };

  const handleSave = async () => {
    const chickenToSave = chickenproducts.filter(chickenproducts => chickenproducts.count > 0).map(chickenproducts => ({ ...chickenproducts, quantity: chickenproducts.count }));
    const indiaToSave = indiaProducts.filter(indiaProducts => indiaProducts.count > 0).map(indiaProducts => ({ ...indiaProducts, quantity: indiaProducts.count }));
    const beefLambToSave = beefLambProducts.filter(beefLambProducts => beefLambProducts.count > 0).map(beefLambProducts => ({ ...beefLambProducts, quantity: beefLambProducts.count }));
    const frozenBeefChickenToSave = frozenBeefChickenProducts.filter(frozenBeefChickenProducts => frozenBeefChickenProducts.count > 0).map(frozenBeefChickenProducts => ({ ...frozenBeefChickenProducts, quantity: frozenBeefChickenProducts.count }));
    const sausageToSave = sausageProducts.filter(sausageProducts => sausageProducts.count > 0).map(sausageProducts => ({ ...sausageProducts, quantity: sausageProducts.count }));
    const freshFishToSave = freshFishProducts.filter(freshFishProducts => freshFishProducts.count > 0).map(freshFishProducts => ({ ...freshFishProducts, quantity: freshFishProducts.count }));
    const frozenFishToSave = frozenFishProducts.filter(frozenFishProducts => frozenFishProducts.count > 0).map(frozenFishProducts => ({ ...frozenFishProducts, quantity: frozenFishProducts.count }));
    const allMeatFish = [...chickenToSave, ...indiaToSave, ...beefLambToSave, ...frozenBeefChickenToSave,...sausageToSave, ...freshFishToSave, ...frozenFishToSave];
    allMeatFish.forEach(MeatFish => addProduct(MeatFish));

    setChickenProducts(chickenproducts.map(chickenproducts => ({ ...chickenproducts, count: 0 })));
    setIndiaProducts(indiaProducts.map(indiaProducts => ({ ...indiaProducts, count: 0 })));
    setBeefLambProducts(beefLambProducts.map(beefLambProducts => ({ ...beefLambProducts, count: 0 })));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(frozenBeefChickenProducts => ({ ...frozenBeefChickenProducts, count: 0 })));
    setsausageProducts(sausageProducts.map(sausageProducts => ({ ...sausageProducts, count: 0 })));
    setFreshFishProducts(freshFishProducts.map(freshFishProducts => ({ ...freshFishProducts, count: 0 })));
    setFrozenFishProducts(frozenFishProducts.map(frozenFishProducts => ({ ...frozenFishProducts, count: 0 })));
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
        products={sausageProducts}
        categoryTitle="נקניקיות"
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