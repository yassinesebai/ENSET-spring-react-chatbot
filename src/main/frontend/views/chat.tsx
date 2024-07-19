import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function Chat(){
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    const sendQuestion = () => {
        ChatAiService.ragChat(question)
            .then(res => setAnswer(res))
            .catch(err => console.error(err))
    }
    return <div>
        <h3 className="p-m">Chat bot</h3>
        <div className="flex gap-m">
            <TextField placeholder="Enter your question" style={{width: '80%'}} onChange={(e) => {setQuestion(e.target.value)}}/>
            <Button  theme="primary" onClick={sendQuestion}>Send</Button>
        </div>
        <div>
            <Markdown>{answer}</Markdown>
        </div>
    </div>
}

