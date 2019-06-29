'use strict';
/**
 * @fileOverview A JavaScript framework manager.
 * @author Ivan Ilic <me@mrisaacs.org>
 * @version 3.0.0
 */
var Manic = (function(doc){
    const _this = {
        /**
         * Iterable collection of services. Each service contains the `url` and
         * `init` function, which is called in `loadServices`.
         * @type {Service}
         * @property {Service} [framework] - The framework of your desire.
         * @property {Service} [markdown] - The markdown of your wish.
         * @property {Service} [route] - The route service of your use.
         */
        [Symbol.for('services')] : {
            /**
             * Service's iterator protocol. Scope of _this_ is attached to the
             * class. However as from _next_ function's scope we can get the
             * scope of the services Symbol and pass it for information
             * gatering.
             */
            [Symbol.iterator]: () => ({
                _first: true,
                _i: 0,
                init: (sthis) => {
                    // because of the arrow function _this_ is not bound to the
                    // Symbol iterator
                    sthis.services = _this[Symbol.for('services')];
                    sthis.items = Object.keys(sthis.services);
                },
                next: function next () {
                    // scope of this remains to the symbol
                    if (this._first) {
                        /**
                         * Use to indicate wheter the Service iterator is
                         * running for the first time. If so, then initialize
                         * the services into an item list.
                         * @type {boolean}
                         */
                        this._first = false;
                        this.init(this);
                    }
                    return {
                        done: this.items.length === this._i ,
                        value: _this[Symbol.for('services')][this.items[this._i++]]
                    };
                }
            }),
            framework: {
                url: ["mootools","mootools-more"],
                init: () => {
                    _this.contextMgr.push($$("div#wrapper ^ div")[0]);
                    _this.contextMgr.push($$(".article-layer")[0]);
                }
            },
            route: {
                url: "navigo",
                instance : "undefined",
                init: () => {
                    let url = new URL(window.location.href);
                    let searchParams = new URLSearchParams(url.search);

                    /**
                     * @todo If URL changes, pass over search params trigger
                     * reuqestchange with the
                     */
                    on("requestchange", () => {
                        /**
                         * @todo This block must be triggerd on urlchange.
                         */
                        searchParams.set("q", _this.request.slug);

                        if(_this.request.type === "list") {
                            searchParams.set("type", _this.request.type || "list");
                        } else {
                            searchParams.delete("type");
                        }

                        if(_this.request.id) {
                            searchParams.set("id", _this.request.id);
                        } else {
                            searchParams.delete("id");
                        }

                        var stateObj = { foo: "bar" };
                        history.pushState(
                            stateObj,
                            "Manic" + (_this.request.slug).toUpperCase(),
                            "?" + searchParams.toString()
                        );

                        /**
                         * @todo: in the end it must render a node, not a slug
                         */
                        render(_this.request.slug);
                    });
                }
            },
            markdown: {
                url: ["showdown", "moodown"],
                handle: (request, next) => {
                    return next(request);
                },
                refresh: "undefined",
                init: () => {
                    /**
                     * @todo It seems that the click event is trigger twice.
                     * Prevent eventlistener in the same custom event.
                     */
                    on("urlchange", () => {
                        let i = document.getElementsByTagName("a").length;

                        for (let j = 0; j < i; j++){
                            document.getElementsByTagName("a")[j].addEventListener("click", event => {
                                event.preventDefault();

                                _this.request.id = event.target.dataset.hasOwnProperty("id") ? event.target.dataset.id : null;
                                _this.request.type = event.target.dataset.hasOwnProperty("id") ? "info" : "list";
                                _this.request.slug = event.target.dataset.link;

                                /**
                                 * @todo move requestchange basics to the core.
                                 * @todo pass over _request parameter
                                 */
                                trigger("requestchange", {
                                    id : event.target.dataset.hasOwnProperty("id") ? event.target.dataset.id : null,
                                    type : event.target.dataset.hasOwnProperty("id") ? "info" : "list",
                                    slug : event.target.dataset.link
                                });
                            });
                        }
                    });
                }
            }
        },
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

    /**
     * Returns current version number.
     * @since 2.0.0
     * @return {string} Returns the version number as `major.minor.patch`.
     */
    const version = function() {
        // return _this.version[arguments[0];
        return `${_this.version.major}.${_this.version.minor}.${_this.version.patch}`;
    };

    /**
     * @since 2.0.0
     * @todo write docs about it...
     */
    const isArray = function(e) {
        if (Object.prototype.toString.call(e) === "[object Array]") {
            return true;
        } else  {
            return false;
        }
    }

    /**
     * @since 2.0.0
     * @todo write docs about it...
     */
    const isPromise = function(e) {
        if (Object.prototype.toString.call(e) === "[object Promise]") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Creates a asynchronous function on the fly, which can be invoced by the
     * trigger function.
     * @param {string} eventName Functionname to be created
     * @param {function} [fn] Function which will be called with respect to the
     * `eventName`.
     */
    const on = async function(eventName, fn) {
        _this.events[eventName] = _this.events[eventName] || [];
        _this.events[eventName].push(fn);
    };

    /**
     * Deletes a function with a given name and its function. It can not be
     * triggered afterwards.
     * @todo events must also be mutable
     * @param {string} eventName `eventName` to be deleted.
     * @param {function} [fn] Function which will be deleted with respect to
     * `eventName`
     */
    const off = async function(eventName, fn) {
        if (_this.events[eventName]) {
            for (var i = 0; i < _this.events[eventName].length; i++) {
                if (_this.events[eventName][i] === fn) {
                    _this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    /**
     * Triggers eventName as a function and assigns data as parameter.
     * @todo: description of data is needed
     * @param {string} eventName Function which will be called
     * @param {Object} [data] Parameter for assigning to function
     */
    const trigger = async function(eventName, data) {
        if (_this.events[eventName]) {
            _this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

    const load = async function(context, file, extension) {
        return await fetch("./" + context + "/" + file + "." + extension);
    };

    /**
     * @since 2.0.0
     * @todo write docs about it...
     * @param {string} url URL is taken from {@Service} to request for its
     * script.
     */
    const loadJS = async function(url) {
        return await load("js", url, "js");
    };

    /**
     * Registers the service in a stack when loading services.
     * Just registered services can be initialized.
     * Register service reads the configuration jsonld file before
     * the initialize function can use it.
     *
     */
    const register = async function(service) {
        _this.service
    }

    /**
     * Load service and initialize if function _init_ exists. If `service.url`
     * is an array of URL's, then load every index, before calling _init_
     * @since 2.2.0
     * @param {Service} service
     */
    const loadServices = function(service) {
        console.log("==============");
        console.log(service);
        if (isArray(service.url)) {
            service.url.map(function(item){
                return initializeService(service, item);
            });
        } else {
            return initializeService(service, [service.url]);
        }
    };

    const initializeService = function() {
        let service = arguments[0];
        let url = arguments[1];

        if (1) {
            console.log("hasOwnProperty: " + service.hasOwnProperty("init"));
            console.log("isArray: " + isArray(service.url));
            console.log("Last element: " + (isArray(service.url)?service.url[service.url.length-1]:url));
            console.log("url: " + url);
            // console.log(isArray(service.url)&&(service.url[service.url.length-1]===url));

        }
        // console.log(service.hasOwnProperty("init") && isArray(service.url));

        return loadJS(url).then(response => {
            injectScript(response)
            .then(()=>{

                if ( (
                     isArray(service.url)
                       ? service.url[service.url.length-1]
                       : url
                     ) == url
                   ) {
                    // console.log("===== so true: " + url);
                    service.init(new Function(response.script)());
                }
            });
        });
    }

    /**
     * Iterate through services and call `loadServices` for each service.
     * @since 2.0.0
     * @todo redefine scriptCollection
     * @return {string} Injects scrtipts for each needed service at the
     *                  bottom of the document, before body ends.
     */
    const scriptCollection = function() {
        let services = _this[Symbol.for('services')];
        let sequence = Promise.resolve();

        for (let service of services) {
            sequence = sequence.then(() => {
                return loadServices(service);
            });
        }
    }

    const registerService = async function(){};

    /**
     * Injects script to document before body ends. Called by `loadServices`.
     * @todo Bind each script with its service.
     * @since 2.2.0
     * @param {Object} response
     * @param script !NOT USED! Passed over parameter doesn't do anything.
     * @see https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file/950146#950146
     */
    const injectScript = async function(script) {
        let s = doc.createElement("script");
        s.src = script.url;
        doc.body.appendChild(s);
    }

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
    const appendScript = function(file) {
        let script = load("js", file, "js");
        var s = doc.createElement("script");
        s.src = script.url;
        doc.body.appendChild(s);
    };

    /**
     * Defines the urlchange event. Call requestchange event if url
     * has changed. / Tracks an urlchange event occurs.
     * @todo It seems that the click event is trigger twice. Pprevent same
     * eventlistener in the same custom event.
     */
    on("urlchange", () => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);

        /**
         * @todo: refactor ternary operator
         */
        _this.request.id = searchParams.has("id")
            ? searchParams.get("id")
            : _this.request.id;
        _this.request.type = searchParams.has("type")
            ? searchParams.get("type")
            : _this.request.info;
        _this.request.slug = searchParams.has("q")
            ? searchParams.get("q")
            : _this.request.home;
    });

    doc.onreadystatechange = async() => {
        // Core Level 3 Document Object readyState
        if (doc.readyState === "complete") {
            var i = doc.getElementsByTagName("a").length;
            for (let j = 0; j < i; j++){
                doc.getElementsByTagName("a")[j].addEventListener("click", event => {
                    // this.trigger("urlchange");
                    /**
                     * @todo: handle/trigger click events
                     */
                    event.preventDefault();
                });
            }

            scriptCollection();
        }
    };

    return {
        getContext : getContext,
        getData : getData,
        appendScript : appendScript,
        version : version,
        services : _this[Symbol.for('services')]
    };
}(document));
