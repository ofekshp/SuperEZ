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
  name: "עלי טורטייה כוסמין - 6 יחידות בקוטר 20 ס",
  image: importImage('master_chef_spelt_tortilla_20cm.jpeg'),
  },
  {
  name: "עלי טורטייה מיני, קמח חיטה - 10 יחידות בקוטר 15 ס",
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
      image: importImage('fiber_one_chocolate_cakes.jpeg'),
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


  initialBreads.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCakes.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCookies.sort((a, b) => a.name.localeCompare(b.name, 'he'));



  const [breads, setBreads] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBreads.map(breads => ({ ...breads, count: 0 }))
  );
  const [cakes, setCakes] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCakes.map(cakes => ({ ...cakes, count: 0 }))
  );
  const [cookies, setCookies] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCookies.map(cookies => ({ ...cookies, count: 0 }))
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
  };

  const handleSave = async () => {
    const breadsToSave = breads.filter(breads => breads.count > 0).map(breads => ({ ...breads, quantity: breads.count }));
    const cakesToSave = cakes.filter(cakes => cakes.count > 0).map(cakes => ({ ...cakes, quantity: cakes.count }));
    const cookiesToSave = cookies.filter(cookies => cookies.count > 0).map(cookies => ({ ...cookies, quantity: cookies.count }));

    const allCanDry = [...breadsToSave, ...cakesToSave, ...cookiesToSave ];
    allCanDry.forEach(CanDry => addProduct(CanDry));

    setBreads(breads.map(breads => ({ ...breads, count: 0 })));
    setCakes(cakes.map(cakes => ({ ...cakes, count: 0 })));
    setCakes(cookies.map(cookies => ({ ...cookies, count: 0 })));


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
    </div>
  );
}

export default Can_Dry_Page;
