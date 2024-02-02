export const attachFile = (req,res,next) => {
    if(req.files?.cvFile) return next()
}