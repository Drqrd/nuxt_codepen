export default (context, inject) => {
    const month = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const formatDate = (val, form='MDY') => {
        // "Wed, 29 Dec 2021 21:50:14 GMT"
        const [,d, m, y,] = val.split(' ');

        return form === 'DMY' ? `${d}/${month.indexOf(m) + 1}/${y}` : `${month.indexOf(m) + 1}/${d}/${y}`; 
    }
    inject('formatDate', formatDate)
}