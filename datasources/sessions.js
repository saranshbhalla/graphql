const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

//DataSource is a class that we need to extend
class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config){
        //called with DataSource config and used to initialize things like caching.
    }

    getSessions(args){
        return _.filter(sessions, args);
    }

    getSessionById(id) {
        const session = _.filter(sessions, {id:parseInt(id)})
        return session[0];
    }
}

module.exports = SessionAPI;