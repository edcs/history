/*jshint node: true */
"use strict";

var has = require('edcs-has');
var qs = require('qs');

module.exports = {

    /**
     * Build a query string.
     *
     * @param state
     * @returns {*}
     */
    buildQueryString: function (state) {
        if (typeof state === 'object') {
            state = qs.stringify(state);
        }

        return '?' + state;
    },

    /**
     * Pushes the new state to the browsers history.
     *
     * @param state
     * @return {void}
     */
    push: function (state) {
        var queryString = this.buildQueryString(state);

        if (has.history()) {
            window.history.pushState(state, null, queryString);
        }
    },

    /**
     * Replaces the current browser history state.
     *
     * @param state
     * @return {void}
     */
    replace: function (state) {
        var queryString = this.buildQueryString(state);

        if (has.history()) {
            window.history.replaceState(state, null, queryString);
        }
    }
};
