export default (context, inject) => {
    const log = (val) => {
        console.log(val)
    }

    inject('log', log)
}