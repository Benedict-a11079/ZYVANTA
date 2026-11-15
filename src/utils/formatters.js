/**
 * Formats a number to Indian Rupee currency string, e.g. ₹21,15,000
 */
export function formatINR(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Formats a number to Lakhs notation, e.g. ₹21.15 Lakh
 */
export function formatLakhs(amount) {
  if (!amount || isNaN(amount)) return '₹0';
  const inLakhs = (amount / 100000).toFixed(2);
  return `₹${inLakhs} Lakh`;
}

/**
 * Formats date to Indian readable format
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
