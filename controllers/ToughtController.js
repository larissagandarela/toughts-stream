const tought = require('../models/tought');
const user = require('../models/user');

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home');
    }

    static async dashboard(req, res) {
        res.render('toughts/dashboard');
    }

    static createTought(req, res) {
        res.render('toughts/create');
    }
}