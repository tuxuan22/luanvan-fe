export const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    return formattedPrice
}