import React, { useState } from "react";
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
  const { addProduct } = useBasket(); 
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
      name: "אבקת כביסה סנו מקסימה אפקט ז'אוול Javel",
      image: importImage("sano_maxima_javel_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה בניחוח מאסק Musk",
      image: importImage("sano_maxima_musk_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה סנסיטיב sensitive",
      image: importImage("sano_maxima_sensitive_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה ביו Bio לכתמים קשים",
      image: importImage("sano_maxima_bio_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה בלאק Black לצבעים כהים",
      image: importImage("sano_maxima_black_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה אפקט ז'אוול Javel - 2.5 ק\"ג",
      image: importImage("sano_maxima_javel_powder_2.5kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה ביו Bio לכתמים קשים - 2.5 ק\"ג",
      image: importImage("sano_maxima_bio_powder_2.5kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה בניחוח Musk - 2.5 ק\"ג",
      image: importImage("sano_maxima_musk_powder_2.5kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה סנסיטיב sensitive - 2.5 ק\"ג",
      image: importImage("sano_maxima_sensitive_powder_2.5kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה בייבי לבגדי תינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה אפקט Javel - 6 ק\"ג",
      image: importImage("sano_maxima_javel_powder_6kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה Bio - 6 ק\"ג",
      image: importImage("sano_maxima_bio_powder_6kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה בניחוח Musk - 6 ק\"ג",
      image: importImage("sano_maxima_musk_powder_6kg.jpeg"),
    },
    {
      name: "אבקת כביסה BLACK לשמירה על צבעים כהים - 6 ק\"ג",
      image: importImage("sano_maxima_black_powder_6kg.jpeg"),
    },
    {
      name: "אבקת כביסה סנו מקסימה sensitive - 6 ק\"ג",
      image: importImage("sano_maxima_sensitive_powder_6kg.jpeg"),
    },
    {
      name: "אבקת כביסה אריאל שושן צחור",
      image: importImage("ariel_white_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה תינוקלין",
      image: importImage("tinoklin_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה תינוקלין - 3 ק\"ג",
      image: importImage("tinoklin_powder_3kg.jpeg"),
    },
    {
      name: "אבקת כביסה קולון לכביסה לבנה וצבעונית",
      image: importImage("colon_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה קולון לכביסה לבנה וצבעונית - 8 ק\"ג",
      image: importImage("colon_powder_8kg.jpeg"),
    },
    {
      name: "אבקת כביסה פרסיל",
      image: importImage("persil_powder_1.25kg.jpeg"),
    },
    {
      name: "אבקת כביסה פרסיל קולור",
      image: importImage("persil_color_powder_1.25kg.jpeg"),
    },
    {
      name: "ג'ל מרוכז לכביסה לבנה וצבעונית",
      image: importImage("perfect_white_color_gel_3l.jpeg"),
    },
    {
      name: "ג'ל מרוכז לכביסה לבנה וצבעונית - 5 ליטר",
      image: importImage("perfect_white_color_gel_5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח פרחים - 5 ליטר",
      image: importImage("perfect_flower_gel_5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז מקסימה Bio cold water",
      image: importImage("sano_maxima_bio_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה חכם Smart",
      image: importImage("sano_maxima_smart_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז מקסימה בבישום קריסטל נואר",
      image: importImage("sano_maxima_crystal_noir_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז מקסימה Musk",
      image: importImage("sano_maxima_musk_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז מקסימה בייבי",
      image: importImage("sano_maxima_baby_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז לכבס בלי להפריד כביסה צבעונית",
      image: importImage("sano_maxima_mix_wash_gel_3l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז בניחוח Crystal Noir - 5 ליטר",
      image: importImage("sano_maxima_crystal_noir_gel_5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז מאסק - 5 ליטר",
      image: importImage("sano_maxima_musk_gel_5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז Mix & Wash - 5 ליטר",
      image: importImage("sano_mix_wash_gel_5l.jpeg"),
    },
    {
      name: "מקסימה ג'ל כביסה מרוכז Bio Cold Water - 5 ליטר",
      image: importImage("sano_maxima_bio_gel_5l.jpeg"),
    },
    {
      name: "ג'ל כביסה בניחוח בדין כחול",
      image: importImage("badin_blue_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה בניחוח בדין ורוד",
      image: importImage("badin_pink_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה לבגדי תינוקות ובעלי עור רגיש Sensitive",
      image: importImage("persil_sensitive_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל לכביסה לבנה וצבעונית",
      image: importImage("persil_white_color_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל לכביסה צבעונית",
      image: importImage("persil_color_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל לכביסה לבנה וצבעונית בניחוח רענן",
      image: importImage("persil_fresh_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה לבגדים שחורים וכהים",
      image: importImage("persil_black_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח קלאסי - 4 ליטר",
      image: importImage("colon_classic_gel_4l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח לבנדר - 4 ליטר",
      image: importImage("colon_lavender_gel_4l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח פריחה רעננה - 4 ליטר",
      image: importImage("colon_fresh_bloom_gel_4l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח קלאסי",
      image: importImage("colon_classic_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח לבנדר",
      image: importImage("colon_lavender_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל כביסה מרוכז קולון בניחוח פריחה רעננה",
      image: importImage("colon_fresh_bloom_gel_2.5l.jpeg"),
    },
    {
      name: "ג'ל לכביסה ביד",
      image: importImage("sod_hand_wash_gel_1l.jpeg"),
    },
    {
      name: "קפסולות לכביסה Floral Burst",
      image: importImage("sano_maxima_floral_burst_capsules_40_units.jpeg"),
    },
    {
      name: "קפסולות לכביסה Fresh Breeze",
      image: importImage("sano_maxima_fresh_breeze_capsules_40_units.jpeg"),
    },
    {
      name: "קפסולות ג'ל לכביסה",
      image: importImage("colon_gel_capsules_28_units.jpeg"),
    },
    {
      name: "טקסטיל שמפו נוזלי",
      image: importImage("nika_textile_shampoo_1l.jpeg"),
    },
    {
      name: "טקסטיל שמפו בשקית",
      image: importImage("nika_textile_shampoo_1kg.jpeg"),
    },
    {
      name: "סינטבון סבון רב שימושי",
      image: importImage("nika_syntabon_230g.jpeg"),
    },
    {
      name: "אבקת כביסה בניחוח מרכך כביסה סופט סילק",
      image: importImage("sano_maxima_soft_silk_powder_2kg.jpeg"),
    },
    {
      name: "ג'ל כביסה בייבי לאב היפואלרגני TNX",
      image: importImage("tnx_baby_love_hypoallergenic_gel_1350ml.jpeg"),
    },
    {
      name: "ג'ל כביסה ירוק לכביסה צבעונית TNX",
      image: importImage("tnx_green_color_laundry_gel_1350ml.jpeg"),
    },
    {
      name: "ג'ל כביסה כחול לכביסה לבנה TNX",
      image: importImage("tnx_blue_white_laundry_gel_1350ml.jpeg"),
    },
    {
      name: "ג'ל כביסה סופרו אקטיב",
      image: importImage("supero_active_gel_2.5l.jpeg"),
    },
    {
      name: "כביסכל נוזל כביסה בייבי",
      image: importImage("kabiscal_baby_detergent_2l.jpeg"),
    },
    {
      name: "כביסכל נוזל כביסה בניחוח ארומטי",
      image: importImage("kabiscal_aromatic_detergent_2l.jpeg"),
    },
    {
      name: "כביסכל נוזל כביסה בניחוח ספא",
      image: importImage("kabiscal_spa_detergent_2l.jpeg"),
    },
    {
      name: "כביסכל נוזל כביסה בניחוח רוז",
      image: importImage("kabiscal_rose_detergent_2l.jpeg"),
    },
    {
      name: "סנו מקסימה ג'ל כביסה מרוכז בניחוח Blue Blossom",
      image: importImage("sano_maxima_blue_blossom_gel_1.5l.jpeg"),
    },
    {
      name: "סנו מקסימה ג'ל כביסה מרוכז בניחוח מרכך כביסה",
      image: importImage("sano_maxima_conditioner_scent_gel_1.5l.jpeg"),
    },
    {
      name: "קפסולות ג'ל לכביסה",
      image: importImage("sod_gel_capsules_26_units.jpeg"),
    },
    {
      name: "קפסולות לכביסה אריאל בניחוח לנור 23 יח'",
      image: importImage("ariel_lenor_scent_capsules_23_units.jpeg"),
    },
    {
      name: "קפסולות לכביסה אריאל לכתמים קשים 23 יח'",
      image: importImage("ariel_stain_removal_capsules_23_units.jpeg"),
    },
    {
      name: "מרכך כביסה מבושם בייבי baby",
      image: importImage("perfect_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה מבושם צהוב yellow sunset",
      image: importImage("perfect_yellow_sunset_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה מבושם כחול blue ocean",
      image: importImage("perfect_blue_ocean_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה מבושם ורוד pink blossom",
      image: importImage("perfect_pink_blossom_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז בייבי baby",
      image: importImage("perfect_baby_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז צהוב yellow sunset",
      image: importImage("perfect_yellow_sunset_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז ורוד pink blossom",
      image: importImage("perfect_pink_blossom_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז סגול purple fantasy",
      image: importImage("perfect_purple_fantasy_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז זהב golden amber",
      image: importImage("perfect_golden_amber_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה מרוכז שחור black mystery",
      image: importImage("perfect_black_mystery_concentrated_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה בדין לבן",
      image: importImage("badan_white_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בדין ורוד",
      image: importImage("badan_pink_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בדין כחול",
      image: importImage("badan_blue_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה היפואלרגני סנסטיב בייבי",
      image: importImage("sano_sensitive_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה אנטיבקטריאלי Bio",
      image: importImage("sano_bio_antibacterial_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה אולטרה פרש",
      image: importImage("sano_ultra_fresh_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה היפואלרגני עם אלוורה לתינוקות",
      image: importImage("sano_aloe_vera_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה לבנדר פצ'ולי",
      image: importImage("sano_lavender_patchouli_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה ארומתראפי מאסק",
      image: importImage("sano_aromatherapy_musk_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה ארומתראפי Cool",
      image: importImage("sano_aromatherapy_cool_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי סופט סילק",
      image: importImage("sano_soft_silk_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי פריחה כחולה",
      image: importImage("sano_blue_blossom_fabric_softener_4l.jpeg"),
    },
    {
      name: "מקסימה מרכך CALM בבישום עוצמתי",
      image: importImage("sano_calm_fabric_softener_4l.jpeg"),
    },
    {
      name: "מקסימה מרכך JOY בבישום עוצמתי",
      image: importImage("sano_joy_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי ג'נטל בריז",
      image: importImage("sano_gentle_breeze_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי פלורל טאצ'",
      image: importImage("sano_floral_touch_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה לבגדי תינוקות ולבעלי לעור רגיש",
      image: importImage("sod_sensitive_baby_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה לבן",
      image: importImage("sod_white_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה ורוד",
      image: importImage("sod_pink_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה כחול",
      image: importImage("sod_blue_fabric_softener_4l.jpeg"),
    },
    {
      name: "מרכך כביסה אקסטרה בייבי היפואלרגני בריח טלק",
      image: importImage("badan_extra_baby_talc_fabric_softener_960ml.jpeg"),
    },
    {
      name: "מרכך כביסה אקסטרא בניחוח סחלבים פראי",
      image: importImage("badan_wild_orchid_fabric_softener_960ml.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז Cool",
      image: importImage("sano_super_concentrated_cool_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז Zen",
      image: importImage("sano_super_concentrated_zen_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז מאסק",
      image: importImage("sano_super_concentrated_musk_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז סנסטיב בייבי",
      image: importImage("sano_super_concentrated_sensitive_baby_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז אולטרה פרש",
      image: importImage("sano_super_concentrated_ultra_fresh_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז לבנדר פצ'ולי",
      image: importImage("sano_super_concentrated_lavender_patchouli_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז Bio",
      image: importImage("sano_super_concentrated_bio_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז בייבי לתינוקות ולעור רגיש",
      image: importImage("sano_super_concentrated_baby_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז חלב ודבש Care",
      image: importImage("sano_super_concentrated_milk_honey_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך בבישום עוצמתי Blue Blossom",
      image: importImage("sano_blue_blossom_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך בבישום עוצמתי Soft Silk",
      image: importImage("sano_soft_silk_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי ג'נטל בריז",
      image: importImage("sano_gentle_breeze_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה בבישום עוצמתי פלורל טאצ'",
      image: importImage("sano_floral_touch_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז פרפיום גולדן סנרייז",
      image: importImage("sano_perfum_gold_sunrise_fabric_softener_750ml.jpeg"),
    },
    {
      name: "מרכך כביסה סופר מרוכז פרפיום קריסטל נואר",
      image: importImage("sano_crystal_noir_fabric_softener_750ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז לבגדי תינוקות ובעלי עור רגיש",
      image: importImage("sod_sensitive_baby_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז ארומתרפי צהוב",
      image: importImage("sod_aromatherapy_yellow_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז ארומתרפי סגול",
      image: importImage("sod_aromatherapy_purple_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז Fresh Sky",
      image: importImage("sod_fresh_sky_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז Wild Rose",
      image: importImage("sod_wild_rose_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז Lavender",
      image: importImage("sod_lavender_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז פרש קונטרול Floral Crisp",
      image: importImage("sod_floral_crisp_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז פרש קונטרול Cool Fresh",
      image: importImage("sod_cool_fresh_fabric_softener_900ml.jpeg"),
    },
    {
      name: "לנור מרכך כביסה מרוכז הגנה מרעננת",
      image: importImage("lenor_refreshing_protection_fabric_softener_819ml.jpeg"),
    },
    {
      name: "לנור מרכך כביסה מרוכז רעננות האוקיינוס",
      image: importImage("lenor_ocean_freshness_fabric_softener_819ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז אוריינטל פינק TNX",
      image: importImage("tnx_oriental_pink_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז אמור TNX",
      image: importImage("tnx_amor_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז בבישום עוצמתי Moments Of Calm",
      image: importImage("sano_moments_of_calm_fabric_softener_1l.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז בייבי לאב TNX",
      image: importImage("tnx_baby_love_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז בלו טאצ' TNX",
      image: importImage("tnx_blue_touch_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז לגונה TNX",
      image: importImage("tnx_laguna_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז סופט קלין TNX",
      image: importImage("tnx_soft_clean_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז פרש וויט TNX",
      image: importImage("tnx_fresh_white_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה מרוכז ריבר סייד TNX",
      image: importImage("tnx_riverside_fabric_softener_900ml.jpeg"),
    },
    {
      name: "מרכך כביסה תינוקלין מרוכז",
      image: importImage("tinoklin_concentrated_fabric_softener_1l.jpeg"),
    },
    {
      name: "סוד מרכך כביסה מרוכז ארומתרפי אדום- Sensual Rose",
      image: importImage("sod_aromatherapy_red_sensual_rose_fabric_softener_900ml.jpeg"),
    },
    {
      name: "תינוקלין מרכך כביסה מרוכז",
      image: importImage("tinoklin_concentrated_fabric_softener_1l.jpeg"),
    },
    {
      name: "אטבי כביסה איכותיים - מארז 10 יח'",
      image: importImage("perfect_quality_clothes_pins_10pcs.jpeg"),
    },
    {
      name: "שבבי סבון",
      image: importImage("perfect_soap_flakes_750g.jpeg"),
    },
    {
      name: "מסיר כתמים ג'ל אוקסיג'ן ללא אקונומיקה",
      image: importImage("sano_oxygen_stain_remover_gel_3l.jpeg"),
    },
    {
      name: "מסיר כתמים עוצמתי לכביסה לבנה",
      image: importImage("sano_oxygen_power_stain_remover_750ml.jpeg"),
    },
    {
      name: "אוקסיג'ן פאוור תוסף להסרת כתמים קשים",
      image: importImage("sano_oxygen_power_stain_remover_1400g.jpeg"),
    },
    {
      name: "אוקסיג'ן תוסף להסרת כתמים קשים מכביסה לבנה",
      image: importImage("sano_oxygen_stain_remover_for_white_laundry_1400g.jpeg"),
    },
    {
      name: "מסיר כתמים לכביסה לבנה אוקסיג'ן ג'ל",
      image: importImage("sano_oxygen_stain_remover_gel_for_white_laundry_3l.jpeg"),
    },
    {
      name: "מסיר כתמים ג'ל Oxygen בייבי",
      image: importImage("sano_oxygen_baby_stain_remover_gel_3l.jpeg"),
    },
    {
      name: "מסיר כתמים אוקסיג'ן ג'ל",
      image: importImage("sano_oxygen_stain_remover_gel_4l.jpeg"),
    },
    {
      name: "מסיר כתמים אוקסיג'ן ג'ל",
      image: importImage("sano_oxygen_stain_remover_gel_2l.jpeg"),
    },
    {
      name: "סנו קל רסס וכבס",
      image: importImage("sano_kal_spray_and_wash_750ml.jpeg"),
    },
    {
      name: "מסיר כתמים רסס וכבס מילוי",
      image: importImage("sano_kal_spray_and_wash_refill_750ml.jpeg"),
    },
    {
      name: "מסיר כתמים עם מברשת",
      image: importImage("sano_stain_remover_with_brush_125g.jpeg"),
    },
    {
      name: "ספריי להסרת כתמים",
      image: importImage("kalia_vanish_stain_remover_spray_750ml.jpeg"),
    },
    {
      name: "מסיר כתמים קרבונה ניקוי יבש",
      image: importImage("carbona_dry_cleaning_stain_remover_170g.jpeg"),
    },
    {
      name: "מסיר כתמים אוקסיג'ן",
      image: importImage("sano_oxygen_stain_remover_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש מקסימה סנסטיב",
      image: importImage("sano_maxima_sensitive_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש מקסימה מאסק",
      image: importImage("sano_maxima_musk_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש מקסימה אולטרה פרש",
      image: importImage("sano_maxima_ultra_fresh_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מרכך ומבשם כביסה למייבש מקסימה לבנדר",
      image: importImage("sano_maxima_lavender_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מבשם ומרכך למייבש כביסה Baby לתינוקות ולעור רגיש",
      image: importImage("sano_maxima_baby_dryer_softener_750ml.jpeg"),
    },
    {
      name: "מבשם ומרכך למייבש כביסה Blue Blossom",
      image: importImage("sano_maxima_blue_blossom_dryer_softener_750ml.jpeg"),
    },
    {
      name: "בושם מרוכז לכביסה FOREVER כחול",
      image: importImage("sano_maxima_forever_blue_laundry_perfume_600ml.jpeg"),
    },
    {
      name: "בושם מרוכז לכביסה FOREVER ורוד",
      image: importImage("sano_maxima_forever_pink_laundry_perfume_600ml.jpeg"),
    },
    {
      name: "בושם מרוכז לכביסה FOREVER בורדו",
      image: importImage("sano_maxima_forever_bordeaux_laundry_perfume_600ml.jpeg"),
    },
    {
      name: "מבשם ומרכך למייבש כביסה Floral Touch",
      image: importImage("sano_maxima_floral_touch_dryer_softener_750ml.jpeg"),
    },
    {
      name: "בדין תרסיס ריחני למייבש הכביסה כחול",
      image: importImage("baddin_blue_dryer_spray_500ml.jpeg"),
    },
    {
      name: "דפי מרכך למייבש כביסה כחול",
      image: importImage("baddin_blue_dryer_sheets_40pcs.jpeg"),
    },
    {
      name: "כדוריות הבושם לנור בניחוח סחלב",
      image: importImage("lenor_orchid_perfume_beads_210g.jpeg"),
    },
    {
      name: "כדוריות הבושם לנור בניחוח רענן",
      image: importImage("lenor_fresh_perfume_beads_210g.jpeg"),
    },
    {
      name: "כדוריות הבושם לנור רעננות האוקיינוס",
      image: importImage("lenor_ocean_fresh_perfume_beads_210g.jpeg"),
    },
    {
      name: "לנור כדוריות הבושם בניחוח אריאל",
      image: importImage("lenor_ariel_perfume_beads_210g.jpeg"),
    },
    {
      name: "דפים למייבש פרש אנד סופט Clean Burst",
      image: importImage("fresh_n_soft_clean_burst_dryer_sheets_100pcs.jpeg"),
    },
    {
      name: "דפים למייבש פרש אנד סופט Tropical Burst",
      image: importImage("fresh_n_soft_tropical_burst_dryer_sheets_100pcs.jpeg"),
    },
    {
      name: "דפים למכונת כביסה למניעת העברת צבע",
      image: importImage("woolite_color_catcher_sheets_10pcs.jpeg"),
    },
    {
      name: "דפים למכונת כביסה למניעת העברת צבע",
      image: importImage("woolite_color_catcher_sheets_20pcs.jpeg"),
    },
    {
      name: "קולור קאצ'ר- לוכד צבעים בכביסה 10 יח'",
      image: importImage("henkel_color_catcher_10pcs.jpeg"),
    },
    {
      name: "קולור קאצ'ר- לוכד צבעים בכביסה 20 יח'",
      image: importImage("henkel_color_catcher_20pcs.jpeg"),
    },
    {
      name: "קולור קאצ'ר- לוכד צבעים בכביסה 40 דפים",
      image: importImage("henkel_color_catcher_40pcs.jpeg"),
    },
    {
      name: "תרסיס לגיהוץ קל מריטו",
      image: importImage("merito_easy_ironing_spray_500ml.jpeg"),
    },
    {
      name: "מגן + מבשם דוחה עש בניחוח לבנדר",
      image: importImage("hepi_lavender_moth_repellent_2pcs.jpeg"),
    },
    {
      name: "אבקת הלבנה",
      image: importImage("run_whitening_powder_350g.jpeg"),
    },
    {
      name: "ג'ל למניעת אבנית 2 ב-1",
      image: importImage("calgon_antiscale_gel_2in1_750ml.jpeg"),
    },
    {
      name: "אבקה למניעת אבנית במכונת כביסה 2 ב-1",
      image: importImage("calgon_antiscale_powder_2in1_1kg.jpeg"),
    },
    {
      name: "מנקה מכונת כביסה בניחוח נקי ורענן",
      image: importImage("colon_washing_machine_cleaner_250ml.jpeg"),
    },
    {
      name: "אטבי כביסה איכותיים בשלל צבעים",
      image: importImage("perfect_colored_laundry_pegs_9pcs.jpeg"),
    },
    {
      name: "אטבי כביסה גדולים וחזקים עם גומי",
      image: importImage("perfect_large_strong_laundry_pegs_10pcs.jpeg"),
    },
    {
      name: "מקסימה FORVER פניני בישום לכביסה lovely",
      image: importImage("sano_maxima_forever_perfume_beads_lovely_275g.jpeg"),
    },
    {
      name: "בדין דפי מרכך ריחניים למייבש כביסה",
      image: importImage("baddin_dryer_sheets_40pcs.jpeg"),
    },
    {
      name: "דזיטול נוזל מחטא בגדים בכביסה",
      image: importImage("desytol_laundry_sanitizer_1l.jpeg"),
    },
    {
      name: "וניש ג'ל מסיר כתמים לכביסה לבנה",
      image: importImage("vanish_white_stain_remover_gel_2.75l.jpeg"),
    },
    {
      name: "וניש תוסף כביסה רב תכליתי לבגדים לבנים",
      image: importImage("vanish_multi_purpose_laundry_additive_white_1.5kg.jpeg"),
    },
    {
      name: "מבשם בדים בייבי לאב TNX",
      image: importImage("tnx_fabric_perfume_baby_love_500ml.jpeg"),
    },
    {
      name: "ניקוי וחיטוי מכונת הכביסה בתוספת חומץ סנו מקסימה",
      image: importImage("sano_maxima_washing_machine_cleaner_500ml.jpeg"),
    },
    {
      name: "סופר מסיר כתמים KH7",
      image: importImage("kh7_super_stain_remover_750ml.jpeg"),
    },
    {
      name: "סנו אוקסיג'ן תוסף להסרת כתמים לכביסה לבנה וצבעונית",
      image: importImage("sano_oxygen_stain_remover_540g.jpeg"),
    },
    {
      name: "תוסף לחיטוי כביסה סנו מקסימה",
      image: importImage("sano_maxima_laundry_sanitizer_3l.jpeg"),
    },
  ];

  const initialCleaningproducts = [
    {
      name: "נוזל לניקוי כלים בניחוח לימון",
      image: importImage('lemon_scented_dishwashing_liquid.jpeg'),
    }
  ];

  const initialKitchencleaning = [
    {
      name: "מסיר שומנים",
      image: importImage('degreaser_product.jpeg'),
    }
  ];

  const initialGeneralcleaning = [
    {
      name: "אקונומיקה",
      image: importImage('bleach.jpeg'),
    }
  ];

  const initialFloorcleaning = [
    {
      name: "נוזל רצפות בריח לבנדר",
      image: importImage('lavender_scented_floor_liquid.jpeg'),
    }
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
  initialCleaningproducts.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [kitchencleaning, setKitchencleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialKitchencleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [generalcleaning, setGeneralcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialGeneralcleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [floorcleaning, setFloorcleaning] = useState<{ name: string; image: string | null; count: number }[]>(
  initialFloorcleaning.map(item => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === item.name);
    return {
      ...item,
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


  const handleIncrement = (name: string) => {
    setPaper(paper.map(paper => paper.name === name ? { ...paper, count: paper.count + 1 } : paper));
    setLaundryproducts(laundryproducts.map(laundryproducts => laundryproducts.name === name ? { ...laundryproducts, count: laundryproducts.count + 1 } : laundryproducts));
    setCleaningproducts(cleaningproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setKitchencleaning(kitchencleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setGeneralcleaning(generalcleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setFloorcleaning(floorcleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setPesticideproducts(pesticideproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setCleaningaccessories(cleaningaccessories.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setDisposableproducts(disposableproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
    setBagspackagingproducts(bagspackagingproducts.map(item => item.name === name ? { ...item, count: item.count + 1 } : item));
  };

  const handleDecrement = (name: string) => {
    setPaper(paper.map(paper => paper.name === name && paper.count > 0 ? { ...paper, count: paper.count - 1 } : paper));
    setLaundryproducts(laundryproducts.map(laundryproducts => laundryproducts.name === name && laundryproducts.count > 0 ? { ...laundryproducts, count: laundryproducts.count - 1 } : laundryproducts));
    setCleaningproducts(cleaningproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setKitchencleaning(kitchencleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setGeneralcleaning(generalcleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setFloorcleaning(floorcleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBathroomtoilecleaning(bathroomtoilecleaning.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setPesticideproducts(pesticideproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setCleaningaccessories(cleaningaccessories.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setDisposableproducts(disposableproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    setBagspackagingproducts(bagspackagingproducts.map(item => item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item));
  };

  const handleSave = async () => {
    const paperToSave = paper.filter(paper => paper.count > 0).map(paper => ({ ...paper, quantity: paper.count }));
    const laundryproductsToSave = laundryproducts.filter(laundryproducts => laundryproducts.count > 0).map(laundryproducts => ({ ...laundryproducts, quantity: laundryproducts.count }));
    const cleaningproductsToSave = cleaningproducts.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const kitchencleaningToSave = kitchencleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const generalcleaningToSave = generalcleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const floorcleaningToSave = floorcleaning.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
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
          icon={<img alt="" src={importImage('cleaning_icon.png')} />} 
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