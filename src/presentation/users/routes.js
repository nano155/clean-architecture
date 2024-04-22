
import {UserService } from "../services/mongo/users.service.js";
import { AuthValidate } from "../../middleware/validateToken.js";
import { Router } from "express";
import { UserController } from "./controller.js";

// export class UserRoutes extends CustomRoutes {
  
//   init(){
//     this.get("/",["PUBLIC"], (req, res) =>{
//       res.sendSuccess('Hola coders')
//     })
    
//     this.get("/current", ["USER", "USER-PREMIUM"], (req, res) =>{
//       res.sendSuccess(req.user)
//     })

   

//     this.post('/login', ["USER", "USER-PREMIUM"], AuthValidate.validateToken,  async (req, res) =>{
      
//       const user = req.body 
//       try {
//           const userLogin = await Users.login(user)
//           const tokenUser = {
//             name:`${userLogin.first_name} ${userLogin.last_name}`,
//             email:userLogin.email,
//             age: userLogin.age,
//             role:userLogin.role
//           }
//           const token = await JwtAdapter.generateToken(tokenUser)

//           res.cookie('token', token)
//           res.status(202).json({
//               ...tokenUser
//           })          
//       } catch (error) {
//           res.status(400).json({ message: error.message })
//       }
//     })

//     this.post('/register', ["PUBLIC"], async(req, res) =>{
//       const user = req.body
//       console.log(user);
//         try {
//           const newUser = await Users.register(user)
//           const tokenUser = {
//             name:`${newUser.first_name} ${newUser.last_name}`,
//             email:newUser.email,
//             age: newUser.age,
//             role:newUser.role
//           }
//           const token = await JwtAdapter.generateToken(tokenUser)

//           res.cookie('token', token)
//           res.status(202).json({
//               ...tokenUser
//           })   

//         } catch (error) {
//             res.status(500).json({ message: error.message })
//         }
//     })

//     this.delete('/logout', (req, res) =>{
//       res.cookie("token", "", {
//         expires: new Date(0),
//     });

//     return res.sendStatus(200)

//     } )


//   }
// }


export class UserRoutes{

  static get routes(){
    const router = Router()
    const userService = new UserService()
    const userController = new UserController(userService)
  
    
    
    router.post('/register', userController.registerUser)
    
    router.post('/login', userController.loginUser)
    
    router.delete('/logout', userController.logoutUser )

    return router
  }
  
}





