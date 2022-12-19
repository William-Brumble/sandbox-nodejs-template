import { componentTwoDto } from "./componentTwo.dto";
import { componentTwoInterface } from "./componentTwo.interface";

export class ComponentTwo implements componentTwoInterface
{
    doSomethingTwo(param: string): componentTwoDto
    {
        return {somethingTwo: param}
    }
}