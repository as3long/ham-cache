import BaseClass from './BaseClass';
import NetServer from './core/NetServer';
var config = require('../config');

class HamCache extends BaseClass {

    runServer() {
        var ns = new NetServer();
        ns.run(config);
    }
    
    set(key, value, time) {
        
    }
    
    get(key) {
        
    }
}

module.exports = HamCache;