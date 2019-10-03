console.log("loaded: markdown");
window.Manic.services.markdown.MooDown = async function() {
    return await new MooDown;
};