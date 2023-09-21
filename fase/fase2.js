function listDonutCalories(items){


    items.map(item=>console.log(`El donut llamado ${item.name} aporta un total de ${item.nutrition_facts.nutrition.calories} calorías`));
}


function listDonutCarbohydrates(items){


    items.map(item=>console.log(`El donut llamado ${item.name} contiene ${item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount} de carbohidratos`));
}


function donutCaloriesAverage(items){


    const caloriesAverage = items.reduce((count, item)=> count + item.nutrition_facts.nutrition.calories, 0)/items.length;
    console.log(`La media de calorías de los donuts es de: ${caloriesAverage}`)
}


function donutSaturatedFatSum(items){


    const saturatedFatSum = items.reduce((count, item)=> count + parseInt(item.nutrition_facts.nutrition.fat.fat_type.saturated), 0);
    console.log(`La suma de las grasas saturadas de los donuts es de: ${saturatedFatSum}`)
}

function vitamineAverage(items){


    const vitamineValues = items[0].nutrition_facts.nutrition.vitamines.filter(vitamine => vitamine);
    vitamineValues.map(vitamine=>  vitamine.percent = 0);


    items.map(item=> item.nutrition_facts.nutrition.vitamines.map(vitamine=> {

        vitamineValues.map(vitamineValuesVitamine=>{

            if(vitamineValuesVitamine.type === vitamine.type){

                vitamineValuesVitamine.percent += parseInt(vitamine.percent);
            }
        })
    }))

    vitamineValues.map(vitamine=> console.log(`El porcentaje medio de la vitamina ${vitamine.type} en los donuts es del ${vitamine.percent/items.length}%.`))
}

export function fase2(items){
    
    console.log(` `);
    console.log(`Fase 2`)
    console.log(`--------------------------------------`);
    listDonutCalories(items);
    listDonutCarbohydrates(items);
    donutCaloriesAverage(items);
    donutSaturatedFatSum(items);
    vitamineAverage(items);
}