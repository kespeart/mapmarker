import {StructureFormatting} from './structure-formatting.interface';
import {Terms} from './terms.interface';
export interface Prediction {
    description: string;
    id: string;
    matched_substrings: Array<Terms>,
    place_id: string,
    reference: string;
    structured_formatting: StructureFormatting,
    terms: Array<Terms>,
    types: Array<string>

}