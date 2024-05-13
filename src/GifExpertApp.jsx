import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch','Dragon Ball','Keane']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        console.log(newCategory);
        setCategories([newCategory,...categories]);
       // setCategories([...categories,'Valorant']);
        //otra manera
        //setCategories(cat => [...cat,'Valorant']);
    }
    console.log(categories);
    return(
        <>
           
            <h1>GifExpertApp</h1>

            
            <AddCategory
            //esta es una posible soluciion pero vamos a usar otra
            //setCategories={setCategories}
            //los eventos suelen comenzar con un "on"
            onNewCategory={(value) => onAddCategory(value)}
            
            />

          
           
                {
                categories.map((category) => (
                    <GifGrid key={category} category ={category}/>

                    //<li key={category}>{category}</li>
                ))
                }
            

        </>

    )

}