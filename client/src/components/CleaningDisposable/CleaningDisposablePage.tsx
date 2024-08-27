import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/CleaningDisposable/${imageName}`);
  } catch (error) {
    return null;
  }
};

const CleaningDisposablePage: React.FC = () => {
  const { addProduct , removeProduct } = useBasket(); 
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialPaper = [
    {
      name: "נייר טואלט דו שכבתי - מארז 48 גלילים",
      image: importImage("toilet_paper_48_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט דו שכבתי - מארז 32 גלילים",
      image: importImage("toilet_paper_32_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט תלת שכבתי - מארז 32 גלילים",
      image: importImage("silk_touch_toilet_paper_32_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט דו שכבתי גליל ארוך פי 2",
      image: importImage("perfect_double_roll_toilet_paper.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט קלאסיק 30 גלילים",
      image: importImage("lily_classic_toilet_paper_30_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט דו שכבתי 18 גלילים כפולים",
      image: importImage("soft_double_roll_toilet_paper_18_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט 4 שכבות - מארז 18 גלילים",
      image: importImage("soft_premium_4_layer_toilet_paper_18_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט - מארז 40 גלילים",
      image: importImage("molett_toilet_paper_40_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט לבן - מארז 9 גלילים",
      image: importImage("kleenex_premium_white_toilet_paper_9_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט צהוב - מארז 9 גלילים",
      image: importImage("kleenex_premium_yellow_toilet_paper_9_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט ורוד 3 שכבות - 32 גליל",
      image: importImage("exclusive_comfort_pink_toilet_paper_32_pack.jpeg"),
      id: 14,
    },
    {
      name: "מגבוני טואלט לחים להיגיינה אישית - מארז שלישייה",
      image: importImage("wet_wipes_toilet_hygiene_trio_pack.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט לח קלאסי",
      image: importImage("lily_classic_wet_toilet_paper.jpeg"),
      id: 14,
    },
    {
      name: "נייר טואלט לח רביעייה",
      image: importImage("lily_pure_wet_toilet_paper_4_pack.jpeg"),
      id: 14,
    },
    {
      name: "מגבות נייר - מארז 8 גלילים",
      image: importImage("paper_towels_8_roll_pack.jpeg"),
      id: 14,
    },
    {
      name: "מגבת נייר ג'מבו - גליל ענק",
      image: importImage("jumbo_paper_towel_6_rolls.jpeg"),
      id: 14,
    },
    {
      name: "מגבות הפלא - מארז 6 גלילים",
      image: importImage("magic_towels_6_roll_pack.jpeg"),
      id: 14,
    },
    {
      name: "מגבות הפלא גליל כפול - מארז שישייה",
      image: importImage("magic_towels_double_roll_6_pack.jpeg"),
      id: 14,
    },
    {
      name: "מגבות הפלא גליל ארוך פי 3",
      image: importImage("sano_sushi_magic_towels_triple_roll.jpeg"),
      id: 14,
    },
    {
      name: "ממחטות נייר - מארז חמישייה",
      image: importImage("tissue_paper_5_pack.jpeg"),
      id: 14,
    },
  ];  

  const initialLaundryproducts = [
    {
      name: "אבקת כביסה לכביסה לבנה וצבעונית",
      image: importImage("laundry_powder_white_color_2.5kg.jpeg"),
      id: 14,
    },
    {
      name: "אבקת כביסה בניחוח מאסק Musk",
      image: importImage("sano_maxima_musk_powder_1.25kg.jpeg"),
      id: 14,
    },
    {
      name: "אבקת כביסה לכתמים קשים",
      image: importImage("sano_maxima_bio_powder_1.25kg.jpeg"),
      id: 14,
    },
    {
      name: "אבקת כביסה לצבעים כהים",
      image: importImage("sano_maxima_black_powder_1.25kg.jpeg"),
      id: 14,
    },
    {
      name: "אבקת כביסה לבגדי תינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_powder_1.25kg.jpeg"),
      id: 14,
    },
    {
      name: "אבקת כביסה בניחוח שושן צחור",
      image: importImage("ariel_white_powder_1.25kg.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל מרוכז לכביסה לבנה וצבעונית",
      image: importImage("perfect_white_color_gel_3l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח פרחים",
      image: importImage("perfect_flower_gel_5l.jpg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח מאסק Musk",
      image: importImage("sano_maxima_musk_gel_3l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה מרוכז לתינוקות",
      image: importImage("sano_maxima_baby_gel_3l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה לבגדי תינוקות ובעלי עור רגיש",
      image: importImage("persil_sensitive_gel_2.5l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה לבגדים כהים",
      image: importImage("persil_black_gel_2.5l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה מרוכז קלאסי",
      image: importImage("colon_classic_gel_4l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח לבנדר",
      image: importImage("colon_lavender_gel_4l.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לכביסה ביד",
      image: importImage("sod_hand_wash_gel_1l.jpeg"),
      id: 14,
    },
    {
      name: "קפסולות לכביסה",
      image: importImage("sano_maxima_floral_burst_capsules_40_units.jpeg"),
      id: 14,
    },
    {
      name: "נוזל כביסה בניחוח ארומטי",
      image: importImage("kabiscal_aromatic_detergent_2l.jpeg"),
      id: 14,
    },
    {
      name: "נוזל כביסה בניחוח ספא",
      image: importImage("kabiscal_spa_detergent_2l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה מבושם לתינוק",
      image: importImage("perfect_baby_fabric_softener_4l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה אנטיבקטריאלי",
      image: importImage("sano_bio_antibacterial_fabric_softener_4l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה היפואלרגני עם אלוורה לתינוקות",
      image: importImage("sano_aloe_vera_baby_fabric_softener_4l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה בניחוח לבנדר פצ'ולי",
      image: importImage("sano_lavender_patchouli_fabric_softener_4l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה ארומתראפי בניחוח מאסק",
      image: importImage("sano_aromatherapy_musk_fabric_softener_4l.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה בניחוח סחלבים",
      image: importImage("badan_wild_orchid_fabric_softener_960ml.jpeg"),
      id: 14,
    },
    {
      name: "מרכך כביסה מרוכז בבישום עוצמתי",
      image: importImage("sano_moments_of_calm_fabric_softener_1l.jpeg"),
      id: 14,
    },
    {
      name: "אטבי כביסה",
      image: importImage("perfect_quality_clothes_pins_10pcs.jpeg"),
      id: 14,
    },
    {
      name: "שבבי סבון",
      image: importImage("perfect_soap_flakes_750g.jpeg"),
      id: 14,
    },
    {
      name: "מסיר כתמים ללא אקונומיקה",
      image: importImage("sano_oxygen_stain_remover_gel_3l.jpeg"),
      id: 14,
    },
    {
      name: "מסיר כתמים לכביסה לבנה",
      image: importImage("sano_oxygen_power_stain_remover_750ml.jpeg"),
      id: 14,
    },
    {
      name: "תוסף להסרת כתמים קשים",
      image: importImage("sano_oxygen_power_stain_remover_1400g.jpeg"),
      id: 14,
    },
    {
      name: "תוסף להסרת כתמים קשים מכביסה לבנה",
      image: importImage("sano_oxygen_stain_remover_for_white_laundry_1400g.jpeg"),
      id: 14,
    },
    {
      name: "מסיר כתמים לתינוק",
      image: importImage("sano_oxygen_baby_stain_remover_gel_3l.jpeg"),
      id: 14,
    },
    {
      name: "ספריי להסרת כתמים",
      image: importImage("kalia_vanish_stain_remover_spray_750ml.jpeg"),
      id: 14,
    },
    {
      name: "מרכך ומבשם כביסה למייבש בניחוח מאסק",
      image: importImage("sano_maxima_musk_dryer_softener_750ml.jpeg"),
      id: 14,
    },
    {
      name: "מרכך ומבשם כביסה למייבש אולטרה פרש",
      image: importImage("sano_maxima_ultra_fresh_dryer_softener_750ml.jpeg"),
      id: 14,
    },
    {
      name: "מרכך ומבשם כביסה למייבש בניחוח לבנדר",
      image: importImage("sano_maxima_lavender_dryer_softener_750ml.jpeg"),
      id: 14,
    },
    {
      name: "מבשם ומרכך למייבש כביסה לתינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_dryer_softener_750ml.jpeg"),
      id: 14,
    },
    {
      name: "דפי מרכך למייבש כביסה",
      image: importImage("baddin_blue_dryer_sheets_40pcs.jpeg"),
      id: 14,
    },
    {
      name: "כדוריות הבושם בניחוח סחלב",
      image: importImage("lenor_orchid_perfume_beads_210g.jpeg"),
      id: 14,
    },
    {
      name: "כדוריות הבושם בניחוח רענן",
      image: importImage("lenor_fresh_perfume_beads_210g.jpeg"),
      id: 14,
    },
    {
      name: "כדוריות הבושם רעננות האוקיינוס",
      image: importImage("lenor_ocean_fresh_perfume_beads_210g.jpeg"),
      id: 14,
    },
    {
      name: "כדוריות הבושם בניחוח אריאל",
      image: importImage("lenor_ariel_perfume_beads_210g.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס לגיהוץ",
      image: importImage("merito_easy_ironing_spray_500ml.jpeg"),
      id: 14,
    },
    {
      name: "מגן + מבשם דוחה עש בניחוח לבנדר",
      image: importImage("hepi_lavender_moth_repellent_2pcs.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל למניעת אבנית",
      image: importImage("calgon_antiscale_gel_2in1_750ml.jpeg"),
      id: 14,
    },
    {
      name: "אבקה למניעת אבנית במכונת כביסה",
      image: importImage("calgon_antiscale_powder_2in1_1kg.jpeg"),
      id: 14,
    },
    {
      name: "מנקה מכונת כביסה בניחוח נקי ורענן",
      image: importImage("colon_washing_machine_cleaner_250ml.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי וחיטוי מכונת הכביסה בתוספת חומץ",
      image: importImage("sano_maxima_washing_machine_cleaner_500ml.jpeg"),
      id: 14,
    },    
  ];

  const initialCleaningproducts = [
    {
      name: "נוזל לניקוי כלים בניחוח לימון",
      image: importImage('dish_liquid_lemon_750ml.jpeg'),
      id: 14,
    },
    {
      name: "נוזל לניקוי כלים בניחוח תפוח",
      image: importImage('dish_liquid_apple_750ml.jpeg'),
      id: 14,
    },
    {
      name: "נוזל כלים אקולוגי",
      image: importImage('eco_dish_liquid_green_power_700ml.jpeg'),
      id: 14,
    },
    {
      name: "נוזל לניקוי כלים בניחוח לבנדר",
      image: importImage('spark_dish_liquid_lavender_700ml.jpeg'),
      id: 14,
    },
    {
      name: "נוזל לניקוי כלים קלאסי",
      image: importImage('spark_dish_liquid_classic_700ml.jpeg'),
      id: 14,
    },
    {
      name: "נוזל כלים היפואלרגני פריחת השקד",
      image: importImage('spark_dish_liquid_hypoallergenic_almond_700ml.jpeg'),
      id: 14,
    },
    {
      name: "טבליות למדיח בניחוח מרענן",
      image: importImage('finish_power_tablets_fresh_40_units.jpeg'),
      id: 14,
    },
    {
      name: "ג'ל מרוכז למדיח",
      image: importImage('finish_all_in_one_max_gel_600ml.jpeg'),
      id: 14,
    },
    {
      name: "ג'ל מרוכז למדיח בניחוח לימון",
      image: importImage('finish_all_in_one_max_lemon_gel_600ml.jpeg'),
      id: 14,
    },
    {
      name: "מפיץ ריח למדיח",
      image: importImage('finish_dishwasher_deodorizer_10ml.jpeg'),
      id: 14,
    },
    {
      name: "מלח למדיח",
      image: importImage('finish_dishwasher_salt_2kg.jpeg'),
      id: 14,
    },
    {
      name: "תרסיס מסיר שומנים",
      image: importImage('astonish_grease_remover_spray_750ml.jpeg'),
      id: 14,
    },
  ];  

  const initialKitchencleaning = [
    {
      name: "מסיר שומנים",
      image: importImage("cillit_bang_grease_remover.jpeg"),
      id: 14,
    },
    {
      name: "מסיר שומנים להסרת לכלוך קשה",
      image: importImage("tough_grease_remover.jpeg"),
      id: 14,
    },
    {
      name: "מנקה ומחטא עוצמתי למטבח ללא אקונומיקה",
      image: importImage("powerful_kitchen_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות למטבח",
      image: importImage("kitchen_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "ספריי לניקוי והברקה של משטחי נירוסטה",
      image: importImage("stainless_steel_cleaning_spray.jpeg"),
      id: 14,
    },
    {
      name: "מסיר אבנית מקומקומים",
      image: importImage("anti_kalk_descaler.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס לניקוי מטבח",
      image: importImage("astonish_kitchen_spray.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס ניקוי רב עוצמתי למטבח",
      image: importImage("astonish_powerful_kitchen_spray.jpeg"),
      id: 14,
    },
    {
      name: "מסיר לכלוך קשה ודביק",
      image: importImage("saint_moritz_kitchen_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מטליות רב שימושיות",
      image: importImage("multi_use_wipes.jpeg"),
      id: 14,
    },
  ];  

  const initialGeneralcleaning = [
    {
      name: "תרסיס ניקוי והברקת נירוסטה",
      image: importImage("stainless_steel_cleaning_spray.jpeg"),
      id: 14,
    },
    {
      name: "אקונומיקה בניחוח לימון",
      image: importImage("lemon_scented_bleach.jpeg"),
      id: 14,
    },
    {
      name: "אקונומיקה בניחוח פרחים",
      image: importImage("flower_scented_bleach.jpeg"),
      id: 14,
    },
    {
      name: "מסיר אבנית ולכלוך קשה",
      image: importImage("tough_scale_remover.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס לניקוי כללי בתוספת אבקת סודה",
      image: importImage("general_cleaning_spray_with_soda.jpeg"),
      id: 14,
    },
    {
      name: "אבקת ניקוי עם אקונומיקה",
      image: importImage("cleaning_powder_with_bleach.jpeg"),
      id: 14,
    },
    {
      name: "אקונומיקה בניחוח לבנדר",
      image: importImage("lavender_scented_bleach.jpeg"),
      id: 14,
    },
    {
      name: "אקונומיקה בניחוח פריחה לבנה",
      image: importImage("white_blossom_scented_bleach.jpeg"),
      id: 14,
    },
    {
      name: "קצף ניקוי בתוספת אקונומיקה בריח לימון",
      image: importImage("cleaning_foam_with_lemon_bleach.jpeg"),
      id: 14,
    },
    {
      name: "קצף ניקוי בתוספת אקונומיקה בריח לבנדר",
      image: importImage("cleaning_foam_with_lavender_bleach.jpeg"),
      id: 14,
    },
    {
      name: "קצף ניקוי בניחוח פריחה לבנה",
      image: importImage("sano_cleaning_foam_white_blossom.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי חלונות אקולוגי",
      image: importImage("green_power_window_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל ניקוי כללי אקולוגי",
      image: importImage("green_power_general_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מסיר עובש",
      image: importImage("mold_remover.jpeg"),
      id: 14,
    },
    {
      name: "מארז מטליות לחיטוי וניקוי",
      image: importImage("antibacterial_wipes_99_9.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי כללי על בסיס שמן אורנים טבעי",
      image: importImage("pine_oil_cleaning_gel.jpeg"),
      id: 14,
    },
    {
      name: "מסיר עובש בניחוח לימון",
      image: importImage("lemon_scented_mold_remover.jpeg"),
      id: 14,
    },
    {
      name: "חיטוי וניקוי בסביבת התינוק",
      image: importImage("baby_safe_disinfectant_99_9.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי כללי מסיר אבנית",
      image: importImage("general_scale_remover.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי כללי",
      image: importImage("general_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי וחיטוי רצפות ומשטחים בניחוח אקליפטוס",
      image: importImage("eucalyptus_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מארז מטליות הפלא לניקוי כללי",
      image: importImage("trio_miracle_cleaning_cloths_decor_sano_sushi.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי כללי בניחוח לימון",
      image: importImage("lemon_scented_general_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי כללי בניחוח מרכך כביסה",
      image: importImage("fabric_softener_scented_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי משטחים אנטיבקטריאלי",
      image: importImage("antibacterial_surface_wipes.jpeg"),
      id: 14,
    },
    {
      name: "נוזל רב תכליתי מנקה ומבריק",
      image: importImage("multi_purpose_cleaner_shine.jpeg"),
      id: 14,
    },
    {
      name: "מבריק שמשות",
      image: importImage("window_shine_spray.jpeg"),
      id: 14,
    },
    {
      name: "נוזל שמשות לרכב",
      image: importImage("car_window_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "סבון שטיחים דוחה קרדית אבק הבית",
      image: importImage("carpet_shampoo_dust_mite_repellent.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס לניקוי רהיטים",
      image: importImage("furniture_cleaning_spray.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי והברקת רהיטים",
      image: importImage("furniture_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי וטיפול במוצרי עור",
      image: importImage("leather_care_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לניקוי משקפיים",
      image: importImage("glasses_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "דפי ספוג הפלא",
      image: importImage("sano_sushi_magic_sponge_sheets.jpeg"),
      id: 14,
    },
  ];  

  const initialFloorcleaning = [
    {
      name: "נוזל מנקה רצפות בניחוח לבנדר",
      image: importImage("lavender_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל מנקה רצפות בניחוח אורנים",
      image: importImage("pine_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל מנקה רצפות בניחוח מאסק",
      image: importImage("musk_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל מנקה פרקט",
      image: importImage("parquet_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה דוחה תיקנים",
      image: importImage("roach_repellent_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל בניחוח פנטזיה לניקוי הרצפה",
      image: importImage("fantasy_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח מאסק",
      image: importImage("fresh_musk_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח לילך לבנדר",
      image: importImage("fresh_lavender_lilac_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח ספא מרגיע",
      image: importImage("spa_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח כותנה מלטפת",
      image: importImage("home_cotton_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בריח אפרסק",
      image: importImage("peach_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח לימון מרענן",
      image: importImage("fresh_lemon_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח יסמין",
      image: importImage("jasmine_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "נוזל לניקוי רצפה בניחוח פסיפלורה",
      image: importImage("passionfruit_scented_floor_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי רצפות",
      image: importImage("floor_cleaning_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מאסק",
      image: importImage("musk_scented_floor_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לרצפה בניחוח מרכך כביסה",
      image: importImage("thick_floor_wipes_fabric_softener_scent.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מלון מפנק",
      image: importImage("luxury_hotel_floor_wipes_70x40.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מלון בוטיק",
      image: importImage("boutique_hotel_floor_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לרצפה בניחוח לימון",
      image: importImage("lemon_scented_floor_wipes.jpeg"),
      id: 14,
    },
    {
      name: "מטליות רצפה",
      image: importImage("perfect_floor_wipes.jpeg"),
      id: 14,
    },
  ];  

  const initialBathroomtoilecleaning = [
    {
      name: "מסיר עובש בניחוח לימון",
      image: importImage("lemon_mold_remover.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות בניחוח אורנים",
      image: importImage("pine_scented_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות בניחוח לימון",
      image: importImage("lemon_scented_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות בניחוח לבנדר",
      image: importImage("lavender_scented_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי אסלות אקולוגי",
      image: importImage("green_power_ecological_toilet_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות לוטוס וסחלב",
      image: importImage("lotus_orchid_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות עם אפקט בישום מוגבר מגנוליה ונרולי",
      image: importImage("magnolia_neroli_scented_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל בתוספת אקונומיקה בניחוח לימון",
      image: importImage("lemon_bleach_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ניקוי יסודי בחדר האמבטיה",
      image: importImage("jet_bathroom_cleaner.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי מתקדם בניחוח ים",
      image: importImage("sea_breeze_advanced_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי מתקדם בניחוח רענן",
      image: importImage("fresh_scented_advanced_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי עם אקונומיקה מקציפה בניחוח הדרים",
      image: importImage("citrus_bleach_foam_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ספריי לחדר אמבט",
      image: importImage("astonish_bathroom_spray.jpeg"),
      id: 14,
    },
    {
      name: "מטליות לחות לחדרי אמבטיה ושירותים",
      image: importImage("bathroom_toilet_wipes.jpeg"),
      id: 14,
    },
    {
      name: "סנובון מוצק כחול מגנוליה ונרולי",
      image: importImage("snobon_solid_blue_magnolia_neroli.jpeg"),
      id: 14,
    },
    {
      name: "סנובון מוצק כחול לוטוס וסחלב",
      image: importImage("snobon_solid_blue_lotus_orchid.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה כחול קלאסיק",
      image: importImage("snobon_solid_blue_classic.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה בריח לימון",
      image: importImage("snobon_solid_lemon_scented.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה בניחוח לובר",
      image: importImage("snobon_solid_louber_scented.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה בריח תות",
      image: importImage("snobon_solid_strawberry_scented.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה כחול בניחוח אפרסק",
      image: importImage("snobon_blue_peach_scented.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה כחול בניחוח תפוח",
      image: importImage("snobon_blue_apple_scented.jpeg"),
      id: 14,
    },
    {
      name: "סנובון סבון אסלה בניחוח מאסק",
      image: importImage("snobon_musk_scented_toilet_soap.jpeg"),
      id: 14,
    },
    {
      name: "טבליות הפלא לאסלה בניחוח אקליפטוס",
      image: importImage("astonish_eucalyptus_toilet_tablets.jpeg"),
      id: 14,
    },
    {
      name: "טבליות הפלא לאסלה בניחוח ורדים",
      image: importImage("astonish_rose_toilet_tablets.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות + חומץ ומלח לימון בריח הדרים",
      image: importImage("citrus_vinegar_lemon_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "ג'ל לניקוי אסלות + חומץ ומלח לימון בריח לבנדר",
      image: importImage("lavender_vinegar_lemon_toilet_gel.jpeg"),
      id: 14,
    },
    {
      name: "מסיר אבן בחדר האמבט",
      image: importImage("durgol_bathroom_descaler.jpeg"),
      id: 14,
    },
    {
      name: "תרסיס לניקוי מקלחון",
      image: importImage("durgol_shower_cleaner_spray.jpeg"),
      id: 14,
    },
    {
      name: "טבליות לניקוי תחתית האסלה",
      image: importImage("hepi_toilet_cleaning_tablets.jpeg"),
      id: 14,
    },
    {
      name: "ספריי לחיטוי וניקוי חדר האמבטיה",
      image: importImage("jet_bathroom_disinfectant.jpeg"),
      id: 14,
    },
  ];  

  const initialPesticideproducts = [
    {
      name: "K3 נמלים פיתיון ג'ל",
      image: importImage("k3_ant_bait_gel.jpeg"),
      id: 14,
    },
    {
      name: "K3 פיתיון ג'ל קוטל תיקנים",
      image: importImage("k3_cockroach_bait_gel.jpeg"),
      id: 14,
    },
    {
      name: "K3 תחנת פיתיון קוטל תיקנים",
      image: importImage("k3_cockroach_bait_station.jpeg"),
      id: 14,
    },
    {
      name: "קוטל חרקים K2000",
      image: importImage("k2000_insect_killer.jpeg"),
      id: 14,
    },
    {
      name: "קוטל חרקים K300",
      image: importImage("k300_insect_killer.jpeg"),
      id: 14,
    },
    {
      name: "קוטל זבובים ויתושים K400",
      image: importImage("k400_fly_mosquito_killer.jpeg"),
      id: 14,
    },
    {
      name: "רב קוטל K",
      image: importImage("rav_k_insect_killer.jpeg"),
      id: 14,
    },
    {
      name: "קוטל יבש ליתושים מזיקי ספרים וארגזים K600",
      image: importImage("k600_dry_insect_killer.jpeg"),
      id: 14,
    },
    {
      name: "קוטל נמלים ותיקנים K500",
      image: importImage("k500_ant_cockroach_killer.jpeg"),
      id: 14,
    },
    {
      name: "ספריי דוחה יתושים ומונע עקיצות",
      image: importImage("sano_di_mosquito_repellent.jpeg"),
      id: 14,
    },
    {
      name: "רול און נגד יתושים",
      image: importImage("sano_di_mosquito_rollon.jpeg"),
      id: 14,
    },
    {
      name: "רול און פלוס אלוורה",
      image: importImage("sano_di_aloe_vera_rollon.jpeg"),
      id: 14,
    },
    {
      name: "תחליב רול און דוחה יתושים לתינוקות ולילדים",
      image: importImage("sano_di_kids_repellent.jpeg"),
      id: 14,
    },
    {
      name: "דוחה יתושים עם קמומיל לילדים",
      image: importImage("sano_di_kids_chamomile.jpeg"),
      id: 14,
    },
    {
      name: "דוחה יתושים נוזלי + מכשיר",
      image: importImage("sanomat_mosquito_repellant_device.jpeg"),
      id: 14,
    },
    {
      name: "פותח סתימות בצנרת ניקוז ובכיורים",
      image: importImage("drain_opener_pipes.jpeg"),
      id: 14,
    },
    {
      name: "נוזל פותח סתימות בצנרת ניקוז",
      image: importImage("drain_out_extra_liquid.jpeg"),
      id: 14,
    },
  ];  

  const initialCleaningaccessories = [
    {
      name: "מטליות מיקרופייבר למשטחים",
      image: importImage("microfiber_surface_cloths_3pack.jpeg"),
      id: 14,
    },
    {
      name: "מטליות רב שימושיות",
      image: importImage("multi_use_cloths_9pack.jpeg"),
      id: 14,
    },
    {
      name: "מטלית הפלא מיקרופייבר לכל סוגי המשטחים",
      image: importImage("microfiber_magic_cloth_30x30.jpeg"),
      id: 14,
    },
    {
      name: "מטלית מיקרופייבר לרצפה",
      image: importImage("microfiber_floor_cloth.jpeg"),
      id: 14,
    },
    {
      name: "מטליות רצפה",
      image: importImage("floor_cloths_3pack.jpeg"),
      id: 14,
    },
    {
      name: "כריות יפניות",
      image: importImage("dual_sided_japanese_pads_4pack.jpeg"),
      id: 14,
    },
    {
      name: "כריות ברזל לקרצוף חזק",
      image: importImage("strong_scrubbing_steel_pads_3pack.jpeg"),
      id: 14,
    },
    {
      name: "כריות קרצוף",
      image: importImage("scrubbing_pads_6pack.jpeg"),
      id: 14,
    },
    {
      name: "כריות ניקוי לשבת ללא ספוג",
      image: importImage("shabbat_cleaning_pads_no_foam_4pack.jpeg"),
      id: 14,
    },
    {
      name: "ספוגיות מתכת רב שימושיות",
      image: importImage("multi_use_metal_sponges_3pack.jpeg"),
      id: 14,
    },
    {
      name: "ברזלית מפלדת אל חלד",
      image: importImage("stainless_steel_scourers_5pack.jpeg"),
      id: 14,
    },
    {
      name: "ספוג הפלא",
      image: importImage("magic_sponge_6pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניילון",
      image: importImage("nylon_gloves_100pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות לטקס עם אבקה מידה S",
      image: importImage("powdered_latex_gloves_S_100pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל כחולות ללא אבקה L",
      image: importImage("blue_nitrile_gloves_no_powder_L_80pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל כחולות ללא אבקה מידה S",
      image: importImage("blue_nitrile_gloves_no_powder_S_80pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות לטקס עם אבקה מידה L",
      image: importImage("powdered_latex_gloves_L_100pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל כחולות ללא אבקה מידה M",
      image: importImage("blue_nitrile_gloves_no_powder_M_80pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל שחורות ללא אבקה L",
      image: importImage("nitrile_gloves_no_powder_L_80pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל שחורות ללא אבקה M",
      image: importImage("nitrile_gloves_no_powder_M_80pack.jpeg"),
      id: 14,
    },
    {
      name: "כפפות ניטריל שחורות ללא אבקה S",
      image: importImage("black_nitrile_gloves_no_powder_S_80pack.jpeg"),
      id: 14,
    },
    {
      name: "משטח מיקרופייבר לייבוש כלים",
      image: importImage("microfiber_dish_drying_mat.jpeg"),
      id: 14,
    },
  ];  

  const initialDisposableproducts = [
    {
      name: "כוסות פלסטיק",
      image: importImage("plastic_cups_100pack.jpeg"),
      id: 16,
    },
    {
      name: "מזלגות חד פעמיות",
      image: importImage("disposable_forks_100pack.jpeg"),
      id: 16,
    },
    {
      name: "סכינים חד פעמיים",
      image: importImage("disposable_knives_100pack.jpeg"),
      id: 16,
    },
    {
      name: "כפות חד פעמיים",
      image: importImage("disposable_spoons_100pack.jpeg"),
      id: 16,
    },
    {
      name: "כפיות חד פעמיות",
      image: importImage("disposable_teaspoons_100pack.jpeg"),
      id: 16,
    },
    {
      name: "צלחות גדולות",
      image: importImage("large_plates_50pack.jpeg"),
      id: 16,
    },
    {
      name: "צלחות קטנות",
      image: importImage("small_plates_50pack.jpeg"),
      id: 16,
    },
    {
      name: "מרקיות",
      image: importImage("soup_bowls_25pack.jpeg"),
      id: 16,
    },
    {
      name: "מפיות אירוח",
      image: importImage("hosting_napkins_180pack.jpeg"),
      id: 16,
    },
    {
      name: "כוסות גדולות לשתיה קרה",
      image: importImage("cold_drink_cups_330ml_40pack.jpeg"),
      id: 16,
    },
    {
      name: "כוסות לחיים",
      image: importImage("lchaim_cups_40pack.jpeg"),
      id: 16,
    },
    {
      name: "כוסות משקה חם קרטון",
      image: importImage("hot_drink_cups_cardboard_235ml_50pack.jpeg"),
      id: 16,
    },
    {
      name: "מפות שולחן בגליל",
      image: importImage("table_cloth_roll_135x240_8pack.jpeg"),
      id: 16,
    },
    {
      name: "סלטינות אובלי",
      image: importImage("oval_salad_bowls_25pack.jpeg"),
      id: 16,
    },
    {
      name: "צלחות גדולות מקנה סוכר טבעי",
      image: importImage("sugarcane_large_plates_25pack.jpeg"),
      id: 16,
    },
    {
      name: "ליפתניות",
      image: importImage("ramekins_25pack.jpeg"),
      id: 16,
    },
    {
      name: "צלחות קטנות מקנה סוכר טבעי",
      image: importImage("sugarcane_small_plates_25pack.jpg"),
      id: 16,
    },
    {
      name: "קעריות מקנה סוכר טבעי",
      image: importImage("sugarcane_bowls_25pack.jpeg"),
      id: 16,
    },
    {
      name: "קשים מתקפלים לשתיה",
      image: importImage("foldable_drinking_straws_40pack.jpeg"),
      id: 16,
    },
    {
      name: "זוג מפות שולחן עשויות מבד בלתי ארוג",
      image: importImage("nonwoven_tablecloth_180x120_2pack.jpeg"),
      id: 16,
    },
    {
      name: "כוסות אספרסו",
      image: importImage("espresso_cups_120ml_50pack_hanamal.jpeg"),
      id: 16,
    },
    {
      name: "כוסות וויסקי פלסטיק חזק במיוחד",
      image: importImage("strong_plastic_whiskey_glasses_300ml_10pack_hanamal.jpeg"),
      id: 16,
    },
    {
      name: "כוסות יין",
      image: importImage("wine_glasses_150ml_12pack_hanamal.jpeg"),
      id: 16,
    },
    {
      name: "כוסות שמפניה",
      image: importImage("champagne_glasses_147ml_12pack_hanamal.jpeg"),
      id: 16,
    },
    {
      name: "כפות מעץ מתכלה",
      image: importImage("biodegradable_wooden_spoons_25pack_tebnichel.jpeg"),
      id: 16,
    },
    {
      name: "מדליק פחמים אקולוגי",
      image: importImage("eco_coal_lighter_32pack_easy_light.jpeg"),
      id: 16,
    },
    {
      name: "מדליק פחמים מוצק",
      image: importImage("solid_coal_lighter_40pack_easy_light.jpeg"),
      id: 16,
    },
    {
      name: "מדליק פחמים נוזלי",
      image: importImage("liquid_coal_lighter_250ml_easy_light.jpeg"),
      id: 16,
    },
    {
      name: "פחם דרום אמריקאי",
      image: importImage("south_american_charcoal_2kg_hanamal.jpeg"),
      id: 16,
    },
    {
      name: "שיפודי במבוק ג'מבו עבים",
      image: importImage("jumbo_bamboo_skewers_30cm_50pack_hostess.jpeg"),
      id: 16,
    },
    {
      name: "ליפתניות הגשה + מכסים",
      image: importImage("serving_containers_with_lids_12_pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "מארז תבניות אלומיניום לחלה חזקות ועבות במיוחד",
      image: importImage("heavy_duty_aluminum_pans_challah_4pack_perfect.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום עבות וחזקות במיוחד גסטרונום ביתי",
      image: importImage("heavy_duty_aluminum_pans_gastronome_2pack_perfect.jpeg"),
      id: 16,
    },
    {
      name: "ניירות אפיה",
      image: importImage("baking_paper_sheets_perfect_50pack.jpeg"),
      id: 16,
    },
    {
      name: "גביעי נייר גודל 1.5",
      image: importImage("paper_cups_size_1.5_130pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "גביעי נייר גודל 2",
      image: importImage("paper_cups_size_2_130pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "גביעי נייר גודל 3",
      image: importImage("paper_cups_size_3_130pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "גביעי נייר גודל 4",
      image: importImage("paper_cups_size_4_130pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "גביעי נייר גודל 5",
      image: importImage("paper_cups_size_5_130pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "מגש הכסף שומר כיריים",
      image: importImage("aluminum_stovetop_protector_4pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "סיר אלומיניום + מכסה",
      image: importImage("aluminum_pot_with_lid_5.3L_namal.jpeg"),
      id: 16,
    },
    {
      name: "שקיות לצלייה לתנור ולמיקרוגל",
      image: importImage("oven_microwave_roasting_bags_10pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום 41*30",
      image: importImage("heavy_duty_aluminum_pans_roaster_41x30cm_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום 46*34",
      image: importImage("heavy_duty_aluminum_pans_roaster_46x34cm_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום עגולות",
      image: importImage("round_aluminum_pans_5pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום קטנות + מכסים",
      image: importImage("small_aluminum_pans_with_lids_10pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום 37*27",
      image: importImage("aluminum_pans_roaster_37x27cm_4pack_namal.jpeg"),
      id: 16,
    },  {
      name: "תבניות אלומיניום 37*27",
      image: importImage("aluminum_pans_roaster_37x27cm_4pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבנית אלומיניום מוארכת",
      image: importImage("long_aluminum_pan_20pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אפייה ארוכות מקרטון",
      image: importImage("long_baking_pans_cardboard_6pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "תבנית אפייה משפחתית מקרטון",
      image: importImage("family_size_baking_pan_cardboard_3pack_namal.jpeg"),
      id: 16,
    },
    {
      name: "נייר אפייה עשוי מחומרים מן הצומח",
      image: importImage("eco_friendly_baking_paper_50pack_sano_sushi.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום מאפינס",
      image: importImage("muffin_aluminum_pans_7pack_sano_sushi.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום עם ידיות אחיזה 25*20",
      image: importImage("aluminum_pans_with_handles_25x20_sano_sushi.jpeg"),
      id: 16,
    },
    {
      name: "תבניות אלומיניום עם ידיות אחיזה 34*29",
      image: importImage("aluminum_pans_with_handles_34x29_sano_sushi.jpeg"),
      id: 16,
    },
    {
      name: "חמגשית אלומיניום עם מכסה",
      image: importImage("sano_sushi_aluminum_trays_with_lid_10pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות בד לבישול",
      image: importImage("sano_sushi_cooking_bags_7pack.jpeg"),
      id: 16,
    },
  ];

  const initialBagspackagingproducts = [
    {
      name: "אריזות ואקום לאחסון רב פעמי",
      image: importImage("vacuum_storage_bags_xxl_sano_sushi.jpeg"),
      id: 16,
    },
    {
      name: "רדיד אלומיניום",
      image: importImage("aluminum_foil_30cm_diamond_22.8m.jpeg"),
      id: 16,
    },
    {
      name: "נייר עטיפה לכריכים",
      image: importImage("sandwich_wrap_paper_namal_100pack.jpeg"),
      id: 16,
    },
    {
      name: "ניילון נצמד",
      image: importImage("microwave_safe_cling_film_sano_sushi_150m.jpeg"),
      id: 16,
    },
    {
      name: "שקיות אוכל מנייר",
      image: importImage("paper_food_bags_sano_sushi_70pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות מזון נקשרות",
      image: importImage("food_bags_tie_closure_sano_sushi_250pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות מזון נשלפות",
      image: importImage("extra_large_food_bags_pull_out_sano_sushi_300pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות ריצ'רץ' לסגירה חוזרת - S",
      image: importImage("zip_lock_bags_small_nicole_15pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות ריצ'רץ' לשימוש רב פעמי - L",
      image: importImage("reusable_zip_lock_bags_large_nicole_12pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות רב שימושיות להקפאה, אחסון ואריזת מזון",
      image: importImage("multi_use_storage_freezer_bags_nicole_250pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות אשפה L",
      image: importImage("extra_strong_drawstring_garbage_bags_L_sano_sushi_60pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות אשפה S לפחים קטנים",
      image: importImage("small_garbage_bags_S_sano_sushi_100pack.jpeg"),
      id: 16,
    },
    {
      name: "שקיות אשפה XXL",
      image: importImage("extra_large_garbage_bags_xxl_sano_sushi_20pack.jpeg"),
      id: 16,
    },
    {
      name: "כיסוי ניילון עם גומי",
      image: importImage("plastic_wrap_with_elastic_L_sano_sushi_30pack.jpeg"),
      id: 16,
    },
  ];  

  initialPaper.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialLaundryproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCleaningproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialKitchencleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialGeneralcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFloorcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialBathroomtoilecleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPesticideproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCleaningaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDisposableproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialBagspackagingproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

const [paper, setPaper] = useState<{ name: string; image: string | null; count: number }[]>(
  initialPaper.map(paper => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === paper.name);
    return {
      ...paper,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [laundryproducts, setLaundryproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialLaundryproducts.map(laundryproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === laundryproducts.name);
    return {
      ...laundryproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cleaningproducts, setCleaningproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCleaningproducts.map(cleaningproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cleaningproducts.name);
    return {
      ...cleaningproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [kitchencleaning, setKitchencleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialKitchencleaning.map(kitchencleaning => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === kitchencleaning.name);
    return {
      ...kitchencleaning,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [generalcleaning, setGeneralcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialGeneralcleaning.map(generalcleaning => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === generalcleaning.name);
    return {
      ...generalcleaning,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [floorcleaning, setFloorcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFloorcleaning.map(floorcleaning => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === floorcleaning.name);
    return {
      ...floorcleaning,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bathroomtoilecleaning, setBathroomtoilecleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBathroomtoilecleaning.map(bathroomtoilecleaning => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === bathroomtoilecleaning.name);
    return {
      ...bathroomtoilecleaning,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [pesticideproducts, setPesticideproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialPesticideproducts.map(pesticideproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === pesticideproducts.name);
    return {
      ...pesticideproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cleaningaccessories, setCleaningaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCleaningaccessories.map(cleaningaccessories => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === cleaningaccessories.name);
    return {
      ...cleaningaccessories,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [disposableproducts, setDisposableproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDisposableproducts.map(disposableproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === disposableproducts.name);
    return {
      ...disposableproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bagspackagingproducts, setBagspackagingproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBagspackagingproducts.map(bagspackagingproducts => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === bagspackagingproducts.name);
    return {
      ...bagspackagingproducts,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

useEffect(() => {
  handleSave();
}, [paper, laundryproducts, cleaningproducts, kitchencleaning, generalcleaning, floorcleaning, bathroomtoilecleaning, pesticideproducts, cleaningaccessories, disposableproducts, bagspackagingproducts]);

  const handleIncrement = (name: string) => {
    setPaper(paper.map(paper => paper.name === name ? { ...paper, count: paper.count + 1 } : paper));
    setLaundryproducts(laundryproducts.map(laundryproducts => laundryproducts.name === name ? { ...laundryproducts, count: laundryproducts.count + 1 } : laundryproducts));
    setCleaningproducts(cleaningproducts.map(cleaningproducts => cleaningproducts.name === name ? { ...cleaningproducts, count: cleaningproducts.count + 1 } : cleaningproducts));
    setKitchencleaning(kitchencleaning.map(kitchencleaning => kitchencleaning.name === name ? { ...kitchencleaning, count: kitchencleaning.count + 1 } : kitchencleaning));
    setGeneralcleaning(generalcleaning.map(generalcleaning => generalcleaning.name === name ? { ...generalcleaning, count: generalcleaning.count + 1 } : generalcleaning));
    setFloorcleaning(floorcleaning.map(floorcleaning => floorcleaning.name === name ? { ...floorcleaning, count: floorcleaning.count + 1 } : floorcleaning));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(bathroomtoilecleaning => bathroomtoilecleaning.name === name ? { ...bathroomtoilecleaning, count: bathroomtoilecleaning.count + 1 } : bathroomtoilecleaning));
    setPesticideproducts(pesticideproducts.map(pesticideproducts => pesticideproducts.name === name ? { ...pesticideproducts, count: pesticideproducts.count + 1 } : pesticideproducts));
    setCleaningaccessories(cleaningaccessories.map(cleaningaccessories => cleaningaccessories.name === name ? { ...cleaningaccessories, count: cleaningaccessories.count + 1 } : cleaningaccessories));
    setDisposableproducts(disposableproducts.map(disposableproducts => disposableproducts.name === name ? { ...disposableproducts, count: disposableproducts.count + 1 } : disposableproducts));
    setBagspackagingproducts(bagspackagingproducts.map(bagspackagingproducts => bagspackagingproducts.name === name ? { ...bagspackagingproducts, count: bagspackagingproducts.count + 1 } : bagspackagingproducts));
  };

  const handleDecrement = (name: string) => {
    setPaper(paper.map(paper => {
      if (paper.name === name && paper.count > 0) {
        const newCount = paper.count - 1;
        if (newCount === 0) {
          removeProduct(paper.name);
        }
        return { ...paper, count: newCount };
      }
      return paper;
    }));
    
    setLaundryproducts(laundryproducts.map(laundryproducts => {
      if (laundryproducts.name === name && laundryproducts.count > 0) {
        const newCount = laundryproducts.count - 1;
        if (newCount === 0) {
          removeProduct(laundryproducts.name);
        }
        return { ...laundryproducts, count: newCount };
      }
      return laundryproducts;
    }));
    
    setCleaningproducts(cleaningproducts.map(cleaningproducts => {
      if (cleaningproducts.name === name && cleaningproducts.count > 0) {
        const newCount = cleaningproducts.count - 1;
        if (newCount === 0) {
          removeProduct(cleaningproducts.name);
        }
        return { ...cleaningproducts, count: newCount };
      }
      return cleaningproducts;
    }));
    
    setKitchencleaning(kitchencleaning.map(kitchencleaning => {
      if (kitchencleaning.name === name && kitchencleaning.count > 0) {
        const newCount = kitchencleaning.count - 1;
        if (newCount === 0) {
          removeProduct(kitchencleaning.name);
        }
        return { ...kitchencleaning, count: newCount };
      }
      return kitchencleaning;
    }));
    
    setGeneralcleaning(generalcleaning.map(generalcleaning => {
      if (generalcleaning.name === name && generalcleaning.count > 0) {
        const newCount = generalcleaning.count - 1;
        if (newCount === 0) {
          removeProduct(generalcleaning.name);
        }
        return { ...generalcleaning, count: newCount };
      }
      return generalcleaning;
    }));
    
    setFloorcleaning(floorcleaning.map(floorcleaning => {
      if (floorcleaning.name === name && floorcleaning.count > 0) {
        const newCount = floorcleaning.count - 1;
        if (newCount === 0) {
          removeProduct(floorcleaning.name);
        }
        return { ...floorcleaning, count: newCount };
      }
      return floorcleaning;
    }));
    
    setBathroomtoilecleaning(bathroomtoilecleaning.map(bathroomtoilecleaning => {
      if (bathroomtoilecleaning.name === name && bathroomtoilecleaning.count > 0) {
        const newCount = bathroomtoilecleaning.count - 1;
        if (newCount === 0) {
          removeProduct(bathroomtoilecleaning.name);
        }
        return { ...bathroomtoilecleaning, count: newCount };
      }
      return bathroomtoilecleaning;
    }));
    
    setPesticideproducts(pesticideproducts.map(pesticideproducts => {
      if (pesticideproducts.name === name && pesticideproducts.count > 0) {
        const newCount = pesticideproducts.count - 1;
        if (newCount === 0) {
          removeProduct(pesticideproducts.name);
        }
        return { ...pesticideproducts, count: newCount };
      }
      return pesticideproducts;
    }));
    
    setCleaningaccessories(cleaningaccessories.map(cleaningaccessories => {
      if (cleaningaccessories.name === name && cleaningaccessories.count > 0) {
        const newCount = cleaningaccessories.count - 1;
        if (newCount === 0) {
          removeProduct(cleaningaccessories.name);
        }
        return { ...cleaningaccessories, count: newCount };
      }
      return cleaningaccessories;
    }));
    
    setDisposableproducts(disposableproducts.map(disposableproducts => {
      if (disposableproducts.name === name && disposableproducts.count > 0) {
        const newCount = disposableproducts.count - 1;
        if (newCount === 0) {
          removeProduct(disposableproducts.name);
        }
        return { ...disposableproducts, count: newCount };
      }
      return disposableproducts;
    }));
    
    setBagspackagingproducts(bagspackagingproducts.map(bagspackagingproducts => {
      if (bagspackagingproducts.name === name && bagspackagingproducts.count > 0) {
        const newCount = bagspackagingproducts.count - 1;
        if (newCount === 0) {
          removeProduct(bagspackagingproducts.name);
        }
        return { ...bagspackagingproducts, count: newCount };
      }
      return bagspackagingproducts;
    }));
   };

  const handleSave = async () => {
    const paperToSave = paper.filter(paper => paper.count > 0).map(paper => ({ ...paper, quantity: paper.count }));
    const laundryproductsToSave = laundryproducts.filter(laundryproducts => laundryproducts.count > 0).map(laundryproducts => ({ ...laundryproducts, quantity: laundryproducts.count }));
    const cleaningproductsToSave = cleaningproducts.filter(cleaningproducts => cleaningproducts.count > 0).map(cleaningproducts => ({ ...cleaningproducts, quantity: cleaningproducts.count }));
    const kitchencleaningToSave = kitchencleaning.filter(kitchencleaning => kitchencleaning.count > 0).map(kitchencleaning => ({ ...kitchencleaning, quantity: kitchencleaning.count }));
    const generalcleaningToSave = generalcleaning.filter(generalcleaning => generalcleaning.count > 0).map(generalcleaning => ({ ...generalcleaning, quantity: generalcleaning.count }));
    const floorcleaningToSave = floorcleaning.filter(floorcleaning => floorcleaning.count > 0).map(floorcleaning => ({ ...floorcleaning, quantity: floorcleaning.count }));
    const bathroomtoilecleaningToSave = bathroomtoilecleaning.filter(bathroomtoilecleaning => bathroomtoilecleaning.count > 0).map(bathroomtoilecleaning => ({ ...bathroomtoilecleaning, quantity: bathroomtoilecleaning.count }));
    const pesticideproductsToSave = pesticideproducts.filter(pesticideproducts => pesticideproducts.count > 0).map(pesticideproducts => ({ ...pesticideproducts, quantity: pesticideproducts.count }));
    const cleaningaccessoriesToSave = cleaningaccessories.filter(cleaningaccessories => cleaningaccessories.count > 0).map(cleaningaccessories => ({ ...cleaningaccessories, quantity: cleaningaccessories.count }));
    const disposableproductsToSave = disposableproducts.filter(disposableproducts => disposableproducts.count > 0).map(disposableproducts => ({ ...disposableproducts, quantity: disposableproducts.count }));
    const bagspackagingproductsToSave = bagspackagingproducts.filter(bagspackagingproducts => bagspackagingproducts.count > 0).map(bagspackagingproducts => ({ ...bagspackagingproducts, quantity: bagspackagingproducts.count }));

    const allCleaningDisposable= [
      ...paperToSave,
      ...laundryproductsToSave,
      ...cleaningproductsToSave,
      ...kitchencleaningToSave,
      ...generalcleaningToSave,
      ...floorcleaningToSave,
      ...bathroomtoilecleaningToSave,
      ...pesticideproductsToSave,
      ...cleaningaccessoriesToSave,
      ...disposableproductsToSave,
      ...bagspackagingproductsToSave
    ];

    allCleaningDisposable.forEach(item => addProduct(item));

  };
  
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

  const filterPaper = paper.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterLaundryProducts = laundryproducts.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterCleaningProducts = cleaningproducts.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterKitchenCleaning = kitchencleaning.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterGeneralCleaning = generalcleaning.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterFloorCleaning = floorcleaning.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterBathroomToileCleaning = bathroomtoilecleaning.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterPesticideProducts = pesticideproducts.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterCleaningAccessories = cleaningaccessories.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterDisposableProducts = disposableproducts.filter(item =>
    item.name.includes(searchTerm)
  );
  
  const filterBagsPackagingProducts = bagspackagingproducts.filter(item =>
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
           placeholder="חפש מוצר נקיון/חד-פעמי"
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
           right: '-33px',
           top: '50%',
           transform: 'translateY(-50%)',
           color: '#aaa',
           pointerEvents: 'none',
         }}></i>
       </div>
   </div>
   <div>
  {filterPaper.length > 0 && (
    <ProductsPage
      products={filterPaper}
      categoryTitle="נייר ומוצריו"
      icon={<img alt="" src={importImage('paper_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterLaundryProducts.length > 0 && (
    <ProductsPage
      products={filterLaundryProducts}
      categoryTitle="מוצרי כביסה"
      icon={<img alt="" src={importImage('laundryproducts_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCleaningProducts.length > 0 && (
    <ProductsPage
      products={filterCleaningProducts}
      categoryTitle="ניקוי כלים"
      icon={<img alt="" src={importImage('cleaningproducts_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterKitchenCleaning.length > 0 && (
    <ProductsPage
      products={filterKitchenCleaning}
      categoryTitle="ניקוי מטבח"
      icon={<img alt="" src={importImage('kitchen_cleaning_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterGeneralCleaning.length > 0 && (
    <ProductsPage
      products={filterGeneralCleaning}
      categoryTitle="ניקוי כללי"
      icon={<img alt="" src={importImage('general_cleaning_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterFloorCleaning.length > 0 && (
    <ProductsPage
      products={filterFloorCleaning}
      categoryTitle="ניקוי רצפה"
      icon={<img alt="" src={importImage('floor_cleaning_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterBathroomToileCleaning.length > 0 && (
    <ProductsPage
      products={filterBathroomToileCleaning}
      categoryTitle="ניקוי אמבטיה ושירותים"
      icon={<img alt="" src={importImage('bathroom_cleaning_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterPesticideProducts.length > 0 && (
    <ProductsPage
      products={filterPesticideProducts}
      categoryTitle="מוצרי הדברה ואינסטלציה"
      icon={<img alt="" src={importImage('pesticide_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterCleaningAccessories.length > 0 && (
    <ProductsPage
      products={filterCleaningAccessories}
      categoryTitle="אביזרי ניקוי"
      icon={<img alt="" src={importImage('cleaning_accessories_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterDisposableProducts.length > 0 && (
    <ProductsPage
      products={filterDisposableProducts}
      categoryTitle="מוצרים חד פעמיים"
      icon={<img alt="" src={importImage('disposable_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>

<div>
  {filterBagsPackagingProducts.length > 0 && (
    <ProductsPage
      products={filterBagsPackagingProducts}
      categoryTitle="שקיות ומוצרי אריזה"
      icon={<img alt="" src={importImage('bag_packaging_icon.png')} />} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  )}
</div>


    </div>
  );
};

export default CleaningDisposablePage;
