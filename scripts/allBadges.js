webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().flags = 99999999999;
        }
    }
}]);

// todas as badges + conta em quarentena
webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().flags = -1
        }
    }
}]);
