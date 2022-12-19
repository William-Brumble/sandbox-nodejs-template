import { componentOneInterface } from "../../component_one";

import { Composite } from "./composite.concrete";
import { compositeInterface } from "./composite.interface";

export class CompositeFactory
{
    static createComposite(dependency: componentOneInterface): compositeInterface
    {
        return new Composite(dependency);
    }
}