
/**
 * esta funcion es para calcular el precio total de la nueva orden 
 * @param {array} products cart product es un array de objetos 
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let  sum = 0 
    products.forEach(product => sum += product.price)   
    return sum
}