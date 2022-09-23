let serverid = "";
let feature = "";

window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getGuilds !== undefined) {
            return m.default.getGuild(serverid).features.add(feature);
        }
        
        if (m.getGuilds !== undefined) {
            return m.getGuild(serverid).features.add(feature);
        }
    }
}]);
