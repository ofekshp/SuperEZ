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
      },
      {
        name: "חומץ תפוחים אורגני",
        image: importImage("organic_apple_cider_vinegar_750ml_naturfood.jpeg"),
      },
      {
        name: "סירופ מייפל אורגני 100% טהור",
        image: importImage("organic_pure_maple_syrup_946ml_bernard.jpeg"),
      },
      {
        name: "אדממה אורגני - פולי סויה בתרמילים מוקפאים",
        image: importImage("organic_edamame_400g_live.jpeg"),
      },
      {
        name: "רסק תפוחים ומנגו אורגני ללא תוספת סוכר",
        image: importImage("organic_applesauce_mango_no_sugar_700g_naturfood.jpeg"),
      },
      {
        name: "מיץ תפוחים אורגני 100% טבעי",
        image: importImage("organic_apple_juice_1l_naturfood.jpeg"),
      },
      {
        name: "גרעיני דלעת קלופים אורגניים",
        image: importImage("organic_shelled_pumpkin_seeds_300g_haraduf.jpeg"),
      },
      {
        name: "קמח כוסמין מלא אורגני",
        image: importImage("organic_whole_spelt_flour_1kg_haraduf.jpeg"),
      },
      {
        name: "פסטה פוזילי אורגנית מחיטת דורום מלאה",
        image: importImage("organic_whole_durum_fusilli_pasta_500g_haraduf.jpeg"),
      },
      {
        name: "ספגטי אורגני מחיטת דורום",
        image: importImage("organic_durum_spaghetti_pasta_500g_haraduf.jpeg"),
      },
      {
        name: "פתיתי בירה",
        image: importImage("beer_flakes_200g_tevuot.jpeg"),
      },
      {
        name: "ספגטי מקמח כוסמין מלא אורגני",
        image: importImage("organic_whole_spelt_spaghetti_500g_tevuot.jpeg"),
      },
      {
        name: "פנה פסטה מקמח כוסמין מלא אורגני",
        image: importImage("organic_whole_spelt_penne_pasta_500g_tevuot.jpeg"),
      },
      {
        name: "פסטה פוזילי מקמח כוסמין מלא אורגני",
        image: importImage("organic_whole_spelt_fusilli_pasta_250g_alb_gold.jpeg"),
      },
      {
        name: "אורז בסמתי מלא אורגני",
        image: importImage("organic_brown_basmati_rice_500g_tevuot.jpeg"),
      },
      {
        name: "אורז עגול מלא אורגני",
        image: importImage("organic_round_brown_rice_500g_tevuot.jpeg"),
      },
      {
        name: "אורז בסמתי לבן אורגני",
        image: importImage("organic_white_basmati_rice_500g_tevuot.jpeg"),
      },
      {
        name: "עדשים צהובות אורגני",
        image: importImage("organic_yellow_lentils_500g_haraduf.jpeg"),
      },
      {
        name: "עדשים אדומות אורגניות",
        image: importImage("organic_red_lentils_500g_tevuot.jpeg"),
      },
      {
        name: "עדשים שחורות אורגניות",
        image: importImage("organic_black_lentils_500g_tevuot.jpeg"),
      },
      {
        name: "בורגול אורגני",
        image: importImage("organic_bulgur_500g_tevuot.jpeg"),
      },
      {
        name: "קוסקוס מלא אורגני",
        image: importImage("organic_whole_couscous_350g_haraduf.jpeg"),
      },
      {
        name: "גרגרי חומוס אורגני",
        image: importImage("organic_chickpeas_500g_haraduf.jpeg"),
      },
      {
        name: "שעועית אזוקי אורגני",
        image: importImage("organic_adzuki_beans_500g_haraduf.jpeg"),
      },
      {
        name: "שעועית מש אורגנית",
        image: importImage("organic_mung_beans_500g_tevuot.jpeg"),
      },
      {
        name: "שעועית אדומה אורגנית",
        image: importImage("organic_red_beans_500g_tevuot.jpeg"),
      },
      {
        name: "שעועית שחורה אורגנית",
        image: importImage("organic_black_beans_500g_tevuot.jpeg"),
      },
      {
        name: "מג'דרה קינואה אורגנית",
        image: importImage("organic_quinoa_mujadara_500g_tevuot.jpeg"),
      },
      {
        name: "מג'דרה אורגנית",
        image: importImage("organic_mujadara_500g_tevuot.jpeg"),
      },
      {
        name: "קינואה רויאל אורגנית",
        image: importImage("organic_royal_quinoa_500g_tevuot.jpeg"),
      },
      {
        name: "קינואה אדומה אורגנית",
        image: importImage("organic_red_quinoa_500g_haraduf.jpeg"),
      },
      {
        name: "סובין שיבולת שועל אורגנית",
        image: importImage("organic_oat_bran_400g_tevuot.jpeg"),
      },
      {
        name: "סובין חיטה",
        image: importImage("wheat_bran_200g_tevuot.jpeg"),
      },
      {
        name: "אמרנט אורגני",
        image: importImage("organic_amaranth_500g_tevuot.jpeg"),
      },
      {
        name: "פשתן טחון אורגני",
        image: importImage("organic_ground_flaxseed_350g_tevuot.jpeg"),
      },
      {
        name: "תערובת קטניות אורגנית למרק",
        image: importImage("organic_legume_mix_soup_500g_tevuot.jpeg"),
      },
      {
        name: "קוואקר אורגני",
        image: importImage("organic_oatmeal_500g_haraduf.jpeg"),
      },
      {
        name: "קוואקר עבה אורגני",
        image: importImage("organic_thick_oatmeal_500g_tevuot.jpeg"),
      },
      {
        name: "קוואקר דק אורגני",
        image: importImage("organic_thin_oatmeal_500g_tevuot.jpeg"),
      },
      {
        name: "גריסי פנינה אורגני",
        image: importImage("organic_pearl_barley_500g_haraduf.jpeg"),
      },
      {
        name: "זרעי צ'יה אורגניים",
        image: importImage("organic_chia_seeds_300g_tevuot.jpeg"),
      },
      {
        name: "אטריות רחבות כוסמין וביצים אורגניות",
        image: importImage("organic_spelt_egg_noodles_wide_250g_alb_gold.jpeg"),
      },
      {
        name: "אטריות כוסמין וביצים אורגניות למרק",
        image: importImage("organic_spelt_egg_noodles_soup_250g_alb_gold.jpeg"),
      },
      {
        name: "סוכר קנים חום אורגני",
        image: importImage("organic_brown_cane_sugar_1kg_hassade_organi_products.jpeg"),
      },
      {
        name: "סוכר קוקוס אורגני",
        image: importImage("organic_coconut_sugar_300g_tevuot.jpeg"),
      },
      {
        name: "סוכר פירות",
        image: importImage("fruit_sugar_500g_tevuot.jpeg"),
      },
      {
        name: "סוכר ענבים",
        image: importImage("grape_sugar_500g_tevuot.jpeg"),
      },
      {
        name: "סוכר דמררה אורגני",
        image: importImage("organic_demerara_sugar_1kg_tevuot.jpeg"),
      },
      {
        name: "שמן קוקוס אורגני",
        image: importImage("organic_coconut_oil_300ml_green_coco.jpeg"),
      },
      {
        name: "פתי בר אורגני ביסקוויט מקמח מלא וחרובים",
        image: importImage("organic_whole_wheat_carob_biscuits_200g_hassade_organic_products.jpeg"),
      },
      {
        name: "ביסקוויט פתי בר כוסמין אורגני",
        image: importImage("organic_spelt_biscuits_200g_hassade_organic_products.jpeg"),
      },
      {
        name: "פתיבר אורגני מקמח מלא",
        image: importImage("organic_whole_wheat_biscuits_200g_hassade_organic_products.jpeg"),
      },
      {
        name: "פריכיות אורז מלא ללא תוספת מלח",
        image: importImage("organic_brown_rice_cakes_no_salt_100g_haraduf.jpeg"),
      },
      {
        name: "פריכיות אורז מלא דקות אורגני",
        image: importImage("organic_thin_brown_rice_cakes_100g_haraduf.jpeg"),
      },
      {
        name: "טחינה משומשום מלא אורגני",
        image: importImage("organic_whole_sesame_tahini_500g_lib_organic.jpeg"),
      },
      {
        name: "טחינה אורגנית",
        image: importImage("organic_tahini_500g_lib_organic.jpeg"),
      },
      {
        name: "מקלות בייגלה מקמח חיטה מלא אורגני בתוספת מלח",
        image: importImage("organic_whole_wheat_pretzel_sticks_with_salt_200g_haraduf.jpeg"),
      },
      {
        name: "בייגלה כוסמין אורגני עם שומשום ומלח",
        image: importImage("organic_spelt_pretzel_sesame_salt_200g_hassade_organic_products.jpeg"),
      },
      {
        name: "מקלות בייגלה מקמח כוסמין מלא אורגני",
        image: importImage("organic_spelt_pretzel_sticks_350g_haraduf.jpeg"),
      },
      {
        name: "אובלטים כוסמין אורגניים בתוספת שומשום",
        image: importImage("organic_spelt_sesame_oblatens_100g_hassade_organic_products.jpeg"),
      },
      {
        name: "חרדל גרגרים אמיתי אורגני",
        image: importImage("organic_real_grain_mustard_200g_naturofood.jpeg"),
      },
      {
        name: "מיונז אמיתי אורגני",
        image: importImage("organic_real_mayonnaise_340g_naturofood.jpeg"),
      },
      {
        name: "מעדן פירות יער אורגני",
        image: importImage("organic_berry_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מעדן משמש אורגני",
        image: importImage("organic_apricot_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מעדן דומדמניות שחורות אורגני",
        image: importImage("organic_blackcurrant_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מעדן דובדבנים אורגני",
        image: importImage("organic_cherry_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מעדן אפרסק אורגני",
        image: importImage("organic_peach_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מעדן אוכמניות אורגני",
        image: importImage("organic_blueberry_delight_250g_rigoni_di_asiago.jpeg"),
      },
      {
        name: "מחית תפוח שזיף אורגני",
        image: importImage("organic_apple_plum_puree_200g_naturo_nova.jpeg"),
      },
      {
        name: "מחית תפוח משמש אורגני",
        image: importImage("organic_apple_apricot_puree_200g_naturo_nova.jpeg"),
      },
      {
        name: "רסק תפוחים אורגני",
        image: importImage("organic_apple_puree_700g_hassade_organic_products.jpeg"),
      },
      {
        name: "סירופ אגבה כחולה אורגני",
        image: importImage("organic_blue_agave_syrup_330g_dulsweet.jpeg"),
      },
      {
        name: "גרעיני חמניה קלופים אורגני",
        image: importImage("organic_shelled_sunflower_seeds_300g_haraduf.jpeg"),
      },
      {
        name: "פלפל שחור אורגני",
        image: importImage("organic_black_pepper_50g_cannamela.jpeg"),
      },
      {
        name: "קארי טחון אורגני",
        image: importImage("organic_ground_curry_14g_cannamela.jpeg"),
      },
      {
        name: "צ'ילי טחון אורגני",
        image: importImage("organic_ground_chili_50g_dagesh_gan_shmuel_stand.jpeg"),
      },
      {
        name: "אורגנו אורגני",
        image: importImage("organic_oregano_14g_cannamela.jpeg"),
      },
      {
        name: "אובלטים אורגניים מקמח עדשים כתומות ושומשום",
        image: importImage("organic_red_lentil_sesame_oblatens_100g_hassade_organic_products.jpeg"),
      },
      {
        name: "מלפפון כבוש אורגני",
        image: importImage("organic_pickled_cucumber_670g_naturofood.jpeg"),
      },
      {
        name: "קמח שיבולת שועל מלאה אורגני ללא גלוטן",
        image: importImage("organic_whole_oat_flour_gluten_free_500g_nutra_zen.jpeg"),
      },
      {
        name: "משקה סויה אורגני ללא תוספת סוכר ללא גלוטן",
        image: importImage("organic_soy_drink_no_sugar_1L_haraduf.jpeg"),
      },
      {
        name: "משקה שקדים אורגני ללא תוספת סוכר ללא גלוטן",
        image: importImage("organic_almond_drink_no_sugar_1L_haraduf.jpeg"),
      },      
  ];  

  const initialGlutenfree = [
    {
        name: "שמן ",
        image: importImage("organic_cold_pressed_canola_oil_1l_naturfood.jpeg"),
      },
    ];

  initialOrganic.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialGlutenfree.sort((a, b) => a.name.localeCompare(b.name, 'he'));


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

useEffect(() => {
  handleSave();
}, [organic,glutenfree]);

  const handleIncrement = (name: string) => {
    setOrganic(organic.map(organic => organic.name === name ? { ...organic, count: organic.count + 1 } : organic));
    setGlutenfree(glutenfree.map(glutenfree => glutenfree.name === name ? { ...glutenfree, count: glutenfree.count + 1 } : glutenfree));

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
    

   };

  const handleSave = async () => {
    const organicToSave = organic.filter(organic => organic.count > 0).map(organic => ({ ...organic, quantity: organic.count }));
    const glutenfreeToSave = glutenfree.filter(glutenfree => glutenfree.count > 0).map(glutenfree => ({ ...glutenfree, quantity: glutenfree.count }));

    const allSpecial = [...organicToSave,...glutenfreeToSave];
    allSpecial.forEach(item => addProduct(item));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={organic}
          categoryTitle="אורגני"
          icon={<img alt="" src={importImage('organic_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={glutenfree}
          categoryTitle="ללא גלוטן"
          icon={<img alt="" src={importImage('glutenfree_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default SpecialPage;