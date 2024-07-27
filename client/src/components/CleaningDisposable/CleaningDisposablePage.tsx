import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/CleaningDisposable/${imageName}`);
  } catch (error) {
    return null;
  }
};

const CleaningDisposablePage: React.FC = () => {
        const initialPaper = [
          {
            name: "נייר טואלט 32 גלילים",
            image: importImage(`toilet_paper_32_rolls.jpeg`),
          },

        ];
      
        initialPaper.sort((a, b) => a.name.localeCompare(b.name, 'he'));

        const initialLaundryproducts = [
            {
              name: "אבקת כביסה לכביסה לבנה וצבעונית",
              image: importImage(`washing_powder_for_white_and_colored_laundry.jpeg`),
            },
  
          ];
        
          initialLaundryproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialCleaningproducts = [
            {
              name: "נוזל לניקוי כלים בניחוח לימון", 
              image: importImage(`lemon_scented_dishwashing_liquid.jpeg`),
            },
  
          ];
        
          initialCleaningproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialKitchencleaning = [
            {
              name: "מסיר שומנים", 
              image: importImage(`degreaser_product.jpeg`),
            },
  
          ];
        
          initialKitchencleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialGeneralcleaning = [
            {
              name: "אקונומיקה", 
              image: importImage(`bleach.jpeg`),
            },
  
          ];
        
          initialGeneralcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialFloorcleaning = [
            {
              name: "נוזל רצפות בריח לבנדר", 
              image: importImage(`lavender_scented_floor_liquid.jpeg`),
            },
  
          ];
        
          initialFloorcleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialBathroomtoilecleaning = [
            {
              name: "נוזל לניקוי אסלות", 
              image: importImage(`liquid_for_cleaning_toilets.jpeg`),
            },
  
          ];
        
          initialBathroomtoilecleaning.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialPesticideproducts = [
            {
              name: "קוטל חרקים", 
              image: importImage(`an_insects_killer.jpeg`),
            },
  
          ];
        
          initialPesticideproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));


          const initialCleaningaccessories = [
            {
              name: "מטליות לניקוי כללי", 
              image: importImage(`cloths_for_general_cleaning.jpeg`),
            },
  
          ];
        
          initialCleaningaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialDisposableproducts = [
            {
              name: "שרוול כוסות פלסטיק", 
              image: importImage(`plastic_cup_sleeve.jpeg`),
            },
  
          ];
        
          initialDisposableproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialBagspackagingproducts = [
            {
              name: "רדיד אלומיניום", 
              image: importImage(`foil.jpeg`),
            },
  
          ];
        
          initialBagspackagingproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          
      
            
        const [paper] = React.useState<{ name: string; image: any; }[]>(initialPaper);
        const [laundryproducts] = React.useState<{ name: string; image: any; }[]>(initialLaundryproducts);
        const [cleaningproducts] = React.useState<{ name: string; image: any; }[]>(initialCleaningproducts);
        const [kitchencleaning] = React.useState<{ name: string; image: any; }[]>(initialKitchencleaning);
        const [generalcleaning] = React.useState<{ name: string; image: any; }[]>(initialGeneralcleaning);
        const [floorcleaning] = React.useState<{ name: string; image: any; }[]>(initialFloorcleaning);
        const [bathroomtoilecleaning] = React.useState<{ name: string; image: any; }[]>(initialBathroomtoilecleaning);
        const [pesticideproducts] = React.useState<{ name: string; image: any; }[]>(initialPesticideproducts);
        const [Cleaningaccessories] = React.useState<{ name: string; image: any; }[]>(initialCleaningaccessories);
        const [disposableproducts] = React.useState<{ name: string; image: any; }[]>(initialDisposableproducts);
        const [bagspackagingproducts] = React.useState<{ name: string; image: any; }[]>(initialBagspackagingproducts);
      
      
        return (
          <div>
            <div>
              <ProductsPage
                products={paper}
                categoryTitle="נייר ומוצריו"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={laundryproducts}
                categoryTitle="מוצרי כביסה"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={cleaningproducts}
                categoryTitle="ניקוי כלים"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={kitchencleaning}
                categoryTitle="ניקוי מטבח"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={generalcleaning}
                categoryTitle="ניקוי כללי"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={floorcleaning}
                categoryTitle="ניקוי רצפה"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={bathroomtoilecleaning}
                categoryTitle="ניקוי אמבטיה ושירותים"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={pesticideproducts}
                categoryTitle="מוצרי הדברה"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={Cleaningaccessories}
                categoryTitle="אביזרי ניקוי"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={disposableproducts}
                categoryTitle="מוצרים חד פעמיים"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={bagspackagingproducts}
                categoryTitle="שקיות ומוצרי אריזה"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
          </div>
      
        );
      };
      
export default CleaningDisposablePage;
