import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Deli/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DeliPage: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialMilk = [
    { 
      name: "חלב בקרטון 3%<br/>1 ל׳", 
      image: importImage('milk_carton_3_percent_mehadrin.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב דל לקטוז 2%", 
      image: importImage('milk_carton_2_percent_low_lactose.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב נטול לקטוז 2%", 
      image: importImage('milk_carton_2_percent_no_lactose.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב בקרטון 1%", 
      image: importImage('milk_carton_1_percent.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב בקרטון 3%<br/>1.5 ל׳", 
      image: importImage('milk_carton_3_percent_1.5_liters.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב בשקית 3%", 
      image: importImage('milk_bag_3_percent_mehadrin.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב מלא בטעם של פעם", 
      image: importImage('full_fat_milk_traditional_flavor.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב עיזים", 
      image: importImage('goat_milk.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב 3% בקרטון<br/>2 ל׳", 
      image: importImage('milk_carton_3_percent_2_liters.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב עיזים משק צוריאל", 
      image: importImage('full_fat_goat_milk_zuriel.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה רוויון 1.5%<br/>1 ל׳", 
      image: importImage('buttermilk_drink_1.5_percent.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה רוויון 1.5%<br/>500 מל׳", 
      image: importImage('buttermilk_drink_1.5_percent_500ml.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה שוקו בקבוק", 
      image: importImage('chocolate_milk_drink_bottle.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה אייס קפה", 
      image: importImage('ice_coffee_drink_mehadrin.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה מוקה", 
      image: importImage('mocha_drink_mehadrin.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה בננה", 
      image: importImage('banana_drink_mehadrin.jpeg'), 
      id: 4,
    },
    { 
      name: "מארז 8 שקיות שוקו", 
      image: importImage('chocolate_milk_8_pack.jpeg'), 
      id: 4,
    },
    { 
      name: "שקית שוקו", 
      image: importImage('chocolate_milk_bag.jpeg'), 
      id: 4,
    },
    { 
      name: "מארז 6 שקיות מוקה", 
      image: importImage('mocha_6_pack.jpeg'), 
      id: 4,
    },
    { 
      name: "שקית מוקה", 
      image: importImage('mocha_bag.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה שוקו בקבוק עם פקק", 
      image: importImage('chocolate_milk_bottle_cap.jpeg'),
      id: 4,
    },
    { 
      name: "משקה קפה 25 PRO עם חלבון חלב 1.5% שומן", 
      image: importImage('coffee_protein_drink_25_pro.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה קפה עם חלבון חלב", 
      image: importImage('coffee_protein_drink.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה וניל פרו Pro מועשר בחלבון 1.5%", 
      image: importImage('vanilla_protein_drink_pro.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה חלב PRO עם שיבולת שועל ובננה", 
      image: importImage('banana_oat_milk_protein_drink.jpeg'), 
      id: 4,
    },
    { 
      name: "אייס קפה קלאסי 1.6% בכוס", 
      image: importImage('classic_ice_coffee_cup.jpeg'), 
      id: 4,
    },
    { 
      name: "אייס קפה בסגנון מעודן 1.6% בכוס", 
      image: importImage('mild_ice_coffee_cup.jpeg'), 
      id: 4,
    },
    { 
      name: "אייס קפה בסגנון חזק 1.2% בכוס", 
      image: importImage('strong_ice_coffee_cup.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה חלב תותי פרוטי - בטעם תות ושוקולד לבן", 
      image: importImage('strawberry_white_chocolate_milk_drink.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה חלב קפוצ'ינו בבקבוק אישי", 
      image: importImage('personal_bottle_cappuccino_milk_drink.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה חלב בטעם בננה 2% בקבוק אישי", 
      image: importImage('personal_bottle_banana_milk_drink_2_percent.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה קפה קר בטעם לאטה שוקולד", 
      image: importImage('cold_coffee_drink_chocolate_latte.jpeg'), 
      id: 4,
    },
    {
      name: "משקה קפה קר בטעם קפוצ'ינו", 
      image: importImage('cold_coffee_drink_cappuccino.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה PRO בטעם שוקולד אגוזים עם חלבון חלב", 
      image: importImage('pro_drink_chocolate_hazelnut_protein.jpeg'), 
      id: 4,
    },
    { 
      name: "משקה קפה קר בסגנון קלאסי ללא המתקה 1.8% שומן", 
      image: importImage('unsweetened_classic_cold_coffee_drink_1.8_percent.jpeg'), 
      id: 4,
    },
    { 
      name: "חלב עמיד 3%", 
      image: importImage('3%_fortified_milk.jpeg'), 
      id: 4,
    },
  ];

  const initialYogurtdelicacies = [
    { name: "מולר יוגורט עם פצפוצי שוקולד", image: importImage('muller_mix_chocolate_flakes.jpeg'), id: 4 },
    { name: "מולר יוגורט עם בוטנים ושקדים מקורמלים", image: importImage('bio_mixed_peanuts_almonds.jpeg'), id: 4 },
    { name: "מולר יוגורט עם קורנפלקס מצופה שוקולד", image: importImage('muller_mix_choco_cornflakes.jpeg'), id: 4 },
    { name: "מולר יוגורט עם גליליות במילוי קרם", image: importImage('muller_mix_cream_rolls.jpeg'), id: 4 },
    { name: "מולר יוגורט עם כדורים מצופים שוקולד חום לבן", image: importImage('bio_choco_balls.jpeg'), id: 4 },
    { name: "מולר יוגורט גרעינים אגוזים וחמוציות", image: importImage('bio_nuts_berries.jpeg'), id: 4 },
    { name: "יוגורט עם שבבי פקאן מסוכרים מצופים שוקולד", image: importImage('pecan_choco_yogurt.jpeg'), id: 4 },
    { name: "יוגורט עם פצפוצי שוקולד", image: importImage('choco_flakes_yogurt.jpeg'), id: 4 },
    { name: "יוגורט בטעם תות עם קורנפלקס מצופה שוקולד חלב", image: importImage('strawberry_choco_cornflakes.jpeg'), id: 4 },
    { name: "יוגורט עם אגוזי לוז ושקדים בקרמל מלוח 4.5%", image: importImage('hazelnuts_almonds_caramel_yogurt.jpeg'), id: 4 },
    { name: "יוגורט דנונה מולטי 3% שומן", image: importImage('danone_multi_3_percent.jpeg'), id: 4 },
    { name: "יוגורט דנונה מולטי עם צ'יה 3% שומן", image: importImage('danone_chia_3_percent.jpeg'), id: 4 },
    { name: "יוגורט דנונה ביו 3% שומן", image: importImage('danone_bio_3_percent.jpeg'), id: 4 },
    { name: "יוגורט דנונה ביו 1.7% שומן", image: importImage('danone_bio_1.7_percent.jpeg'), id: 4 },
    { name: "יוגורט דנונה ביו 0% שומן", image: importImage('danone_bio_0_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט דנונה ביו 3% שומן", image: importImage('8_pack_danone_bio_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט דנונה ביו 1.7% שומן", image: importImage('8_pack_danone_bio_1.7_percent.jpeg'), id: 4 },
    { name: "יוגורט בסגנון יווני", image: importImage('greek_style_yogurt.jpeg'), id: 4 },
    { name: "יוגורט פרוביוטי דל לקטוז", image: importImage('probiotic_lactose_free_yogurt.jpeg'), id: 4 },
    { name: "יוגורט במתיקות מעודנת 2% ללא תוספת סוכר- מארז 8 יח", image: importImage('8_pack_sugar_free_2_percent_yogurt.jpeg'), id: 4 },
    { name: "יוגורט עם אפרסק 3%", image: importImage('peach_yogurt_3_percent.jpeg'), id: 4 },
    { name: "יוגורט עם פירות יער 3%", image: importImage('berry_yogurt_3_percent.jpeg'), id: 4 },
    { name: "יוגורט עם תות 3%", image: importImage('strawberry_yogurt_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יוגורט עם תות 3%", image: importImage('8_pack_strawberry_yogurt_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט Greek בסגנון יווני 6.5% שומן", image: importImage('8_pack_greek_yogurt_6.5_percent.jpeg'), id: 4 },
    { name: "דנונה SKYR יוגורט בטעם לימון", image: importImage('skyr_lemon_creme_yogurt.jpeg'), id: 4 },
    { name: "דנונה SKYR יוגורט בטעם תות", image: importImage('skyr_strawberry_yogurt.jpeg'), id: 4 },
    { name: "יוגורט PRO פרו 1.5% 20 גרם חלבון", image: importImage('pro_yogurt_1.5_percent_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם תות 0% 20 גרם חלבון", image: importImage('pro_yogurt_strawberry_0_percent_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם אפרסק 0% 20 גרם חלבון", image: importImage('pro_yogurt_peach_0_percent_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם וניל 0% , 20 גרם חלבון", image: importImage('pro_yogurt_vanilla_0_percent_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם פירות יער 0% 20 גרם חלבון", image: importImage('pro_yogurt_berry_0_percent_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO לבן 0% 21 גרם חלבון", image: importImage('pro_yogurt_plain_0_percent_21g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם תות 0% סוכר לבן 20 גרם חלבון", image: importImage('pro_yogurt_strawberry_0_percent_sugar_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם מנגו ואפרסק 0% סוכר לבן", image: importImage('pro_yogurt_mango_peach_0_percent_sugar.jpeg'), id: 4 },
    { name: "יוגורט דנונה PRO בטעם בננה טופי", image: importImage('pro_yogurt_banana_toffee.jpeg'), id: 4 },
    { name: "יוגורט דנונה PRO בטעם פיסטוק 0% שומן", image: importImage('pro_yogurt_pistachio_0_percent.jpeg'), id: 4 },
    { name: "דנונה PRO יוגורט בטעם וניל עוגיות 0% שומן", image: importImage('pro_yogurt_vanilla_cookies_0_percent.jpeg'), id: 4 },
    { name: "יוגורט בטעם וניל 0% לייט אנד פרי 10 גרם חלבון", image: importImage('lite_free_vanilla_0_percent_10g_protein.jpeg'), id: 4 },
    { name: "יוגורט בטעם קפוצ'ינו 0% לייט אנד פרי", image: importImage('lite_free_cappuccino_0_percent.jpeg'), id: 4 },
    { name: "יוגורט בטעם ליצ'י 0% לייט אנד פרי", image: importImage('lite_free_lychee_0_percent.jpeg'), id: 4 },
    { name: "מארז יוגורט עם פרי 0% בטעמי אפרסק ותות", image: importImage('8_pack_fruit_peach_strawberry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט אקטיביה 3%", image: importImage('activia_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יח' אקטיביה יוגורט 1.5% שומן", image: importImage('8_pack_activia_1.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יח' יוגורט אקטיביה 3%", image: importImage('8_pack_activia_3_percent.jpeg'), id: 4 },
    { name: "יוגורט אקטיביה עם שיבולת שועל ושזיף 2.5%", image: importImage('activia_oat_plum_2.5_percent.jpeg'), id: 4 },
    { name: "יוגורט אקטיביה עם תות וצ'יה 3%", image: importImage('activia_strawberry_chia_3_percent.jpeg'), id: 4 },
    { name: "יוגורט נטול לקטוז 3%", image: importImage('lactose_free_3_percent.jpeg'), id: 4 },
    { name: "יוגורט 1.5% ביו BIO", image: importImage('bio_1.5_percent.jpeg'), id: 4 },
    { name: "יוגורט 3% ביו BIO", image: importImage('bio_3_percent.jpeg'), id: 4 },
    { name: "יוגורט 4.5%", image: importImage('yogurt_4.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט BIO 1.5%", image: importImage('8_pack_bio_1.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט BIO 3%", image: importImage('8_pack_bio_3_percent.jpeg'), id: 4 },
    { name: "יוגורט פרילי עם גרנולה ופירות 1.9%", image: importImage('prili_granola_fruit.jpeg'), id: 4 },
    { name: "יוגורט פרילי עם תות 1.5% שומן", image: importImage('prili_strawberry_1.5_percent.jpeg'), id: 4 },
    { name: "יוגורט פרילי עם אננס 1.5% שומן", image: importImage('prili_pineapple_1.5_percent.jpeg'), id: 4 },
    { name: "יוגורט פרילי עם פירות יער 1.5% שומן", image: importImage('prili_berry_1.5_percent.jpeg'), id: 4 },
    { name: "באדי יוגורט בטעם תות שדה 3%", image: importImage('badi_strawberry_3_percent_125ml.jpeg'), id: 4 },
    { name: "יוגורט ביו במתיקות מעודנת 1.5%", image: importImage('bio_light_1.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט ביו טבעי 1.5%", image: importImage('8_pack_bio_natural_1.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט ביו 3%", image: importImage('8_pack_bio_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט במתיקות מעודנת 1.5%", image: importImage('8_pack_light_1.5_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם אננס 3%", image: importImage('bio_pineapple_3_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם אפרסק 3%", image: importImage('bio_peach_3_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם דובדבן 3%", image: importImage('bio_cherry_3_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם עוגת גבינה ותות 3%", image: importImage('bio_cheesecake_strawberry_3_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם פירות יער 3%", image: importImage('bio_berry_3_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה בטעם קיווי 3% שומן", image: importImage('yoplait_kiwi_3_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם תות 3%", image: importImage('bio_strawberry_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט בטעם אפרסק ותות 3%", image: importImage('8_pack_peach_strawberry_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 גביעי יוגורט 3%", image: importImage('8_pack_3_percent.jpeg'), id: 4 },
    { name: "יוגורט עם תוספת כוכבים", image: importImage('yogurt_stars.jpeg'), id: 4 },
    { name: "יוגורט עם תוספת פצפוצים", image: importImage('yogurt_crisps.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם אננס דיאט 0%", image: importImage('bio_diet_pineapple_0_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם קיווי 0% שומן", image: importImage('diet_kiwi_0_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם אפרסק 0%", image: importImage('diet_peach_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה בטעם קיווי 3% שומן", image: importImage('yoplait_kiwi_3_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות יוגורט בטעם אפרסק ותות 3%", image: importImage('8_pack_peach_strawberry_3_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם דובדבן 0%", image: importImage('diet_cherry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם עוגת גבינה ותות 0%", image: importImage('diet_cheesecake_strawberry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם פירות יער 0%", image: importImage('diet_berry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט דיאט בטעם תות 0%", image: importImage('diet_strawberry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO בטעם טבעי 20 גרם חלבון", image: importImage('yoplait_go_natural_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO בטעם אפרסק 20 גרם חלבון", image: importImage('go_peach_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO בטעם פירות יער 20 גרם חלבון", image: importImage('go_berry_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO בטעם תות 20 גרם חלבון", image: importImage('go_strawberry_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO לייט בטעם אננס 20 גרם חלבון", image: importImage('go_light_pineapple_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO לייט בטעם אפרסק 20 גרם חלבון", image: importImage('go_light_peach_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט GO לייט בטעם דובדבן 20 גרם חלבון", image: importImage('go_light_cherry_20g_protein.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO נטול לקטוז בטעם טבעי 2% שומן", image: importImage('yoplait_go_lactose_free_natural_2_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO עם תות 0%", image: importImage('yoplait_go_thick_strawberry_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO בטעם אפרסק 0%", image: importImage('yoplait_go_thick_peach_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO בטעם בננה קרמל 0%", image: importImage('yoplait_go_thick_banana_caramel_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO בטעם קוקוס 0%", image: importImage('yoplait_go_thick_coconut_0_percent.jpeg'), id: 4 },
    { name: "יוגורט יופלה GO בטעם וניל 1% שומן", image: importImage('yoplait_go_frothy_vanilla_1_percent.jpeg'), id: 4 },
    { name: "יוגורט ביו בטעם טבעי 2.8%", image: importImage('bio_natural_2.8_percent.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט ביו בטעם טבעי 1.7%", image: importImage('8_pack_bio_natural_1.7_percent.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט ביו בטעם טבעי 2.8%", image: importImage('8_pack_bio_natural_2.8_percent.jpeg'), id: 4 },
    { name: "מארז 8 גביעי יוגורט ביו במתיקות מעודנת 1.2%", image: importImage('bio_yogurt_sweetened_1.2_percent.jpeg'), id: 4 },
    { name: "מולר יוגורט מוקצף בטעם פיסטוק", image: importImage('froop_pistachio_whipped.jpeg'), id: 4 },
    { name: "מולר יוגורט לבן עם קציפת תות 3%", image: importImage('yogurt_strawberry_whipped.jpeg'), id: 4 },
    { name: "מולר יוגורט לבן עם קציפת לימון 3%", image: importImage('yogurt_lemon_whipped.jpeg'), id: 4 },
    { name: "מולר יוגורט לבן עם קציפת פירות יער 3%", image: importImage('yogurt_berry_whipped.jpeg'), id: 4 },
    { name: "מולר יוגורט לבן עם קציפת אפרסק ופסיפלורה 3%", image: importImage('yogurt_peach_passionfruit_whipped.jpeg'), id: 4 },
    { name: "יוגורט עם קציפת קוקוס ואננס", image: importImage('bio_yogurt_coconut_pineapple_whipped.jpeg'), id: 4 },
    { name: "יוגורט Froop עם קציפת מנגו 3% שומן", image: importImage('froop_mango_whipped.jpeg'), id: 4 },
    { name: "יוגורט עם פירות יער 3% Simply Fruit", image: importImage('bio_yogurt_berry_simply_fruit.jpeg'), id: 4 },
    { name: "יוגורט עם אפרסק 3% Simply Fruit", image: importImage('bio_yogurt_peach_simply_fruit.jpeg'), id: 4 },
    { name: "יוגורט עם קיווי 3% Simply Fruit", image: importImage('bio_yogurt_kiwi_simply_fruit.jpeg'), id: 4 },
    { name: "יוגורט עם תות שדה 3% Simply Fruit", image: importImage('bio_yogurt_strawberry_simply_fruit.jpeg'), id: 4 },
    { name: "מולר FROOP - קציפת יוגורט בטעם וניל צרפתי", image: importImage('froop_vanilla_whipped.jpeg'), id: 4 },
    { name: "מולר FROOP -קציפת יוגורט תות", image: importImage('froop_strawberry_whipped.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט בטעם פירות יער וקיווי 3% Simply Fruit", image: importImage('8_pack_berry_kiwi_simply_fruit.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט בטעם תות שדה ואפרסק 3% Simply Fruit", image: importImage('8_pack_strawberry_peach_simply_fruit.jpeg'), id: 4 },
    { name: "מאגדת שמינייה סימפלי 1.5% מנגו ותות", image: importImage('8_pack_mango_strawberry_simply_fruit.jpeg'), id: 4 },
    { name: "מארז 8 גביעים יוגורט בטעם תות שדה ואפרסק 0% Simply Fruit", image: importImage('8_pack_strawberry_peach_0_percent.jpeg'), id: 4 },
    { name: "יוגורט עיזים", image: importImage('goat_yogurt.jpeg'), id: 4 },
    { name: "יוגורט עיזים עם דובדבן אמרנה", image: importImage('goat_yogurt_amarena_cherry.jpeg'), id: 4 },
    { name: "יוגורט עיזים עם תות", image: importImage('goat_yogurt_strawberry.jpeg'), id: 4 },
    { name: "יוגורט עיזים (600 גרם)", image: importImage('goat_yogurt_600g.jpeg'), id: 4 },
    { name: "יוגורט כבשים 5% (600 גרם)", image: importImage('sheep_yogurt_600g_5_percent.jpeg'), id: 4 },
    { name: "יוגורט יווני 10%", image: importImage('greek_yogurt_10_percent.jpeg'), id: 4 },
    { name: "מולר פרוטאין יוגורט לבן 25 גרם חלבון 2% שומן", image: importImage('protein_yogurt_white_25g_protein_2_percent.jpeg'), id: 4 },
    { name: "מולר פרוטאין יוגורט קרמי בטעם וניל 0% שומן", image: importImage('protein_yogurt_creamy_vanilla_0_percent.jpeg'), id: 4 },
    { name: "מולר יוגורט עם קציפת פרי בטעם אננס נענע 3% שומן", image: importImage('froop_pineapple_mint_whipped.jpeg'), id: 4 },
    { name: "מולר יוגורט עם קציפת פרי בטעם לימונענע 3% שומן", image: importImage('froop_lemon_mint_whipped.jpeg'), id: 4 },

  ];

  const initialinitialYogurtdrinking = [
    { name: "מארז 14 יחידות אקטימל במתיקות מעודנת", image: importImage('actimel_sweetened_14_pack.jpeg'), id: 4 },
    { name: "מארז 14 יחידות אקטימל בטעם תות", image: importImage('actimel_strawberry_14_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות אקטימל במתיקות מעודנת", image: importImage('actimel_sweetened_8_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות אקטימל בטעם תות", image: importImage('actimel_strawberry_8_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות משקה יוגורט ביו עם תות 1.5%", image: importImage('bio_yogurt_drink_strawberry_8_pack.jpeg'), id: 4 },
    { name: "יוגורט בכד 4% שומן", image: importImage('tnuva_jug_yogurt_4_percent.jpeg'), id: 4 },
    { name: "יוגורט בטעם טבעי 6.5%", image: importImage('natural_yogurt_6.5_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט מחלב עיזים 3.6%", image: importImage('goat_milk_yogurt_drink_3.6_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט BIO תות בננה 1.5%", image: importImage('bio_yogurt_drink_strawberry_banana_1.5_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט עם אפרסק 1.2%", image: importImage('activia_yogurt_drink_peach_1.2_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט עם תות 1.2%", image: importImage('activia_yogurt_drink_strawberry_1.2_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט עם תות ומלון 1.5%", image: importImage('yogurt_drink_strawberry_melon_1.5_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט עם אפרסק ובננה 1.5%", image: importImage('yogurt_drink_peach_banana_1.5_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט עם פסיפלורה, מנגו, אננס ואפרסק 1.5%", image: importImage('yogurt_drink_passionfruit_mango_pineapple_peach_1.5_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט GO תות בננה", image: importImage('go_yogurt_drink_strawberry_banana.jpeg'), id: 4 },
    { name: "משקה יוגורט GO מנגו ואננס בבקבוק", image: importImage('go_yogurt_drink_mango_pineapple_20g_protein.jpeg'), id: 4 },
    { name: "צזיקי לשתיה", image: importImage('drinkable_tzatziki.jpeg'), id: 4 },
    { name: "איירן לשתיה", image: importImage('drinkable_ayran.jpeg'), id: 4 },
    { name: "יוגורט עיזים לשתיה", image: importImage('drinkable_goat_yogurt.jpeg'), id: 4 },
    { name: "יוגורט עיזים 3.5%", image: importImage('goat_yogurt_3.5_percent.jpeg'), id: 4 },
    { name: "יוגורט עיזים 3.8%", image: importImage('goat_yogurt_3.8_percent.jpeg'), id: 4 },
    { name: "משקה יוגורט בננה מנגו פסיפלורה", image: importImage('danone_yogurt_drink_banana_mango_passionfruit.jpeg'), id: 4 },
    { name: "יוגורט במתיקות מעודנת עם שיבולת שועל", image: importImage('activia_yogurt_mild_oats.jpeg'), id: 4 },
    { name: "יוגורט PRO בטעם תות 1% שומן 0% סוכר לבן", image: importImage('danone_pro_yogurt_strawberry_1_percent_no_sugar.jpeg'), id: 4 },
    { name: "משקה יוגורט בטעם אפרסק פסיפלורה", image: importImage('go_yogurt_drink_peach_passionfruit.jpeg'), id: 4 },
    { name: "משקה יוגורט פרו בטעם וניל עוגיות 0% סוכר לבן", image: importImage('danone_pro_yogurt_drink_vanilla_cookies_no_sugar.jpeg'), id: 4 },
  ];

  const initialMilkdelicaciesdesserts = [
    { name: "מעדן מילקי בטעם שוקולד עם קצפת", image: importImage('milky_chocolate_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן מילקי 26% פחות סוכר", image: importImage('milky_less_sugar.jpeg'), id: 4 },
    { name: "מעדן מילקי עם טופ מגולגלת", image: importImage('milky_rolled_top.jpeg'), id: 4 },
    { name: "מעדן מילקי בטעם שוקולד עם אקסטרה קצפת", image: importImage('milky_chocolate_extra_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן מילקי בטעם פסק זמן", image: importImage('milky_pesek_zman.jpeg'), id: 4 },
    { name: "מעדן מילקי בטעם וניל עם קצפת", image: importImage('milky_vanilla_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן מילקי בטעם תות עם קצפת", image: importImage('milky_strawberry_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן מילקי בטעם שוקולד בלונדי", image: importImage('milky_blond_chocolate.jpeg'), id: 4 },
    { name: "מילקי בטעם שוקולד מריר, מוס שוקולד וקצפת", image: importImage('milky_trio_dark_chocolate_mousse_whipped_cream.jpeg'), id: 4 },
    { name: "מילקי בטעם שוקולד לבן, מוס בטעם פיסטוק וקצפת", image: importImage('milky_trio_white_chocolate_pistachio_mousse_whipped_cream.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן מילקי בטעם שוקולד עם קצפת", image: importImage('milky_chocolate_whipped_cream_8_pack.jpeg'), id: 4 },
    { name: "מילקי עוגות אישיות במילוי קרם חלב", image: importImage('milky_cake_individual_milk_cream_filling.jpeg'), id: 4 },
    { name: "מעדן הגולן בטעם שוקולד", image: importImage('golan_chocolate_pudding.jpeg'), id: 4 },
    { name: "מעדן הגולן בטעם וניל", image: importImage('golan_vanilla_pudding.jpeg'), id: 4 },
    { name: "דניאלה מעדן גבינה ויוגורט בטעם וניל 5%", image: importImage('daniella_cheese_yogurt_vanilla_5_percent.jpeg'), id: 4 },
    { name: "דניאלה מעדן גבינה ויוגורט בטעם תות 5%", image: importImage('daniella_cheese_yogurt_strawberry_5_percent.jpeg'), id: 4 },
    { name: "דניאלה מעדן גבינה מוקצף בטעם תות בננה", image: importImage('daniella_whipped_cheese_strawberry_banana.jpeg'), id: 4 },
    { name: "דניאלה מעדן גבינה ויוגורט מוקצף בטעם פיסטוק", image: importImage('daniella_whipped_cheese_pistachio.jpeg'), id: 4 },
    { name: "מעדן דני בטעם שוקולד 2%", image: importImage('dani_chocolate_2_percent.jpeg'), id: 4 },
    { name: "מעדן דני בטעם וניל 1.5%", image: importImage('dani_vanilla_1.5_percent.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן דני בטעם שוקולד", image: importImage('dani_chocolate_8_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן דני בטעם וניל", image: importImage('dani_vanilla_8_pack.jpeg'), id: 4 },
    { name: "מעדן חלב דל קלוריות בטעם שוקולד מריר 0.5% שומן", image: importImage('low_calorie_chocolate_pudding_dark_0.5_percen.jpeg'), id: 4 },
    { name: "מעדן חלב דל קלוריות בטעם שוקולד 0% שומן", image: importImage('low_calorie_chocolate_pudding_0_percen.jpeg'), id: 4 },
    { name: "מעדן גבינה סקי בטעם וניל", image: importImage('ski_cheese_pudding_vanilla.jpeg'), id: 4 },
    { name: "מעדן סקי תות 3%", image: importImage('ski_strawberry_3_percent.jpeg'), id: 4 },
    { name: "גמדים לדרך גבינה לבנה בטעם תות", image: importImage('gamadim_to_go_white_cheese_strawberry_puree.jpeg'), id: 4 },
    { name: "גמדים לדרך בטעם סלט פירות", image: importImage('gamadim_to_go_fruit_salad.jpeg'), id: 4 },
    { name: "גמדים לדרך גבינה לבנה בטעם תות ובננה", image: importImage('gamadim_to_go_white_cheese_strawberry_banana_puree.jpeg'), id: 4 },
    { name: "מארז 8 יחידות משקה גמדים בטעם תות בננה", image: importImage('gamadim_drink_strawberry_banana_8_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן גמדים בטעם תות בננה", image: importImage('gamadim_pudding_strawberry_banana_8_pack.jpeg'), id: 4 },
    { name: "מארז 4 יחידות מעדן גמדים בטעמי תות ובננה", image: importImage('gamadim_pudding_strawberry_banana_4_pack.jpeg'), id: 4 },
    { name: "מארז 4 יחידות מעדן גמדים בטעמי תות בננה/תפוח בננה", image: importImage('gamadim_pudding_strawberry_banana_apple_banana_4_pack.jpeg'), id: 4 },
    { name: "גיל לבן 3%", image: importImage('gil_white_3_percent.jpeg'), id: 4 },
    { name: "אשל לבן 4.5%", image: importImage('eshel_white_4.5_percent.jpeg'), id: 4 },
    { name: "מעדן YOLO עם שוקולד מריר", image: importImage('yolo_dark_chocolate.jpeg'), id: 4 },
    { name: "מעדן YOLO עם שכבות שוקולד לבן וחלב", image: importImage('yolo_white_milk_chocolate_layers.jpeg'), id: 4 },
    { name: "ג'לי פטל", image: importImage('raspberry_jelly.jpeg'), id: 4 },
    { name: "ג'לי אפרסק עם חתיכות אפרסק", image: importImage('peach_jelly_peach_pieces.jpeg'), id: 4 },
    { name: "ג'לי אננס עם חתיכות אננס", image: importImage('pineapple_jelly_pineapple_pieces.jpeg'), id: 4 },
    { name: "מעדן קרלו בטעם שוקולד", image: importImage('carlo_chocolate_pudding.jpeg'), id: 4 },
    { name: "מעדן קרלו שכבות בטעמי שוקולד ווניל", image: importImage('carlo_layers_chocolate_vanilla.jpeg'), id: 4 },
    { name: "מעדן קרלו בטעם וניל", image: importImage('carlo_vanilla_pudding.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן קרלו מיני בטעם שוקולד", image: importImage('carlo_mini_chocolate_8_pack.jpeg'), id: 4 },
    { name: "מארז 8 יחידות מעדן קרלו מיני בטעם וניל", image: importImage('carlo_mini_vanilla_8_pack.jpeg'), id: 4 },
    { name: "מעדן חלב בטעם שוקולד עם קצפת", image: importImage('chocolate_pudding_with_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן חלב בטעם וניל עם קצפת", image: importImage('vanilla_pudding_with_whipped_cream.jpeg'), id: 4 },
    { name: "מעדן מלבי", image: importImage('malabi_pudding.jpeg'), id: 4 },
    {
      name: "מעדן חלב עם אורז 3%",
      image: importImage('sweet_milk_pudding_with_rice_3_percent.jpeg'),
      id: 4
    },
    {
      name: "מעדן שיבולת שועל וחלב 2% שומן",
      image: importImage('oat_milk_pudding_2_percent.jpeg'),
      id: 4
    },
    {
      name: "בוואריה",
      image: importImage('bavaria_pudding.jpeg'),
      id: 4
    },
    {
      name: "טירמיסו",
      image: importImage('tiramisu_pudding.jpeg'),
      id: 4
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם וניל",
      image: importImage('go_protein_vanilla.jpeg'),
      id: 4
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם קרמל מלוח",
      image: importImage('go_protein_salted_caramel.jpeg'),
      id: 4
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם שוקולד",
      image: importImage('go_protein_chocolate.jpeg'),
      id: 4
    },
    {
      name: "טרמיסו טבעוני פרווה",
      image: importImage('vegan_tiramisu_parve.jpeg'),
      id: 4
    },
    {
      name: "מלבי טבעוני",
      image: importImage('vegan_malabi.jpeg'),
      id: 4
    }

  ];

  const initialSoftcheeses = [
    {
      name: "קוטג' 5%",
      image: importImage('cottage_5_percent_mehadrin.jpeg'),
      id: 4
    },
    {
      name: "קוטג' 9%",
      image: importImage('cottage_9_percent.jpeg'),
      id: 4
    },
    {
      name: "קוטג' 3%",
      image: importImage('cottage_3_percent.jpeg'),
      id: 4
    },
    {
      name: "קוטג' עם זיתים ירוקים 5%",
      image: importImage('cottage_with_green_olives_5_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינה לבנה 9%",
      image: importImage('white_cheese_9_percent_250g.jpeg'),
      id: 4
    },
    {
      name: "גבינה לבנה 3%",
      image: importImage('white_cheese_3_percent_500g.jpeg'),
      id: 4
    },
    {
      name: "גבינה לבנה 5%",
      image: importImage('white_cheese_5_percent_250g.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת בטעם טבעי 25%",
      image: importImage('napoleon_cream_cheese_natural_25_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת בטעם טבעי 16%",
      image: importImage('napoleon_cream_cheese_natural_16_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת עם שום שמיר 25%",
      image: importImage('napoleon_cream_cheese_garlic_dill_25_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת עם פלפל חלפיניו 24%",
      image: importImage('napoleon_cream_cheese_jalapeno_24_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת עם בצל 16% שומן",
      image: importImage('napoleon_cream_cheese_onion_16_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת עם עירית 25% שומן",
      image: importImage('napoleon_cream_cheese_chives_25_percent.jpeg'),
      id: 4
    },
    {
      name: "נפוליאון גבינת שמנת עם זיתים 24%",
      image: importImage('napoleon_cream_cheese_olives_24_percent.jpeg'),
      id: 4
    },
    {
      name: "לאבנה אסלית על בסיס יוגורט 5%",
      image: importImage('labaneh_asli_5_percent_yogurt.jpeg'),
      id: 4
    },
    {
      name: "לאבנה אסלית עם שמן זית וזעתר על בסיס יוגורט",
      image: importImage('labaneh_asli_olive_oil_zaatar_yogurt.jpeg'),
      id: 4
    },
    {
      name: "צזיקי פיראוס",
      image: importImage('tzatziki_piraeus.jpeg'),
      id: 4
    },
    {
      name: "בולגרית למריחה 5%",
      image: importImage('bulgarian_spread_5_percent_piraeus.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינה במרקם שמנת 5%",
      image: importImage('symphonia_cream_cheese_5_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינה במרקם שמנת עם זיתים ירוקים 5%",
      image: importImage('symphonia_cream_cheese_green_olives_5_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינה במרקם שמנת פלפל שיפקה חריף 5%",
      image: importImage('symphonia_cream_cheese_spicy_pepper_5_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינה במרקם שמנת שום שמיר 5%",
      image: importImage('symphonia_cream_cheese_garlic_dill_5_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינה במרקם שמנת בצל מקורמל 5%",
      image: importImage('symphonia_cream_cheese_caramelized_onion_5_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינת שמנת 16% עם בצל מטוגן ופלפל שחור",
      image: importImage('symphonia_cream_cheese_fried_onion_black_pepper_16_percent.jpeg'),
      id: 4
    },
    {
      name: "סימפוניה גבינת שמנת 16% שומן",
      image: importImage('symphonia_cream_cheese_16_percent.jpeg'),
      id: 4
    },
    {
      name: "ממרח גבינה ושוקולד",
      image: importImage('cheese_chocolate_spread_tera.jpeg'),
      id: 4
    },
    {
      name: "גבינת לאבנה 5%",
      image: importImage('labaneh_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת ריקוטה 5%",
      image: importImage('ricotta_cheese_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת מוצרלה בייבי 18%",
      image: importImage('baby_mozzarella_18_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת שמנת עם כמהין 30% שומן",
      image: importImage('cream_cheese_spread_30_percent_truffle_ny_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת ריקוטה למריחה 5%",
      image: importImage('ricotta_spread_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת ריקוטה למריחה בזיליקום 5%",
      image: importImage('ricotta_spread_basil_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת מסקרפונה 40%",
      image: importImage('mascarpone_cheese_40_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת עיזים למריחה 5%",
      image: importImage('goat_cheese_spread_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת לאבנה מחלב עיזים 5%",
      image: importImage('labaneh_goat_milk_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת לאבנה ציזיקי 5% למריחה",
      image: importImage('labaneh_tzatziki_spread_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת לאבנה דרוזית 9%",
      image: importImage('labaneh_druze_9_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם שווצרי 7%",
      image: importImage('light_swiss_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם רוקפור 7%",
      image: importImage('light_roquefort_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט עם זיתים 7%",
      image: importImage('light_olive_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט פיקנטי 7%",
      image: importImage('light_spicy_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט עם סלמון 7%",
      image: importImage('light_salmon_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4,
    },
    {
      name: "גבינה מותכת למריחה לייט עם שום שמיר 7%",
      image: importImage('light_garlic_dill_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם זעתר 7%",
      image: importImage('light_zaatar_spread_cheese_7_percent_monblanc.jpeg'),
      id: 4
    },
    {
      name: "גבינת עזים שמנת מותכת",
      image: importImage('goat_cream_cheese_spread_monblanc.jpeg'),
      id: 4
    },
    {
      name: "ארוחה בקטנה לאבנה אסלית פיראוס עם קרקרים",
      image: importImage('labaneh_snack_crackers_piraeus.jpeg'),
      id: 4
    },
    {
      name: "ארוחה בקטנה ציזיקי פיראוס עם קרקרים",
      image: importImage('tzatziki_snack_crackers_piraeus.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת",
      image: importImage('zuriel_spread_cheese.jpeg'),
      id: 4
    },
    {
      name: "גבינה מותכת 14% שומן - 16 משולשים",
      image: importImage('euro_spread_cheese_14_percent.jpeg'),
      id: 4
    },

  ];

  const initialSemihardcheeses = [
    {
      name: "גבינת מוצרלה 22%",
      image: importImage('mozzarella_cheese_22_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת מוצרלה מגורדת 22%",
      image: importImage('grated_mozzarella_22_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינה צפתית מעודנת 5%",
      image: importImage('safed_cheese_delicate_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "פרוסות בולגרית מעודנת 5%",
      image: importImage('sliced_bulgarian_cheese_delicate_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת שמנת מחלב עיזים 16%",
      image: importImage('goat_cream_cheese_16_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "מטבעות גבינת עיזים 22%",
      image: importImage('goat_cheese_coins_22_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "פטה כבשים 20%",
      image: importImage('sheep_feta_cheese_20_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינה בולגרית 5%",
      image: importImage('bulgarian_cheese_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "פרוסות מוצרלה 22% שומן",
      image: importImage('sliced_mozzarella_22_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינה בולגרית 16%",
      image: importImage('bulgarian_cheese_16_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינה בולגרית מעודנת 24%",
      image: importImage('delicate_bulgarian_cheese_24_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "מוצרלה פרסקה 18% שומן",
      image: importImage('mozzarella_fresca_18_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "קוביות בולגרית מעודנת 5%",
      image: importImage('delicate_bulgarian_cheese_cubes_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "פטה עיזים מעודנת 5%",
      image: importImage('delicate_goat_feta_5_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת חלומי 24%",
      image: importImage('halloumi_cheese_24_percent_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת ריקוטה פרסקה",
      image: importImage('ricotta_fresca_cheese_gad.jpeg'),
      id: 4
    },
    {
      name: "גבינת טבורוג 5%",
      image: importImage('tvorog_cheese_5_percent_zuriel.jpeg'),
      id: 4
    },
    {
      name: "גבינת חמד 16% שקית",
      image: importImage('hamad_cheese_16_percent_piraeus.jpeg'),
      id: 4
    },
    {
      name: "גבינת קממבר 24%",
      image: importImage('ein_gedi_camembert_cheese_24_percent_tnuva.jpeg'),
      id: 4
    },
    {
      name: "גבינת ברי 24%",
      image: importImage('adi_brie_cheese_24_percent_tnuva.jpeg'),
      id: 4
    },
    {
      name: "בוראטה - גבינת מוצרלה במילוי שמנת מתוקה 28% שומן",
      image: importImage('burrata_mozzarella_cream_filling_28_percent.jpeg'),
      id: 4
    },
    {
      name: "פרוסות מוצרלה 20%",
      image: importImage('mozzarella_slices_20_percent.jpeg'),
      id: 4
    }
  ];
  
  const initialYellowhardcheeses = [
    {
      name: "פרוסות גבינה חצי קשה 28% קופסא",
      image: importImage('semi_hard_cheese_slices_28_box.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינה חצי קשה דק דק 28%",
      image: importImage('semi_hard_cheese_slices_thin_28_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת בסגנון אמנטל 32%",
      image: importImage('emek_style_emmental_cheese_32.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינה קשה 15% בקופסא",
      image: importImage('hard_cheese_slices_15_box.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינה חצי קשה 9% מופחתת שומן",
      image: importImage('semi_hard_cheese_slices_9_low_fat.jpeg'),
      id: 4
    },
    {
      name: "גבינה בסגנון אמנטל 9%",
      image: importImage('emek_style_emmental_cheese_9.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינת גאודה 30%",
      image: importImage('sliced_gouda_cheese_30_large.jpeg'),
      id: 4
    },
    {
      name: "גבינת קשקבל 28%",
      image: importImage('gilad_kashkaval_cheese_28_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת פרמז'ן 23%",
      image: importImage('geva_parmesan_cheese_23_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת רוקפור 26%",
      image: importImage('galil_roquefort_cheese_26_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת קאשקבל 26%",
      image: importImage('kashkaval_cheese_26_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "גרנה פדנו גבינה קשה 29%",
      image: importImage('grana_padano_cheese_29_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "גבינה בשלה עם עובש כחול 30%",
      image: importImage('mature_blue_cheese_30_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "גבינת גרנה פדנו שבבים 29%",
      image: importImage('grana_padano_shavings_29_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "אצבעות גבינה חצי קשה 28%",
      image: importImage('emek_semi_hard_cheese_sticks_28_percent.jpeg'),
      id: 4
    },
    {
      name: "חטיף אצבעות גבינת מוצרלה",
      image: importImage('mozzarella_cheese_sticks.jpeg'),
      id: 4
    },
    {
      name: "פתיתים גבינה חצי קשה מגורדת 28% שומן",
      image: importImage('grated_semi_hard_cheese_28_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "פתיתים מיוחדים לפיצה 26%",
      image: importImage('special_pizza_cheese_shreds_26_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינה קשה מגורדת גרנה פדנו 29% שומן",
      image: importImage('grated_grana_padano_cheese_29_percent.jpeg'),
      id: 4
    },
    {
      name: "קוואטרו פורמאג'י 4 גבינות מגוררות 26%",
      image: importImage('quattro_formaggi_grated_26_percent.jpeg'),
      id: 4
    },
    {
      name: "מיקס פתיתי 3 גבינות- מוצרלה סקנדינבית וגאודה",
      image: importImage('three_cheese_mix_mozzarella_scandinavian_gouda.jpeg'),
      id: 4
    },
    {
      name: "גבינת אדם פלח 24% שומן",
      image: importImage('edam_cheese_slice_24_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "גבינת חלומי 23%",
      image: importImage('halloumi_cheese_23_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת חלומי 30%",
      image: importImage('halloumi_cheese_30_percent.jpeg'),
      id: 4
    },
    {
      name: "גבינת פקורינו פרוס מחלב כבשים 36%",
      image: importImage('sliced_pecorino_sheep_milk_36_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינה בסגנון סקנדינבי 31%",
      image: importImage('sliced_scandinavian_style_cheese_31_percent.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינת עיזים 30% שומן",
      image: importImage('sliced_goat_cheese_30_percent_fat.jpeg'),
      id: 4
    },
    {
      name: "פרוסות גבינת צ'דר 35% שומן",
      image: importImage('sliced_cheddar_cheese_35_percent_fat.jpeg'),
      id: 4
    }
  ];
  
  const initialButtermargarine = [
    {
      name: "חמאה משמנת מפוסטרת",
      image: importImage('tnuva_pasteurized_butter.jpeg'),
      id: 4
    },
    {
      name: "חמאה ללא מלח",
      image: importImage('lurpak_unsalted_butter.jpeg'),
      id: 4
    },
    {
      name: "חמאה עם מלח",
      image: importImage('lurpak_salted_butter.jpeg'),
      id: 4
    },
    {
      name: "מרגרינה לאפיה ובישול",
      image: importImage('blue_band_baking_cooking_margarine.jpeg'),
      id: 4
    },
    {
      name: "מרגרינה ללא תוספת מלח",
      image: importImage('blue_band_unsalted_margarine.jpeg'),
      id: 4
    },
    {
      name: "תחליף מרגרינה עשיר בשמן קוקוס",
      image: importImage('naturina_coconut_oil_margarine_substitute.jpeg'),
      id: 4
    },
    {
      name: "ממרח חמאה משמנים צמחיים",
      image: importImage('naturina_butter_flavored_spread_plant_based.jpeg'),
      id: 4
    }
  ];
  
  const initialCreamwhippedcreamcookingbaking = [
    {
      name: "קצפת מתוקה מוכנה",
      image: importImage('richs_sweet_whipped_cream.jpeg'),
      id: 4
    },
    {
      name: "קצפת מתוקה מוכנה - פרווה",
      image: importImage('richs_parve_sweet_whipped_cream.jpeg'),
      id: 4
    },
    {
      name: "קצפת צמחית במתיקות מעודנת",
      image: importImage('tnuva_plant_based_whipped_cream.jpeg'),
      id: 4
    },
    {
      name: "שמרים טריים לאפיה בגרגרים",
      image: importImage('fresh_yeast_for_baking.jpeg'),
      id: 4
    },
    {
      name: "שמנת מועשרת 15%",
      image: importImage('yotvata_enriched_cream_15.jpeg'),
      id: 4
    },
    {
      name: "שמנת להקצפה 38%",
      image: importImage('yotvata_whipping_cream_38.jpeg'),
      id: 4
    },
    {
      name: "שמנת חמוצה 9%",
      image: importImage('tnuva_original_sour_cream_9.jpeg'),
      id: 4
    },
    {
      name: "שמנת חמוצה 15%",
      image: importImage('tnuva_original_sour_cream_15.jpeg'),
      id: 4
    },
    {
      name: "שמנת של פעם 27%",
      image: importImage('tnuva_original_old_style_cream_27.jpeg'),
      id: 4
    },
    {
      name: "שמנת עמידה להקצפה 38%",
      image: importImage('tnuva_whipping_cream_38.jpeg'),
      id: 4
    },
    {
      name: "שמנת עמידה לבישול 15%",
      image: importImage('tnuva_cooking_cream_15.jpeg'),
      id: 4
    },
    {
      name: "שמנת עמידה מתוקה להקצפה 32%",
      image: importImage('tnuva_sweet_whipping_cream_32.jpeg'),
      id: 4
    },
    {
      name: "שמנת עמידה לבישול 10%",
      image: importImage('tnuva_cooking_cream_10.jpeg'),
      id: 4
    },
    {
      name: "רוטב שמנת וגראנה פדנו",
      image: importImage('pasta_ricco_cream_grana_padano_sauce.jpeg'),
      id: 4
    },
    {
      name: "רוטב עגבניות ושמנת",
      image: importImage('pasta_ricco_tomato_cream_sauce.jpeg'),
      id: 4
    },
    {
      name: "רוטב שמנת ופטריות",
      image: importImage('pasta_ricco_cream_mushroom_sauce.jpeg'),
      id: 4
    },
    {
      name: "גבינת מסקרפונה 38% שומן",
      image: importImage('tara_mascarpone_cheese_38.jpeg'),
      id: 4
    },
    {
      name: "מק אנד צ'יז",
      image: importImage('gad_mac_and_cheese.jpeg'),
      id: 4
    },
    {
      name: "קאצ'יו אה פפה- רוטב פקורינו ופלפל שחור",
      image: importImage('gad_cacio_e_pepe_sauce.jpeg'),
      id: 4
    },
    {
      name: "קצפת צמחית במתיקות מעודנת 21%",
      image: importImage('yotvata_plant_based_whipped_cream_21.jpeg'),
      id: 4
    },
    {
      name: "קרם מסקרפונה להקצפה עם זרעי וניל",
      image: importImage('gad_mascarpone_vanilla_cream.jpeg'),
      id: 4
    },
    {
      name: "קרם פטיסייר",
      image: importImage('gad_patisserie_cream.jpeg'),
      id: 4
    },
    {
      name: "רוטב אלפרדו - רוטב לפסטה על בסיס ריקוטה",
      image: importImage('gad_alfredo_sauce_ricotta_based.jpeg'),
      id: 4
    },
    {
      name: "רוטב פורצ'יני - רוטב ריקוטה ופטריות לפסטה",
      image: importImage('gad_porcini_ricotta_mushroom_sauce.jpeg'),
      id: 4
    },
    {
      name: "רוטב שמנת עם עגבניות 9%",
      image: importImage('yotvata_cream_tomato_sauce_9.jpeg'),
      id: 4
    },
    {
      name: "רוטב שמנת עם פטריות",
      image: importImage('yotvata_cream_mushroom_sauce.jpeg'),
      id: 4
    },
    {
      name: "סויה לבישול",
      image: importImage('alpro_soy_cooking_cream.jpeg'),
      id: 4
    }
  ];  

  const initialChilledpasta = [
    {
      name: "רביולי במילוי גבינות",
      image: importImage('cheese_filled_ravioli.jpeg'),
    },
    {
      name: "רביולי במילוי בטטה",
      image: importImage('sweet_potato_filled_ravioli.jpeg'),
    },
    {
      name: "טורטליני במילוי פטריות פרווה",
      image: importImage('mushroom_filled_tortellini.jpeg'),
    },
    {
      name: "רביולי במילוי גבינות Kids",
      image: importImage('kids_cheese_filled_ravioli.jpeg'),
    },
  ];//

  const initialEggs = [
    {
      name: "מארז 12 ביצים L",
      image: importImage('12_eggs_L.jpeg'),
      id: 4
    },
    {
      name: "מארז 12 ביצים M",
      image: importImage('12_eggs_M.jpeg'),
      id: 4
    },
    {
      name: "מארז 18 ביצים L",
      image: importImage('18_eggs_L.jpeg'),
      id: 4
    },
    {
      name: "מארז 18 ביצים M",
      image: importImage('18_eggs_M.jpeg'),
      id: 4
    },
    {
      name: "מארז 12 ביצים אורגניות L",
      image: importImage('12_organic_eggs_L.jpeg'),
      id: 4
    }
  ];  

  const initialSausagespastrami = [
    {
      name: "קורנדביף",
      image: importImage("premium_corned_beef_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "רוסטביף",
      image: importImage("premium_roast_beef_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי סרוולט",
      image: importImage("servelat_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סלמי הרץ",
      image: importImage("hertz_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "כתף בקר מפולפל",
      image: importImage("peppered_beef_shoulder_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סרוולט בסגנון הונגרי",
      image: importImage("hungarian_style_servelat_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סלמי בסגנון צרפתי",
      image: importImage("french_style_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה של פעם",
      image: importImage("traditional_pastrami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "פרושטו בקר",
      image: importImage("beef_prosciutto_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "גלילית על האש",
      image: importImage("grilled_galilit_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "גלילית עם דבש",
      image: importImage("honey_glazed_galilit_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סלמי תה",
      image: importImage("tea_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה של פעם מרכיבים טבעיים",
      image: importImage("traditional_pastrami_natural_ingredients_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "קבנוס פפרוני",
      image: importImage("pepperoni_kabanos_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "קבנוס קלאסי",
      image: importImage("classic_kabanos_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "נשנושי קבנוס",
      image: importImage("kabanos_snacks_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סלמי מעושן",
      image: importImage("smoked_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "קבנוס",
      image: importImage("kabanos_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "קבנוס מעודן",
      image: importImage("mild_kabanos_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה מעושנת",
      image: importImage("extra_smoked_thin_sliced_pastrami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה בדבש",
      image: importImage("honey_pastrami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "מארז סלמי תה מעושן + פסטרמה חרמון הודו ועוף",
      image: importImage("smoked_tea_salami_hermon_turkey_chicken_package_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "מארז חרמון הודו ועוף ברביקיו + הודו ועוף בדבש",
      image: importImage("hermon_bbq_honey_turkey_chicken_package_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה תבור",
      image: importImage("tabor_pastrami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה גחלים",
      image: importImage("coals_pastrami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה ברביקיו",
      image: importImage("bbq_pastrami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "חזה בקר פרוס",
      image: importImage("thin_sliced_beef_breast_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי קוניאק",
      image: importImage("cognac_salami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי בסגנון איטלקי",
      image: importImage("italian_salami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי בשן",
      image: importImage("beshan_salami_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "כתף בקר מעושנת",
      image: importImage("smoked_beef_shoulder_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי תה מעושן פרוס",
      image: importImage("smoked_tea_salami_sliced_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "הודו אפוי",
      image: importImage("thin_sliced_baked_turkey_zoglowek.jpeg"),
      id: 6,
    },
    {
      name: "סלמי בסגנון איטלקי מפולפל",
      image: importImage("peppered_italian_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "סלמי מעושן בסגנון איטלקי",
      image: importImage("smoked_italian_salami_yachiam.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה מהגריל",
      image: importImage("grilled_chicken_pastrami_oftov.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה מהמעשנה",
      image: importImage("smoked_chicken_pastrami_oftov.jpeg"),
      id: 6,
    },
    {
      name: "פסטרמה מקורמלת",
      image: importImage("caramelized_chicken_pastrami_oftov.jpeg"),
      id: 6,
    },
    {
      name: "צלעות אסאדו מעושנות",
      image: importImage("smoked_asado_ribs_zoglowek_premium.jpeg"),
      id: 6,
    },
  ];

  const initialSalads = [
    {
      name: "חומוס עם טחינה",
      image: importImage("hummus_with_tahini_achla_strauss.jpeg"),
    },
    {
      name: "חומוס גלילי",
      image: importImage("galilee_hummus_achla_strauss.jpeg"),
    },
    {
      name: "חומוס עם זעתר",
      image: importImage("hummus_with_zaatar_achla_strauss.jpeg"),
    },
    {
      name: "חומוס עם צנוברים",
      image: importImage("hummus_with_pine_nuts_achla_strauss.jpeg"),
    },
    {
      name: "חומוס עם חריף",
      image: importImage("hummus_with_spicy_achla_strauss.jpeg"),
    },
    {
      name: "חומוס גלילי במרקם ותיבול מעודן",
      image: importImage("galilee_hummus_achla_strauss_600g.jpeg"),
    },
    {
      name: "טחינה",
      image: importImage("tahini_achla_strauss_500g.jpeg"),
    },
    {
      name: "טחינה לבנה",
      image: importImage("white_tahini_achla_strauss.jpeg"),
    },
    {
      name: "חומוס",
      image: importImage("hummus_achla_strauss_400g.jpeg"),
    },
    {
      name: "חומוס עשיר ב 30% טחינה גולמית",
      image: importImage("rich_hummus_30percent_tahini_achla_strauss.jpeg"),
    },
    {
      name: "חומוס עשיר ב 40% טחינה גולמית",
      image: importImage("rich_hummus_40percent_tahini_achla_strauss.jpeg"),
    },
    {
      name: "טחינה ירוקה עם פטרוזיליה",
      image: importImage("green_tahini_with_parsley_mashani.jpeg"),
    },
    {
      name: "חומוס מסעדות בתוספת לימון",
      image: importImage("restaurant_hummus_with_lemon_mashani.jpeg"),
    },
    {
      name: "חומוס אבו גוש",
      image: importImage("hummus_abu_gosh_shamir_200g.jpeg"),
    },
    {
      name: "חומוס אבו גוש עם חריף",
      image: importImage("hummus_abu_gosh_with_spicy_shamir.jpeg"),
    },
    {
      name: "חומוס מסבחה",
      image: importImage("masabacha_hummus_shamir_500g.jpeg"),
    },
    {
      name: "חומוס עשיר ב- 50% טחינה גולמית",
      image: importImage("rich_hummus_50percent_tahini_achla_strauss.jpeg"),
    },
    {
      name: "סלט כרוב סגול במיונז",
      image: importImage("purple_cabbage_mayo_achla.jpeg"),
    },
    {
      name: "סלט חציל פיקנטי",
      image: importImage("spicy_eggplant_achla.jpeg"),
    },
    {
      name: "סלט חצילים בטעם כבד",
      image: importImage("eggplant_liver_flavor_achla.jpeg"),
    },
    {
      name: "סלט מטבוחה",
      image: importImage("matbucha_salad_achla.jpeg"),
    },
    {
      name: "סלט חצילים במיונז",
      image: importImage("eggplant_mayo_achla.jpeg"),
    },
    {
      name: "סלט קוביות סלק",
      image: importImage("diced_beet_salad_achla.jpeg"),
    },
    {
      name: "סלט מטבוחה חריפה אש",
      image: importImage("spicy_matbucha_fire_achla.jpeg"),
    },
    {
      name: "סלט טורקי",
      image: importImage("turkish_salad_achla.jpeg"),
    },
    {
      name: "סלט חציל קלוי עם שמן זית",
      image: importImage("grilled_eggplant_olive_oil_achla.jpeg"),
    },
    {
      name: "סלט קולסלאו",
      image: importImage("coleslaw_salad_achla.jpeg"),
    },
    {
      name: "גוואקמולי",
      image: importImage("guacamole_achla.jpeg"),
    },
    {
      name: "ממרח גוואקמולי חריף אש",
      image: importImage("spicy_guacamole_achla.jpeg"),
    },
    {
      name: "סחוג ירוק פלפלים",
      image: importImage("green_schug_pepper_salad_mashani.jpeg"),
    },
    {
      name: "סלט גזר חריף במיץ לימון",
      image: importImage("spicy_carrot_lemon_juice_salad_mashani.jpeg"),
    },
    {
      name: "סלט תפוחי אדמה במיונז",
      image: importImage("potato_mayo_salad_mashani.jpeg"),
    },
    {
      name: "סלט עגבניות סלסה חריף",
      image: importImage("spicy_tomato_salsa_salad_mashani.jpeg"),
    },
    {
      name: "סלט פלפלים מרוקאי חריף",
      image: importImage("spicy_moroccan_pepper_salad_mashani.jpeg"),
    },
    {
      name: "סלט חצילים על האש בטחינה",
      image: importImage("grilled_eggplant_tahini_salad_mashani.jpeg"),
    },
    {
      name: "סלט ביצים במיונז",
      image: importImage("egg_mayo_salad_mashani.jpeg"),
    },
    {
      name: "סלט כרוב קולסלאו בסגנון אמריקאי",
      image: importImage("american_style_coleslaw_salad_mashani.jpeg"),
    },
    {
      name: "סחוג אדום פלפלים",
      image: importImage("red_schug_pepper_salad_mashani.jpeg"),
    },
    {
      name: "סלט טונה במיונז",
      image: importImage("tuna_mayo_salad_mashani.jpeg"),
    },
    {
      name: "סלט פלפל צ'ומה",
      image: importImage("pepper_chuma_salad_mashani.jpeg"),
    },
    {
      name: "סחוג תימני חריף",
      image: importImage("yemeni_schug_spicy_biton.jpeg"),
    },
    {
      name: "חציל קלוי על האש",
      image: importImage("grilled_eggplant_sera.jpeg"),
    },
    {
      name: "לימון בלאדי ביתי",
      image: importImage("homemade_baladi_lemon_olechem.jpeg"),
    },
    {
      name: "אריסה חריפה",
      image: importImage("spicy_harissa_pita_olechem.jpeg"),
    },
    {
      name: "ממרח לימון כבוש",
      image: importImage("preserved_lemon_spread_olechem.jpeg"),
    },
    {
      name: "ממרח עגבניות מיובשות",
      image: importImage("sun_dried_tomato_spread_olechem.jpeg"),
    },
    {
      name: "טפנד זיתי קלמטה",
      image: importImage("kalamata_olive_tapenade_olechem.jpeg"),
    },
    {
      name: "ממרח ארטישוק",
      image: importImage("artichoke_spread_olechem.jpeg"),
    },
    {
      name: "ממרח שום",
      image: importImage("garlic_spread_olechem.jpeg"),
    },
    {
      name: "ממרח פלפלים קלויים",
      image: importImage("roasted_pepper_spread_olechem.jpeg"),
    },
    {
      name: "פסטו ביתי",
      image: importImage("homemade_pesto_olechem.jpeg"),
    },
    {
      name: "אריסה פיקנטית",
      image: importImage("spicy_harissa_olivia.jpeg"),
    },
    {
      name: "אריסה חריפה",
      image: importImage("hot_harissa_olivia.jpeg"),
    },
    {
      name: "אריסה",
      image: importImage("harissa_perg.jpeg"),
    },
    {
      name: "אריסה בטעם ביתי חריף פיקנטי",
      image: importImage("homemade_spicy_harissa_biton.jpeg"),
    },
    {
      name: "אריסה מתוקה",
      image: importImage("sweet_harissa_biton.jpeg"),
    },
    {
      name: "טפנד זיתים ירוקים ועשבי תיבול",
      image: importImage("green_olive_tapenade_olechem.jpeg"),
    },
    {
      name: "לימון בלאדי - סלט לימון כבוש",
      image: importImage("baladi_lemon_salad_biton.jpeg"),
    },
    {
      name: "ממרח חציל עם נגיעות עגבניה",
      image: importImage("eggplant_tomato_spread_olechem.jpeg"),
    },
    {
      name: "ממרח שיפקה כבוש חריף",
      image: importImage("spicy_pickled_schifka_biton.jpeg"),
    },
    {
      name: "סלט אבוקדו עם ביצים",
      image: importImage("avocado_egg_salad_shamir.jpeg"),
    },
    {
      name: "סלט חזרת",
      image: importImage("horseradish_salad_biton.jpeg"),
    },
    {
      name: "סלט חמוצים סיני",
      image: importImage("chinese_pickled_salad_shamir.jpeg"),
    },
    {
      name: "סלט טונה עם ירקות",
      image: importImage("tuna_vegetable_salad_shamir.jpeg"),
    },
    {
      name: "סלט פלפלים חריף",
      image: importImage("spicy_pepper_salad_shamir.jpeg"),
    },
    {
      name: "סלט שום כתוש",
      image: importImage("crushed_garlic_salad_biton.jpeg"),
    },
    {
      name: "עגבניות מיובשות בשמן זית",
      image: importImage("sun_dried_tomatoes_olive_oil_parag.jpeg"),
    },
    {
      name: "עמבה",
      image: importImage("amba_biton.jpeg"),
    },
    {
      name: "פלפל צ'ומה",
      image: importImage("pepper_chuma_parag.jpeg"),
    },
    {
      name: "פלפל צ'ומה חריף פיקנטי",
      image: importImage("spicy_pepper_chuma_biton.jpeg"),
    },
    {
      name: "פלפל רצועות קלוי / מטוגן",
      image: importImage("roasted_fried_pepper_strips_shamir.jpeg"),
    },
    {
      name: "פסטו קלאסי",
      image: importImage("classic_pesto_fresco.jpeg"),
    },
    {
      name: "שום כתוש",
      image: importImage("crushed_garlic_parag.jpeg"),
    },
  ];//

  initialMilk.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialYogurtdelicacies.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialinitialYogurtdrinking.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialMilkdelicaciesdesserts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSoftcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSemihardcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialYellowhardcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialButtermargarine.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCreamwhippedcreamcookingbaking.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialChilledpasta.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialEggs.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSausagespastrami.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSalads.sort((a, b) => a.name.localeCompare(b.name, 'he'));


    
const [milk, setMilk] = useState<{ name: string; image: any; count: number }[]>(
  initialMilk.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [yogurtDelicacies, setYogurtDelicacies] = useState<{ name: string; image: any; count: number }[]>(
  initialYogurtdelicacies.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [yogurtDrink, setYogurtDrink] = useState<{ name: string; image: any; count: number }[]>(
  initialinitialYogurtdrinking.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [milkDelicaciesDesserts, setMilkDelicaciesDesserts] = useState<{ name: string; image: any; count: number }[]>(
  initialMilkdelicaciesdesserts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [softCheese, setSoftCheese] = useState<{ name: string; image: any; count: number }[]>(
  initialSoftcheeses.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [semiHardCheese, setSemiHardCheese] = useState<{ name: string; image: any; count: number }[]>(
  initialSemihardcheeses.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [yellowHardCheese, setYellowHardCheese] = useState<{ name: string; image: any; count: number }[]>(
  initialYellowhardcheeses.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [butterMargarine, setButterMargarine] = useState<{ name: string; image: any; count: number }[]>(
  initialButtermargarine.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [creamWhippedCreamCookingBaking, setCreamWhippedCreamCookingBaking] = useState<{ name: string; image: any; count: number }[]>(
  initialCreamwhippedcreamcookingbaking.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [chilledPasta, setChilledPasta] = useState<{ name: string; image: any; count: number }[]>(
  initialChilledpasta.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [eggs, setEggs] = useState<{ name: string; image: any; count: number }[]>(
  initialEggs.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [sausagesPastrami, setSausagespastrami] = useState<{ name: string; image: any; count: number }[]>(
  initialSausagespastrami.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [salads, setSalads] = useState<{ name: string; image: any; count: number }[]>(
  initialSalads.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);


  const handleIncrement = (name: string) => {
    setMilk(milk.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
    
    setYogurtDelicacies(yogurtDelicacies.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setYogurtDrink(yogurtDrink.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setMilkDelicaciesDesserts(milkDelicaciesDesserts.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setSoftCheese(softCheese.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setSemiHardCheese(semiHardCheese.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setYellowHardCheese(yellowHardCheese.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setButterMargarine(butterMargarine.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setCreamWhippedCreamCookingBaking(creamWhippedCreamCookingBaking.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setChilledPasta(chilledPasta.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  
    setEggs(eggs.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));

    setSausagespastrami(sausagesPastrami.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));

    setSalads(salads.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  };
  
  const handleDecrement = (name: string) => {
    setMilk(milk.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
    
    setYogurtDelicacies(yogurtDelicacies.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setYogurtDrink(yogurtDrink.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setMilkDelicaciesDesserts(milkDelicaciesDesserts.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setSoftCheese(softCheese.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setSemiHardCheese(semiHardCheese.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setYellowHardCheese(yellowHardCheese.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setButterMargarine(butterMargarine.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setCreamWhippedCreamCookingBaking(creamWhippedCreamCookingBaking.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setChilledPasta(chilledPasta.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  
    setEggs(eggs.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));

    setSausagespastrami(sausagesPastrami.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));

    setSalads(salads.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };
  

  const handleSave = async () => {
    const milkToSave = milk.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const yogurtDelicaciesToSave = yogurtDelicacies.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const yogurtDrinkToSave = yogurtDrink.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const milkDelicaciesDessertsToSave = milkDelicaciesDesserts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const softCheeseToSave = softCheese.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const semiHardCheeseToSave = semiHardCheese.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const yellowHardCheeseToSave = yellowHardCheese.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const butterMargarineToSave = butterMargarine.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const creamWhippedCreamCookingBakingToSave = creamWhippedCreamCookingBaking.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const chilledPastaToSave = chilledPasta.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const eggsToSave = eggs.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const sausagesPastramiToSave = sausagesPastrami.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const saladsToSave = salads.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
  
    const allItems = [
      ...milkToSave,
      ...yogurtDelicaciesToSave,
      ...yogurtDrinkToSave,
      ...milkDelicaciesDessertsToSave,
      ...softCheeseToSave,
      ...semiHardCheeseToSave,
      ...yellowHardCheeseToSave,
      ...butterMargarineToSave,
      ...creamWhippedCreamCookingBakingToSave,
      ...chilledPastaToSave,
      ...eggsToSave,
      ...sausagesPastramiToSave,
      ...saladsToSave,
    ];
  
    allItems.forEach(item => addProduct(item));
  
  };
  

  return (
    <div>
      <div> 
        <ProductsPage
          products={milk}
          categoryTitle="חלב ומשקאות חלב"
          icon={<img alt="" src={importImage('milk_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={yogurtDelicacies}
          categoryTitle="יוגורטים ודליקטסים"
          icon={<img alt="" src={importImage('yogurt_delicacies_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={yogurtDrink}
          categoryTitle="יוגורטים לשתייה"
          icon={<img alt="" src={importImage('yogurt_drink_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={milkDelicaciesDesserts}
          categoryTitle="דליקטסים וקינוחים מחלב"
          icon={<img alt="" src={importImage('milk_delicacies_desserts_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={softCheese}
          categoryTitle="גבינות רכות"
          icon={<img alt="" src={importImage('cheese_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={semiHardCheese}
          categoryTitle="גבינות חצי קשות"
          icon={<img alt="" src={importImage('semi_hard_cheese_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={yellowHardCheese}
          categoryTitle="גבינות קשות צהובות"
          icon={<img alt="" src={importImage('yellow_hard_cheese_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={butterMargarine}
          categoryTitle="חמאה ומרגרינה"
          icon={<img alt="" src={importImage('butter_margarine_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={creamWhippedCreamCookingBaking}
          categoryTitle="שמנת, קצפת, בישול ואפייה"
          icon={<img alt="" src={importImage('cream_whipped_cream_cooking_baking_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={chilledPasta}
          categoryTitle="פסטות קפואות"
          icon={<img alt="" src={importImage('chilled_pasta_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={eggs}
          categoryTitle="ביצים"
          icon={<img alt="" src={importImage('eggs_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={sausagesPastrami}
          categoryTitle="נקניקים ופסטרמה"
          icon={<img alt="" src={importImage('sausages_pastrami_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={salads}
          categoryTitle="סלטים"
          icon={<img alt="" src={importImage('salads_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};
export default DeliPage;