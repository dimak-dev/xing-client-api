/**
 * Enum representing supported currencies.
 *
 * @enum {string}
 * @property {string} EUR - Euro currency.
 * @property {string} USD - US Dollar currency.
 * @property {string} GBP - British Pound currency.
 * @property {string} CHF - Swiss Franc currency.
 *
 * @example
 * Currency.EUR // "EUR"
 * Currency.USD // "USD"
 * Currency.GBP // "GBP"
 * Currency.CHF // "CHF"
 */
export enum EXingCurrency {
    /** Euro currency. */
    EUR = 'EUR',

    /** US Dollar currency. */
    USD = 'USD',

    /** British Pound currency. */
    GBP = 'GBP',

    /** Swiss Franc currency. */
    CHF = 'CHF',
}
