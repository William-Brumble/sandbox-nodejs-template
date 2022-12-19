import { ComponentOneFactory } from "./component_one";
import { ComponentTwoFactory } from "./component_two";
import { CompositeFactory }    from "./composite";

const main = () => {
    const compositeTwo = ComponentTwoFactory.createComponentTwo();
    const compositeOne = ComponentOneFactory.createComponentOne(compositeTwo);
    const composite    = CompositeFactory.createComposite(compositeOne);

    const response = composite.doSomethingComposite("Do something cool!");
    console.log(response);
}

main();