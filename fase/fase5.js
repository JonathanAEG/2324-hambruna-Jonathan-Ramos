function modifyTransFat(items){


    items.map(item=> parseInt(item.nutrition_facts.nutrition.cholesterol.amount) > 12 ? item.nutrition_facts.nutrition.fat.fat_type.saturated = `3,2gr` : item,);
    items.map(item=> console.log(`El donut llamado ${item.name} que tiene ${item.nutrition_facts.nutrition.cholesterol.amount} de colesterol tiene ${item.nutrition_facts.nutrition.fat.fat_type.saturated} de grasas saturadas.`));
}


function modifyCarbohydrates(items){


    items.map(item=> parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > 50 ? item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = `42gr` : item);
    items.map(item=> console.log(`El donut llamado ${item.name} que tiene ${item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars} de azucar tiene ${item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount} de carbohidratos.`));
}


function modifyCarbohydratesDailyValue(items){


    items.map(item=> item.nutrition_facts.nutrition.carbohydrate.daily_value = `52%`);
    items.map(item=> console.log(`El donut llamado ${item.name} contiene ${item.nutrition_facts.nutrition.carbohydrate.daily_value} de la ración diaria recomendada de carbohidratos.`));
}


function addVitamine(items){


    items.map(item=>{


        if(item.name.includes(`Fusion`)){
           
            const nitacin = {


                type: `Nitacin`,
                percent: `0%`
            }
            item.nutrition_facts.nutrition.vitamines.push(nitacin);


            console.log(`Al donut llamado ${item.name} se le ha añadido la vitamina nitacina.`)
            item.nutrition_facts.nutrition.vitamines.map(item=> console.log(item.type))
        }
    })
}


function addAlergen(items){


    items.map(item=>{


        if(item.name.includes(`Relaxing`)){
           
            item.alergen =  `Gluten Free`;
            console.log(`Al donut llamado ${item.name} se le ha añadido la el atributo Alergen: ${item.alergen}.`)
        }
    })
}

export function fase5(items){

    console.log(` `);
    console.log(`Fase 5`)
    console.log(`--------------------------------------`);
    modifyTransFat(items);
    modifyCarbohydrates(items);
    modifyCarbohydratesDailyValue(items);
    addVitamine(items);
    addAlergen(items);
}