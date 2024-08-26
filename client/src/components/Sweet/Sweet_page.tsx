import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Sweet/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Sweet_Page: React.FC = () => {
  const { addProduct , removeProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialCereals = [
    {
        name: "מארז קורנפלקס של אלופים 5 שקיות אישיות",
        image: importImage("cornflakes_pack_5_sachets.jpeg"),
        id: 10,
    },
    {
        name: "כריות נוגט",
        image: importImage("kariot_nougat.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר דליפקאן",
        image: importImage("delipacan_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר דלישקד קרמל מלוח",
        image: importImage("delishaked_salted_caramel_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר עוגי",
        image: importImage("oogie_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני ברנפלקס קרנצ'ים",
        image: importImage("branflakes_crunchy.jpeg"),
        id: 10,
    },
    {
        name: "ברנפלקס ללא תוספת סוכר",
        image: importImage("branflakes_no_sugar.jpeg"),
        id: 10,
    },
    {
        name: "ברנפלקס Extra Fiber ללא תוספת סוכר",
        image: importImage("branflakes_extra_fiber_no_sugar.jpeg"),
        id: 10,
    },
    {
        name: "ברנפלקס בטעם וניל מעודן 20% חלבון Extra Protein",
        image: importImage("branflakes_vanilla_protein.jpeg"),
        id: 10,
    },
    {
        name: "ברנפלקס",
        image: importImage("branflakes.jpeg"),
        id: 10,
    },
    {
        name: "ברנפלקס ריבועי קינמון",
        image: importImage("branflakes_cinnamon_squares.jpeg"),
        id: 10,
    },
    {
        name: "קורנפלקס דבש",
        image: importImage("honey_cornflakes.jpeg"),
        id: 10,
    },
    {
        name: "קורנפלקס מייפל",
        image: importImage("maple_cornflakes.jpeg"),
        id: 10,
    },
    {
        name: "קוקומן חום לבן בטעם שוקולד ווניל",
        image: importImage("coco_puffs_brown_white.jpeg"),
        id: 10,
    },
    {
        name: "קוקומן כדורים בטעם שוקולד",
        image: importImage("coco_puffs_chocolate_balls.jpeg"),
        id: 10,
    },
    {
        name: "קורנפלקס של אלופים",
        image: importImage("cornflakes_champions_badatz.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס קורנפלקס",
        image: importImage("fitness_cornflakes.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס קלאסי דגנים מלאים ואורז",
        image: importImage("fitness_classic_grains_rice.jpeg"),
        id: 10,
    },
    {
        name: "דגנים מחיטה מלאה בתוספת קינמון סיני מיניס",
        image: importImage("whole_wheat_cinnamon_minis.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס שוקולד חלב",
        image: importImage("fitness_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר צ'יריוס בטעם דבש ושקדים",
        image: importImage("honey_nut_cheerios_honey_almonds.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר מיקס 6 אריזות מיני",
        image: importImage("cereal_mix_6_packs.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס שקדים ודבש",
        image: importImage("fitness_almonds_honey.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס שוקולד מריר",
        image: importImage("fitness_dark_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "קראנץ' רולס נוגט",
        image: importImage("crunch_rolls_nougat.jpeg"),
        id: 10,
    },
    {
        name: "קראנץ' דגנים פריכים עם שוקולד",
        image: importImage("crunch_cereal_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "דגני תירס תפוחים בטעם פירות טריקס",
        image: importImage("cornflakes_trix_fruit_flavored.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר ליון בטעם שוקולד וקרמל",
        image: importImage("lion_cereal_chocolate_caramel.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר בטעם שוקולד נסקוויק",
        image: importImage("nesquik_chocolate_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר קראנץ' שוקולד במתיקות מעודנת",
        image: importImage("crunch_chocolate_light_sweetness.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס דגנים מלאים עם פירות",
        image: importImage("fitness_fruit_grains.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר מולטי צ'יריוס",
        image: importImage("multi_cheerios_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר צ'יריוס משיבולת שועל",
        image: importImage("cheerios_oat_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר קראנצ'ים שיבולת שועל עם פירות מיובשים",
        image: importImage("crunchy_oatmeal_dried_fruits.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר קראנצ'ים שיבולת שועל עם אגוזים ושקדים",
        image: importImage("crunchy_oatmeal_nuts_almonds.jpeg"),
        id: 10,
    },
    {
        name: "הפסקת אוכל עם קורנפלקס ומשקה חלב עמיד בטעם וניל",
        image: importImage("cornflakes_milk_vanilla_snack.jpeg"),
        id: 10,
    },
    {
        name: "הפסקת אוכל דגני עוגי ומשקה חלב עמיד בטעם וניל",
        image: importImage("oogie_cereal_milk_vanilla_snack.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר וופל קריספ",
        image: importImage("waffle_crisp_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני Great Grains עם צימוקים ופקאן",
        image: importImage("great_grains_cereal_raisins_pecan.jpeg"),
        id: 10,
    },
    {
        name: "דגני בננה נאט קראנץ׳",
        image: importImage("banana_nut_crunch_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני Great Grains עם שקדים ואוכמניות",
        image: importImage("great_grains_cereal_almonds_blueberries.jpeg"),
        id: 10,
    },
    {
        name: "דגני Great Grains עם חמוציות ושקדים",
        image: importImage("great_grains_cereal_cranberries_almonds.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר גרייפ נאט",
        image: importImage("grape_nuts_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר פייבר וואן עתירי סובין",
        image: importImage("fiber_one_cereal.jpeg"),
        id: 10,
    },
    {
        name: "דגני בוקר פריכים קיט קט עם שוקולד חלב",
        image: importImage("kitkat_crispy_cereal_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "ספלטפלקס פתיתי חיטת כוסמין אורגני",
        image: importImage("speltflakes_organic_spelt_wheat_flakes.jpeg"),
        id: 10,
    },
];

const initialCerealsnacks = [
    {
        name: "חטיף Protein בוטנים ושבבי שוקולד",
        image: importImage("protein_peanut_chocolate_chip.jpeg"),
        id: 10,
    },
    {
        name: "חטיף Protein בוטנים עם ציפוי בטעם קרמל מלוח",
        image: importImage("protein_peanut_salted_caramel.jpeg"),
        id: 10,
    },
    {
        name: "חטיף Chewy שוקולד מריר, בוטנים ושקדים",
        image: importImage("chewy_dark_chocolate_peanut_almond.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy בשלושה טעמים",
        image: importImage("granola_crunchy_three_flavors.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy מייפל וסוכר חום",
        image: importImage("granola_crunchy_maple_brown_sugar.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy קינמון",
        image: importImage("granola_crunchy_cinnamon.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy שיבולת שועל ודבש",
        image: importImage("granola_crunchy_oats_honey.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy שיבולת שועל ושוקולד מריר",
        image: importImage("granola_crunchy_oats_dark_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיפי גרנולה Crunchy שיבולת שועל מלאה ושבבי שוקולד מריר",
        image: importImage("granola_crunchy_oats_chocolate_chips.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים מצופה שוקולד חלב עם שברי אגוזים",
        image: importImage("cereal_bar_milk_chocolate_nuts.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים עם שברי אגוזים ושוקולד חלב",
        image: importImage("cereal_bar_nuts_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים עם שברי אגוזים ושוקולד מריר",
        image: importImage("cereal_bar_nuts_dark_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף תמרים ואגוזי לוז",
        image: importImage("date_hazelnut_bar.jpeg"),
        id: 10,
    },
    {
        name: "חטיף תמרים וקוקוס",
        image: importImage("date_coconut_bar.jpeg"),
        id: 10,
    },
    {
        name: "חטיף תמרים, אגוזים ושברי קקאו",
        image: importImage("date_nuts_cocoa_bar.jpeg"),
        id: 10,
    },
    {
        name: "חטיף תמרים, קשיו ונגיעת לוז",
        image: importImage("date_cashew_hazelnut_bar.jpeg"),
        id: 10,
    },
    {
        name: "חטיף תמרים, בוטנים ואגוזי לוז",
        image: importImage("date_peanut_hazelnut_bar.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים מצופה אקסטרה שוקולד מריר",
        image: importImage("cereal_bar_extra_dark_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים מצופה אקסטרה שוקולד חלב",
        image: importImage("cereal_bar_extra_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים קידס מצופה שוקולד לבן",
        image: importImage("cereal_bar_kids_white_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים שוקולד לבן בטעם יוגורט",
        image: importImage("cereal_bar_white_chocolate_yogurt.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים מצופה שוקולד לבן ופירות יער",
        image: importImage("cereal_bar_white_chocolate_berries.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים קידס מצופה שוקולד חלב",
        image: importImage("cereal_bar_kids_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף מצופה שוקולד חלב",
        image: importImage("cereal_bar_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף מצופה שוקולד לבן",
        image: importImage("cereal_bar_white_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף מצופה שוקולד מריר",
        image: importImage("cereal_bar_dark_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף סלים פרוט בטעם יוגורט ובמילוי תות שדה",
        image: importImage("slim_fruit_strawberry.jpeg"),
        id: 10,
    },
    {
        name: "חטיף סלים פרוט בטעם יוגורט ותפוח",
        image: importImage("slim_fruit_apple.jpeg"),
        id: 10,
    },
    {
        name: "חטיף סלים פרוט בטעם יוגורט ופירות יער",
        image: importImage("slim_fruit_berries.jpeg"),
        id: 10,
    },
    {
        name: "חטיף קריספי עם מילוי בטעם אוכמניות",
        image: importImage("crispy_blueberry_filling.jpeg"),
        id: 10,
    },
    {
        name: "חטיף קריספי עם מילוי בטעם שוקולד",
        image: importImage("crispy_chocolate_filling.jpeg"),
        id: 10,
    },
    {
        name: "חטיף קריספי עם מילוי בטעם תות שדה",
        image: importImage("crispy_strawberry_filling.jpeg"),
        id: 10,
    },
    {
        name: "חטיף רב דגנים ללא גלוטן עם שוקולד חלב",
        image: importImage("multigrain_gluten_free_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף רב דגנים עם שוקולד חלב",
        image: importImage("multigrain_milk_chocolate.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים מצופה שוקולד מריר וקליפת תפוז סלים דליס",
        image: importImage("cereal_bar_dark_chocolate_orange_peel.jpeg"),
        id: 10,
    },
    {
        name: "חטיף רב דגנים מצופה שוקולד לבן קוקוס ולימון",
        image: importImage("multigrain_white_chocolate_coconut_lemon.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגני בוקר Lion בטעם קרמל ושוקולד על קרם חלב",
        image: importImage("lion_cereal_bar_caramel_chocolate_cream.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים פיטנס עם שוקולד מריר",
        image: importImage("fitness_dark_chocolate_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף פיטנס שוקולד מריר ושקדים",
        image: importImage("fitness_dark_chocolate_almond_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף פיטנס דגנים עם עוגיות ופצפוצי שוקולד לבן",
        image: importImage("fitness_cookies_white_chocolate_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים פיטנס עם פירות יער",
        image: importImage("fitness_berry_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף דגנים פיטנס שוקולד בננה",
        image: importImage("fitness_chocolate_banana_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף פיטנס קלאסי במתיקות מעודנת",
        image: importImage("fitness_classic_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף פיטנס דגנים, שקדים ודבש",
        image: importImage("fitness_almond_honey_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף צ'יריוס בטעם דבש",
        image: importImage("cheerios_honey_bar_nestle_132g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף קראנץ' שוקו וניל",
        image: importImage("crunch_choco_vanilla_bar_nestle_150g.jpeg"),
        id: 10,
    },
    {
        name: "פיטנס דליס חטיף דגנים עם שוקולד חלב",
        image: importImage("fitness_delice_milk_chocolate_bar_nestle_141g.jpeg"),
        id: 10,
    },
    {
        name: "פריכיות דגנים פיטנס מצופות שוקולד חלב",
        image: importImage("fitness_chocolate_rice_cakes_nestle_84g.jpeg"),
        id: 10,
    },
    {
        name: "פריכיות דגנים פיטנס מצופות שוקולד לבן",
        image: importImage("fitness_white_chocolate_rice_cakes_nestle_84g.jpeg"),
        id: 10,
    },
    {
        name: "קוקומן חטיף פצפוצי דגנים בטעם שוקולד",
        image: importImage("cocoman_chocolate_cereal_bar_telma_126g.jpeg"),
        id: 10,
    },
    {
        name: "שוגי חטיף פתיתי תירס קלויים",
        image: importImage("shugi_cornflakes_bar_telma_156g.jpeg"),
        id: 10,
    },
    {
        name: "שוגי חטיף פתיתי תירס קלויים בטעם שוקולד",
        image: importImage("shugi_chocolate_cornflakes_bar_telma_156g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף שוגי אקסטרה שוקולד",
        image: importImage("shugi_extra_chocolate_bar_telma_130g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף אגוזים וצימוקים Happy Nuts",
        image: importImage("happy_nuts_raisins_bar_willyfood_140g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף שקדים וחמוציות Happy Nuts",
        image: importImage("happy_nuts_almond_cranberry_bar_willyfood_140g.jpeg"),
        id: 10,
    },
    {
        name: "עוגות אישיות בטעם שוקולד עם חתיכות בטעם שוקולד",
        image: importImage("fiber_one_chocolate_cakes_fiber1_120g.jpeg"),
        id: 10,
    },
    {
        name: "חטיף בוטנים ושקדים עם שוקולד מריר ופיסטוק",
        image: importImage("peanut_almond_pistachio_dark_chocolate_bar_free_140g.jpeg"),
        id: 10,
    },
];

const initialSweetspreads = [
    {
        name: "ממרח תמרים",
        image: importImage("date_spread_klayat_gat_450g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח אגוזי לוז עם קקאו נוטלה",
        image: importImage("nutella_hazelnut_cocoa_750g.jpeg"),
        id: 5,
    },
    {
        name: "קרם מובחר למריחה השחר",
        image: importImage("elite_shehak_milk_chocolate_spread_500g.jpeg"),
        id: 5,
    },
    {
        name: "קרם מובחר בטעם שוקולד פרווה השחר",
        image: importImage("elite_shehak_pareve_400g.jpeg"),
        id: 5,
    },
    {
        name: "קרם למריחה וממרח חלב חצי חצי",
        image: importImage("elite_shehak_half_half_350g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח חלב",
        image: importImage("elite_shehak_milk_spread_350g.jpeg"),
        id: 5,
    },
    {
        name: "ממרחית - ממרח בטעם שוקולד חלבי",
        image: importImage("elite_mamrit_500g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח עוגיות קרמל לוטוס",
        image: importImage("lotus_caramel_cookie_spread_400g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח עוגיות לוטוס קראנצ'י",
        image: importImage("lotus_crunchy_cookie_spread_380g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח אגוזי לוז עם קקאו צ'וקטה",
        image: importImage("chocketa_hazelnut_cocoa_spread_700g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח חלב וממרח אגוזי לוז עם קקאו צ'וקטה",
        image: importImage("chocketa_milk_hazelnut_cocoa_spread_700g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח חרובים בטעם שוקולד",
        image: importImage("b_and_d_carob_spread_350g.jpeg"),
        id: 5,
    },
    {
        name: "חמאת בוטנים קרנצ'י עם שברי בוטנים",
        image: importImage("b_and_d_peanut_butter_crunchy_350g.jpeg"),
        id: 5,
    },
    {
        name: "חמאת בוטנים טבעית",
        image: importImage("b_and_d_natural_peanut_butter_1kg.jpeg"),
        id: 5,
    },
    {
        name: "חמאת בוטנים סקיפי קלאסית",
        image: importImage("skippy_classic_peanut_butter_454g.jpeg"),
        id: 5,
    },
    {
        name: "חמאת בוטנים סקיפי עם שברי בוטנים",
        image: importImage("skippy_peanut_butter_crunchy_454g.jpeg"),
        id: 5,
    },
    {
        name: "חמאת שקדים 100% שקדים קלופים וטחונים",
        image: importImage("theshkedim_almond_butter_250g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח ריבת חלב",
        image: importImage("comida_dulce_de_leche_500g.jpeg"),
        id: 5,
    },
    {
        name: "ריבת חלב בטעם שמנת",
        image: importImage("maya_creamy_dulce_de_leche_400g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח שומשום עם סילאן",
        image: importImage("achva_sesame_silan_spread_400g.jpeg"),
        id: 5,
    },
    {
        name: "ממרח בטעם חלווה פיסטוק",
        image: importImage("sweetango_pistachio_halva_spread_350g.jpeg"),
        id: 5,
    },
];

const initialChocolatetables = [
    {
        name: "מילקה שוקולד קרם אגוזים",
        image: importImage("milka_hazelnut_cream_85g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב מילקה",
        image: importImage("milka_milk_chocolate_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב במילוי סוכריות עדשים",
        image: importImage("milka_milk_chocolate_candy_100g.jpeg"),
        id: 13,
    },
    {
        name: "מילקה שוקולד חלב ושוקולד לבן",
        image: importImage("milka_cow_spots_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב סנדוויץ אוראו",
        image: importImage("milka_oreo_sandwich_96g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם צימוקים ושברי אגוזים",
        image: importImage("milka_milk_chocolate_raisins_nuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם קרמל",
        image: importImage("milka_milk_chocolate_caramel_90g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם שברי אגוזי לוז",
        image: importImage("milka_milk_chocolate_hazelnuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם שברי אוראו",
        image: importImage("milka_milk_chocolate_oreo_100g.jpeg"),
        id: 13,
    },
    {
        name: "מילקה שוקולד לבן עם שברי אוראו",
        image: importImage("milka_white_chocolate_oreo_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם שברי קרמל",
        image: importImage("milka_daim_caramel_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד לבן מילקה",
        image: importImage("milka_white_chocolate_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר וחלב מילקה",
        image: importImage("milka_dark_milk_chocolate_100g.jpeg"),
        id: 13,
    },
    {
        name: "ממולדה שוקולד חלב במילוי קרם בטעם תות",
        image: importImage("elite_milk_chocolate_strawberry_cream_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 70%",
        image: importImage("splendid_dark_chocolate_70_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 70% בטעם תפוז",
        image: importImage("splendid_dark_chocolate_orange_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 70% בטעם קפה",
        image: importImage("splendid_dark_chocolate_coffee_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 85%",
        image: importImage("splendid_dark_chocolate_85_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 90%",
        image: importImage("splendid_dark_chocolate_90_100g.jpeg"),
        id: 13,
    },
    {
        name: "ספלנדיד שוקולד מריר 70% בטעם פירות יער",
        image: importImage("splendid_dark_chocolate_berries_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב פרה",
        image: importImage("elite_milk_cow_chocolate_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד לבן עם שברי עוגיות בטעם שוקולד - חלבי",
        image: importImage("elite_white_chocolate_cookies_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר עם שברי אגוזים פרה",
        image: importImage("elite_dark_chocolate_nuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד פרה חלב עם שברי אגוזי לוז",
        image: importImage("elite_milk_cow_chocolate_hazelnuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד פרה לבן",
        image: importImage("elite_white_cow_chocolate_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד פרה מריר - פרווה",
        image: importImage("elite_dark_cow_chocolate_pareve_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד פרה מריר 60% מוצקי קקאו - פרווה",
        image: importImage("elite_dark_cow_60_pareve_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד במילוי קרם מוס שוקולד",
        image: importImage("ritter_sport_milk_chocolate_mousse_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב במילוי מוס קרמל ושברי שקדים",
        image: importImage("ritter_sport_milk_chocolate_caramel_mousse_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב מעולה עם שברי קשיו קלוי ומומלח",
        image: importImage("ritter_sport_milk_chocolate_cashew_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם אגוזי לוז שלמים",
        image: importImage("ritter_sport_milk_chocolate_whole_hazelnuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם אגוזים וצימוקים",
        image: importImage("ritter_sport_milk_chocolate_nuts_raisins_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם מרציפן",
        image: importImage("ritter_sport_milk_chocolate_marzipan_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם נוגט",
        image: importImage("ritter_sport_milk_chocolate_nougat_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם קוקוס",
        image: importImage("ritter_sport_milk_chocolate_coconut_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם שברי אגוזי לוז",
        image: importImage("ritter_sport_milk_chocolate_hazelnut_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם שקדים שלמים",
        image: importImage("ritter_sport_milk_chocolate_whole_almonds_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר עם אגוזי לוז שלמים",
        image: importImage("ritter_sport_dark_chocolate_whole_hazelnuts_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר עם שקדים שלמים",
        image: importImage("ritter_sport_dark_chocolate_whole_almonds_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר עם תפוז ושקדים",
        image: importImage("ritter_sport_dark_chocolate_orange_almonds_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב ריסס במילוי חמאת בוטנים",
        image: importImage("reeses_peanut_butter_milk_chocolate_120g.jpeg"),
        id: 13,
    },
    {
        name: "לואקר שוקולד חלב עם וופל",
        image: importImage("loacker_milk_chocolate_wafer_87g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר אקסלנס עם מלח ים",
        image: importImage("lindt_excellence_dark_sea_salt_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר אקסלנס עם צ'ילי",
        image: importImage("lindt_excellence_dark_chili_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר מנטה",
        image: importImage("lindt_dark_mint_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד מריר במילוי וופל וקרם קקאו",
        image: importImage("loacker_dark_wafer_cocoa_87g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד לבן עם וופל",
        image: importImage("loacker_white_wafer_87g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב שקדים, נוגט ודבש",
        image: importImage("lindt_grand_milk_almonds_nougat_honey_150g.jpeg"),
        id: 13,
    },
    {
        name: "פסק זמן אצבעות שוקולד חלב במילוי וופל וקרם חלב",
        image: importImage("pesek_zman_milk_chocolate_wafers_100g.jpeg"),
        id: 13,
    },
    {
        name: "פסק זמן אצבעות שוקולד חלב במילוי ופל וקרם קרמל מלוח",
        image: importImage("pesek_zman_milk_caramel_wafer_100g.jpeg"),
        id: 13,
    },
    {
        name: "פררו רושה טבלת שוקולד חלב ממולא קרם אגוזי לוז וקקאו",
        image: importImage("ferrero_rocher_milk_nut_cocoa_tablet_90g.jpeg"),
        id: 13,
    },
    {
        name: "פררו רושה טבלת שוקולד לבן ממולא קרם אגוזי לוז",
        image: importImage("ferrero_rocher_white_nut_cream_tablet_90g.jpeg"),
        id: 13,
    },
    {
        name: "פררו רושה טבלת שוקולד מריר ממולא קרם אגוזי לוז",
        image: importImage("ferrero_rocher_dark_nut_cream_tablet_90g.jpeg"),
        id: 13,
    },
    {
        name: "צ'וקטה קידס אצבעות שוקולד חלב",
        image: importImage("chocketa_kids_milk_chocolate_fingers_200g.jpeg"),
        id: 13,
    },
    {
        name: "צ'וקטה קידס ביסקוויט בטעם שוקולד עם קרם חלבי",
        image: importImage("chocketa_kids_chocolate_biscuit_milk_cream_120g.jpeg"),
        id: 13,
    },
    {
        name: "צ'וקטה קידס ביסקוויט מצופה שוקולד חלב",
        image: importImage("chocketa_kids_milk_chocolate_biscuit_120g.jpeg"),
        id: 13,
    },
    {
        name: "קליק טריו קרם בוטנים, שברי בוטנים וקרם בטעם קרמל",
        image: importImage("klik_trio_peanut_caramel_cream_99g.jpeg"),
        id: 13,
    },
    {
        name: "קראנצ' פרה שוקולד חלב ביסקוויט",
        image: importImage("crunch_milk_biscuit_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב במילוי קרם חלב",
        image: importImage("elite_milk_filled_with_milk_cream_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב במילוי קרם נוגט",
        image: importImage("elite_milk_filled_with_nougat_cream_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם סוכריות קופצות",
        image: importImage("elite_milk_with_popping_candy_90g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב עם פצפוצי אורז",
        image: importImage("elite_milk_with_rice_crisps_100g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד קליק טריו קרם בטעם קרמל, קוקוס קלוי, וקרם חלבי",
        image: importImage("klik_trio_caramel_coconut_cream_99g.jpeg"),
        id: 13,
    },
];

const initialChocolatebars = [
    {
        name: "מארז מיני פסק זמן קלאסי",
        image: importImage("pesek_zman_mini_classic_pack_400g.jpeg"),
        id: 13,
    },
    {
        name: "מארז מיני מיקס מעורב",
        image: importImage("elite_mini_mix_pack_390g.jpeg"),
        id: 13,
    },
    {
        name: "מארז מיקס מיני חטיפי שוקולד סניקרס",
        image: importImage("snickers_mini_mix_pack_400g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי טוויקס מיני",
        image: importImage("twix_minis_333g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי באונטי מיני",
        image: importImage("bounty_minis_333g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי סניקרס מיני",
        image: importImage("snickers_minis_333g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי מרס מיני",
        image: importImage("mars_minis_333g.jpeg"),
        id: 13,
    },
    {
        name: "מארז מיני חטיפי Kit Kat",
        image: importImage("kitkat_mini_pack_200g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות אם אנד אמס M&M בוטנים",
        image: importImage("mnms_peanut_165g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף טעמי בייגלה",
        image: importImage("taami_pretzel_40g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות אם אנד אמס M&M בטעם שוקולד חלב",
        image: importImage("mnms_milk_chocolate_165g.jpeg"),
        id: 13,
    },
    {
        name: "אצבעות שוקולד קינדר Kinder",
        image: importImage("kinder_chocolate_8_sticks_100g.jpeg"),
        id: 13,
    },
    {
        name: "מארז ביצת הפתעה קינדר",
        image: importImage("kinder_surprise_trio_60g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי הפי היפו Happy Hippo במילוי קרם חלב וקקאו",
        image: importImage("happy_hippo_milk_cocoa_5_pack_20.7g.jpeg"),
        id: 13,
    },
    {
        name: "חטיפי הפי היפו Happy Hippo במילוי קרם חלבי ואגוזי לוז",
        image: importImage("happy_hippo_milk_nut_5_pack_20.7g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פסק זמן Z Good ופל מגולגל",
        image: importImage("pesek_zman_z_good_wafer_36g.jpeg"),
        id: 13,
    },
    {
        name: "מארז קינדר בואנו Kinder Bueno",
        image: importImage("kinder_bueno_3_pack_43g.jpeg"),
        id: 13,
    },
    {
        name: "מארז קינדר ג'וי",
        image: importImage("kinder_joy_trio_60g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף אורז תפוח ושבבי קוקוס מצופה שוקולד חלב",
        image: importImage("alibi_max_puffed_rice_coconut_milk_chocolate_49g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף קרמל אורז תפוח מצופה שוקולד חלב",
        image: importImage("alibi_max_caramel_puffed_rice_milk_chocolate_49g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף סניקרס Snickers",
        image: importImage("snickers_bar_57g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף באונטי Bounty",
        image: importImage("bounty_bar_57g.jpeg"),
        id: 13,
    },
    {
        name: "ריסס Reese's שוקולד חלב במילוי חמאת בוטנים",
        image: importImage("reeses_milk_peanut_butter_42g.jpeg"),
        id: 13,
    },
    {
        name: "ריסס Reese's שוקולד לבן במילוי חמאת בוטנים",
        image: importImage("reeses_white_peanut_butter_39g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף שוקולד ריסס Reese's קרמל ובוטנים",
        image: importImage("reeses_caramel_peanuts_47g.jpeg"),
        id: 13,
    },
    {
        name: "מארז מיני חטיפי Kit Kat Chanky",
        image: importImage("kitkat_mini_chunky_pack_194g.jpeg"),
        id: 13,
    },
    {
        name: "כדורי שוקולד מלטיזרס",
        image: importImage("maltesers_chocolate_balls_135g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף שוקולד עם מקלות לחם נוטלה אנד גו",
        image: importImage("nutella_and_go_sticks_52g.jpeg"),
        id: 13,
    },
    {
        name: "וופל Kit Kat Chunky",
        image: importImage("kitkat_chunky_40g.jpeg"),
        id: 13,
    },
    {
        name: "סמרטיס סוכריות שוקולד",
        image: importImage("smarties_chocolate_candies_38g.jpeg"),
        id: 13,
    },
    {
        name: "קליק Cream – חטיף שוקולד חלב במילוי קרם חלבי",
        image: importImage("klik_cream_milk_chocolate_cream_38g.jpeg"),
        id: 13,
    },
    {
        name: "קליק Cream – חטיף שוקולד קרם חלבי ועוגיות",
        image: importImage("klik_cream_milk_chocolate_cookies_38g.jpeg"),
        id: 13,
    },
    {
        name: "קליק חום לבן",
        image: importImage("klik_brown_white_65g.jpeg"),
        id: 13,
    },
    {
        name: "קליק כדורים",
        image: importImage("klik_balls_65g.jpeg"),
        id: 13,
    },
    {
        name: "קליק כריות",
        image: importImage("klik_pillows_65g.jpeg"),
        id: 13,
    },
    {
        name: "אגוזי - חטיף אגוזים מצופה שוקולד חלב",
        image: importImage("egozi_nut_bar_milk_chocolate_45g.jpeg"),
        id: 13,
    },
    {
        name: "מקופלת חטיף שוקולד חלב",
        image: importImage("mekupelet_milk_chocolate_25g.jpeg"),
        id: 13,
    },
    {
        name: "טוויסט",
        image: importImage("twist_bar_28g.jpeg"),
        id: 13,
    },
    {
        name: "טורטית חטיף וופל מצופה",
        image: importImage("tortit_wafer_bar_40g.jpeg"),
        id: 13,
    },
    {
        name: "טעמי - חטיף במילוי קרם נוגט וקרמל",
        image: importImage("taami_nougat_caramel_bar_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף כיף כף",
        image: importImage("kif_kef_bar_45g.jpeg"),
        id: 13,
    },
    {
        name: "כיף כף מקלות אגוזים",
        image: importImage("kif_kef_nut_sticks_42g.jpeg"),
        id: 13,
    },
    {
        name: "כיף כף מקלות שוקולד",
        image: importImage("kif_kef_chocolate_sticks_40g.jpeg"),
        id: 13,
    },
    {
        name: "כיף כף פצפצים",
        image: importImage("kif_kaf_patzpatzim_40g.jpeg"),
        id: 13,
    },
    {
        name: "פסק זמן חטיף פור פליי 4Play",
        image: importImage("pesek_zman_4play_40g.jpeg"),
        id: 13,
    },
    {
        name: "ממולדה חטיף שוקולד חלב במילוי קרם בטעם תות",
        image: importImage("memulda_strawberry_50g.jpeg"),
        id: 13,
    },
    {
        name: "פיק ניק Pic-nic הפתעה",
        image: importImage("pic_nic_surprise_50g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פסק זמן קלאסי",
        image: importImage("pesek_zman_classic_45g.jpeg"),
        id: 13,
    },
    {
        name: "מארז חטיף קינדר טרונקי'",
        image: importImage("kinder_trunky_5_pack_90g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף קליק נוגט מצופה שוקולד לבן",
        image: importImage("klik_nougat_white_35g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף שוקולד חלב במילוי קרם ברולה",
        image: importImage("roshen_creme_brulee_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף שוקולד חלב במילוי קרמל",
        image: importImage("roshen_caramel_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף שוקולד חלב ובוטנים",
        image: importImage("roshen_peanut_milk_40g.jpeg"),
        id: 13,
    },
    {
        name: "מטבעות שוקולד חלב",
        image: importImage("carmit_chocolate_coins_36g.jpeg"),
        id: 13,
    },
    {
        name: "מארז מיני טורטית",
        image: importImage("mini_tortit_family_pack_390g.jpeg"),
        id: 13,
    },
    {
        name: "מארז פנדה קוקוס קלוי חטיף טבעוני",
        image: importImage("panda_coconut_vegan_4_pack_180g.jpeg"),
        id: 13,
    },
    {
        name: "פסק זמן ביג בייט Big Bite",
        image: importImage("pesek_zman_big_bite_52g.jpeg"),
        id: 13,
    },
    {
        name: "פרפקט בייט מיני חטיפי שוקולד חלב ואגוזי לוז",
        image: importImage("perfect_bite_mini_234g.jpeg"),
        id: 13,
    },
    {
        name: "מארז קינדר קארדס Kinder Cards",
        image: importImage("kinder_cards_5_pack_128g.jpeg"),
        id: 13,
    },
];

const initialBonbonnieres = [
    {
        name: "לינדור כדורי שוקולד לבן במילוי קרם רך",
        image: importImage("lindor_white_chocolate_truffles_200g.jpeg"),
        id: 13,
    },
    {
        name: "לינדור שוקולד לבן עם שבבי קקאו במילוי קרם רך",
        image: importImage("lindor_white_cocoa_truffles_200g.jpeg"),
        id: 13,
    },
    {
        name: "לינדור שוקולד לבן עם תותים ושמנת במילוי קרם רך",
        image: importImage("lindor_strawberries_cream_truffles_200g.jpeg"),
        id: 13,
    },
    {
        name: "בונבוניירת מרסי Merci",
        image: importImage("merci_assorted_chocolates_400g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופיפי Toffifee",
        image: importImage("toffifee_250g.jpeg"),
        id: 13,
    },
    {
        name: "בונבוניירת לינדור Lindor שוקולד חלב",
        image: importImage("lindor_milk_chocolate_200g.jpeg"),
        id: 13,
    },
    {
        name: "לינדור בונבוניירה כדורי שוקולד שוויצרי במילוי פיסטוק",
        image: importImage("lindor_pistachio_truffles_200g.jpeg"),
        id: 13,
    },
    {
        name: "פררו רושה Ferrero Rocher",
        image: importImage("ferrero_rocher_200g.jpeg"),
        id: 13,
    },
    {
        name: "בונבוניירה Shooters שוקולד במילוי ליקר רום",
        image: importImage("shooters_rum_chocolates_150g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב ממולא ג'לי לימון Mella",
        image: importImage("mella_lemon_jelly_190g.jpeg"),
        id: 13,
    },
    {
        name: "שוקולד חלב ממולא ג'לי אוכמניות Mella",
        image: importImage("mella_blueberry_jelly_190g.jpeg"),
        id: 13,
    },
    {
        name: "פרלין שוקולד חלב, מריר ולבן Rose",
        image: importImage("loacker_rose_praline_150g.jpeg"),
        id: 13,
    },
    {
        name: "בונבוניירת לינדור אסורטד במבחר טעמים",
        image: importImage("lindor_assorted_337g.jpeg"),
        id: 13,
    },
    {
        name: "לינדור מבחר כדורי שוקולד שוויצרי במילוי קרם רך",
        image: importImage("lindor_assorted_truffles_200g.jpeg"),
        id: 13,
    },
];

const initialCandiesmarshmallows = [
    {
        name: "סוכריות חמאה ללא סוכר בטעם קרמל",
        image: importImage("werthers_sugarfree_caramel_42g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופי חמאה ללא סוכר",
        image: importImage("werthers_sugarfree_butter_toffee_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות חמאה",
        image: importImage("werthers_butter_candies_135g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופי חמאה וקפה ללא סוכר",
        image: importImage("werthers_sugarfree_coffee_caramel_80g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות בטעם שוקולד ללא סוכר",
        image: importImage("werthers_sugarfree_chocolate_candies_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות במילוי קרם קרמל",
        image: importImage("werthers_caramel_cream_125g.jpeg"),
        id: 13,
    },
    {
        name: "מרשמלו",
        image: importImage("yogueta_marshmallows_180g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופי שוקולד",
        image: importImage("storck_chocolate_toffees_325g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופי חלב",
        image: importImage("storck_milk_toffees_325g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מאסט Must ללא סוכר בטעם ריבת חלב",
        image: importImage("must_dulce_de_leche_80g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מאסט Must ללא סוכר בטעם לימון",
        image: importImage("must_lemon_80g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מאסט Must ללא סוכר בטעם מנטה",
        image: importImage("must_mint_80g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מאסט Must ללא סוכר בטעם פטל לימון",
        image: importImage("must_raspberry_lemon_80g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לקקן במילוי טופי בטעמי גלידת פירות",
        image: importImage("yogueta_fruit_icecream_lollipops_216g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לקקן במילוי טופי בטעם מסטיק",
        image: importImage("yogueta_bubblegum_lollipops_216g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לקקן במילוי טופי בטעמי יוגורט פירות",
        image: importImage("yogueta_yogurt_fruit_lollipops_216g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לקקן במילוי מסטיק",
        image: importImage("pinpop_bubblegum_lollipops_170g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות על מקל בטעם קולה במילוי גומי לעיסה",
        image: importImage("pinpop_cola_lollipops_170g.jpeg"),
        id: 13,
    },
    {
        name: "לקקני סודה",
        image: importImage("taaman_soda_lollipops_135g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק בטעמי פירות בצורת שטיח",
        image: importImage("yogueta_fruit_strips_50g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק בטעם תות שדה בצורת שטיח",
        image: importImage("yogueta_strawberry_strips_50g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק בטעם קולה בצורת מקלות",
        image: importImage("yogueta_cola_sticks_50g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק בטעם תות שדה בצורת מקלות",
        image: importImage("yogueta_strawberry_sticks_50g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק חמוץ בטעם אבטיח בצורת שטיח",
        image: importImage("yogueta_watermelon_strips_50g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לעיסה בטעם מנטה",
        image: importImage("mentos_mint_chews_160g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריה לרענון ללא סוכר בטעם מנטה עדינה",
        image: importImage("mentos_mint_fresh_31g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריה לרענון ללא סוכר בטעם מנטה",
        image: importImage("mentos_mint_31g.jpeg"),
        id: 13,
    },
    {
        name: "מארז סוכריות מנטוס Mentos מנטה",
        image: importImage("mentos_mint_multipack_150g.jpeg"),
        id: 13,
    },
    {
        name: "מארז סוכריות מנטוס Mentos פירות",
        image: importImage("mentos_fruit_multipack_150g.jpeg"),
        id: 13,
    },
    {
        name: "מארז סוכריות מנטוס Mentos תות",
        image: importImage("mentos_strawberry_multipack_150g.jpeg"),
        id: 13,
    },
    {
        name: "מארז סוכריות מנטוס בטעם פאנטה תפוז",
        image: importImage("mentos_fanta_orange_multipack_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטוס Mentos מנטה",
        image: importImage("mentos_mint_37.5g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטוס Mentos פירות",
        image: importImage("mentos_fruit_37.5g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטוס Mentos פאנטה תפוז",
        image: importImage("mentos_fanta_orange_37.5g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטוס Mentos תות שדה",
        image: importImage("mentos_strawberry_37g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטה",
        image: importImage("kalfany_mint_candies_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות קשות בטעם תות",
        image: importImage("kalfany_strawberry_candies_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות פירות יער",
        image: importImage("kalfany_forest_fruit_candies_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות פירות",
        image: importImage("kalfany_fruit_candies_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות הדרים",
        image: importImage("kalfany_citrus_candies_150g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות ללא סוכר בטעם מנטה מאסט פרש",
        image: importImage("must_fresh_mint_sugarfree_45g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטה Ice Fresh",
        image: importImage("storck_ice_fresh_mint_candies_425g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות סקיטלס בטעם פירות",
        image: importImage("skittles_fruit_152g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות סקיטלס בטעם פירות חמוצים",
        image: importImage("skittles_sour_fruit_152g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות לקקנים בייבי דול Baby Doll",
        image: importImage("baby_doll_lollipops_24g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות צמחים",
        image: importImage("ricola_herb_candies_70g.jpeg"),
        id: 13,
    },
    {
        name: "סאוור בלטס Sour Belts בטעם תות",
        image: importImage("paskesz_sour_belts_strawberry_115g.jpeg"),
        id: 13,
    },
    {
        name: "סאוור בלטס Sour Belts בטעם תפוח",
        image: importImage("paskesz_sour_belts_apple_115g.jpeg"),
        id: 13,
    },
    {
        name: "סאוור בלטס Sour Belts בטעם אוכמניות",
        image: importImage("paskesz_sour_belts_blueberry_115g.jpeg"),
        id: 13,
    },
    {
        name: "סאוור סטיקס Sour Sticks בטעם קולה",
        image: importImage("paskesz_sour_sticks_cola_100g.jpeg"),
        id: 13,
    },
    {
        name: "סאוור סטיקס Sour Sticks בטעם תות שדה",
        image: importImage("paskesz_sour_sticks_strawberry_50g.jpeg"),
        id: 13,
    },
    {
        name: "טוויזלרס ממתק בטעם דובדבן",
        image: importImage("twizzlers_cherry_candy_172g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות ארוכות בטעם תות טוויזלרס Twizzlers",
        image: importImage("twizzlers_strawberry_candy_198g.jpeg"),
        id: 13,
    },
    {
        name: "זאזא סוכריות צמיד",
        image: importImage("taaman_zaza_candy_bracelet_140g.jpeg"),
        id: 13,
    },
    {
        name: "זאזא סוכריות שעון",
        image: importImage("taaman_zaza_candy_watch_140g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות טופי בטעמי פירות",
        image: importImage("maya_fruit_striped_toffee_400g.jpeg"),
        id: 13,
    },
    {
        name: "קוביות חמוצות ממולאות בטעם פירות",
        image: importImage("yogueta_fruit_sour_cubes_250g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות ג'לי בטעמי פירות",
        image: importImage("locitos_fruit_jelly_candies_300g.jpeg"),
        id: 13,
    },
    {
        name: "ממתק צמר גפן מתוק מסיבים תזונתיים",
        image: importImage("mooosh_sweet_cotton_candy_10g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות חמוצים ממולאות בטעם פירות",
        image: importImage("yogueta_sour_sticks_fruit_filled_100g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי בטעמי פירות בצורת דובי",
        image: importImage("yogueta_fruit_gummy_bears_200g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי בצורת נחשים בטעמי פירות",
        image: importImage("haribo_snakes_fruit_gummy_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי דובונים בטעמי פירות",
        image: importImage("haribo_fruit_gummy_bears_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי בטעם קולה",
        image: importImage("haribo_cola_gummy_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי בטעמי פירות אפרסק",
        image: importImage("haribo_peach_fruit_gummy_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי בטעמי פירות דובדבנים",
        image: importImage("haribo_cherry_fruit_gummy_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי מסוכרות בטעמי פירות",
        image: importImage("yogueta_sugared_fruit_gummy_200g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי מסוכרות בטעמי פירות בצורת נחש",
        image: importImage("yogueta_sugared_snake_fruit_gummy_200g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות גומי תולעים חמוצות בטעמי פירות",
        image: importImage("haribo_sour_worms_fruit_gummy_70g.jpeg"),
        id: 13,
    },
    {
        name: "סוכריות מנטוס מרעננות ללא סוכר בטעם פירות יער",
        image: importImage("mentos_sugarfree_forest_fruit_candies_21g.jpeg"),
        id: 13,
    },
    {
        name: "מרשמלו טבעוני בטעם וניל ללא גלוטן",
        image: importImage("vega_vegan_vanilla_marshmallow_glutenfree_283g.jpeg"),
        id: 13,
    },    
];

const initialGum = [
    {
        name: "מסטיק מאסט Must בטעם מנטה מרעננת",
        image: importImage("must_mint_refreshing_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must בטעם מנטה עדינה",
        image: importImage("must_mint_mild_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בזוקה בטעם ענבים ללא סוכר",
        image: importImage("bazooka_grape_sugar_free_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must בטעם אבטיח מלון",
        image: importImage("must_watermelon_melon_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must בטעם דובדבן",
        image: importImage("must_cherry_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must בטעם קולה לימון ללא סוכר",
        image: importImage("must_cola_lemon_sugar_free_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must בטעם פטל לימון ללא סוכר",
        image: importImage("must_raspberry_lemon_sugar_free_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק ללא סוכר בטעם בזוקה",
        image: importImage("bazooka_sugar_free_28g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בזוקה קוביות ללא סוכר",
        image: importImage("bazooka_cubes_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must קוביות ללא סוכר בטעם ענבים",
        image: importImage("must_grape_cubes_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט Must קוביות ללא סוכר בטעם מנטה",
        image: importImage("must_mint_cubes_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מאסט קוביות מסטיק בטעם אבטיח מנגו ללא סוכר",
        image: importImage("must_watermelon_mango_cubes_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מאסט קוביות מסטיק בטעם תות דובדבן ללא סוכר",
        image: importImage("must_strawberry_cherry_cubes_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בטעם מנטה חזקה פיור פרש",
        image: importImage("mentos_strong_mint_chewing_gum_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בטעם מנטה ללא סוכר פיור פרש",
        image: importImage("mentos_mint_sugar_free_pure_fresh_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מנטוס ויטמין ללא סוכר בטעם הדרים",
        image: importImage("mentos_vitamin_citrus_sugar_free_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בטעם אבטיח ללא סוכר פיור פרש",
        image: importImage("mentos_watermelon_sugar_free_pure_fresh_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בטעם פירות מנטה ללא סוכר פיור פרש",
        image: importImage("mentos_fruit_mint_sugar_free_pure_fresh_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בטעם תות שדה ללא סוכר פיור פרש",
        image: importImage("mentos_strawberry_sugar_free_pure_fresh_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מנטוס בטעם ענבים פיור פרש",
        image: importImage("mentos_grape_gum_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק פיור וויט מנטה עדינה",
        image: importImage("mentos_pure_white_mild_mint_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק פיור וויט מנטה מתוקה",
        image: importImage("mentos_pure_white_sweet_mint_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מנטוס בטעם דובדבן",
        image: importImage("mentos_cherry_gum_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מנטוס פיור וויט מנטה",
        image: importImage("mentos_pure_white_mint_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט פרופשיונל בטעם מנטה ללא סוכר",
        image: importImage("orbit_professional_mint_sugar_free_84g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט בטעם מנטה סוויטמינט ללא סוכר",
        image: importImage("orbit_sweet_mint_sugar_free_84g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט וויט בטעם מנטה ללא סוכר",
        image: importImage("orbit_white_mint_sugar_free_64g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט בטעם פירות ומנטה ללא סוכר",
        image: importImage("orbit_fruit_mint_sugar_free_64g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט וויט בטעם פירות ללא סוכר",
        image: importImage("orbit_white_fruit_sugar_free_64g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט בטעם אוכמניות ללא סוכר",
        image: importImage("orbit_blueberry_sugar_free_64g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק הובה בובה Hubba Bubba טייפ טריפל",
        image: importImage("hubba_bubba_triple_tape_56g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק הובה בובה Hubba Bubba טייפ בטעם פירות",
        image: importImage("hubba_bubba_fruit_tape_56g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק הובה בובה Hubba Bubba בטעם תות",
        image: importImage("hubba_bubba_strawberry_35g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק הובה בובה Hubba Bubba קלאסי",
        image: importImage("hubba_bubba_classic_35g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט ריפרשרס בטעם פירות ומנטה ללא סוכר",
        image: importImage("orbit_refreshers_fruit_mint_sugar_free_67g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט ריפרשרס בטעם מנטה ללא סוכר",
        image: importImage("orbit_refreshers_mint_sugar_free_67g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק אורביט ריפרשרס בטעם פירות טרופיים ללא סוכר",
        image: importImage("orbit_refreshers_tropical_fruit_sugar_free_67g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק בזוקה פופים ללא סוכר",
        image: importImage("bazooka_pops_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט בטעם פירות מנטה ללא סוכר",
        image: importImage("must_fruit_mint_sugar_free_66g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט חמוץ קוביות בטעם תפוח ירוק ללא סוכר",
        image: importImage("must_sour_green_apple_sugar_free_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט קוביות בטעם תות ללא סוכר",
        image: importImage("must_strawberry_sugar_free_58g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק מאסט קוביות חמוץ בטעם אננס ללא סוכר",
        image: importImage("must_sour_pineapple_sugar_free_60g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק פייב בטעם אבטיח ללא סוכר",
        image: importImage("five_watermelon_sugar_free_61.8g.jpeg"),
        id: 13,
    },
    {
        name: "מסטיק פייב בטעם מנטה ללא סוכר",
        image: importImage("five_mint_sugar_free_61.8g.jpeg"),
        id: 13,
    },
];

const initialSaltysnacks = [
    {
        name: "מארז חטיף אצות קלויות",
        image: importImage("master_chef_seaweed_snack_9packs.jpeg"),
        id: 13,
    },
    {
        name: "מארז ביסלי בטעם גריל",
        image: importImage("bisli_grill_pack_6x35g.jpeg"),
        id: 13,
    },
    {
        name: "מיקס ביסלי, אפרופו ופיצוחים מתובלים",
        image: importImage("mix_bisli_apropos_nuts_150g.jpeg"),
        id: 13,
    },
    {
        name: "ביסלי בטעם בצל",
        image: importImage("bisli_onion_70g.jpeg"),
        id: 13,
    },
    {
        name: "ביסלי בטעם ברביקיו",
        image: importImage("bisli_bbq_70g.jpeg"),
        id: 13,
    },
    {
        name: "ביסלי בטעם גריל",
        image: importImage("bisli_grill_70g.jpeg"),
        id: 13,
    },
    {
        name: "ביסלי בטעם פיצה",
        image: importImage("bisli_pizza_70g.jpeg"),
        id: 13,
    },
    {
        name: "ביסלי בטעם פלאפל",
        image: importImage("bisli_falafel_70g.jpeg"),
        id: 13,
    },      
    {
        name: "במבה",
        image: importImage("bamba_80g.jpeg"),
        id: 13,
    },
    {
        name: "מארז במבה",
        image: importImage("bamba_10pack_25g.jpeg"),
        id: 13,
    },
    {
        name: "במבה PRO מכיל 18 גרם חלבון בשקית",
        image: importImage("bamba_pro_80g.jpeg"),
        id: 13,
    },
    {
        name: "במבה במילוי קרם חלבה",
        image: importImage("bamba_halva_cream_60g.jpeg"),
        id: 13,
    },
    {
        name: "במבה במילוי קרם נוגט",
        image: importImage("bamba_nougat_cream_60g.jpeg"),
        id: 13,
    },
    {
        name: "במבה במילוי קרם בטעם וופל בלגי",
        image: importImage("bamba_waffle_cream_60g.jpeg"),
        id: 13,
    },
    {
        name: "במבה מתוקה בטעם תות",
        image: importImage("bamba_strawberry_30g.jpeg"),
        id: 13,
    },
    {
        name: "דובונים חטיף תפוח אדמה",
        image: importImage("dubonim_potato_snack_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פופקורן בטעם חמאה ודבש",
        image: importImage("popco_butter_honey_80g.jpeg"),
        id: 13,
    },
    {
        name: "פופקורן במבה - פופקורן בציפוי קרמל ובוטנים",
        image: importImage("popko_bamba_popcorn_caramel_peanut_80g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פופקורן בציפוי קרמל",
        image: importImage("werthers_caramel_popcorn_140g.jpeg"),
        id: 13,
    },
    {
        name: "פופקורן להכנה במיקרוגל בטעם חמאה",
        image: importImage("hot_pop_butter_6packs_600g.jpeg"),
        id: 13,
    },
    {
        name: "פופקורן להכנה במיקרוגל בטעם טבעי",
        image: importImage("hot_pop_natural_6packs_600g.jpeg"),
        id: 13,
    },
    {
        name: "פופקורן להכנה במיקרוגל בטעם טבעי מופחת שומן",
        image: importImage("hot_pop_natural_reduced_fat_6packs_510g.jpeg"),
        id: 13,
    },
    {
        name: "מארז אפרופו חטיף תירס",
        image: importImage("apropos_corn_snack_pack_5units_125g.jpeg"),
        id: 13,
    },
    {
        name: "אובלטים מלוחים דקיקים מלוח",
        image: importImage("oblatim_salty_thin_crackers_300g.jpeg"),
        id: 13,
    },
    {
        name: "אובלטים מלוחים דקיקים שומשום",
        image: importImage("oblatim_sesame_thin_crackers_300g.jpeg"),
        id: 13,
    },
    {
        name: "אפרופו איטלקי",
        image: importImage("aproppo_italian_50g.jpeg"),
        id: 13,
    },
    {
        name: "אפרופו חטיף תירס קלאסי",
        image: importImage("aproppo_classic_corn_snack_50g.jpeg"),
        id: 13,
    },
    {
        name: "דוריטוס בטעם גריל",
        image: importImage("doritos_grill_70g.jpeg"),
        id: 13,
    },
    {
        name: "דוריטוס בטעם חמוץ חריף",
        image: importImage("doritos_sour_spicy_70g.jpeg"),
        id: 13,
    },
    {
        name: "דוריטוס בטעם חריף אש",
        image: importImage("doritos_fire_spicy_70g.jpeg"),
        id: 13,
    },
    {
        name: "דוריטוס בטעם טבעי",
        image: importImage("doritos_natural_70g.jpeg"),
        id: 13,
    },      
    {
        name: "מארז חטיף צ'יטוס כאפה בטעם קטשופ",
        image: importImage("cheetos_ketchup_pack_10units_200g.jpeg"),
        id: 13,
    },
    {
        name: "מארז חטיפי צ'יטוס פאפס בטעם גבינה",
        image: importImage("cheetos_puffs_cheese_pack_10units_200g.jpeg"),
        id: 13,
    },
    {
        name: "מארז חטיף צ'יטוס קראנץ בטעם גבינה",
        image: importImage("cheetos_crunchy_cheese_8pack.jpeg"),
        id: 13,
    },
    {
        name: "צ'יטוס אפוי כאפה בטעם קטשופ",
        image: importImage("cheetos_ketchup_55g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף צ'יטוס פאפס אפוי בטעם גבינה",
        image: importImage("cheetos_puffs_cheese_55g.jpeg"),
        id: 13,
    },
    {
        name: "צ'יטוס קראנצ' בטעם גבינה - חלבי",
        image: importImage("cheetos_crunchy_cheese_80g.jpeg"),
        id: 13,
    },
    {
        name: "צ'יטוס קראנצ'י בטעם צ'דר חלפיניו - חלבי",
        image: importImage("cheetos_crunchy_cheddar_jalapeno_80g.jpeg"),
        id: 13,
    },
    {
        name: "מארז תפוצ'יפס קידס",
        image: importImage("chips_kids_10pack.jpeg"),
        id: 13,
    },
    {
        name: "מארז תפוצ'יפס בטעם טבעי",
        image: importImage("chips_natural_6pack.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס אורגינל",
        image: importImage("pringles_original_149g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס בטעם ברביקיו",
        image: importImage("pringles_bbq_158g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס בטעם מלח וחומץ",
        image: importImage("pringles_salt_vinegar_158g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס בטעם פיצה",
        image: importImage("pringles_pizza_158g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס ראנץ'",
        image: importImage("pringles_ranch_158g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פרינגלס בטעם שמנת חמוצה ובצל",
        image: importImage("pringles_sour_cream_onion_158g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס בטעם טבעי",
        image: importImage("tapuchips_natural_50g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס בטעם שמנת ובצל",
        image: importImage("tapuchips_sour_cream_onion_50g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס פופס אפוי",
        image: importImage("tapuchips_pops_baked_60g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס קראנצ' בטעם גריל",
        image: importImage("tapuchips_crunch_grill_50g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס קראנצ' בטעם טבעי",
        image: importImage("tapuchips_crunch_natural_50g.jpeg"),
        id: 13,
    },
    {
        name: "תפוצ'יפס קראנצ' בטעם מקסיקני",
        image: importImage("tapuchips_crunch_mexican_50g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס בטטה בטעם ברביקיו",
        image: importImage("terra_sweet_potato_bbq_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס בטטה וסלק בטעם טבעי",
        image: importImage("terra_sweet_potato_beet_natural_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס ירקות שורש עם מלח ים",
        image: importImage("terra_root_vegetables_sea_salt_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס ירקות שורש בתיבול ים תיכוני",
        image: importImage("terra_root_vegetables_mediterranean_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס ירקות שורש עם בטטה, תפו\"א כחול וסלק",
        image: importImage("terra_root_vegetables_blue_potato_sweet_potato_beet_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס תפוח אדמה כחול בטעם טבעי",
        image: importImage("terra_blue_potato_chips_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף טבעות קלאסי",
        image: importImage("poof_classic_rings_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף כוכבי בצל",
        image: importImage("poof_onion_stars_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף כוכבי גריל אמריקאי",
        image: importImage("poof_american_grill_stars_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף לבבות גריל",
        image: importImage("poof_grill_hearts_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף לבבות קלאסי",
        image: importImage("poof_classic_hearts_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף כוכבי שמנת בצל",
        image: importImage("poof_sour_cream_onion_stars_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף אפוי טבעות קטשופ",
        image: importImage("poof_ketchup_flavor_40g.jpeg"),
        id: 13,
    },
    {
        name: "פוף חטיף אפוי לבבות בטעם גבינה",
        image: importImage("poof_cheese_hearts_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף בטעם קטשופ",
        image: importImage("poof_ketchup_40g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף קראנצ'י בטעם חמוץ חריף",
        image: importImage("poof_sour_spicy_crunchy_60g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף פוף קראנצ'י בטעם טאקו",
        image: importImage("poof_taco_crunchy_60g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף כיפלי בטעם בצל",
        image: importImage("kifli_onion_70g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף כיפלי בטעם גריל",
        image: importImage("kifli_grill_70g.jpeg"),
        id: 13,
    },
    {
        name: "כיפלי צ'יפסים",
        image: importImage("kifli_chipsim_50g.jpeg"),
        id: 13,
    },
    {
        name: "כיפלי צ'יפסים קטשופ",
        image: importImage("kifli_chipsim_ketchup_50g.jpeg"),
        id: 13,
    },
    {
        name: "שלווה - חיטה תפוחה מתוקה",
        image: importImage("puffed_wheat_honey_coating_200g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף בננה מסוג פלנטיין",
        image: importImage("kiwa_plantain_chips_85g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף טורטייה צ'יפס מקמח תירס לבן ללא גלוטן",
        image: importImage("pata_white_corn_tortilla_chips_150g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף טורטייה צ'יפס מקמח תירס ללא גלוטן",
        image: importImage("pata_corn_tortilla_chips_200g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף על בסיס בטטה",
        image: importImage("terra_sweet_potato_snack_110g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף צ'יפס בטעם כמהין",
        image: importImage("rubio_truffle_chips_125g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף קראנצ'י עם מלח ים ופלפל פיטנס",
        image: importImage("nestle_fitness_crunchy_sea_salt_pepper_25g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף קראנצ'י עם עשבי תיבול פיטנס",
        image: importImage("nestle_fitness_crunchy_herbs_25g.jpeg"),
        id: 13,
    },
    {
        name: "חטיף קראנצ'י עם צ'ילי מעודן פיטנס",
        image: importImage("nestle_fitness_crunchy_mild_chili_25g.jpeg"),
        id: 13,
    },
    {
        name: "נאצ'וס בסגנון מסעדות",
        image: importImage("hot_pop_restaurant_style_nachos_322g.jpeg"),
        id: 13,
    },
    {
        name: "נאצ'וס בסגנון מקסיקני",
        image: importImage("hot_pop_mexican_style_nachos_322g.jpeg"),
        id: 13,
    },
    {
        name: "פיטנס חטיף קינואה קראנצ'י בטעם מלח ים ושמן זית",
        image: importImage("nestle_fitness_quinoa_crunchy_sea_salt_olive_oil_25g.jpeg"),
        id: 13,
    },   
];

const initialPretzels = [
    {
        name: "בייגלה שמיניות עם מלח",
        image: importImage("bagel_shminiyot_melach_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שטוחים כעכים שטוחים עם מלח",
        image: importImage("bagel_shtuchim_melach_300g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שטוחים כעכים שטוחים עם שומשום",
        image: importImage("bagel_shtuchim_shumshum_300g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה מקלות עם מלח",
        image: importImage("bagel_maklot_melach_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה טבעות עם שומשום",
        image: importImage("bagel_tabaot_shumshum_300g.jpeg"),
        id: 13,
    },
    {
        name: "טבעות בייגלה עם מלח",
        image: importImage("tabaot_bagel_melach_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שמיניות במליחות מעודנת",
        image: importImage("bagel_shminiyot_melach_mayod_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שטוח בתוספת חרדל ודבש",
        image: importImage("bagel_shtuch_mustard_honey_160g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה אפוי בטעם דבש ומלח ים",
        image: importImage("chocketa_bagel_dvash_melach_160g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה דקים בטעם שמנת ובצל",
        image: importImage("bagel_dakim_shamenet_batzal_300g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה ארוך ארוך - מקלות ארוכים עם מלח",
        image: importImage("bagel_aruch_melach_150g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שמיניות גדולות עם מלח",
        image: importImage("bagel_shminiyot_gdolot_melach_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שמיניות גדולות עם שומשום",
        image: importImage("bagel_shminiyot_gdolot_shumshum_400g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שמיניות גדולות ללא תוספת מלח",
        image: importImage("bagel_shminiyot_gdolot_no_melach_400g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות גריסיני קלאסי",
        image: importImage("grissini_classic_125g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות גריסיני עם שומשום",
        image: importImage("grissini_shumshum_125g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות גריסיני עם רוזמרין",
        image: importImage("grissini_rosemary_125g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות גריסיני בטעם פיצה",
        image: importImage("grissini_pizza_125g.jpeg"),
        id: 13,
    },
    {
        name: "מקלות אפויים בתוספת שמן זית",
        image: importImage("chocketa_salty_sticks_olive_oil_120g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה מצופה שוקולד חלב",
        image: importImage("flipz_chocolate_milk_140g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה מצופה שוקולד מריר",
        image: importImage("flipz_dark_chocolate_140g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה בציפוי קרם קרמל מלוח ושוקולד",
        image: importImage("flipz_salted_caramel_140g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה בציפוי פאדג' לבן",
        image: importImage("flipz_white_fudge_140g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה בציפוי קרם בטעם עוגיות ושוקולד חלב",
        image: importImage("flipz_cookies_cream_140g.jpeg"),
        id: 13,
    },
    {
        name: "סניידרס סנדביץ בייגלה במילוי קרם בטעם צ'דר",
        image: importImage("snyders_pretzel_cheddar_226g.jpeg"),
        id: 13,
    },
    {
        name: "שברי בייגלה סניידרס ממחמצת שאור בטעם צ'דר - חלבי",
        image: importImage("snyders_sourdough_cheddar_319g.jpeg"),
        id: 13,
    },
    {
        name: "סניידרס שברי בייגלה במילוי חמאת בוטנים",
        image: importImage("snyders_pretzel_peanutbutter_283g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה קשה מבצק שאור בסגנון אמריקאי",
        image: importImage("snyders_sourdough_382g.jpeg"),
        id: 13,
    },
    {
        name: "שברי בייגלה סניידרס בטעם פרמזן ושום - חלבי",
        image: importImage("snyders_parmesan_garlic_318g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה סניידרס בטעם פיקנטי Hot Buffalo Wing",
        image: importImage("snyders_buffalo_wing_319g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה סניידרס בטעם חלפיניו",
        image: importImage("snyders_jalapeno_318g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה אפוי בטעם בצל מקורמל",
        image: importImage("chocketa_pretzel_caramelized_onion_160g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה אפוי בטעם עגבניות ועשבי תיבול",
        image: importImage("chocketa_pretzel_tomato_herbs_180g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה בטעם ביסלי גריל",
        image: importImage("pretzel_bisli_grill_180g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שטוחים בציפוי קרם קרמל מלוח",
        image: importImage("osem_flat_pretzels_caramel_120g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה שטוחים חמוץ חריף",
        image: importImage("osem_flat_pretzels_spicy_300g.jpeg"),
        id: 13,
    },
    {
        name: "סניידרס שברי בייגלה בטעמי בצל, דבש וחרדל - חלבי",
        image: importImage("snyders_honey_mustard_onion_319g.jpeg"),
        id: 13,
    },
    {
        name: "פיטנס בייגלה כרובית",
        image: importImage("nestle_fitness_cauliflower_pretzels_150g.jpeg"),
        id: 13,
    },
    {
        name: "פיטנס מקלות בייגלה בטטה",
        image: importImage("nestle_fitness_sweet_potato_pretzels_150g.jpeg"),
        id: 13,
    },
    {
        name: "פיטנס מקלות בייגלה סלק",
        image: importImage("nestle_fitness_beetroot_pretzels_150g.jpeg"),
        id: 13,
    },
    {
        name: "בייגלה מקלות ללא גלוטן",
        image: importImage("roland_gluten_free_pretzel_sticks_100g.jpeg"),
        id: 13,
    },
];

const initialProteinbars = [
    {
        name: "חטיף Protein בוטנים ושבבי שוקולד",
        image: importImage("nature_valley_protein_peanuts_chocolate_4x40g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף Protein בוטנים עם ציפוי בטעם קרמל מלוח",
        image: importImage("nature_valley_protein_peanuts_salted_caramel_4x40g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם בוטנים קרמל",
        image: importImage("allin_protein_peanut_caramel_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם בננה טופי",
        image: importImage("allin_protein_banana_toffee_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם דאבל שוקולד",
        image: importImage("allin_protein_double_chocolate_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם ונילה קראנץ'",
        image: importImage("allin_protein_vanilla_crunch_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם קרם עוגיות",
        image: importImage("allin_protein_cookie_cream_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם שוקולד לבן עוגיות",
        image: importImage("allin_protein_white_chocolate_cookies_60g.jpeg"),
        id: 12,
    },
    {
        name: "אולאין חטיף חלבון בטעם שוקולד צ'יפ",
        image: importImage("allin_protein_chocolate_chip_100g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון GO בטעם בצק עוגיות וציפוי שוקולד לבן",
        image: importImage("tnuva_go_protein_cookie_dough_white_chocolate_20g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון GO בטעם שמנת ושוקולד ללא תוספת סוכר",
        image: importImage("tnuva_go_protein_cream_chocolate_sugar_free_60g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון GO עם אגוזי לוז וציפוי שוקולד חלב",
        image: importImage("tnuva_go_protein_hazelnut_milk_chocolate_20g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון GO עם בוטנים וציפוי שוקולד חלב",
        image: importImage("tnuva_go_protein_peanut_milk_chocolate_60g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון GO עם שקדים ומלח וציפוי שוקולד חלב",
        image: importImage("tnuva_go_protein_almond_salt_milk_chocolate_60g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון אקסטרה סופט בטעם שוקולד חלב קרמל",
        image: importImage("allin_extra_soft_milk_chocolate_caramel_55g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון סופט בטעם שוקולד לבן בוטנים קרמל",
        image: importImage("allin_soft_white_chocolate_peanut_caramel_55g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון פרו בטעם קרמל וציפוי שוקולד חלב אגוזי לוז",
        image: importImage("strauss_protein_caramel_hazelnut_milk_chocolate_60g.jpeg"),
        id: 12,
    },
    {
        name: "חטיף חלבון פרו עם עוגיות קקאו וציפוי בטעם שוקולד לבן",
        image: importImage("strauss_protein_cookies_cocoa_white_chocolate_90g.jpeg"),
        id: 12,
    },
];

initialCereals.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialCerealsnacks.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialSweetspreads.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialChocolatetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialChocolatebars.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialBonbonnieres.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialCandiesmarshmallows.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialGum.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialSaltysnacks.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialPretzels.sort((a, b) => a.name.localeCompare(b.name, 'he'));
initialProteinbars.sort((a, b) => a.name.localeCompare(b.name, 'he'));



const [cereals, setCereals] = useState<{ name: string; image: any; count: number }[]>(
    initialCereals.map(cereals => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cereals.name);
    return {
      ...cereals,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cerealsnacks, setCerealsnacks] = useState<{ name: string; image: any; count: number }[]>(
    initialCerealsnacks.map(cerealsnacks => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cerealsnacks.name);
    return {
      ...cerealsnacks,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [sweetspreads, setSweetspreads] = useState<{ name: string; image: any; count: number }[]>(
    initialSweetspreads.map(sweetspreads => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === sweetspreads.name);
    return {
      ...sweetspreads,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [chocolatetables, setChocolatetables] = useState<{ name: string; image: any; count: number }[]>(
    initialChocolatetables.map(chocolatetables => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === chocolatetables.name);
    return {
      ...chocolatetables,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [chocolatebars, setChocolatebars] = useState<{ name: string; image: any; count: number }[]>(
    initialChocolatebars.map(chocolatebars => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === chocolatebars.name);
    return {
      ...chocolatebars,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bonbonnieres, setBonbonnieres] = useState<{ name: string; image: any; count: number }[]>(
    initialBonbonnieres.map(bonbonnieres => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === bonbonnieres.name);
    return {
      ...bonbonnieres,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [candiesmarshmallows, setCandiesmarshmallows] = useState<{ name: string; image: any; count: number }[]>(
    initialCandiesmarshmallows.map(candiesmarshmallows => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === candiesmarshmallows.name);
    return {
      ...candiesmarshmallows,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [gum, setGum] = useState<{ name: string; image: any; count: number }[]>(
    initialGum.map(gum => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === gum.name);
    return {
      ...gum,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [saltysnacks, setSaltysnacks] = useState<{ name: string; image: any; count: number }[]>(
    initialSaltysnacks.map(saltysnacks => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === saltysnacks.name);
    return {
      ...saltysnacks,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [pretzels, setPretzels] = useState<{ name: string; image: any; count: number }[]>(
    initialPretzels.map(pretzels => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === pretzels.name);
    return {
      ...pretzels,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [proteinbars, setProteinbars] = useState<{ name: string; image: any; count: number }[]>(
    initialProteinbars.map(proteinbars => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === proteinbars.name);
    return {
      ...proteinbars,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

useEffect(() => {
    handleSave();
},[cereals, cerealsnacks, sweetspreads, chocolatetables, chocolatebars, bonbonnieres, candiesmarshmallows, gum, saltysnacks, pretzels, proteinbars]);

const handleIncrement = (name: string) => {
setCereals(cereals.map(cereals =>
        cereals.name === name ? { ...cereals, count: cereals.count + 1 } : cereals
));
setCerealsnacks(cerealsnacks.map(cerealsnacks =>
    cerealsnacks.name === name ? { ...cerealsnacks, count: cerealsnacks.count + 1 } : cerealsnacks
));
setSweetspreads(sweetspreads.map(sweetspreads =>
    sweetspreads.name === name ? { ...sweetspreads, count: sweetspreads.count + 1 } : sweetspreads
));
setChocolatetables(chocolatetables.map(chocolatetables =>
    chocolatetables.name === name ? { ...chocolatetables, count: chocolatetables.count + 1 } : chocolatetables
));
setChocolatebars(chocolatebars.map(chocolatebars =>
    chocolatebars.name === name ? { ...chocolatebars, count: chocolatebars.count + 1 } : chocolatebars
));
setBonbonnieres(bonbonnieres.map(bonbonnieres =>
    bonbonnieres.name === name ? { ...bonbonnieres, count: bonbonnieres.count + 1 } : bonbonnieres
));
setCandiesmarshmallows(candiesmarshmallows.map(candiesmarshmallows =>
    candiesmarshmallows.name === name ? { ...candiesmarshmallows, count: candiesmarshmallows.count + 1 } : candiesmarshmallows
));
setGum(gum.map(gum =>
    gum.name === name ? { ...gum, count: gum.count + 1 } : gum
));
setSaltysnacks(saltysnacks.map(saltysnacks =>
    saltysnacks.name === name ? { ...saltysnacks, count: saltysnacks.count + 1 } : saltysnacks
));
setPretzels(pretzels.map(pretzels =>
    pretzels.name === name ? { ...pretzels, count: pretzels.count + 1 } : pretzels
));
setProteinbars(proteinbars.map(proteinbars =>
    proteinbars.name === name ? { ...proteinbars, count: proteinbars.count + 1 } : proteinbars
));
};


const handleDecrement = (name: string) => {
    setCereals(cereals.map(cereal => {
      if (cereal.name === name && cereal.count > 0) {
        const newCount = cereal.count - 1;
        if (newCount === 0) {
          removeProduct(cereal.name);
        }
        return { ...cereal, count: newCount };
      }
      return cereal;
    }));
  
    setCerealsnacks(cerealsnacks.map(cerealSnack => {
      if (cerealSnack.name === name && cerealSnack.count > 0) {
        const newCount = cerealSnack.count - 1;
        if (newCount === 0) {
          removeProduct(cerealSnack.name);
        }
        return { ...cerealSnack, count: newCount };
      }
      return cerealSnack;
    }));
  
    setSweetspreads(sweetspreads.map(sweetspread => {
      if (sweetspread.name === name && sweetspread.count > 0) {
        const newCount = sweetspread.count - 1;
        if (newCount === 0) {
          removeProduct(sweetspread.name);
        }
        return { ...sweetspread, count: newCount };
      }
      return sweetspread;
    }));
  
    setChocolatetables(chocolatetables.map(chocolateTable => {
      if (chocolateTable.name === name && chocolateTable.count > 0) {
        const newCount = chocolateTable.count - 1;
        if (newCount === 0) {
          removeProduct(chocolateTable.name);
        }
        return { ...chocolateTable, count: newCount };
      }
      return chocolateTable;
    }));
  
    setChocolatebars(chocolatebars.map(chocolateBar => {
      if (chocolateBar.name === name && chocolateBar.count > 0) {
        const newCount = chocolateBar.count - 1;
        if (newCount === 0) {
          removeProduct(chocolateBar.name);
        }
        return { ...chocolateBar, count: newCount };
      }
      return chocolateBar;
    }));
  
    setBonbonnieres(bonbonnieres.map(bonbonniere => {
      if (bonbonniere.name === name && bonbonniere.count > 0) {
        const newCount = bonbonniere.count - 1;
        if (newCount === 0) {
          removeProduct(bonbonniere.name);
        }
        return { ...bonbonniere, count: newCount };
      }
      return bonbonniere;
    }));
  
    setCandiesmarshmallows(candiesmarshmallows.map(candiesmarshmallow => {
      if (candiesmarshmallow.name === name && candiesmarshmallow.count > 0) {
        const newCount = candiesmarshmallow.count - 1;
        if (newCount === 0) {
          removeProduct(candiesmarshmallow.name);
        }
        return { ...candiesmarshmallow, count: newCount };
      }
      return candiesmarshmallow;
    }));
  
    setGum(gum.map(g => {
      if (g.name === name && g.count > 0) {
        const newCount = g.count - 1;
        if (newCount === 0) {
          removeProduct(g.name);
        }
        return { ...g, count: newCount };
      }
      return g;
    }));
  
    setSaltysnacks(saltysnacks.map(saltySnack => {
      if (saltySnack.name === name && saltySnack.count > 0) {
        const newCount = saltySnack.count - 1;
        if (newCount === 0) {
          removeProduct(saltySnack.name);
        }
        return { ...saltySnack, count: newCount };
      }
      return saltySnack;
    }));
  
    setPretzels(pretzels.map(pretzel => {
      if (pretzel.name === name && pretzel.count > 0) {
        const newCount = pretzel.count - 1;
        if (newCount === 0) {
          removeProduct(pretzel.name);
        }
        return { ...pretzel, count: newCount };
      }
      return pretzel;
    }));
  
    setProteinbars(proteinbars.map(proteinBar => {
      if (proteinBar.name === name && proteinBar.count > 0) {
        const newCount = proteinBar.count - 1;
        if (newCount === 0) {
          removeProduct(proteinBar.name);
        }
        return { ...proteinBar, count: newCount };
      }
      return proteinBar;
    }));
  };
  

const handleSave = async () => {
 const cerealsToSave = cereals.filter(cereals => cereals.count > 0).map(cereals => ({ ...cereals, quantity: cereals.count }));
 const cerealsnacksToSave = cerealsnacks.filter(cerealsnacks => cerealsnacks.count > 0).map(cerealsnacks => ({ ...cerealsnacks, quantity: cerealsnacks.count }));
 const sweetspreadsToSave = sweetspreads.filter(sweetspreads => sweetspreads.count > 0).map(sweetspreads => ({ ...sweetspreads, quantity: sweetspreads.count }));
 const chocolatetablesToSave = chocolatetables.filter(chocolatetables => chocolatetables.count > 0).map(chocolatetables => ({ ...chocolatetables, quantity: chocolatetables.count }));
 const chocolatebarsToSave = chocolatebars.filter(chocolatebars => chocolatebars.count > 0).map(chocolatebars => ({ ...chocolatebars, quantity: chocolatebars.count }));
 const bonbonnieresToSave = bonbonnieres.filter(bonbonnieres => bonbonnieres.count > 0).map(bonbonnieres => ({ ...bonbonnieres, quantity: bonbonnieres.count }));
 const candiesmarshmallowsToSave = candiesmarshmallows.filter(candiesmarshmallows => candiesmarshmallows.count > 0).map(candiesmarshmallows => ({ ...candiesmarshmallows, quantity: candiesmarshmallows.count }));
 const gumToSave = gum.filter(gum => gum.count > 0).map(gum => ({ ...gum, quantity: gum.count }));
 const saltysnacksToSave = saltysnacks.filter(saltysnacks => saltysnacks.count > 0).map(saltysnacks => ({ ...saltysnacks, quantity: saltysnacks.count }));
 const pretzelsToSave = pretzels.filter(pretzels => pretzels.count > 0).map(pretzels => ({ ...pretzels, quantity: pretzels.count }));
 const proteinbarsToSave = proteinbars.filter(proteinbars => proteinbars.count > 0).map(proteinbars => ({ ...proteinbars, quantity: proteinbars.count }));



  const allSweet = [...cerealsToSave,...cerealsnacksToSave,...sweetspreadsToSave,...chocolatetablesToSave,...chocolatebarsToSave,...bonbonnieresToSave,...candiesmarshmallowsToSave,...gumToSave,...saltysnacksToSave,...pretzelsToSave,...proteinbarsToSave];
  allSweet.forEach(Sweet => addProduct(Sweet));

};

const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

const filterCereals = cereals.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterCerealsnacks = cerealsnacks.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterSweetspreads = sweetspreads.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterChocolatetables = chocolatetables.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterChocolatebars = chocolatebars.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterBonbonnieres = bonbonnieres.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterCandiesmarshmallows = candiesmarshmallows.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterGum = gum.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterSaltysnacks = saltysnacks.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterPretzels = pretzels.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterProteinbars = proteinbars.filter(product =>
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
        placeholder="חפש מוצר מתוקים\חטיפים"
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
    </div>   {filterCereals.length > 0 && (
  <div>
    <ProductsPage
      products={filterCereals}
      categoryTitle="דגני בוקר"
      icon={<img alt="" src={importImage('cereals_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterCerealsnacks.length > 0 && (
  <div>
    <ProductsPage
      products={filterCerealsnacks}
      categoryTitle="חטיפי דגנים"
      icon={<img alt="" src={importImage('cerealsnacks_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterSweetspreads.length > 0 && (
  <div>
    <ProductsPage
      products={filterSweetspreads}
      categoryTitle="ממרחים מתוקים"
      icon={<img alt="" src={importImage('sweetspreads_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterChocolatetables.length > 0 && (
  <div>
    <ProductsPage
      products={filterChocolatetables}
      categoryTitle="טבלאות שוקולד"
      icon={<img alt="" src={importImage('chocolatetables_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterChocolatebars.length > 0 && (
  <div>
    <ProductsPage
      products={filterChocolatebars}
      categoryTitle="חטיפי שוקולד"
      icon={<img alt="" src={importImage('chocolatebars_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterBonbonnieres.length > 0 && (
  <div>
    <ProductsPage
      products={filterBonbonnieres}
      categoryTitle="בונבוניירות"
      icon={<img alt="" src={importImage('bonbonnieres_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterCandiesmarshmallows.length > 0 && (
  <div>
    <ProductsPage
      products={filterCandiesmarshmallows}
      categoryTitle="סוכריות ומרשמלו"
      icon={<img alt="" src={importImage('candiesmarshmallows_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterGum.length > 0 && (
  <div>
    <ProductsPage
      products={filterGum}
      categoryTitle="מסטיקים"
      icon={<img alt="" src={importImage('gum_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterSaltysnacks.length > 0 && (
  <div>
    <ProductsPage
      products={filterSaltysnacks}
      categoryTitle="חטיפים מלוחים"
      icon={<img alt="" src={importImage('saltysnacks_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterPretzels.length > 0 && (
  <div>
    <ProductsPage
      products={filterPretzels}
      categoryTitle="בייגלה"
      icon={<img alt="" src={importImage('pretzels_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterProteinbars.length > 0 && (
  <div>
    <ProductsPage
      products={filterProteinbars}
      categoryTitle="חטיפי חלבון"
      icon={<img alt="" src={importImage('proteinbars_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}


  </div>
  );
}
export default Sweet_Page;