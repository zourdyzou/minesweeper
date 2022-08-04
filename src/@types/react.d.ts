import { FunctionComponent, PropsWithChildren } from "react";

export type PropsWithChildrenOnly = PropsWithChildren<unknown>;
export type ReactFCWithChildren<T> = FunctionComponent<PropsWithChildren<T>>;
