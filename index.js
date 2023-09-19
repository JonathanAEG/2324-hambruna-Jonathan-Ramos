

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
        donutFibre(items)

        console.log(result.items.item[4].nutrition_facts.nutrition.proteine)

        return console.log(result);
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








