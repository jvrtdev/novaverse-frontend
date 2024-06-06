'use client'
import { Input } from "@/components/ui/input"

import { Button } from "./ui/button"

import { SubmitHandler, useForm, Controller } from "react-hook-form"
import api from "@/services/api"
import { toast } from "sonner"



export default function Cadastro(){
  

  const {
  register,
  handleSubmit,
  watch,
  formState: { errors }, control
  } = useForm<any>()


  
    
  const onSubmit: SubmitHandler<any> = async (data) => {
    try{
      const result = await api.post('/api/user/create', data);
      if(result.status == 201){
        console.log(result.data.id)
        toast.success('Usuario criado com sucesso!')
      }
    } catch(error){
      console.error(error)
      toast.error("Erro no cadastro")
      return error
    }  
      
    
    
  } 

  return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username">Nome</label>
          <Input id="username" placeholder="Digite seu nome" type="text" 
          {...register("username", {required: true})}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="Digite seu email" type="email" 
          {...register("email", {required: true})}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password">Senha</label>
          <Input id="password" placeholder="Senha" type="password"
          {...register("password_hash", {required: true})}
          />
        </div>

        <div className="mb-4">
          <Button type="submit">
            Enviar
          </Button>
        </div>

      </form>
  )
}