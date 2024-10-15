import { Request, Response, NextFunction } from "express";
import prisma from '../DB/db.js';

// export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//     const { name, phone } = req.body;

//     try {
//         const findUser = await prisma.user.findUnique({
//             where: {
//                 phone: phone,
//             },
//         });

//         if (findUser) {
//             return res.status(401).json({ message: "Phone Number Already exists" });
            
//         }

//         const newUser = await prisma.user.create({
//             data: {
//                 name: name,
//                 phone: phone,
//             },
//         });

//         return res.status(200).json({ data: newUser, message: "New User Created" });
//     } catch (error) {
//         next(error);
//     }
// };

export const userSignup = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { name, email, password } = req.body;
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (findUser) {
            return res.status(401).json({ message: "Email Already exists" });
        }

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                // password: password,
            },
        });

        return res.status(200).json({ data: newUser, message: "New User Created" });
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
}
