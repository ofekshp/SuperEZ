import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Baking/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Baking_Page: React.FC = () => {
  const { addProduct , removeProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

const initialSpreadssauces = [
    {
      name: "רוטב לפסטה קלאסי",
      image: importImage("classic_pasta_sauce_yachin.jpeg"),
      id: 5,
    },
    {
      name: "רוטב לפיצה",
      image: importImage("pizza_sauce_yachin.jpeg"),
      id: 5,
    },
    {
      name: "רוטב לשקשוקה",
      image: importImage("shakshuka_sauce_yachin.jpeg"),
      id: 5,
    },
    {
      name: "רוטב לפסטה בולונז",
      image: importImage("bolognese_pasta_sauce_yachin.jpeg"),
      id: 5,
    },
    {
      name: "רוטב פסטה לילדים",
      image: importImage("kids_pasta_sauce_yachin.jpeg"),
      id: 5,
    },
    {
      name: "רוטב צ'ילי מתוק",
      image: importImage("sweet_chili_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב צ'ילי חריף",
      image: importImage("spicy_chili_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב טריאקי מופחת סוכר ונתרן",
      image: importImage("low_sugar_sodium_teriyaki_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב ברביקיו",
      image: importImage("bbq_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב בנוסח סצ'ואן",
      image: importImage("szechuan_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות ופלפלים לשקשוקה",
      image: importImage("tomato_pepper_shakshuka_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות לקציצות ותבשילים",
      image: importImage("meatball_tomato_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב ויניגרט",
      image: importImage("vinaigrette_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב קיסר",
      image: importImage("caesar_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב אלף האיים",
      image: importImage("thousand_islands_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב שום",
      image: importImage("garlic_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב אלף האיים לייט",
      image: importImage("light_thousand_islands_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב שום לייט",
      image: importImage("light_garlic_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב סויה בסגנון סיני",
      image: importImage("chinese_soy_sauce_osem.jpeg"),
      id: 5,
    },
    {
      name: "בסיס של רוטב עגבניות לבולונז",
      image: importImage("bolognese_tomato_base_sauce_osem_perfecto.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות פלפלים לשקשוקה",
      image: importImage("tomato_pepper_shakshuka_sauce_osem_perfecto.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות קלאסי",
      image: importImage("classic_tomato_sauce_osem_perfecto.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות לפיצה ולזניה",
      image: importImage("pizza_lasagna_tomato_sauce_osem_perfecto.jpeg"),
      id: 5,
    },
    {
      name: "רוטב ארביאטה",
      image: importImage("arrabiata_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב פומדורו",
      image: importImage("pomodoro_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב בסיס לבולונז",
      image: importImage("bolognese_base_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב נפוליטנה",
      image: importImage("napolitana_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות עם בזיליקום",
      image: importImage("tomato_basil_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות טוסקנה",
      image: importImage("tuscany_tomato_sauce_barilla.jpeg"),
      id: 5,
    },
    {
      name: "רוטב חרדל ודבש לייט",
      image: importImage("light_honey_mustard_sauce_hellmanns.jpeg"),
      id: 5,
    },
    {
      name: "ממרח זיתים ירוקים",
      image: importImage("green_olive_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח פלפל צו'מה",
      image: importImage("pepper_chuma_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח זיתים",
      image: importImage("olive_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח עגבניות מיובשות",
      image: importImage("sun_dried_tomato_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח פלפלים מתוקים אדומים",
      image: importImage("sweet_red_pepper_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח ארטישוק",
      image: importImage("artichoke_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "פסטו איטלקי",
      image: importImage("italian_pesto_olivia.jpeg"),
      id: 5,
    },
    {
      name: "פסטו פטרוזיליה ונענע",
      image: importImage("parsley_mint_pesto_olivia.jpeg"),
      id: 5,
    },
    {
      name: "ממרח עגבניות מיובשות פיקנטי",
      image: importImage("spicy_sun_dried_tomato_spread_olivia.jpeg"),
      id: 5,
    },
    {
      name: "פסטו בזיליקום",
      image: importImage("basil_pesto_olivia.jpeg"),
      id: 5,
    },
    {
      name: "פסטו בטעם פרמז'ן",
      image: importImage("parmesan_flavored_pesto_olivia.jpeg"),
      id: 5,
    },
    {
      name: "טפנד זיתים",
      image: importImage("olive_tapenade_olivia.jpeg"),
      id: 5,
    },
    {
      name: "רוטב ריבת בצל",
      image: importImage("onion_jam_sauce_olivia.jpeg"),
      id: 5,
    },
    {
      name: "רוטב שום ודבש",
      image: importImage("garlic_honey_sauce_olivia.jpeg"),
      id: 5,
    },
    {
      name: "רוטב סריצ'ה",
      image: importImage("sriracha_sauce_master_chef.jpeg"),
      id: 5,
    },
    {
      name: "רוטב רימונים",
      image: importImage("pomegranate_sauce_willi_food.jpeg"),
      id: 5,
    },
    {
      name: "טבסקו באפלו",
      image: importImage("buffalo_tabasco_sauce.jpeg"),
      id: 5,
    },
    {
      name: "טאבסקו צ'יפוטלה",
      image: importImage("chipotle_tabasco_sauce.jpeg"),
      id: 5,
    },
    {
      name: "רוטב חזרת עם וואסבי",
      image: importImage("horseradish_wasabi_sauce_scandia.jpeg"),
      id: 5,
    },
    {
      name: "רוטב חזרת",
      image: importImage("horseradish_sauce_scandia.jpeg"),
      id: 5,
    },
    {
      name: "רוטב חזרת עם סלק",
      image: importImage("horseradish_beet_sauce_scandia.jpeg"),
      id: 5,
    },
    {
      name: "קרם מצומצם מחומץ בלסמי",
      image: importImage("balsamic_reduction_modena_sauce_tamim.jpeg"),
      id: 5,
    },
    {
      name: "איולי עגבניות בקבוק לחיץ",
      image: importImage("squeezable_tomato_aioli_sauce_alalachem.jpeg"),
      id: 5,
    },
    {
      name: "איולי פסטו בקבוק לחיץ",
      image: importImage("squeezable_pesto_aioli_sauce_alalachem.jpeg"),
      id: 5,
    },
    {
      name: "איולי פלפלים פיקנטי בקבוק לחיץ",
      image: importImage("squeezable_spicy_pepper_aioli_sauce_alalachem.jpeg"),
      id: 5,
    },
    {
      name: "איולי שום בקבוק לחיץ",
      image: importImage("squeezable_garlic_aioli_sauce_alalachem.jpeg"),
      id: 5,
    },
    {
      name: "איולי שום לימון בקבוק לחיץ",
      image: importImage("squeezable_garlic_lemon_aioli_sauce_alalachem.jpeg"),
      id: 5,
    },
    {
      name: "רוטב טריאקי",
      image: importImage("teriyaki_sauce_knorr.jpeg"),
      id: 5,
    },
    {
      name: "רוטב עגבניות עם קוביות ארטישוק",
      image: importImage("artichoke_shakshuka_sauce_zeta.jpeg"),
      id: 5,
    },
    {
      name: "עגבניות מיובשות בשמש עם לימון",
      image: importImage("sun_dried_tomatoes_lemon_olivia.jpeg"),
      id: 5,
    },
];  

const initialBreadcrumbs = [
    {
      name: "פירורית זהב",
      image: importImage("golden_breadcrumbs_ossem_350g.jpeg"),
      id: 10,
    },
    {
      name: "פירורית",
      image: importImage("breadcrumbs_ossem_350g.jpeg"),
      id: 10,
    },
    {
      name: "פירורית מתובלת",
      image: importImage("seasoned_breadcrumbs_ossem_200g.jpeg"),
      id: 10,
    },
    {
      name: "פירורית בטעם ביסלי גריל",
      image: importImage("bisli_grill_flavored_breadcrumbs_ossem_200g.jpeg"),
      id: 10,
    },
    {
      name: "פירורית - חיטה מלאה",
      image: importImage("whole_wheat_breadcrumbs_ossem_200g.jpeg"),
      id: 10,
    },
    {
      name: "פירורי לחם מוזהבים לטיגון ואפייה",
      image: importImage("golden_breadcrumbs_for_frying_and_baking_master_chef_320g.jpeg"),
      id: 10,
    },
    {
      name: "פירורי לחם מתובלים",
      image: importImage("seasoned_breadcrumbs_master_chef_230g.jpeg"),
      id: 10,
    },
    {
      name: "פנקו פירורי לחם בסגנון יפני בטעם שום",
      image: importImage("garlic_flavored_japanese_panko_master_chef_300g.jpeg"),
      id: 10,
    },
    {
      name: "פירורי גריסיני קלאסי לשניצל",
      image: importImage("classic_grissini_breadcrumbs_for_schnitzel_meir_bagel_200g.jpeg"),
      id: 10,
    },
    {
      name: "פירורי גריסיני זהב לשניצל",
      image: importImage("golden_grissini_breadcrumbs_for_schnitzel_meir_bagel_200g.jpeg"),
      id: 10,
    },
    {
      name: "פירורי לחם זהובים עם שומשום",
      image: importImage("golden_sesame_breadcrumbs_berman_200g.jpeg"),
      id: 10,
    },
    {
      name: "ציפוי לשניצל בטעם שום",
      image: importImage("garlic_flavored_schnitzel_coating_maya_400g.jpeg"),
      id: 10,
    },
    {
      name: "ציפוי לשניצל עם עשבי תיבול",
      image: importImage("herb_seasoned_schnitzel_coating_maya_400g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת ציפוי נאגטס",
      image: importImage("nugget_coating_mix_master_chef_250g.jpeg"),
      id: 10,
    },
];  

const initialSoups = [
    {
      name: "אבקת רוטב צלי",
      image: importImage("gravy_powder_ossem_22g.jpeg"),
      id: 10,
    },
    {
      name: "מרק בטעם עוף פרווה",
      image: importImage("chicken_flavored_soup_ossem_1kg.jpeg"),
      id: 10,
    },
    {
      name: "מרק בטעם עוף זך",
      image: importImage("clear_chicken_flavored_soup_ossem_400g.jpeg"),
      id: 10,
    },
    {
      name: "מרק עוף אמיתי בשרי",
      image: importImage("real_chicken_soup_ossem_400g.jpeg"),
      id: 10,
    },
    {
      name: "מרק בטעם עוף זך - 100% רכיבים טבעיים",
      image: importImage("clear_chicken_flavored_soup_ossem_400g_2.jpeg"),
      id: 10,
    },
    {
      name: "מרק עוף אמיתי בשרי - 100% רכיבים טבעיים",
      image: importImage("real_chicken_soup_ossem_400g_2.jpeg"),
      id: 10,
    },
    {
      name: "מרק בצל פרווה",
      image: importImage("onion_soup_ossem_400g.jpeg"),
      id: 10,
    },
    {
      name: "מרק פטריות פרווה",
      image: importImage("mushroom_soup_ossem_400g.jpeg"),
      id: 10,
    },
    {
      name: "ציר בקר משחתי",
      image: importImage("beef_stock_paste_knorr_300g.jpeg"),
      id: 10,
    },
    {
      name: "ציר עוף משחתי",
      image: importImage("chicken_stock_paste_knorr_300g.jpeg"),
      id: 10,
    },
    {
      name: "תיבוליות שום ופטרוזיליה",
      image: importImage("garlic_parsley_cubes_knorr_72g.jpeg"),
      id: 10,
    },
    {
      name: "תיבוליות ניחוח צלי",
      image: importImage("roast_flavor_cubes_knorr_72g.jpeg"),
      id: 10,
    },
    {
      name: "תיבוליות בזיליקום",
      image: importImage("basil_cubes_knorr_72g.jpeg"),
      id: 10,
    },
    {
      name: "תיבוליות הודי",
      image: importImage("indian_flavor_cubes_knorr_72g.jpeg"),
      id: 10,
    },
    {
      name: "תיבוליות פטריות",
      image: importImage("mushroom_cubes_knorr_72g.jpeg"),
      id: 10,
    },
    {
      name: "אבקת רוטב פטריות",
      image: importImage("mushroom_gravy_powder_ossem_30g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק אפונה רכיבים טבעיים",
      image: importImage("pea_soup_cup_knorr_2x25g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק ירקות רכיבים טבעיים",
      image: importImage("vegetable_soup_cup_knorr_2x22g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק עוף עם קרוטונים רכיבים טבעיים",
      image: importImage("chicken_soup_croutons_cup_knorr_2x24g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק בטעם עוף עם אטריות ושקדי מרק",
      image: importImage("chicken_noodle_soup_cup_knorr_48g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק תירס",
      image: importImage("corn_soup_cup_knorr_2x45g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק עגבניות עם קרוטונים",
      image: importImage("tomato_soup_croutons_cup_knorr_2x64g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק עגבניות עם קרוטונים רכיבים טבעיים",
      image: importImage("tomato_soup_croutons_natural_cup_knorr_2x28g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס מרק פטריות",
      image: importImage("mushroom_soup_cup_knorr_2x43g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס אקסטרה מרק עגבניות עם המון אטריות",
      image: importImage("extra_tomato_noodle_soup_cup_knorr_37g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס אקסטרה עם המון אטריות",
      image: importImage("extra_noodle_soup_cup_knorr_27g.jpeg"),
      id: 10,
    },
    {
      name: "נמס בכוס אקסטרה מרק ירקות עם המון אטריות",
      image: importImage("extra_vegetable_noodle_soup_cup_knorr_32g.jpeg"),
      id: 10,
    },
    {
      name: "מרק עשיר ירקות",
      image: importImage("rich_vegetable_soup_knorr_61g.jpeg"),
      id: 10,
    },
    {
      name: "מרק עוף עם אטריות",
      image: importImage("chicken_noodle_soup_knorr_68g.jpeg"),
      id: 10,
    },
    {
      name: "מרק עגבניות עם פסטה 100% רכיבים טבעיים",
      image: importImage("tomato_pasta_soup_natural_knorr_80g.jpeg"),
      id: 10,
    },
    {
      name: "מרק עוף עם אטריות 100% רכיבים טבעיים",
      image: importImage("chicken_noodle_soup_natural_knorr_80g.jpeg"),
      id: 10,
    },
    {
      name: "מרק אפונה 100% רכיבים טבעיים",
      image: importImage("pea_soup_natural_knorr_117g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת פלאפל",
      image: importImage("easy_falafel_mix_ossem_180g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה נודלס בסגנון סצ'ואן",
      image: importImage("hot_meal_szechuan_noodles_ossem_76g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה קוסקוס עם ירקות",
      image: importImage("hot_meal_couscous_vegetables_ossem_84g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה נודלס בסגנון תאילנדי",
      image: importImage("hot_meal_thai_noodles_ossem_76g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה נודלס בטעם עוף",
      image: importImage("hot_meal_chicken_noodles_ossem_71g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה נודלס בסגנון פיקנטי",
      image: importImage("hot_meal_spicy_noodles_ossem_71g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה נודלס בטעם בקר",
      image: importImage("hot_meal_beef_noodles_ossem_71g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה ספגטי בסגנון בולונז",
      image: importImage("hot_meal_spaghetti_bolognese_ossem_65g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה פסטה ברוטב עגבניות",
      image: importImage("hot_meal_pasta_tomato_sauce_ossem_62g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה פסטה ברוטב פיצה",
      image: importImage("hot_meal_pasta_pizza_sauce_ossem_61g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה פירה עם בצל",
      image: importImage("hot_meal_mashed_potato_onion_ossem_56g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה פסטה מוקרמת בטעם עוף",
      image: importImage("hot_meal_creamy_chicken_pasta_ossem_55g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה פירה עם ירקות",
      image: importImage("hot_meal_mashed_potato_vegetables_ossem_55g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה בטעם מק אנד צ'יז",
      image: importImage("hot_meal_mac_cheese_ossem_58g.jpeg"),
      id: 10,
    },
    {
      name: "מנה חמה בטעם מק אנד צ'יז ספייסי",
      image: importImage("hot_meal_mac_cheese_spicy_ossem_59g.jpeg"),
      id: 10,
    },
    {
      name: "פתיתים אפויים עם ירקות",
      image: importImage("baked_couscous_vegetables_ossem_117g.jpeg"),
      id: 10,
    },
    {
      name: "קניידל תערובת להכנת כופתאות מצה",
      image: importImage("knorr_knedle_mix.jpeg"),
      id: 10,
    },
    {
      name: "מרק בצל פרווה רכיבים טבעיים",
      image: importImage("onion_soup_natural_knorr_225g.jpeg"),
      id: 10,
    },
    {
      name: "מרק פטריות פרווה רכיבים טבעיים",
      image: importImage("mushroom_soup_natural_knorr_225g.jpeg"),
      id: 10,
    },
    {
      name: "תבשיל ארוחת מקרוני עם רוטב על בסיס גבינה",
      image: importImage("macaroni_with_cheese_sauce_doodles_206g.jpeg"),
      id: 10,
    },
];  

const initialAsian = [
    {
      name: "אורז לבן עגול לסושי",
      image: importImage("sushi_rice_master_chef_1kg.jpeg"),
      id: 11,
    },
    {
      name: "אטריות אורז דקות",
      image: importImage("thin_rice_noodles_master_chef_400g.jpeg"),
      id: 11,
    },
    {
      name: "אטריות ביצים דקות להכנה מהירה",
      image: importImage("thin_egg_noodles_tomer_400g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סויה בסגנון סיני",
      image: importImage("soy_sauce_chinese_style_ossem_330g.jpeg"),
      id: 11,
    },
    {
      name: "סויה מסורתית מופחת נתרן",
      image: importImage("low_sodium_soy_sauce_master_chef_620ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב טריאקי",
      image: importImage("teriyaki_sauce_master_chef_700ml.jpeg"),
      id: 11,
    },
    {
      name: "מחצלת עגולה לסושי",
      image: importImage("round_sushi_mat_taste_of_asia.jpeg"),
      id: 11,
    },
    {
      name: "מירין רוטב תיבול מתוק לבישול",
      image: importImage("mirin_sweet_seasoning_taste_of_asia_500ml.jpeg"),
      id: 11,
    },
    {
      name: "שבבי אורז",
      image: importImage("rice_crackers_taste_of_asia_227g.jpeg"),
      id: 11,
    },
    {
      name: "שיראטקי אטריות קונג'אק עבות",
      image: importImage("shirataki_konjac_noodles_thick_taste_of_asia_200g.jpeg"),
      id: 11,
    },
    {
      name: "שיראטקי ג'ל קונג'אק בצורת אטריות",
      image: importImage("shirataki_konjac_noodles_taste_of_asia_200g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני אורז 10 מ\"מ Rice stick",
      image: importImage("rice_sticks_10mm_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני אורז 3 מ\"מ Rice stick",
      image: importImage("rice_sticks_3mm_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני אורז 5 מ\"מ Rice stick",
      image: importImage("rice_sticks_5mm_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני אורז דקים Rice stick",
      image: importImage("thin_rice_sticks_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני אטריות שעועית",
      image: importImage("bean_noodles_sticks_taste_of_asia_200g.jpeg"),
      id: 11,
    },
    {
      name: "מקלוני שעועית ירוקה",
      image: importImage("green_bean_sticks_taste_of_asia_250g.jpeg"),
      id: 11,
    },
    {
      name: "נודלס אטריות אורז רחבות",
      image: importImage("wide_rice_noodles_asian_series_ossem_300g.jpeg"),
      id: 11,
    },
    {
      name: "נודלס אטריות להקפצה",
      image: importImage("stir_fry_noodles_asian_series_ossem_350g.jpeg"),
      id: 11,
    },
    {
      name: "נודלס אטריות מסולסלות",
      image: importImage("curly_noodles_asian_series_ossem_200g.jpeg"),
      id: 11,
    },
    {
      name: "אבקת וואסבי",
      image: importImage("wasabi_powder_taste_of_asia_70g.jpeg"),
      id: 11,
    },
    {
      name: "משחה בטעם וואסבי",
      image: importImage("wasabi_paste_taste_of_asia_43g.jpeg"),
      id: 11,
    },
    {
      name: "אצות וואקמה מיובשות",
      image: importImage("dried_wakame_seaweed_taste_of_asia_100g.jpeg"),
      id: 11,
    },
    {
      name: "חטיף אצות קלויות עם מלח ים",
      image: importImage("roasted_seaweed_snack_sea_salt_taste_of_asia_40_5g.jpeg"),
      id: 11,
    },
    {
      name: "ג'ינג'ר כבוש",
      image: importImage("pickled_ginger_taste_of_asia_250g.jpeg"),
      id: 11,
    },
    {
      name: "רצועות דלעת כבושה",
      image: importImage("pickled_pumpkin_strips_kanpyo_taste_of_asia_100g.jpeg"),
      id: 11,
    },
    {
      name: "דפי אורז קוטר 22 ס\"מ",
      image: importImage("rice_papers_22cm_diameter_taste_of_asia_300g.jpeg"),
      id: 11,
    },
    {
      name: "דפי אורז בקוטר 16 ס\"מ",
      image: importImage("rice_papers_16cm_diameter_master_chef_400g.jpeg"),
      id: 11,
    },
    {
      name: "חומץ אורז מתאים לסושי",
      image: importImage("sushi_rice_vinegar_taste_of_asia_500ml.jpeg"),
      id: 11,
    },
    {
      name: "טמפורה תערובת להכנת בלילה",
      image: importImage("tempura_batter_mix_taste_of_asia_500g.jpeg"),
      id: 11,
    },
    {
      name: "מחית קארי פנאנג",
      image: importImage("panang_curry_paste_taste_of_asia_50g.jpeg"),
      id: 11,
    },
    {
      name: "מיסו כהה - מחית פולי סויה",  
      image: importImage("dark_miso_paste_taste_of_asia_500g.jpeg"),
      id: 11,
    },
    {
      name: "ממרח קארי אדום",
      image: importImage("red_curry_paste_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "ממרח קארי ירוק",
      image: importImage("green_curry_paste_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "ממרח קארי צהוב",
      image: importImage("yellow_curry_paste_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "נוזל אגוזי קוקוס",
      image: importImage("coconut_milk_taste_of_asia_400ml.jpeg"),
      id: 11,
    },
    {
      name: "קרם קוקוס",
      image: importImage("coconut_cream_willy_food_400g.jpeg"),
      id: 11,
    },
    {
      name: "פטריות שיטאקה מיובשות",
      image: importImage("dried_shiitake_mushrooms_taste_of_asia_85g.jpeg"),
      id: 11,
    },
    {
      name: "פניני טפיוקה גדול",
      image: importImage("large_tapioca_pearls_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "פניני טפיוקה קטן",
      image: importImage("small_tapioca_pearls_taste_of_asia_400g.jpeg"),
      id: 11,
    },
    {
      name: "פנקו פירורי לחם בסגנון יפני עבים במיוחד",
      image: importImage("extra_thick_panko_breadcrumbs_master_chef_300g.jpeg"),
      id: 11,
    },
    {
      name: "שמן שומשום לא מזוכך",
      image: importImage("unrefined_sesame_oil_taste_of_asia_150ml.jpeg"),
      id: 11,
    },
    {
      name: "100% שמן מזוכך משומשום קלוי",
      image: importImage("100_percent_refined_roasted_sesame_oil_gory_150ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סויה בהירה",
      image: importImage("light_soy_sauce_taste_of_asia_500ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סויה כהה",
      image: importImage("dark_soy_sauce_taste_of_asia_500ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סויה",
      image: importImage("soy_sauce_yamasa_500ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סויה מופחת נתרן",
      image: importImage("low_sodium_soy_sauce_yamasa_500ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב טריאקי שומשום",
      image: importImage("sesame_teriyaki_sauce_taste_of_asia_300ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב בנוסח סצ'ואן",
      image: importImage("sichuan_style_sauce_asian_series_ossem_290ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב אסייתי למוקפץ",
      image: importImage("asian_stir_fry_sauce_knorr_370ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב הוי סין",
      image: importImage("hoisin_sauce_taste_of_asia_240g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב חמוץ מתוק",
      image: importImage("sweet_sour_sauce_taste_of_asia_300ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב סריראצ'ה - רוטב צ'ילי חריף",
      image: importImage("sriracha_hot_chili_sauce_taste_of_asia_435ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב פאד תאי",
      image: importImage("pad_thai_sauce_taste_of_asia_300g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב פטריות צמחוני",
      image: importImage("vegetarian_mushroom_sauce_taste_of_asia_500ml.jpeg"),
      id: 11,
    },
    {
      name: "רוטב צ'ילי חריף",
      image: importImage("hot_chili_sauce_taste_of_asia_700g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב צ'ילי מתוק",
      image: importImage("sweet_chili_sauce_taste_of_asia_700g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב צ'ילי מתוק ללא תוספת סוכר",
      image: importImage("sugar_free_sweet_chili_sauce_taste_of_asia_700g.jpeg"),
      id: 11,
    },
    {
      name: "רוטב צ'ילי חריף בסגנון תאילנדי",
      image: importImage("thai_style_hot_chili_sauce_willy_food_700ml.jpeg"),
      id: 11,
    },
    {
      name: "שומשום שחור קלוי",
      image: importImage("roasted_black_sesame_taste_of_asia_100g.jpeg"),
      id: 11,
    },
    {
      name: "פאני פורי נפטון",
      image: importImage("pani_puri_neptune_140g.jpeg"),
      id: 11,
    },
    {
      name: "פאפאד נפטון",
      image: importImage("papad_neptune_200g.jpeg"),
      id: 11,
    },
    {
      name: "מיונז וואסבי",
      image: importImage("wasabi_mayonnaise_master_chef_241g.jpeg"),
      id: 11,
    },
];  

const initialBakeryproducts = [
    {
      name: "אבקת אפיה",
      image: importImage("baking_powder_hanamal_10x10g.jpeg"),
      id: 10,
    },
    {
      name: "אינסטנט פודינג בטעם וניל",
      image: importImage("vanilla_pudding_ossem_80g.jpeg"),
      id: 10,
    },
    {
      name: "אינסטנט פודינג בטעם וניל צרפתי",
      image: importImage("instant_french_vanilla_pudding_ossem_80g.jpeg"),
      id: 10,
    },
    {
      name: "אינסטנט פודינג בטעם ריבת חלב",
      image: importImage("instant_caramel_pudding_ossem_84g.jpeg"),
      id: 10,
    },
    {
      name: "אינסטנט פודינג בטעם שוקולד",
      image: importImage("chocolate_pudding_ossem_88g.jpeg"),
      id: 10,
    },
    {
      name: "אינסטנט פודינג בטעם שוקולד בלגי מריר",
      image: importImage("dark_belgian_chocolate_pudding_ossem_90g.jpeg"),
      id: 10,
    },
    {
      name: "ג'לי מהיר הכנה בטעם אננס",
      image: importImage("pineapple_instant_jelly_ossem_85g.jpeg"),
      id: 10,
    },
    {
      name: "ג'לי מהיר הכנה בטעם משמש",
      image: importImage("apricot_instant_jelly_ossem_85g.jpeg"),
      id: 10,
    },
    {
      name: "ג'לי מהיר הכנה בטעם תות",
      image: importImage("strawberry_instant_jelly_ossem_90g.jpeg"),
      id: 10,
    },
    {
      name: "ג'לטין טהור",
      image: importImage("pure_gelatin_hanamal_28g.jpeg"),
      id: 10,
    },
    {
      name: "סודה לשתיה",
      image: importImage("baking_soda_hanamal_50g.jpeg"),
      id: 10,
    },
    {
      name: "קורנפלור",
      image: importImage("cornflour_mia_200g.jpeg"),
      id: 10,
    },
    {
      name: "אבקת סוכר",
      image: importImage("powdered_sugar_hanamal_100g.jpeg"),
      id: 10,
    },
    {
      name: "סוכר וניל",
      image: importImage("vanilla_sugar_hanamal_10x10g.jpeg"),
      id: 10,
    },
    {
      name: "אבקת קקאו דל שומן",
      image: importImage("low_fat_cocoa_powder_elite_150g.jpeg"),
      id: 10,
    },
    {
      name: "קקאו",
      image: importImage("cocoa_hashachar_haole_150g.jpeg"),
      id: 10,
    },
    {
      name: "שוקולית לאפייה",
      image: importImage("shokolite_for_baking_elite_500g.jpeg"),
      id: 10,
    },
    {
      name: "שמרים + משפר אפייה",
      image: importImage("dry_yeast_with_baking_improver_shemarit_100g.jpeg"),
      id: 10,
    },
    {
      name: "תמצית אפיה בטעם וניל",
      image: importImage("vanilla_flavoring_exctract_hanamal_55ml.jpeg"),
      id: 10,
    },
    {
      name: "תמצית אפיה בטעם רום",
      image: importImage("rum_flavoring_exctract_hanamal_55ml.jpeg"),
      id: 10,
    },
    {
      name: "תמצית תפוז",
      image: importImage("orange_extract_mccormick_29ml.jpeg"),
      id: 10,
    },
    {
      name: "קוקוס טחון",
      image: importImage("ground_coconut_hanamal_100g.jpeg"),
      id: 10,
    },
    {
      name: "שקדים משובבים",
      image: importImage("sliced_almonds_hachef_100g.jpeg"),
      id: 10,
    },
    {
      name: "אגוזי מלך גרוסים",
      image: importImage("chopped_walnuts_hachef_100g.jpeg"),
      id: 10,
    },
    {
      name: "גרעיני חמניה קלופים",
      image: importImage("shelled_sunflower_seeds_mia_100g.jpeg"),
      id: 10,
    },
    {
      name: "פרג",
      image: importImage("poppy_seed_mia_100g.jpeg"),
      id: 10,
    },
    {
      name: "תמרים ללא חרצנים",
      image: importImage("pitted_dates_tamershan_500g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת בראוניז",
      image: importImage("brownies_mix_pillsbury_550g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת כדורים בטעם שוקולד",
      image: importImage("chocolate_ball_mix_pillsbury_500g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת עוגה בטעם וניל",
      image: importImage("vanilla_cake_mix_pillsbury_500g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת עוגה בטעם שוקולד",
      image: importImage("chocolate_cake_mix_pillsbury_500g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת עוגת שיש",
      image: importImage("marble_cake_mix_pillsbury_550g.jpeg"),
      id: 10,
    },
    {
      name: "תערובת להכנת פנקייק",
      image: importImage("pancake_mix_pillsbury_500g.jpeg"),
      id: 10,
    },
    {
      name: "סוכריות לקישוט בטעם שוקולד",
      image: importImage("chocolate_flavored_decorative_sprinkles_hanamal_100g.jpeg"),
      id: 10,
    },
    {
      name: "סוכריות לקישוט צבעוני",
      image: importImage("colorful_decorative_sprinkles_hanamal_60g.jpeg"),
      id: 10,
    },
    {
      name: "סוכריות לקישוט שחור לבן",
      image: importImage("black_white_decorative_sprinkles_hanamal_100g.jpeg"),
      id: 10,
    },
    {
      name: "בצק סוכר לבן לעוגות",
      image: importImage("white_sugar_dough_for_cakes_hamereshlag_600g.jpeg"),
      id: 10,
    },
    {
      name: "נטיפי שוקולד צ'יפס לאפיה",
      image: importImage("chocolate_chips_for_baking_hersheys_340g.jpeg"),
      id: 10,
    },
    {
      name: "צימקאו בטעם שוקולד לבן לאפיה ובישול",
      image: importImage("white_chocolate_flavored_baking_chocolate_300g_oppenheimer.jpeg"),
      id: 10,
    },
    {
      name: "צימקאו בטעם שוקולד מריר לבישול ואפיה",
      image: importImage("dark_chocolate_flavored_baking_chocolate_300g_oppenheimer.jpeg"),
      id: 10,
    },
    {
      name: "סירופ בטעם מייפל",
      image: importImage("maple_flavored_syrup_apichal_580g.jpeg"),
      id: 10,
    },
    {
      name: "סירופ בטעם שוקולד",
      image: importImage("chocolate_flavored_syrup_apichal_580g.jpeg"),
      id: 10,
    },
    {
      name: "סירופ מייפל טבעי",
      image: importImage("natural_maple_syrup_yad_mordechai_236ml.jpeg"),
      id: 10,
    },
    {
      name: "חלת מרציפן",
      image: importImage("marzipan_loaf_hamereshlag_75g.jpeg"),
      id: 10,
    },
    {
      name: "מרציפן",
      image: importImage("marzipan_hamereshlag_100g.jpeg"),
      id: 10,
    },
    {
      name: "מרציפן ללא תוספר סוכר",
      image: importImage("sugar_free_marzipan_hamereshlag_75g.jpeg"),
      id: 10,
    },
    {
      name: "חלב כחוש מרוכז וממותק",
      image: importImage("condensed_milk_willy_food_397g.jpeg"),
      id: 10,
    },
    {
      name: "מלית אוכמניות",
      image: importImage("blueberry_filling_hanamal_400g.jpeg"),
      id: 10,
    },
    {
      name: "ממרח בטעם חלבה",
      image: importImage("halva_flavored_spread_hanamal_400g.jpeg"),
      id: 10,
    },
    {
      name: "עלים לקרמשניט",
      image: importImage("cremeschnitte_layers_bonomi_300g.jpeg"),
      id: 10,
    },
    {
      name: "גליליות וופל למילוי",
      image: importImage("wafer_rolls_for_filling_hanamal_340g.jpeg"),
      id: 10,
    },
    {
      name: "מי ורדים",
      image: importImage("rose_water_shkedia_500ml.jpeg"),
      id: 10,
    },
    {
      name: "ממרח תמרים",
      image: importImage("date_spread_kliyat_gat_450g.jpeg"),
      id: 10,
    },
    {
      name: "סוכר חום כהה לאפיה סוגת",
      image: importImage("dark_brown_baking_sugar_sugat_1kg.jpeg"),
      id: 10,
    },
    {
      name: "סוכריות לקישוט - מיני מיני עדשים",
      image: importImage("mini_mini_chocolate_coated_candies_hanamal_200g.jpeg"),
      id: 10,
    },
    {
      name: "קמח תפוחי אדמה",
      image: importImage("potato_flour_mia_500g.jpeg"),
      id: 10,
    },
    {
      name: "קרם בטעם עוגיות קרמל",
      image: importImage("caramel_cookie_flavored_cream_sweetart_400g.jpeg"),
      id: 10,
    },
    {
      name: "קרם בייגלה מתוק מלוח",
      image: importImage("sweet_salty_pretzel_flavored_cream_sweetart_400g.jpeg"),
      id: 10,
    },
    {
      name: "שומשום מקולף",
      image: importImage("peeled_sesame_hanamal_200g.jpeg"),
      id: 10,
    },
    {
      name: "שמרים יבשים",
      image: importImage("dry_yeast_shemarit_125g.jpeg"),
      id: 10,
    },
];
  
const initialJams = [
  {
    name: "מעדן פרי דובדבן 100% רכיבי פרי",
    image: importImage("cherry_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי משמש 100% רכיבי פרי",
    image: importImage("apricot_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי פירות יער 100% רכיבי פרי",
    image: importImage("berry_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי תות שדה 100% רכיבי פרי",
    image: importImage("strawberry_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי תפוז 100% רכיבי פרי",
    image: importImage("orange_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי אפרסק ופסיפלורה 100% רכיבי פרי",
    image: importImage("peach_passionfruit_fruit_spread_100_percent_fruit_menz_gasser_320g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי אוכמניות כחולות",
    image: importImage("blueberry_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי אפרסקים",
    image: importImage("peach_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי ארבעה פירות",
    image: importImage("four_fruits_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי דובדבנים שחורים",
    image: importImage("black_cherry_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי משמש",
    image: importImage("apricot_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי תפוז וג'ינג'ר",
    image: importImage("orange_ginger_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן פרי תפוזים",
    image: importImage("orange_fruit_spread_st_dalfour_284g.jpeg"),
    id: 5,
  },
  {
    name: "קונפיטורה תות",
    image: importImage("strawberry_jam_yad_mordechai_340g.jpeg"),
    id: 5,
  },
  {
    name: "קונפיטורת דובדבן",
    image: importImage("cherry_jam_yad_mordechai_340g.jpeg"),
    id: 5,
  },
  {
    name: "קונפיטורת משמש",
    image: importImage("apricot_jam_yad_mordechai_340g.jpeg"),
    id: 5,
  },
  {
    name: "קונפיטורת פירות יער",
    image: importImage("berry_jam_yad_mordechai_340g.jpeg"),
    id: 5,
  },
];

const initialHalvahhoneysilan = [
  {
    name: "סירופ מייפל 100% טהור",
    image: importImage("pure_maple_syrup_bernard_251ml.jpeg"),
    id: 5,
  },
  {
    name: "סירופ מייפל אורגני 100% טהור",
    image: importImage("organic_pure_maple_syrup_bernard_236ml.jpeg"),
    id: 5,
  },
  {
    name: "דבש טהור מפרחי בר בקבוק לחיץ",
    image: importImage("pure_wildflower_honey_squeeze_bottle_yad_mordechai_400g.jpeg"),
    id: 5,
  },
  {
    name: "דבש טהור מפרחי בר",
    image: importImage("pure_wildflower_honey_yad_mordechai_350g.jpeg"),
    id: 5,
  },
  {
    name: "מעדן עם דבש לייט",
    image: importImage("light_honey_spread_yad_mordechai_350g.jpeg"),
    id: 5,
  },
  {
    name: "סילאן טבעי ללא תוספת סוכר",
    image: importImage("natural_silan_no_sugar_added_yad_mordechai_700g.jpeg"),
    id: 5,
  },
  {
    name: "סילאן טבעי ללא תוספת סוכר בקבוק לחיץ",
    image: importImage("natural_silan_no_sugar_added_squeeze_bottle_yad_mordechai_380g.jpeg"),
    id: 5,
  },
  {
    name: "סילאן טבעי 100% תמר מג'הול ללא תוספת סוכר",
    image: importImage("natural_silan_100_percent_medjool_dates_no_sugar_added_yad_mordechai_630g.jpeg"),
    id: 5,
  },
  {
    name: "פרוסות חלבה בטעם וניל",
    image: importImage("vanilla_flavored_halva_slices_baraka_400g.jpeg"),
    id: 5,
  },
  {
    name: "חלבה קלאסית בטעם וניל ללא תוספת סוכר",
    image: importImage("classic_vanilla_halva_no_sugar_added_baraka_350g.jpeg"),
    id: 5,
  },
  {
    name: "חטיף חלבה בטעם וניל ללא תוספת סוכר בתוספת פיסטוק ופקאן",
    image: importImage("vanilla_halva_no_sugar_added_with_pistachio_pecan_baraka_6x18g.jpeg"),
    id: 5,
  },
  {
    name: "חלוה בטעם שוקו וניל",
    image: importImage("choco_vanilla_flavored_halva_ahva_400g.jpeg"),
    id: 5,
  },
];

const initialSpices = [
  {
    name: "שומשום שחור קלוי",
    image: importImage("roasted_black_sesame_seeds_100g.jpeg"),
    id: 3,
  },
  {
    name: "סודה לשתיה",
    image: importImage("baking_soda_hanamal_250g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה מתוקה",
    image: importImage("sweet_paprika_100g.jpeg"),
    id: 3,
  },
  {
    name: "פלפל שחור טחון",
    image: importImage("ground_black_pepper_100g.jpeg"),
    id: 3,
  },
  {
    name: "שום גבישי",
    image: importImage("granulated_garlic_120g.jpeg"),
    id: 3,
  },
  {
    name: "פלפל שחור גרוס",
    image: importImage("coarse_black_pepper_90g.jpeg"),
    id: 3,
  },
  {
    name: "כורכום",
    image: importImage("turmeric_100g.jpeg"),
    id: 3,
  },
  {
    name: "כמון מזרחי",
    image: importImage("eastern_cumin_100g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה מתוקה בשמן",
    image: importImage("sweet_paprika_in_oil_400g.jpeg"),
    id: 3,
  },
  {
    name: "עלי דפנה",
    image: importImage("bay_leaves_20g.jpeg"),
    id: 3,
  },
  {
    name: "אבקת שום",
    image: importImage("garlic_powder_90g.jpeg"),
    id: 3,
  },
  {
    name: "קינמון טחון",
    image: importImage("ground_cinnamon_90g.jpeg"),
    id: 3,
  },
  {
    name: "אורגנו",
    image: importImage("oregano_30g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה חריפה",
    image: importImage("spicy_paprika_100g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה מרוקאית מתוקה בשמן",
    image: importImage("moroccan_sweet_paprika_in_oil_90g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה מרוקאית מתוקה בתוספת שמן",
    image: importImage("moroccan_sweet_paprika_with_oil_400g.jpeg"),
    id: 3,
  },
  {
    name: "צ'ילי כתוש חריף (פלפל קיינה)",
    image: importImage("crushed_hot_chili_70g.jpeg"),
    id: 3,
  },
  {
    name: "מוסקט טחון",
    image: importImage("ground_nutmeg_40g.jpeg"),
    id: 3,
  },
  {
    name: "בהרט לבישול",
    image: importImage("baharat_for_cooking_80g.jpeg"),
    id: 3,
  },
  {
    name: "חוויאג' למרק",
    image: importImage("hawaij_for_soup_100g.jpeg"),
    id: 3,
  },
  {
    name: "מלח לימון",
    image: importImage("citric_acid_170g.jpeg"),
    id: 3,
  },
  {
    name: "בזיליקום (ריחן)",
    image: importImage("basil_30g.jpeg"),
    id: 3,
  },
  {
    name: "צ'ילי גרוס חריף אש",
    image: importImage("crushed_hot_chili_fire_70g.jpeg"),
    id: 3,
  },
  {
    name: "טימין",
    image: importImage("thyme_30g.jpeg"),
    id: 3,
  },
  {
    name: "פפריקה מעושנת",
    image: importImage("smoked_paprika_90g.jpeg"),
    id: 3,
  },
  {
    name: "אבקת קארי",
    image: importImage("curry_powder_100g.jpeg"),
    id: 3,
  },
  {
    name: "פלפל שחור שלם",
    image: importImage("whole_black_pepper_35g.jpeg"),
    id: 3,
  },
  {
    name: "תיבול דגים",
    image: importImage("fish_seasoning_90g.jpeg"),
    id: 3,
  },
  {
    name: "כוסברה טחונה",
    image: importImage("ground_coriander_70g.jpeg"),
    id: 3,
  },
  {
    name: "פטרוזיליה",
    image: importImage("parsley_20g.jpeg"),
    id: 3,
  },
  {
    name: "עשבי תיבול איטלקי ים תיכוני",
    image: importImage("italian_mediterranean_herbs_30g.jpeg"),
    id: 3,
  },
  {
    name: "רוזמרין",
    image: importImage("rosemary_15g.jpeg"),
    id: 3,
  },
  {
    name: "זנגביל טחון",
    image: importImage("ground_ginger_30g.jpeg"),
    id: 3,
  },
  {
    name: "מקלות קינמון",
    image: importImage("cinnamon_sticks_15g.jpeg"),
    id: 3,
  },
  {
    name: "קצח",
    image: importImage("black_cumin_40g.jpeg"),
    id: 3,
  },
  {
    name: "קימל שלם",
    image: importImage("whole_caraway_40g.jpeg"),
    id: 3,
  },
  {
    name: "צפורן טחון",
    image: importImage("ground_cloves_40g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול גריל עוף",
    image: importImage("chicken_grill_seasoning_120g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לשווארמה",
    image: importImage("shawarma_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לפרגיות",
    image: importImage("pargiyot_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול זעתר",
    image: importImage("zaatar_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לפיצה",
    image: importImage("pizza_seasoning_120g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול על האש",
    image: importImage("al_haesh_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לתפוחי אדמה",
    image: importImage("potato_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול פילדלפיה",
    image: importImage("philadelphia_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול טוסקנה",
    image: importImage("tuscany_seasoning_120g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול גריל דג",
    image: importImage("fish_grill_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לצ'יפס",
    image: importImage("chips_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול סומק",
    image: importImage("sumac_seasoning_45g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול לקציצות",
    image: importImage("meatballs_seasoning_100g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול עוף",
    image: importImage("chicken_seasoning_120g.jpeg"),
    id: 3,
  },
  {
    name: "תיבול על בייגל",
    image: importImage("bagel_seasoning_120g.jpeg"),
    id: 3,
  },
  {
    name: "פלפל לבן טחון",
    image: importImage("ground_white_pepper_80g.jpeg"),
    id: 3,
  },
  {
    name: "סומק",
    image: importImage("sumac_120g.jpeg"),
    id: 3,
  },
  {
    name: "קייג'ון",
    image: importImage("cajun_150g.jpeg"),
    id: 3,
  },
  {
    name: "חוויאג' לקפה",
    image: importImage("hawaij_for_coffee_100g.jpeg"),
    id: 3,
  },
  {
    name: "שמיר",
    image: importImage("dill_40g.jpeg"),
    id: 3,
  },
  {
    name: "תערובת תיבול זעתר ושומשום בלדי",
    image: importImage("zaatar_sesame_baladi_seasoning_150g_ahroni.jpeg"),
    id: 3,
  },
];

initialSpreadssauces.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialBreadcrumbs.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialSoups.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialAsian.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialBakeryproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialJams.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialHalvahhoneysilan.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialSpices.sort((a, b) => a.name.localeCompare(b.name, 'he'));

const [spreadssauces, setSpreadssauces] = useState<{ name: string; image: any; count: number }[]>(
  initialSpreadssauces.map(spreadssauces => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === spreadssauces.name);
    return {
      ...spreadssauces,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [breadcrumbs, setBreadcrumbs] = useState<{ name: string; image: any; count: number }[]>(
  initialBreadcrumbs.map(breadcrumbs => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === breadcrumbs.name);
    return {
      ...breadcrumbs,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [soups, setSoups] = useState<{ name: string; image: any; count: number }[]>(
  initialSoups.map(soups => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === soups.name);
    return {
      ...soups,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [asian, setAsian] = useState<{ name: string; image: any; count: number }[]>(
  initialAsian.map(asian => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === asian.name);
    return {
      ...asian,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bakeryproducts, setBakeryproducts] = useState<{ name: string; image: any; count: number }[]>(
  initialBakeryproducts.map(bakeryproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === bakeryproducts.name);
    return {
      ...bakeryproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [jams, setJams] = useState<{ name: string; image: any; count: number }[]>(
  initialJams.map(jams => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === jams.name);
    return {
      ...jams,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [halvahhoneysilan, setHalvahhoneysilan] = useState<{ name: string; image: any; count: number }[]>(
  initialHalvahhoneysilan.map(halvahhoneysilan => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === halvahhoneysilan.name);
    return {
      ...halvahhoneysilan,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [spices, setSpices] = useState<{ name: string; image: any; count: number }[]>(
  initialSpices.map(spices => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === spices.name);
    return {
      ...spices,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

useEffect(() => {
  handleSave();
}, [spreadssauces, breadcrumbs, soups, asian, bakeryproducts, jams, halvahhoneysilan, spices]);

const handleIncrement = (name: string) => {
  setSpreadssauces(spreadssauces.map(spreadssauces =>
    spreadssauces.name === name ? { ...spreadssauces, count: spreadssauces.count + 1 } : spreadssauces
  ));
  setBreadcrumbs(breadcrumbs.map(breadcrumbs =>
    breadcrumbs.name === name ? { ...breadcrumbs, count: breadcrumbs.count + 1 } : breadcrumbs
  ));
  setSoups(soups.map(soups =>
    soups.name === name ? { ...soups, count: soups.count + 1 } : soups
  ));
  setAsian(asian.map(asian =>
    asian.name === name ? { ...asian, count: asian.count + 1 } : asian
  ));
  setBakeryproducts(bakeryproducts.map(bakeryproducts =>
    bakeryproducts.name === name ? { ...bakeryproducts, count: bakeryproducts.count + 1 } : bakeryproducts
  ));
  setJams(jams.map(jams =>
    jams.name === name ? { ...jams, count: jams.count + 1 } : jams
  ));
  setHalvahhoneysilan(halvahhoneysilan.map(halvahhoneysilan =>
    halvahhoneysilan.name === name ? { ...halvahhoneysilan, count: halvahhoneysilan.count + 1 } : halvahhoneysilan
  ));
  setSpices(spices.map(spices =>
    spices.name === name ? { ...spices, count: spices.count + 1 } : spices
  ));
};

const handleDecrement = (name: string) => {
  setSpreadssauces(spreadssauces.map(spreadssauce => {
    if (spreadssauce.name === name && spreadssauce.count > 0) {
      const newCount = spreadssauce.count - 1;
  
      if (newCount === 0) {
        removeProduct(spreadssauce.name);
      }
  
      return { ...spreadssauce, count: newCount };
    }
    return spreadssauce;
  }));
  
  setBreadcrumbs(breadcrumbs.map(breadcrumb => {
    if (breadcrumb.name === name && breadcrumb.count > 0) {
      const newCount = breadcrumb.count - 1;
  
      if (newCount === 0) {
        removeProduct(breadcrumb.name);
      }
  
      return { ...breadcrumb, count: newCount };
    }
    return breadcrumb;
  }));
  
  setSoups(soups.map(soup => {
    if (soup.name === name && soup.count > 0) {
      const newCount = soup.count - 1;
  
      if (newCount === 0) {
        removeProduct(soup.name);
      }
  
      return { ...soup, count: newCount };
    }
    return soup;
  }));
  
  setAsian(asian.map(asianProduct => {
    if (asianProduct.name === name && asianProduct.count > 0) {
      const newCount = asianProduct.count - 1;
  
      if (newCount === 0) {
        removeProduct(asianProduct.name);
      }
  
      return { ...asianProduct, count: newCount };
    }
    return asianProduct;
  }));
  
  setBakeryproducts(bakeryproducts.map(bakeryproduct => {
    if (bakeryproduct.name === name && bakeryproduct.count > 0) {
      const newCount = bakeryproduct.count - 1;
  
      if (newCount === 0) {
        removeProduct(bakeryproduct.name);
      }
  
      return { ...bakeryproduct, count: newCount };
    }
    return bakeryproduct;
  }));
  
  setJams(jams.map(jam => {
    if (jam.name === name && jam.count > 0) {
      const newCount = jam.count - 1;
  
      if (newCount === 0) {
        removeProduct(jam.name);
      }
  
      return { ...jam, count: newCount };
    }
    return jam;
  }));
  
  setHalvahhoneysilan(halvahhoneysilan.map(halvahhoneysilanProduct => {
    if (halvahhoneysilanProduct.name === name && halvahhoneysilanProduct.count > 0) {
      const newCount = halvahhoneysilanProduct.count - 1;
  
      if (newCount === 0) {
        removeProduct(halvahhoneysilanProduct.name);
      }
  
      return { ...halvahhoneysilanProduct, count: newCount };
    }
    return halvahhoneysilanProduct;
  }));
  
  setSpices(spices.map(spice => {
    if (spice.name === name && spice.count > 0) {
      const newCount = spice.count - 1;
  
      if (newCount === 0) {
        removeProduct(spice.name);
      }
  
      return { ...spice, count: newCount };
    }
    return spice;
  }));
  };

const handleSave = async () => {
 const spreadssaucesToSave = spreadssauces.filter(spreadssauces => spreadssauces.count > 0).map(spreadssauces => ({ ...spreadssauces, quantity: spreadssauces.count }));
 const breadcrumbsToSave = breadcrumbs.filter(breadcrumbs => breadcrumbs.count > 0).map(breadcrumbs => ({ ...breadcrumbs, quantity: breadcrumbs.count }));
 const soupsToSave = soups.filter(soups => soups.count > 0).map(soups => ({ ...soups, quantity: soups.count }));
 const asianToSave = asian.filter(asian => asian.count > 0).map(asian => ({ ...asian, quantity: asian.count }));
 const bakeryproductsToSave = bakeryproducts.filter(bakeryproducts => bakeryproducts.count > 0).map(bakeryproducts => ({ ...bakeryproducts, quantity: bakeryproducts.count }));
 const jamsToSave = jams.filter(jams => jams.count > 0).map(jams => ({ ...jams, quantity: jams.count }));
 const halvahhoneysilanToSave = halvahhoneysilan.filter(halvahhoneysilan => halvahhoneysilan.count > 0).map(halvahhoneysilan => ({ ...halvahhoneysilan, quantity: halvahhoneysilan.count }));
 const spicesToSave = spices.filter(spices => spices.count > 0).map(spices => ({ ...spices, quantity: spices.count }));


  const allBaking = [...spreadssaucesToSave,...breadcrumbsToSave,...soupsToSave,...asianToSave,...bakeryproductsToSave,...jamsToSave,...halvahhoneysilanToSave,...spicesToSave ];
  allBaking.forEach(Baking => addProduct(Baking));

};

const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

const filterSpreadssauces = spreadssauces.filter(product =>
  product.name.includes(searchTerm)
);

const filterBreadcrumbs = breadcrumbs.filter(product =>
  product.name.includes(searchTerm)
);

const filterSoups = soups.filter(product =>
  product.name.includes(searchTerm)
);

const filterAsian = asian.filter(product =>
  product.name.includes(searchTerm)
);

const filterBakeryproducts = bakeryproducts.filter(product =>
  product.name.includes(searchTerm)
);

const filterJams = jams.filter(product =>
  product.name.includes(searchTerm)
);

const filterHalvahhoneysilan = halvahhoneysilan.filter(product =>
  product.name.includes(searchTerm)
);

const filterSpices = spices.filter(product =>
  product.name.includes(searchTerm)
);

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
      placeholder="חפש מוצר בישול\אפייה"
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
  {filterSpreadssauces.length > 0 && (
    <ProductsPage
      products={filterSpreadssauces}
      categoryTitle="ממרחים ורטבים"
      icon={<img alt="" src={importImage('spreadssauces_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterBreadcrumbs.length > 0 && (
    <ProductsPage
      products={filterBreadcrumbs}
      categoryTitle="פירורי לחם"
      icon={<img alt="" src={importImage('breadcrumbs_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterSoups.length > 0 && (
    <ProductsPage
      products={filterSoups}
      categoryTitle="מרקים, תיבול ותבשילים מהירי הכנה"
      icon={<img alt="" src={importImage('soups_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterAsian.length > 0 && (
    <ProductsPage
      products={filterAsian}
      categoryTitle="אסייאתי"
      icon={<img alt="" src={importImage('asian_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterBakeryproducts.length > 0 && (
    <ProductsPage
      products={filterBakeryproducts}
      categoryTitle="מוצרי אפיה"
      icon={<img alt="" src={importImage('bakeryproducts_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterJams.length > 0 && (
    <ProductsPage
      products={filterJams}
      categoryTitle="ריבות ומעדני פירות"
      icon={<img alt="" src={importImage('jams_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterHalvahhoneysilan.length > 0 && (
    <ProductsPage
      products={filterHalvahhoneysilan}
      categoryTitle="חלווה, דבש וסילאן"
      icon={<img alt="" src={importImage('halvahhoneysilan_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterSpices.length > 0 && (
    <ProductsPage
      products={filterSpices}
      categoryTitle="תבלינים"
      icon={<img alt="" src={importImage('spices_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

  </div>
  );
}
export default Baking_Page;