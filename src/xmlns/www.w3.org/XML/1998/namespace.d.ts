import * as Primitive from '../../../xml-primitives';

// Source files:
// http://www.w3.org/2001/03/xml.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
type SpaceType = ("default" | "preserve");
interface _SpaceType extends Primitive._string { content: SpaceType; }

export interface document extends BaseType {
}
export let document: document;
