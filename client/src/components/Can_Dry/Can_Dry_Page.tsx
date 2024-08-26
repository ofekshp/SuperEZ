import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Can_Dry/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Can_Dry_Page: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

const initialBreads = [
    {
      name: "לחם אחיד כהה פרוס",
      image: importImage('barman_dark_sliced_bread.jpeg'),
      id: 12
  },
  {
      name: "לחם בתוספת סיבים פרה ביוטיים",
      image: importImage('barman_active_prebiotic_fibers.jpeg'),
      id: 12
  },
  {
      name: "לחם עננים מקמח כוסמין עם פרוסות עבות",
      image: importImage('barman_cloud_spelt.jpeg'),
      id: 12
  },
  {
      name: "לחם פרוס מקמח כוסמין",
      image: importImage('barman_spelt_e_free.jpeg'),
      id: 12
  },
  {
      name: "לחם פרוס מלא מקמח חיטה ללא תוספים מלאכותיים",
      image: importImage('barman_whole_wheat_e_free.jpeg'),
      id: 12
  },
  {
      name: "לחם עננים לבן בסגנון בריוש עם פרוסות עבות",
      image: importImage('barman_cloud_brioche.jpeg'),
      id: 12
  },
  {
      name: "לחם עננים מקמח מלא עם פרוסות עבות",
      image: importImage('barman_cloud_whole.jpeg'),
      id: 12
  },
  {
      name: "לחם מחמצת ושיפון קל פרוס",
      image: importImage('lechem_haaretz_sourdough_rye.jpeg'),
      id: 12
  },
  {
      name: "לחם חמניות",
      image: importImage('lechem_haaretz_sunflower.jpeg'),
      id: 12
  },
  {
      name: "לחם פרוס מקמח שיבולת שועל",
      image: importImage('lechem_haaretz_oats.jpeg'),
      id: 12
  },
  {
      name: "לחם 5 דגנים",
      image: importImage('lechem_haaretz_5_grains.jpeg'),
      id: 12
  },
  {
      name: "לחם שיפון 100%",
      image: importImage('lechem_haaretz_rye_100.jpeg'),
      id: 12
  },
  {
      name: "לחם 10 דגנים",
      image: importImage('lechem_haaretz_10_grains.jpeg'),
      id: 12
  },
  {
      name: "לחם שיפון עם אגוזים",
      image: importImage('lechem_haaretz_rye_nuts.jpeg'),
      id: 12
  },
  {
      name: "לחם פומפרניקל",
      image: importImage('lechem_haaretz_pumpernickel.jpeg'),
      id: 12
  },
  {
      name: "לחם כוסמין 100%",
      image: importImage('lechem_haaretz_spelt_100.jpeg'),
      id: 12
  },
  {
      name: "לחם אקסקלוסיבי",
      image: importImage('levo_exclusive.jpeg'),
      id: 12
  },
  {
      name: "לחם עם כוסברה",
      image: importImage('polanski_borodinsky_coriander.jpeg'),
      id: 12
  },
  {
      name: "לחם חיטה נבוטה",
      image: importImage('polanski_sprouted_wheat.jpeg'),
      id: 12
  },
  {
      name: "לחם סנדוויץ לבן לטוסט",
      image: importImage('polanski_sandwich_toast.jpeg'),
      id: 12
  },
  {
      name: "לחם שיפון עם זרעי חמניות",
      image: importImage('mestemacher_rye_sunflower.jpeg'),
      id: 12
  },
  {
      name: "מארז 11 פיתות",
      image: importImage('macabim_11_pitas.jpeg'),
      id: 12
  },
  {
      name: "מארז 5 פיתות",
      image: importImage('macabim_5_pitas.jpeg'),
      id: 12
  },
  {
      name: "מארז 11 פיתות ביס",
      image: importImage('macabim_yemenite_pitas.jpeg'),
      id: 12
  },
  {
      name: "מארז 12 פיתות ביס מקמח מלא",
      image: importImage('macabim_whole_pitas.jpeg'),
      id: 12
  },
  {
      name: "מארז 10 פיתות 100% כוסמין מלא",
      image: importImage('macabim_spelt_pitas.jpeg'),
      id: 12
  },
  {
      name: "מארז 5 פיתות כפריות 100% קמח מלא ללא תוספת סוכר",
      image: importImage('macabim_rustic_pitas.jpeg'),
      id: 12
  },
  {
      name: "לחמניות עננים - לחמניות מתוקות בסגנון בריוש",
      image: importImage('barman_cloud_brioche_buns.jpeg'),
      id: 12
  },
  {
      name: "מארז 4 לחמניות מתוקות",
      image: importImage('vedesh_sweet_buns.jpeg'),
      id: 12
  },
  {
      name: "מארז 6 לחמניות כוסמין",
      image: importImage('lechem_haaretz_spelt_buns.jpeg'),
      id: 12
  },
  {
      name: "מארז לחמניות פרנה 4 יח'",
      image: importImage('prana_4_buns.jpeg'),
      id: 12
  },
  {
      name: "עלי טורטיה בקוטר 20 ס״מ",
      image: importImage('master_chef_20cm_tortilla.jpeg'),
      id: 12
  },
  {
      name: "עלי טורטיה חיטה מלאה",
      image: importImage('master_chef_whole_tortilla.jpeg'),
      id: 12
  },
  {
      name: "עלי טורטייה דגנים",
      image: importImage('master_chef_grain_tortilla.jpeg'),
      id: 12
  },
  {
      name: "טורטייה בתוספת חיטה מלאה- 12 יח', קוטר 25 סמ",
      image: importImage('grain_whole_tortilla_25cm.jpeg'),
      id: 12
  },
  {
      name: "לחמניות רכות במיוחד להמבורגר - 4 יח' במארז",
      image: importImage('barman_burger_buns.jpeg'),
      id: 12
  },
  {
      name: "לחם מחמצת כוסמין",
      image: importImage('dr_mark_spelt_sourdough.jpeg'),
      id: 12
  },
  {
      name: "לחם מחמצת שיפון",
      image: importImage('dr_mark_rye_sourdough.jpeg'),
      id: 12
  },
  {
      name: "לחם קל כוסמין במתיקות מעודנת עם שומשום",
      image: importImage('dr_mark_spelt_sesame.jpeg'),
      id: 12
  },
  {
  name: "מארז 6 לחמניות קלות כוסמין שומשום במתיקות מעודנת",
  image: importImage('dr_mark_spelt_sesame_buns.jpeg'),
  id: 12
  },
  {
  name: "מארז לחמניות פרנה ביס 10 יח'",
  image: importImage('prana_bis_buns_10pack.jpeg'),
  id: 12
  },
  {
  name: "עלי טורטייה כוסמין - 6 יחידות בקוטר 20 ס״מ",
  image: importImage('master_chef_spelt_tortilla_20cm.jpeg'),
  id: 12
  },
  {
  name: "עלי טורטייה מיני, קמח חיטה - 10 יחידות בקוטר 15 ס״מ",
  image: importImage('master_chef_mini_wheat_tortilla_15cm.jpeg'),
  id: 12
  },
];

const initialCakes = [
  {
    name: "מארז 10 עוגות אישיות קינדר דליס",
    image: importImage('kinder_delice_10pack.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות במילוי קרם חלבי ובציפוי קרם קקאו",
    image: importImage('balconi_cream_cocoa_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות במילוי קרם קקאו ובציפוי קרם קקאו",
    image: importImage('balconi_cocoa_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות במילוי קרם קקאו ציפוי בטעם שוקולד מריר",
    image: importImage('chocketa_dark_chocolate_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות רכות עם מילוי קרם בטעם וניל",
    image: importImage('chocketa_vanilla_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות חמש שכבות מריר - פרווה",
    image: importImage('chocketa_dark_chocolate_layer_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות במילוי קרם ובציפוי בטעם שוקולד",
    image: importImage('chocketa_chocolate_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות במילוי בטעם קוקוס",
    image: importImage('chocketa_coconut_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות בטעם קרמל",
    image: importImage('chocketa_caramel_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות מגולגלות במילוי קרם חלבי וציפוי בטעם שוקולד",
    image: importImage('chocketa_rolled_milk_cream_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות מגולגלות בטעם קקאו - 6 יחידות במארז",
    image: importImage('chocketa_cocoa_rolled_cakes.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בטעם שוקולד",
    image: importImage('osem_chocolate_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית שוקולד צ'יפס",
    image: importImage('osem_chocolate_chip_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית שיש",
    image: importImage('osem_marble_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית שמרים קלאסית בטעם שוקולד",
    image: importImage('osem_classic_chocolate_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית שוקו שוקוצ'יפס",
    image: importImage('osem_choco_chip_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בראוניס פאד'ג",
    image: importImage('osem_brownie_fudge_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית דמקה בטעם שוקו וניל",
    image: importImage('osem_checkered_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בטעם תפוז",
    image: importImage('osem_orange_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בראוניס בטעם שוקולד ריבת חלב",
    image: importImage('osem_brownie_dulce_de_leche_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בריוש שוקולד",
    image: importImage('osem_brioche_chocolate_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית תפוחים פירורים",
    image: importImage('osem_apple_crumb_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית עוגת סופלה בטעם שוקולד",
    image: importImage('osem_chocolate_souffle_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית סופלה בטעם שוקו וניל",
    image: importImage('osem_souffle_choco_vanilla_cake.jpeg'),
    id: 13
},
{
    name: "עוגת הבית בטעם תפוז - פחות סוכר",
    image: importImage('osem_orange_less_sugar_cake.jpeg'),
    id: 13
},
{
    name: "עוגת שמרים במילוי פרג",
    image: importImage('achva_poppy_seed_babka.jpeg'),
    id: 13
},
{
    name: "עוגת תפוחי עץ עם מילוי מעודן",
    image: importImage('achva_apple_cake.jpeg'),
    id: 13
},
{
    name: "עוגה בטעם וניל",
    image: importImage('achdut_vanilla_cake.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות בטעם קרמל עם חתיכות בטעם קרמל מלוח",
    image: importImage('fiber_one_caramel_salted_cakes.jpeg'),
    id: 13
},
{
    name: "עוגות אישיות בטעם שוקולד עם חתיכות בטעם שוקולד",
    image: importImage('fiber_one_chocolate_cakes.png'),
    id: 13
},
];

const initialCookies = [
  {
      name: "עוגיות אוראו",
      image: importImage('oreo_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות אוראו דאבל קרם",
      image: importImage('oreo_double_cream.jpeg'),
      id: 13
  },
  {
      name: "עוגיות אוראו גולדן",
      image: importImage('oreo_golden.jpeg'),
      id: 13
  },
  {
      name: "מיני עוגיות אוראו קראנצ'י בייטס מצופים",
      image: importImage('oreo_crunchy_bites.jpeg'),
      id: 13
  },
  {
      name: "עוגיות אוראו בטעם בראוניז",
      image: importImage('oreo_brownie_flavor.jpeg'),
      id: 13
  },
  {
      name: "עוגיות אוראו בציפוי בטעם שוקולד לבן",
      image: importImage('oreo_white_chocolate.jpeg'),
      id: 13
  },
  {
      name: "עוגיות אוראו בציפוי בטעם שוקולד חלב",
      image: importImage('oreo_milk_chocolate.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שוקוצ'יפס במילוי שוקולד",
      image: importImage('milka_choco_sensation.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שיבולת שועל ושוקולד",
      image: importImage('milka_oat_chocolate_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שוקולד צ'יפס",
      image: importImage('milka_chocolate_chip_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות מילקה קוקי לופ",
      image: importImage('milka_cookie_loop.jpeg'),
      id: 13
  },
  {
      name: "עוגיות במילוי שוקולד",
      image: importImage('milka_choco_minis.jpeg'),
      id: 13
  },
  {
      name: "עוגיות ביסקוויט ושוקולד",
      image: importImage('milka_biscuit_chocolate_cookies.jpeg'),
      id: 13
  },
  {
      name: "ביסקוויט עם שוקולד חלב מילקה",
      image: importImage('milka_milk_chocolate_biscuit.jpeg'),
      id: 13
  },
  {
      name: "עוגיות דקות בציפוי חלקי של שוקולד חלב",
      image: importImage('milka_thins_cookies.jpeg'),
      id: 13
  },
  {
      name: "וופל במילוי קרם קקאו בציפוי שוקולד חלב",
      image: importImage('milka_choco_waffle.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שוקולד צ'יפס במילוי קרם בטעם שוקולד",
      image: importImage('osem_choco_chip_filled_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שוקוצ'יפס קלאסי",
      image: importImage('osem_classic_choco_chip_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות קרמוגית במילוי קרם בטעם שוקולד",
      image: importImage('osem_creamy_choco_cookies.jpeg'),
      id: 13
  },
  {
      name: "ערגליות שוקו",
      image: importImage('osem_arugula_choco_cookies.jpeg'),
      id: 13
  },
  {
      name: "ערגליות תות",
      image: importImage('osem_arugula_strawberry_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות חיוכים שוקו-שוקו",
      image: importImage('elite_smiley_choco_choco.jpeg'),
      id: 13
  },
  {
      name: "עוגיות סנדוויץ חיוכים בטעם שוקו-שוקו",
      image: importImage('elite_smiley_sandwich_choco.jpeg'),
      id: 13
  },
  {
      name: "עוגיות חיוכים וניל-וניל",
      image: importImage('elite_smiley_vanilla_vanilla.jpeg'),
      id: 13
  },
  {
      name: "חיוכים עוגיות סנדוויץ בטעם וניל במילוי קרם בטעם וניל",
      image: importImage('elite_smiley_vanilla_sandwich.jpeg'),
      id: 13
  },
  {
      name: "עד חצות עוגיות סנדוויץ במילוי שוקולד חלב",
      image: importImage('elite_midnight_sandwich_cookies.jpeg'),
      id: 13
  },
  {
      name: "פינוקיות פסק זמן",
      image: importImage('elite_pesek_zman_cookies.jpeg'),
      id: 13
  },
  {
      name: "פינוקיות קפה נמס",
      image: importImage('elite_instant_coffee_cookies.jpeg'),
      id: 13
  },
  {
      name: "פינוקיות טורטית",
      image: importImage('elite_tortit_cookies.jpeg'),
      id: 13
  },
  {
      name: "מיני פינוקיות בראוניז בייגל בוטן",
      image: importImage('elite_brownie_cookies.jpeg'),
      id: 13
  },
  {
      name: "מיני פינוקיות בטעם טופי קרמל מלוח",
      image: importImage('elite_caramel_toffee_cookies.jpeg'),
      id: 13
  },
  {
      name: "ביסקוויט בטעם קרמל לוטוס",
      image: importImage('lotus_caramel_biscuits.jpeg'),
      id: 13
  },
  {
      name: "עוגיות סנדוויץ לוטוס במילוי בטעם וניל",
      image: importImage('lotus_vanilla_sandwich_cookies.jpeg'),
      id: 13
  },
  {
      name: "לוטוס עוגיות סנדוויץ במילוי לוטוס",
      image: importImage('lotus_sandwich_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות ספוג קטנות מיני מדלן",
      image: importImage('st_michel_mini_madeleine.jpeg'),
      id: 13
  },
  {
      name: "עוגיות מיני מדלן עם פצפוצי שוקולד",
      image: importImage('st_michel_choco_mini_madeleine.jpeg'),
      id: 13
  },
  {
      name: "דונאט עם שוקולד",
      image: importImage('st_michel_choco_donut.jpeg'),
      id: 13
  },
  {
      name: "מיני קוקיס בטעם חמאה",
      image: importImage('carmit_mini_butter_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות כוסמין שטרודל תפוחים - טבעוני",
      image: importImage('dani_galit_spelt_apple_strudel_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות טחינה מלאה ואגוזי לוז - טבעוני",
      image: importImage('dani_galit_tahini_hazelnut_cookies.jpeg'),
      id: 13
  },
  {
      name: "כדורי שוקולד וחמאת בוטנים",
      image: importImage('dani_galit_choco_pb_balls.jpeg'),
      id: 13
  },
  {
      name: "עוגיות Hit קקאו במילוי קרם וניל",
      image: importImage('bahlsen_hit_cocoa_vanilla_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות Hit במילוי קרם בטעם שוקולד",
      image: importImage('bahlsen_hit_chocolate_cookies.jpeg'),
      id: 13
  },
  {
      name: "מיני עוגיות Hit במילוי קרם שוקולד",
      image: importImage('bahlsen_hit_mini_choco_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות בטעם חמאה",
      image: importImage('man_butter_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות חיטה מלאה עם סיבים תזונתיים",
      image: importImage('man_whole_wheat_fiber_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות כוכבים בטעם שוקולד",
      image: importImage('man_choco_star_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות כוכבים בטעם וניל",
      image: importImage('man_vanilla_star_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות חיטה מלאה בטעם חלווה",
      image: importImage('man_whole_wheat_halva_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות שטרודל עם מילוי תפוחי עץ",
      image: importImage('merba_apple_strudel_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות בראוניס",
      image: importImage('merba_brownie_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות עם שוקולד צ'יפס - חלבי",
      image: importImage('merba_choco_chip_cookies.jpeg'),
      id: 13
  },
  {
      name: "עוגיות מזרחיות שומשום",
      image: importImage('abadi_sesame_eastern_cookies.jpeg'),
      id: 13
  },
  {
    name: "עוגיות מזרחיות קריספי שרוף במיוחד",
    image: importImage('abadi_extra_crispy_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות מזרחיות בתוספת מלח",
    image: importImage('abadi_salty_cookies.jpeg'),
    id: 13
  },
  {
    name: "מקלונים בטעם חריף",
    image: importImage('abadi_spicy_sticks.jpeg'),
    id: 13
  },
  {
    name: "מקלונים בטעם סלק בצל",
    image: importImage('abadi_beet_onion_sticks.jpeg'),
    id: 13
  },
  {
    name: "עוגיות מזרחיות פריך במיוחד",
    image: importImage('abadi_extra_crispy_cookies_2.jpeg'),
    id: 13
  },
  {
    name: "קטנטנים בטעם גריל",
    image: importImage('abadi_grill_flavor_snacks.jpeg'),
    id: 13
  },
  {
    name: "קטנטנים בטעם חרדל ודבש",
    image: importImage('abadi_mustard_honey_snacks.jpeg'),
    id: 13
  },
  {
    name: "קטנטנים בטעם טבעי",
    image: importImage('abadi_natural_flavor_snacks.jpeg'),
    id: 13
  },
  {
    name: "מקלונים בטעם טבעי",
    image: importImage('abadi_natural_sticks.jpeg'),
    id: 13
  },
  {
    name: "מקלונים בטעם שום ובזיליקום",
    image: importImage('abadi_garlic_basil_sticks.jpeg'),
    id: 13
  },
  {
    name: "מארז 8 חטיפי עבאדי בטעם טבעי",
    image: importImage('abadi_natural_flavor_snack_pack.jpeg'),
    id: 13
  },
  {
    name: "Goodies עוגיות טבעת מצופות שוקולד חלב",
    image: importImage('merba_milk_chocolate_ring_cookies.jpeg'),
    id: 13
  },
  {
    name: "Goodies עוגיות טבעת מצופות שוקולד מריר",
    image: importImage('merba_dark_chocolate_ring_cookies.jpeg'),
    id: 13
  },
  {
    name: "Goodies עוגיות טבעת מצופות שוקולד לבן",
    image: importImage('merba_white_chocolate_ring_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות על החלל - עוגיות קקאו עם סוכריות",
    image: importImage('merba_space_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות שוקולד צ'יפ במרקם רך",
    image: importImage('merba_soft_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות טריפל שוקולד צ'יפס",
    image: importImage('merba_triple_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות לימון ושוקולד צ'יפס במרקם רך",
    image: importImage('merba_lemon_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות שוקולד צ'יפס עם חמוציות במרקם רך",
    image: importImage('merba_cranberry_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות שוקולד צ'יפס מצופות שוקולד",
    image: importImage('merba_choco_chip_choco_dipped.jpeg'),
    id: 13
  },
  {
    name: "עוגיות שוקולד צ'יפס ממולאות בקרם שוקולד",
    image: importImage('merba_choco_filled_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות שוקולד צ'יפס ממולאות בקרם נוגט",
    image: importImage('merba_nougat_filled_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות בטעם חמאה Danish Delights",
    image: importImage('danish_delights_butter_cookies.jpeg'),
    id: 13
  },
  {
    name: "בפלות ופלים בטעם שוקולד",
    image: importImage('elite_choco_waffles.jpeg'),
    id: 13
  },
  {
    name: "בפלות טורטית ופלים מצופים עם קרם שקדים - פרווה",
    image: importImage('elite_tortit_waffles.jpeg'),
    id: 13
  },
  {
    name: "ופלים ארוכים בטעם שוקולד",
    image: importImage('elite_long_choco_waffles.jpeg'),
    id: 13
  },
  {
    name: "ופלים ארוכים בטעם לימון - פרווה",
    image: importImage('elite_long_lemon_waffles.jpeg'),
    id: 13
  },
  {
    name: "בפלות אחת אחת - ופל בטעם שוקולד מצופה שוקולד",
    image: importImage('elite_choco_dipped_waffles.jpeg'),
    id: 13
  },
  {
    name: "וופל במילוי קרמל",
    image: importImage('chocketa_stroopwafel_caramel.jpeg'),
    id: 13
  },
  {
    name: "וופלים בטעם קפה",
    image: importImage('man_coffee_waffles.jpeg'),
    id: 13
  },
  {
    name: "וופלים משובחים בטעם וניל",
    image: importImage('man_vanilla_waffles.jpeg'),
    id: 13
  },
  {
    name: "וופלים בטעם חלווה",
    image: importImage('man_halva_waffles.jpeg'),
    id: 13
  },
  {
    name: "מארז אגוזית וופל עם קרם אגוזים",
    image: importImage('man_nut_cream_waffles.jpeg'),
    id: 13
  },
  {
    name: "מארז וופלים מצופים",
    image: importImage('mann_coated_wafers_pack.jpeg'),
    id: 13
  },
  {
    name: "וופל Tortina",
    image: importImage('loacker_tortina_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל Gardena אגוזי לוז",
    image: importImage('loacker_gardena_hazelnut_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל גרדנה במילוי קרם אגוזי לוז ובציפוי שוקולד לבן",
    image: importImage('loacker_gardena_white_choco_hazelnut.jpeg'),
    id: 13
  },
  {
    name: "וופל Gardena שוקולד",
    image: importImage('loacker_gardena_chocolate_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל Gardena קוקוס",
    image: importImage('loacker_gardena_coconut_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל גרנד פטיסרי שוקולד חלב ואגוזי לוז",
    image: importImage('loacker_grand_patisserie_milk_choco_hazelnut.jpeg'),
    id: 13
  },
  {
    name: "וופל גרנד פטיסרי קפוצ'ינו",
    image: importImage('loacker_grand_patisserie_cappuccino.jpeg'),
    id: 13
  },
  {
    name: "וופל גרנד פטיסרי שוקולד חלב וקוקוס",
    image: importImage('loacker_grand_patisserie_milk_choco_coconut.jpeg'),
    id: 13
  },
  {
    name: "טורטינה טריפל שוקולד מריר",
    image: importImage('loacker_tortina_triple_dark_choco.jpeg'),
    id: 13
  },
  {
    name: "וופל גרדנה בטעם חמאת בוטנים מצופה",
    image: importImage('loacker_gardena_peanut_butter.jpeg'),
    id: 13
  },
  {
    name: "וופל לואקר קלאסי",
    image: importImage('loacker_classic_wafer.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל סנדוויץ עם שוקולד",
    image: importImage('loacker_sandwich_choco_wafer.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל סנדוויץ עם וניל וחלב",
    image: importImage('loacker_sandwich_vanilla_milk_wafer.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני טירמיסו",
    image: importImage('loacker_quadratini_tiramisu.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני בטעם חמאת בוטנים",
    image: importImage('loacker_quadratini_peanut_butter.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני קרם אגוזים",
    image: importImage('loacker_quadratini_hazelnut_cream.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני וניל",
    image: importImage('loacker_quadratini_vanilla.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני שוקולד",
    image: importImage('loacker_quadratini_choco.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני בטעם שוקולד מריר",
    image: importImage('loacker_quadratini_dark_choco.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני קקאו במילוי קרם חלבי",
    image: importImage('loacker_quadratini_cocoa_milk_cream.jpeg'),
    id: 13
  },
  {
    name: "קוביות וופל קואדרטיני דאבל שוקולד",
    image: importImage('loacker_quadratini_double_choco.jpeg'),
    id: 13
  },
  {
    name: "מארז וופל שוקולד טורטינה שוקולד מריר",
    image: importImage('loacker_tortina_dark_choco_pack.jpeg'),
    id: 13
  },
  {
    name: "וופל גרדנה אגוזי לוז",
    image: importImage('loacker_gardena_hazelnut.jpeg'),
    id: 13
  },
  {
    name: "וופל עם קרם בטעם חלב",
    image: importImage('loacker_milk_cream_wafer.jpeg'),
    id: 13
  },
  {
    name: "מארז וופל שוקולד טורטינה שוקולד חלב",
    image: importImage('loacker_tortina_milk_choco_pack.jpeg'),
    id: 13
  },
  {
    name: "וופל גרדנה שוקולד",
    image: importImage('loacker_gardena_choco_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל גרנד פטיסרי שוקולד מריר ואגוזי לוז",
    image: importImage('loacker_grand_patisserie_dark_choco_hazelnut.jpeg'),
    id: 13
  },
  {
    name: "וופל גרדנה שוקולד",
    image: importImage('loacker_gardena_choco_wafer2.jpeg'),
    id: 13
  },
  {
    name: "וופל קקאו במילוי קרם חלב",
    image: importImage('loacker_cocoa_milk_cream_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל גרנד פטיסרי שוקולד לבן וקוקוס",
    image: importImage('loacker_grand_patisserie_white_choco_coconut.jpeg'),
    id: 13
  },
  {
    name: "אצבעות וופל גרדנה שוקולד לבן",
    image: importImage('loacker_gardena_white_choco_wafer_sticks.jpeg'),
    id: 13
  },
  {
    name: "לואקר טורטינה שוקולד לבן",
    image: importImage('loacker_tortina_white_choco.jpeg'),
    id: 13
  },
  {
    name: "גלילי וופל עם קרם אגוזי לוז בציפוי שוקולד חלב",
    image: importImage('amicelli_hazelnut_cream_wafer_rolls.jpeg'),
    id: 13
  },
  {
    name: "וופל קנופרס מיניס",
    image: importImage('knoppers_minis.jpeg'),
    id: 13
  },
  {
    name: "Tim Tam וופל שוקולד קלאסי",
    image: importImage('tim_tam_classic_choco.jpeg'),
    id: 13
  },
  {
    name: "Tim Tam וופל שוקולד ציפוי כפול",
    image: importImage('tim_tam_double_coat_choco.jpeg'),
    id: 13
  },
  {
    name: "גלילי וופל עם שוקולד חלב Waffeletten",
    image: importImage('bahlsen_waffeletten_choco_wafer_rolls.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויט פתיבר שוקו",
    image: importImage('osem_petiber_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויט פתיבר קלאסי",
    image: importImage('osem_petiber_classic_biscuit.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויט פתיבר קרמל",
    image: importImage('osem_petiber_caramel_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר בטעם שוקולד מריר",
    image: importImage('osem_petiber_dark_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר קלאסי פחות סוכר",
    image: importImage('osem_petiber_less_sugar_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר פינוקי וניל - חלבי",
    image: importImage('osem_petiber_vanilla_treat_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר פינוקי שוקו - חלבי",
    image: importImage('osem_petiber_choco_treat_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר אצבעות שוקולד - חלבי",
    image: importImage('osem_petiber_choco_fingers_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר דובוני שוקולד",
    image: importImage('osem_petiber_choco_bear_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר פינוקי Black & White חלבי",
    image: importImage('osem_petiber_black_white_treat_biscuit.jpeg'),
    id: 13
  },
  {
    name: "פתיבר פינוקים בטעם עוגת גבינה",
    image: importImage('osem_petiber_cheesecake_treat_biscuit.jpeg'),
    id: 13
  },
  {
    name: "עד חצות ביסקוויט בשוקולד חלב",
    image: importImage('elite_ad_chatzot_milk_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "רבע לשבע במילוי קרם אגוזים ובציפוי שוקולד חלב",
    image: importImage('elite_reva_le_sheva_hazelnut_cream_biscuit.jpeg'),
    id: 13
  },
  {
    name: "אצבעות וופל רבע לשבע אגוזים בציפוי שוקולד חלב",
    image: importImage('elite_reva_le_sheva_hazelnut_wafer_fingers.jpeg'),
    id: 13
  },
  {
    name: "רבע לשבע טורטית",
    image: importImage('elite_reva_le_sheva_tortit_wafer.jpeg'),
    id: 13
  },
  {
    name: "רבע לשבע קראנץ' עוגיות מצופות שוקולד חלב ואגוזי לוז",
    image: importImage('elite_reva_le_sheva_cookie_crunch.jpeg'),
    id: 13
  },
  {
    name: "אצבעות ביסקוויט עד חצות",
    image: importImage('elite_ad_chatzot_biscuit_fingers.jpeg'),
    id: 13
  },
  {
    name: "עד חצות דאבל ביסקוויט עם שוקולד חלב -8 אריזות אישיות",
    image: importImage('elite_ad_chatzot_double_biscuit.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויט עד חצות עיגולים",
    image: importImage('elite_ad_chatzot_circles_biscuit.jpeg'),
    id: 13
  },
  {
    name: "לואקר טורטינה קרמל",
    image: importImage('loacker_tortina_caramel_wafer.jpeg'),
    id: 13
  },
  {
    name: "בישקוטים בונומי Bonomi",
    image: importImage('bonomi_biscotti.jpeg'),
    id: 13
  },
  {
    name: "גביעי גלידה מגולגלים 12 יח'",
    image: importImage('alma_rolled_ice_cream_cones.jpeg'),
    id: 13
  },
  {
    name: "גביעי גלידה בטעם שוקו",
    image: importImage('osem_choco_ice_cream_cones.jpeg'),
    id: 13
  },
  {
    name: "גביעי וופל ממותקים לגלידה 24 יח'",
    image: importImage('osem_sweet_waffle_cones.jpeg'),
    id: 13
  },
  {
    name: "גביעי גלידה אמריקה 24 יח'",
    image: importImage('alma_america_ice_cream_cones.jpeg'),
    id: 13
  },
  {
    name: "גביעי גלידה 24 יח'",
    image: importImage('alma_ice_cream_cones.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויטים במילוי נוטלה",
    image: importImage('nutella_filled_biscuit.jpeg'),
    id: 13
  },
  {
    name: "ביסקוויטים במילוי נוטלה בקופסא",
    image: importImage('nutella_filled_biscuit_box.jpeg'),
    id: 13
  },
  {
    name: "וופל מלוח במילוי ממרח אגוזי לוז עם קקאו ופצפוצי חיטה",
    image: importImage('nutella_salty_hazelnut_wafer.jpeg'),
    id: 13
  },
  {
    name: "וופל עם קרם בטעם קקאו",
    image: importImage('loacker_cocoa_cream_wafer.jpeg'),
    id: 13
  },
  {
    name: "גלילי ופל במילוי קרם קרם קוקוס",
    image: importImage('lago_mini_roll_coconut_wafer.jpeg'),
    id: 13
  },
  {
    name: "גלילי ופל במילוי קרם קרם קקאו",
    image: importImage('lago_mini_roll_cocoa_wafer.jpeg'),
    id: 13
  },
  {
    name: "לואקר וופל מצופה שוקולד חלב",
    image: importImage('loacker_milk_choco_wafer.jpeg'),
    id: 13
  },
  {
    name: "לואקר וופל מצופה שוקולד מריר",
    image: importImage('loacker_dark_choco_wafer.jpeg'),
    id: 13
  },
  {
    name: "מארז 8 חטיפי עבאדי בטעם גריל",
    image: importImage('abadi_grill_snacks.jpeg'),
    id: 13
  },
  {
    name: "מיני קוקיס עוגיות שוקולד צ'יפס",
    image: importImage('carmit_mini_choco_cookies.jpeg'),
    id: 13
  },
  {
    name: "מקוויטיס טינס בטעם קפה מצופים שוקולד חלב",
    image: importImage('mcvities_tins_coffee_milk_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "מקוויטיס טינס מצופים בשוקולד מריר",
    image: importImage('mcvities_tins_dark_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "מקוויטיס טינס מצופים שוקולד חלב",
    image: importImage('mcvities_tins_milk_choco_biscuit.jpeg'),
    id: 13
  },
  {
    name: "עוגיות מאפין רכות עם שוקולד",
    image: importImage('merba_choco_muffin_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות נוגטלי במילוי קרם אגוזים",
    image: importImage('merba_nugatel_cookies.jpeg'),
    id: 13
  },
  {
    name: "עד חצות THINS מצופה שוקולד חלב ופצפוצי אורז",
    image: importImage('elite_ad_chatzot_thins_milk_choco_rice_crispies.jpeg'),
    id: 13
  },
  {
    name: "עד חצות THINS עוגיות עם תחתית שוקולד חלב ואגוזי לוז",
    image: importImage('elite_ad_chatzot_thins_hazelnut_milk_choco.jpeg'),
    id: 13
  },
  {
    name: "עד חצות ביסקוויט עם שוקולד חלב במילוי קרם אגוזי לוז",
    image: importImage('elite_ad_chatzot_biscuit_hazelnut_cream.jpeg'),
    id: 13
  },
  {
    name: "עוגיות גרנולה קינמון ללא תוספת סוכר",
    image: importImage('man_granola_cinnamon_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות טחינה",
    image: importImage('eclair_tahini_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות מילקה במילוי קרם אוראו ותוספת שוקולד צ'יפס",
    image: importImage('milka_oreo_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות תמר ואגוז מלך",
    image: importImage('eclair_date_walnut_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות במילוי תמרים",
    image: importImage('eclair_date_filled_cigars_cookies.jpeg'),
    id: 13
  },
  {
    name: "עוגיות עם סוכריות שוקולד חלב צבעוניות",
    image: importImage('merba_colored_choco_chip_cookies.jpeg'),
    id: 13
  },
  {
    name: "צ'וקטה קידס עוגיות סנדוויץ'",
    image: importImage('chocketa_kids_sandwich_cookies.jpeg'),
    id: 13
  },
  {
    name: "קפריס גלילי וופל במילוי קרם אגוזי לוז וקקאו",
    image: importImage('papadopoulos_hazelnut_cacao_wafer_rolls.jpeg'),
    id: 13
  },
  {
    name: "חטיף קינדר טרונקי - מארז 5 יח'",
    image: importImage('kinder_tronky_5_pack.jpeg'),
    id: 13
  },
  {
    name: "קינדר קארדס Kinder Cards - חמישייה",
    image: importImage('kinder_cards_5_pack.jpeg'),
    id: 13
  },
  {
    name: "פתיבר קלאסי ללא גלוטן",
    image: importImage('osem_gluten_free_petit_beurre_classic.jpeg'),
    id: 13
  },
  {
    name: "פתיבר שוקו ללא גלוטן",
    image: importImage('osem_gluten_free_petit_beurre_choco.jpeg'),
    id: 13
  },
];  

const initialCrackers = [
    {
        name: "קרם קרקר",
        image: importImage('cream_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר שומשום",
        image: importImage('sesame_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר בצל",
        image: importImage('onion_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר קלאסי",
        image: importImage('classic_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר זהב",
        image: importImage('gold_cracker.jpeg'),
        id: 12
    },
    {
        name: "לחמית חיטה מלאה",
        image: importImage('whole_wheat_lahmit.jpeg'),
        id: 12
    },
    {
        name: "לחמית כפרית",
        image: importImage('rustic_lahmit.jpeg'),
        id: 12
    },
    {
        name: "לחמית חיטה מלאה ושיפון",
        image: importImage('whole_wheat_rye_lahmit.jpeg'),
        id: 12
    },
    {
        name: "לחמית 5 דגנים",
        image: importImage('5_grain_lahmit.jpeg'),
        id: 12
    },
    {
        name: "לחמית אגוזים",
        image: importImage('nut_lahmit.jpeg'),
        id: 12
    },
    {
        name: "טוסטעים צנימים",
        image: importImage('tostim_toast.jpeg'),
        id: 12
    },
    {
        name: "טוסטעים צנימים עם קמח חיטה מלא",
        image: importImage('whole_wheat_tostim_toast.jpeg'),
        id: 12
    },
    {
        name: "טוסטעים צנימים עם שומשום",
        image: importImage('sesame_tostim_toast.jpeg'),
        id: 12
    },
    {
        name: "חטיף קרקר קריספי עם זיתים כבושים",
        image: importImage('olive_crispy_cracker.jpeg'),
        id: 12
    },
    {
        name: "חטיף קרקר קריספי כפרי",
        image: importImage('rustic_crispy_cracker.jpeg'),
        id: 12
    },
    {
        name: "קריספי קרקר כפרי",
        image: importImage('rustic_crispy_cracker_small.jpeg'),
        id: 12
    },
    {
        name: "קריספי קרקר רוזמרין",
        image: importImage('rosemary_crispy_cracker.jpeg'),
        id: 12
    },
    {
        name: "חטיפי קרקר זעתר",
        image: importImage('zaatar_cracker_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי קרקר מלוח",
        image: importImage('salty_cracker_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי פריכונים אורז מלא בטעם טבעי",
        image: importImage('natural_brown_rice_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי פריכונים תירס",
        image: importImage('corn_snacks.jpeg'),
        id: 12
    },
    {
        name: "פריכונים מאורז מלא",
        image: importImage('brown_rice_snacks.jpeg'),
        id: 12
    },
    {
        name: "פריכונים מאורז מלא דל נתרן",
        image: importImage('low_sodium_brown_rice_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי פריכונים אורז מלא ודבש",
        image: importImage('honey_brown_rice_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי טורטיה תירס",
        image: importImage('corn_tortilla_snacks.jpeg'),
        id: 12
    },
    {
        name: "חטיפי טורטיה בטעם חמוץ מתוק",
        image: importImage('sweet_sour_tortilla_snacks.jpeg'),
        id: 12
    },
    {
        name: "קרקר פיטנס דק כפרי",
        image: importImage('rustic_fitness_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר דק רוזמרין ושום פיטנס",
        image: importImage('rosemary_garlic_fitness_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרקר פיטנס דק סלק",
        image: importImage('fitness_cracker_beetroot.jpeg'),
        id: 12
    },
    {
        name: "קרקר פיטנס דק בטטה",
        image: importImage('fitness_cracker_sweet_potato.jpeg'),
        id: 12
    },
    {
        name: "קרקר פיטנס דק עם זיתי קלמטה",
        image: importImage('fitness_cracker_kalamata_olives.jpeg'),
        id: 12
    },
    {
        name: "פיטנס פריכיות דקות מיקס דגנים, אפונה וסלק",
        image: importImage('fitness_crispy_cereal_peas_beetroot.jpeg'),
        id: 12
    },
    {
        name: "פיטנס פריכיות דקות מיקס שלושה דגנים וקינואה",
        image: importImage('fitness_crispy_three_grains_quinoa.jpeg'),
        id: 12
    },
    {
        name: "חטיפי קרקר פיטנס Fitness עם חיטה מלאה",
        image: importImage('fitness_cracker_whole_wheat.jpeg'),
        id: 12
    },
    {
        name: "חטיפי קרקר עם חיטה מלאה, צ'יה וזרעי פשתן פיטנס",
        image: importImage('fitness_cracker_whole_wheat_chia_flaxseed.jpeg'),
        id: 12
    },
    {
        name: "פריכיות דקות ונימוחות 3 דגנים פיטנס Fitness",
        image: importImage('fitness_thin_crispy_3_grains.jpeg'),
        id: 12
    },
    {
        name: "פריכיות דקות ונימוחות 3 דגנים וקינואה פיטנס Fitness",
        image: importImage('fitness_thin_crispy_3_grains_quinoa.jpeg'),
        id: 12
    },
    {
        name: "פיטנס חטיפי פריכיות דגנים עם קינמון",
        image: importImage('fitness_crispy_cereal_cinnamon.jpeg'),
        id: 12
    },
    {
        name: "פיטנס חטיפי פריכיות דגנים וחומוס מתובלות",
        image: importImage('fitness_crispy_cereal_chickpea_seasoned.jpeg'),
        id: 12
    },
    {
        name: "פיטנס חטיפי פריכיות עם קטניות ומלח ים",
        image: importImage('fitness_crispy_legumes_sea_salt.jpeg'),
        id: 12
    },
    {
        name: "נשנושים חטיף זעתר",
        image: importImage('nashnushim_snack_zaatar.jpeg'),
        id: 12
    },
    {
        name: "נשנושי קרקר קוקטייל מלוח",
        image: importImage('cracker_snack_salty_cocktail.jpeg'),
        id: 12
    },
    {
        name: "נשנושי קרקר עיגולים מלוחים",
        image: importImage('cracker_snack_salty_circles.jpeg'),
        id: 12
    },
    {
        name: "נשנושי קרקר משולשי שומשום",
        image: importImage('cracker_snack_sesame_triangles.jpeg'),
        id: 12
    },
    {
        name: "נשנושי קרקר קוקטייל שומשום",
        image: importImage('cracker_snack_sesame_cocktail.jpeg'),
        id: 12
    },
    {
        name: "נשנושים איירביס חטיף אפוי בטעם בצל",
        image: importImage('airbites_snack_onion_flavor.jpeg'),
        id: 12
    },
    {
        name: "נשנושים איירביס חטיף אפוי בטעם ברביקיו",
        image: importImage('airbites_snack_bbq_flavor.jpeg'),
        id: 12
    },
    {
        name: "נשנושים איירביס חטיף אפוי בטעם פלאפל",
        image: importImage('airbites_snack_falafel_flavor.jpeg'),
        id: 12
    },
    {
        name: "נשנושים חטיף בטעם שמנת בצל",
        image: importImage('snack_sour_cream_onion_flavor.jpeg'),
        id: 12
    },
    {
        name: "קרקר חיטה מלאה עם פשתן",
        image: importImage('whole_wheat_cracker_flaxseed.jpeg'),
        id: 12
    },
    {
        name: "פתית קרקר שיפון",
        image: importImage('rye_cracker_petite.jpeg'),
        id: 12
    },
    {
        name: "פתית 6 דגנים",
        image: importImage('6_grain_cracker_petite.jpeg'),
        id: 12
    },
    {
        name: "פתית חיטה מלאה",
        image: importImage('whole_wheat_cracker_petite.jpeg'),
        id: 12
    },
    {
        name: "פתית שוודי",
        image: importImage('swedish_cracker_petite.jpeg'),
        id: 12
    },
    {
        name: "פריכיות תפוחי אדמה ו 3 דגנים בטעם פוטטוס",
        image: importImage('energy_crispy_potato_3_grains_potatoes_flavor.jpeg'),
        id: 12
    },
    {
        name: "פריכיות חומוס, אורז, עדשים שחורות וקינואה",
        image: importImage('tasty_crispy_chickpeas_rice_black_lentils_quinoa.jpeg'),
        id: 12
    },
    {
        name: "פריכיות עם תחתית שוקולד מריר",
        image: importImage('crispy_bitter_chocolate_bottom.jpeg'),
        id: 12
    },
    {
        name: "פריכיות אורז מלא עם שוקולד חלב",
        image: importImage('whole_rice_crispy_milk_chocolate.jpeg'),
        id: 12
    },
    {
        name: "פריכיות משולשות תפוח אדמה, אורז, בתיבול סלק ומלח ים",
        image: importImage('crispy_triangles_potato_rice_seasoned_beetroot_sea_salt.jpeg'),
        id: 12
    },
    {
        name: "פריכיות תפוחי אדמה, אורז, אפונה ירוקה בתיבול מלח ים",
        image: importImage('crispy_potato_rice_green_peas_seasoned_sea_salt.jpeg'),
        id: 12
    },
    {
        name: "אנרג'י קריספס-פריכיות חומוס, עדשים ואפונה עם קייל וסלק",
        image: importImage('energy_crisps_chickpeas_lentils_peas_kale_beetroot.jpeg'),
        id: 12
    },
    {
        name: "פריכיות עם אפונה ובטטה סגולה בטעם בצל מקורמל",
        image: importImage('crisps_peas_purple_sweet_potato_caramelized_onion.jpeg'),
        id: 12
    },
    {
        name: "פריכיות חומוס, עדשים שחורות, קינואה ופלפל שחור",
        image: importImage('tasty_crisps_chickpeas_black_lentils_quinoa_black_pepper.jpeg'),
        id: 12
    },
    {
        name: "פריכיות חומוס, עדשים שחורות, קינואה ומלח ים",
        image: importImage('tasty_crisps_chickpeas_black_lentils_quinoa_sea_salt.jpeg'),
        id: 12
    },
    {
        name: "פריכיות תירס בטעם עגבניות ועשבי תיבול",
        image: importImage('corn_crisps_tomato_herbs_flavor.jpeg'),
        id: 12
    },
    {
        name: "פריכיות תירס בטעם זיתים ועירית",
        image: importImage('corn_crisps_olive_chives_flavor.jpeg'),
        id: 12
    },
    {
        name: "נשנושים חטיף תירס בטעם טבעי",
        image: importImage('snacks_corn_natural_flavor.jpeg'),
        id: 12
    },
    {
        name: "קרקר 6 דגנים",
        image: importImage('6_grain_cracker.jpeg'),
        id: 12
    },
    {
        name: "קרם קרקר דל נתרן",
        image: importImage('low_sodium_cracker_cream.jpeg'),
        id: 12
    },
    {
        name: "אנרג'י פריכיות תירס דקיקות עם מלח ים",
        image: importImage('energy_thin_corn_crisps_sea_salt.jpeg'),
        id: 12
    },
    {
        name: "אנרג'י פריכיות תירס דקיקות עם פלפל שחור",
        image: importImage('energy_thin_corn_crisps_black_pepper.jpeg'),
        id: 12
    },
    {
        name: "פיטנס מיני קרקר כפרי",
        image: importImage('nestle_fitness_mini_rustic_crackers.jpeg'),
        id: 12
    },
    {
        name: "פיטנס פריכיות עם שוקולד חלב",
        image: importImage('nestle_fitness_rice_cakes_milk_chocolate.jpeg'),
        id: 12
    },
    {
        name: "פיטנס פריכיות עם שוקולד לבן - חלבי",
        image: importImage('nestle_fitness_rice_cakes_white_chocolate.jpeg'),
        id: 12
    },
    {
        name: "קרקר פיטנס דק כרובית וכרישה",
        image: importImage('nestle_fitness_thin_crackers_cauliflower_leek.jpeg'),
        id: 12
    },
];
    
const initialoil = [
  { name: "שמן קנולה מזוכך", image: importImage('canola_oil_refined.jpeg'), id: 10 },
  { name: "שמן קנולה מזוכך מועשר בנוגדי חימצון", image: importImage('canola_oil_antioxidants.jpeg'), id: 10 },
  { name: "שמן קנולה פלוס מועשר באומגה 3", image: importImage('canola_oil_omega3.jpeg'), id: 10 },
  { name: "שמן קנולה מזוכך מועשר בויטמין E", image: importImage('canola_oil_vitaminE.jpeg'), id: 10 },
  { name: "שמן חמניות מזוכך", image: importImage('sunflower_oil_refined.jpeg'), id: 10 },
  { name: "שמן חמניות מזוכך מועשר בנוגדי חימצון", image: importImage('sunflower_oil_antioxidants.jpeg'), id: 10 },
  { name: "שמן חמניות פלוס אומגה 3", image: importImage('sunflower_oil_omega3.jpeg'), id: 10 },
  { name: "שמן זרעי דלעת לא מזוכך", image: importImage('pumpkin_seed_oil_unrefined.jpeg'), id: 10 },
  { name: "שמן זית כתית מעולה", image: importImage('olive_oil_la_espanola.jpeg'), id: 10 },
  { name: "שמן זית קלאסי בקבוק לחיץ", image: importImage('olive_oil_classic_squeeze_bottle.jpeg'), id: 10 },
  { name: "שמן זית כתית מעולה כבישה קרה סורי חומציות 0.5%", image: importImage('olive_oil_syrian_cold_press.jpeg'), id: 10 },
  { name: "שמן זית כתית מעולה כבישה קרה פישולין", image: importImage('olive_oil_israeli_cold_press_picholine.jpeg'), id: 10 },
  { name: "שמן זית כתית מעולה כבישה קרה פיקואל חומציות 0.5%", image: importImage('olive_oil_picual_cold_press.jpeg'), id: 10 },
  { name: "תרסיס שמן קנולה מזוכך", image: importImage('canola_oil_spray_refined.jpeg'), id: 10 },
  { name: "שמן סובין אורז", image: importImage('rice_bran_oil.jpeg'), id: 10 },
  { name: "תרסיס שמן זית", image: importImage('olive_oil_spray_pam.jpeg'), id: 10 },
  { name: "תרסיס שמן קנולה", image: importImage('canola_oil_spray.jpeg'), id: 10 },
  { name: "תרסיס קנולה בטעם חמאה", image: importImage('butter_flavored_canola_oil_spray.jpeg'), id: 10 },
  { name: "תרסיס שמן זית כתית מעולה", image: importImage('extra_virgin_olive_oil_spray_ez_ha_zayit.jpeg'), id: 10 },
  { name: "שמן בוטנים בכבישה קרה", image: importImage('cold_pressed_peanut_oil.jpeg'), id: 10 },
  { name: "תרסיס שמן חמניות מזוכך", image: importImage('sunflower_oil_spray.jpeg'), id: 10 },
  { name: "שמן קנולה אורגני בכבישה קרה", image: importImage('organic_cold_pressed_canola_oil.jpeg'), id: 10 },
  { name: "שמן שומשום כבישה קרה", image: importImage('cold_pressed_sesame_oil.jpeg'), id: 10 },
  { name: "שמן שומשום לא מזוכך", image: importImage('unrefined_sesame_oil.jpeg'), id: 10 },
  { name: "שמן אבוקדו בטעם מעודן", image: importImage('mild_avocado_oil.jpeg'), id: 10 },
  { name: "שמן גרעיני ענבים", image: importImage('grape_seed_oil_casa_d_oro.jpeg'), id: 10 },
  { name: "תרסיס שמן שומשום בכבישה קרה", image: importImage('cold_pressed_sesame_oil_spray_tamim.jpeg'), id: 10 },
];

const initialVinegarlemonjuice = [
  { name: "חומצה אצטית למזון 5%", image: importImage('acetic_acid_for_food_5_percent_yachin.jpeg'), id: 10 },
  { name: "חומץ 5%", image: importImage('vinegar_5_percent_osem.jpeg'), id: 10 },
  { name: "חומץ בלסמי ממודנה", image: importImage('balsamic_vinegar_modena_yad_mordechai.jpeg'), id: 10 },
  { name: "חומץ בלסמי איטלקי", image: importImage('italian_balsamic_vinegar_tamim.jpeg'), id: 10 },
  { name: "חומץ פירות יער אדומים", image: importImage('red_berry_vinegar_tamim.jpeg'), id: 10 },
  { name: "חומץ תפוחים אורגני", image: importImage('organic_apple_cider_vinegar_naturofood.jpeg'), id: 10 },
  { name: "חומץ תפוחים", image: importImage('apple_cider_vinegar_top_brands.jpeg'), id: 10 },
  { name: "חומץ יין עם הדרים", image: importImage('citrus_fruit_wine_vinegar_tamim.jpeg'), id: 10 },
  { name: "חומץ בן יין אדום", image: importImage('red_wine_vinegar_tamim.jpeg'), id: 10 },
  { name: "חומץ בן יין לבן", image: importImage('white_wine_vinegar_tamim.jpeg'), id: 10 },
  { name: "מיץ לימון משומר מרכז לימונים", image: importImage('preserved_lemon_juice_osem.jpeg'), id: 10 },
  { name: "מיץ לימון", image: importImage('lemon_juice_willy_food.jpeg'), id: 10 },
  { name: "מיץ לימון מפוסטר", image: importImage('pasteurized_lemon_juice_yad_mordechai.jpeg'), id: 10 },
  { name: "קרם בלסמי מצומצם", image: importImage('balsamic_reduction_cream_tamim.jpeg'), id: 10 },
];

const initialLegumesricecouscous = [
  { name: "אורז בסמטי מלא", image: importImage('brown_basmati_rice_sugat.jpeg'), id: 12 },
  { name: "אורז בסמטי קלאסי", image: importImage('classic_basmati_rice_sugat.jpeg'), id: 12 },
  { name: "אורז חיש", image: importImage('quick_rice_sugat.jpeg'), id: 12 },
  { name: "אורז יסמין קלאסי", image: importImage('classic_jasmine_rice_sugat.jpeg'), id: 12 },
  { name: "אורז מלא ארוך", image: importImage('long_grain_brown_rice_sugat.jpeg'), id: 12 },
  { name: "אורז מלא עגול", image: importImage('round_brown_rice_sugat.jpeg'), id: 12 },
  { name: "אורז עגול", image: importImage('short_grain_rice_sugat.jpeg'), id: 12 },
  { name: "אורז פרסי קלאסי", image: importImage('classic_persian_rice_sugat.jpeg'), id: 12 },
  { name: "אורז תאילנדי", image: importImage('thai_rice_sugat.jpeg'), id: 12 },
  { name: "עדשים אדומות", image: importImage('red_lentils_sugat.jpeg'), id: 12 },
  { name: "עדשים ירוקות", image: importImage('green_lentils_sugat.jpeg'), id: 12 },
  { name: "חיטה", image: importImage('wheat_sugat.jpeg'), id: 12 },
  { name: "גריסים", image: importImage('grisim_sugat.jpeg'), id: 12 },
  { name: "בורגול", image: importImage('bulgur_sugat.jpeg'), id: 12 },
  { name: "גרישה - בורגול דק", image: importImage('fine_bulgur_sugat.jpeg'), id: 12 },
  { name: "שעועית לבנה", image: importImage('white_bean_sugat.jpeg'), id: 12 },
  { name: "קוסקוס בינוני", image: importImage('medium_couscous_ossem.jpeg'), id: 12 },
  { name: "קוסקוס דק", image: importImage('thin_couscous_ossem.jpeg'), id: 12 },
  { name: "פתיתי קוסקוס ישראלי", image: importImage('israeli_couscous_ossem.jpeg'), id: 12 },
  { name: "קוסקוס עם קמח חיטה מלא", image: importImage('whole_wheat_couscous_ossem.jpeg'), id: 12 },
  { name: "קוסקוס רגיל", image: importImage('regular_couscous_kuskus_mazon.jpeg'), id: 12 },
  { name: "קוסקוס עבה", image: importImage('thick_couscous_kuskus_mazon.jpeg'), id: 12 },
  { name: "קוסקוס מלא", image: importImage('whole_couscous_kuskus_mazon.jpeg'), id: 12 },
  { name: "לקט לחמין", image: importImage('maya_chamin_mix.jpeg'), id: 12 },
  { name: "שעועית מש", image: importImage('maya_mung_bean.jpeg'), id: 12 },
  { name: "אורז לבן עגול לסושי", image: importImage('masterchef_sushi_rice.jpeg'), id: 12 },
  { name: "אפונה יבשה", image: importImage('sugat_dry_peas.jpeg'), id: 12 },
  { name: "גריסי פנינה", image: importImage('sugat_pearl_barley.jpeg'), id: 12 },
  { name: "גרעיני תירס לפופקורן", image: importImage('sugat_popcorn_kernels.jpeg'), id: 12 },
  { name: "זרעי פשתן אורגני", image: importImage('harduf_organic_flax_seeds.jpeg'), id: 12 },
  { name: "חומוס", image: importImage('sugat_chickpeas.jpeg'), id: 12 },
  { name: "חומוס ענק", image: importImage('sugat_large_chickpeas.jpeg'), id: 12 },
  { name: "כוסמת", image: importImage('posulsky_buckwheat.jpeg'), id: 12 },
  { name: "עדשים שחורות בלוגה", image: importImage('sugat_black_beluga_lentils.jpeg'), id: 12 },
  { name: "פריקה - חיטה ירוקה קלויה", image: importImage('sugat_freeke_greens_wheat.jpeg'), id: 12 },
  { name: "קינואה אדומה", image: importImage('maya_red_quinoa.jpeg'), id: 12 },
  { name: "קינואה שחורה", image: importImage('maya_black_quinoa.jpeg'), id: 12 },
  { name: "אורז בסמטי מלא אורגני", image: importImage('tevaot_organic_brown_basmati_rice.jpeg'), id: 12 },
  { name: "אורז עגול מלא אורגני", image: importImage('tevaot_organic_round_rice.jpeg'), id: 12 },
  { name: "אורז בסמטי לבן אורגני", image: importImage('tevaot_organic_white_basmati_rice.jpeg'), id: 12 },
  { name: "אורז לבן ארוך אורגני", image: importImage('harduf_organic_long_grain_rice.jpeg'), id: 12 },
  { name: "עדשים אדומות אורגניות", image: importImage('tevaot_organic_red_lentils.jpeg'), id: 12 },
  { name: "עדשים צהובות אורגניות", image: importImage('tevaot_organic_yellow_lentils.jpeg'), id: 12 },
  { name: "בורגול אורגני", image: importImage('tevaot_organic_bulgur.jpeg'), id: 12 },
  { name: "גרגרי חומוס אורגני", image: importImage('harduf_organic_chickpeas.jpeg'), id: 12 },
  { name: "שעועית אזוקי אורגני", image: importImage('harduf_organic_azuki_beans.jpeg'), id: 12 },
  { name: "מג'דרה קינואה אורגנית", image: importImage('tevaot_organic_quinoa_mujadara.jpeg'), id: 12 },
  { name: "מג'דרה אורגנית", image: importImage('tevaot_organic_mujadara.jpeg'), id: 12 },
  { name: "גריסי פנינה אורגני", image: importImage('harduf_organic_pearl_barley.jpeg'), id: 12 },
];

const initialPasta = [
  { name: "פסטה ספגטי מס׳ 8", image: importImage('osem_spaghetti_8.jpeg'), id: 12 },
  { name: "פסטה צינורות", image: importImage('osem_tubes.jpeg'), id: 12 },
  { name: "פסטה מסולסלים", image: importImage('osem_curls.jpeg'), id: 12 },
  { name: "פסטה צדפים גדולים", image: importImage('osem_large_shells.jpeg'), id: 12 },
  { name: "פסטה צדפים קטנים", image: importImage('osem_small_shells.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס׳ 7", image: importImage('osem_macaroni_7.jpeg'), id: 12 },
  { name: "פסטה תלתלים", image: importImage('osem_curls_2.jpeg'), id: 12 },
  { name: "פסטה קרניים בינוניות", image: importImage('osem_medium_horns.jpeg'), id: 12 },
  { name: "פסטה ספגטי מהיר הכנה", image: importImage('osem_quick_spaghetti.jpeg'), id: 12 },
  { name: "פסטה קסרצ'ה", image: importImage('osem_perfecto_casarecce.jpeg'), id: 12 },
  { name: "פסטה פטוצ'יני", image: importImage('osem_perfecto_fettuccine.jpeg'), id: 12 },
  { name: "פסטה פארפאלה", image: importImage('osem_perfecto_farfalline.jpeg'), id: 12 },
  { name: "פסטה ווזוביוטי", image: importImage('osem_perfecto_vesuviotti.jpeg'), id: 12 },
  { name: "פסטה רצ'יאולי", image: importImage('osem_perfecto_rechitelli.jpeg'), id: 12 },
  { name: "פסטה רדיאטורי", image: importImage('osem_perfecto_radiatori.jpeg'), id: 12 },
  { name: "טורטיגוליני מס' 83", image: importImage('barilla_tortiglioni_83.jpeg'), id: 12 },
  { name: "פסטה מאצ'רוני", image: importImage('barilla_macaroni.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס' 9", image: importImage('barilla_bucatini_9.jpeg'), id: 12 },
  { name: "פסטה פנה מחיטה מלאה", image: importImage('barilla_whole_wheat_penne.jpeg'), id: 12 },
  { name: "פסטה קנלוני", image: importImage('barilla_cannelloni.jpeg'), id: 12 },
  { name: "פסטה טליאטלה", image: importImage('barilla_tagliatelle.jpeg'), id: 12 },
  { name: "פסטה פנה טריקולור", image: importImage('barilla_tricolor_penne.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס' 3", image: importImage('barilla_spaghettini_3.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס' 5", image: importImage('barilla_spaghetti_5.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס' 5 מחיטה מלאה", image: importImage('barilla_whole_wheat_spaghetti_5.jpeg'), id: 12 },
  { name: "ניוקי", image: importImage('de_cecco_gnocchi.jpeg'), id: 12 },
  { name: "פסטה פוזילי ללא גלוטן", image: importImage('barilla_gluten_free_fusilli.jpeg'), id: 12 },
  { name: "לזניה ללא גלוטן", image: importImage('barilla_gluten_free_lasagna.jpeg'), id: 12 },
  { name: "פסטה פנה ללא גלוטן", image: importImage('barilla_gluten_free_penne.jpeg'), id: 12 },
  { name: "פסטה ספגטי מס' 5 ללא גלוטן", image: importImage('barilla_gluten_free_spaghetti_5.jpeg'), id: 12 },
  { name: "פסטה פוזילי מחיטה מלאה", image: importImage('taaman_whole_wheat_fusilli.jpeg'), id: 12 },
  { name: "פתיתים אפויים קוסקוס", image: importImage('osem_baked_couscous.jpeg'), id: 12 },
  { name: "פתיתים אפויים טבעות", image: importImage('osem_baked_rings.jpeg'), id: 12 },
  { name: "פתיתים אפויים כוכבים", image: importImage('osem_baked_stars.jpeg'), id: 12 },
  { name: "פתיתים אפויים אורז", image: importImage('osem_baked_rice.jpeg'), id: 12 },
  { name: "פתיתים אפויים עם בצל", image: importImage('osem_baked_onion.jpeg'), id: 12 },
  { name: "פתיתים אפויים קוסקוס 3 צבעים", image: importImage('osem_baked_couscous_3_colors.jpeg'), id: 12 },
  { name: "פתיתים 30% חיטה מלאה", image: importImage('osem_baked_whole_wheat_plus.jpeg'), id: 12 },
  { name: "פתיתים אפויים מקמח מלא", image: importImage('sugat_baked_whole_wheat.jpeg'), id: 12 },
  { name: "מיני קרוטונים מתובלים למרק ולסלט", image: importImage('osem_mini_croutons_400g.jpeg'), id: 12 },
  { name: "קרוטונים אפויים בתיבול ביתי", image: importImage('osem_baked_croutons_home_style.jpeg'), id: 12 },
  { name: "קרוטונים מתובלים למרק ולסלט", image: importImage('osem_croutons_400g.jpeg'), id: 12 },
  { name: "קרוטונים אפויים לסלט מקמח כוסמין", image: importImage('master_chef_croutons_spelt.jpeg'), id: 12 },
  { name: "אטריות דקות", image: importImage('osem_thin_noodles.jpeg'), id: 12 },
  { name: "אטריות בינוניות", image: importImage('osem_medium_noodles.jpeg'), id: 12 },
  { name: "אטריות דקיקות", image: importImage('osem_very_thin_noodles.jpeg'), id: 12 },
  { name: "אטריות קלאסיות", image: importImage('osem_classic_noodles.jpeg'), id: 12 },
  { name: "מיני קרוטונים למרק בתיבול שום, בצל ופטרוזיליה", image: importImage('master_chef_mini_croutons_garlic_onion_parsley.jpeg'), id: 12 },
  { name: "קרוטונים לסלט בתיבול עגבניות ובזיליקום", image: importImage('master_chef_croutons_tomato_basil.jpeg'), id: 12 },
  { name: "אטריות אורז דקות", image: importImage('master_chef_thin_rice_noodles.jpeg'), id: 12 },
  { name: "נודלס אטריות ביצים", image: importImage('master_chef_egg_noodles.jpeg'), id: 12 },
  { name: "אטריות ביצים רחבות", image: importImage('willy_food_wide_egg_noodles.jpeg'), id: 12 },
  { name: "אטריות ביצים", image: importImage('willy_food_egg_noodles.jpeg'), id: 12 },
  { name: "אטריות ביצים דקות להכנה מהירה", image: importImage('tomer_thin_egg_noodles.jpeg'), id: 12 },
  { name: "אטריות עם עגבניות", image: importImage('taste_of_asia_tomato_noodles.jpeg'), id: 12 },
  { name: "אטריות עם תרד", image: importImage('taste_of_asia_spinach_noodles.jpeg'), id: 12 },
  { name: "עלי לזניה", image: importImage('perfecto_lasagna_sheets.jpeg'), id: 12 },
  { name: "שקדי מרק בשקית", image: importImage('osem_soup_mandels_400g.jpeg'), id: 12 },
  { name: "שקדי מרק במיכל", image: importImage('osem_soup_mandels_container.jpeg'), id: 12 },
  { name: "אטריות שעועית מאסטר שף", image: importImage('master_chef_bean_noodles.jpeg'), id: 12 },
  { name: "פסטה טריגאטלי", image: importImage('barilla_trigatli.jpeg'), id: 12 },
  { name: "ספגטי מקמח כוסמין מלא אורגני", image: importImage('tevaot_organic_spelt_spaghetti.jpeg'), id: 12 },
  { name: "פסטה אורגנית פנה", image: importImage('barilla_organic_penne_rigate.jpeg'), id: 12 },
  { name: "פסטה ספגטי אורגני", image: importImage('barilla_organic_spaghetti.jpeg'), id: 12 },
  { name: "שקדי מרק ללא גלוטן ללא תוספת סוכר", image: importImage('dagash_gluten_free_soup_mandels.jpeg'), id: 12 },
];

const initialFloursaltsugar = [
  { name: "סוכר לבן", image: importImage('white_sugar_1kg_sugat.jpeg'), id: 10 },
  { name: "סוכר חום דמררה קלאסי", image: importImage('brown_demerara_sugar_1kg_sugat.jpeg'), id: 10 },
  { name: "סוכר גולדן קלאסי", image: importImage('golden_sugar_1kg_sugat.jpeg'), id: 10 },
  { name: "קוביות סוכר", image: importImage('sugar_cubes_500g.jpeg'), id: 10 },
  { name: "מלח שולחן", image: importImage('table_salt_1kg_salit.jpeg'), id: 10 },
  { name: "מלח רגיל למליחת בשר ובישול", image: importImage('regular_salt_1kg_salit.jpeg'), id: 10 },
  { name: "מלח עדין", image: importImage('fine_salt_1kg_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח גס", image: importImage('coarse_salt_1kg_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח ים גס", image: importImage('coarse_sea_salt_500g_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח ים דק", image: importImage('fine_sea_salt_250g_melach_haaretz.jpeg'), id: 10 },
  { name: "תערובת מלחים 50% פחות נתרן", image: importImage('50_percent_less_sodium_salt_mix_250g_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח ים מעושר ביוד", image: importImage('iodized_sea_salt_250g_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח הימלאיה דק", image: importImage('fine_himalayan_salt_1kg_melach_haaretz.jpeg'), id: 10 },
  { name: "מלח הימלאיה גס", image: importImage('coarse_himalayan_salt_1kg_melach_haaretz.jpeg'), id: 10 },
  { name: "קמח חיטה לאפיית לחמים וחלות", image: importImage('bread_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח חיטה לבן בהיר מנופה", image: importImage('sifted_white_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח תופח מנופה", image: importImage('sifted_self_rising_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח חיטה מלא 100% מנופה", image: importImage('sifted_whole_wheat_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח לחם וחלות מנופה", image: importImage('sifted_bread_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח חיטה 80% מנופה", image: importImage('sifted_80_percent_wheat_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח כוסמין לבן", image: importImage('neflayot_white_spelt_flour_1kg.jpeg'), id: 10 },
  { name: "קמח כוסמין בהיר 80%", image: importImage('neflayot_light_spelt_flour_80_percent_1kg.jpeg'), id: 10 },
  { name: "קמח שמרים רב תכליתי", image: importImage('sugat_all_purpose_yeast_flour_1kg.jpeg'), id: 10 },
  { name: "קמח חיטה לבן בהיר", image: importImage('sugat_multifunctional_stibel_white_wheat_flour_1kg.jpeg'), id: 10 },
  { name: "קמח לחם", image: importImage('sugat_stibel_bread_flour_1kg.jpeg'), id: 10 },
  { name: "קמח חיטה מלא", image: importImage('sugat_stibel_whole_wheat_flour_1kg.jpeg'), id: 10 },
  { name: "קמח תופח", image: importImage('sugat_stibel_self_rising_flour_1kg.jpeg'), id: 10 },
  { name: "קמח פיצה ופוקצ'ה", image: importImage('sugat_stibel_pizza_focaccia_flour_1kg.jpeg'), id: 10 },
  { name: "קמח תירס להכנה מהירה", image: importImage('piccata_quick_cooking_corn_flour_500g.jpeg'), id: 10 },
  { name: "קמח תירס דק", image: importImage('piccata_fine_corn_flour_1kg.jpeg'), id: 10 },
  { name: "קמח תירס להכנה מהירה", image: importImage('piccata_quick_cooking_corn_flour_1kg.jpeg'), id: 10 },
  { name: "מטחנת מלח ים גבישי מהים האדום", image: importImage('red_sea_granular_salt_mill_250g.jpeg'), id: 10 },
  { name: "מטחנת סלעי מלח גרוסים מהרי ההימלאיה", image: importImage('himalayan_rock_salt_mill_300g.jpeg'), id: 10 },
  { name: "מלח ים מועשר ביוד", image: importImage('iodized_sea_salt_1kg_salt_of_the_earth.jpeg'), id: 10 },
  { name: "קמח חיטה לפיצה ופוקצ'ה מנופה", image: importImage('sifted_pizza_focaccia_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח כוסמין מלא", image: importImage('whole_spelt_flour_1kg_israel_mills.jpeg'), id: 10 },
  { name: "קמח מצה חמץ", image: importImage('chametz_matzo_meal_500g_maya.jpeg'), id: 10 },
  { name: "קמח שמרים חלה", image: importImage('challah_yeast_flour_1kg_sugat.jpeg'), id: 10 },
  { name: "קמח שמרים פיצה", image: importImage('pizza_yeast_flour_1kg_sugat.jpeg'), id: 10 },
  { name: "קמח שקדים", image: importImage('almond_flour_100g_chef.jpeg'), id: 10 },
  { name: "קמח שקדים", image: importImage('almond_flour_250g_maya.jpeg'), id: 10 },
  { name: "קורנפלור", image: importImage('cornflour_500g_maya.jpeg'), id: 10 },
  { name: "אבקת סוכר", image: importImage('powdered_sugar_100g_hanamal.jpeg'), id: 10 },
  { name: "סוכר וניל", image: importImage('vanilla_sugar_10x10g_hanamal.jpeg'), id: 10 },
  { name: "סוכר בטעם וניל", image: importImage('vanilla_flavored_sugar_100g_maya.jpeg'), id: 10 },
  { name: "סוכר חום כהה לאפיה", image: importImage('dark_brown_sugar_baking_1kg_sugat.jpeg'), id: 10 },
  { name: "קמח תפוחי אדמה", image: importImage('potato_flour_500g_maya.jpeg'), id: 10 },
  { name: "סוכר קנים אורגני", image: importImage('organic_cane_sugar_1kg_haraduf.jpeg'), id: 10 },
  { name: "סוכר קוקוס אורגני", image: importImage('organic_coconut_sugar_300g_tevaot.jpeg'), id: 10 },
  { name: "קמח תירס ללא גלוטן", image: importImage('gluten_free_corn_flour_1kg_willy_food.jpeg'), id: 10 },
  { name: "קמח אורז מלא ללא גלוטן", image: importImage('gluten_free_brown_rice_flour_400g_tevaot.jpeg'), id: 10 },
  { name: "קמח חומוס ללא גלוטן", image: importImage('gluten_free_chickpea_flour_400g_tevaot.jpeg'), id: 10 },
  { name: "קמח כוסמת ירוקה ללא גלוטן", image: importImage('gluten_free_green_buckwheat_flour_400g_tevaot.jpeg'), id: 10 },
  { name: "קמח עדשים כתומות ללא גלוטן", image: importImage('gluten_free_red_lentil_flour_400g_tevaot.jpeg'), id: 10 },
];

const initialCoffeedrinkingpowders = [
  { name: "קפה שחור", image: importImage('jacobs_black_coffee_200g.jpeg'), id: 15 },
  { name: "קפה נמס טייסטרס צ'ויס", image: importImage('nescafe_tasters_choice_200g.jpeg'), id: 15 },
  { name: "קפה נמס טייסטרס צ'ויס בריסטה", image: importImage('nescafe_tasters_choice_barista_180g.jpeg'), id: 15 },
  { name: "קפה נמס טייסטרס צ'ויס נטול קפאין", image: importImage('nescafe_tasters_choice_decaf_200g.jpeg'), id: 15 },
  { name: "קפה נמס מגורען רד מאג", image: importImage('nescafe_red_mug_200g.jpeg'), id: 15 },
  { name: "קפה נמס מיובש בתוספת קפה קלוי", image: importImage('nescafe_gold_200g.jpeg'), id: 15 },
  { name: "נסקפה טייסטרס צ'ויס רוסטרי קלייה בהירה טעם עדין", image: importImage('nescafe_tasters_choice_roastery_light_roast_95g.jpeg'), id: 15 },
  { name: "מנות אישיות קפה נמס טייסטרס צ'ויס", image: importImage('nescafe_tasters_choice_individual_packs_20.jpeg'), id: 15 },
  { name: "קפה טורקי", image: importImage('elite_turkish_coffee_200g.jpeg'), id: 15 },
  { name: "קפה טורקי עם הל", image: importImage('elite_turkish_coffee_with_cardamom_100g.jpeg'), id: 15 },
  { name: "מנות אישיות קפה טורקי", image: importImage('elite_turkish_coffee_individual_packs_24.jpeg'), id: 15 },
  { name: "קפה טורקי קלוי וטחון", image: importImage('elite_turkish_coffee_roasted_1kg.jpeg'), id: 15 },
  { name: "קפה נמס עלית", image: importImage('elite_instant_coffee_200g.jpeg'), id: 15 },
  { name: "מנות אישיות קפה נמס", image: importImage('elite_instant_coffee_on_the_go_28_packs.jpeg'), id: 15 },
  { name: "PLATINUM קפה נמס קלאסיק", image: importImage('elite_platinum_classic_200g.jpeg'), id: 15 },
  { name: "PLATINUM ברזילאי קפה נמס", image: importImage('elite_platinum_brazil_200g.jpeg'), id: 15 },
  { name: "PLATINUM קפה נמס נטול קפאין", image: importImage('elite_platinum_decaf_200g.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה בטעם וניל", image: importImage('pediasure_vanilla_powder_400g.jpeg'), id: 15 },
  { name: "קפה פילטר טחון וקלוי מוקה", image: importImage('elite_filter_coffee_mocha_no1_500g.jpeg'), id: 15 },
  { name: "שוקולית", image: importImage('elite_shokolit_500g.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה אייס קפה בטעם קלאסי", image: importImage('elite_ice_coffee_powder_classic_8_units.jpeg'), id: 15 },
  { name: "קפה טורקי נטול קפאין", image: importImage('hag_turkish_coffee_decaf_200g.jpeg'), id: 15 },
  { name: "קפה נמס נטול קפאין", image: importImage('hag_instant_coffee_decaf_200g.jpeg'), id: 15 },
  { name: "קפה שחור עם הל", image: importImage('al_nakhla_black_coffee_with_cardamom_250g.jpeg'), id: 15 },
  { name: "קפה שחור בלי הל", image: importImage('al_nakhla_black_coffee_without_cardamom_250g.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה על בסיס עולש", image: importImage('chicoree_leroux_100g.jpeg'), id: 15 },
  { name: "חלבית מלבין קפה חלבי", image: importImage('elite_coffee_creamer_350g.jpeg'), id: 15 },
  { name: "מלבין קפה", image: importImage('complete_coffee_creamer_400g.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה קפה בטעם אגוזי לוז", image: importImage('elite_hazelnut_coffee_powder_10_units.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה קפה בטעם וניל", image: importImage('elite_vanilla_coffee_powder_10_units.jpeg'), id: 15 },
  { name: "פולי קפה בלנד הבית", image: importImage('elite_house_blend_coffee_beans_450g.jpeg'), id: 15 },
  { name: "פולי קפה קלויים בקלייה מקומית עוצמה 10", image: importImage('elite_local_roasted_coffee_beans_1kg.jpeg'), id: 15 },
  { name: "אבקה להכנת משקה חלב בטעם שוקו", image: importImage('mia_chocolate_drink_powder_500g.jpeg'), id: 15 },
];

const initialCoffeecapsules = [
  {
    name: "קפסולות סאני דיי עוצמה 5",
    image: importImage('starbucks_sunny_day_intensity_5.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות בלונד עוצמה 6",
    image: importImage('starbucks_blonde_intensity_6.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קולומביה עוצמה 7",
    image: importImage('starbucks_colombia_intensity_7.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות פייק פלייס עוצמה 7",
    image: importImage('starbucks_pike_place_intensity_7.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות האוס בלנד לונגו עוצמה 8",
    image: importImage('starbucks_house_blend_lungo_intensity_8.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות ורונה ריסטרטו עוצמה 10",
    image: importImage('starbucks_verona_ristretto_intensity_10.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו נטול עוצמה 11",
    image: importImage('starbucks_espresso_decaf_intensity_11.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו עוצמה 11",
    image: importImage('starbucks_espresso_intensity_11.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות איטלאן סטייל רוסט עוצמה 11",
    image: importImage('starbucks_italian_style_roast_intensity_11.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות בטעם וניל עוצמה 5",
    image: importImage('starbucks_vanilla_intensity_5.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות בטעם קרמל עוצמה 5",
    image: importImage('starbucks_caramel_intensity_5.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו קלאסיקו",
    image: importImage('jacobs_espresso_classico.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו לונגו",
    image: importImage('jacobs_espresso_lungo.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו אינטנסו",
    image: importImage('jacobs_espresso_intenso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות אספרסו ריסטרטו",
    image: importImage('jacobs_espresso_ristretto.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה נטול קפאין",
    image: importImage('elite_decaf_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה 100% ברזיל",
    image: importImage('elite_brazil_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה עדין וקטיפתי",
    image: importImage('elite_mild_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה אספרסו עשיר וארומטי",
    image: importImage('elite_rich_aromatic_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה חזק ועשיר",
    image: importImage('elite_strong_rich_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה 100% גואטמלה",
    image: importImage('elite_guatemala_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה חזק ועוצמתי",
    image: importImage('elite_powerful_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה חזק במיוחד",
    image: importImage('elite_extra_strong_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה חזק אש",
    image: importImage('elite_fire_strong_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה בטעם וניל",
    image: importImage('elite_vanilla_flavored_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה בטעם אגוזי לוז",
    image: importImage('elite_hazelnut_flavored_espresso.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות קפה עם הל",
    image: importImage('nahla_coffee_with_cardamom.jpeg'),
    id: 15,
  },
  {
    name: "קפסולות ספלנדיד להכנת משקה בטעם שוקולטה",
    image: importImage('splendid_chocolate_drink_capsules.jpeg'),
    id: 15,
  },
];

const initialTea = [
  {
    name: "תה ויסוצקי קלאסי",
    image: importImage('wissotzky_classic_100.jpeg'),
    id: 15,
  },
  {
    name: "תה ויסוצקי טעם מעודן",
    image: importImage('wissotzky_refined_flavor.jpeg'),
    id: 15,
  },
  {
    name: "תה ארל גריי",
    image: importImage('wissotzky_earl_grey.jpeg'),
    id: 15,
  },
  {
    name: "תה עלים ארל גריי",
    image: importImage('wissotzky_earl_grey_leaves.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק עלים",
    image: importImage('wissotzky_green_tea_leaves.jpeg'),
    id: 15,
  },
  {
    name: "תה קלאסי עם נגיעות נענע",
    image: importImage('wissotzky_classic_mint.jpeg'),
    id: 15,
  },
  {
    name: "תה צ'אי מסאלה",
    image: importImage('wissotzky_chai_masala.jpeg'),
    id: 15,
  },
  {
    name: "תה צ'אי קרמל מלוח",
    image: importImage('wissotzky_chai_salted_caramel.jpeg'),
    id: 15,
  },
  {
    name: "תה צ'אי שקדים",
    image: importImage('wissotzky_chai_almond.jpeg'),
    id: 15,
  },
  {
    name: "תה צ'אי מוקה",
    image: importImage('wissotzky_chai_mocha.jpeg'),
    id: 15,
  },
  {
    name: "צ'אי וניל והל",
    image: importImage('wissotzky_vanilla_cardamom_chai.jpeg'),
    id: 15,
  },
  {
    name: "תערובת תה שחור עם הל",
    image: importImage('wissotzky_black_tea_cardamom.jpeg'),
    id: 15,
  },
  {
    name: "תה נענע",
    image: importImage('wissotzky_mint_tea.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק סיני קלאסי",
    image: importImage('wissotzky_chinese_green_tea.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק לימונית ולואיזה",
    image: importImage('wissotzky_green_lemon_louisa.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק נענע",
    image: importImage('wissotzky_green_mint.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק לימונית ולואיזה בתוספת עלי סטיביה",
    image: importImage('wissotzky_green_stevia_lemon_louisa.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק יסמין",
    image: importImage('wissotzky_green_jasmine.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק לימונית וג'ינג'ר",
    image: importImage('wissotzky_green_lemon_ginger.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק ארל גריי",
    image: importImage('wissotzky_green_earl_grey.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק מרווה",
    image: importImage('wissotzky_green_sage.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק קמומיל",
    image: importImage('wissotzky_green_chamomile.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק צ'אי מסאלה",
    image: importImage('wissotzky_green_chai_masala.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק וניל",
    image: importImage('wissotzky_green_vanilla.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק ג'ינג'ר חריף",
    image: importImage('wissotzky_green_spicy_ginger.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק בטעם קינמון ודבש",
    image: importImage('wissotzky_green_cinnamon_honey.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק מנגו",
    image: importImage('wissotzky_green_mango.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק תפוז, ג'ינג'ר וכורכום",
    image: importImage('wissotzky_green_orange_ginger_turmeric.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק עם צמחים סגולים בטעם אוכמניות ואסאי",
    image: importImage('wissotzky_green_blueberry_acai.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק קינמון, ג'ינג'ר וכורכום עם מאצ'ה יפנית",
    image: importImage('wissotzky_green_cinnamon_ginger_turmeric_matcha.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק לימונית וג'ינג'ר עם ויטמינים C ו- D",
    image: importImage('wissotzky_plus_green_lemon_ginger_vitamins.jpeg'),
    id: 15,
  },
  {
    name: "תה ירוק נענע עם ויטמינים C ו- D",
    image: importImage('wissotzky_plus_green_mint_vitamins.jpeg'),
    id: 15,
  },
];

const initialTeainfusions = [
  {
    name: "חליטה גלילית - לקט צמחים ותבלינים בהשראת הגליל",
    image: importImage('wissotzky_galilee_herbal_blend.jpeg'),
    id: 15,
  },
  {
    name: "חליטה מדברית - לקט צמחים ותבלינים בהשאת המדבר",
    image: importImage('wissotzky_desert_herbal_blend.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל",
    image: importImage('wissotzky_chamomile_magic_garden.jpeg'),
    id: 15,
  },
  {
    name: "חליטת צמחים לימונית ולואיזה",
    image: importImage('wissotzky_lemon_louisa_magic_garden.jpeg'),
    id: 15,
  },
  {
    name: "חליטת צמחים קסם הקינמון",
    image: importImage('wissotzky_cinnamon_magic.jpeg'),
    id: 15,
  },
  {
    name: "חליטת פירות וצמחים הילולי פירות",
    image: importImage('wissotzky_fruit_festivity.jpeg'),
    id: 15,
  },
  {
    name: "חליטת שומר",
    image: importImage('wissotzky_fennel_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת פירות וצמחים בטעם פירות יער",
    image: importImage('wissotzky_berry_fruit_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת מנטה",
    image: importImage('wissotzky_mint_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת לואיזה וורבנה",
    image: importImage('wissotzky_louisa_verbena_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת פירות וצמחים בטעם חמוציות",
    image: importImage('wissotzky_cranberry_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת פירות וצמחים בטעם ג'ינג'ר ודבש",
    image: importImage('wissotzky_ginger_honey_effect_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת פירות וצמחים בטעם פסיפלורה ומנגו",
    image: importImage('wissotzky_passion_mango_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת לימונענע ללא קפאין",
    image: importImage('wissotzky_lemon_mint_caffeine_free.jpeg'),
    id: 15,
  },
  {
    name: "חליטת תפוח וקינמון - סיידר",
    image: importImage('wissotzky_apple_cinnamon_cider.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל ונענע",
    image: importImage('wissotzky_chamomile_mint_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל ודבש",
    image: importImage('wissotzky_chamomile_honey_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל ולימונית",
    image: importImage('wissotzky_chamomile_lemon_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת לימונית ולואיזה",
    image: importImage('wissotzky_lemon_louisa_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת חמדת השקד",
    image: importImage('wissotzky_almond_delight_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל ולבנדר",
    image: importImage('wissotzky_chamomile_lavender_night_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת קמומיל ומליסה",
    image: importImage('wissotzky_chamomile_melissa_night_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטה קרה בטעם אפרסק לואיזה",
    image: importImage('wissotzky_cold_brew_peach_louisa.jpeg'),
    id: 15,
  },
  {
    name: "חליטה קרה בטעם לימונענע",
    image: importImage('wissotzky_cold_brew_lemon_mint.jpeg'),
    id: 15,
  },
  {
    name: "חליטה קרה בטעם פטל אוכמניות",
    image: importImage('wissotzky_cold_brew_berry_herbal_tea.jpeg'),
    id: 15,
  },
  {
    name: "חליטת רימונים",
    image: importImage('pompadour_pomegranate_herbal_tea.jpeg'),
    id: 15,
  },
];

const initialTahini = [
  {
    name: "טחינה 100% שומשום טהור",
    image: importImage('baraka_pure_sesame_tahini_1kg.jpeg'),
    id: 5,
  },
  {
    name: "טחינה משומשום מלא",
    image: importImage('baraka_whole_sesame_tahini.jpeg'),
    id: 5,
  },
  {
    name: "טחינה משומשום מלא פי 6 סידן",
    image: importImage('baraka_high_calcium_tahini.jpeg'),
    id: 5,
  },
];

const initialKetchupmayonnaisemustard = [
  {
    name: "מתבל עגבניות",
    image: importImage('heinz_tomato_sauce.jpeg'),
    id: 5,
  },
  {
    name: "מתבל עגבניות ללא תוספת סוכר ומלח",
    image: importImage('heinz_no_sugar_no_salt_tomato_sauce.jpeg'),
    id: 5,
  },
  {
    name: "קטשופ 50% פחות סוכר ונתרן",
    image: importImage('heinz_low_sugar_sodium_ketchup.jpeg'),
    id: 5,
  },
  {
    name: "רוטב בטעם מיונז וקטשופ",
    image: importImage('heinz_mayo_ketchup_sauce.jpeg'),
    id: 5,
  },
  {
    name: "קטשופ",
    image: importImage('osem_ketchup.jpeg'),
    id: 5,
  },
  {
    name: "קטשופ חריף",
    image: importImage('osem_spicy_ketchup.jpeg'),
    id: 5,
  },
  {
    name: "קטשופ 56% פחות סוכר",
    image: importImage('osem_low_sugar_ketchup.jpeg'),
    id: 5,
  },
  {
    name: "חרדל דיז'ון",
    image: importImage('hellmanns_dijon_mustard.jpeg'),
    id: 5,
  },
  {
    name: "חרדל עם גרגרים",
    image: importImage('hellmanns_mustard_with_grains.jpeg'),
    id: 5,
  },
  {
    name: "חרדל אמיתי",
    image: importImage('telma_real_mustard.jpeg'),
    id: 5,
  },
  {
    name: "חרדל דיז'ון עם גרגרים שלמים",
    image: importImage('reine_dijon_mustard_with_grains.jpeg'),
    id: 5,
  },
  {
    name: "חרדל דיז'ון צרפתי",
    image: importImage('masterchef_french_dijon_mustard.jpeg'),
    id: 5,
  },
  {
    name: "ממרח חרדל",
    image: importImage('masterchef_mustard_spread.jpeg'),
    id: 5,
  },
  {
    name: "רוטב חרדל בטעם תפוזים",
    image: importImage('scandia_orange_flavored_mustard_sauce.jpeg'),
    id: 5,
  },
  {
    name: "רוטב חרדל עם דבש",
    image: importImage('scandia_honey_mustard_sauce.jpeg'),
    id: 5,
  },
  {
    name: "מיונז אמיתי",
    image: importImage('hellmanns_real_mayo.jpeg'),
    id: 5,
  },
  {
    name: "מיונז אמיתי בקבוק לחיץ",
    image: importImage('hellmanns_real_mayo_squeeze.jpeg'),
    id: 5,
  },
  {
    name: "ממרח מופחת שומן בקבוק לחיץ",
    image: importImage('hellmanns_low_fat_mayo_squeeze.jpeg'),
    id: 5,
  },
  {
    name: "ממרח מתובל שום",
    image: importImage('masterchef_garlic_spread.jpeg'),
    id: 5,
  },
  {
    name: "מיונז וואסבי",
    image: importImage('masterchef_wasabi_mayo.jpeg'),
    id: 5,
  },
  {
    name: "ממרח מתובל ספייסי",
    image: importImage('masterchef_spicy_spread.jpeg'),
    id: 5,
  },
  {
    name: "מיונז הולנדי",
    image: importImage('masterchef_dutch_mayo.jpeg'),
    id: 5,
  },
  {
    name: "מיונז כמהין",
    image: importImage('masterchef_truffle_mayo.jpeg'),
    id: 5,
  },
  {
    name: "רוטב מיו-קטש",
    image: importImage('masterchef_mayo_ketchup_sauce.jpeg'),
    id: 5,
  },
  {
    name: "מיונז אמיתי בשפורפרת",
    image: importImage('thomy_real_mayo_tube.jpeg'),
    id: 5,
  },
  {
    name: "ממרח בטעם מיונז מופחת שומן בשפורפרת",
    image: importImage('thomy_low_fat_mayo_tube.jpeg'),
    id: 5,
  },
  {
    name: "ממרח חרדל בשפורפרת",
    image: importImage('thomy_mustard_tube.jpeg'),
    id: 5,
  },
  {
    name: "קטשופ ומיונז בשפורפרת",
    image: importImage('thomy_ketchup_mayo_tube.jpeg'),
    id: 5,
  },
  {
    name: "מיונז אורגני",
    image: importImage('organic_mayo.jpeg'),
    id: 5,
  },
  {
    name: "ממרח טבעוני ויגן",
    image: importImage('hellmanns_vegan_spread.jpeg'),
    id: 5,
  },
];

const initialCannedvegetables = [
  {
    name: "גרעיני תירס מתוק ללא תוספת סוכר ומלח",
    image: importImage('galil_corn_no_sugar.jpeg'),
    id: 9,
  },
  {
    name: "שעועית לבנה ברוטב עגבניות",
    image: importImage('galil_white_bean_tomato_sauce.jpeg'),
    id: 9,
  },
  {
    name: "גרעיני תירס מתוק בלי תוספת סוכר",
    image: importImage('yachin_corn_no_sugar_solo.jpeg'),
    id: 9,
  },
  {
    name: "גרעיני תירס מתוק",
    image: importImage('yachin_corn_sweet.jpeg'),
    id: 9,
  },
  {
    name: "אפונת גינה וגזר",
    image: importImage('yachin_peas_carrots.jpeg'),
    id: 9,
  },
  {
    name: "אפונת גינה",
    image: importImage('yachin_garden_peas.jpeg'),
    id: 9,
  },
  {
    name: "לקט ירקות - אפונת גינה, תפוחי אדמה וגזר",
    image: importImage('yachin_vegetable_mix.jpeg'),
    id: 9,
  },
  {
    name: "פטריות שמפיניון חתוכות",
    image: importImage('willi_food_sliced_mushrooms.jpeg'),
    id: 9,
  },
  {
    name: "תירס גמדי שלם",
    image: importImage('willi_food_baby_corn.jpeg'),
    id: 9,
  },
  {
    name: "עלי גפן ממולאים באורז",
    image: importImage('willi_food_stuffed_grape_leaves.jpeg'),
    id: 9,
  },
  {
    name: "לבבות דקל פרוסות",
    image: importImage('willi_food_sliced_hearts_of_palm.jpeg'),
    id: 9,
  },
  {
    name: "אספרגוס לבן שלם מקולף",
    image: importImage('willi_food_white_asparagus.jpeg'),
    id: 9,
  },
  {
    name: "גרגרי חומוס",
    image: importImage('strauss_taste_nature_chickpeas.jpeg'),
    id: 9,
  },
  {
    name: "שעועית אדומה",
    image: importImage('strauss_taste_nature_red_beans.jpeg'),
    id: 9,
  },
  {
    name: "אפונה ירוקה",
    image: importImage('strauss_taste_nature_green_peas.jpeg'),
    id: 9,
  },
  {
    name: "שעועית לבנה",
    image: importImage('strauss_taste_nature_white_beans.jpeg'),
    id: 9,
  },
  {
    name: "פרוסות פלפל חלפיניו בחומץ",
    image: importImage('tomer_jalapeno_peppers_vinegar.jpeg'),
    id: 9,
  },
  {
    name: "לבבות דקל פרוסות במי מלח",
    image: importImage('tomer_sliced_hearts_of_palm.jpeg'),
    id: 9,
  },
  {
    name: "שום צעיר ושיני שום כבושים בחומץ",
    image: importImage('tomer_pickled_garlic_vinegar.jpeg'),
    id: 9,
  },
  {
    name: "שיני שום כבושים בחומץ",
    image: importImage('tomer_pickled_garlic_cloves_vinegar.jpeg'),
    id: 9,
  },
  {
    name: "כרוב כבוש",
    image: importImage('beit_hashita_sauerkraut.jpeg'),
    id: 9,
  },
  {
    name: "פלפל שיפקה חריף כבוש",
    image: importImage('beit_hashita_spicy_shifka_pepper.jpeg'),
    id: 9,
  },
  {
    name: "פלפל שיפקונית חריף כבוש",
    image: importImage('beit_hashita_spicy_shifkonit_pepper.jpeg'),
    id: 9,
  },
  {
    name: "חצילים מוחמצים",
    image: importImage('motola_pickled_eggplant.jpeg'),
    id: 9,
  },
  {
    name: "כרוב לבן כבוש קצוץ",
    image: importImage('motola_chopped_sauerkraut.jpeg'),
    id: 9,
  },
  {
    name: "ירקות מעורבים כבושים חתוכים",
    image: importImage('motola_mixed_pickled_vegetables.jpeg'),
    id: 9,
  },
  {
    name: "רצועות פלפל אדום מוחמץ",
    image: importImage('motola_red_pepper_slices_pickled.jpeg'),
    id: 9,
  },
  {
    name: "פלפלים כבושים - חריפים",
    image: importImage('sera_spicy_pickled_peppers.jpeg'),
    id: 9,
  },
  {
    name: "פלפלים ירוקים כבושים - לא חריף",
    image: importImage('sera_green_peppers_pickled_not_spicy.jpeg'),
    id: 9,
  },
  {
    name: "לבבות דקל שלמים במי מלח",
    image: importImage('taim_whole_hearts_of_palm.jpeg'),
    id: 9,
  },
  {
    name: "פרוסות לבבות דקל במי מלח",
    image: importImage('taim_sliced_hearts_of_palm.jpeg'),
    id: 9,
  },
  {
    name: "עדשים חומות - מבושלות ומוכנות לאכילה",
    image: importImage('strauss_taste_nature_brown_lentils.jpeg'),
    id: 9,
  },
  {
    name: "פטריות שמפיניון חתוכות במי מלח",
    image: importImage('tomer_sliced_mushrooms_salted_water.jpeg'),
    id: 9,
  },
  {
    name: "פטריות שמפיניון שלמות בגודל בינוני",
    image: importImage('tomer_whole_mushrooms_medium.jpeg'),
    id: 9,
  },
  {
    name: "פרוסות פלפל חלפיניו חריף בחומץ",
    image: importImage('shkedia_sliced_jalapeno_vinegar.jpeg'),
    id: 9,
  },
  {
    name: "פרוסות פלפל חלפיניו חריף בחומץ בטעם חמוץ מתוק",
    image: importImage('shkedia_sliced_jalapeno_sweet_sour_vinegar.jpeg'),
    id: 9,
  },
  {
    name: "צלפים במי מלח",
    image: importImage('willi_food_capers_salt_water.jpeg'),
    id: 9,
  },
  {
    name: "שעועית חומה - מבושלת ומוכנה לאכילה",
    image: importImage('strauss_taste_nature_brown_beans.jpeg'),
    id: 9,
  },
  {
    name: "שעועית שחורה - מבושלת ומוכנה לאכילה",
    image: importImage('strauss_taste_nature_black_beans.jpeg'),
    id: 9,
  },
];

const initialCannedcucumbers = [
  {
    name: "מלפפונים במלח גדולים",
    image: importImage('beit_hashita_large_picked_cucumbers_7_9.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים בחומץ גדולים",
    image: importImage('beit_hashita_large_cucumbers_in_vinegar_7_9.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים במלח בינוניים",
    image: importImage('beit_hashita_medium_picked_cucumbers_10_12.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים בחומץ בינוניים",
    image: importImage('beit_hashita_medium_cucumbers_in_vinegar_10_12.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים במלח קטנים",
    image: importImage('beit_hashita_small_picked_cucumbers_13_17.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים בחומץ קטנים",
    image: importImage('beit_hashita_small_cucumbers_in_vinegar_13_17.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים במלח קטנים מאוד",
    image: importImage('beit_hashita_very_small_picked_cucumbers_18_25.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים בחומץ קטנים מאוד",
    image: importImage('beit_hashita_very_small_cucumbers_in_vinegar_18_25.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים במלח עם פלפל חריף ושום",
    image: importImage('beit_hashita_baladi_picked_cucumbers_with_hot_pepper_and_garlic_13_17.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים מוחמצים",
    image: importImage('dedia_vanya_picked_cucumbers.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים כבושים במלח קטנים מאוד",
    image: importImage('willi_food_very_small_picked_cucumbers_18_25.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים קורנישונים בחומץ חריפות מעודנת קטנים מאוד",
    image: importImage('tomer_very_small_cornichons_in_vinegar_mild_spicy.jpeg'),
    id: 9,
  },
];

const initialCannedolives = [
  {
    name: "זיתים ירוקים ללא גלעין",
    image: importImage('beit_hashita_pitted_green_olives_haruzit.jpeg'),
    id: 9,
  },
  {
    name: "קוקטייל זיתים",
    image: importImage('beit_hashita_olive_cocktail.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים שלמים גדולים מאוד בטעם שום",
    image: importImage('beit_hashita_large_green_olives_with_garlic_flavor.jpeg'),
    id: 9,
  },
  {
    name: "קוקטייל זיתים ללא גלעין",
    image: importImage('beit_hashita_haruzit_olive_cocktail.jpeg'),
    id: 9,
  },
  {
    name: "זיתים שחורים ללא גלעין קלמטה",
    image: importImage('beit_hashita_pitted_black_kalamata_olives_haruzit.jpeg'),
    id: 9,
  },
  {
    name: "טבעות זיתים קלמטה",
    image: importImage('beit_hashita_kalamata_olive_rings.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים מבוקעים",
    image: importImage('beit_hashita_cracked_green_olives.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים שלמים בינוניים",
    image: importImage('beit_hashita_medium_whole_green_olives.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים שלמים גדולים",
    image: importImage('beit_hashita_large_whole_green_olives.jpeg'),
    id: 9,
  },
  {
    name: "זית מרוקאי",
    image: importImage('beit_hashita_moroccan_olive.jpeg'),
    id: 9,
  },
  {
    name: "זיתים מושחרים ללא גלעין",
    image: importImage('beit_hashita_pitted_black_olives_haruzit.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים מנזנילו",
    image: importImage('motola_manzanillo_green_olives.jpeg'),
    id: 9,
  },
  {
    name: "זיתים ירוקים נובו ענק בצנצנת",
    image: importImage('motola_novo_giant_green_olives_in_jar.jpeg'),
    id: 9,
  },
  {
    name: "טבעות זיתים ירוקים",
    image: importImage('motola_green_olive_rings.jpeg'),
    id: 9,
  },
  {
    name: "זיתים חתוכים מרינט",
    image: importImage('motola_cut_marinade_olives.jpeg'),
    id: 9,
  },
  {
    name: "טבעות זיתים מושחרים",
    image: importImage('motola_black_olive_rings.jpeg'),
    id: 9,
  },
  {
    name: "זיתים מבוקעים סורי",
    image: importImage('motola_syrian_cracked_olives.jpeg'),
    id: 9,
  },
  {
    name: "מיקס זית ירוק וזית קלמטה ללא גלעין עם שמן זית",
    image: importImage('zeta_mixed_green_and_kalamata_olives_with_olive_oil.jpeg'),
    id: 9,
  },
  {
    name: "זית סורי עם לימון כבוש ועם שמן זית כתית מעולה",
    image: importImage('zeta_syrian_olive_with_preserved_lemon_and_olive_oil.jpeg'),
    id: 9,
  },
  {
    name: "זיתי קלמטה עם שמן זית כתית מעולה",
    image: importImage('zeta_kalamata_olives_with_olive_oil.jpeg'),
    id: 9,
  },
  {
    name: "מיקס זיתים יווני",
    image: importImage('zeta_greek_olive_mix.jpeg'),
    id: 9,
  },
  {
    name: "מיקס זית ירוק וזית קלמטה עם שמן זית כתית מעולה",
    image: importImage('zeta_mixed_green_and_kalamata_olives_with_olive_oil_215g.jpeg'),
    id: 9,
  },
];

const initialCannedtomatoes = [
  {
    name: "עגבניות מרוסקות מתובלות עם שום",
    image: importImage('crushed_tomatoes_with_garlic_tal.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מרוסקות",
    image: importImage('crushed_tomatoes_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב עגבניות מרוכז",
    image: importImage('concentrated_tomato_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב עגבניות מרוכז מאוד",
    image: importImage('highly_concentrated_tomato_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות קצוצות ברסק עגבניות",
    image: importImage('chopped_tomatoes_in_tomato_puree_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מרוסקות ובזיליקום",
    image: importImage('crushed_tomatoes_with_basil_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מרוסקות ושום",
    image: importImage('crushed_tomatoes_with_garlic_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מרוסקות חתוכות לקוביות",
    image: importImage('crushed_tomatoes_diced_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מרוסקות ובצל",
    image: importImage('crushed_tomatoes_with_onion_yachin.jpeg'),
    id: 9,
  },
  {
    name: "מחית עגבניות קלה",
    image: importImage('light_tomato_puree_bella_italia.jpeg'),
    id: 9,
  },
  {
    name: "תרכיז עגבניות בשפורפרת",
    image: importImage('tomato_concentrate_in_tube_mutti.jpeg'),
    id: 9,
  },
  {
    name: "קוביות עגבניות מקולפות במיץ",
    image: importImage('peeled_tomato_cubes_in_juice_mutti.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות איטלקיות מרוסקות",
    image: importImage('crushed_italian_tomatoes_strauss_taste_of_nature.jpeg'),
    id: 9,
  },
  {
    name: "מחית עגבניות איטלקיות",
    image: importImage('italian_tomato_puree_strauss_taste_of_nature.jpeg'),
    id: 9,
  },
  {
    name: "מחית עגבניות חתוכות דק",
    image: importImage('rustica_finely_chopped_tomato_puree_italica.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות מיובשות בשמש עם לימון",
    image: importImage('sun_dried_tomatoes_with_lemon_olivia.jpeg'),
    id: 9,
  },
  {
    name: "חצאי עגבניות מיובשות מתובלות בשמן חמניות ועשבי תיבול",
    image: importImage('sun_dried_tomato_halves_in_sunflower_oil_with_herbs_tomer.jpeg'),
    id: 9,
  },
  {
    name: "מלפפונים ועגבניות מוחמצים",
    image: importImage('pickled_cucumbers_tomatoes_dadia_vania.jpeg'),
    id: 9,
  },
  {
    name: "רוטב פיקנטי מפלפלים וירקות",
    image: importImage('harif_pepper_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "עגבניות שלמות מקולפות במיץ עגבניות",
    image: importImage('whole_peeled_tomatoes_in_juice_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב לפיצה טוסקנה",
    image: importImage('tuscany_pizza_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב סלק ועגבניות לקובה",
    image: importImage('beet_tomato_sauce_for_kuba_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב עגבניות לפיצה",
    image: importImage('pizza_tomato_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב עגבניות לפסטה",
    image: importImage('pasta_tomato_sauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "רוטב עגבניות לקציצות",
    image: importImage('meatball_tomato_sauce_yachin.jpeg'),
    id: 9,
  },
];

const initialCannedfish = [
  {
    name: "סרדינים בשמן צמחי",
    image: importImage('sardines_vegetable_oil_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים בשמן צמחי עם פלפל צ'ילי",
    image: importImage('sardines_chili_pepper_vegetable_oil_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים ברוטב עגבניות",
    image: importImage('sardines_tomato_sauce_willifood.jpeg'),
    id: 9,
  },
  {
    name: "פילה אנשובי אמיתי ארוך בשמן חמניות",
    image: importImage('anchovy_fillets_sunflower_oil_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים בשמן זית",
    image: importImage('sardines_olive_oil_robert.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים בשמן חמניות",
    image: importImage('sardines_sunflower_oil_robert.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים בשמן חמניות חריף",
    image: importImage('sardines_spicy_sunflower_oil_robert.jpeg'),
    id: 9,
  },
  {
    name: "נתחי סלמון עם אורז מלא וירקות",
    image: importImage('starkist_salmon_rice_vegetables.jpeg'),
    id: 9,
  },
  {
    name: "נתחי סלמון עם עדשים קינואה וירקות",
    image: importImage('starkist_salmon_lentils_quinoa_vegetables.jpeg'),
    id: 9,
  },
  {
    name: "נתחי סלמון עם פסטה, עגבניות וזיתים פיקנטי",
    image: importImage('starkist_salmon_pasta_tomatoes_olives.jpeg'),
    id: 9,
  },
  {
    name: "סלמון אטלנטי בשמן קנולה",
    image: importImage('atlantic_salmon_canola_oil_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סלמון אטלנטי בשמן קנולה וצ'ילי",
    image: importImage('atlantic_salmon_canola_oil_chili_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סלמון אטלנטי ברוטב טריאקי",
    image: importImage('atlantic_salmon_teriyaki_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סלמון אטלנטי בשמן קנולה ולימון",
    image: importImage('atlantic_salmon_canola_oil_lemon_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סלמון אטלנטי מעושן בשמן קנולה",
    image: importImage('atlantic_salmon_smoked_canola_oil_willifood.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים מרוקאים ברוטב עגבניות",
    image: importImage('moroccan_sardines_tomato_sauce_tomer.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים מרוקאים עם פלפל חריף",
    image: importImage('moroccan_sardines_spicy_tomer.jpeg'),
    id: 9,
  },
  {
    name: "געפילטע פיש גולד ללא תוספת סוכר",
    image: importImage('gefilte_fish_gold_no_sugar_4_patties_dag_meyuchad.jpeg'),
    id: 9,
  },
  {
    name: "קציצות בסגנון געפילטע פיש עם דגים",
    image: importImage('gefilte_fish_8_patties_dag_meyuchad.jpeg'),
    id: 9,
  },
  {
    name: "געפילטע פיש מדגי קרפיון וכסיף",
    image: importImage('gefilte_fish_14_patties_dag_meyuchad.jpeg'),
    id: 9,
  },
  {
    name: "פילה הרינג ברוטב עגבניות",
    image: importImage('herring_fillet_tomato_sauce_rugen_fisch.jpeg'),
    id: 9,
  },
  {
    name: "פילה הרינג מעושן בשמן צמחי",
    image: importImage('smoked_herring_fillet_vegetable_oil_rugen_fisch.jpeg'),
    id: 9,
  },
  {
    name: "פילה מקרל מעושן בשמן צמחי",
    image: importImage('smoked_mackerel_fillet_vegetable_oil_rugen_fisch.jpeg'),
    id: 9,
  },
  {
    name: "סרדינים בשמן סויה",
    image: importImage('sardines_soy_oil_posidon.jpeg'),
    id: 9,
  },
];

const initialCannedtuna = [
  {
    name: "מארז נתחי טונה בהירה בשמן צמחי",
    image: importImage('tuna_in_vegetable_oil_four_pack_willifood.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה בשמן",
    image: importImage('tuna_in_oil_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה בשמן קנולה'",
    image: importImage('tuna_in_canola_oil_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה במים",
    image: importImage('tuna_in_water_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה בשמן קנולה דל נתרן'",
    image: importImage('tuna_in_low_sodium_canola_oil_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה בשמן זית'",
    image: importImage('tuna_in_olive_oil_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מארז נתחי טונה בהירה במים דל נתרן",
    image: importImage('tuna_in_low_sodium_water_four_pack_starkist.jpeg'),
    id: 9,
  },
  {
    name: "ממרח טונה",
    image: importImage('tuna_spread_starkist.jpeg'),
    id: 9,
  },
  {
    name: "נתחי טונה בהירה בשמן בעישון טבעי",
    image: importImage('smoked_tuna_in_oil_starkist.jpeg'),
    id: 9,
  },
  {
    name: "נתחי טונה בהירה בשמן עם פלפל חריף",
    image: importImage('spicy_tuna_in_oil_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מיקס 4 דגנים וירקות עם טונה טו גו",
    image: importImage('four_grain_vegetable_mix_with_tuna_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מיקס פתיתים וירקות עם טונה טו גו",
    image: importImage('vegetable_pasta_mix_with_tuna_starkist.jpeg'),
    id: 9,
  },
  {
    name: "מיקס שעועית וירקות עם טונה טו גו",
    image: importImage('bean_vegetable_mix_with_tuna_starkist.jpeg'),
    id: 9,
  },
  {
    name: "נתחי טונה בהירה בשמן עם לימון",
    image: importImage('tuna_in_oil_with_lemon_starkist.jpeg'),
    id: 9,
  },
  {
    name: "פילה טונה פרוס עם שמן זית",
    image: importImage('sliced_tuna_fillet_in_olive_oil_etz_hazayit.jpeg'),
    id: 9,
  },
  {
    name: "פילה פרוס ושמן זית בנגיעות טעם לימון ופלפל שחור",
    image: importImage('sliced_tuna_fillet_with_lemon_pepper_etz_hazayit.jpeg'),
    id: 9,
  },
  {
    name: "פילה פרוס עם שמן זית בטעם מעושן",
    image: importImage('smoked_sliced_tuna_fillet_in_olive_oil_etz_hazayit.jpeg'),
    id: 9,
  },
  {
    name: "קינואה לבנה ואדומה עם טונה בשמן זית",
    image: importImage('red_white_quinoa_with_tuna_in_olive_oil_etz_hazayit.jpeg'),
    id: 9,
  },
  {
    name: "בורגול וגרגרי חומוס עם טונה בשמן זית",
    image: importImage('bulgur_chickpeas_with_tuna_in_olive_oil_etz_hazayit.jpeg'),
    id: 9,
  },
  {
    name: "ירקות בנוסח מקסיקני עם טונה",
    image: importImage('mexican_style_vegetables_with_tuna_rio_mare.jpeg'),
    id: 9,
  },
  {
    name: "טונה בשמן זית עם צ'ילי חריף'",
    image: importImage('spicy_tuna_in_olive_oil_rio_mare.jpeg'),
    id: 9,
  },
  {
    name: "ירקות גינה עם טונה",
    image: importImage('garden_vegetables_with_tuna_rio_mare.jpeg'),
    id: 9,
  },
  {
    name: "נתחי טונה בשמן זית שום ופלפל חריף",
    image: importImage('tuna_in_olive_oil_with_garlic_and_chili_rio_mare.jpeg'),
    id: 9,
  },
  {
    name: "ירקות עם קוסקוס וטונה",
    image: importImage('vegetables_with_couscous_and_tuna_rio_mare.jpeg'),
    id: 9,
  },
  {
    name: "טונה עם ירקות בתוספת אורז",
    image: importImage('tuna_with_vegetables_and_rice_rio_mare.jpeg'),
    id: 9,
  },
];

const initialCannedfruit = [
  {
    name: "רסק תפוחים בלי תוספת סוכר",
    image: importImage('sugar_free_applesauce_yachin.jpeg'),
    id: 9,
  },
  {
    name: "חתיכות אננס בסירופ קל",
    image: importImage('pineapple_chunks_in_light_syrup_willifood.jpeg'),
    id: 9,
  },
  {
    name: "דובדבנים חמוצים ללא חרצנים בסירופ",
    image: importImage('pitted_sour_cherries_in_syrup_willifood.jpeg'),
    id: 9,
  },
  {
    name: "רסק תפוחים ממותק",
    image: importImage('sweetened_applesauce_tomer.jpeg'),
    id: 9,
  },
  {
    name: "חצאי אפרסקים בסירופ קל",
    image: importImage('peach_halves_in_light_syrup_tomer.jpeg'),
    id: 9,
  },
  {
    name: "רסק תפוחי עץ עם אפרסק",
    image: importImage('applesauce_with_peach_tomer_four_pack.jpeg'),
    id: 9,
  },
  {
    name: "רסק תפוחים ומנגו אורגני ללא תוספת סוכר",
    image: importImage('organic_sugar_free_apple_mango_sauce_naturfood.jpeg'),
    id: 9,
  },
  {
    name: "חתיכות אננס במיץ אננס",
    image: importImage('pineapple_chunks_in_pineapple_juice_tamen.jpeg'),
    id: 9,
  },
  {
    name: "פרוסות מנגו בסירופ קל",
    image: importImage('mango_slices_in_light_syrup_tamen.jpeg'),
    id: 9,
  },
  {
    name: "קוקטייל פירות בסירופ קל",
    image: importImage('fruit_cocktail_in_light_syrup_willifood.jpeg'),
    id: 9,
  },
];

const initialCracks = [
  {
    name: "גרעיני דלעת קלויים",
    image: importImage('roasted_pumpkin_seeds_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני חמנייה קלויים",
    image: importImage('roasted_sunflower_seeds_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "שקדים קלויים",
    image: importImage('roasted_almonds_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "אגוזי קשיו מטוגנים",
    image: importImage('fried_cashew_nuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "בוטנים מטוגנים",
    image: importImage('fried_peanuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "חטיפי נשצ'אנס",
    image: importImage('nashanch_snacks_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני אבטיח קלויים ומומלחים",
    image: importImage('salted_roasted_watermelon_seeds_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "בוטנים קלויים",
    image: importImage('roasted_peanuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "בוטנים מצופים",
    image: importImage('coated_peanuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "קבוקים שומשום - בוטנים בציפוי אפוי עם שומשום",
    image: importImage('sesame_coated_peanuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני חמניה קלויים ללא תוספת מלח",
    image: importImage('salt_free_roasted_sunflower_seeds_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "שקד טבעי",
    image: importImage('natural_almond_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "אגוזי קשיו קלויים",
    image: importImage('roasted_cashew_nuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "שקדים מולבנים חצויים",
    image: importImage('sliced_peeled_almonds_chef.jpeg'),
    id: 2,
  },
  {
    name: "שקדים מולבנים פרוסים",
    image: importImage('peeled_sliced_almonds_chef.jpeg'),
    id: 2,
  },
  {
    name: "שקדים טבעיים גרוסים",
    image: importImage('ground_natural_almonds_chef.jpeg'),
    id: 2,
  },
  {
    name: "בוטנים טבעיים גרוסים",
    image: importImage('ground_natural_peanuts_chef.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני חמנייה טבעיים קלופים",
    image: importImage('natural_shelled_sunflower_seeds_chef.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני דלעת קלופים",
    image: importImage('shelled_pumpkin_seeds_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "אגוז מלך טבעי",
    image: importImage('natural_walnut_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "פקאן טבעי",
    image: importImage('natural_pecan_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "שקדים בציפוי שוקולד מריר",
    image: importImage('dark_chocolate_coated_almonds_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "צימוקים בציפוי שוקולד חלב",
    image: importImage('milk_chocolate_coated_raisins_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "קשיו טבעי ענק",
    image: importImage('giant_natural_cashew_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "פקאן סיני מסוכר",
    image: importImage('sugared_chinese_pecan_half_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "חמוציות בציפוי שוקולד מריר",
    image: importImage('dark_chocolate_coated_cranberries_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "שקדים בציפוי שוקולד חלב",
    image: importImage('milk_chocolate_coated_almonds_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "אגוזי לוז בציפוי שוקולד חלב",
    image: importImage('milk_chocolate_coated_hazelnuts_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "אגוזי לוז בציפוי שוקולד מריר",
    image: importImage('dark_chocolate_coated_hazelnuts_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "שומשום בציפוי שוקולד מריר",
    image: importImage('dark_chocolate_coated_sesame_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "פקאן בציפוי שוקולד מריר",
    image: importImage('dark_chocolate_coated_pecan_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "צנוברים",
    image: importImage('pine_nuts_mia.jpeg'),
    id: 2,
  },
  {
    name: "מיקס גרעינים, קטניות ואגוזים",
    image: importImage('mix_grains_nuts_master_chef.jpeg'),
    id: 2,
  },
  {
    name: "מיקס חמוציות, גרעינים, קטניות ואגוזים",
    image: importImage('cranberry_mix_grains_nuts_master_chef.jpeg'),
    id: 2,
  },
  {
    name: "גרעיני דלעת קלופים אורגניים",
    image: importImage('organic_shelled_pumpkin_seeds_harod.jpeg'),
    id: 2,
  },
  {
    name: "סבבה בוטנים קלויים מצופים - אריזה אישית",
    image: importImage('personal_size_coated_roasted_peanuts_elit.jpeg'),
    id: 2,
  },
  {
    name: "פיסטוק קלוי",
    image: importImage('giant_roasted_pistachio_shkedia.jpeg'),
    id: 2,
  },
  {
    name: "תערבות אגוזים וחמוציות",
    image: importImage('nut_cranberry_mix_kalayat_gat.jpeg'),
    id: 2,
  }
];

const initialDriedfruits = [
  {
    name: "תמר מג'הול",
    image: importImage('medjool_dates_daklai.jpeg'),
    id: 2,
  },
  {
    name: "ערמונים קלופים וקלויים",
    image: importImage('roasted_chestnuts_kalayat_gat.jpeg'),
    id: 2,
  },
  {
    name: "משמש מיובש",
    image: importImage('dried_apricots_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "חמוציות מסוכרות",
    image: importImage('sugared_cranberries_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "צימוק בהיר",
    image: importImage('light_raisins_sasson_hakole.jpeg'),
    id: 2,
  },
  {
    name: "שזיפים",
    image: importImage('prunes_hacichen.jpeg'),
    id: 2,
  },
  {
    name: "צימוק כהה",
    image: importImage('dark_raisins_hacichen.jpeg'),
    id: 2,
  },
  {
    name: "חמוציות ללא סוכר לבן",
    image: importImage('sugar_free_cranberries_shkedia.jpeg'),
    id: 2,
  },
];

const initialGranolaoats = [
  {
    name: "מוזלי קריספי אגוזים",
    image: importImage('muesli_crispy_nuts_mornflake.jpeg'),
    id: 10,
  },
  {
    name: "מוזלי קריספי פירות",
    image: importImage('muesli_crispy_fruits_mornflake.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל דקה להכנה מהירה",
    image: importImage('quick_oats_shkedia.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל להכנה מהירה בפחית",
    image: importImage('quick_oats_tin_quaker.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל עבה להכנה מהירה",
    image: importImage('thick_quick_oats_shkedia.jpeg'),
    id: 10,
  },
  {
    name: "פתיתי שיבולת שועל - קוואקר אנגלי",
    image: importImage('oat_flakes_english_quaker_mornflake.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל אורגני",
    image: importImage('organic_oat_bran_herdof.jpeg'),
    id: 10,
  },
  {
    name: "מוזלי אגוזים ושקדים",
    image: importImage('muesli_plus_nuts_and_almonds_green.jpeg'),
    id: 10,
  },
  {
    name: "מוזלי 30% פירות",
    image: importImage('muesli_plus_30_fruits_green.jpeg'),
    id: 10,
  },
  {
    name: "מוזלי בתוספת שוקולד ובננה",
    image: importImage('muesli_with_chocolate_and_banana_green.jpeg'),
    id: 10,
  },
  {
    name: "פיטנס גרנולה דבש",
    image: importImage('fitness_granola_honey_nestle.jpeg'),
    id: 10,
  },
  {
    name: "פיטנס גרנולה שוקולד",
    image: importImage('fitness_granola_chocolate_nestle.jpeg'),
    id: 10,
  },
  {
    name: "פיטנס גרנולה חמוציות",
    image: importImage('fitness_granola_cranberries_nestle.jpeg'),
    id: 10,
  },
  {
    name: "גרנולה במבחר אגוזים",
    image: importImage('granola_with_various_nuts_shkedia.jpeg'),
    id: 10,
  },
  {
    name: "גרנולה במבחר פירות יבשים",
    image: importImage('granola_with_variety_of_dried_fruits_shkedia.jpeg'),
    id: 10,
  },
  {
    name: "גרנולה אגוזים ושקדים",
    image: importImage('granola_plus_nuts_and_almonds_green.jpeg'),
    id: 10,
  },
  {
    name: "גרנולה צימוקים ופקאן",
    image: importImage('granola_plus_raisins_and_pecan_green.jpeg'),
    id: 10,
  },
  {
    name: "גרנולה פירות מיובשים",
    image: importImage('granola_plus_dried_fruits_green.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל מלאה להכנה מהירה",
    image: importImage('whole_oats_quick_prep_mia.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל מלאה עבה",
    image: importImage('thick_whole_oats_mia.jpeg'),
    id: 10,
  },
  {
    name: "קוואקר עדין אורגני",
    image: importImage('organic_quick_oats_herdof.jpeg'),
    id: 10,
  },
  {
    name: "קוואקר אורגני",
    image: importImage('organic_oats_herdof.jpeg'),
    id: 10,
  },
  {
    name: "קוואקר עבה אורגני",
    image: importImage('thick_organic_oats_tivoot.jpeg'),
    id: 10,
  },
  {
    name: "שיבולת שועל להכנה מהירה ללא גלוטן",
    image: importImage('quick_oats_gluten_free_quaker.jpeg'),
    id: 10,
  },
  {
    name: "קוואקר עבה ללא גלוטן",
    image: importImage('thick_gluten_free_oats_nutrazen.jpeg'),
    id: 10,
  },
];


  initialBreads.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCakes.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCookies.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCrackers.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialoil.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialVinegarlemonjuice.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialLegumesricecouscous.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPasta.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFloursaltsugar.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCoffeedrinkingpowders.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCoffeecapsules.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialTea.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialTeainfusions.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialTahini.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialKetchupmayonnaisemustard.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedvegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedcucumbers.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedolives.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedtomatoes.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedfish.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedtuna.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCannedfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCracks.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDriedfruits.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialGranolaoats.sort((a, b) => a.name.localeCompare(b.name, 'he'));


  const [breads, setBreads] = useState<{ name: string; image: any; count: number }[]>(
    initialBreads.map(breads => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === breads.name);
      return {
        ...breads,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cakes, setCakes] = useState<{ name: string; image: any; count: number }[]>(
    initialCakes.map(cakes => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cakes.name);
      return {
        ...cakes,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cookies, setCookies] = useState<{ name: string; image: any; count: number }[]>(
    initialCookies.map(cookies => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cookies.name);
      return {
        ...cookies,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [crackers, setCrackers] = useState<{ name: string; image: any; count: number }[]>(
    initialCrackers.map(crackers => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === crackers.name);
      return {
        ...crackers,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [oil, setOil] = useState<{ name: string; image: any; count: number }[]>(
    initialoil.map(oil => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === oil.name);
      return {
        ...oil,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [vinegarLemonjuice, setVinegarLemonjuice] = useState<{ name: string; image: any; count: number }[]>(
    initialVinegarlemonjuice.map(vinegarLemonjuice => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === vinegarLemonjuice.name);
      return {
        ...vinegarLemonjuice,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [legumesricecouscous, setLegumesricecouscous] = useState<{ name: string; image: any; count: number }[]>(
    initialLegumesricecouscous.map(legumesricecouscous => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === legumesricecouscous.name);
      return {
        ...legumesricecouscous,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [pasta, setPasta] = useState<{ name: string; image: any; count: number }[]>(
    initialPasta.map(pasta => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === pasta.name);
      return {
        ...pasta,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [floursaltsugar, setFloursaltsugar] = useState<{ name: string; image: any; count: number }[]>(
    initialFloursaltsugar.map(floursaltsugar => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === floursaltsugar.name);
      return {
        ...floursaltsugar,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [coffeedrinkingpowders, setCoffeedrinkingpowders] = useState<{ name: string; image: any; count: number }[]>(
    initialCoffeedrinkingpowders.map(coffeedrinkingpowders => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === coffeedrinkingpowders.name);
      return {
        ...coffeedrinkingpowders,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [coffeecapsules, setCoffeecapsules] = useState<{ name: string; image: any; count: number }[]>(
    initialCoffeecapsules.map(coffeecapsules => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === coffeecapsules.name);
      return {
        ...coffeecapsules,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [tea, setTea] = useState<{ name: string; image: any; count: number }[]>(
    initialTea.map(tea => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === tea.name);
      return {
        ...tea,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [teainfusions, setTeainfusions] = useState<{ name: string; image: any; count: number }[]>(
    initialTeainfusions.map(teainfusions => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === teainfusions.name);
      return {
        ...teainfusions,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [tahini, setTahini] = useState<{ name: string; image: any; count: number }[]>(
    initialTahini.map(tahini => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === tahini.name);
      return {
        ...tahini,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [ketchupmayonnaisemustard, setKetchupmayonnaisemustard] = useState<{ name: string; image: any; count: number }[]>(
    initialKetchupmayonnaisemustard.map(ketchupmayonnaisemustard => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === ketchupmayonnaisemustard.name);
      return {
        ...ketchupmayonnaisemustard,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedvegetables, setCannedvegetables] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedvegetables.map(cannedvegetables => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedvegetables.name);
      return {
        ...cannedvegetables,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedcucumbers, setCannedcucumbers] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedcucumbers.map(cannedcucumbers => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedcucumbers.name);
      return {
        ...cannedcucumbers,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedolives, setCannedolives] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedolives.map(cannedolives => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedolives.name);
      return {
        ...cannedolives,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedtomatoes, setCannedtomatoes] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedtomatoes.map(cannedtomatoes => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedtomatoes.name);
      return {
        ...cannedtomatoes,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedfish, setCannedfish] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedfish.map(cannedfish => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedfish.name);
      return {
        ...cannedfish,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedtuna, setCannedtuna] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedtuna.map(cannedtuna => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedtuna.name);
      return {
        ...cannedtuna,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cannedfruit, setCannedfruit] = useState<{ name: string; image: any; count: number }[]>(
    initialCannedfruit.map(cannedfruit => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cannedfruit.name);
      return {
        ...cannedfruit,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [cracks, setCracks] = useState<{ name: string; image: any; count: number }[]>(
    initialCracks.map(cracks => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cracks.name);
      return {
        ...cracks,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [driedfruits, setDriedfruits] = useState<{ name: string; image: any; count: number }[]>(
    initialDriedfruits.map(driedfruits => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === driedfruits.name);
      return {
        ...driedfruits,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [granolaoats, setGranolaoats] = useState<{ name: string; image: any; count: number }[]>(
    initialGranolaoats.map(granolaoats => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === granolaoats.name);
      return {
        ...granolaoats,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterBreads = breads.filter(bread =>
    bread.name.includes(searchTerm)
  );
  
  const filterCakes = cakes.filter(cake =>
    cake.name.includes(searchTerm)
  );
  
  const filterCookies = cookies.filter(cookie =>
    cookie.name.includes(searchTerm)
  );
  
  const filterCrackers = crackers.filter(cracker =>
    cracker.name.includes(searchTerm)
  );
  
  const filterOil = oil.filter(oilItem =>
    oilItem.name.includes(searchTerm)
  );
  
  const filterVinegarLemonjuice = vinegarLemonjuice.filter(vinegarLemonjuiceItem =>
    vinegarLemonjuiceItem.name.includes(searchTerm)
  );
  
  const filterLegumesRiceCouscous = legumesricecouscous.filter(legumeRiceCouscous =>
    legumeRiceCouscous.name.includes(searchTerm)
  );
  
  const filterPasta = pasta.filter(pastaItem =>
    pastaItem.name.includes(searchTerm)
  );
  
  const filterFlourSaltSugar = floursaltsugar.filter(flourSaltSugar =>
    flourSaltSugar.name.includes(searchTerm)
  );
  
  const filterCoffeeDrinkingPowders = coffeedrinkingpowders.filter(coffeeDrinkingPowder =>
    coffeeDrinkingPowder.name.includes(searchTerm)
  );
  
  const filterCoffeeCapsules = coffeecapsules.filter(coffeeCapsule =>
    coffeeCapsule.name.includes(searchTerm)
  );
  
  const filterTea = tea.filter(teaItem =>
    teaItem.name.includes(searchTerm)
  );
  
  const filterTeaInfusions = teainfusions.filter(teaInfusion =>
    teaInfusion.name.includes(searchTerm)
  );
  
  const filterTahini = tahini.filter(tahiniItem =>
    tahiniItem.name.includes(searchTerm)
  );
  
  const filterKetchupMayonnaiseMustard = ketchupmayonnaisemustard.filter(ketchupMayonnaiseMustard =>
    ketchupMayonnaiseMustard.name.includes(searchTerm)
  );
  
  const filterCannedVegetables = cannedvegetables.filter(cannedVegetable =>
    cannedVegetable.name.includes(searchTerm)
  );
  
  const filterCannedCucumbers = cannedcucumbers.filter(cannedCucumber =>
    cannedCucumber.name.includes(searchTerm)
  );
  
  const filterCannedOlives = cannedolives.filter(cannedOlive =>
    cannedOlive.name.includes(searchTerm)
  );
  
  const filterCannedTomatoes = cannedtomatoes.filter(cannedTomato =>
    cannedTomato.name.includes(searchTerm)
  );
  
  const filterCannedFish = cannedfish.filter(cannedFish =>
    cannedFish.name.includes(searchTerm)
  );
  
  const filterCannedTuna = cannedtuna.filter(cannedTuna =>
    cannedTuna.name.includes(searchTerm)
  );
  
  const filterCannedFruit = cannedfruit.filter(cannedFruit =>
    cannedFruit.name.includes(searchTerm)
  );
  
  const filterCracks = cracks.filter(crack =>
    crack.name.includes(searchTerm)
  );
  
  const filterDriedFruits = driedfruits.filter(driedFruit =>
    driedFruit.name.includes(searchTerm)
  );
  
  const filterGranolaOats = granolaoats.filter(granolaOat =>
    granolaOat.name.includes(searchTerm)
  );
  
  const handleIncrement = (name: string) => {
    setBreads(breads.map(breads =>
      breads.name === name ? { ...breads, count: breads.count + 1 } : breads
    ));

    setCakes(cakes.map(cakes =>
      cakes.name === name ? { ...cakes, count: cakes.count + 1 } : cakes
    ));

    setCookies(cookies.map(cookies =>
      cookies.name === name ? { ...cookies, count: cookies.count + 1 } : cookies
    ));

    setCrackers(crackers.map(crackers =>
      crackers.name === name ? { ...crackers, count: crackers.count + 1 } : crackers
    ));
    setOil(oil.map(oil =>
      oil.name === name ? { ...oil, count: oil.count + 1 } : oil
    ));
    setVinegarLemonjuice(vinegarLemonjuice.map(vinegarLemonjuice =>
      vinegarLemonjuice.name === name ? { ...vinegarLemonjuice, count: vinegarLemonjuice.count + 1 } : vinegarLemonjuice
    ));
    setLegumesricecouscous(legumesricecouscous.map(legumesricecouscous =>
      legumesricecouscous.name === name ? { ...legumesricecouscous, count: legumesricecouscous.count + 1 } : legumesricecouscous
    ));
    setPasta(pasta.map(pasta =>
      pasta.name === name ? { ...pasta, count: pasta.count + 1 } : pasta
    ));
    setFloursaltsugar(floursaltsugar.map(floursaltsugar =>
      floursaltsugar.name === name ? { ...floursaltsugar, count: floursaltsugar.count + 1 } : floursaltsugar
    ));
    setCoffeedrinkingpowders(coffeedrinkingpowders.map(coffeedrinkingpowders =>
      coffeedrinkingpowders.name === name ? { ...coffeedrinkingpowders, count: coffeedrinkingpowders.count + 1 } : coffeedrinkingpowders
    ));
    setCoffeecapsules(coffeecapsules.map(coffeecapsules =>
      coffeecapsules.name === name ? { ...coffeecapsules, count: coffeecapsules.count + 1 } : coffeecapsules
    ));
    setTea(tea.map(tea =>
      tea.name === name ? { ...tea, count: tea.count + 1 } : tea
    ));
    setTeainfusions(teainfusions.map(teainfusions =>
      teainfusions.name === name ? { ...teainfusions, count: teainfusions.count + 1 } : teainfusions
    ));
    setTahini(tahini.map(tahini =>
      tahini.name === name ? { ...tahini, count: tahini.count + 1 } : tahini
    ));
    setKetchupmayonnaisemustard(ketchupmayonnaisemustard.map(ketchupmayonnaisemustard =>
      ketchupmayonnaisemustard.name === name ? { ...ketchupmayonnaisemustard, count: ketchupmayonnaisemustard.count + 1 } : ketchupmayonnaisemustard
    ));
    setCannedvegetables(cannedvegetables.map(cannedvegetables =>
      cannedvegetables.name === name ? { ...cannedvegetables, count: cannedvegetables.count + 1 } : cannedvegetables
    ));
    setCannedcucumbers(cannedcucumbers.map(cannedcucumbers =>
      cannedcucumbers.name === name ? { ...cannedcucumbers, count: cannedcucumbers.count + 1 } : cannedcucumbers
    ));
    setCannedolives(cannedolives.map(cannedolives =>
      cannedolives.name === name ? { ...cannedolives, count: cannedolives.count + 1 } : cannedolives
    ));
    setCannedtomatoes(cannedtomatoes.map(cannedtomatoes =>
      cannedtomatoes.name === name ? { ...cannedtomatoes, count: cannedtomatoes.count + 1 } : cannedtomatoes
    ));
    setCannedfish(cannedfish.map(cannedfish =>
      cannedfish.name === name ? { ...cannedfish, count: cannedfish.count + 1 } : cannedfish
    ));
    setCannedtuna(cannedtuna.map(cannedtuna =>
      cannedtuna.name === name ? { ...cannedtuna, count: cannedtuna.count + 1 } : cannedtuna
    ));
    setCannedfruit(cannedfruit.map(cannedfruit =>
      cannedfruit.name === name ? { ...cannedfruit, count: cannedfruit.count + 1 } : cannedfruit
    ));
    setCracks(cracks.map(cracks =>
      cracks.name === name ? { ...cracks, count: cracks.count + 1 } : cracks
    ));
    setDriedfruits(driedfruits.map(driedfruits =>
      driedfruits.name === name ? { ...driedfruits, count: driedfruits.count + 1 } : driedfruits
    ));
    setGranolaoats(granolaoats.map(granolaoats =>
      granolaoats.name === name ? { ...granolaoats, count: granolaoats.count + 1 } : granolaoats
    ));
  };


  const handleDecrement = (name: string) => {
    setBreads(breads.map(breads =>
      breads.name === name && breads.count > 0 ? { ...breads, count: breads.count - 1 } : breads
    ));

    setCakes(cakes.map(cakes =>
      cakes.name === name && cakes.count > 0 ? { ...cakes, count: cakes.count - 1 } : cakes
    ));

    setCookies(cookies.map(cookies =>
      cookies.name === name && cookies.count > 0 ? { ...cookies, count: cookies.count - 1 } : cookies
    ));
    setCrackers(crackers.map(crackers =>
      crackers.name === name && crackers.count > 0 ? { ...crackers, count: crackers.count - 1 } : crackers
    ));
    setOil(oil.map(oil =>
      oil.name === name && oil.count > 0 ? { ...oil, count: oil.count - 1 } : oil
    ));
    setVinegarLemonjuice(vinegarLemonjuice.map(vinegarLemonjuice =>
      vinegarLemonjuice.name === name && vinegarLemonjuice.count > 0 ? { ...vinegarLemonjuice, count: vinegarLemonjuice.count - 1 } : vinegarLemonjuice
    ));
    setLegumesricecouscous(legumesricecouscous.map(legumesricecouscous =>
      legumesricecouscous.name === name && legumesricecouscous.count > 0 ? { ...legumesricecouscous, count: legumesricecouscous.count - 1 } : legumesricecouscous
    ));
    setPasta(pasta.map(pasta =>
      pasta.name === name && pasta.count > 0 ? { ...pasta, count: pasta.count - 1 } : pasta
    ));
    setFloursaltsugar(floursaltsugar.map(floursaltsugar =>
      floursaltsugar.name === name && floursaltsugar.count > 0 ? { ...floursaltsugar, count: floursaltsugar.count - 1 } : floursaltsugar
    ));
    setCoffeedrinkingpowders(coffeedrinkingpowders.map(coffeedrinkingpowders =>
      coffeedrinkingpowders.name === name && coffeedrinkingpowders.count > 0 ? { ...coffeedrinkingpowders, count: coffeedrinkingpowders.count - 1 } : coffeedrinkingpowders
    ));
    setCoffeecapsules(coffeecapsules.map(coffeecapsules =>
      coffeecapsules.name === name && coffeecapsules.count > 0 ? { ...coffeecapsules, count: coffeecapsules.count - 1 } : coffeecapsules
    ));
    setTea(tea.map(tea =>
      tea.name === name && tea.count > 0 ? { ...tea, count: tea.count - 1 } : tea
    ));
    setTeainfusions(teainfusions.map(teainfusions =>
      teainfusions.name === name && teainfusions.count > 0 ? { ...teainfusions, count: teainfusions.count - 1 } : teainfusions
    ));
    setTahini(tahini.map(tahini =>
      tahini.name === name && tahini.count > 0 ? { ...tahini, count: tahini.count - 1 } : tahini
    ));
    setKetchupmayonnaisemustard(ketchupmayonnaisemustard.map(ketchupmayonnaisemustard =>
      ketchupmayonnaisemustard.name === name && ketchupmayonnaisemustard.count > 0 ? { ...ketchupmayonnaisemustard, count: ketchupmayonnaisemustard.count - 1 } : ketchupmayonnaisemustard
    ));
    setCannedvegetables(cannedvegetables.map(cannedvegetables =>
      cannedvegetables.name === name && cannedvegetables.count > 0 ? { ...cannedvegetables, count: cannedvegetables.count - 1 } : cannedvegetables
    ));
    setCannedcucumbers(cannedcucumbers.map(cannedcucumbers =>
      cannedcucumbers.name === name && cannedcucumbers.count > 0 ? { ...cannedcucumbers, count: cannedcucumbers.count - 1 } : cannedcucumbers
    ));
    setCannedolives(cannedolives.map(cannedolives =>
      cannedolives.name === name && cannedolives.count > 0 ? { ...cannedolives, count: cannedolives.count - 1 } : cannedolives
    ));
    setCannedtomatoes(cannedtomatoes.map(cannedtomatoes =>
      cannedtomatoes.name === name && cannedtomatoes.count > 0 ? { ...cannedtomatoes, count: cannedtomatoes.count - 1 } : cannedtomatoes
    ));
    setCannedfish(cannedfish.map(cannedfish =>
      cannedfish.name === name && cannedfish.count > 0 ? { ...cannedfish, count: cannedfish.count - 1 } : cannedfish
    ));
    setCannedtuna(cannedtuna.map(cannedtuna =>
      cannedtuna.name === name && cannedtuna.count > 0 ? { ...cannedtuna, count: cannedtuna.count - 1 } : cannedtuna
    ));
    setCannedfruit(cannedfruit.map(cannedfruit =>
      cannedfruit.name === name && cannedfruit.count > 0 ? { ...cannedfruit, count: cannedfruit.count - 1 } : cannedfruit
    ));
    setCracks(cracks.map(cracks =>
      cracks.name === name && cracks.count > 0 ? { ...cracks, count: cracks.count - 1 } : cracks
    ));
    setDriedfruits(driedfruits.map(driedfruits =>
      driedfruits.name === name && driedfruits.count > 0 ? { ...driedfruits, count: driedfruits.count - 1 } : driedfruits
    ));
    setGranolaoats(granolaoats.map(granolaoats =>
      granolaoats.name === name && granolaoats.count > 0 ? { ...granolaoats, count: granolaoats.count - 1 } : granolaoats
    ));
  };


  const handleSave = async () => {
    const breadsToSave = breads.filter(breads => breads.count > 0).map(breads => ({ ...breads, quantity: breads.count }));
    const cakesToSave = cakes.filter(cakes => cakes.count > 0).map(cakes => ({ ...cakes, quantity: cakes.count }));
    const cookiesToSave = cookies.filter(cookies => cookies.count > 0).map(cookies => ({ ...cookies, quantity: cookies.count }));
    const crackersToSave = crackers.filter(crackers => crackers.count > 0).map(crackers => ({ ...crackers, quantity: crackers.count }));
    const oilToSave = oil.filter(oil => oil.count > 0).map(oil => ({ ...oil, quantity: oil.count }));
    const vinegarLemonjuiceToSave = vinegarLemonjuice.filter(vinegarLemonjuice => vinegarLemonjuice.count > 0).map(vinegarLemonjuice => ({ ...vinegarLemonjuice, quantity: vinegarLemonjuice.count }));
    const legumesricecouscousToSave = legumesricecouscous.filter(legumesricecouscous => legumesricecouscous.count > 0).map(legumesricecouscous => ({ ...legumesricecouscous, quantity: legumesricecouscous.count }));
    const pastaToSave = pasta.filter(pasta => pasta.count > 0).map(pasta => ({ ...pasta, quantity: pasta.count }));
    const floursaltsugarToSave = floursaltsugar.filter(floursaltsugar => floursaltsugar.count > 0).map(floursaltsugar => ({ ...floursaltsugar, quantity: floursaltsugar.count }));
    const coffeedrinkingpowdersToSave = coffeedrinkingpowders.filter(coffeedrinkingpowders => coffeedrinkingpowders.count > 0).map(coffeedrinkingpowders => ({ ...coffeedrinkingpowders, quantity: coffeedrinkingpowders.count }));
    const coffeecapsulesToSave = coffeecapsules.filter(coffeecapsules => coffeecapsules.count > 0).map(coffeecapsules => ({ ...coffeecapsules, quantity: coffeecapsules.count }));
    const teaToSave = tea.filter(tea => tea.count > 0).map(tea => ({ ...tea, quantity: tea.count }));
    const teainfusionsToSave = teainfusions.filter(teainfusions => teainfusions.count > 0).map(teainfusions => ({ ...teainfusions, quantity: teainfusions.count }));
    const tahiniToSave = tahini.filter(tahini => tahini.count > 0).map(tahini => ({ ...tahini, quantity: tahini.count }));
    const ketchupmayonnaisemustardToSave = ketchupmayonnaisemustard.filter(ketchupmayonnaisemustard => ketchupmayonnaisemustard.count > 0).map(ketchupmayonnaisemustard => ({ ...ketchupmayonnaisemustard, quantity: ketchupmayonnaisemustard.count }));
    const cannedvegetablesToSave = cannedvegetables.filter(cannedvegetables => cannedvegetables.count > 0).map(cannedvegetables => ({ ...cannedvegetables, quantity: cannedvegetables.count }));
    const cannedcucumbersToSave = cannedcucumbers.filter(cannedcucumbers => cannedcucumbers.count > 0).map(cannedcucumbers => ({ ...cannedcucumbers, quantity: cannedcucumbers.count }));
    const cannedolivesToSave = cannedolives.filter(cannedolives => cannedolives.count > 0).map(cannedolives => ({ ...cannedolives, quantity: cannedolives.count }));
    const cannedtomatoesToSave = cannedtomatoes.filter(cannedtomatoes => cannedtomatoes.count > 0).map(cannedtomatoes => ({ ...cannedtomatoes, quantity: cannedtomatoes.count }));
    const cannedfishToSave = cannedfish.filter(cannedfish => cannedfish.count > 0).map(cannedfish => ({ ...cannedfish, quantity: cannedfish.count }));
    const cannedtunaToSave = cannedtuna.filter(cannedtuna => cannedtuna.count > 0).map(cannedtuna => ({ ...cannedtuna, quantity: cannedtuna.count }));
    const cannedfruitToSave = cannedfruit.filter(cannedfruit => cannedfruit.count > 0).map(cannedfruit => ({ ...cannedfruit, quantity: cannedfruit.count }));
    const cracksToSave = cracks.filter(cracks => cracks.count > 0).map(cracks => ({ ...cracks, quantity: cracks.count }));
    const driedfruitsToSave = driedfruits.filter(driedfruits => driedfruits.count > 0).map(driedfruits => ({ ...driedfruits, quantity: driedfruits.count }));
    const granolaoatsToSave = granolaoats.filter(granolaoats => granolaoats.count > 0).map(granolaoats => ({ ...granolaoats, quantity: granolaoats.count }));

    const allCanDry = [...breadsToSave, ...cakesToSave, ...cookiesToSave,...crackersToSave,...oilToSave,...vinegarLemonjuiceToSave,...legumesricecouscousToSave,...pastaToSave,...floursaltsugarToSave,...coffeedrinkingpowdersToSave,...coffeecapsulesToSave,...teaToSave,...teainfusionsToSave,...tahiniToSave,...ketchupmayonnaisemustardToSave,...cannedvegetablesToSave,...cannedcucumbersToSave,...cannedolivesToSave,...cannedtomatoesToSave,...cannedfishToSave,...cannedtunaToSave,...cannedfruitToSave,...cracksToSave,...driedfruitsToSave,...granolaoatsToSave ];
    allCanDry.forEach(CanDry => addProduct(CanDry));

  };

  return (
    <div>
    <div style={{
      position: 'absolute',
      marginTop: '100px',
      width: '100%',
      paddingRight: '20px', 
      marginBottom: '20px', 
    }}>
      <input
        type="text"
        placeholder="חפש מוצר יבשים\שימורים"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '715px',
          padding: '5px 40px 5px 5px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          textAlign: 'right',
          position: 'relative',
          float: 'right',
          marginRight: '200px',

        }}
      />
      <i className="fas fa-search" style={{
        position: 'absolute',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#aaa',
        marginRight: '200px',

        pointerEvents: 'none',
      }}></i>
    </div>
    
    <div>
  {filterBreads.length > 0 && (
    <ProductsPage
      products={filterBreads}
      categoryTitle="לחם, חלה, לחמניות, פיתות וטורטייה"
      icon={<img alt="" src={importImage('breads_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCakes.length > 0 && (
    <ProductsPage
      products={filterCakes}
      categoryTitle="עוגות ועוגות אישיות"
      icon={<img alt="" src={importImage('cakes_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCookies.length > 0 && (
    <ProductsPage
      products={filterCookies}
      categoryTitle="עוגיות, וופלים, ביסקווטים וגביעי גלידה"
      icon={<img alt="" src={importImage('cookies_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCrackers.length > 0 && (
    <ProductsPage
      products={filterCrackers}
      categoryTitle="פריכיות, צנימים וקרקרים"
      icon={<img alt="" src={importImage('crackers_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterOil.length > 0 && (
    <ProductsPage
      products={filterOil}
      categoryTitle="שמן, שמן זית ותרסיסי שמן"
      icon={<img alt="" src={importImage('oil_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterVinegarLemonjuice.length > 0 && (
    <ProductsPage
      products={filterVinegarLemonjuice}
      categoryTitle="חומץ ומיץ לימון"
      icon={<img alt="" src={importImage('vinegarLemonjuice_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterLegumesRiceCouscous.length > 0 && (
    <ProductsPage
      products={filterLegumesRiceCouscous}
      categoryTitle="קטניות, אורז וקוסקוס"
      icon={<img alt="" src={importImage('legumesricecouscous_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterPasta.length > 0 && (
    <ProductsPage
      products={filterPasta}
      categoryTitle="פסטה, אטריות ושקדי מרק"
      icon={<img alt="" src={importImage('pasta_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterFlourSaltSugar.length > 0 && (
    <ProductsPage
      products={filterFlourSaltSugar}
      categoryTitle="קמח, מלח וסוכר"
      icon={<img alt="" src={importImage('floursaltsugar_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCoffeeDrinkingPowders.length > 0 && (
    <ProductsPage
      products={filterCoffeeDrinkingPowders}
      categoryTitle="קפה ואבקות שתיה"
      icon={<img alt="" src={importImage('coffeedrinkingpowders_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCoffeeCapsules.length > 0 && (
    <ProductsPage
      products={filterCoffeeCapsules}
      categoryTitle="קפסולות קפה"
      icon={<img alt="" src={importImage('coffeecapsules_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterTea.length > 0 && (
    <ProductsPage
      products={filterTea}
      categoryTitle="תה"
      icon={<img alt="" src={importImage('tea_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterTeaInfusions.length > 0 && (
    <ProductsPage
      products={filterTeaInfusions}
      categoryTitle="חליטות תה"
      icon={<img alt="" src={importImage('teainfusions_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterTahini.length > 0 && (
    <ProductsPage
      products={filterTahini}
      categoryTitle="טחינה"
      icon={<img alt="" src={importImage('tahini_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterKetchupMayonnaiseMustard.length > 0 && (
    <ProductsPage
      products={filterKetchupMayonnaiseMustard}
      categoryTitle="קטשופ, מיונז וחרדל"
      icon={<img alt="" src={importImage('ketchupmayonnaisemustard_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedVegetables.length > 0 && (
    <ProductsPage
      products={filterCannedVegetables}
      categoryTitle="שימורי ירקות"
      icon={<img alt="" src={importImage('cannedvegetables_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedCucumbers.length > 0 && (
    <ProductsPage
      products={filterCannedCucumbers}
      categoryTitle="שימורי מלפפונים"
      icon={<img alt="" src={importImage('cannedcucumbers_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedOlives.length > 0 && (
    <ProductsPage
      products={filterCannedOlives}
      categoryTitle="שימורי זיתים"
      icon={<img alt="" src={importImage('cannedolives_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedTomatoes.length > 0 && (
    <ProductsPage
      products={filterCannedTomatoes}
      categoryTitle="שימורי עגבניות"
      icon={<img alt="" src={importImage('cannedtomatoes_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedFish.length > 0 && (
    <ProductsPage
      products={filterCannedFish}
      categoryTitle="שימורי דגים"
      icon={<img alt="" src={importImage('cannedfish_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedTuna.length > 0 && (
    <ProductsPage
      products={filterCannedTuna}
      categoryTitle="שימורי טונה"
      icon={<img alt="" src={importImage('cannedtuna_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCannedFruit.length > 0 && (
    <ProductsPage
      products={filterCannedFruit}
      categoryTitle="שימורי פירות"
      icon={<img alt="" src={importImage('cannedfruit_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCracks.length > 0 && (
    <ProductsPage
      products={filterCracks}
      categoryTitle="סדקים"
      icon={<img alt="" src={importImage('cracks_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterDriedFruits.length > 0 && (
    <ProductsPage
      products={filterDriedFruits}
      categoryTitle="פירות יבשים"
      icon={<img alt="" src={importImage('driedfruits_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterGranolaOats.length > 0 && (
    <ProductsPage
      products={filterGranolaOats}
      categoryTitle="גרנולה ודגני בוקר"
      icon={<img alt="" src={importImage('granola_oats_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

    </div>
  );
}

export default Can_Dry_Page;