import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

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
  },
  {
      name: "לחם בתוספת סיבים פרה ביוטיים",
      image: importImage('barman_active_prebiotic_fibers.jpeg'),
  },
  {
      name: "לחם עננים מקמח כוסמין עם פרוסות עבות",
      image: importImage('barman_cloud_spelt.jpeg'),
  },
  {
      name: "לחם פרוס מקמח כוסמין",
      image: importImage('barman_spelt_e_free.jpeg'),
  },
  {
      name: "לחם פרוס מלא מקמח חיטה ללא תוספים מלאכותיים",
      image: importImage('barman_whole_wheat_e_free.jpeg'),
  },
  {
      name: "לחם עננים לבן בסגנון בריוש עם פרוסות עבות",
      image: importImage('barman_cloud_brioche.jpeg'),
  },
  {
      name: "לחם עננים מקמח מלא עם פרוסות עבות",
      image: importImage('barman_cloud_whole.jpeg'),
  },
  {
      name: "לחם מחמצת ושיפון קל פרוס",
      image: importImage('lechem_haaretz_sourdough_rye.jpeg'),
  },
  {
      name: "לחם חמניות",
      image: importImage('lechem_haaretz_sunflower.jpeg'),
  },
  {
      name: "לחם פרוס מקמח שיבולת שועל",
      image: importImage('lechem_haaretz_oats.jpeg'),
  },
  {
      name: "לחם 5 דגנים",
      image: importImage('lechem_haaretz_5_grains.jpeg'),
  },
  {
      name: "לחם שיפון 100%",
      image: importImage('lechem_haaretz_rye_100.jpeg'),
  },
  {
      name: "לחם 10 דגנים",
      image: importImage('lechem_haaretz_10_grains.jpeg'),
  },
  {
      name: "לחם שיפון עם אגוזים",
      image: importImage('lechem_haaretz_rye_nuts.jpeg'),
  },
  {
      name: "לחם פומפרניקל",
      image: importImage('lechem_haaretz_pumpernickel.jpeg'),
  },
  {
      name: "לחם כוסמין 100%",
      image: importImage('lechem_haaretz_spelt_100.jpeg'),
  },
  {
      name: "לחם אקסקלוסיבי",
      image: importImage('levo_exclusive.jpeg'),
  },
  {
      name: "לחם עם כוסברה",
      image: importImage('polanski_borodinsky_coriander.jpeg'),
  },
  {
      name: "לחם חיטה נבוטה",
      image: importImage('polanski_sprouted_wheat.jpeg'),
  },
  {
      name: "לחם סנדוויץ לבן לטוסט",
      image: importImage('polanski_sandwich_toast.jpeg'),
  },
  {
      name: "לחם שיפון עם זרעי חמניות",
      image: importImage('mestemacher_rye_sunflower.jpeg'),
  },
  {
      name: "מארז 11 פיתות",
      image: importImage('macabim_11_pitas.jpeg'),
  },
  {
      name: "מארז 5 פיתות",
      image: importImage('macabim_5_pitas.jpeg'),
  },
  {
      name: "מארז 11 פיתות ביס",
      image: importImage('macabim_yemenite_pitas.jpeg'),
  },
  {
      name: "מארז 12 פיתות ביס מקמח מלא",
      image: importImage('macabim_whole_pitas.jpeg'),
  },
  {
      name: "מארז 10 פיתות 100% כוסמין מלא",
      image: importImage('macabim_spelt_pitas.jpeg'),
  },
  {
      name: "מארז 5 פיתות כפריות 100% קמח מלא ללא תוספת סוכר",
      image: importImage('macabim_rustic_pitas.jpeg'),
  },
  {
      name: "לחמניות עננים - לחמניות מתוקות בסגנון בריוש",
      image: importImage('barman_cloud_brioche_buns.jpeg'),
  },
  {
      name: "מארז 4 לחמניות מתוקות",
      image: importImage('vedesh_sweet_buns.jpeg'),
  },
  {
      name: "מארז 6 לחמניות כוסמין",
      image: importImage('lechem_haaretz_spelt_buns.jpeg'),
  },
  {
      name: "מארז לחמניות פרנה 4 יח'",
      image: importImage('prana_4_buns.jpeg'),
  },
  {
      name: "עלי טורטיה בקוטר 20 ס״מ",
      image: importImage('master_chef_20cm_tortilla.jpeg'),
  },
  {
      name: "עלי טורטיה חיטה מלאה",
      image: importImage('master_chef_whole_tortilla.jpeg'),
  },
  {
      name: "עלי טורטייה דגנים",
      image: importImage('master_chef_grain_tortilla.jpeg'),
  },
  {
      name: "טורטייה בתוספת חיטה מלאה- 12 יח', קוטר 25 סמ",
      image: importImage('grain_whole_tortilla_25cm.jpeg'),
  },
  {
      name: "לחמניות רכות במיוחד להמבורגר - 4 יח' במארז",
      image: importImage('barman_burger_buns.jpeg'),
  },
  {
      name: "לחם מחמצת כוסמין",
      image: importImage('dr_mark_spelt_sourdough.jpeg'),
  },
  {
      name: "לחם מחמצת שיפון",
      image: importImage('dr_mark_rye_sourdough.jpeg'),
  },
  {
      name: "לחם קל כוסמין במתיקות מעודנת עם שומשום",
      image: importImage('dr_mark_spelt_sesame.jpeg'),
  },
  {
  name: "מארז 6 לחמניות קלות כוסמין שומשום במתיקות מעודנת",
  image: importImage('dr_mark_spelt_sesame_buns.jpeg'),
  },
  {
  name: "מארז לחמניות פרנה ביס 10 יח'",
  image: importImage('prana_bis_buns_10pack.jpeg'),
  },
  {
  name: "עלי טורטייה כוסמין - 6 יחידות בקוטר 20 ס״מ",
  image: importImage('master_chef_spelt_tortilla_20cm.jpeg'),
  },
  {
  name: "עלי טורטייה מיני, קמח חיטה - 10 יחידות בקוטר 15 ס״מ",
  image: importImage('master_chef_mini_wheat_tortilla_15cm.jpeg'),
  },
  ];

const initialCakes = [
    {
      name: "מארז 10 עוגות אישיות קינדר דליס",
      image: importImage('kinder_delice_10pack.jpeg'),
  },
  {
      name: "עוגות אישיות במילוי קרם חלבי ובציפוי קרם קקאו",
      image: importImage('balconi_cream_cocoa_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות במילוי קרם קקאו ובציפוי קרם קקאו",
      image: importImage('balconi_cocoa_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות במילוי קרם קקאו ציפוי בטעם שוקולד מריר",
      image: importImage('chocketa_dark_chocolate_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות רכות עם מילוי קרם בטעם וניל",
      image: importImage('chocketa_vanilla_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות חמש שכבות מריר - פרווה",
      image: importImage('chocketa_dark_chocolate_layer_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות במילוי קרם ובציפוי בטעם שוקולד",
      image: importImage('chocketa_chocolate_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות במילוי בטעם קוקוס",
      image: importImage('chocketa_coconut_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות בטעם קרמל",
      image: importImage('chocketa_caramel_cakes.jpeg'),
  },
  {
      name: "עוגות מגולגלות במילוי קרם חלבי וציפוי בטעם שוקולד",
      image: importImage('chocketa_rolled_milk_cream_cakes.jpeg'),
  },
  {
      name: "עוגות מגולגלות בטעם קקאו - 6 יחידות במארז",
      image: importImage('chocketa_cocoa_rolled_cakes.jpeg'),
  },
  {
      name: "עוגת הבית בטעם שוקולד",
      image: importImage('osem_chocolate_cake.jpeg'),
  },
  {
      name: "עוגת הבית שוקולד צ'יפס",
      image: importImage('osem_chocolate_chip_cake.jpeg'),
  },
  {
      name: "עוגת הבית שיש",
      image: importImage('osem_marble_cake.jpeg'),
  },
  {
      name: "עוגת הבית שמרים קלאסית בטעם שוקולד",
      image: importImage('osem_classic_chocolate_cake.jpeg'),
  },
  {
      name: "עוגת הבית שוקו שוקוצ'יפס",
      image: importImage('osem_choco_chip_cake.jpeg'),
  },
  {
      name: "עוגת הבית בראוניס פאד'ג",
      image: importImage('osem_brownie_fudge_cake.jpeg'),
  },
  {
      name: "עוגת הבית דמקה בטעם שוקו וניל",
      image: importImage('osem_checkered_cake.jpeg'),
  },
  {
      name: "עוגת הבית בטעם תפוז",
      image: importImage('osem_orange_cake.jpeg'),
  },
  {
      name: "עוגת הבית בראוניס בטעם שוקולד ריבת חלב",
      image: importImage('osem_brownie_dulce_de_leche_cake.jpeg'),
  },
  {
      name: "עוגת הבית בריוש שוקולד",
      image: importImage('osem_brioche_chocolate_cake.jpeg'),
  },
  {
      name: "עוגת הבית תפוחים פירורים",
      image: importImage('osem_apple_crumb_cake.jpeg'),
  },
  {
      name: "עוגת הבית עוגת סופלה בטעם שוקולד",
      image: importImage('osem_chocolate_souffle_cake.jpeg'),
  },
  {
      name: "עוגת הבית סופלה בטעם שוקו וניל",
      image: importImage('osem_souffle_choco_vanilla_cake.jpeg'),
  },
  {
      name: "עוגת הבית בטעם תפוז - פחות סוכר",
      image: importImage('osem_orange_less_sugar_cake.jpeg'),
  },
  {
      name: "עוגת שמרים במילוי פרג",
      image: importImage('achva_poppy_seed_babka.jpeg'),
  },
  {
      name: "עוגת תפוחי עץ עם מילוי מעודן",
      image: importImage('achva_apple_cake.jpeg'),
  },
  {
      name: "עוגה בטעם וניל",
      image: importImage('achdut_vanilla_cake.jpeg'),
  },
  {
      name: "עוגות אישיות בטעם קרמל עם חתיכות בטעם קרמל מלוח",
      image: importImage('fiber_one_caramel_salted_cakes.jpeg'),
  },
  {
      name: "עוגות אישיות בטעם שוקולד עם חתיכות בטעם שוקולד",
      image: importImage('fiber_one_chocolate_cakes.png'),
  },
];

const initialCookies = [
{
    name: "עוגיות אוראו",
    image: importImage('oreo_cookies.jpeg'),
},
{
    name: "עוגיות אוראו דאבל קרם",
    image: importImage('oreo_double_cream.jpeg'),
},
{
    name: "עוגיות אוראו גולדן",
    image: importImage('oreo_golden.jpeg'),
},
{
    name: "מיני עוגיות אוראו קראנצ'י בייטס מצופים",
    image: importImage('oreo_crunchy_bites.jpeg'),
},
{
    name: "עוגיות אוראו בטעם בראוניז",
    image: importImage('oreo_brownie_flavor.jpeg'),
},
{
    name: "עוגיות אוראו בציפוי בטעם שוקולד לבן",
    image: importImage('oreo_white_chocolate.jpeg'),
},
{
    name: "עוגיות אוראו בציפוי בטעם שוקולד חלב",
    image: importImage('oreo_milk_chocolate.jpeg'),
},
{
    name: "עוגיות שוקוצ'יפס במילוי שוקולד",
    image: importImage('milka_choco_sensation.jpeg'),
},
{
    name: "עוגיות שיבולת שועל ושוקולד",
    image: importImage('milka_oat_chocolate_cookies.jpeg'),
},
{
    name: "עוגיות שוקולד צ'יפס",
    image: importImage('milka_chocolate_chip_cookies.jpeg'),
},
{
    name: "עוגיות מילקה קוקי לופ",
    image: importImage('milka_cookie_loop.jpeg'),
},
{
    name: "עוגיות במילוי שוקולד",
    image: importImage('milka_choco_minis.jpeg'),
},
{
    name: "עוגיות ביסקוויט ושוקולד",
    image: importImage('milka_biscuit_chocolate_cookies.jpeg'),
},
{
    name: "ביסקוויט עם שוקולד חלב מילקה",
    image: importImage('milka_milk_chocolate_biscuit.jpeg'),
},
{
    name: "עוגיות דקות בציפוי חלקי של שוקולד חלב",
    image: importImage('milka_thins_cookies.jpeg'),
},
{
    name: "וופל במילוי קרם קקאו בציפוי שוקולד חלב",
    image: importImage('milka_choco_waffle.jpeg'),
},
{
    name: "עוגיות שוקולד צ'יפס במילוי קרם בטעם שוקולד",
    image: importImage('osem_choco_chip_filled_cookies.jpeg'),
},
{
    name: "עוגיות שוקוצ'יפס קלאסי",
    image: importImage('osem_classic_choco_chip_cookies.jpeg'),
},
{
    name: "עוגיות קרמוגית במילוי קרם בטעם שוקולד",
    image: importImage('osem_creamy_choco_cookies.jpeg'),
},
{
    name: "ערגליות שוקו",
    image: importImage('osem_arugula_choco_cookies.jpeg'),
},
{
    name: "ערגליות תות",
    image: importImage('osem_arugula_strawberry_cookies.jpeg'),
},
{
    name: "עוגיות חיוכים שוקו-שוקו",
    image: importImage('elite_smiley_choco_choco.jpeg'),
},
{
    name: "עוגיות סנדוויץ חיוכים בטעם שוקו-שוקו",
    image: importImage('elite_smiley_sandwich_choco.jpeg'),
},
{
    name: "עוגיות חיוכים וניל-וניל",
    image: importImage('elite_smiley_vanilla_vanilla.jpeg'),
},
{
    name: "חיוכים עוגיות סנדוויץ בטעם וניל במילוי קרם בטעם וניל",
    image: importImage('elite_smiley_vanilla_sandwich.jpeg'),
},
{
    name: "עד חצות עוגיות סנדוויץ במילוי שוקולד חלב",
    image: importImage('elite_midnight_sandwich_cookies.jpeg'),
},
{
    name: "פינוקיות פסק זמן",
    image: importImage('elite_pesek_zman_cookies.jpeg'),
},
{
    name: "פינוקיות קפה נמס",
    image: importImage('elite_instant_coffee_cookies.jpeg'),
},
{
    name: "פינוקיות טורטית",
    image: importImage('elite_tortit_cookies.jpeg'),
},
{
    name: "מיני פינוקיות בראוניז בייגל בוטן",
    image: importImage('elite_brownie_cookies.jpeg'),
},
{
    name: "מיני פינוקיות בטעם טופי קרמל מלוח",
    image: importImage('elite_caramel_toffee_cookies.jpeg'),
},
{
    name: "ביסקוויט בטעם קרמל לוטוס",
    image: importImage('lotus_caramel_biscuits.jpeg'),
},
{
    name: "עוגיות סנדוויץ לוטוס במילוי בטעם וניל",
    image: importImage('lotus_vanilla_sandwich_cookies.jpeg'),
},
{
    name: "לוטוס עוגיות סנדוויץ במילוי לוטוס",
    image: importImage('lotus_sandwich_cookies.jpeg'),
},
{
    name: "עוגיות ספוג קטנות מיני מדלן",
    image: importImage('st_michel_mini_madeleine.jpeg'),
},
{
    name: "עוגיות מיני מדלן עם פצפוצי שוקולד",
    image: importImage('st_michel_choco_mini_madeleine.jpeg'),
},
{
    name: "דונאט עם שוקולד",
    image: importImage('st_michel_choco_donut.jpeg'),
},
{
    name: "מיני קוקיס בטעם חמאה",
    image: importImage('carmit_mini_butter_cookies.jpeg'),
},
{
    name: "עוגיות כוסמין שטרודל תפוחים - טבעוני",
    image: importImage('dani_galit_spelt_apple_strudel_cookies.jpeg'),
},
{
    name: "עוגיות טחינה מלאה ואגוזי לוז - טבעוני",
    image: importImage('dani_galit_tahini_hazelnut_cookies.jpeg'),
},
{
    name: "כדורי שוקולד וחמאת בוטנים",
    image: importImage('dani_galit_choco_pb_balls.jpeg'),
},
{
    name: "עוגיות Hit קקאו במילוי קרם וניל",
    image: importImage('bahlsen_hit_cocoa_vanilla_cookies.jpeg'),
},
{
    name: "עוגיות Hit במילוי קרם בטעם שוקולד",
    image: importImage('bahlsen_hit_chocolate_cookies.jpeg'),
},
{
    name: "מיני עוגיות Hit במילוי קרם שוקולד",
    image: importImage('bahlsen_hit_mini_choco_cookies.jpeg'),
},
{
    name: "עוגיות בטעם חמאה",
    image: importImage('man_butter_cookies.jpeg'),
},
{
    name: "עוגיות חיטה מלאה עם סיבים תזונתיים",
    image: importImage('man_whole_wheat_fiber_cookies.jpeg'),
},
{
    name: "עוגיות כוכבים בטעם שוקולד",
    image: importImage('man_choco_star_cookies.jpeg'),
},
{
    name: "עוגיות כוכבים בטעם וניל",
    image: importImage('man_vanilla_star_cookies.jpeg'),
},
{
    name: "עוגיות חיטה מלאה בטעם חלווה",
    image: importImage('man_whole_wheat_halva_cookies.jpeg'),
},
{
    name: "עוגיות שטרודל עם מילוי תפוחי עץ",
    image: importImage('merba_apple_strudel_cookies.jpeg'),
},
{
    name: "עוגיות בראוניס",
    image: importImage('merba_brownie_cookies.jpeg'),
},
{
    name: "עוגיות עם שוקולד צ'יפס - חלבי",
    image: importImage('merba_choco_chip_cookies.jpeg'),
},
{
    name: "עוגיות מזרחיות שומשום",
    image: importImage('abadi_sesame_eastern_cookies.jpeg'),
},
{
  name: "עוגיות מזרחיות קריספי שרוף במיוחד",
  image: importImage('abadi_extra_crispy_cookies.jpeg'),
},
{
  name: "עוגיות מזרחיות בתוספת מלח",
  image: importImage('abadi_salty_cookies.jpeg'),
},
{
  name: "מקלונים בטעם חריף",
  image: importImage('abadi_spicy_sticks.jpeg'),
},
{
  name: "מקלונים בטעם סלק בצל",
  image: importImage('abadi_beet_onion_sticks.jpeg'),
},
{
  name: "עוגיות מזרחיות פריך במיוחד",
  image: importImage('abadi_extra_crispy_cookies_2.jpeg'),
},
{
  name: "קטנטנים בטעם גריל",
  image: importImage('abadi_grill_flavor_snacks.jpeg'),
},
{
  name: "קטנטנים בטעם חרדל ודבש",
  image: importImage('abadi_mustard_honey_snacks.jpeg'),
},
{
  name: "קטנטנים בטעם טבעי",
  image: importImage('abadi_natural_flavor_snacks.jpeg'),
},
{
  name: "מקלונים בטעם טבעי",
  image: importImage('abadi_natural_sticks.jpeg'),
},
{
  name: "מקלונים בטעם שום ובזיליקום",
  image: importImage('abadi_garlic_basil_sticks.jpeg'),
},
{
  name: "מארז 8 חטיפי עבאדי בטעם טבעי",
  image: importImage('abadi_natural_flavor_snack_pack.jpeg'),
},
{
  name: "Goodies עוגיות טבעת מצופות שוקולד חלב",
  image: importImage('merba_milk_chocolate_ring_cookies.jpeg'),
},
{
  name: "Goodies עוגיות טבעת מצופות שוקולד מריר",
  image: importImage('merba_dark_chocolate_ring_cookies.jpeg'),
},
{
  name: "Goodies עוגיות טבעת מצופות שוקולד לבן",
  image: importImage('merba_white_chocolate_ring_cookies.jpeg'),
},
{
  name: "עוגיות על החלל - עוגיות קקאו עם סוכריות",
  image: importImage('merba_space_cookies.jpeg'),
},
{
  name: "עוגיות שוקולד צ'יפ במרקם רך",
  image: importImage('merba_soft_choco_chip_cookies.jpeg'),
},
{
  name: "עוגיות טריפל שוקולד צ'יפס",
  image: importImage('merba_triple_choco_chip_cookies.jpeg'),
},
{
  name: "עוגיות לימון ושוקולד צ'יפס במרקם רך",
  image: importImage('merba_lemon_choco_chip_cookies.jpeg'),
},
{
  name: "עוגיות שוקולד צ'יפס עם חמוציות במרקם רך",
  image: importImage('merba_cranberry_choco_chip_cookies.jpeg'),
},
{
  name: "עוגיות שוקולד צ'יפס מצופות שוקולד",
  image: importImage('merba_choco_chip_choco_dipped.jpeg'),
},
{
  name: "עוגיות שוקולד צ'יפס ממולאות בקרם שוקולד",
  image: importImage('merba_choco_filled_cookies.jpeg'),
},
{
  name: "עוגיות שוקולד צ'יפס ממולאות בקרם נוגט",
  image: importImage('merba_nougat_filled_cookies.jpeg'),
},
{
  name: "עוגיות בטעם חמאה Danish Delights",
  image: importImage('danish_delights_butter_cookies.jpeg'),
},
{
  name: "בפלות ופלים בטעם שוקולד",
  image: importImage('elite_choco_waffles.jpeg'),
},
{
  name: "בפלות טורטית ופלים מצופים עם קרם שקדים - פרווה",
  image: importImage('elite_tortit_waffles.jpeg'),
},
{
  name: "ופלים ארוכים בטעם שוקולד",
  image: importImage('elite_long_choco_waffles.jpeg'),
},
{
  name: "ופלים ארוכים בטעם לימון - פרווה",
  image: importImage('elite_long_lemon_waffles.jpeg'),
},
{
  name: "בפלות אחת אחת - ופל בטעם שוקולד מצופה שוקולד",
  image: importImage('elite_choco_dipped_waffles.jpeg'),
},
{
  name: "וופל במילוי קרמל",
  image: importImage('chocketa_stroopwafel_caramel.jpeg'),
},
{
  name: "וופלים בטעם קפה",
  image: importImage('man_coffee_waffles.jpeg'),
},
{
  name: "וופלים משובחים בטעם וניל",
  image: importImage('man_vanilla_waffles.jpeg'),
},
{
  name: "וופלים בטעם חלווה",
  image: importImage('man_halva_waffles.jpeg'),
},
{
  name: "מארז אגוזית וופל עם קרם אגוזים",
  image: importImage('man_nut_cream_waffles.jpeg'),
},
{
  name: "מארז וופלים מצופים",
  image: importImage('mann_coated_wafers_pack.jpeg'),
},
{
  name: "וופל Tortina",
  image: importImage('loacker_tortina_wafer.jpeg'),
},
{
  name: "וופל Gardena אגוזי לוז",
  image: importImage('loacker_gardena_hazelnut_wafer.jpeg'),
},
{
  name: "וופל גרדנה במילוי קרם אגוזי לוז ובציפוי שוקולד לבן",
  image: importImage('loacker_gardena_white_choco_hazelnut.jpeg'),
},
{
  name: "וופל Gardena שוקולד",
  image: importImage('loacker_gardena_chocolate_wafer.jpeg'),
},
{
  name: "וופל Gardena קוקוס",
  image: importImage('loacker_gardena_coconut_wafer.jpeg'),
},
{
  name: "וופל גרנד פטיסרי שוקולד חלב ואגוזי לוז",
  image: importImage('loacker_grand_patisserie_milk_choco_hazelnut.jpeg'),
},
{
  name: "וופל גרנד פטיסרי קפוצ'ינו",
  image: importImage('loacker_grand_patisserie_cappuccino.jpeg'),
},
{
  name: "וופל גרנד פטיסרי שוקולד חלב וקוקוס",
  image: importImage('loacker_grand_patisserie_milk_choco_coconut.jpeg'),
},
{
  name: "טורטינה טריפל שוקולד מריר",
  image: importImage('loacker_tortina_triple_dark_choco.jpeg'),
},
{
  name: "וופל גרדנה בטעם חמאת בוטנים מצופה",
  image: importImage('loacker_gardena_peanut_butter.jpeg'),
},
{
  name: "וופל לואקר קלאסי",
  image: importImage('loacker_classic_wafer.jpeg'),
},
{
  name: "קוביות וופל סנדוויץ עם שוקולד",
  image: importImage('loacker_sandwich_choco_wafer.jpeg'),
},
{
  name: "קוביות וופל סנדוויץ עם וניל וחלב",
  image: importImage('loacker_sandwich_vanilla_milk_wafer.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני טירמיסו",
  image: importImage('loacker_quadratini_tiramisu.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני בטעם חמאת בוטנים",
  image: importImage('loacker_quadratini_peanut_butter.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני קרם אגוזים",
  image: importImage('loacker_quadratini_hazelnut_cream.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני וניל",
  image: importImage('loacker_quadratini_vanilla.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני שוקולד",
  image: importImage('loacker_quadratini_choco.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני בטעם שוקולד מריר",
  image: importImage('loacker_quadratini_dark_choco.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני קקאו במילוי קרם חלבי",
  image: importImage('loacker_quadratini_cocoa_milk_cream.jpeg'),
},
{
  name: "קוביות וופל קואדרטיני דאבל שוקולד",
  image: importImage('loacker_quadratini_double_choco.jpeg'),
},
{
  name: "מארז וופל שוקולד טורטינה שוקולד מריר",
  image: importImage('loacker_tortina_dark_choco_pack.jpeg'),
},
{
  name: "וופל גרדנה אגוזי לוז",
  image: importImage('loacker_gardena_hazelnut.jpeg'),
},
{
  name: "וופל עם קרם בטעם חלב",
  image: importImage('loacker_milk_cream_wafer.jpeg'),
},
{
  name: "מארז וופל שוקולד טורטינה שוקולד חלב",
  image: importImage('loacker_tortina_milk_choco_pack.jpeg'),
},
{
  name: "וופל גרדנה שוקולד",
  image: importImage('loacker_gardena_choco_wafer.jpeg'),
},
{
  name: "וופל גרנד פטיסרי שוקולד מריר ואגוזי לוז",
  image: importImage('loacker_grand_patisserie_dark_choco_hazelnut.jpeg'),
},
{
  name: "וופל גרדנה שוקולד",
  image: importImage('loacker_gardena_choco_wafer2.jpeg'),
},
{
  name: "וופל קקאו במילוי קרם חלב",
  image: importImage('loacker_cocoa_milk_cream_wafer.jpeg'),
},
{
  name: "וופל גרנד פטיסרי שוקולד לבן וקוקוס",
  image: importImage('loacker_grand_patisserie_white_choco_coconut.jpeg'),
},
{
  name: "אצבעות וופל גרדנה שוקולד לבן",
  image: importImage('loacker_gardena_white_choco_wafer_sticks.jpeg'),
},
{
  name: "לואקר טורטינה שוקולד לבן",
  image: importImage('loacker_tortina_white_choco.jpeg'),
},
{
  name: "גלילי וופל עם קרם אגוזי לוז בציפוי שוקולד חלב",
  image: importImage('amicelli_hazelnut_cream_wafer_rolls.jpeg'),
},
{
  name: "וופל קנופרס מיניס",
  image: importImage('knoppers_minis.jpeg'),
},
{
  name: "Tim Tam וופל שוקולד קלאסי",
  image: importImage('tim_tam_classic_choco.jpeg'),
},
{
  name: "Tim Tam וופל שוקולד ציפוי כפול",
  image: importImage('tim_tam_double_coat_choco.jpeg'),
},
{
  name: "גלילי וופל עם שוקולד חלב Waffeletten",
  image: importImage('bahlsen_waffeletten_choco_wafer_rolls.jpeg'),
},
{
  name: "ביסקוויט פתיבר שוקו",
  image: importImage('osem_petiber_choco_biscuit.jpeg'),
},
{
  name: "ביסקוויט פתיבר קלאסי",
  image: importImage('osem_petiber_classic_biscuit.jpeg'),
},
{
  name: "ביסקוויט פתיבר קרמל",
  image: importImage('osem_petiber_caramel_biscuit.jpeg'),
},
{
  name: "פתיבר בטעם שוקולד מריר",
  image: importImage('osem_petiber_dark_choco_biscuit.jpeg'),
},
{
  name: "פתיבר קלאסי פחות סוכר",
  image: importImage('osem_petiber_less_sugar_biscuit.jpeg'),
},
{
  name: "פתיבר פינוקי וניל - חלבי",
  image: importImage('osem_petiber_vanilla_treat_biscuit.jpeg'),
},
{
  name: "פתיבר פינוקי שוקו - חלבי",
  image: importImage('osem_petiber_choco_treat_biscuit.jpeg'),
},
{
  name: "פתיבר אצבעות שוקולד - חלבי",
  image: importImage('osem_petiber_choco_fingers_biscuit.jpeg'),
},
{
  name: "פתיבר דובוני שוקולד",
  image: importImage('osem_petiber_choco_bear_biscuit.jpeg'),
},
{
  name: "פתיבר פינוקי Black & White חלבי",
  image: importImage('osem_petiber_black_white_treat_biscuit.jpeg'),
},
{
  name: "פתיבר פינוקים בטעם עוגת גבינה",
  image: importImage('osem_petiber_cheesecake_treat_biscuit.jpeg'),
},
{
  name: "עד חצות ביסקוויט בשוקולד חלב",
  image: importImage('elite_ad_chatzot_milk_choco_biscuit.jpeg'),
},
{
  name: "רבע לשבע במילוי קרם אגוזים ובציפוי שוקולד חלב",
  image: importImage('elite_reva_le_sheva_hazelnut_cream_biscuit.jpeg'),
},
{
  name: "אצבעות וופל רבע לשבע אגוזים בציפוי שוקולד חלב",
  image: importImage('elite_reva_le_sheva_hazelnut_wafer_fingers.jpeg'),
},
{
  name: "רבע לשבע טורטית",
  image: importImage('elite_reva_le_sheva_tortit_wafer.jpeg'),
},
{
  name: "רבע לשבע קראנץ' עוגיות מצופות שוקולד חלב ואגוזי לוז",
  image: importImage('elite_reva_le_sheva_cookie_crunch.jpeg'),
},
{
  name: "אצבעות ביסקוויט עד חצות",
  image: importImage('elite_ad_chatzot_biscuit_fingers.jpeg'),
},
{
  name: "עד חצות דאבל ביסקוויט עם שוקולד חלב -8 אריזות אישיות",
  image: importImage('elite_ad_chatzot_double_biscuit.jpeg'),
},
{
  name: "ביסקוויט עד חצות עיגולים",
  image: importImage('elite_ad_chatzot_circles_biscuit.jpeg'),
},
{
  name: "לואקר טורטינה קרמל",
  image: importImage('loacker_tortina_caramel_wafer.jpeg'),
},
{
  name: "בישקוטים בונומי Bonomi",
  image: importImage('bonomi_biscotti.jpeg'),
},
{
  name: "גביעי גלידה מגולגלים 12 יח'",
  image: importImage('alma_rolled_ice_cream_cones.jpeg'),
},
{
  name: "גביעי גלידה בטעם שוקו",
  image: importImage('osem_choco_ice_cream_cones.jpeg'),
},
{
  name: "גביעי וופל ממותקים לגלידה 24 יח'",
  image: importImage('osem_sweet_waffle_cones.jpeg'),
},
{
  name: "גביעי גלידה אמריקה 24 יח'",
  image: importImage('alma_america_ice_cream_cones.jpeg'),
},
{
  name: "גביעי גלידה 24 יח'",
  image: importImage('alma_ice_cream_cones.jpeg'),
},
{
  name: "ביסקוויטים במילוי נוטלה",
  image: importImage('nutella_filled_biscuit.jpeg'),
},
{
  name: "ביסקוויטים במילוי נוטלה בקופסא",
  image: importImage('nutella_filled_biscuit_box.jpeg'),
},
{
  name: "וופל מלוח במילוי ממרח אגוזי לוז עם קקאו ופצפוצי חיטה",
  image: importImage('nutella_salty_hazelnut_wafer.jpeg'),
},
{
  name: "וופל עם קרם בטעם קקאו",
  image: importImage('loacker_cocoa_cream_wafer.jpeg'),
},
{
  name: "גלילי ופל במילוי קרם קרם קוקוס",
  image: importImage('lago_mini_roll_coconut_wafer.jpeg'),
},
{
  name: "גלילי ופל במילוי קרם קרם קקאו",
  image: importImage('lago_mini_roll_cocoa_wafer.jpeg'),
},
{
  name: "לואקר וופל מצופה שוקולד חלב",
  image: importImage('loacker_milk_choco_wafer.jpeg'),
},
{
  name: "לואקר וופל מצופה שוקולד מריר",
  image: importImage('loacker_dark_choco_wafer.jpeg'),
},
{
  name: "מארז 8 חטיפי עבאדי בטעם גריל",
  image: importImage('abadi_grill_snacks.jpeg'),
},
{
  name: "מיני קוקיס עוגיות שוקולד צ'יפס",
  image: importImage('carmit_mini_choco_cookies.jpeg'),
},
{
  name: "מקוויטיס טינס בטעם קפה מצופים שוקולד חלב",
  image: importImage('mcvities_tins_coffee_milk_choco_biscuit.jpeg'),
},
{
  name: "מקוויטיס טינס מצופים בשוקולד מריר",
  image: importImage('mcvities_tins_dark_choco_biscuit.jpeg'),
},
{
  name: "מקוויטיס טינס מצופים שוקולד חלב",
  image: importImage('mcvities_tins_milk_choco_biscuit.jpeg'),
},
{
  name: "עוגיות מאפין רכות עם שוקולד",
  image: importImage('merba_choco_muffin_cookies.jpeg'),
},
{
  name: "עוגיות נוגטלי במילוי קרם אגוזים",
  image: importImage('merba_nugatel_cookies.jpeg'),
},
{
  name: "עד חצות THINS מצופה שוקולד חלב ופצפוצי אורז",
  image: importImage('elite_ad_chatzot_thins_milk_choco_rice_crispies.jpeg'),
},
{
  name: "עד חצות THINS עוגיות עם תחתית שוקולד חלב ואגוזי לוז",
  image: importImage('elite_ad_chatzot_thins_hazelnut_milk_choco.jpeg'),
},
{
  name: "עד חצות ביסקוויט עם שוקולד חלב במילוי קרם אגוזי לוז",
  image: importImage('elite_ad_chatzot_biscuit_hazelnut_cream.jpeg'),
},
{
  name: "עוגיות גרנולה קינמון ללא תוספת סוכר",
  image: importImage('man_granola_cinnamon_cookies.jpeg'),
},
{
  name: "עוגיות טחינה",
  image: importImage('eclair_tahini_cookies.jpeg'),
},
{
  name: "עוגיות מילקה במילוי קרם אוראו ותוספת שוקולד צ'יפס",
  image: importImage('milka_oreo_choco_chip_cookies.jpeg'),
},
{
  name: "עוגיות תמר ואגוז מלך",
  image: importImage('eclair_date_walnut_cookies.jpeg'),
},
{
  name: "עוגיות במילוי תמרים",
  image: importImage('eclair_date_filled_cigars_cookies.jpeg'),
},
{
  name: "עוגיות עם סוכריות שוקולד חלב צבעוניות",
  image: importImage('merba_colored_choco_chip_cookies.jpeg'),
},
{
  name: "צ'וקטה קידס עוגיות סנדוויץ'",
  image: importImage('chocketa_kids_sandwich_cookies.jpeg'),
},
{
  name: "קפריס גלילי וופל במילוי קרם אגוזי לוז וקקאו",
  image: importImage('papadopoulos_hazelnut_cacao_wafer_rolls.jpeg'),
},
{
  name: "חטיף קינדר טרונקי - מארז 5 יח'",
  image: importImage('kinder_tronky_5_pack.jpeg'),
},
{
  name: "קינדר קארדס Kinder Cards - חמישייה",
  image: importImage('kinder_cards_5_pack.jpeg'),
},
{
  name: "פתיבר קלאסי ללא גלוטן",
  image: importImage('osem_gluten_free_petit_beurre_classic.jpeg'),
},
{
  name: "פתיבר שוקו ללא גלוטן",
  image: importImage('osem_gluten_free_petit_beurre_choco.jpeg'),
},
];

const initialCrackers = [
{
    name: "קרם קרקר",
    image: importImage('cream_cracker.jpeg'),
},
{
    name: "קרקר שומשום",
    image: importImage('sesame_cracker.jpeg'),
},
{
    name: "קרקר בצל",
    image: importImage('onion_cracker.jpeg'),
},
{
    name: "קרקר קלאסי",
    image: importImage('classic_cracker.jpeg'),
},
{
    name: "קרקר זהב",
    image: importImage('gold_cracker.jpeg'),
},
{
    name: "לחמית חיטה מלאה",
    image: importImage('whole_wheat_lahmit.jpeg'),
},
{
    name: "לחמית כפרית",
    image: importImage('rustic_lahmit.jpeg'),
},
{
    name: "לחמית חיטה מלאה ושיפון",
    image: importImage('whole_wheat_rye_lahmit.jpeg'),
},
{
    name: "לחמית 5 דגנים",
    image: importImage('5_grain_lahmit.jpeg'),
},
{
    name: "לחמית אגוזים",
    image: importImage('nut_lahmit.jpeg'),
},
{
    name: "טוסטעים צנימים",
    image: importImage('tostim_toast.jpeg'),
},
{
    name: "טוסטעים צנימים עם קמח חיטה מלא",
    image: importImage('whole_wheat_tostim_toast.jpeg'),
},
{
    name: "טוסטעים צנימים עם שומשום",
    image: importImage('sesame_tostim_toast.jpeg'),
},
{
    name: "חטיף קרקר קריספי עם זיתים כבושים",
    image: importImage('olive_crispy_cracker.jpeg'),
},
{
    name: "חטיף קרקר קריספי כפרי",
    image: importImage('rustic_crispy_cracker.jpeg'),
},
{
    name: "קריספי קרקר כפרי",
    image: importImage('rustic_crispy_cracker_small.jpeg'),
},
{
    name: "קריספי קרקר רוזמרין",
    image: importImage('rosemary_crispy_cracker.jpeg'),
},
{
    name: "חטיפי קרקר זעתר",
    image: importImage('zaatar_cracker_snacks.jpeg'),
},
{
    name: "חטיפי קרקר מלוח",
    image: importImage('salty_cracker_snacks.jpeg'),
},
{
    name: "חטיפי פריכונים אורז מלא בטעם טבעי",
    image: importImage('natural_brown_rice_snacks.jpeg'),
},
{
    name: "חטיפי פריכונים תירס",
    image: importImage('corn_snacks.jpeg'),
},
{
    name: "פריכונים מאורז מלא",
    image: importImage('brown_rice_snacks.jpeg'),
},
{
    name: "פריכונים מאורז מלא דל נתרן",
    image: importImage('low_sodium_brown_rice_snacks.jpeg'),
},
{
    name: "חטיפי פריכונים אורז מלא ודבש",
    image: importImage('honey_brown_rice_snacks.jpeg'),
},
{
    name: "חטיפי טורטיה תירס",
    image: importImage('corn_tortilla_snacks.jpeg'),
},
{
    name: "חטיפי טורטיה בטעם חמוץ מתוק",
    image: importImage('sweet_sour_tortilla_snacks.jpeg'),
},
{
    name: "קרקר פיטנס דק כפרי",
    image: importImage('rustic_fitness_cracker.jpeg'),
},
{
    name: "קרקר דק רוזמרין ושום פיטנס",
    image: importImage('rosemary_garlic_fitness_cracker.jpeg'),
},
{
  name: "קרקר פיטנס דק סלק",
  image: importImage('fitness_cracker_beetroot.jpeg'),
},
{
  name: "קרקר פיטנס דק בטטה",
  image: importImage('fitness_cracker_sweet_potato.jpeg'),
},
{
  name: "קרקר פיטנס דק עם זיתי קלמטה",
  image: importImage('fitness_cracker_kalamata_olives.jpeg'),
},
{
  name: "פיטנס פריכיות דקות מיקס דגנים, אפונה וסלק",
  image: importImage('fitness_crispy_cereal_peas_beetroot.jpeg'),
},
{
  name: "פיטנס פריכיות דקות מיקס שלושה דגנים וקינואה",
  image: importImage('fitness_crispy_three_grains_quinoa.jpeg'),
},
{
  name: "חטיפי קרקר פיטנס Fitness עם חיטה מלאה",
  image: importImage('fitness_cracker_whole_wheat.jpeg'),
},
{
  name: "חטיפי קרקר עם חיטה מלאה, צ'יה וזרעי פשתן פיטנס",
  image: importImage('fitness_cracker_whole_wheat_chia_flaxseed.jpeg'),
},
{
  name: "פריכיות דקות ונימוחות 3 דגנים פיטנס Fitness",
  image: importImage('fitness_thin_crispy_3_grains.jpeg'),
},
{
  name: "פריכיות דקות ונימוחות 3 דגנים וקינואה פיטנס Fitness",
  image: importImage('fitness_thin_crispy_3_grains_quinoa.jpeg'),
},
{
  name: "פיטנס חטיפי פריכיות דגנים עם קינמון",
  image: importImage('fitness_crispy_cereal_cinnamon.jpeg'),
},
{
  name: "פיטנס חטיפי פריכיות דגנים וחומוס מתובלות",
  image: importImage('fitness_crispy_cereal_chickpea_seasoned.jpeg'),
},
{
  name: "פיטנס חטיפי פריכיות עם קטניות ומלח ים",
  image: importImage('fitness_crispy_legumes_sea_salt.jpeg'),
},
{
  name: "נשנושים חטיף זעתר",
  image: importImage('nashnushim_snack_zaatar.jpeg'),
},
{
  name: "נשנושי קרקר קוקטייל מלוח",
  image: importImage('cracker_snack_salty_cocktail.jpeg'),
},
{
  name: "נשנושי קרקר עיגולים מלוחים",
  image: importImage('cracker_snack_salty_circles.jpeg'),
},
{
  name: "נשנושי קרקר משולשי שומשום",
  image: importImage('cracker_snack_sesame_triangles.jpeg'),
},
{
  name: "נשנושי קרקר קוקטייל שומשום",
  image: importImage('cracker_snack_sesame_cocktail.jpeg'),
},
{
  name: "נשנושים איירביס חטיף אפוי בטעם בצל",
  image: importImage('airbites_snack_onion_flavor.jpeg'),
},
{
  name: "נשנושים איירביס חטיף אפוי בטעם ברביקיו",
  image: importImage('airbites_snack_bbq_flavor.jpeg'),
},
{
  name: "נשנושים איירביס חטיף אפוי בטעם פלאפל",
  image: importImage('airbites_snack_falafel_flavor.jpeg'),
},
{
  name: "נשנושים חטיף בטעם שמנת בצל",
  image: importImage('snack_sour_cream_onion_flavor.jpeg'),
},
{
  name: "קרקר חיטה מלאה עם פשתן",
  image: importImage('whole_wheat_cracker_flaxseed.jpeg'),
},
{
  name: "פתית קרקר שיפון",
  image: importImage('rye_cracker_petite.jpeg'),
},
{
  name: "פתית 6 דגנים",
  image: importImage('6_grain_cracker_petite.jpeg'),
},
{
  name: "פתית חיטה מלאה",
  image: importImage('whole_wheat_cracker_petite.jpeg'),
},
{
  name: "פתית שוודי",
  image: importImage('swedish_cracker_petite.jpeg'),
},
{
  name: "פריכיות תפוחי אדמה ו 3 דגנים בטעם פוטטוס",
  image: importImage('energy_crispy_potato_3_grains_potatoes_flavor.jpeg'),
},
{
  name: "פריכיות חומוס, אורז, עדשים שחורות וקינואה",
  image: importImage('tasty_crispy_chickpeas_rice_black_lentils_quinoa.jpeg'),
},
{
  name: "פריכיות עם תחתית שוקולד מריר",
  image: importImage('crispy_bitter_chocolate_bottom.jpeg'),
},
{
  name: "פריכיות אורז מלא עם שוקולד חלב",
  image: importImage('whole_rice_crispy_milk_chocolate.jpeg'),
},
{
  name: "פריכיות משולשות תפוח אדמה, אורז, בתיבול סלק ומלח ים",
  image: importImage('crispy_triangles_potato_rice_seasoned_beetroot_sea_salt.jpeg'),
},
{
  name: "פריכיות תפוחי אדמה, אורז, אפונה ירוקה בתיבול מלח ים",
  image: importImage('crispy_potato_rice_green_peas_seasoned_sea_salt.jpeg'),
},
{
  name: "אנרג'י קריספס-פריכיות חומוס, עדשים ואפונה עם קייל וסלק",
  image: importImage('energy_crisps_chickpeas_lentils_peas_kale_beetroot.jpeg'),
},
{
  name: "פריכיות עם אפונה ובטטה סגולה בטעם בצל מקורמל",
  image: importImage('crisps_peas_purple_sweet_potato_caramelized_onion.jpeg'),
},
{
  name: "פריכיות חומוס, עדשים שחורות, קינואה ופלפל שחור",
  image: importImage('tasty_crisps_chickpeas_black_lentils_quinoa_black_pepper.jpeg'),
},
{
  name: "פריכיות חומוס, עדשים שחורות, קינואה ומלח ים",
  image: importImage('tasty_crisps_chickpeas_black_lentils_quinoa_sea_salt.jpeg'),
},
{
  name: "פריכיות תירס בטעם עגבניות ועשבי תיבול",
  image: importImage('corn_crisps_tomato_herbs_flavor.jpeg'),
},
{
  name: "פריכיות תירס בטעם זיתים ועירית",
  image: importImage('corn_crisps_olive_chives_flavor.jpeg'),
},
{
  name: "נשנושים חטיף תירס בטעם טבעי",
  image: importImage('snacks_corn_natural_flavor.jpeg'),
},
{
  name: "קרקר 6 דגנים",
  image: importImage('6_grain_cracker.jpeg'),
},
{
  name: "קרם קרקר דל נתרן",
  image: importImage('low_sodium_cracker_cream.jpeg'),
},
{
  name: "אנרג'י פריכיות תירס דקיקות עם מלח ים",
  image: importImage('energy_thin_corn_crisps_sea_salt.jpeg'),
},
{
  name: "אנרג'י פריכיות תירס דקיקות עם פלפל שחור",
  image: importImage('energy_thin_corn_crisps_black_pepper.jpeg'),
},
{
  name: "פיטנס מיני קרקר כפרי",
  image: importImage('nestle_fitness_mini_rustic_crackers.jpeg'),
},
{
  name: "פיטנס פריכיות עם שוקולד חלב",
  image: importImage('nestle_fitness_rice_cakes_milk_chocolate.jpeg'),
},
{
  name: "פיטנס פריכיות עם שוקולד לבן - חלבי",
  image: importImage('nestle_fitness_rice_cakes_white_chocolate.jpeg'),
},
{
  name: "קרקר פיטנס דק כרובית וכרישה",
  image: importImage('nestle_fitness_thin_crackers_cauliflower_leek.jpeg'),
},
];

const initialoil = [
  { name: "שמן קנולה מזוכך", image: importImage('canola_oil_refined.jpeg') },
  { name: "שמן קנולה מזוכך מועשר בנוגדי חימצון", image: importImage('canola_oil_antioxidants.jpeg') },
  { name: "שמן קנולה פלוס מועשר באומגה 3", image: importImage('canola_oil_omega3.jpeg') },
  { name: "שמן קנולה מזוכך מועשר בויטמין E", image: importImage('canola_oil_vitaminE.jpeg') },
  { name: "שמן חמניות מזוכך", image: importImage('sunflower_oil_refined.jpeg') },
  { name: "שמן חמניות מזוכך מועשר בנוגדי חימצון", image: importImage('sunflower_oil_antioxidants.jpeg') },
  { name: "שמן חמניות פלוס אומגה 3", image: importImage('sunflower_oil_omega3.jpeg') },
  { name: "שמן זרעי דלעת לא מזוכך", image: importImage('pumpkin_seed_oil_unrefined.jpeg') },
  { name: "שמן זית כתית מעולה", image: importImage('olive_oil_la_espanola.jpeg') },
  { name: "שמן זית קלאסי בקבוק לחיץ", image: importImage('olive_oil_classic_squeeze_bottle.jpeg') },
  { name: "שמן זית כתית מעולה כבישה קרה סורי חומציות 0.5%", image: importImage('olive_oil_syrian_cold_press.jpeg') },
  { name: "שמן זית כתית מעולה כבישה קרה פישולין", image: importImage('olive_oil_israeli_cold_press_picholine.jpeg') },
  { name: "שמן זית כתית מעולה כבישה קרה פיקואל חומציות 0.5%", image: importImage('olive_oil_picual_cold_press.jpeg') },
  { name: "תרסיס שמן קנולה מזוכך", image: importImage('canola_oil_spray_refined.jpeg') },
  { name: "שמן סובין אורז", image: importImage('rice_bran_oil.jpeg') },
  { name: "תרסיס שמן זית", image: importImage('olive_oil_spray_pam.jpeg') },
  { name: "תרסיס שמן קנולה", image: importImage('canola_oil_spray.jpeg') },
  { name: "תרסיס קנולה בטעם חמאה", image: importImage('butter_flavored_canola_oil_spray.jpeg') },
  { name: "תרסיס שמן זית כתית מעולה", image: importImage('extra_virgin_olive_oil_spray_ez_ha_zayit.jpeg') },
  { name: "שמן בוטנים בכבישה קרה", image: importImage('cold_pressed_peanut_oil.jpeg') },
  { name: "תרסיס שמן חמניות מזוכך", image: importImage('sunflower_oil_spray.jpeg') },
  { name: "שמן קנולה אורגני בכבישה קרה", image: importImage('organic_cold_pressed_canola_oil.jpeg') },
  { name: "שמן שומשום כבישה קרה", image: importImage('cold_pressed_sesame_oil.jpeg') },
  { name: "שמן שומשום לא מזוכך", image: importImage('unrefined_sesame_oil.jpeg') },
  { name: "שמן אבוקדו בטעם מעודן", image: importImage('mild_avocado_oil.jpeg') },
  { name: "שמן גרעיני ענבים", image: importImage('grape_seed_oil_casa_d_oro.jpeg') },
  { name: "תרסיס שמן שומשום בכבישה קרה", image: importImage('cold_pressed_sesame_oil_spray_tamim.jpeg') },
];

const initialVinegarlemonjuice = [
  { name: "חומצה אצטית למזון 5%", image: importImage('acetic_acid_for_food_5_percent_yachin.jpeg') },
  { name: "חומץ 5%", image: importImage('vinegar_5_percent_osem.jpeg') },
  { name: "חומץ בלסמי ממודנה", image: importImage('balsamic_vinegar_modena_yad_mordechai.jpeg') },
  { name: "חומץ בלסמי איטלקי", image: importImage('italian_balsamic_vinegar_tamim.jpeg') },
  { name: "חומץ פירות יער אדומים", image: importImage('red_berry_vinegar_tamim.jpeg') },
  { name: "חומץ תפוחים אורגני", image: importImage('organic_apple_cider_vinegar_naturofood.jpeg') },
  { name: "חומץ תפוחים", image: importImage('apple_cider_vinegar_top_brands.jpeg') },
  { name: "חומץ יין עם הדרים", image: importImage('citrus_fruit_wine_vinegar_tamim.jpeg') },
  { name: "חומץ בן יין אדום", image: importImage('red_wine_vinegar_tamim.jpeg') },
  { name: "חומץ בן יין לבן", image: importImage('white_wine_vinegar_tamim.jpeg') },
  { name: "מיץ לימון משומר מרכז לימונים", image: importImage('preserved_lemon_juice_osem.jpeg') },
  { name: "מיץ לימון", image: importImage('lemon_juice_willy_food.jpeg') },
  { name: "מיץ לימון מפוסטר", image: importImage('pasteurized_lemon_juice_yad_mordechai.jpeg') },
  { name: "קרם בלסמי מצומצם", image: importImage('balsamic_reduction_cream_tamim.jpeg') },
];

const initialLegumesricecouscous = [
  { name: "אורז בסמטי מלא", image: importImage('brown_basmati_rice_sugat.jpeg') },
  { name: "אורז בסמטי קלאסי", image: importImage('classic_basmati_rice_sugat.jpeg') },
  { name: "אורז חיש", image: importImage('quick_rice_sugat.jpeg') },
  { name: "אורז יסמין קלאסי", image: importImage('classic_jasmine_rice_sugat.jpeg') },
  { name: "אורז מלא ארוך", image: importImage('long_grain_brown_rice_sugat.jpeg') },
  { name: "אורז מלא עגול", image: importImage('round_brown_rice_sugat.jpeg') },
  { name: "אורז עגול", image: importImage('short_grain_rice_sugat.jpeg') },
  { name: "אורז פרסי קלאסי", image: importImage('classic_persian_rice_sugat.jpeg') },
  { name: "אורז תאילנדי", image: importImage('thai_rice_sugat.jpeg') },
  { name: "עדשים אדומות", image: importImage('red_lentils_sugat.jpeg') },
  { name: "עדשים ירוקות", image: importImage('green_lentils_sugat.jpeg') },
  { name: "חיטה", image: importImage('wheat_sugat.jpeg') },
  { name: "גריסים", image: importImage('grisim_sugat.jpeg') },
  { name: "בורגול", image: importImage('bulgur_sugat.jpeg') },
  { name: "גרישה - בורגול דק", image: importImage('fine_bulgur_sugat.jpeg') },
  { name: "שעועית לבנה", image: importImage('white_bean_sugat.jpeg') },
  { name: "קוסקוס בינוני", image: importImage('medium_couscous_ossem.jpeg') },
  { name: "קוסקוס דק", image: importImage('thin_couscous_ossem.jpeg') },
  { name: "פתיתי קוסקוס ישראלי", image: importImage('israeli_couscous_ossem.jpeg') },
  { name: "קוסקוס עם קמח חיטה מלא", image: importImage('whole_wheat_couscous_ossem.jpeg') },
  { name: "קוסקוס רגיל", image: importImage('regular_couscous_kuskus_mazon.jpeg') },
  { name: "קוסקוס עבה", image: importImage('thick_couscous_kuskus_mazon.jpeg') },
  { name: "קוסקוס מלא", image: importImage('whole_couscous_kuskus_mazon.jpeg') },
  { name: "לקט לחמין", image: importImage('maya_chamin_mix.jpeg') },
  { name: "שעועית מש", image: importImage('maya_mung_bean.jpeg') },
  { name: "אורז לבן עגול לסושי", image: importImage('masterchef_sushi_rice.jpeg') },
  { name: "אפונה יבשה", image: importImage('sugat_dry_peas.jpeg') },
  { name: "גריסי פנינה", image: importImage('sugat_pearl_barley.jpeg') },
  { name: "גרעיני תירס לפופקורן", image: importImage('sugat_popcorn_kernels.jpeg') },
  { name: "זרעי פשתן אורגני", image: importImage('harduf_organic_flax_seeds.jpeg') },
  { name: "חומוס", image: importImage('sugat_chickpeas.jpeg') },
  { name: "חומוס ענק", image: importImage('sugat_large_chickpeas.jpeg') },
  { name: "כוסמת", image: importImage('posulsky_buckwheat.jpeg') },
  { name: "עדשים שחורות בלוגה", image: importImage('sugat_black_beluga_lentils.jpeg') },
  { name: "פריקה - חיטה ירוקה קלויה", image: importImage('sugat_freeke_greens_wheat.jpeg') },
  { name: "קינואה אדומה", image: importImage('maya_red_quinoa.jpeg') },
  { name: "קינואה שחורה", image: importImage('maya_black_quinoa.jpeg') },
  { name: "אורז בסמטי מלא אורגני", image: importImage('tevaot_organic_brown_basmati_rice.jpeg') },
  { name: "אורז עגול מלא אורגני", image: importImage('tevaot_organic_round_rice.jpeg') },
  { name: "אורז בסמטי לבן אורגני", image: importImage('tevaot_organic_white_basmati_rice.jpeg') },
  { name: "אורז לבן ארוך אורגני", image: importImage('harduf_organic_long_grain_rice.jpeg') },
  { name: "עדשים אדומות אורגניות", image: importImage('tevaot_organic_red_lentils.jpeg') },
  { name: "עדשים צהובות אורגניות", image: importImage('tevaot_organic_yellow_lentils.jpeg') },
  { name: "בורגול אורגני", image: importImage('tevaot_organic_bulgur.jpeg') },
  { name: "גרגרי חומוס אורגני", image: importImage('harduf_organic_chickpeas.jpeg') },
  { name: "שעועית אזוקי אורגני", image: importImage('harduf_organic_azuki_beans.jpeg') },
  { name: "מג'דרה קינואה אורגנית", image: importImage('tevaot_organic_quinoa_mujadara.jpeg') },
  { name: "מג'דרה אורגנית", image: importImage('tevaot_organic_mujadara.jpeg') },
  { name: "גריסי פנינה אורגני", image: importImage('harduf_organic_pearl_barley.jpeg') },
];

const initialPasta = [
  { name: "פסטה ספגטי מס׳ 8", image: importImage('osem_spaghetti_8.jpeg') },
  { name: "פסטה צינורות", image: importImage('osem_tubes.jpeg') },
  { name: "פסטה מסולסלים", image: importImage('osem_curls.jpeg') },
  { name: "פסטה צדפים גדולים", image: importImage('osem_large_shells.jpeg') },
  { name: "פסטה צדפים קטנים", image: importImage('osem_small_shells.jpeg') },
  { name: "פסטה ספגטי מס׳ 7", image: importImage('osem_macaroni_7.jpeg') },
  { name: "פסטה תלתלים", image: importImage('osem_curls_2.jpeg') },
  { name: "פסטה קרניים בינוניות", image: importImage('osem_medium_horns.jpeg') },
  { name: "פסטה ספגטי מהיר הכנה", image: importImage('osem_quick_spaghetti.jpeg') },
  { name: "פסטה קסרצ'ה", image: importImage('osem_perfecto_casarecce.jpeg') },
  { name: "פסטה פטוצ'יני", image: importImage('osem_perfecto_fettuccine.jpeg') },
  { name: "פסטה פארפאלה", image: importImage('osem_perfecto_farfalline.jpeg') },
  { name: "פסטה ווזוביוטי", image: importImage('osem_perfecto_vesuviotti.jpeg') },
  { name: "פסטה רצ'יאולי", image: importImage('osem_perfecto_rechitelli.jpeg') },
  { name: "פסטה רדיאטורי", image: importImage('osem_perfecto_radiatori.jpeg') },
  { name: "טורטיגוליני מס' 83", image: importImage('barilla_tortiglioni_83.jpeg') },
  { name: "פסטה מאצ'רוני", image: importImage('barilla_macaroni.jpeg') },
  { name: "פסטה ספגטי מס' 9", image: importImage('barilla_bucatini_9.jpeg') },
  { name: "פסטה פנה מחיטה מלאה", image: importImage('barilla_whole_wheat_penne.jpeg') },
  { name: "פסטה קנלוני", image: importImage('barilla_cannelloni.jpeg') },
  { name: "פסטה טליאטלה", image: importImage('barilla_tagliatelle.jpeg') },
  { name: "פסטה פנה טריקולור", image: importImage('barilla_tricolor_penne.jpeg') },
  { name: "פסטה ספגטי מס' 3", image: importImage('barilla_spaghettini_3.jpeg') },
  { name: "פסטה ספגטי מס' 5", image: importImage('barilla_spaghetti_5.jpeg') },
  { name: "פסטה ספגטי מס' 5 מחיטה מלאה", image: importImage('barilla_whole_wheat_spaghetti_5.jpeg') },
  { name: "ניוקי", image: importImage('de_cecco_gnocchi.jpeg') },
  { name: "פסטה פוזילי ללא גלוטן", image: importImage('barilla_gluten_free_fusilli.jpeg') },
  { name: "לזניה ללא גלוטן", image: importImage('barilla_gluten_free_lasagna.jpeg') },
  { name: "פסטה פנה ללא גלוטן", image: importImage('barilla_gluten_free_penne.jpeg') },
  { name: "פסטה ספגטי מס' 5 ללא גלוטן", image: importImage('barilla_gluten_free_spaghetti_5.jpeg') },
  { name: "פסטה פוזילי מחיטה מלאה", image: importImage('taaman_whole_wheat_fusilli.jpeg') },
  { name: "פתיתים אפויים קוסקוס", image: importImage('osem_baked_couscous.jpeg') },
  { name: "פתיתים אפויים טבעות", image: importImage('osem_baked_rings.jpeg') },
  { name: "פתיתים אפויים כוכבים", image: importImage('osem_baked_stars.jpeg') },
  { name: "פתיתים אפויים אורז", image: importImage('osem_baked_rice.jpeg') },
  { name: "פתיתים אפויים עם בצל", image: importImage('osem_baked_onion.jpeg') },
  { name: "פתיתים אפויים קוסקוס 3 צבעים", image: importImage('osem_baked_couscous_3_colors.jpeg') },
  { name: "פתיתים 30% חיטה מלאה", image: importImage('osem_baked_whole_wheat_plus.jpeg') },
  { name: "פתיתים אפויים מקמח מלא", image: importImage('sugat_baked_whole_wheat.jpeg') },
  { name: "מיני קרוטונים מתובלים למרק ולסלט", image: importImage('osem_mini_croutons_400g.jpeg') },
  { name: "קרוטונים אפויים בתיבול ביתי", image: importImage('osem_baked_croutons_home_style.jpeg') },
  { name: "קרוטונים מתובלים למרק ולסלט", image: importImage('osem_croutons_400g.jpeg') },
  { name: "קרוטונים אפויים לסלט מקמח כוסמין", image: importImage('master_chef_croutons_spelt.jpeg') },
  { name: "אטריות דקות", image: importImage('osem_thin_noodles.jpeg') },
  { name: "אטריות בינוניות", image: importImage('osem_medium_noodles.jpeg') },
  { name: "אטריות דקיקות", image: importImage('osem_very_thin_noodles.jpeg') },
  { name: "אטריות קלאסיות", image: importImage('osem_classic_noodles.jpeg') },
  { name: "מיני קרוטונים למרק בתיבול שום, בצל ופטרוזיליה", image: importImage('master_chef_mini_croutons_garlic_onion_parsley.jpeg') },
  { name: "קרוטונים לסלט בתיבול עגבניות ובזיליקום", image: importImage('master_chef_croutons_tomato_basil.jpeg') },
  { name: "אטריות אורז דקות", image: importImage('master_chef_thin_rice_noodles.jpeg') },
  { name: "נודלס אטריות ביצים", image: importImage('master_chef_egg_noodles.jpeg') },
  { name: "אטריות ביצים רחבות", image: importImage('willy_food_wide_egg_noodles.jpeg') },
  { name: "אטריות ביצים", image: importImage('willy_food_egg_noodles.jpeg') },
  { name: "אטריות ביצים דקות להכנה מהירה", image: importImage('tomer_thin_egg_noodles.jpeg') },
  { name: "אטריות עם עגבניות", image: importImage('taste_of_asia_tomato_noodles.jpeg') },
  { name: "אטריות עם תרד", image: importImage('taste_of_asia_spinach_noodles.jpeg') },
  { name: "עלי לזניה", image: importImage('perfecto_lasagna_sheets.jpeg') },
  { name: "שקדי מרק בשקית", image: importImage('osem_soup_mandels_400g.jpeg') },
  { name: "שקדי מרק במיכל", image: importImage('osem_soup_mandels_container.jpeg') },
  { name: "אטריות שעועית מאסטר שף", image: importImage('master_chef_bean_noodles.jpeg') },
  { name: "פסטה טריגאטלי", image: importImage('barilla_trigatli.jpeg') },
  { name: "ספגטי מקמח כוסמין מלא אורגני", image: importImage('tevaot_organic_spelt_spaghetti.jpeg') },
  { name: "פסטה אורגנית פנה", image: importImage('barilla_organic_penne_rigate.jpeg') },
  { name: "פסטה ספגטי אורגני", image: importImage('barilla_organic_spaghetti.jpeg') },
  { name: "שקדי מרק ללא גלוטן ללא תוספת סוכר", image: importImage('dagash_gluten_free_soup_mandels.jpeg') },

];

const initialFloursaltsugar = [
  {
    name: "סוכר לבן",
    image: importImage('white_sugar_1kg_sugat.jpeg'),
  },
  {
    name: "סוכר חום דמררה קלאסי",
    image: importImage('brown_demerara_sugar_1kg_sugat.jpeg'),
  },
  {
    name: "סוכר גולדן קלאסי",
    image: importImage('golden_sugar_1kg_sugat.jpeg'),
  },
  {
    name: "קוביות סוכר",
    image: importImage('sugar_cubes_500g.jpeg'),
  },
  {
    name: "מלח שולחן",
    image: importImage('table_salt_1kg_salit.jpeg'),
  },
  {
    name: "מלח רגיל למליחת בשר ובישול",
    image: importImage('regular_salt_1kg_salit.jpeg'),
  },
  {
    name: "מלח עדין",
    image: importImage('fine_salt_1kg_melach_haaretz.jpeg'),
  },
  {
    name: "מלח גס",
    image: importImage('coarse_salt_1kg_melach_haaretz.jpeg'),
  },
  {
    name: "מלח ים גס",
    image: importImage('coarse_sea_salt_500g_melach_haaretz.jpeg'),
  },
  {
    name: "מלח ים דק",
    image: importImage('fine_sea_salt_250g_melach_haaretz.jpeg'),
  },
  {
    name: "תערובת מלחים 50% פחות נתרן",
    image: importImage('50_percent_less_sodium_salt_mix_250g_melach_haaretz.jpeg'),
  },
  {
    name: "מלח ים מעושר ביוד",
    image: importImage('iodized_sea_salt_250g_melach_haaretz.jpeg'),
  },
  {
    name: "מלח הימלאיה דק",
    image: importImage('fine_himalayan_salt_1kg_melach_haaretz.jpeg'),
  },
  {
    name: "מלח הימלאיה גס",
    image: importImage('coarse_himalayan_salt_1kg_melach_haaretz.jpeg'),
  },
  {
    name: "קמח חיטה לאפיית לחמים וחלות",
    image: importImage('bread_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח חיטה לבן בהיר מנופה",
    image: importImage('sifted_white_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח תופח מנופה",
    image: importImage('sifted_self_rising_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח חיטה מלא 100% מנופה",
    image: importImage('sifted_whole_wheat_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח לחם וחלות מנופה",
    image: importImage('sifted_bread_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח חיטה 80% מנופה",
    image: importImage('sifted_80_percent_wheat_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח כוסמין לבן",
    image: importImage('neflayot_white_spelt_flour_1kg.jpeg'),
  },
  {
    name: "קמח כוסמין בהיר 80%",
    image: importImage('neflayot_light_spelt_flour_80_percent_1kg.jpeg'),
  },
  {
    name: "קמח שמרים רב תכליתי",
    image: importImage('sugat_all_purpose_yeast_flour_1kg.jpeg'),
  },
  {
    name: "קמח חיטה לבן בהיר",
    image: importImage('sugat_multifunctional_stibel_white_wheat_flour_1kg.jpeg'),
  },
  {
    name: "קמח לחם",
    image: importImage('sugat_stibel_bread_flour_1kg.jpeg'),
  },
  {
    name: "קמח חיטה מלא",
    image: importImage('sugat_stibel_whole_wheat_flour_1kg.jpeg'),
  },
  {
    name: "קמח תופח",
    image: importImage('sugat_stibel_self_rising_flour_1kg.jpeg'),
  },
  {
    name: "קמח פיצה ופוקצ'ה",
    image: importImage('sugat_stibel_pizza_focaccia_flour_1kg.jpeg'),
  },
  {
    name: "קמח תירס להכנה מהירה",
    image: importImage('piccata_quick_cooking_corn_flour_500g.jpeg'),
  },
  {
    name: "קמח תירס דק",
    image: importImage('piccata_fine_corn_flour_1kg.jpeg'),
  },
  {
    name: "קמח תירס להכנה מהירה",
    image: importImage('piccata_quick_cooking_corn_flour_1kg.jpeg'),
  },
  {
    name: "מטחנת מלח ים גבישי מהים האדום",
    image: importImage('red_sea_granular_salt_mill_250g.jpeg'),
  },
  {
    name: "מטחנת סלעי מלח גרוסים מהרי ההימלאיה",
    image: importImage('himalayan_rock_salt_mill_300g.jpeg'),
  },
  {
    name: "מלח ים מועשר ביוד",
    image: importImage('iodized_sea_salt_1kg_salt_of_the_earth.jpeg'),
  },
  {
    name: "קמח חיטה לפיצה ופוקצ'ה מנופה",
    image: importImage('sifted_pizza_focaccia_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח כוסמין מלא",
    image: importImage('whole_spelt_flour_1kg_israel_mills.jpeg'),
  },
  {
    name: "קמח מצה חמץ",
    image: importImage('chametz_matzo_meal_500g_maya.jpeg'),
  },
  {
    name: "קמח שמרים חלה",
    image: importImage('challah_yeast_flour_1kg_sugat.jpeg'),
  },
  {
    name: "קמח שמרים פיצה",
    image: importImage('pizza_yeast_flour_1kg_sugat.jpeg'),
  },
  {
    name: "קמח שקדים",
    image: importImage('almond_flour_100g_chef.jpeg'),
  },
  {
    name: "קמח שקדים",
    image: importImage('almond_flour_250g_maya.jpeg'),
  },
  {
    name: "קורנפלור",
    image: importImage('cornflour_500g_maya.jpeg'),
  },
  {
    name: "אבקת סוכר",
    image: importImage('powdered_sugar_100g_hanamal.jpeg'),
  },
  {
    name: "סוכר וניל",
    image: importImage('vanilla_sugar_10x10g_hanamal.jpeg'),
  },
  {
    name: "סוכר בטעם וניל",
    image: importImage('vanilla_flavored_sugar_100g_maya.jpeg'),
  },
  {
    name: "סוכר חום כהה לאפיה",
    image: importImage('dark_brown_sugar_baking_1kg_sugat.jpeg'),
  },
  {
    name: "קמח תפוחי אדמה",
    image: importImage('potato_flour_500g_maya.jpeg'),
  },
  {
    name: "סוכר קנים אורגני",
    image: importImage('organic_cane_sugar_1kg_haraduf.jpeg'),
  },
  {
    name: "סוכר קוקוס אורגני",
    image: importImage('organic_coconut_sugar_300g_tevaot.jpeg'),
  },
  {
    name: "קמח תירס ללא גלוטן",
    image: importImage('gluten_free_corn_flour_1kg_willy_food.jpeg'),
  },
  {
    name: "קמח אורז מלא ללא גלוטן",
    image: importImage('gluten_free_brown_rice_flour_400g_tevaot.jpeg'),
  },
  {
    name: "קמח חומוס ללא גלוטן",
    image: importImage('gluten_free_chickpea_flour_400g_tevaot.jpeg'),
  },
  {
    name: "קמח כוסמת ירוקה ללא גלוטן",
    image: importImage('gluten_free_green_buckwheat_flour_400g_tevaot.jpeg'),
  },
  {
    name: "קמח עדשים כתומות ללא גלוטן",
    image: importImage('gluten_free_red_lentil_flour_400g_tevaot.jpeg'),
  },
];

const initialCoffeedrinkingpowders = [
  {
    name: "קפה שחור",
    image: importImage('jacobs_black_coffee_200g.jpeg'),
  },
  {
    name: "קפה נמס טייסטרס צ'ויס",
    image: importImage('nescafe_tasters_choice_200g.jpeg'),
  },
  {
    name: "קפה נמס טייסטרס צ'ויס בריסטה",
    image: importImage('nescafe_tasters_choice_barista_180g.jpeg'),
  },
  {
    name: "קפה נמס טייסטרס צ'ויס נטול קפאין",
    image: importImage('nescafe_tasters_choice_decaf_200g.jpeg'),
  },
  {
    name: "קפה נמס מגורען רד מאג",
    image: importImage('nescafe_red_mug_200g.jpeg'),
  },
  {
    name: "קפה נמס מיובש בתוספת קפה קלוי",
    image: importImage('nescafe_gold_200g.jpeg'),
  },
  {
    name: "נסקפה טייסטרס צ'ויס רוסטרי קלייה בהירה טעם עדין",
    image: importImage('nescafe_tasters_choice_roastery_light_roast_95g.jpeg'),
  },
  {
    name: "מנות אישיות קפה נמס טייסטרס צ'ויס",
    image: importImage('nescafe_tasters_choice_individual_packs_20.jpeg'),
  },
  {
    name: "קפה טורקי",
    image: importImage('elite_turkish_coffee_200g.jpeg'),
  },
  {
    name: "קפה טורקי עם הל",
    image: importImage('elite_turkish_coffee_with_cardamom_100g.jpeg'),
  },
  {
    name: "מנות אישיות קפה טורקי",
    image: importImage('elite_turkish_coffee_individual_packs_24.jpeg'),
  },
  {
    name: "קפה טורקי קלוי וטחון",
    image: importImage('elite_turkish_coffee_roasted_1kg.jpeg'),
  },
  {
    name: "קפה נמס עלית",
    image: importImage('elite_instant_coffee_200g.jpeg'),
  },
  {
    name: "מנות אישיות קפה נמס",
    image: importImage('elite_instant_coffee_on_the_go_28_packs.jpeg'),
  },
  {
    name: "PLATINUM קפה נמס קלאסיק",
    image: importImage('elite_platinum_classic_200g.jpeg'),
  },
  {
    name: "PLATINUM ברזילאי קפה נמס",
    image: importImage('elite_platinum_brazil_200g.jpeg'),
  },
  {
    name: "PLATINUM קפה נמס נטול קפאין",
    image: importImage('elite_platinum_decaf_200g.jpeg'),
  },
  {
    name: "אבקה להכנת משקה בטעם וניל",
    image: importImage('pediasure_vanilla_powder_400g.jpeg'),
  },
  {
    name: "קפה פילטר טחון וקלוי מוקה",
    image: importImage('elite_filter_coffee_mocha_no1_500g.jpeg'),
  },
  {
    name: "שוקולית",
    image: importImage('elite_shokolit_500g.jpeg'),
  },
  {
    name: "אבקה להכנת משקה אייס קפה בטעם קלאסי",
    image: importImage('elite_ice_coffee_powder_classic_8_units.jpeg'),
  },
  {
    name: "קפה טורקי נטול קפאין",
    image: importImage('hag_turkish_coffee_decaf_200g.jpeg'),
  },
  {
    name: "קפה נמס נטול קפאין",
    image: importImage('hag_instant_coffee_decaf_200g.jpeg'),
  },
  {
    name: "קפה שחור עם הל",
    image: importImage('al_nakhla_black_coffee_with_cardamom_250g.jpeg'),
  },
  {
    name: "קפה שחור בלי הל",
    image: importImage('al_nakhla_black_coffee_without_cardamom_250g.jpeg'),
  },
  {
    name: "אבקה להכנת משקה על בסיס עולש",
    image: importImage('chicoree_leroux_100g.jpeg'),
  },
  {
    name: "חלבית מלבין קפה חלבי",
    image: importImage('elite_coffee_creamer_350g.jpeg'),
  },
  {
    name: "מלבין קפה",
    image: importImage('complete_coffee_creamer_400g.jpeg'),
  },
  {
    name: "אבקה להכנת משקה קפה בטעם אגוזי לוז",
    image: importImage('elite_hazelnut_coffee_powder_10_units.jpeg'),
  },
  {
    name: "אבקה להכנת משקה קפה בטעם וניל",
    image: importImage('elite_vanilla_coffee_powder_10_units.jpeg'),
  },
  {
    name: "פולי קפה בלנד הבית",
    image: importImage('elite_house_blend_coffee_beans_450g.jpeg'),
  },
  {
    name: "פולי קפה קלויים בקלייה מקומית עוצמה 10",
    image: importImage('elite_local_roasted_coffee_beans_1kg.jpeg'),
  },
  {
    name: "אבקה להכנת משקה חלב בטעם שוקו",
    image: importImage('mia_chocolate_drink_powder_500g.jpeg'),
  },
];

const initialCoffeecapsules = [
    {
      name: "קפסולות סאני דיי עוצמה 5",
      image: importImage('starbucks_sunny_day_intensity_5.jpeg'),
    },
    {
      name: "קפסולות בלונד עוצמה 6",
      image: importImage('starbucks_blonde_intensity_6.jpeg'),
    },
    {
      name: "קפסולות קולומביה עוצמה 7",
      image: importImage('starbucks_colombia_intensity_7.jpeg'),
    },
    {
      name: "קפסולות פייק פלייס עוצמה 7",
      image: importImage('starbucks_pike_place_intensity_7.jpeg'),
    },
    {
      name: "קפסולות האוס בלנד לונגו עוצמה 8",
      image: importImage('starbucks_house_blend_lungo_intensity_8.jpeg'),
    },
    {
      name: "קפסולות ורונה ריסטרטו עוצמה 10",
      image: importImage('starbucks_verona_ristretto_intensity_10.jpeg'),
    },
    {
      name: "קפסולות אספרסו נטול עוצמה 11",
      image: importImage('starbucks_espresso_decaf_intensity_11.jpeg'),
    },
    {
      name: "קפסולות אספרסו עוצמה 11",
      image: importImage('starbucks_espresso_intensity_11.jpeg'),
    },
    {
      name: "קפסולות איטלאן סטייל רוסט עוצמה 11",
      image: importImage('starbucks_italian_style_roast_intensity_11.jpeg'),
    },
    {
      name: "קפסולות בטעם וניל עוצמה 5",
      image: importImage('starbucks_vanilla_intensity_5.jpeg'),
    },
    {
      name: "קפסולות בטעם קרמל עוצמה 5",
      image: importImage('starbucks_caramel_intensity_5.jpeg'),
    },
    {
      name: "קפסולות אספרסו קלאסיקו",
      image: importImage('jacobs_espresso_classico.jpeg'),
    },
    {
      name: "קפסולות אספרסו לונגו",
      image: importImage('jacobs_espresso_lungo.jpeg'),
    },
    {
      name: "קפסולות אספרסו אינטנסו",
      image: importImage('jacobs_espresso_intenso.jpeg'),
    },
    {
      name: "קפסולות אספרסו ריסטרטו",
      image: importImage('jacobs_espresso_ristretto.jpeg'),
    },
    {
      name: "קפסולות קפה נטול קפאין",
      image: importImage('elite_decaf_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה 100% ברזיל",
      image: importImage('elite_brazil_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה עדין וקטיפתי",
      image: importImage('elite_mild_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה אספרסו עשיר וארומטי",
      image: importImage('elite_rich_aromatic_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה חזק ועשיר",
      image: importImage('elite_strong_rich_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה 100% גואטמלה",
      image: importImage('elite_guatemala_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה חזק ועוצמתי",
      image: importImage('elite_powerful_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה חזק במיוחד",
      image: importImage('elite_extra_strong_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה חזק אש",
      image: importImage('elite_fire_strong_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה בטעם וניל",
      image: importImage('elite_vanilla_flavored_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה בטעם אגוזי לוז",
      image: importImage('elite_hazelnut_flavored_espresso.jpeg'),
    },
    {
      name: "קפסולות קפה עם הל",
      image: importImage('nahla_coffee_with_cardamom.jpeg'),
    },
    {
      name: "קפסולות ספלנדיד להכנת משקה בטעם שוקולטה",
      image: importImage('splendid_chocolate_drink_capsules.jpeg'),
    },
];

const initialTea = [
    {
      name: "תה ויסוצקי קלאסי",
      image: importImage('wissotzky_classic_100.jpeg'),
    },
    {
      name: "תה ויסוצקי טעם מעודן",
      image: importImage('wissotzky_refined_flavor.jpeg'),
    },
    {
      name: "תה ארל גריי",
      image: importImage('wissotzky_earl_grey.jpeg'),
    },
    {
      name: "תה עלים ארל גריי",
      image: importImage('wissotzky_earl_grey_leaves.jpeg'),
    },
    {
      name: "תה ירוק עלים",
      image: importImage('wissotzky_green_tea_leaves.jpeg'),
    },
    {
      name: "תה קלאסי עם נגיעות נענע",
      image: importImage('wissotzky_classic_mint.jpeg'),
    },
    {
      name: "תה צ'אי מסאלה",
      image: importImage('wissotzky_chai_masala.jpeg'),
    },
    {
      name: "תה צ'אי קרמל מלוח",
      image: importImage('wissotzky_chai_salted_caramel.jpeg'),
    },
    {
      name: "תה צ'אי שקדים",
      image: importImage('wissotzky_chai_almond.jpeg'),
    },
    {
      name: "תה צ'אי מוקה",
      image: importImage('wissotzky_chai_mocha.jpeg'),
    },
    {
      name: "צ'אי וניל והל",
      image: importImage('wissotzky_vanilla_cardamom_chai.jpeg'),
    },
    {
      name: "תערובת תה שחור עם הל",
      image: importImage('wissotzky_black_tea_cardamom.jpeg'),
    },
    {
      name: "תה נענע",
      image: importImage('wissotzky_mint_tea.jpeg'),
    },
    {
      name: "תה ירוק סיני קלאסי",
      image: importImage('wissotzky_chinese_green_tea.jpeg'),
    },
    {
      name: "תה ירוק לימונית ולואיזה",
      image: importImage('wissotzky_green_lemon_louisa.jpeg'),
    },
    {
      name: "תה ירוק נענע",
      image: importImage('wissotzky_green_mint.jpeg'),
    },
    {
      name: "תה ירוק לימונית ולואיזה בתוספת עלי סטיביה",
      image: importImage('wissotzky_green_stevia_lemon_louisa.jpeg'),
    },
    {
      name: "תה ירוק יסמין",
      image: importImage('wissotzky_green_jasmine.jpeg'),
    },
    {
      name: "תה ירוק לימונית וג'ינג'ר",
      image: importImage('wissotzky_green_lemon_ginger.jpeg'),
    },
    {
      name: "תה ירוק ארל גריי",
      image: importImage('wissotzky_green_earl_grey.jpeg'),
    },
    {
      name: "תה ירוק מרווה",
      image: importImage('wissotzky_green_sage.jpeg'),
    },
    {
      name: "תה ירוק קמומיל",
      image: importImage('wissotzky_green_chamomile.jpeg'),
    },
    {
      name: "תה ירוק צ'אי מסאלה",
      image: importImage('wissotzky_green_chai_masala.jpeg'),
    },
    {
      name: "תה ירוק וניל",
      image: importImage('wissotzky_green_vanilla.jpeg'),
    },
    {
      name: "תה ירוק ג'ינג'ר חריף",
      image: importImage('wissotzky_green_spicy_ginger.jpeg'),
    },
    {
      name: "תה ירוק בטעם קינמון ודבש",
      image: importImage('wissotzky_green_cinnamon_honey.jpeg'),
    },
    {
      name: "תה ירוק מנגו",
      image: importImage('wissotzky_green_mango.jpeg'),
    },
    {
      name: "תה ירוק תפוז, ג'ינג'ר וכורכום",
      image: importImage('wissotzky_green_orange_ginger_turmeric.jpeg'),
    },
    {
      name: "תה ירוק עם צמחים סגולים בטעם אוכמניות ואסאי",
      image: importImage('wissotzky_green_blueberry_acai.jpeg'),
    },
    {
      name: "תה ירוק קינמון, ג'ינג'ר וכורכום עם מאצ'ה יפנית",
      image: importImage('wissotzky_green_cinnamon_ginger_turmeric_matcha.jpeg'),
    },
    {
      name: "תה ירוק לימונית וג'ינג'ר עם ויטמינים C ו- D",
      image: importImage('wissotzky_plus_green_lemon_ginger_vitamins.jpeg'),
    },
    {
      name: "תה ירוק נענע עם ויטמינים C ו- D",
      image: importImage('wissotzky_plus_green_mint_vitamins.jpeg'),
    },
];
const initialTeainfusions = [
  {
    name: "תה ויסוצקי קלאסי",
    image: importImage('wissotzky_classic_100.jpeg'),
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


  const [breads, setBreads] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBreads.map(breads => ({ ...breads, count: 0 }))
  );
  const [cakes, setCakes] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCakes.map(cakes => ({ ...cakes, count: 0 }))
  );
  const [cookies, setCookies] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCookies.map(cookies => ({ ...cookies, count: 0 }))
  );
  const [crackers, setCrackers] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCrackers.map(crackers => ({ ...crackers, count: 0 }))
  );
  const [oil, setOil] = useState<{ name: string; image: string | null; count: number }[]>(
    initialoil.map(oil => ({ ...oil, count: 0 }))
  );
  const [vinegarLemonjuice, setVinegarLemonjuice] = useState<{ name: string; image: string | null; count: number }[]>(
    initialVinegarlemonjuice.map(vinegarLemonjuice => ({ ...vinegarLemonjuice, count: 0 }))
  );
  const [legumesricecouscous, setLegumesricecouscous] = useState<{ name: string; image: string | null; count: number }[]>(
    initialLegumesricecouscous.map(legumesricecouscous => ({ ...legumesricecouscous, count: 0 }))
  );
  const [pasta, setPasta] = useState<{ name: string; image: string | null; count: number }[]>(
    initialPasta.map(pasta => ({ ...pasta, count: 0 }))
  );
  const [floursaltsugar, setFloursaltsugar] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFloursaltsugar.map(floursaltsugar => ({ ...floursaltsugar, count: 0 }))
  );
  const [coffeedrinkingpowders, setCoffeedrinkingpowders] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCoffeedrinkingpowders.map(coffeedrinkingpowders => ({ ...coffeedrinkingpowders, count: 0 }))
  );
  const [coffeecapsules, setCoffeecapsules] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCoffeecapsules.map(coffeecapsules => ({ ...coffeecapsules, count: 0 }))
  );
  const [tea, setTea] = useState<{ name: string; image: string | null; count: number }[]>(
    initialTea.map(tea => ({ ...tea, count: 0 }))
  );
  const [teainfusions, setTeainfusions] = useState<{ name: string; image: string | null; count: number }[]>(
    initialTeainfusions.map(teainfusions => ({ ...teainfusions, count: 0 }))
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


    const allCanDry = [...breadsToSave, ...cakesToSave, ...cookiesToSave,...crackersToSave,...oilToSave,...vinegarLemonjuiceToSave,...legumesricecouscousToSave,...pastaToSave,...floursaltsugarToSave,...coffeedrinkingpowdersToSave,...coffeecapsulesToSave,...teaToSave,...teainfusionsToSave ];
    allCanDry.forEach(CanDry => addProduct(CanDry));

    setBreads(breads.map(breads => ({ ...breads, count: 0 })));
    setCakes(cakes.map(cakes => ({ ...cakes, count: 0 })));
    setCakes(cookies.map(cookies => ({ ...cookies, count: 0 })));
    setCrackers(crackers.map(crackers => ({ ...crackers, count: 0 })));
    setOil(oil.map(oil => ({ ...oil, count: 0 })));
    setVinegarLemonjuice(vinegarLemonjuice.map(vinegarLemonjuice => ({ ...vinegarLemonjuice, count: 0 })));
    setLegumesricecouscous(legumesricecouscous.map(legumesricecouscous => ({ ...legumesricecouscous, count: 0 })));
    setPasta(pasta.map(pasta => ({ ...pasta, count: 0 })));
    setFloursaltsugar(floursaltsugar.map(floursaltsugar => ({ ...floursaltsugar, count: 0 })));
    setCoffeedrinkingpowders(coffeedrinkingpowders.map(coffeedrinkingpowders => ({ ...coffeedrinkingpowders, count: 0 })));
    setCoffeecapsules(coffeecapsules.map(coffeecapsules => ({ ...coffeecapsules, count: 0 })));
    setTea(tea.map(tea => ({ ...tea, count: 0 })));
    setTeainfusions(teainfusions.map(teainfusions => ({ ...teainfusions, count: 0 })));

  };

  return (
    <div>
      <div>
        <ProductsPage
          products={breads}
          categoryTitle="לחם, חלה, לחמניות, פיתות וטורטייה"
          icon={<img alt="" src={importImage('breads_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cakes}
          categoryTitle="עוגות ועוגות אישיות"
          icon={<img alt="" src={importImage('cakes_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cookies}
          categoryTitle="עוגיות, וופלים, ביסקווטים וגביעי גלידה"
          icon={<img alt="" src={importImage('cookies_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={crackers}
          categoryTitle="פריכיות, צנימים וקרקרים"
          icon={<img alt="" src={importImage('crackers_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={oil}
          categoryTitle="שמן, שמן זית ותרסיסי שמן"
          icon={<img alt="" src={importImage('oil_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={vinegarLemonjuice}
          categoryTitle="חומץ ומיץ לימון"
          icon={<img alt="" src={importImage('vinegarLemonjuice_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={legumesricecouscous}
          categoryTitle="קטניות, אורז וקוסקוס"
          icon={<img alt="" src={importImage('legumesricecouscous_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={pasta}
          categoryTitle="פסטה, אטריות ושקדי מרק"
          icon={<img alt="" src={importImage('pasta_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={floursaltsugar}
          categoryTitle="קמח, מלח וסוכר"
          icon={<img alt="" src={importImage('floursaltsugar_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={coffeedrinkingpowders}
          categoryTitle="קפה ואבקות שתיה"
          icon={<img alt="" src={importImage('coffeedrinkingpowders_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={coffeecapsules}
          categoryTitle="קפסולות קפה"
          icon={<img alt="" src={importImage('coffeecapsules_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={tea}
          categoryTitle="תה"
          icon={<img alt="" src={importImage('tea_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={teainfusions}
          categoryTitle="חליטות תה"
          icon={<img alt="" src={importImage('teainfusions_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default Can_Dry_Page;