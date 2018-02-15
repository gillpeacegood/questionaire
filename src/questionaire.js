// @flow

// This is the file where the questions and answers are defined

export type Questionaire = {[key: string]: Question};

type Question = {
    sound: string,
    text: string,
    responses: Array< Response>
};

type Response = {
    text: string,
    nextQuestion: string
};

export const questionaire  = {
    a: {
            sound: 'question1.mp3',
            text: 'This is my first question in case you cant here the sound',
            responses: [
                {
                    text: 'This is the first choice',
                    nextQuestion: 'b'
                },
                {
                    text: 'This is the second choice',
                    nextQuestion: 'c'
                }
            ]
        },
    b: {
            sound: 'question2.mp3',
            text: 'You reached the end, loser',
            responses: []
        },
    c: {
            sound: 'question3.mp3',
            text: 'You reached the end, winner!',
            responses: []
        }
};