// examples

interface APIData {
  "maps:longitude": string;
  "maps:latitude": string;
}

export type FormattingDataKeys<T> = {
  [K in keyof T as FormatKeys<K>]: T[K];
};

export type DesiredShape = FormattingDataKeys<APIData>;

type FormatKeys<T> = T extends `maps:${infer A}` ? A : T;
