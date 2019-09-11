'use strict';
/**
 * @fileOverview A JavaScript framework manager.
 * @author Ivan Ilic <me@mrisaacs.org>
 * @version 3.0.2
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
                url: ['mootools','mootools-more'],
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogZnJhbWV3b3JrIik7CndpbmRvdy5NYW5pYy5jb250ZXh0TWdyPXsKd3JhcHBlcjokJCgiZGl2I3dyYXBwZXIgXiBkaXYiKVswXSwKYXJ0aWNsZTokJCgiLmFydGljbGUtbGF5ZXIiKVswXQp9Ow=='
            },
            route: {
                url: 'navigo',
                instance : 'undefined',
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogcm91dGUiKTsKbGV0IG9uID0gd2luZG93Lk1hbmljLm9uOwpsZXQgdHJpZ2dlciA9IHdpbmRvdy5NYW5pYy50cmlnZ2VyOwpsZXQgcmVuZGVyID0gd2luZG93Lk1hbmljLnJlbmRlcjsKbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpOwpsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoKTsKCm9uKCJyZXF1ZXN0VXJsQ2hhbmdlIiwgKHBhcmFtcykgPT4gewogICAgd2luZG93Lk1hbmljLnJlcXVlc3QgPSBwYXJhbXM7CgogICAgc2VhcmNoUGFyYW1zLnNldCgicSIsIHBhcmFtcy5zbHVnKTsKCiAgICBpZihwYXJhbXMudHlwZSA9PT0gImxpc3QiKSB7CiAgICAgICAgc2VhcmNoUGFyYW1zLnNldCgidHlwZSIsIHBhcmFtcy50eXBlIHx8ICJsaXN0Iik7CiAgICB9IGVsc2UgewogICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoInR5cGUiKTsKICAgIH0KCiAgICBpZihwYXJhbXMuaWQpIHsKICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KCJpZCIsIHBhcmFtcy5pZCk7CiAgICB9IGVsc2UgewogICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoImlkIik7CiAgICB9CgogICAgdmFyIHN0YXRlT2JqID0ge2ZvbzogImJhciJ9OwogICAgaGlzdG9yeS5wdXNoU3RhdGUoCiAgICAgICAgc3RhdGVPYmosCiAgICAgICAgIk1hbmljIiArIChwYXJhbXMuc2x1ZykudG9VcHBlckNhc2UoKSwKICAgICAgICAiPyIgKyBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKQogICAgKTsKCiAgICAvKnRyaWdnZXIoInJlbmRlciIsIHBhcmFtcy5zbHVnKSovCiAgICByZW5kZXIocGFyYW1zLnNsdWcpOwp9KTs='
            },
            markdown: {
                url: ['showdown', 'moodown'],
                handle: (request, next) => {
                    return next(request);
                },
                MooDown: null,
                refresh: 'undefined',
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogbWFya2Rvd24iKTsKbGV0IG9uID0gd2luZG93Lk1hbmljLm9uOwpsZXQgdHJpZ2dlciA9IHdpbmRvdy5NYW5pYy50cmlnZ2VyOwpsZXQgcmVxdWVzdCA9IHdpbmRvdy5NYW5pYy5yZXF1ZXN0OwpsZXQgcmVuZGVyID0gd2luZG93Lk1hbmljLnJlbmRlcjsKd2luZG93Lk1hbmljLnNlcnZpY2VzLm1hcmtkb3duLk1vb0Rvd24gPSBNb29Eb3duOwoKb24oInJlcXVlc3RVcmxDaGFuZ2UiLCAoKSA9PiB7CiAgICBsZXQgaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJhIikubGVuZ3RoOwoKICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKXsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiYSIpW2pdLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgZXZlbnQgPT4gewogICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwoKICAgICAgICAgICAgcmVxdWVzdC5pZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lmhhc093blByb3BlcnR5KCJpZCIpID8gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQgOiBudWxsOwogICAgICAgICAgICByZXF1ZXN0LnR5cGUgPSBldmVudC50YXJnZXQuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSgiaWQiKSA/ICJpbmZvIiA6ICJsaXN0IjsKICAgICAgICAgICAgcmVxdWVzdC5zbHVnID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQubGluazsKCiAgICAgICAgICAgIHRyaWdnZXIoInJlcXVlc3RjaGFuZ2UiLCB7CiAgICAgICAgICAgICAgICBpZCA6IGV2ZW50LnRhcmdldC5kYXRhc2V0Lmhhc093blByb3BlcnR5KCJpZCIpID8gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQgOiBudWxsLAogICAgICAgICAgICAgICAgdHlwZSA6IGV2ZW50LnRhcmdldC5kYXRhc2V0Lmhhc093blByb3BlcnR5KCJpZCIpID8gImluZm8iIDogImxpc3QiLAogICAgICAgICAgICAgICAgc2x1ZyA6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmxpbmsKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZW5kZXIocmVxdWVzdC5zbHVnKTsKICAgICAgICB9KTsKICAgIH0KfSk7'
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
            patch: 2
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
    };

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
    };

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
     * @since 2.1.1
     * @param {string} url URL to load the JSON file
     */
    const loadJSON = async function(url) {
        return await load('data', url, 'json');
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
     * Get source code and invoke it with given _init_ code. If `service.url` is an array of
     * URL's, then load every index, before calling _init_.
     * @since 2.1.1
     * @todo check if `service.init` exists
     * @param {Object} service An object in form of {url: 'someUrl',init: 'someBase64StringCode'}
     */
    const initializeService = async function(service) {
        let codeScope = '';

        if (isArray(service.url)) {
            return service.url.reduce((sequence, url) => {
                return sequence.then(function() {
                    return getSourceCode(url);
                }).then(function(code) {
                    codeScope += code + '\n';
                });
            }, Promise.resolve(
            )).then(function() {
                new Function(codeScope + '\n' + atob(service.init))();
            });
        } else {
            return getSourceCode(service.url).then((code) => {
                new Function(code + '\n' + atob(service.init))();
            });
        }
    };

    /**
     * Iterate through services and initialize collection of services for
     * each service.
     * @since 2.0.0
     * @return {Promise} Returns a Promise which initializes each service-
     *                   collection.
     */
    const loadServices = function() {
        let services = _this[Symbol.for('services')];
        let sequence = Promise.resolve();

        for (let service of services) {
            sequence = sequence.then(() => {
                return initializeService(service);
            });
        }
    };

    const registerService = async function(){};

    /**
     * Injects script in document before body ends. Called by `loadServices`.
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
     * @param {string} filename A JavaScript filename.
     * @return {Promise} Returns a Promise of the source code.
     */
    const getSourceCode = function(filename) {
        let script = load('js', filename, 'js');

        return script.then((data) => {
            return data.text().then((code) => {
                return code;
            });
        });
    };

    /**
     * Renders the content of the requested size.
     * Renamed in version 3.0.0 from content to render
     * @since 2.1.1
     * @param {string} site The Slug of a site to be rendered.
     */
    const render = function(site) {
        'use strict';

        loadJSON(site).then(response => {
            return response.text().then(stringData => {
                return JSON.parse(stringData);
            }).then(json => {
                // start loading animation
                if(_this.request.type === 'info') {
                    // show shimmer animation
                    $$('.article-layer').addClass('hidden no-anim');
                    $$('.shimmer-layer').addClass('no-anim');
                    $$('.shimmer-layer').removeClass('hidden');

                    // @todo: check if the same info were requested
                    if ($('list')) {
                        $('list').destroy();
                    }
                } else if (_this.request.type === 'list') {
                    // todo: check if the same list were requested
                    if ($('detail')) {
                        $('detail').destroy();
                    }
                }
                return json;
            });
        }).then(response => {
            let services = _this[Symbol.for('services')];
            let MooDown = services.markdown.MooDown;
            // todo: extract info and list as functions
            // INFO
            if(_this.request.type === 'info') {
                var requestID   = _this.request.id;
                var index       = response.index[requestID.toString()];
                var article     = response.data[index];
                // todo: use addAttribute
                var content = `<div class=\"one-third column\">
                                  <a class=\"avatar-wrapper\">
                                      <span class=\"initial\">
                                        M
                                      </span>
                                      <span class=\"integral\">
                                        ∫
                                      </span>
                                  </a>
                              </div>`;

                // prevent a second detail-element is being created
                // when one already exists
                if (!$('detail')) {
                    var detail = new Element('div',{
                        'id'    : 'detail',
                        'class' : 'row section content',
                        html    : content
                    }).inject(_this.contextMgr.container, 'bottom');
                    new Element('div',{
                        'class' : 'main-article two-thirds column',
                        html    : `<div class=\"article-layer\">
                                  <h1 id=\"main-title\"></h1>
                                  <p id=\"main-date\"></p>
                                  <p id=\"main-body\"></p>
                                  </div>`
                    }).inject(detail);
                }

                // todo: exchange document title with a variable
                document.title = 'Manic - ' + article.title;

                $('main-title').set('text', article.title);
                $('main-date').set('text', new Date(article.date).timeDiffInWords());
                $('main-date').set('title', article.date);

                new MooDown('main-body', {
                    markdown    : article.body
                });
            }
            // LIST
            else if(_this.request.type === 'list') {
                // last added content in json files must go to data[0]
                var id = response.data[0].id;
                var container = [];

                if (!$('list')) {
                    for(let i = 0; i < response.data.length; i++) {
                        let index   = response.index[id];
                        let content = '';
                        /**
                         * push a section to the container
                         */
                        if(!(i % 3)) {
                            container.push(new Element('div', {
                                'class' : 'row section list'
                            }));
                        }
                        // todo: use addAttribute
                        content += '<h3><a data-navigo data-id=\"';
                        content += response.data[index].id;
                        content += '\" href=\"';
                        content += response.data[index].link + '/' + response.data[index].id;
                        content += '\" data-link=\"';
                        content += response.data[index].link;
                        content += '\">';
                        content += response.data[index].title;
                        content += '</a></h3>';
                        content += '<p>';
                        content += response.data[index].short;
                        content += '</p>';
                        /**
                         * add new element to the bottom in the
                         * current container
                         */
                        new Element('div',{
                            'class' : 'short-article one-third column',
                            html    : content
                        }).inject(container[container.length - 1], 'bottom');
                        // if the previous id isn't null get previous
                        if(prev(response, id) !== null) {
                            id = prev(response, id).id;
                        }
                    }
                    new Element('div',{
                        'id'    : 'list'
                    }).inject($('wrapper').getFirst());
                    for(var i = container.length - 1; i >= 0; i--) {
                        container[i].inject($('list'), 'top');
                    }
                }

                // todo: exchange document title with a variable
                document.title = 'Manic - ';// + article.title;
            }

            // hide shimmer animation
            $$('.shimmer-layer').removeClass('no-anim');
            $$('.shimmer-layer').addClass('hidden');
            $$('.article-layer').removeClass('hidden no-anim');

            if (typeof services.markdown.refresh === 'function') {
                // safe to use the function
                services.markdown.refresh();
                services.router.instance.updatePageLinks();
            } else {
            }
        });
    };

    /**
     * @since 1.1.2
     * @returns {?Object}
     */
    const prev = function(db, key) {
        'use strict';
        var next = db.index[key] + 1;
        if(next >= db.data.length) {
            return null;
        }
        return db.data[next];
    };

    /**
     * Defines the urlchange event. Call requestchange event if url
     * has changed. / Tracks if an urlchange event occurs.
     * @todo It seems that the click event is trigger twice. Prevent same
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
        if (doc.readyState === 'complete') {
            var i = doc.getElementsByTagName('a').length;
            for (let j = 0; j < i; j++){
                doc.getElementsByTagName('a')[j].addEventListener('click', event => {
                    let hasId = event.target.dataset.hasOwnProperty('id');

                    trigger('requestUrlChange', {
                        id: hasId ?
                            event.target.dataset.id :
                            null,
                        slug: event.target.dataset.link,
                        type: hasId ?
                            'info' :
                            'list'
                    });
                    /**
                     * @todo: handle/trigger click events
                     */
                    event.preventDefault();
                });
            }

            loadServices();
        }
    };

    return {
        getContext: getContext,
        getData: getData,
        getSourceCode: getSourceCode,
        version: version,
        services: _this[Symbol.for('services')],
        render: render,
        contextMgr: _this.contextMgr,
        request: _this.request,
        on: on,
        off: off,
        trigger: trigger
    };
}(document));
