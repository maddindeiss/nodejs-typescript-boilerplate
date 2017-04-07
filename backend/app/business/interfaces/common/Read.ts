'use strict';

interface Read<T> {
    read: (callback: (error: any, result: T)=> void)=> void ;
    findById: (_id: string, callback: (error:any, result: T) => void) => void;        
}

export = Read;
