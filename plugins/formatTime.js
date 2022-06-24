export default (context, inject) => {
    const formatTime = (val) => {
        // 0:00:00.600000

        if (val == null) return '-- h -- m -- s'

        const [h,m,s] = val.split(':');

        return `${h} h ${m < 10 ? m[1] : m} m ${parseFloat(s)} s`; 
    }
    inject('formatTime', formatTime)
}