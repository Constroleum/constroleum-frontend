export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<SiteSiteMetadataAuthor>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Int'];
  height: Scalars['Int'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes?: Maybe<Scalars['String']>;
};

export type DatoCmsFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
};

export type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. (https://docs.imgix.com/apis/url/blending/blend-color) */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  blendH?: InputMaybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  blendW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: InputMaybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: InputMaybe<Scalars['Int']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: InputMaybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: InputMaybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  expires?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  faces?: InputMaybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. (undefined) */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. (undefined) */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: InputMaybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: InputMaybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. (undefined) */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  markBase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  markFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  markH?: InputMaybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. (https://docs.imgix.com/apis/url/watermark/mark-rot) */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. (https://docs.imgix.com/apis/url/watermark/mark-tile) */
  markTile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  markW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  markX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  markY?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  minH?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  minW?: InputMaybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  orient?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf/page) */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. (https://docs.imgix.com/apis/url/pdf/pdf-annotation) */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. (https://docs.imgix.com/apis/url/fill/transparency) */
  transparency?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txt-align) */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-lead) */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  txtLig?: InputMaybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad) */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-track) */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. (https://docs.imgix.com/apis/url/text/txt-x) */
  txtX?: InputMaybe<Scalars['Int']>;
  /** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. (https://docs.imgix.com/apis/url/text/txt-y) */
  txtY?: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: InputMaybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: InputMaybe<Scalars['String']>;
};

export type DatoCmsColorField = {
  red?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  alpha?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
};

export type DatoCmsFileField = {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['JSON']>;
  focalPoint?: Maybe<DatoCmsFocalPoint>;
};


export type DatoCmsFileFieldUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsFileFieldFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldSizesArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldResolutionsArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
};

export type DatoImagePlaceholder =
  | 'NONE'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED';

export type DatoCmsFocalPoint = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type DatoCmsLatLonField = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsSeoField = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
};

export type DatoCmsSeoMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsVideoField = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type DatoCmsTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjects = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsProject>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContent = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueNode?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServices = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsService>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsHomePage = Node & {
  aboutUsTitle?: Maybe<Scalars['String']>;
  _allAboutUsTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitle>>>;
  logo?: Maybe<DatoCmsFileField>;
  projects?: Maybe<Array<Maybe<DatoCmsProject>>>;
  _allProjectsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageProjects>>>;
  seo?: Maybe<DatoCmsSeoField>;
  _allSeoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSeo>>>;
  servicesSectionTitle?: Maybe<Scalars['String']>;
  _allServicesSectionTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitle>>>;
  aboutUsTextContent?: Maybe<Scalars['String']>;
  aboutUsTextContentNode?: Maybe<DatoCmsTextNode>;
  _allAboutUsTextContentLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContent>>>;
  backgroundImage?: Maybe<DatoCmsFileField>;
  seeAllProjectsButtonTitle?: Maybe<Scalars['String']>;
  _allSeeAllProjectsButtonTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitle>>>;
  services?: Maybe<Array<Maybe<DatoCmsService>>>;
  _allServicesLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageServices>>>;
  siteUnderConstruction?: Maybe<Scalars['Boolean']>;
  aboutBackgroundImage?: Maybe<DatoCmsFileField>;
  seeAllServicesButtonTitle?: Maybe<Scalars['String']>;
  _allSeeAllServicesButtonTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitle>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsHeaderHomeButtonName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderServicesButtonName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContactButtonName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsHeader = Node & {
  homeButtonName?: Maybe<Scalars['String']>;
  _allHomeButtonNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderHomeButtonName>>>;
  aboutUsButtonName?: Maybe<Scalars['String']>;
  _allAboutUsButtonNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonName>>>;
  projectsButtonName?: Maybe<Scalars['String']>;
  _allProjectsButtonNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonName>>>;
  servicesButtonName?: Maybe<Scalars['String']>;
  _allServicesButtonNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderServicesButtonName>>>;
  contactButtonName?: Maybe<Scalars['String']>;
  _allContactButtonNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderContactButtonName>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsService = Node & {
  serviceTitle?: Maybe<Scalars['String']>;
  serviceDescription?: Maybe<Scalars['String']>;
  serviceDescriptionNode?: Maybe<DatoCmsTextNode>;
  serviceIcon?: Maybe<DatoCmsFileField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsProject = Node & {
  projectTitle?: Maybe<Scalars['String']>;
  projectImage?: Maybe<DatoCmsFileField>;
  slug?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageSeo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsList = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsProjectPage>>>;
};

export type DatoCmsAllProjectsPage = Node & {
  seo?: Maybe<DatoCmsSeoField>;
  _allSeoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageSeo>>>;
  pageTitle?: Maybe<Scalars['String']>;
  _allPageTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitle>>>;
  projectsList?: Maybe<Array<Maybe<DatoCmsProjectPage>>>;
  _allProjectsListLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsList>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSeo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSlug = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageDescription = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueNode?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsProjectPage = Node & {
  imagesCollection?: Maybe<Array<Maybe<DatoCmsFileField>>>;
  seo?: Maybe<DatoCmsSeoField>;
  _allSeoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsProjectPageSeo>>>;
  slug?: Maybe<Scalars['String']>;
  _allSlugLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsProjectPageSlug>>>;
  title?: Maybe<Scalars['String']>;
  _allTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsProjectPageTitle>>>;
  description?: Maybe<Scalars['String']>;
  descriptionNode?: Maybe<DatoCmsTextNode>;
  _allDescriptionLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsProjectPageDescription>>>;
  mainImage?: Maybe<DatoCmsFileField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlug = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlug = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlug = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsSlugsConfiguration = Node & {
  servicesPageSlug?: Maybe<Scalars['String']>;
  _allServicesPageSlugLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlug>>>;
  servicesPageSlugReference?: Maybe<Scalars['String']>;
  projectsPageSlug?: Maybe<Scalars['String']>;
  _allProjectsPageSlugLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlug>>>;
  projectsPageSlugReference?: Maybe<Scalars['String']>;
  contactPageSlug?: Maybe<Scalars['String']>;
  _allContactPageSlugLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlug>>>;
  contactPageSlugReference?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageMainServices = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsService>>>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageSeo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServices = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsService>>>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsServicesPage = Node & {
  constructionIndustryServicesTitle?: Maybe<Scalars['String']>;
  _allConstructionIndustryServicesTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitle>>>;
  mainServices?: Maybe<Array<Maybe<DatoCmsService>>>;
  _allMainServicesLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsServicesPageMainServices>>>;
  seo?: Maybe<DatoCmsSeoField>;
  _allSeoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsServicesPageSeo>>>;
  constructionIndustryServices?: Maybe<Array<Maybe<DatoCmsService>>>;
  _allConstructionIndustryServicesLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServices>>>;
  servicesPageTitle?: Maybe<Scalars['String']>;
  _allServicesPageTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitle>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsContactPageSeo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsAllLocalesForDatoCmsContactPagePageTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCompanyName = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCallUsTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsContactPage = Node & {
  seo?: Maybe<DatoCmsSeoField>;
  _allSeoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsContactPageSeo>>>;
  backgroundImage?: Maybe<DatoCmsFileField>;
  pageTitle?: Maybe<Scalars['String']>;
  _allPageTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsContactPagePageTitle>>>;
  companyName?: Maybe<Scalars['String']>;
  _allCompanyNameLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsContactPageCompanyName>>>;
  ourEmailTitle?: Maybe<Scalars['String']>;
  _allOurEmailTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitle>>>;
  email?: Maybe<Scalars['String']>;
  callUsTitle?: Maybe<Scalars['String']>;
  _allCallUsTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsContactPageCallUsTitle>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  secondPhoneNumber?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionText = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueNode?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsSiteUnderConstruction = Node & {
  siteUnderConstructionText?: Maybe<Scalars['String']>;
  siteUnderConstructionTextNode?: Maybe<DatoCmsTextNode>;
  _allSiteUnderConstructionTextLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionText>>>;
  backgroundImage?: Maybe<DatoCmsFileField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAsset = Node & {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DatoCmsAssetUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsAssetFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsAssetSizesArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsAssetFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetResolutionsArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
};

export type DatoCmsAssetVideoThumbnailFormat =
  | 'jpg'
  | 'png'
  | 'gif';

export type DatoCmsAssetVideoMp4ResolutionQuality =
  | 'low'
  | 'medium'
  | 'high';

export type DatoCmsAssetVideo = {
  muxPlaybackId?: Maybe<Scalars['String']>;
  frameRate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  mp4Url?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: InputMaybe<DatoCmsAssetVideoThumbnailFormat>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  res?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

export type DatoCmsSite = Node & {
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  domain?: Maybe<Scalars['String']>;
  internalDomain?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  globalSeo?: Maybe<DatoCmsGlobalSeo>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFaviconMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsGlobalSeo = {
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsField = Node & {
  label?: Maybe<Scalars['String']>;
  fieldType?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  localized?: Maybe<Scalars['Boolean']>;
  validators?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  appeareance?: Maybe<Scalars['JSON']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsModel = Node & {
  name?: Maybe<Scalars['String']>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  tree?: Maybe<Scalars['Boolean']>;
  modularBlock?: Maybe<Scalars['Boolean']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  originalId?: Maybe<Scalars['String']>;
  fields?: Maybe<DatoCmsFaviconMetaTags>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  datoCmsSeoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  datoCmsHomePage?: Maybe<DatoCmsHomePage>;
  allDatoCmsHomePage: DatoCmsHomePageConnection;
  datoCmsHeader?: Maybe<DatoCmsHeader>;
  allDatoCmsHeader: DatoCmsHeaderConnection;
  datoCmsService?: Maybe<DatoCmsService>;
  allDatoCmsService: DatoCmsServiceConnection;
  datoCmsProject?: Maybe<DatoCmsProject>;
  allDatoCmsProject: DatoCmsProjectConnection;
  datoCmsAllProjectsPage?: Maybe<DatoCmsAllProjectsPage>;
  allDatoCmsAllProjectsPage: DatoCmsAllProjectsPageConnection;
  datoCmsProjectPage?: Maybe<DatoCmsProjectPage>;
  allDatoCmsProjectPage: DatoCmsProjectPageConnection;
  datoCmsSlugsConfiguration?: Maybe<DatoCmsSlugsConfiguration>;
  allDatoCmsSlugsConfiguration: DatoCmsSlugsConfigurationConnection;
  datoCmsServicesPage?: Maybe<DatoCmsServicesPage>;
  allDatoCmsServicesPage: DatoCmsServicesPageConnection;
  datoCmsContactPage?: Maybe<DatoCmsContactPage>;
  allDatoCmsContactPage: DatoCmsContactPageConnection;
  datoCmsSiteUnderConstruction?: Maybe<DatoCmsSiteUnderConstruction>;
  allDatoCmsSiteUnderConstruction: DatoCmsSiteUnderConstructionConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  allDatoCmsAsset: DatoCmsAssetConnection;
  datoCmsSite?: Maybe<DatoCmsSite>;
  allDatoCmsSite: DatoCmsSiteConnection;
  datoCmsFaviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  datoCmsField?: Maybe<DatoCmsField>;
  allDatoCmsField: DatoCmsFieldConnection;
  datoCmsModel?: Maybe<DatoCmsModel>;
  allDatoCmsModel: DatoCmsModelConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSeoMetaTagsArgs = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  sort?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  filter?: InputMaybe<DatoCmsTextNodeFilterInput>;
  sort?: InputMaybe<DatoCmsTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsHomePageArgs = {
  aboutUsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allAboutUsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitleFilterListInput>;
  logo?: InputMaybe<DatoCmsFileFieldFilterInput>;
  projects?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeoFilterListInput>;
  servicesSectionTitle?: InputMaybe<StringQueryOperatorInput>;
  _allServicesSectionTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitleFilterListInput>;
  aboutUsTextContent?: InputMaybe<StringQueryOperatorInput>;
  aboutUsTextContentNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allAboutUsTextContentLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContentFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  seeAllProjectsButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeAllProjectsButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitleFilterListInput>;
  services?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesFilterListInput>;
  siteUnderConstruction?: InputMaybe<BooleanQueryOperatorInput>;
  aboutBackgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  seeAllServicesButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeAllServicesButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsHomePageArgs = {
  filter?: InputMaybe<DatoCmsHomePageFilterInput>;
  sort?: InputMaybe<DatoCmsHomePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsHeaderArgs = {
  homeButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allHomeButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderHomeButtonNameFilterListInput>;
  aboutUsButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allAboutUsButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonNameFilterListInput>;
  projectsButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonNameFilterListInput>;
  servicesButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allServicesButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderServicesButtonNameFilterListInput>;
  contactButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allContactButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactButtonNameFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsHeaderArgs = {
  filter?: InputMaybe<DatoCmsHeaderFilterInput>;
  sort?: InputMaybe<DatoCmsHeaderSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsServiceArgs = {
  serviceTitle?: InputMaybe<StringQueryOperatorInput>;
  serviceDescription?: InputMaybe<StringQueryOperatorInput>;
  serviceDescriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  serviceIcon?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsServiceArgs = {
  filter?: InputMaybe<DatoCmsServiceFilterInput>;
  sort?: InputMaybe<DatoCmsServiceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsProjectArgs = {
  projectTitle?: InputMaybe<StringQueryOperatorInput>;
  projectImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsProjectArgs = {
  filter?: InputMaybe<DatoCmsProjectFilterInput>;
  sort?: InputMaybe<DatoCmsProjectSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsAllProjectsPageArgs = {
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageSeoFilterListInput>;
  pageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitleFilterListInput>;
  projectsList?: InputMaybe<DatoCmsProjectPageFilterListInput>;
  _allProjectsListLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsListFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAllProjectsPageArgs = {
  filter?: InputMaybe<DatoCmsAllProjectsPageFilterInput>;
  sort?: InputMaybe<DatoCmsAllProjectsPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsProjectPageArgs = {
  imagesCollection?: InputMaybe<DatoCmsFileFieldFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSeoFilterListInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  _allSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSlugFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  _allTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageTitleFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allDescriptionLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageDescriptionFilterListInput>;
  mainImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsProjectPageArgs = {
  filter?: InputMaybe<DatoCmsProjectPageFilterInput>;
  sort?: InputMaybe<DatoCmsProjectPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSlugsConfigurationArgs = {
  servicesPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allServicesPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlugFilterListInput>;
  servicesPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  projectsPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlugFilterListInput>;
  projectsPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  contactPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allContactPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlugFilterListInput>;
  contactPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSlugsConfigurationArgs = {
  filter?: InputMaybe<DatoCmsSlugsConfigurationFilterInput>;
  sort?: InputMaybe<DatoCmsSlugsConfigurationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsServicesPageArgs = {
  constructionIndustryServicesTitle?: InputMaybe<StringQueryOperatorInput>;
  _allConstructionIndustryServicesTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitleFilterListInput>;
  mainServices?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allMainServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageMainServicesFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageSeoFilterListInput>;
  constructionIndustryServices?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allConstructionIndustryServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesFilterListInput>;
  servicesPageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allServicesPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsServicesPageArgs = {
  filter?: InputMaybe<DatoCmsServicesPageFilterInput>;
  sort?: InputMaybe<DatoCmsServicesPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsContactPageArgs = {
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageSeoFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  pageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPagePageTitleFilterListInput>;
  companyName?: InputMaybe<StringQueryOperatorInput>;
  _allCompanyNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCompanyNameFilterListInput>;
  ourEmailTitle?: InputMaybe<StringQueryOperatorInput>;
  _allOurEmailTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitleFilterListInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  callUsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allCallUsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCallUsTitleFilterListInput>;
  phoneNumber?: InputMaybe<StringQueryOperatorInput>;
  secondPhoneNumber?: InputMaybe<StringQueryOperatorInput>;
  facebookUrl?: InputMaybe<StringQueryOperatorInput>;
  instagramUrl?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsContactPageArgs = {
  filter?: InputMaybe<DatoCmsContactPageFilterInput>;
  sort?: InputMaybe<DatoCmsContactPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSiteUnderConstructionArgs = {
  siteUnderConstructionText?: InputMaybe<StringQueryOperatorInput>;
  siteUnderConstructionTextNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allSiteUnderConstructionTextLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionTextFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSiteUnderConstructionArgs = {
  filter?: InputMaybe<DatoCmsSiteUnderConstructionFilterInput>;
  sort?: InputMaybe<DatoCmsSiteUnderConstructionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsAssetArgs = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAssetArgs = {
  filter?: InputMaybe<DatoCmsAssetFilterInput>;
  sort?: InputMaybe<DatoCmsAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSiteArgs = {
  name?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSiteArgs = {
  filter?: InputMaybe<DatoCmsSiteFilterInput>;
  sort?: InputMaybe<DatoCmsSiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsFaviconMetaTagsArgs = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort?: InputMaybe<DatoCmsFaviconMetaTagsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsFieldArgs = {
  label?: InputMaybe<StringQueryOperatorInput>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFieldArgs = {
  filter?: InputMaybe<DatoCmsFieldFilterInput>;
  sort?: InputMaybe<DatoCmsFieldSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsModelArgs = {
  name?: InputMaybe<StringQueryOperatorInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsModelArgs = {
  filter?: InputMaybe<DatoCmsModelFilterInput>;
  sort?: InputMaybe<DatoCmsModelSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___internal___contentFilePath'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___internal___contentFilePath'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___internal___contentFilePath'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___internal___contentFilePath'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___internal___contentFilePath'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<SiteSiteMetadataAuthorFilterInput>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author___name'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsSeoMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
};


export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionMaxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionMinArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionSumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  next?: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous?: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsSeoMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsSeoMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSeoMetaTagsGroupConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionMaxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionMinArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionSumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionMinArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionSumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsTextNodeGroupConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionMinArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionSumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFileFieldFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  alt?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  customData?: InputMaybe<JsonQueryOperatorInput>;
  focalPoint?: InputMaybe<DatoCmsFocalPointFilterInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsColorFieldFilterInput = {
  red?: InputMaybe<IntQueryOperatorInput>;
  green?: InputMaybe<IntQueryOperatorInput>;
  blue?: InputMaybe<IntQueryOperatorInput>;
  alpha?: InputMaybe<IntQueryOperatorInput>;
  rgb?: InputMaybe<StringQueryOperatorInput>;
  hex?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAssetVideoFilterInput = {
  muxPlaybackId?: InputMaybe<StringQueryOperatorInput>;
  frameRate?: InputMaybe<IntQueryOperatorInput>;
  duration?: InputMaybe<IntQueryOperatorInput>;
  streamingUrl?: InputMaybe<StringQueryOperatorInput>;
  thumbnailUrl?: InputMaybe<StringQueryOperatorInput>;
  mp4Url?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFocalPointFilterInput = {
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
};

export type DatoCmsProjectFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsProjectFilterInput>;
};

export type DatoCmsProjectFilterInput = {
  projectTitle?: InputMaybe<StringQueryOperatorInput>;
  projectImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  firstPublishedAt?: InputMaybe<DateQueryOperatorInput>;
  isValid?: InputMaybe<BooleanQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsModelFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsProjectFilterListInput>;
};

export type DatoCmsSeoFieldFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  twitterCard?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<DatoCmsAssetFilterInput>;
};

export type DatoCmsAssetFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContentFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContentFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContentFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsServiceFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsServiceFilterInput>;
};

export type DatoCmsServiceFilterInput = {
  serviceTitle?: InputMaybe<StringQueryOperatorInput>;
  serviceDescription?: InputMaybe<StringQueryOperatorInput>;
  serviceDescriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  serviceIcon?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServicesFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageServicesFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsServiceFilterListInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsHomePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomePageEdge>;
  nodes: Array<DatoCmsHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHomePageGroupConnection>;
};


export type DatoCmsHomePageConnectionDistinctArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionMaxArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionMinArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionSumArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHomePageFieldsEnum;
};

export type DatoCmsHomePageEdge = {
  next?: Maybe<DatoCmsHomePage>;
  node: DatoCmsHomePage;
  previous?: Maybe<DatoCmsHomePage>;
};

export type DatoCmsHomePageFieldsEnum =
  | 'aboutUsTitle'
  | '_allAboutUsTitleLocales'
  | '_allAboutUsTitleLocales___locale'
  | '_allAboutUsTitleLocales___value'
  | 'logo___size'
  | 'logo___width'
  | 'logo___height'
  | 'logo___path'
  | 'logo___format'
  | 'logo___isImage'
  | 'logo___notes'
  | 'logo___author'
  | 'logo___copyright'
  | 'logo___tags'
  | 'logo___smartTags'
  | 'logo___filename'
  | 'logo___basename'
  | 'logo___exifInfo'
  | 'logo___mimeType'
  | 'logo___colors'
  | 'logo___colors___red'
  | 'logo___colors___green'
  | 'logo___colors___blue'
  | 'logo___colors___alpha'
  | 'logo___colors___rgb'
  | 'logo___colors___hex'
  | 'logo___blurhash'
  | 'logo___originalId'
  | 'logo___url'
  | 'logo___createdAt'
  | 'logo___video___muxPlaybackId'
  | 'logo___video___frameRate'
  | 'logo___video___duration'
  | 'logo___video___streamingUrl'
  | 'logo___video___thumbnailUrl'
  | 'logo___video___mp4Url'
  | 'logo___fluid___base64'
  | 'logo___fluid___tracedSVG'
  | 'logo___fluid___aspectRatio'
  | 'logo___fluid___width'
  | 'logo___fluid___height'
  | 'logo___fluid___src'
  | 'logo___fluid___srcSet'
  | 'logo___fluid___sizes'
  | 'logo___sizes___base64'
  | 'logo___sizes___tracedSVG'
  | 'logo___sizes___aspectRatio'
  | 'logo___sizes___width'
  | 'logo___sizes___height'
  | 'logo___sizes___src'
  | 'logo___sizes___srcSet'
  | 'logo___sizes___sizes'
  | 'logo___fixed___base64'
  | 'logo___fixed___tracedSVG'
  | 'logo___fixed___aspectRatio'
  | 'logo___fixed___width'
  | 'logo___fixed___height'
  | 'logo___fixed___src'
  | 'logo___fixed___srcSet'
  | 'logo___fixed___sizes'
  | 'logo___resolutions___base64'
  | 'logo___resolutions___tracedSVG'
  | 'logo___resolutions___aspectRatio'
  | 'logo___resolutions___width'
  | 'logo___resolutions___height'
  | 'logo___resolutions___src'
  | 'logo___resolutions___srcSet'
  | 'logo___resolutions___sizes'
  | 'logo___gatsbyImageData'
  | 'logo___alt'
  | 'logo___title'
  | 'logo___customData'
  | 'logo___focalPoint___x'
  | 'logo___focalPoint___y'
  | 'projects'
  | 'projects___projectTitle'
  | 'projects___projectImage___size'
  | 'projects___projectImage___width'
  | 'projects___projectImage___height'
  | 'projects___projectImage___path'
  | 'projects___projectImage___format'
  | 'projects___projectImage___isImage'
  | 'projects___projectImage___notes'
  | 'projects___projectImage___author'
  | 'projects___projectImage___copyright'
  | 'projects___projectImage___tags'
  | 'projects___projectImage___smartTags'
  | 'projects___projectImage___filename'
  | 'projects___projectImage___basename'
  | 'projects___projectImage___exifInfo'
  | 'projects___projectImage___mimeType'
  | 'projects___projectImage___colors'
  | 'projects___projectImage___colors___red'
  | 'projects___projectImage___colors___green'
  | 'projects___projectImage___colors___blue'
  | 'projects___projectImage___colors___alpha'
  | 'projects___projectImage___colors___rgb'
  | 'projects___projectImage___colors___hex'
  | 'projects___projectImage___blurhash'
  | 'projects___projectImage___originalId'
  | 'projects___projectImage___url'
  | 'projects___projectImage___createdAt'
  | 'projects___projectImage___video___muxPlaybackId'
  | 'projects___projectImage___video___frameRate'
  | 'projects___projectImage___video___duration'
  | 'projects___projectImage___video___streamingUrl'
  | 'projects___projectImage___video___thumbnailUrl'
  | 'projects___projectImage___video___mp4Url'
  | 'projects___projectImage___fluid___base64'
  | 'projects___projectImage___fluid___tracedSVG'
  | 'projects___projectImage___fluid___aspectRatio'
  | 'projects___projectImage___fluid___width'
  | 'projects___projectImage___fluid___height'
  | 'projects___projectImage___fluid___src'
  | 'projects___projectImage___fluid___srcSet'
  | 'projects___projectImage___fluid___sizes'
  | 'projects___projectImage___sizes___base64'
  | 'projects___projectImage___sizes___tracedSVG'
  | 'projects___projectImage___sizes___aspectRatio'
  | 'projects___projectImage___sizes___width'
  | 'projects___projectImage___sizes___height'
  | 'projects___projectImage___sizes___src'
  | 'projects___projectImage___sizes___srcSet'
  | 'projects___projectImage___sizes___sizes'
  | 'projects___projectImage___fixed___base64'
  | 'projects___projectImage___fixed___tracedSVG'
  | 'projects___projectImage___fixed___aspectRatio'
  | 'projects___projectImage___fixed___width'
  | 'projects___projectImage___fixed___height'
  | 'projects___projectImage___fixed___src'
  | 'projects___projectImage___fixed___srcSet'
  | 'projects___projectImage___fixed___sizes'
  | 'projects___projectImage___resolutions___base64'
  | 'projects___projectImage___resolutions___tracedSVG'
  | 'projects___projectImage___resolutions___aspectRatio'
  | 'projects___projectImage___resolutions___width'
  | 'projects___projectImage___resolutions___height'
  | 'projects___projectImage___resolutions___src'
  | 'projects___projectImage___resolutions___srcSet'
  | 'projects___projectImage___resolutions___sizes'
  | 'projects___projectImage___gatsbyImageData'
  | 'projects___projectImage___alt'
  | 'projects___projectImage___title'
  | 'projects___projectImage___customData'
  | 'projects___projectImage___focalPoint___x'
  | 'projects___projectImage___focalPoint___y'
  | 'projects___slug'
  | 'projects___meta___createdAt'
  | 'projects___meta___updatedAt'
  | 'projects___meta___publishedAt'
  | 'projects___meta___firstPublishedAt'
  | 'projects___meta___isValid'
  | 'projects___meta___status'
  | 'projects___originalId'
  | 'projects___locale'
  | 'projects___seoMetaTags___tags'
  | 'projects___seoMetaTags___id'
  | 'projects___seoMetaTags___parent___id'
  | 'projects___seoMetaTags___parent___children'
  | 'projects___seoMetaTags___children'
  | 'projects___seoMetaTags___children___id'
  | 'projects___seoMetaTags___children___children'
  | 'projects___seoMetaTags___internal___content'
  | 'projects___seoMetaTags___internal___contentDigest'
  | 'projects___seoMetaTags___internal___description'
  | 'projects___seoMetaTags___internal___fieldOwners'
  | 'projects___seoMetaTags___internal___ignoreType'
  | 'projects___seoMetaTags___internal___mediaType'
  | 'projects___seoMetaTags___internal___owner'
  | 'projects___seoMetaTags___internal___type'
  | 'projects___seoMetaTags___internal___contentFilePath'
  | 'projects___model___name'
  | 'projects___model___singleton'
  | 'projects___model___sortable'
  | 'projects___model___apiKey'
  | 'projects___model___orderingDirection'
  | 'projects___model___tree'
  | 'projects___model___modularBlock'
  | 'projects___model___draftModeActive'
  | 'projects___model___allLocalesRequired'
  | 'projects___model___collectionAppeareance'
  | 'projects___model___hasSingletonItem'
  | 'projects___model___originalId'
  | 'projects___model___fields___tags'
  | 'projects___model___fields___id'
  | 'projects___model___fields___children'
  | 'projects___model___id'
  | 'projects___model___parent___id'
  | 'projects___model___parent___children'
  | 'projects___model___children'
  | 'projects___model___children___id'
  | 'projects___model___children___children'
  | 'projects___model___internal___content'
  | 'projects___model___internal___contentDigest'
  | 'projects___model___internal___description'
  | 'projects___model___internal___fieldOwners'
  | 'projects___model___internal___ignoreType'
  | 'projects___model___internal___mediaType'
  | 'projects___model___internal___owner'
  | 'projects___model___internal___type'
  | 'projects___model___internal___contentFilePath'
  | 'projects___id'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___parent___internal___contentFilePath'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___children___internal___contentFilePath'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | 'projects___internal___contentFilePath'
  | '_allProjectsLocales'
  | '_allProjectsLocales___locale'
  | '_allProjectsLocales___value'
  | '_allProjectsLocales___value___projectTitle'
  | '_allProjectsLocales___value___projectImage___size'
  | '_allProjectsLocales___value___projectImage___width'
  | '_allProjectsLocales___value___projectImage___height'
  | '_allProjectsLocales___value___projectImage___path'
  | '_allProjectsLocales___value___projectImage___format'
  | '_allProjectsLocales___value___projectImage___isImage'
  | '_allProjectsLocales___value___projectImage___notes'
  | '_allProjectsLocales___value___projectImage___author'
  | '_allProjectsLocales___value___projectImage___copyright'
  | '_allProjectsLocales___value___projectImage___tags'
  | '_allProjectsLocales___value___projectImage___smartTags'
  | '_allProjectsLocales___value___projectImage___filename'
  | '_allProjectsLocales___value___projectImage___basename'
  | '_allProjectsLocales___value___projectImage___exifInfo'
  | '_allProjectsLocales___value___projectImage___mimeType'
  | '_allProjectsLocales___value___projectImage___colors'
  | '_allProjectsLocales___value___projectImage___blurhash'
  | '_allProjectsLocales___value___projectImage___originalId'
  | '_allProjectsLocales___value___projectImage___url'
  | '_allProjectsLocales___value___projectImage___createdAt'
  | '_allProjectsLocales___value___projectImage___gatsbyImageData'
  | '_allProjectsLocales___value___projectImage___alt'
  | '_allProjectsLocales___value___projectImage___title'
  | '_allProjectsLocales___value___projectImage___customData'
  | '_allProjectsLocales___value___slug'
  | '_allProjectsLocales___value___meta___createdAt'
  | '_allProjectsLocales___value___meta___updatedAt'
  | '_allProjectsLocales___value___meta___publishedAt'
  | '_allProjectsLocales___value___meta___firstPublishedAt'
  | '_allProjectsLocales___value___meta___isValid'
  | '_allProjectsLocales___value___meta___status'
  | '_allProjectsLocales___value___originalId'
  | '_allProjectsLocales___value___locale'
  | '_allProjectsLocales___value___seoMetaTags___tags'
  | '_allProjectsLocales___value___seoMetaTags___id'
  | '_allProjectsLocales___value___seoMetaTags___children'
  | '_allProjectsLocales___value___model___name'
  | '_allProjectsLocales___value___model___singleton'
  | '_allProjectsLocales___value___model___sortable'
  | '_allProjectsLocales___value___model___apiKey'
  | '_allProjectsLocales___value___model___orderingDirection'
  | '_allProjectsLocales___value___model___tree'
  | '_allProjectsLocales___value___model___modularBlock'
  | '_allProjectsLocales___value___model___draftModeActive'
  | '_allProjectsLocales___value___model___allLocalesRequired'
  | '_allProjectsLocales___value___model___collectionAppeareance'
  | '_allProjectsLocales___value___model___hasSingletonItem'
  | '_allProjectsLocales___value___model___originalId'
  | '_allProjectsLocales___value___model___id'
  | '_allProjectsLocales___value___model___children'
  | '_allProjectsLocales___value___id'
  | '_allProjectsLocales___value___parent___id'
  | '_allProjectsLocales___value___parent___children'
  | '_allProjectsLocales___value___children'
  | '_allProjectsLocales___value___children___id'
  | '_allProjectsLocales___value___children___children'
  | '_allProjectsLocales___value___internal___content'
  | '_allProjectsLocales___value___internal___contentDigest'
  | '_allProjectsLocales___value___internal___description'
  | '_allProjectsLocales___value___internal___fieldOwners'
  | '_allProjectsLocales___value___internal___ignoreType'
  | '_allProjectsLocales___value___internal___mediaType'
  | '_allProjectsLocales___value___internal___owner'
  | '_allProjectsLocales___value___internal___type'
  | '_allProjectsLocales___value___internal___contentFilePath'
  | 'seo___title'
  | 'seo___description'
  | 'seo___twitterCard'
  | 'seo___image___size'
  | 'seo___image___width'
  | 'seo___image___height'
  | 'seo___image___path'
  | 'seo___image___format'
  | 'seo___image___isImage'
  | 'seo___image___notes'
  | 'seo___image___author'
  | 'seo___image___copyright'
  | 'seo___image___tags'
  | 'seo___image___smartTags'
  | 'seo___image___filename'
  | 'seo___image___basename'
  | 'seo___image___exifInfo'
  | 'seo___image___mimeType'
  | 'seo___image___colors'
  | 'seo___image___colors___red'
  | 'seo___image___colors___green'
  | 'seo___image___colors___blue'
  | 'seo___image___colors___alpha'
  | 'seo___image___colors___rgb'
  | 'seo___image___colors___hex'
  | 'seo___image___blurhash'
  | 'seo___image___originalId'
  | 'seo___image___url'
  | 'seo___image___createdAt'
  | 'seo___image___video___muxPlaybackId'
  | 'seo___image___video___frameRate'
  | 'seo___image___video___duration'
  | 'seo___image___video___streamingUrl'
  | 'seo___image___video___thumbnailUrl'
  | 'seo___image___video___mp4Url'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___width'
  | 'seo___image___fluid___height'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___width'
  | 'seo___image___sizes___height'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___sizes'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___sizes'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___sizes'
  | 'seo___image___gatsbyImageData'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___internal___contentFilePath'
  | '_allSeoLocales'
  | '_allSeoLocales___locale'
  | '_allSeoLocales___value___title'
  | '_allSeoLocales___value___description'
  | '_allSeoLocales___value___twitterCard'
  | '_allSeoLocales___value___image___size'
  | '_allSeoLocales___value___image___width'
  | '_allSeoLocales___value___image___height'
  | '_allSeoLocales___value___image___path'
  | '_allSeoLocales___value___image___format'
  | '_allSeoLocales___value___image___isImage'
  | '_allSeoLocales___value___image___notes'
  | '_allSeoLocales___value___image___author'
  | '_allSeoLocales___value___image___copyright'
  | '_allSeoLocales___value___image___tags'
  | '_allSeoLocales___value___image___smartTags'
  | '_allSeoLocales___value___image___filename'
  | '_allSeoLocales___value___image___basename'
  | '_allSeoLocales___value___image___exifInfo'
  | '_allSeoLocales___value___image___mimeType'
  | '_allSeoLocales___value___image___colors'
  | '_allSeoLocales___value___image___blurhash'
  | '_allSeoLocales___value___image___originalId'
  | '_allSeoLocales___value___image___url'
  | '_allSeoLocales___value___image___createdAt'
  | '_allSeoLocales___value___image___gatsbyImageData'
  | '_allSeoLocales___value___image___id'
  | '_allSeoLocales___value___image___children'
  | 'servicesSectionTitle'
  | '_allServicesSectionTitleLocales'
  | '_allServicesSectionTitleLocales___locale'
  | '_allServicesSectionTitleLocales___value'
  | 'aboutUsTextContent'
  | 'aboutUsTextContentNode___id'
  | 'aboutUsTextContentNode___parent___id'
  | 'aboutUsTextContentNode___parent___parent___id'
  | 'aboutUsTextContentNode___parent___parent___children'
  | 'aboutUsTextContentNode___parent___children'
  | 'aboutUsTextContentNode___parent___children___id'
  | 'aboutUsTextContentNode___parent___children___children'
  | 'aboutUsTextContentNode___parent___internal___content'
  | 'aboutUsTextContentNode___parent___internal___contentDigest'
  | 'aboutUsTextContentNode___parent___internal___description'
  | 'aboutUsTextContentNode___parent___internal___fieldOwners'
  | 'aboutUsTextContentNode___parent___internal___ignoreType'
  | 'aboutUsTextContentNode___parent___internal___mediaType'
  | 'aboutUsTextContentNode___parent___internal___owner'
  | 'aboutUsTextContentNode___parent___internal___type'
  | 'aboutUsTextContentNode___parent___internal___contentFilePath'
  | 'aboutUsTextContentNode___children'
  | 'aboutUsTextContentNode___children___id'
  | 'aboutUsTextContentNode___children___parent___id'
  | 'aboutUsTextContentNode___children___parent___children'
  | 'aboutUsTextContentNode___children___children'
  | 'aboutUsTextContentNode___children___children___id'
  | 'aboutUsTextContentNode___children___children___children'
  | 'aboutUsTextContentNode___children___internal___content'
  | 'aboutUsTextContentNode___children___internal___contentDigest'
  | 'aboutUsTextContentNode___children___internal___description'
  | 'aboutUsTextContentNode___children___internal___fieldOwners'
  | 'aboutUsTextContentNode___children___internal___ignoreType'
  | 'aboutUsTextContentNode___children___internal___mediaType'
  | 'aboutUsTextContentNode___children___internal___owner'
  | 'aboutUsTextContentNode___children___internal___type'
  | 'aboutUsTextContentNode___children___internal___contentFilePath'
  | 'aboutUsTextContentNode___internal___content'
  | 'aboutUsTextContentNode___internal___contentDigest'
  | 'aboutUsTextContentNode___internal___description'
  | 'aboutUsTextContentNode___internal___fieldOwners'
  | 'aboutUsTextContentNode___internal___ignoreType'
  | 'aboutUsTextContentNode___internal___mediaType'
  | 'aboutUsTextContentNode___internal___owner'
  | 'aboutUsTextContentNode___internal___type'
  | 'aboutUsTextContentNode___internal___contentFilePath'
  | '_allAboutUsTextContentLocales'
  | '_allAboutUsTextContentLocales___locale'
  | '_allAboutUsTextContentLocales___value'
  | '_allAboutUsTextContentLocales___valueNode___id'
  | '_allAboutUsTextContentLocales___valueNode___parent___id'
  | '_allAboutUsTextContentLocales___valueNode___parent___children'
  | '_allAboutUsTextContentLocales___valueNode___children'
  | '_allAboutUsTextContentLocales___valueNode___children___id'
  | '_allAboutUsTextContentLocales___valueNode___children___children'
  | '_allAboutUsTextContentLocales___valueNode___internal___content'
  | '_allAboutUsTextContentLocales___valueNode___internal___contentDigest'
  | '_allAboutUsTextContentLocales___valueNode___internal___description'
  | '_allAboutUsTextContentLocales___valueNode___internal___fieldOwners'
  | '_allAboutUsTextContentLocales___valueNode___internal___ignoreType'
  | '_allAboutUsTextContentLocales___valueNode___internal___mediaType'
  | '_allAboutUsTextContentLocales___valueNode___internal___owner'
  | '_allAboutUsTextContentLocales___valueNode___internal___type'
  | '_allAboutUsTextContentLocales___valueNode___internal___contentFilePath'
  | 'backgroundImage___size'
  | 'backgroundImage___width'
  | 'backgroundImage___height'
  | 'backgroundImage___path'
  | 'backgroundImage___format'
  | 'backgroundImage___isImage'
  | 'backgroundImage___notes'
  | 'backgroundImage___author'
  | 'backgroundImage___copyright'
  | 'backgroundImage___tags'
  | 'backgroundImage___smartTags'
  | 'backgroundImage___filename'
  | 'backgroundImage___basename'
  | 'backgroundImage___exifInfo'
  | 'backgroundImage___mimeType'
  | 'backgroundImage___colors'
  | 'backgroundImage___colors___red'
  | 'backgroundImage___colors___green'
  | 'backgroundImage___colors___blue'
  | 'backgroundImage___colors___alpha'
  | 'backgroundImage___colors___rgb'
  | 'backgroundImage___colors___hex'
  | 'backgroundImage___blurhash'
  | 'backgroundImage___originalId'
  | 'backgroundImage___url'
  | 'backgroundImage___createdAt'
  | 'backgroundImage___video___muxPlaybackId'
  | 'backgroundImage___video___frameRate'
  | 'backgroundImage___video___duration'
  | 'backgroundImage___video___streamingUrl'
  | 'backgroundImage___video___thumbnailUrl'
  | 'backgroundImage___video___mp4Url'
  | 'backgroundImage___fluid___base64'
  | 'backgroundImage___fluid___tracedSVG'
  | 'backgroundImage___fluid___aspectRatio'
  | 'backgroundImage___fluid___width'
  | 'backgroundImage___fluid___height'
  | 'backgroundImage___fluid___src'
  | 'backgroundImage___fluid___srcSet'
  | 'backgroundImage___fluid___sizes'
  | 'backgroundImage___sizes___base64'
  | 'backgroundImage___sizes___tracedSVG'
  | 'backgroundImage___sizes___aspectRatio'
  | 'backgroundImage___sizes___width'
  | 'backgroundImage___sizes___height'
  | 'backgroundImage___sizes___src'
  | 'backgroundImage___sizes___srcSet'
  | 'backgroundImage___sizes___sizes'
  | 'backgroundImage___fixed___base64'
  | 'backgroundImage___fixed___tracedSVG'
  | 'backgroundImage___fixed___aspectRatio'
  | 'backgroundImage___fixed___width'
  | 'backgroundImage___fixed___height'
  | 'backgroundImage___fixed___src'
  | 'backgroundImage___fixed___srcSet'
  | 'backgroundImage___fixed___sizes'
  | 'backgroundImage___resolutions___base64'
  | 'backgroundImage___resolutions___tracedSVG'
  | 'backgroundImage___resolutions___aspectRatio'
  | 'backgroundImage___resolutions___width'
  | 'backgroundImage___resolutions___height'
  | 'backgroundImage___resolutions___src'
  | 'backgroundImage___resolutions___srcSet'
  | 'backgroundImage___resolutions___sizes'
  | 'backgroundImage___gatsbyImageData'
  | 'backgroundImage___alt'
  | 'backgroundImage___title'
  | 'backgroundImage___customData'
  | 'backgroundImage___focalPoint___x'
  | 'backgroundImage___focalPoint___y'
  | 'seeAllProjectsButtonTitle'
  | '_allSeeAllProjectsButtonTitleLocales'
  | '_allSeeAllProjectsButtonTitleLocales___locale'
  | '_allSeeAllProjectsButtonTitleLocales___value'
  | 'services'
  | 'services___serviceTitle'
  | 'services___serviceDescription'
  | 'services___serviceDescriptionNode___id'
  | 'services___serviceDescriptionNode___parent___id'
  | 'services___serviceDescriptionNode___parent___children'
  | 'services___serviceDescriptionNode___children'
  | 'services___serviceDescriptionNode___children___id'
  | 'services___serviceDescriptionNode___children___children'
  | 'services___serviceDescriptionNode___internal___content'
  | 'services___serviceDescriptionNode___internal___contentDigest'
  | 'services___serviceDescriptionNode___internal___description'
  | 'services___serviceDescriptionNode___internal___fieldOwners'
  | 'services___serviceDescriptionNode___internal___ignoreType'
  | 'services___serviceDescriptionNode___internal___mediaType'
  | 'services___serviceDescriptionNode___internal___owner'
  | 'services___serviceDescriptionNode___internal___type'
  | 'services___serviceDescriptionNode___internal___contentFilePath'
  | 'services___serviceIcon___size'
  | 'services___serviceIcon___width'
  | 'services___serviceIcon___height'
  | 'services___serviceIcon___path'
  | 'services___serviceIcon___format'
  | 'services___serviceIcon___isImage'
  | 'services___serviceIcon___notes'
  | 'services___serviceIcon___author'
  | 'services___serviceIcon___copyright'
  | 'services___serviceIcon___tags'
  | 'services___serviceIcon___smartTags'
  | 'services___serviceIcon___filename'
  | 'services___serviceIcon___basename'
  | 'services___serviceIcon___exifInfo'
  | 'services___serviceIcon___mimeType'
  | 'services___serviceIcon___colors'
  | 'services___serviceIcon___colors___red'
  | 'services___serviceIcon___colors___green'
  | 'services___serviceIcon___colors___blue'
  | 'services___serviceIcon___colors___alpha'
  | 'services___serviceIcon___colors___rgb'
  | 'services___serviceIcon___colors___hex'
  | 'services___serviceIcon___blurhash'
  | 'services___serviceIcon___originalId'
  | 'services___serviceIcon___url'
  | 'services___serviceIcon___createdAt'
  | 'services___serviceIcon___video___muxPlaybackId'
  | 'services___serviceIcon___video___frameRate'
  | 'services___serviceIcon___video___duration'
  | 'services___serviceIcon___video___streamingUrl'
  | 'services___serviceIcon___video___thumbnailUrl'
  | 'services___serviceIcon___video___mp4Url'
  | 'services___serviceIcon___fluid___base64'
  | 'services___serviceIcon___fluid___tracedSVG'
  | 'services___serviceIcon___fluid___aspectRatio'
  | 'services___serviceIcon___fluid___width'
  | 'services___serviceIcon___fluid___height'
  | 'services___serviceIcon___fluid___src'
  | 'services___serviceIcon___fluid___srcSet'
  | 'services___serviceIcon___fluid___sizes'
  | 'services___serviceIcon___sizes___base64'
  | 'services___serviceIcon___sizes___tracedSVG'
  | 'services___serviceIcon___sizes___aspectRatio'
  | 'services___serviceIcon___sizes___width'
  | 'services___serviceIcon___sizes___height'
  | 'services___serviceIcon___sizes___src'
  | 'services___serviceIcon___sizes___srcSet'
  | 'services___serviceIcon___sizes___sizes'
  | 'services___serviceIcon___fixed___base64'
  | 'services___serviceIcon___fixed___tracedSVG'
  | 'services___serviceIcon___fixed___aspectRatio'
  | 'services___serviceIcon___fixed___width'
  | 'services___serviceIcon___fixed___height'
  | 'services___serviceIcon___fixed___src'
  | 'services___serviceIcon___fixed___srcSet'
  | 'services___serviceIcon___fixed___sizes'
  | 'services___serviceIcon___resolutions___base64'
  | 'services___serviceIcon___resolutions___tracedSVG'
  | 'services___serviceIcon___resolutions___aspectRatio'
  | 'services___serviceIcon___resolutions___width'
  | 'services___serviceIcon___resolutions___height'
  | 'services___serviceIcon___resolutions___src'
  | 'services___serviceIcon___resolutions___srcSet'
  | 'services___serviceIcon___resolutions___sizes'
  | 'services___serviceIcon___gatsbyImageData'
  | 'services___serviceIcon___alt'
  | 'services___serviceIcon___title'
  | 'services___serviceIcon___customData'
  | 'services___serviceIcon___focalPoint___x'
  | 'services___serviceIcon___focalPoint___y'
  | 'services___meta___createdAt'
  | 'services___meta___updatedAt'
  | 'services___meta___publishedAt'
  | 'services___meta___firstPublishedAt'
  | 'services___meta___isValid'
  | 'services___meta___status'
  | 'services___originalId'
  | 'services___locale'
  | 'services___seoMetaTags___tags'
  | 'services___seoMetaTags___id'
  | 'services___seoMetaTags___parent___id'
  | 'services___seoMetaTags___parent___children'
  | 'services___seoMetaTags___children'
  | 'services___seoMetaTags___children___id'
  | 'services___seoMetaTags___children___children'
  | 'services___seoMetaTags___internal___content'
  | 'services___seoMetaTags___internal___contentDigest'
  | 'services___seoMetaTags___internal___description'
  | 'services___seoMetaTags___internal___fieldOwners'
  | 'services___seoMetaTags___internal___ignoreType'
  | 'services___seoMetaTags___internal___mediaType'
  | 'services___seoMetaTags___internal___owner'
  | 'services___seoMetaTags___internal___type'
  | 'services___seoMetaTags___internal___contentFilePath'
  | 'services___model___name'
  | 'services___model___singleton'
  | 'services___model___sortable'
  | 'services___model___apiKey'
  | 'services___model___orderingDirection'
  | 'services___model___tree'
  | 'services___model___modularBlock'
  | 'services___model___draftModeActive'
  | 'services___model___allLocalesRequired'
  | 'services___model___collectionAppeareance'
  | 'services___model___hasSingletonItem'
  | 'services___model___originalId'
  | 'services___model___fields___tags'
  | 'services___model___fields___id'
  | 'services___model___fields___children'
  | 'services___model___id'
  | 'services___model___parent___id'
  | 'services___model___parent___children'
  | 'services___model___children'
  | 'services___model___children___id'
  | 'services___model___children___children'
  | 'services___model___internal___content'
  | 'services___model___internal___contentDigest'
  | 'services___model___internal___description'
  | 'services___model___internal___fieldOwners'
  | 'services___model___internal___ignoreType'
  | 'services___model___internal___mediaType'
  | 'services___model___internal___owner'
  | 'services___model___internal___type'
  | 'services___model___internal___contentFilePath'
  | 'services___id'
  | 'services___parent___id'
  | 'services___parent___parent___id'
  | 'services___parent___parent___children'
  | 'services___parent___children'
  | 'services___parent___children___id'
  | 'services___parent___children___children'
  | 'services___parent___internal___content'
  | 'services___parent___internal___contentDigest'
  | 'services___parent___internal___description'
  | 'services___parent___internal___fieldOwners'
  | 'services___parent___internal___ignoreType'
  | 'services___parent___internal___mediaType'
  | 'services___parent___internal___owner'
  | 'services___parent___internal___type'
  | 'services___parent___internal___contentFilePath'
  | 'services___children'
  | 'services___children___id'
  | 'services___children___parent___id'
  | 'services___children___parent___children'
  | 'services___children___children'
  | 'services___children___children___id'
  | 'services___children___children___children'
  | 'services___children___internal___content'
  | 'services___children___internal___contentDigest'
  | 'services___children___internal___description'
  | 'services___children___internal___fieldOwners'
  | 'services___children___internal___ignoreType'
  | 'services___children___internal___mediaType'
  | 'services___children___internal___owner'
  | 'services___children___internal___type'
  | 'services___children___internal___contentFilePath'
  | 'services___internal___content'
  | 'services___internal___contentDigest'
  | 'services___internal___description'
  | 'services___internal___fieldOwners'
  | 'services___internal___ignoreType'
  | 'services___internal___mediaType'
  | 'services___internal___owner'
  | 'services___internal___type'
  | 'services___internal___contentFilePath'
  | '_allServicesLocales'
  | '_allServicesLocales___locale'
  | '_allServicesLocales___value'
  | '_allServicesLocales___value___serviceTitle'
  | '_allServicesLocales___value___serviceDescription'
  | '_allServicesLocales___value___serviceDescriptionNode___id'
  | '_allServicesLocales___value___serviceDescriptionNode___children'
  | '_allServicesLocales___value___serviceIcon___size'
  | '_allServicesLocales___value___serviceIcon___width'
  | '_allServicesLocales___value___serviceIcon___height'
  | '_allServicesLocales___value___serviceIcon___path'
  | '_allServicesLocales___value___serviceIcon___format'
  | '_allServicesLocales___value___serviceIcon___isImage'
  | '_allServicesLocales___value___serviceIcon___notes'
  | '_allServicesLocales___value___serviceIcon___author'
  | '_allServicesLocales___value___serviceIcon___copyright'
  | '_allServicesLocales___value___serviceIcon___tags'
  | '_allServicesLocales___value___serviceIcon___smartTags'
  | '_allServicesLocales___value___serviceIcon___filename'
  | '_allServicesLocales___value___serviceIcon___basename'
  | '_allServicesLocales___value___serviceIcon___exifInfo'
  | '_allServicesLocales___value___serviceIcon___mimeType'
  | '_allServicesLocales___value___serviceIcon___colors'
  | '_allServicesLocales___value___serviceIcon___blurhash'
  | '_allServicesLocales___value___serviceIcon___originalId'
  | '_allServicesLocales___value___serviceIcon___url'
  | '_allServicesLocales___value___serviceIcon___createdAt'
  | '_allServicesLocales___value___serviceIcon___gatsbyImageData'
  | '_allServicesLocales___value___serviceIcon___alt'
  | '_allServicesLocales___value___serviceIcon___title'
  | '_allServicesLocales___value___serviceIcon___customData'
  | '_allServicesLocales___value___meta___createdAt'
  | '_allServicesLocales___value___meta___updatedAt'
  | '_allServicesLocales___value___meta___publishedAt'
  | '_allServicesLocales___value___meta___firstPublishedAt'
  | '_allServicesLocales___value___meta___isValid'
  | '_allServicesLocales___value___meta___status'
  | '_allServicesLocales___value___originalId'
  | '_allServicesLocales___value___locale'
  | '_allServicesLocales___value___seoMetaTags___tags'
  | '_allServicesLocales___value___seoMetaTags___id'
  | '_allServicesLocales___value___seoMetaTags___children'
  | '_allServicesLocales___value___model___name'
  | '_allServicesLocales___value___model___singleton'
  | '_allServicesLocales___value___model___sortable'
  | '_allServicesLocales___value___model___apiKey'
  | '_allServicesLocales___value___model___orderingDirection'
  | '_allServicesLocales___value___model___tree'
  | '_allServicesLocales___value___model___modularBlock'
  | '_allServicesLocales___value___model___draftModeActive'
  | '_allServicesLocales___value___model___allLocalesRequired'
  | '_allServicesLocales___value___model___collectionAppeareance'
  | '_allServicesLocales___value___model___hasSingletonItem'
  | '_allServicesLocales___value___model___originalId'
  | '_allServicesLocales___value___model___id'
  | '_allServicesLocales___value___model___children'
  | '_allServicesLocales___value___id'
  | '_allServicesLocales___value___parent___id'
  | '_allServicesLocales___value___parent___children'
  | '_allServicesLocales___value___children'
  | '_allServicesLocales___value___children___id'
  | '_allServicesLocales___value___children___children'
  | '_allServicesLocales___value___internal___content'
  | '_allServicesLocales___value___internal___contentDigest'
  | '_allServicesLocales___value___internal___description'
  | '_allServicesLocales___value___internal___fieldOwners'
  | '_allServicesLocales___value___internal___ignoreType'
  | '_allServicesLocales___value___internal___mediaType'
  | '_allServicesLocales___value___internal___owner'
  | '_allServicesLocales___value___internal___type'
  | '_allServicesLocales___value___internal___contentFilePath'
  | 'siteUnderConstruction'
  | 'aboutBackgroundImage___size'
  | 'aboutBackgroundImage___width'
  | 'aboutBackgroundImage___height'
  | 'aboutBackgroundImage___path'
  | 'aboutBackgroundImage___format'
  | 'aboutBackgroundImage___isImage'
  | 'aboutBackgroundImage___notes'
  | 'aboutBackgroundImage___author'
  | 'aboutBackgroundImage___copyright'
  | 'aboutBackgroundImage___tags'
  | 'aboutBackgroundImage___smartTags'
  | 'aboutBackgroundImage___filename'
  | 'aboutBackgroundImage___basename'
  | 'aboutBackgroundImage___exifInfo'
  | 'aboutBackgroundImage___mimeType'
  | 'aboutBackgroundImage___colors'
  | 'aboutBackgroundImage___colors___red'
  | 'aboutBackgroundImage___colors___green'
  | 'aboutBackgroundImage___colors___blue'
  | 'aboutBackgroundImage___colors___alpha'
  | 'aboutBackgroundImage___colors___rgb'
  | 'aboutBackgroundImage___colors___hex'
  | 'aboutBackgroundImage___blurhash'
  | 'aboutBackgroundImage___originalId'
  | 'aboutBackgroundImage___url'
  | 'aboutBackgroundImage___createdAt'
  | 'aboutBackgroundImage___video___muxPlaybackId'
  | 'aboutBackgroundImage___video___frameRate'
  | 'aboutBackgroundImage___video___duration'
  | 'aboutBackgroundImage___video___streamingUrl'
  | 'aboutBackgroundImage___video___thumbnailUrl'
  | 'aboutBackgroundImage___video___mp4Url'
  | 'aboutBackgroundImage___fluid___base64'
  | 'aboutBackgroundImage___fluid___tracedSVG'
  | 'aboutBackgroundImage___fluid___aspectRatio'
  | 'aboutBackgroundImage___fluid___width'
  | 'aboutBackgroundImage___fluid___height'
  | 'aboutBackgroundImage___fluid___src'
  | 'aboutBackgroundImage___fluid___srcSet'
  | 'aboutBackgroundImage___fluid___sizes'
  | 'aboutBackgroundImage___sizes___base64'
  | 'aboutBackgroundImage___sizes___tracedSVG'
  | 'aboutBackgroundImage___sizes___aspectRatio'
  | 'aboutBackgroundImage___sizes___width'
  | 'aboutBackgroundImage___sizes___height'
  | 'aboutBackgroundImage___sizes___src'
  | 'aboutBackgroundImage___sizes___srcSet'
  | 'aboutBackgroundImage___sizes___sizes'
  | 'aboutBackgroundImage___fixed___base64'
  | 'aboutBackgroundImage___fixed___tracedSVG'
  | 'aboutBackgroundImage___fixed___aspectRatio'
  | 'aboutBackgroundImage___fixed___width'
  | 'aboutBackgroundImage___fixed___height'
  | 'aboutBackgroundImage___fixed___src'
  | 'aboutBackgroundImage___fixed___srcSet'
  | 'aboutBackgroundImage___fixed___sizes'
  | 'aboutBackgroundImage___resolutions___base64'
  | 'aboutBackgroundImage___resolutions___tracedSVG'
  | 'aboutBackgroundImage___resolutions___aspectRatio'
  | 'aboutBackgroundImage___resolutions___width'
  | 'aboutBackgroundImage___resolutions___height'
  | 'aboutBackgroundImage___resolutions___src'
  | 'aboutBackgroundImage___resolutions___srcSet'
  | 'aboutBackgroundImage___resolutions___sizes'
  | 'aboutBackgroundImage___gatsbyImageData'
  | 'aboutBackgroundImage___alt'
  | 'aboutBackgroundImage___title'
  | 'aboutBackgroundImage___customData'
  | 'aboutBackgroundImage___focalPoint___x'
  | 'aboutBackgroundImage___focalPoint___y'
  | 'seeAllServicesButtonTitle'
  | '_allSeeAllServicesButtonTitleLocales'
  | '_allSeeAllServicesButtonTitleLocales___locale'
  | '_allSeeAllServicesButtonTitleLocales___value'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsHomePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomePageEdge>;
  nodes: Array<DatoCmsHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHomePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsHomePageGroupConnectionDistinctArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionMaxArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionMinArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionSumArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHomePageFieldsEnum;
};

export type DatoCmsHomePageFilterInput = {
  aboutUsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allAboutUsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTitleFilterListInput>;
  logo?: InputMaybe<DatoCmsFileFieldFilterInput>;
  projects?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeoFilterListInput>;
  servicesSectionTitle?: InputMaybe<StringQueryOperatorInput>;
  _allServicesSectionTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesSectionTitleFilterListInput>;
  aboutUsTextContent?: InputMaybe<StringQueryOperatorInput>;
  aboutUsTextContentNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allAboutUsTextContentLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutUsTextContentFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  seeAllProjectsButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeAllProjectsButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllProjectsButtonTitleFilterListInput>;
  services?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageServicesFilterListInput>;
  siteUnderConstruction?: InputMaybe<BooleanQueryOperatorInput>;
  aboutBackgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  seeAllServicesButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeAllServicesButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeAllServicesButtonTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsHomePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsHomePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderHomeButtonNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderHomeButtonNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderHomeButtonNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderServicesButtonNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderServicesButtonNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderServicesButtonNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContactButtonNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactButtonNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContactButtonNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsHeaderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHeaderEdge>;
  nodes: Array<DatoCmsHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHeaderGroupConnection>;
};


export type DatoCmsHeaderConnectionDistinctArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionMaxArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionMinArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionSumArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHeaderFieldsEnum;
};

export type DatoCmsHeaderEdge = {
  next?: Maybe<DatoCmsHeader>;
  node: DatoCmsHeader;
  previous?: Maybe<DatoCmsHeader>;
};

export type DatoCmsHeaderFieldsEnum =
  | 'homeButtonName'
  | '_allHomeButtonNameLocales'
  | '_allHomeButtonNameLocales___locale'
  | '_allHomeButtonNameLocales___value'
  | 'aboutUsButtonName'
  | '_allAboutUsButtonNameLocales'
  | '_allAboutUsButtonNameLocales___locale'
  | '_allAboutUsButtonNameLocales___value'
  | 'projectsButtonName'
  | '_allProjectsButtonNameLocales'
  | '_allProjectsButtonNameLocales___locale'
  | '_allProjectsButtonNameLocales___value'
  | 'servicesButtonName'
  | '_allServicesButtonNameLocales'
  | '_allServicesButtonNameLocales___locale'
  | '_allServicesButtonNameLocales___value'
  | 'contactButtonName'
  | '_allContactButtonNameLocales'
  | '_allContactButtonNameLocales___locale'
  | '_allContactButtonNameLocales___value'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsHeaderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHeaderEdge>;
  nodes: Array<DatoCmsHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHeaderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsHeaderGroupConnectionDistinctArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionMaxArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionMinArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionSumArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHeaderFieldsEnum;
};

export type DatoCmsHeaderFilterInput = {
  homeButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allHomeButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderHomeButtonNameFilterListInput>;
  aboutUsButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allAboutUsButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutUsButtonNameFilterListInput>;
  projectsButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsButtonNameFilterListInput>;
  servicesButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allServicesButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderServicesButtonNameFilterListInput>;
  contactButtonName?: InputMaybe<StringQueryOperatorInput>;
  _allContactButtonNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactButtonNameFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsHeaderSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsHeaderFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsServiceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsServiceEdge>;
  nodes: Array<DatoCmsService>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsServiceGroupConnection>;
};


export type DatoCmsServiceConnectionDistinctArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceConnectionMaxArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceConnectionMinArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceConnectionSumArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsServiceFieldsEnum;
};

export type DatoCmsServiceEdge = {
  next?: Maybe<DatoCmsService>;
  node: DatoCmsService;
  previous?: Maybe<DatoCmsService>;
};

export type DatoCmsServiceFieldsEnum =
  | 'serviceTitle'
  | 'serviceDescription'
  | 'serviceDescriptionNode___id'
  | 'serviceDescriptionNode___parent___id'
  | 'serviceDescriptionNode___parent___parent___id'
  | 'serviceDescriptionNode___parent___parent___children'
  | 'serviceDescriptionNode___parent___children'
  | 'serviceDescriptionNode___parent___children___id'
  | 'serviceDescriptionNode___parent___children___children'
  | 'serviceDescriptionNode___parent___internal___content'
  | 'serviceDescriptionNode___parent___internal___contentDigest'
  | 'serviceDescriptionNode___parent___internal___description'
  | 'serviceDescriptionNode___parent___internal___fieldOwners'
  | 'serviceDescriptionNode___parent___internal___ignoreType'
  | 'serviceDescriptionNode___parent___internal___mediaType'
  | 'serviceDescriptionNode___parent___internal___owner'
  | 'serviceDescriptionNode___parent___internal___type'
  | 'serviceDescriptionNode___parent___internal___contentFilePath'
  | 'serviceDescriptionNode___children'
  | 'serviceDescriptionNode___children___id'
  | 'serviceDescriptionNode___children___parent___id'
  | 'serviceDescriptionNode___children___parent___children'
  | 'serviceDescriptionNode___children___children'
  | 'serviceDescriptionNode___children___children___id'
  | 'serviceDescriptionNode___children___children___children'
  | 'serviceDescriptionNode___children___internal___content'
  | 'serviceDescriptionNode___children___internal___contentDigest'
  | 'serviceDescriptionNode___children___internal___description'
  | 'serviceDescriptionNode___children___internal___fieldOwners'
  | 'serviceDescriptionNode___children___internal___ignoreType'
  | 'serviceDescriptionNode___children___internal___mediaType'
  | 'serviceDescriptionNode___children___internal___owner'
  | 'serviceDescriptionNode___children___internal___type'
  | 'serviceDescriptionNode___children___internal___contentFilePath'
  | 'serviceDescriptionNode___internal___content'
  | 'serviceDescriptionNode___internal___contentDigest'
  | 'serviceDescriptionNode___internal___description'
  | 'serviceDescriptionNode___internal___fieldOwners'
  | 'serviceDescriptionNode___internal___ignoreType'
  | 'serviceDescriptionNode___internal___mediaType'
  | 'serviceDescriptionNode___internal___owner'
  | 'serviceDescriptionNode___internal___type'
  | 'serviceDescriptionNode___internal___contentFilePath'
  | 'serviceIcon___size'
  | 'serviceIcon___width'
  | 'serviceIcon___height'
  | 'serviceIcon___path'
  | 'serviceIcon___format'
  | 'serviceIcon___isImage'
  | 'serviceIcon___notes'
  | 'serviceIcon___author'
  | 'serviceIcon___copyright'
  | 'serviceIcon___tags'
  | 'serviceIcon___smartTags'
  | 'serviceIcon___filename'
  | 'serviceIcon___basename'
  | 'serviceIcon___exifInfo'
  | 'serviceIcon___mimeType'
  | 'serviceIcon___colors'
  | 'serviceIcon___colors___red'
  | 'serviceIcon___colors___green'
  | 'serviceIcon___colors___blue'
  | 'serviceIcon___colors___alpha'
  | 'serviceIcon___colors___rgb'
  | 'serviceIcon___colors___hex'
  | 'serviceIcon___blurhash'
  | 'serviceIcon___originalId'
  | 'serviceIcon___url'
  | 'serviceIcon___createdAt'
  | 'serviceIcon___video___muxPlaybackId'
  | 'serviceIcon___video___frameRate'
  | 'serviceIcon___video___duration'
  | 'serviceIcon___video___streamingUrl'
  | 'serviceIcon___video___thumbnailUrl'
  | 'serviceIcon___video___mp4Url'
  | 'serviceIcon___fluid___base64'
  | 'serviceIcon___fluid___tracedSVG'
  | 'serviceIcon___fluid___aspectRatio'
  | 'serviceIcon___fluid___width'
  | 'serviceIcon___fluid___height'
  | 'serviceIcon___fluid___src'
  | 'serviceIcon___fluid___srcSet'
  | 'serviceIcon___fluid___sizes'
  | 'serviceIcon___sizes___base64'
  | 'serviceIcon___sizes___tracedSVG'
  | 'serviceIcon___sizes___aspectRatio'
  | 'serviceIcon___sizes___width'
  | 'serviceIcon___sizes___height'
  | 'serviceIcon___sizes___src'
  | 'serviceIcon___sizes___srcSet'
  | 'serviceIcon___sizes___sizes'
  | 'serviceIcon___fixed___base64'
  | 'serviceIcon___fixed___tracedSVG'
  | 'serviceIcon___fixed___aspectRatio'
  | 'serviceIcon___fixed___width'
  | 'serviceIcon___fixed___height'
  | 'serviceIcon___fixed___src'
  | 'serviceIcon___fixed___srcSet'
  | 'serviceIcon___fixed___sizes'
  | 'serviceIcon___resolutions___base64'
  | 'serviceIcon___resolutions___tracedSVG'
  | 'serviceIcon___resolutions___aspectRatio'
  | 'serviceIcon___resolutions___width'
  | 'serviceIcon___resolutions___height'
  | 'serviceIcon___resolutions___src'
  | 'serviceIcon___resolutions___srcSet'
  | 'serviceIcon___resolutions___sizes'
  | 'serviceIcon___gatsbyImageData'
  | 'serviceIcon___alt'
  | 'serviceIcon___title'
  | 'serviceIcon___customData'
  | 'serviceIcon___focalPoint___x'
  | 'serviceIcon___focalPoint___y'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsServiceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsServiceEdge>;
  nodes: Array<DatoCmsService>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsServiceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsServiceGroupConnectionDistinctArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceGroupConnectionMaxArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceGroupConnectionMinArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceGroupConnectionSumArgs = {
  field: DatoCmsServiceFieldsEnum;
};


export type DatoCmsServiceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsServiceFieldsEnum;
};

export type DatoCmsServiceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsServiceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectEdge>;
  nodes: Array<DatoCmsProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectGroupConnection>;
};


export type DatoCmsProjectConnectionDistinctArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionMaxArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionMinArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionSumArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectFieldsEnum;
};

export type DatoCmsProjectEdge = {
  next?: Maybe<DatoCmsProject>;
  node: DatoCmsProject;
  previous?: Maybe<DatoCmsProject>;
};

export type DatoCmsProjectFieldsEnum =
  | 'projectTitle'
  | 'projectImage___size'
  | 'projectImage___width'
  | 'projectImage___height'
  | 'projectImage___path'
  | 'projectImage___format'
  | 'projectImage___isImage'
  | 'projectImage___notes'
  | 'projectImage___author'
  | 'projectImage___copyright'
  | 'projectImage___tags'
  | 'projectImage___smartTags'
  | 'projectImage___filename'
  | 'projectImage___basename'
  | 'projectImage___exifInfo'
  | 'projectImage___mimeType'
  | 'projectImage___colors'
  | 'projectImage___colors___red'
  | 'projectImage___colors___green'
  | 'projectImage___colors___blue'
  | 'projectImage___colors___alpha'
  | 'projectImage___colors___rgb'
  | 'projectImage___colors___hex'
  | 'projectImage___blurhash'
  | 'projectImage___originalId'
  | 'projectImage___url'
  | 'projectImage___createdAt'
  | 'projectImage___video___muxPlaybackId'
  | 'projectImage___video___frameRate'
  | 'projectImage___video___duration'
  | 'projectImage___video___streamingUrl'
  | 'projectImage___video___thumbnailUrl'
  | 'projectImage___video___mp4Url'
  | 'projectImage___fluid___base64'
  | 'projectImage___fluid___tracedSVG'
  | 'projectImage___fluid___aspectRatio'
  | 'projectImage___fluid___width'
  | 'projectImage___fluid___height'
  | 'projectImage___fluid___src'
  | 'projectImage___fluid___srcSet'
  | 'projectImage___fluid___sizes'
  | 'projectImage___sizes___base64'
  | 'projectImage___sizes___tracedSVG'
  | 'projectImage___sizes___aspectRatio'
  | 'projectImage___sizes___width'
  | 'projectImage___sizes___height'
  | 'projectImage___sizes___src'
  | 'projectImage___sizes___srcSet'
  | 'projectImage___sizes___sizes'
  | 'projectImage___fixed___base64'
  | 'projectImage___fixed___tracedSVG'
  | 'projectImage___fixed___aspectRatio'
  | 'projectImage___fixed___width'
  | 'projectImage___fixed___height'
  | 'projectImage___fixed___src'
  | 'projectImage___fixed___srcSet'
  | 'projectImage___fixed___sizes'
  | 'projectImage___resolutions___base64'
  | 'projectImage___resolutions___tracedSVG'
  | 'projectImage___resolutions___aspectRatio'
  | 'projectImage___resolutions___width'
  | 'projectImage___resolutions___height'
  | 'projectImage___resolutions___src'
  | 'projectImage___resolutions___srcSet'
  | 'projectImage___resolutions___sizes'
  | 'projectImage___gatsbyImageData'
  | 'projectImage___alt'
  | 'projectImage___title'
  | 'projectImage___customData'
  | 'projectImage___focalPoint___x'
  | 'projectImage___focalPoint___y'
  | 'slug'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectEdge>;
  nodes: Array<DatoCmsProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsProjectGroupConnectionDistinctArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionMaxArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionMinArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionSumArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectFieldsEnum;
};

export type DatoCmsProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageSeoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageSeoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageSeoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsProjectPageFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsProjectPageFilterInput>;
};

export type DatoCmsProjectPageFilterInput = {
  imagesCollection?: InputMaybe<DatoCmsFileFieldFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSeoFilterListInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  _allSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSlugFilterListInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  _allTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageTitleFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allDescriptionLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageDescriptionFilterListInput>;
  mainImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFileFieldFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsFileFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSeoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSeoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSeoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSlugFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageSlugFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageSlugFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageDescriptionFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsProjectPageDescriptionFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsProjectPageDescriptionFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsListFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsListFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsListFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsProjectPageFilterListInput>;
};

export type DatoCmsAllProjectsPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAllProjectsPageEdge>;
  nodes: Array<DatoCmsAllProjectsPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAllProjectsPageGroupConnection>;
};


export type DatoCmsAllProjectsPageConnectionDistinctArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageConnectionMaxArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageConnectionMinArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageConnectionSumArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAllProjectsPageFieldsEnum;
};

export type DatoCmsAllProjectsPageEdge = {
  next?: Maybe<DatoCmsAllProjectsPage>;
  node: DatoCmsAllProjectsPage;
  previous?: Maybe<DatoCmsAllProjectsPage>;
};

export type DatoCmsAllProjectsPageFieldsEnum =
  | 'seo___title'
  | 'seo___description'
  | 'seo___twitterCard'
  | 'seo___image___size'
  | 'seo___image___width'
  | 'seo___image___height'
  | 'seo___image___path'
  | 'seo___image___format'
  | 'seo___image___isImage'
  | 'seo___image___notes'
  | 'seo___image___author'
  | 'seo___image___copyright'
  | 'seo___image___tags'
  | 'seo___image___smartTags'
  | 'seo___image___filename'
  | 'seo___image___basename'
  | 'seo___image___exifInfo'
  | 'seo___image___mimeType'
  | 'seo___image___colors'
  | 'seo___image___colors___red'
  | 'seo___image___colors___green'
  | 'seo___image___colors___blue'
  | 'seo___image___colors___alpha'
  | 'seo___image___colors___rgb'
  | 'seo___image___colors___hex'
  | 'seo___image___blurhash'
  | 'seo___image___originalId'
  | 'seo___image___url'
  | 'seo___image___createdAt'
  | 'seo___image___video___muxPlaybackId'
  | 'seo___image___video___frameRate'
  | 'seo___image___video___duration'
  | 'seo___image___video___streamingUrl'
  | 'seo___image___video___thumbnailUrl'
  | 'seo___image___video___mp4Url'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___width'
  | 'seo___image___fluid___height'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___width'
  | 'seo___image___sizes___height'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___sizes'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___sizes'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___sizes'
  | 'seo___image___gatsbyImageData'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___internal___contentFilePath'
  | '_allSeoLocales'
  | '_allSeoLocales___locale'
  | '_allSeoLocales___value___title'
  | '_allSeoLocales___value___description'
  | '_allSeoLocales___value___twitterCard'
  | '_allSeoLocales___value___image___size'
  | '_allSeoLocales___value___image___width'
  | '_allSeoLocales___value___image___height'
  | '_allSeoLocales___value___image___path'
  | '_allSeoLocales___value___image___format'
  | '_allSeoLocales___value___image___isImage'
  | '_allSeoLocales___value___image___notes'
  | '_allSeoLocales___value___image___author'
  | '_allSeoLocales___value___image___copyright'
  | '_allSeoLocales___value___image___tags'
  | '_allSeoLocales___value___image___smartTags'
  | '_allSeoLocales___value___image___filename'
  | '_allSeoLocales___value___image___basename'
  | '_allSeoLocales___value___image___exifInfo'
  | '_allSeoLocales___value___image___mimeType'
  | '_allSeoLocales___value___image___colors'
  | '_allSeoLocales___value___image___blurhash'
  | '_allSeoLocales___value___image___originalId'
  | '_allSeoLocales___value___image___url'
  | '_allSeoLocales___value___image___createdAt'
  | '_allSeoLocales___value___image___gatsbyImageData'
  | '_allSeoLocales___value___image___id'
  | '_allSeoLocales___value___image___children'
  | 'pageTitle'
  | '_allPageTitleLocales'
  | '_allPageTitleLocales___locale'
  | '_allPageTitleLocales___value'
  | 'projectsList'
  | 'projectsList___imagesCollection'
  | 'projectsList___imagesCollection___size'
  | 'projectsList___imagesCollection___width'
  | 'projectsList___imagesCollection___height'
  | 'projectsList___imagesCollection___path'
  | 'projectsList___imagesCollection___format'
  | 'projectsList___imagesCollection___isImage'
  | 'projectsList___imagesCollection___notes'
  | 'projectsList___imagesCollection___author'
  | 'projectsList___imagesCollection___copyright'
  | 'projectsList___imagesCollection___tags'
  | 'projectsList___imagesCollection___smartTags'
  | 'projectsList___imagesCollection___filename'
  | 'projectsList___imagesCollection___basename'
  | 'projectsList___imagesCollection___exifInfo'
  | 'projectsList___imagesCollection___mimeType'
  | 'projectsList___imagesCollection___colors'
  | 'projectsList___imagesCollection___colors___red'
  | 'projectsList___imagesCollection___colors___green'
  | 'projectsList___imagesCollection___colors___blue'
  | 'projectsList___imagesCollection___colors___alpha'
  | 'projectsList___imagesCollection___colors___rgb'
  | 'projectsList___imagesCollection___colors___hex'
  | 'projectsList___imagesCollection___blurhash'
  | 'projectsList___imagesCollection___originalId'
  | 'projectsList___imagesCollection___url'
  | 'projectsList___imagesCollection___createdAt'
  | 'projectsList___imagesCollection___video___muxPlaybackId'
  | 'projectsList___imagesCollection___video___frameRate'
  | 'projectsList___imagesCollection___video___duration'
  | 'projectsList___imagesCollection___video___streamingUrl'
  | 'projectsList___imagesCollection___video___thumbnailUrl'
  | 'projectsList___imagesCollection___video___mp4Url'
  | 'projectsList___imagesCollection___fluid___base64'
  | 'projectsList___imagesCollection___fluid___tracedSVG'
  | 'projectsList___imagesCollection___fluid___aspectRatio'
  | 'projectsList___imagesCollection___fluid___width'
  | 'projectsList___imagesCollection___fluid___height'
  | 'projectsList___imagesCollection___fluid___src'
  | 'projectsList___imagesCollection___fluid___srcSet'
  | 'projectsList___imagesCollection___fluid___sizes'
  | 'projectsList___imagesCollection___sizes___base64'
  | 'projectsList___imagesCollection___sizes___tracedSVG'
  | 'projectsList___imagesCollection___sizes___aspectRatio'
  | 'projectsList___imagesCollection___sizes___width'
  | 'projectsList___imagesCollection___sizes___height'
  | 'projectsList___imagesCollection___sizes___src'
  | 'projectsList___imagesCollection___sizes___srcSet'
  | 'projectsList___imagesCollection___sizes___sizes'
  | 'projectsList___imagesCollection___fixed___base64'
  | 'projectsList___imagesCollection___fixed___tracedSVG'
  | 'projectsList___imagesCollection___fixed___aspectRatio'
  | 'projectsList___imagesCollection___fixed___width'
  | 'projectsList___imagesCollection___fixed___height'
  | 'projectsList___imagesCollection___fixed___src'
  | 'projectsList___imagesCollection___fixed___srcSet'
  | 'projectsList___imagesCollection___fixed___sizes'
  | 'projectsList___imagesCollection___resolutions___base64'
  | 'projectsList___imagesCollection___resolutions___tracedSVG'
  | 'projectsList___imagesCollection___resolutions___aspectRatio'
  | 'projectsList___imagesCollection___resolutions___width'
  | 'projectsList___imagesCollection___resolutions___height'
  | 'projectsList___imagesCollection___resolutions___src'
  | 'projectsList___imagesCollection___resolutions___srcSet'
  | 'projectsList___imagesCollection___resolutions___sizes'
  | 'projectsList___imagesCollection___gatsbyImageData'
  | 'projectsList___imagesCollection___alt'
  | 'projectsList___imagesCollection___title'
  | 'projectsList___imagesCollection___customData'
  | 'projectsList___imagesCollection___focalPoint___x'
  | 'projectsList___imagesCollection___focalPoint___y'
  | 'projectsList___seo___title'
  | 'projectsList___seo___description'
  | 'projectsList___seo___twitterCard'
  | 'projectsList___seo___image___size'
  | 'projectsList___seo___image___width'
  | 'projectsList___seo___image___height'
  | 'projectsList___seo___image___path'
  | 'projectsList___seo___image___format'
  | 'projectsList___seo___image___isImage'
  | 'projectsList___seo___image___notes'
  | 'projectsList___seo___image___author'
  | 'projectsList___seo___image___copyright'
  | 'projectsList___seo___image___tags'
  | 'projectsList___seo___image___smartTags'
  | 'projectsList___seo___image___filename'
  | 'projectsList___seo___image___basename'
  | 'projectsList___seo___image___exifInfo'
  | 'projectsList___seo___image___mimeType'
  | 'projectsList___seo___image___colors'
  | 'projectsList___seo___image___blurhash'
  | 'projectsList___seo___image___originalId'
  | 'projectsList___seo___image___url'
  | 'projectsList___seo___image___createdAt'
  | 'projectsList___seo___image___gatsbyImageData'
  | 'projectsList___seo___image___id'
  | 'projectsList___seo___image___children'
  | 'projectsList____allSeoLocales'
  | 'projectsList____allSeoLocales___locale'
  | 'projectsList____allSeoLocales___value___title'
  | 'projectsList____allSeoLocales___value___description'
  | 'projectsList____allSeoLocales___value___twitterCard'
  | 'projectsList___slug'
  | 'projectsList____allSlugLocales'
  | 'projectsList____allSlugLocales___locale'
  | 'projectsList____allSlugLocales___value'
  | 'projectsList___title'
  | 'projectsList____allTitleLocales'
  | 'projectsList____allTitleLocales___locale'
  | 'projectsList____allTitleLocales___value'
  | 'projectsList___description'
  | 'projectsList___descriptionNode___id'
  | 'projectsList___descriptionNode___parent___id'
  | 'projectsList___descriptionNode___parent___children'
  | 'projectsList___descriptionNode___children'
  | 'projectsList___descriptionNode___children___id'
  | 'projectsList___descriptionNode___children___children'
  | 'projectsList___descriptionNode___internal___content'
  | 'projectsList___descriptionNode___internal___contentDigest'
  | 'projectsList___descriptionNode___internal___description'
  | 'projectsList___descriptionNode___internal___fieldOwners'
  | 'projectsList___descriptionNode___internal___ignoreType'
  | 'projectsList___descriptionNode___internal___mediaType'
  | 'projectsList___descriptionNode___internal___owner'
  | 'projectsList___descriptionNode___internal___type'
  | 'projectsList___descriptionNode___internal___contentFilePath'
  | 'projectsList____allDescriptionLocales'
  | 'projectsList____allDescriptionLocales___locale'
  | 'projectsList____allDescriptionLocales___value'
  | 'projectsList____allDescriptionLocales___valueNode___id'
  | 'projectsList____allDescriptionLocales___valueNode___children'
  | 'projectsList___mainImage___size'
  | 'projectsList___mainImage___width'
  | 'projectsList___mainImage___height'
  | 'projectsList___mainImage___path'
  | 'projectsList___mainImage___format'
  | 'projectsList___mainImage___isImage'
  | 'projectsList___mainImage___notes'
  | 'projectsList___mainImage___author'
  | 'projectsList___mainImage___copyright'
  | 'projectsList___mainImage___tags'
  | 'projectsList___mainImage___smartTags'
  | 'projectsList___mainImage___filename'
  | 'projectsList___mainImage___basename'
  | 'projectsList___mainImage___exifInfo'
  | 'projectsList___mainImage___mimeType'
  | 'projectsList___mainImage___colors'
  | 'projectsList___mainImage___colors___red'
  | 'projectsList___mainImage___colors___green'
  | 'projectsList___mainImage___colors___blue'
  | 'projectsList___mainImage___colors___alpha'
  | 'projectsList___mainImage___colors___rgb'
  | 'projectsList___mainImage___colors___hex'
  | 'projectsList___mainImage___blurhash'
  | 'projectsList___mainImage___originalId'
  | 'projectsList___mainImage___url'
  | 'projectsList___mainImage___createdAt'
  | 'projectsList___mainImage___video___muxPlaybackId'
  | 'projectsList___mainImage___video___frameRate'
  | 'projectsList___mainImage___video___duration'
  | 'projectsList___mainImage___video___streamingUrl'
  | 'projectsList___mainImage___video___thumbnailUrl'
  | 'projectsList___mainImage___video___mp4Url'
  | 'projectsList___mainImage___fluid___base64'
  | 'projectsList___mainImage___fluid___tracedSVG'
  | 'projectsList___mainImage___fluid___aspectRatio'
  | 'projectsList___mainImage___fluid___width'
  | 'projectsList___mainImage___fluid___height'
  | 'projectsList___mainImage___fluid___src'
  | 'projectsList___mainImage___fluid___srcSet'
  | 'projectsList___mainImage___fluid___sizes'
  | 'projectsList___mainImage___sizes___base64'
  | 'projectsList___mainImage___sizes___tracedSVG'
  | 'projectsList___mainImage___sizes___aspectRatio'
  | 'projectsList___mainImage___sizes___width'
  | 'projectsList___mainImage___sizes___height'
  | 'projectsList___mainImage___sizes___src'
  | 'projectsList___mainImage___sizes___srcSet'
  | 'projectsList___mainImage___sizes___sizes'
  | 'projectsList___mainImage___fixed___base64'
  | 'projectsList___mainImage___fixed___tracedSVG'
  | 'projectsList___mainImage___fixed___aspectRatio'
  | 'projectsList___mainImage___fixed___width'
  | 'projectsList___mainImage___fixed___height'
  | 'projectsList___mainImage___fixed___src'
  | 'projectsList___mainImage___fixed___srcSet'
  | 'projectsList___mainImage___fixed___sizes'
  | 'projectsList___mainImage___resolutions___base64'
  | 'projectsList___mainImage___resolutions___tracedSVG'
  | 'projectsList___mainImage___resolutions___aspectRatio'
  | 'projectsList___mainImage___resolutions___width'
  | 'projectsList___mainImage___resolutions___height'
  | 'projectsList___mainImage___resolutions___src'
  | 'projectsList___mainImage___resolutions___srcSet'
  | 'projectsList___mainImage___resolutions___sizes'
  | 'projectsList___mainImage___gatsbyImageData'
  | 'projectsList___mainImage___alt'
  | 'projectsList___mainImage___title'
  | 'projectsList___mainImage___customData'
  | 'projectsList___mainImage___focalPoint___x'
  | 'projectsList___mainImage___focalPoint___y'
  | 'projectsList___meta___createdAt'
  | 'projectsList___meta___updatedAt'
  | 'projectsList___meta___publishedAt'
  | 'projectsList___meta___firstPublishedAt'
  | 'projectsList___meta___isValid'
  | 'projectsList___meta___status'
  | 'projectsList___originalId'
  | 'projectsList___locale'
  | 'projectsList___seoMetaTags___tags'
  | 'projectsList___seoMetaTags___id'
  | 'projectsList___seoMetaTags___parent___id'
  | 'projectsList___seoMetaTags___parent___children'
  | 'projectsList___seoMetaTags___children'
  | 'projectsList___seoMetaTags___children___id'
  | 'projectsList___seoMetaTags___children___children'
  | 'projectsList___seoMetaTags___internal___content'
  | 'projectsList___seoMetaTags___internal___contentDigest'
  | 'projectsList___seoMetaTags___internal___description'
  | 'projectsList___seoMetaTags___internal___fieldOwners'
  | 'projectsList___seoMetaTags___internal___ignoreType'
  | 'projectsList___seoMetaTags___internal___mediaType'
  | 'projectsList___seoMetaTags___internal___owner'
  | 'projectsList___seoMetaTags___internal___type'
  | 'projectsList___seoMetaTags___internal___contentFilePath'
  | 'projectsList___model___name'
  | 'projectsList___model___singleton'
  | 'projectsList___model___sortable'
  | 'projectsList___model___apiKey'
  | 'projectsList___model___orderingDirection'
  | 'projectsList___model___tree'
  | 'projectsList___model___modularBlock'
  | 'projectsList___model___draftModeActive'
  | 'projectsList___model___allLocalesRequired'
  | 'projectsList___model___collectionAppeareance'
  | 'projectsList___model___hasSingletonItem'
  | 'projectsList___model___originalId'
  | 'projectsList___model___fields___tags'
  | 'projectsList___model___fields___id'
  | 'projectsList___model___fields___children'
  | 'projectsList___model___id'
  | 'projectsList___model___parent___id'
  | 'projectsList___model___parent___children'
  | 'projectsList___model___children'
  | 'projectsList___model___children___id'
  | 'projectsList___model___children___children'
  | 'projectsList___model___internal___content'
  | 'projectsList___model___internal___contentDigest'
  | 'projectsList___model___internal___description'
  | 'projectsList___model___internal___fieldOwners'
  | 'projectsList___model___internal___ignoreType'
  | 'projectsList___model___internal___mediaType'
  | 'projectsList___model___internal___owner'
  | 'projectsList___model___internal___type'
  | 'projectsList___model___internal___contentFilePath'
  | 'projectsList___id'
  | 'projectsList___parent___id'
  | 'projectsList___parent___parent___id'
  | 'projectsList___parent___parent___children'
  | 'projectsList___parent___children'
  | 'projectsList___parent___children___id'
  | 'projectsList___parent___children___children'
  | 'projectsList___parent___internal___content'
  | 'projectsList___parent___internal___contentDigest'
  | 'projectsList___parent___internal___description'
  | 'projectsList___parent___internal___fieldOwners'
  | 'projectsList___parent___internal___ignoreType'
  | 'projectsList___parent___internal___mediaType'
  | 'projectsList___parent___internal___owner'
  | 'projectsList___parent___internal___type'
  | 'projectsList___parent___internal___contentFilePath'
  | 'projectsList___children'
  | 'projectsList___children___id'
  | 'projectsList___children___parent___id'
  | 'projectsList___children___parent___children'
  | 'projectsList___children___children'
  | 'projectsList___children___children___id'
  | 'projectsList___children___children___children'
  | 'projectsList___children___internal___content'
  | 'projectsList___children___internal___contentDigest'
  | 'projectsList___children___internal___description'
  | 'projectsList___children___internal___fieldOwners'
  | 'projectsList___children___internal___ignoreType'
  | 'projectsList___children___internal___mediaType'
  | 'projectsList___children___internal___owner'
  | 'projectsList___children___internal___type'
  | 'projectsList___children___internal___contentFilePath'
  | 'projectsList___internal___content'
  | 'projectsList___internal___contentDigest'
  | 'projectsList___internal___description'
  | 'projectsList___internal___fieldOwners'
  | 'projectsList___internal___ignoreType'
  | 'projectsList___internal___mediaType'
  | 'projectsList___internal___owner'
  | 'projectsList___internal___type'
  | 'projectsList___internal___contentFilePath'
  | '_allProjectsListLocales'
  | '_allProjectsListLocales___locale'
  | '_allProjectsListLocales___value'
  | '_allProjectsListLocales___value___imagesCollection'
  | '_allProjectsListLocales___value___imagesCollection___size'
  | '_allProjectsListLocales___value___imagesCollection___width'
  | '_allProjectsListLocales___value___imagesCollection___height'
  | '_allProjectsListLocales___value___imagesCollection___path'
  | '_allProjectsListLocales___value___imagesCollection___format'
  | '_allProjectsListLocales___value___imagesCollection___isImage'
  | '_allProjectsListLocales___value___imagesCollection___notes'
  | '_allProjectsListLocales___value___imagesCollection___author'
  | '_allProjectsListLocales___value___imagesCollection___copyright'
  | '_allProjectsListLocales___value___imagesCollection___tags'
  | '_allProjectsListLocales___value___imagesCollection___smartTags'
  | '_allProjectsListLocales___value___imagesCollection___filename'
  | '_allProjectsListLocales___value___imagesCollection___basename'
  | '_allProjectsListLocales___value___imagesCollection___exifInfo'
  | '_allProjectsListLocales___value___imagesCollection___mimeType'
  | '_allProjectsListLocales___value___imagesCollection___colors'
  | '_allProjectsListLocales___value___imagesCollection___blurhash'
  | '_allProjectsListLocales___value___imagesCollection___originalId'
  | '_allProjectsListLocales___value___imagesCollection___url'
  | '_allProjectsListLocales___value___imagesCollection___createdAt'
  | '_allProjectsListLocales___value___imagesCollection___gatsbyImageData'
  | '_allProjectsListLocales___value___imagesCollection___alt'
  | '_allProjectsListLocales___value___imagesCollection___title'
  | '_allProjectsListLocales___value___imagesCollection___customData'
  | '_allProjectsListLocales___value___seo___title'
  | '_allProjectsListLocales___value___seo___description'
  | '_allProjectsListLocales___value___seo___twitterCard'
  | '_allProjectsListLocales___value____allSeoLocales'
  | '_allProjectsListLocales___value____allSeoLocales___locale'
  | '_allProjectsListLocales___value___slug'
  | '_allProjectsListLocales___value____allSlugLocales'
  | '_allProjectsListLocales___value____allSlugLocales___locale'
  | '_allProjectsListLocales___value____allSlugLocales___value'
  | '_allProjectsListLocales___value___title'
  | '_allProjectsListLocales___value____allTitleLocales'
  | '_allProjectsListLocales___value____allTitleLocales___locale'
  | '_allProjectsListLocales___value____allTitleLocales___value'
  | '_allProjectsListLocales___value___description'
  | '_allProjectsListLocales___value___descriptionNode___id'
  | '_allProjectsListLocales___value___descriptionNode___children'
  | '_allProjectsListLocales___value____allDescriptionLocales'
  | '_allProjectsListLocales___value____allDescriptionLocales___locale'
  | '_allProjectsListLocales___value____allDescriptionLocales___value'
  | '_allProjectsListLocales___value___mainImage___size'
  | '_allProjectsListLocales___value___mainImage___width'
  | '_allProjectsListLocales___value___mainImage___height'
  | '_allProjectsListLocales___value___mainImage___path'
  | '_allProjectsListLocales___value___mainImage___format'
  | '_allProjectsListLocales___value___mainImage___isImage'
  | '_allProjectsListLocales___value___mainImage___notes'
  | '_allProjectsListLocales___value___mainImage___author'
  | '_allProjectsListLocales___value___mainImage___copyright'
  | '_allProjectsListLocales___value___mainImage___tags'
  | '_allProjectsListLocales___value___mainImage___smartTags'
  | '_allProjectsListLocales___value___mainImage___filename'
  | '_allProjectsListLocales___value___mainImage___basename'
  | '_allProjectsListLocales___value___mainImage___exifInfo'
  | '_allProjectsListLocales___value___mainImage___mimeType'
  | '_allProjectsListLocales___value___mainImage___colors'
  | '_allProjectsListLocales___value___mainImage___blurhash'
  | '_allProjectsListLocales___value___mainImage___originalId'
  | '_allProjectsListLocales___value___mainImage___url'
  | '_allProjectsListLocales___value___mainImage___createdAt'
  | '_allProjectsListLocales___value___mainImage___gatsbyImageData'
  | '_allProjectsListLocales___value___mainImage___alt'
  | '_allProjectsListLocales___value___mainImage___title'
  | '_allProjectsListLocales___value___mainImage___customData'
  | '_allProjectsListLocales___value___meta___createdAt'
  | '_allProjectsListLocales___value___meta___updatedAt'
  | '_allProjectsListLocales___value___meta___publishedAt'
  | '_allProjectsListLocales___value___meta___firstPublishedAt'
  | '_allProjectsListLocales___value___meta___isValid'
  | '_allProjectsListLocales___value___meta___status'
  | '_allProjectsListLocales___value___originalId'
  | '_allProjectsListLocales___value___locale'
  | '_allProjectsListLocales___value___seoMetaTags___tags'
  | '_allProjectsListLocales___value___seoMetaTags___id'
  | '_allProjectsListLocales___value___seoMetaTags___children'
  | '_allProjectsListLocales___value___model___name'
  | '_allProjectsListLocales___value___model___singleton'
  | '_allProjectsListLocales___value___model___sortable'
  | '_allProjectsListLocales___value___model___apiKey'
  | '_allProjectsListLocales___value___model___orderingDirection'
  | '_allProjectsListLocales___value___model___tree'
  | '_allProjectsListLocales___value___model___modularBlock'
  | '_allProjectsListLocales___value___model___draftModeActive'
  | '_allProjectsListLocales___value___model___allLocalesRequired'
  | '_allProjectsListLocales___value___model___collectionAppeareance'
  | '_allProjectsListLocales___value___model___hasSingletonItem'
  | '_allProjectsListLocales___value___model___originalId'
  | '_allProjectsListLocales___value___model___id'
  | '_allProjectsListLocales___value___model___children'
  | '_allProjectsListLocales___value___id'
  | '_allProjectsListLocales___value___parent___id'
  | '_allProjectsListLocales___value___parent___children'
  | '_allProjectsListLocales___value___children'
  | '_allProjectsListLocales___value___children___id'
  | '_allProjectsListLocales___value___children___children'
  | '_allProjectsListLocales___value___internal___content'
  | '_allProjectsListLocales___value___internal___contentDigest'
  | '_allProjectsListLocales___value___internal___description'
  | '_allProjectsListLocales___value___internal___fieldOwners'
  | '_allProjectsListLocales___value___internal___ignoreType'
  | '_allProjectsListLocales___value___internal___mediaType'
  | '_allProjectsListLocales___value___internal___owner'
  | '_allProjectsListLocales___value___internal___type'
  | '_allProjectsListLocales___value___internal___contentFilePath'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsAllProjectsPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAllProjectsPageEdge>;
  nodes: Array<DatoCmsAllProjectsPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAllProjectsPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsAllProjectsPageGroupConnectionDistinctArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageGroupConnectionMaxArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageGroupConnectionMinArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageGroupConnectionSumArgs = {
  field: DatoCmsAllProjectsPageFieldsEnum;
};


export type DatoCmsAllProjectsPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAllProjectsPageFieldsEnum;
};

export type DatoCmsAllProjectsPageFilterInput = {
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageSeoFilterListInput>;
  pageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPagePageTitleFilterListInput>;
  projectsList?: InputMaybe<DatoCmsProjectPageFilterListInput>;
  _allProjectsListLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsAllProjectsPageProjectsListFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllProjectsPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsAllProjectsPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsProjectPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectPageEdge>;
  nodes: Array<DatoCmsProjectPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectPageGroupConnection>;
};


export type DatoCmsProjectPageConnectionDistinctArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageConnectionMaxArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageConnectionMinArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageConnectionSumArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectPageFieldsEnum;
};

export type DatoCmsProjectPageEdge = {
  next?: Maybe<DatoCmsProjectPage>;
  node: DatoCmsProjectPage;
  previous?: Maybe<DatoCmsProjectPage>;
};

export type DatoCmsProjectPageFieldsEnum =
  | 'imagesCollection'
  | 'imagesCollection___size'
  | 'imagesCollection___width'
  | 'imagesCollection___height'
  | 'imagesCollection___path'
  | 'imagesCollection___format'
  | 'imagesCollection___isImage'
  | 'imagesCollection___notes'
  | 'imagesCollection___author'
  | 'imagesCollection___copyright'
  | 'imagesCollection___tags'
  | 'imagesCollection___smartTags'
  | 'imagesCollection___filename'
  | 'imagesCollection___basename'
  | 'imagesCollection___exifInfo'
  | 'imagesCollection___mimeType'
  | 'imagesCollection___colors'
  | 'imagesCollection___colors___red'
  | 'imagesCollection___colors___green'
  | 'imagesCollection___colors___blue'
  | 'imagesCollection___colors___alpha'
  | 'imagesCollection___colors___rgb'
  | 'imagesCollection___colors___hex'
  | 'imagesCollection___blurhash'
  | 'imagesCollection___originalId'
  | 'imagesCollection___url'
  | 'imagesCollection___createdAt'
  | 'imagesCollection___video___muxPlaybackId'
  | 'imagesCollection___video___frameRate'
  | 'imagesCollection___video___duration'
  | 'imagesCollection___video___streamingUrl'
  | 'imagesCollection___video___thumbnailUrl'
  | 'imagesCollection___video___mp4Url'
  | 'imagesCollection___fluid___base64'
  | 'imagesCollection___fluid___tracedSVG'
  | 'imagesCollection___fluid___aspectRatio'
  | 'imagesCollection___fluid___width'
  | 'imagesCollection___fluid___height'
  | 'imagesCollection___fluid___src'
  | 'imagesCollection___fluid___srcSet'
  | 'imagesCollection___fluid___sizes'
  | 'imagesCollection___sizes___base64'
  | 'imagesCollection___sizes___tracedSVG'
  | 'imagesCollection___sizes___aspectRatio'
  | 'imagesCollection___sizes___width'
  | 'imagesCollection___sizes___height'
  | 'imagesCollection___sizes___src'
  | 'imagesCollection___sizes___srcSet'
  | 'imagesCollection___sizes___sizes'
  | 'imagesCollection___fixed___base64'
  | 'imagesCollection___fixed___tracedSVG'
  | 'imagesCollection___fixed___aspectRatio'
  | 'imagesCollection___fixed___width'
  | 'imagesCollection___fixed___height'
  | 'imagesCollection___fixed___src'
  | 'imagesCollection___fixed___srcSet'
  | 'imagesCollection___fixed___sizes'
  | 'imagesCollection___resolutions___base64'
  | 'imagesCollection___resolutions___tracedSVG'
  | 'imagesCollection___resolutions___aspectRatio'
  | 'imagesCollection___resolutions___width'
  | 'imagesCollection___resolutions___height'
  | 'imagesCollection___resolutions___src'
  | 'imagesCollection___resolutions___srcSet'
  | 'imagesCollection___resolutions___sizes'
  | 'imagesCollection___gatsbyImageData'
  | 'imagesCollection___alt'
  | 'imagesCollection___title'
  | 'imagesCollection___customData'
  | 'imagesCollection___focalPoint___x'
  | 'imagesCollection___focalPoint___y'
  | 'seo___title'
  | 'seo___description'
  | 'seo___twitterCard'
  | 'seo___image___size'
  | 'seo___image___width'
  | 'seo___image___height'
  | 'seo___image___path'
  | 'seo___image___format'
  | 'seo___image___isImage'
  | 'seo___image___notes'
  | 'seo___image___author'
  | 'seo___image___copyright'
  | 'seo___image___tags'
  | 'seo___image___smartTags'
  | 'seo___image___filename'
  | 'seo___image___basename'
  | 'seo___image___exifInfo'
  | 'seo___image___mimeType'
  | 'seo___image___colors'
  | 'seo___image___colors___red'
  | 'seo___image___colors___green'
  | 'seo___image___colors___blue'
  | 'seo___image___colors___alpha'
  | 'seo___image___colors___rgb'
  | 'seo___image___colors___hex'
  | 'seo___image___blurhash'
  | 'seo___image___originalId'
  | 'seo___image___url'
  | 'seo___image___createdAt'
  | 'seo___image___video___muxPlaybackId'
  | 'seo___image___video___frameRate'
  | 'seo___image___video___duration'
  | 'seo___image___video___streamingUrl'
  | 'seo___image___video___thumbnailUrl'
  | 'seo___image___video___mp4Url'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___width'
  | 'seo___image___fluid___height'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___width'
  | 'seo___image___sizes___height'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___sizes'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___sizes'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___sizes'
  | 'seo___image___gatsbyImageData'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___internal___contentFilePath'
  | '_allSeoLocales'
  | '_allSeoLocales___locale'
  | '_allSeoLocales___value___title'
  | '_allSeoLocales___value___description'
  | '_allSeoLocales___value___twitterCard'
  | '_allSeoLocales___value___image___size'
  | '_allSeoLocales___value___image___width'
  | '_allSeoLocales___value___image___height'
  | '_allSeoLocales___value___image___path'
  | '_allSeoLocales___value___image___format'
  | '_allSeoLocales___value___image___isImage'
  | '_allSeoLocales___value___image___notes'
  | '_allSeoLocales___value___image___author'
  | '_allSeoLocales___value___image___copyright'
  | '_allSeoLocales___value___image___tags'
  | '_allSeoLocales___value___image___smartTags'
  | '_allSeoLocales___value___image___filename'
  | '_allSeoLocales___value___image___basename'
  | '_allSeoLocales___value___image___exifInfo'
  | '_allSeoLocales___value___image___mimeType'
  | '_allSeoLocales___value___image___colors'
  | '_allSeoLocales___value___image___blurhash'
  | '_allSeoLocales___value___image___originalId'
  | '_allSeoLocales___value___image___url'
  | '_allSeoLocales___value___image___createdAt'
  | '_allSeoLocales___value___image___gatsbyImageData'
  | '_allSeoLocales___value___image___id'
  | '_allSeoLocales___value___image___children'
  | 'slug'
  | '_allSlugLocales'
  | '_allSlugLocales___locale'
  | '_allSlugLocales___value'
  | 'title'
  | '_allTitleLocales'
  | '_allTitleLocales___locale'
  | '_allTitleLocales___value'
  | 'description'
  | 'descriptionNode___id'
  | 'descriptionNode___parent___id'
  | 'descriptionNode___parent___parent___id'
  | 'descriptionNode___parent___parent___children'
  | 'descriptionNode___parent___children'
  | 'descriptionNode___parent___children___id'
  | 'descriptionNode___parent___children___children'
  | 'descriptionNode___parent___internal___content'
  | 'descriptionNode___parent___internal___contentDigest'
  | 'descriptionNode___parent___internal___description'
  | 'descriptionNode___parent___internal___fieldOwners'
  | 'descriptionNode___parent___internal___ignoreType'
  | 'descriptionNode___parent___internal___mediaType'
  | 'descriptionNode___parent___internal___owner'
  | 'descriptionNode___parent___internal___type'
  | 'descriptionNode___parent___internal___contentFilePath'
  | 'descriptionNode___children'
  | 'descriptionNode___children___id'
  | 'descriptionNode___children___parent___id'
  | 'descriptionNode___children___parent___children'
  | 'descriptionNode___children___children'
  | 'descriptionNode___children___children___id'
  | 'descriptionNode___children___children___children'
  | 'descriptionNode___children___internal___content'
  | 'descriptionNode___children___internal___contentDigest'
  | 'descriptionNode___children___internal___description'
  | 'descriptionNode___children___internal___fieldOwners'
  | 'descriptionNode___children___internal___ignoreType'
  | 'descriptionNode___children___internal___mediaType'
  | 'descriptionNode___children___internal___owner'
  | 'descriptionNode___children___internal___type'
  | 'descriptionNode___children___internal___contentFilePath'
  | 'descriptionNode___internal___content'
  | 'descriptionNode___internal___contentDigest'
  | 'descriptionNode___internal___description'
  | 'descriptionNode___internal___fieldOwners'
  | 'descriptionNode___internal___ignoreType'
  | 'descriptionNode___internal___mediaType'
  | 'descriptionNode___internal___owner'
  | 'descriptionNode___internal___type'
  | 'descriptionNode___internal___contentFilePath'
  | '_allDescriptionLocales'
  | '_allDescriptionLocales___locale'
  | '_allDescriptionLocales___value'
  | '_allDescriptionLocales___valueNode___id'
  | '_allDescriptionLocales___valueNode___parent___id'
  | '_allDescriptionLocales___valueNode___parent___children'
  | '_allDescriptionLocales___valueNode___children'
  | '_allDescriptionLocales___valueNode___children___id'
  | '_allDescriptionLocales___valueNode___children___children'
  | '_allDescriptionLocales___valueNode___internal___content'
  | '_allDescriptionLocales___valueNode___internal___contentDigest'
  | '_allDescriptionLocales___valueNode___internal___description'
  | '_allDescriptionLocales___valueNode___internal___fieldOwners'
  | '_allDescriptionLocales___valueNode___internal___ignoreType'
  | '_allDescriptionLocales___valueNode___internal___mediaType'
  | '_allDescriptionLocales___valueNode___internal___owner'
  | '_allDescriptionLocales___valueNode___internal___type'
  | '_allDescriptionLocales___valueNode___internal___contentFilePath'
  | 'mainImage___size'
  | 'mainImage___width'
  | 'mainImage___height'
  | 'mainImage___path'
  | 'mainImage___format'
  | 'mainImage___isImage'
  | 'mainImage___notes'
  | 'mainImage___author'
  | 'mainImage___copyright'
  | 'mainImage___tags'
  | 'mainImage___smartTags'
  | 'mainImage___filename'
  | 'mainImage___basename'
  | 'mainImage___exifInfo'
  | 'mainImage___mimeType'
  | 'mainImage___colors'
  | 'mainImage___colors___red'
  | 'mainImage___colors___green'
  | 'mainImage___colors___blue'
  | 'mainImage___colors___alpha'
  | 'mainImage___colors___rgb'
  | 'mainImage___colors___hex'
  | 'mainImage___blurhash'
  | 'mainImage___originalId'
  | 'mainImage___url'
  | 'mainImage___createdAt'
  | 'mainImage___video___muxPlaybackId'
  | 'mainImage___video___frameRate'
  | 'mainImage___video___duration'
  | 'mainImage___video___streamingUrl'
  | 'mainImage___video___thumbnailUrl'
  | 'mainImage___video___mp4Url'
  | 'mainImage___fluid___base64'
  | 'mainImage___fluid___tracedSVG'
  | 'mainImage___fluid___aspectRatio'
  | 'mainImage___fluid___width'
  | 'mainImage___fluid___height'
  | 'mainImage___fluid___src'
  | 'mainImage___fluid___srcSet'
  | 'mainImage___fluid___sizes'
  | 'mainImage___sizes___base64'
  | 'mainImage___sizes___tracedSVG'
  | 'mainImage___sizes___aspectRatio'
  | 'mainImage___sizes___width'
  | 'mainImage___sizes___height'
  | 'mainImage___sizes___src'
  | 'mainImage___sizes___srcSet'
  | 'mainImage___sizes___sizes'
  | 'mainImage___fixed___base64'
  | 'mainImage___fixed___tracedSVG'
  | 'mainImage___fixed___aspectRatio'
  | 'mainImage___fixed___width'
  | 'mainImage___fixed___height'
  | 'mainImage___fixed___src'
  | 'mainImage___fixed___srcSet'
  | 'mainImage___fixed___sizes'
  | 'mainImage___resolutions___base64'
  | 'mainImage___resolutions___tracedSVG'
  | 'mainImage___resolutions___aspectRatio'
  | 'mainImage___resolutions___width'
  | 'mainImage___resolutions___height'
  | 'mainImage___resolutions___src'
  | 'mainImage___resolutions___srcSet'
  | 'mainImage___resolutions___sizes'
  | 'mainImage___gatsbyImageData'
  | 'mainImage___alt'
  | 'mainImage___title'
  | 'mainImage___customData'
  | 'mainImage___focalPoint___x'
  | 'mainImage___focalPoint___y'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsProjectPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectPageEdge>;
  nodes: Array<DatoCmsProjectPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsProjectPageGroupConnectionDistinctArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageGroupConnectionMaxArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageGroupConnectionMinArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageGroupConnectionSumArgs = {
  field: DatoCmsProjectPageFieldsEnum;
};


export type DatoCmsProjectPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectPageFieldsEnum;
};

export type DatoCmsProjectPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsProjectPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlugFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlugFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlugFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlugFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlugFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlugFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlugFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlugFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlugFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsSlugsConfigurationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSlugsConfigurationEdge>;
  nodes: Array<DatoCmsSlugsConfiguration>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSlugsConfigurationGroupConnection>;
};


export type DatoCmsSlugsConfigurationConnectionDistinctArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationConnectionMaxArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationConnectionMinArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationConnectionSumArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSlugsConfigurationFieldsEnum;
};

export type DatoCmsSlugsConfigurationEdge = {
  next?: Maybe<DatoCmsSlugsConfiguration>;
  node: DatoCmsSlugsConfiguration;
  previous?: Maybe<DatoCmsSlugsConfiguration>;
};

export type DatoCmsSlugsConfigurationFieldsEnum =
  | 'servicesPageSlug'
  | '_allServicesPageSlugLocales'
  | '_allServicesPageSlugLocales___locale'
  | '_allServicesPageSlugLocales___value'
  | 'servicesPageSlugReference'
  | 'projectsPageSlug'
  | '_allProjectsPageSlugLocales'
  | '_allProjectsPageSlugLocales___locale'
  | '_allProjectsPageSlugLocales___value'
  | 'projectsPageSlugReference'
  | 'contactPageSlug'
  | '_allContactPageSlugLocales'
  | '_allContactPageSlugLocales___locale'
  | '_allContactPageSlugLocales___value'
  | 'contactPageSlugReference'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsSlugsConfigurationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSlugsConfigurationEdge>;
  nodes: Array<DatoCmsSlugsConfiguration>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSlugsConfigurationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSlugsConfigurationGroupConnectionDistinctArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationGroupConnectionMaxArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationGroupConnectionMinArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationGroupConnectionSumArgs = {
  field: DatoCmsSlugsConfigurationFieldsEnum;
};


export type DatoCmsSlugsConfigurationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSlugsConfigurationFieldsEnum;
};

export type DatoCmsSlugsConfigurationFilterInput = {
  servicesPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allServicesPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationServicesPageSlugFilterListInput>;
  servicesPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  projectsPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationProjectsPageSlugFilterListInput>;
  projectsPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  contactPageSlug?: InputMaybe<StringQueryOperatorInput>;
  _allContactPageSlugLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSlugsConfigurationContactPageSlugFilterListInput>;
  contactPageSlugReference?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSlugsConfigurationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSlugsConfigurationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageMainServicesFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageMainServicesFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageMainServicesFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsServiceFilterListInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageSeoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageSeoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageSeoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsServiceFilterListInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsServicesPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsServicesPageEdge>;
  nodes: Array<DatoCmsServicesPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsServicesPageGroupConnection>;
};


export type DatoCmsServicesPageConnectionDistinctArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageConnectionMaxArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageConnectionMinArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageConnectionSumArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsServicesPageFieldsEnum;
};

export type DatoCmsServicesPageEdge = {
  next?: Maybe<DatoCmsServicesPage>;
  node: DatoCmsServicesPage;
  previous?: Maybe<DatoCmsServicesPage>;
};

export type DatoCmsServicesPageFieldsEnum =
  | 'constructionIndustryServicesTitle'
  | '_allConstructionIndustryServicesTitleLocales'
  | '_allConstructionIndustryServicesTitleLocales___locale'
  | '_allConstructionIndustryServicesTitleLocales___value'
  | 'mainServices'
  | 'mainServices___serviceTitle'
  | 'mainServices___serviceDescription'
  | 'mainServices___serviceDescriptionNode___id'
  | 'mainServices___serviceDescriptionNode___parent___id'
  | 'mainServices___serviceDescriptionNode___parent___children'
  | 'mainServices___serviceDescriptionNode___children'
  | 'mainServices___serviceDescriptionNode___children___id'
  | 'mainServices___serviceDescriptionNode___children___children'
  | 'mainServices___serviceDescriptionNode___internal___content'
  | 'mainServices___serviceDescriptionNode___internal___contentDigest'
  | 'mainServices___serviceDescriptionNode___internal___description'
  | 'mainServices___serviceDescriptionNode___internal___fieldOwners'
  | 'mainServices___serviceDescriptionNode___internal___ignoreType'
  | 'mainServices___serviceDescriptionNode___internal___mediaType'
  | 'mainServices___serviceDescriptionNode___internal___owner'
  | 'mainServices___serviceDescriptionNode___internal___type'
  | 'mainServices___serviceDescriptionNode___internal___contentFilePath'
  | 'mainServices___serviceIcon___size'
  | 'mainServices___serviceIcon___width'
  | 'mainServices___serviceIcon___height'
  | 'mainServices___serviceIcon___path'
  | 'mainServices___serviceIcon___format'
  | 'mainServices___serviceIcon___isImage'
  | 'mainServices___serviceIcon___notes'
  | 'mainServices___serviceIcon___author'
  | 'mainServices___serviceIcon___copyright'
  | 'mainServices___serviceIcon___tags'
  | 'mainServices___serviceIcon___smartTags'
  | 'mainServices___serviceIcon___filename'
  | 'mainServices___serviceIcon___basename'
  | 'mainServices___serviceIcon___exifInfo'
  | 'mainServices___serviceIcon___mimeType'
  | 'mainServices___serviceIcon___colors'
  | 'mainServices___serviceIcon___colors___red'
  | 'mainServices___serviceIcon___colors___green'
  | 'mainServices___serviceIcon___colors___blue'
  | 'mainServices___serviceIcon___colors___alpha'
  | 'mainServices___serviceIcon___colors___rgb'
  | 'mainServices___serviceIcon___colors___hex'
  | 'mainServices___serviceIcon___blurhash'
  | 'mainServices___serviceIcon___originalId'
  | 'mainServices___serviceIcon___url'
  | 'mainServices___serviceIcon___createdAt'
  | 'mainServices___serviceIcon___video___muxPlaybackId'
  | 'mainServices___serviceIcon___video___frameRate'
  | 'mainServices___serviceIcon___video___duration'
  | 'mainServices___serviceIcon___video___streamingUrl'
  | 'mainServices___serviceIcon___video___thumbnailUrl'
  | 'mainServices___serviceIcon___video___mp4Url'
  | 'mainServices___serviceIcon___fluid___base64'
  | 'mainServices___serviceIcon___fluid___tracedSVG'
  | 'mainServices___serviceIcon___fluid___aspectRatio'
  | 'mainServices___serviceIcon___fluid___width'
  | 'mainServices___serviceIcon___fluid___height'
  | 'mainServices___serviceIcon___fluid___src'
  | 'mainServices___serviceIcon___fluid___srcSet'
  | 'mainServices___serviceIcon___fluid___sizes'
  | 'mainServices___serviceIcon___sizes___base64'
  | 'mainServices___serviceIcon___sizes___tracedSVG'
  | 'mainServices___serviceIcon___sizes___aspectRatio'
  | 'mainServices___serviceIcon___sizes___width'
  | 'mainServices___serviceIcon___sizes___height'
  | 'mainServices___serviceIcon___sizes___src'
  | 'mainServices___serviceIcon___sizes___srcSet'
  | 'mainServices___serviceIcon___sizes___sizes'
  | 'mainServices___serviceIcon___fixed___base64'
  | 'mainServices___serviceIcon___fixed___tracedSVG'
  | 'mainServices___serviceIcon___fixed___aspectRatio'
  | 'mainServices___serviceIcon___fixed___width'
  | 'mainServices___serviceIcon___fixed___height'
  | 'mainServices___serviceIcon___fixed___src'
  | 'mainServices___serviceIcon___fixed___srcSet'
  | 'mainServices___serviceIcon___fixed___sizes'
  | 'mainServices___serviceIcon___resolutions___base64'
  | 'mainServices___serviceIcon___resolutions___tracedSVG'
  | 'mainServices___serviceIcon___resolutions___aspectRatio'
  | 'mainServices___serviceIcon___resolutions___width'
  | 'mainServices___serviceIcon___resolutions___height'
  | 'mainServices___serviceIcon___resolutions___src'
  | 'mainServices___serviceIcon___resolutions___srcSet'
  | 'mainServices___serviceIcon___resolutions___sizes'
  | 'mainServices___serviceIcon___gatsbyImageData'
  | 'mainServices___serviceIcon___alt'
  | 'mainServices___serviceIcon___title'
  | 'mainServices___serviceIcon___customData'
  | 'mainServices___serviceIcon___focalPoint___x'
  | 'mainServices___serviceIcon___focalPoint___y'
  | 'mainServices___meta___createdAt'
  | 'mainServices___meta___updatedAt'
  | 'mainServices___meta___publishedAt'
  | 'mainServices___meta___firstPublishedAt'
  | 'mainServices___meta___isValid'
  | 'mainServices___meta___status'
  | 'mainServices___originalId'
  | 'mainServices___locale'
  | 'mainServices___seoMetaTags___tags'
  | 'mainServices___seoMetaTags___id'
  | 'mainServices___seoMetaTags___parent___id'
  | 'mainServices___seoMetaTags___parent___children'
  | 'mainServices___seoMetaTags___children'
  | 'mainServices___seoMetaTags___children___id'
  | 'mainServices___seoMetaTags___children___children'
  | 'mainServices___seoMetaTags___internal___content'
  | 'mainServices___seoMetaTags___internal___contentDigest'
  | 'mainServices___seoMetaTags___internal___description'
  | 'mainServices___seoMetaTags___internal___fieldOwners'
  | 'mainServices___seoMetaTags___internal___ignoreType'
  | 'mainServices___seoMetaTags___internal___mediaType'
  | 'mainServices___seoMetaTags___internal___owner'
  | 'mainServices___seoMetaTags___internal___type'
  | 'mainServices___seoMetaTags___internal___contentFilePath'
  | 'mainServices___model___name'
  | 'mainServices___model___singleton'
  | 'mainServices___model___sortable'
  | 'mainServices___model___apiKey'
  | 'mainServices___model___orderingDirection'
  | 'mainServices___model___tree'
  | 'mainServices___model___modularBlock'
  | 'mainServices___model___draftModeActive'
  | 'mainServices___model___allLocalesRequired'
  | 'mainServices___model___collectionAppeareance'
  | 'mainServices___model___hasSingletonItem'
  | 'mainServices___model___originalId'
  | 'mainServices___model___fields___tags'
  | 'mainServices___model___fields___id'
  | 'mainServices___model___fields___children'
  | 'mainServices___model___id'
  | 'mainServices___model___parent___id'
  | 'mainServices___model___parent___children'
  | 'mainServices___model___children'
  | 'mainServices___model___children___id'
  | 'mainServices___model___children___children'
  | 'mainServices___model___internal___content'
  | 'mainServices___model___internal___contentDigest'
  | 'mainServices___model___internal___description'
  | 'mainServices___model___internal___fieldOwners'
  | 'mainServices___model___internal___ignoreType'
  | 'mainServices___model___internal___mediaType'
  | 'mainServices___model___internal___owner'
  | 'mainServices___model___internal___type'
  | 'mainServices___model___internal___contentFilePath'
  | 'mainServices___id'
  | 'mainServices___parent___id'
  | 'mainServices___parent___parent___id'
  | 'mainServices___parent___parent___children'
  | 'mainServices___parent___children'
  | 'mainServices___parent___children___id'
  | 'mainServices___parent___children___children'
  | 'mainServices___parent___internal___content'
  | 'mainServices___parent___internal___contentDigest'
  | 'mainServices___parent___internal___description'
  | 'mainServices___parent___internal___fieldOwners'
  | 'mainServices___parent___internal___ignoreType'
  | 'mainServices___parent___internal___mediaType'
  | 'mainServices___parent___internal___owner'
  | 'mainServices___parent___internal___type'
  | 'mainServices___parent___internal___contentFilePath'
  | 'mainServices___children'
  | 'mainServices___children___id'
  | 'mainServices___children___parent___id'
  | 'mainServices___children___parent___children'
  | 'mainServices___children___children'
  | 'mainServices___children___children___id'
  | 'mainServices___children___children___children'
  | 'mainServices___children___internal___content'
  | 'mainServices___children___internal___contentDigest'
  | 'mainServices___children___internal___description'
  | 'mainServices___children___internal___fieldOwners'
  | 'mainServices___children___internal___ignoreType'
  | 'mainServices___children___internal___mediaType'
  | 'mainServices___children___internal___owner'
  | 'mainServices___children___internal___type'
  | 'mainServices___children___internal___contentFilePath'
  | 'mainServices___internal___content'
  | 'mainServices___internal___contentDigest'
  | 'mainServices___internal___description'
  | 'mainServices___internal___fieldOwners'
  | 'mainServices___internal___ignoreType'
  | 'mainServices___internal___mediaType'
  | 'mainServices___internal___owner'
  | 'mainServices___internal___type'
  | 'mainServices___internal___contentFilePath'
  | '_allMainServicesLocales'
  | '_allMainServicesLocales___locale'
  | '_allMainServicesLocales___value'
  | '_allMainServicesLocales___value___serviceTitle'
  | '_allMainServicesLocales___value___serviceDescription'
  | '_allMainServicesLocales___value___serviceDescriptionNode___id'
  | '_allMainServicesLocales___value___serviceDescriptionNode___children'
  | '_allMainServicesLocales___value___serviceIcon___size'
  | '_allMainServicesLocales___value___serviceIcon___width'
  | '_allMainServicesLocales___value___serviceIcon___height'
  | '_allMainServicesLocales___value___serviceIcon___path'
  | '_allMainServicesLocales___value___serviceIcon___format'
  | '_allMainServicesLocales___value___serviceIcon___isImage'
  | '_allMainServicesLocales___value___serviceIcon___notes'
  | '_allMainServicesLocales___value___serviceIcon___author'
  | '_allMainServicesLocales___value___serviceIcon___copyright'
  | '_allMainServicesLocales___value___serviceIcon___tags'
  | '_allMainServicesLocales___value___serviceIcon___smartTags'
  | '_allMainServicesLocales___value___serviceIcon___filename'
  | '_allMainServicesLocales___value___serviceIcon___basename'
  | '_allMainServicesLocales___value___serviceIcon___exifInfo'
  | '_allMainServicesLocales___value___serviceIcon___mimeType'
  | '_allMainServicesLocales___value___serviceIcon___colors'
  | '_allMainServicesLocales___value___serviceIcon___blurhash'
  | '_allMainServicesLocales___value___serviceIcon___originalId'
  | '_allMainServicesLocales___value___serviceIcon___url'
  | '_allMainServicesLocales___value___serviceIcon___createdAt'
  | '_allMainServicesLocales___value___serviceIcon___gatsbyImageData'
  | '_allMainServicesLocales___value___serviceIcon___alt'
  | '_allMainServicesLocales___value___serviceIcon___title'
  | '_allMainServicesLocales___value___serviceIcon___customData'
  | '_allMainServicesLocales___value___meta___createdAt'
  | '_allMainServicesLocales___value___meta___updatedAt'
  | '_allMainServicesLocales___value___meta___publishedAt'
  | '_allMainServicesLocales___value___meta___firstPublishedAt'
  | '_allMainServicesLocales___value___meta___isValid'
  | '_allMainServicesLocales___value___meta___status'
  | '_allMainServicesLocales___value___originalId'
  | '_allMainServicesLocales___value___locale'
  | '_allMainServicesLocales___value___seoMetaTags___tags'
  | '_allMainServicesLocales___value___seoMetaTags___id'
  | '_allMainServicesLocales___value___seoMetaTags___children'
  | '_allMainServicesLocales___value___model___name'
  | '_allMainServicesLocales___value___model___singleton'
  | '_allMainServicesLocales___value___model___sortable'
  | '_allMainServicesLocales___value___model___apiKey'
  | '_allMainServicesLocales___value___model___orderingDirection'
  | '_allMainServicesLocales___value___model___tree'
  | '_allMainServicesLocales___value___model___modularBlock'
  | '_allMainServicesLocales___value___model___draftModeActive'
  | '_allMainServicesLocales___value___model___allLocalesRequired'
  | '_allMainServicesLocales___value___model___collectionAppeareance'
  | '_allMainServicesLocales___value___model___hasSingletonItem'
  | '_allMainServicesLocales___value___model___originalId'
  | '_allMainServicesLocales___value___model___id'
  | '_allMainServicesLocales___value___model___children'
  | '_allMainServicesLocales___value___id'
  | '_allMainServicesLocales___value___parent___id'
  | '_allMainServicesLocales___value___parent___children'
  | '_allMainServicesLocales___value___children'
  | '_allMainServicesLocales___value___children___id'
  | '_allMainServicesLocales___value___children___children'
  | '_allMainServicesLocales___value___internal___content'
  | '_allMainServicesLocales___value___internal___contentDigest'
  | '_allMainServicesLocales___value___internal___description'
  | '_allMainServicesLocales___value___internal___fieldOwners'
  | '_allMainServicesLocales___value___internal___ignoreType'
  | '_allMainServicesLocales___value___internal___mediaType'
  | '_allMainServicesLocales___value___internal___owner'
  | '_allMainServicesLocales___value___internal___type'
  | '_allMainServicesLocales___value___internal___contentFilePath'
  | 'seo___title'
  | 'seo___description'
  | 'seo___twitterCard'
  | 'seo___image___size'
  | 'seo___image___width'
  | 'seo___image___height'
  | 'seo___image___path'
  | 'seo___image___format'
  | 'seo___image___isImage'
  | 'seo___image___notes'
  | 'seo___image___author'
  | 'seo___image___copyright'
  | 'seo___image___tags'
  | 'seo___image___smartTags'
  | 'seo___image___filename'
  | 'seo___image___basename'
  | 'seo___image___exifInfo'
  | 'seo___image___mimeType'
  | 'seo___image___colors'
  | 'seo___image___colors___red'
  | 'seo___image___colors___green'
  | 'seo___image___colors___blue'
  | 'seo___image___colors___alpha'
  | 'seo___image___colors___rgb'
  | 'seo___image___colors___hex'
  | 'seo___image___blurhash'
  | 'seo___image___originalId'
  | 'seo___image___url'
  | 'seo___image___createdAt'
  | 'seo___image___video___muxPlaybackId'
  | 'seo___image___video___frameRate'
  | 'seo___image___video___duration'
  | 'seo___image___video___streamingUrl'
  | 'seo___image___video___thumbnailUrl'
  | 'seo___image___video___mp4Url'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___width'
  | 'seo___image___fluid___height'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___width'
  | 'seo___image___sizes___height'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___sizes'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___sizes'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___sizes'
  | 'seo___image___gatsbyImageData'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___internal___contentFilePath'
  | '_allSeoLocales'
  | '_allSeoLocales___locale'
  | '_allSeoLocales___value___title'
  | '_allSeoLocales___value___description'
  | '_allSeoLocales___value___twitterCard'
  | '_allSeoLocales___value___image___size'
  | '_allSeoLocales___value___image___width'
  | '_allSeoLocales___value___image___height'
  | '_allSeoLocales___value___image___path'
  | '_allSeoLocales___value___image___format'
  | '_allSeoLocales___value___image___isImage'
  | '_allSeoLocales___value___image___notes'
  | '_allSeoLocales___value___image___author'
  | '_allSeoLocales___value___image___copyright'
  | '_allSeoLocales___value___image___tags'
  | '_allSeoLocales___value___image___smartTags'
  | '_allSeoLocales___value___image___filename'
  | '_allSeoLocales___value___image___basename'
  | '_allSeoLocales___value___image___exifInfo'
  | '_allSeoLocales___value___image___mimeType'
  | '_allSeoLocales___value___image___colors'
  | '_allSeoLocales___value___image___blurhash'
  | '_allSeoLocales___value___image___originalId'
  | '_allSeoLocales___value___image___url'
  | '_allSeoLocales___value___image___createdAt'
  | '_allSeoLocales___value___image___gatsbyImageData'
  | '_allSeoLocales___value___image___id'
  | '_allSeoLocales___value___image___children'
  | 'constructionIndustryServices'
  | 'constructionIndustryServices___serviceTitle'
  | 'constructionIndustryServices___serviceDescription'
  | 'constructionIndustryServices___serviceDescriptionNode___id'
  | 'constructionIndustryServices___serviceDescriptionNode___parent___id'
  | 'constructionIndustryServices___serviceDescriptionNode___parent___children'
  | 'constructionIndustryServices___serviceDescriptionNode___children'
  | 'constructionIndustryServices___serviceDescriptionNode___children___id'
  | 'constructionIndustryServices___serviceDescriptionNode___children___children'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___content'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___contentDigest'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___description'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___fieldOwners'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___ignoreType'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___mediaType'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___owner'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___type'
  | 'constructionIndustryServices___serviceDescriptionNode___internal___contentFilePath'
  | 'constructionIndustryServices___serviceIcon___size'
  | 'constructionIndustryServices___serviceIcon___width'
  | 'constructionIndustryServices___serviceIcon___height'
  | 'constructionIndustryServices___serviceIcon___path'
  | 'constructionIndustryServices___serviceIcon___format'
  | 'constructionIndustryServices___serviceIcon___isImage'
  | 'constructionIndustryServices___serviceIcon___notes'
  | 'constructionIndustryServices___serviceIcon___author'
  | 'constructionIndustryServices___serviceIcon___copyright'
  | 'constructionIndustryServices___serviceIcon___tags'
  | 'constructionIndustryServices___serviceIcon___smartTags'
  | 'constructionIndustryServices___serviceIcon___filename'
  | 'constructionIndustryServices___serviceIcon___basename'
  | 'constructionIndustryServices___serviceIcon___exifInfo'
  | 'constructionIndustryServices___serviceIcon___mimeType'
  | 'constructionIndustryServices___serviceIcon___colors'
  | 'constructionIndustryServices___serviceIcon___colors___red'
  | 'constructionIndustryServices___serviceIcon___colors___green'
  | 'constructionIndustryServices___serviceIcon___colors___blue'
  | 'constructionIndustryServices___serviceIcon___colors___alpha'
  | 'constructionIndustryServices___serviceIcon___colors___rgb'
  | 'constructionIndustryServices___serviceIcon___colors___hex'
  | 'constructionIndustryServices___serviceIcon___blurhash'
  | 'constructionIndustryServices___serviceIcon___originalId'
  | 'constructionIndustryServices___serviceIcon___url'
  | 'constructionIndustryServices___serviceIcon___createdAt'
  | 'constructionIndustryServices___serviceIcon___video___muxPlaybackId'
  | 'constructionIndustryServices___serviceIcon___video___frameRate'
  | 'constructionIndustryServices___serviceIcon___video___duration'
  | 'constructionIndustryServices___serviceIcon___video___streamingUrl'
  | 'constructionIndustryServices___serviceIcon___video___thumbnailUrl'
  | 'constructionIndustryServices___serviceIcon___video___mp4Url'
  | 'constructionIndustryServices___serviceIcon___fluid___base64'
  | 'constructionIndustryServices___serviceIcon___fluid___tracedSVG'
  | 'constructionIndustryServices___serviceIcon___fluid___aspectRatio'
  | 'constructionIndustryServices___serviceIcon___fluid___width'
  | 'constructionIndustryServices___serviceIcon___fluid___height'
  | 'constructionIndustryServices___serviceIcon___fluid___src'
  | 'constructionIndustryServices___serviceIcon___fluid___srcSet'
  | 'constructionIndustryServices___serviceIcon___fluid___sizes'
  | 'constructionIndustryServices___serviceIcon___sizes___base64'
  | 'constructionIndustryServices___serviceIcon___sizes___tracedSVG'
  | 'constructionIndustryServices___serviceIcon___sizes___aspectRatio'
  | 'constructionIndustryServices___serviceIcon___sizes___width'
  | 'constructionIndustryServices___serviceIcon___sizes___height'
  | 'constructionIndustryServices___serviceIcon___sizes___src'
  | 'constructionIndustryServices___serviceIcon___sizes___srcSet'
  | 'constructionIndustryServices___serviceIcon___sizes___sizes'
  | 'constructionIndustryServices___serviceIcon___fixed___base64'
  | 'constructionIndustryServices___serviceIcon___fixed___tracedSVG'
  | 'constructionIndustryServices___serviceIcon___fixed___aspectRatio'
  | 'constructionIndustryServices___serviceIcon___fixed___width'
  | 'constructionIndustryServices___serviceIcon___fixed___height'
  | 'constructionIndustryServices___serviceIcon___fixed___src'
  | 'constructionIndustryServices___serviceIcon___fixed___srcSet'
  | 'constructionIndustryServices___serviceIcon___fixed___sizes'
  | 'constructionIndustryServices___serviceIcon___resolutions___base64'
  | 'constructionIndustryServices___serviceIcon___resolutions___tracedSVG'
  | 'constructionIndustryServices___serviceIcon___resolutions___aspectRatio'
  | 'constructionIndustryServices___serviceIcon___resolutions___width'
  | 'constructionIndustryServices___serviceIcon___resolutions___height'
  | 'constructionIndustryServices___serviceIcon___resolutions___src'
  | 'constructionIndustryServices___serviceIcon___resolutions___srcSet'
  | 'constructionIndustryServices___serviceIcon___resolutions___sizes'
  | 'constructionIndustryServices___serviceIcon___gatsbyImageData'
  | 'constructionIndustryServices___serviceIcon___alt'
  | 'constructionIndustryServices___serviceIcon___title'
  | 'constructionIndustryServices___serviceIcon___customData'
  | 'constructionIndustryServices___serviceIcon___focalPoint___x'
  | 'constructionIndustryServices___serviceIcon___focalPoint___y'
  | 'constructionIndustryServices___meta___createdAt'
  | 'constructionIndustryServices___meta___updatedAt'
  | 'constructionIndustryServices___meta___publishedAt'
  | 'constructionIndustryServices___meta___firstPublishedAt'
  | 'constructionIndustryServices___meta___isValid'
  | 'constructionIndustryServices___meta___status'
  | 'constructionIndustryServices___originalId'
  | 'constructionIndustryServices___locale'
  | 'constructionIndustryServices___seoMetaTags___tags'
  | 'constructionIndustryServices___seoMetaTags___id'
  | 'constructionIndustryServices___seoMetaTags___parent___id'
  | 'constructionIndustryServices___seoMetaTags___parent___children'
  | 'constructionIndustryServices___seoMetaTags___children'
  | 'constructionIndustryServices___seoMetaTags___children___id'
  | 'constructionIndustryServices___seoMetaTags___children___children'
  | 'constructionIndustryServices___seoMetaTags___internal___content'
  | 'constructionIndustryServices___seoMetaTags___internal___contentDigest'
  | 'constructionIndustryServices___seoMetaTags___internal___description'
  | 'constructionIndustryServices___seoMetaTags___internal___fieldOwners'
  | 'constructionIndustryServices___seoMetaTags___internal___ignoreType'
  | 'constructionIndustryServices___seoMetaTags___internal___mediaType'
  | 'constructionIndustryServices___seoMetaTags___internal___owner'
  | 'constructionIndustryServices___seoMetaTags___internal___type'
  | 'constructionIndustryServices___seoMetaTags___internal___contentFilePath'
  | 'constructionIndustryServices___model___name'
  | 'constructionIndustryServices___model___singleton'
  | 'constructionIndustryServices___model___sortable'
  | 'constructionIndustryServices___model___apiKey'
  | 'constructionIndustryServices___model___orderingDirection'
  | 'constructionIndustryServices___model___tree'
  | 'constructionIndustryServices___model___modularBlock'
  | 'constructionIndustryServices___model___draftModeActive'
  | 'constructionIndustryServices___model___allLocalesRequired'
  | 'constructionIndustryServices___model___collectionAppeareance'
  | 'constructionIndustryServices___model___hasSingletonItem'
  | 'constructionIndustryServices___model___originalId'
  | 'constructionIndustryServices___model___fields___tags'
  | 'constructionIndustryServices___model___fields___id'
  | 'constructionIndustryServices___model___fields___children'
  | 'constructionIndustryServices___model___id'
  | 'constructionIndustryServices___model___parent___id'
  | 'constructionIndustryServices___model___parent___children'
  | 'constructionIndustryServices___model___children'
  | 'constructionIndustryServices___model___children___id'
  | 'constructionIndustryServices___model___children___children'
  | 'constructionIndustryServices___model___internal___content'
  | 'constructionIndustryServices___model___internal___contentDigest'
  | 'constructionIndustryServices___model___internal___description'
  | 'constructionIndustryServices___model___internal___fieldOwners'
  | 'constructionIndustryServices___model___internal___ignoreType'
  | 'constructionIndustryServices___model___internal___mediaType'
  | 'constructionIndustryServices___model___internal___owner'
  | 'constructionIndustryServices___model___internal___type'
  | 'constructionIndustryServices___model___internal___contentFilePath'
  | 'constructionIndustryServices___id'
  | 'constructionIndustryServices___parent___id'
  | 'constructionIndustryServices___parent___parent___id'
  | 'constructionIndustryServices___parent___parent___children'
  | 'constructionIndustryServices___parent___children'
  | 'constructionIndustryServices___parent___children___id'
  | 'constructionIndustryServices___parent___children___children'
  | 'constructionIndustryServices___parent___internal___content'
  | 'constructionIndustryServices___parent___internal___contentDigest'
  | 'constructionIndustryServices___parent___internal___description'
  | 'constructionIndustryServices___parent___internal___fieldOwners'
  | 'constructionIndustryServices___parent___internal___ignoreType'
  | 'constructionIndustryServices___parent___internal___mediaType'
  | 'constructionIndustryServices___parent___internal___owner'
  | 'constructionIndustryServices___parent___internal___type'
  | 'constructionIndustryServices___parent___internal___contentFilePath'
  | 'constructionIndustryServices___children'
  | 'constructionIndustryServices___children___id'
  | 'constructionIndustryServices___children___parent___id'
  | 'constructionIndustryServices___children___parent___children'
  | 'constructionIndustryServices___children___children'
  | 'constructionIndustryServices___children___children___id'
  | 'constructionIndustryServices___children___children___children'
  | 'constructionIndustryServices___children___internal___content'
  | 'constructionIndustryServices___children___internal___contentDigest'
  | 'constructionIndustryServices___children___internal___description'
  | 'constructionIndustryServices___children___internal___fieldOwners'
  | 'constructionIndustryServices___children___internal___ignoreType'
  | 'constructionIndustryServices___children___internal___mediaType'
  | 'constructionIndustryServices___children___internal___owner'
  | 'constructionIndustryServices___children___internal___type'
  | 'constructionIndustryServices___children___internal___contentFilePath'
  | 'constructionIndustryServices___internal___content'
  | 'constructionIndustryServices___internal___contentDigest'
  | 'constructionIndustryServices___internal___description'
  | 'constructionIndustryServices___internal___fieldOwners'
  | 'constructionIndustryServices___internal___ignoreType'
  | 'constructionIndustryServices___internal___mediaType'
  | 'constructionIndustryServices___internal___owner'
  | 'constructionIndustryServices___internal___type'
  | 'constructionIndustryServices___internal___contentFilePath'
  | '_allConstructionIndustryServicesLocales'
  | '_allConstructionIndustryServicesLocales___locale'
  | '_allConstructionIndustryServicesLocales___value'
  | '_allConstructionIndustryServicesLocales___value___serviceTitle'
  | '_allConstructionIndustryServicesLocales___value___serviceDescription'
  | '_allConstructionIndustryServicesLocales___value___serviceDescriptionNode___id'
  | '_allConstructionIndustryServicesLocales___value___serviceDescriptionNode___children'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___size'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___width'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___height'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___path'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___format'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___isImage'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___notes'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___author'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___copyright'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___tags'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___smartTags'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___filename'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___basename'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___exifInfo'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___mimeType'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___colors'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___blurhash'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___originalId'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___url'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___createdAt'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___gatsbyImageData'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___alt'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___title'
  | '_allConstructionIndustryServicesLocales___value___serviceIcon___customData'
  | '_allConstructionIndustryServicesLocales___value___meta___createdAt'
  | '_allConstructionIndustryServicesLocales___value___meta___updatedAt'
  | '_allConstructionIndustryServicesLocales___value___meta___publishedAt'
  | '_allConstructionIndustryServicesLocales___value___meta___firstPublishedAt'
  | '_allConstructionIndustryServicesLocales___value___meta___isValid'
  | '_allConstructionIndustryServicesLocales___value___meta___status'
  | '_allConstructionIndustryServicesLocales___value___originalId'
  | '_allConstructionIndustryServicesLocales___value___locale'
  | '_allConstructionIndustryServicesLocales___value___seoMetaTags___tags'
  | '_allConstructionIndustryServicesLocales___value___seoMetaTags___id'
  | '_allConstructionIndustryServicesLocales___value___seoMetaTags___children'
  | '_allConstructionIndustryServicesLocales___value___model___name'
  | '_allConstructionIndustryServicesLocales___value___model___singleton'
  | '_allConstructionIndustryServicesLocales___value___model___sortable'
  | '_allConstructionIndustryServicesLocales___value___model___apiKey'
  | '_allConstructionIndustryServicesLocales___value___model___orderingDirection'
  | '_allConstructionIndustryServicesLocales___value___model___tree'
  | '_allConstructionIndustryServicesLocales___value___model___modularBlock'
  | '_allConstructionIndustryServicesLocales___value___model___draftModeActive'
  | '_allConstructionIndustryServicesLocales___value___model___allLocalesRequired'
  | '_allConstructionIndustryServicesLocales___value___model___collectionAppeareance'
  | '_allConstructionIndustryServicesLocales___value___model___hasSingletonItem'
  | '_allConstructionIndustryServicesLocales___value___model___originalId'
  | '_allConstructionIndustryServicesLocales___value___model___id'
  | '_allConstructionIndustryServicesLocales___value___model___children'
  | '_allConstructionIndustryServicesLocales___value___id'
  | '_allConstructionIndustryServicesLocales___value___parent___id'
  | '_allConstructionIndustryServicesLocales___value___parent___children'
  | '_allConstructionIndustryServicesLocales___value___children'
  | '_allConstructionIndustryServicesLocales___value___children___id'
  | '_allConstructionIndustryServicesLocales___value___children___children'
  | '_allConstructionIndustryServicesLocales___value___internal___content'
  | '_allConstructionIndustryServicesLocales___value___internal___contentDigest'
  | '_allConstructionIndustryServicesLocales___value___internal___description'
  | '_allConstructionIndustryServicesLocales___value___internal___fieldOwners'
  | '_allConstructionIndustryServicesLocales___value___internal___ignoreType'
  | '_allConstructionIndustryServicesLocales___value___internal___mediaType'
  | '_allConstructionIndustryServicesLocales___value___internal___owner'
  | '_allConstructionIndustryServicesLocales___value___internal___type'
  | '_allConstructionIndustryServicesLocales___value___internal___contentFilePath'
  | 'servicesPageTitle'
  | '_allServicesPageTitleLocales'
  | '_allServicesPageTitleLocales___locale'
  | '_allServicesPageTitleLocales___value'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsServicesPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsServicesPageEdge>;
  nodes: Array<DatoCmsServicesPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsServicesPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsServicesPageGroupConnectionDistinctArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageGroupConnectionMaxArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageGroupConnectionMinArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageGroupConnectionSumArgs = {
  field: DatoCmsServicesPageFieldsEnum;
};


export type DatoCmsServicesPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsServicesPageFieldsEnum;
};

export type DatoCmsServicesPageFilterInput = {
  constructionIndustryServicesTitle?: InputMaybe<StringQueryOperatorInput>;
  _allConstructionIndustryServicesTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesTitleFilterListInput>;
  mainServices?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allMainServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageMainServicesFilterListInput>;
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageSeoFilterListInput>;
  constructionIndustryServices?: InputMaybe<DatoCmsServiceFilterListInput>;
  _allConstructionIndustryServicesLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageConstructionIndustryServicesFilterListInput>;
  servicesPageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allServicesPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsServicesPageServicesPageTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsServicesPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsServicesPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageSeoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageSeoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageSeoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPagePageTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPagePageTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPagePageTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCompanyNameFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCompanyNameFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCompanyNameFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCallUsTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCallUsTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsContactPageCallUsTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsContactPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsContactPageEdge>;
  nodes: Array<DatoCmsContactPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsContactPageGroupConnection>;
};


export type DatoCmsContactPageConnectionDistinctArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageConnectionMaxArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageConnectionMinArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageConnectionSumArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsContactPageFieldsEnum;
};

export type DatoCmsContactPageEdge = {
  next?: Maybe<DatoCmsContactPage>;
  node: DatoCmsContactPage;
  previous?: Maybe<DatoCmsContactPage>;
};

export type DatoCmsContactPageFieldsEnum =
  | 'seo___title'
  | 'seo___description'
  | 'seo___twitterCard'
  | 'seo___image___size'
  | 'seo___image___width'
  | 'seo___image___height'
  | 'seo___image___path'
  | 'seo___image___format'
  | 'seo___image___isImage'
  | 'seo___image___notes'
  | 'seo___image___author'
  | 'seo___image___copyright'
  | 'seo___image___tags'
  | 'seo___image___smartTags'
  | 'seo___image___filename'
  | 'seo___image___basename'
  | 'seo___image___exifInfo'
  | 'seo___image___mimeType'
  | 'seo___image___colors'
  | 'seo___image___colors___red'
  | 'seo___image___colors___green'
  | 'seo___image___colors___blue'
  | 'seo___image___colors___alpha'
  | 'seo___image___colors___rgb'
  | 'seo___image___colors___hex'
  | 'seo___image___blurhash'
  | 'seo___image___originalId'
  | 'seo___image___url'
  | 'seo___image___createdAt'
  | 'seo___image___video___muxPlaybackId'
  | 'seo___image___video___frameRate'
  | 'seo___image___video___duration'
  | 'seo___image___video___streamingUrl'
  | 'seo___image___video___thumbnailUrl'
  | 'seo___image___video___mp4Url'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___width'
  | 'seo___image___fluid___height'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___width'
  | 'seo___image___sizes___height'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___sizes'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___sizes'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___sizes'
  | 'seo___image___gatsbyImageData'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___internal___contentFilePath'
  | '_allSeoLocales'
  | '_allSeoLocales___locale'
  | '_allSeoLocales___value___title'
  | '_allSeoLocales___value___description'
  | '_allSeoLocales___value___twitterCard'
  | '_allSeoLocales___value___image___size'
  | '_allSeoLocales___value___image___width'
  | '_allSeoLocales___value___image___height'
  | '_allSeoLocales___value___image___path'
  | '_allSeoLocales___value___image___format'
  | '_allSeoLocales___value___image___isImage'
  | '_allSeoLocales___value___image___notes'
  | '_allSeoLocales___value___image___author'
  | '_allSeoLocales___value___image___copyright'
  | '_allSeoLocales___value___image___tags'
  | '_allSeoLocales___value___image___smartTags'
  | '_allSeoLocales___value___image___filename'
  | '_allSeoLocales___value___image___basename'
  | '_allSeoLocales___value___image___exifInfo'
  | '_allSeoLocales___value___image___mimeType'
  | '_allSeoLocales___value___image___colors'
  | '_allSeoLocales___value___image___blurhash'
  | '_allSeoLocales___value___image___originalId'
  | '_allSeoLocales___value___image___url'
  | '_allSeoLocales___value___image___createdAt'
  | '_allSeoLocales___value___image___gatsbyImageData'
  | '_allSeoLocales___value___image___id'
  | '_allSeoLocales___value___image___children'
  | 'backgroundImage___size'
  | 'backgroundImage___width'
  | 'backgroundImage___height'
  | 'backgroundImage___path'
  | 'backgroundImage___format'
  | 'backgroundImage___isImage'
  | 'backgroundImage___notes'
  | 'backgroundImage___author'
  | 'backgroundImage___copyright'
  | 'backgroundImage___tags'
  | 'backgroundImage___smartTags'
  | 'backgroundImage___filename'
  | 'backgroundImage___basename'
  | 'backgroundImage___exifInfo'
  | 'backgroundImage___mimeType'
  | 'backgroundImage___colors'
  | 'backgroundImage___colors___red'
  | 'backgroundImage___colors___green'
  | 'backgroundImage___colors___blue'
  | 'backgroundImage___colors___alpha'
  | 'backgroundImage___colors___rgb'
  | 'backgroundImage___colors___hex'
  | 'backgroundImage___blurhash'
  | 'backgroundImage___originalId'
  | 'backgroundImage___url'
  | 'backgroundImage___createdAt'
  | 'backgroundImage___video___muxPlaybackId'
  | 'backgroundImage___video___frameRate'
  | 'backgroundImage___video___duration'
  | 'backgroundImage___video___streamingUrl'
  | 'backgroundImage___video___thumbnailUrl'
  | 'backgroundImage___video___mp4Url'
  | 'backgroundImage___fluid___base64'
  | 'backgroundImage___fluid___tracedSVG'
  | 'backgroundImage___fluid___aspectRatio'
  | 'backgroundImage___fluid___width'
  | 'backgroundImage___fluid___height'
  | 'backgroundImage___fluid___src'
  | 'backgroundImage___fluid___srcSet'
  | 'backgroundImage___fluid___sizes'
  | 'backgroundImage___sizes___base64'
  | 'backgroundImage___sizes___tracedSVG'
  | 'backgroundImage___sizes___aspectRatio'
  | 'backgroundImage___sizes___width'
  | 'backgroundImage___sizes___height'
  | 'backgroundImage___sizes___src'
  | 'backgroundImage___sizes___srcSet'
  | 'backgroundImage___sizes___sizes'
  | 'backgroundImage___fixed___base64'
  | 'backgroundImage___fixed___tracedSVG'
  | 'backgroundImage___fixed___aspectRatio'
  | 'backgroundImage___fixed___width'
  | 'backgroundImage___fixed___height'
  | 'backgroundImage___fixed___src'
  | 'backgroundImage___fixed___srcSet'
  | 'backgroundImage___fixed___sizes'
  | 'backgroundImage___resolutions___base64'
  | 'backgroundImage___resolutions___tracedSVG'
  | 'backgroundImage___resolutions___aspectRatio'
  | 'backgroundImage___resolutions___width'
  | 'backgroundImage___resolutions___height'
  | 'backgroundImage___resolutions___src'
  | 'backgroundImage___resolutions___srcSet'
  | 'backgroundImage___resolutions___sizes'
  | 'backgroundImage___gatsbyImageData'
  | 'backgroundImage___alt'
  | 'backgroundImage___title'
  | 'backgroundImage___customData'
  | 'backgroundImage___focalPoint___x'
  | 'backgroundImage___focalPoint___y'
  | 'pageTitle'
  | '_allPageTitleLocales'
  | '_allPageTitleLocales___locale'
  | '_allPageTitleLocales___value'
  | 'companyName'
  | '_allCompanyNameLocales'
  | '_allCompanyNameLocales___locale'
  | '_allCompanyNameLocales___value'
  | 'ourEmailTitle'
  | '_allOurEmailTitleLocales'
  | '_allOurEmailTitleLocales___locale'
  | '_allOurEmailTitleLocales___value'
  | 'email'
  | 'callUsTitle'
  | '_allCallUsTitleLocales'
  | '_allCallUsTitleLocales___locale'
  | '_allCallUsTitleLocales___value'
  | 'phoneNumber'
  | 'secondPhoneNumber'
  | 'facebookUrl'
  | 'instagramUrl'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsContactPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsContactPageEdge>;
  nodes: Array<DatoCmsContactPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsContactPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsContactPageGroupConnectionDistinctArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageGroupConnectionMaxArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageGroupConnectionMinArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageGroupConnectionSumArgs = {
  field: DatoCmsContactPageFieldsEnum;
};


export type DatoCmsContactPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsContactPageFieldsEnum;
};

export type DatoCmsContactPageFilterInput = {
  seo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  _allSeoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageSeoFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  pageTitle?: InputMaybe<StringQueryOperatorInput>;
  _allPageTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPagePageTitleFilterListInput>;
  companyName?: InputMaybe<StringQueryOperatorInput>;
  _allCompanyNameLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCompanyNameFilterListInput>;
  ourEmailTitle?: InputMaybe<StringQueryOperatorInput>;
  _allOurEmailTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageOurEmailTitleFilterListInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  callUsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allCallUsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsContactPageCallUsTitleFilterListInput>;
  phoneNumber?: InputMaybe<StringQueryOperatorInput>;
  secondPhoneNumber?: InputMaybe<StringQueryOperatorInput>;
  facebookUrl?: InputMaybe<StringQueryOperatorInput>;
  instagramUrl?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsContactPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsContactPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionTextFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionTextFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionTextFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
};

export type DatoCmsSiteUnderConstructionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteUnderConstructionEdge>;
  nodes: Array<DatoCmsSiteUnderConstruction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteUnderConstructionGroupConnection>;
};


export type DatoCmsSiteUnderConstructionConnectionDistinctArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionConnectionMaxArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionConnectionMinArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionConnectionSumArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};

export type DatoCmsSiteUnderConstructionEdge = {
  next?: Maybe<DatoCmsSiteUnderConstruction>;
  node: DatoCmsSiteUnderConstruction;
  previous?: Maybe<DatoCmsSiteUnderConstruction>;
};

export type DatoCmsSiteUnderConstructionFieldsEnum =
  | 'siteUnderConstructionText'
  | 'siteUnderConstructionTextNode___id'
  | 'siteUnderConstructionTextNode___parent___id'
  | 'siteUnderConstructionTextNode___parent___parent___id'
  | 'siteUnderConstructionTextNode___parent___parent___children'
  | 'siteUnderConstructionTextNode___parent___children'
  | 'siteUnderConstructionTextNode___parent___children___id'
  | 'siteUnderConstructionTextNode___parent___children___children'
  | 'siteUnderConstructionTextNode___parent___internal___content'
  | 'siteUnderConstructionTextNode___parent___internal___contentDigest'
  | 'siteUnderConstructionTextNode___parent___internal___description'
  | 'siteUnderConstructionTextNode___parent___internal___fieldOwners'
  | 'siteUnderConstructionTextNode___parent___internal___ignoreType'
  | 'siteUnderConstructionTextNode___parent___internal___mediaType'
  | 'siteUnderConstructionTextNode___parent___internal___owner'
  | 'siteUnderConstructionTextNode___parent___internal___type'
  | 'siteUnderConstructionTextNode___parent___internal___contentFilePath'
  | 'siteUnderConstructionTextNode___children'
  | 'siteUnderConstructionTextNode___children___id'
  | 'siteUnderConstructionTextNode___children___parent___id'
  | 'siteUnderConstructionTextNode___children___parent___children'
  | 'siteUnderConstructionTextNode___children___children'
  | 'siteUnderConstructionTextNode___children___children___id'
  | 'siteUnderConstructionTextNode___children___children___children'
  | 'siteUnderConstructionTextNode___children___internal___content'
  | 'siteUnderConstructionTextNode___children___internal___contentDigest'
  | 'siteUnderConstructionTextNode___children___internal___description'
  | 'siteUnderConstructionTextNode___children___internal___fieldOwners'
  | 'siteUnderConstructionTextNode___children___internal___ignoreType'
  | 'siteUnderConstructionTextNode___children___internal___mediaType'
  | 'siteUnderConstructionTextNode___children___internal___owner'
  | 'siteUnderConstructionTextNode___children___internal___type'
  | 'siteUnderConstructionTextNode___children___internal___contentFilePath'
  | 'siteUnderConstructionTextNode___internal___content'
  | 'siteUnderConstructionTextNode___internal___contentDigest'
  | 'siteUnderConstructionTextNode___internal___description'
  | 'siteUnderConstructionTextNode___internal___fieldOwners'
  | 'siteUnderConstructionTextNode___internal___ignoreType'
  | 'siteUnderConstructionTextNode___internal___mediaType'
  | 'siteUnderConstructionTextNode___internal___owner'
  | 'siteUnderConstructionTextNode___internal___type'
  | 'siteUnderConstructionTextNode___internal___contentFilePath'
  | '_allSiteUnderConstructionTextLocales'
  | '_allSiteUnderConstructionTextLocales___locale'
  | '_allSiteUnderConstructionTextLocales___value'
  | '_allSiteUnderConstructionTextLocales___valueNode___id'
  | '_allSiteUnderConstructionTextLocales___valueNode___parent___id'
  | '_allSiteUnderConstructionTextLocales___valueNode___parent___children'
  | '_allSiteUnderConstructionTextLocales___valueNode___children'
  | '_allSiteUnderConstructionTextLocales___valueNode___children___id'
  | '_allSiteUnderConstructionTextLocales___valueNode___children___children'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___content'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___contentDigest'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___description'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___fieldOwners'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___ignoreType'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___mediaType'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___owner'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___type'
  | '_allSiteUnderConstructionTextLocales___valueNode___internal___contentFilePath'
  | 'backgroundImage___size'
  | 'backgroundImage___width'
  | 'backgroundImage___height'
  | 'backgroundImage___path'
  | 'backgroundImage___format'
  | 'backgroundImage___isImage'
  | 'backgroundImage___notes'
  | 'backgroundImage___author'
  | 'backgroundImage___copyright'
  | 'backgroundImage___tags'
  | 'backgroundImage___smartTags'
  | 'backgroundImage___filename'
  | 'backgroundImage___basename'
  | 'backgroundImage___exifInfo'
  | 'backgroundImage___mimeType'
  | 'backgroundImage___colors'
  | 'backgroundImage___colors___red'
  | 'backgroundImage___colors___green'
  | 'backgroundImage___colors___blue'
  | 'backgroundImage___colors___alpha'
  | 'backgroundImage___colors___rgb'
  | 'backgroundImage___colors___hex'
  | 'backgroundImage___blurhash'
  | 'backgroundImage___originalId'
  | 'backgroundImage___url'
  | 'backgroundImage___createdAt'
  | 'backgroundImage___video___muxPlaybackId'
  | 'backgroundImage___video___frameRate'
  | 'backgroundImage___video___duration'
  | 'backgroundImage___video___streamingUrl'
  | 'backgroundImage___video___thumbnailUrl'
  | 'backgroundImage___video___mp4Url'
  | 'backgroundImage___fluid___base64'
  | 'backgroundImage___fluid___tracedSVG'
  | 'backgroundImage___fluid___aspectRatio'
  | 'backgroundImage___fluid___width'
  | 'backgroundImage___fluid___height'
  | 'backgroundImage___fluid___src'
  | 'backgroundImage___fluid___srcSet'
  | 'backgroundImage___fluid___sizes'
  | 'backgroundImage___sizes___base64'
  | 'backgroundImage___sizes___tracedSVG'
  | 'backgroundImage___sizes___aspectRatio'
  | 'backgroundImage___sizes___width'
  | 'backgroundImage___sizes___height'
  | 'backgroundImage___sizes___src'
  | 'backgroundImage___sizes___srcSet'
  | 'backgroundImage___sizes___sizes'
  | 'backgroundImage___fixed___base64'
  | 'backgroundImage___fixed___tracedSVG'
  | 'backgroundImage___fixed___aspectRatio'
  | 'backgroundImage___fixed___width'
  | 'backgroundImage___fixed___height'
  | 'backgroundImage___fixed___src'
  | 'backgroundImage___fixed___srcSet'
  | 'backgroundImage___fixed___sizes'
  | 'backgroundImage___resolutions___base64'
  | 'backgroundImage___resolutions___tracedSVG'
  | 'backgroundImage___resolutions___aspectRatio'
  | 'backgroundImage___resolutions___width'
  | 'backgroundImage___resolutions___height'
  | 'backgroundImage___resolutions___src'
  | 'backgroundImage___resolutions___srcSet'
  | 'backgroundImage___resolutions___sizes'
  | 'backgroundImage___gatsbyImageData'
  | 'backgroundImage___alt'
  | 'backgroundImage___title'
  | 'backgroundImage___customData'
  | 'backgroundImage___focalPoint___x'
  | 'backgroundImage___focalPoint___y'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___parent___internal___contentFilePath'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___children___internal___contentFilePath'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'seoMetaTags___internal___contentFilePath'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___fields___internal___contentFilePath'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___parent___internal___contentFilePath'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___children___internal___contentFilePath'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'model___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsSiteUnderConstructionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteUnderConstructionEdge>;
  nodes: Array<DatoCmsSiteUnderConstruction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteUnderConstructionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSiteUnderConstructionGroupConnectionDistinctArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionGroupConnectionMaxArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionGroupConnectionMinArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionGroupConnectionSumArgs = {
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};


export type DatoCmsSiteUnderConstructionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteUnderConstructionFieldsEnum;
};

export type DatoCmsSiteUnderConstructionFilterInput = {
  siteUnderConstructionText?: InputMaybe<StringQueryOperatorInput>;
  siteUnderConstructionTextNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  _allSiteUnderConstructionTextLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsSiteUnderConstructionSiteUnderConstructionTextFilterListInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSiteUnderConstructionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSiteUnderConstructionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAssetGroupConnection>;
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionMaxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionMinArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionSumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
};

export type DatoCmsAssetFieldsEnum =
  | 'size'
  | 'width'
  | 'height'
  | 'path'
  | 'format'
  | 'isImage'
  | 'notes'
  | 'author'
  | 'copyright'
  | 'tags'
  | 'smartTags'
  | 'filename'
  | 'basename'
  | 'exifInfo'
  | 'mimeType'
  | 'colors'
  | 'colors___red'
  | 'colors___green'
  | 'colors___blue'
  | 'colors___alpha'
  | 'colors___rgb'
  | 'colors___hex'
  | 'blurhash'
  | 'originalId'
  | 'url'
  | 'createdAt'
  | 'video___muxPlaybackId'
  | 'video___frameRate'
  | 'video___duration'
  | 'video___streamingUrl'
  | 'video___thumbnailUrl'
  | 'video___mp4Url'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___width'
  | 'fluid___height'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___width'
  | 'sizes___height'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___sizes'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___sizes'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___sizes'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetGroupConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionMaxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionMinArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionSumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsGlobalSeoFilterInput = {
  siteName?: InputMaybe<StringQueryOperatorInput>;
  titleSuffix?: InputMaybe<StringQueryOperatorInput>;
  twitterAccount?: InputMaybe<StringQueryOperatorInput>;
  facebookPageUrl?: InputMaybe<StringQueryOperatorInput>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteGroupConnection>;
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionMaxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionMinArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionSumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
};

export type DatoCmsSiteFieldsEnum =
  | 'name'
  | 'locale'
  | 'locales'
  | 'domain'
  | 'internalDomain'
  | 'noIndex'
  | 'globalSeo___siteName'
  | 'globalSeo___titleSuffix'
  | 'globalSeo___twitterAccount'
  | 'globalSeo___facebookPageUrl'
  | 'globalSeo___fallbackSeo___title'
  | 'globalSeo___fallbackSeo___description'
  | 'globalSeo___fallbackSeo___twitterCard'
  | 'globalSeo___fallbackSeo___image___size'
  | 'globalSeo___fallbackSeo___image___width'
  | 'globalSeo___fallbackSeo___image___height'
  | 'globalSeo___fallbackSeo___image___path'
  | 'globalSeo___fallbackSeo___image___format'
  | 'globalSeo___fallbackSeo___image___isImage'
  | 'globalSeo___fallbackSeo___image___notes'
  | 'globalSeo___fallbackSeo___image___author'
  | 'globalSeo___fallbackSeo___image___copyright'
  | 'globalSeo___fallbackSeo___image___tags'
  | 'globalSeo___fallbackSeo___image___smartTags'
  | 'globalSeo___fallbackSeo___image___filename'
  | 'globalSeo___fallbackSeo___image___basename'
  | 'globalSeo___fallbackSeo___image___exifInfo'
  | 'globalSeo___fallbackSeo___image___mimeType'
  | 'globalSeo___fallbackSeo___image___colors'
  | 'globalSeo___fallbackSeo___image___blurhash'
  | 'globalSeo___fallbackSeo___image___originalId'
  | 'globalSeo___fallbackSeo___image___url'
  | 'globalSeo___fallbackSeo___image___createdAt'
  | 'globalSeo___fallbackSeo___image___gatsbyImageData'
  | 'globalSeo___fallbackSeo___image___id'
  | 'globalSeo___fallbackSeo___image___children'
  | 'faviconMetaTags___tags'
  | 'faviconMetaTags___id'
  | 'faviconMetaTags___parent___id'
  | 'faviconMetaTags___parent___parent___id'
  | 'faviconMetaTags___parent___parent___children'
  | 'faviconMetaTags___parent___children'
  | 'faviconMetaTags___parent___children___id'
  | 'faviconMetaTags___parent___children___children'
  | 'faviconMetaTags___parent___internal___content'
  | 'faviconMetaTags___parent___internal___contentDigest'
  | 'faviconMetaTags___parent___internal___description'
  | 'faviconMetaTags___parent___internal___fieldOwners'
  | 'faviconMetaTags___parent___internal___ignoreType'
  | 'faviconMetaTags___parent___internal___mediaType'
  | 'faviconMetaTags___parent___internal___owner'
  | 'faviconMetaTags___parent___internal___type'
  | 'faviconMetaTags___parent___internal___contentFilePath'
  | 'faviconMetaTags___children'
  | 'faviconMetaTags___children___id'
  | 'faviconMetaTags___children___parent___id'
  | 'faviconMetaTags___children___parent___children'
  | 'faviconMetaTags___children___children'
  | 'faviconMetaTags___children___children___id'
  | 'faviconMetaTags___children___children___children'
  | 'faviconMetaTags___children___internal___content'
  | 'faviconMetaTags___children___internal___contentDigest'
  | 'faviconMetaTags___children___internal___description'
  | 'faviconMetaTags___children___internal___fieldOwners'
  | 'faviconMetaTags___children___internal___ignoreType'
  | 'faviconMetaTags___children___internal___mediaType'
  | 'faviconMetaTags___children___internal___owner'
  | 'faviconMetaTags___children___internal___type'
  | 'faviconMetaTags___children___internal___contentFilePath'
  | 'faviconMetaTags___internal___content'
  | 'faviconMetaTags___internal___contentDigest'
  | 'faviconMetaTags___internal___description'
  | 'faviconMetaTags___internal___fieldOwners'
  | 'faviconMetaTags___internal___ignoreType'
  | 'faviconMetaTags___internal___mediaType'
  | 'faviconMetaTags___internal___owner'
  | 'faviconMetaTags___internal___type'
  | 'faviconMetaTags___internal___contentFilePath'
  | 'originalId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSiteGroupConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionMaxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionMinArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionSumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsFaviconMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
};


export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionMaxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionMinArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionSumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  next?: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous?: Maybe<DatoCmsFaviconMetaTags>;
};

export type DatoCmsFaviconMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsFaviconMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsFaviconMetaTagsGroupConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionMaxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionMinArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionSumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFieldGroupConnection>;
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionMaxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionMinArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionSumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
};

export type DatoCmsFieldFieldsEnum =
  | 'label'
  | 'fieldType'
  | 'apiKey'
  | 'localized'
  | 'validators'
  | 'position'
  | 'appeareance'
  | 'defaultValue'
  | 'originalId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsFieldGroupConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionMaxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionMinArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionSumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldFilterInput = {
  label?: InputMaybe<StringQueryOperatorInput>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFieldSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsFieldFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsModelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsModelGroupConnection>;
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionMaxArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionMinArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionSumArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
};

export type DatoCmsModelFieldsEnum =
  | 'name'
  | 'singleton'
  | 'sortable'
  | 'apiKey'
  | 'orderingDirection'
  | 'tree'
  | 'modularBlock'
  | 'draftModeActive'
  | 'allLocalesRequired'
  | 'collectionAppeareance'
  | 'hasSingletonItem'
  | 'originalId'
  | 'fields___tags'
  | 'fields___id'
  | 'fields___parent___id'
  | 'fields___parent___parent___id'
  | 'fields___parent___parent___children'
  | 'fields___parent___children'
  | 'fields___parent___children___id'
  | 'fields___parent___children___children'
  | 'fields___parent___internal___content'
  | 'fields___parent___internal___contentDigest'
  | 'fields___parent___internal___description'
  | 'fields___parent___internal___fieldOwners'
  | 'fields___parent___internal___ignoreType'
  | 'fields___parent___internal___mediaType'
  | 'fields___parent___internal___owner'
  | 'fields___parent___internal___type'
  | 'fields___parent___internal___contentFilePath'
  | 'fields___children'
  | 'fields___children___id'
  | 'fields___children___parent___id'
  | 'fields___children___parent___children'
  | 'fields___children___children'
  | 'fields___children___children___id'
  | 'fields___children___children___children'
  | 'fields___children___internal___content'
  | 'fields___children___internal___contentDigest'
  | 'fields___children___internal___description'
  | 'fields___children___internal___fieldOwners'
  | 'fields___children___internal___ignoreType'
  | 'fields___children___internal___mediaType'
  | 'fields___children___internal___owner'
  | 'fields___children___internal___type'
  | 'fields___children___internal___contentFilePath'
  | 'fields___internal___content'
  | 'fields___internal___contentDigest'
  | 'fields___internal___description'
  | 'fields___internal___fieldOwners'
  | 'fields___internal___ignoreType'
  | 'fields___internal___mediaType'
  | 'fields___internal___owner'
  | 'fields___internal___type'
  | 'fields___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DatoCmsModelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsModelGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsModelGroupConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionMaxArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionMinArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionSumArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsModelFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type HomeAboutUsFieldsFragment = { aboutUsTextContent?: string | null, aboutUsTitle?: string | null, aboutBackgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null };

export type HomeCoverFieldsFragment = { backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null, logo?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null };

export type HomeProjectsFieldsFragment = { seeAllProjectsButtonTitle?: string | null, projects?: Array<{ projectTitle?: string | null, slug?: string | null, projectImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null };

export type HomeServicesFieldsFragment = { servicesSectionTitle?: string | null, seeAllServicesButtonTitle?: string | null, services?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null };

export type HeaderFieldsFragment = { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null };

export type ContactFieldsFragment = { pageTitle?: string | null, ourEmailTitle?: string | null, email?: string | null, callUsTitle?: string | null, phoneNumber?: string | null, secondPhoneNumber?: string | null, companyName?: string | null, facebookUrl?: string | null, instagramUrl?: string | null, seo?: { title?: string | null, description?: string | null } | null, backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null };

export type ContactQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ContactQuery = { datoCmsContactPage?: { pageTitle?: string | null, ourEmailTitle?: string | null, email?: string | null, callUsTitle?: string | null, phoneNumber?: string | null, secondPhoneNumber?: string | null, companyName?: string | null, facebookUrl?: string | null, instagramUrl?: string | null, seo?: { title?: string | null, description?: string | null } | null, backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null, datoCmsHeader?: { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null } | null };

export type HomeQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type HomeQuery = { datoCmsHomePage?: { siteUnderConstruction?: boolean | null, aboutUsTextContent?: string | null, aboutUsTitle?: string | null, servicesSectionTitle?: string | null, seeAllServicesButtonTitle?: string | null, seeAllProjectsButtonTitle?: string | null, seo?: { title?: string | null, description?: string | null } | null, backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null, logo?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null, aboutBackgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null, services?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null, projects?: Array<{ projectTitle?: string | null, slug?: string | null, projectImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null } | null, datoCmsHeader?: { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null } | null, datoCmsSiteUnderConstruction?: { siteUnderConstructionText?: string | null, backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null };

export type ProjectFieldsFragment = { id: string, title?: string | null, slug?: string | null, description?: string | null, seo?: { title?: string | null, description?: string | null } | null, mainImage?: { gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null, imagesCollection?: Array<{ gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null> | null };

export type ProjectQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ProjectQuery = { allDatoCmsProjectPage: { nodes: Array<{ id: string, title?: string | null, slug?: string | null, description?: string | null, seo?: { title?: string | null, description?: string | null } | null, mainImage?: { gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null, imagesCollection?: Array<{ gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null> | null }> }, datoCmsHeader?: { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null } | null };

export type ProjectsQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ProjectsQuery = { datoCmsAllProjectsPage?: { pageTitle?: string | null, seo?: { title?: string | null, description?: string | null } | null, projectsList?: Array<{ id: string, title?: string | null, slug?: string | null, description?: string | null, seo?: { title?: string | null, description?: string | null } | null, mainImage?: { gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null, imagesCollection?: Array<{ gatsbyImageData?: any | null, alt?: string | null, format?: string | null, url?: string | null } | null> | null } | null> | null } | null, datoCmsHeader?: { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null } | null };

export type ServicesFieldsFragment = { servicesPageTitle?: string | null, constructionIndustryServicesTitle?: string | null, seo?: { title?: string | null, description?: string | null } | null, mainServices?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null, constructionIndustryServices?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null };

export type ServicesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ServicesQuery = { datoCmsServicesPage?: { servicesPageTitle?: string | null, constructionIndustryServicesTitle?: string | null, seo?: { title?: string | null, description?: string | null } | null, mainServices?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null, constructionIndustryServices?: Array<{ serviceTitle?: string | null, serviceDescription?: string | null, serviceIcon?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null } | null> | null } | null, datoCmsHeader?: { aboutUsButtonName?: string | null, homeButtonName?: string | null, contactButtonName?: string | null, projectsButtonName?: string | null, servicesButtonName?: string | null } | null };

export type SiteUnderConstructionFieldsFragment = { siteUnderConstructionText?: string | null, backgroundImage?: { gatsbyImageData?: any | null, url?: string | null, title?: string | null, format?: string | null, alt?: string | null } | null };

export type GatsbyDatoCmsResolutionsFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsResolutions_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsResolutions_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsSizesFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsSizes_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsSizes_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFixedFragment = { base64?: string | null, width: number, height: number, aspectRatio?: number | null, src: string, srcSet: string };

export type GatsbyDatoCmsFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, aspectRatio?: number | null, src: string, srcSet: string };

export type GatsbyDatoCmsFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, aspectRatio?: number | null };

export type GatsbyDatoCmsFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFaviconMetaTagsFragment = { tags?: any | null };

export type GatsbyDatoCmsSeoMetaTagsFragment = { tags?: any | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
