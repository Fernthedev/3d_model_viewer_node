import * as Primitive from '../../../xml-primitives.d';
import * as xml from '../../../www.w3.org/XML/1998/namespace.d';

// Source files:
// https://www.khronos.org/files/collada_schema_1_4


export interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface _AccessorType extends BaseType {
	/** The count attribute indicates the number of times the array is accessed. Required attribute. */
	count: number;
	/** The offset attribute indicates the index of the first value to be read from the array.
	  * The default value is 0. Optional attribute. */
	offset: number;
	/** The source attribute indicates the location of the array to access using a URL expression. Required attribute. */
	source: string;
	/** The stride attribute indicates number of values to be considered a unit during each access to
	  * the array. The default value is 1, indicating that a single value is accessed. Optional attribute. */
	stride: number;
	/** The param element declares parametric information regarding its parent element. */
	param?: ParamType[];
}
export interface AccessorType extends _AccessorType { constructor: { new(): AccessorType }; }

export interface _Alpha_funcType extends BaseType {
	func: Alpha_funcTypeFuncType;
	value: Alpha_funcTypeValueType;
}
export interface Alpha_funcType extends _Alpha_funcType { constructor: { new(): Alpha_funcType }; }

export interface _Alpha_funcType_2 extends BaseType {
	func: Alpha_funcTypeFuncType_2;
	value: Alpha_funcTypeValueType_2;
}
export interface Alpha_funcType_2 extends _Alpha_funcType_2 { constructor: { new(): Alpha_funcType_2 }; }

export interface _Alpha_funcTypeFuncType extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Alpha_funcTypeFuncType extends _Alpha_funcTypeFuncType { constructor: { new(): Alpha_funcTypeFuncType }; }

export interface _Alpha_funcTypeFuncType_2 extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Alpha_funcTypeFuncType_2 extends _Alpha_funcTypeFuncType_2 { constructor: { new(): Alpha_funcTypeFuncType_2 }; }

export interface _Alpha_funcTypeValueType extends BaseType {
	param?: string;
	value?: number;
}
export interface Alpha_funcTypeValueType extends _Alpha_funcTypeValueType { constructor: { new(): Alpha_funcTypeValueType }; }

export interface _Alpha_funcTypeValueType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Alpha_funcTypeValueType_2 extends _Alpha_funcTypeValueType_2 { constructor: { new(): Alpha_funcTypeValueType_2 }; }

export interface _Alpha_test_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Alpha_test_enableType extends _Alpha_test_enableType { constructor: { new(): Alpha_test_enableType }; }

export interface _Alpha_test_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Alpha_test_enableType_2 extends _Alpha_test_enableType_2 { constructor: { new(): Alpha_test_enableType_2 }; }

export interface _Animation_clipType extends BaseType {
	/** The end attribute is the time in seconds of the end of the clip.  This is used in the
	  * same way as the start time.  If end is not specified, the value is taken to be the end
	  * time of the longest animation.  Optional attribute. */
	end: number;
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The start attribute is the time in seconds of the beginning of the clip.  This time is
	  * the same as that used in the key-frame data and is used to determine which set of
	  * key-frames will be included in the clip.  The start time does not specify when the clip
	  * will be played.  If the time falls between two keyframes of a referenced animation, an
	  * interpolated value should be used.  The default value is 0.0.  Optional attribute. */
	start: number;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The animation_clip must instance at least one animation element. */
	instance_animation: InstanceWithExtra[];
}
export interface Animation_clipType extends _Animation_clipType { constructor: { new(): Animation_clipType }; }

export interface _AnimationType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The animation element categorizes the declaration of animation information. The animation
	  * hierarchy contains elements that describe the animation’s key-frame data and sampler functions,
	  * ordered in such a way to group together animations that should be executed together. */
	animation: AnimationType[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The channel element declares an output channel of an animation. */
	channel: ChannelType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The sampler element declares an N-dimensional function used for animation. Animation function curves
	  * are represented by 1-D sampler elements in COLLADA. The sampler defines sampling points and how to
	  * interpolate between them. */
	sampler: SamplerType[];
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType[];
}
export interface AnimationType extends _AnimationType { constructor: { new(): AnimationType }; }

export interface _AssetType extends BaseType {
	/** The contributor element defines authoring information for asset management */
	contributor?: AssetTypeContributorType[];
	/** The created element contains the date and time that the parent element was created and is
	  * represented in an ISO 8601 format.  The created element may appear zero or one time. */
	created: Date;
	/** The keywords element contains a list of words used as search criteria for the parent element.
	  * The keywords element may appear zero or more times. */
	keywords?: string;
	/** The modified element contains the date and time that the parent element was last modified and
	  * represented in an ISO 8601 format. The modified element may appear zero or one time. */
	modified: Date;
	/** The revision element contains the revision information for the parent element. The revision
	  * element may appear zero or one time. */
	revision?: string;
	/** The subject element contains a description of the topical subject of the parent element. The
	  * subject element may appear zero or one time. */
	subject?: string;
	/** The title element contains the title information for the parent element. The title element may
	  * appear zero or one time. */
	title?: string;
	/** The unit element contains descriptive information about unit of measure. It has attributes for
	  * the name of the unit and the measurement with respect to the meter. The unit element may appear
	  * zero or one time. */
	unit?: AssetTypeUnitType;
	/** The up_axis element contains descriptive information about coordinate system of the geometric
	  * data. All coordinates are right-handed by definition. This element specifies which axis is
	  * considered up. The default is the Y-axis. The up_axis element may appear zero or one time. */
	up_axis?: UpAxisType;
}
export interface AssetType extends _AssetType { constructor: { new(): AssetType }; }

export interface _AssetTypeContributorType extends BaseType {
	/** The author element contains a string with the author's name.
	  * There may be only one author element. */
	author?: string;
	/** The authoring_tool element contains a string with the authoring tool's name.
	  * There may be only one authoring_tool element. */
	authoring_tool?: string;
	/** The comments element contains a string with comments from this contributor.
	  * There may be only one comments element. */
	comments?: string;
	/** The copyright element contains a string with copyright information.
	  * There may be only one copyright element. */
	copyright?: string;
	/** The source_data element contains a URI reference to the source data used for this asset.
	  * There may be only one source_data element. */
	source_data?: string;
}
export interface AssetTypeContributorType extends _AssetTypeContributorType { constructor: { new(): AssetTypeContributorType }; }

export interface _AssetTypeUnitType extends BaseType {
	/** The meter attribute specifies the measurement with respect to the meter. The default
	  * value for the meter attribute is “1.0”. */
	meter: number;
	/** The name attribute specifies the name of the unit. The default value for the name
	  * attribute is “meter”. */
	name: string;
}
export interface AssetTypeUnitType extends _AssetTypeUnitType { constructor: { new(): AssetTypeUnitType }; }

export interface _Auto_normal_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Auto_normal_enableType extends _Auto_normal_enableType { constructor: { new(): Auto_normal_enableType }; }

export interface _Bind_materialType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The param element declares parametric information regarding its parent element. */
	param?: ParamType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the bind_material information for the common
	  * profile which all COLLADA implementations need to support. */
	technique_common: Bind_materialTypeTechnique_commonType;
}
export interface Bind_materialType extends _Bind_materialType { constructor: { new(): Bind_materialType }; }

export interface _Bind_materialTypeTechnique_commonType extends BaseType {
	/** The instance_material element declares the instantiation of a COLLADA material resource. */
	instance_material: Instance_materialType[];
}
export interface Bind_materialTypeTechnique_commonType extends _Bind_materialTypeTechnique_commonType { constructor: { new(): Bind_materialTypeTechnique_commonType }; }

export interface _Blend_colorType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Blend_colorType extends _Blend_colorType { constructor: { new(): Blend_colorType }; }

export interface _Blend_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Blend_enableType extends _Blend_enableType { constructor: { new(): Blend_enableType }; }

export interface _Blend_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Blend_enableType_2 extends _Blend_enableType_2 { constructor: { new(): Blend_enableType_2 }; }

export interface _Blend_equation_separateType extends BaseType {
	alpha: Blend_equation_separateTypeAlphaType;
	rgb: Blend_equation_separateTypeRgbType;
}
export interface Blend_equation_separateType extends _Blend_equation_separateType { constructor: { new(): Blend_equation_separateType }; }

export interface _Blend_equation_separateTypeAlphaType extends BaseType {
	param?: string;
	value?: gl_blend_equation_type;
}
export interface Blend_equation_separateTypeAlphaType extends _Blend_equation_separateTypeAlphaType { constructor: { new(): Blend_equation_separateTypeAlphaType }; }

export interface _Blend_equation_separateTypeRgbType extends BaseType {
	param?: string;
	value?: gl_blend_equation_type;
}
export interface Blend_equation_separateTypeRgbType extends _Blend_equation_separateTypeRgbType { constructor: { new(): Blend_equation_separateTypeRgbType }; }

export interface _Blend_equationType extends BaseType {
	param?: string;
	value?: gl_blend_equation_type;
}
export interface Blend_equationType extends _Blend_equationType { constructor: { new(): Blend_equationType }; }

export interface _Blend_func_separateType extends BaseType {
	dest_alpha: Blend_func_separateTypeDest_alphaType;
	dest_rgb: Blend_func_separateTypeDest_rgbType;
	src_alpha: Blend_func_separateTypeSrc_alphaType;
	src_rgb: Blend_func_separateTypeSrc_rgbType;
}
export interface Blend_func_separateType extends _Blend_func_separateType { constructor: { new(): Blend_func_separateType }; }

export interface _Blend_func_separateTypeDest_alphaType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_func_separateTypeDest_alphaType extends _Blend_func_separateTypeDest_alphaType { constructor: { new(): Blend_func_separateTypeDest_alphaType }; }

export interface _Blend_func_separateTypeDest_rgbType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_func_separateTypeDest_rgbType extends _Blend_func_separateTypeDest_rgbType { constructor: { new(): Blend_func_separateTypeDest_rgbType }; }

export interface _Blend_func_separateTypeSrc_alphaType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_func_separateTypeSrc_alphaType extends _Blend_func_separateTypeSrc_alphaType { constructor: { new(): Blend_func_separateTypeSrc_alphaType }; }

export interface _Blend_func_separateTypeSrc_rgbType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_func_separateTypeSrc_rgbType extends _Blend_func_separateTypeSrc_rgbType { constructor: { new(): Blend_func_separateTypeSrc_rgbType }; }

export interface _Blend_funcType extends BaseType {
	dest: Blend_funcTypeDestType;
	src: Blend_funcTypeSrcType;
}
export interface Blend_funcType extends _Blend_funcType { constructor: { new(): Blend_funcType }; }

export interface _Blend_funcType_2 extends BaseType {
	dest: Blend_funcTypeDestType_2;
	src: Blend_funcTypeSrcType_2;
}
export interface Blend_funcType_2 extends _Blend_funcType_2 { constructor: { new(): Blend_funcType_2 }; }

export interface _Blend_funcTypeDestType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_funcTypeDestType extends _Blend_funcTypeDestType { constructor: { new(): Blend_funcTypeDestType }; }

export interface _Blend_funcTypeDestType_2 extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_funcTypeDestType_2 extends _Blend_funcTypeDestType_2 { constructor: { new(): Blend_funcTypeDestType_2 }; }

export interface _Blend_funcTypeSrcType extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_funcTypeSrcType extends _Blend_funcTypeSrcType { constructor: { new(): Blend_funcTypeSrcType }; }

export interface _Blend_funcTypeSrcType_2 extends BaseType {
	param?: string;
	value?: gl_blend_type;
}
export interface Blend_funcTypeSrcType_2 extends _Blend_funcTypeSrcType_2 { constructor: { new(): Blend_funcTypeSrcType_2 }; }

export type bool = boolean;
type _bool = Primitive._boolean;

type Bool_arrayType = boolean[];

export type bool2 = boolean[];

export type bool3 = boolean[];

export type bool4 = boolean[];

export interface _BoxType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** 3 float values that represent the extents of the box */
	half_extents: float3;
}
export interface BoxType extends _BoxType { constructor: { new(): BoxType }; }

export interface _CameraType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Imagers represent the image sensor of a camera (for example film or CCD). */
	imager?: CameraTypeImagerType;
	/** Optics represents the apparatus on a camera that projects the image onto the image sensor. */
	optics: CameraTypeOpticsType;
}
export interface CameraType extends _CameraType { constructor: { new(): CameraType }; }

export interface _CameraTypeImagerType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique: TechniqueType[];
}
export interface CameraTypeImagerType extends _CameraTypeImagerType { constructor: { new(): CameraTypeImagerType }; }

export interface _CameraTypeOpticsType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the optics information for the common profile
	  * which all COLLADA implementations need to support. */
	technique_common: CameraTypeOpticsTypeTechnique_commonType;
}
export interface CameraTypeOpticsType extends _CameraTypeOpticsType { constructor: { new(): CameraTypeOpticsType }; }

export interface _CameraTypeOpticsTypeTechnique_commonType extends BaseType {
	/** The orthographic element describes the field of view of an orthographic camera. */
	orthographic: CameraTypeOpticsTypeTechnique_commonTypeOrthographicType;
	/** The perspective element describes the optics of a perspective camera. */
	perspective: CameraTypeOpticsTypeTechnique_commonTypePerspectiveType;
}
export interface CameraTypeOpticsTypeTechnique_commonType extends _CameraTypeOpticsTypeTechnique_commonType { constructor: { new(): CameraTypeOpticsTypeTechnique_commonType }; }

export interface _CameraTypeOpticsTypeTechnique_commonTypeOrthographicType extends BaseType {
	/** The aspect_ratio element contains a floating point number describing the aspect ratio of
	  * the field of view. If the aspect_ratio element is not present the aspect ratio is to be
	  * calculated from the xmag or ymag elements and the current viewport. */
	aspect_ratio?: TargetableFloat[];
	/** The xmag element contains a floating point number describing the horizontal
	  * magnification of the view. */
	xmag: TargetableFloat;
	/** The ymag element contains a floating point number describing the vertical
	  * magnification of the view.  It can also have a sid. */
	ymag: TargetableFloat[];
	/** The zfar element contains a floating point number that describes the distance to the far
	  * clipping plane. The zfar element must occur exactly once. */
	zfar: TargetableFloat;
	/** The znear element contains a floating point number that describes the distance to the near
	  * clipping plane. The znear element must occur exactly once. */
	znear: TargetableFloat;
}
export interface CameraTypeOpticsTypeTechnique_commonTypeOrthographicType extends _CameraTypeOpticsTypeTechnique_commonTypeOrthographicType { constructor: { new(): CameraTypeOpticsTypeTechnique_commonTypeOrthographicType }; }

export interface _CameraTypeOpticsTypeTechnique_commonTypePerspectiveType extends BaseType {
	/** The aspect_ratio element contains a floating point number describing the aspect ratio of the field
	  * of view. If the aspect_ratio element is not present the aspect ratio is to be calculated from the
	  * xfov or yfov elements and the current viewport. */
	aspect_ratio?: TargetableFloat[];
	/** The xfov element contains a floating point number describing the horizontal field of view in degrees. */
	xfov: TargetableFloat;
	/** The yfov element contains a floating point number describing the verticle field of view in degrees. */
	yfov: TargetableFloat[];
	/** The zfar element contains a floating point number that describes the distance to the far
	  * clipping plane. The zfar element must occur exactly once. */
	zfar: TargetableFloat;
	/** The znear element contains a floating point number that describes the distance to the near
	  * clipping plane. The znear element must occur exactly once. */
	znear: TargetableFloat;
}
export interface CameraTypeOpticsTypeTechnique_commonTypePerspectiveType extends _CameraTypeOpticsTypeTechnique_commonTypePerspectiveType { constructor: { new(): CameraTypeOpticsTypeTechnique_commonTypePerspectiveType }; }

export interface _CapsuleType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A float value that represents the length of the line segment connecting the centers
	  * of the capping hemispheres. */
	height: number;
	/** Two float values that represent the radii of the capsule (it may be elliptical) */
	radius: float2;
}
export interface CapsuleType extends _CapsuleType { constructor: { new(): CapsuleType }; }

export type cg_bool = boolean;
type _cg_bool = Primitive._boolean;

export type cg_bool1 = boolean;
type _cg_bool1 = Primitive._boolean;

export type cg_bool1x1 = boolean[];

export type cg_bool1x2 = boolean[];

export type cg_bool1x3 = boolean[];

export type cg_bool1x4 = boolean[];

export type cg_bool2 = boolean[];

export type cg_bool2x1 = boolean[];

export type cg_bool2x2 = boolean[];

export type cg_bool2x3 = boolean[];

export type cg_bool2x4 = boolean[];

export type cg_bool3 = boolean[];

export type cg_bool3x1 = boolean[];

export type cg_bool3x2 = boolean[];

export type cg_bool3x3 = boolean[];

export type cg_bool3x4 = boolean[];

export type cg_bool4 = boolean[];

export type cg_bool4x1 = boolean[];

export type cg_bool4x2 = boolean[];

export type cg_bool4x3 = boolean[];

export type cg_bool4x4 = boolean[];

/** Creates a symbolic connection between two previously defined parameters. */
export interface _cg_connect_param extends BaseType {
	ref: string;
}
export interface  cg_connect_param extends _cg_connect_param { constructor: { new(): cg_connect_param }; }
export var cg_connect_param: { new(): cg_connect_param };

export type cg_fixed = number;
type _cg_fixed = Primitive._number;

export type cg_fixed1 = number;
type _cg_fixed1 = Primitive._number;

export type cg_fixed1x1 = number[];

export type cg_fixed1x2 = number[];

export type cg_fixed1x3 = number[];

export type cg_fixed1x4 = number[];

export type cg_fixed2 = number[];

export type cg_fixed2x1 = number[];

export type cg_fixed2x2 = number[];

export type cg_fixed2x3 = number[];

export type cg_fixed2x4 = number[];

export type cg_fixed3 = number[];

export type cg_fixed3x1 = number[];

export type cg_fixed3x2 = number[];

export type cg_fixed3x3 = number[];

export type cg_fixed3x4 = number[];

export type cg_fixed4 = number[];

export type cg_fixed4x1 = number[];

export type cg_fixed4x2 = number[];

export type cg_fixed4x3 = number[];

export type cg_fixed4x4 = number[];

export type cg_float = number;
type _cg_float = Primitive._number;

export type cg_float1 = number;
type _cg_float1 = Primitive._number;

export type cg_float1x1 = number[];

export type cg_float1x2 = number[];

export type cg_float1x3 = number[];

export type cg_float1x4 = number[];

export type cg_float2 = number[];

export type cg_float2x1 = number[];

export type cg_float2x2 = number[];

export type cg_float2x3 = number[];

export type cg_float2x4 = number[];

export type cg_float3 = number[];

export type cg_float3x1 = number[];

export type cg_float3x2 = number[];

export type cg_float3x3 = number[];

export type cg_float3x4 = number[];

export type cg_float4 = number[];

export type cg_float4x1 = number[];

export type cg_float4x2 = number[];

export type cg_float4x3 = number[];

export type cg_float4x4 = number[];

export type cg_half = number;
type _cg_half = Primitive._number;

export type cg_half1 = number;
type _cg_half1 = Primitive._number;

export type cg_half1x1 = number[];

export type cg_half1x2 = number[];

export type cg_half1x3 = number[];

export type cg_half1x4 = number[];

export type cg_half2 = number[];

export type cg_half2x1 = number[];

export type cg_half2x2 = number[];

export type cg_half2x3 = number[];

export type cg_half2x4 = number[];

export type cg_half3 = number[];

export type cg_half3x1 = number[];

export type cg_half3x2 = number[];

export type cg_half3x3 = number[];

export type cg_half3x4 = number[];

export type cg_half4 = number[];

export type cg_half4x1 = number[];

export type cg_half4x2 = number[];

export type cg_half4x3 = number[];

export type cg_half4x4 = number[];

export type cg_identifier = string;
type _cg_identifier = Primitive._string;

export type cg_int = number;
type _cg_int = Primitive._number;

export type cg_int1 = number;
type _cg_int1 = Primitive._number;

export type cg_int1x1 = number[];

export type cg_int1x2 = number[];

export type cg_int1x3 = number[];

export type cg_int1x4 = number[];

export type cg_int2 = number[];

export type cg_int2x1 = number[];

export type cg_int2x2 = number[];

export type cg_int2x3 = number[];

export type cg_int2x4 = number[];

export type cg_int3 = number[];

export type cg_int3x1 = number[];

export type cg_int3x2 = number[];

export type cg_int3x3 = number[];

export type cg_int3x4 = number[];

export type cg_int4 = number[];

export type cg_int4x1 = number[];

export type cg_int4x2 = number[];

export type cg_int4x3 = number[];

export type cg_int4x4 = number[];

export type cg_ListOfBool = boolean[];

export type cg_ListOfFixed = number[];

export type cg_ListOfFloat = number[];

export type cg_ListOfHalf = number[];

export type cg_ListOfInt = number[];

/** Creates a parameter of a one-dimensional array type. */
export interface _cg_newarray_type extends BaseType {
	/** The length attribute specifies the length of the array. */
	length: number;
	/** Nested array elements allow you to create multidemensional arrays. */
	array?: cg_newarray_type[];
	bool?: boolean[];
	bool1?: boolean[];
	bool1x1?: cg_bool1x1[];
	bool1x2?: cg_bool1x2[];
	bool1x3?: cg_bool1x3[];
	bool1x4?: cg_bool1x4[];
	bool2?: cg_bool2[];
	bool2x1?: cg_bool2x1[];
	bool2x2?: cg_bool2x2[];
	bool2x3?: cg_bool2x3[];
	bool2x4?: cg_bool2x4[];
	bool3?: cg_bool3[];
	bool3x1?: cg_bool3x1[];
	bool3x2?: cg_bool3x2[];
	bool3x3?: cg_bool3x3[];
	bool3x4?: cg_bool3x4[];
	bool4?: cg_bool4[];
	bool4x1?: cg_bool4x1[];
	bool4x2?: cg_bool4x2[];
	bool4x3?: cg_bool4x3[];
	bool4x4?: cg_bool4x4[];
	connect_param?: cg_connect_param[];
	enum?: string[];
	fixed?: number[];
	fixed1?: number[];
	fixed1x1?: cg_fixed1x1[];
	fixed1x2?: cg_fixed1x2[];
	fixed1x3?: cg_fixed1x3[];
	fixed1x4?: cg_fixed1x4[];
	fixed2?: cg_fixed2[];
	fixed2x1?: cg_fixed2x1[];
	fixed2x2?: cg_fixed2x2[];
	fixed2x3?: cg_fixed2x3[];
	fixed2x4?: cg_fixed2x4[];
	fixed3?: cg_fixed3[];
	fixed3x1?: cg_fixed3x1[];
	fixed3x2?: cg_fixed3x2[];
	fixed3x3?: cg_fixed3x3[];
	fixed3x4?: cg_fixed3x4[];
	fixed4?: cg_fixed4[];
	fixed4x1?: cg_fixed4x1[];
	fixed4x2?: cg_fixed4x2[];
	fixed4x3?: cg_fixed4x3[];
	fixed4x4?: cg_fixed4x4[];
	float?: number[];
	float1?: number[];
	float1x1?: cg_float1x1[];
	float1x2?: cg_float1x2[];
	float1x3?: cg_float1x3[];
	float1x4?: cg_float1x4[];
	float2?: cg_float2[];
	float2x1?: cg_float2x1[];
	float2x2?: cg_float2x2[];
	float2x3?: cg_float2x3[];
	float2x4?: cg_float2x4[];
	float3?: cg_float3[];
	float3x1?: cg_float3x1[];
	float3x2?: cg_float3x2[];
	float3x3?: cg_float3x3[];
	float3x4?: cg_float3x4[];
	float4?: cg_float4[];
	float4x1?: cg_float4x1[];
	float4x2?: cg_float4x2[];
	float4x3?: cg_float4x3[];
	float4x4?: cg_float4x4[];
	half?: number[];
	half1?: number[];
	half1x1?: cg_half1x1[];
	half1x2?: cg_half1x2[];
	half1x3?: cg_half1x3[];
	half1x4?: cg_half1x4[];
	half2?: cg_half2[];
	half2x1?: cg_half2x1[];
	half2x2?: cg_half2x2[];
	half2x3?: cg_half2x3[];
	half2x4?: cg_half2x4[];
	half3?: cg_half3[];
	half3x1?: cg_half3x1[];
	half3x2?: cg_half3x2[];
	half3x3?: cg_half3x3[];
	half3x4?: cg_half3x4[];
	half4?: cg_half4[];
	half4x1?: cg_half4x1[];
	half4x2?: cg_half4x2[];
	half4x3?: cg_half4x3[];
	half4x4?: cg_half4x4[];
	int?: number[];
	int1?: number[];
	int1x1?: cg_int1x1[];
	int1x2?: cg_int1x2[];
	int1x3?: cg_int1x3[];
	int1x4?: cg_int1x4[];
	int2?: cg_int2[];
	int2x1?: cg_int2x1[];
	int2x2?: cg_int2x2[];
	int2x3?: cg_int2x3[];
	int2x4?: cg_int2x4[];
	int3?: cg_int3[];
	int3x1?: cg_int3x1[];
	int3x2?: cg_int3x2[];
	int3x3?: cg_int3x3[];
	int3x4?: cg_int3x4[];
	int4?: cg_int4[];
	int4x1?: cg_int4x1[];
	int4x2?: cg_int4x2[];
	int4x3?: cg_int4x3[];
	int4x4?: cg_int4x4[];
	sampler1D?: cg_sampler1D[];
	sampler2D?: cg_sampler2D[];
	sampler3D?: cg_sampler3D[];
	samplerCUBE?: cg_samplerCUBE[];
	samplerDEPTH?: cg_samplerDEPTH[];
	samplerRECT?: cg_samplerRECT[];
	string?: string[];
	surface?: cg_surface_type[];
	/** The usertype element allows you to create arrays of usertypes. */
	usertype?: cg_setuser_type[];
}
export interface  cg_newarray_type extends _cg_newarray_type { constructor: { new(): cg_newarray_type }; }
export var cg_newarray_type: { new(): cg_newarray_type };

/** Create a new, named param object in the CG Runtime, assign it a type, an initial value, and additional attributes at declaration time. */
export interface _cg_newparam extends BaseType {
	sid: string;
	/** The annotate element allows you to specify an annotation for this new param. */
	annotate?: fx_annotate_common[];
	array: cg_newarray_type;
	bool: boolean;
	bool1: boolean;
	bool1x1: cg_bool1x1;
	bool1x2: cg_bool1x2;
	bool1x3: cg_bool1x3;
	bool1x4: cg_bool1x4;
	bool2: cg_bool2;
	bool2x1: cg_bool2x1;
	bool2x2: cg_bool2x2;
	bool2x3: cg_bool2x3;
	bool2x4: cg_bool2x4;
	bool3: cg_bool3;
	bool3x1: cg_bool3x1;
	bool3x2: cg_bool3x2;
	bool3x3: cg_bool3x3;
	bool3x4: cg_bool3x4;
	bool4: cg_bool4;
	bool4x1: cg_bool4x1;
	bool4x2: cg_bool4x2;
	bool4x3: cg_bool4x3;
	bool4x4: cg_bool4x4;
	enum: string;
	fixed: number;
	fixed1: number;
	fixed1x1: cg_fixed1x1;
	fixed1x2: cg_fixed1x2;
	fixed1x3: cg_fixed1x3;
	fixed1x4: cg_fixed1x4;
	fixed2: cg_fixed2;
	fixed2x1: cg_fixed2x1;
	fixed2x2: cg_fixed2x2;
	fixed2x3: cg_fixed2x3;
	fixed2x4: cg_fixed2x4;
	fixed3: cg_fixed3;
	fixed3x1: cg_fixed3x1;
	fixed3x2: cg_fixed3x2;
	fixed3x3: cg_fixed3x3;
	fixed3x4: cg_fixed3x4;
	fixed4: cg_fixed4;
	fixed4x1: cg_fixed4x1;
	fixed4x2: cg_fixed4x2;
	fixed4x3: cg_fixed4x3;
	fixed4x4: cg_fixed4x4;
	float: number;
	float1: number;
	float1x1: cg_float1x1;
	float1x2: cg_float1x2;
	float1x3: cg_float1x3;
	float1x4: cg_float1x4;
	float2: cg_float2;
	float2x1: cg_float2x1;
	float2x2: cg_float2x2;
	float2x3: cg_float2x3;
	float2x4: cg_float2x4;
	float3: cg_float3;
	float3x1: cg_float3x1;
	float3x2: cg_float3x2;
	float3x3: cg_float3x3;
	float3x4: cg_float3x4;
	float4: cg_float4;
	float4x1: cg_float4x1;
	float4x2: cg_float4x2;
	float4x3: cg_float4x3;
	float4x4: cg_float4x4;
	half: number;
	half1: number;
	half1x1: cg_half1x1;
	half1x2: cg_half1x2;
	half1x3: cg_half1x3;
	half1x4: cg_half1x4;
	half2: cg_half2;
	half2x1: cg_half2x1;
	half2x2: cg_half2x2;
	half2x3: cg_half2x3;
	half2x4: cg_half2x4;
	half3: cg_half3;
	half3x1: cg_half3x1;
	half3x2: cg_half3x2;
	half3x3: cg_half3x3;
	half3x4: cg_half3x4;
	half4: cg_half4;
	half4x1: cg_half4x1;
	half4x2: cg_half4x2;
	half4x3: cg_half4x3;
	half4x4: cg_half4x4;
	int: number;
	int1: number;
	int1x1: cg_int1x1;
	int1x2: cg_int1x2;
	int1x3: cg_int1x3;
	int1x4: cg_int1x4;
	int2: cg_int2;
	int2x1: cg_int2x1;
	int2x2: cg_int2x2;
	int2x3: cg_int2x3;
	int2x4: cg_int2x4;
	int3: cg_int3;
	int3x1: cg_int3x1;
	int3x2: cg_int3x2;
	int3x3: cg_int3x3;
	int3x4: cg_int3x4;
	int4: cg_int4;
	int4x1: cg_int4x1;
	int4x2: cg_int4x2;
	int4x3: cg_int4x3;
	int4x4: cg_int4x4;
	/** The modifier element allows you to specify a modifier for this new param. */
	modifier?: fx_modifier_enum_common;
	sampler1D: cg_sampler1D;
	sampler2D: cg_sampler2D;
	sampler3D: cg_sampler3D;
	samplerCUBE: cg_samplerCUBE;
	samplerDEPTH: cg_samplerDEPTH;
	samplerRECT: cg_samplerRECT;
	/** The semantic element allows you to specify a semantic for this new param. */
	semantic?: string;
	string: string;
	surface: cg_surface_type;
	usertype: cg_setuser_type;
}
export interface  cg_newparam extends _cg_newparam { constructor: { new(): cg_newparam }; }
export var cg_newparam: { new(): cg_newparam };

export type cg_pipeline_stage = ("VERTEX" | "FRAGMENT");
export interface _cg_pipeline_stage extends Primitive._string { content: cg_pipeline_stage; }

type _cg_sampler1D = _fx_sampler1D_common
export interface  cg_sampler1D extends _cg_sampler1D { constructor: { new(): cg_sampler1D }; }
export var cg_sampler1D: { new(): cg_sampler1D };

type _cg_sampler2D = _fx_sampler2D_common
export interface  cg_sampler2D extends _cg_sampler2D { constructor: { new(): cg_sampler2D }; }
export var cg_sampler2D: { new(): cg_sampler2D };

type _cg_sampler3D = _fx_sampler3D_common
export interface  cg_sampler3D extends _cg_sampler3D { constructor: { new(): cg_sampler3D }; }
export var cg_sampler3D: { new(): cg_sampler3D };

type _cg_samplerCUBE = _fx_samplerCUBE_common
export interface  cg_samplerCUBE extends _cg_samplerCUBE { constructor: { new(): cg_samplerCUBE }; }
export var cg_samplerCUBE: { new(): cg_samplerCUBE };

type _cg_samplerDEPTH = _fx_samplerDEPTH_common
export interface  cg_samplerDEPTH extends _cg_samplerDEPTH { constructor: { new(): cg_samplerDEPTH }; }
export var cg_samplerDEPTH: { new(): cg_samplerDEPTH };

type _cg_samplerRECT = _fx_samplerRECT_common
export interface  cg_samplerRECT extends _cg_samplerRECT { constructor: { new(): cg_samplerRECT }; }
export var cg_samplerRECT: { new(): cg_samplerRECT };

/** Creates a parameter of a one-dimensional array type. */
export interface _cg_setarray_type extends BaseType {
	/** The length attribute specifies the length of the array. */
	length?: number;
	/** Nested array elements allow you to create multidemensional arrays. */
	array?: cg_setarray_type[];
	bool?: boolean[];
	bool1?: boolean[];
	bool1x1?: cg_bool1x1[];
	bool1x2?: cg_bool1x2[];
	bool1x3?: cg_bool1x3[];
	bool1x4?: cg_bool1x4[];
	bool2?: cg_bool2[];
	bool2x1?: cg_bool2x1[];
	bool2x2?: cg_bool2x2[];
	bool2x3?: cg_bool2x3[];
	bool2x4?: cg_bool2x4[];
	bool3?: cg_bool3[];
	bool3x1?: cg_bool3x1[];
	bool3x2?: cg_bool3x2[];
	bool3x3?: cg_bool3x3[];
	bool3x4?: cg_bool3x4[];
	bool4?: cg_bool4[];
	bool4x1?: cg_bool4x1[];
	bool4x2?: cg_bool4x2[];
	bool4x3?: cg_bool4x3[];
	bool4x4?: cg_bool4x4[];
	enum?: string[];
	fixed?: number[];
	fixed1?: number[];
	fixed1x1?: cg_fixed1x1[];
	fixed1x2?: cg_fixed1x2[];
	fixed1x3?: cg_fixed1x3[];
	fixed1x4?: cg_fixed1x4[];
	fixed2?: cg_fixed2[];
	fixed2x1?: cg_fixed2x1[];
	fixed2x2?: cg_fixed2x2[];
	fixed2x3?: cg_fixed2x3[];
	fixed2x4?: cg_fixed2x4[];
	fixed3?: cg_fixed3[];
	fixed3x1?: cg_fixed3x1[];
	fixed3x2?: cg_fixed3x2[];
	fixed3x3?: cg_fixed3x3[];
	fixed3x4?: cg_fixed3x4[];
	fixed4?: cg_fixed4[];
	fixed4x1?: cg_fixed4x1[];
	fixed4x2?: cg_fixed4x2[];
	fixed4x3?: cg_fixed4x3[];
	fixed4x4?: cg_fixed4x4[];
	float?: number[];
	float1?: number[];
	float1x1?: cg_float1x1[];
	float1x2?: cg_float1x2[];
	float1x3?: cg_float1x3[];
	float1x4?: cg_float1x4[];
	float2?: cg_float2[];
	float2x1?: cg_float2x1[];
	float2x2?: cg_float2x2[];
	float2x3?: cg_float2x3[];
	float2x4?: cg_float2x4[];
	float3?: cg_float3[];
	float3x1?: cg_float3x1[];
	float3x2?: cg_float3x2[];
	float3x3?: cg_float3x3[];
	float3x4?: cg_float3x4[];
	float4?: cg_float4[];
	float4x1?: cg_float4x1[];
	float4x2?: cg_float4x2[];
	float4x3?: cg_float4x3[];
	float4x4?: cg_float4x4[];
	half?: number[];
	half1?: number[];
	half1x1?: cg_half1x1[];
	half1x2?: cg_half1x2[];
	half1x3?: cg_half1x3[];
	half1x4?: cg_half1x4[];
	half2?: cg_half2[];
	half2x1?: cg_half2x1[];
	half2x2?: cg_half2x2[];
	half2x3?: cg_half2x3[];
	half2x4?: cg_half2x4[];
	half3?: cg_half3[];
	half3x1?: cg_half3x1[];
	half3x2?: cg_half3x2[];
	half3x3?: cg_half3x3[];
	half3x4?: cg_half3x4[];
	half4?: cg_half4[];
	half4x1?: cg_half4x1[];
	half4x2?: cg_half4x2[];
	half4x3?: cg_half4x3[];
	half4x4?: cg_half4x4[];
	int?: number[];
	int1?: number[];
	int1x1?: cg_int1x1[];
	int1x2?: cg_int1x2[];
	int1x3?: cg_int1x3[];
	int1x4?: cg_int1x4[];
	int2?: cg_int2[];
	int2x1?: cg_int2x1[];
	int2x2?: cg_int2x2[];
	int2x3?: cg_int2x3[];
	int2x4?: cg_int2x4[];
	int3?: cg_int3[];
	int3x1?: cg_int3x1[];
	int3x2?: cg_int3x2[];
	int3x3?: cg_int3x3[];
	int3x4?: cg_int3x4[];
	int4?: cg_int4[];
	int4x1?: cg_int4x1[];
	int4x2?: cg_int4x2[];
	int4x3?: cg_int4x3[];
	int4x4?: cg_int4x4[];
	sampler1D?: cg_sampler1D[];
	sampler2D?: cg_sampler2D[];
	sampler3D?: cg_sampler3D[];
	samplerCUBE?: cg_samplerCUBE[];
	samplerDEPTH?: cg_samplerDEPTH[];
	samplerRECT?: cg_samplerRECT[];
	string?: string[];
	surface?: cg_surface_type[];
	/** The usertype element allows you to create arrays of usertypes. */
	usertype?: cg_setuser_type[];
}
export interface  cg_setarray_type extends _cg_setarray_type { constructor: { new(): cg_setarray_type }; }
export var cg_setarray_type: { new(): cg_setarray_type };

/** Assigns a new value to a previously defined parameter. */
export interface _cg_setparam extends BaseType {
	program: string;
	ref: string;
	array: cg_setarray_type;
	bool: boolean;
	bool1: boolean;
	bool1x1: cg_bool1x1;
	bool1x2: cg_bool1x2;
	bool1x3: cg_bool1x3;
	bool1x4: cg_bool1x4;
	bool2: cg_bool2;
	bool2x1: cg_bool2x1;
	bool2x2: cg_bool2x2;
	bool2x3: cg_bool2x3;
	bool2x4: cg_bool2x4;
	bool3: cg_bool3;
	bool3x1: cg_bool3x1;
	bool3x2: cg_bool3x2;
	bool3x3: cg_bool3x3;
	bool3x4: cg_bool3x4;
	bool4: cg_bool4;
	bool4x1: cg_bool4x1;
	bool4x2: cg_bool4x2;
	bool4x3: cg_bool4x3;
	bool4x4: cg_bool4x4;
	connect_param: cg_connect_param;
	enum: string;
	fixed: number;
	fixed1: number;
	fixed1x1: cg_fixed1x1;
	fixed1x2: cg_fixed1x2;
	fixed1x3: cg_fixed1x3;
	fixed1x4: cg_fixed1x4;
	fixed2: cg_fixed2;
	fixed2x1: cg_fixed2x1;
	fixed2x2: cg_fixed2x2;
	fixed2x3: cg_fixed2x3;
	fixed2x4: cg_fixed2x4;
	fixed3: cg_fixed3;
	fixed3x1: cg_fixed3x1;
	fixed3x2: cg_fixed3x2;
	fixed3x3: cg_fixed3x3;
	fixed3x4: cg_fixed3x4;
	fixed4: cg_fixed4;
	fixed4x1: cg_fixed4x1;
	fixed4x2: cg_fixed4x2;
	fixed4x3: cg_fixed4x3;
	fixed4x4: cg_fixed4x4;
	float: number;
	float1: number;
	float1x1: cg_float1x1;
	float1x2: cg_float1x2;
	float1x3: cg_float1x3;
	float1x4: cg_float1x4;
	float2: cg_float2;
	float2x1: cg_float2x1;
	float2x2: cg_float2x2;
	float2x3: cg_float2x3;
	float2x4: cg_float2x4;
	float3: cg_float3;
	float3x1: cg_float3x1;
	float3x2: cg_float3x2;
	float3x3: cg_float3x3;
	float3x4: cg_float3x4;
	float4: cg_float4;
	float4x1: cg_float4x1;
	float4x2: cg_float4x2;
	float4x3: cg_float4x3;
	float4x4: cg_float4x4;
	half: number;
	half1: number;
	half1x1: cg_half1x1;
	half1x2: cg_half1x2;
	half1x3: cg_half1x3;
	half1x4: cg_half1x4;
	half2: cg_half2;
	half2x1: cg_half2x1;
	half2x2: cg_half2x2;
	half2x3: cg_half2x3;
	half2x4: cg_half2x4;
	half3: cg_half3;
	half3x1: cg_half3x1;
	half3x2: cg_half3x2;
	half3x3: cg_half3x3;
	half3x4: cg_half3x4;
	half4: cg_half4;
	half4x1: cg_half4x1;
	half4x2: cg_half4x2;
	half4x3: cg_half4x3;
	half4x4: cg_half4x4;
	int: number;
	int1: number;
	int1x1: cg_int1x1;
	int1x2: cg_int1x2;
	int1x3: cg_int1x3;
	int1x4: cg_int1x4;
	int2: cg_int2;
	int2x1: cg_int2x1;
	int2x2: cg_int2x2;
	int2x3: cg_int2x3;
	int2x4: cg_int2x4;
	int3: cg_int3;
	int3x1: cg_int3x1;
	int3x2: cg_int3x2;
	int3x3: cg_int3x3;
	int3x4: cg_int3x4;
	int4: cg_int4;
	int4x1: cg_int4x1;
	int4x2: cg_int4x2;
	int4x3: cg_int4x3;
	int4x4: cg_int4x4;
	sampler1D: cg_sampler1D;
	sampler2D: cg_sampler2D;
	sampler3D: cg_sampler3D;
	samplerCUBE: cg_samplerCUBE;
	samplerDEPTH: cg_samplerDEPTH;
	samplerRECT: cg_samplerRECT;
	string: string;
	surface: cg_surface_type;
	usertype: cg_setuser_type;
}
export interface  cg_setparam extends _cg_setparam { constructor: { new(): cg_setparam }; }
export var cg_setparam: { new(): cg_setparam };

export interface _cg_setparam_simple extends BaseType {
	ref: string;
	annotate?: fx_annotate_common[];
	bool: boolean;
	bool1: boolean;
	bool1x1: cg_bool1x1;
	bool1x2: cg_bool1x2;
	bool1x3: cg_bool1x3;
	bool1x4: cg_bool1x4;
	bool2: cg_bool2;
	bool2x1: cg_bool2x1;
	bool2x2: cg_bool2x2;
	bool2x3: cg_bool2x3;
	bool2x4: cg_bool2x4;
	bool3: cg_bool3;
	bool3x1: cg_bool3x1;
	bool3x2: cg_bool3x2;
	bool3x3: cg_bool3x3;
	bool3x4: cg_bool3x4;
	bool4: cg_bool4;
	bool4x1: cg_bool4x1;
	bool4x2: cg_bool4x2;
	bool4x3: cg_bool4x3;
	bool4x4: cg_bool4x4;
	enum: string;
	fixed: number;
	fixed1: number;
	fixed1x1: cg_fixed1x1;
	fixed1x2: cg_fixed1x2;
	fixed1x3: cg_fixed1x3;
	fixed1x4: cg_fixed1x4;
	fixed2: cg_fixed2;
	fixed2x1: cg_fixed2x1;
	fixed2x2: cg_fixed2x2;
	fixed2x3: cg_fixed2x3;
	fixed2x4: cg_fixed2x4;
	fixed3: cg_fixed3;
	fixed3x1: cg_fixed3x1;
	fixed3x2: cg_fixed3x2;
	fixed3x3: cg_fixed3x3;
	fixed3x4: cg_fixed3x4;
	fixed4: cg_fixed4;
	fixed4x1: cg_fixed4x1;
	fixed4x2: cg_fixed4x2;
	fixed4x3: cg_fixed4x3;
	fixed4x4: cg_fixed4x4;
	float: number;
	float1: number;
	float1x1: cg_float1x1;
	float1x2: cg_float1x2;
	float1x3: cg_float1x3;
	float1x4: cg_float1x4;
	float2: cg_float2;
	float2x1: cg_float2x1;
	float2x2: cg_float2x2;
	float2x3: cg_float2x3;
	float2x4: cg_float2x4;
	float3: cg_float3;
	float3x1: cg_float3x1;
	float3x2: cg_float3x2;
	float3x3: cg_float3x3;
	float3x4: cg_float3x4;
	float4: cg_float4;
	float4x1: cg_float4x1;
	float4x2: cg_float4x2;
	float4x3: cg_float4x3;
	float4x4: cg_float4x4;
	half: number;
	half1: number;
	half1x1: cg_half1x1;
	half1x2: cg_half1x2;
	half1x3: cg_half1x3;
	half1x4: cg_half1x4;
	half2: cg_half2;
	half2x1: cg_half2x1;
	half2x2: cg_half2x2;
	half2x3: cg_half2x3;
	half2x4: cg_half2x4;
	half3: cg_half3;
	half3x1: cg_half3x1;
	half3x2: cg_half3x2;
	half3x3: cg_half3x3;
	half3x4: cg_half3x4;
	half4: cg_half4;
	half4x1: cg_half4x1;
	half4x2: cg_half4x2;
	half4x3: cg_half4x3;
	half4x4: cg_half4x4;
	int: number;
	int1: number;
	int1x1: cg_int1x1;
	int1x2: cg_int1x2;
	int1x3: cg_int1x3;
	int1x4: cg_int1x4;
	int2: cg_int2;
	int2x1: cg_int2x1;
	int2x2: cg_int2x2;
	int2x3: cg_int2x3;
	int2x4: cg_int2x4;
	int3: cg_int3;
	int3x1: cg_int3x1;
	int3x2: cg_int3x2;
	int3x3: cg_int3x3;
	int3x4: cg_int3x4;
	int4: cg_int4;
	int4x1: cg_int4x1;
	int4x2: cg_int4x2;
	int4x3: cg_int4x3;
	int4x4: cg_int4x4;
	sampler1D: cg_sampler1D;
	sampler2D: cg_sampler2D;
	sampler3D: cg_sampler3D;
	samplerCUBE: cg_samplerCUBE;
	samplerDEPTH: cg_samplerDEPTH;
	samplerRECT: cg_samplerRECT;
	string: string;
	surface: cg_surface_type;
}
export interface  cg_setparam_simple extends _cg_setparam_simple { constructor: { new(): cg_setparam_simple }; }
export var cg_setparam_simple: { new(): cg_setparam_simple };

/** Creates an instance of a structured class. */
export interface _cg_setuser_type extends BaseType {
	name: string;
	/** Reference a code or include element which defines the usertype */
	source: string;
	array?: cg_setarray_type[];
	bool?: boolean[];
	bool1?: boolean[];
	bool1x1?: cg_bool1x1[];
	bool1x2?: cg_bool1x2[];
	bool1x3?: cg_bool1x3[];
	bool1x4?: cg_bool1x4[];
	bool2?: cg_bool2[];
	bool2x1?: cg_bool2x1[];
	bool2x2?: cg_bool2x2[];
	bool2x3?: cg_bool2x3[];
	bool2x4?: cg_bool2x4[];
	bool3?: cg_bool3[];
	bool3x1?: cg_bool3x1[];
	bool3x2?: cg_bool3x2[];
	bool3x3?: cg_bool3x3[];
	bool3x4?: cg_bool3x4[];
	bool4?: cg_bool4[];
	bool4x1?: cg_bool4x1[];
	bool4x2?: cg_bool4x2[];
	bool4x3?: cg_bool4x3[];
	bool4x4?: cg_bool4x4[];
	connect_param?: cg_connect_param[];
	enum?: string[];
	fixed?: number[];
	fixed1?: number[];
	fixed1x1?: cg_fixed1x1[];
	fixed1x2?: cg_fixed1x2[];
	fixed1x3?: cg_fixed1x3[];
	fixed1x4?: cg_fixed1x4[];
	fixed2?: cg_fixed2[];
	fixed2x1?: cg_fixed2x1[];
	fixed2x2?: cg_fixed2x2[];
	fixed2x3?: cg_fixed2x3[];
	fixed2x4?: cg_fixed2x4[];
	fixed3?: cg_fixed3[];
	fixed3x1?: cg_fixed3x1[];
	fixed3x2?: cg_fixed3x2[];
	fixed3x3?: cg_fixed3x3[];
	fixed3x4?: cg_fixed3x4[];
	fixed4?: cg_fixed4[];
	fixed4x1?: cg_fixed4x1[];
	fixed4x2?: cg_fixed4x2[];
	fixed4x3?: cg_fixed4x3[];
	fixed4x4?: cg_fixed4x4[];
	float?: number[];
	float1?: number[];
	float1x1?: cg_float1x1[];
	float1x2?: cg_float1x2[];
	float1x3?: cg_float1x3[];
	float1x4?: cg_float1x4[];
	float2?: cg_float2[];
	float2x1?: cg_float2x1[];
	float2x2?: cg_float2x2[];
	float2x3?: cg_float2x3[];
	float2x4?: cg_float2x4[];
	float3?: cg_float3[];
	float3x1?: cg_float3x1[];
	float3x2?: cg_float3x2[];
	float3x3?: cg_float3x3[];
	float3x4?: cg_float3x4[];
	float4?: cg_float4[];
	float4x1?: cg_float4x1[];
	float4x2?: cg_float4x2[];
	float4x3?: cg_float4x3[];
	float4x4?: cg_float4x4[];
	half?: number[];
	half1?: number[];
	half1x1?: cg_half1x1[];
	half1x2?: cg_half1x2[];
	half1x3?: cg_half1x3[];
	half1x4?: cg_half1x4[];
	half2?: cg_half2[];
	half2x1?: cg_half2x1[];
	half2x2?: cg_half2x2[];
	half2x3?: cg_half2x3[];
	half2x4?: cg_half2x4[];
	half3?: cg_half3[];
	half3x1?: cg_half3x1[];
	half3x2?: cg_half3x2[];
	half3x3?: cg_half3x3[];
	half3x4?: cg_half3x4[];
	half4?: cg_half4[];
	half4x1?: cg_half4x1[];
	half4x2?: cg_half4x2[];
	half4x3?: cg_half4x3[];
	half4x4?: cg_half4x4[];
	int?: number[];
	int1?: number[];
	int1x1?: cg_int1x1[];
	int1x2?: cg_int1x2[];
	int1x3?: cg_int1x3[];
	int1x4?: cg_int1x4[];
	int2?: cg_int2[];
	int2x1?: cg_int2x1[];
	int2x2?: cg_int2x2[];
	int2x3?: cg_int2x3[];
	int2x4?: cg_int2x4[];
	int3?: cg_int3[];
	int3x1?: cg_int3x1[];
	int3x2?: cg_int3x2[];
	int3x3?: cg_int3x3[];
	int3x4?: cg_int3x4[];
	int4?: cg_int4[];
	int4x1?: cg_int4x1[];
	int4x2?: cg_int4x2[];
	int4x3?: cg_int4x3[];
	int4x4?: cg_int4x4[];
	sampler1D?: cg_sampler1D[];
	sampler2D?: cg_sampler2D[];
	sampler3D?: cg_sampler3D[];
	samplerCUBE?: cg_samplerCUBE[];
	samplerDEPTH?: cg_samplerDEPTH[];
	samplerRECT?: cg_samplerRECT[];
	/** Use a series of these to set the members by name.  The ref attribute will be relative to the usertype you are in right now. */
	setparam?: cg_setparam[];
	string?: string[];
	surface?: cg_surface_type[];
	usertype?: cg_setuser_type[];
}
export interface  cg_setuser_type extends _cg_setuser_type { constructor: { new(): cg_setuser_type }; }
export var cg_setuser_type: { new(): cg_setuser_type };

/** Declares a resource that can be used both as the source for texture samples and as the target of a rendering pass. */
export interface _cg_surface_type extends _fx_surface_common {
	/** A procedural surface generator for the cg profile. */
	generator?: cg_surface_typeGeneratorType;
}
export interface  cg_surface_type extends _cg_surface_type { constructor: { new(): cg_surface_type }; }
export var cg_surface_type: { new(): cg_surface_type };

export interface _cg_surface_typeGeneratorType extends BaseType {
	/** The annotate element allows you to specify an annotation for this generator. */
	annotate?: fx_annotate_common[];
	/** The code element allows you to embed cg sourcecode for the surface generator. */
	code: fx_code_profile[];
	/** The include element imports cg source code or precompiled binary shaders into the FX Runtime by referencing an external resource. */
	include: fx_include_common[];
	/** The entry symbol for the shader function. */
	name: cg_surface_typeGeneratorTypeNameType;
	/** Assigns a new value to a previously defined parameter. */
	setparam?: cg_setparam_simple[];
}
export interface cg_surface_typeGeneratorType extends _cg_surface_typeGeneratorType { constructor: { new(): cg_surface_typeGeneratorType }; }

export interface _cg_surface_typeGeneratorTypeNameType extends Primitive._string {
	source?: string;
}
export interface cg_surface_typeGeneratorTypeNameType extends _cg_surface_typeGeneratorTypeNameType { constructor: { new(): cg_surface_typeGeneratorTypeNameType }; }

export interface _ChannelType extends BaseType {
	/** The source attribute indicates the location of the sampler using a URL expression.
	  * The sampler must be declared within the same document. Required attribute. */
	source: string;
	/** The target attribute indicates the location of the element bound to the output of the sampler.
	  * This text string is a path-name following a simple syntax described in Address Syntax.
	  * Required attribute. */
	target: string;
}
export interface ChannelType extends _ChannelType { constructor: { new(): ChannelType }; }

export interface _Clear_colorType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Clear_colorType extends _Clear_colorType { constructor: { new(): Clear_colorType }; }

export interface _Clear_colorType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Clear_colorType_2 extends _Clear_colorType_2 { constructor: { new(): Clear_colorType_2 }; }

export interface _Clear_depthType extends BaseType {
	param?: string;
	value?: number;
}
export interface Clear_depthType extends _Clear_depthType { constructor: { new(): Clear_depthType }; }

export interface _Clear_depthType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Clear_depthType_2 extends _Clear_depthType_2 { constructor: { new(): Clear_depthType_2 }; }

export interface _Clear_stencilType extends BaseType {
	param?: string;
	value?: number;
}
export interface Clear_stencilType extends _Clear_stencilType { constructor: { new(): Clear_stencilType }; }

export interface _Clear_stencilType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Clear_stencilType_2 extends _Clear_stencilType_2 { constructor: { new(): Clear_stencilType_2 }; }

export interface _Clip_plane_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Clip_plane_enableType extends _Clip_plane_enableType { constructor: { new(): Clip_plane_enableType }; }

export interface _Clip_plane_enableType_2 extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Clip_plane_enableType_2 extends _Clip_plane_enableType_2 { constructor: { new(): Clip_plane_enableType_2 }; }

export interface _Clip_planeType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Clip_planeType extends _Clip_planeType { constructor: { new(): Clip_planeType }; }

export interface _Clip_planeType_2 extends BaseType {
	index: number;
	param?: string;
	value?: bool4;
}
export interface Clip_planeType_2 extends _Clip_planeType_2 { constructor: { new(): Clip_planeType_2 }; }

export interface _COLLADAType extends BaseType {
	/** See http://www.w3.org/TR/xmlbase/ for
	  * information about this attribute. */
	base: string;
	/** The version attribute is the COLLADA schema revision with which the instance document
	  * conforms. Required Attribute. */
	version: VersionType;
	/** The asset element defines asset management information regarding its parent element. */
	asset: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The library_animation_clips element declares a module of animation_clip elements. */
	library_animation_clips?: Library_animation_clipsType[];
	/** The library_animations element declares a module of animation elements. */
	library_animations?: Library_animationsType[];
	/** The library_cameras element declares a module of camera elements. */
	library_cameras?: Library_camerasType[];
	/** The library_controllers element declares a module of controller elements. */
	library_controllers?: Library_controllersType[];
	/** The library_effects element declares a module of effect elements. */
	library_effects?: Library_effectsType[];
	/** The library_force_fields element declares a module of force_field elements. */
	library_force_fields?: Library_force_fieldsType[];
	/** The library_geometries element declares a module of geometry elements. */
	library_geometries?: Library_geometriesType[];
	/** The library_images element declares a module of image elements. */
	library_images?: Library_imagesType[];
	/** The library_lights element declares a module of light elements. */
	library_lights?: Library_lightsType[];
	/** The library_materials element declares a module of material elements. */
	library_materials?: Library_materialsType[];
	/** The library_nodes element declares a module of node elements. */
	library_nodes?: Library_nodesType[];
	/** The library_physics_materials element declares a module of physics_material elements. */
	library_physics_materials?: Library_physics_materialsType[];
	/** The library_physics_models element declares a module of physics_model elements. */
	library_physics_models?: Library_physics_modelsType[];
	/** The library_physics_scenes element declares a module of physics_scene elements. */
	library_physics_scenes?: Library_physics_scenesType[];
	/** The library_visual_scenes element declares a module of visual_scene elements. */
	library_visual_scenes?: Library_visual_scenesType[];
	/** The scene embodies the entire set of information that can be visualized from the
	  * contents of a COLLADA resource. The scene element declares the base of the scene
	  * hierarchy or scene graph. The scene contains elements that comprise much of the
	  * visual and transformational information content as created by the authoring tools. */
	scene?: COLLADATypeSceneType;
}
export interface COLLADAType extends _COLLADAType { constructor: { new(): COLLADAType }; }

export interface _COLLADATypeSceneType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The instance_physics_scene element declares the instantiation of a COLLADA physics_scene resource.
	  * The instance_physics_scene element may appear any number of times. */
	instance_physics_scene?: InstanceWithExtra[];
	/** The instance_visual_scene element declares the instantiation of a COLLADA visual_scene resource.
	  * The instance_visual_scene element may only appear once. */
	instance_visual_scene?: InstanceWithExtra;
}
export interface COLLADATypeSceneType extends _COLLADATypeSceneType { constructor: { new(): COLLADATypeSceneType }; }

export interface _Color_logic_op_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Color_logic_op_enableType extends _Color_logic_op_enableType { constructor: { new(): Color_logic_op_enableType }; }

export interface _Color_logic_op_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Color_logic_op_enableType_2 extends _Color_logic_op_enableType_2 { constructor: { new(): Color_logic_op_enableType_2 }; }

export interface _Color_maskType extends BaseType {
	param?: string;
	value?: bool4;
}
export interface Color_maskType extends _Color_maskType { constructor: { new(): Color_maskType }; }

export interface _Color_maskType_2 extends BaseType {
	param?: string;
	value?: bool4;
}
export interface Color_maskType_2 extends _Color_maskType_2 { constructor: { new(): Color_maskType_2 }; }

export interface _Color_material_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Color_material_enableType extends _Color_material_enableType { constructor: { new(): Color_material_enableType }; }

export interface _Color_material_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Color_material_enableType_2 extends _Color_material_enableType_2 { constructor: { new(): Color_material_enableType_2 }; }

export interface _Color_materialType extends BaseType {
	face: Color_materialTypeFaceType;
	mode: Color_materialTypeModeType;
}
export interface Color_materialType extends _Color_materialType { constructor: { new(): Color_materialType }; }

export interface _Color_materialTypeFaceType extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Color_materialTypeFaceType extends _Color_materialTypeFaceType { constructor: { new(): Color_materialTypeFaceType }; }

export interface _Color_materialTypeModeType extends BaseType {
	param?: string;
	value?: gl_material_type;
}
export interface Color_materialTypeModeType extends _Color_materialTypeModeType { constructor: { new(): Color_materialTypeModeType }; }

export interface _common_color_or_texture_type extends BaseType {
	color: common_color_or_texture_typeColorType;
	param: common_color_or_texture_typeParamType;
	texture: common_color_or_texture_typeTextureType;
}
export interface  common_color_or_texture_type extends _common_color_or_texture_type { constructor: { new(): common_color_or_texture_type }; }
export var common_color_or_texture_type: { new(): common_color_or_texture_type };

type common_color_or_texture_typeColorType = number[];

export interface _common_color_or_texture_typeParamType extends BaseType {
	ref: string;
}
export interface common_color_or_texture_typeParamType extends _common_color_or_texture_typeParamType { constructor: { new(): common_color_or_texture_typeParamType }; }

export interface _common_color_or_texture_typeTextureType extends BaseType {
	texcoord: string;
	texture: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType;
}
export interface common_color_or_texture_typeTextureType extends _common_color_or_texture_typeTextureType { constructor: { new(): common_color_or_texture_typeTextureType }; }

export interface _common_float_or_param_type extends BaseType {
	float: common_float_or_param_typeFloatType;
	param: common_float_or_param_typeParamType;
}
export interface  common_float_or_param_type extends _common_float_or_param_type { constructor: { new(): common_float_or_param_type }; }
export var common_float_or_param_type: { new(): common_float_or_param_type };

export interface _common_float_or_param_typeFloatType extends _float {
	sid: string;
}
export interface common_float_or_param_typeFloatType extends _common_float_or_param_typeFloatType { constructor: { new(): common_float_or_param_typeFloatType }; }

export interface _common_float_or_param_typeParamType extends BaseType {
	ref: string;
}
export interface common_float_or_param_typeParamType extends _common_float_or_param_typeParamType { constructor: { new(): common_float_or_param_typeParamType }; }

export interface _common_newparam_type extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	float: number;
	float2: float2;
	float3: float3;
	float4: float4;
	sampler2D: fx_sampler2D_common;
	semantic?: string;
	surface: fx_surface_common;
}
export interface  common_newparam_type extends _common_newparam_type { constructor: { new(): common_newparam_type }; }
export var common_newparam_type: { new(): common_newparam_type };

export type Common_profile_input = ("BINORMAL" | "COLOR" | "CONTINUITY" | "IMAGE" | "IN_TANGENT" | "INPUT" | "INTERPOLATION" | "INV_BIND_MATRIX" | "JOINT" | "LINEAR_STEPS" | "MORPH_TARGET" | "MORPH_WEIGHT" | "NORMAL" | "OUTPUT" | "OUT_TANGENT" | "POSITION" | "TANGENT" | "TEXBINORMAL" | "TEXCOORD" | "TEXTANGENT" | "UV" | "VERTEX" | "WEIGHT");
export interface _Common_profile_input extends Primitive._string { content: Common_profile_input; }

export type Common_profile_param = ("A" | "ANGLE" | "B" | "DOUBLE_SIDED" | "G" | "P" | "Q" | "R" | "S" | "T" | "TIME" | "U" | "V" | "W" | "X" | "Y" | "Z");
export interface _Common_profile_param extends Primitive._string { content: Common_profile_param; }

export interface _common_transparent_type extends _common_color_or_texture_type {
	opaque: fx_opaque_enum;
}
export interface  common_transparent_type extends _common_transparent_type { constructor: { new(): common_transparent_type }; }
export var common_transparent_type: { new(): common_transparent_type };

export interface _ControllerType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The morph element describes the data required to blend between sets of static meshes. Each
	  * possible mesh that can be blended (a morph target) must be specified. */
	morph: MorphType;
	/** The skin element contains vertex and primitive information sufficient to describe blend-weight skinning. */
	skin: SkinType;
}
export interface ControllerType extends _ControllerType { constructor: { new(): ControllerType }; }

export interface _Convex_meshType extends BaseType {
	/** The convex_hull_of attribute is a URI string of geometry to compute the convex hull of.
	  * Optional attribute. */
	convex_hull_of: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The lines element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into individual lines. Each line described by the mesh has two vertices.
	  * The first line is formed from first and second vertices. The second line is formed from the
	  * third and fourth vertices and so on. */
	lines?: LinesType[];
	/** The linestrips element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into connected line-strips. Each line-strip described by the mesh
	  * has an arbitrary number of vertices. Each line segment within the line-strip is formed from the
	  * current vertex and the preceding vertex. */
	linestrips?: LinestripsType[];
	/** The polygons element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described can contain
	  * arbitrary numbers of vertices. These polygons may be self intersecting and may also contain holes. */
	polygons?: PolygonsType[];
	/** The polylist element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described in polylist can
	  * contain arbitrary numbers of vertices. Unlike the polygons element, the polylist element cannot
	  * contain polygons with holes. */
	polylist?: PolylistType[];
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source?: SourceType[];
	/** The triangles element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual triangles.	Each triangle described by the mesh has
	  * three vertices. The first triangle is formed from the first, second, and third vertices. The
	  * second triangle is formed from the fourth, fifth, and sixth vertices, and so on. */
	triangles?: TrianglesType[];
	/** The trifans element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the first and the previous vertices. */
	trifans?: TrifansType[];
	/** The tristrips element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the previous two vertices. */
	tristrips?: TristripsType[];
	/** The vertices element declares the attributes and identity of mesh-vertices. The vertices element
	  * describes mesh-vertices in a mesh geometry. The mesh-vertices represent the position (identity)
	  * of the vertices comprising the mesh and other vertex attributes that are invariant to tessellation. */
	vertices?: VerticesType;
}
export interface Convex_meshType extends _Convex_meshType { constructor: { new(): Convex_meshType }; }

export interface _Cull_face_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Cull_face_enableType extends _Cull_face_enableType { constructor: { new(): Cull_face_enableType }; }

export interface _Cull_face_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Cull_face_enableType_2 extends _Cull_face_enableType_2 { constructor: { new(): Cull_face_enableType_2 }; }

export interface _Cull_faceType extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Cull_faceType extends _Cull_faceType { constructor: { new(): Cull_faceType }; }

export interface _Cull_faceType_2 extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Cull_faceType_2 extends _Cull_faceType_2 { constructor: { new(): Cull_faceType_2 }; }

export interface _CylinderType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A float value that represents the length of the cylinder along the Y axis. */
	height: number;
	/** float2 values that represent the radii of the cylinder. */
	radius: float2;
}
export interface CylinderType extends _CylinderType { constructor: { new(): CylinderType }; }

export type dateTime = Date;
type _dateTime = Primitive._Date;

export interface _Depth_bounds_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_bounds_enableType extends _Depth_bounds_enableType { constructor: { new(): Depth_bounds_enableType }; }

export interface _Depth_boundsType extends BaseType {
	param?: string;
	value?: float2;
}
export interface Depth_boundsType extends _Depth_boundsType { constructor: { new(): Depth_boundsType }; }

export interface _Depth_clamp_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_clamp_enableType extends _Depth_clamp_enableType { constructor: { new(): Depth_clamp_enableType }; }

export interface _Depth_funcType extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Depth_funcType extends _Depth_funcType { constructor: { new(): Depth_funcType }; }

export interface _Depth_funcType_2 extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Depth_funcType_2 extends _Depth_funcType_2 { constructor: { new(): Depth_funcType_2 }; }

export interface _Depth_maskType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_maskType extends _Depth_maskType { constructor: { new(): Depth_maskType }; }

export interface _Depth_maskType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_maskType_2 extends _Depth_maskType_2 { constructor: { new(): Depth_maskType_2 }; }

export interface _Depth_rangeType extends BaseType {
	param?: string;
	value?: float2;
}
export interface Depth_rangeType extends _Depth_rangeType { constructor: { new(): Depth_rangeType }; }

export interface _Depth_rangeType_2 extends BaseType {
	param?: string;
	value?: float2;
}
export interface Depth_rangeType_2 extends _Depth_rangeType_2 { constructor: { new(): Depth_rangeType_2 }; }

export interface _Depth_test_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_test_enableType extends _Depth_test_enableType { constructor: { new(): Depth_test_enableType }; }

export interface _Depth_test_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Depth_test_enableType_2 extends _Depth_test_enableType_2 { constructor: { new(): Depth_test_enableType_2 }; }

export interface _Dither_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Dither_enableType extends _Dither_enableType { constructor: { new(): Dither_enableType }; }

export interface _Dither_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Dither_enableType_2 extends _Dither_enableType_2 { constructor: { new(): Dither_enableType_2 }; }

export interface _EffectType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The annotate element allows you to specify an annotation on this effect. */
	annotate?: fx_annotate_common[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The fx_profile_abstract element is only used as a substitution group hook for COLLADA FX profiles. */
	fx_profile_abstract: Fx_profile_abstractProxyType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	/** The newparam element allows you to create new effect parameters which can be shared by multipe profiles. */
	newparam?: fx_newparam_common[];
}
export interface EffectType extends _EffectType { constructor: { new(): EffectType }; }

export interface _EllipsoidType extends BaseType {
	size: float3;
}
export interface EllipsoidType extends _EllipsoidType { constructor: { new(): EllipsoidType }; }

export interface _ExtraType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The type attribute indicates the type of the value data. This text string must be understood by
	  * the application. Optional attribute. */
	type: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique: TechniqueType[];
}
export interface ExtraType extends _ExtraType { constructor: { new(): ExtraType }; }

export type float = number;
type _float = Primitive._number;

type Float_arrayType = number[];

export type float2 = number[];

export type float2x2 = number[];

export type float2x3 = number[];

export type float2x4 = number[];

export type float3 = number[];

export type float3x2 = number[];

export type float3x3 = number[];

export type float3x4 = number[];

export type float4 = number[];

export type float4x2 = number[];

export type float4x3 = number[];

export type float4x4 = number[];

export type float7 = number[];

export interface _Fog_colorType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Fog_colorType extends _Fog_colorType { constructor: { new(): Fog_colorType }; }

export interface _Fog_colorType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Fog_colorType_2 extends _Fog_colorType_2 { constructor: { new(): Fog_colorType_2 }; }

export interface _Fog_coord_srcType extends BaseType {
	param?: string;
	value?: gl_fog_coord_src_type;
}
export interface Fog_coord_srcType extends _Fog_coord_srcType { constructor: { new(): Fog_coord_srcType }; }

export interface _Fog_densityType extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_densityType extends _Fog_densityType { constructor: { new(): Fog_densityType }; }

export interface _Fog_densityType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_densityType_2 extends _Fog_densityType_2 { constructor: { new(): Fog_densityType_2 }; }

export interface _Fog_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Fog_enableType extends _Fog_enableType { constructor: { new(): Fog_enableType }; }

export interface _Fog_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Fog_enableType_2 extends _Fog_enableType_2 { constructor: { new(): Fog_enableType_2 }; }

export interface _Fog_endType extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_endType extends _Fog_endType { constructor: { new(): Fog_endType }; }

export interface _Fog_endType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_endType_2 extends _Fog_endType_2 { constructor: { new(): Fog_endType_2 }; }

export interface _Fog_modeType extends BaseType {
	param?: string;
	value?: gl_fog_type;
}
export interface Fog_modeType extends _Fog_modeType { constructor: { new(): Fog_modeType }; }

export interface _Fog_modeType_2 extends BaseType {
	param?: string;
	value?: gl_fog_type;
}
export interface Fog_modeType_2 extends _Fog_modeType_2 { constructor: { new(): Fog_modeType_2 }; }

export interface _Fog_startType extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_startType extends _Fog_startType { constructor: { new(): Fog_startType }; }

export interface _Fog_startType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Fog_startType_2 extends _Fog_startType_2 { constructor: { new(): Fog_startType_2 }; }

export interface _Force_fieldType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique: TechniqueType[];
}
export interface Force_fieldType extends _Force_fieldType { constructor: { new(): Force_fieldType }; }

export interface _Front_faceType extends BaseType {
	param?: string;
	value?: gl_front_face_type;
}
export interface Front_faceType extends _Front_faceType { constructor: { new(): Front_faceType }; }

export interface _Front_faceType_2 extends BaseType {
	param?: string;
	value?: gl_front_face_type;
}
export interface Front_faceType_2 extends _Front_faceType_2 { constructor: { new(): Front_faceType_2 }; }

export interface _fx_annotate_common extends BaseType {
	name: string;
	bool: boolean;
	bool2: bool2;
	bool3: bool3;
	bool4: bool4;
	float: number;
	float2: float2;
	float2x2: float2x2;
	float3: float3;
	float3x3: float3x3;
	float4: float4;
	float4x4: float4x4;
	int: number;
	int2: int2;
	int3: int3;
	int4: int4;
	string: string;
}
export interface  fx_annotate_common extends _fx_annotate_common { constructor: { new(): fx_annotate_common }; }
export var fx_annotate_common: { new(): fx_annotate_common };

export type fx_clearcolor_common = number[];

export interface _fx_cleardepth_common extends _float {
	index?: number;
}
export interface  fx_cleardepth_common extends _fx_cleardepth_common { constructor: { new(): fx_cleardepth_common }; }
export var fx_cleardepth_common: { new(): fx_cleardepth_common };

export interface _fx_clearstencil_common extends Primitive._number {
	index?: number;
}
export interface  fx_clearstencil_common extends _fx_clearstencil_common { constructor: { new(): fx_clearstencil_common }; }
export var fx_clearstencil_common: { new(): fx_clearstencil_common };

/** The fx_code_profile type allows you to specify an inline block of source code. */
export interface _fx_code_profile extends Primitive._string {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid?: string;
}
export interface  fx_code_profile extends _fx_code_profile { constructor: { new(): fx_code_profile }; }
export var fx_code_profile: { new(): fx_code_profile };

export type fx_color_common = number[];

export interface _fx_colortarget_common extends Primitive._string {
	face?: fx_surface_face_enum;
	index?: number;
	mip?: number;
	slice?: number;
}
export interface  fx_colortarget_common extends _fx_colortarget_common { constructor: { new(): fx_colortarget_common }; }
export var fx_colortarget_common: { new(): fx_colortarget_common };

export interface _fx_depthtarget_common extends Primitive._string {
	face?: fx_surface_face_enum;
	index?: number;
	mip?: number;
	slice?: number;
}
export interface  fx_depthtarget_common extends _fx_depthtarget_common { constructor: { new(): fx_depthtarget_common }; }
export var fx_depthtarget_common: { new(): fx_depthtarget_common };

export type fx_draw_common = string;
type _fx_draw_common = Primitive._string;

/** The include element is used to import source code or precompiled binary shaders into the FX Runtime by referencing an external resource. */
export interface _fx_include_common extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource.  This may refer to a local resource using a relative URL
	  * fragment identifier that begins with the “#” character. The url attribute may refer to an external
	  * resource using an absolute or relative URL. */
	url: string;
}
export interface  fx_include_common extends _fx_include_common { constructor: { new(): fx_include_common }; }
export var fx_include_common: { new(): fx_include_common };

export type fx_modifier_enum_common = ("CONST" | "UNIFORM" | "VARYING" | "STATIC" | "VOLATILE" | "EXTERN" | "SHARED");
export interface _fx_modifier_enum_common extends Primitive._string { content: fx_modifier_enum_common; }

/** This element creates a new, named param object in the FX Runtime, assigns it a type, an initial value, and additional attributes at declaration time. */
export interface _fx_newparam_common extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The annotate element allows you to specify an annotation for this new param. */
	annotate?: fx_annotate_common[];
	bool: boolean;
	bool2: bool2;
	bool3: bool3;
	bool4: bool4;
	enum: string;
	float: number;
	float1x1: number;
	float1x2: float2;
	float1x3: float3;
	float1x4: float4;
	float2: float2;
	float2x1: float2;
	float2x2: float2x2;
	float2x3: float2x3;
	float2x4: float2x4;
	float3: float3;
	float3x1: float3;
	float3x2: float3x2;
	float3x3: float3x3;
	float3x4: float3x4;
	float4: float4;
	float4x1: float4;
	float4x2: float4x2;
	float4x3: float4x3;
	float4x4: float4x4;
	int: number;
	int2: int2;
	int3: int3;
	int4: int4;
	/** The modifier element allows you to specify a modifier for this new param. */
	modifier?: fx_modifier_enum_common;
	sampler1D: fx_sampler1D_common;
	sampler2D: fx_sampler2D_common;
	sampler3D: fx_sampler3D_common;
	samplerCUBE: fx_samplerCUBE_common;
	samplerDEPTH: fx_samplerDEPTH_common;
	samplerRECT: fx_samplerRECT_common;
	/** The semantic element allows you to specify a semantic for this new param. */
	semantic?: string;
	surface: fx_surface_common;
}
export interface  fx_newparam_common extends _fx_newparam_common { constructor: { new(): fx_newparam_common }; }
export var fx_newparam_common: { new(): fx_newparam_common };

export type fx_opaque_enum = ("A_ONE" | "RGB_ZERO");
export interface _fx_opaque_enum extends Primitive._string { content: fx_opaque_enum; }

export type fx_pipeline_stage_common = ("VERTEXPROGRAM" | "FRAGMENTPROGRAM" | "VERTEXSHADER" | "PIXELSHADER");
export interface _fx_pipeline_stage_common extends Primitive._string { content: fx_pipeline_stage_common; }

export interface _Fx_profile_abstractProxyType extends BaseType {
	/** Opens a block of CG platform-specific data types and technique declarations. */
	profile_CG?: Profile_CGType;
	/** Opens a block of COMMON platform-specific data types and technique declarations. */
	profile_COMMON?: Profile_COMMONType;
	/** Opens a block of GLES platform-specific data types and technique declarations. */
	profile_GLES?: Profile_GLESType;
	/** Opens a block of GLSL platform-specific data types and technique declarations. */
	profile_GLSL?: Profile_GLSLType;
}
export interface Fx_profile_abstractProxyType extends _Fx_profile_abstractProxyType { constructor: { new(): Fx_profile_abstractProxyType }; }

export type fx_sampler_filter_common = ("NONE" | "NEAREST" | "LINEAR" | "NEAREST_MIPMAP_NEAREST" | "LINEAR_MIPMAP_NEAREST" | "NEAREST_MIPMAP_LINEAR" | "LINEAR_MIPMAP_LINEAR");
export interface _fx_sampler_filter_common extends Primitive._string { content: fx_sampler_filter_common; }

export type fx_sampler_wrap_common = ("NONE" | "WRAP" | "MIRROR" | "CLAMP" | "BORDER");
export interface _fx_sampler_wrap_common extends Primitive._string { content: fx_sampler_wrap_common; }

/** A one-dimensional texture sampler. */
export interface _fx_sampler1D_common extends BaseType {
	border_color?: fx_color_common;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	source: string;
	wrap_s?: fx_sampler_wrap_common;
}
export interface  fx_sampler1D_common extends _fx_sampler1D_common { constructor: { new(): fx_sampler1D_common }; }
export var fx_sampler1D_common: { new(): fx_sampler1D_common };

/** A two-dimensional texture sampler. */
export interface _fx_sampler2D_common extends BaseType {
	border_color?: fx_color_common;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	source: string;
	wrap_s?: fx_sampler_wrap_common;
	wrap_t?: fx_sampler_wrap_common;
}
export interface  fx_sampler2D_common extends _fx_sampler2D_common { constructor: { new(): fx_sampler2D_common }; }
export var fx_sampler2D_common: { new(): fx_sampler2D_common };

/** A three-dimensional texture sampler. */
export interface _fx_sampler3D_common extends BaseType {
	border_color?: fx_color_common;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	source: string;
	wrap_p?: fx_sampler_wrap_common;
	wrap_s?: fx_sampler_wrap_common;
	wrap_t?: fx_sampler_wrap_common;
}
export interface  fx_sampler3D_common extends _fx_sampler3D_common { constructor: { new(): fx_sampler3D_common }; }
export var fx_sampler3D_common: { new(): fx_sampler3D_common };

/** A texture sampler for cube maps. */
export interface _fx_samplerCUBE_common extends BaseType {
	border_color?: fx_color_common;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	source: string;
	wrap_p?: fx_sampler_wrap_common;
	wrap_s?: fx_sampler_wrap_common;
	wrap_t?: fx_sampler_wrap_common;
}
export interface  fx_samplerCUBE_common extends _fx_samplerCUBE_common { constructor: { new(): fx_samplerCUBE_common }; }
export var fx_samplerCUBE_common: { new(): fx_samplerCUBE_common };

/** A texture sampler for depth maps. */
export interface _fx_samplerDEPTH_common extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	source: string;
	wrap_s?: fx_sampler_wrap_common;
	wrap_t?: fx_sampler_wrap_common;
}
export interface  fx_samplerDEPTH_common extends _fx_samplerDEPTH_common { constructor: { new(): fx_samplerDEPTH_common }; }
export var fx_samplerDEPTH_common: { new(): fx_samplerDEPTH_common };

/** A two-dimensional texture sampler. */
export interface _fx_samplerRECT_common extends BaseType {
	border_color?: fx_color_common;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	source: string;
	wrap_s?: fx_sampler_wrap_common;
	wrap_t?: fx_sampler_wrap_common;
}
export interface  fx_samplerRECT_common extends _fx_samplerRECT_common { constructor: { new(): fx_samplerRECT_common }; }
export var fx_samplerRECT_common: { new(): fx_samplerRECT_common };

export interface _fx_stenciltarget_common extends Primitive._string {
	face?: fx_surface_face_enum;
	index?: number;
	mip?: number;
	slice?: number;
}
export interface  fx_stenciltarget_common extends _fx_stenciltarget_common { constructor: { new(): fx_stenciltarget_common }; }
export var fx_stenciltarget_common: { new(): fx_stenciltarget_common };

/** The fx_surface_common type is used to declare a resource that can be used both as the source for texture samples and as the target of a rendering pass. */
export interface _fx_surface_common extends BaseType {
	/** Specifying the type of a surface is mandatory though the type may be "UNTYPED".  When a surface is typed as UNTYPED, it is said to be temporarily untyped and instead will be typed later by the context it is used in such as which samplers reference it in that are used in a particular technique or pass.   If there is a type mismatch between what is set into it later and what the runtime decides the type should be the result in profile and platform specific behavior. */
	type: fx_surface_type_enum;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Contains a string representing the profile and platform specific texel format that the author would like this surface to use.  If this element is not specified then the application will use a common format R8G8B8A8 with linear color gradient, not  sRGB. */
	format?: string;
	/** If the exact format cannot be resolved via the "format" element then the format_hint will describe the important features of the format so that the application may select a compatable or close format */
	format_hint?: fx_surface_format_hint_common;
	/** Init a CUBE from a compound image such as DDS */
	init_cube?: fx_surface_init_cube_common;
	/** Initialize the surface one sub-surface at a time by specifying combinations of mip, face, and slice which make sense for a particular surface type.  Each sub-surface is initialized by a common 2D image, not a complex compound image such as DDS. If not all subsurfaces are initialized, it is invalid and will result in profile and platform specific behavior unless mipmap_generate is responsible for initializing the remainder of the sub-surfaces */
	init_from?: fx_surface_init_from_common[];
	/** Init a 1D,2D,RECT,DEPTH from a compound image such as DDS */
	init_planar?: fx_surface_init_planar_common;
	/** Init a 3D from a compound image such as DDS */
	init_volume?: fx_surface_init_volume_common;
	/** the surface should contain the following number of MIP levels.  If this element is not present it is assumed that all miplevels exist until a dimension becomes 1 texel.  To create a surface that has only one level of mip maps (mip=0) set this to 1.  If the value is 0 the result is the same as if mip_levels was unspecified, all possible mip_levels will exist. */
	mip_levels?: number;
	/** By default it is assumed that mipmaps are supplied by the author so, if not all subsurfaces are initialized, it is invalid and will result in profile and platform specific behavior unless mipmap_generate is responsible for initializing the remainder of the sub-surfaces */
	mipmap_generate?: boolean;
	/** The surface should be sized to these exact dimensions */
	size?: int3;
	/** The surface should be sized to a dimension based on this ratio of the viewport's dimensions in pixels */
	viewport_ratio?: float2;
}
export interface  fx_surface_common extends _fx_surface_common { constructor: { new(): fx_surface_common }; }
export var fx_surface_common: { new(): fx_surface_common };

export type fx_surface_face_enum = ("POSITIVE_X" | "NEGATIVE_X" | "POSITIVE_Y" | "NEGATIVE_Y" | "POSITIVE_Z" | "NEGATIVE_Z");
export interface _fx_surface_face_enum extends Primitive._string { content: fx_surface_face_enum; }

/** The per-texel layout of the format.  The length of the string indicate how many channels there are and the letter respresents the name of the channel.  There are typically 0 to 4 channels. */
export type fx_surface_format_hint_channels_enum = ("RGB" | "RGBA" | "L" | "LA" | "D" | "XYZ" | "XYZW");
export interface _fx_surface_format_hint_channels_enum extends Primitive._string { content: fx_surface_format_hint_channels_enum; }

/** If the exact format cannot be resolve via other methods then the format_hint will describe the important features of the format so that the application may select a compatable or close format */
export interface _fx_surface_format_hint_common extends BaseType {
	/** The per-texel layout of the format.  The length of the string indicate how many channels there are and the letter respresents the name of the channel.  There are typically 0 to 4 channels. */
	channels: fx_surface_format_hint_channels_enum;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Additional hints about data relationships and other things to help the application pick the best format. */
	option?: fx_surface_format_hint_option_enum[];
	/** Each channel of the texel has a precision.  Typically these are all linked together.  An exact format lay lower the precision of an individual channel but applying a higher precision by linking the channels together may still convey the same information. */
	precision?: fx_surface_format_hint_precision_enum;
	/** Each channel represents a range of values. Some example ranges are signed or unsigned integers, or between between a clamped range such as 0.0f to 1.0f, or high dynamic range via floating point */
	range: fx_surface_format_hint_range_enum;
}
export interface  fx_surface_format_hint_common extends _fx_surface_format_hint_common { constructor: { new(): fx_surface_format_hint_common }; }
export var fx_surface_format_hint_common: { new(): fx_surface_format_hint_common };

/** Additional hints about data relationships and other things to help the application pick the best format. */
export type fx_surface_format_hint_option_enum = ("SRGB_GAMMA" | "NORMALIZED3" | "NORMALIZED4" | "COMPRESSABLE");
export interface _fx_surface_format_hint_option_enum extends Primitive._string { content: fx_surface_format_hint_option_enum; }

/** Each channel of the texel has a precision.  Typically these are all linked together.  An exact format lay lower the precision of an individual channel but applying a higher precision by linking the channels together may still convey the same information. */
export type fx_surface_format_hint_precision_enum = ("LOW" | "MID" | "HIGH");
export interface _fx_surface_format_hint_precision_enum extends Primitive._string { content: fx_surface_format_hint_precision_enum; }

/** Each channel represents a range of values. Some example ranges are signed or unsigned integers, or between between a clamped range such as 0.0f to 1.0f, or high dynamic range via floating point */
export type fx_surface_format_hint_range_enum = ("SNORM" | "UNORM" | "SINT" | "UINT" | "FLOAT");
export interface _fx_surface_format_hint_range_enum extends Primitive._string { content: fx_surface_format_hint_range_enum; }

export interface _fx_surface_init_cube_common extends BaseType {
	/** Init the entire surface with one compound image such as DDS */
	all: fx_surface_init_cube_commonAllType;
	/** Init each face mipchain with one compound image such as DDS */
	face: fx_surface_init_cube_commonFaceType[];
	/** Init all primary mip level 0 subsurfaces with one compound image such as DDS.  Use of this element expects that the surface has element mip_levels=0 or mipmap_generate. */
	primary: fx_surface_init_cube_commonPrimaryType;
}
export interface  fx_surface_init_cube_common extends _fx_surface_init_cube_common { constructor: { new(): fx_surface_init_cube_common }; }
export var fx_surface_init_cube_common: { new(): fx_surface_init_cube_common };

export interface _fx_surface_init_cube_commonAllType extends BaseType {
	ref: string;
}
export interface fx_surface_init_cube_commonAllType extends _fx_surface_init_cube_commonAllType { constructor: { new(): fx_surface_init_cube_commonAllType }; }

export interface _fx_surface_init_cube_commonFaceType extends BaseType {
	ref: string;
}
export interface fx_surface_init_cube_commonFaceType extends _fx_surface_init_cube_commonFaceType { constructor: { new(): fx_surface_init_cube_commonFaceType }; }

export interface _fx_surface_init_cube_commonPrimaryType extends BaseType {
	ref: string;
	/** If the image dues not natively describe the face ordering then this series of order elements will describe which face the index belongs too */
	order?: fx_surface_face_enum[];
}
export interface fx_surface_init_cube_commonPrimaryType extends _fx_surface_init_cube_commonPrimaryType { constructor: { new(): fx_surface_init_cube_commonPrimaryType }; }

/** This element is an IDREF which specifies the image to use to initialize a specific mip of a 1D or 2D surface, 3D slice, or Cube face. */
export interface _fx_surface_init_from_common extends Primitive._string {
	face: fx_surface_face_enum;
	mip: number;
	slice: number;
}
export interface  fx_surface_init_from_common extends _fx_surface_init_from_common { constructor: { new(): fx_surface_init_from_common }; }
export var fx_surface_init_from_common: { new(): fx_surface_init_from_common };

/** For 1D, 2D, RECT surface types */
export interface _fx_surface_init_planar_common extends BaseType {
	/** Init the entire surface with one compound image such as DDS */
	all: fx_surface_init_planar_commonAllType;
}
export interface  fx_surface_init_planar_common extends _fx_surface_init_planar_common { constructor: { new(): fx_surface_init_planar_common }; }
export var fx_surface_init_planar_common: { new(): fx_surface_init_planar_common };

export interface _fx_surface_init_planar_commonAllType extends BaseType {
	ref: string;
}
export interface fx_surface_init_planar_commonAllType extends _fx_surface_init_planar_commonAllType { constructor: { new(): fx_surface_init_planar_commonAllType }; }

export interface _fx_surface_init_volume_common extends BaseType {
	/** Init the entire surface with one compound image such as DDS */
	all: fx_surface_init_volume_commonAllType;
	/** Init mip level 0 of the surface with one compound image such as DDS.  Use of this element expects that the surface has element mip_levels=0 or mipmap_generate. */
	primary: fx_surface_init_volume_commonPrimaryType;
}
export interface  fx_surface_init_volume_common extends _fx_surface_init_volume_common { constructor: { new(): fx_surface_init_volume_common }; }
export var fx_surface_init_volume_common: { new(): fx_surface_init_volume_common };

export interface _fx_surface_init_volume_commonAllType extends BaseType {
	ref: string;
}
export interface fx_surface_init_volume_commonAllType extends _fx_surface_init_volume_commonAllType { constructor: { new(): fx_surface_init_volume_commonAllType }; }

export interface _fx_surface_init_volume_commonPrimaryType extends BaseType {
	ref: string;
}
export interface fx_surface_init_volume_commonPrimaryType extends _fx_surface_init_volume_commonPrimaryType { constructor: { new(): fx_surface_init_volume_commonPrimaryType }; }

export type fx_surface_type_enum = ("UNTYPED" | "1D" | "2D" | "3D" | "RECT" | "CUBE" | "DEPTH");
export interface _fx_surface_type_enum extends Primitive._string { content: fx_surface_type_enum; }

export interface _GeometryType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The definition of the convex_mesh element is identical to the mesh element with the exception that
	  * instead of a complete description (source, vertices, polygons etc.), it may simply point to another
	  * geometry to derive its shape. The latter case means that the convex hull of that geometry should
	  * be computed and is indicated by the optional “convex_hull_of” attribute. */
	convex_mesh: Convex_meshType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The mesh element contains vertex and primitive information sufficient to describe basic geometric meshes. */
	mesh: MeshType;
	/** The spline element contains control vertex information sufficient to describe basic splines. */
	spline: SplineType;
}
export interface GeometryType extends _GeometryType { constructor: { new(): GeometryType }; }

export type gl_alpha_value_type = number;
type _gl_alpha_value_type = Primitive._number;

export type gl_blend_equation_type = ("FUNC_ADD" | "FUNC_SUBTRACT" | "FUNC_REVERSE_SUBTRACT" | "MIN" | "MAX");
export interface _gl_blend_equation_type extends Primitive._string { content: gl_blend_equation_type; }

export type gl_blend_type = ("ZERO" | "ONE" | "SRC_COLOR" | "ONE_MINUS_SRC_COLOR" | "DEST_COLOR" | "ONE_MINUS_DEST_COLOR" | "SRC_ALPHA" | "ONE_MINUS_SRC_ALPHA" | "DST_ALPHA" | "ONE_MINUS_DST_ALPHA" | "CONSTANT_COLOR" | "ONE_MINUS_CONSTANT_COLOR" | "CONSTANT_ALPHA" | "ONE_MINUS_CONSTANT_ALPHA" | "SRC_ALPHA_SATURATE");
export interface _gl_blend_type extends Primitive._string { content: gl_blend_type; }

export type gl_enumeration = string;
type _gl_enumeration = _string;

export type gl_face_type = ("FRONT" | "BACK" | "FRONT_AND_BACK");
export interface _gl_face_type extends Primitive._string { content: gl_face_type; }

export type gl_fog_coord_src_type = ("FOG_COORDINATE" | "FRAGMENT_DEPTH");
export interface _gl_fog_coord_src_type extends Primitive._string { content: gl_fog_coord_src_type; }

export type gl_fog_type = ("LINEAR" | "EXP" | "EXP2");
export interface _gl_fog_type extends Primitive._string { content: gl_fog_type; }

export type gl_front_face_type = ("CW" | "CCW");
export interface _gl_front_face_type extends Primitive._string { content: gl_front_face_type; }

export type gl_func_type = ("NEVER" | "LESS" | "LEQUAL" | "EQUAL" | "GREATER" | "NOTEQUAL" | "GEQUAL" | "ALWAYS");
export interface _gl_func_type extends Primitive._string { content: gl_func_type; }

type _Gl_hook_abstractProxyType = BaseType
export interface Gl_hook_abstractProxyType extends _Gl_hook_abstractProxyType { constructor: { new(): Gl_hook_abstractProxyType }; }

export type gl_light_model_color_control_type = ("SINGLE_COLOR" | "SEPARATE_SPECULAR_COLOR");
export interface _gl_light_model_color_control_type extends Primitive._string { content: gl_light_model_color_control_type; }

export type gl_logic_op_type = ("CLEAR" | "AND" | "AND_REVERSE" | "COPY" | "AND_INVERTED" | "NOOP" | "XOR" | "OR" | "NOR" | "EQUIV" | "INVERT" | "OR_REVERSE" | "COPY_INVERTED" | "NAND" | "SET");
export interface _gl_logic_op_type extends Primitive._string { content: gl_logic_op_type; }

export type gl_material_type = ("EMISSION" | "AMBIENT" | "DIFFUSE" | "SPECULAR" | "AMBIENT_AND_DIFFUSE");
export interface _gl_material_type extends Primitive._string { content: gl_material_type; }

export type GL_MAX_CLIP_PLANES_index = number;
type _GL_MAX_CLIP_PLANES_index = Primitive._number;

export type GL_MAX_LIGHTS_index = number;
type _GL_MAX_LIGHTS_index = Primitive._number;

export type GL_MAX_TEXTURE_IMAGE_UNITS_index = number;
type _GL_MAX_TEXTURE_IMAGE_UNITS_index = Primitive._number;

export type gl_polygon_mode_type = ("POINT" | "LINE" | "FILL");
export interface _gl_polygon_mode_type extends Primitive._string { content: gl_polygon_mode_type; }

/** A one-dimensional texture sampler for the GLSL profile. */
type _gl_sampler1D = _fx_sampler1D_common
export interface  gl_sampler1D extends _gl_sampler1D { constructor: { new(): gl_sampler1D }; }
export var gl_sampler1D: { new(): gl_sampler1D };

/** A two-dimensional texture sampler for the GLSL profile. */
type _gl_sampler2D = _fx_sampler2D_common
export interface  gl_sampler2D extends _gl_sampler2D { constructor: { new(): gl_sampler2D }; }
export var gl_sampler2D: { new(): gl_sampler2D };

/** A three-dimensional texture sampler for the GLSL profile. */
type _gl_sampler3D = _fx_sampler3D_common
export interface  gl_sampler3D extends _gl_sampler3D { constructor: { new(): gl_sampler3D }; }
export var gl_sampler3D: { new(): gl_sampler3D };

/** A cube map texture sampler for the GLSL profile. */
type _gl_samplerCUBE = _fx_samplerCUBE_common
export interface  gl_samplerCUBE extends _gl_samplerCUBE { constructor: { new(): gl_samplerCUBE }; }
export var gl_samplerCUBE: { new(): gl_samplerCUBE };

/** A depth texture sampler for the GLSL profile. */
type _gl_samplerDEPTH = _fx_samplerDEPTH_common
export interface  gl_samplerDEPTH extends _gl_samplerDEPTH { constructor: { new(): gl_samplerDEPTH }; }
export var gl_samplerDEPTH: { new(): gl_samplerDEPTH };

/** A two-dimensional texture sampler for the GLSL profile. */
type _gl_samplerRECT = _fx_samplerRECT_common
export interface  gl_samplerRECT extends _gl_samplerRECT { constructor: { new(): gl_samplerRECT }; }
export var gl_samplerRECT: { new(): gl_samplerRECT };

export type gl_shade_model_type = ("FLAT" | "SMOOTH");
export interface _gl_shade_model_type extends Primitive._string { content: gl_shade_model_type; }

export type gl_stencil_op_type = ("KEEP" | "ZERO" | "REPLACE" | "INCR" | "DECR" | "INVERT" | "INCR_WRAP" | "DECR_WRAP");
export interface _gl_stencil_op_type extends Primitive._string { content: gl_stencil_op_type; }

export type gles_enumeration = string;
type _gles_enumeration = _string;

export type GLES_MAX_CLIP_PLANES_index = number;
type _GLES_MAX_CLIP_PLANES_index = Primitive._number;

export type GLES_MAX_LIGHTS_index = number;
type _GLES_MAX_LIGHTS_index = Primitive._number;

export type GLES_MAX_TEXTURE_COORDS_index = number;
type _GLES_MAX_TEXTURE_COORDS_index = Primitive._number;

export type GLES_MAX_TEXTURE_IMAGE_UNITS_index = number;
type _GLES_MAX_TEXTURE_IMAGE_UNITS_index = Primitive._number;

/** Create a new, named param object in the GLES Runtime, assign it a type, an initial value, and additional attributes at declaration time. */
export interface _gles_newparam extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. */
	sid: string;
	/** The annotate element allows you to specify an annotation for this new param. */
	annotate?: fx_annotate_common[];
	bool: boolean;
	bool2: bool2;
	bool3: bool3;
	bool4: bool4;
	enum: string;
	float: number;
	float1x1: number;
	float1x2: float2;
	float1x3: float3;
	float1x4: float4;
	float2: float2;
	float2x1: float2;
	float2x2: float2x2;
	float2x3: float2x3;
	float2x4: float2x4;
	float3: float3;
	float3x1: float3;
	float3x2: float3x2;
	float3x3: float3x3;
	float3x4: float3x4;
	float4: float4;
	float4x1: float4;
	float4x2: float4x2;
	float4x3: float4x3;
	float4x4: float4x4;
	int: number;
	int2: int2;
	int3: int3;
	int4: int4;
	/** The modifier element allows you to specify a modifier for this new param. */
	modifier?: fx_modifier_enum_common;
	sampler_state: gles_sampler_state;
	/** The semantic element allows you to specify a semantic for this new param. */
	semantic?: string;
	surface: fx_surface_common;
	texture_pipeline: gles_texture_pipeline;
	texture_unit: gles_texture_unit;
}
export interface  gles_newparam extends _gles_newparam { constructor: { new(): gles_newparam }; }
export var gles_newparam: { new(): gles_newparam };

export type gles_rendertarget_common = string;
type _gles_rendertarget_common = Primitive._string;

/** Two-dimensional texture sampler state for profile_GLES. This is a bundle of sampler-specific states that will be referenced by one or more texture_units. */
export interface _gles_sampler_state extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	magfilter?: fx_sampler_filter_common;
	minfilter?: fx_sampler_filter_common;
	mipfilter?: fx_sampler_filter_common;
	mipmap_bias?: number;
	mipmap_maxlevel?: number;
	wrap_s?: gles_sampler_wrap;
	wrap_t?: gles_sampler_wrap;
}
export interface  gles_sampler_state extends _gles_sampler_state { constructor: { new(): gles_sampler_state }; }
export var gles_sampler_state: { new(): gles_sampler_state };

export type gles_sampler_wrap = ("REPEAT" | "CLAMP" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT");
export interface _gles_sampler_wrap extends Primitive._string { content: gles_sampler_wrap; }

export type gles_stencil_op_type = ("KEEP" | "ZERO" | "REPLACE" | "INCR" | "DECR" | "INVERT");
export interface _gles_stencil_op_type extends Primitive._string { content: gles_stencil_op_type; }

export type gles_texcombiner_argument_index_type = number;
type _gles_texcombiner_argument_index_type = Primitive._number;

export interface _gles_texcombiner_argumentAlpha_type extends BaseType {
	operand: gles_texcombiner_operandAlpha_enums;
	source: gles_texcombiner_source_enums;
	unit?: string;
}
export interface  gles_texcombiner_argumentAlpha_type extends _gles_texcombiner_argumentAlpha_type { constructor: { new(): gles_texcombiner_argumentAlpha_type }; }
export var gles_texcombiner_argumentAlpha_type: { new(): gles_texcombiner_argumentAlpha_type };

export interface _gles_texcombiner_argumentRGB_type extends BaseType {
	operand: gles_texcombiner_operandRGB_enums;
	source: gles_texcombiner_source_enums;
	unit?: string;
}
export interface  gles_texcombiner_argumentRGB_type extends _gles_texcombiner_argumentRGB_type { constructor: { new(): gles_texcombiner_argumentRGB_type }; }
export var gles_texcombiner_argumentRGB_type: { new(): gles_texcombiner_argumentRGB_type };

export interface _gles_texcombiner_command_type extends BaseType {
	alpha?: gles_texcombiner_commandAlpha_type;
	constant?: gles_texture_constant_type;
	RGB?: gles_texcombiner_commandRGB_type;
}
export interface  gles_texcombiner_command_type extends _gles_texcombiner_command_type { constructor: { new(): gles_texcombiner_command_type }; }
export var gles_texcombiner_command_type: { new(): gles_texcombiner_command_type };

export interface _gles_texcombiner_commandAlpha_type extends BaseType {
	operator: gles_texcombiner_operatorAlpha_enums;
	scale?: number;
	argument: gles_texcombiner_argumentAlpha_type[];
}
export interface  gles_texcombiner_commandAlpha_type extends _gles_texcombiner_commandAlpha_type { constructor: { new(): gles_texcombiner_commandAlpha_type }; }
export var gles_texcombiner_commandAlpha_type: { new(): gles_texcombiner_commandAlpha_type };

/** Defines the RGB portion of a texture_pipeline command. This is a combiner-mode texturing operation. */
export interface _gles_texcombiner_commandRGB_type extends BaseType {
	operator: gles_texcombiner_operatorRGB_enums;
	scale?: number;
	argument: gles_texcombiner_argumentRGB_type[];
}
export interface  gles_texcombiner_commandRGB_type extends _gles_texcombiner_commandRGB_type { constructor: { new(): gles_texcombiner_commandRGB_type }; }
export var gles_texcombiner_commandRGB_type: { new(): gles_texcombiner_commandRGB_type };

export type gles_texcombiner_operandAlpha_enums = ("SRC_ALPHA" | "ONE_MINUS_SRC_ALPHA");
export interface _gles_texcombiner_operandAlpha_enums extends _gl_blend_type { content: gles_texcombiner_operandAlpha_enums; }

export type gles_texcombiner_operandRGB_enums = ("SRC_COLOR" | "ONE_MINUS_SRC_COLOR" | "SRC_ALPHA" | "ONE_MINUS_SRC_ALPHA");
export interface _gles_texcombiner_operandRGB_enums extends _gl_blend_type { content: gles_texcombiner_operandRGB_enums; }

export type gles_texcombiner_operatorAlpha_enums = ("REPLACE" | "MODULATE" | "ADD" | "ADD_SIGNED" | "INTERPOLATE" | "SUBTRACT");
export interface _gles_texcombiner_operatorAlpha_enums extends Primitive._string { content: gles_texcombiner_operatorAlpha_enums; }

export type gles_texcombiner_operatorRGB_enums = ("REPLACE" | "MODULATE" | "ADD" | "ADD_SIGNED" | "INTERPOLATE" | "SUBTRACT" | "DOT3_RGB" | "DOT3_RGBA");
export interface _gles_texcombiner_operatorRGB_enums extends Primitive._string { content: gles_texcombiner_operatorRGB_enums; }

export type gles_texcombiner_source_enums = ("TEXTURE" | "CONSTANT" | "PRIMARY" | "PREVIOUS");
export interface _gles_texcombiner_source_enums extends Primitive._string { content: gles_texcombiner_source_enums; }

export interface _gles_texenv_command_type extends BaseType {
	operator: gles_texenv_mode_enums;
	unit: string;
	constant?: gles_texture_constant_type;
}
export interface  gles_texenv_command_type extends _gles_texenv_command_type { constructor: { new(): gles_texenv_command_type }; }
export var gles_texenv_command_type: { new(): gles_texenv_command_type };

export type gles_texenv_mode_enums = ("REPLACE" | "MODULATE" | "DECAL" | "BLEND" | "ADD");
export interface _gles_texenv_mode_enums extends Primitive._string { content: gles_texenv_mode_enums; }

export interface _gles_texture_constant_type extends BaseType {
	param?: string;
	value?: float4;
}
export interface  gles_texture_constant_type extends _gles_texture_constant_type { constructor: { new(): gles_texture_constant_type }; }
export var gles_texture_constant_type: { new(): gles_texture_constant_type };

/** Defines a set of texturing commands that will be converted into multitexturing operations using glTexEnv in regular and combiner mode. */
export interface _gles_texture_pipeline extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The extra element declares additional information regarding its parent element. */
	extra: ExtraType[];
	/** Defines a texture_pipeline command. This is a combiner-mode texturing operation. */
	texcombiner: gles_texcombiner_command_type[];
	/** Defines a texture_pipeline command. It is a simple noncombiner mode of texturing operations. */
	texenv: gles_texenv_command_type[];
}
export interface  gles_texture_pipeline extends _gles_texture_pipeline { constructor: { new(): gles_texture_pipeline }; }
export var gles_texture_pipeline: { new(): gles_texture_pipeline };

export interface _gles_texture_unit extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	sampler_state?: string;
	surface?: string;
	texcoord?: gles_texture_unitTexcoordType;
}
export interface  gles_texture_unit extends _gles_texture_unit { constructor: { new(): gles_texture_unit }; }
export var gles_texture_unit: { new(): gles_texture_unit };

export interface _gles_texture_unitTexcoordType extends BaseType {
	semantic: string;
}
export interface gles_texture_unitTexcoordType extends _gles_texture_unitTexcoordType { constructor: { new(): gles_texture_unitTexcoordType }; }

export type glsl_bool = boolean;
type _glsl_bool = Primitive._boolean;

export type glsl_bool2 = boolean[];

export type glsl_bool3 = boolean[];

export type glsl_bool4 = boolean[];

export type glsl_float = number;
type _glsl_float = Primitive._number;

export type glsl_float2 = number[];

export type glsl_float2x2 = number[];

export type glsl_float3 = number[];

export type glsl_float3x3 = number[];

export type glsl_float4 = number[];

export type glsl_float4x4 = number[];

export type glsl_identifier = string;
type _glsl_identifier = Primitive._string;

export type glsl_int = number;
type _glsl_int = Primitive._number;

export type glsl_int2 = number[];

export type glsl_int3 = number[];

export type glsl_int4 = number[];

export type glsl_ListOfBool = boolean[];

export type glsl_ListOfFloat = number[];

export type glsl_ListOfInt = number[];

/** The glsl_newarray_type is used to creates a parameter of a one-dimensional array type. */
export interface _glsl_newarray_type extends BaseType {
	/** The length attribute specifies the length of the array. */
	length: number;
	/** You may recursively nest glsl_newarray elements to create multidimensional arrays. */
	array?: glsl_newarray_type[];
	bool?: boolean[];
	bool2?: glsl_bool2[];
	bool3?: glsl_bool3[];
	bool4?: glsl_bool4[];
	enum?: string[];
	float?: number[];
	float2?: glsl_float2[];
	float2x2?: glsl_float2x2[];
	float3?: glsl_float3[];
	float3x3?: glsl_float3x3[];
	float4?: glsl_float4[];
	float4x4?: glsl_float4x4[];
	int?: number[];
	int2?: glsl_int2[];
	int3?: glsl_int3[];
	int4?: glsl_int4[];
	sampler1D?: gl_sampler1D[];
	sampler2D?: gl_sampler2D[];
	sampler3D?: gl_sampler3D[];
	samplerCUBE?: gl_samplerCUBE[];
	samplerDEPTH?: gl_samplerDEPTH[];
	samplerRECT?: gl_samplerRECT[];
	surface?: glsl_surface_type[];
}
export interface  glsl_newarray_type extends _glsl_newarray_type { constructor: { new(): glsl_newarray_type }; }
export var glsl_newarray_type: { new(): glsl_newarray_type };

export interface _glsl_newparam extends BaseType {
	sid: string;
	annotate?: fx_annotate_common[];
	array: glsl_newarray_type;
	bool: boolean;
	bool2: glsl_bool2;
	bool3: glsl_bool3;
	bool4: glsl_bool4;
	enum: string;
	float: number;
	float2: glsl_float2;
	float2x2: glsl_float2x2;
	float3: glsl_float3;
	float3x3: glsl_float3x3;
	float4: glsl_float4;
	float4x4: glsl_float4x4;
	int: number;
	int2: glsl_int2;
	int3: glsl_int3;
	int4: glsl_int4;
	modifier?: fx_modifier_enum_common;
	sampler1D: gl_sampler1D;
	sampler2D: gl_sampler2D;
	sampler3D: gl_sampler3D;
	samplerCUBE: gl_samplerCUBE;
	samplerDEPTH: gl_samplerDEPTH;
	samplerRECT: gl_samplerRECT;
	semantic?: string;
	surface: glsl_surface_type;
}
export interface  glsl_newparam extends _glsl_newparam { constructor: { new(): glsl_newparam }; }
export var glsl_newparam: { new(): glsl_newparam };

export type glsl_pipeline_stage = ("VERTEXPROGRAM" | "FRAGMENTPROGRAM");
export interface _glsl_pipeline_stage extends Primitive._string { content: glsl_pipeline_stage; }

/** The glsl_newarray_type is used to creates a parameter of a one-dimensional array type. */
export interface _glsl_setarray_type extends BaseType {
	/** The length attribute specifies the length of the array. */
	length?: number;
	/** You may recursively nest glsl_newarray elements to create multidimensional arrays. */
	array?: glsl_setarray_type[];
	bool?: boolean[];
	bool2?: glsl_bool2[];
	bool3?: glsl_bool3[];
	bool4?: glsl_bool4[];
	enum?: string[];
	float?: number[];
	float2?: glsl_float2[];
	float2x2?: glsl_float2x2[];
	float3?: glsl_float3[];
	float3x3?: glsl_float3x3[];
	float4?: glsl_float4[];
	float4x4?: glsl_float4x4[];
	int?: number[];
	int2?: glsl_int2[];
	int3?: glsl_int3[];
	int4?: glsl_int4[];
	sampler1D?: gl_sampler1D[];
	sampler2D?: gl_sampler2D[];
	sampler3D?: gl_sampler3D[];
	samplerCUBE?: gl_samplerCUBE[];
	samplerDEPTH?: gl_samplerDEPTH[];
	samplerRECT?: gl_samplerRECT[];
	surface?: glsl_surface_type[];
}
export interface  glsl_setarray_type extends _glsl_setarray_type { constructor: { new(): glsl_setarray_type }; }
export var glsl_setarray_type: { new(): glsl_setarray_type };

export interface _glsl_setparam extends BaseType {
	program: string;
	ref: string;
	annotate?: fx_annotate_common[];
	array: glsl_setarray_type;
	bool: boolean;
	bool2: glsl_bool2;
	bool3: glsl_bool3;
	bool4: glsl_bool4;
	enum: string;
	float: number;
	float2: glsl_float2;
	float2x2: glsl_float2x2;
	float3: glsl_float3;
	float3x3: glsl_float3x3;
	float4: glsl_float4;
	float4x4: glsl_float4x4;
	int: number;
	int2: glsl_int2;
	int3: glsl_int3;
	int4: glsl_int4;
	sampler1D: gl_sampler1D;
	sampler2D: gl_sampler2D;
	sampler3D: gl_sampler3D;
	samplerCUBE: gl_samplerCUBE;
	samplerDEPTH: gl_samplerDEPTH;
	samplerRECT: gl_samplerRECT;
	surface: glsl_surface_type;
}
export interface  glsl_setparam extends _glsl_setparam { constructor: { new(): glsl_setparam }; }
export var glsl_setparam: { new(): glsl_setparam };

export interface _glsl_setparam_simple extends BaseType {
	ref: string;
	annotate?: fx_annotate_common[];
	bool: boolean;
	bool2: glsl_bool2;
	bool3: glsl_bool3;
	bool4: glsl_bool4;
	enum: string;
	float: number;
	float2: glsl_float2;
	float2x2: glsl_float2x2;
	float3: glsl_float3;
	float3x3: glsl_float3x3;
	float4: glsl_float4;
	float4x4: glsl_float4x4;
	int: number;
	int2: glsl_int2;
	int3: glsl_int3;
	int4: glsl_int4;
	sampler1D: gl_sampler1D;
	sampler2D: gl_sampler2D;
	sampler3D: gl_sampler3D;
	samplerCUBE: gl_samplerCUBE;
	samplerDEPTH: gl_samplerDEPTH;
	samplerRECT: gl_samplerRECT;
	surface: glsl_surface_type;
}
export interface  glsl_setparam_simple extends _glsl_setparam_simple { constructor: { new(): glsl_setparam_simple }; }
export var glsl_setparam_simple: { new(): glsl_setparam_simple };

/** A surface type for the GLSL profile. This surface inherits from the fx_surface_common type and adds the
  * ability to programmatically generate textures. */
export interface _glsl_surface_type extends _fx_surface_common {
	/** A procedural surface generator. */
	generator?: glsl_surface_typeGeneratorType;
}
export interface  glsl_surface_type extends _glsl_surface_type { constructor: { new(): glsl_surface_type }; }
export var glsl_surface_type: { new(): glsl_surface_type };

export interface _glsl_surface_typeGeneratorType extends BaseType {
	/** The annotate element allows you to specify an annotation for this surface generator. */
	annotate?: fx_annotate_common[];
	/** The code element allows you to embed GLSL code to use for this surface generator. */
	code: fx_code_profile[];
	/** The include element allows you to import GLSL code to use for this surface generator. */
	include: fx_include_common[];
	/** The entry symbol for the shader function. */
	name: glsl_surface_typeGeneratorTypeNameType;
	/** The setparam element allows you to assign a new value to a previously defined parameter. */
	setparam?: glsl_setparam_simple[];
}
export interface glsl_surface_typeGeneratorType extends _glsl_surface_typeGeneratorType { constructor: { new(): glsl_surface_typeGeneratorType }; }

export interface _glsl_surface_typeGeneratorTypeNameType extends Primitive._string {
	source?: string;
}
export interface glsl_surface_typeGeneratorTypeNameType extends _glsl_surface_typeGeneratorTypeNameType { constructor: { new(): glsl_surface_typeGeneratorTypeNameType }; }

export interface _IDREF_arrayType extends Primitive._string {
	/** The count attribute indicates the number of values in the array. Required attribute. */
	count: number;
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
}
export interface IDREF_arrayType extends _IDREF_arrayType { constructor: { new(): IDREF_arrayType }; }

export interface _ImageType extends BaseType {
	/** The depth attribute is an integer value that indicates the depth of the image in pixel units.
	  * A 2-D image has a depth of 1, which is also the default value. Optional attribute. */
	depth: number;
	/** The format attribute is a text string value that indicates the image format. Optional attribute. */
	format: string;
	/** The height attribute is an integer value that indicates the height of the image in pixel
	  * units. Optional attribute. */
	height: number;
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The width attribute is an integer value that indicates the width of the image in pixel units.
	  * Optional attribute. */
	width: number;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The data child element contains a sequence of hexadecimal encoded  binary octets representing
	  * the embedded image data. */
	data: ListOfHexBinary;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The init_from element allows you to specify an external image file to use for the image element. */
	init_from: string;
}
export interface ImageType extends _ImageType { constructor: { new(): ImageType }; }

/** The InputGlobal type is used to represent inputs that can reference external resources. */
export interface _InputGlobal extends BaseType {
	/** The semantic attribute is the user-defined meaning of the input connection. Required attribute. */
	semantic: string;
	/** The source attribute indicates the location of the data source. Required attribute. */
	source: string;
}
export interface  InputGlobal extends _InputGlobal { constructor: { new(): InputGlobal }; }
export var InputGlobal: { new(): InputGlobal };

/** The InputLocal type is used to represent inputs that can only reference resources declared in the same document. */
export interface _InputLocal extends BaseType {
	/** The semantic attribute is the user-defined meaning of the input connection. Required attribute. */
	semantic: string;
	/** The source attribute indicates the location of the data source. Required attribute. */
	source: string;
}
export interface  InputLocal extends _InputLocal { constructor: { new(): InputLocal }; }
export var InputLocal: { new(): InputLocal };

/** The InputLocalOffset type is used to represent indexed inputs that can only reference resources declared in the same document. */
export interface _InputLocalOffset extends BaseType {
	/** The offset attribute represents the offset into the list of indices.  If two input elements share
	  * the same offset, they will be indexed the same.  This works as a simple form of compression for the
	  * list of indices as well as defining the order the inputs should be used in.  Required attribute. */
	offset: number;
	/** The semantic attribute is the user-defined meaning of the input connection. Required attribute. */
	semantic: string;
	/** The set attribute indicates which inputs should be grouped together as a single set. This is helpful
	  * when multiple inputs share the same semantics. */
	set: number;
	/** The source attribute indicates the location of the data source. Required attribute. */
	source: string;
}
export interface  InputLocalOffset extends _InputLocalOffset { constructor: { new(): InputLocalOffset }; }
export var InputLocalOffset: { new(): InputLocalOffset };

export interface _Instance_controllerType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource. This may refer to a local resource using a relative
	  * URL fragment identifier that begins with the “#” character. The url attribute may refer to an
	  * external resource using an absolute or relative URL. */
	url: string;
	/** Bind a specific material to a piece of geometry, binding varying and uniform parameters at the
	  * same time. */
	bind_material?: Bind_materialType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The skeleton element is used to indicate where a skin controller is to start to search for
	  * the joint nodes it needs.  This element is meaningless for morph controllers. */
	skeleton?: string[];
}
export interface Instance_controllerType extends _Instance_controllerType { constructor: { new(): Instance_controllerType }; }

export interface _Instance_effectType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource.  This may refer to a local resource using a relative URL
	  * fragment identifier that begins with the “#” character. The url attribute may refer to an external
	  * resource using an absolute or relative URL. */
	url: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Assigns a new value to a previously defined parameter */
	setparam?: Instance_effectTypeSetparamType[];
	/** Add a hint for a platform of which technique to use in this effect. */
	technique_hint?: Instance_effectTypeTechnique_hintType[];
}
export interface Instance_effectType extends _Instance_effectType { constructor: { new(): Instance_effectType }; }

export interface _Instance_effectTypeSetparamType extends BaseType {
	ref: string;
	bool: boolean;
	bool2: bool2;
	bool3: bool3;
	bool4: bool4;
	enum: string;
	float: number;
	float1x1: number;
	float1x2: float2;
	float1x3: float3;
	float1x4: float4;
	float2: float2;
	float2x1: float2;
	float2x2: float2x2;
	float2x3: float2x3;
	float2x4: float2x4;
	float3: float3;
	float3x1: float3;
	float3x2: float3x2;
	float3x3: float3x3;
	float3x4: float3x4;
	float4: float4;
	float4x1: float4;
	float4x2: float4x2;
	float4x3: float4x3;
	float4x4: float4x4;
	int: number;
	int2: int2;
	int3: int3;
	int4: int4;
	sampler1D: fx_sampler1D_common;
	sampler2D: fx_sampler2D_common;
	sampler3D: fx_sampler3D_common;
	samplerCUBE: fx_samplerCUBE_common;
	samplerDEPTH: fx_samplerDEPTH_common;
	samplerRECT: fx_samplerRECT_common;
	surface: fx_surface_common;
}
export interface Instance_effectTypeSetparamType extends _Instance_effectTypeSetparamType { constructor: { new(): Instance_effectTypeSetparamType }; }

export interface _Instance_effectTypeTechnique_hintType extends BaseType {
	/** A platform defines a string that specifies which platform this is hint is aimed for. */
	platform?: string;
	/** A profile defines a string that specifies which API profile this is hint is aimed for. */
	profile?: string;
	/** A reference to the technique to use for the specified platform. */
	ref: string;
}
export interface Instance_effectTypeTechnique_hintType extends _Instance_effectTypeTechnique_hintType { constructor: { new(): Instance_effectTypeTechnique_hintType }; }

export interface _Instance_geometryType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource.  This may refer to a local resource using a relative URL
	  * fragment identifier that begins with the “#” character. The url attribute may refer to an external
	  * resource using an absolute or relative URL. */
	url: string;
	/** Bind a specific material to a piece of geometry, binding varying and uniform parameters at the
	  * same time. */
	bind_material?: Bind_materialType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Instance_geometryType extends _Instance_geometryType { constructor: { new(): Instance_geometryType }; }

export interface _Instance_materialType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The symbol attribute specifies which symbol defined from within the geometry this material binds to. */
	symbol: string;
	/** The target attribute specifies the URL of the location of the object to instantiate. */
	target: string;
	/** The bind element binds values to effect parameters upon instantiation. */
	bind?: Instance_materialTypeBindType[];
	/** The bind_vertex_input element binds vertex inputs to effect parameters upon instantiation. */
	bind_vertex_input?: Instance_materialTypeBind_vertex_inputType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Instance_materialType extends _Instance_materialType { constructor: { new(): Instance_materialType }; }

export interface _Instance_materialTypeBind_vertex_inputType extends BaseType {
	/** The input_semantic attribute specifies which input semantic to bind. */
	input_semantic: string;
	/** The input_set attribute specifies which input set to bind. */
	input_set: number;
	/** The semantic attribute specifies which effect parameter to bind. */
	semantic: string;
}
export interface Instance_materialTypeBind_vertex_inputType extends _Instance_materialTypeBind_vertex_inputType { constructor: { new(): Instance_materialTypeBind_vertex_inputType }; }

export interface _Instance_materialTypeBindType extends BaseType {
	/** The semantic attribute specifies which effect parameter to bind. */
	semantic: string;
	/** The target attribute specifies the location of the value to bind to the specified semantic.
	  * This text string is a path-name following a simple syntax described in the “Addressing Syntax”
	  * section. */
	target: string;
}
export interface Instance_materialTypeBindType extends _Instance_materialTypeBindType { constructor: { new(): Instance_materialTypeBindType }; }

export interface _Instance_physics_modelType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The parent attribute points to the id of a node in the visual scene. This allows a physics model
	  * to be instantiated under a specific transform node, which will dictate the initial position and
	  * orientation, and could be animated to influence kinematic rigid bodies. */
	parent: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource.  This may refer to a local resource using a relative URL
	  * fragment identifier that begins with the “#” character. The url attribute may refer to an external
	  * resource using an absolute or relative URL. */
	url: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The instance_force_field element declares the instantiation of a COLLADA force_field resource. */
	instance_force_field?: InstanceWithExtra[];
	/** This element allows instancing a rigid_body within an instance_physics_model. */
	instance_rigid_body?: Instance_rigid_bodyType[];
	/** This element allows instancing a rigid_constraint within an instance_physics_model. */
	instance_rigid_constraint?: Instance_rigid_constraintType[];
}
export interface Instance_physics_modelType extends _Instance_physics_modelType { constructor: { new(): Instance_physics_modelType }; }

export interface _Instance_rigid_bodyType extends BaseType {
	/** The body attribute indicates which rigid_body to instantiate. Required attribute. */
	body: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The target attribute indicates which node is influenced by this rigid_body instance.
	  * Required attribute */
	target: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the instance_rigid_body information for the common
	  * profile which all COLLADA implementations need to support. */
	technique_common: Instance_rigid_bodyTypeTechnique_commonType;
}
export interface Instance_rigid_bodyType extends _Instance_rigid_bodyType { constructor: { new(): Instance_rigid_bodyType }; }

export interface _Instance_rigid_bodyTypeTechnique_commonType extends BaseType {
	/** Specifies the initial angular velocity of the rigid_body instance in degrees per second
	  * around each axis, in the form of an X-Y-Z Euler rotation. */
	angular_velocity?: float3;
	dynamic?: Instance_rigid_bodyTypeTechnique_commonTypeDynamicType;
	inertia?: TargetableFloat3;
	/** The instance_physics_material element declares the instantiation of a COLLADA physics_material
	  * resource. */
	instance_physics_material?: InstanceWithExtra;
	mass?: TargetableFloat;
	mass_frame?: Instance_rigid_bodyTypeTechnique_commonTypeMass_frameType;
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material?: Physics_materialType;
	shape?: Instance_rigid_bodyTypeTechnique_commonTypeShapeType[];
	/** Specifies the initial linear velocity of the rigid_body instance. */
	velocity?: float3;
}
export interface Instance_rigid_bodyTypeTechnique_commonType extends _Instance_rigid_bodyTypeTechnique_commonType { constructor: { new(): Instance_rigid_bodyTypeTechnique_commonType }; }

export interface _Instance_rigid_bodyTypeTechnique_commonTypeDynamicType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Instance_rigid_bodyTypeTechnique_commonTypeDynamicType extends _Instance_rigid_bodyTypeTechnique_commonTypeDynamicType { constructor: { new(): Instance_rigid_bodyTypeTechnique_commonTypeDynamicType }; }

export interface _Instance_rigid_bodyTypeTechnique_commonTypeMass_frameType extends BaseType {
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate: RotateType[];
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate: TargetableFloat3[];
}
export interface Instance_rigid_bodyTypeTechnique_commonTypeMass_frameType extends _Instance_rigid_bodyTypeTechnique_commonTypeMass_frameType { constructor: { new(): Instance_rigid_bodyTypeTechnique_commonTypeMass_frameType }; }

export interface _Instance_rigid_bodyTypeTechnique_commonTypeShapeType extends BaseType {
	/** An axis-aligned, centered box primitive. */
	box: BoxType;
	/** A capsule primitive that is centered on and aligned with the local Y axis. */
	capsule: CapsuleType;
	/** A cylinder primitive that is centered on, and aligned with. the local Y axis. */
	cylinder: CylinderType;
	density?: TargetableFloat;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	hollow?: Instance_rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType;
	/** The instance_geometry element declares the instantiation of a COLLADA geometry resource. */
	instance_geometry: Instance_geometryType;
	/** The instance_physics_material element declares the instantiation of a COLLADA physics_material
	  * resource. */
	instance_physics_material?: InstanceWithExtra;
	mass?: TargetableFloat;
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material?: Physics_materialType;
	/** An infinite plane primitive. */
	plane: PlaneType;
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate?: RotateType[];
	/** A centered sphere primitive. */
	sphere: SphereType;
	/** A tapered capsule primitive that is centered on, and aligned with, the local Y axis. */
	tapered_capsule: Tapered_capsuleType;
	/** A tapered cylinder primitive that is centered on and aligned with the local Y axis. */
	tapered_cylinder: Tapered_cylinderType;
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate?: TargetableFloat3[];
}
export interface Instance_rigid_bodyTypeTechnique_commonTypeShapeType extends _Instance_rigid_bodyTypeTechnique_commonTypeShapeType { constructor: { new(): Instance_rigid_bodyTypeTechnique_commonTypeShapeType }; }

export interface _Instance_rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element. This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Instance_rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType extends _Instance_rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType { constructor: { new(): Instance_rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType }; }

export interface _Instance_rigid_constraintType extends BaseType {
	/** The constraint attribute indicates which rigid_constraing to instantiate. Required attribute. */
	constraint: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Instance_rigid_constraintType extends _Instance_rigid_constraintType { constructor: { new(): Instance_rigid_constraintType }; }

/** The InstanceWithExtra type is used for all generic instance elements. A generic instance element
  * is one which does not have any specific child elements declared. */
export interface _InstanceWithExtra extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The url attribute refers to resource to instantiate. This may refer to a local resource using a
	  * relative URL fragment identifier that begins with the “#” character. The url attribute may refer
	  * to an external resource using an absolute or relative URL. */
	url: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface  InstanceWithExtra extends _InstanceWithExtra { constructor: { new(): InstanceWithExtra }; }
export var InstanceWithExtra: { new(): InstanceWithExtra };

export type int = number;
type _int = Primitive._number;

type Int_arrayType = number[];

export type int2 = number[];

export type int2x2 = number[];

export type int3 = number[];

export type int3x3 = number[];

export type int4 = number[];

export type int4x4 = number[];

export interface _Library_animation_clipsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The animation_clip element defines a section of the animation curves to be used together as
	  * an animation clip. */
	animation_clip: Animation_clipType[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Library_animation_clipsType extends _Library_animation_clipsType { constructor: { new(): Library_animation_clipsType }; }

export interface _Library_animationsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The animation element categorizes the declaration of animation information. The animation
	  * hierarchy contains elements that describe the animation’s key-frame data and sampler functions,
	  * ordered in such a way to group together animations that should be executed together. */
	animation: AnimationType[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Library_animationsType extends _Library_animationsType { constructor: { new(): Library_animationsType }; }

export interface _Library_camerasType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The camera element declares a view into the scene hierarchy or scene graph. The camera contains
	  * elements that describe the camera’s optics and imager. */
	camera: CameraType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Library_camerasType extends _Library_camerasType { constructor: { new(): Library_camerasType }; }

export interface _Library_controllersType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The controller element categorizes the declaration of generic control information.
	  * A controller is a device or mechanism that manages and directs the operations of another object. */
	controller: ControllerType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Library_controllersType extends _Library_controllersType { constructor: { new(): Library_controllersType }; }

export interface _Library_effectsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** A self contained description of a shader effect. */
	effect: EffectType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface Library_effectsType extends _Library_effectsType { constructor: { new(): Library_effectsType }; }

export interface _Library_force_fieldsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A general container for force-fields. At the moment, it only has techniques and extra elements. */
	force_field: Force_fieldType[];
}
export interface Library_force_fieldsType extends _Library_force_fieldsType { constructor: { new(): Library_force_fieldsType }; }

export interface _Library_geometriesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Geometry describes the visual shape and appearance of an object in the scene.
	  * The geometry element categorizes the declaration of geometric information. Geometry is a
	  * branch of mathematics that deals with the measurement, properties, and relationships of
	  * points, lines, angles, surfaces, and solids. */
	geometry: GeometryType[];
}
export interface Library_geometriesType extends _Library_geometriesType { constructor: { new(): Library_geometriesType }; }

export interface _Library_imagesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image: ImageType[];
}
export interface Library_imagesType extends _Library_imagesType { constructor: { new(): Library_imagesType }; }

export interface _Library_lightsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The light element declares a light source that illuminates the scene.
	  * Light sources have many different properties and radiate light in many different patterns and
	  * frequencies. */
	light: LightType[];
}
export interface Library_lightsType extends _Library_lightsType { constructor: { new(): Library_lightsType }; }

export interface _Library_materialsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Materials describe the visual appearance of a geometric object. */
	material: MaterialType[];
}
export interface Library_materialsType extends _Library_materialsType { constructor: { new(): Library_materialsType }; }

export interface _Library_nodesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Nodes embody the hierarchical relationship of elements in the scene. */
	node: NodeType_2[];
}
export interface Library_nodesType extends _Library_nodesType { constructor: { new(): Library_nodesType }; }

export interface _Library_physics_materialsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material: Physics_materialType[];
}
export interface Library_physics_materialsType extends _Library_physics_materialsType { constructor: { new(): Library_physics_materialsType }; }

export interface _Library_physics_modelsType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** This element allows for building complex combinations of rigid-bodies and constraints that
	  * may be instantiated multiple times. */
	physics_model: Physics_modelType[];
}
export interface Library_physics_modelsType extends _Library_physics_modelsType { constructor: { new(): Library_physics_modelsType }; }

export interface _Library_physics_scenesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	physics_scene: Physics_sceneType[];
}
export interface Library_physics_scenesType extends _Library_physics_scenesType { constructor: { new(): Library_physics_scenesType }; }

export interface _Library_visual_scenesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The visual_scene element declares the base of the visual_scene hierarchy or scene graph. The
	  * scene contains elements that comprise much of the visual and transformational information
	  * content as created by the authoring tools. */
	visual_scene: Visual_sceneType[];
}
export interface Library_visual_scenesType extends _Library_visual_scenesType { constructor: { new(): Library_visual_scenesType }; }

export interface _Light_ambientType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_ambientType extends _Light_ambientType { constructor: { new(): Light_ambientType }; }

export interface _Light_ambientType_2 extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_ambientType_2 extends _Light_ambientType_2 { constructor: { new(): Light_ambientType_2 }; }

export interface _Light_constant_attenuationType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_constant_attenuationType extends _Light_constant_attenuationType { constructor: { new(): Light_constant_attenuationType }; }

export interface _Light_constant_attenuationType_2 extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_constant_attenuationType_2 extends _Light_constant_attenuationType_2 { constructor: { new(): Light_constant_attenuationType_2 }; }

export interface _Light_diffuseType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_diffuseType extends _Light_diffuseType { constructor: { new(): Light_diffuseType }; }

export interface _Light_diffuseType_2 extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_diffuseType_2 extends _Light_diffuseType_2 { constructor: { new(): Light_diffuseType_2 }; }

export interface _Light_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Light_enableType extends _Light_enableType { constructor: { new(): Light_enableType }; }

export interface _Light_enableType_2 extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Light_enableType_2 extends _Light_enableType_2 { constructor: { new(): Light_enableType_2 }; }

export interface _Light_linear_attenuationType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_linear_attenuationType extends _Light_linear_attenuationType { constructor: { new(): Light_linear_attenuationType }; }

export interface _Light_linear_attenutationType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_linear_attenutationType extends _Light_linear_attenutationType { constructor: { new(): Light_linear_attenutationType }; }

export interface _Light_model_ambientType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Light_model_ambientType extends _Light_model_ambientType { constructor: { new(): Light_model_ambientType }; }

export interface _Light_model_ambientType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Light_model_ambientType_2 extends _Light_model_ambientType_2 { constructor: { new(): Light_model_ambientType_2 }; }

export interface _Light_model_color_controlType extends BaseType {
	param?: string;
	value?: gl_light_model_color_control_type;
}
export interface Light_model_color_controlType extends _Light_model_color_controlType { constructor: { new(): Light_model_color_controlType }; }

export interface _Light_model_local_viewer_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Light_model_local_viewer_enableType extends _Light_model_local_viewer_enableType { constructor: { new(): Light_model_local_viewer_enableType }; }

export interface _Light_model_two_side_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Light_model_two_side_enableType extends _Light_model_two_side_enableType { constructor: { new(): Light_model_two_side_enableType }; }

export interface _Light_model_two_side_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Light_model_two_side_enableType_2 extends _Light_model_two_side_enableType_2 { constructor: { new(): Light_model_two_side_enableType_2 }; }

export interface _Light_positionType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_positionType extends _Light_positionType { constructor: { new(): Light_positionType }; }

export interface _Light_positionType_2 extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_positionType_2 extends _Light_positionType_2 { constructor: { new(): Light_positionType_2 }; }

export interface _Light_quadratic_attenuationType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_quadratic_attenuationType extends _Light_quadratic_attenuationType { constructor: { new(): Light_quadratic_attenuationType }; }

export interface _Light_quadratic_attenuationType_2 extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_quadratic_attenuationType_2 extends _Light_quadratic_attenuationType_2 { constructor: { new(): Light_quadratic_attenuationType_2 }; }

export interface _Light_specularType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_specularType extends _Light_specularType { constructor: { new(): Light_specularType }; }

export interface _Light_specularType_2 extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Light_specularType_2 extends _Light_specularType_2 { constructor: { new(): Light_specularType_2 }; }

export interface _Light_spot_cutoffType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_spot_cutoffType extends _Light_spot_cutoffType { constructor: { new(): Light_spot_cutoffType }; }

export interface _Light_spot_cutoffType_2 extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_spot_cutoffType_2 extends _Light_spot_cutoffType_2 { constructor: { new(): Light_spot_cutoffType_2 }; }

export interface _Light_spot_directionType extends BaseType {
	index: number;
	param?: string;
	value?: float3;
}
export interface Light_spot_directionType extends _Light_spot_directionType { constructor: { new(): Light_spot_directionType }; }

export interface _Light_spot_directionType_2 extends BaseType {
	index: number;
	param?: string;
	value?: float3;
}
export interface Light_spot_directionType_2 extends _Light_spot_directionType_2 { constructor: { new(): Light_spot_directionType_2 }; }

export interface _Light_spot_exponentType extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_spot_exponentType extends _Light_spot_exponentType { constructor: { new(): Light_spot_exponentType }; }

export interface _Light_spot_exponentType_2 extends BaseType {
	index: number;
	param?: string;
	value?: number;
}
export interface Light_spot_exponentType_2 extends _Light_spot_exponentType_2 { constructor: { new(): Light_spot_exponentType_2 }; }

export interface _Lighting_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Lighting_enableType extends _Lighting_enableType { constructor: { new(): Lighting_enableType }; }

export interface _Lighting_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Lighting_enableType_2 extends _Lighting_enableType_2 { constructor: { new(): Lighting_enableType_2 }; }

export interface _LightType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the light information for the common profile which all
	  * COLLADA implementations need to support. */
	technique_common: LightTypeTechnique_commonType;
}
export interface LightType extends _LightType { constructor: { new(): LightType }; }

export interface _LightTypeTechnique_commonType extends BaseType {
	/** The ambient element declares the parameters required to describe an ambient light source.
	  * An ambient light is one that lights everything evenly, regardless of location or orientation. */
	ambient: LightTypeTechnique_commonTypeAmbientType;
	/** The directional element declares the parameters required to describe a directional light source.
	  * A directional light is one that lights everything from the same direction, regardless of location.
	  * The light’s default direction vector in local coordinates is [0,0,-1], pointing down the -Z axis.
	  * The actual direction of the light is defined by the transform of the node where the light is
	  * instantiated. */
	directional: LightTypeTechnique_commonTypeDirectionalType;
	/** The point element declares the parameters required to describe a point light source.  A point light
	  * source radiates light in all directions from a known location in space. The intensity of a point
	  * light source is attenuated as the distance to the light source increases. The position of the light
	  * is defined by the transform of the node in which it is instantiated. */
	point: LightTypeTechnique_commonTypePointType;
	/** The spot element declares the parameters required to describe a spot light source.  A spot light
	  * source radiates light in one direction from a known location in space. The light radiates from
	  * the spot light source in a cone shape. The intensity of the light is attenuated as the radiation
	  * angle increases away from the direction of the light source. The intensity of a spot light source
	  * is also attenuated as the distance to the light source increases. The position of the light is
	  * defined by the transform of the node in which it is instantiated. The light’s default direction
	  * vector in local coordinates is [0,0,-1], pointing down the -Z axis. The actual direction of the
	  * light is defined by the transform of the node where the light is instantiated. */
	spot: LightTypeTechnique_commonTypeSpotType;
}
export interface LightTypeTechnique_commonType extends _LightTypeTechnique_commonType { constructor: { new(): LightTypeTechnique_commonType }; }

export interface _LightTypeTechnique_commonTypeAmbientType extends BaseType {
	/** The color element contains three floating point numbers specifying the color of the light.
	  * The color element must occur exactly once. */
	color: TargetableFloat3;
}
export interface LightTypeTechnique_commonTypeAmbientType extends _LightTypeTechnique_commonTypeAmbientType { constructor: { new(): LightTypeTechnique_commonTypeAmbientType }; }

export interface _LightTypeTechnique_commonTypeDirectionalType extends BaseType {
	/** The color element contains three floating point numbers specifying the color of the light.
	  * The color element must occur exactly once. */
	color: TargetableFloat3;
}
export interface LightTypeTechnique_commonTypeDirectionalType extends _LightTypeTechnique_commonTypeDirectionalType { constructor: { new(): LightTypeTechnique_commonTypeDirectionalType }; }

export interface _LightTypeTechnique_commonTypePointType extends BaseType {
	/** The color element contains three floating point numbers specifying the color of the light.
	  * The color element must occur exactly once. */
	color: TargetableFloat3;
	/** The constant_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	constant_attenuation?: TargetableFloat;
	/** The linear_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	linear_attenuation?: TargetableFloat;
	/** The quadratic_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	quadratic_attenuation?: TargetableFloat;
}
export interface LightTypeTechnique_commonTypePointType extends _LightTypeTechnique_commonTypePointType { constructor: { new(): LightTypeTechnique_commonTypePointType }; }

export interface _LightTypeTechnique_commonTypeSpotType extends BaseType {
	/** The color element contains three floating point numbers specifying the color of the light.
	  * The color element must occur exactly once. */
	color: TargetableFloat3;
	/** The constant_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	constant_attenuation?: TargetableFloat;
	/** The falloff_angle is used to specify the amount of attenuation based on the direction of the light. */
	falloff_angle?: TargetableFloat;
	/** The falloff_exponent is used to specify the amount of attenuation based on the direction of the light. */
	falloff_exponent?: TargetableFloat;
	/** The linear_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	linear_attenuation?: TargetableFloat;
	/** The quadratic_attenuation is used to calculate the total attenuation of this light given a distance.
	  * The equation used is A = constant_attenuation + Dist*linear_attenuation + Dist^2*quadratic_attenuation. */
	quadratic_attenuation?: TargetableFloat;
}
export interface LightTypeTechnique_commonTypeSpotType extends _LightTypeTechnique_commonTypeSpotType { constructor: { new(): LightTypeTechnique_commonTypeSpotType }; }

export interface _Line_smooth_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Line_smooth_enableType extends _Line_smooth_enableType { constructor: { new(): Line_smooth_enableType }; }

export interface _Line_smooth_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Line_smooth_enableType_2 extends _Line_smooth_enableType_2 { constructor: { new(): Line_smooth_enableType_2 }; }

export interface _Line_stipple_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Line_stipple_enableType extends _Line_stipple_enableType { constructor: { new(): Line_stipple_enableType }; }

export interface _Line_stippleType extends BaseType {
	param?: string;
	value?: int2;
}
export interface Line_stippleType extends _Line_stippleType { constructor: { new(): Line_stippleType }; }

export interface _Line_widthType extends BaseType {
	param?: string;
	value?: number;
}
export interface Line_widthType extends _Line_widthType { constructor: { new(): Line_widthType }; }

export interface _Line_widthType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Line_widthType_2 extends _Line_widthType_2 { constructor: { new(): Line_widthType_2 }; }

export interface _LinestripsType extends BaseType {
	/** The count attribute indicates the number of linestrip primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material
	  * at the time of instantiation. If the material attribute is not specified then the lighting
	  * and shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the offset
	  * and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts[];
}
export interface LinestripsType extends _LinestripsType { constructor: { new(): LinestripsType }; }

export interface _LinesType extends BaseType {
	/** The count attribute indicates the number of line primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material at
	  * the time of instantiation. If the material attribute is not specified then the lighting and
	  * shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the offset
	  * and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts;
}
export interface LinesType extends _LinesType { constructor: { new(): LinesType }; }

export type ListOfBools = boolean[];

export type ListOfFloats = number[];

export type ListOfHexBinary = string[];

export type ListOfInts = number[];

export type ListOfNames = string[];

export type ListOfTokens = string[];

export type ListOfUInts = number[];

export interface _Logic_op_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Logic_op_enableType extends _Logic_op_enableType { constructor: { new(): Logic_op_enableType }; }

export interface _Logic_opType extends BaseType {
	param?: string;
	value?: gl_logic_op_type;
}
export interface Logic_opType extends _Logic_opType { constructor: { new(): Logic_opType }; }

export interface _Logic_opType_2 extends BaseType {
	param?: string;
	value?: gl_logic_op_type;
}
export interface Logic_opType_2 extends _Logic_opType_2 { constructor: { new(): Logic_opType_2 }; }

type LookatType = number[];

export interface _Material_ambientType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_ambientType extends _Material_ambientType { constructor: { new(): Material_ambientType }; }

export interface _Material_ambientType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_ambientType_2 extends _Material_ambientType_2 { constructor: { new(): Material_ambientType_2 }; }

export interface _Material_diffuseType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_diffuseType extends _Material_diffuseType { constructor: { new(): Material_diffuseType }; }

export interface _Material_diffuseType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_diffuseType_2 extends _Material_diffuseType_2 { constructor: { new(): Material_diffuseType_2 }; }

export interface _Material_emissionType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_emissionType extends _Material_emissionType { constructor: { new(): Material_emissionType }; }

export interface _Material_emissionType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_emissionType_2 extends _Material_emissionType_2 { constructor: { new(): Material_emissionType_2 }; }

export interface _Material_shininessType extends BaseType {
	param?: string;
	value?: number;
}
export interface Material_shininessType extends _Material_shininessType { constructor: { new(): Material_shininessType }; }

export interface _Material_shininessType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Material_shininessType_2 extends _Material_shininessType_2 { constructor: { new(): Material_shininessType_2 }; }

export interface _Material_specularType extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_specularType extends _Material_specularType { constructor: { new(): Material_specularType }; }

export interface _Material_specularType_2 extends BaseType {
	param?: string;
	value?: float4;
}
export interface Material_specularType_2 extends _Material_specularType_2 { constructor: { new(): Material_specularType_2 }; }

export interface _MaterialType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The instance_effect element declares the instantiation of a COLLADA effect resource. */
	instance_effect: Instance_effectType;
}
export interface MaterialType extends _MaterialType { constructor: { new(): MaterialType }; }

type MatrixType = number[];

export interface _MeshType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The lines element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into individual lines. Each line described by the mesh has two vertices.
	  * The first line is formed from first and second vertices. The second line is formed from the
	  * third and fourth vertices and so on. */
	lines?: LinesType[];
	/** The linestrips element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into connected line-strips. Each line-strip described by the mesh
	  * has an arbitrary number of vertices. Each line segment within the line-strip is formed from the
	  * current vertex and the preceding vertex. */
	linestrips?: LinestripsType[];
	/** The polygons element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described can contain
	  * arbitrary numbers of vertices. These polygons may be self intersecting and may also contain holes. */
	polygons?: PolygonsType[];
	/** The polylist element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described in polylist can
	  * contain arbitrary numbers of vertices. Unlike the polygons element, the polylist element cannot
	  * contain polygons with holes. */
	polylist?: PolylistType[];
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType[];
	/** The triangles element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual triangles.	Each triangle described by the mesh has
	  * three vertices. The first triangle is formed from the first, second, and third vertices. The
	  * second triangle is formed from the fourth, fifth, and sixth vertices, and so on. */
	triangles?: TrianglesType[];
	/** The trifans element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the first and the previous vertices. */
	trifans?: TrifansType[];
	/** The tristrips element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the previous two vertices. */
	tristrips?: TristripsType[];
	/** The vertices element declares the attributes and identity of mesh-vertices. The vertices element
	  * describes mesh-vertices in a mesh geometry. The mesh-vertices represent the position (identity)
	  * of the vertices comprising the mesh and other vertex attributes that are invariant to tessellation. */
	vertices: VerticesType;
}
export interface MeshType extends _MeshType { constructor: { new(): MeshType }; }

export interface _Model_view_matrixType extends BaseType {
	param?: string;
	value?: float4x4;
}
export interface Model_view_matrixType extends _Model_view_matrixType { constructor: { new(): Model_view_matrixType }; }

export interface _Model_view_matrixType_2 extends BaseType {
	param?: string;
	value?: float4x4;
}
export interface Model_view_matrixType_2 extends _Model_view_matrixType_2 { constructor: { new(): Model_view_matrixType_2 }; }

/** An enumuerated type specifying the acceptable morph methods. */
export type MorphMethodType = ("NORMALIZED" | "RELATIVE");
export interface _MorphMethodType extends Primitive._string { content: MorphMethodType; }

export interface _MorphType extends BaseType {
	/** The method attribute specifies the which blending technique to use. The accepted values are
	  * NORMALIZED, and RELATIVE. The default value if not specified is NORMALIZED.  Optional attribute. */
	method: MorphMethodType;
	/** The source attribute indicates the base mesh. Required attribute. */
	$source: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType[];
	/** The targets element declares the morph targets, their weights and any user defined attributes
	  * associated with them. */
	targets: MorphTypeTargetsType;
}
export interface MorphType extends _MorphType { constructor: { new(): MorphType }; }

export interface _MorphTypeTargetsType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element must occur at least twice. These inputs are local inputs. */
	input: InputLocal[];
}
export interface MorphTypeTargetsType extends _MorphTypeTargetsType { constructor: { new(): MorphTypeTargetsType }; }

export interface _Multisample_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Multisample_enableType extends _Multisample_enableType { constructor: { new(): Multisample_enableType }; }

export interface _Multisample_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Multisample_enableType_2 extends _Multisample_enableType_2 { constructor: { new(): Multisample_enableType_2 }; }

export type Name = string;
type _Name = Primitive._string;

type Name_arrayType = string[];

/** An enumerated type specifying the acceptable node types. */
export type NodeType = ("JOINT" | "NODE");
export interface _NodeType extends Primitive._string { content: NodeType; }

export interface _NodeType_2 extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The layer attribute indicates the names of the layers to which this node belongs.  For example,
	  * a value of “foreground glowing” indicates that this node belongs to both the ‘foreground’ layer
	  * and the ‘glowing’ layer.  The default value is empty, indicating that the node doesn’t belong to
	  * any layer.  Optional attribute. */
	layer: ListOfNames;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The type attribute indicates the type of the node element. The default value is “NODE”.
	  * Optional attribute. */
	type: NodeType;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The instance_camera element declares the instantiation of a COLLADA camera resource. */
	instance_camera?: InstanceWithExtra[];
	/** The instance_controller element declares the instantiation of a COLLADA controller resource. */
	instance_controller?: Instance_controllerType[];
	/** The instance_geometry element declares the instantiation of a COLLADA geometry resource. */
	instance_geometry?: Instance_geometryType[];
	/** The instance_light element declares the instantiation of a COLLADA light resource. */
	instance_light?: InstanceWithExtra[];
	/** The instance_node element declares the instantiation of a COLLADA node resource. */
	instance_node?: InstanceWithExtra[];
	/** The lookat element contains a position and orientation transformation suitable for aiming a camera.
	  * The lookat element contains three mathematical vectors within it that describe:
	  * 1.	The position of the object;
	  * 2.	The position of the interest point;
	  * 3.	The direction that points up. */
	lookat?: LookatType[];
	/** Matrix transformations embody mathematical changes to points within a coordinate systems or the
	  * coordinate system itself. The matrix element contains a 4-by-4 matrix of floating-point values. */
	matrix?: MatrixType[];
	/** Nodes embody the hierarchical relationship of elements in the scene. */
	node?: NodeType_2[];
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate?: RotateType[];
	/** The scale element contains a mathematical vector that represents the relative proportions of the
	  * X, Y and Z axes of a coordinated system. */
	scale?: TargetableFloat3[];
	/** The skew element contains an angle and two mathematical vectors that represent the axis of
	  * rotation and the axis of translation. */
	skew?: SkewType[];
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate?: TargetableFloat3[];
}
export interface NodeType_2 extends _NodeType_2 { constructor: { new(): NodeType_2 }; }

export interface _Normalize_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Normalize_enableType extends _Normalize_enableType { constructor: { new(): Normalize_enableType }; }

export interface _Normalize_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Normalize_enableType_2 extends _Normalize_enableType_2 { constructor: { new(): Normalize_enableType_2 }; }

export interface _ParamType extends Primitive._string {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The semantic attribute is the user-defined meaning of the parameter. Optional attribute. */
	semantic: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The type attribute indicates the type of the value data. This text string must be understood
	  * by the application. Required attribute. */
	type: string;
}
export interface ParamType extends _ParamType { constructor: { new(): ParamType }; }

export interface _Physics_materialType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the physics_material information for the common profile
	  * which all COLLADA implementations need to support. */
	technique_common: Physics_materialTypeTechnique_commonType;
}
export interface Physics_materialType extends _Physics_materialType { constructor: { new(): Physics_materialType }; }

export interface _Physics_materialTypeTechnique_commonType extends BaseType {
	/** Dynamic friction coefficient */
	dynamic_friction?: TargetableFloat;
	/** The proportion of the kinetic energy preserved in the impact (typically ranges from 0.0 to 1.0) */
	restitution?: TargetableFloat;
	/** Static friction coefficient */
	static_friction?: TargetableFloat;
}
export interface Physics_materialTypeTechnique_commonType extends _Physics_materialTypeTechnique_commonType { constructor: { new(): Physics_materialTypeTechnique_commonType }; }

export interface _Physics_modelType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** This element allows instancing physics model within another physics model, or in a physics scene. */
	instance_physics_model?: Instance_physics_modelType[];
	/** This element allows for describing simulated bodies that do not deform. These bodies may or may
	  * not be connected by constraints (hinge, ball-joint etc.).  Rigid-bodies, constraints etc. are
	  * encapsulated in physics_model elements to allow for instantiating complex models. */
	rigid_body?: Rigid_bodyType[];
	/** This element allows for connecting components, such as rigid_body into complex physics models
	  * with moveable parts. */
	rigid_constraint?: Rigid_constraintType[];
}
export interface Physics_modelType extends _Physics_modelType { constructor: { new(): Physics_modelType }; }

export interface _Physics_sceneType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The instance_force_field element declares the instantiation of a COLLADA force_field resource. */
	instance_force_field?: InstanceWithExtra[];
	/** This element allows instancing physics model within another physics model, or in a physics scene. */
	instance_physics_model?: Instance_physics_modelType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the physics_scene information for the common profile
	  * which all COLLADA implementations need to support. */
	technique_common: Physics_sceneTypeTechnique_commonType;
}
export interface Physics_sceneType extends _Physics_sceneType { constructor: { new(): Physics_sceneType }; }

export interface _Physics_sceneTypeTechnique_commonType extends BaseType {
	/** The gravity vector to use for the physics_scene. */
	gravity?: TargetableFloat3;
	/** The time_step for the physics_scene. */
	time_step?: TargetableFloat;
}
export interface Physics_sceneTypeTechnique_commonType extends _Physics_sceneTypeTechnique_commonType { constructor: { new(): Physics_sceneTypeTechnique_commonType }; }

export interface _PlaneType extends BaseType {
	/** 4 float values that represent the coefficients for the plane’s equation:    Ax + By + Cz + D = 0 */
	equation: float4;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
}
export interface PlaneType extends _PlaneType { constructor: { new(): PlaneType }; }

export interface _Point_distance_attenuationType extends BaseType {
	param?: string;
	value?: float3;
}
export interface Point_distance_attenuationType extends _Point_distance_attenuationType { constructor: { new(): Point_distance_attenuationType }; }

export interface _Point_distance_attenuationType_2 extends BaseType {
	param?: string;
	value?: float3;
}
export interface Point_distance_attenuationType_2 extends _Point_distance_attenuationType_2 { constructor: { new(): Point_distance_attenuationType_2 }; }

export interface _Point_fade_threshold_sizeType extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_fade_threshold_sizeType extends _Point_fade_threshold_sizeType { constructor: { new(): Point_fade_threshold_sizeType }; }

export interface _Point_fade_threshold_sizeType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_fade_threshold_sizeType_2 extends _Point_fade_threshold_sizeType_2 { constructor: { new(): Point_fade_threshold_sizeType_2 }; }

export interface _Point_size_maxType extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_size_maxType extends _Point_size_maxType { constructor: { new(): Point_size_maxType }; }

export interface _Point_size_maxType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_size_maxType_2 extends _Point_size_maxType_2 { constructor: { new(): Point_size_maxType_2 }; }

export interface _Point_size_minType extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_size_minType extends _Point_size_minType { constructor: { new(): Point_size_minType }; }

export interface _Point_size_minType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_size_minType_2 extends _Point_size_minType_2 { constructor: { new(): Point_size_minType_2 }; }

export interface _Point_sizeType extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_sizeType extends _Point_sizeType { constructor: { new(): Point_sizeType }; }

export interface _Point_sizeType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Point_sizeType_2 extends _Point_sizeType_2 { constructor: { new(): Point_sizeType_2 }; }

export interface _Point_smooth_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Point_smooth_enableType extends _Point_smooth_enableType { constructor: { new(): Point_smooth_enableType }; }

export interface _Point_smooth_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Point_smooth_enableType_2 extends _Point_smooth_enableType_2 { constructor: { new(): Point_smooth_enableType_2 }; }

export interface _Polygon_modeType extends BaseType {
	face: Polygon_modeTypeFaceType;
	mode: Polygon_modeTypeModeType;
}
export interface Polygon_modeType extends _Polygon_modeType { constructor: { new(): Polygon_modeType }; }

export interface _Polygon_modeTypeFaceType extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Polygon_modeTypeFaceType extends _Polygon_modeTypeFaceType { constructor: { new(): Polygon_modeTypeFaceType }; }

export interface _Polygon_modeTypeModeType extends BaseType {
	param?: string;
	value?: gl_polygon_mode_type;
}
export interface Polygon_modeTypeModeType extends _Polygon_modeTypeModeType { constructor: { new(): Polygon_modeTypeModeType }; }

export interface _Polygon_offset_fill_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_offset_fill_enableType extends _Polygon_offset_fill_enableType { constructor: { new(): Polygon_offset_fill_enableType }; }

export interface _Polygon_offset_fill_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_offset_fill_enableType_2 extends _Polygon_offset_fill_enableType_2 { constructor: { new(): Polygon_offset_fill_enableType_2 }; }

export interface _Polygon_offset_line_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_offset_line_enableType extends _Polygon_offset_line_enableType { constructor: { new(): Polygon_offset_line_enableType }; }

export interface _Polygon_offset_point_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_offset_point_enableType extends _Polygon_offset_point_enableType { constructor: { new(): Polygon_offset_point_enableType }; }

export interface _Polygon_offsetType extends BaseType {
	param?: string;
	value?: float2;
}
export interface Polygon_offsetType extends _Polygon_offsetType { constructor: { new(): Polygon_offsetType }; }

export interface _Polygon_offsetType_2 extends BaseType {
	param?: string;
	value?: float2;
}
export interface Polygon_offsetType_2 extends _Polygon_offsetType_2 { constructor: { new(): Polygon_offsetType_2 }; }

export interface _Polygon_smooth_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_smooth_enableType extends _Polygon_smooth_enableType { constructor: { new(): Polygon_smooth_enableType }; }

export interface _Polygon_stipple_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Polygon_stipple_enableType extends _Polygon_stipple_enableType { constructor: { new(): Polygon_stipple_enableType }; }

export interface _PolygonsType extends BaseType {
	/** The count attribute indicates the number of polygon primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material
	  * at the time of instantiation. If the material attribute is not specified then the lighting
	  * and shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the
	  * offset and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts[];
	/** The ph element descripes a polygon with holes. */
	ph?: PolygonsTypePhType[];
}
export interface PolygonsType extends _PolygonsType { constructor: { new(): PolygonsType }; }

export interface _PolygonsTypePhType extends BaseType {
	/** The h element represents a hole in the polygon specified. There must be at least one h element. */
	h: ListOfUInts[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p: ListOfUInts;
}
export interface PolygonsTypePhType extends _PolygonsTypePhType { constructor: { new(): PolygonsTypePhType }; }

export interface _PolylistType extends BaseType {
	/** The count attribute indicates the number of polygon primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material at
	  * the time of instantiation. If the material attribute is not specified then the lighting and
	  * shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the
	  * offset and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts;
	/** The vcount element contains a list of integers describing the number of sides for each polygon
	  * described by the polylist element. The vcount element may occur once. */
	vcount?: ListOfUInts;
}
export interface PolylistType extends _PolylistType { constructor: { new(): PolylistType }; }

export interface _Profile_CGType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id?: string;
	/** The type of platform. This is a vendor-defined character string that indicates the platform or capability target for the technique. Optional */
	platform?: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	code?: fx_code_profile[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	include?: fx_include_common[];
	newparam?: cg_newparam[];
	/** Holds a description of the textures, samplers, shaders, parameters, and passes necessary for rendering this effect using one method. */
	technique: Profile_CGTypeTechniqueType[];
}
export interface Profile_CGType extends _Profile_CGType { constructor: { new(): Profile_CGType }; }

export interface _Profile_CGTypeTechniqueType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	annotate?: fx_annotate_common[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	code?: fx_code_profile[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	include?: fx_include_common[];
	newparam?: cg_newparam[];
	/** A static declaration of all the render states, shaders, and settings for one rendering pipeline. */
	pass: Profile_CGTypeTechniqueTypePassType[];
	setparam?: cg_setparam[];
}
export interface Profile_CGTypeTechniqueType extends _Profile_CGTypeTechniqueType { constructor: { new(): Profile_CGTypeTechniqueType }; }

export interface _Profile_CGTypeTechniqueTypePassType extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid?: string;
	alpha_func: Alpha_funcType[];
	alpha_test_enable: Alpha_test_enableType[];
	annotate?: fx_annotate_common[];
	auto_normal_enable: Auto_normal_enableType[];
	blend_color: Blend_colorType[];
	blend_enable: Blend_enableType[];
	blend_equation: Blend_equationType[];
	blend_equation_separate: Blend_equation_separateType[];
	blend_func: Blend_funcType[];
	blend_func_separate: Blend_func_separateType[];
	clear_color: Clear_colorType[];
	clear_depth: Clear_depthType[];
	clear_stencil: Clear_stencilType[];
	clip_plane: Clip_planeType[];
	clip_plane_enable: Clip_plane_enableType[];
	color_clear?: fx_clearcolor_common[];
	color_logic_op_enable: Color_logic_op_enableType[];
	color_mask: Color_maskType[];
	color_material: Color_materialType[];
	color_material_enable: Color_material_enableType[];
	color_target?: fx_colortarget_common[];
	cull_face: Cull_faceType[];
	cull_face_enable: Cull_face_enableType[];
	depth_bounds: Depth_boundsType[];
	depth_bounds_enable: Depth_bounds_enableType[];
	depth_clamp_enable: Depth_clamp_enableType[];
	depth_clear?: fx_cleardepth_common[];
	depth_func: Depth_funcType[];
	depth_mask: Depth_maskType[];
	depth_range: Depth_rangeType[];
	depth_target?: fx_depthtarget_common[];
	depth_test_enable: Depth_test_enableType[];
	dither_enable: Dither_enableType[];
	draw?: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	fog_color: Fog_colorType[];
	fog_coord_src: Fog_coord_srcType[];
	fog_density: Fog_densityType[];
	fog_enable: Fog_enableType[];
	fog_end: Fog_endType[];
	fog_mode: Fog_modeType[];
	fog_start: Fog_startType[];
	front_face: Front_faceType[];
	gl_hook_abstract: Gl_hook_abstractProxyType[];
	light_ambient: Light_ambientType[];
	light_constant_attenuation: Light_constant_attenuationType[];
	light_diffuse: Light_diffuseType[];
	light_enable: Light_enableType[];
	light_linear_attenuation: Light_linear_attenuationType[];
	light_model_ambient: Light_model_ambientType[];
	light_model_color_control: Light_model_color_controlType[];
	light_model_local_viewer_enable: Light_model_local_viewer_enableType[];
	light_model_two_side_enable: Light_model_two_side_enableType[];
	light_position: Light_positionType[];
	light_quadratic_attenuation: Light_quadratic_attenuationType[];
	light_specular: Light_specularType[];
	light_spot_cutoff: Light_spot_cutoffType[];
	light_spot_direction: Light_spot_directionType[];
	light_spot_exponent: Light_spot_exponentType[];
	lighting_enable: Lighting_enableType[];
	line_smooth_enable: Line_smooth_enableType[];
	line_stipple: Line_stippleType[];
	line_stipple_enable: Line_stipple_enableType[];
	line_width: Line_widthType[];
	logic_op: Logic_opType[];
	logic_op_enable: Logic_op_enableType[];
	material_ambient: Material_ambientType[];
	material_diffuse: Material_diffuseType[];
	material_emission: Material_emissionType[];
	material_shininess: Material_shininessType[];
	material_specular: Material_specularType[];
	model_view_matrix: Model_view_matrixType[];
	multisample_enable: Multisample_enableType[];
	normalize_enable: Normalize_enableType[];
	point_distance_attenuation: Point_distance_attenuationType[];
	point_fade_threshold_size: Point_fade_threshold_sizeType[];
	point_size: Point_sizeType[];
	point_size_max: Point_size_maxType[];
	point_size_min: Point_size_minType[];
	point_smooth_enable: Point_smooth_enableType[];
	polygon_mode: Polygon_modeType[];
	polygon_offset: Polygon_offsetType[];
	polygon_offset_fill_enable: Polygon_offset_fill_enableType[];
	polygon_offset_line_enable: Polygon_offset_line_enableType[];
	polygon_offset_point_enable: Polygon_offset_point_enableType[];
	polygon_smooth_enable: Polygon_smooth_enableType[];
	polygon_stipple_enable: Polygon_stipple_enableType[];
	projection_matrix: Projection_matrixType[];
	rescale_normal_enable: Rescale_normal_enableType[];
	sample_alpha_to_coverage_enable: Sample_alpha_to_coverage_enableType[];
	sample_alpha_to_one_enable: Sample_alpha_to_one_enableType[];
	sample_coverage_enable: Sample_coverage_enableType[];
	scissor: ScissorType[];
	scissor_test_enable: Scissor_test_enableType[];
	shade_model: Shade_modelType[];
	/** Declare and prepare a shader for execution in the rendering pipeline of a pass. */
	shader: Profile_CGTypeTechniqueTypePassTypeShaderType[];
	stencil_clear?: fx_clearstencil_common[];
	stencil_func: Stencil_funcType[];
	stencil_func_separate: Stencil_func_separateType[];
	stencil_mask: Stencil_maskType[];
	stencil_mask_separate: Stencil_mask_separateType[];
	stencil_op: Stencil_opType[];
	stencil_op_separate: Stencil_op_separateType[];
	stencil_target?: fx_stenciltarget_common[];
	stencil_test_enable: Stencil_test_enableType[];
	texture1D: Texture1DType[];
	texture1D_enable: Texture1D_enableType[];
	texture2D: Texture2DType[];
	texture2D_enable: Texture2D_enableType[];
	texture3D: Texture3DType[];
	texture3D_enable: Texture3D_enableType[];
	texture_env_color: Texture_env_colorType[];
	texture_env_mode: Texture_env_modeType[];
	textureCUBE: TextureCUBEType[];
	textureCUBE_enable: TextureCUBE_enableType[];
	textureDEPTH: TextureDEPTHType[];
	textureDEPTH_enable: TextureDEPTH_enableType[];
	textureRECT: TextureRECTType[];
	textureRECT_enable: TextureRECT_enableType[];
}
export interface Profile_CGTypeTechniqueTypePassType extends _Profile_CGTypeTechniqueTypePassType { constructor: { new(): Profile_CGTypeTechniqueTypePassType }; }

export interface _Profile_CGTypeTechniqueTypePassTypeShaderType extends BaseType {
	/** In which pipeline stage this programmable shader is designed to execute, for example, VERTEX, FRAGMENT, etc. */
	stage: cg_pipeline_stage;
	annotate?: fx_annotate_common[];
	/** Binds values to uniform inputs of a shader. */
	bind?: Profile_CGTypeTechniqueTypePassTypeShaderTypeBindType[];
	/** A string containing command-line operations for the shader compiler. */
	compiler_options?: string;
	compiler_target?: string;
	/** The entry symbol for the shader function. */
	name: Profile_CGTypeTechniqueTypePassTypeShaderTypeNameType;
}
export interface Profile_CGTypeTechniqueTypePassTypeShaderType extends _Profile_CGTypeTechniqueTypePassTypeShaderType { constructor: { new(): Profile_CGTypeTechniqueTypePassTypeShaderType }; }

export interface _Profile_CGTypeTechniqueTypePassTypeShaderTypeBindType extends BaseType {
	/** The identifier for a uniform input parameter to the shader (a formal function parameter or in-scope
	  * global) that will be bound to an external resource. */
	symbol: string;
	bool: boolean;
	bool1: boolean;
	bool1x1: cg_bool1x1;
	bool1x2: cg_bool1x2;
	bool1x3: cg_bool1x3;
	bool1x4: cg_bool1x4;
	bool2: cg_bool2;
	bool2x1: cg_bool2x1;
	bool2x2: cg_bool2x2;
	bool2x3: cg_bool2x3;
	bool2x4: cg_bool2x4;
	bool3: cg_bool3;
	bool3x1: cg_bool3x1;
	bool3x2: cg_bool3x2;
	bool3x3: cg_bool3x3;
	bool3x4: cg_bool3x4;
	bool4: cg_bool4;
	bool4x1: cg_bool4x1;
	bool4x2: cg_bool4x2;
	bool4x3: cg_bool4x3;
	bool4x4: cg_bool4x4;
	enum: string;
	fixed: number;
	fixed1: number;
	fixed1x1: cg_fixed1x1;
	fixed1x2: cg_fixed1x2;
	fixed1x3: cg_fixed1x3;
	fixed1x4: cg_fixed1x4;
	fixed2: cg_fixed2;
	fixed2x1: cg_fixed2x1;
	fixed2x2: cg_fixed2x2;
	fixed2x3: cg_fixed2x3;
	fixed2x4: cg_fixed2x4;
	fixed3: cg_fixed3;
	fixed3x1: cg_fixed3x1;
	fixed3x2: cg_fixed3x2;
	fixed3x3: cg_fixed3x3;
	fixed3x4: cg_fixed3x4;
	fixed4: cg_fixed4;
	fixed4x1: cg_fixed4x1;
	fixed4x2: cg_fixed4x2;
	fixed4x3: cg_fixed4x3;
	fixed4x4: cg_fixed4x4;
	float: number;
	float1: number;
	float1x1: cg_float1x1;
	float1x2: cg_float1x2;
	float1x3: cg_float1x3;
	float1x4: cg_float1x4;
	float2: cg_float2;
	float2x1: cg_float2x1;
	float2x2: cg_float2x2;
	float2x3: cg_float2x3;
	float2x4: cg_float2x4;
	float3: cg_float3;
	float3x1: cg_float3x1;
	float3x2: cg_float3x2;
	float3x3: cg_float3x3;
	float3x4: cg_float3x4;
	float4: cg_float4;
	float4x1: cg_float4x1;
	float4x2: cg_float4x2;
	float4x3: cg_float4x3;
	float4x4: cg_float4x4;
	half: number;
	half1: number;
	half1x1: cg_half1x1;
	half1x2: cg_half1x2;
	half1x3: cg_half1x3;
	half1x4: cg_half1x4;
	half2: cg_half2;
	half2x1: cg_half2x1;
	half2x2: cg_half2x2;
	half2x3: cg_half2x3;
	half2x4: cg_half2x4;
	half3: cg_half3;
	half3x1: cg_half3x1;
	half3x2: cg_half3x2;
	half3x3: cg_half3x3;
	half3x4: cg_half3x4;
	half4: cg_half4;
	half4x1: cg_half4x1;
	half4x2: cg_half4x2;
	half4x3: cg_half4x3;
	half4x4: cg_half4x4;
	int: number;
	int1: number;
	int1x1: cg_int1x1;
	int1x2: cg_int1x2;
	int1x3: cg_int1x3;
	int1x4: cg_int1x4;
	int2: cg_int2;
	int2x1: cg_int2x1;
	int2x2: cg_int2x2;
	int2x3: cg_int2x3;
	int2x4: cg_int2x4;
	int3: cg_int3;
	int3x1: cg_int3x1;
	int3x2: cg_int3x2;
	int3x3: cg_int3x3;
	int3x4: cg_int3x4;
	int4: cg_int4;
	int4x1: cg_int4x1;
	int4x2: cg_int4x2;
	int4x3: cg_int4x3;
	int4x4: cg_int4x4;
	/** References a predefined parameter in shader binding declarations. */
	param: Profile_CGTypeTechniqueTypePassTypeShaderTypeBindTypeParamType;
	sampler1D: cg_sampler1D;
	sampler2D: cg_sampler2D;
	sampler3D: cg_sampler3D;
	samplerCUBE: cg_samplerCUBE;
	samplerDEPTH: cg_samplerDEPTH;
	samplerRECT: cg_samplerRECT;
	string: string;
	surface: cg_surface_type;
}
export interface Profile_CGTypeTechniqueTypePassTypeShaderTypeBindType extends _Profile_CGTypeTechniqueTypePassTypeShaderTypeBindType { constructor: { new(): Profile_CGTypeTechniqueTypePassTypeShaderTypeBindType }; }

export interface _Profile_CGTypeTechniqueTypePassTypeShaderTypeBindTypeParamType extends BaseType {
	ref: string;
}
export interface Profile_CGTypeTechniqueTypePassTypeShaderTypeBindTypeParamType extends _Profile_CGTypeTechniqueTypePassTypeShaderTypeBindTypeParamType { constructor: { new(): Profile_CGTypeTechniqueTypePassTypeShaderTypeBindTypeParamType }; }

type Profile_CGTypeTechniqueTypePassTypeShaderTypeCompiler_targetType = string;
type _Profile_CGTypeTechniqueTypePassTypeShaderTypeCompiler_targetType = Primitive._string;

export interface _Profile_CGTypeTechniqueTypePassTypeShaderTypeNameType extends Primitive._string {
	source?: string;
}
export interface Profile_CGTypeTechniqueTypePassTypeShaderTypeNameType extends _Profile_CGTypeTechniqueTypePassTypeShaderTypeNameType { constructor: { new(): Profile_CGTypeTechniqueTypePassTypeShaderTypeNameType }; }

export interface _Profile_COMMONType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id?: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	newparam?: common_newparam_type[];
	/** Holds a description of the textures, samplers, shaders, parameters, and passes necessary for rendering this effect using one method. */
	technique: Profile_COMMONTypeTechniqueType;
}
export interface Profile_COMMONType extends _Profile_COMMONType { constructor: { new(): Profile_COMMONType }; }

export interface _Profile_COMMONTypeTechniqueType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	blinn: Profile_COMMONTypeTechniqueTypeBlinnType;
	constant: Profile_COMMONTypeTechniqueTypeConstantType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	lambert: Profile_COMMONTypeTechniqueTypeLambertType;
	newparam?: common_newparam_type[];
	phong: Profile_COMMONTypeTechniqueTypePhongType;
}
export interface Profile_COMMONTypeTechniqueType extends _Profile_COMMONTypeTechniqueType { constructor: { new(): Profile_COMMONTypeTechniqueType }; }

export interface _Profile_COMMONTypeTechniqueTypeBlinnType extends BaseType {
	ambient?: common_color_or_texture_type;
	diffuse?: common_color_or_texture_type;
	emission?: common_color_or_texture_type;
	index_of_refraction?: common_float_or_param_type;
	reflective?: common_color_or_texture_type;
	reflectivity?: common_float_or_param_type;
	shininess?: common_float_or_param_type;
	specular?: common_color_or_texture_type;
	transparency?: common_float_or_param_type;
	transparent?: common_transparent_type;
}
export interface Profile_COMMONTypeTechniqueTypeBlinnType extends _Profile_COMMONTypeTechniqueTypeBlinnType { constructor: { new(): Profile_COMMONTypeTechniqueTypeBlinnType }; }

export interface _Profile_COMMONTypeTechniqueTypeConstantType extends BaseType {
	emission?: common_color_or_texture_type;
	index_of_refraction?: common_float_or_param_type;
	reflective?: common_color_or_texture_type;
	reflectivity?: common_float_or_param_type;
	transparency?: common_float_or_param_type;
	transparent?: common_transparent_type;
}
export interface Profile_COMMONTypeTechniqueTypeConstantType extends _Profile_COMMONTypeTechniqueTypeConstantType { constructor: { new(): Profile_COMMONTypeTechniqueTypeConstantType }; }

export interface _Profile_COMMONTypeTechniqueTypeLambertType extends BaseType {
	ambient?: common_color_or_texture_type;
	diffuse?: common_color_or_texture_type;
	emission?: common_color_or_texture_type;
	index_of_refraction?: common_float_or_param_type;
	reflective?: common_color_or_texture_type;
	reflectivity?: common_float_or_param_type;
	transparency?: common_float_or_param_type;
	transparent?: common_transparent_type;
}
export interface Profile_COMMONTypeTechniqueTypeLambertType extends _Profile_COMMONTypeTechniqueTypeLambertType { constructor: { new(): Profile_COMMONTypeTechniqueTypeLambertType }; }

export interface _Profile_COMMONTypeTechniqueTypePhongType extends BaseType {
	ambient?: common_color_or_texture_type;
	diffuse?: common_color_or_texture_type;
	emission?: common_color_or_texture_type;
	index_of_refraction?: common_float_or_param_type;
	reflective?: common_color_or_texture_type;
	reflectivity?: common_float_or_param_type;
	shininess?: common_float_or_param_type;
	specular?: common_color_or_texture_type;
	transparency?: common_float_or_param_type;
	transparent?: common_transparent_type;
}
export interface Profile_COMMONTypeTechniqueTypePhongType extends _Profile_COMMONTypeTechniqueTypePhongType { constructor: { new(): Profile_COMMONTypeTechniqueTypePhongType }; }

export interface _Profile_GLESType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id?: string;
	/** The type of platform. This is a vendor-defined character string that indicates the platform or capability target for the technique. Optional */
	platform?: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	newparam?: gles_newparam[];
	/** Holds a description of the textures, samplers, shaders, parameters, and passes necessary for rendering this effect using one method. */
	technique: Profile_GLESTypeTechniqueType[];
}
export interface Profile_GLESType extends _Profile_GLESType { constructor: { new(): Profile_GLESType }; }

export interface _Profile_GLESTypeTechniqueType extends BaseType {
	id: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. */
	sid: string;
	annotate?: fx_annotate_common[];
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	newparam?: gles_newparam[];
	/** A static declaration of all the render states, shaders, and settings for one rendering pipeline. */
	pass: Profile_GLESTypeTechniqueTypePassType[];
	setparam?: Profile_GLESTypeTechniqueTypeSetparamType[];
}
export interface Profile_GLESTypeTechniqueType extends _Profile_GLESTypeTechniqueType { constructor: { new(): Profile_GLESTypeTechniqueType }; }

export interface _Profile_GLESTypeTechniqueTypePassType extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid?: string;
	alpha_func?: Alpha_funcType_2[];
	alpha_test_enable?: Alpha_test_enableType_2[];
	annotate?: fx_annotate_common[];
	blend_enable?: Blend_enableType_2[];
	blend_func?: Blend_funcType_2[];
	clear_color?: Clear_colorType_2[];
	clear_depth?: Clear_depthType_2[];
	clear_stencil?: Clear_stencilType_2[];
	clip_plane?: Clip_planeType_2[];
	clip_plane_enable?: Clip_plane_enableType_2[];
	color_clear?: fx_color_common;
	color_logic_op_enable?: Color_logic_op_enableType_2[];
	color_mask?: Color_maskType_2[];
	color_material_enable?: Color_material_enableType_2[];
	color_target?: string;
	cull_face?: Cull_faceType_2[];
	cull_face_enable?: Cull_face_enableType_2[];
	depth_clear?: number;
	depth_func?: Depth_funcType_2[];
	depth_mask?: Depth_maskType_2[];
	depth_range?: Depth_rangeType_2[];
	depth_target?: string;
	depth_test_enable?: Depth_test_enableType_2[];
	dither_enable?: Dither_enableType_2[];
	draw?: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	fog_color?: Fog_colorType_2[];
	fog_density?: Fog_densityType_2[];
	fog_enable?: Fog_enableType_2[];
	fog_end?: Fog_endType_2[];
	fog_mode?: Fog_modeType_2[];
	fog_start?: Fog_startType_2[];
	front_face?: Front_faceType_2[];
	light_ambient?: Light_ambientType_2[];
	light_constant_attenuation?: Light_constant_attenuationType_2[];
	light_diffuse?: Light_diffuseType_2[];
	light_enable?: Light_enableType_2[];
	light_linear_attenutation?: Light_linear_attenutationType[];
	light_model_ambient?: Light_model_ambientType_2[];
	light_model_two_side_enable?: Light_model_two_side_enableType_2[];
	light_position?: Light_positionType_2[];
	light_quadratic_attenuation?: Light_quadratic_attenuationType_2[];
	light_specular?: Light_specularType_2[];
	light_spot_cutoff?: Light_spot_cutoffType_2[];
	light_spot_direction?: Light_spot_directionType_2[];
	light_spot_exponent?: Light_spot_exponentType_2[];
	lighting_enable?: Lighting_enableType_2[];
	line_smooth_enable?: Line_smooth_enableType_2[];
	line_width?: Line_widthType_2[];
	logic_op?: Logic_opType_2[];
	material_ambient?: Material_ambientType_2[];
	material_diffuse?: Material_diffuseType_2[];
	material_emission?: Material_emissionType_2[];
	material_shininess?: Material_shininessType_2[];
	material_specular?: Material_specularType_2[];
	model_view_matrix?: Model_view_matrixType_2[];
	multisample_enable?: Multisample_enableType_2[];
	normalize_enable?: Normalize_enableType_2[];
	point_distance_attenuation?: Point_distance_attenuationType_2[];
	point_fade_threshold_size?: Point_fade_threshold_sizeType_2[];
	point_size?: Point_sizeType_2[];
	point_size_max?: Point_size_maxType_2[];
	point_size_min?: Point_size_minType_2[];
	point_smooth_enable?: Point_smooth_enableType_2[];
	polygon_offset?: Polygon_offsetType_2[];
	polygon_offset_fill_enable?: Polygon_offset_fill_enableType_2[];
	projection_matrix?: Projection_matrixType_2[];
	rescale_normal_enable?: Rescale_normal_enableType_2[];
	sample_alpha_to_coverage_enable?: Sample_alpha_to_coverage_enableType_2[];
	sample_alpha_to_one_enable?: Sample_alpha_to_one_enableType_2[];
	sample_coverage_enable?: Sample_coverage_enableType_2[];
	scissor?: ScissorType_2[];
	scissor_test_enable?: Scissor_test_enableType_2[];
	shade_model?: Shade_modelType_2[];
	stencil_clear?: number;
	stencil_func?: Stencil_funcType_2[];
	stencil_mask?: Stencil_maskType_2[];
	stencil_op?: Stencil_opType_2[];
	stencil_target?: string;
	stencil_test_enable?: Stencil_test_enableType_2[];
	texture_pipeline?: Texture_pipelineType[];
	texture_pipeline_enable?: Texture_pipeline_enableType[];
}
export interface Profile_GLESTypeTechniqueTypePassType extends _Profile_GLESTypeTechniqueTypePassType { constructor: { new(): Profile_GLESTypeTechniqueTypePassType }; }

export interface _Profile_GLESTypeTechniqueTypeSetparamType extends BaseType {
	ref: string;
	annotate?: fx_annotate_common[];
	bool: boolean;
	bool2: bool2;
	bool3: bool3;
	bool4: bool4;
	enum: string;
	float: number;
	float1x1: number;
	float1x2: float2;
	float1x3: float3;
	float1x4: float4;
	float2: float2;
	float2x1: float2;
	float2x2: float2x2;
	float2x3: float2x3;
	float2x4: float2x4;
	float3: float3;
	float3x1: float3;
	float3x2: float3x2;
	float3x3: float3x3;
	float3x4: float3x4;
	float4: float4;
	float4x1: float4;
	float4x2: float4x2;
	float4x3: float4x3;
	float4x4: float4x4;
	int: number;
	int2: int2;
	int3: int3;
	int4: int4;
	sampler_state: gles_sampler_state;
	surface: fx_surface_common;
	texture_pipeline: gles_texture_pipeline;
	texture_unit: gles_texture_unit;
}
export interface Profile_GLESTypeTechniqueTypeSetparamType extends _Profile_GLESTypeTechniqueTypeSetparamType { constructor: { new(): Profile_GLESTypeTechniqueTypeSetparamType }; }

export interface _Profile_GLSLType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id?: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	code?: fx_code_profile[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	include?: fx_include_common[];
	newparam?: glsl_newparam[];
	/** Holds a description of the textures, samplers, shaders, parameters, and passes necessary for rendering this effect using one method. */
	technique: Profile_GLSLTypeTechniqueType[];
}
export interface Profile_GLSLType extends _Profile_GLSLType { constructor: { new(): Profile_GLSLType }; }

export interface _Profile_GLSLTypeTechniqueType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Optional attribute. */
	id: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	annotate?: fx_annotate_common[];
	code?: fx_code_profile[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image?: ImageType[];
	include?: fx_include_common[];
	newparam?: glsl_newparam[];
	/** A static declaration of all the render states, shaders, and settings for one rendering pipeline. */
	pass: Profile_GLSLTypeTechniqueTypePassType[];
	setparam?: glsl_setparam[];
}
export interface Profile_GLSLTypeTechniqueType extends _Profile_GLSLTypeTechniqueType { constructor: { new(): Profile_GLSLTypeTechniqueType }; }

export interface _Profile_GLSLTypeTechniqueTypePassType extends BaseType {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid?: string;
	alpha_func: Alpha_funcType[];
	alpha_test_enable: Alpha_test_enableType[];
	annotate?: fx_annotate_common[];
	auto_normal_enable: Auto_normal_enableType[];
	blend_color: Blend_colorType[];
	blend_enable: Blend_enableType[];
	blend_equation: Blend_equationType[];
	blend_equation_separate: Blend_equation_separateType[];
	blend_func: Blend_funcType[];
	blend_func_separate: Blend_func_separateType[];
	clear_color: Clear_colorType[];
	clear_depth: Clear_depthType[];
	clear_stencil: Clear_stencilType[];
	clip_plane: Clip_planeType[];
	clip_plane_enable: Clip_plane_enableType[];
	color_clear?: fx_clearcolor_common[];
	color_logic_op_enable: Color_logic_op_enableType[];
	color_mask: Color_maskType[];
	color_material: Color_materialType[];
	color_material_enable: Color_material_enableType[];
	color_target?: fx_colortarget_common[];
	cull_face: Cull_faceType[];
	cull_face_enable: Cull_face_enableType[];
	depth_bounds: Depth_boundsType[];
	depth_bounds_enable: Depth_bounds_enableType[];
	depth_clamp_enable: Depth_clamp_enableType[];
	depth_clear?: fx_cleardepth_common[];
	depth_func: Depth_funcType[];
	depth_mask: Depth_maskType[];
	depth_range: Depth_rangeType[];
	depth_target?: fx_depthtarget_common[];
	depth_test_enable: Depth_test_enableType[];
	dither_enable: Dither_enableType[];
	draw?: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	fog_color: Fog_colorType[];
	fog_coord_src: Fog_coord_srcType[];
	fog_density: Fog_densityType[];
	fog_enable: Fog_enableType[];
	fog_end: Fog_endType[];
	fog_mode: Fog_modeType[];
	fog_start: Fog_startType[];
	front_face: Front_faceType[];
	gl_hook_abstract: Gl_hook_abstractProxyType[];
	light_ambient: Light_ambientType[];
	light_constant_attenuation: Light_constant_attenuationType[];
	light_diffuse: Light_diffuseType[];
	light_enable: Light_enableType[];
	light_linear_attenuation: Light_linear_attenuationType[];
	light_model_ambient: Light_model_ambientType[];
	light_model_color_control: Light_model_color_controlType[];
	light_model_local_viewer_enable: Light_model_local_viewer_enableType[];
	light_model_two_side_enable: Light_model_two_side_enableType[];
	light_position: Light_positionType[];
	light_quadratic_attenuation: Light_quadratic_attenuationType[];
	light_specular: Light_specularType[];
	light_spot_cutoff: Light_spot_cutoffType[];
	light_spot_direction: Light_spot_directionType[];
	light_spot_exponent: Light_spot_exponentType[];
	lighting_enable: Lighting_enableType[];
	line_smooth_enable: Line_smooth_enableType[];
	line_stipple: Line_stippleType[];
	line_stipple_enable: Line_stipple_enableType[];
	line_width: Line_widthType[];
	logic_op: Logic_opType[];
	logic_op_enable: Logic_op_enableType[];
	material_ambient: Material_ambientType[];
	material_diffuse: Material_diffuseType[];
	material_emission: Material_emissionType[];
	material_shininess: Material_shininessType[];
	material_specular: Material_specularType[];
	model_view_matrix: Model_view_matrixType[];
	multisample_enable: Multisample_enableType[];
	normalize_enable: Normalize_enableType[];
	point_distance_attenuation: Point_distance_attenuationType[];
	point_fade_threshold_size: Point_fade_threshold_sizeType[];
	point_size: Point_sizeType[];
	point_size_max: Point_size_maxType[];
	point_size_min: Point_size_minType[];
	point_smooth_enable: Point_smooth_enableType[];
	polygon_mode: Polygon_modeType[];
	polygon_offset: Polygon_offsetType[];
	polygon_offset_fill_enable: Polygon_offset_fill_enableType[];
	polygon_offset_line_enable: Polygon_offset_line_enableType[];
	polygon_offset_point_enable: Polygon_offset_point_enableType[];
	polygon_smooth_enable: Polygon_smooth_enableType[];
	polygon_stipple_enable: Polygon_stipple_enableType[];
	projection_matrix: Projection_matrixType[];
	rescale_normal_enable: Rescale_normal_enableType[];
	sample_alpha_to_coverage_enable: Sample_alpha_to_coverage_enableType[];
	sample_alpha_to_one_enable: Sample_alpha_to_one_enableType[];
	sample_coverage_enable: Sample_coverage_enableType[];
	scissor: ScissorType[];
	scissor_test_enable: Scissor_test_enableType[];
	shade_model: Shade_modelType[];
	/** Declare and prepare a shader for execution in the rendering pipeline of a pass. */
	shader: Profile_GLSLTypeTechniqueTypePassTypeShaderType[];
	stencil_clear?: fx_clearstencil_common[];
	stencil_func: Stencil_funcType[];
	stencil_func_separate: Stencil_func_separateType[];
	stencil_mask: Stencil_maskType[];
	stencil_mask_separate: Stencil_mask_separateType[];
	stencil_op: Stencil_opType[];
	stencil_op_separate: Stencil_op_separateType[];
	stencil_target?: fx_stenciltarget_common[];
	stencil_test_enable: Stencil_test_enableType[];
	texture1D: Texture1DType[];
	texture1D_enable: Texture1D_enableType[];
	texture2D: Texture2DType[];
	texture2D_enable: Texture2D_enableType[];
	texture3D: Texture3DType[];
	texture3D_enable: Texture3D_enableType[];
	texture_env_color: Texture_env_colorType[];
	texture_env_mode: Texture_env_modeType[];
	textureCUBE: TextureCUBEType[];
	textureCUBE_enable: TextureCUBE_enableType[];
	textureDEPTH: TextureDEPTHType[];
	textureDEPTH_enable: TextureDEPTH_enableType[];
	textureRECT: TextureRECTType[];
	textureRECT_enable: TextureRECT_enableType[];
}
export interface Profile_GLSLTypeTechniqueTypePassType extends _Profile_GLSLTypeTechniqueTypePassType { constructor: { new(): Profile_GLSLTypeTechniqueTypePassType }; }

export interface _Profile_GLSLTypeTechniqueTypePassTypeShaderType extends BaseType {
	/** In which pipeline stage this programmable shader is designed to execute, for example, VERTEX, FRAGMENT, etc. */
	stage: glsl_pipeline_stage;
	annotate?: fx_annotate_common[];
	/** Binds values to uniform inputs of a shader. */
	bind?: Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindType[];
	/** A string containing command-line operations for the shader compiler. */
	compiler_options?: string;
	/** A string declaring which profile or platform the compiler is targeting this shader for. */
	compiler_target?: string;
	/** The entry symbol for the shader function. */
	name: Profile_GLSLTypeTechniqueTypePassTypeShaderTypeNameType;
}
export interface Profile_GLSLTypeTechniqueTypePassTypeShaderType extends _Profile_GLSLTypeTechniqueTypePassTypeShaderType { constructor: { new(): Profile_GLSLTypeTechniqueTypePassTypeShaderType }; }

export interface _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindType extends BaseType {
	/** The identifier for a uniform input parameter to the shader (a formal function parameter or in-scope
	  * global) that will be bound to an external resource. */
	symbol: string;
	bool: boolean;
	bool2: glsl_bool2;
	bool3: glsl_bool3;
	bool4: glsl_bool4;
	enum: string;
	float: number;
	float2: glsl_float2;
	float2x2: glsl_float2x2;
	float3: glsl_float3;
	float3x3: glsl_float3x3;
	float4: glsl_float4;
	float4x4: glsl_float4x4;
	int: number;
	int2: glsl_int2;
	int3: glsl_int3;
	int4: glsl_int4;
	param: Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindTypeParamType;
	sampler1D: gl_sampler1D;
	sampler2D: gl_sampler2D;
	sampler3D: gl_sampler3D;
	samplerCUBE: gl_samplerCUBE;
	samplerDEPTH: gl_samplerDEPTH;
	samplerRECT: gl_samplerRECT;
	surface: glsl_surface_type;
}
export interface Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindType extends _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindType { constructor: { new(): Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindType }; }

export interface _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindTypeParamType extends BaseType {
	ref: string;
}
export interface Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindTypeParamType extends _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindTypeParamType { constructor: { new(): Profile_GLSLTypeTechniqueTypePassTypeShaderTypeBindTypeParamType }; }

type Profile_GLSLTypeTechniqueTypePassTypeShaderTypeCompiler_targetType = string;
type _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeCompiler_targetType = Primitive._string;

export interface _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeNameType extends Primitive._string {
	source?: string;
}
export interface Profile_GLSLTypeTechniqueTypePassTypeShaderTypeNameType extends _Profile_GLSLTypeTechniqueTypePassTypeShaderTypeNameType { constructor: { new(): Profile_GLSLTypeTechniqueTypePassTypeShaderTypeNameType }; }

export interface _Projection_matrixType extends BaseType {
	param?: string;
	value?: float4x4;
}
export interface Projection_matrixType extends _Projection_matrixType { constructor: { new(): Projection_matrixType }; }

export interface _Projection_matrixType_2 extends BaseType {
	param?: string;
	value?: float4x4;
}
export interface Projection_matrixType_2 extends _Projection_matrixType_2 { constructor: { new(): Projection_matrixType_2 }; }

export interface _Rescale_normal_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Rescale_normal_enableType extends _Rescale_normal_enableType { constructor: { new(): Rescale_normal_enableType }; }

export interface _Rescale_normal_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Rescale_normal_enableType_2 extends _Rescale_normal_enableType_2 { constructor: { new(): Rescale_normal_enableType_2 }; }

export interface _Rigid_bodyType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the rigid_body information for the common profile which all
	  * COLLADA implementations need to support. */
	technique_common: Rigid_bodyTypeTechnique_commonType;
}
export interface Rigid_bodyType extends _Rigid_bodyType { constructor: { new(): Rigid_bodyType }; }

export interface _Rigid_bodyTypeTechnique_commonType extends BaseType {
	/** If false, the rigid_body is not moveable */
	dynamic?: Rigid_bodyTypeTechnique_commonTypeDynamicType;
	/** float3 – The diagonal elements of the inertia tensor (moments of inertia), which is represented
	  * in the local frame of the center of mass. See above. */
	inertia?: TargetableFloat3;
	/** The instance_physics_material element declares the instantiation of a COLLADA physics_material
	  * resource. */
	instance_physics_material?: InstanceWithExtra;
	/** The total mass of the rigid-body */
	mass?: TargetableFloat;
	/** Defines the center and orientation of mass of the rigid-body relative to the local origin of the
	  * “root” shape.This makes the off-diagonal elements of the inertia tensor (products of inertia) all
	  * 0 and allows us to just store the diagonal elements (moments of inertia). */
	mass_frame?: Rigid_bodyTypeTechnique_commonTypeMass_frameType;
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material?: Physics_materialType;
	/** This element allows for describing components of a rigid_body. */
	shape: Rigid_bodyTypeTechnique_commonTypeShapeType[];
}
export interface Rigid_bodyTypeTechnique_commonType extends _Rigid_bodyTypeTechnique_commonType { constructor: { new(): Rigid_bodyTypeTechnique_commonType }; }

export interface _Rigid_bodyTypeTechnique_commonTypeDynamicType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Rigid_bodyTypeTechnique_commonTypeDynamicType extends _Rigid_bodyTypeTechnique_commonTypeDynamicType { constructor: { new(): Rigid_bodyTypeTechnique_commonTypeDynamicType }; }

export interface _Rigid_bodyTypeTechnique_commonTypeMass_frameType extends BaseType {
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate: RotateType[];
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate: TargetableFloat3[];
}
export interface Rigid_bodyTypeTechnique_commonTypeMass_frameType extends _Rigid_bodyTypeTechnique_commonTypeMass_frameType { constructor: { new(): Rigid_bodyTypeTechnique_commonTypeMass_frameType }; }

export interface _Rigid_bodyTypeTechnique_commonTypeShapeType extends BaseType {
	/** An axis-aligned, centered box primitive. */
	box: BoxType;
	/** A capsule primitive that is centered on and aligned with the local Y axis. */
	capsule: CapsuleType;
	/** A cylinder primitive that is centered on, and aligned with. the local Y axis. */
	cylinder: CylinderType;
	/** The density of the shape. */
	density?: TargetableFloat;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** If true, the mass is distributed along the surface of the shape */
	hollow?: Rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType;
	/** The instance_geometry element declares the instantiation of a COLLADA geometry resource. */
	instance_geometry: Instance_geometryType;
	/** The instance_physics_material element declares the instantiation of a COLLADA physics_material
	  * resource. */
	instance_physics_material?: InstanceWithExtra;
	/** The mass of the shape. */
	mass?: TargetableFloat;
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material?: Physics_materialType;
	/** An infinite plane primitive. */
	plane: PlaneType;
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate?: RotateType[];
	/** A centered sphere primitive. */
	sphere: SphereType;
	/** A tapered capsule primitive that is centered on, and aligned with, the local Y axis. */
	tapered_capsule: Tapered_capsuleType;
	/** A tapered cylinder primitive that is centered on and aligned with the local Y axis. */
	tapered_cylinder: Tapered_cylinderType;
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate?: TargetableFloat3[];
}
export interface Rigid_bodyTypeTechnique_commonTypeShapeType extends _Rigid_bodyTypeTechnique_commonTypeShapeType { constructor: { new(): Rigid_bodyTypeTechnique_commonTypeShapeType }; }

export interface _Rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType extends _Rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType { constructor: { new(): Rigid_bodyTypeTechnique_commonTypeShapeTypeHollowType }; }

export interface _Rigid_constraintType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
	/** Defines an attachment to a rigid-body or a node. */
	attachment: Rigid_constraintTypeAttachmentType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Defines the attachment (to a rigid_body or a node) to be used as the reference-frame. */
	ref_attachment: Rigid_constraintTypeRef_attachmentType;
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique_common element specifies the rigid_constraint information for the common profile
	  * which all COLLADA implementations need to support. */
	technique_common: Rigid_constraintTypeTechnique_commonType;
}
export interface Rigid_constraintType extends _Rigid_constraintType { constructor: { new(): Rigid_constraintType }; }

export interface _Rigid_constraintTypeAttachmentType extends BaseType {
	/** The “rigid_body” attribute is a relative reference to a rigid-body within the same physics_model. */
	rigid_body: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate?: RotateType[];
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate?: TargetableFloat3[];
}
export interface Rigid_constraintTypeAttachmentType extends _Rigid_constraintTypeAttachmentType { constructor: { new(): Rigid_constraintTypeAttachmentType }; }

export interface _Rigid_constraintTypeRef_attachmentType extends BaseType {
	/** The “rigid_body” attribute is a relative reference to a rigid-body within the same
	  * physics_model. */
	rigid_body: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate?: RotateType[];
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate?: TargetableFloat3[];
}
export interface Rigid_constraintTypeRef_attachmentType extends _Rigid_constraintTypeRef_attachmentType { constructor: { new(): Rigid_constraintTypeRef_attachmentType }; }

export interface _Rigid_constraintTypeTechnique_commonType extends BaseType {
	/** If false, the constraint doesn’t exert any force or influence on the rigid bodies. */
	enabled?: Rigid_constraintTypeTechnique_commonTypeEnabledType;
	/** Indicates whether the attached rigid bodies may inter-penetrate. */
	interpenetrate?: Rigid_constraintTypeTechnique_commonTypeInterpenetrateType;
	/** The limits element provides a flexible way to specify the constraint limits (degrees of freedom
	  * and ranges). */
	limits?: Rigid_constraintTypeTechnique_commonTypeLimitsType;
	/** Spring, based on distance (“LINEAR”) or angle (“ANGULAR”). */
	spring?: Rigid_constraintTypeTechnique_commonTypeSpringType;
}
export interface Rigid_constraintTypeTechnique_commonType extends _Rigid_constraintTypeTechnique_commonType { constructor: { new(): Rigid_constraintTypeTechnique_commonType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeEnabledType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Rigid_constraintTypeTechnique_commonTypeEnabledType extends _Rigid_constraintTypeTechnique_commonTypeEnabledType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeEnabledType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeInterpenetrateType extends _bool {
	/** The sid attribute is a text string value containing the sub-identifier of this element.
	  * This value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface Rigid_constraintTypeTechnique_commonTypeInterpenetrateType extends _Rigid_constraintTypeTechnique_commonTypeInterpenetrateType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeInterpenetrateType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeLimitsType extends BaseType {
	/** The linear element describes linear (translational) limits along each axis. */
	linear?: Rigid_constraintTypeTechnique_commonTypeLimitsTypeLinearType;
	/** The swing_cone_and_twist element describes the angular limits along each rotation axis in degrees.
	  * The the X and Y limits describe a “swing cone” and the Z limits describe the “twist angle” range */
	swing_cone_and_twist?: Rigid_constraintTypeTechnique_commonTypeLimitsTypeSwing_cone_and_twistType;
}
export interface Rigid_constraintTypeTechnique_commonTypeLimitsType extends _Rigid_constraintTypeTechnique_commonTypeLimitsType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeLimitsType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeLimitsTypeLinearType extends BaseType {
	/** The maximum values for the limit. */
	max?: TargetableFloat3;
	/** The minimum values for the limit. */
	min?: TargetableFloat3;
}
export interface Rigid_constraintTypeTechnique_commonTypeLimitsTypeLinearType extends _Rigid_constraintTypeTechnique_commonTypeLimitsTypeLinearType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeLimitsTypeLinearType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeLimitsTypeSwing_cone_and_twistType extends BaseType {
	/** The maximum values for the limit. */
	max?: TargetableFloat3;
	/** The minimum values for the limit. */
	min?: TargetableFloat3;
}
export interface Rigid_constraintTypeTechnique_commonTypeLimitsTypeSwing_cone_and_twistType extends _Rigid_constraintTypeTechnique_commonTypeLimitsTypeSwing_cone_and_twistType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeLimitsTypeSwing_cone_and_twistType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeSpringType extends BaseType {
	/** The angular spring properties. */
	angular?: Rigid_constraintTypeTechnique_commonTypeSpringTypeAngularType;
	/** The linear spring properties. */
	linear?: Rigid_constraintTypeTechnique_commonTypeSpringTypeLinearType;
}
export interface Rigid_constraintTypeTechnique_commonTypeSpringType extends _Rigid_constraintTypeTechnique_commonTypeSpringType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeSpringType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeSpringTypeAngularType extends BaseType {
	/** The spring damping coefficient. */
	damping?: TargetableFloat;
	/** The stiffness (also called spring coefficient) has units of force/angle in degrees. */
	stiffness?: TargetableFloat;
	/** The spring's target or resting distance. */
	target_value?: TargetableFloat;
}
export interface Rigid_constraintTypeTechnique_commonTypeSpringTypeAngularType extends _Rigid_constraintTypeTechnique_commonTypeSpringTypeAngularType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeSpringTypeAngularType }; }

export interface _Rigid_constraintTypeTechnique_commonTypeSpringTypeLinearType extends BaseType {
	/** The spring damping coefficient. */
	damping?: TargetableFloat;
	/** The stiffness (also called spring coefficient) has units of force/distance. */
	stiffness?: TargetableFloat;
	/** The spring's target or resting distance. */
	target_value?: TargetableFloat;
}
export interface Rigid_constraintTypeTechnique_commonTypeSpringTypeLinearType extends _Rigid_constraintTypeTechnique_commonTypeSpringTypeLinearType { constructor: { new(): Rigid_constraintTypeTechnique_commonTypeSpringTypeLinearType }; }

type RotateType = number[];

export interface _Sample_alpha_to_coverage_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_alpha_to_coverage_enableType extends _Sample_alpha_to_coverage_enableType { constructor: { new(): Sample_alpha_to_coverage_enableType }; }

export interface _Sample_alpha_to_coverage_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_alpha_to_coverage_enableType_2 extends _Sample_alpha_to_coverage_enableType_2 { constructor: { new(): Sample_alpha_to_coverage_enableType_2 }; }

export interface _Sample_alpha_to_one_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_alpha_to_one_enableType extends _Sample_alpha_to_one_enableType { constructor: { new(): Sample_alpha_to_one_enableType }; }

export interface _Sample_alpha_to_one_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_alpha_to_one_enableType_2 extends _Sample_alpha_to_one_enableType_2 { constructor: { new(): Sample_alpha_to_one_enableType_2 }; }

export interface _Sample_coverage_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_coverage_enableType extends _Sample_coverage_enableType { constructor: { new(): Sample_coverage_enableType }; }

export interface _Sample_coverage_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Sample_coverage_enableType_2 extends _Sample_coverage_enableType_2 { constructor: { new(): Sample_coverage_enableType_2 }; }

export interface _SamplerType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This value
	  * must be unique within the instance document. Optional attribute. */
	id: string;
	/** The input element must occur at least one time. These inputs are local inputs. */
	input: InputLocal[];
}
export interface SamplerType extends _SamplerType { constructor: { new(): SamplerType }; }

export interface _Scissor_test_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Scissor_test_enableType extends _Scissor_test_enableType { constructor: { new(): Scissor_test_enableType }; }

export interface _Scissor_test_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Scissor_test_enableType_2 extends _Scissor_test_enableType_2 { constructor: { new(): Scissor_test_enableType_2 }; }

export interface _ScissorType extends BaseType {
	param?: string;
	value?: int4;
}
export interface ScissorType extends _ScissorType { constructor: { new(): ScissorType }; }

export interface _ScissorType_2 extends BaseType {
	param?: string;
	value?: int4;
}
export interface ScissorType_2 extends _ScissorType_2 { constructor: { new(): ScissorType_2 }; }

export interface _Shade_modelType extends BaseType {
	param?: string;
	value?: gl_shade_model_type;
}
export interface Shade_modelType extends _Shade_modelType { constructor: { new(): Shade_modelType }; }

export interface _Shade_modelType_2 extends BaseType {
	param?: string;
	value?: gl_shade_model_type;
}
export interface Shade_modelType_2 extends _Shade_modelType_2 { constructor: { new(): Shade_modelType_2 }; }

type SkewType = number[];

export interface _SkinType extends BaseType {
	/** The source attribute contains a URI reference to the base mesh, (a static mesh or a morphed mesh).
	  * This also provides the bind-shape of the skinned mesh.  Required attribute. */
	$source: string;
	/** This provides extra information about the position and orientation of the base mesh before binding.
	  * If bind_shape_matrix is not specified then an identity matrix may be used as the bind_shape_matrix.
	  * The bind_shape_matrix element may occur zero or one times. */
	bind_shape_matrix?: float4x4;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The joints element associates joint, or skeleton, nodes with attribute data.
	  * In COLLADA, this is specified by the inverse bind matrix of each joint (influence) in the skeleton. */
	joints: SkinTypeJointsType;
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType[];
	/** The vertex_weights element associates a set of joint-weight pairs with each vertex in the base mesh. */
	vertex_weights: SkinTypeVertex_weightsType;
}
export interface SkinType extends _SkinType { constructor: { new(): SkinType }; }

export interface _SkinTypeJointsType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element must occur at least twice. These inputs are local inputs. */
	input: InputLocal[];
}
export interface SkinTypeJointsType extends _SkinTypeJointsType { constructor: { new(): SkinTypeJointsType }; }

export interface _SkinTypeVertex_weightsType extends BaseType {
	/** The count attribute describes the number of vertices in the base mesh. Required element. */
	count: number;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element must occur at least twice. */
	input: InputLocalOffset[];
	/** The v element describes which bones and attributes are associated with each vertex.  An index
	  * of –1 into the array of joints refers to the bind shape.  Weights should be normalized before use.
	  * The v element must occur zero or one times. */
	v?: ListOfInts;
	/** The vcount element contains a list of integers describing the number of influences for each vertex.
	  * The vcount element may occur once. */
	vcount?: ListOfUInts;
}
export interface SkinTypeVertex_weightsType extends _SkinTypeVertex_weightsType { constructor: { new(): SkinTypeVertex_weightsType }; }

export interface _SourceType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element.
	  * This value must be unique within the instance document. Required attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The bool_array element declares the storage for a homogenous array of boolean values. */
	bool_array?: Bool_arrayType;
	/** The float_array element declares the storage for a homogenous array of floating point values. */
	float_array?: Float_arrayType;
	/** The IDREF_array element declares the storage for a homogenous array of ID reference values. */
	IDREF_array?: IDREF_arrayType;
	/** The int_array element declares the storage for a homogenous array of integer values. */
	int_array?: Int_arrayType;
	/** The Name_array element declares the storage for a homogenous array of Name string values. */
	Name_array?: Name_arrayType;
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique?: TechniqueType[];
	/** The technique common specifies the common method for accessing this source element's data. */
	technique_common?: SourceTypeTechnique_commonType;
}
export interface SourceType extends _SourceType { constructor: { new(): SourceType }; }

export interface _SourceTypeTechnique_commonType extends BaseType {
	/** The accessor element declares an access pattern to one of the array elements: float_array,
	  * int_array, Name_array, bool_array, and IDREF_array. The accessor element describes access
	  * to arrays that are organized in either an interleaved or non-interleaved manner, depending
	  * on the offset and stride attributes. */
	accessor: AccessorType;
}
export interface SourceTypeTechnique_commonType extends _SourceTypeTechnique_commonType { constructor: { new(): SourceTypeTechnique_commonType }; }

export interface _SphereType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A float value that represents the radius of the sphere */
	radius: number;
}
export interface SphereType extends _SphereType { constructor: { new(): SphereType }; }

export interface _SplineType extends BaseType {
	closed: boolean;
	/** The control vertices element  must occur  exactly one time. It is used to describe the CVs of the spline. */
	control_vertices: SplineTypeControl_verticesType;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType[];
}
export interface SplineType extends _SplineType { constructor: { new(): SplineType }; }

export interface _SplineTypeControl_verticesType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element must occur at least one time. These inputs are local inputs. */
	input: InputLocal[];
}
export interface SplineTypeControl_verticesType extends _SplineTypeControl_verticesType { constructor: { new(): SplineTypeControl_verticesType }; }

export type SpringType = ("LINEAR" | "ANGULAR");
export interface _SpringType extends Primitive._string { content: SpringType; }

export interface _Stencil_func_separateType extends BaseType {
	back: Stencil_func_separateTypeBackType;
	front: Stencil_func_separateTypeFrontType;
	mask: Stencil_func_separateTypeMaskType;
	ref: Stencil_func_separateTypeRefType;
}
export interface Stencil_func_separateType extends _Stencil_func_separateType { constructor: { new(): Stencil_func_separateType }; }

export interface _Stencil_func_separateTypeBackType extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Stencil_func_separateTypeBackType extends _Stencil_func_separateTypeBackType { constructor: { new(): Stencil_func_separateTypeBackType }; }

export interface _Stencil_func_separateTypeFrontType extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Stencil_func_separateTypeFrontType extends _Stencil_func_separateTypeFrontType { constructor: { new(): Stencil_func_separateTypeFrontType }; }

export interface _Stencil_func_separateTypeMaskType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_func_separateTypeMaskType extends _Stencil_func_separateTypeMaskType { constructor: { new(): Stencil_func_separateTypeMaskType }; }

export interface _Stencil_func_separateTypeRefType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_func_separateTypeRefType extends _Stencil_func_separateTypeRefType { constructor: { new(): Stencil_func_separateTypeRefType }; }

export interface _Stencil_funcType extends BaseType {
	func: Stencil_funcTypeFuncType;
	mask: Stencil_funcTypeMaskType;
	ref: Stencil_funcTypeRefType;
}
export interface Stencil_funcType extends _Stencil_funcType { constructor: { new(): Stencil_funcType }; }

export interface _Stencil_funcType_2 extends BaseType {
	func: Stencil_funcTypeFuncType_2;
	mask: Stencil_funcTypeMaskType_2;
	ref: Stencil_funcTypeRefType_2;
}
export interface Stencil_funcType_2 extends _Stencil_funcType_2 { constructor: { new(): Stencil_funcType_2 }; }

export interface _Stencil_funcTypeFuncType extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Stencil_funcTypeFuncType extends _Stencil_funcTypeFuncType { constructor: { new(): Stencil_funcTypeFuncType }; }

export interface _Stencil_funcTypeFuncType_2 extends BaseType {
	param?: string;
	value?: gl_func_type;
}
export interface Stencil_funcTypeFuncType_2 extends _Stencil_funcTypeFuncType_2 { constructor: { new(): Stencil_funcTypeFuncType_2 }; }

export interface _Stencil_funcTypeMaskType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_funcTypeMaskType extends _Stencil_funcTypeMaskType { constructor: { new(): Stencil_funcTypeMaskType }; }

export interface _Stencil_funcTypeMaskType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_funcTypeMaskType_2 extends _Stencil_funcTypeMaskType_2 { constructor: { new(): Stencil_funcTypeMaskType_2 }; }

export interface _Stencil_funcTypeRefType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_funcTypeRefType extends _Stencil_funcTypeRefType { constructor: { new(): Stencil_funcTypeRefType }; }

export interface _Stencil_funcTypeRefType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_funcTypeRefType_2 extends _Stencil_funcTypeRefType_2 { constructor: { new(): Stencil_funcTypeRefType_2 }; }

export interface _Stencil_mask_separateType extends BaseType {
	face: Stencil_mask_separateTypeFaceType;
	mask: Stencil_mask_separateTypeMaskType;
}
export interface Stencil_mask_separateType extends _Stencil_mask_separateType { constructor: { new(): Stencil_mask_separateType }; }

export interface _Stencil_mask_separateTypeFaceType extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Stencil_mask_separateTypeFaceType extends _Stencil_mask_separateTypeFaceType { constructor: { new(): Stencil_mask_separateTypeFaceType }; }

export interface _Stencil_mask_separateTypeMaskType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_mask_separateTypeMaskType extends _Stencil_mask_separateTypeMaskType { constructor: { new(): Stencil_mask_separateTypeMaskType }; }

export interface _Stencil_maskType extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_maskType extends _Stencil_maskType { constructor: { new(): Stencil_maskType }; }

export interface _Stencil_maskType_2 extends BaseType {
	param?: string;
	value?: number;
}
export interface Stencil_maskType_2 extends _Stencil_maskType_2 { constructor: { new(): Stencil_maskType_2 }; }

export interface _Stencil_op_separateType extends BaseType {
	face: Stencil_op_separateTypeFaceType;
	fail: Stencil_op_separateTypeFailType;
	zfail: Stencil_op_separateTypeZfailType;
	zpass: Stencil_op_separateTypeZpassType;
}
export interface Stencil_op_separateType extends _Stencil_op_separateType { constructor: { new(): Stencil_op_separateType }; }

export interface _Stencil_op_separateTypeFaceType extends BaseType {
	param?: string;
	value?: gl_face_type;
}
export interface Stencil_op_separateTypeFaceType extends _Stencil_op_separateTypeFaceType { constructor: { new(): Stencil_op_separateTypeFaceType }; }

export interface _Stencil_op_separateTypeFailType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_op_separateTypeFailType extends _Stencil_op_separateTypeFailType { constructor: { new(): Stencil_op_separateTypeFailType }; }

export interface _Stencil_op_separateTypeZfailType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_op_separateTypeZfailType extends _Stencil_op_separateTypeZfailType { constructor: { new(): Stencil_op_separateTypeZfailType }; }

export interface _Stencil_op_separateTypeZpassType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_op_separateTypeZpassType extends _Stencil_op_separateTypeZpassType { constructor: { new(): Stencil_op_separateTypeZpassType }; }

export interface _Stencil_opType extends BaseType {
	fail: Stencil_opTypeFailType;
	zfail: Stencil_opTypeZfailType;
	zpass: Stencil_opTypeZpassType;
}
export interface Stencil_opType extends _Stencil_opType { constructor: { new(): Stencil_opType }; }

export interface _Stencil_opType_2 extends BaseType {
	fail: Stencil_opTypeFailType_2;
	zfail: Stencil_opTypeZfailType_2;
	zpass: Stencil_opTypeZpassType_2;
}
export interface Stencil_opType_2 extends _Stencil_opType_2 { constructor: { new(): Stencil_opType_2 }; }

export interface _Stencil_opTypeFailType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_opTypeFailType extends _Stencil_opTypeFailType { constructor: { new(): Stencil_opTypeFailType }; }

export interface _Stencil_opTypeFailType_2 extends BaseType {
	param?: string;
	value?: gles_stencil_op_type;
}
export interface Stencil_opTypeFailType_2 extends _Stencil_opTypeFailType_2 { constructor: { new(): Stencil_opTypeFailType_2 }; }

export interface _Stencil_opTypeZfailType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_opTypeZfailType extends _Stencil_opTypeZfailType { constructor: { new(): Stencil_opTypeZfailType }; }

export interface _Stencil_opTypeZfailType_2 extends BaseType {
	param?: string;
	value?: gles_stencil_op_type;
}
export interface Stencil_opTypeZfailType_2 extends _Stencil_opTypeZfailType_2 { constructor: { new(): Stencil_opTypeZfailType_2 }; }

export interface _Stencil_opTypeZpassType extends BaseType {
	param?: string;
	value?: gl_stencil_op_type;
}
export interface Stencil_opTypeZpassType extends _Stencil_opTypeZpassType { constructor: { new(): Stencil_opTypeZpassType }; }

export interface _Stencil_opTypeZpassType_2 extends BaseType {
	param?: string;
	value?: gles_stencil_op_type;
}
export interface Stencil_opTypeZpassType_2 extends _Stencil_opTypeZpassType_2 { constructor: { new(): Stencil_opTypeZpassType_2 }; }

export interface _Stencil_test_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Stencil_test_enableType extends _Stencil_test_enableType { constructor: { new(): Stencil_test_enableType }; }

export interface _Stencil_test_enableType_2 extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Stencil_test_enableType_2 extends _Stencil_test_enableType_2 { constructor: { new(): Stencil_test_enableType_2 }; }

type _string = Primitive._string;

export interface _Tapered_capsuleType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A float value that represents the length of the line segment connecting the centers of the
	  * capping hemispheres. */
	height: number;
	/** Two float values that represent the radii of the tapered capsule at the positive (height/2)
	  * Y value.Both ends of the tapered capsule may be elliptical. */
	radius1: float2;
	/** Two float values that represent the radii of the tapered capsule at the negative (height/2)
	  * Y value.Both ends of the tapered capsule may be elliptical. */
	radius2: float2;
}
export interface Tapered_capsuleType extends _Tapered_capsuleType { constructor: { new(): Tapered_capsuleType }; }

export interface _Tapered_cylinderType extends BaseType {
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** A float value that represents the length of the cylinder along the Y axis. */
	height: number;
	/** Two float values that represent the radii of the tapered cylinder at the positive (height/2)
	  * Y value. Both ends of the tapered cylinder may be elliptical. */
	radius1: float2;
	/** Two float values that represent the radii of the tapered cylinder at the negative (height/2)
	  * Y value.Both ends of the tapered cylinder may be elliptical. */
	radius2: float2;
}
export interface Tapered_cylinderType extends _Tapered_cylinderType { constructor: { new(): Tapered_cylinderType }; }

/** The TargetableFloat type is used to represent elements which contain a single float value which can
  * be targeted for animation. */
export interface _TargetableFloat extends _float {
	/** The sid attribute is a text string value containing the sub-identifier of this element. This
	  * value must be unique within the scope of the parent element. Optional attribute. */
	sid: string;
}
export interface  TargetableFloat extends _TargetableFloat { constructor: { new(): TargetableFloat }; }
export var TargetableFloat: { new(): TargetableFloat };

/** The TargetableFloat3 type is used to represent elements which contain a float3 value which can
  * be targeted for animation. */
export type TargetableFloat3 = number[];

export interface _TechniqueType extends BaseType {
	/** The profile attribute indicates the type of profile. This is a vendor defined character
	  * string that indicates the platform or capability target for the technique. Required attribute. */
	profile: string;
}
export interface TechniqueType extends _TechniqueType { constructor: { new(): TechniqueType }; }

export interface _Texture_env_colorType extends BaseType {
	index: number;
	param?: string;
	value?: float4;
}
export interface Texture_env_colorType extends _Texture_env_colorType { constructor: { new(): Texture_env_colorType }; }

export interface _Texture_env_modeType extends BaseType {
	index: number;
	param?: string;
	value?: string;
}
export interface Texture_env_modeType extends _Texture_env_modeType { constructor: { new(): Texture_env_modeType }; }

export interface _Texture_pipeline_enableType extends BaseType {
	param?: string;
	value?: boolean;
}
export interface Texture_pipeline_enableType extends _Texture_pipeline_enableType { constructor: { new(): Texture_pipeline_enableType }; }

export interface _Texture_pipelineType extends BaseType {
	param?: string;
	value?: gles_texture_pipeline;
}
export interface Texture_pipelineType extends _Texture_pipelineType { constructor: { new(): Texture_pipelineType }; }

export interface _Texture1D_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Texture1D_enableType extends _Texture1D_enableType { constructor: { new(): Texture1D_enableType }; }

export interface _Texture1DType extends BaseType {
	index: number;
	param: string;
	value: gl_sampler1D;
}
export interface Texture1DType extends _Texture1DType { constructor: { new(): Texture1DType }; }

export interface _Texture2D_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Texture2D_enableType extends _Texture2D_enableType { constructor: { new(): Texture2D_enableType }; }

export interface _Texture2DType extends BaseType {
	index: number;
	param: string;
	value: gl_sampler2D;
}
export interface Texture2DType extends _Texture2DType { constructor: { new(): Texture2DType }; }

export interface _Texture3D_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface Texture3D_enableType extends _Texture3D_enableType { constructor: { new(): Texture3D_enableType }; }

export interface _Texture3DType extends BaseType {
	index: number;
	param: string;
	value: gl_sampler3D;
}
export interface Texture3DType extends _Texture3DType { constructor: { new(): Texture3DType }; }

export interface _TextureCUBE_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface TextureCUBE_enableType extends _TextureCUBE_enableType { constructor: { new(): TextureCUBE_enableType }; }

export interface _TextureCUBEType extends BaseType {
	index: number;
	param: string;
	value: gl_samplerCUBE;
}
export interface TextureCUBEType extends _TextureCUBEType { constructor: { new(): TextureCUBEType }; }

export interface _TextureDEPTH_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface TextureDEPTH_enableType extends _TextureDEPTH_enableType { constructor: { new(): TextureDEPTH_enableType }; }

export interface _TextureDEPTHType extends BaseType {
	index: number;
	param: string;
	value: gl_samplerDEPTH;
}
export interface TextureDEPTHType extends _TextureDEPTHType { constructor: { new(): TextureDEPTHType }; }

export interface _TextureRECT_enableType extends BaseType {
	index: number;
	param?: string;
	value?: boolean;
}
export interface TextureRECT_enableType extends _TextureRECT_enableType { constructor: { new(): TextureRECT_enableType }; }

export interface _TextureRECTType extends BaseType {
	index: number;
	param: string;
	value: gl_samplerRECT;
}
export interface TextureRECTType extends _TextureRECTType { constructor: { new(): TextureRECTType }; }

export type token = string;
type _token = Primitive._string;

export interface _TrianglesType extends BaseType {
	/** The count attribute indicates the number of triangle primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material at
	  * the time of instantiation. Optional attribute. If the material attribute is not specified then
	  * the lighting and shading results are application defined. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the
	  * offset and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts;
}
export interface TrianglesType extends _TrianglesType { constructor: { new(): TrianglesType }; }

export interface _TrifansType extends BaseType {
	/** The count attribute indicates the number of triangle fan primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material
	  * at the time of instantiation. If the material attribute is not specified then the lighting
	  * and shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the
	  * offset and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts[];
}
export interface TrifansType extends _TrifansType { constructor: { new(): TrifansType }; }

export interface _TristripsType extends BaseType {
	/** The count attribute indicates the number of triangle strip primitives. Required attribute. */
	count: number;
	/** The material attribute declares a symbol for a material. This symbol is bound to a material
	  * at the time of instantiation. If the material attribute is not specified then the lighting
	  * and shading results are application defined. Optional attribute. */
	material: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element may occur any number of times. This input is a local input with the offset
	  * and set attributes. */
	input?: InputLocalOffset[];
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p?: ListOfUInts[];
}
export interface TristripsType extends _TristripsType { constructor: { new(): TristripsType }; }

export type uint = number;
type _uint = Primitive._number;

/** An enumerated type specifying the acceptable up-axis values. */
export type UpAxisType = ("X_UP" | "Y_UP" | "Z_UP");
export interface _UpAxisType extends Primitive._string { content: UpAxisType; }

/** This type is used for URI reference which can only reference a resource declared within it's same document. */
export type URIFragmentType = string;
type _URIFragmentType = Primitive._string;

/** An enumerated type specifying the acceptable document versions. */
export type VersionType = ("1.4.0" | "1.4.1");
export interface _VersionType extends Primitive._string { content: VersionType; }

export interface _VerticesType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This
	  * value must be unique within the instance document. Required attribute. */
	id: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** The input element must occur at least one time. These inputs are local inputs. */
	input: InputLocal[];
}
export interface VerticesType extends _VerticesType { constructor: { new(): VerticesType }; }

export interface _Visual_sceneType extends BaseType {
	/** The id attribute is a text string containing the unique identifier of this element. This
	  * value must be unique within the instance document. Optional attribute. */
	id?: string;
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The asset element defines asset management information regarding its parent element. */
	asset?: AssetType;
	/** The evaluate_scene element declares information specifying a specific way to evaluate this
	  * visual_scene. There may be any number of evaluate_scene elements. */
	evaluate_scene?: Visual_sceneTypeEvaluate_sceneType[];
	/** The extra element declares additional information regarding its parent element. */
	extra?: ExtraType[];
	/** Nodes embody the hierarchical relationship of elements in the scene. */
	node: NodeType_2[];
}
export interface Visual_sceneType extends _Visual_sceneType { constructor: { new(): Visual_sceneType }; }

export interface _Visual_sceneTypeEvaluate_sceneType extends BaseType {
	/** The name attribute is the text string name of this element. Optional attribute. */
	name: string;
	/** The render element describes one effect pass to evaluate the scene.
	  * There must be at least one render element. */
	render: Visual_sceneTypeEvaluate_sceneTypeRenderType[];
}
export interface Visual_sceneTypeEvaluate_sceneType extends _Visual_sceneTypeEvaluate_sceneType { constructor: { new(): Visual_sceneTypeEvaluate_sceneType }; }

export interface _Visual_sceneTypeEvaluate_sceneTypeRenderType extends BaseType {
	/** The camera_node attribute refers to a node that contains a camera describing the viewpoint to
	  * render this compositing step from. */
	camera_node: string;
	/** The instance_effect element declares the instantiation of a COLLADA effect resource. */
	instance_effect?: Instance_effectType;
	/** The layer element specifies which layer to render in this compositing step
	  * while evaluating the scene. You may specify any number of layers. */
	layer?: string[];
}
export interface Visual_sceneTypeEvaluate_sceneTypeRenderType extends _Visual_sceneTypeEvaluate_sceneTypeRenderType { constructor: { new(): Visual_sceneTypeEvaluate_sceneTypeRenderType }; }

export interface  document extends BaseType {
	/** The accessor element declares an access pattern to one of the array elements: float_array,
	  * int_array, Name_array, bool_array, and IDREF_array. The accessor element describes access
	  * to arrays that are organized in either an interleaved or non-interleaved manner, depending
	  * on the offset and stride attributes. */
	accessor: AccessorType;
	/** The animation element categorizes the declaration of animation information. The animation
	  * hierarchy contains elements that describe the animation’s key-frame data and sampler functions,
	  * ordered in such a way to group together animations that should be executed together. */
	animation: AnimationType;
	/** The animation_clip element defines a section of the animation curves to be used together as
	  * an animation clip. */
	animation_clip: Animation_clipType;
	/** The asset element defines asset management information regarding its parent element. */
	asset: AssetType;
	/** Bind a specific material to a piece of geometry, binding varying and uniform parameters at the
	  * same time. */
	bind_material: Bind_materialType;
	/** The bool_array element declares the storage for a homogenous array of boolean values. */
	bool_array: Bool_arrayType;
	/** An axis-aligned, centered box primitive. */
	box: BoxType;
	/** The camera element declares a view into the scene hierarchy or scene graph. The camera contains
	  * elements that describe the camera’s optics and imager. */
	camera: CameraType;
	/** A capsule primitive that is centered on and aligned with the local Y axis. */
	capsule: CapsuleType;
	/** The channel element declares an output channel of an animation. */
	channel: ChannelType;
	/** The COLLADA element declares the root of the document that comprises some of the content
	  * in the COLLADA schema. */
	COLLADA: COLLADAType;
	/** The controller element categorizes the declaration of generic control information.
	  * A controller is a device or mechanism that manages and directs the operations of another object. */
	controller: ControllerType;
	/** The definition of the convex_mesh element is identical to the mesh element with the exception that
	  * instead of a complete description (source, vertices, polygons etc.), it may simply point to another
	  * geometry to derive its shape. The latter case means that the convex hull of that geometry should
	  * be computed and is indicated by the optional “convex_hull_of” attribute. */
	convex_mesh: Convex_meshType;
	/** A cylinder primitive that is centered on, and aligned with. the local Y axis. */
	cylinder: CylinderType;
	/** A self contained description of a shader effect. */
	effect: EffectType;
	ellipsoid: EllipsoidType;
	/** The extra element declares additional information regarding its parent element. */
	extra: ExtraType;
	/** The float_array element declares the storage for a homogenous array of floating point values. */
	float_array: Float_arrayType;
	/** A general container for force-fields. At the moment, it only has techniques and extra elements. */
	force_field: Force_fieldType;
	/** Geometry describes the visual shape and appearance of an object in the scene.
	  * The geometry element categorizes the declaration of geometric information. Geometry is a
	  * branch of mathematics that deals with the measurement, properties, and relationships of
	  * points, lines, angles, surfaces, and solids. */
	geometry: GeometryType;
	/** The IDREF_array element declares the storage for a homogenous array of ID reference values. */
	IDREF_array: IDREF_arrayType;
	/** The image element declares the storage for the graphical representation of an object.
	  * The image element best describes raster image data, but can conceivably handle other
	  * forms of imagery. The image elements allows for specifying an external image file with
	  * the init_from element or embed image data with the data element. */
	image: ImageType;
	/** The instance_camera element declares the instantiation of a COLLADA camera resource. */
	instance_camera: InstanceWithExtra;
	/** The instance_controller element declares the instantiation of a COLLADA controller resource. */
	instance_controller: Instance_controllerType;
	/** The instance_effect element declares the instantiation of a COLLADA effect resource. */
	instance_effect: Instance_effectType;
	/** The instance_force_field element declares the instantiation of a COLLADA force_field resource. */
	instance_force_field: InstanceWithExtra;
	/** The instance_geometry element declares the instantiation of a COLLADA geometry resource. */
	instance_geometry: Instance_geometryType;
	/** The instance_light element declares the instantiation of a COLLADA light resource. */
	instance_light: InstanceWithExtra;
	/** The instance_material element declares the instantiation of a COLLADA material resource. */
	instance_material: Instance_materialType;
	/** The instance_node element declares the instantiation of a COLLADA node resource. */
	instance_node: InstanceWithExtra;
	/** The instance_physics_material element declares the instantiation of a COLLADA physics_material
	  * resource. */
	instance_physics_material: InstanceWithExtra;
	/** This element allows instancing physics model within another physics model, or in a physics scene. */
	instance_physics_model: Instance_physics_modelType;
	/** This element allows instancing a rigid_body within an instance_physics_model. */
	instance_rigid_body: Instance_rigid_bodyType;
	/** This element allows instancing a rigid_constraint within an instance_physics_model. */
	instance_rigid_constraint: Instance_rigid_constraintType;
	/** The int_array element declares the storage for a homogenous array of integer values. */
	int_array: Int_arrayType;
	/** The library_animation_clips element declares a module of animation_clip elements. */
	library_animation_clips: Library_animation_clipsType;
	/** The library_animations element declares a module of animation elements. */
	library_animations: Library_animationsType;
	/** The library_cameras element declares a module of camera elements. */
	library_cameras: Library_camerasType;
	/** The library_controllers element declares a module of controller elements. */
	library_controllers: Library_controllersType;
	/** The library_effects element declares a module of effect elements. */
	library_effects: Library_effectsType;
	/** The library_force_fields element declares a module of force_field elements. */
	library_force_fields: Library_force_fieldsType;
	/** The library_geometries element declares a module of geometry elements. */
	library_geometries: Library_geometriesType;
	/** The library_images element declares a module of image elements. */
	library_images: Library_imagesType;
	/** The library_lights element declares a module of light elements. */
	library_lights: Library_lightsType;
	/** The library_materials element declares a module of material elements. */
	library_materials: Library_materialsType;
	/** The library_nodes element declares a module of node elements. */
	library_nodes: Library_nodesType;
	/** The library_physics_materials element declares a module of physics_material elements. */
	library_physics_materials: Library_physics_materialsType;
	/** The library_physics_models element declares a module of physics_model elements. */
	library_physics_models: Library_physics_modelsType;
	/** The library_physics_scenes element declares a module of physics_scene elements. */
	library_physics_scenes: Library_physics_scenesType;
	/** The library_visual_scenes element declares a module of visual_scene elements. */
	library_visual_scenes: Library_visual_scenesType;
	/** The light element declares a light source that illuminates the scene.
	  * Light sources have many different properties and radiate light in many different patterns and
	  * frequencies. */
	light: LightType;
	/** The lines element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into individual lines. Each line described by the mesh has two vertices.
	  * The first line is formed from first and second vertices. The second line is formed from the
	  * third and fourth vertices and so on. */
	lines: LinesType;
	/** The linestrips element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into connected line-strips. Each line-strip described by the mesh
	  * has an arbitrary number of vertices. Each line segment within the line-strip is formed from the
	  * current vertex and the preceding vertex. */
	linestrips: LinestripsType;
	/** The lookat element contains a position and orientation transformation suitable for aiming a camera.
	  * The lookat element contains three mathematical vectors within it that describe:
	  * 1.	The position of the object;
	  * 2.	The position of the interest point;
	  * 3.	The direction that points up. */
	lookat: LookatType;
	/** Materials describe the visual appearance of a geometric object. */
	material: MaterialType;
	/** Matrix transformations embody mathematical changes to points within a coordinate systems or the
	  * coordinate system itself. The matrix element contains a 4-by-4 matrix of floating-point values. */
	matrix: MatrixType;
	/** The mesh element contains vertex and primitive information sufficient to describe basic geometric meshes. */
	mesh: MeshType;
	/** The morph element describes the data required to blend between sets of static meshes. Each
	  * possible mesh that can be blended (a morph target) must be specified. */
	morph: MorphType;
	/** The Name_array element declares the storage for a homogenous array of Name string values. */
	Name_array: Name_arrayType;
	/** Nodes embody the hierarchical relationship of elements in the scene. */
	node: NodeType_2;
	/** The p element represents primitive data for the primitive types (lines, linestrips, polygons,
	  * polylist, triangles, trifans, tristrips). The p element contains indices that reference into
	  * the parent's source elements referenced by the input elements. */
	p: ListOfUInts;
	/** The param element declares parametric information regarding its parent element. */
	param: ParamType;
	/** This element defines the physical properties of an object. It contains a technique/profile with
	  * parameters. The COMMON profile defines the built-in names, such as static_friction. */
	physics_material: Physics_materialType;
	/** This element allows for building complex combinations of rigid-bodies and constraints that
	  * may be instantiated multiple times. */
	physics_model: Physics_modelType;
	physics_scene: Physics_sceneType;
	/** An infinite plane primitive. */
	plane: PlaneType;
	/** The polygons element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described can contain
	  * arbitrary numbers of vertices. These polygons may be self intersecting and may also contain holes. */
	polygons: PolygonsType;
	/** The polylist element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual polygons. The polygons described in polylist can
	  * contain arbitrary numbers of vertices. Unlike the polygons element, the polylist element cannot
	  * contain polygons with holes. */
	polylist: PolylistType;
	/** Opens a block of CG platform-specific data types and technique declarations. */
	profile_CG: Profile_CGType;
	/** Opens a block of COMMON platform-specific data types and technique declarations. */
	profile_COMMON: Profile_COMMONType;
	/** Opens a block of GLES platform-specific data types and technique declarations. */
	profile_GLES: Profile_GLESType;
	/** Opens a block of GLSL platform-specific data types and technique declarations. */
	profile_GLSL: Profile_GLSLType;
	/** This element allows for describing simulated bodies that do not deform. These bodies may or may
	  * not be connected by constraints (hinge, ball-joint etc.).  Rigid-bodies, constraints etc. are
	  * encapsulated in physics_model elements to allow for instantiating complex models. */
	rigid_body: Rigid_bodyType;
	/** This element allows for connecting components, such as rigid_body into complex physics models
	  * with moveable parts. */
	rigid_constraint: Rigid_constraintType;
	/** The rotate element contains an angle and a mathematical vector that represents the axis of rotation. */
	rotate: RotateType;
	/** The sampler element declares an N-dimensional function used for animation. Animation function curves
	  * are represented by 1-D sampler elements in COLLADA. The sampler defines sampling points and how to
	  * interpolate between them. */
	sampler: SamplerType;
	/** The scale element contains a mathematical vector that represents the relative proportions of the
	  * X, Y and Z axes of a coordinated system. */
	scale: TargetableFloat3;
	/** The skew element contains an angle and two mathematical vectors that represent the axis of
	  * rotation and the axis of translation. */
	skew: SkewType;
	/** The skin element contains vertex and primitive information sufficient to describe blend-weight skinning. */
	skin: SkinType;
	/** The source element declares a data repository that provides values according to the semantics of an
	  * input element that refers to it. */
	source: SourceType;
	/** A centered sphere primitive. */
	sphere: SphereType;
	/** The spline element contains control vertex information sufficient to describe basic splines. */
	spline: SplineType;
	/** A tapered capsule primitive that is centered on, and aligned with, the local Y axis. */
	tapered_capsule: Tapered_capsuleType;
	/** A tapered cylinder primitive that is centered on and aligned with the local Y axis. */
	tapered_cylinder: Tapered_cylinderType;
	/** The technique element declares the information used to process some portion of the content. Each
	  * technique conforms to an associated profile. Techniques generally act as a “switch”. If more than
	  * one is present for a particular portion of content, on import, one or the other is picked, but
	  * usually not both. Selection should be based on which profile the importing application can support.
	  * Techniques contain application data and programs, making them assets that can be managed as a unit. */
	technique: TechniqueType;
	/** The translate element contains a mathematical vector that represents the distance along the
	  * X, Y and Z-axes. */
	translate: TargetableFloat3;
	/** The triangles element provides the information needed to bind vertex attributes together and
	  * then organize those vertices into individual triangles.	Each triangle described by the mesh has
	  * three vertices. The first triangle is formed from the first, second, and third vertices. The
	  * second triangle is formed from the fourth, fifth, and sixth vertices, and so on. */
	triangles: TrianglesType;
	/** The trifans element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the first and the previous vertices. */
	trifans: TrifansType;
	/** The tristrips element provides the information needed to bind vertex attributes together and then
	  * organize those vertices into connected triangles. Each triangle described by the mesh has three
	  * vertices. The first triangle is formed from first, second, and third vertices. Each subsequent
	  * triangle is formed from the current vertex, reusing the previous two vertices. */
	tristrips: TristripsType;
	/** The vertices element declares the attributes and identity of mesh-vertices. The vertices element
	  * describes mesh-vertices in a mesh geometry. The mesh-vertices represent the position (identity)
	  * of the vertices comprising the mesh and other vertex attributes that are invariant to tessellation. */
	vertices: VerticesType;
	/** The visual_scene element declares the base of the visual_scene hierarchy or scene graph. The
	  * scene contains elements that comprise much of the visual and transformational information
	  * content as created by the authoring tools. */
	visual_scene: Visual_sceneType;
}
export var document: document;
