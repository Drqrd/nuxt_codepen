export default (context, inject) => {
    const isDefaultProp = function (prop) {
        return this.$options.propsData.hasOwnProperty(prop);
    }
    inject('isDefaultProp', isDefaultProp)
}