'use strict';
/**
 * @fileOverview A JavaScript framework manager.
 * @author Ivan Ilic <me@mrisaacs.org>
 * @version 3.0.0
 */
var Manic = (function(doc){
    const _this = {
        /**
         * @type {Object}
         * @property {number} major
         * @property {number} minor
         * @property {number} patch
         */
        version : {
            major: 3,
            minor: 0,
            patch: 0
        },
        /**
         * @type {Object}
         * @property {string} eventName
         * @property {function} fn
         * @todo Make CustomEvents. See Mozilla documentation link.
         * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
         */
        events : {},
        /**
         * @type {Object}
         * @property {number} id=1 Id of requested article.
         * @property {string} type=info Defines what type of data is requested.
         *                         `type` can be `info` or `list`.
         * @property {string} slug=home Defines what page is requested to be
         *                         rendered.
         * @todo change request properties
         */
        request : {
            id : 1,
            type : "info",
            slug : "home"
        },
        /**
         * @type {Object}
         * @todo Handle response via member.
         */
        response : {},
        /**
         * @type {Object}
         * @property {Object} container
         * @property {Object} content
         */
        contextMgr : {
            container : "",
            content : ""
        }
    };

    const load = async function(context, file, extension) {
        return await fetch("./" + context + "/" + file + "." + extension);
    };

    const getContext = async function(file) {
        return await load("contexts", file, "jsonld");
    };

    const getData = async function(context, file) {
        return await load("data/" + context, file, "jsonld");
    };

    /**
     * @todo: add `getScript` to request a script from the
     *        package inventory, which returns the library
     *        with some metadata
     */
    const appendScript = async function(file) {
        let script = await load("js", file, "js");
        var s = doc.createElement("script");
        s.src = script.url;
        doc.body.appendChild(s);
    };

    doc.onreadystatechange = () => {
        // Core Level 3 Document Object readyState
        if (doc.readyState === "complete") {
            var i = doc.getElementsByTagName("a").length;
            for (let j = 0; j < i; j++){
                doc.getElementsByTagName("a")[j].addEventListener("click", event => {
                    /**
                     * @todo: handle/trigger click events
                     */
                    event.preventDefault();
                });
            }
        }
    };

    return {
        getContext : getContext,
        getData : getData,
        appendScript : appendScript
    };
}(document));
