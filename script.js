require.config(
    {
        baseUrl: "https://qlik.poltronesofa.com/resources"
    }
)

require(["js/qlik"], function(qlik){
    debugger;
    //appId : unique id of Application or name of the qvf
    var appId = "ff6f2af1-8308-4751-8581-46d8c8efb293";
    const config = {
        host: "qlik.poltronesofa.com",
        port: 443,
        prefix: "/",
        isSecure: true
    };
    let app = qlik.openApp(appId, config);
    //element: html element o id dell'element
    //objectId: objectId dell'oggetto da fare l'embed,
    // opts: opzionale, contiene le options
    var objectId ="fpega";
    var element = "chart1"
    app.getObject(element, objectId, opts)
})