/*jshint node: true */
"use strict";

var has = require('edcs-has'),
    url = require('edcs-url');

module.exports = {

    /**
     * Pushes the new state to the browsers history.
     *
     * @param state
     * @return {void}
     */
    push: function (state) {
        var queryString = url.buildQueryString(state);

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
        var queryString = url.buildQueryString(state);

        if (has.history()) {
            window.history.replaceState(state, null, queryString);
        }
    }
};
