console.log("loaded: route");
let on = window.Manic.on;
let trigger = window.Manic.trigger;
let render = window.Manic.render;
let url = new URL(window.location.href);
let searchParams = new URLSearchParams(url.search);

on("requestUrlChange", (params) => {
    window.Manic.request = params;
    console.log('geht doch');
    searchParams.set("q", params.slug);
    
    if(params.type === "list") {
        searchParams.set("type", params.type || "list");
    } else {
        searchParams.delete("type");
    }
    
    if(params.id) {
        searchParams.set("id", params.id);
    } else {
        searchParams.delete("id");
    }
    
    history.pushState(
        params,
        "Manic" + (params.slug).toUpperCase(),
        "?" + searchParams.toString()
    );
    
    /**
     * trigger("render", params.slug)
     * @todo in the end it must render a node, not a slug
    */
    render(params);
});

trigger('routerReady');
