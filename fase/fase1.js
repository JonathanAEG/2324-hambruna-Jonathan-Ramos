function donutSugar(items){

    const maxSugarValue = items.reduce((max,item)=> Math.max(max, parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars))
    ,parseInt(items[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars));

    items.filter(item=> parseInt(item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) === maxSugarValue).map(item=> console.log(`El Donut con más Azucar es ${item.name}`));
}

function donutIron(items){

    const ironValues = [];

    items.map(item=> item.nutrition_facts.nutrition.vitamines.map(vitamine=> {

            if(vitamine.type === `Iron`){

                ironValues.push(parseInt(vitamine.percent));
            }
    }))

    const ironMaxValue = ironValues.reduce((max, value)=> Math.max(max, value));

    items.map(item=>{

        item.nutrition_facts.nutrition.vitamines.map(vitamine=>{

            if(parseInt(vitamine.percent) === ironMaxValue && vitamine.type === `Iron`){
                console.log(`El donut con más hierro es ${item.name}`)
            }
        })
    })
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

export function fase1(items){

    console.log(`Fase 1`)
    console.log(`--------------------------------------`);
    donutSugar(items);
    donutIron(items);
    donutProteine(items);
    donutFibre(items);
}