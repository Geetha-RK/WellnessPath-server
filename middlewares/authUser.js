import jwt from 'jsonwebtoken'

//user (patient) authentication middleware
const authUser = async (req,res,next) => {
    try{
        const {token} = req.headers
        if(!token){
            return res.status(400).json({success:false,message:"Not Authorized, Try Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        
        req.body.patientId = token_decode.id

        next()

    }catch(error){
        console.error('Authentication error:', error);
        let message = "Authentication failed";
        
        // Specific error messages for JWT issues
        if (error.name === 'JsonWebTokenError') {
            message = "Invalid token";
        } else if (error.name === 'TokenExpiredError') {
            message = "Token has expired, please log in again";
        }

        res.status(403).json({ success: false, message });
    
    }
}

export default authUser