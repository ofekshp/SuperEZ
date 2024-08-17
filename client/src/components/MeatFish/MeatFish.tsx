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
    { name: (<>כנפיים עוף<br />1 קילו</>), image: importImage("chicken_wings_cleaned.jpeg"), id: 6 },
    { name: (<>עוף שלם טרי<br />1 קילו</>), image: importImage("whole_chicken.jpeg"), id: 6 },
    { name: (<>שניצל עוף פרוס טרי<br />1 קילו</>), image: importImage("thin_chicken_schnitzel.jpeg"), id: 6 },
    { name: (<>טחול עוף טרי<br />1 קילו</>), image: importImage("chicken_spleen.jpeg"), id: 6 },
    { name: (<>לבבות עוף טרי<br />1 קילו</>), image: importImage("chicken_hearts.jpeg"), id: 6 },
    { name: (<>כבד עוף טרי<br />1 קילו</>), image: importImage("chicken_liver.jpeg"), id: 6 },
    { name: (<>שוקיים עוף טרי<br />1 קילו</>), image: importImage("chicken_drums.jpeg"), id: 6 },
    { name: (<>ירכיים עוף טרי<br />1 קילו</>), image: importImage("chicken_thighs.jpeg"), id: 6 },
    { name: (<>כרעיים עוף טרי<br />1 קילו</>), image: importImage("chicken_legs.jpeg"), id: 6 },
    { name: (<>עוף טרי מפורק<br />1 קילו</>), image: importImage("chicken_pieces.jpeg"), id: 6 },
    { name: (<>חזה עוף טרי<br />1 קילו</>), image: importImage("chicken_breast_cleaned.jpeg"), id: 6 },
    { name: (<>קוביות פרגיות טרי<br />1 קילו</>), image: importImage("chicken_thigh_cubes.jpeg"), id: 6 },
    { name: (<>גב עוף טרי<br />1 קילו</>), image: importImage("chicken_back.jpeg"), id: 6 },
    { name: (<>סטייק פרגיות טרי<br />1 קילו</>), image: importImage("chicken_thigh_steak.jpeg"), id: 6 },
    { name: (<>קוביות חזה עוף טרי<br />1 קילו</>), image: importImage("chicken_breast_cubes.jpeg"), id: 6 },
    { name: (<>פילה עוף טרי<br />1 קילו</>), image: importImage("chicken_fillet.jpeg"), id: 6 },
    { name: (<>גרון עוף טרי<br />1 קילו</>), image: importImage("chicken_neck.jpeg"), id: 6 },
    { name: (<>קורקבן עוף טרי<br />1 קילו</>), image: importImage("chicken_gizzard.jpeg"), id: 6 },
    { name: (<>פרגיות עוף שלם טרי<br />1 קילו</>), image: importImage("whole_chicken_thigh.jpeg"), id: 6 },
  ];

  const initialIndiaproducts = [
    { name: (<>לבבות הודו טרי<br />1 קילו</>), image: importImage("turkey_hearts_fresh.jpeg"), id: 6 },
    { name: (<>שוקיים הודו טרי<br />1 קילו</>), image: importImage("turkey_drums_fresh.jpeg"), id: 6 },
    { name: (<>כנפיים הודו טרי<br />1 קילו</>), image: importImage("turkey_wings_fresh.jpeg"), id: 6 },
    { name: (<>חזה הודו טרי<br />1 קילו</>), image: importImage("turkey_breast_fresh.jpeg"), id: 6 },
    { name: (<>שניצל הודו פרוס טרי<br />1 קילו</>), image: importImage("turkey_schnitzel_fresh.jpeg"), id: 6 },
    { name: (<>שווארמה הודו קוביות/רצועות טרי<br />1 קילו</>), image: importImage("turkey_shawarma_fresh.jpeg"), id: 6 },
    { name: (<>ירך הודו טרי<br />1 קילו</>), image: importImage("turkey_thigh_fresh.jpeg"), id: 6 },
    { name: (<>גרון הודו טרי<br />1 קילו</>), image: importImage("turkey_neck_fresh.jpeg"), id: 6 },
    { name: (<>קורקבן הודו טרי<br />1 קילו</>), image: importImage("turkey_gizzard_fresh.jpeg"), id: 6 },
    { name: (<>כבד הודו טרי<br />1 קילו</>), image: importImage("turkey_liver_fresh.jpeg"), id: 6 },
    { name: (<>בשר הודו אדום טרי<br />1 קילו</>), image: importImage("turkey_red_meat_fresh.jpeg"), id: 6 },
    { name: (<>שווארמה הודו טרי<br />1 קילו</>), image: importImage("turkey_shawarma_fresh_2.jpeg"), id: 6 },
  ];

  const initialBeeflamb = [
    { name: (<>אנטריקוט טרי<br />1 קילו</>), image: importImage("fresh_entrecote.jpeg"), id: 6 },
    { name: (<>שקדי עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_sweetbreads.jpeg"), id: 6 },
    { name: (<>סטייק דנבר טרי<br />1 קילו</>), image: importImage("fresh_denver_steak.jpeg"), id: 6 },
    { name: (<>סטייק טומהוק עם עצם טרי<br />1 קילו</>), image: importImage("fresh_tomahawk_steak_with_bone.jpeg"), id: 6 },
    { name: (<>סטייק אנטריקוט עם עצם<br />1 קילו</>), image: importImage("fresh_entrecote_steak_with_bone.jpeg"), id: 6 },
    { name: (<>רוטפלש טרי (נתח קצבים)<br />1 קילו</>), image: importImage("fresh_butcher_cut_roastbeef.jpeg"), id: 6 },
    { name: (<>אסאדו עם עצם טרי<br />1 קילו</>), image: importImage("fresh_rib_with_bone_asado.jpeg"), id: 6 },
    { name: (<>אוסובוקו עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_osso_bucco.jpeg"), id: 6 },
    { name: (<>בקר טחון טרי<br />1 קילו</>), image: importImage("fresh_ground_beef.jpeg"), id: 6 },
    { name: (<>בקר טחון טרי עם כבש<br />1 קילו</>), image: importImage("fresh_ground_beef_with_lamb.jpeg"), id: 6 },
    { name: (<>צלי כתף טרי<br />1 קילו</>), image: importImage("fresh_shoulder_roast.jpeg"), id: 6 },
    { name: (<>בשר צלעות טרי<br />1 קילו</>), image: importImage("fresh_rib_meat.jpeg"), id: 6 },
    { name: (<>בשר ראש טרי<br />1 קילו</>), image: importImage("fresh_head_meat.jpeg"), id: 6 },
    { name: (<>בשר שריר טרי<br />1 קילו</>), image: importImage("fresh_shank_meat.jpeg"), id: 6 },
    { name: (<>חזה בקר פרוס עם עצם טרי<br />1 קילו</>), image: importImage("fresh_sliced_beef_breast_with_bone.jpeg"), id: 6 },
    { name: (<>סינטה טרי<br />1 קילו</>), image: importImage("fresh_sirloin.jpeg"), id: 6 },
    { name: (<>עצמות בקר טרי<br />1 קילו</>), image: importImage("fresh_beef_bones.jpeg"), id: 6 },
    { name: (<>עצמות מח טרי<br />1 קילו</>), image: importImage("fresh_marrow_bones.jpeg"), id: 6 },
    { name: (<>פילה מדומה טרי<br />1 קילו</>), image: importImage("fresh_mock_fillet.jpeg"), id: 6 },
    { name: (<>צוואר טרי<br />1 קילו</>), image: importImage("fresh_neck_meat.jpeg"), id: 6 },
    { name: (<>גולאש עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_goulash.jpeg"), id: 6 },
    { name: (<>זנב עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_tail.jpeg"), id: 6 },
    { name: (<>בשר כתף עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_shoulder_meat.jpeg"), id: 6 },
    { name: (<>כבד עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_liver.jpeg"), id: 6 },
    { name: (<>לב עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_heart.jpeg"), id: 6 },
    { name: (<>פילה עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_fillet.jpeg"), id: 6 },
    { name: (<>ריאות עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_lungs.jpeg"), id: 6 },
    { name: (<>שייטל עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_shank.jpeg"), id: 6 },
    { name: (<>לשון עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_tongue.jpeg"), id: 6 },
    { name: (<>מוח עגל טרי<br />1 קילו</>), image: importImage("fresh_calf_brain.jpeg"), id: 6 },
    { name: (<>חזה כבש טרי<br />1 קילו</>), image: importImage("fresh_lamb_breast.jpeg"), id: 6 },
    { name: (<>כתף טלה טרי<br />1 קילו</>), image: importImage("fresh_lamb_shoulder.jpeg"), id: 6 },
    { name: (<>צוואר כבש טרי<br />1 קילו</>), image: importImage("fresh_lamb_neck.jpeg"), id: 6 },
    { name: (<>צלעות כבש טרי<br />1 קילו</>), image: importImage("fresh_lamb_chops.jpeg"), id: 6 },
    { name: (<>שומן כבש טרי<br />1 קילו</>), image: importImage("fresh_lamb_fat.jpeg"), id: 6 },
    { name: (<>אסאדו בלי עצם טרי<br />1 קילו</>), image: importImage("fresh_boneless_asado.jpeg"), id: 6 },
  ];

  const initialFrozenbeefchicken = [
    { name: (<>עוף טחון קפוא<br />ארוז</>), image: importImage("frozen_ground_chicken.jpeg"), id: 6 },
    { name: (<>בשר בקר טחון קפוא<br />ארוז</>), image: importImage("frozen_ground_beef.jpeg"), id: 6 },
    { name: (<>סטייק אנטריקוט דק דק קפוא<br />ארוז</>), image: importImage("frozen_thin_ribeye_steak.jpeg"), id: 6 },
    { name: (<>אצבעות אנטריקוט קפוא<br />ארוז</>), image: importImage("frozen_ribeye_fingers.jpeg"), id: 6 },
    { name: (<>קבב כבש קפוא<br />ארוז</>), image: importImage("frozen_lamb_kebab.jpeg"), id: 6 },
    { name: (<>קבב מזרחי קפוא<br />ארוז</>), image: importImage("frozen_eastern_kebab.jpeg"), id: 6 },
    { name: (<>קבב רומני קפוא<br />ארוז</>), image: importImage("frozen_romanian_kebab.jpeg"), id: 6 },
    { name: (<>בורגר בקר קפוא<br />ארוז</>), image: importImage("frozen_beef_burger.jpeg"), id: 6 },
    { name: (<>סטייק בורגר קפוא<br />ארוז</>), image: importImage("frozen_premium_burger.jpeg"), id: 6 },
    { name: (<>בורגר עוף קפוא<br />ארוז</>), image: importImage("frozen_chicken_burger.jpeg"), id: 6 },
    { name: (<>אנטריקוט בורגר מנתח מובחר קפוא<br />ארוז</>), image: importImage("frozen_ribeye_burger.jpeg"), id: 6 },
    { name: (<>שוקיים עוף קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_drumsticks.jpeg"), id: 6 },
    { name: (<>שניצל בקר קפוא<br />ארוז</>), image: importImage("frozen_packed_beef_schnitzel.jpeg"), id: 6 },
    { name: (<>סטייק פרגיות קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_steak.jpeg"), id: 6 },
    { name: (<>שיפודי פרגיות קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_skewers.jpeg"), id: 6 },
    { name: (<>סטייק עוף קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_steak.jpeg"), id: 6 },
    { name: (<>כנפיים עוף קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_wings.jpeg"), id: 6 },
    { name: (<>סטייק עין קפוא<br />ארוז</>), image: importImage("frozen_ribeye_steak.jpeg"), id: 6 },
    { name: (<>נקניקיות מרגז קפוא<br />ארוז</>), image: importImage("frozen_merguez_sausages.jpeg"), id: 6 },
    { name: (<>נקניקיות צ'וריסוס קפוא<br />ארוז</>), image: importImage("frozen_chorizo_sausages.jpeg"), id: 6 },
    { name: (<>נקניקיות מיני מרגז קפוא<br />ארוז</>), image: importImage("frozen_mini_merguez_sausages.jpeg"), id: 6 },
    { name: (<>שווארמה הודו קפוא<br />ארוז</>), image: importImage("frozen_seasoned_turkey_shawarma.jpeg"), id: 6 },
    { name: (<>בשר ראש קפוא<br />ארוז</>), image: importImage("frozen_packed_head_meat.jpeg"), id: 6 },
    { name: (<>גרון עוף קפוא<br />ארוז</>), image: importImage("frozen_packed_chicken_neck.jpeg"), id: 6 },
    { name: (<>עצמות עגל קפוא<br />ארוז</>), image: importImage("frozen_packed_calf_bones.jpeg"), id: 6 },
    { name: (<>קורנדביף קפוא<br />ארוז</>), image: importImage("frozen_packed_corned_beef.jpeg"), id: 6 },
    { name: (<>שווארמה פרגיות קפוא<br />ארוז</>), image: importImage("frozen_shawarma_poultry_tnuva_chef_plancha.jpeg"), id: 6 },
    { name: (<>שווארמה ריב אנטריקוט קפוא<br />ארוז</>), image: importImage("frozen_ribeye_shawarma_tnuva_chef_plancha.jpeg"), id: 6 },  
  ];

  const initialSausage = [
    { name: (<>נקניקיות עוף והודו<br />ארוז</>), image: importImage("turkey_chicken_sausage_oftov.jpeg"), id: 6 },
    { name: (<>נקניקיות עוף<br />ארוז</>), image: importImage("chicken_sausage_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות פרגית<br />ארוז</>), image: importImage("pargit_sausage_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות חריפות<br />ארוז</>), image: importImage("spicy_sausage_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות וינר<br />ארוז</>), image: importImage("wiener_sausage_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות עוף 1 ק"ג<br />ארוז</>), image: importImage("chicken_sausage_1kg_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות וינר 1 ק"ג<br />ארוז</>), image: importImage("wiener_sausage_1kg_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות ביס<br />ארוז</>), image: importImage("bite_sized_sausage_yachiam.jpeg"), id: 6 },
    { name: (<>נקניקיות וינר ללא חומרים משמרים<br />ארוז</>), image: importImage("preservative_free_wiener_sausage_yachiam.jpeg"), id: 6 },
    { name: (<>נקניקיות צ'ופר<br />ארוז</>), image: importImage("choper_sausage_yachiam.jpeg"), id: 6 },
    { name: (<>נקניקיות עוף 1.5 ק"ג<br />ארוז</>), image: importImage("jumbo_chicken_sausage_1.5kg_zoglowek.jpeg"), id: 6 },
    { name: (<>נקניקיות עוף ובקר<br />ארוז</>), image: importImage("bockwurst_chicken_beef_sausage_zoglowek.jpeg"), id: 6 },
    { name: (<>צ'וריסו<br />ארוז</>), image: importImage("chorizo_sausage_premium_zoglowek.jpeg"), id: 6 },
    { name: (<>קנקרס<br />ארוז</>), image: importImage("knackers_turkey_chicken_sausage_zoglowek.jpeg"), id: 6 },
  ];

  const initialFreshfish = [
    { name: (<>דג אמנון טרי<br />1 קילו</>), image: importImage("fresh_tilapia.jpeg"), id: 6 },
  { name: (<>דג בורי טרי<br />1 קילו</>), image: importImage("fresh_large_mullet.jpeg"), id: 6 },
  { name: (<>דג בס טרי<br />1 קילו</>), image: importImage("fresh_bass.jpeg"), id: 6 },
  { name: (<>דג ברמונדי טרי<br />1 קילו</>), image: importImage("fresh_barramundi.jpeg"), id: 6 },
  { name: (<>דג דניס טרי<br />1 קילו</>), image: importImage("fresh_seabream.jpeg"), id: 6 },
  { name: (<>דג לברק טרי<br />1 קילו</>), image: importImage("fresh_seabass.jpeg"), id: 6 },
  { name: (<>דג קרפיון טרי<br />1 קילו</>), image: importImage("fresh_carp.jpeg"), id: 6 },
  { name: (<>סטייק סלמון טרי<br />1 קילו</>), image: importImage("fresh_salmon_steak.jpeg"), id: 6 },
  { name: (<>פילה סלמון שלם טרי<br />1 קילו</>), image: importImage("fresh_salmon_fillet_no_skin.jpeg"), id: 6 },
  ];
  
  const initialFrozenfish = [
    { name: (<>פילה סול קפוא<br />ארוז</>), image: importImage("filet_sole.jpeg"), id: 6 },
    { name: (<>פילה אמנון קפוא<br />ארוז</>), image: importImage("frozen_tilapia_with_skin.jpeg"), id: 6 },
    { name: (<>פילה לברק קפוא<br />ארוז</>), image: importImage("frozen_japanese_seabass_ice_glazed.jpeg"), id: 6 },
    { name: (<>פילה סלמון קפוא<br />ארוז</>), image: importImage("frozen_norwegian_salmon_fillet.jpeg"), id: 6 },
    { name: (<>פילה נסיכת הנילוס קפוא<br />ארוז</>), image: importImage("sliced_nile_perch_fillet_goldag.jpeg"), id: 6 },
    { name: (<>דג הליבוט קפוא<br />ארוז</>), image: importImage("halibut_sliced_tray.jpeg"), id: 6 },
    { name: (<>דגי מקרל קפוא<br />ארוז</>), image: importImage("mackerel_fish.jpeg"), id: 6 },
  ];
  

  initialChickenproducts.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialIndiaproducts.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialBeeflamb.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialFrozenbeefchicken.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialSausage.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialFreshfish.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialFrozenfish.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });


  const [chickenproducts, setChickenProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialChickenproducts.map(chickenproducts => ({ ...chickenproducts, count: 0 }))
  );
  
  const [indiaProducts, setIndiaProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialIndiaproducts.map(indiaProducts => ({ ...indiaProducts, count: 0 }))
  );

  const [beefLambProducts, setBeefLambProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialBeeflamb.map(beefLambProducts => ({ ...beefLambProducts, count: 0 }))
  );

  const [frozenBeefChickenProducts, setFrozenBeefChickenProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialFrozenbeefchicken.map(frozenBeefChickenProducts => ({ ...frozenBeefChickenProducts, count: 0 }))
  );

  const [sausageProducts, setsausageProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialSausage.map(sausageProducts => ({ ...sausageProducts, count: 0 }))
  );

  const [freshFishProducts, setFreshFishProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialFreshfish.map(freshFishProducts => ({ ...freshFishProducts, count: 0 }))
  );

  const [frozenFishProducts, setFrozenFishProducts] = useState<{ name: React.JSX.Element; image: string | null; count: number }[]>(
    initialFrozenfish.map(frozenFishProducts => ({ ...frozenFishProducts, count: 0 }))
  );


  const handleIncrement = (name: React.JSX.Element) => {
    setChickenProducts(chickenproducts.map(chickenproducts =>   chickenproducts.name === name ? { ...chickenproducts, count: chickenproducts.count + 1 } : chickenproducts ));
    setIndiaProducts(indiaProducts.map(indiaProducts => indiaProducts.name === name ? { ...indiaProducts, count: indiaProducts.count + 1 } : indiaProducts ));
    setBeefLambProducts(beefLambProducts.map(beefLambProducts => beefLambProducts.name === name ? { ...beefLambProducts, count: beefLambProducts.count + 1 } : beefLambProducts ));
    setFrozenBeefChickenProducts(frozenBeefChickenProducts.map(frozenBeefChickenProducts => frozenBeefChickenProducts.name === name ? { ...frozenBeefChickenProducts, count: frozenBeefChickenProducts.count + 1 } : frozenBeefChickenProducts ));
    setsausageProducts(sausageProducts.map(sausageProducts => sausageProducts.name === name ? { ...sausageProducts, count: sausageProducts.count + 1 } : sausageProducts ));
    setFreshFishProducts(freshFishProducts.map(freshFishProducts => freshFishProducts.name === name ? { ...freshFishProducts, count: freshFishProducts.count + 1 } : freshFishProducts ));
    setFrozenFishProducts(frozenFishProducts.map(frozenFishProducts => frozenFishProducts.name === name ? { ...frozenFishProducts, count: frozenFishProducts.count + 1 } : frozenFishProducts ));
  };

  const handleDecrement = (name: React.JSX.Element) => {
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