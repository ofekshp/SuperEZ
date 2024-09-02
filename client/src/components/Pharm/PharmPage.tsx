import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Pharm/${imageName}`);
  } catch (error) {
    return null;
  }
};

const PharmPage: React.FC = () => {
  const { addProduct, removeProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialBathsoap = [
    { name: "תחליב רחצה קלאסי", image: importImage('classic_shower_lotion.png'), id: 17 },
    { name: "תחליב רחצה בתוספת שמן מרוקאי", image: importImage('moroccan_oil_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בתוספת שמן קוקוס", image: importImage('coconut_oil_shower_lotion.jpeg'), id: 17 },
    { name: "תחליב רחצה בניחוח לבנדר ווניל", image: importImage('lavender_vanilla_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח מלפפון ותה ירוק", image: importImage('cucumber_green_tea_shower_lotion.avif'), id: 17 },
    { name: "תחליב רחצה חימר ירוק", image: importImage('green_clay_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח אדמונית & שמן ורדים", image: importImage('peony_scent_and_roses_oil_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה חימר ורוד", image: importImage('pink_clay_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה אלוורה & מי עץ שדר", image: importImage('aloe_birch_water_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה nourishing silk", image: importImage('nourishing_silk_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה רימונים ותמצית פרח היביסקוס", image: importImage('pomegranate_hibiscus_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה הזנה עמוקה", image: importImage('deep_nourishment_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח קמומיל כחול וחלב שיבולת שועל", image: importImage('blue_chamomile_oat_milk_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מועשר בשקדים וקרם לחות", image: importImage('almond_moisture_cream_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה זיתים", image: importImage('olive_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה סחלב שחור וקרם לחות", image: importImage('black_orchid_moisture_cream_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה חלב שקדים", image: importImage('almond_milk_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה חלב ודבש", image: importImage('milk_honey_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה לגוף מועשר בשמן כותנה", image: importImage('cotton_oil_body_wash.jpg'), id: 17 },
    { name: "תחליב רחצה מועשר בשמן ארגן", image: importImage('argan_oil_body_wash.jpg'), id: 17 },
    { name: "תחליב רחצה מועשר באלוורה", image: importImage('aloe_body_wash.jpg'), id: 17 },
    { name: "תחליב רחצה אלוורה ותה ירוק", image: importImage('aloe_green_tea_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה אוקיינוס", image: importImage('ocean_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה קוקוס וניל", image: importImage('coconut_vanilla_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה לבנדר", image: importImage('lavender_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מאסק ויסמין", image: importImage('musk_jasmine_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה בניחוח גלידת סוכריות ג'לי", image: importImage('jelly_candy_ice_cream_scent_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח גלידת קרם עוגיות", image: importImage('cookie_cream_ice_cream_scent_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה ורד ושמן קוקוי", image: importImage('rose_kukui_oil_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מאסק", image: importImage('musk_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה חימר תה ירוק", image: importImage('green_tea_clay_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה לבנדר ואקליפטוס", image: importImage('lavender_eucalyptus_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה ספא איורוודה בניחוח טונקה", image: importImage('spa_ayurveda_tonka_scent_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה ספא זן בניחוח קשמיר", image: importImage('spa_zen_cashmere_scent_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה ספא יוגה בניחוח ברגמוט", image: importImage('spa_yoga_bergamot_scent_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה עם שמן קוקוס ותמצית שקדים", image: importImage('coconut_oil_almond_extract_shower_lotion.avif'), id: 17 },
    { name: "תחליב רחצה חמאת מנגו ותמצית שקדים", image: importImage('mango_butter_almond_extract_shower_lotion.avif'), id: 17 },
    { name: "תחליב רחצה עם שמן זית", image: importImage('olive_oil_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה בניחוח פריחת הדובדבן", image: importImage('cherry_blossom_scent_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה תה ירוק מאצ'ה ופריחת הדובדבן", image: importImage('matcha_green_tea_cherry_blossom_scent_shower_lotion.avif'), id: 17 },
    { name: "תחליב רחצה יוגורט בניחוח שקדים", image: importImage('almond_scent_yogurt_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה שיבולת שועל", image: importImage('oatmeal_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה שיבולת שועל לעור רגיש", image: importImage('oatmeal_sensitive_skin_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח אננס ומלון", image: importImage('pineapple_melon_scent_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה בניחוח ורדים לבנים", image: importImage('white_rose_scent_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מלפפון ואלוורה", image: importImage('cucumber_aloe_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מלפפון וליים", image: importImage('cucumber_lime_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה אפרסק וחמאת מורומורו", image: importImage('peach_murumuru_butter_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה יוגורט בניחוח אוכמניות", image: importImage('blueberry_scent_yogurt_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה יוגורט בניחוח אלוורה", image: importImage('aloe_scent_yogurt_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה יוגורט בניחוח וניל ודבש", image: importImage('vanilla_honey_yogurt_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה יוגורט בניחוח קוקוס", image: importImage('coconut_yogurt_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה מקדמיה וקקאו", image: importImage('macadamia_cocoa_shower_lotion.webp'), id: 17 },
    { name: "תחליב רחצה שמן שקדים וניחוח מגנוליה", image: importImage('almond_oil_magnolia_shower_lotion.jpg'), id: 17 },
    { name: "תחליב רחצה ורד ווניל", image: importImage('rose_vanilla_shower_lotion.jpg'), id: 17 },

    { name: "אל סבון לידיים בתוספת שמן קוקוס", image: importImage('soapless_handsoap_coconut_oil.jpg'), id: 17 },
    { name: "אל סבון תמצית אלוורה", image: importImage('soapless_aloe_vera_extract.jpg'), id: 17 },
    { name: "אל סבון יסמין ולבנדר", image: importImage('soapless_jasmine_lavender.webp'), id: 17 },
    { name: "אל סבון תמצית אצות ים", image: importImage('soapless_seaweed_extract.jpg'), id: 17 },
    { name: "אל סבון תמציות ג'ינסנג", image: importImage('soapless_ginseng_extract.jpg'), id: 17 },
    { name: "אל סבון תמצית קמומיל", image: importImage('soapless_chamomile_extract.webp'), id: 17 },
    { name: "אל סבון בניחוח תאנה ותה ירוק", image: importImage('soapless_fig_green_tea.webp'), id: 17 },
    { name: "אל סבון בניחוח אבטיח ומנטה", image: importImage('soapless_watermelon_mint.webp'), id: 17 },
    { name: "אל סבון בניחוח אפרסק ופלפל שחור", image: importImage('soapless_peach_black_pepper.webp'), id: 17 },
    { name: "אל סבון בוטני מועשר בתמציות גרניום ופטצ'ולי", image: importImage('soapless_botanical_geranium_patchouli.jpg'), id: 17 },
    { name: "אל סבון בוטני מועשר בתמציות ורדים ומרווה", image: importImage('soapless_botanical_rose_sage.jpg'), id: 17 },
    { name: "אל סבון היגייני לניקוי יסודי Clean & Moisture", image: importImage('soapless_clean_moisture.jpg'), id: 17 },
    { name: "אל סבון היגייני לניקוי יסודי Clean & Fresh", image: importImage('soapless_clean_fresh.jpg'), id: 17 },
    { name: "אל סבון היגייני לניקוי יסודי ולהרגע העור Clean & Calm", image: importImage('soapless_clean_calm.jpg'), id: 17 },

    { name: "תחליב סבון טיפולי", image: importImage('therapeutic_soap_lotion.png'), id: 17 },

    { name: "סבון ללא סבון", image: importImage('soapless_soap.jpeg'), id: 17 },
    { name: "סבון ללא סבון מועשר בלחות", image: importImage('moisturizing_soapless_soap.jpg'), id: 17 },

    { name: "סבון ידיים אקווריום", image: importImage('aquarium_handsoap.jpg'), id: 17 },
    { name: "סבון נוזלי לידיים דבש וחלב", image: importImage('liquid_handsoap_honey_milk.webp'), id: 17 },
    { name: "סבון נוזלי לידיים זיתים", image: importImage('liquid_handsoap_olive.jpg'), id: 17 },
    { name: "סבון נוזלי ארומה מסאז' עם גרגירי פילינג", image: importImage('liquid_soap_aroma_massage_exfoliating_grains.webp'), id: 17 },
    { name: "סבון נוזלי בניחוח ים", image: importImage('liquid_soap_blue_lagoon.webp'), id: 17 },
    { name: "סבון נוזלי בניחוח ורדים", image: importImage('liquid_soap_pink_roses.webp'), id: 17 },
    { name: "סבון נוזלי בניחוח טרופי", image: importImage('liquid_soap_fresh_yellow_tropical_scent.webp'), id: 17 },
    { name: "סבון נוזלי בניחוח וניל רענן - שלישייה", image: importImage('liquid_soap_fresh_vanilla_scent_trio.jpg'), id: 17 },
    { name: "סבון ידיים ורד וניל", image: importImage('handsoap_rose_vanilla.webp'), id: 17 },
    { name: "סבון ידיים חמאת שיאה וקוקוי", image: importImage('handsoap_shea_butter_kukui.webp'), id: 17 },
    { name: "סבון ידיים למטבח", image: importImage('kitchen_handsoap.jpg'), id: 17 },

    { name: "ג'ל רחצה ארומטי So Relaxed", image: importImage('aromatic_shower_gel_so_relaxed.webp'), id: 17 },
    { name: "ג'ל רחצה ארומה סנסיישן גלואו", image: importImage('aroma_sensation_glow_shower_gel.jpg'), id: 17 },
    { name: "ג'ל רחצה מועשר בשמן מקדמיה", image: importImage('shower_gel_enriched_with_macadamia_oil.jpg'), id: 17 },
    { name: "ג'ל רחצה מועשר בשמן קוקוס", image: importImage('shower_gel_enriched_with_coconut_oil.webp'), id: 17 },

    { name: "ג'ל רחצה לגבר ספורט Sport", image: importImage('mens_sport_shower_gel.jpg'), id: 17 },
    { name: "ג'ל רחצה לגבר עם תמציות מנטה", image: importImage('mens_shower_gel_mint_extract.jpg'), id: 17 },
    { name: "ג'ל רחצה לגבר Cool kick", image: importImage('mens_shower_gel_cool_kick.jpg'), id: 17 },
    { name: "ג'ל רחצה מועשר בתמציות אשכולית ומנטה MEN", image: importImage('mens_shower_gel_grapefruit_mint_extract.jpg'), id: 17 },
    { name: "ג'ל רחצה לגבר בניחוח עוצמתי", image: importImage('mens_shower_gel_powerful_scent.jpg'), id: 17 },
    { name: "ג'ל רחצה ופילינג מן", image: importImage('mens_shower_gel_exfoliating.jpg'), id: 17 },

    { name: "קרם רחצה בניחוח ויולה ורודה", image: importImage('shower_cream_pink_viola_scent.webp'), id: 17 },
    { name: "קרם רחצה בניחוח פרח הקמליה", image: importImage('shower_cream_camellia_flower_scent.webp'), id: 17 },
    { name: "קרם רחצה תמציות דבש וניחוח אירוס זהוב", image: importImage('shower_cream_honey_extracts_golden_iris_scent.jpg'), id: 17 },

    { name: "מוס רחצה בניחוח קרם עוגיות", image: importImage('shower_mousse_cookies_cream_scent.jpg'), id: 17 },
    { name: "מוס רחצה בניחוח תותים ושמנת", image: importImage('shower_mousse_strawberries_cream_scent.jpg'), id: 17 },

    { name: "סבון רחצה מוצק זיתים ואלוורה - מארז 4 יח'", image: importImage('solid_soap_olive_aloe_vera_4pack.jpg'), id: 17 },
    { name: "סבון מוצק בניחוח קמומיל", image: importImage('solid_soap_chamomile_scent.jpg'), id: 17 },
    { name: "סבון מוצק שקדים", image: importImage('solid_soap_almond.webp'), id: 17 },
    { name: "מארז סבון מוצק אל סבון מועשר בשמנים ארומטיים", image: importImage('solid_soap_aromatic_oil_enriched_pack.png'), id: 17 },
    { name: "מארז סבון מוצק אל סבון מועשר בלחות", image: importImage('solid_soap_moisture_enriched_pack.png'), id: 17 },
    { name: "אל סבון מוצק מבושם בניחוח עדין קלאסיק - מארז רביעיה", image: importImage('solid_soap_classic_scent_4pack.jpg'), id: 17 },
    { name: "אל סבון מוצק מועשר בקרם לחות לבנדר - מארז רביעיה", image: importImage('solid_soap_lavender_moisture_cream_4pack.jpg'), id: 17 },
    { name: "אל סבון ארומטי מוצק ורוד ורד ויסמין - מארז רביעיה", image: importImage('solid_soap_pink_rose_jasmine_4pack.jpg'), id: 17 },
    { name: "אל סבון ארומטי מוצק צהוב קמומיל - רביעייה", image: importImage('solid_soap_yellow_chamomile_4pack.jpg'), id: 17 },
    { name: "אל סבון מוצק מועשר בקרם לחות צמחים - מארז רביעיה", image: importImage('solid_soap_herbal_moisture_cream_4pack.jpg'), id: 17 },
    { name: "אל סבון מוצק לתינוקות לבעלי עור עדין ורגיש - מארז רביעיה", image: importImage('solid_soap_baby_sensitive_skin_4pack.jpg'), id: 17 },

    { name: "בת אורן סבון אמבט נוזלי בניחוח אורנים", image: importImage('bath_liquid_soap_pine_scent.jpg'), id: 17 },
  ];

  const initialShampoo = [
    { name: "שמפו לשיער רגיל", image: importImage('shampoo_for_normal_hair.jpg'), id: 17 },
    { name: "שמפו לשיער יבש / פגום", image: importImage('shampoo_for_dry_damaged_hair.jpg'), id: 17 },
    { name: "שמפו שמן קוקוס", image: importImage('shampoo_with_coconut_oil.jpg'), id: 17 },
    { name: "שמפו לשיער יבש בתוספת קרטין", image: importImage('shampoo_for_dry_hair_with_keratin.jpg'), id: 17 },
    { name: "שמפו לשיער יבש בתוספת שמן מרוקאי", image: importImage('shampoo_for_dry_hair_with_moroccan_oil.jpg'), id: 17 },
    { name: "שמפו קרטין שמן מרולה", image: importImage('shampoo_with_keratin_and_marula_oil.jpg'), id: 17 },
    { name: "שמפו גוג'י ברי", image: importImage('shampoo_goji_berry.jpg'), id: 17 },
    { name: "שמפו מאצ'ה ומלפפון", image: importImage('shampoo_matcha_and_cucumber.jpg'), id: 17 },
    { name: "שמפו לקרקפת שומנית", image: importImage('shampoo_for_oily_hair.jpg'), id: 17 },
    { name: "שמפו חומץ תפוחים", image: importImage('shampoo_apple_vinegar.jpg'), id: 17 },
    { name: "שמפו תפוח וזרעי צ׳יה", image: importImage('shampoo_apple_and_chia_seeds.jpg'), id: 17 },
    { name: "שמפו שמן אבוקדו ותמצית קלנדולה", image: importImage('shampoo_with_Avocado_oil_and_calendula.avif'), id: 17 },
    { name: "שמפו ויטמין C", image: importImage('shampoo_with_vitamin_C.jpg'), id: 17 },
    { name: "שמפו ויטמין E", image: importImage('shampoo_with_vitamin_E.jpg'), id: 17 },
    { name: "שמפו לשיער צבוע", image: importImage('shampoo_for_colored_hair.png'), id: 17 },
    { name: "שמפו ארגן", image: importImage('shampoo_with_aragan.jpg'), id: 17 },
    { name: "שמפו שמן קוקוס כורכום", image: importImage('shampoo_with_coconut_oil_and_turmeric.jpg'), id: 17 },
    { name: "שמפו מעניק נפח לשיער דק יסמין", image: importImage('shampoo_with_jasmine_for_thin_hair.jpg'), id: 17 },
    { name: "שמפו למניעת קשקשים", image: importImage('anti_dandruff_shampoo.jpg'), id: 17 },
    { name: "שמפו הד אנד שולדרס קלאסי", image: importImage('head_and_shoulders_classic_shampoo.jpg'), id: 17 },
    { name: "שמפו לשיער מתולתל", image: importImage('shampoo_for_curly_hair.jpg'), id: 17 },
    { name: "שמפו ללא סולפטים", image: importImage('sulfate_free_shampoo.jpg'), id: 17 },
    { name: "שמפו אלוורה", image: importImage('aloe_vera_shampoo.jpg'), id: 17 },
    { name: "שמפו חימר", image: importImage('clay_shampoo.jpg'), id: 17 },
    { name: "שמפו תות ומנטה", image: importImage('shampoo_strawberry_mint.webp'), id: 17 },
    { name: "שמפו פריחת הדובדבן", image: importImage('shampoo_cherry_blossom.jpg'), id: 17 },
    { name: "שמפו מי קקטוס ושמן באבאסו", image: importImage('shampoo_cactus_water_and_babassu_oil.webp'), id: 17 },
    { name: "שמפו אמפולה לטיפול אינטנסיבי לשיער יבש, צבוע ופגום", image: importImage('shampoo_ampoule_intensive_treatment.jpeg'), id: 17 },
    { name: "שמפו ורד", image: importImage('shampoo_with_rose.jpg'), id: 17 },
    { name: "שמפו לחות מוגברת אפרסק וחמאת מורומורו", image: importImage('shampoo_peach_and_morumoro_butter.jpg'), id: 17 },
    { name: "שמפו לחות מוגברת", image: importImage('shampoo_increased_moisture.jpg'), id: 17 },
    { name: "שמפו עם שמני הזנה", image: importImage('shampoo_with_nourishing_oils.jpg'), id: 17 },
    { name: "שמפו קרטין לאחר החלקה ועיצוב בחום", image: importImage('shampoo_keratin_after_heat_styling.jpg'), id: 17 },
    { name: "שמפו למניעת קשקשים שמן עץ התה ואסאי", image: importImage('anti_dandruff_shampoo_with_tea_tree_oil_and_acai.jpg'), id: 17 },
    { name: "שמפו סילבר לשיער כסוף", image: importImage('silver_shampoo_for_gray_hair.webp'), id: 17 },
    { name: "שמפו לשיער בלונדיני בהיר", image: importImage('shampoo_for_light_blonde_hair.jpg'), id: 17 },
    { name: "שמפו קרטין ושמן קיק", image: importImage('shampoo_keratin_and_castor_oil.jpg'), id: 17 },
    { name: "שמפו לחיזוק סיב השערה", image: importImage('shampoo_for_strengthening_hair_fiber.jpg'), id: 17 },
    { name: "שמפו קרטין לשיער עדין או חלש", image: importImage('shampoo_for_weak_hair.jpg'), id: 17 },
    { name: "שמפו רך כמשי", image: importImage('shampoo_silky_soft.jpg'), id: 17 },
    { name: "שמפו טיפוח יום יומי", image: importImage('daily_care_shampoo.jpg'), id: 17 },
    { name: "שמפו לשיער ארוך ופגום", image: importImage('shampoo_for_long_damaged_hair.jpg'), id: 17 },

    // 2 or 3 or 4 in 1
    { name: "שמפו ומרכך לכל סוגי השיער 2 ב-1", image: importImage('shampoo_and_conditioner_all_hair_types_2in1.png'), id: 17 },
    { name: "שמפו ומרכך לשיער רגיל 2 ב-1", image: importImage('shampoo_and_conditioner_for_dry_damaged_hair_2in1.jpg'), id: 17 },
    { name: "שמפו ומרכך 2 ב-1 לשיער יבש / פגום", image: importImage('shampoo_and_conditioner_normal_hair_2in1.jpg'), id: 17 },
    { name: "שמפו ומרכך 2 ב-1 ורדים וחלב רימונים", image: importImage('shampoo_and_conditioner_roses_and_pomegranate_milk_2in1.jpg'), id: 17 },
    { name: "שמפו ומרכך 2 ב-1 למניעת קשקשים", image: importImage('shampoo_and_conditioner_anti_dandruff_2in1.jpg'), id: 17 },

    //men
    { name: "ג'ל רחצה ושמפו ספורט עם ניחוח סנדלווד", image: importImage('sport_shower_gel_shampoo_sandalwood_scent.jpg'), id: 17 },
    { name: "שמפו וג׳ל רחצה 2 ב-1 לגבר", image: importImage('shampoo_and_shower_for_men_2in1.png'), id: 17 },
    { name: "שמפו וג'ל רחצה לגבר רויבוס", image: importImage('mens_shampoo_shower_gel_rooibos.png'), id: 17 },
    { name: "שמפו וג'ל רחצה לגבר אלוורה", image: importImage('mens_shampoo_shower_gel_aloe_vera.jpg'), id: 17 },
    { name: "שמפו ומרכך 2 ב-1 לגבר", image: importImage('shampoo_and_conditioner_men_2in1.jpg'), id: 17 },
    { name: "שמפו, ג׳ל רחצה, פנים 3 ב-1 לגבר מן", image: importImage('shampoo_and_body_face_for_men_3in1.jpg'), id: 17 },
    { name: "3 ב-1 לגבר שמפו, ג'ל רחצה וסבון פנים", image: importImage('3in1_mens_shampoo_shower_gel_face_wash.webp'), id: 17 },
    { name: "4 ב-1 לגבר פחם", image: importImage('shampoo_and_body_charcoal_for_men_4in1.jpg'), id: 17 },
    { name: "סבון גוף ושמפו לגבר 4 ב-1 באלאנס", image: importImage('4in1_mens_body_soap_shampoo_balance.webp'), id: 17 },
    { name: "4 ב-1 לגבר ספורט", image: importImage('sport_4in1_mens_body_gel.jpg'), id: 17 },
    { name: "לשיער, גוף, פנים וזקן לגבר", image: importImage('hair_body_face_beard_mens_soap.jpg'), id: 17 },


    // dry shampoos
    { name: "שמפו יבש קלאסי", image: importImage('dry_shampoo_classic.webp'), id: 17 },
    { name: "שמפו יבש טרופי", image: importImage('dry_shampoo_tropical.webp'), id: 17 },
    { name: "שמפו יבש דובדבן", image: importImage('dry_shampoo_cherry.webp'), id: 17 },
    { name: "שמפו יבש פריחה אביבית", image: importImage('dry_shampoo_spring_bloom.webp'), id: 17 },

  ];

  const initialConditioner = [
    { name: "מרכך לשיער רגיל", image: importImage('conditioner_for_normal_hair.jpg') },
    { name: "מרכך לשיער יבש / פגום", image: importImage('conditioner_for_dry_damaged_hair.jpg'), id: 17 },
    { name: "מרכך שמן קוקוס", image: importImage('conditioner_with_coconut_oil.jpg'), id: 17 },
    { name: "מרכך בתוספת קרטין", image: importImage('conditioner_with_keratin.webp'), id: 17 },
    { name: "מרכך לשיער יבש בתוספת שמן מרוקאי", image: importImage('conditioner_with_moroccan_oil.jpg'), id: 17 },
    { name: "מרכך קרטין שמן מרולה", image: importImage('conditioner_with_keratin_and_marula_oil.jpg'), id: 17 },
    { name: "מרכך גוג'י ברי", image: importImage('conditioner_goji_berry.webp'), id: 17 },
    { name: "מרכך מאצ'ה ומלפפון", image: importImage('conditioner_matcha_and_cucumber.jpg'), id: 17 },
    { name: "מרכך לקרקפת שומנית", image: importImage('conditioner_for_oily_hair.jpg'), id: 17 },
    { name: "מרכך חומץ תפוחים", image: importImage('conditioner_with_apple_vinegar.jpg'), id: 17 },
    { name: "מרכך תפוח וזרעי צ׳יה", image: importImage('conditioner_with_apple_and_chia_seed.jpg'), id: 17 },
    { name: "מרכך שמן אבוקדו ותמצית קלנדולה", image: importImage('conditioner_with_Avocado_oil_and_calendula.jpg'), id: 17 },
    { name: "מרכך ויטמין C", image: importImage('conditioner_with_vitamin_C.jpg'), id: 17 },
    { name: "מרכך ויטמין E", image: importImage('conditioner_with_vitamin_E.jpg'), id: 17 },
    { name: "מרכך לשיער צבוע", image: importImage('conditioner_for_colored_hair.webp'), id: 17 },
    { name: "מרכך ארגן", image: importImage('conditioner_with_aragan.jpg'), id: 17 },
    { name: "מרכך שמן קוקוס כורכום", image: importImage('conditioner_with_coconut_oil_and_turmeric.jpg'), id: 17 },
    { name: "מרכך מעניק נפח לשיער דק יסמין", image: importImage('conditioner_with_jasmine_for_thin_hair.jpg'), id: 17 },
    { name: "מרכך הד אנד שולדרס קלאסי", image: importImage('head_and_shoulders_classic_conditioner.jpg'), id: 17 },
    { name: "מרכך לשיער מתולתל", image: importImage('conditioner_for_curly_hair.webp'), id: 17 },
    { name: "מרכך ללא סולפטים", image: importImage('sulfate_free_conditioner.jpg'), id: 17 },
    { name: "מרכך אלוורה", image: importImage('aloe_vera_conditioner.jpg'), id: 17 },
    { name: "מרכך חימר", image: importImage('clay_conditioner.jpg'), id: 17 },
    { name: "מרכך תות ומנטה", image: importImage('conditioner_strawberry_mint.webp'), id: 17 },
    { name: "מרכך פריחת הדובדבן", image: importImage('conditioner_cherry_blossom.webp'), id: 17 },
    { name: "מרכך מי קקטוס ושמן באבאסו", image: importImage('conditioner_cactus_water_and_babassu_oil.jpg'), id: 17 },
    { name: "מרכך אמפולה לטיפול אינטנסיבי לשיער יבש, צבוע ופגום", image: importImage('conditioner_ampoule_intensive_treatment.jpg'), id: 17 },
    { name: "מרכך ורד", image: importImage('conditioner_with_rose.jpg'), id: 17 },
    { name: "מרכך לחות מוגברת אפרסק וחמאת מורומורו", image: importImage('conditioner_peach_and_morumoro_butter.jpg'), id: 17 },
    { name: "מרכך לחות מוגברת", image: importImage('conditioner_increased_moisture.webp'), id: 17 },
    { name: "מרכך עם שמני הזנה", image: importImage('conditioner_with_nourishing_oils.jpg'), id: 17 },
    { name: "מרכך קרטין לאחר החלקה ועיצוב בחום", image: importImage('conditioner_keratin_after_heat_styling.jpg'), id: 17 },
    { name: "מרכך למניעת קשקשים שמן עץ התה ואסאי", image: importImage('anti_dandruff_conditioner_with_tea_tree_oil_and_acai.jpg'), id: 17 },
    { name: "מרכך סילבר לשיער כסוף", image: importImage('silver_conditioner_for_gray_hair.webp'), id: 17 },
    { name: "מרכך לשיער בלונדיני בהיר", image: importImage('conditioner_for_light_blonde_hair.jpg'), id: 17 },
    { name: "מרכך מתי קשרים לשיער ארוך", image: importImage('conditioner_detangling_for_long_hair.jpg'), id: 17 },
    { name: "מרכך לחיזוק סיב השערה", image: importImage('conditioner_for_strengthening_hair_fiber.jpeg'), id: 17 },
    { name: "מרכך קרטין לשיער עדין או חלש", image: importImage('conditioner_for_weak_hair.jpg'), id: 17 },
    { name: "מרכך רך כמשי", image: importImage('conditioner_silky_soft.jpg'), id: 17 },
    { name: "מרכך טיפוח יום יומי", image: importImage('daily_care_conditioner.jpg'), id: 17 },
    { name: "מרכך לשיער ארוך ופגום", image: importImage('conditioner_for_long_damaged_hair.jpg'), id: 17 },
    { name: "מרכך קרטין, שמן קיק ומי ורדים", image: importImage('conditioner_keratin_castor_oil_rose_water.jpg'), id: 17 },
  ];

  const initialDeodorantforwomen = [
    { name: "דאודורנט סטיק טלק סופט", image: importImage('dove_talc_soft_stick.png'), id: 17 },
    { name: "דאודורנט סטיק בניחוח קוקוס יסמין", image: importImage('dove_coconut_jasmine_stick.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח אפרסק לימון", image: importImage('dove_peach_lemon_spray.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח קוקוס יסמין", image: importImage('dove_coconut_jasmine_spray.png'), id: 17 },
    { name: "דאודורנט ספריי אורגינל", image: importImage('dove_original_spray.png'), id: 17 },
    { name: "דאודורנט סטיק אוריגינל", image: importImage('dove_original_stick.png'), id: 17 },
    { name: "דאודורנט סטיק מלפפון", image: importImage('dove_cucumber_green_tea_stick.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח אסאי", image: importImage('dove_acai_scented_spray.png'), id: 17 },
    { name: "דאודורנט רול און בניחוח אסאי", image: importImage('dove_acai_roll_on.png'), id: 17 },
    { name: "דאודורנט סטיק בניחוח פרח הפרזיה", image: importImage('lady_speed_stick_freesia_flower_stick.png'), id: 17 },
    { name: "דאודורנט סטיק בניחוח פריחת הפרדס", image: importImage('lady_speed_stick_orange_blossom_stick.png'), id: 17 },
    { name: "דאודורנט סטיק בניחוח פריחת הדובדבן", image: importImage('lady_speed_stick_cherry_blossom_stick.png'), id: 17 },
    { name: "דאודורנט רול און בניחוח סחלב שחור", image: importImage('lady_speed_stick_black_orchid_roll_on.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח ורד וניל", image: importImage('crema_rose_vanilla_spray.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח לבנדר אקליפטוס", image: importImage('crema_lavender_eucalyptus_spray.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח מאסק", image: importImage('crema_musk_spray.png'), id: 17 },
    { name: "דאודורנט ספריי קלאסי", image: importImage('crema_classic_spray.png'), id: 17 },
    { name: "דאודורנט רול און לבנדר אקליפטוס", image: importImage('crema_lavender_eucalyptus_roll_on.png'), id: 17 },
    { name: "דאודורנט רול און קלאסי", image: importImage('crema_classic_roll_on.png'), id: 17 },
    { name: "דאודורנט סטיק אינביזיבל", image: importImage('rexona_invisible_women_stick.png'), id: 17 },
    { name: "דאודורנט סטיק כותנה", image: importImage('rexona_cotton_dry_stick.png'), id: 17 },
    { name: "דאודורנט ספריי שאוור פרש", image: importImage('shower_fresh_spray_rexona.png'), id: 17 },
    { name: "דאודורנט ספריי בניחוח במבוק אלוורה", image: importImage('bamboo_aloe_vera_spray_rexona.png'), id: 17 },
    { name: "דאודורנט ספריי פסיפלורה למון גראס", image: importImage('passionfruit_lemongrass_spray_dove.png'), id: 17 },
    { name: "דאודורנט ספריי טלק סופט", image: importImage('talc_soft_spray_dove.png'), id: 17 },
    { name: "דאודורנט ספריי רימונים לואיזה לימונית", image: importImage('pomegranate_lemon_verbena_spray_dove.png'), id: 17 },
    { name: "דאודורנט ספריי פרו 5", image: importImage('pro_5_spray_lady_speed_stick.png'), id: 17 },
    { name: "דאודורנט ספריי נושם", image: importImage('bio_breathable_citrus_spray_careline.png'), id: 17 },
    { name: "דאודורנט רול און נושם", image: importImage('bio_breathable_rose_roll_on_careline.jpg'), id: 17 },
  ];

  const initialDeodorantformen = [
    { name: "דאודורנט סטיק אנרכי", image: importImage('anarchy_stick_axe.png'), id: 17 },
    { name: "דאודורנט סטיק בלאק", image: importImage('black_stick_axe.png'), id: 17 },
    { name: "דאודורנט סטיק אקסטרים", image: importImage('extreme_intense_stick_speed_stick.png'), id: 17 },
    { name: "דאודורנט סטיק אקסטרה קול", image: importImage('extra_cool_stick_rexona.png'), id: 17 },
    { name: "דאודורנט סטיק קובלט", image: importImage('cobalt_stick_rexona.png'), id: 17 },
    { name: "דאודורנט ספריי וורקאאוט", image: importImage('workout_spray_rexona.png'), id: 17 },
    { name: "דאודורנט ספריי טיטניום", image: importImage('titanium_spray_titanium.png'), id: 17 },
    { name: "דאודורנט ספריי בלאק Titanium Black", image: importImage('titanium_black_spray_titanium.png'), id: 17 },
    { name: "דאודורנט ספריי מטאל", image: importImage('titanium_metal_spray_titanium.png'), id: 17 },
    { name: "דאודורנט ספריי קלאסי", image: importImage('titanium_classic_spray_titanium.png'), id: 17 },
    { name: "דאודורנט ספריי גולד", image: importImage('titanium_gold_spray_titanium.png'), id: 17 },
    { name: "רד דאודורנט ספריי", image: importImage('titanium_red_spray_titanium.png'), id: 17 },
    { name: "דאודורנט ספריי קובלט דריי", image: importImage('cobalt_dry_spray_rexona.png'), id: 17 }
  ];

  const initialSunprotection = [
    { name: "אולטרסול קרם הגנה לפנים SPF 30", image: importImage('ultrasol_face_cream_spf30.jpg'), id: 17 },
    { name: "אולטרסול מקס קרם פנים +SPF 50", image: importImage('ultrasol_max_face_cream_spf50.jpg'), id: 17 },
    { name: "אולטרסול תחליב הגנה SPF 30", image: importImage('ultrasol_lotion_spf30.jpg'), id: 17 },
    { name: "אולטרסול תחליב הגנה +50 SPF", image: importImage('ultrasol_lotion_spf50.jpg'), id: 17 },
    { name: "אולטרסול תחליב הגנה לילדים SPF 50", image: importImage('ultrasol_kids_lotion_spf50.jpg'), id: 17 },
    { name: "אולטרסול תחליב הגנה לילדים +50 SPF", image: importImage('ultrasol_kids_lotion_spf50_plus.jpg'), id: 17 },

    { name: "ספריי הגנה שקוף SPF 30", image: importImage('clear_spray_spf30.jpg'), id: 17 },
    { name: "אולטרסול Spectrum ספריי תחליבי +SPF 50", image: importImage('ultrasol_spectrum_lotion_spray_spf50.jpg'), id: 17 },
    { name: "אולטרסול ספריי הגנה שקוף לילדים +SPF 50", image: importImage('ultrasol_kids_clear_spray_spf50.jpg'), id: 17 },
    { name: "ספריי הגנה שקוף SPF30 בניחוח קוקוס ליים", image: importImage('clear_spray_spf30_coconut_lime.jpg'), id: 17 },
    { name: "אולטרסול קרם ג'ל לפנים Sport max SPF50", image: importImage('ultrasol_sport_max_face_gel_spf50.jpg'), id: 17 },
    { name: "קרם הגנה לגולשים SPF 50 עמיד במים", image: importImage('surfer_sun_cream_spf50.jpg'), id: 17 },
    { name: "קמיל בלו קרם פנים לתינוק SPF 30", image: importImage('camille_blue_baby_face_cream_spf30.webp'), id: 17 },

    { name: "ג'ל אלוורה להרגעה ורענון העור", image: importImage('gel_aloe_vera_cooling.jpeg'), id: 17 },
    { name: "אולטרסול ג'ל אלוורה פורטה לטיפול והרגעה מיידית", image: importImage('ultrasol_forte_aloe_vera_gel.jpg'), id: 17 },
  ];

  const initialShavingpreparationsaccessories = [
    { name: "סכיני גילוח פיוזן", image: importImage('fusion_razors.jpeg') },
    { name: "מכונת תספורת לזקן נטענת", image: importImage('shaving_machine_rechargeable.jpg'), id: 17 },
    { name: "סכיני גילוח ג'ילט מאך 3 - 8 במארז", image: importImage('gillette_mach3_razor_blades_8.jpg'), id: 17 },
    { name: "סכיני גילוח ג'ילט בלו 3 קומפורט", image: importImage('gillette_blue3_comfort_3.jpg'), id: 17 },
    { name: "סכיני גילוח ג'ילט בלו 2 להבים - מארז 5 יח'", image: importImage('gillette_blue2_blades_5.jpg'), id: 17 },
    { name: "סכיני גילוח לגבר Exacta 2 לעור רגיש", image: importImage('schick_exacta2_sens_10.jpg'), id: 17 },
    { name: "סכיני גילוח לגבר Xtreme 3 senstive", image: importImage('schick_xtreme3_sens_4.png'), id: 17 },
    { name: "סכיני גילוח לאישה Xtreme 3 senstive", image: importImage('schick_xtreme3_woman_4.png'), id: 17 },
    { name: "סכיני גילוח לגבר הידרו 5 Hydro", image: importImage('schick_hydro5_razor_4.jpg'), id: 17 },
    { name: "סכיני גילוח לאישה 3 להבים", image: importImage('venus_3_blades_woman_razor_4.jpg'), id: 17 },
    { name: "סכיני גילוח ונוס סנסיטיב אקסטרה סמוט - 4 יח'", image: importImage('venus_sens_extra_smooth_4.jpg'), id: 17 },
    { name: "סכיני גילוח ונוס אקסטרה סמוט - 4 יח'", image: importImage('venus_extra_smooth_4.jpg'), id: 17 },
    { name: "סכיני גילוח לאישה בלו 2 Blue", image: importImage('gillette_blue2_woman_5.jpg'), id: 17 },
    { name: "שיק אינטואישן סנסטיב סכינים שלישייה", image: importImage('schick_intuition_sensitive_3.jpg'), id: 17 },
    { name: "מכשיר גילוח חד פעמי 5 להבים - 2 יחידות", image: importImage('schick_disposable_5_blades_2.jpg'), id: 17 },
    { name: "מכשיר גילוח לאישה + 5 סכינים", image: importImage('schick_woman_razor_5_blades.jpg'), id: 17 },
    { name: "סכיני גילוח שיק אינטואישן", image: importImage('schick_intuition_blades_3.jpg'), id: 17 },
    { name: "סכיני גילוח לנשים Quattro", image: importImage('schick_quattro_woman_3.jpg'), id: 17 },
    { name: "סכיני גילוח לאישה Exacta 2 לעור רגיש", image: importImage('schick_exacta2_woman_sens_10.jpg'), id: 17 },
    { name: "ג'ל גילוח ג'ילט סירייס לעור רגיש עם אלוורה", image: importImage('gillette_series_sensitive_aloe_200ml.jpg'), id: 17 },
    { name: "ג'ל גילוח Extra Moisrurizing", image: importImage('edge_extra_moisturizing_198g.png'), id: 17 },
    { name: "ג'ל גילוח Sensitive skin לגילוח קרוב", image: importImage('edge_sensitive_skin_200g.jpg'), id: 17 },
    { name: "ג'ל גילוח Soothing Aloe", image: importImage('edge_soothing_aloe_200g.jpg'), id: 17 },
    { name: "ג'ל גילוח Extra Protection", image: importImage('edge_extra_protection_200g.jpg'), id: 17 },
    { name: "ג'ל גילוח לעור עדין אלוורה", image: importImage('crema_sensitive_aloe_shaving_gel_200ml.jpg'), id: 17 },
    { name: "ג'ל גילוח לעור רגיל מנטול Cool", image: importImage('crema_menthol_shaving_gel_200ml.jpg'), id: 17 },
    { name: "ג'ל גילוח לכל סוגי העור מועשר בפחם פעיל", image: importImage('crema_all_skin_charcoal_shaving_gel_200ml.png'), id: 17 },
    { name: "ג'ל גילוח Sensitive", image: importImage('nivea_sensitive_shaving_gel_200ml.jpg'), id: 17 },
    { name: "ג'ל גילוח עם אלוורה Protect & Care", image: importImage('nivea_aloe_protect_care_shaving_gel_200ml.jpg'), id: 17 },
    { name: "קצף גילוח Extra Moisture", image: importImage('nivea_extra_moisture_shaving_foam_200ml.jpg'), id: 17 },
    { name: "קרם לאחר גילוח להזנת העור בתוספת ויטמין E", image: importImage('hawaii_after_shave_cream_vitamin_e_120g.jpg'), id: 17 },
    { name: "מי קולון Royal", image: importImage('royal_cologne_500ml.jpg'), id: 17 },
    { name: "קצף גילוח לעור עדין אלוורה", image: importImage('crema_sensitive_aloe_shaving_foam_200ml.jpg'), id: 17 },
    { name: "שעווה טבעית גוש לשיער הפנים", image: importImage('natural_wax_face_hair_block.jpg'), id: 17 },
    { name: "נייר לשעווה", image: importImage('wax_paper_50pcs.jpg'), id: 17 },
    { name: "הדבש שעווה לחימום במיקרוגל", image: importImage('honey_wax_microwave.jpg'), id: 17 },
    { name: "התפוח שעווה לחימום במיקרוגל", image: importImage('apple_wax_microwave.jpg'), id: 17 },
    { name: "ניירות להסרת שיער בשעווה + מקלון מריחה", image: importImage('wax_paper_hair_removal_50pcs.jpg'), id: 17 },
    { name: "שעווה קרה להסרת שיער מיוחד למיקרוגל", image: importImage('cold_wax_hair_removal_microwave.jpg'), id: 17 },
    { name: "אורנה 19 קרם להסרת שיער", image: importImage('orna19_hair_removal_cream_80g.jpg'), id: 17 },
    { name: "קרם להסרת שיער לעור רגיש", image: importImage('veet_sensitive_skin_hair_removal_cream_400ml.jpg'), id: 17 },
    { name: "קרם להסרת שיער בזמן המקלחת לעור רגיל", image: importImage('veet_regular_skin_hair_removal_cream_150ml.jpg'), id: 17 },
    { name: "רצועות שעווה מוכנות לעור יבש עם אלוורה", image: importImage('veet_dry_skin_wax_strips_aloe_vera_12pcs.png'), id: 17 },
    { name: "רצועות שעווה מוכנות לשימוש לפנים ולאזורים רגישים", image: importImage('veet_wax_strips_sensitive_areas.png'), id: 17 },
    { name: "רצועות שעווה מוכנות לשימוש לעור רגיל", image: importImage('veet_regular_skin_wax_strips.png'), id: 17 },
    { name: "קרם להסרת שיער לעור רגיל מועשר בחלב לוטוס ויסמין", image: importImage('veet_lotus_jasmine_milk_hair_removal_cream.png'), id: 17 },
    { name: "קרם להסרת שיער לגבר לשימוש במקלחת", image: importImage('veet_mens_hair_removal_cream_shower_150ml.jpg'), id: 17 },
    { name: "קרם להסרת שיער לגבר", image: importImage('veet_mens_hair_removal_cream_200ml.png'), id: 17 },
    { name: "אורנה 19 קרם להסרת שיער לנערות", image: importImage('orna19_hair_removal_cream_teen_80g.jpg'), id: 17 },
    { name: "אורנה 19 קרם להסרת שיער לעור רגיש", image: importImage('orna19_sensitive_skin_hair_removal_cream_80g.jpg'), id: 17 },
    { name: "אורנה 19 קרם להסרת שיער לקו הביקיני", image: importImage('orna19_bikini_line_hair_removal_cream_80g.jpg'), id: 17 },
    { name: "אורנה 19 קרם להסרת שיער מהפנים", image: importImage('orna19_face_hair_removal_cream_20g.jpg'), id: 17 },
    { name: "ג'ילט סירייס קצף גילוח רגיש", image: importImage('gillette_series_sensitive_shaving_foam_250ml.jpg'), id: 17 },
    { name: "מכשיר גילוח ג'ילט ונוס סווירל Extra Smooth", image: importImage('gillette_venus_swirl_extra_smooth_razor.jpg'), id: 17 },
    { name: "סכין גילוח חד פעמי לעור רגיש שיק אקזקטה 2 - 5 במארז", image: importImage('schick_exacta2_sens_disposable_5pcs.jpg'), id: 17 },
    { name: "קרמה מן ג'ל לאחר גילוח להרגעה ושמירה על עור הפנים", image: importImage('crema_men_after_shave_gel_150ml.png'), id: 17 },
    { name: "שיק היידרו 5 סנס מארז מכשיר + 7 סכיני גילוח", image: importImage('schick_hydro5_sense_razor_blades_7pcs.jpg'), id: 17 }
  ];

  const initialToothpastesmouthwash = [
    // Colgate
    { name: "זוג משחת שיניים קולגייט טוטאל הלבנה", image: importImage('toothpaste_whitening_duo.png'), id: 17 },
    { name: "משחת אופטיק וויט אקספרט קומפליט", image: importImage('toothpaste_optic_white_expert_complete.png'), id: 17 },
    { name: "משחת שיניים פסים מרעננים Cool Stripe", image: importImage('toothpaste_cool_stripe.png'), id: 17 },
    { name: "משחת שיניים אופטיק וויט Optic white", image: importImage('toothpaste_optic_white.png'), id: 17 },
    { name: "משחת שיניים אופטיק ווייט אקספרט", image: importImage('toothpaste_optic_white_expert.png'), id: 17 },
    { name: "משחת שיניים סנסיטיב מולטי פרוטקשן", image: importImage('toothpaste_sensitive_multi_protection.png'), id: 17 },
    { name: "משחת שיניים קולגייט טוטאל קלין מינט", image: importImage('toothpaste_total_clean_mint.png'), id: 17 },
    { name: "משחת שיניים אופטיק וויט Optic white", image: importImage('toothpaste_optic_white.jpg'), id: 17 },
    { name: "משחת שיניים קולגייט אופטיק וייט חימר ומינרלים", image: importImage('toothpaste_optic_white_clay_minerals.png'), id: 17 },
    { name: "משחת שיניים קולגייט לסטינג וויט", image: importImage('toothpaste_lasting_white.png'), id: 17 },
    { name: "משחת שיניים אופטיק וויט לאוהבי קפה, תה ולמעשנים", image: importImage('toothpaste_optic_white_coffee_tea_smokers.png'), id: 17 },
    { name: "משחת שיניים לילדים לגילאי 6+ בטעם פירות", image: importImage('toothpaste_kids_6_plus_fruit_flavor.png'), id: 17 },
    { name: "משחת שיניים טוטאל לגילאי 7-12", image: importImage('toothpaste_total_7_12_age.jpg'), id: 17 },
    { name: "משחת שיניים Anti Tartar", image: importImage('toothpaste_anti_tartar.jpg'), id: 17 },
    { name: "משחת שיניים קולגייט טוטאל פחם פעיל", image: importImage('toothpaste_total_active_charcoal.png'), id: 17 },
    { name: "משחת שיניים אופטיק וייט עם פחם פעיל", image: importImage('toothpaste_optic_white_active_charcoal.jpg'), id: 17 },
    { name: "משחת שיניים סמיילס לילדים בגילאי 2-5", image: importImage('toothpaste_smiles_kids_2_5_age.png'), id: 17 },
    { name: "משחת שיניים לילדים +6 בטעם פירות עדין", image: importImage('toothpaste_kids_6_plus_gentle_fruit_flavor.png'), id: 17 },
    { name: "משחת שיניים לילדים בטעם מנטה עדין לגיל +6", image: importImage('toothpaste_kids_6_plus_gentle_mint_flavor.png'), id: 17 },

    // Sensodyne
    { name: "משחת שיניים סנסודיין Dual Care להגנה כפולה", image: importImage('sensodyne_dual_care_dual_protection.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין מנטה מרענן", image: importImage('sensodyne_mint_refreshing.png'), id: 17 },
{ name: "משחת שיניים סנסודיין רפיד רליף לשיניים רגישות", image: importImage('sensodyne_rapid_relief_sensitive_teeth.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין לשיקום והגנה", image: importImage('sensodyne_repair_and_protect.webp'), id: 17 },
{ name: "משחת שיניים סנסודיין הגנה מלאה פלוס", image: importImage('sensodyne_complete_protection_plus.webp'), id: 17 },
{ name: "משחת שיניים סנסודיין פרונמל לילדים גילאי 6-12", image: importImage('sensodyne_pronamel_kids_6_12_age.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין רגישות וחניכיים", image: importImage('sensodyne_sensitivity_and_gums.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין לשיקום והגנה מלבינה", image: importImage('sensodyne_repair_and_protect_whitening.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין הלבנה עדינה", image: importImage('sensodyne_gentle_whitening.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין להלבנה עם פחם ממקור טבעי", image: importImage('sensodyne_whitening_with_natural_charcoal.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין רפיד רליף הלבנה", image: importImage('sensodyne_rapid_relief_whitening.png'), id: 17 },

// Meridol
{ name: "משחת שיניים מרידול", image: importImage('meridol_toothpaste.webp'), id: 17 },
{ name: "משחת שיניים פרודונט אקספרט", image: importImage('meridol_parodontax_expert.png'), id: 17 },

// Parodontax
{ name: "משחת שיניים פרודונטקס אורגינל", image: importImage('parodontax_original.jpg'), id: 17 },
{ name: "משחת שיניים פרודונטקס אקסטרה פרש", image: importImage('parodontax_extra_fresh.webp'), id: 17 },
{ name: "משחת שיניים פרודונטקס מלבינה", image: importImage('parodontax_whitening.jpg'), id: 17 },
{ name: "משחת שיניים פרודונטקס אולטרה קלין", image: importImage('parodontax_ultra_clean.jpg'), id: 17 },
{ name: "משחת שיניים פרודונטקס ללא פלואוריד", image: importImage('parodontax_fluoride_free.jpg'), id: 17 },
{ name: "משחת שיניים פרודונטקס הגנה מלאה והלבנה", image: importImage('parodontax_complete_protection_whitening.jpg'), id: 17 },
{ name: "משחת שיניים פרודונטקס אקסטרה פרש הגנה מלאה", image: importImage('parodontax_extra_fresh_complete_protection.jpg'), id: 17 },
{ name: "משחת שיניים בטעם צמחי ג'ינג'ר מנטה ואקליפטוס", image: importImage('parodontax_ginger_mint_eucalyptus.jpg'), id: 17 },

// Orbitol
{ name: "משחת שיניים Flouride and mint - מארז שלישיה", image: importImage('orbitol_flouride_mint_triple_pack.jpg'), id: 17 },
{ name: "משחת שיניים לילדים בטעם מיץ ענבים עם פלואוריד למניעת עששת", image: importImage('orbitol_kids_sponge_bob_grape.jpg'), id: 17 },
{ name: "משחת שיניים אורביטול - מארז שלישיה", image: importImage('orbitol_triple_pack.jpg'), id: 17 },
{ name: "משחת שיניים לילדים בטעם תות שדה Kids Mate", image: importImage('orbitol_kids_mate_strawberry.jpg'), id: 17 },
{ name: "משחת שיניים לילדים בטעם סוכריות ג'לי גילאי 2-6", image: importImage('orbitol_kids_jelly_candy_2_6_age.jpg'), id: 17 },
{ name: "משחת שיניים לרעננות מתמשכת Protect & Fresh", image: importImage('orbitol_protect_fresh.jpg'), id: 17 },

// elmex
{ name: "משחת שיניים למניעת עששת", image: importImage('elmex_cavity_protection.jpg'), id: 17 },
{ name: "משחת שיניים ג'וניור לגילאי 6-12", image: importImage('elmex_junior_6_12.jpg'), id: 17 },
{ name: "משחת שיניים לילדים בגילאי 2-6", image: importImage('elmex_kids_2_6.png'), id: 17 },

// Aquafresh
{ name: "משחת שיניים אקווה פרש מנטה", image: importImage('aquafresh_mint.png'), id: 17 },
{ name: "משחת שיניים אקווה פרש מנטה עדין", image: importImage('aquafresh_gentle_mint.png'), id: 17 },
{ name: "משחת שיניים הגנה משולשת מנטה מרענן - שלישייה", image: importImage('triple_protection_fresh_mint_trio.jpg'), id: 17 },
{ name: "משחת שיניים הגנה משולשת מנטה עדין - שלישייה", image: importImage('triple_protection_gentle_mint_trio.jpg'), id: 17 },

{ name: "משחת שיניים לילדים בטעם ענבים", image: importImage('kids_grape_flavor.jpg'), id: 17 },
{ name: "משחת שיניים לילדים בטעם מסטיק", image: importImage('kids_bubblegum_flavor.jpg'), id: 17 },

{ name: "משחת שיניים טפטפים בטעם ענבים לגיל 2-6", image: importImage('tapata_grape_flavor_2_6.jpg'), id: 17 },
{ name: "משחת שיניים סופרמן פירות מרענן לגילאי 2-6", image: importImage('superman_fresh_fruit_2_6.jpg'), id: 17 },
{ name: "משחת שיניים ברבי בטעם פירות מרענן לגיל 2-6", image: importImage('barbie_fresh_fruit_2_6.jpg'), id: 17 },
{ name: "משחת שיניים הלו קיטי בטעם ענבים לגיל 2-6", image: importImage('hello_kitty_grape_flavor_2_6.jpg'), id: 17 },
{ name: "משחת שיניים ג'וניור מנטה מעודן לגילאי 6+", image: importImage('junior_gentle_mint_6plus.jpg'), id: 17 },

{ name: "משחת שיניים מלבינה", image: importImage('whitening_toothpaste.jpg'), id: 17 },
{ name: "משחת שיניים איורודית עם פלואוריד מן הטבע", image: importImage('ayurvedic_fluoride_toothpaste.jpg'), id: 17 },

{ name: "שטיפת פה ליסטרין קול מינט בטעם מעודן", image: importImage('listerine_cool_mint.jpg'), id: 17 }, //

{ name: "משחת שיניים להגנה מושלמת", image: importImage('perfect_protection_toothpaste.jpg'), id: 17 },

{ name: "משחת שיניים 3D White להלבנה מושלמת", image: importImage('3d_white_whitening.jpg'), id: 17 },
{ name: "משחת שיניים Gum & Enamel Repair - רעננות מוגברת", image: importImage('gum_enamel_repair_fresh.jpg'), id: 17 },
{ name: "משחת שיניים Gum & Enamel Repair - להלבנה עדינה", image: importImage('gum_enamel_repair_whitening.jpg'), id: 17 },

{ name: "משחת שיניים ומי פה בתכשיר אחד", image: importImage('toothpaste_mouthwash_combination.jpg'), id: 17 }, //

{ name: "מי פה ליסטרין מנטה רענן", image: importImage('listerine_fresh_mint.jpg'), id: 17 }, //
{ name: "שטיפת פה טוטאל קר בטעם מנטה צלול", image: importImage('total_care_crisp_mint.jpg'), id: 17 }, //
{ name: "מי פה אדבנס וויט מנטה מסירה כתמים קשים", image: importImage('advance_white_tough_stains_mint.jpg'), id: 17 }, //
{ name: "ליסטרין נטורל שטיפת פה בטעם מעודן", image: importImage('listerine_natural_gentle.jpg'), id: 17 }, //
{ name: "ליסטרין שטיפת פה להגנה על החניכיים בטעם מעודן", image: importImage('listerine_gum_protection_gentle.jpg'), id: 17 }, //

{ name: "שטיפת פה דנטלית לילדים בטעם ענבים", image: importImage('kids_dental_rinse_grape.png'), id: 17 },
{ name: "מי פה שטיפה דנטלית להלבנת השיניים", image: importImage('dental_whitening_rinse.jpg'), id: 17 },
{ name: "שטיפת פה לרעננות מתמשכת מנטה עדין Protect & Fresh", image: importImage('protect_fresh_mint.png'), id: 17 },
{ name: "שטיפת פה שוקינג פרש", image: importImage('shocking_fresh_rinse.png'), id: 17 },
{ name: "אורביטול מי-פה פרוטקטיב סולט", image: importImage('protective_salt_rinse.png'), id: 17 },

//1 missing
// Colgate
{ name: "מי פה טוטאל מנטה לנשימה רעננה ו-12 שעות הגנה", image: importImage('mouthwash_total_fresh_breath_mint_12hr_protection.jpg'), id: 17 },
{ name: "מי פה טוטאל מנטה עדינה 12 שעות הגנה", image: importImage('mouthwash_total_mild_mint_12hr_protection.jpg'), id: 17 },
{ name: "מי פה קולגייט פלאקס מנטה עדין", image: importImage('mouthwash_colgate_plax_mild_mint.jpg'), id: 17 },
{ name: "מי פה Plax Multi Protection מנטה מרענן", image: importImage('mouthwash_plax_multi_protection_fresh_mint.jpg'), id: 17 },
{ name: "מי פה קולגייט אופטיק וויט Optic White", image: importImage('mouthwash_colgate_optic_white.jpg'), id: 17 },

{ name: "שטיפת פה מסייעת לטיפול ולהתחדשות חניכיים רגישות", image: importImage('mouthwash_gum_care_sensitive.png'), id: 17 },

{ name: "מי פה אקווה פרש מנטה מרענן", image: importImage('mouthwash_aquafresh_refreshing_mint.png'), id: 17 },
{ name: "מי פה עם פלואוריד תיאדנט", image: importImage('mouthwash_fluoride_tayadent.jpg'), id: 17 },
{ name: "מי פה פרו אקספרט להגנה מקצועית", image: importImage('mouthwash_pro_expert_professional_protection.png'), id: 17 },
{ name: "מי פה להלבנה 3D White", image: importImage('mouthwash_3d_white_whitening.png'), id: 17 },
{ name: "שטיפת פה להגנה מפני עששת", image: importImage('mouthwash_cavity_protection.png'), id: 17 },
{ name: "שטיפת פה לשיניים רגישות", image: importImage('mouthwash_sensitive_teeth.jpg'), id: 17 },
{ name: "מי פה סנסודיין להקלה על רגישות בטעם מנטה", image: importImage('mouthwash_sensodyne_mint_sensitive.jpg'), id: 17 },
{ name: "מי פה פרודונטקס ללא אלכוהול בטעם מנטה עדין", image: importImage('mouthwash_parodontax_mild_mint_no_alcohol.png'), id: 17 },
{ name: "זוג קולגייט משחת שיניים הגנה מקסימלית", image: importImage('colgate_max_protection_toothpaste_duo.png'), id: 17 },
{ name: "זוג קולגייט משחת שיניים טוטל קלין מינט", image: importImage('colgate_total_clean_mint_toothpaste_duo.jpg'), id: 17 },
{ name: "מארז זוג משחת שיניים מרידול", image: importImage('meridol_toothpaste_duo_pack.png'), id: 17 },
{ name: "מי פה קולגייט טוטאל הגנה מפני אבן שן", image: importImage('mouthwash_colgate_total_tartar_protection.jpg'), id: 17 },
{ name: "מרידול משחת שיניים להלבנה", image: importImage('meridol_whitening_toothpaste.png'), id: 17 },
{ name: "משחת שיניים אורביטול פרוטקטיב סולט בטעם מנטה", image: importImage('orbitol_protective_salt_mint_toothpaste.jpg'), id: 17 },
{ name: "משחת שיניים להלבנה עמוקה אופטיק וויט אוקסיג'ן", image: importImage('optic_white_oxygen_deep_whitening_toothpaste.png'), id: 17 },
{ name: "משחת שיניים לילדים קולגייט ברבי", image: importImage('colgate_barbie_kids_toothpaste.png'), id: 17 },
{ name: "משחת שיניים לילדים קולגייט מיניונים", image: importImage('colgate_minions_kids_toothpaste.png'), id: 17 },
{ name: "משחת שיניים מלבינה + מברשת וקיסמים", image: importImage('white_glo_whitening_toothpaste_brush_picks.jpg'), id: 17 },
{ name: "משחת שיניים מלבינה בטעם מנטה + מברשת שיניים", image: importImage('white_glo_whitening_mint_toothpaste_brush.jpg'), id: 17 },
{ name: "משחת שיניים מלבינה להסרת כתמי קפה ותה + מברשת", image: importImage('white_glo_whitening_coffee_tea_stain_removal_toothpaste_brush.jpg'), id: 17 },
{ name: "משחת שיניים מלבינה להסרת כתמים ופלאק +מברשת", image: importImage('white_glo_whitening_stain_plaque_removal_toothpaste_brush.jpg'), id: 17 },
{ name: "משחת שיניים מלבינה למניעת ריח פה + מברשת", image: importImage('white_glo_whitening_bad_breath_prevention_toothpaste_brush.jpg'), id: 17 },
{ name: "משחת שיניים מלבינה מכיל פחם פעיל + מברשת", image: importImage('white_glo_whitening_activated_charcoal_toothpaste_brush.jpg'), id: 17 },
{ name: "משחת שיניים סנסודיין מלבינה רגישות וחניכיים", image: importImage('sensodyne_whitening_sensitive_gums_toothpaste.jpg'), id: 17 },

{ name: "משחת שיניים קולגייט טוטל ג'ל לניקוי מרענן", image: importImage('colgate_total_gel_refreshing_clean_toothpaste.png'), id: 17 },
{ name: "משחת שיניים קולגייט טוטל סנסטיב לשיניים רגישות", image: importImage('colgate_total_sensitive_teeth_toothpaste.png'), id: 17 },
{ name: "משחת שיניים קולגייט להלבנה Advanced White", image: importImage('colgate_advanced_white_whitening_toothpaste.png'), id: 17 },
{ name: "משחת שיניים קולגייט מקס וויט", image: importImage('colgate_max_white_toothpaste.png'), id: 17 },
{ name: "משחת שיניים קולגייט מקס פרש למימד חדש של רעננות", image: importImage('colgate_max_fresh_toothpaste.png'), id: 17 },
{ name: "משחת שיניים קולגייט פסים מרעננים Fresh Stripe", image: importImage('colgate_fresh_stripe_toothpaste.png'), id: 17 },

{ name: "שטיפת פה אורביטול לילדים בטעם פירות אורביטול +8", image: importImage('orbitol_kids_8_mouthwash_fruit_flavor.jpg'), id: 17 },
  ];
  const initialToothbrushesdentalaccessories = [
    { name: "מברשת שיניים חשמלית נטענת", image: importImage('electric_toothbrush_advanced_power.png'), id: 17 },
    { name: "מברשת שיניים חשמלית נטענת לילדים", image: importImage('kids_electric_toothbrush_frozen_d100.png'), id: 17 },
    { name: "מברשת שיניים לילדים אקסטרא סופט 0-2", image: importImage('kids_toothbrush_extra_soft_0_2.jpg'), id: 17 },
    { name: "מארז מברשות שיניים סופט", image: importImage('soft_toothbrush_pack_orbitol.png'), id: 17 },
    { name: "מארז מברשות שיניים לילדים 2-8", image: importImage('kids_toothbrush_pack_2_8.png'), id: 17 },
    { name: "מברשת שיניים סיבים רכים", image: importImage('soft_foam_toothbrush.png'), id: 17 },
    { name: "מברשת שיניים פלקסי פחם", image: importImage('flexi_charcoal_brush.png'), id: 17 },
    { name: "מברשת שיניים אקסטרה קלין", image: importImage('extra_clean_medium_pack_of_4.png'), id: 17 },
    { name: "מברשת שיניים 360", image: importImage('360_sensitive_extra_soft_pair.png'), id: 17 },
    { name: "מברשת שיניים לילדים 0-2", image: importImage('kids_toothbrush_stage_1_0_2.png'), id: 17 },
    { name: "מברשת שיניים לילדים 3-5", image: importImage('kids_toothbrush_stage_2_3_5.png'), id: 17 },
    { name: "מברשת שיניים לילדים 6-9", image: importImage('kids_toothbrush_6_9_soft.png'), id: 17 },
    { name: "מברשת שיניים רגישות וחניכיים", image: importImage('sensodyne_sensitive_gums_brush.png'), id: 17 },
    { name: "חוט דנטלי", image: importImage('oral_b_satin_floss.png'), id: 17 },
    { name: "חוט דנטלי ללא שעווה", image: importImage('oral_b_unwaxed_floss.png'), id: 17 },
    { name: "קיסמי שיניים מבקבוק", image: importImage('hostess_toothpicks_bottle.png'), id: 17 },
    { name: "קיסמי שיניים דנטליים פלסטיק", image: importImage('hostess_dental_toothpicks.png'), id: 17 },
    { name: "ראשי מברשת חשמלית", image: importImage('orbitol_pro_active_black_heads.png'), id: 17 },
  ];
  const initialCosmeticsfacialcare = [
    { name: "וזלין מיני לשפתיים ורוד עדין", image: importImage('vaseline_pink_mini_lips.jpg'), id: 17 },
    { name: "תרחיץ פנים לכל סוגי העור", image: importImage('face_wash_all_skin_types.jpg'), id: 17 },
    { name: "תרחיץ פנים סנסיטיב לעור רגיש", image: importImage('face_wash_sensitive_skin.jpg'), id: 17 },
    { name: "תרחיץ פנים לכל סוגי העור עם 25% קרם לחות", image: importImage('face_wash_moisturizing_all_skin_types.jpg'), id: 17 },
    { name: "תרחיץ פנים לעור רגיש עם 25% קרם לחות", image: importImage('face_wash_moisturizing_sensitive_skin.jpg'), id: 17 },
    { name: "תרחיץ פנים בניחוח מלפפון ותה ירוק", image: importImage('face_wash_cucumber_green_tea.jpg'), id: 17 },
    { name: "תחליב רחצה לפנים", image: importImage('facial_cleansing_lotion.webp'), id: 17 },
    { name: "ג'ל רחצה לפנים אשכולית אדומה", image: importImage('facial_wash_red_grapefruit.jpg'), id: 17 },
    { name: "תחליב רחצה לפנים פילינג", image: importImage('facial_cleansing_lotion_peeling.jpg'), id: 17 },
    { name: "מסיר איפור עדין לעיניים ולשפתיים", image: importImage('gentle_makeup_remover.jpg'), id: 17 },
    { name: "קרם יום עם פעולה משולשת לעור רגיל ומעורב", image: importImage('triple_action_day_cream.jpg'), id: 17 },
    { name: "קרם יום עם פעולה משולשת לעור יבש ועדין", image: importImage('triple_action_day_cream_dry_skin.jpeg'), id: 17 },
    { name: "קרם פנים לילה עם פעולה משולשת", image: importImage('triple_action_night_cream.webp'), id: 17 },
    { name: "קרם אנטי-אייג'ינג יום אייג' ספשיאליסט +45", image: importImage('anti_aging_day_cream_45.jpg'), id: 17 },
    { name: "קרם אנטי-אייג'ינג לילה אייג' ספשיאליסט +45", image: importImage('anti_aging_night_cream_45.jpg'), id: 17 },
    { name: "מטליות לחות להסרת איפור - 54 יח'", image: importImage('makeup_removal_wipes_54.jpg'), id: 17 },
    { name: "קרם אנטי-אייג'ינג יום אייג' ספשיאליסט +55", image: importImage('anti_aging_day_cream_55.png'), id: 17 },
    { name: "קרם אנטי-אייג'ינג לילה אייג' ספשיאליסט +55", image: importImage('anti_aging_night_cream_55.png'), id: 17 },
    { name: "קרם ג'ל עם פעולה משולשת", image: importImage('triple_action_gel_cream.jpg'), id: 17 },
    { name: "ג'ל ניקוי פנים בניחוח מאסק", image: importImage('face_cleaning_gel_musk.png'), id: 17 },
    { name: "פילינג עדין לפנים בניחוח מאסק", image: importImage('gentle_facial_peeling_musk.png'), id: 17 },
    { name: "מגבוני הסרת איפור לעור רגיש - מארז שלישיה", image: importImage('makeup_removal_wipes_sensitive_skin_3pack.jpg'), id: 17 },
    { name: "מגבוני הסרת איפור לעור רגיל - יבש - מארז שלישיה", image: importImage('makeup_removal_wipes_normal_dry_skin_3pack.jpg'), id: 17 },
    { name: "מגבוני הסרת איפור לעור שמן / מעורב - מארז שלישיה", image: importImage('makeup_removal_wipes_oily_skin_3pack.jpg'), id: 17 },
    { name: "מגבוני פחם שחורים להסרת איפור", image: importImage('black_charcoal_makeup_removal_wipes.png'), id: 17 },
    { name: "קרם יום במרקם קליל ומרענן לעור רגיל", image: importImage('light_refreshing_day_cream_spf15.webp'), id: 17 },
    { name: "מגבונים לניקוי הפנים והסרת איפור - 25 יח'", image: importImage('facial_cleaning_makeup_removal_wipes_25.gif'), id: 17 },
    { name: "ג'ל לגבות ולקצוות, אחיזה 6", image: importImage('eyebrow_edge_gel_hold6.jpg'), id: 17 },
    { name: "קרם לילה Multi Effect", image: importImage('multi_effect_night_cream.webp'), id: 17 },
    { name: "קרמה ג'ל ניקוי לפנים לכל סוגי העור", image: importImage('crema_face_cleaning_gel_all_skin_types.jpg'), id: 17 },
    { name: "קרמה ג'ל פילינג לפנים לעור מעורב ושמן", image: importImage('crema_face_peeling_gel_oily_skin.jpg'), id: 17 },
    { name: "קרמה מן תרחיץ ג'ל לפנים לניקוי העור וריכוך הזיפים", image: importImage('crema_men_face_cleaning_gel.jpg'), id: 17 },
    { name: "קרמה תרחיץ ניקוי לפנים לכל סוגי העור", image: importImage('crema_face_cleaning_lotion_all_skin_types.jpg'), id: 17 }
  ];
  const initialHaircarestyling = [
    { name: "קרם לחות לשיער חוחבה", image: importImage('natural_formula_jojoba.png'), id: 17 },
    { name: "קרם לחות לשיער סיליקון", image: importImage('natural_formula_silicon.png'), id: 17 },
    { name: "קרם לחות לשיער אלוורה", image: importImage('natural_formula_aloe_vera.png'), id: 17 },
    { name: "קרם לחות מזינה עם שמן ארגן מרוקאי", image: importImage('natural_formula_argan.png'), id: 17 },
    { name: "קרם לחות עם שמן אגוז מקדמיה", image: importImage('natural_formula_macadamia.png'), id: 17 },
    { name: "לחות על בסיס מים", image: importImage('natural_formula_light_moisture.png'), id: 17 },
    { name: "קרם לחות לשיער חלק", image: importImage('natural_formula_smooth.png'), id: 17 },
    { name: "סרום אמפולה לשיער יבש", image: importImage('natural_formula_ampoule_serum.png'), id: 17 },
    { name: "סרום קרטין לשיער", image: importImage('natural_formula_keratin_serum.png'), id: 17 },
    { name: "קרם לחות לשיער מתולתל", image: importImage('careline_curl_cream.png'), id: 17 },
    { name: "קרם לחות לשיער רגיל", image: importImage('careline_normal_hair_cream.png'), id: 17 },
    { name: "קרם לחות לשיער יבש", image: importImage('careline_dry_hair_cream.png'), id: 17 },
    { name: "קרם לחות לגבר", image: importImage('crema_men_moisturizer.png'), id: 17 },
    { name: "ג'ל לעיצוב שיער", image: importImage('kef_extreme_hair_gel.png'), id: 17 },
    { name: "ווקס", image: importImage('natural_formula_strong_shine_wax.png'), id: 17 },
    { name: "מסכת קרטין", image: importImage('natural_formula_pure_keratin_mask.png'), id: 17 },
    { name: "קרם חמצן 6%", image: importImage('indola_oxygen_cream_6.png'), id: 17 },
    { name: "קרם חמצן 9%", image: importImage('indola_oxygen_cream_9.png'), id: 17 },
    ];

  const initialFemininehygieneabsorbentproducts = [
    { name: "מגיני תחתון יאנג", image: importImage('kotex_young_normal.png'), id: 17 },
    { name: "מגיני תחתון נורמל", image: importImage('kotex_daily_normal.png'), id: 17 },
    { name: "מגני תחתון פלוס לארג׳", image: importImage('carefree_plus_large.png'), id: 17 },
    { name: "מגני תחתון אלוורה", image: importImage('carefree_airy_aloe.png'), id: 17 },
    { name: "מגני תחתון מקסי לונג", image: importImage('carefree_maxi_long_perfumed.png'), id: 17 },
    { name: "תחבושות לילה", image: importImage('always_maxi_thick_night.png'), id: 17 },
    { name: "תחבושות נורמל", image: importImage('kotex_wings_normal.png'), id: 17 },
    { name: "תחבושות סופר", image: importImage('kotex_wings_super.png'), id: 17 },
    { name: "תחבושות יאנג", image: importImage('kotex_wings_young.png'), id: 17 },
    { name: "תרחיץ ג'ל לשטיפה אינטימית", image: importImage('crema_intimate_wash.png'), id: 17 },
    { name: "תחבושות לבריחת שתן סופר", image: importImage('depend_super.png'), id: 17 },
    { name: "תחבושות לבריחת שתן נורמל", image: importImage('depend_normal.png'), id: 17 },
    { name: "טמפונים עם מוליך נורמל", image: importImage('kotex_normal.png'), id: 17 },
    { name: "טמפונים עם מוליך סופר", image: importImage('kotex_super.png'), id: 17 },
    { name: "טמפונים עם מוליך מיני", image: importImage('kotex_mini.png'), id: 17 },
    { name: "טמפונים מיני ללא מוליך", image: importImage('kotex_mini_pack.jpg'), id: 17 },
    { name: "תחליב רחצה אינטימי קלאסיק", image: importImage('femina_classic.png'), id: 17 },
    { name: "תחליב רחצה אינטימי אלוורה", image: importImage('femina_aloe.png'), id: 17 },
    { name: "תחליב רחצה אינטימי חמוציות", image: importImage('femina_cranberry.png'), id: 17 },
  { name: "תחליב רחצה אינטימי לנערות", image: importImage('femina_teens.png'), id: 17 },
  { name: "תחליב רחצה אינטימי קוקוס", image: importImage('femina_coconut.png'), id: 17 },
  { name: "מוס לשטיפה אינטימית יומיומית מכיל תה ירוק", image: importImage('carefree_green_tea_aloe.png'), id: 17 },
  { name: "שטיפה אינטימית יומיומית מכיל תה ירוק ואלוורה", image: importImage('carefree_green_tea_aloe_wash.png'), id: 17 },
  ];

  const initialCareaccessories = [
  { name: "צימרוני עץ", image: importImage('wooden_cotton_swabs.png'), id: 17 },
  { name: "צמרוני פלסטיק", image: importImage('plastic_cotton_swabs_500.png'), id: 17 },
  { name: "מקלוני כותנה", image: importImage('cotton_sticks.png'), id: 17 },
  { name: "פסי צמר גפן", image: importImage('cotton_strips.png'), id: 17 },
  { name: "צמר גפן", image: importImage('cotton_clouds.png'), id: 17 },
  { name: "פדים להסרת איפור", image: importImage('makeup_removal_pads.png'), id: 17 },
  { name: "ספוג רחצה'", image: importImage('saki_massage_sponge.png'), id: 17 },
  { name: "אצטון", image: importImage('acetone.png'), id: 17 },
  { name: "מסיר לק", image: importImage('fragrant_nail_polish_remover.png'), id: 17 },
  { name: "כובע רחצה", image: importImage('shower_cap.png'), id: 17 }, 
 ];

  const initialBodycare = [
    { name: "ג'ל אלוורה", image: importImage('aloe_vera_gel.png'), id: 17 },
    { name: "קרם ידיים לעור יבש ", image: importImage('dr_fischer_intensive_hand_cream.png'), id: 17 },
    { name: "קרם גוף מועשר בשמן אבוקדו", image: importImage('dr_fischer_body_cream_avocado.png'), id: 17 },
    { name: "קרם גוף לגבר", image: importImage('vaseline_mens_body_cream.png'), id: 17 },
    { name: "תחליב גוף להזנה עמוקה", image: importImage('vaseline_body_lotion.png'), id: 17 },
    { name: "קרם גוף אלוורה", image: importImage('vaseline_aloe_body_cream.png'), id: 17 },
    { name: "קרם גוף קרמה לבנדר אקליפטוס", image: importImage('crema_lavender_body_cream.png'), id: 17 },
    { name: "קרם גוף מאסק", image: importImage('crema_musk_body_cream.png'), id: 17 },
    { name: "קרם גוף קלאסי", image: importImage('crema_classic_body_cream.png'), id: 17 },
    { name: "קרם ידיים שיאה קוקוי", image: importImage('crema_shea_kukui_hand_cream.png'), id: 17 },
    { name: "קרם ידיים ורד וניל", image: importImage('crema_rose_vanilla_hand_cream.png'), id: 17 },
  ];
  const initialFirstaid = [
    { name: "אלכוג'ל לשמירה על הייגיינת הידיים", image: importImage('alcohol_gel_hand_hygiene.jpeg'), id: 17 },
    { name: "פלסטרים בגדלים ובצורות שונות", image: importImage('plasters_various_sizes_shapes.jpg'), id: 17 },
    { name: "ג'ל לניקוי ידיים ללא מים - אלוורה", image: importImage('hand_cleaning_gel_aloe_vera.jpg'), id: 17 },
    { name: "פלסטר עמיד במים מעורב", image: importImage('waterproof_plasters_mixed.jpg'), id: 17 },
    { name: "פלסטרים שקופים", image: importImage('transparent_plasters.jpg'), id: 17 },
    { name: "אלכוהול 70%", image: importImage('alcohol_70_percent.webp'), id: 17 },
    { name: "מגבונים היגיינים לידיים", image: importImage('hygienic_wipes_for_hands.png'), id: 17 },
    { name: "אסלונית כיסוי מגן לאסלה", image: importImage('toilet_seat_cover.jpg'), id: 17 },
    { name: "אלכו-ג'ל H - ג'ל לשמירה על היגיינת הידיים", image: importImage('alcohol_gel_h_hand_hygiene.jpg'), id: 17 },
    { name: "פלסטר נקסקר דואו רחב", image: importImage('nexcare_duo_wide_plaster.jpg'), id: 17 },
    { name: "פלסטרים נקסקר אקטיב בשלושה גדלים", image: importImage('nexcare_active_plasters_three_sizes.jpg'), id: 17 },
    { name: "פלסטרים נקסקר בשני גדלים happy kids ורוד", image: importImage('nexcare_happy_kids_pink.jpg'), id: 17 },
    { name: "פלסטרים נקסקר בשני גדלים happy kids חיות", image: importImage('nexcare_happy_kids_animals.jpg'), id: 17 },
    { name: "פלסטרים נקסקר בשני גדלים happy kids כחול", image: importImage('nexcare_happy_kids_blue.jpg'), id: 17 },
    { name: "פלסטרים נקסקר בשני גדלים happy kids מפלצות", image: importImage('nexcare_happy_kids_monsters.jpg'), id: 17 },
    { name: "פלסטרים נקסקר דואו שלושה גדלים", image: importImage('nexcare_duo_plasters_three_sizes.jpg'), id: 17 },
    { name: "פלסטרים נקסקר דואו שני גדלים", image: importImage('nexcare_duo_plasters_two_sizes.jpg'), id: 17 },
    { name: "מטליות לניקוי משקפיים", image: importImage('glasses_cleaning_wipes.png'), id: 17 },
    { name: "סנו די kids דוחה יתושים עם קמומיל", image: importImage('sano_kids_mosquito_repel_kamomil.jpg'), id: 17 }

  ];
  // const initialVitaminsnutritionalsupplements = [
  //   { name: "בנפייבר סיבים תזונתיים אבקת דקסטרין חיטה", image: importImage('benefiber_dietary_fiber_wheat_dextrin_powder.jpeg') },
  // ];
  // const initialAirperfume = [
  //   { name: "מבשם אוויר אריגים וארונות בניחוח מאסק", image: importImage('musk-scented_fabric_and_closet_air_freshener.jpeg') },
  // ];
  const initialCandlesmatches = [
    { name: "נר נשמה 26 שעות", image: importImage('ner_neshama_26_hours.jpg'), id: 17 },
    { name: "נר נשמה 48 שעות", image: importImage('ner_neshama_48_hours.jpg'), id: 17 },
    { name: "נר נשמה 72 שעות", image: importImage('ner_neshama_72_hours.jpg'), id: 17 },

    { name: "נר נשמה 7 ימים", image: importImage('ner_neshama_7_days.jpg'), id: 17 },
    { name: "נרות שבת", image: importImage('shabbat_candles.jpg'), id: 17 },
    { name: "נרות חימום", image: importImage('heating_candles.jpg'), id: 17 },
    { name: "נריות לכוסיות", image: importImage('candles_for_cups.jpg'), id: 17 },
    { name: "נר הבדלה", image: importImage('havdalah_candle.jpg'), id: 17 },
    { name: "גפרורים", image: importImage('matches_pack.png'), id: 17 },
    { name: "גפרור ארוך", image: importImage('long_matches.png'), id: 17 },
    { name: "גפרורי בטיחות - גפרורים ארוכים", image: importImage('safety_long_matches.png'), id: 17 },
    { name: "מגן פמוט", image: importImage('candle_holder_protector.jpg'), id: 17 },
    { name: "נרות", image: importImage('candles.jpg'), id: 17 },
    { name: "נרות במעטפת מתכתית", image: importImage('candles_metal_wrap.png'), id: 17 }

  ];
  const initialDiaperswipes = [
    { name: "חיתול מידה 1", image: importImage('huggies_extra_care_stage_1.png'), id: 17 },
    { name: "חיתול מידה 2", image: importImage('huggies_extra_care_size_2.png'), id: 17 },
    { name: "חיתול מידה 3", image: importImage('huggies_extra_care_size_3.png'), id: 17 },
    { name: "חיתול מידה 4", image: importImage('huggies_extra_care_size_4.png'), id: 17 },
    { name: "חיתול מידה 5", image: importImage('huggies_extra_care_size_5.png'), id: 17 },
    { name: "משטח החתלה", image: importImage('huggies_changing_pads.png'), id: 17 },
    { name: "מגבונים לחים לתינוק בניחוח עדין", image: importImage('perfect_baby_wipes_scented_4pack.png'), id: 17 },
    { name: "מגבונים לחים לתינוק ללא בישום", image: importImage('perfect_baby_wipes_unscented_4pack.png'), id: 17 },
    { name: "מגבוני פנים לתינוק", image: importImage('kamil_blue_sensitive_face_wipes.png'), id: 17 },
    { name: "מגבונים לניקוי אף", image: importImage('kamil_blue_nose_wipes_trio.png'), id: 17 },
  ];

  initialShavingpreparationsaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCosmeticsfacialcare.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFirstaid.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDeodorantforwomen.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDeodorantformen.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialToothbrushesdentalaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialHaircarestyling.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFemininehygieneabsorbentproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialCareaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialBodycare.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDiaperswipes.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [shampoo, setShampoo] = useState<{ name: string; image: string | null; count: number }[]>(
    initialShampoo.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [conditioner, setConditioner] = useState<{ name: string; image: string | null; count: number }[]>(
    initialConditioner.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [bathsoap, setBathsoap] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBathsoap.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [deodorantforwomen, setDeodorantforwomen] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDeodorantforwomen.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [deodorantformen, setDeodorantformen] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDeodorantformen.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [sunprotection, setSunprotection] = useState<{ name: string; image: string | null; count: number }[]>(
    initialSunprotection.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [shavingpreparationsaccessories, setShavingpreparationsaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
    initialShavingpreparationsaccessories.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [toothpastesmouthwash, setToothpastesmouthwash] = useState<{ name: string; image: string | null; count: number }[]>(
    initialToothpastesmouthwash.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [toothbrushesdentalaccessories, setToothbrushesdentalaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
    initialToothbrushesdentalaccessories.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [cosmeticsfacialcare, setCosmeticsfacialcare] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCosmeticsfacialcare.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [haircarestyling, setHaircarestyling] = useState<{ name: string; image: string | null; count: number }[]>(
    initialHaircarestyling.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [femininehygieneabsorbentproducts, setFemininehygieneabsorbentproducts] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFemininehygieneabsorbentproducts.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [careaccessories, setCareaccessories] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCareaccessories.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [bodycare, setBodycare] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBodycare.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [firstaid, setFirstaid] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFirstaid.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  // const [vitaminsnutritionalsupplements, setVitaminsnutritionalsupplements] = useState<{ name: string; image: string | null; count: number }[]>(
  //   initialVitaminsnutritionalsupplements.map(item => {
  //     const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
  //     return {
  //       ...item,
  //       count: basketItem ? basketItem.quantity : 0,
  //     };
  //   })
  // );

  // const [airperfume, setAirperfume] = useState<{ name: string; image: string | null; count: number }[]>(
  //   initialAirperfume.map(item => {
  //     const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
  //     return {
  //       ...item,
  //       count: basketItem ? basketItem.quantity : 0,
  //     };
  //   })
  // );

  const [candlesmatches, setCandlesmatches] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCandlesmatches.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  const [diaperswipes, setDiaperswipes] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDiaperswipes.map(item => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
      return {
        ...item,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );

  useEffect(() => {
    handleSave();
  }, [shampoo, conditioner, bathsoap, deodorantforwomen, deodorantformen, sunprotection, shavingpreparationsaccessories, toothpastesmouthwash, toothbrushesdentalaccessories, cosmeticsfacialcare, haircarestyling, femininehygieneabsorbentproducts, careaccessories, bodycare, firstaid, candlesmatches,diaperswipes]);

  const handleIncrement = (name: string) => {
    setShampoo(shampoo.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setConditioner(conditioner.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBathsoap(bathsoap.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDeodorantforwomen(deodorantforwomen.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDeodorantformen(deodorantformen.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setSunprotection(sunprotection.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setShavingpreparationsaccessories(shavingpreparationsaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setToothpastesmouthwash(toothpastesmouthwash.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setToothbrushesdentalaccessories(toothbrushesdentalaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCosmeticsfacialcare(cosmeticsfacialcare.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setHaircarestyling(haircarestyling.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFemininehygieneabsorbentproducts(femininehygieneabsorbentproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCareaccessories(careaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBodycare(bodycare.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFirstaid(firstaid.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    // setVitaminsnutritionalsupplements(vitaminsnutritionalsupplements.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    // setAirperfume(airperfume.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCandlesmatches(candlesmatches.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDiaperswipes(diaperswipes.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
  };

  const handleDecrement = (name: string) => {
    setShampoo(shampoo.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setConditioner(conditioner.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setBathsoap(bathsoap.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setDeodorantforwomen(deodorantforwomen.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setDeodorantformen(deodorantformen.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setSunprotection(sunprotection.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setShavingpreparationsaccessories(shavingpreparationsaccessories.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setToothpastesmouthwash(toothpastesmouthwash.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setToothbrushesdentalaccessories(toothbrushesdentalaccessories.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setCosmeticsfacialcare(cosmeticsfacialcare.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setHaircarestyling(haircarestyling.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setFemininehygieneabsorbentproducts(femininehygieneabsorbentproducts.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setCareaccessories(careaccessories.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setBodycare(bodycare.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setFirstaid(firstaid.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    // setVitaminsnutritionalsupplements(vitaminsnutritionalsupplements.map(item => {
    //   if (item.name === name && item.count > 0) {
    //     const newCount = item.count - 1;
    //     if (newCount === 0) {
    //       removeProduct(item.name);
    //     }
    //     return { ...item, count: newCount };
    //   }
    //   return item;
    // }));

    // setAirperfume(airperfume.map(item => {
    //   if (item.name === name && item.count > 0) {
    //     const newCount = item.count - 1;
    //     if (newCount === 0) {
    //       removeProduct(item.name);
    //     }
    //     return { ...item, count: newCount };
    //   }
    //   return item;
    // }));

    setCandlesmatches(candlesmatches.map(item => {
      if (item.name === name && item.count > 0) {
        const newCount = item.count - 1;
        if (newCount === 0) {
          removeProduct(item.name);
        }
        return { ...item, count: newCount };
      }
      return item;
    }));

    setDiaperswipes(diaperswipes.map(item => {
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

  const handleSave = () => {
    const allItems = [
      ...shampoo,
      ...conditioner,
      ...bathsoap,
      ...deodorantforwomen,
      ...deodorantformen,
      ...sunprotection,
      ...shavingpreparationsaccessories,
      ...toothpastesmouthwash,
      ...toothbrushesdentalaccessories,
      ...cosmeticsfacialcare,
      ...haircarestyling,
      ...femininehygieneabsorbentproducts,
      ...careaccessories,
      ...bodycare,
      ...firstaid,
      // ...vitaminsnutritionalsupplements,
      // ...airperfume,
      ...candlesmatches,
      ...diaperswipes,
    ];

    const itemsToSave = allItems.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    itemsToSave.forEach(item => addProduct(item));
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filterBathsoap = bathsoap.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterShampoo = shampoo.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterConditioner = conditioner.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterDeodorantforwomen = deodorantforwomen.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterDeodorantformen = deodorantformen.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterSunprotection = sunprotection.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterShavingpreparationsaccessories = shavingpreparationsaccessories.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterToothpastesmouthwash = toothpastesmouthwash.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterToothbrushesdentalaccessories = toothbrushesdentalaccessories.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterCosmeticsfacialcare = cosmeticsfacialcare.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterHaircarestyling = haircarestyling.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterFemininehygieneabsorbentproducts = femininehygieneabsorbentproducts.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterCareaccessories = careaccessories.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterBodycare = bodycare.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterFirstaid = firstaid.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterCandlesmatches = candlesmatches.filter(product =>
    product.name.includes(searchTerm)
  );

  const filterDiaperswipes = diaperswipes.filter(product =>
    product.name.includes(searchTerm)
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
        placeholder="חפש מוצר פארם/תינוקות"
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

</div> 
<div>
{filterBathsoap.length > 0 && (
       <ProductsPage
       products={filterBathsoap}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>סבוני רחצה</span>
           <img 
             src={importImage('soap_bottle_icon.png')} 
             alt="" 
             style={{ width: '50px', height: '50px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>

  <div>
{filterShampoo.length > 0 && (
       <ProductsPage
       products={filterShampoo}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>שמפו</span>
           <img 
             src={importImage('shampoo_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '50px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterConditioner.length > 0 && (
         <ProductsPage
         products={filterConditioner}
         categoryTitle={
           <div style={{ display: 'flex', alignItems: 'center' }}>
             <span style={{ verticalAlign: 'middle' }}>מרכך</span>
             <img 
               src={importImage('conditioner_icon.png')} 
               alt="" 
               style={{ width: '20px', height: '40px', marginLeft: '5px', verticalAlign: 'middle' }} 
             />
           </div>
         }
         icon={null}
         onIncrement={handleIncrement}
         onDecrement={handleDecrement}
         onSave={handleSave}
       />
)}
  </div>
  <div>
{filterDeodorantforwomen.length > 0 && (
      <ProductsPage
      products={filterDeodorantforwomen}
      categoryTitle={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ verticalAlign: 'middle' }}>דאודורנט לנשים</span>
          <img 
            src={importImage('deodorantforwomen_icon.png')} 
            alt="" 
            style={{ width: '40px', height: '40px', marginLeft: '5px', verticalAlign: 'middle' }} 
          />
        </div>
      }
      icon={null}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
)}
  </div>
  <div>
{filterDeodorantformen.length > 0 && (
       <ProductsPage
       products={filterDeodorantformen}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>דאודורנט לגברים</span>
           <img 
             src={importImage('deodorantformen_green_icon.png')} 
             alt="" 
             style={{ width: '40px', height: '40px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterSunprotection.length > 0 && (
       <ProductsPage
       products={filterSunprotection}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>הגנה מהשמש</span>
           <img 
             src={importImage('sunprotection_icon.webp')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterShavingpreparationsaccessories.length > 0 && (
       <ProductsPage
       products={filterShavingpreparationsaccessories}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>אביזרי גילוח והסרת שיער</span>
           <img 
             src={importImage('shaving_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterToothpastesmouthwash.length > 0 && (
       <ProductsPage
       products={filterToothpastesmouthwash}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>משחות שיניים ומי פה</span>
           <img 
             src={importImage('toothpastesmouthwash_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterToothbrushesdentalaccessories.length > 0 && (
       <ProductsPage
       products={filterToothbrushesdentalaccessories}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>מברשות שיניים ואביזרי שיניים</span>
           <img 
             src={importImage('toothbrushesdentalaccessories_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterCosmeticsfacialcare.length > 0 && (
       <ProductsPage
       products={filterCosmeticsfacialcare}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>קוסמטיקה וטיפוח הפנים</span>
           <img 
             src={importImage('facial_skincare_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterHaircarestyling.length > 0 && (
       <ProductsPage
       products={filterHaircarestyling}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>טיפוח ועיצוב השיער</span>
           <img 
             src={importImage('hair_care_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterFemininehygieneabsorbentproducts.length > 0 && (
       <ProductsPage
       products={filterFemininehygieneabsorbentproducts}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>היגיינה נשית ומוצרי ספיגה</span>
           <img 
             src={importImage('feminine_hygiene_products_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterCareaccessories.length > 0 && (
       <ProductsPage
       products={filterCareaccessories}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>אביזרי טיפוח</span>
           <img 
             src={importImage('careaccessories_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterBodycare.length > 0 && (
       <ProductsPage
       products={filterBodycare}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>טיפוח הגוף</span>
           <img 
             src={importImage('bodycare_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterFirstaid.length > 0 && (
       <ProductsPage
       products={filterFirstaid}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>עזרה ראשונה</span>
           <img 
             src={importImage('firstaid_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterCandlesmatches.length > 0 && (
       <ProductsPage
       products={filterCandlesmatches}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>נרות, תואמי הדלקה וגפרורים</span>
           <img 
             src={importImage('candle_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>
  <div>
{filterDiaperswipes.length > 0 && (
       <ProductsPage
       products={filterDiaperswipes}
       categoryTitle={
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <span style={{ verticalAlign: 'middle' }}>חיתולים ומגבונים</span>
           <img 
             src={importImage('diapers_icon.png')} 
             alt="" 
             style={{ width: '60px', height: '60px', marginLeft: '5px', verticalAlign: 'middle' }} 
           />
         </div>
       }
       icon={null}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
       onSave={handleSave}
     />
)}
  </div>

    </div>
  );
};

  // return (
  //   <div>

  //     {/* <ProductsPage
  //       products={vitaminsnutritionalsupplements}
  //       categoryTitle={
  //         <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '17px' }}>
  //           <span style={{ verticalAlign: 'middle' }}>ויטמינים ותוספי תזונה</span>
  //           <img
  //             src={importImage('vitamins_icon.png')}
  //             alt=""
  //             width="50"  // Set a specific width
  //             height="auto"  // Set height to 'auto' to maintain aspect ratio
  //             style={{ marginLeft: '10px', position: 'relative', top: '-5px' }}  // Space between text and image , and Move the image up
  //           />
  //         </div>
  //       }
  //       icon={null}
  //       onIncrement={handleIncrement}
  //       onDecrement={handleDecrement}
  //       onSave={handleSave}
  //     /> */}
  //     {/* <ProductsPage
  //       products={airperfume}
  //       categoryTitle={
  //         <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '35px' }}>
  //           <span style={{ verticalAlign: 'middle' }}>בישום אוויר</span>
  //           <img
  //             src={importImage('air_freshener_icon.png')}
  //             alt=""
  //             width="60"  // Set a specific width
  //             height="50"
  //             style={{ marginLeft: '-7px', position: 'relative', top: '-8px' }}  // Space between text and image , and Move the image up
  //           />
  //         </div>
  //       }
  //       icon={null}
  //       onIncrement={handleIncrement}
  //       onDecrement={handleDecrement}
  //       onSave={handleSave}
  //     /> */}

  //     {/* מזון וציוד לבעלי חיים */}

  //   </div>
  // );

export default PharmPage;