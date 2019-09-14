'use strict';
/**
 * @fileOverview A JavaScript framework manager.
 * @author Ivan Ilic <me@mrisaacs.org>
 * @version 3.0.3
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
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogZnJhbWV3b3JrIik7CndpbmRvdy5NYW5pYy5zZXJ2aWNlcy5mcmFtZXdvcmsuRWxlbWVudCA9IEVsZW1lbnQ7CndpbmRvdy5NYW5pYy5jb250ZXh0TWdyPXsKICAgIHdyYXBwZXI6ICQkKCJkaXYjd3JhcHBlciBeIGRpdiIpWzBdLAogICAgYXJ0aWNsZTogJCQoIi5hcnRpY2xlLWxheWVyIilbMF0sCiAgICBkZXRhaWw6ICQoJ2RldGFpbCcpLAogICAgbGlzdDogJCgnbGlzdCcpLAogICAgdGl0bGU6ICQoJ21haW4tdGl0bGUnKSwKICAgIGRhdGU6ICQoJ21haW4tZGF0ZScpLAogICAgc2hpbW1lcjogJCQoJ3NoaW1tZXItbGF5ZXInKQp9Ow=='
            },
            route: {
                url: 'navigo',
                instance : 'undefined',
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogcm91dGUiKTsKbGV0IG9uID0gd2luZG93Lk1hbmljLm9uOwpsZXQgdHJpZ2dlciA9IHdpbmRvdy5NYW5pYy50cmlnZ2VyOwpsZXQgcmVuZGVyID0gd2luZG93Lk1hbmljLnJlbmRlcjsKbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpOwpsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoKTsKCm9uKCJyZXF1ZXN0VXJsQ2hhbmdlIiwgKHBhcmFtcykgPT4gewogICAgd2luZG93Lk1hbmljLnJlcXVlc3QgPSBwYXJhbXM7CgogICAgc2VhcmNoUGFyYW1zLnNldCgicSIsIHBhcmFtcy5zbHVnKTsKCiAgICBpZihwYXJhbXMudHlwZSA9PT0gImxpc3QiKSB7CiAgICAgICAgc2VhcmNoUGFyYW1zLnNldCgidHlwZSIsIHBhcmFtcy50eXBlIHx8ICJsaXN0Iik7CiAgICB9IGVsc2UgewogICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoInR5cGUiKTsKICAgIH0KCiAgICBpZihwYXJhbXMuaWQpIHsKICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KCJpZCIsIHBhcmFtcy5pZCk7CiAgICB9IGVsc2UgewogICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoImlkIik7CiAgICB9CgogICAgaGlzdG9yeS5wdXNoU3RhdGUoCiAgICAgICAgcGFyYW1zLAogICAgICAgICJNYW5pYyIgKyAocGFyYW1zLnNsdWcpLnRvVXBwZXJDYXNlKCksCiAgICAgICAgIj8iICsgc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkKICAgICk7CgogICAgLyoqCiAgICAgKiB0cmlnZ2VyKCJyZW5kZXIiLCBwYXJhbXMuc2x1ZykKICAgICAqIEB0b2RvIGluIHRoZSBlbmQgaXQgbXVzdCByZW5kZXIgYSBub2RlLCBub3QgYSBzbHVnCiAgICAgKi8KICAgIHJlbmRlcihwYXJhbXMpOwp9KTs='
            },
            markdown: {
                url: ['showdown', 'moodown'],
                handle: (request, next) => {
                    return next(request);
                },
                MooDown: null,
                refresh: 'undefined',
                init: 'Y29uc29sZS5sb2coImxvYWRlZDogbWFya2Rvd24iKTsKd2luZG93Lk1hbmljLnNlcnZpY2VzLm1hcmtkb3duLk1vb0Rvd24gPSBNb29Eb3duOw=='
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
            patch: 3
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
            type : 'info',
            slug : 'home'
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
            container : '',
            content : ''
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
        if (Object.prototype.toString.call(e) === '[object Array]') {
            return true;
        } else  {
            return false;
        }
    };

    /**
     * @since 2.0.0
     * @todo write docs about it...
     */
    const isPromise = function(e) {
        if (Object.prototype.toString.call(e) === '[object Promise]') {
            return true;
        } else {
            return false;
        }
    };

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
        return await fetch('./' + context + '/' + file + '.' + extension);
    };

    /**
     * @since 2.0.0
     * @todo write docs about it...
     * @param {string} url URL is taken from {@Service} to request for its
     * script.
     */
    const loadJS = async function(url) {
        return await load('js', url, 'js');
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
        _this.service;
    };

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
        let s = doc.createElement('script');
        s.src = script.url;
        doc.body.appendChild(s);
    };

    const getContext = async function(file) {
        return await load('contexts', file, 'jsonld');
    };

    const getData = async function(context, file) {
        return await load('data/' + context, file, 'jsonld');
    };

    /**
     * @param {string} filename A JavaScript filename.
     * @return {Promise} Returns a Promise of the source code.
     */
    const getSourceCode = function(filename) {
        let script = loadJS(filename);

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
    const render = function(page) {
        'use strict';
        let ctx = Manic.contextMgr;
        let services = _this[Symbol.for('services')];
        let Element = services.framework.Element;
        let list = doc.querySelector('#list');
        let detail = doc.querySelector('#detail');
        let shimmer = doc.querySelector('.shimmer-layer');
        let art = doc.querySelector('.main-article');

        loadJSON(page.slug).then(response => {
            return response.text().then(stringData => {
                return JSON.parse(stringData);
            }).then(json => {
                // start loading animation
                if(page.type === 'info') {
                    // show shimmer animation
                    // ctx.article.addClass('hidden no-anim');
                    // ctx.article.addClass('no-anim');
                    // ctx.article.removeClass('hidden');

                    // @todo: check if the same info were requested
                    if (list) {
                        list.remove();
                    }
                } else if (page.type === 'list') {
                    // todo: check if the same list were requested
                    if (detail) {
                        detail.remove();
                    }
                }
                return json;
            });
        }).then(response => {
            let services = _this[Symbol.for('services')];
            let MooDown = services.markdown.MooDown;
            // todo: extract info and list as functions
            // INFO
            if(page.type === 'info') {
                var requestID   = page.id;
                var index       = response.index[requestID.toString()];
                // the current json object article with body, date, ...etc.
                var article     = response.data[index];

                // prevent a second detail-element is being created
                // when one already exists
                if (!detail) {
                    // variable _art_ is the element in which these two new
                    // elements will be appended.
                    let mainArt = new Element('div',{
                        'class': 'main-article two-thirds column',
                        html: `<div class=\"article-layer\">
                                   <h1 id=\"main-title\"></h1>
                                   <p id=\"main-date\"></p>
                                   <p id=\"main-body\"></p>
                               </div>`
                    });

                    let newElem = new Element('div',{
                        'id': 'detail',
                        'class': 'row section content',
                        html: `<div class=\"one-third column\">
                                   <a class=\"avatar-wrapper\">
                                       <span class=\"initial\">M</span>
                                       <span class=\"integral\">∫</span>
                                   </a>
                               </div>`
                    });

                    ctx.wrapper.appendChild(newElem);
                    newElem.appendChild(mainArt);
                }

                ctx.title.set('text', article.title);
                ctx.date.set('text', new Date(article.date).timeDiffInWords());
                ctx.date.set('title', article.date);

                new MooDown('main-body', {
                    markdown    : article.body
                });
            }
            // LIST
            else if(page.type === 'list') {
                // last added content in json files must go to data[0]
                var id = response.data[0].id;
                // temporary element container. will be inject
                var container = [];

                if (!list) {
                    for(let i = 0; i < response.data.length; i++) {
                        let index = response.index[id];
                        let data = response.data[index];
                        /**
                         * push a section to the container
                         */
                        if(!(i % 3)) {
                            container.push(new Element('div', {
                                'class' : 'row section list'
                            }));
                        }
                        // todo: use addAttribute
                        /**
                         * add new element to the bottom in the
                         * current container
                         */
                        let articleElement = new Element('div', {
                            'class': 'short-article one-third column',
                            html: `<h3>
                                       <a data-navigo data-id=\"${data.id}\"
                                          href=\"${data.link}/${data.id}\"
                                          data-link=\"${data.link}\" >
                                           ${data.title}
                                       </a>
                                   </h3>
                                   <p>${data.short}</p>`
                        });

                        container[container.length - 1].appendChild(articleElement);

                        // if the previous id isn't null get previous
                        if(prev(response, id) !== null) {
                            id = prev(response, id).id;
                        }
                    }

                    let listElement = doc.createElement('div');
                    listElement.id = 'list';

                    ctx.wrapper.appendChild(listElement);

                    for (let i = container.length - 1; i >= 0; i--) {
                        listElement.prepend(container[i]);
                    }
                }
            }

            doc.title = 'Manic - ' + page.slug.charAt(0).toUpperCase() + page.slug.slice(1);

            // hide shimmer animation
            ctx.shimmer.removeClass('no-anim');
            ctx.shimmer.addClass('hidden');
            ctx.article.removeClass('hidden no-anim');

            if (typeof services.markdown.refresh === 'function') {
                // safe to use the function
                services.markdown.refresh();
                services.router.instance.updatePageLinks();
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
    on('urlchange', () => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);

        /**
         * @todo: refactor ternary operator
         */
        _this.request.id = searchParams.has('id')
            ? searchParams.get('id')
            : _this.request.id;
        _this.request.type = searchParams.has('type')
            ? searchParams.get('type')
            : _this.request.info;
        _this.request.slug = searchParams.has('q')
            ? searchParams.get('q')
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
