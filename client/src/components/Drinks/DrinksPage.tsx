import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import "../ProductCard/ProductsPage.css";

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Drinks/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DrinksPage: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');
  const initialWaterDrinks = [
    // { name: "מים מינרליים<br />בקבוק 500 מ״ל", image: importImage('mineral_water_500ml.jpeg'), id: 15 },
    { name: "מים מינרליים", image: importImage('mineral_water_1l.jpg'), id: 15 },
    // { name: "מים מינרליים<br />בקבוק 2 ליטר", image: importImage('mineral_water_2l.jpg'), id: 15 },
    // { name: "שישיית מים מינרליים<br />500 מ״ל", image: importImage('mineral_water_6x500ml.png'), id: 15 },
    // { name: "שישיית מים מינרליים<br />755 מ״ל", image: importImage('mineral_water_6x755ml.jpg'), id: 15 },
    // { name: "שישיית מים מינרליים<br />1.5 ליטר", image: importImage('mineral_water_six_pack_1.5l.png'), id: 15 },
    // { name: "שישיית מים מינרליים<br />2 ליטר", image: importImage('mineral_water_six_pack_2l.jpg'), id: 15 },

    { name: "מים בטעם ענבים", image: importImage('water_grape_flavor_1.5l.jpg'), id: 15 },
    { name: "מים בטעם תפוח", image: importImage('water_apple_flavor_1.5l.jpg'), id: 15 },
    { name: "מים בטעם אפרסק", image: importImage('water_peach_flavor_1.5l.jpg'), id: 15 },
    // { name: "מים בטעם אפרסק<br />בקבוק 500 מ״ל", image: importImage('water_peach_flavor_500ml.jpg'), id: 15 },
    // { name: "מים בטעם תפוח<br />בקבוק 500 מ״ל", image: importImage('water_apple_flavor_500ml.jpg'), id: 15 },

    { name: "מים מינרלים מוגזים", image: importImage('sparkling_mineral_water_1l.jpg'), id: 15 },

    { name: "סודה", image: importImage('soda_250ml.gif'), id: 15 },
    // { name: "סודה<br />500 מ״ל - מארז 12 יח׳", image: importImage('soda_twelve_pack_500ml.webp'), id: 15 },
    // { name: "סודה<br />מארז שישייה - 1.5 ליטר", image: importImage('soda_six_pack_1.5l.jpg'), id: 15 },

    // { name: "מי סודה<br />250 מ״ל", image: importImage('soda_water_250ml.jpg'), id: 15 },
    { name: "מי סודה", image: importImage('soda_water_1l.jpg'), id: 15 },
    // { name: "מי סודה<br />בקבוק 1.5 ליטר", image: importImage('soda_water_1.5l.jpg'), id: 15 },
    // { name: "מי סודה<br />מארז 4 יח׳ 250 מ״ל", image: importImage('soda_water_four_pack_250ml.jpeg'), id: 15 },
    // { name: "מי סודה<br />מארז 6 יח׳ 500 מ״ל", image: importImage('soda_water_six_pack_500ml.jpg'), id: 15 },
    // { name: "מי סודה<br />מארז רביעיה 1.5 ליטר", image: importImage('soda_water_four_pack_1.5l.jpg'), id: 15 },

    { name: "סודה לימון", image: importImage('lemon_soda_1l.jpg'), id: 15 },
    // { name: "סודה בטעם לימון<br />250 מ״ל - מארז 4 יח׳", image: importImage('lemon_soda_four_pack_250ml.jpg'), id: 15 },
    // { name: "סודה בטעם נענע ליים<br />250 מ״ל - מארז 4 יח׳", image: importImage('mint_lime_soda_four_pack_250ml.jpg'), id: 15 },
    // { name: "סודה בטעם לימון<br />500 מ״ל - מארז שישיה", image: importImage('lemon_soda_six_pack_500ml.jpg'), id: 15 },

    { name: "סודה בטעם נענע ליים", image: importImage('mint_lime_soda_1.5l.jpeg'), id: 15 },
    { name: "סודה בטעם פירות יער", image: importImage('berry_soda_1.5l.jpeg'), id: 15 },
    { name: "סודה בטעם תפוח", image: importImage('apple_soda_1.5l.png'), id: 15 },
    { name: "סודה בטעם אננס", image: importImage('pineapple_soda_1.5l.png'), id: 15 },

    // { name: "סודה בטעם לימון<br />1.5 ליטר - מארז רביעיה", image: importImage('lemon_soda_four_pack_1.5l.jpg'), id: 15 },
    // { name: "סודה בטעם נענע ליים<br />1.5 ליטר - מארז רביעיה", image: importImage('mint_lime_soda_four_pack_1.5l.jpg'), id: 15 },
    // { name: "סודה בטעם פירות יער<br />1.5 ליטר - מארז רביעיה", image: importImage('berry_soda_four_pack_1.5l.jpg'), id: 15 },
    // { name: "סודה בטעם תפוח<br />1.5 ליטר - מארז רביעיה", image: importImage('apple_soda_four_pack_1.5l.jpeg'), id: 15 },
    // { name: "סודה בטעם אננס<br />1.5 ליטר - מארז רביעיה", image: importImage('pineapple_soda_four_pack_1.5l.jpg'), id: 15 },
  ];

  const initialCarbonatedDrinks = [
    // { name: "קוקה קולה<br />1 ליטר" , image: importImage('coca_cola_classic_1l.jpeg'), id:15 },
    // { name: "קוקה קולה Zero<br />1 ליטר", image: importImage('coca_cola_zero_1l.jpeg'), id:15 },

    { name: "קוקה קולה", image: importImage('coca_cola_classic_1.5l.jpeg'), id: 15 },
    { name: "קוקה קולה דיאט", image: importImage('coca_cola_diet_1.5l.jpeg'), id: 15 },
    { name: "קוקה קולה Zero", image: importImage('coca_cola_zero_1.5l.jpeg'), id: 15 },
    { name: "קוקה קולה Zero לימון", image: importImage('coca_cola_zero_lemon_1.5l.jpeg'), id: 15 },
    { name: "קוקה קולה Zero נטול קפאין", image: importImage('coca_cola_zero_caffeine_free_1.5l.jpeg'), id: 15 },

    // { name: "קוקה קולה - מארז שישייה<br />1 ליטר", image: importImage('coca_cola_classic_6pack_1l.jpeg'), id:15 },
    // { name: "קוקה קולה - מארז שישייה<br />1.5 ליטר", image: importImage('coca_cola_classic_6pack_1.5l.jpg'), id:15 },
    // { name: "שיישית קוקה קולה דיאט<br />1.5 ליטר", image: importImage('coca_cola_diet_6pack_1.5l.webp'), id:15 },
    // { name: "שיישית קוקה קולה Zero<br />1.5 ליטר", image: importImage('coca_cola_zero_6pack_1.5l.webp'), id:15 },

    // { name: "קוקה קולה קלאסי<br />500 מ״ל", image: importImage('coca_cola_classic_500ml.jpg'), id:15 },
    // { name: "קוקה קולה זירו Zero<br />500 מ״ל", image: importImage('coca_cola_zero_500ml.jpg'), id:15 },

    // { name: "קוקה קולה קלאסי בפחית<br />330 מ״ל", image: importImage('coca_cola_classic_can_330ml.jpg'), id:15 },
    // { name: "קוקה קולה זירו Zero בפחית<br />330 מ״ל", image: importImage('coca_cola_zero_can_330ml.jpg'), id:15 },
    // { name: "דיאט קוקה קולה פחית<br />330 מ״ל", image: importImage('coca_cola_diet_can_330ml.png'), id:15 },

    // { name: "קוקה קולה קלאסי בפחית - שישייה<br />6 * 300 מ״ל", image: importImage('coca_cola_classic_can_6pack_330ml.png'), id:15 },
    // { name: "שישיית קוקה קולה Zero בפחית - <br />300 מ״ל", image: importImage('coca_cola_zero_can_6pack_300ml.png'), id:15 },    

    { name: "ספרייט בטעם לימון ליים", image: importImage('sprite_lemon_lime_1.5l.jpeg'), id: 15 },
    { name: "ספרייט בטעם לימון ליים ZERO", image: importImage('sprite_lemon_lime_zero_1.5l.jpeg'), id: 15 },
    { name: "ספרייט בטעם לימון נענע", image: importImage('sprite_lemon_mint_1.5l.webp'), id: 15 },
    { name: "ספרייט בטעם לימון נענע ZERO", image: importImage('sprite_lemon_mint_zero_1.5l.jpeg'), id: 15 },
    { name: "ספרייט ZERO בטעם לימון HIT", image: importImage('sprite_lemon_zero_hit_1.5l.jpeg'), id: 15 },

    // { name: "שישיית ספרייט למון ליים<br />6 * 1.5 ליטר", image: importImage('sprite_lemon_lime_6x1.5l.jpg'), id:15 },
    // { name: "שישיית ספרייט זירו<br />6 * 1.5 ליטר", image: importImage('sprite_zero_6x1.5l.jpg'), id:15 },

    // { name: "ספרייט למון ליים 500 מ״ל", image: importImage('sprite_lemon_lime_500ml.jpg'), id: 15 },
    // { name: "ספרייט ZERO 500 מ״ל", image: importImage('sprite_zero_500ml.jpg'), id: 15 },

    { name: "פאנטה אורנג'", image: importImage('fanta_orange_1.5l.jpeg'), id: 15 },
    { name: "פאנטה זירו אורנג'", image: importImage('fanta_zero_orange_1.5l.jpg'), id: 15 },
    // { name: "פאנטה אורנג' 500 מ״ל", image: importImage('fanta_orange_500ml.png'), id: 15 },
    // { name: "פאנטה אורנג' פחית 330 מ״ל", image: importImage('fanta_orange_can_330ml.png'), id: 15 },
    { name: "פאנטה אקזוטי", image: importImage('fanta_exotic_1.5l.jpg'), id: 15 },
    { name: "פאנטה בטעם תות", image: importImage('fanta_strawberry_1.5l.jpg'), id: 15 },
    { name: "פאנטה בטעם ענבים", image: importImage('fanta_grape_1.5l.jpeg'), id: 15 },
    { name: "פאנטה זירו תפוח", image: importImage('fanta_zero_apple_1.5l.jpg'), id: 15 },
    { name: "פאנטה זירו אננס מנגו", image: importImage('fanta_zero_fruits_1.5l.jpeg'), id: 15 },
    { name: "פאנטה זירו ירוק", image: importImage('fanta_zero_green_surprise_flavor_1.5l.jpeg'), id: 15 },

    { name: "מירנדה", image: importImage('mirinda_1.5l.jpeg'), id: 15 },
    { name: "סבן אפ", image: importImage('7up_1.5l.jpeg'), id: 15 },
    { name: "סבן אפ דיאט", image: importImage('7up_diet_1.5l.jpeg'), id: 15 },

    { name: "פפסי", image: importImage('pepsi_1.5l.jpeg'), id: 15 },
    { name: "פפסי מקס", image: importImage('pepsi_max_1.5l.jpeg'), id: 15 },
    // { name: "פפסי קולה - מארז שישייה<br />1.5 ליטר", image: importImage('pepsi_classic_6pack_1.5l.jpeg'), id: 15 },
    // { name: "פפסי מקס - פפסי זירו מארז שישייה<br />1.5 ליטר", image: importImage('pepsi_max_zero_6pack_1.5l.jpeg'), id: 15 },

    { name: "RC קולה", image: importImage('rc_cola_1.5l.jpg'), id: 15 },
    // { name: "שישיית RC קולה 1.5 ליטר", image: importImage('rc_cola_6x1.5l.jpg'), id: 15 },

    { name: "מי טוניק", image: importImage('schweppes_tonic_1.5l.jpg'), id: 15 },
    { name: "מי טוניק ללא סוכר", image: importImage('schweppes_tonic_no_sugar_1.5l.webp'), id: 15 },
    { name: "שוופס ג'ינג'ר אייל", image: importImage('schweppes_ginger_ale_1.5l.jpg'), id: 15 },
    { name: "ביטר למון", image: importImage('schweppes_bitter_lemon_1.5l.jpeg'), id: 15 },
    { name: "ראשן", image: importImage('schweppes_russian_1.5l.jpg'), id: 15 },
    { name: "שוופס ביטר למון לייט", image: importImage('schweppes_bitter_lemon_light_1.5l.webp'), id: 15 },
    { name: "משקה מוגז לימונייד", image: importImage('schweppes_sparkling_lemonade_1.5l.png'), id: 15 },
    { name: "משקה לימונייד ללא סוכר", image: importImage('schweppes_lemonade_no_sugar_1.5l.jpg'), id: 15 },
    { name: "משקה מוגז בטעם פירות יער", image: importImage('schweppes_berry_fizz_1.5l.jpeg'), id: 15 },
    { name: "משקה מוגז בטעם אפרסק", image: importImage('schweppes_peach_fizz_1.5l.jpeg'), id: 15 },
    { name: "משקה תפוחים מוגז", image: importImage('schweppes_apple_fizz_1.5l.jpg'), id: 15 },
    { name: "משקה תפוחים מוגז ללא סוכר", image: importImage('schweppes_apple_fizz_no_sugar_1.5l.jpg'), id: 15 },
    { name: "משקה מוגז בטעם אננס ללא סוכר", image: importImage('schweppes_pineapple_fizz_no_sugar_1.5l.jpg'), id: 15 },
    { name: "משקה מוחיטו בטעם ליים נענע", image: importImage('schweppes_mojito_1.5l.jpeg'), id: 15 },
    { name: "משקה מוגז לימונדה ורודה", image: importImage('schweppes_pink_lemonade_1.5l.jpeg'), id: 15 },
    { name: "שוופס מוגז בטעם ענבים", image: importImage('schweppes_grape_fizz_1.5l.jpg'), id: 15 },
    { name: "גזוז בטעם תות ליים", image: importImage('schweppes_strawberry_lime_1.5l.jpg'), id: 15 },
    { name: "מוחיטו ללא סוכר", image: importImage('schweppes_mojito_no_sugar_1.5l.jpeg'), id: 15 },
    { name: "משקה מוגז בטעם תפוח ליים", image: importImage('schweppes_apple_lime_fizz_1.5l.jpeg'), id: 15 },
    { name: "משקה מוגז בטעם אננס", image: importImage('schweppes_pineapple_fizz_1.5l.jpeg'), id: 15 },
    { name: "משקה מוגז אשכולית אדומה", image: importImage('schweppes_red_grapefruit_1.5l.jpg'), id: 15 },
    { name: "משקה מוגז בטעם ענבי ריזלינג", image: importImage('schweppes_riesling_grape_1.5l.jpeg'), id: 15 },

    // { name: "משקה מוגז בטעם תפוחים<br />330 מ״ל", image: importImage('schweppes_apple_330ml.jpg'), id:15 },
    // { name: "ענבים מוגז<br />330 מ״ל", image: importImage('schweppes_grape_330ml.jpg'), id:15 },
    // { name: "גזוז שוופס בטעם לימון<br />330 מ״ל", image: importImage('schweppes_lemon_330ml.jpg'), id:15 },

    // { name: "פחית משקה מוגז תפוחים - מארז 4 יח׳<br />4 * 330 מ״ל", image: importImage('schweppes_apple_4pack_330ml.jpg'), id:15 },
    // { name: "פחית משקה מוגז בטעם תות ליים - מארז 4 יח׳<br />4 * 330 מ״ל", image: importImage('schweppes_strawberry_lime_4pack_330ml.jpg'), id:15 },
    // { name: "פחית משקה מוגז בטעם ענבים - מארז 4 יח׳<br />4 * 330 מ״ל", image: importImage('schweppes_grape_4pack_330ml.jpg'), id:15 },
    // { name: "פחית משקה מוגז לימונייד - מארז 4 יח׳<br />4 * 330 מ״ל", image: importImage('schweppes_lemonade_4pack_330ml.jpg'), id:15 },

    { name: "אורנג'דה בטעם פירות הדר", image: importImage('orangade_citrus_1.5l.jpg'), id: 15 },
    { name: "אורנג'דה בטעם תפוז", image: importImage('orangade_orange_1.5l.png'), id: 15 },
    { name: "אורנג'דה בטעם תפוז אדום", image: importImage('orangade_blood_orange_1.5l.jpeg'), id: 15 },

    { name: "קריסטל גזוז בטעם קולה", image: importImage('crystal_cola_2l.jpg'), id: 15 },
    { name: "קריסטל גזוז בטעם ענבים", image: importImage('crystal_grape_2l.jpeg'), id: 15 },
    { name: "קריסטל גזוז בטעם תות", image: importImage('crystal_strawberry_2l.jpg'), id: 15 },
    { name: "קריסטל גזוז בטעם אקזוטי", image: importImage('crystal_exotic_2l.jpeg'), id: 15 },
    { name: "קריסטל גזוז בטעם תפוח", image: importImage('crystal_apple_2l.jpg'), id: 15 },
    { name: "קריסטל גזוז בטעם תפוז", image: importImage('crystal_orange_2l.jpg'), id: 15 },
    { name: "קריסטל גזוז בטעם למון ליים", image: importImage('crystal_lemon_lime_2l.jpg'), id: 15 },
    { name: "קריסטל גזוז בטעם מנטה", image: importImage('crystal_mint_2l.jpg'), id: 15 },
  ];

  const initialSweetDrinks = [
    { name: "תה קר אפרסק", image: importImage('fuze_tea_peach_1.5.png'), id: 15 },
    { name: "תה קר מנגו אננס", image: importImage('fuze_tea_mango_pineapple_1.5.png'), id: 15 },
    { name: "תה קר ענבים", image: importImage('fuze_tea_grape_1.5.png'), id: 15 },
    { name: "תה קר גרין לימונענע", image: importImage('fuze_tea_green_lemonmint_1.5.png'), id: 15 },
    { name: "תה קר אפרסק Zero", image: importImage('fuze_tea_zero_peach_1.5.png'), id: 15 },
    { name: "תה קר גרין ליצ'י פסיפלורה Zero", image: importImage('fuze_tea_zero_green_lychee_passionfruit_1.5.png'), id: 15 },
    { name: "תה קר פירות יער נענע Zero", image: importImage('fuze_tea_zero_berry_mint_1.5.png'), id: 15 },
    { name: "תה קר גרין אננס Zero", image: importImage('fuze_tea_zero_green_pineapple_1.5l.webp'), id: 15 },

    { name: "משקה תה קר ירוק לימון לואיזה", image: importImage('spring_ice_tea_green_lemon_louiza_1.5l.webp'), id: 15 },
    { name: "משקה תה קר מנגו אפרסק", image: importImage('spring_ice_tea_mango_peach_1.5l.webp'), id: 15 },

    { name: "משקה קל לימונים", image: importImage('primor_lemon_1.5l.webp'), id: 15 },
    { name: "משקה קל תפוזים לייט", image: importImage('tapuzina_light_orange_1.5l.webp'), id: 15 },
    { name: "משקה קל תפוזים", image: importImage('prigat_orange_1.5l.jpg'), id: 15 },
    { name: "משקה קל אשכולית", image: importImage('prigat_grapefruit_1.5l.jpg'), id: 15 },
    { name: "משקה קל אשכוליות דיאט", image: importImage('prigat_diet_grapefruit_1.5l.jpg'), id: 15 },
    { name: "משקה קל ענבים", image: importImage('prigat_grape_1.5l.jpg'), id: 15 },
    { name: "משקה קל ענבים מרלו", image: importImage('prigat_merlot_grape_1.5l.png'), id: 15 },
    { name: "משקה קל תפוח", image: importImage('prigat_apple_1.5l.png'), id: 15 },
    { name: "משקה קל מנגו", image: importImage('prigat_mango_1.5l.jpg'), id: 15 },
    { name: "משקה קל לימונענע", image: importImage('prigat_lemon_mint_1.5l.jpg'), id: 15 },
    { name: "משקה קל תות בננה", image: importImage('prigat_strawberry_banana_1.5l.png'), id: 15 },
    { name: "משקה קל אפרסק", image: importImage('prigat_peach_1.5l.jpg'), id: 15 },
    { name: "משקה קל תפוח דובדבן", image: importImage('prigat_apple_cherry_1.5l.jpg'), id: 15 },

    { name: "משקה קל ענבים צלול", image: importImage('prigat_clear_grape_1.5l.jpg'), id: 15 },
    { name: "משקה קל אפרסק צלול", image: importImage('prigat_clear_peach_1.5l.jpg'), id: 15 },
    { name: "משקה קל אננס צלול", image: importImage('prigat_clear_pineapple_1.5l.webp'), id: 15 },

    // { name: "משקה קל צלול אננס אפרסק", image: importImage('tapuzina_clear_pineapple_peach_1.5l.png'), id: 15 },
    // { name: "משקה קל צלול תות פירות יער", image: importImage('tapuzina_clear_strawberry_berries_1.5l.png'), id: 15 },
    { name: "משקה קל תפוזים לייט", image: importImage('tapuzina_light_orange_1.5l.webp'), id: 15 },
    { name: "משקה קל מוחיטו", image: importImage('tapuzina_mojito_1.5l.jpg'), id: 15 },

    { name: "משקה קל בטעם קרטיב לימון", image: importImage('prigat_lemon_popsicle_flavor_1.5l.jpg'), id: 15 },
    { name: "משקה קל בטעם קרטיב ענבים", image: importImage('prigat_grape_popsicle_flavor_1.5l.webp'), id: 15 },
    { name: "משקה קל בטעם קרטיב פטל", image: importImage('prigat_raspberry_popsicle_flavor_1.5l.jpg'), id: 15 },

    { name: "פרוט ווטר ענבים", image: importImage('schweppes_fruit_water_grape_1.5l.jpeg'), id: 15 },
    { name: "פרוט ווטר אננס", image: importImage('schweppes_fruit_water_pineapple_1.5l.jpeg'), id: 15 },
    { name: "פרוט ווטר אפרסק", image: importImage('schweppes_fruit_water_peach_1.5l.jpeg'), id: 15 },
    { name: "פרוט ווטר אבטיח", image: importImage('schweppes_fruit_water_watermelon_1.5l.jpeg'), id: 15 },

    { name: "משקה קל אלוורה בטעם ענבים", image: importImage('sappe_aloe_vera_grape_1l.jpeg'), id: 15 },
    { name: "משקה קל אלוורה בטעם אפרסק", image: importImage('sappe_aloe_vera_peach_1l.jpeg'), id: 15 },
    { name: "משקה קל אלוורה בטעם מלון", image: importImage('sappe_aloe_vera_melon_1l.jpg'), id: 15 },

    { name: "אריזונה ג'נסנג דבש", image: importImage('arizona_ginseng_honey_1l.webp'), id: 15 },
    { name: "אריזונה אוכמניות", image: importImage('arizona_blueberry_1l.webp'), id: 15 },

    { name: "משקה קל גויאבה", image: importImage('island_guava_1l.jpg'), id: 15 },

    { name: "משקה קל פירות טרופיים", image: importImage('spring_tropical_fruits_1.5l.webp'), id: 15 },
    { name: "משקה קל אגס תפוח סברס", image: importImage('spring_pear_apple_prickly_pear_1.5l.webp'), id: 15 },
    { name: "משקה קל אננס בננה", image: importImage('spring_pineapple_banana_1.5l.png'), id: 15 },
    { name: "משקה קל תפוחים לייט", image: importImage('spring_apple_light_1.5l.webp'), id: 15 },
    { name: "משקה קל אשכוליות אננס לייט", image: importImage('spring_grapefruit_pineapple_light_1.5l.webp'), id: 15 },

    { name: "מיץ תפוזים סחוט", image: importImage('primor_orange_juice.png'), id: 15 },
    { name: "מיץ רימונים סחוט", image: importImage('primor_pomegranate_juice.webp'), id: 15 },
    { name: "מיץ תפוחים סחוט", image: importImage('primor_apple_juice.png'), id: 15 },
    { name: "מיץ אשכוליות אדומות סחוט", image: importImage('primor_red_grapefruit_juice.png'), id: 15 },

    // { name: "מיץ תפוח עץ צלול", image: importImage('pri_niv_clear_apple_juice.jpg'), id: 15 },

    // { name: "משקה לימונענע", image: importImage('pri_niv_lemon_mint_drink.jpg'), id: 15 },
    // { name: "משקה בטעם רימונים", image: importImage('spring_pomegranate_drink.jpg'), id: 15 },
    
    // { name: "מיץ תפוחים קיווי ואגס", image: importImage('pri_niv_apple_kiwi_pear.jpg'), id: 15 },
    // { name: "שייק תמר בננה", image: importImage('pri_niv_date_banana_shake.jpg'), id: 15 },
    // { name: "שייק תות בננה", image: importImage('pri_niv_strawberry_banana_shake.jpg'), id: 15 },
    // { name: "מיץ תפוח סלק", image: importImage('golan_apple_beet_juice.jpg'), id: 15 },
    // { name: "נקטר דובדבן חמוץ", image: importImage('rauh_sour_cherry_nectar.jpg'), id: 15 },
    // { name: "מיץ אננס פסיפלורה", image: importImage('spring_pineapple_passionfruit_juice.jpg'), id: 15 },
    // { name: "מיץ גויאבה ורודה", image: importImage('rauh_pink_guava_nectar.jpg'), id: 15 },
    // { name: "מיץ ענבים", image: importImage('tropics_grape_drink.jpg'), id: 15 },
    // { name: "משקה קל לימונדה בלדי", image: importImage('pri_niv_baladi_lemonade.jpg'), id: 15 },
    // { name: "מיץ תפוז בננה ופסיפלורה סחוטים", image: importImage('pri_niv_orange_banana_passionfruit.jpg'), id: 15 },

    { name: "מיץ שזיפים מיובשים", image: importImage('tomer_prune_juice_1l.webp'), id: 15 },

    { name: "חמוציות", image: importImage('cranberry_juice.jpg'), id: 15 },
    { name: "חמוציות דיאט", image: importImage('diet_cranberry.png'), id: 15 },

    { name: "מיץ עגבניות", image: importImage('spring_tomato_juice.png'), id: 15 },

    { name: "אננס בננה כורכום", image: importImage('fruit_veg_pineapple_banana_turmeric_1l.webp'), id: 15 },
    { name: "אננס תפוח גזר", image: importImage('fruit_veg_pineapple_apple_carrot_1l.webp'), id: 15 },
    { name: "תפוז גזר", image: importImage('fruit_veg_orange_carrot_1l.webp'), id: 15 },
    { name: "תפוח אוכמניות", image: importImage('fruit_veg_apple_blueberry_1l.webp'), id: 15 },
  ];

  const initialConcentrates = [
    { name: "ויטמינצ'יק בטעם ענבים", image: importImage('vitamin_grape_1l.jpg'), id: 15 },
    { name: "ויטמינצ'יק בטעם פטל", image: importImage('vitamin_raspberry_1l.jpg'), id: 15 },
    { name: "ויטמינצ'יק בטעם תפוח", image: importImage('vitamin_apple_1l.webp'), id: 15 },
    { name: "ויטמינצ'יק בטעם אננס", image: importImage('vitamin_pineapple_1l.jpg'), id: 15 },
    { name: "ויטמינצ'יק בטעם מנגו אפרסק", image: importImage('vitamin_mango_peach_1l.jpg'), id: 15 },

    { name: "סירופ דל קלוריות בטעם אננס", image: importImage('low_cal_pineapple_1l.png'), id: 15 },
    { name: "סירופ דל קלוריות בטעם לימון", image: importImage('low_cal_lemon_1l.png'), id: 15 },
    { name: "סירופ דל קלוריות בטעם פטל", image: importImage('low_cal_raspberry_1l.png'), id: 15 },
    { name: "סירופ דל קלוריות בטעם תפוחים", image: importImage('low_cal_apple_1l.png'), id: 15 },
    { name: "סירופ דל קלוריות בטעם ענבים", image: importImage('low_cal_grape_1l.png'), id: 15 },
    { name: "סירופ דל קלוריות בטעם אשכוליות", image: importImage('low_cal_grapefruit_1l.png'), id: 15 },
    { name: "משקה בטעם לימון מרוכז קפוא", image: importImage('frozen_lemon_concentrate_280g.png'), id: 15 },
    { name: "משקה בטעם לימונענע מרוכז קפוא", image: importImage('frozen_lemon_mint_concentrate_280g.png'), id: 15 },
    { name: "מיץ תפוזים מרוכז קפוא", image: importImage('frozen_orange_concentrate_280g.png'), id: 15 },
    { name: "משקה בטעם מנגו מרוכז קפוא", image: importImage('frozen_mango_concentrate_280g.png'), id: 15 },
    { name: "משקה בטעם פירות יער מרוכז קפוא", image: importImage('frozen_berry_concentrate_280g.png'), id: 15 },
    { name: "משקה בטעם אפרסק מרוכז קפוא", image: importImage('frozen_peach_concentrate_280g.png'), id: 15 },
    { name: "סירופ דיאט בטעם לימונענע", image: importImage('diet_lemon_mint_750ml.jpg'), id: 15 },
    { name: "סירופ דיאט בטעם אשכוליות", image: importImage('diet_grapefruit_750ml.jpg'), id: 15 },
    { name: "סירופ דיאט בטעם תפוחים", image: importImage('diet_apple_750ml.jpg'), id: 15 },
    { name: "סירופ דיאט בטעם אננס", image: importImage('diet_pineapple_750ml.png'), id: 15 },
    { name: "סירופ בטעם תפוז דיאט", image: importImage('diet_orange_1l.jpg'), id: 15 },
    { name: "סירופ בטעם פטל דיאט", image: importImage('diet_raspberry_1l.jpg'), id: 15 },
    { name: "סירופ בטעם לימון", image: importImage('diet_lemon_750ml.jpg'), id: 15 },
    { name: "סירופ בטעם תפוזים", image: importImage('diet_orange_750ml.jpg'), id: 15 },
    { name: "בנפייבר סיבים תזונתיים אבקת דקסטרין חיטה", image: importImage('benefiber_wheat_dextrin_powder_261g.jpg'), id: 15 },
    { name: "סירופ בטעם פטל ללא תוספת סוכר", image: importImage('no_sugar_raspberry_1l.jpg'), id: 15 },
    { name: "סירופ בטעם ענבים ללא תוספת סוכר", image: importImage('no_sugar_grape_1l.jpg'), id: 15 },
    { name: "סירופ בטעם תפוחים ללא תוספת סוכר", image: importImage('no_sugar_apple_1l.jpg'), id: 15 },
    { name: "רכז רימונים", image: importImage('pomegranate_concentrate_420g.jpg'), id: 15 },
    { name: "סירופ בטעם לימונדה", image: importImage('lemonade_syrup_500ml.jpg'), id: 15 },
    { name: "סירופ משקה אנרגיה קלאסי", image: importImage('energy_drink_classic_440ml.jpg'), id: 15 },
    { name: "סירופ בטעם מירנדה", image: importImage('mirinda_syrup_440ml.jpg'), id: 15 },
    { name: "סירופ בטעם סבן אפ", image: importImage('7up_syrup_440ml.jpg'), id: 15 },
    { name: "סירופ בטעם סבן אפ פרי", image: importImage('7up_free_syrup_440ml.jpg'), id: 15 },
    { name: "סירופ בטעם פפסי", image: importImage('pepsi_syrup_440ml.jpg'), id: 15 },
    { name: "סירופ בטעם פפסי מקס", image: importImage('pepsi_max_syrup_440ml.jpg'), id: 15 },
  ];

  const initialEnergyDrinks = [
    { name: "משקה אנרגיה בלו קרנברי", image: importImage('blu_cranberry_250ml.jpg'), id: 15 },
    { name: "משקה אנרגיה בלו ללא סוכר", image: importImage('blu_sugar_free_250ml.jpg'), id: 15 },
    { name: "אקס אל TEN בטעם נענע ליים ללא סוכר", image: importImage('xl_ten_mint_lime_sugar_free_250ml.jpg'), id: 15 },
    { name: "אקס אל TEN ללא סוכר", image: importImage('xl_ten_sugar_free_250ml.jpg'), id: 15 },
    { name: "אקס אל TEN בטעם תפוח לא סוכר", image: importImage('xl_ten_apple_sugar_free_250ml.webp'), id: 15 },
    { name: "משקה אנרגיה בלו", image: importImage('blu_250ml.jpg'), id: 15 },
    { name: "משקה אנרגיה בלו אבטיח", image: importImage('blu_watermelon_250ml.webp'), id: 15 },
    { name: "משקה אנרגיה בלו דיי", image: importImage('blu_day_250ml.webp'), id: 15 },
    { name: "משקה אנרגיה בלו דיי ענבים", image: importImage('blu_day_grapes_250ml.jpg'), id: 15 },
    { name: "אקס אל משקה אנרגיה", image: importImage('xl_energy_250ml.webp'), id: 15 },
    { name: "אקס אל TEN בטעם מנגו ללא סוכר", image: importImage('xl_ten_mango_sugar_free_250ml.webp'), id: 15 },
    { name: "משקה אנרגיה מונסטר מנגו לוקו", image: importImage('monster_mango_loco_500ml.jpg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אנרג'י פייפליין פאנץ'", image: importImage('monster_energy_punch_500ml.webp'), id: 15 },
    { name: "משקה אנרגיה מונסטר אנרג'י אולטרא פרדייס", image: importImage('monster_ultra_paradise_500ml.jpg'), id: 15 },
    { name: "רד בול אבטיח", image: importImage('redbull_watermelon_250ml.jpg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אולטרא פייסטה זירו", image: importImage('monster_ultra_fiesta_zero_500ml.jpeg'), id: 15 },
    { name: "רד בול ללא סוכר", image: importImage('redbull_sugar_free_250ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר גרין זירו", image: importImage('monster_green_zero_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אולטרה גולד זירו", image: importImage('monster_ultra_gold_zero_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אוסי לימונדה", image: importImage('monster_aussie_lemonade_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אנרג'י", image: importImage('monster_energy_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אנרג'י זירו", image: importImage('monster_energy_zero_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אולטרה", image: importImage('monster_ultra_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר אנרג'י רוזי", image: importImage('monster_energy_rosie_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה מונסטר מונרך", image: importImage('monster_monarch_500ml.jpeg'), id: 15 },
    { name: "משקה אנרגיה רדבול קלאסי", image: importImage('redbull_classic_250ml.jpeg'), id: 15 },

      { name: "משקה פונקציונלי מוגז בטעם הדרים ליים אולאין אינרג'י", image: importImage('allin_citrus_lime.webp'), id: 15 },
      { name: "משקה פונקציונלי מוגז בטעם טרופי אולאין אינרג'י", image: importImage('allin_tropical.webp'), id: 15 },
      { name: "משקה פונקציונלי מוגז בטעם פירות יער אולאין אנרג'י", image: importImage('allin_berry.webp'), id: 15 },
      { name: "צלזיוס משקה אנרגיה בטעם אפרסק", image: importImage('celsius_peach.webp'), id: 15 },
      { name: "צלזיוס משקה אנרגיה בטעם לימון", image: importImage('celsius_lemon.jpg'), id: 15 },
      { name: "צלזיוס משקה אנרגיה בטעם מנגו פסיפלורה", image: importImage('celsius_mango_passionfruit.webp'), id: 15 }
  ];


  const initialBeers = [
 // { name: "מאלט שחורה", image: importImage('black_malt.jpg'), id: 15 },
    { name: "בירה שחורה", image: importImage('nesher_black_beer_1.5l.jpeg'), id: 15 },
    { name: "בירה שחורה דיאט", image: importImage('nesher_black_beer_diet_1.5l.jpeg'), id: 15 },

    { name: "קורונה", image: importImage('corona.webp'), id: 15 },
    { name: "טובורג רד", image: importImage('tuborg_red.jpg'), id: 15 },
    { name: "טובורג גולד", image: importImage('tuborg_gold.jpg'), id: 15 },
    { name: "סטלה ארטואה", image: importImage('stella_artois.jpg'), id: 15 },
    { name: "קרלסברג לומה", image: importImage('carlsberg_luma.jpg'), id: 15 },
    { name: "קרלסברג", image: importImage('carlsberg.webp'), id: 15 },
    { name: "קרלסברג ללא אלכוהול", image: importImage('carlsberg_non_alcoholic.jpg'), id: 15 },
    { name: "באדוויזר", image: importImage('budweiser.jpg'), id: 15 },
    { name: "שנדי אפרסק", image: importImage('shandy_peach.jpg'), id: 15 },
    { name: "שנדי לימון ליים", image: importImage('shandy_lemon_lime.jpg'), id: 15 },
    { name: "שנדי תפוח", image: importImage('shandy_apple.jpg'), id: 15 },
    { name: "בקס", image: importImage('becks.jpg'), id: 15 },
    { name: "בקס ללא אלכוהול", image: importImage('becks_non_alcoholic.jpg'), id: 15 },
    { name: "1664 בלאנק", image: importImage('blanc_1664.jpg'), id: 15 },
    { name: "קרומבאכר פילס", image: importImage('krombacher_pils.jpg'), id: 15 },
    { name: "קרומבאכר חיטה", image: importImage('krombacher_wheat.jpg'), id: 15 },
    { name: "מילר", image: importImage('miller.jpg'), id: 15 },
    { name: "סטארופרמן", image: importImage('staropramen.jpg'), id: 15 },
    { name: "לף בראון", image: importImage('leffe_brown.jpeg'), id: 15 },
    { name: "ויינשטפן", image: importImage('weihenstephaner.jpg'), id: 15 },
    { name: "בירה גינס", image: importImage('guinness.jpg'), id: 15 },
    { name: "צ'סו לא מסוננת", image: importImage('cesu_unfiltered.jpg'), id: 15 },
    { name: "צ'סו ברוז'ה לא מסוננת", image: importImage('cesu_bruja_unfiltered.jpg'), id: 15 },
    { name: "צ'סו פרימיום", image: importImage('cesu_premium.jpg'), id: 15 },
    { name: "מלכה בהירה", image: importImage('queen_light.jpg'), id: 15 },
    { name: "מלכה אדמונית", image: importImage('queen_red.jpg'), id: 15 },
    { name: "מלכה הינדי", image: importImage('queen_india.jpg'), id: 15 },
    { name: "מלכה כהה", image: importImage('queen_dark.jpg'), id: 15 },
    { name: "מלכה חיטה", image: importImage('queen_wheat.jpg'), id: 15 },
    { name: "אלכסנדר אמברה", image: importImage('alexander_ambre.jpg'), id: 15 },
    { name: "אלכסנדר גרין", image: importImage('alexander_green.jpg'), id: 15 },
    { name: "אלכסנדר חיטה", image: importImage('alexander_wheat.png'), id: 15 },
    // { name: "ליפמנס פרוטס", image: importImage('liefmans_fruitesse.jpg'), id: 15 },
    // { name: "שקמה IPA", image: importImage('shakma_ipa.jpg'), id: 15 },
    // { name: "שקמה אייל ענברי", image: importImage('shakma_amber_ale.jpg'), id: 15 },
    // { name: "פרנסיסקאנר כהה", image: importImage('franziskaner_dark.jpg'), id: 15 },
    // { name: "צלזיוס אפרסק", image: importImage('celsius_peach.jpg'), id: 15 },
    // { name: "צלזיוס לימון", image: importImage('celsius_lemon.jpg'), id: 15 },
    // { name: "צלזיוס מנגו פסיפלורה", image: importImage('celsius_mango_passionfruit.jpg'), id: 15 },
    // { name: "סיידר פיז אגס", image: importImage('fizz_pear.jpg'), id: 15 },
    // { name: "סיידר פיז אוכמניות", image: importImage('fizz_blueberry.jpg'), id: 15 },
    // { name: "סיידר פיז תות שדה", image: importImage('fizz_strawberry.jpg'), id: 15 },
    // { name: "סיידר פיז תפוח עץ", image: importImage('fizz_apple.jpg'), id: 15 },
    // { name: "וולפאס אנגלמן פייל אייל", image: importImage('wolfas_engelman_pale_ale.jpg'), id: 15 },
    // { name: "וולפאס אנגלמן אינדיה פייל אייל", image: importImage('wolfas_engelman_india_pale_ale.jpg'), id: 15 },
    // { name: "וולפאס אנגלמן בלנש חיטה בלגית", image: importImage('wolfas_engelman_blanche_wheat.jpg'), id: 15 },
    // { name: "וולפאס אנגלמן ניו אינגלנד", image: importImage('wolfas_engelman_new_england.jpg'), id: 15 },
    // { name: "וולפאס אנגלמן קריק דובדבן", image: importImage('wolfas_engelman_cherry_creek.jpg'), id: 15 }

    { name: "סיידר תפוחים מוגז", image: importImage('fizzy_apple_cider.jpg'), id: 15 }
  ];

const initialWines = [
  // Tirosh (Grape Juice)
  { name: "תירוש אדום", image: importImage('tirosh_red.jpg'), id: 15 },
  { name: "תירוש אדום מבעבע", image: importImage('tirosh_sparkling_red.png'), id: 15 },
  { name: "תירוש לבן", image: importImage('tirosh_white.png'), id: 15 },
  { name: "תירוש לבן מבעבע", image: importImage('tirosh_sparkling_white.png'), id: 15 },

  // Cabernet Sauvignon
  { name: "קברנה סוביניון", image: importImage('cabernet_sauvignon.webp'), id: 15 },

  // Merlot
  { name: "מרלו", image: importImage('merlot.webp'), id: 15 },

  // Shiraz
  { name: "שיראז", image: importImage('shiraz.jpg'), id: 15 },

  // Chardonnay
  { name: "שרדונה", image: importImage('chardonnay.jpg'), id: 15 },

  // Sauvignon Blanc
  { name: "סוביניון בלאן", image: importImage('sauvignon_blanc.webp'), id: 15 },

  // Other Varieties
  { name: "גוורצטרמינר", image: importImage('gewurztraminer.webp'), id: 15 },
  { name: "רוזה", image: importImage('rose.png'), id: 15 },
  { name: "מוסקט", image: importImage('muscat.jpg'), id: 15 },
  { name: "בלנד אדום", image: importImage('red_blend.jpeg'), id: 15 },
  { name: "בלנד לבן", image: importImage('white_blend.jpg'), id: 15 },
  { name: "פטיט סירה", image: importImage('petit_sirah.jpg'), id: 15 },
  { name: "קברנה סוביניון מרלו", image: importImage('cabernet_merlot.webp'), id: 15 },
  { name: "אמרלד ריזלינג", image: importImage('emerald_riesling.jpg'), id: 15 },
  { name: "מלבק", image: importImage('malbec.jpg'), id: 15 },
  { name: "מרסאן", image: importImage('marsan.jpg'), id: 15 },

  // Sparkling Wines
  { name: "קאווה", image: importImage('cava.jpg'), id: 15 },
  { name: "למברוסקו לבן", image: importImage('white_lambrusco.jpg'), id: 15 },
  { name: "למברוסקו רוזה", image: importImage('rose_lambrusco.jpg'), id: 15 },
  { name: "למברוסקו אדום", image: importImage('red_lambrusco.jpg'), id: 15 },

  { name: "מרטיני אסטי", image: importImage('martini_asti.jpeg'), id: 15 },

  // Sweet Wines
  { name: "יין אדום מתוק", image: importImage('red_sweet_wine.webp'), id: 15 },
  { name: "יין לבן חצי מתוק", image: importImage('white_semi_sweet_wine.jpg'), id: 15 },
];


const initialAlcoholDrinks = [
  { name: "וויסקי בלאק לייבל", image: importImage('Black_Label.png'), id: 15 },
  { name: "וויסקי רד לייבל", image: importImage('Red_Label.png'), id: 15 },
  
  // וודקה
  { name: "סמירנוף אייס", image: importImage('smirnoff_ice.jpg'), id: 15 },
  { name: "וודקה סטוליצ'ניה", image: importImage('stolichnaya_vodka.jpg'), id: 15 },
  { name: "וודקה גריי גוס", image: importImage('grey_goose_vodka.jpg'), id: 15 },
  { name: "וודקה רוסקי", image: importImage('russian_standard_vodka.jpg'), id: 15 },
  // { name: "וודקה חלבני דאר", image: importImage('halvani_dar_vodka.jpg'), id: 15 },
  { name: "וודקה חלבני דר קלאסיק", image: importImage('halvani_dar_classic_vodka.jpg'), id: 15 },
  { name: "וודקה פשניצ'ניה", image: importImage('pshenichnaya_vodka.jpg'), id: 15 },

  // ערק ואוזו
  { name: "אוזו 12", image: importImage('ouzo_12.jpg'), id: 15 },
  { name: "אוזו מטקסה", image: importImage('metaxa_ouzo.jpg'), id: 15 },
  { name: "ארק כרמל", image: importImage('carmel_arack.jpg'), id: 15 },
  { name: "עלית הארק", image: importImage('elite_arack.jpg'), id: 15 },
  { name: "מחייה 13 אשכולית אדומה", image: importImage('makhya_13_grapefruit.jpg'), id: 15 },
  { name: "מחייה 13 לימונים", image: importImage('makhya_13_lemons.jpeg'), id: 15 },
  { name: "מחייה 13 פסיפלורה", image: importImage('makhya_13_passionfruit.jpg'), id: 15 },
  { name: "מחייה 13 רוזטה", image: importImage('makhya_13_Rosetta.jpg'), id: 15 },
  { name: "ערק בוכא בוקובזה", image: importImage('bouka_bokobza_arack.jpg'), id: 15 },

  // וויסקי וברנדי
  { name: "וויסקי גרנט'ס סקוטי", image: importImage('grants_scotch_whiskey.jpg'), id: 15 },
  { name: "וויסקי אירי טולמור דיו", image: importImage('tullamore_dew_irish_whiskey.png'), id: 15 },
  { name: "וויסקי פיימוס גראוס", image: importImage('famous_grouse_whiskey.png'), id: 15 },
  { name: "וויסקי סקוטי לייבל 5", image: importImage('label_5_scotch_whiskey.jpeg'), id: 15 },
  { name: "וויסקי ג'ק דניאלס מס' 7", image: importImage('jack_daniels_no7.jpg'), id: 15 },
  { name: "וויסקי ג'ק דניאלס תפוח", image: importImage('jack_daniels_apple.jpg'), id: 15 },
  { name: "וויסקי ג'נטלמן ג'ק", image: importImage('gentleman_jack_whiskey.jpg'), id: 15 },
  { name: "וויסקי סינגל בארל", image: importImage('single_barrel_whiskey.avif'), id: 15 },
  { name: "וויסקי סינגל מאלט", image: importImage('tomintoul_single_malt.jpg'), id: 15 },
  { name: "וויסקי מאנקי שולדר", image: importImage('monkey_shoulder_whiskey.jpeg'), id: 15 },
  
  // ליקר וקוקטייל
  { name: "ורדי רימונים ספרקלטיני", image: importImage('bosca_pomegranate_sparkletini.jpg'), id: 15 },
  { name: "ורדי ספרקלטיני אפרסק", image: importImage('bosca_peach_sparkletini.jpg'), id: 15 },
  { name: "ורדי רספברי ספרקלטיני", image: importImage('bosca_raspberry_sparkletini.webp'), id: 15 },
  { name: "ורדי גרין אפל ספרקלטיני", image: importImage('bosca_green_apple_sparkletini.jpg'), id: 15 },
  { name: "ורדי ספרקלטיני אסאי", image: importImage('bosca_acai_sparkletin.avif'), id: 15 },
  { name: "ורדי רוזה Rose", image: importImage('bosca_rose_sparkletini.jpg'), id: 15 },
  { name: "בקרדי מוחיטו", image: importImage('bacardi_mojito.webp'), id: 15 },
  { name: "ג'ין בומביי ספייר", image: importImage('bombay_sapphire_gin.png'), id: 15 },
  { name: "ג'ין גורדון", image: importImage('gordons_gin.webp'), id: 15 },

  { name: "ליקר בטעם אפרסק", image: importImage('binyamina_peach_liqueur.jpg'), id: 15 },
  { name: "ליקר בטעם בננה", image: importImage('binyamina_banana_liqueur.jpg'), id: 15 },
  { name: "ליקר בטעם לימונצ'לו", image: importImage('binyamina_limoncello_liqueur.jpg'), id: 15 },
  { name: "ליקר בטעם קרם דה קסיס", image: importImage('binyamina_creme_de_cassis_liqueur.png'), id: 15 },
  { name: "ליקר יגרמייסטר", image: importImage('jägermeister.jpeg'), id: 15 },
  { name: "ליקר למונצ'ילו וילה מסה", image: importImage('villa_massa_limoncello.jpeg'), id: 15 },

  { name: "מרטיני אקסטרה דריי", image: importImage('martini_extra_dry.jpg'), id: 15 },
  { name: "מרטיני ביאנקו", image: importImage('martini_bianco.jpg'), id: 15 },
  { name: "מרטיני רוסו", image: importImage('martini_rosso.jpg'), id: 15 },

  { name: "משקה Buzz מוגז בטעם רימון", image: importImage('buzz_pomegranate_sparkling.jpg'), id: 15 },
  { name: "אוטום קרים כשר", image: importImage('autumn_cream.webp'), id: 15 },

  { name: "סיידר מוגז בטעם מוחיטו", image: importImage('mojito_cider.webp'), id: 15 },
  { name: "סיידר מוגז בטעם סק און דה ביץ'", image: importImage('sex_on_the_beach_cider.jpg'), id: 15 },
  { name: "סיידר מוגז בטעם פינה קולדה", image: importImage('pina_colada_cider.jpg'), id: 15 },
  { name: "סיידר מוגז בטעם קוסמופוליטן", image: importImage('cosmopolitan_cider.jpg'), id: 15 },

  { name: "פינה קולדה", image: importImage('surfers_pina_colada.webp'), id: 15 },
  { name: "פסטיס פרדו", image: importImage('pastis_prado.jpg'), id: 15 },
  { name: "רום לבן בקרדי קרטה בלנקה", image: importImage('bacardi_carta_blanca_rum.jpeg'), id: 15 },
  { name: "רום לבן קפטן מורגן", image: importImage('captain_morgan_white_rum.jpg'), id: 15 },

{ name: "רום קפטן מורגן ספייסד גולד", image: importImage('captain_morgan_spiced_gold_rum.png'), id: 15 },

{ name: "קוקטייל ג'ין אנד טוניק", image: importImage('schweppes_gin_and_tonic_cocktail.jpg'), id: 15 },
{ name: "קוקטייל וודקה ראשן", image: importImage('schweppes_vodka_russian_cocktail.jpg'), id: 15 },
{ name: "קוקטייל לימונערק", image: importImage('schweppes_lemon_arack_cocktail.jpg'), id: 15 },
{ name: "קוקטייל מוחיטו", image: importImage('schweppes_mojito_cocktail.jpg'), id: 15 },

{ name: "בריזר אפרסק", image: importImage('breezer_peach.webp'), id: 15 },
{ name: "בריזר אננס", image: importImage('breezer_pineapple.jpg'), id: 15 },
{ name: "בריזר תפוח", image: importImage('breezer_apple.avif'), id: 15 },
{ name: "בריזר לימון", image: importImage('breezer_lemon.jpg'), id: 15 },
{ name: "בריזר אבטיח", image: importImage('breezer_watermelon.jpg'), id: 15 },
{ name: "בריזר ליים", image: importImage('breezer_lime.jpg'), id: 15 },
{ name: "בריזר מנגו פסיפלורה", image: importImage('breezer_mango_passionfruit.jpg'), id: 15 },

];



  const [sweets, setSweets] = useState<{ name: string; image: string | null; count: number }[]>(
    initialSweetDrinks.map(drink => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === drink.name);
      return {
        ...drink,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [alcohols, setAlcohols] = useState<{ name: string; image: string | null; count: number }[]>(
    initialAlcoholDrinks.map(drink => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === drink.name);
      return {
        ...drink,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  const [carbonatedDrinks, setCarbonatedDrinks] = useState<{ name: string; image: string | null; count: number }[]>(initialCarbonatedDrinks.map(drink => ({ ...drink, count: 0 })));
  const [waterDrinks, setWaterDrinks] = useState<{ name: string; image: string | null; count: number }[]>(initialWaterDrinks.map(drink => ({ ...drink, count: 0 })));
  const [concentrates, setConcentrates] = useState<{ name: string; image: string | null; count: number }[]>(initialConcentrates.map(drink => ({ ...drink, count: 0 })));
  const [energyDrinks, setEnergyDrink] = useState<{ name: string; image: string | null; count: number }[]>(initialEnergyDrinks.map(drink => ({ ...drink, count: 0 })));
  const [beers, setBeers] = useState<{ name: string; image: string | null; count: number }[]>(initialBeers.map(drink => ({ ...drink, count: 0 })));
  const [wines, setWines] = useState<{ name: string; image: string | null; count: number }[]>(initialWines.map(drink => ({ ...drink, count: 0 })));

  const handleIncrement = (name: string) => {
    setWaterDrinks(
      waterDrinks.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setCarbonatedDrinks(
      carbonatedDrinks.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setSweets(
      sweets.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setConcentrates(
      concentrates.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setEnergyDrink(
      energyDrinks.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setBeers(
      beers.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setWines(
      wines.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
    setAlcohols(
      alcohols.map((drink) =>
        drink.name === name ? { ...drink, count: drink.count + 1 } : drink
      )
    );
  };

  const handleDecrement = (name: string) => {
    setWaterDrinks(
      waterDrinks.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setCarbonatedDrinks(
      carbonatedDrinks.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setSweets(
      sweets.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setConcentrates(
      concentrates.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setEnergyDrink(
      energyDrinks.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setBeers(
      beers.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setWines(
      wines.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
    setAlcohols(
      alcohols.map((drink) =>
        drink.name === name && drink.count > 0
          ? { ...drink, count: drink.count - 1 }
          : drink
      )
    );
  };

  const handleSave = async () => {
    //Water Drinks
    const waterDrinksToSave = waterDrinks
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Carbonated Drinks
    const carbonatedDrinksToSave = carbonatedDrinks
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Sweet Drinks
    const sweetDrinksToSave = sweets
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Concentrates
    const concentratesToSave = concentrates
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Energy Drinks
    const energyDrinksToSave = energyDrinks
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Beers
    const beersToSave = beers
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Wines
    const winesToSave = wines
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    //Alcohols
    const alcoholDrinksToSave = alcohols
      .filter((drink) => drink.count > 0)
      .map((drink) => ({ ...drink, quantity: drink.count }));

    const allDrinks = [
      ...waterDrinksToSave,
      ...carbonatedDrinksToSave,
      ...sweetDrinksToSave,
      ...alcoholDrinksToSave,
      ...concentratesToSave,
      ...energyDrinksToSave,
      ...beersToSave,
      ...winesToSave,
    ];
    allDrinks.forEach((drink) => addProduct(drink));

    
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={waterDrinks}
          categoryTitle="מים וסודה"
          icon={<img alt="" src={importImage('')} />}
          // icon={<img alt="" src={importImage("water_drinks_icon.png")} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={carbonatedDrinks}
          categoryTitle="משקאות מוגזים"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={sweets}
          categoryTitle="משקאות קלים"
          icon={<img alt="" src={importImage('sweet_drinks_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={concentrates}
          categoryTitle="תרכיזים"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={energyDrinks}
          categoryTitle="משקאות אנרגיה"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={beers}
          categoryTitle="בירות"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={wines}
          categoryTitle="יינות"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={alcohols}
          categoryTitle="שתייה חריפה"
          icon={<img alt="" src={importImage('alcohol_drinks_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default DrinksPage;