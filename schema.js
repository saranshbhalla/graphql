const { gql } = require('apollo-server')
module.exports = gql`
    type Query {
        sessions(
            id: ID
            title: String
            description: String
            startsAt: String
            endsAt: String
            room: String
            day: String
            format: String
            track: String
            level: String   
        ): [Session],
        sessionById(id:ID): Session,
        speakers: [Speaker],
        speakersById(id:ID): Speaker
    }
    type Session{
        id: ID!
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String @deprecated(reason: "too many sessions that dont fit into a single track."),
        level: String,
        test: [Speaker],
        speakers: [Speaker]
    }
    type Speaker {
        id: ID!
        bio: String
        name:String
        sessions: [Session]
    }
    `