import { useState } from "react";
import React from "react";

const Header = () => {
    // Товари в наявності
    const product = [
        {key: 'phone', name: 'iphone',price: 10000},
        {key: 'technics', name: 'boiler',price: 30000},
        {key: 'equipment', name: 'TV',price: 40000},
        {key: 'android', name: 'Xiaomi',price: 20000},
        {key: 'Car', name: 'Pego',price: 80000},
    ]


    const [currentProd, setCurrentProd] = useState(product[0].key)

    const changeProd = (productKey) =>{
        setCurrentProd(productKey)
        console.log('prodkey',productKey)
    }

    // -----------------------

    // Кількість товарів

    const [currentQuantity, setQuantity] = useState(0);

    const changeIncQuantity = () =>{
        setQuantity(currentQuantity + 1)
    }

    const changeDecQuantity = () => {
        setQuantity(currentQuantity -1)
    }
    //----------------------

    // Розрахунок ціни в залежності від кількості та обраного товару

    const [currentPrice, setPrice] = useState(0)


    const changePrice = (productPrice) =>{
        const selectedProduct = product.find(prod => prod.key === currentProd);
        if (selectedProduct) {
            setPrice(selectedProduct.price * currentQuantity);
        }

    }


    return(
        <>
            <h1>Поточний обраний продукт:{currentProd}</h1>
            <h1>Кількість обраного товару: {currentQuantity}</h1>
            <h2>Наявність продуктів</h2>
            {product.map((prod)=>(
                <div key = {prod.key} onClick={() => changeProd(prod.key)}>{prod.key}</div>
            ))}

            <h2>Змінити кількість</h2>
            <button onClick = {changeIncQuantity}>Додати</button>
            <button onClick = {changeDecQuantity}>Прибрати</button>

            <h2>Порахувати ціну</h2>
            <button onClick={changePrice}>Зробити Розрахунок</button>
            <div>Ціна: {currentPrice}</div>
        </>
    )
   
}

export default Header;