let oldpassword = "";
let newpassword = "";

window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default.getToken !== undefined) {
            fetch ("https://discord.com/api/v9/users/@me", { 
                "credentials": "include", 
                "body": "{\"password\":\"" + oldpassword + "\",\"new_password\":\"" + newpassword + "\"}", 
                "method": "PATCH", 
                "headers": { 
                    "Authorization": m.default.getToken(), 
                    "Content-Type":"application/json" 
                }
            });
        
            return;
        }
        
        if (m.getToken !== undefined) {
            fetch ("https://discord.com/api/v9/users/@me", {
                "credentials": "include",
                "body": "{\"password\":\"" + oldpassword + "\",\"new_password\":\"" + newpassword + "\"}",
                "method": "PATCH",
                "headers": {
                    "Authorization": m.getToken(), 
                    "Content-Type":"application/json"
                }
            });
            
            return;
        }
    }
}]);
