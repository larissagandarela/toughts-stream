const tought = require('../models/tought');
const user = require('../models/user');

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home');
    }
}