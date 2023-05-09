class CurrencySdk {

    static getFormattedCreditString(num, isInteger = false) {
        //clamp away js auto added decimal part
        const clamped_num = parseFloat(num.toFixed(10));
        let result_str = clamped_num.toString();
        //locale
        const locale_opt = {
            minimumFractionDigits: isInteger ? 0 : 2,
            maximumFractionDigits: isInteger ? 0 : 2,
            style: 'decimal'
        };
        result_str = clamped_num.toLocaleString(undefined, locale_opt);
        return result_str;
    }

    static getThinCreditString(num, isInteger = false) {
        if (num > -1e3 && num < 1e3) {
            return this.getFormattedCreditString(num, isInteger);
        }
        const locale_opt = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
            style: 'decimal'
        };
        let newVal = Math.trunc(num);
        let thin_char = '';

        let isNegativeValue = false;
        if (newVal < 0) {
            isNegativeValue = true;
            newVal *= -1;
        }

        if (newVal >= 1e3 && newVal < 1e6) {
            newVal = newVal / 1e3;
            thin_char = 'K';
        }
        if (newVal >= 1e6 && newVal < 1e9) {
            newVal = newVal / 1e6;
            thin_char = 'M';
        }
        if (newVal >= 1e9 && newVal < 1e12) {
            newVal = newVal / 1e9;
            thin_char = 'B';
        }
        if (newVal >= 1e12) {
            newVal = newVal / 1e12;
            thin_char = 'T';
        }
        //round DOWN to 3 digits after decimal point
        const re = new RegExp("(\\d+\\.\\d{3})(\\d)");
        const m = newVal.toString().match(re);
        newVal = m ? parseFloat(m[1]) : newVal;
        let result_str = newVal.toLocaleString(undefined, locale_opt);
        if (isNegativeValue) {
            result_str = '-' + result_str;
        }
        result_str += thin_char;
        return result_str;
    }
}