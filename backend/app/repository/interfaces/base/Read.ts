interface Read<T> {
    read: (callback: (error: any, result: any)=> void)=> void;
    findById: (id: string, callback: (error:any, result: T) => void) => void;    
}

export = Read;
