var Navigation = function() {
    this.$navigation = $("#js-navigation");
    this.$hamburger = $("#js-hamburger");
};

Navigation.prototype = {

    constructor: Navigation,

    init: function() {
        this.$hamburger.click(this.toggle.bind(this));
    },

    toggle: function() {
        this.$hamburger.toggleClass("active");
        this.$navigation.slideToggle(200);
    }

};

$(document).ready(function() {
    var navigation = new Navigation();
    navigation.init();
});