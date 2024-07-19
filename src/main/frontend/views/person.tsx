import {AutoCrud} from "@vaadin/hilla-react-crud";
import PersonModel from "Frontend/generated/dev/mmourouh/ragchatbot/entities/PersonModel";
import {PersonService} from "Frontend/generated/endpoints";

export default function Person(){
    return <AutoCrud service={PersonService} model={PersonModel}/>
}