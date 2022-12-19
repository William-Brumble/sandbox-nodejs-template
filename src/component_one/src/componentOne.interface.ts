import { componentOneDto } from "./componentOne.dto";

export interface componentOneInterface
{
    doSomethingOne(param: string): componentOneDto;
}