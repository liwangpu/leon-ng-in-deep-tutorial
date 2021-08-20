import { InjectionToken } from '@angular/core';

export interface IChildMetadata {
    key: string;
    title: string;
}

export const TAB_PAGE_METADATA: InjectionToken<IChildMetadata> = new InjectionToken<IChildMetadata>('child metadata');