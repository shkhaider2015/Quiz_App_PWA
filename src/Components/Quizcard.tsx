import { Button, Paper } from '@material-ui/core'
import React from 'react'
import { Option } from './Option'
import DATA from "../Data/data.json";
import { CounterContext } from '../Context/ContextAPI'


export const Quizcard = () => {

    const { increment, reset, counter } = React.useContext(CounterContext);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [answers, setAnswers] = React.useState<Array<string>>(['', '', '', '', '', '', '']);
    const [selected, setSelected] = React.useState(true);

    const handleCurrentQuestion = (x: number) => {

        let nextQuestion: number;
        if (x === 1) {
            if (answers[currentQuestion] === "") {
                setSelected(false);
                return;
            }
            setSelected(true)
            nextQuestion = currentQuestion + 1;
        }
        else {
            nextQuestion = currentQuestion - 1;
        }
        setCurrentQuestion(nextQuestion);

        if (answers[currentQuestion] === DATA[currentQuestion].answer) {
            increment();
        }
    }
    const handleAnswer = (y: string) => {
        let localanswers: Array<string> = answers;
        localanswers[currentQuestion] = y;
        console.log("LocalAnswer : ", localanswers)

        setAnswers(localanswers)
    }
    

    const handleReset = () => {
        reset()
        setCurrentQuestion(0)
        setSelected(false)
        setAnswers(['', '', '', '', '', '', ''])
    }

    if (currentQuestion > (DATA.length - 1)) {
        return <Paper style={{ width: '40%', height: '40%', backgroundColor: '#523c93', color: 'whitesmoke' }} >
            <div style={{ display: 'grid', placeItems: 'center' }} >

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <h3>Your Result</h3>
                    <h3> {counter}/7 </h3>
                    {
                        counter > 3
                            ? <h3>Looks Good :)</h3>
                            : <h3>Try Again :(</h3>
                    }

                    <Button style={{ marginTop : '2%' }} variant="contained" color="secondary" onClick={() => handleReset()} >Reset</Button>

                </div>
            </div>
        </Paper>
    }
    else {

        return (<Paper elevation={0} style={{ width: '40%', padding: 20, backgroundColor: '#523c93', color: 'whitesmoke', borderRadius: 10 }} >
            <div style={{ display: 'grid', placeItems: 'center' }} >
                {
                    selected
                        ? ""
                        : <span>Please select an answer</span>
                }
            </div>

            <div style={{ display: 'grid', placeItems: 'center' }} >
                <h3> {DATA[currentQuestion].question} </h3>
            </div>

            <Option
                opt1={DATA[currentQuestion].option1}
                opt2={DATA[currentQuestion].option2}
                opt3={DATA[currentQuestion].option3}
                opt4={DATA[currentQuestion].option4}
                DATA={DATA}
                currentQuestion={currentQuestion}
                answers={answers}
                handleAnswer={handleAnswer}
            />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                <Button
                    style={{ marginRight: 8 }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleCurrentQuestion(0)}
                    disabled={currentQuestion === 0}  >Back</Button>

                <Button
                    style={{ marginLeft: 8 }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleCurrentQuestion(1)}  > {currentQuestion !== (DATA.length - 1) ? "Next" : "Submit"} </Button>
            </div>
        </Paper>)
    }
}