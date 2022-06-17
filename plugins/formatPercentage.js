export default (context, inject) => {
    const formatPercentage = (val) => {
        return val.toFixed(3) * 100 + '%';
        //return +(Math.round(val + 'e+3')) / 10 + '%';
    }
    inject('formatPercentage',formatPercentage)
}