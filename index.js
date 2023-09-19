

const getAllItems = async()=>{

    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response=>response.json());
}
const fetchAsyncData = async()=>{

    try{
        const result =  await getAllItems()

        const items = result.items.item;

        donutSugar(items);
        donutHierro(items);
        donutProteine(items);
        donutFibre(items);
        listDonutCalories(items);
        listDonutCarbohydrates(items);
        donutCaloriesAverage(items);
        donutSaturatedFatSum(items);
        vitamineAverage(items);
        listDonutsBatter(items);
        listDonutsTopping(items);
        buyDonuts(items);
        modifyTransFat(items);
        modifyCarbohydrates(items);
        modifyCarbohydratesDailyValue(items);
        addVitamine(items);
        addAlergen(items);

    }catch(error){

        console.log(error.message)
    }
}

fetchAsyncData();



///////////////////
////Fase 1
///////////////////


//Donut con más azucar

function donutSugar(items){

    const maxSugarValue = items.reduce((max,item)=> Math.max(max, parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars))
    ,parseInt(items[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars));

    items.filter(item=> parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) === maxSugarValue).map(item=> console.log(`El Donut con más Azucar es ${item.name}`));
}

function donutHierro(items){

    const maxIronValue = items.reduce((max,item)=> Math.max(max, parseInt(item.nutrition_facts.nutrition.vitamines[3].percent))
    ,parseInt(items[0].nutrition_facts.nutrition.vitamines[3].percent));
    items.filter(item=> parseInt(item.nutrition_facts.nutrition.vitamines[3].percent) === maxIronValue).map(item=> console.log(`El Donut con más hierro es ${item.name}`));

}

function donutProteine(items){

    const maxProteinValue = items.reduce((max,item)=> Math.max(max, parseInt(item.nutrition_facts.nutrition.proteine))
    ,parseInt(items[0].nutrition_facts.nutrition.proteine));

    items.filter(item=> parseInt(item.nutrition_facts.nutrition.proteine) === maxProteinValue).map(item=> console.log(`El Donut con más proteinas es ${item.name}`));
}

function donutFibre(items){


    const minFibreValue = items.reduce((min, item) => Math.min(min, parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)),
    parseInt(items[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) );


    items.filter(item=> parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) === minFibreValue).map(item=> console.log(`El Donut con Menos Fibra es: ${item.name}`));
}

///////////////////
/////Fase 2
///////////////////

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

                vitamineValuesVitamine.percent =+ parseInt(vitamine.percent);
            }
        })
    }))

    vitamineValues.map(vitamine=> console.log(`El porcentaje medio de la vitamina ${vitamine.type} en los donuts es del ${vitamine.percent/items.length}%.`))
}

///////////////////
/////Fase 3
///////////////////

function listDonutsBatter(items){


    items.map(item=>{
        console.log(`El donut llamado ${item.name} dispone de las siguientes masas:`)
        item.batters.batter.map(item=> console.log(item.type))
    })
}


function listDonutsTopping(items){


    items.map(item=>{
        console.log(`El donut llamado ${item.name} dispone de los siguientes toppings:`)
        item.topping.map(item=> console.log(item.type))
    })
}

///////////////////
/////Fase 4
///////////////////



function buyDonuts(items){


    const coins = 4;
    items.map(item=>console.log(`Podremos comprar ${Math.floor(coins/item.ppu)} donuts ${item.name} y nos sobrara un total de ${(coins%item.ppu).toFixed(2)} monedas.`))
}


///////////////////
/////Fase 5
///////////////////
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
