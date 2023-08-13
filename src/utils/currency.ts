export const replaceCommaWithDot = (str: string): string => {
  return str.replace(",", ".")
}
export const formatPrice = (priceToFormat: number): string => {
  if (priceToFormat === 0) return "0,00 €"

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    useGrouping: true
  }).format(priceToFormat)
}

//x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")