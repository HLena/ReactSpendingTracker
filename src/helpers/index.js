export const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
}

export const formatDate = (date) => {
    const newDate = (typeof date === 'string' ) ? new Date(date): date;
    return newDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      })
}

export const formatQuantity = (quantity) => {
    return quantity.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
};