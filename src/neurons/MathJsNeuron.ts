import { IHiveMindNeuron, INeuronResponse, RequestContext, Silence, SimpleResponse, UserInput } from '@oratio/oratio';
const math = require('mathjs');

export class MathJsNeuron implements IHiveMindNeuron {
    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        try {
            const evaluated: (number | null | undefined) = math.eval(userInput.rawInput());

            if (evaluated !== null && evaluated !== undefined && !isNaN(evaluated)) {
                return Promise.resolve(new SimpleResponse('oratio.module.math.calculated', [evaluated + ''], 1.0));
            }

        } catch (ex) {
            return Promise.resolve(new Silence());
        }

        return Promise.resolve(new Silence());
    }
}