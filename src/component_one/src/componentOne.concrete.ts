import { componentTwoInterface } from "../../component_two";

import { componentOneDto } from "./componentOne.dto";
import { componentOneInterface } from "./componentOne.interface";

export class ComponentOne implements componentOneInterface
{
    injectedDependency: componentTwoInterface;

    constructor(dependency: componentTwoInterface)
    {
        this.injectedDependency = dependency;
    }

    doSomethingOne(param: string): componentOneDto
    {
        const response = this.injectedDependency.doSomethingTwo(param);
        return {somethingOne: response.somethingTwo}
    }
}