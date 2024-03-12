const _ = require('lodash');

module.exports = {
    Query: {
        sessions: (parent, args, context, info) => {
            return context.dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        },
        speakers: (parent, args, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakers();
        },
        speakersById: (parent, {id}, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakerById(id);
        }
    },
    Session: {
        async test (session, args, {dataSources}, info) {
            const speakers = await dataSources.speakerAPI.getSpeakers(); 
            const returns = speakers.filter((speaker) => {
                return _.filter(session.speakers, {id: speaker.id}).length > 0;
            });
            return returns;
        }
    }
}