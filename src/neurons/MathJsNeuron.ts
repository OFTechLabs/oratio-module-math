import { IHiveMindNeuron, INeuronResponse, RequestContext, UserInput } from '@oratio/oratio';

export class MathJsNeuron implements IHiveMindNeuron {
    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        throw new Error('Method not implemented.');
    }
}