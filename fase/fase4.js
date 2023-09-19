function buyDonuts(items){


    const coins = 4;
    items.map(item=>console.log(`Podremos comprar ${Math.floor(coins/item.ppu)} donuts ${item.name} y nos sobrara un total de ${(coins%item.ppu).toFixed(2)} monedas.`))
}

export function fase4(items){

    console.log(` `);
    console.log(`Fase 4`)
    console.log(`--------------------------------------`);
    buyDonuts(items)
}