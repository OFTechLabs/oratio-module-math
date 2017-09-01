import { ILocalizedHiveMindModule } from '@oratio/oratio/dist/types/modules/HiveMindModule';
import { IHiveMindNeuron } from '@oratio/oratio';
import { MathJsNeuron } from './neurons/MathJsNeuron';

export type MathModuleTranslations = {
    'oratio.module.math.calculated': string,
}

export const getNeurons: () => IHiveMindNeuron[] = () => {
    return [
        new MathJsNeuron(),
    ];
};

export class MathModule implements ILocalizedHiveMindModule {

    public static MATH_MODULE: MathModule = new MathModule(
        getNeurons(),
        {});

    constructor(private _neurons: IHiveMindNeuron[],
                private _translations: { [key: string]: string }) {
    }

    get neurons(): IHiveMindNeuron[] {
        return this._neurons;
    }

    get translations(): { [key: string]: string; } {
        return this._translations;
    }

    public withTranslations(translations: MathModuleTranslations): MathModule {
        return new MathModule(
            this.neurons,
            translations,
        );
    }
}