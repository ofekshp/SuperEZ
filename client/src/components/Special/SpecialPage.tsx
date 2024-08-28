import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Special/${imageName}`);
  } catch (error) {
    return null;
  }
};

const SpecialPage: React.FC = () => {
  const { addProduct , removeProduct } = useBasket(); 
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');
 

  const initialOrganic = [
    {
      name: "שמן קנולה אורגני בכבישה קרה",
      image: importImage("organic_cold_pressed_canola_oil_1l_naturfood.jpeg"),
      id: 7,
    },
    {
      name: "חומץ תפוחים אורגני",
      image: importImage("organic_apple_cider_vinegar_750ml_naturfood.jpeg"),
      id: 7,
    },
    {
      name: "סירופ מייפל אורגני 100% טהור",
      image: importImage("organic_pure_maple_syrup_946ml_bernard.jpeg"),
      id: 7,
    },
    {
      name: "אדממה אורגני - פולי סויה בתרמילים מוקפאים",
      image: importImage("organic_edamame_400g_live.jpeg"),
      id: 7,
    },
    {
      name: "רסק תפוחים ומנגו אורגני ללא תוספת סוכר",
      image: importImage("organic_applesauce_mango_no_sugar_700g_naturfood.jpeg"),
      id: 7,
    },
    {
      name: "מיץ תפוחים אורגני 100% טבעי",
      image: importImage("organic_apple_juice_1l_naturfood.jpeg"),
      id: 7,
    },
    {
      name: "גרעיני דלעת קלופים אורגניים",
      image: importImage("organic_shelled_pumpkin_seeds_300g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "קמח כוסמין מלא אורגני",
      image: importImage("organic_whole_spelt_flour_1kg_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "פסטה פוזילי אורגנית מחיטת דורום מלאה",
      image: importImage("organic_whole_durum_fusilli_pasta_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "ספגטי אורגני מחיטת דורום",
      image: importImage("organic_durum_spaghetti_pasta_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "פתיתי בירה",
      image: importImage("beer_flakes_200g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "ספגטי מקמח כוסמין מלא אורגני",
      image: importImage("organic_whole_spelt_spaghetti_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "פנה פסטה מקמח כוסמין מלא אורגני",
      image: importImage("organic_whole_spelt_penne_pasta_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "פסטה פוזילי מקמח כוסמין מלא אורגני",
      image: importImage("organic_whole_spelt_fusilli_pasta_250g_alb_gold.jpeg"),
      id: 7,
    },
    {
      name: "אורז בסמתי מלא אורגני",
      image: importImage("organic_brown_basmati_rice_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "אורז עגול מלא אורגני",
      image: importImage("organic_round_brown_rice_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "אורז בסמתי לבן אורגני",
      image: importImage("organic_white_basmati_rice_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "עדשים צהובות אורגני",
      image: importImage("organic_yellow_lentils_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "עדשים אדומות אורגניות",
      image: importImage("organic_red_lentils_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "עדשים שחורות אורגניות",
      image: importImage("organic_black_lentils_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "בורגול אורגני",
      image: importImage("organic_bulgur_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "קוסקוס מלא אורגני",
      image: importImage("organic_whole_couscous_350g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "גרגרי חומוס אורגני",
      image: importImage("organic_chickpeas_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "שעועית אזוקי אורגני",
      image: importImage("organic_adzuki_beans_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "שעועית מש אורגנית",
      image: importImage("organic_mung_beans_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "שעועית אדומה אורגנית",
      image: importImage("organic_red_beans_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "שעועית שחורה אורגנית",
      image: importImage("organic_black_beans_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "מג'דרה קינואה אורגנית",
      image: importImage("organic_quinoa_mujadara_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "מג'דרה אורגנית",
      image: importImage("organic_mujadara_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "קינואה רויאל אורגנית",
      image: importImage("organic_royal_quinoa_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "קינואה אדומה אורגנית",
      image: importImage("organic_red_quinoa_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "סובין שיבולת שועל אורגנית",
      image: importImage("organic_oat_bran_400g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "סובין חיטה",
      image: importImage("wheat_bran_200g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "אמרנט אורגני",
      image: importImage("organic_amaranth_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "פשתן טחון אורגני",
      image: importImage("organic_ground_flaxseed_350g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "תערובת קטניות אורגנית למרק",
      image: importImage("organic_legume_mix_soup_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "קוואקר אורגני",
      image: importImage("organic_oatmeal_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "קוואקר עבה אורגני",
      image: importImage("organic_thick_oatmeal_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "קוואקר דק אורגני",
      image: importImage("organic_thin_oatmeal_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "גריסי פנינה אורגני",
      image: importImage("organic_pearl_barley_500g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "זרעי צ'יה אורגניים",
      image: importImage("organic_chia_seeds_300g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "אטריות רחבות כוסמין וביצים אורגניות",
      image: importImage("organic_spelt_egg_noodles_wide_250g_alb_gold.jpeg"),
      id: 7,
    },
    {
      name: "אטריות כוסמין וביצים אורגניות למרק",
      image: importImage("organic_spelt_egg_noodles_soup_250g_alb_gold.jpeg"),
      id: 7,
    },
    {
      name: "סוכר קנים חום אורגני",
      image: importImage("organic_brown_cane_sugar_1kg_hassade_organi_products.jpeg"),
      id: 7,
    },
    {
      name: "סוכר קוקוס אורגני",
      image: importImage("organic_coconut_sugar_300g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "סוכר פירות",
      image: importImage("fruit_sugar_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "סוכר ענבים",
      image: importImage("grape_sugar_500g_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "סוכר דמררה אורגני",
      image: importImage("organic_demerara_sugar_1kg_tevuot.jpeg"),
      id: 7,
    },
    {
      name: "שמן קוקוס אורגני",
      image: importImage("organic_coconut_oil_300ml_green_coco.jpeg"),
      id: 7,
    },
    {
      name: "פתי בר אורגני ביסקוויט מקמח מלא וחרובים",
      image: importImage("organic_whole_wheat_carob_biscuits_200g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "ביסקוויט פתי בר כוסמין אורגני",
      image: importImage("organic_spelt_biscuits_200g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "פתיבר אורגני מקמח מלא",
      image: importImage("organic_whole_wheat_biscuits_200g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "פריכיות אורז מלא ללא תוספת מלח",
      image: importImage("organic_brown_rice_cakes_no_salt_100g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "פריכיות אורז מלא דקות אורגני",
      image: importImage("organic_thin_brown_rice_cakes_100g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "טחינה משומשום מלא אורגני",
      image: importImage("organic_whole_sesame_tahini_500g_lib_organic.jpeg"),
      id: 7,
    },
    {
      name: "טחינה אורגנית",
      image: importImage("organic_tahini_500g_lib_organic.jpeg"),
      id: 7,
    },
    {
      name: "מקלות בייגלה מקמח חיטה מלא אורגני בתוספת מלח",
      image: importImage("organic_whole_wheat_pretzel_sticks_with_salt_200g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "בייגלה כוסמין אורגני עם שומשום ומלח",
      image: importImage("organic_spelt_pretzel_sesame_salt_200g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "מקלות בייגלה מקמח כוסמין מלא אורגני",
      image: importImage("organic_spelt_pretzel_sticks_350g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "אובלטים כוסמין אורגניים בתוספת שומשום",
      image: importImage("organic_spelt_sesame_oblatens_100g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "חרדל גרגרים אמיתי אורגני",
      image: importImage("organic_real_grain_mustard_200g_naturofood.jpeg"),
      id: 7,
    },
    {
      name: "מיונז אמיתי אורגני",
      image: importImage("organic_real_mayonnaise_340g_naturofood.jpeg"),
      id: 7,
    },
    {
      name: "מעדן פירות יער אורגני",
      image: importImage("organic_berry_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מעדן משמש אורגני",
      image: importImage("organic_apricot_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מעדן דומדמניות שחורות אורגני",
      image: importImage("organic_blackcurrant_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מעדן דובדבנים אורגני",
      image: importImage("organic_cherry_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מעדן אפרסק אורגני",
      image: importImage("organic_peach_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מעדן אוכמניות אורגני",
      image: importImage("organic_blueberry_delight_250g_rigoni_di_asiago.jpeg"),
      id: 7,
    },
    {
      name: "מחית תפוח שזיף אורגני",
      image: importImage("organic_apple_plum_puree_200g_naturo_nova.jpeg"),
      id: 7,
    },
    {
      name: "מחית תפוח משמש אורגני",
      image: importImage("organic_apple_apricot_puree_200g_naturo_nova.jpeg"),
      id: 7,
    },
    {
      name: "רסק תפוחים אורגני",
      image: importImage("organic_apple_puree_700g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "סירופ אגבה כחולה אורגני",
      image: importImage("organic_blue_agave_syrup_330g_dulsweet.jpeg"),
      id: 7,
    },
    {
      name: "גרעיני חמניה קלופים אורגני",
      image: importImage("organic_shelled_sunflower_seeds_300g_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "פלפל שחור אורגני",
      image: importImage("organic_black_pepper_50g_cannamela.jpeg"),
      id: 7,
    },
    {
      name: "קארי טחון אורגני",
      image: importImage("organic_ground_curry_14g_cannamela.jpeg"),
      id: 7,
    },
    {
      name: "צ'ילי טחון אורגני",
      image: importImage("organic_ground_chili_50g_dagesh_gan_shmuel_stand.jpeg"),
      id: 7,
    },
    {
      name: "אורגנו אורגני",
      image: importImage("organic_oregano_14g_cannamela.jpeg"),
      id: 7,
    },
    {
      name: "אובלטים אורגניים מקמח עדשים כתומות ושומשום",
      image: importImage("organic_red_lentil_sesame_oblatens_100g_hassade_organic_products.jpeg"),
      id: 7,
    },
    {
      name: "מלפפון כבוש אורגני",
      image: importImage("organic_pickled_cucumber_670g_naturofood.jpeg"),
      id: 7,
    },
    {
      name: "קמח שיבולת שועל מלאה אורגני ללא גלוטן",
      image: importImage("organic_whole_oat_flour_gluten_free_500g_nutra_zen.jpeg"),
      id: 7,
    },
    {
      name: "משקה סויה אורגני ללא תוספת סוכר ללא גלוטן",
      image: importImage("organic_soy_drink_no_sugar_1L_haraduf.jpeg"),
      id: 7,
    },
    {
      name: "משקה שקדים אורגני ללא תוספת סוכר ללא גלוטן",
      image: importImage("organic_almond_drink_no_sugar_1L_haraduf.jpeg"),
      id: 7,
    },  
  ];  

  const initialGlutenfree = [
    {
      name: "קמח תירס",
      image: importImage("instant_cornmeal_willifood_500g.jpeg"),
      id: 7,
    },
    {
      name: "פסטה פוזילי ללא גלוטן",
      image: importImage("fusilli_gluten_free_barilla_400g.jpeg"),
      id: 7,
    },
    {
      name: "לזניה ללא גלוטן",
      image: importImage("lasagna_gluten_free_barilla_250g.jpeg"),
      id: 7,
    },
    {
      name: "פסטה פנה ללא גלוטן",
      image: importImage("penne_gluten_free_barilla_400g.jpeg"),
      id: 7,
    },
    {
      name: "ספגטי ללא גלוטן",
      image: importImage("spaghetti_no5_gluten_free_barilla_400g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים ואגוזי לוז",
      image: importImage("date_hazelnut_bar_free_125g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים וקוקוס",
      image: importImage("date_coconut_bar_free_125g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים, אגוזים ושברי קקאו",
      image: importImage("date_nuts_cocoa_bar_free_125g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים, קשיו ונגיעת לוז",
      image: importImage("date_cashew_hazelnut_bar_free_125g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף דגנים ללא גלוטן שוקולד חלב",
      image: importImage("multigrain_chocolate_bar_gluten_free_slimdelis_78g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף בוטנים ושקדים שוקולד מריר ופיסטוק",
      image: importImage("peanut_almond_dark_chocolate_pistachio_bar_free_140g.jpeg"),
      id: 7,
    },
    {
      name: "מארז שוקולד מריר",
      image: importImage("dark_chocolate_trio_60_chocketa_3x100g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף על בסיס תפוח אדמה כחול טעם טבעי",
      image: importImage("blue_potato_snack_terra_110g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף טורטייה צ'יפס קמח תירס לבן ללא גלוטן",
      image: importImage("white_corn_tortilla_chips_gluten_free_pata_150g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף טורטייה צ'יפס קמח תירס ללא גלוטן",
      image: importImage("corn_tortilla_chips_gluten_free_pata_200g.jpeg"),
      id: 7,
    },
    {
      name: "ספגטי כוסמת אורגנית ללא גלוטן",
      image: importImage("buckwheat_spaghetti_gluten_free_organic_sade_250g.jpeg"),
      id: 7,
    },
    {
      name: "ספגטי עדשים אדומות אורגניות ללא גלוטן",
      image: importImage("red_lentil_spaghetti_gluten_free_organic_sade_250g.jpeg"),
      id: 7,
    },
    {
      name: "פסטה פוזילי אפונה ירוקה אורגנית ללא גלוטן",
      image: importImage("green_pea_fusilli_gluten_free_organic_sade_250g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף בוטנים אורגני ללא גלוטן",
      image: importImage("cheeky_monkey_peanut_snack_gluten_free_organic_20g.jpeg"),
      id: 7,
    },
    {
      name: "בייגלה מקלות ללא גלוטן",
      image: importImage("gluten_free_pretzel_sticks_roland_100g.jpeg"),
      id: 7,
    },
    {
      name: "פתיבר קלאסי ללא גלוטן",
      image: importImage("classic_petit_beurre_gluten_free_osem_200g.jpeg"),
      id: 7,
    },
    {
      name: "פתיבר שוקו ללא גלוטן",
      image: importImage("chocolate_petit_beurre_gluten_free_osem_200g.jpeg"),
      id: 7,
    },
    {
      name: "פצפוצי אורז מלא תפוח ללא גלוטן",
      image: importImage("puffed_whole_rice_crisps_gluten_free_dagesh_450g.jpeg"),
      id: 7,
    },
    {
      name: "קרקרים עגולים ללא גלוטן",
      image: importImage("round_gluten_free_crackers_schar_175g.jpeg"),
      id: 7,
    },
    {
      name: "קרקרים מלבנים ללא גלוטן",
      image: importImage("rectangular_gluten_free_crackers_schar_210g.jpeg"),
      id: 7,
    },
    {
      name: "לחמית ללא גלוטן",
      image: importImage("gluten_free_lachmit_osem_200g.jpeg"),
      id: 7,
    },
    {
      name: "כדורי שוקולד ללא גלוטן",
      image: importImage("gluten_free_chocolate_balls_green_lite_400g.jpeg"),
      id: 7,
    },
    {
      name: "בייגלה שמיניות ללא גלוטן",
      image: importImage("gluten_free_pretzel_loops_osem_250g.jpeg"),
      id: 7,
    },
    {
      name: "פריכיות תירס טעם טבעי ללא גלוטן",
      image: importImage("gluten_free_natural_corn_crackers_realfoods_150g.jpeg"),
      id: 7,
    },
    {
      name: "פריכיות תירס סויה וזרעי פשתן ללא גלוטן",
      image: importImage("gluten_free_soy_flax_corn_crackers_realfoods_150g.jpeg"),
      id: 7,
    },
    {
      name: "פריכיות תירס שומשום ללא גלוטן",
      image: importImage("gluten_free_sesame_corn_crackers_realfoods_125g.jpeg"),
      id: 7,
    },
    {
      name: "קמח סויה ללא גלוטן",
      image: importImage("gluten_free_soy_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח רב תכליתי ללא גלוטן",
      image: importImage("gluten_free_all_purpose_flour_kargil_450g.jpeg"),
      id: 7,
    },
    {
      name: "קמח אורז ללא גלוטן",
      image: importImage("gluten_free_rice_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח אורז מלא ללא גלוטן",
      image: importImage("gluten_free_brown_rice_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח קינואה ללא גלוטן",
      image: importImage("gluten_free_quinoa_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח תפוח אדמה ללא גלוטן",
      image: importImage("gluten_free_potato_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח טפיוקה ללא גלוטן",
      image: importImage("gluten_free_tapioca_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח כוסמת ללא גלוטן",
      image: importImage("gluten_free_buckwheat_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח חומוס ללא גלוטן",
      image: importImage("gluten_free_chickpea_flour_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח תופח ללא גלוטן",
      image: importImage("gluten_free_self_raising_flour_gfree_500g.jpeg"),
      id: 7,
    },
    {
      name: "קמח שקדים",
      image: importImage("almond_flour_dagesh_250g.jpeg"),
      id: 7,
    },
    {
      name: "קמח שיבולת שועל מלאה ללא גלוטן",
      image: importImage("gluten_free_organic_whole_oat_flour_nutragen_500g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת עוגת שוקולד ללא גלוטן",
      image: importImage("chocolate_cake_mix_tami_450g.jpeg"),
      id: 7,
    },
    {
      name: "פסטה תירס ללא גלוטן",
      image: importImage("gluten_free_corn_rigottini_la_venezian_250g.jpeg"),
      id: 7,
    },
    {
      name: "אטריות קונג'אק",
      image: importImage("konjac_tapioca_noodles_skinny_pasta_270g.jpeg"),
      id: 7,
    },
    {
      name: "לחם כפרי ללא תוספת סוכר ללא גלוטן",
      image: importImage("gluten_free_rustic_bread_no_sugar_green_lite_700g.jpeg"),
      id: 7,
    },
    {
      name: "לחם לבן ללא גלוטן",
      image: importImage("gluten_free_white_bread_green_lite_500g.jpeg"),
      id: 7,
    },
    {
      name: "לחם פשתן ללא גלוטן",
      image: importImage("gluten_free_flax_bread_green_lite_500g.jpeg"),
      id: 7,
    },
    {
      name: "לחם איטלקי ללא גלוטן",
      image: importImage("gluten_free_italian_bread_green_lite_500g.jpeg"),
      id: 7,
    },
    {
      name: "לחמניות ללא גלוטן",
      image: importImage("gluten_free_sandwich_buns_4pack_green_lite_460g.jpeg"),
      id: 7,
    },
    {
      name: "פיתות ללא גלוטן",
      image: importImage("gluten_free_pitas_5pack_barili_420g.jpeg"),
      id: 7,
    },
    {
      name: "שיבולת שועל ללא גלוטן",
      image: importImage("gluten_free_quick_oats_quaker_511g.jpeg"),
      id: 7,
    },
    {
      name: "קוואקר עבה ללא גלוטן",
      image: importImage("gluten_free_thick_oats_nutrazan_400g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת מאפים ללא גלוטן",
      image: importImage("gluten_free_baking_mix_gfree_500g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת כדורי פלאפל ללא גלוטן",
      image: importImage("gluten_free_falafel_mix_tami_300g.jpeg"),
      id: 7,
    },
    {
      name: "גרנולה ללא תוספת סוכר ללא גלוטן",
      image: importImage("gluten_free_no_sugar_granola_dagesh_250g.jpeg"),
      id: 7,
    },
    {
      name: "פצפוצי אורז לבן תפוח ללא גלוטן",
      image: importImage("gluten_free_puffed_white_rice_dagesh_450g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת עוגה טעם וניל ללא גלוטן",
      image: importImage("gluten_free_vanilla_cake_mix_kargil_450g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת פנקייק ללא גלוטן",
      image: importImage("gluten_free_pancake_mix_gfree_400g.jpeg"),
      id: 7,
    },
    {
      name: "אבקת מרק טעם עוף ללא גלוטן",
      image: importImage("gluten_free_chicken_flavored_soup_powder_dagesh_500g.jpeg"),
      id: 7,
    },
    {
      name: "שקדי מרק ללא גלוטן ללא תוספת סוכר",
      image: importImage("gluten_free_no_sugar_soup_croutons_dagesh_200g.jpeg"),
      id: 7,
    },
    {
      name: "רוטב סויה ללא גלוטן",
      image: importImage("gluten_free_soy_sauce_kikkoman_250ml.jpeg"),
      id: 7,
    },
    {
      name: "בורקס גבינה ללא גלוטן",
      image: importImage("gluten_free_cheese_bourekas_frozen_ariel_500g.jpeg"),
      id: 7,
    },
    {
      name: "בורקס תפו״א ללא גלוטן",
      image: importImage("gluten_free_potato_bourekas_frozen_ariel_500g.jpeg"),
      id: 7,
    },
    {
      name: "מארז מקופלת ללא גלוטן",
      image: importImage("gluten_free_mini_mekupelet_elite_400g.jpeg"),
      id: 7,
    },
    {
      name: "מרשמלו טבעוני טעם וניל",
      image: importImage("vegan_mini_marshmallow_vanilla_vega_283g.jpeg"),
      id: 7,
    },
    {
      name: "מלאווח ללא גלוטן",
      image: importImage("gluten_free_malawach_frozen_ariel_500g.jpeg"),
      id: 7,
    },
    {
      name: "תערובת בראוניז ללא גלוטן",
      image: importImage("gluten_free_brownie_mix_kargil_400g.jpeg"),
      id: 7,
    }, 
   ];

  const initialNoaddedsugar = [
    {
      name: "קרקר חיטה מלאה ללא סוכר",
      image: importImage("whole_wheat_cracker_no_sugar_hadar_250g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות גרנולה קינמון ללא סוכר",
      image: importImage("granola_cinnamon_cookies_no_sugar_man_200g.jpeg"),
      id: 7,
    },
    {
      name: "תחליף אבקת סוכר",
      image: importImage("truvia_powdered_sugar_substitute_280g.jpeg"),
      id: 7,
    },
    {
      name: "חלבה טעם וניל ללא סוכר",
      image: importImage("classic_vanilla_halva_no_sugar_baraka_350g.jpeg"),
      id: 7,
    },
    {
      name: "ממרח קקאו עם אגוזי לוז",
      image: importImage("sweetango_cocoa_hazelnut_spread_350g.jpeg"),
      id: 7,
    },
    {
      name: "ברנפלקס ללא סוכר",
      image: importImage("branflakes_no_sugar_telma_500g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות חמאה ללא סוכר",
      image: importImage("sugar_free_butter_toffee_candies_werthers_70g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות חמאה וקפה ללא סוכר",
      image: importImage("sugar_free_butter_coffee_toffee_candies_werthers_80g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות מאסט Must ללא סוכר טעם ריבת חלב",
      image: importImage("must_candies_no_sugar_dulce_de_leche_elite_80g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות מאסט Must ללא סוכר יוגורט תות ואוכניות",
      image: importImage("must_candies_no_sugar_strawberry_yogurt_elite_80g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות מאסט Must ללא סוכר טעם לימון",
      image: importImage("must_candies_no_sugar_lemon_elite_80g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות מאסט Must ללא סוכר טעם מנטה",
      image: importImage("must_candies_no_sugar_mint_elite_80g.jpeg"),
      id: 7,
    },
    {
      name: "סוכריות מאסט Must ללא סוכר טעם פטל לימון",
      image: importImage("must_candies_no_sugar_raspberry_lemon_elite_80g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף דגנים תמרים וקינמון",
      image: importImage("cereal_bar_dates_cinnamon_free_5x22g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף דגנים שוקולד ואגוזים",
      image: importImage("cereal_bar_chocolate_nuts_free_5x20g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים ובוטנים",
      image: importImage("dates_peanuts_bar_free_5x25g.jpeg"),
      id: 7,
    },
    {
      name: "חטיף תמרים ואגוזי קשיו",
      image: importImage("dates_cashews_bar_free_5x25g.jpeg"),
      id: 7,
    },
    {
      name: "ממתיק",
      image: importImage("stevia_sweetener_sachets_100units.jpeg"),
      id: 7,
    },
    {
      name: "סוכרזית ממתיק",
      image: importImage("saccharin_sweetener_patent_pack_sucrazit_57g.jpeg"),
      id: 7,
    },
    {
      name: "ממתיק נוזלי",
      image: importImage("liquid_sucralose_sweetener_sucrazit_220ml.jpeg"),
      id: 7,
    },
    {
      name: "ממתיק דל קלוריות",
      image: importImage("sweet_n_low_diet_sweetener_sachets_80g.jpeg"),
      id: 7,
    },
    {
      name: "וופל מילוי קרם טעם שוקולד ללא סוכר",
      image: importImage("tusso_chocolate_cream_filled_wafer_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד מריר ללא סוכר",
      image: importImage("tusso_62_dark_chocolate_no_sugar_100g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד מריר עם אגוזים ללא סוכר",
      image: importImage("tusso_dark_chocolate_with_nuts_no_sugar_100g.jpeg"),
      id: 7,
    },
    {
      name: "אינסטנט פודינג טעם וניל ללא סוכר",
      image: importImage("sweetango_instant_vanilla_pudding_50g.jpeg"),
      id: 7,
    },
    {
      name: "פתיבר טעם וניל ללא סוכר",
      image: importImage("petit_beurre_vanilla_biscuit_no_sugar_hadar_150g.jpeg"),
      id: 7,
    },
    {
      name: "פתיבר טעם שוקו ללא סוכר",
      image: importImage("petit_beurre_chocolate_biscuit_no_sugar_hadar_150g.jpeg"),
      id: 7,
    },
    {
      name: "וופלים טעם שוקולד ללא סוכר",
      image: importImage("man_chocolate_flavored_wafer_no_sugar_180g.jpeg"),
      id: 7,
    },
    {
      name: "ופלים טעם וניל ללא סוכר",
      image: importImage("man_vanilla_flavored_wafer_no_sugar_180g.jpeg"),
      id: 7,
    },
    {
      name: "ופלים טעם לימון ללא סוכר",
      image: importImage("man_lemon_flavored_wafer_no_sugar_180g.jpeg"),
      id: 7,
    },
    {
      name: "ריבת פירות יער לייט",
      image: importImage("tru_berry_jam_light_250g.jpeg"),
      id: 7,
    },
    {
      name: "ריבת תות לייט",
      image: importImage("tru_strawberry_jam_light_250g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד חלב ללא סוכר",
      image: importImage("carmit_milk_chocolate_no_sugar_100g.jpeg"),
      id: 7,
    },
    {
      name: "אבקה להכנת ג'לי טעם תות ללא סוכר",
      image: importImage("sweetango_strawberry_jelly_powder_100g.jpeg"),
      id: 7,
    },
    {
      name: "אינסטנט פודינג טעם קרמל ללא סוכר",
      image: importImage("sweetango_instant_caramel_pudding_55g.jpeg"),
      id: 7,
    },
    {
      name: "אינסטנט פודינג טעם שוקולד ללא סוכר",
      image: importImage("sweetango_instant_chocolate_pudding_60g.jpeg"),
      id: 7,
    },
    {
      name: "ממרח בטעם חלווה פיסטוק ללא סוכר",
      image: importImage("sweetango_halva_pistachio_spread_350g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות אגוזי לוז ללא סוכר",
      image: importImage("tusso_hazelnut_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות גרנולה ללא סוכר",
      image: importImage("man_granola_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות חיטה מלאה טעם חמאה ללא סוכר",
      image: importImage("man_whole_wheat_butter_flavor_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות חיטה מלאה ללא סוכר",
      image: importImage("man_whole_wheat_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות טחינה ללא סוכר",
      image: importImage("tusso_tahini_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגיות פקאן ללא סוכר",
      image: importImage("tusso_pecan_cookies_no_sugar_200g.jpeg"),
      id: 7,
    },
    {
      name: "עוגת שוקוצ'יפס ללא סוכר",
      image: importImage("achva_chocochip_cake_no_sugar_400g.jpeg"),
      id: 7,
    },
    {
      name: "עוגת שיש ללא סוכר",
      image: importImage("achva_marble_cake_no_sugar_400g.jpeg"),
      id: 7,
    },
    {
      name: "ריבת משמש לייט",
      image: importImage("tru_light_apricot_jam_250g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד חלב אגוזים ללא סוכר",
      image: importImage("tusso_milk_chocolate_with_nuts_no_sugar_100g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד לבן ללא סוכר",
      image: importImage("carmit_white_chocolate_no_sugar_100g.jpeg"),
      id: 7,
    },
    {
      name: "שוקולד מריר שקדים ללא סוכר",
      image: importImage("carmit_dark_chocolate_with_almonds_no_sugar_100g.jpeg"),
      id: 7,
    },
  ];

  const initialHerbaldrinks = [
    {
      name: "משקה שיבולת שועל",
      image: importImage("alternative_oat_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שיבולת שועל טעם אגוזי לוז",
      image: importImage("alternative_oat_hazelnut_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שיבולת שועל טעם וניל",
      image: importImage("alternative_oat_vanilla_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה ללא סוכר",
      image: importImage("alternative_unsweetened_soy_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה",
      image: importImage("alternative_soy_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה טעם וניל",
      image: importImage("alternative_soy_vanilla_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה לייט",
      image: importImage("alternative_light_soy_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה מתיקות מופחתת",
      image: importImage("alternative_reduced_sugar_soy_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שקדים",
      image: importImage("alternative_almond_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שקדים ללא סוכר",
      image: importImage("alternative_unsweetened_almond_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שיבולת שועל טעם קרמל",
      image: importImage("alpro_chilled_oat_caramel_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה קוקוס שקדים",
      image: importImage("alpro_coconut_almond_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה שקדים וניל",
      image: importImage("alpro_almond_vanilla_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה שוקו",
      image: importImage("alpro_soy_chocolate_flavor_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה אגוזי מלך",
      image: importImage("valsoia_walnut_drink_1l.jpeg"),
      id: 4,
    },
    {
      name: "משקה סויה תות ובננה",
      image: importImage("alternative_soy_strawberry_banana_drink_236ml.jpeg"),
      id: 4,
    },
  ];  

  const initialCheesesubstitutes = [
    {
      name: "תחליף מרגרינה שמן קוקוס",
      image: importImage("natourina_coconut_oil_spread.jpeg"),
      id: 7,
    },
    {
      name: "תחליף חמאה שמנים צמחיים",
      image: importImage("natourina_butter_flavored_spread.jpeg"),
      id: 7,
    },
    {
      name: "גבינה צהובה טבעונית עשבי תיבול",
      image: importImage("vegan_yellow_slices_with_herbs.jpeg"),
      id: 7,
    },
    {
      name: "גבינה צהובה טבעונית טעם אורגינל",
      image: importImage("vegan_original_yellow_slices.jpeg"),
      id: 7,
    },
    {
      name: "ממרח זיתים על בסיס קוקוס",
      image: importImage("olive_spread_coconut_base.jpeg"),
      id: 7,
    },
    {
      name: "ממרח שום שמיר על בסיס קוקוס",
      image: importImage("garlic_dill_spread_coconut_base.jpeg"),
      id: 7,
    },
    {
      name: "ממרח טעם טבעי על בסיס קוקוס",
      image: importImage("natural_flavor_spread_coconut_base.jpeg"),
      id: 7,
    },
    {
      name: "ממרח סויה בסגנון שמנת",
      image: importImage("soy_based_cream_spread.jpeg"),
      id: 7,
    },
    {
      name: "ממרח סויה בסגנון גבינה",
      image: importImage("soy_based_cheese_spread.jpeg"),
      id: 7,
    },
    {
      name: "ממרח סויה עם שום ושמיר",
      image: importImage("soy_spread_garlic_dill.jpeg"),
      id: 7,
    },
    {
      name: "ממרח סויה טעם טבעי",
      image: importImage("soy_spread_natural_flavor.jpeg"),
      id: 7,
    },
    {
      name: "תחליף שמנת צמחי",
      image: importImage("organic_rice_cream_substitute.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה טעם טבעי",
      image: importImage("bio_soy_dessert_natural_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה אפרסק",
      image: importImage("bio_soy_dessert_peach_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה מתיקות מעודנת",
      image: importImage("bio_soy_dessert_sweet_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה תות",
      image: importImage("bio_soy_dessert_strawberry_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה שוקולד",
      image: importImage("soy_dessert_chocolate_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן סויה וניל",
      image: importImage("soy_dessert_vanilla_flavor.jpeg"),
      id: 7,
    },
    {
      name: "מעדן שקדים שוקולד מריר",
      image: importImage("almond_dessert_dark_chocolate_flavor.jpeg"),
      id: 7,
    },
    {
      name: "סויה לבישול",
      image: importImage("alpro_soy_cooking_product.jpeg"),
      id: 7,
    },
    {
      name: "ממרח טבעוני ויגן",
      image: importImage("vegan_spread.jpeg"),
      id: 7,
    },
  ];  

  const initialTofuseitanmeatsubstitutes = [
    {
      name: "טופו טעם טבעי",
      image: importImage("natural_flavor_tofu_tzuriel_farm.jpeg"),
      id: 7,
    },
    {
      name: "טופו אורגני",
      image: importImage("organic_tofu_leev.jpeg"),
      id: 7,
    },
    {
      name: "טופו מרקם קשה",
      image: importImage("hard_tofu_unicurd.jpeg"),
      id: 7,
    },
    {
      name: "טופו בזיליקום",
      image: importImage("basil_flavor_tofu_tnuva_alternative.jpeg"),
      id: 7,
    },
    {
      name: "טופו פסטו",
      image: importImage("pesto_flavored_tofu_classic_texture_weiler_farm.jpeg"),
      id: 7,
    },
  ];  

  const initialFrozenfromtheplant = [
    {
      name: "בורגר צמחי",
      image: importImage("premium_plant_based_burger_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "נקניקיה מרגז צמחי",
      image: importImage("merguez_style_plant_based_sausage_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "נקניקייה גרמני צמחי",
      image: importImage("german_style_plant_based_sausage_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "קבב טעם טלה צמחי",
      image: importImage("mediterranean_lamb_style_kebab_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "נתח מפורק בקר צמחי",
      image: importImage("shredded_beef_style_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "טחון טעם בקר צמחי",
      image: importImage("beef_style_ground_meat_redefine_meat.jpeg"),
      id: 7,
    },
    {
      name: "ביונד בורגר",
      image: importImage("beyond_burger_beyond_meat.jpeg"),
      id: 7,
    },
    {
      name: "ביונד נאגטס",
      image: importImage("plant_based_chicken_nuggets_beyond_meat.jpeg"),
      id: 7,
    },
    {
      name: "ביונד אצבעות שניצל",
      image: importImage("plant_based_chicken_fingers_beyond_meat.jpeg"),
      id: 7,
    },
    {
      name: "ביונד שניצל",
      image: importImage("plant_based_chicken_schnitzel_beyond_meat.jpeg"),
      id: 7,
    },
    {
      name: "שניצל תירס",
      image: importImage("corn_schnitzel_99_calories_tivall.jpeg"),
      id: 7,
    },
    {
      name: "שניצל תירס ללא גלוטן",
      image: importImage("gluten_free_corn_schnitzel_tivall.jpeg"),
      id: 7,
    },
    {
      name: "שניצל ברוקולי",
      image: importImage("broccoli_schnitzel_99_calories_tivall.jpeg"),
      id: 7,
    },
    {
      name: "שניצל צמחוני טעם צ'ילי",
      image: importImage("chili_flavored_vegetarian_schnitzel_tivall.jpeg"),
      id: 7,
    },
    {
      name: "שניצל צמחוני",
      image: importImage("vegetarian_schnitzel_99_calories_tivall.jpeg"),
      id: 7,
    },
    {
      name: "נתח חזה צמחוני",
      image: importImage("vegetarian_chicken_breast_99_calories_tivall.jpeg"),
      id: 7,
    },
    {
      name: "נתחי סויה דמוי עוף",
      image: importImage("soy_chicken_style_sensational_tivall.jpeg"),
      id: 7,
    },
    {
      name: "כדורי בשר צמחוני",
      image: importImage("vegetarian_meatballs_high_protein_tivall.jpeg"),
      id: 7,
    },
    {
      name: "בורגר צמחוני",
      image: importImage("vegetarian_burger_tivall.jpeg"),
      id: 7,
    },
    {
      name: "מקלוני תירס",
      image: importImage("crispy_corn_sticks_zoglovek_nature.jpeg"),
      id: 7,
    },
    {
      name: "קציצות עדשים וירקות",
      image: importImage("lentil_vegetable_patties_warm_and_tasty.jpeg"),
      id: 7,
    },
    {
      name: "קציצות בורגול וירקות",
      image: importImage("bulgur_vegetable_patties_warm_and_tasty.jpeg"),
      id: 7,
    },
    {
      name: "קציצות קינואה וחמוציות",
      image: importImage("quinoa_cranberry_patties_warm_and_tasty.jpeg"),
      id: 7,
    },
    {
      name: "קציצות כרובית וברוקולי",
      image: importImage("cauliflower_broccoli_patties_warm_and_tasty.jpeg"),
      id: 7,
    },
    {
      name: "חטיפי כרובית",
      image: importImage("cauliflower_snacks_williger.jpeg"),
      id: 7,
    },
  ];  

  initialOrganic.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialGlutenfree.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialNoaddedsugar.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialHerbaldrinks.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCheesesubstitutes.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialTofuseitanmeatsubstitutes.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenfromtheplant.sort((a, b) => a.name.localeCompare(b.name, 'he'));


const [organic, setOrganic] = useState<{ name: string; image: string | null; count: number }[]>(
    initialOrganic.map(organic => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === organic.name);
    return {
      ...organic,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [glutenfree, setGlutenfree] = useState<{ name: string; image: string | null; count: number }[]>(
    initialGlutenfree.map(glutenfree => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === glutenfree.name);
    return {
      ...glutenfree,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [noaddedsugar, setNoaddedsugar] = useState<{ name: string; image: string | null; count: number }[]>(
  initialNoaddedsugar.map(noaddedsugar => {
  const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === noaddedsugar.name);
  return {
    ...noaddedsugar,
    count: basketItem ? basketItem.quantity : 0,
  };
})
);

const [herbaldrinks, setHerbaldrinks] = useState<{ name: string; image: string | null; count: number }[]>(
  initialHerbaldrinks.map(herbaldrinks => {
  const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === herbaldrinks.name);
  return {
    ...herbaldrinks,
    count: basketItem ? basketItem.quantity : 0,
  };
})
);

const [cheesesubstitutes, setCheesesubstitutes] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCheesesubstitutes.map(cheesesubstitutes => {
  const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cheesesubstitutes.name);
  return {
    ...cheesesubstitutes,
    count: basketItem ? basketItem.quantity : 0,
  };
})
);

const [tofuseitanmeatsubstitutes, setTofuseitanmeatsubstitutes] = useState<{ name: string; image: string | null; count: number }[]>(
  initialTofuseitanmeatsubstitutes.map(tofuseitanmeatsubstitutes => {
  const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === tofuseitanmeatsubstitutes.name);
  return {
    ...tofuseitanmeatsubstitutes,
    count: basketItem ? basketItem.quantity : 0,
  };
})
);

const [frozenfromtheplant, setFrozenfromtheplant] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFrozenfromtheplant.map(frozenfromtheplant => {
  const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === frozenfromtheplant.name);
  return {
    ...frozenfromtheplant,
    count: basketItem ? basketItem.quantity : 0,
  };
})
);

useEffect(() => {
  handleSave();
}, [organic,glutenfree,noaddedsugar,herbaldrinks,tofuseitanmeatsubstitutes,frozenfromtheplant]);

  const handleIncrement = (name: string) => {
    setOrganic(organic.map(organic => organic.name === name ? { ...organic, count: organic.count + 1 } : organic));
    setGlutenfree(glutenfree.map(glutenfree => glutenfree.name === name ? { ...glutenfree, count: glutenfree.count + 1 } : glutenfree));
    setNoaddedsugar(noaddedsugar.map(noaddedsugar => noaddedsugar.name === name ? { ...noaddedsugar, count: noaddedsugar.count + 1 } : noaddedsugar));
    setHerbaldrinks(herbaldrinks.map(herbaldrinks => herbaldrinks.name === name ? { ...herbaldrinks, count: herbaldrinks.count + 1 } : herbaldrinks));
    setCheesesubstitutes(cheesesubstitutes.map(cheesesubstitutes => cheesesubstitutes.name === name ? { ...cheesesubstitutes, count: cheesesubstitutes.count + 1 } : cheesesubstitutes));
    setTofuseitanmeatsubstitutes(tofuseitanmeatsubstitutes.map(tofuseitanmeatsubstitutes => tofuseitanmeatsubstitutes.name === name ? { ...tofuseitanmeatsubstitutes, count: tofuseitanmeatsubstitutes.count + 1 } : tofuseitanmeatsubstitutes));
    setFrozenfromtheplant(frozenfromtheplant.map(frozenfromtheplant => frozenfromtheplant.name === name ? { ...frozenfromtheplant, count: frozenfromtheplant.count + 1 } : frozenfromtheplant));

  };
  

  const handleDecrement = (name: string) => {
    
    setOrganic(organic.map(organic => {
      if (organic.name === name && organic.count > 0) {
        const newCount = organic.count - 1;
        if (newCount === 0) {
          removeProduct(organic.name);
        }
        return { ...organic, count: newCount };
      }
      return organic;
    }));

    setGlutenfree(glutenfree.map(glutenfree => {
        if (glutenfree.name === name && glutenfree.count > 0) {
          const newCount = glutenfree.count - 1;
          if (newCount === 0) {
            removeProduct(glutenfree.name);
          }
          return { ...glutenfree, count: newCount };
        }
        return glutenfree;
      }));
    
      setNoaddedsugar(noaddedsugar.map(noaddedsugar => {
        if (noaddedsugar.name === name && noaddedsugar.count > 0) {
          const newCount = noaddedsugar.count - 1;
          if (newCount === 0) {
            removeProduct(noaddedsugar.name);
          }
          return { ...noaddedsugar, count: newCount };
        }
        return noaddedsugar;
      }));

      setHerbaldrinks(herbaldrinks.map(herbaldrinks => {
        if (herbaldrinks.name === name && herbaldrinks.count > 0) {
          const newCount = herbaldrinks.count - 1;
          if (newCount === 0) {
            removeProduct(herbaldrinks.name);
          }
          return { ...herbaldrinks, count: newCount };
        }
        return herbaldrinks;
      }));

      setCheesesubstitutes(cheesesubstitutes.map(cheesesubstitutes => {
        if (cheesesubstitutes.name === name && cheesesubstitutes.count > 0) {
          const newCount = cheesesubstitutes.count - 1;
          if (newCount === 0) {
            removeProduct(cheesesubstitutes.name);
          }
          return { ...cheesesubstitutes, count: newCount };
        }
        return cheesesubstitutes;
      }));

      setTofuseitanmeatsubstitutes(tofuseitanmeatsubstitutes.map(tofuseitanmeatsubstitutes => {
        if (tofuseitanmeatsubstitutes.name === name && tofuseitanmeatsubstitutes.count > 0) {
          const newCount = tofuseitanmeatsubstitutes.count - 1;
          if (newCount === 0) {
            removeProduct(tofuseitanmeatsubstitutes.name);
          }
          return { ...tofuseitanmeatsubstitutes, count: newCount };
        }
        return tofuseitanmeatsubstitutes;
      }));

      setFrozenfromtheplant(frozenfromtheplant.map(frozenfromtheplant => {
        if (frozenfromtheplant.name === name && frozenfromtheplant.count > 0) {
          const newCount = frozenfromtheplant.count - 1;
          if (newCount === 0) {
            removeProduct(frozenfromtheplant.name);
          }
          return { ...frozenfromtheplant, count: newCount };
        }
        return frozenfromtheplant;
      }));

   };

  const handleSave = async () => {
    const organicToSave = organic.filter(organic => organic.count > 0).map(organic => ({ ...organic, quantity: organic.count }));
    const glutenfreeToSave = glutenfree.filter(glutenfree => glutenfree.count > 0).map(glutenfree => ({ ...glutenfree, quantity: glutenfree.count }));
    const noaddedsugarToSave = noaddedsugar.filter(noaddedsugar => noaddedsugar.count > 0).map(noaddedsugar => ({ ...noaddedsugar, quantity: noaddedsugar.count }));
    const herbaldrinksToSave = herbaldrinks.filter(herbaldrinks => herbaldrinks.count > 0).map(herbaldrinks => ({ ...herbaldrinks, quantity: herbaldrinks.count }));
    const cheesesubstitutesToSave = cheesesubstitutes.filter(cheesesubstitutes => cheesesubstitutes.count > 0).map(cheesesubstitutes => ({ ...cheesesubstitutes, quantity: cheesesubstitutes.count }));
    const tofuseitanmeatsubstitutesToSave = tofuseitanmeatsubstitutes.filter(tofuseitanmeatsubstitutes => tofuseitanmeatsubstitutes.count > 0).map(tofuseitanmeatsubstitutes => ({ ...tofuseitanmeatsubstitutes, quantity: tofuseitanmeatsubstitutes.count }));
    const frozenfromtheplantToSave = frozenfromtheplant.filter(frozenfromtheplant => frozenfromtheplant.count > 0).map(frozenfromtheplant => ({ ...frozenfromtheplant, quantity: frozenfromtheplant.count }));

    const allSpecial = [...organicToSave,...glutenfreeToSave,...noaddedsugarToSave,...herbaldrinksToSave,...cheesesubstitutesToSave,...tofuseitanmeatsubstitutesToSave,...frozenfromtheplantToSave];
    allSpecial.forEach(item => addProduct(item));
  };

  const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};
const filterOrganic = organic.filter(item =>
  item.name.includes(searchTerm)
);

const filterGlutenfree = glutenfree.filter(item =>
  item.name.includes(searchTerm)
);

const filterNoAddedSugar = noaddedsugar.filter(item =>
  item.name.includes(searchTerm)
);

const filterHerbalDrinks = herbaldrinks.filter(item =>
  item.name.includes(searchTerm)
);

const filterCheeseSubstitutes = cheesesubstitutes.filter(item =>
  item.name.includes(searchTerm)
);

const filterTofuSeitanMeatSubstitutes = tofuseitanmeatsubstitutes.filter(item =>
  item.name.includes(searchTerm)
);

const filterFrozenFromThePlant = frozenfromtheplant.filter(item =>
  item.name.includes(searchTerm)
);


  return (
<div>
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
        placeholder="חפש מוצר אורגני\ללא סוכר\ללא גלוטן\צמחוני"
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

</div>       <div>
  {filterOrganic.length > 0 && (
    <ProductsPage
      products={filterOrganic}
      categoryTitle="אורגני"
      icon={<img alt="" src={importImage('organic_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterGlutenfree.length > 0 && (
    <ProductsPage
      products={filterGlutenfree}
      categoryTitle="ללא גלוטן"
      icon={<img alt="" src={importImage('glutenfree_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterNoAddedSugar.length > 0 && (
    <ProductsPage
      products={filterNoAddedSugar}
      categoryTitle="ללא תוספת סוכר"
      icon={<img alt="" src={importImage('noaddedsugar_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterHerbalDrinks.length > 0 && (
    <ProductsPage
      products={filterHerbalDrinks}
      categoryTitle="משקאות צמחיים"
      icon={<img alt="" src={importImage('herbaldrinks_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterCheeseSubstitutes.length > 0 && (
    <ProductsPage
      products={filterCheeseSubstitutes}
      categoryTitle="תחליפי גבינה, מעדנים ורטבים"
      icon={<img alt="" src={importImage('cheesesubstitutes_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterTofuSeitanMeatSubstitutes.length > 0 && (
    <ProductsPage
      products={filterTofuSeitanMeatSubstitutes}
      categoryTitle="טופו, סייטן ותחליפי בשר"
      icon={<img alt="" src={importImage('tofuseitanmeatsubstitutes_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>
<div>
  {filterFrozenFromThePlant.length > 0 && (
    <ProductsPage
      products={filterFrozenFromThePlant}
      categoryTitle="קפואים מן הצומח"
      icon={<img alt="" src={importImage('frozenfromtheplant_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

    </div>
  );
};

export default SpecialPage;