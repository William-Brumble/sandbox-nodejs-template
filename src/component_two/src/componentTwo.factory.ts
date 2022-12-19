import { ComponentTwo } from "./componentTwo.concrete";
import { componentTwoInterface } from "./componentTwo.interface";

export class ComponentTwoFactory
{
    static createComponentTwo(): componentTwoInterface
    {
        return new ComponentTwo();
    }
}