window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getToken !== undefined) {
            return copy(m.default.getToken());
        }

        if (m.getToken !== undefined) {
            return copy(m.getToken());
        }
    }
}]);

// mensagens de terminal (sucesso)
console.log("%csucesso.", "font-size: 50px");
console.log(`%co seu token foi copiado para a área de transferência`, "font-size: 16px");
