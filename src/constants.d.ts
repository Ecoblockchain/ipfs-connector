export declare const events: {
    DOWNLOAD_STARTED: string;
    BINARY_CORRUPTED: string;
    SERVICE_STARTING: string;
    SERVICE_STARTED: string;
    SERVICE_STOPPING: string;
    SERVICE_STOPPED: string;
    SERVICE_FAILED: string;
    IPFS_INITING: string;
    IPFS_INIT: string;
    ERROR: string;
};
export declare const options: {
    retry: boolean;
    apiAddress: string;
    args: string[];
    executable: string;
    extra: {
        env: any;
        detached: boolean;
    };
};
