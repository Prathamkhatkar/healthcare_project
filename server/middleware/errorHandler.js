const { constants } = require("../constant/constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.
    statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.join({
                title:"Validation Failed",
                message:err.message,
                stackTrace:err.stack,
            });

            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
        case constants.UNAUTHORISED:
            res.json({
                title: "Unauthorised",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                message:err.message,
                stackTrace:err.stack,
            });

        default:
            console.log("No error , All Good!!");
            break;

    }
}
module.exports= errorHandler;