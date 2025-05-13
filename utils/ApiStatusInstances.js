class ApiErrorInstance extends Error {
    constructor (ERR, ERR_SRC, ERR_SRC_DESC) {
        super(ERR.message);

        this.ERR_TYPE = ERR.name;
        this.ERR_MSG = ERR.message;
        this.ERR_StACKTRACE = ERR.stackTrace;
        this.ERR_SRC = this.ERR_SRC;
        this.ERR_SRC_DESC = this.ERR_SRC_DESC;
    }

    listParams () {
        const paramsList = [
            "ERR_TYPE",
            "ERR_MSG",
            "ERR_STACKTRACE",
            "ERR_SRC",
            "ERR_DESC",
        ];

        console.log(paramsList);
        return paramsList;
    }

    liatFn () {
        const fnList = [ 
            listParams,
        ];
        console.log(fnList);
    }
}




class ApiSuccessInstance {
    constructor (description, source, contents) {
        this.SRC = source;
        this.DESC = description;
        this.CONTENT = contents;
    }

    listParams () {
        const paramsList = [
            "SRC",
            "DESC",
            "CONTENT"
        ];
        
        console.log(paramsList);
        return paramsList;
    }
    
    listfn () {
        const fnList = [ 
            listParams,
        ];
        console.log(fnList);
    }
}

        
module.exports.API_ERROR = ApiErrorInstance;
module.exports.API_SUCCESS = ApiSuccessInstance;
