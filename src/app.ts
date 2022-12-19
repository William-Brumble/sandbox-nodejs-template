import { ComponentOneFactory } from "./component_one";
import { ComponentTwoFactory } from "./component_two";
import { CompositeFactory }    from "./composite";

const main = () => {
    const componentTwo = ComponentTwoFactory.createComponentTwo();
    const componentOne = ComponentOneFactory.createComponentOne(componentTwo);
    const composite    = CompositeFactory.createComposite(componentOne);

    const response = composite.doSomethingComposite("Do something cool!");
    console.log(response);
}

main();