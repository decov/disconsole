// número
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().phone = '+1234567890';
        }
        
        if (m.getCurrentUser !== undefined) {
            return m.getCurrentUser().phone = '+1234567890'
        }
    }
}]);

// email
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().email = 'email@email.com';
        }
        
        if (m.getCurrentUser !== undefined) {
            return m.getCurrentUser().email = 'email@email.com';
        }
    }
}]);

// verificação
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getCurrentUser !== undefined) {
            return m.default.getCurrentUser().verified = true;
        }
        
        if (m.getCurrentUser !== undefined) {
            return m.getCurrentUser().verified = true;
        }
    }
}]);
