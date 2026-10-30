export const setPrice=(price,discount)=>{
    const discountedPrice=()=>price-((price/100)*discount);
    return(discount ===0 ?price.toLocaleString("fa-IR"):discountedPrice(price,discount).toLocaleString("fa-IR"))
  }
