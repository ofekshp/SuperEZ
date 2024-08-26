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
    },
    {
      name: "נייר טואלט דו שכבתי - מארז 32 גלילים",
      image: importImage("toilet_paper_32_pack.jpeg"),
    },
    {
      name: "נייר טואלט תלת שכבתי - מארז 32 גלילים",
      image: importImage("silk_touch_toilet_paper_32_pack.jpeg"),
    },
    {
      name: "נייר טואלט דו שכבתי גליל ארוך פי 2",
      image: importImage("perfect_double_roll_toilet_paper.jpeg"),
    },
    {
      name: "נייר טואלט קלאסיק 30 גלילים",
      image: importImage("lily_classic_toilet_paper_30_pack.jpeg"),
    },
    {
      name: "נייר טואלט דו שכבתי 18 גלילים כפולים",
      image: importImage("soft_double_roll_toilet_paper_18_pack.jpeg"),
    },
    {
      name: "נייר טואלט 4 שכבות - מארז 18 גלילים",
      image: importImage("soft_premium_4_layer_toilet_paper_18_pack.jpeg"),
    },
    {
      name: "נייר טואלט - מארז 40 גלילים",
      image: importImage("molett_toilet_paper_40_pack.jpeg"),
    },
    {
      name: "נייר טואלט לבן - מארז 9 גלילים",
      image: importImage("kleenex_premium_white_toilet_paper_9_pack.jpeg"),
    },
    {
      name: "נייר טואלט צהוב - מארז 9 גלילים",
      image: importImage("kleenex_premium_yellow_toilet_paper_9_pack.jpeg"),
    },
    {
      name: "נייר טואלט ורוד 3 שכבות - 32 גליל",
      image: importImage("exclusive_comfort_pink_toilet_paper_32_pack.jpeg"),
    },
    {
      name: "מגבוני טואלט לחים להיגיינה אישית - מארז שלישייה",
      image: importImage("wet_wipes_toilet_hygiene_trio_pack.jpeg"),
    },
    {
      name: "נייר טואלט לח קלאסי",
      image: importImage("lily_classic_wet_toilet_paper.jpeg"),
    },
    {
      name: "נייר טואלט לח רביעייה",
      image: importImage("lily_pure_wet_toilet_paper_4_pack.jpeg"),
    },
    {
      name: "מגבות נייר - מארז 8 גלילים",
      image: importImage("paper_towels_8_roll_pack.jpeg"),
    },
    {
      name: "מגבת נייר ג'מבו - גליל ענק",
      image: importImage("jumbo_paper_towel_6_rolls.jpeg"),
    },
    {
      name: "מגבות הפלא - מארז 6 גלילים",
      image: importImage("magic_towels_6_roll_pack.jpeg"),
    },
    {
      name: "מגבות הפלא גליל כפול - מארז שישייה",
      image: importImage("magic_towels_double_roll_6_pack.jpeg"),
    },
    {
      name: "מגבות הפלא גליל ארוך פי 3",
      image: importImage("sano_sushi_magic_towels_triple_roll.jpeg"),
    },
    {
      name: "ממחטות נייר - מארז חמישייה",
      image: importImage("tissue_paper_5_pack.jpeg"),
    },
  ];

  const initialLaundryproducts = [
    {
      name: "אבקת כביסה לכביסה לבנה וצבעונית",
      image: importImage("laundry_powder_white_color_2.5kg.jpeg"),
    },
    {
      name: "אבקת כביסה בניחוח מאסק Musk",
      image: importImage("sano_maxima_musk_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה לכתמים קשים",
      image: importImage("sano_maxima_bio_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה לצבעים כהים",
      image: importImage("sano_maxima_black_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה לבגדי תינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה בניחוח שושן צחור",
      image: importImage("ariel_white_powder_1.25kg.jpeg"),
    },
    {
      name: "ג'ל מרוכז לכביסה לבנה וצבעונית",
      image: importImage("perfect_white_color_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח פרחים",
      image: importImage("perfect_flower_gel_5l.jpg"),
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח מאסק Musk",
      image: importImage("sano_maxima_musk_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז לתינוקות",
      image: importImage("sano_maxima_baby_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה לבגדי תינוקות ובעלי עור רגיש",
      image: importImage("persil_sensitive_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה לבגדים כהים",
      image: importImage("persil_black_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קלאסי",
      image: importImage("colon_classic_gel_4l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח לבנדר",
      image: importImage("colon_lavender_gel_4l.jpeg"),
    },
    {
      name: "ג'ל לכביסה ביד",
      image: importImage("sod_hand_wash_gel_1l.jpeg"),
    },
    {
      name: "קפסולות לכביסה",
      image: importImage("sano_maxima_floral_burst_capsules_40_units.jpeg"),
    },
    {
      name: "נוזל כביסה בניחוח ארומטי",
      image: importImage("kabiscal_aromatic_detergent_2l.jpeg"),
    },
    {
      name: "נוזל כביסה בניחוח ספא",
      image: importImage("kabiscal_spa_detergent_2l.jpeg"),
    },
    {
      name: "מרכך כביסה מבושם לתינוק",
      image: importImage("perfect_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה אנטיבקטריאלי",
      image: importImage("sano_bio_antibacterial_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה היפואלרגני עם אלוורה לתינוקות",
      image: importImage("sano_aloe_vera_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בניחוח לבנדר פצ'ולי",
      image: importImage("sano_lavender_patchouli_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה ארומתראפי בניחוח מאסק",
      image: importImage("sano_aromatherapy_musk_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בניחוח סחלבים",
      image: importImage("badan_wild_orchid_fabric_softener_960ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז בבישום עוצמתי",
      image: importImage("sano_moments_of_calm_fabric_softener_1l.jpeg"),
    },
    {
      name: "אטבי כביסה'",
      image: importImage("perfect_quality_clothes_pins_10pcs.jpeg"),
    },
    {
      name: "שבבי סבון",
      image: importImage("perfect_soap_flakes_750g.jpeg"),
    },
    {
      name: "מסיר כתמים ללא אקונומיקה",
      image: importImage("sano_oxygen_stain_remover_gel_3l.jpeg"),
    },
    {
      name: "מסיר כתמים לכביסה לבנה",
      image: importImage("sano_oxygen_power_stain_remover_750ml.jpeg"),
    },
    {
      name: "תוסף להסרת כתמים קשים",
      image: importImage("sano_oxygen_power_stain_remover_1400g.jpeg"),
    },
    {
      name: "תוסף להסרת כתמים קשים מכביסה לבנה",
      image: importImage("sano_oxygen_stain_remover_for_white_laundry_1400g.jpeg"),
    },
    {
      name: "מסיר כתמים לתינוק",
      image: importImage("sano_oxygen_baby_stain_remover_gel_3l.jpeg"),
    },
    {
      name: "ספריי להסרת כתמים",
      image: importImage("kalia_vanish_stain_remover_spray_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש בניחוח מאסק",
      image: importImage("sano_maxima_musk_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש אולטרה פרש",
      image: importImage("sano_maxima_ultra_fresh_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש בניחוח לבנדר",
      image: importImage("sano_maxima_lavender_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מבשם ומרכך למייבש כביסה לתינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_dryer_softener_750ml.jpeg"),
    },
    {
      name: "דפי מרכך למייבש כביסה",
      image: importImage("baddin_blue_dryer_sheets_40pcs.jpeg"),
    },
    {
      name: "כדוריות הבושם בניחוח סחלב",
      image: importImage("lenor_orchid_perfume_beads_210g.jpeg"),
    },
    {
      name: "כדוריות הבושם בניחוח רענן",
      image: importImage("lenor_fresh_perfume_beads_210g.jpeg"),
    },
    {
      name: "כדוריות הבושם רעננות האוקיינוס",
      image: importImage("lenor_ocean_fresh_perfume_beads_210g.jpeg"),
    },
    {
      name: "כדוריות הבושם בניחוח אריאל",
      image: importImage("lenor_ariel_perfume_beads_210g.jpeg"),
    },
    {
      name: "תרסיס לגיהוץ",
      image: importImage("merito_easy_ironing_spray_500ml.jpeg"),
    },
    {
      name: "מגן + מבשם דוחה עש בניחוח לבנדר",
      image: importImage("hepi_lavender_moth_repellent_2pcs.jpeg"),
    },
    {
      name: "ג'ל למניעת אבנית",
      image: importImage("calgon_antiscale_gel_2in1_750ml.jpeg"),
    },
    {
      name: "אבקה למניעת אבנית במכונת כביסה",
      image: importImage("calgon_antiscale_powder_2in1_1kg.jpeg"),
    },
    {
      name: "מנקה מכונת כביסה בניחוח נקי ורענן",
      image: importImage("colon_washing_machine_cleaner_250ml.jpeg"),
    },
    {
      name: "ניקוי וחיטוי מכונת הכביסה בתוספת חומץ",
      image: importImage("sano_maxima_washing_machine_cleaner_500ml.jpeg"),
    },
  ];

  const initialCleaningproducts = [
    {
      name: "נוזל לניקוי כלים בניחוח לימון",
      image: importImage('dish_liquid_lemon_750ml.jpeg'),
    },
    {
      name: "נוזל לניקוי כלים בניחוח תפוח",
      image: importImage('dish_liquid_apple_750ml.jpeg'),
    },
    {
      name: "נוזל כלים אקולוגי",
      image: importImage('eco_dish_liquid_green_power_700ml.jpeg'),
    },
    {
      name: "נוזל לניקוי כלים בניחוח לבנדר",
      image: importImage('spark_dish_liquid_lavender_700ml.jpeg'),
    },
    {
      name: "נוזל לניקוי כלים קלאסי",
      image: importImage('spark_dish_liquid_classic_700ml.jpeg'),
    },
    {
      name: "נוזל כלים היפואלרגני פריחת השקד",
      image: importImage('spark_dish_liquid_hypoallergenic_almond_700ml.jpeg'),
    },
    {
      name: "טבליות למדיח בניחוח מרענן",
      image: importImage('finish_power_tablets_fresh_40_units.jpeg'),
    },
    {
      name: "ג'ל מרוכז למדיח",
      image: importImage('finish_all_in_one_max_gel_600ml.jpeg'),
    },
    {
      name: "ג'ל מרוכז למדיח בניחוח לימון",
      image: importImage('finish_all_in_one_max_lemon_gel_600ml.jpeg'),
    },
    {
      name: "מפיץ ריח למדיח",
      image: importImage('finish_dishwasher_deodorizer_10ml.jpeg'),
    },
    {
      name: "מלח למדיח",
      image: importImage('finish_dishwasher_salt_2kg.jpeg'),
    },
    {
      name: "תרסיס מסיר שומנים",
      image: importImage('astonish_grease_remover_spray_750ml.jpeg'),
    },
  ];

  const initialKitchencleaning = [
    {
      name: "מסיר שומנים",
      image: importImage("cillit_bang_grease_remover.jpeg"),
    },
    {
      name: "מסיר שומנים להסרת לכלוך קשה",
      image: importImage("tough_grease_remover.jpeg"),
    },
    {
      name: "מנקה ומחטא עוצמתי למטבח ללא אקונומיקה",
      image: importImage("powerful_kitchen_cleaner.jpeg"),
    },
    {
      name: "מטליות לחות למטבח",
      image: importImage("kitchen_cleaning_wipes.jpeg"),
    },
    {
      name: "ספריי לניקוי והברקה של משטחי נירוסטה",
      image: importImage("stainless_steel_cleaning_spray.jpeg"),
    },
    {
      name: "מסיר אבנית מקומקומים",
      image: importImage("anti_kalk_descaler.jpeg"),
    },
    {
      name: "תרסיס לניקוי מטבח",
      image: importImage("astonish_kitchen_spray.jpeg"),
    },
    {
      name: "תרסיס ניקוי רב עוצמתי למטבח",
      image: importImage("astonish_powerful_kitchen_spray.jpeg"),
    },
    {
      name: "מסיר לכלוך קשה ודביק",
      image: importImage("saint_moritz_kitchen_cleaner.jpeg"),
    },
    {
      name: "מטליות רב שימושיות",
      image: importImage("multi_use_wipes.jpeg"),
    },
  ];

  const initialGeneralcleaning = [
    {
      name: "תרסיס ניקוי והברקת נירוסטה",
      image: importImage("stainless_steel_cleaning_spray.jpeg"),
    },
    {
      name: "אקונומיקה בניחוח לימון",
      image: importImage("lemon_scented_bleach.jpeg"),
    },
    {
      name: "אקונומיקה בניחוח פרחים",
      image: importImage("flower_scented_bleach.jpeg"),
    },
    {
      name: "מסיר אבנית ולכלוך קשה",
      image: importImage("tough_scale_remover.jpeg"),
    },
    {
      name: "תרסיס לניקוי כללי בתוספת אבקת סודה",
      image: importImage("general_cleaning_spray_with_soda.jpeg"),
    },
    {
      name: "אבקת ניקוי עם אקונומיקה",
      image: importImage("cleaning_powder_with_bleach.jpeg"),
    },
    {
      name: "אקונומיקה בניחוח לבנדר",
      image: importImage("lavender_scented_bleach.jpeg"),
    },
    {
      name: "אקונומיקה בניחוח פריחה לבנה",
      image: importImage("white_blossom_scented_bleach.jpeg"),
    },
    {
      name: "קצף ניקוי בתוספת אקונומיקה בריח לימון",
      image: importImage("cleaning_foam_with_lemon_bleach.jpeg"),
    },
    {
      name: "קצף ניקוי בתוספת אקונומיקה בריח לבנדר",
      image: importImage("cleaning_foam_with_lavender_bleach.jpeg"),
    },
    {
      name: "קצף ניקוי בניחוח פריחה לבנה",
      image: importImage("sano_cleaning_foam_white_blossom.jpeg"),
    },
    {
      name: "ניקוי חלונות אקולוגי",
      image: importImage("green_power_window_cleaner.jpeg"),
    },
    {
      name: "נוזל ניקוי כללי אקולוגי",
      image: importImage("green_power_general_cleaner.jpeg"),
    },
    {
      name: "מסיר עובש",
      image: importImage("mold_remover.jpeg"),
    },
    {
      name: "מארז מטליות לחיטוי וניקוי",
      image: importImage("antibacterial_wipes_99_9.jpeg"),
    },
    {
      name: "ג'ל לניקוי כללי על בסיס שמן אורנים טבעי",
      image: importImage("pine_oil_cleaning_gel.jpeg"),
    },
    {
      name: "מסיר עובש בניחוח לימון",
      image: importImage("lemon_scented_mold_remover.jpeg"),
    },
    {
      name: "חיטוי וניקוי בסביבת התינוק",
      image: importImage("baby_safe_disinfectant_99_9.jpeg"),
    },
    {
      name: "ניקוי כללי מסיר אבנית",
      image: importImage("general_scale_remover.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי כללי",
      image: importImage("general_cleaning_wipes.jpeg"),
    },
    {
      name: "ניקוי וחיטוי רצפות ומשטחים בניחוח אקליפטוס",
      image: importImage("eucalyptus_floor_cleaner.jpeg"),
    },
    {
      name: "מארז מטליות הפלא לניקוי כללי",
      image: importImage("trio_miracle_cleaning_cloths_decor_sano_sushi.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי כללי בניחוח לימון",
      image: importImage("lemon_scented_general_cleaning_wipes.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי כללי בניחוח מרכך כביסה",
      image: importImage("fabric_softener_scented_cleaning_wipes.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי משטחים אנטיבקטריאלי",
      image: importImage("antibacterial_surface_wipes.jpeg"),
    },
    {
      name: "נוזל רב תכליתי מנקה ומבריק",
      image: importImage("multi_purpose_cleaner_shine.jpeg"),
    },
    {
      name: "מבריק שמשות",
      image: importImage("window_shine_spray.jpeg"),
    },
    {
      name: "נוזל שמשות לרכב",
      image: importImage("car_window_cleaner.jpeg"),
    },
    {
      name: "סבון שטיחים דוחה קרדית אבק הבית",
      image: importImage("carpet_shampoo_dust_mite_repellent.jpeg"),
    },
    {
      name: "תרסיס לניקוי רהיטים",
      image: importImage("furniture_cleaning_spray.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי והברקת רהיטים",
      image: importImage("furniture_cleaning_wipes.jpeg"),
    },
    {
      name: "ניקוי וטיפול במוצרי עור",
      image: importImage("leather_care_cleaner.jpeg"),
    },
    {
      name: "מטליות לניקוי משקפיים",
      image: importImage("glasses_cleaning_wipes.jpeg"),
    },
    {
      name: "דפי ספוג הפלא",
      image: importImage("sano_sushi_magic_sponge_sheets.jpeg"),
    },
  ];

  const initialFloorcleaning = [
    {
      name: "נוזל מנקה רצפות בניחוח לבנדר",
      image: importImage("lavender_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל מנקה רצפות בניחוח אורנים",
      image: importImage("pine_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל מנקה רצפות בניחוח מאסק",
      image: importImage("musk_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל מנקה פרקט",
      image: importImage("parquet_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה דוחה תיקנים",
      image: importImage("roach_repellent_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל בניחוח פנטזיה לניקוי הרצפה",
      image: importImage("fantasy_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח מאסק",
      image: importImage("fresh_musk_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח לילך לבנדר",
      image: importImage("fresh_lavender_lilac_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח ספא מרגיע",
      image: importImage("spa_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח כותנה מלטפת",
      image: importImage("home_cotton_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בריח אפרסק",
      image: importImage("peach_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח לימון מרענן",
      image: importImage("fresh_lemon_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח יסמין",
      image: importImage("jasmine_scented_floor_cleaner.jpeg"),
    },
    {
      name: "נוזל לניקוי רצפה בניחוח פסיפלורה",
      image: importImage("passionfruit_scented_floor_cleaner.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי רצפות",
      image: importImage("floor_cleaning_wipes.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מאסק",
      image: importImage("musk_scented_floor_wipes.jpeg"),
    },
    {
      name: "מטליות לחות לרצפה בניחוח מרכך כביסה",
      image: importImage("thick_floor_wipes_fabric_softener_scent.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מלון מפנק",
      image: importImage("luxury_hotel_floor_wipes_70x40.jpeg"),
    },
    {
      name: "מטליות לחות לניקוי הרצפה בניחוח מלון בוטיק",
      image: importImage("boutique_hotel_floor_wipes.jpeg"),
    },
    {
      name: "מטליות לחות לרצפה בניחוח לימון",
      image: importImage("lemon_scented_floor_wipes.jpeg"),
    },
    {
      name: "מטליות רצפה",
      image: importImage("perfect_floor_wipes.jpeg"),
    },
  ];

  const initialBathroomtoilecleaning = [
    {
      name: "נוזל לניקוי אסלות",
      image: importImage('liquid_for_cleaning_toilets.jpeg'),
    }
  ];

  const initialPesticideproducts = [
    {
      name: "קוטל חרקים",
      image: importImage('an_insects_killer.jpeg'),
    }
  ];

  const initialCleaningaccessories = [
    {
      name: "מטליות לניקוי כללי",
      image: importImage('cloths_for_general_cleaning.jpeg'),
    }
  ];

  const initialDisposableproducts = [
    {
      name: "שרוול כוסות פלסטיק",
      image: importImage('plastic_cup_sleeve.jpeg'),
    }
  ];

  const initialBagspackagingproducts = [
    {
      name: "רדיד אלומיניום",
      image: importImage('foil.jpeg'),
    }
  ];

  initialPaper.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialLaundryproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCleaningproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialKitchencleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialGeneralcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFloorcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));



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
  initialBathroomtoilecleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [pesticideproducts, setPesticideproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialPesticideproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [cleaningaccessories, setCleaningaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCleaningaccessories.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [disposableproducts, setDisposableproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDisposableproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [bagspackagingproducts, setBagspackagingproducts] = useState<{ name: string; image: string | null; count: number }[]>(
  initialBagspackagingproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
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
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setPesticideproducts(pesticideproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCleaningaccessories(cleaningaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDisposableproducts(disposableproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBagspackagingproducts(bagspackagingproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
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
    
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setPesticideproducts(pesticideproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setCleaningaccessories(cleaningaccessories.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setDisposableproducts(disposableproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
    
    setBagspackagingproducts(bagspackagingproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));
   };

  const handleSave = async () => {
    const paperToSave = paper.filter(paper => paper.count > 0).map(paper => ({ ...paper, quantity: paper.count }));
    const laundryproductsToSave = laundryproducts.filter(laundryproducts => laundryproducts.count > 0).map(laundryproducts => ({ ...laundryproducts, quantity: laundryproducts.count }));
    const cleaningproductsToSave = cleaningproducts.filter(cleaningproducts => cleaningproducts.count > 0).map(cleaningproducts => ({ ...cleaningproducts, quantity: cleaningproducts.count }));
    const kitchencleaningToSave = kitchencleaning.filter(kitchencleaning => kitchencleaning.count > 0).map(kitchencleaning => ({ ...kitchencleaning, quantity: kitchencleaning.count }));
    const generalcleaningToSave = generalcleaning.filter(generalcleaning => generalcleaning.count > 0).map(generalcleaning => ({ ...generalcleaning, quantity: generalcleaning.count }));
    const floorcleaningToSave = floorcleaning.filter(floorcleaning => floorcleaning.count > 0).map(floorcleaning => ({ ...floorcleaning, quantity: floorcleaning.count }));
    const bathroomtoilecleaningToSave = bathroomtoilecleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const pesticideproductsToSave = pesticideproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const cleaningaccessoriesToSave = cleaningaccessories.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const disposableproductsToSave = disposableproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const bagspackagingproductsToSave = bagspackagingproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

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

  return (
    <div>
      <div>
        <ProductsPage
          products={paper}
          categoryTitle="נייר ומוצריו"
          icon={<img alt="" src={importImage('paper_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={laundryproducts}
          categoryTitle="מוצרי כביסה"
          icon={<img alt="" src={importImage('laundryproducts_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cleaningproducts}
          categoryTitle="ניקוי כלים"
          icon={<img alt="" src={importImage('cleaningproducts_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={kitchencleaning}
          categoryTitle="ניקוי מטבח"
          icon={<img alt="" src={importImage('kitchen_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={generalcleaning}
          categoryTitle="ניקוי כללי"
          icon={<img alt="" src={importImage('general_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={floorcleaning}
          categoryTitle="ניקוי רצפה"
          icon={<img alt="" src={importImage('floor_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={bathroomtoilecleaning}
          categoryTitle="ניקוי אמבטיה ושירותים"
          icon={<img alt="" src={importImage('bathroom_cleaning_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={pesticideproducts}
          categoryTitle="מוצרי הדברה"
          icon={<img alt="" src={importImage('pesticide_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={cleaningaccessories}
          categoryTitle="אביזרי ניקוי"
          icon={<img alt="" src={importImage('cleaning_accessories_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={disposableproducts}
          categoryTitle="מוצרים חד פעמיים"
          icon={<img alt="" src={importImage('disposable_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={bagspackagingproducts}
          categoryTitle="שקיות ומוצרי אריזה"
          icon={<img alt="" src={importImage('bag_packaging_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default CleaningDisposablePage;