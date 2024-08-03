import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
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

  const initialMilk = [
    { 
      name: "חלב בקרטון 3% , 1 ל׳", 
      image: importImage('milk_carton_3_percent_mehadrin.jpeg') 
    },
    { 
      name: "חלב דל לקטוז 2%", 
      image: importImage('milk_carton_2_percent_low_lactose.jpeg') 
    },
    { 
      name: "חלב נטול לקטוז 2%", 
      image: importImage('milk_carton_2_percent_no_lactose.jpeg') 
    },
    { 
      name: "חלב בקרטון 1%", 
      image: importImage('milk_carton_1_percent.jpeg') 
    },
    { 
      name: "חלב בקרטון 3% , 1.5 ל׳", 
      image: importImage('milk_carton_3_percent_1.5_liters.jpeg') 
    },
    { 
      name: "חלב בשקית 3%", 
      image: importImage('milk_bag_3_percent_mehadrin.jpeg') 
    },
    { 
      name: "חלב מלא בטעם של פעם", 
      image: importImage('full_fat_milk_traditional_flavor.jpeg') 
    },
    { 
      name: "חלב עיזים", 
      image: importImage('goat_milk.jpeg') 
    },
    { 
      name: "חלב 3% בקרטון , 2 ל׳", 
      image: importImage('milk_carton_3_percent_2_liters.jpeg') 
    },
    { 
      name: "חלב עיזים משק צוריאל", 
      image: importImage('full_fat_goat_milk_zuriel.jpeg') 
    },
    { 
      name: "משקה רוויון 1.5% , 1 ל׳", 
      image: importImage('buttermilk_drink_1.5_percent.jpeg') 
    },
    { 
      name: "משקה רוויון 1.5% 500 מל׳", 
      image: importImage('buttermilk_drink_1.5_percent_500ml.jpeg') 
    },
    { 
      name: "משקה שוקו בקבוק", 
      image: importImage('chocolate_milk_drink_bottle.jpeg') 
    },
    { 
      name: "משקה אייס קפה", 
      image: importImage('ice_coffee_drink_mehadrin.jpeg') 
    },
    { 
      name: "משקה מוקה", 
      image: importImage('mocha_drink_mehadrin.jpeg') 
    },
    { 
      name: "משקה בננה", 
      image: importImage('banana_drink_mehadrin.jpeg') 
    },
    { 
      name: "מארז 8 שקיות שוקו", 
      image: importImage('chocolate_milk_8_pack.jpeg') 
    },
    { 
      name: "שקית שוקו", 
      image: importImage('chocolate_milk_bag.jpeg') 
    },
    { 
      name: "מארז 6 שקיות מוקה", 
      image: importImage('mocha_6_pack.jpeg') 
    },
    { 
      name: "שקית מוקה", 
      image: importImage('mocha_bag.jpeg') 
    },
    { 
      name: "משקה שוקו בקבוק עם פקק", 
      image: importImage('chocolate_milk_bottle_cap.jpeg')
    },
    { 
      name: "משקה קפה 25 PRO עם חלבון חלב 1.5% שומן", 
      image: importImage('coffee_protein_drink_25_pro.jpeg') 
    },
    { 
      name: "משקה קפה עם חלבון חלב", 
      image: importImage('coffee_protein_drink.jpeg') 
    },
    { 
      name: "משקה וניל פרו Pro מועשר בחלבון 1.5%", 
      image: importImage('vanilla_protein_drink_pro.jpeg') 
    },
    { 
      name: "משקה חלב PRO עם שיבולת שועל ובננה", 
      image: importImage('banana_oat_milk_protein_drink.jpeg') 
    },
    { 
      name: "אייס קפה קלאסי 1.6% בכוס", 
      image: importImage('classic_ice_coffee_cup.jpeg') 
    },
    { 
      name: "אייס קפה בסגנון מעודן 1.6% בכוס", 
      image: importImage('mild_ice_coffee_cup.jpeg') 
    },
    { 
      name: "אייס קפה בסגנון חזק 1.2% בכוס", 
      image: importImage('strong_ice_coffee_cup.jpeg') 
    },
    { 
      name: "משקה חלב תותי פרוטי - בטעם תות ושוקולד לבן", 
      image: importImage('strawberry_white_chocolate_milk_drink.jpeg') 
    },
    { 
      name: "משקה חלב קפוצ'ינו בבקבוק אישי", 
      image: importImage('personal_bottle_cappuccino_milk_drink.jpeg') 
    },
    { 
      name: "משקה חלב בטעם בננה 2% בקבוק אישי", 
      image: importImage('personal_bottle_banana_milk_drink_2_percent.jpeg') 
    },
    { 
      name: "משקה קפה קר בטעם לאטה שוקולד", 
      image: importImage('cold_coffee_drink_chocolate_latte.jpeg') 
    },
    {
      name: "משקה קפה קר בטעם קפוצ'ינו", 
      image: importImage('cold_coffee_drink_cappuccino.jpeg') 
    },
    { 
      name: "משקה PRO בטעם שוקולד אגוזים עם חלבון חלב", 
      image: importImage('pro_drink_chocolate_hazelnut_protein.jpeg') 
    },
    { 
      name: "משקה קפה קר בסגנון קלאסי ללא המתקה 1.8% שומן", 
      image: importImage('unsweetened_classic_cold_coffee_drink_1.8_percent.jpeg') 
    },
    { 
      name: "חלב עמיד 3%", 
      image: importImage('3%_fortified_milk.jpeg') 
    },

  ];
  initialMilk.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialYogurtdelicacies = [
    { name: "מולר יוגורט עם פצפוצי שוקולד", image: importImage('muller_mix_chocolate_flakes.jpeg') },
  { name: "מולר יוגורט עם בוטנים ושקדים מקורמלים", image: importImage('bio_mixed_peanuts_almonds.jpeg') },
  { name: "מולר יוגורט עם קורנפלקס מצופה שוקולד", image: importImage('muller_mix_choco_cornflakes.jpeg') },
  { name: "מולר יוגורט עם גליליות במילוי קרם", image: importImage('muller_mix_cream_rolls.jpeg') },
  { name: "מולר יוגורט עם כדורים מצופים שוקולד חום לבן", image: importImage('bio_choco_balls.jpeg') },
  { name: "מולר יוגורט גרעינים אגוזים וחמוציות", image: importImage('bio_nuts_berries.jpeg') },
  { name: "יוגורט עם שבבי פקאן מסוכרים מצופים שוקולד", image: importImage('pecan_choco_yogurt.jpeg') },
  { name: "יוגורט עם פצפוצי שוקולד", image: importImage('choco_flakes_yogurt.jpeg') },
  { name: "יוגורט בטעם תות עם קורנפלקס מצופה שוקולד חלב", image: importImage('strawberry_choco_cornflakes.jpeg') },
  { name: "יוגורט עם אגוזי לוז ושקדים בקרמל מלוח 4.5%", image: importImage('hazelnuts_almonds_caramel_yogurt.jpeg') },
  { name: "יוגורט דנונה מולטי 3% שומן", image: importImage('danone_multi_3_percent.jpeg') },
  { name: "יוגורט דנונה מולטי עם צ'יה 3% שומן", image: importImage('danone_chia_3_percent.jpeg') },
  { name: "יוגורט דנונה ביו 3% שומן", image: importImage('danone_bio_3_percent.jpeg') },
  { name: "יוגורט דנונה ביו 1.7% שומן", image: importImage('danone_bio_1.7_percent.jpeg') },
  { name: "יוגורט דנונה ביו 0% שומן", image: importImage('danone_bio_0_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט דנונה ביו 3% שומן", image: importImage('8_pack_danone_bio_3_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט דנונה ביו 1.7% שומן", image: importImage('8_pack_danone_bio_1.7_percent.jpeg') },
  { name: "יוגורט בסגנון יווני", image: importImage('greek_style_yogurt.jpeg') },
  { name: "יוגורט פרוביוטי דל לקטוז", image: importImage('probiotic_lactose_free_yogurt.jpeg') },
  { name: "יוגורט במתיקות מעודנת 2% ללא תוספת סוכר- מארז 8 יח", image: importImage('8_pack_sugar_free_2_percent_yogurt.jpeg') },
  { name: "יוגורט עם אפרסק 3%", image: importImage('peach_yogurt_3_percent.jpeg') },
  { name: "יוגורט עם פירות יער 3%", image: importImage('berry_yogurt_3_percent.jpeg') },
  { name: "יוגורט עם תות 3%", image: importImage('strawberry_yogurt_3_percent.jpeg') },
  { name: "מארז 8 יוגורט עם תות 3%", image: importImage('8_pack_strawberry_yogurt_3_percent.jpeg') },
  { name: "מארז 8 גביעים יוגורט Greek בסגנון יווני 6.5% שומן", image: importImage('8_pack_greek_yogurt_6.5_percent.jpeg') },
  { name: "דנונה SKYR יוגורט בטעם לימון", image: importImage('skyr_lemon_creme_yogurt.jpeg') },
  { name: "דנונה SKYR יוגורט בטעם תות", image: importImage('skyr_strawberry_yogurt.jpeg') },
  { name: "יוגורט PRO פרו 1.5% 20 גרם חלבון", image: importImage('pro_yogurt_1.5_percent_20g_protein.jpeg') },
  { name: "יוגורט PRO בטעם תות 0% 20 גרם חלבון", image: importImage('pro_yogurt_strawberry_0_percent_20g_protein.jpeg') },
  { name: "יוגורט PRO בטעם אפרסק 0% 20 גרם חלבון", image: importImage('pro_yogurt_peach_0_percent_20g_protein.jpeg') },
  { name: "יוגורט PRO בטעם וניל 0% , 20 גרם חלבון", image: importImage('pro_yogurt_vanilla_0_percent_20g_protein.jpeg') },
  { name: "יוגורט PRO בטעם פירות יער 0% 20 גרם חלבון", image: importImage('pro_yogurt_berry_0_percent_20g_protein.jpeg') },
  { name: "יוגורט PRO לבן 0% 21 גרם חלבון", image: importImage('pro_yogurt_plain_0_percent_21g_protein.jpeg') },
  { name: "יוגורט PRO בטעם תות 0% סוכר לבן 20 גרם חלבון", image: importImage('pro_yogurt_strawberry_0_percent_sugar_20g_protein.jpeg') },
  { name: "יוגורט PRO בטעם מנגו ואפרסק 0% סוכר לבן", image: importImage('pro_yogurt_mango_peach_0_percent_sugar.jpeg') },
  { name: "יוגורט דנונה PRO בטעם בננה טופי", image: importImage('pro_yogurt_banana_toffee.jpeg') },
  { name: "יוגורט דנונה PRO בטעם פיסטוק 0% שומן", image: importImage('pro_yogurt_pistachio_0_percent.jpeg') },
  { name: "דנונה PRO יוגורט בטעם וניל עוגיות 0% שומן", image: importImage('pro_yogurt_vanilla_cookies_0_percent.jpeg') },
  { name: "יוגורט בטעם וניל 0% לייט אנד פרי 10 גרם חלבון", image: importImage('lite_free_vanilla_0_percent_10g_protein.jpeg') },
  { name: "יוגורט בטעם קפוצ'ינו 0% לייט אנד פרי", image: importImage('lite_free_cappuccino_0_percent.jpeg') },
  { name: "יוגורט בטעם ליצ'י 0% לייט אנד פרי", image: importImage('lite_free_lychee_0_percent.jpeg') },
  { name: "מארז יוגורט עם פרי 0% בטעמי אפרסק ותות", image: importImage('8_pack_fruit_peach_strawberry_0_percent.jpeg') },
  { name: "יוגורט אקטיביה 3%", image: importImage('activia_3_percent.jpeg') },
  { name: "מארז 8 יח' אקטיביה יוגורט 1.5% שומן", image: importImage('8_pack_activia_1.5_percent.jpeg') },
  { name: "מארז 8 יח' יוגורט אקטיביה 3%", image: importImage('8_pack_activia_3_percent.jpeg') },
  { name: "יוגורט אקטיביה עם שיבולת שועל ושזיף 2.5%", image: importImage('activia_oat_plum_2.5_percent.jpeg') },
  { name: "יוגורט אקטיביה עם תות וצ'יה 3%", image: importImage('activia_strawberry_chia_3_percent.jpeg') },
  { name: "יוגורט נטול לקטוז 3%", image: importImage('lactose_free_3_percent.jpeg') },
  { name: "יוגורט 1.5% ביו BIO", image: importImage('bio_1.5_percent.jpeg') },
  { name: "יוגורט 3% ביו BIO", image: importImage('bio_3_percent.jpeg') },
  { name: "יוגורט 4.5%", image: importImage('yogurt_4.5_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט BIO 1.5%", image: importImage('8_pack_bio_1.5_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט BIO 3%", image: importImage('8_pack_bio_3_percent.jpeg') },
  { name: "יוגורט פרילי עם גרנולה ופירות 1.9%", image: importImage('prili_granola_fruit.jpeg') },
  { name: "יוגורט פרילי עם תות 1.5% שומן", image: importImage('prili_strawberry_1.5_percent.jpeg') },
  { name: "יוגורט פרילי עם אננס 1.5% שומן", image: importImage('prili_pineapple_1.5_percent.jpeg') },
  { name: "יוגורט פרילי עם פירות יער 1.5% שומן", image: importImage('prili_berry_1.5_percent.jpeg') },
  { name: "באדי יוגורט בטעם תות שדה 3%", image: importImage('badi_strawberry_3_percent_125ml.jpeg') },
  { name: "יוגורט ביו במתיקות מעודנת 1.5%", image: importImage('bio_light_1.5_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט ביו טבעי 1.5%", image: importImage('8_pack_bio_natural_1.5_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט ביו 3%", image: importImage('8_pack_bio_3_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט במתיקות מעודנת 1.5%", image: importImage('8_pack_light_1.5_percent.jpeg') },
  { name: "יוגורט ביו בטעם אננס 3%", image: importImage('bio_pineapple_3_percent.jpeg') },
  { name: "יוגורט ביו בטעם אפרסק 3%", image: importImage('bio_peach_3_percent.jpeg') },
  { name: "יוגורט ביו בטעם דובדבן 3%", image: importImage('bio_cherry_3_percent.jpeg') },
  { name: "יוגורט ביו בטעם עוגת גבינה ותות 3%", image: importImage('bio_cheesecake_strawberry_3_percent.jpeg') },
  { name: "יוגורט ביו בטעם פירות יער 3%", image: importImage('bio_berry_3_percent.jpeg') },
  { name: "יוגורט יופלה בטעם קיווי 3% שומן", image: importImage('yoplait_kiwi_3_percent.jpeg') },
  { name: "יוגורט ביו בטעם תות 3%", image: importImage('bio_strawberry_3_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט בטעם אפרסק ותות 3%", image: importImage('8_pack_peach_strawberry_3_percent.jpeg') },
  { name: "מארז 8 גביעי יוגורט 3%", image: importImage('8_pack_3_percent.jpeg') },
  { name: "יוגורט עם תוספת כוכבים", image: importImage('yogurt_stars.jpeg') },
  { name: "יוגורט עם תוספת פצפוצים", image: importImage('yogurt_crisps.jpeg') },
  { name: "יוגורט ביו בטעם אננס דיאט 0%", image: importImage('bio_diet_pineapple_0_percent.jpeg') },
  { name: "יוגורט דיאט בטעם קיווי 0% שומן", image: importImage('diet_kiwi_0_percent.jpeg') },
  { name: "יוגורט דיאט בטעם אפרסק 0%", image: importImage('diet_peach_0_percent.jpeg') },
  { name: "יוגורט יופלה בטעם קיווי 3% שומן", image: importImage('yoplait_kiwi_3_percent.jpeg') },
  { name: "מארז 8 יחידות יוגורט בטעם אפרסק ותות 3%", image: importImage('8_pack_peach_strawberry_3_percent.jpeg') },
  { name: "יוגורט דיאט בטעם דובדבן 0%", image: importImage('diet_cherry_0_percent.jpeg') },
  { name: "יוגורט דיאט בטעם עוגת גבינה ותות 0%", image: importImage('diet_cheesecake_strawberry_0_percent.jpeg') },
  { name: "יוגורט דיאט בטעם פירות יער 0%", image: importImage('diet_berry_0_percent.jpeg') },
  { name: "יוגורט דיאט בטעם תות 0%", image: importImage('diet_strawberry_0_percent.jpeg') },
  { name: "יוגורט יופלה GO בטעם טבעי 20 גרם חלבון", image: importImage('yoplait_go_natural_20g_protein.jpeg') },
  { name: "יוגורט GO בטעם אפרסק 20 גרם חלבון", image: importImage('go_peach_20g_protein.jpeg') },
  { name: "יוגורט GO בטעם פירות יער 20 גרם חלבון", image: importImage('go_berry_20g_protein.jpeg') },
  { name: "יוגורט GO בטעם תות 20 גרם חלבון", image: importImage('go_strawberry_20g_protein.jpeg') },
  { name: "יוגורט GO לייט בטעם אננס 20 גרם חלבון", image: importImage('go_light_pineapple_20g_protein.jpeg') },
  { name: "יוגורט GO לייט בטעם אפרסק 20 גרם חלבון", image: importImage('go_light_peach_20g_protein.jpeg') },
  { name: "יוגורט GO לייט בטעם דובדבן 20 גרם חלבון", image: importImage('go_light_cherry_20g_protein.jpeg') },
  { name: "יוגורט יופלה GO נטול לקטוז בטעם טבעי 2% שומן", image: importImage('yoplait_go_lactose_free_natural_2_percent.jpeg') },
  { name: "יוגורט יופלה GO עם תות 0%", image: importImage('yoplait_go_thick_strawberry_0_percent.jpeg') },
  { name: "יוגורט יופלה GO בטעם אפרסק 0%", image: importImage('yoplait_go_thick_peach_0_percent.jpeg') },
  { name: "יוגורט יופלה GO בטעם בננה קרמל 0%", image: importImage('yoplait_go_thick_banana_caramel_0_percent.jpeg') },
  { name: "יוגורט יופלה GO בטעם קוקוס 0%", image: importImage('yoplait_go_thick_coconut_0_percent.jpeg') },
  { name: "יוגורט יופלה GO בטעם וניל 1% שומן", image: importImage('yoplait_go_frothy_vanilla_1_percent.jpeg') },
  { name: "יוגורט ביו בטעם טבעי 2.8%", image: importImage('bio_natural_2.8_percent.jpeg') },
  { name: "מארז 8 גביעים יוגורט ביו בטעם טבעי 1.7%", image: importImage('8_pack_bio_natural_1.7_percent.jpeg') },
  { name: "מארז 8 גביעים יוגורט ביו בטעם טבעי 2.8%", image: importImage('8_pack_bio_natural_2.8_percent.jpeg') },
  { name: "מארז 8 גביעי יוגורט ביו במתיקות מעודנת 1.2%", image: importImage('bio_yogurt_sweetened_1.2_percent.jpeg') },
  { name: "מולר יוגורט מוקצף בטעם פיסטוק", image: importImage('froop_pistachio_whipped.jpeg') },
  { name: "מולר יוגורט לבן עם קציפת תות 3%", image: importImage('yogurt_strawberry_whipped.jpeg') },
  { name: "מולר יוגורט לבן עם קציפת לימון 3%", image: importImage('yogurt_lemon_whipped.jpeg') },
  { name: "מולר יוגורט לבן עם קציפת פירות יער 3%", image: importImage('yogurt_berry_whipped.jpeg') },
  { name: "מולר יוגורט לבן עם קציפת אפרסק ופסיפלורה 3%", image: importImage('yogurt_peach_passionfruit_whipped.jpeg') },
  { name: "יוגורט עם קציפת קוקוס ואננס", image: importImage('bio_yogurt_coconut_pineapple_whipped.jpeg') },
  { name: "יוגורט Froop עם קציפת מנגו 3% שומן", image: importImage('froop_mango_whipped.jpeg') },
  { name: "יוגורט עם פירות יער 3% Simply Fruit", image: importImage('bio_yogurt_berry_simply_fruit.jpeg') },
  { name: "יוגורט עם אפרסק 3% Simply Fruit", image: importImage('bio_yogurt_peach_simply_fruit.jpeg') },
  { name: "יוגורט עם קיווי 3% Simply Fruit", image: importImage('bio_yogurt_kiwi_simply_fruit.jpeg') },
  { name: "יוגורט עם תות שדה 3% Simply Fruit", image: importImage('bio_yogurt_strawberry_simply_fruit.jpeg') },
  { name: "מולר FROOP - קציפת יוגורט בטעם וניל צרפתי", image: importImage('froop_vanilla_whipped.jpeg') },
  { name: "מולר FROOP -קציפת יוגורט תות", image: importImage('froop_strawberry_whipped.jpeg') },
  { name: "מארז 8 גביעים יוגורט בטעם פירות יער וקיווי 3% Simply Fruit", image: importImage('8_pack_berry_kiwi_simply_fruit.jpeg') },
  { name: "מארז 8 גביעים יוגורט בטעם תות שדה ואפרסק 3% Simply Fruit", image: importImage('8_pack_strawberry_peach_simply_fruit.jpeg') },
  { name: "מאגדת שמינייה סימפלי 1.5% מנגו ותות", image: importImage('8_pack_mango_strawberry_simply_fruit.jpeg') },
  { name: "מארז 8 גביעים יוגורט בטעם תות שדה ואפרסק 0% Simply Fruit", image: importImage('8_pack_strawberry_peach_0_percent.jpeg') },
  { name: "יוגורט עיזים", image: importImage('goat_yogurt.jpeg') },
  { name: "יוגורט עיזים עם דובדבן אמרנה", image: importImage('goat_yogurt_amarena_cherry.jpeg') },
  { name: "יוגורט עיזים עם תות", image: importImage('goat_yogurt_strawberry.jpeg') },
  { name: "יוגורט עיזים (600 גרם)", image: importImage('goat_yogurt_600g.jpeg') },
  { name: "יוגורט כבשים 5% (600 גרם)", image: importImage('sheep_yogurt_600g_5_percent.jpeg') },
  { name: "יוגורט יווני 10%", image: importImage('greek_yogurt_10_percent.jpeg') },
  { name: "מולר פרוטאין יוגורט לבן 25 גרם חלבון 2% שומן", image: importImage('protein_yogurt_white_25g_protein_2_percent.jpeg') },
  { name: "מולר פרוטאין יוגורט קרמי בטעם וניל 0% שומן", image: importImage('protein_yogurt_creamy_vanilla_0_percent.jpeg') },
  { name: "מולר יוגורט עם קציפת פרי בטעם אננס נענע 3% שומן", image: importImage('froop_pineapple_mint_whipped.jpeg') },
  { name: "מולר יוגורט עם קציפת פרי בטעם לימונענע 3% שומן", image: importImage('froop_lemon_mint_whipped.jpeg') }

  ];
  initialYogurtdelicacies.sort((a, b) => a.name.localeCompare(b.name, 'he'));

   const initialinitialYogurtdrinking = [
    {
      name: "מארז 14 יחידות אקטימל במתיקות מעודנת",
      image: importImage('actimel_sweetened_14_pack.jpeg'),
    },
    {
      name: "מארז 14 יחידות אקטימל בטעם תות",
      image: importImage('actimel_strawberry_14_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות אקטימל במתיקות מעודנת",
      image: importImage('actimel_sweetened_8_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות אקטימל בטעם תות",
      image: importImage('actimel_strawberry_8_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות משקה יוגורט ביו עם תות 1.5%",
      image: importImage('bio_yogurt_drink_strawberry_8_pack.jpeg'),
    },
    {
      name: "יוגורט בכד 4% שומן",
      image: importImage('tnuva_jug_yogurt_4_percent.jpeg'),
    },
    {
      name: "יוגורט בטעם טבעי 6.5%",
      image: importImage('natural_yogurt_6.5_percent.jpeg'),
    },
    {
      name: "משקה יוגורט מחלב עיזים 3.6%",
      image: importImage('goat_milk_yogurt_drink_3.6_percent.jpeg'),
    },
    {
      name: "משקה יוגורט BIO תות בננה 1.5%",
      image: importImage('bio_yogurt_drink_strawberry_banana_1.5_percent.jpeg'),
    },
    {
      name: "משקה יוגורט עם אפרסק 1.2%",
      image: importImage('activia_yogurt_drink_peach_1.2_percent.jpeg'),
    },
    {
      name: "משקה יוגורט עם תות 1.2%",
      image: importImage('activia_yogurt_drink_strawberry_1.2_percent.jpeg'),
    },
    {
      name: "משקה יוגורט עם תות ומלון 1.5%",
      image: importImage('yogurt_drink_strawberry_melon_1.5_percent.jpeg'),
    },
    {
      name: "משקה יוגורט עם אפרסק ובננה 1.5%",
      image: importImage('yogurt_drink_peach_banana_1.5_percent.jpeg'),
    },
    {
      name: "משקה יוגורט עם פסיפלורה, מנגו, אננס ואפרסק 1.5%",
      image: importImage('yogurt_drink_passionfruit_mango_pineapple_peach_1.5_percent.jpeg'),
    },
    {
      name: "משקה יוגורט GO תות בננה",
      image: importImage('go_yogurt_drink_strawberry_banana.jpeg'),
    },
    {
      name: "משקה יוגורט GO מנגו ואננס בבקבוק",
      image: importImage('go_yogurt_drink_mango_pineapple_20g_protein.jpeg'),
    },
    {
      name: "צזיקי לשתיה",
      image: importImage('drinkable_tzatziki.jpeg'),
    },
    {
      name: "איירן לשתיה",
      image: importImage('drinkable_ayran.jpeg'),
    },
    {
      name: "יוגורט עיזים לשתיה",
      image: importImage('drinkable_goat_yogurt.jpeg'),
    },
    {
      name: "יוגורט עיזים 3.5%",
      image: importImage('goat_yogurt_3.5_percent.jpeg'),
    },
    {
      name: "יוגורט עיזים 3.8%",
      image: importImage('goat_yogurt_3.8_percent.jpeg'),
    },
    {
      name: "משקה יוגורט בננה מנגו פסיפלורה",
      image: importImage('danone_yogurt_drink_banana_mango_passionfruit.jpeg'),
    },
    {
      name: "יוגורט במתיקות מעודנת עם שיבולת שועל",
      image: importImage('activia_yogurt_mild_oats.jpeg'),
    },
    {
      name: "יוגורט PRO בטעם תות 1% שומן 0% סוכר לבן",
      image: importImage('danone_pro_yogurt_strawberry_1_percent_no_sugar.jpeg'),
    },
    {
      name: "משקה יוגורט בטעם אפרסק פסיפלורה",
      image: importImage('go_yogurt_drink_peach_passionfruit.jpeg'),
    },
    {
      name: "משקה יוגורט פרו בטעם וניל עוגיות 0% סוכר לבן",
      image: importImage('danone_pro_yogurt_drink_vanilla_cookies_no_sugar.jpeg'),
    },

  ];
  initialinitialYogurtdrinking.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialMilkdelicaciesdesserts = [
    {
      name: "מעדן מילקי בטעם שוקולד עם קצפת",
      image: importImage('milky_chocolate_whipped_cream.jpeg'),
    },
    {
      name: "מעדן מילקי 26% פחות סוכר",
      image: importImage('milky_less_sugar.jpeg'),
    },
    {
      name: "מעדן מילקי עם טופ מגולגלת",
      image: importImage('milky_rolled_top.jpeg'),
    },
    {
      name: "מעדן מילקי בטעם שוקולד עם אקסטרה קצפת",
      image: importImage('milky_chocolate_extra_whipped_cream.jpeg'),
    },
    {
      name: "מעדן מילקי בטעם פסק זמן",
      image: importImage('milky_pesek_zman.jpeg'),
    },
    {
      name: "מעדן מילקי בטעם וניל עם קצפת",
      image: importImage('milky_vanilla_whipped_cream.jpeg'),
    },
    {
      name: "מעדן מילקי בטעם תות עם קצפת",
      image: importImage('milky_strawberry_whipped_cream.jpeg'),
    },
    {
      name: "מעדן מילקי בטעם שוקולד בלונדי",
      image: importImage('milky_blond_chocolate.jpeg'),
    },
    {
      name: "מילקי בטעם שוקולד מריר, מוס שוקולד וקצפת",
      image: importImage('milky_trio_dark_chocolate_mousse_whipped_cream.jpeg'),
    },
    {
      name: "מילקי בטעם שוקולד לבן, מוס בטעם פיסטוק וקצפת",
      image: importImage('milky_trio_white_chocolate_pistachio_mousse_whipped_cream.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן מילקי בטעם שוקולד עם קצפת",
      image: importImage('milky_chocolate_whipped_cream_8_pack.jpeg'),
    },
    {
      name: "מילקי עוגות אישיות במילוי קרם חלב",
      image: importImage('milky_cake_individual_milk_cream_filling.jpeg'),
    },
    {
      name: "מעדן הגולן בטעם שוקולד",
      image: importImage('golan_chocolate_pudding.jpeg'),
    },
    {
      name: "מעדן הגולן בטעם וניל",
      image: importImage('golan_vanilla_pudding.jpeg'),
    },
    {
      name: "דניאלה מעדן גבינה ויוגורט בטעם וניל 5%",
      image: importImage('daniella_cheese_yogurt_vanilla_5_percent.jpeg'),
    },
    {
      name: "דניאלה מעדן גבינה ויוגורט בטעם תות 5%",
      image: importImage('daniella_cheese_yogurt_strawberry_5_percent.jpeg'),
    },
    {
      name: "דניאלה מעדן גבינה מוקצף בטעם תות בננה",
      image: importImage('daniella_whipped_cheese_strawberry_banana.jpeg'),
    },
    {
      name: "דניאלה מעדן גבינה ויוגורט מוקצף בטעם פיסטוק",
      image: importImage('daniella_whipped_cheese_pistachio.jpeg'),
    },
    {
      name: "מעדן דני בטעם שוקולד 2%",
      image: importImage('dani_chocolate_2_percent.jpeg'),
    },
    {
      name: "מעדן דני בטעם וניל 1.5%",
      image: importImage('dani_vanilla_1.5_percent.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן דני בטעם שוקולד",
      image: importImage('dani_chocolate_8_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן דני בטעם וניל",
      image: importImage('dani_vanilla_8_pack.jpeg'),
    },
    {
      name: "מעדן חלב דל קלוריות בטעם שוקולד מריר 0.5% שומן",
      image: importImage('low_calorie_chocolate_pudding_dark_0.5_percen.jpeg'),
    },
    {
      name: "מעדן חלב דל קלוריות בטעם שוקולד 0% שומן",
      image: importImage('low_calorie_chocolate_pudding_0_percen.jpeg'),
    },
    {
      name: "מעדן גבינה סקי בטעם וניל",
      image: importImage('ski_cheese_pudding_vanilla.jpeg'),
    },
    {
      name: "מעדן סקי תות 3%",
      image: importImage('ski_strawberry_3_percent.jpeg'),
    },
    {
      name: "גמדים לדרך גבינה לבנה בטעם תות",
      image: importImage('gamadim_to_go_white_cheese_strawberry_puree.jpeg'),
    },
    {
      name: "גמדים לדרך בטעם סלט פירות",
      image: importImage('gamadim_to_go_fruit_salad.jpeg'),
    },
    {
      name: "גמדים לדרך גבינה לבנה בטעם תות ובננה",
      image: importImage('gamadim_to_go_white_cheese_strawberry_banana_puree.jpeg'),
    },
    {
      name: "מארז 8 יחידות משקה גמדים בטעם תות בננה",
      image: importImage('gamadim_drink_strawberry_banana_8_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן גמדים בטעם תות בננה",
      image: importImage('gamadim_pudding_strawberry_banana_8_pack.jpeg'),
    },
    {
      name: "מארז 4 יחידות מעדן גמדים בטעמי תות ובננה",
      image: importImage('gamadim_pudding_strawberry_banana_4_pack.jpeg'),
    },
    {
      name: "מארז 4 יחידות מעדן גמדים בטעמי תות בננה/תפוח בננה",
      image: importImage('gamadim_pudding_strawberry_banana_apple_banana_4_pack.jpeg'),
    },
    {
      name: "גיל לבן 3%",
      image: importImage('gil_white_3_percent.jpeg'),
    },
    {
      name: "אשל לבן 4.5%",
      image: importImage('eshel_white_4.5_percent.jpeg'),
    },
    {
      name: "מעדן YOLO עם שוקולד מריר",
      image: importImage('yolo_dark_chocolate.jpeg'),
    },
    {
      name: "מעדן YOLO עם שכבות שוקולד לבן וחלב",
      image: importImage('yolo_white_milk_chocolate_layers.jpeg'),
    },
    {
      name: "ג'לי פטל",
      image: importImage('raspberry_jelly.jpeg'),
    },
    {
      name: "ג'לי אפרסק עם חתיכות אפרסק",
      image: importImage('peach_jelly_peach_pieces.jpeg'),
    },
    {
      name: "ג'לי אננס עם חתיכות אננס",
      image: importImage('pineapple_jelly_pineapple_pieces.jpeg'),
    },
    {
      name: "מעדן קרלו בטעם שוקולד",
      image: importImage('carlo_chocolate_pudding.jpeg'),
    },
    {
      name: "מעדן קרלו שכבות בטעמי שוקולד ווניל",
      image: importImage('carlo_layers_chocolate_vanilla.jpeg'),
    },
    {
      name: "מעדן קרלו בטעם וניל",
      image: importImage('carlo_vanilla_pudding.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן קרלו מיני בטעם שוקולד",
      image: importImage('carlo_mini_chocolate_8_pack.jpeg'),
    },
    {
      name: "מארז 8 יחידות מעדן קרלו מיני בטעם וניל",
      image: importImage('carlo_mini_vanilla_8_pack.jpeg'),
    },
    {
      name: "מעדן חלב בטעם שוקולד עם קצפת",
      image: importImage('chocolate_pudding_with_whipped_cream.jpeg'),
    },
    {
      name: "מעדן חלב בטעם וניל עם קצפת",
      image: importImage('vanilla_pudding_with_whipped_cream.jpeg'),
    },
    {
      name: "מעדן מלבי",
      image: importImage('malabi_pudding.jpeg'),
    },
    {
      name: "מעדן חלב עם אורז 3%",
      image: importImage('sweet_milk_pudding_with_rice_3_percent.jpeg'),
    },
    {
      name: "מעדן שיבולת שועל וחלב 2% שומן",
      image: importImage('oat_milk_pudding_2_percent.jpeg'),
    },
    {
      name: "בוואריה",
      image: importImage('bavaria_pudding.jpeg'),
    },
    {
      name: "טירמיסו",
      image: importImage('tiramisu_pudding.jpeg'),
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם וניל",
      image: importImage('go_protein_vanilla.jpeg'),
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם קרמל מלוח",
      image: importImage('go_protein_salted_caramel.jpeg'),
    },
    {
      name: "מעדן GO מועשר בחלבון בטעם שוקולד",
      image: importImage('go_protein_chocolate.jpeg'),
    },
    {
      name: "טרמיסו טבעוני פרווה",
      image: importImage('vegan_tiramisu_parve.jpeg'),
    },
    {
      name: "מלבי טבעוני",
      image: importImage('vegan_malabi.jpeg'),
    }

  ];
  initialMilkdelicaciesdesserts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialSoftcheeses = [
    {
      name: "קוטג' 5%",
      image: importImage('cottage_5_percent_mehadrin.jpeg'),
    },
    {
      name: "קוטג' 9%",
      image: importImage('cottage_9_percent.jpeg'),
    },
    {
      name: "קוטג' 3%",
      image: importImage('cottage_3_percent.jpeg'),
    },
    {
      name: "קוטג' עם זיתים ירוקים 5%",
      image: importImage('cottage_with_green_olives_5_percent.jpeg'),
    },
    {
      name: "גבינה לבנה 9%",
      image: importImage('white_cheese_9_percent_250g.jpeg'),
    },
    {
      name: "גבינה לבנה 3%",
      image: importImage('white_cheese_3_percent_500g.jpeg'),
    },
    {
      name: "גבינה לבנה 5%",
      image: importImage('white_cheese_5_percent_250g.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת בטעם טבעי 25%",
      image: importImage('napoleon_cream_cheese_natural_25_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת בטעם טבעי 16%",
      image: importImage('napoleon_cream_cheese_natural_16_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת עם שום שמיר 25%",
      image: importImage('napoleon_cream_cheese_garlic_dill_25_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת עם פלפל חלפיניו 24%",
      image: importImage('napoleon_cream_cheese_jalapeno_24_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת עם בצל 16% שומן",
      image: importImage('napoleon_cream_cheese_onion_16_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת עם עירית 25% שומן",
      image: importImage('napoleon_cream_cheese_chives_25_percent.jpeg'),
    },
    {
      name: "נפוליאון גבינת שמנת עם זיתים 24%",
      image: importImage('napoleon_cream_cheese_olives_24_percent.jpeg'),
    },
    {
      name: "לאבנה אסלית על בסיס יוגורט 5%",
      image: importImage('labaneh_asli_5_percent_yogurt.jpeg'),
    },
    {
      name: "לאבנה אסלית עם שמן זית וזעתר על בסיס יוגורט",
      image: importImage('labaneh_asli_olive_oil_zaatar_yogurt.jpeg'),
    },
    {
      name: "צזיקי פיראוס",
      image: importImage('tzatziki_piraeus.jpeg'),
    },
    {
      name: "בולגרית למריחה 5%",
      image: importImage('bulgarian_spread_5_percent_piraeus.jpeg'),
    },
    {
      name: "סימפוניה גבינה במרקם שמנת 5%",
      image: importImage('symphonia_cream_cheese_5_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינה במרקם שמנת עם זיתים ירוקים 5%",
      image: importImage('symphonia_cream_cheese_green_olives_5_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינה במרקם שמנת פלפל שיפקה חריף 5%",
      image: importImage('symphonia_cream_cheese_spicy_pepper_5_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינה במרקם שמנת שום שמיר 5%",
      image: importImage('symphonia_cream_cheese_garlic_dill_5_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינה במרקם שמנת בצל מקורמל 5%",
      image: importImage('symphonia_cream_cheese_caramelized_onion_5_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינת שמנת 16% עם בצל מטוגן ופלפל שחור",
      image: importImage('symphonia_cream_cheese_fried_onion_black_pepper_16_percent.jpeg'),
    },
    {
      name: "סימפוניה גבינת שמנת 16% שומן",
      image: importImage('symphonia_cream_cheese_16_percent.jpeg'),
    },
    {
      name: "ממרח גבינה ושוקולד",
      image: importImage('cheese_chocolate_spread_tera.jpeg'),
    },
    {
      name: "גבינת לאבנה 5%",
      image: importImage('labaneh_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת ריקוטה 5%",
      image: importImage('ricotta_cheese_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת מוצרלה בייבי 18%",
      image: importImage('baby_mozzarella_18_percent_gad.jpeg'),
    },
    {
      name: "גבינת שמנת עם כמהין 30% שומן",
      image: importImage('cream_cheese_spread_30_percent_truffle_ny_gad.jpeg'),
    },
    {
      name: "גבינת ריקוטה למריחה 5%",
      image: importImage('ricotta_spread_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת ריקוטה למריחה בזיליקום 5%",
      image: importImage('ricotta_spread_basil_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת מסקרפונה 40%",
      image: importImage('mascarpone_cheese_40_percent_gad.jpeg'),
    },
    {
      name: "גבינת עיזים למריחה 5%",
      image: importImage('goat_cheese_spread_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת לאבנה מחלב עיזים 5%",
      image: importImage('labaneh_goat_milk_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת לאבנה ציזיקי 5% למריחה",
      image: importImage('labaneh_tzatziki_spread_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת לאבנה דרוזית 9%",
      image: importImage('labaneh_druze_9_percent_gad.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם שווצרי 7%",
      image: importImage('light_swiss_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם רוקפור 7%",
      image: importImage('light_roquefort_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט עם זיתים 7%",
      image: importImage('light_olive_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט פיקנטי 7%",
      image: importImage('light_spicy_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט עם סלמון 7%",
      image: importImage('light_salmon_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט עם שום שמיר 7%",
      image: importImage('light_garlic_dill_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינה מותכת למריחה לייט בטעם זעתר 7%",
      image: importImage('light_zaatar_spread_cheese_7_percent_monblanc.jpeg'),
    },
    {
      name: "גבינת עזים שמנת מותכת",
      image: importImage('goat_cream_cheese_spread_monblanc.jpeg'),
    },
    {
      name: "ארוחה בקטנה לאבנה אסלית פיראוס עם קרקרים",
      image: importImage('labaneh_snack_crackers_piraeus.jpeg'),
    },
    {
      name: "ארוחה בקטנה ציזיקי פיראוס עם קרקרים",
      image: importImage('tzatziki_snack_crackers_piraeus.jpeg'),
    },
    {
      name: "גבינה מותכת",
      image: importImage('zuriel_spread_cheese.jpeg'),
    },
    {
      name: "גבינה מותכת 14% שומן - 16 משולשים",
      image: importImage('euro_spread_cheese_14_percent.jpeg'),
    },

  ];
  initialSoftcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialSemihardcheeses = [
    {
      name: "גבינת מוצרלה 22%",
      image: importImage('mozzarella_cheese_22_percent_gad.jpeg'),
    },
    {
      name: "גבינת מוצרלה מגורדת 22%",
      image: importImage('grated_mozzarella_22_percent_gad.jpeg'),
    },
    {
      name: "גבינה צפתית מעודנת 5%",
      image: importImage('safed_cheese_delicate_5_percent_gad.jpeg'),
    },
    {
      name: "פרוסות בולגרית מעודנת 5%",
      image: importImage('sliced_bulgarian_cheese_delicate_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת שמנת מחלב עיזים 16%",
      image: importImage('goat_cream_cheese_16_percent_gad.jpeg'),
    },
    {
      name: "מטבעות גבינת עיזים 22%",
      image: importImage('goat_cheese_coins_22_percent_gad.jpeg'),
    },
    {
      name: "פטה כבשים 20%",
      image: importImage('sheep_feta_cheese_20_percent_gad.jpeg'),
    },
    {
      name: "גבינה בולגרית 5%",
      image: importImage('bulgarian_cheese_5_percent_gad.jpeg'),
    },
    {
      name: "פרוסות מוצרלה 22% שומן",
      image: importImage('sliced_mozzarella_22_percent_gad.jpeg'),
    },
    {
      name: "גבינה בולגרית 16%",
      image: importImage('bulgarian_cheese_16_percent_gad.jpeg'),
    },
    {
      name: "גבינה בולגרית מעודנת 24%",
      image: importImage('delicate_bulgarian_cheese_24_percent_gad.jpeg'),
    },
    {
      name: "מוצרלה פרסקה 18% שומן",
      image: importImage('mozzarella_fresca_18_percent_gad.jpeg'),
    },
    {
      name: "קוביות בולגרית מעודנת 5%",
      image: importImage('delicate_bulgarian_cheese_cubes_5_percent_gad.jpeg'),
    },
    {
      name: "פטה עיזים מעודנת 5%",
      image: importImage('delicate_goat_feta_5_percent_gad.jpeg'),
    },
    {
      name: "גבינת חלומי 24%",
      image: importImage('halloumi_cheese_24_percent_gad.jpeg'),
    },
    {
      name: "גבינת ריקוטה פרסקה",
      image: importImage('ricotta_fresca_cheese_gad.jpeg'),
    },
    {
      name: "גבינת טבורוג 5%",
      image: importImage('tvorog_cheese_5_percent_zuriel.jpeg'),
    },
    {
      name: "גבינת חמד 16% שקית",
      image: importImage('hamad_cheese_16_percent_piraeus.jpeg'),
    },
    {
      name: "גבינת קממבר 24%",
      image: importImage('ein_gedi_camembert_cheese_24_percent_tnuva.jpeg'),
    },
    {
      name: "גבינת ברי 24%",
      image: importImage('adi_brie_cheese_24_percent_tnuva.jpeg'),
    },
    {
      name: "בוראטה - גבינת מוצרלה במילוי שמנת מתוקה 28% שומן",
      image: importImage('burrata_mozzarella_cream_filling_28_percent.jpeg'),
    },
    {
      name: "פרוסות מוצרלה 20%",
      image: importImage('mozzarella_slices_20_percent.jpeg'),
    },
  ];
  initialSemihardcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialYellowhardcheeses = [
    {
      name: "פרוסות גבינה חצי קשה 28% קופסא",
      image: importImage('semi_hard_cheese_slices_28_box.jpeg'),
    },
    {
      name: "פרוסות גבינה חצי קשה דק דק 28%",
      image: importImage('semi_hard_cheese_slices_thin_28_percent.jpeg'),
    },
    {
      name: "גבינת בסגנון אמנטל 32%",
      image: importImage('emek_style_emmental_cheese_32.jpeg'),
    },
    {
      name: "פרוסות גבינה קשה 15% בקופסא",
      image: importImage('hard_cheese_slices_15_box.jpeg'),
    },
    {
      name: "פרוסות גבינה חצי קשה 9% מופחתת שומן",
      image: importImage('semi_hard_cheese_slices_9_low_fat.jpeg'),
    },
    {
      name: "גבינה בסגנון אמנטל 9%",
      image: importImage('emek_style_emmental_cheese_9.jpeg'),
    },
    {
      name: "פרוסות גבינת גאודה 30%",
      image: importImage('sliced_gouda_cheese_30_large.jpeg'),
    },
    {
      name: "גבינת קשקבל 28%",
      image: importImage('gilad_kashkaval_cheese_28_percent.jpeg'),
    },
    {
      name: "גבינת פרמז'ן 23%",
      image: importImage('geva_parmesan_cheese_23_percent.jpeg'),
    },
    {
      name: "גבינת רוקפור 26%",
      image: importImage('galil_roquefort_cheese_26_percent.jpeg'),
    },
    {
      name: "גבינת קאשקבל 26%",
      image: importImage('kashkaval_cheese_26_percent_fat.jpeg'),
    },
    {
      name: "גרנה פדנו גבינה קשה 29%",
      image: importImage('grana_padano_cheese_29_percent_fat.jpeg'),
    },
    {
      name: "גבינה בשלה עם עובש כחול 30%",
      image: importImage('mature_blue_cheese_30_percent_fat.jpeg'),
    },
    {
      name: "גבינת גרנה פדנו שבבים 29%",
      image: importImage('grana_padano_shavings_29_percent_fat.jpeg'),
    },
    {
      name: "אצבעות גבינה חצי קשה 28%",
      image: importImage('emek_semi_hard_cheese_sticks_28_percent.jpeg'),
    },
    {
      name: "חטיף אצבעות גבינת מוצרלה",
      image: importImage('mozzarella_cheese_sticks.jpeg'),
    },
    {
      name: "פתיתים גבינה חצי קשה מגורדת 28% שומן",
      image: importImage('grated_semi_hard_cheese_28_percent_fat.jpeg'),
    },
    {
      name: "פתיתים מיוחדים לפיצה 26%",
      image: importImage('special_pizza_cheese_shreds_26_percent.jpeg'),
    },
    {
      name: "גבינה קשה מגורדת גרנה פדנו 29% שומן",
      image: importImage('grated_grana_padano_cheese_29_percent.jpeg'),
    },
    {
      name: "קוואטרו פורמאג'י 4 גבינות מגוררות 26%",
      image: importImage('quattro_formaggi_grated_26_percent.jpeg'),
    },
    {
      name: "מיקס פתיתי 3 גבינות- מוצרלה סקנדינבית וגאודה",
      image: importImage('three_cheese_mix_mozzarella_scandinavian_gouda.jpeg'),
    },
    {
      name: "גבינת אדם פלח 24% שומן",
      image: importImage('edam_cheese_slice_24_percent_fat.jpeg'),
    },
    {
      name: "גבינת חלומי 23%",
      image: importImage('halloumi_cheese_23_percent.jpeg'),
    },
    {
      name: "גבינת חלומי 30%",
      image: importImage('halloumi_cheese_30_percent.jpeg'),
    },
    {
      name: "גבינת פקורינו פרוס מחלב כבשים 36%",
      image: importImage('sliced_pecorino_sheep_milk_36_percent_fat.jpeg'),
    },
    {
      name: "פרוסות גבינה בסגנון סקנדינבי 31%",
      image: importImage('sliced_scandinavian_style_cheese_31_percent.jpeg'),
    },
    {
      name: "פרוסות גבינת עיזים 30% שומן",
      image: importImage('sliced_goat_cheese_30_percent_fat.jpeg'),
    },
    {
      name: "פרוסות גבינת צ'דר 35% שומן",
      image: importImage('sliced_cheddar_cheese_35_percent_fat.jpeg'),
    },
  ];
  initialYellowhardcheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialButtermargarine = [
    {
      name: "חמאה משמנת מפוסטרת",
      image: importImage('tnuva_pasteurized_butter.jpeg'),
    },
    {
      name: "חמאה ללא מלח",
      image: importImage('lurpak_unsalted_butter.jpeg'),
    },
    {
      name: "חמאה עם מלח",
      image: importImage('lurpak_salted_butter.jpeg'),
    },
    {
      name: "מרגרינה לאפיה ובישול",
      image: importImage('blue_band_baking_cooking_margarine.jpeg'),
    },
    {
      name: "מרגרינה ללא תוספת מלח",
      image: importImage('blue_band_unsalted_margarine.jpeg'),
    },
    {
      name: "תחליף מרגרינה עשיר בשמן קוקוס",
      image: importImage('naturina_coconut_oil_margarine_substitute.jpeg'),
    },
    {
      name: "ממרח חמאה משמנים צמחיים",
      image: importImage('naturina_butter_flavored_spread_plant_based.jpeg'),
    },
  ];
  initialButtermargarine.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialCreamwhippedcreamcookingbaking = [
    {
      name: "קצפת מתוקה מוכנה",
      image: importImage('richs_sweet_whipped_cream.jpeg'),
    },
    {
      name: "קצפת מתוקה מוכנה - פרווה",
      image: importImage('richs_parve_sweet_whipped_cream.jpeg'),
    },
    {
      name: "קצפת צמחית במתיקות מעודנת",
      image: importImage('tnuva_plant_based_whipped_cream.jpeg'),
    },
    {
      name: "שמרים טריים לאפיה בגרגרים",
      image: importImage('fresh_yeast_for_baking.jpeg'),
    },
    {
      name: "שמנת מועשרת 15%",
      image: importImage('yotvata_enriched_cream_15.jpeg'),
    },
    {
      name: "שמנת להקצפה 38%",
      image: importImage('yotvata_whipping_cream_38.jpeg'),
    },
    {
      name: "שמנת חמוצה 9%",
      image: importImage('tnuva_original_sour_cream_9.jpeg'),
    },
    {
      name: "שמנת חמוצה 15%",
      image: importImage('tnuva_original_sour_cream_15.jpeg'),
    },
    {
      name: "שמנת של פעם 27%",
      image: importImage('tnuva_original_old_style_cream_27.jpeg'),
    },
    {
      name: "שמנת עמידה להקצפה 38%",
      image: importImage('tnuva_whipping_cream_38.jpeg'),
    },
    {
      name: "שמנת עמידה לבישול 15%",
      image: importImage('tnuva_cooking_cream_15.jpeg'),
    },
    {
      name: "שמנת עמידה מתוקה להקצפה 32%",
      image: importImage('tnuva_sweet_whipping_cream_32.jpeg'),
    },
    {
      name: "שמנת עמידה לבישול 10%",
      image: importImage('tnuva_cooking_cream_10.jpeg'),
    },
    {
      name: "רוטב שמנת וגראנה פדנו",
      image: importImage('pasta_ricco_cream_grana_padano_sauce.jpeg'),
    },
    {
      name: "רוטב עגבניות ושמנת",
      image: importImage('pasta_ricco_tomato_cream_sauce.jpeg'),
    },
    {
      name: "רוטב שמנת ופטריות",
      image: importImage('pasta_ricco_cream_mushroom_sauce.jpeg'),
    },
    {
      name: "גבינת מסקרפונה 38% שומן",
      image: importImage('tara_mascarpone_cheese_38.jpeg'),
    },
    {
      name: "מק אנד צ'יז",
      image: importImage('gad_mac_and_cheese.jpeg'),
    },
    {
      name: "קאצ'יו אה פפה- רוטב פקורינו ופלפל שחור",
      image: importImage('gad_cacio_e_pepe_sauce.jpeg'),
    },
    {
      name: "קצפת צמחית במתיקות מעודנת 21%",
      image: importImage('yotvata_plant_based_whipped_cream_21.jpeg'),
    },
    {
      name: "קרם מסקרפונה להקצפה עם זרעי וניל",
      image: importImage('gad_mascarpone_vanilla_cream.jpeg'),
    },
    {
      name: "קרם פטיסייר",
      image: importImage('gad_patisserie_cream.jpeg'),
    },
    {
      name: "רוטב אלפרדו - רוטב לפסטה על בסיס ריקוטה",
      image: importImage('gad_alfredo_sauce_ricotta_based.jpeg'),
    },
    {
      name: "רוטב פורצ'יני - רוטב ריקוטה ופטריות לפסטה",
      image: importImage('gad_porcini_ricotta_mushroom_sauce.jpeg'),
    },
    {
      name: "רוטב שמנת עם עגבניות 9%",
      image: importImage('yotvata_cream_tomato_sauce_9.jpeg'),
    },
    {
      name: "רוטב שמנת עם פטריות",
      image: importImage('yotvata_cream_mushroom_sauce.jpeg'),
    },
    {
      name: "סויה לבישול",
      image: importImage('alpro_soy_cooking_cream.jpeg'),
    },
  ];
  initialCreamwhippedcreamcookingbaking.sort((a, b) => a.name.localeCompare(b.name, 'he'));

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
  ];
  initialChilledpasta.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialEggs = [
    {
      name: "מארז 12 ביצים L",
      image: importImage('12_eggs_L.jpeg'),
    },
    {
      name: "מארז 12 ביצים M",
      image: importImage('12_eggs_M.jpeg'),
    },
    {
      name: "מארז 18 ביצים L",
      image: importImage('18_eggs_L.jpeg'),
    },
    {
      name: "מארז 18 ביצים M",
      image: importImage('18_eggs_M.jpeg'),
    },
    {
      name: "מארז 12 ביצים אורגניות L",
      image: importImage('12_organic_eggs_L.jpeg'),
    },
  ];
  initialEggs.sort((a, b) => a.name.localeCompare(b.name, 'he'));
    

  const [milk, setMilk] = useState<{ name: string; image: any; count: number }[]>( initialMilk.map(item => ({ ...item, count: 0 })) );
  const [yogurtDelicacies, setYogurtDelicacies] = useState<{ name: string; image: any; count: number }[]>( initialYogurtdelicacies.map(item => ({ ...item, count: 0 })) );
  const [yogurtDrink, setYogurtDrink] = useState<{ name: string; image: any; count: number }[]>(initialinitialYogurtdrinking.map(item => ({ ...item, count: 0 }))); 
  const [milkDelicaciesDesserts, setMilkDelicaciesDesserts] = useState<{ name: string; image: any; count: number }[]>(initialMilkdelicaciesdesserts.map(item => ({ ...item, count: 0 }))); 
  const [softCheese, setSoftCheese] = useState<{ name: string; image: any; count: number }[]>(initialSoftcheeses.map(item => ({ ...item, count: 0 }))); 
  const [semiHardCheese, setSemiHardCheese] = useState<{ name: string; image: any; count: number }[]>(initialSemihardcheeses.map(item => ({ ...item, count: 0 })));
  const [yellowHardCheese, setYellowHardCheese] = useState<{ name: string; image: any; count: number }[]>( initialYellowhardcheeses.map(item => ({ ...item, count: 0 })) ); 
  const [butterMargarine, setButterMargarine] = useState<{ name: string; image: any; count: number }[]>( initialButtermargarine.map(item => ({ ...item, count: 0 })) ); 
  const [creamWhippedCreamCookingBaking, setCreamWhippedCreamCookingBaking] = useState<{ name: string; image: any; count: number }[]>( initialCreamwhippedcreamcookingbaking.map(item => ({ ...item, count: 0 })) );
  const [chilledPasta, setChilledPasta] = useState<{ name: string; image: any; count: number }[]>(  initialChilledpasta.map(item => ({ ...item, count: 0 })) );
  const [eggs, setEggs] = useState<{ name: string; image: any; count: number }[]>(  initialEggs.map(item => ({ ...item, count: 0 })) );

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
      ...eggsToSave
    ];
  
    allItems.forEach(item => addProduct(item));
  
    setMilk(milk.map(item => ({ ...item, count: 0 })));
    setYogurtDelicacies(yogurtDelicacies.map(item => ({ ...item, count: 0 })));
    setYogurtDrink(yogurtDrink.map(item => ({ ...item, count: 0 })));
    setMilkDelicaciesDesserts(milkDelicaciesDesserts.map(item => ({ ...item, count: 0 })));
    setSoftCheese(softCheese.map(item => ({ ...item, count: 0 })));
    setSemiHardCheese(semiHardCheese.map(item => ({ ...item, count: 0 })));
    setYellowHardCheese(yellowHardCheese.map(item => ({ ...item, count: 0 })));
    setButterMargarine(butterMargarine.map(item => ({ ...item, count: 0 })));
    setCreamWhippedCreamCookingBaking(creamWhippedCreamCookingBaking.map(item => ({ ...item, count: 0 })));
    setChilledPasta(chilledPasta.map(item => ({ ...item, count: 0 })));
    setEggs(eggs.map(item => ({ ...item, count: 0 })));
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
    </div>
  );
};
export default DeliPage;