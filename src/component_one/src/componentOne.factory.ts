import { componentTwoInterface } from "../../component_two";

import { ComponentOne } from "./componentOne.concrete";
import { componentOneInterface } from "./componentOne.interface";

export class ComponentOneFactory
{
    static createComponentOne(dependency: componentTwoInterface): componentOneInterface
    {
        return new ComponentOne(dependency);
    }
}