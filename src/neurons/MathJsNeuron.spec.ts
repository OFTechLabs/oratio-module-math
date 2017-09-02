import { MathJsNeuron } from './MathJsNeuron';
import {
    BasicLocale,
    BasicRequestContext,
    BasicUserInput,
    NeuronHintsBuilder,
    RequestContext,
    SimpleResponse,
} from '@oratio/oratio';

describe('MathJsNeuron', () => {

    let neuron: MathJsNeuron;
    let context: RequestContext;

    beforeEach(function () {
        neuron = new MathJsNeuron();
        context = new BasicRequestContext(
            null,
            {},
            new BasicLocale('en', 'uk'),
            NeuronHintsBuilder.create().build(),
        );
    });

    it('should be able to calculate', () => {
        const inputs = [
            {input: '(34 * 2) / 2', output: '34'},
            {input: '100 + 2', output: '102'},
            {input: '60 / 30', output: '2'},
        ];

        return Promise.all(inputs.map(input => {
            const responsePromise = neuron.process(new BasicUserInput(input.input), context);
            return responsePromise.then(response => {
                expect(response.hasAnswer()).toBe(true);
                expect(response.getCertainty()).toBe(1.0);

                expect((response as SimpleResponse).response).toBe('oratio.module.math.calculated');
                expect((response as SimpleResponse).params[0]).toBe(input.output);
            });
        }));
    });

    it('should be return silence for non-math', () => {
        const inputs = [
            {input: ''},
            {input: 'hello'},
            {input: 'is it me you\'re looking for'},
        ];

        return Promise.all(inputs.map(input => {
            const responsePromise = neuron.process(new BasicUserInput(input.input), context);
            return responsePromise.then(response => {
                expect(response.hasAnswer()).toBe(false);
                expect(response.getCertainty()).toBe(0.0);
            });
        }));
    });
});