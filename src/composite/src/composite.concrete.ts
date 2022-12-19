import { componentOneInterface } from "../../component_one";

import { compositeDto } from "./composite.dto";
import { compositeInterface } from "./composite.interface";

export class Composite implements compositeInterface
{
    injectedDependency: componentOneInterface;

    constructor(dependency: componentOneInterface)
    {
        this.injectedDependency = dependency;
    }

    doSomethingComposite(param: string): compositeDto
    {
        const response = this.injectedDependency.doSomethingOne(param);
        return {somethingComposite: response.somethingOne};
    }
}