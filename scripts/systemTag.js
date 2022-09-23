window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().isSystemUser = () => true;
        }
        
        if (m.getCurrentUser !== undefined) {
            return m.getCurrentUser().isSystemUser = () => true;
        }
    }
}]);
