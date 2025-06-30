import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

const handleResponse = (res,status,message,data=null)=>{
    res.status(status).json({
        status,
        message,
        data,
    })
}
export const createUser = async (req,res,next) =>{
    const {name,email} =req.body;
    try{
        const newUser = await createUserService(name,email);
        handleResponse(res,201,"User Created successfully",newUser);
    }catch(e){
        next(e)
    }
};

export const getAllUsers = async (req,res,next) =>{
    try{
        const users = await getAllUsersService();
        handleResponse(res,200,"User fetched successfully",users);
    }catch(e){
        next(e)
    }
};

export const getUserById = async (req,res,next) =>{
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res,404,"User not found")
        handleResponse(res,200,"User fetched successfully",user);
    }catch(e){
        next(e)
    }
};


export const updateUser = async (req,res,next) =>{
    const {name,email} = req.body;
    try{
        const updatedUser = await updateUserService(req.params.id,name,email);
        if(!updatedUser) return handleResponse(res,404,"User not found")
        handleResponse(res,200,"User fetched successfully",updatedUser);
    }catch(e){
        next(e)
    }
};

export const deleteUser = async (req,res,next) =>{
    try{
        const deletedUser = await deleteUserService(req.params.id);
        if(!deletedUser) return handleResponse(res,404,"User not found")
        handleResponse(res,200,"User deleted successfully",deletedUser);
    }catch(e){
        next(e)
    }
};