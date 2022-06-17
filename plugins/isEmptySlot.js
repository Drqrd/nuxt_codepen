export default (context, inject) => {
    const isEmptySlot = function(name = 'default') {
        return this.$slots[name] === undefined;
    }
    inject('isEmptySlot', isEmptySlot)
}