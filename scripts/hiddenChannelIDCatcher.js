window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getPrivateChannelIds !== undefined) {
            return console.log(m.default.getPrivateChannelIds());
        }
        
        if (m.getPrivateChannelIds !== undefined) {
            return console.log(m.getPrivateChannelIds());
        }
    }
}]);
