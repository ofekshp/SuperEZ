import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Frozen/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FrozenPage: React.FC = () => {
        const initialvegetables = [
          {
            name: "שעועית ירוקה",
            image: importImage(`green_beans.jpeg`),
          },

        ];
      
        initialvegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));

        const initialdoughs_pizzas_pastries = [
            {
              name: "בצק פילו",
              image: importImage(`phyllo_dough.jpeg`),
            },
  
          ];
        
          initialdoughs_pizzas_pastries.sort((a, b) => a.name.localeCompare(b.name, 'he'));


        const initialprepared_foods = [
            {
              name: "שניצלונים עוף טוב",
              image: importImage(`schnitzels_oftov.jpeg`),
            },
  
          ];
        
          initialprepared_foods.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialherbs_spices = [
            {
              name: "שום כתוש",
              image: importImage(`minced_garlic.jpeg`),
            },
  
          ];
        
          initialherbs_spices.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialfruit = [
            {
              name: "פירות יער מוקפאים",
              image: importImage(`frozen_berries.jpeg`),
            },
  
          ];
        
          initialfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));

      
        const [vegetables] = React.useState<{ name: string; image: any; }[]>(initialvegetables);
        const [doughs_pizzas_pastries] = React.useState<{ name: string; image: any; }[]>(initialdoughs_pizzas_pastries);
        const [prepared_foods] = React.useState<{ name: string; image: any; }[]>(initialprepared_foods);
        const [herbs_spices] = React.useState<{ name: string; image: any; }[]>(initialherbs_spices);
        const [fruit] = React.useState<{ name: string; image: any; }[]>(initialfruit);
      
      
        return (
          <div>
            <div>
              <ProductsPage
                products={vegetables}
                categoryTitle="ירקות קפואים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={doughs_pizzas_pastries}
                categoryTitle="בצקים, פיצות ומאפים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={prepared_foods}
                categoryTitle="מאכלים מוכנים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={herbs_spices}
                categoryTitle="עשבי תיבול ותבלינים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={fruit}
                categoryTitle="פירות קפואים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
          </div>
      
        );
      };
      
export default FrozenPage;
