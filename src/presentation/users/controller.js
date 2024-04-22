import { JwtAdapter } from "../../config/jwt.adapter.js"



export class UserController{
    constructor(userService){
        this.userService = userService
    }

    loginUser = (async (req, res) =>{
        const user = req.body 
            try {
                const userLogin = await this.userService.login(user)
                const tokenUser = {
                  name:`${userLogin.first_name} ${userLogin.last_name}`,
                  email:userLogin.email,
                  age: userLogin.age,
                  role:userLogin.role
                }
                const token = await JwtAdapter.generateToken(tokenUser)
      
                res.cookie('token', token)
                res.status(202).json({
                    ...tokenUser
                })          
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
    })

     registerUser = (async (req, res) =>{
        const user = req.body
        console.log(user);
          try {
            const newUser = await this.userService.register(user)
            const tokenUser = {
              name:`${newUser.first_name} ${newUser.last_name}`,
              email:newUser.email,
              age: newUser.age,
              role:newUser.role
            }
            const token = await JwtAdapter.generateToken(tokenUser)
  
            res.cookie('token', token)
            res.status(202).json({
                ...tokenUser
            })   
  
          } catch (error) {
              res.status(500).json({ message: error.message })
          }
     })

     logoutUser = (async (req, res) =>{
        res.cookie("token", "", {
            expires: new Date(0),
        });
    
        return res.sendStatus(200)
     })
}