// @flow

// This is the file where the questions and answers are defined

export type Questionaire = {[key: string]: Question};

export type Question = {
    sound: string,
    text: string,
    responses: Array< Response>
};

export type Response = {
    text: string,
    nextQuestion: string
};

const questionaire : Questionaire = {
    a: {
            sound: 'question1.mp3',
            text: `This is my first question in case you can't hear the sound`,
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

export default questionaire;