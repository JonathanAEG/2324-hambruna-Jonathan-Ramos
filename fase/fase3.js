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


export function fase3(items){

    console.log(` `);
    console.log(`Fase 3`)
    console.log(`--------------------------------------`);
    listDonutsBatter(items);
    listDonutsTopping(items);
}