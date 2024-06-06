'use client'
import { Input } from "@/components/ui/input"

import { Button } from "./ui/button"

import { SubmitHandler, useForm, Controller } from "react-hook-form"
import api from "@/services/api"
import { toast } from "sonner"



export default function Login(){
  

  const {
  register,
  handleSubmit,
  watch,
  formState: { errors }, control
  } = useForm<any>()


  
    
  const onSubmit: SubmitHandler<any> = async (data) => {
    const result = await api.post('/api/user/login', data);
    if(result.status == 200){
      console.log(result.data)
      localStorage.setItem('id', result.data.id);
      toast.success('Usuario logado com sucesso!');
    }
    toast.error("Falha na autenticação")
    
    
  } 

  return(
      <form onSubmit={handleSubmit(onSubmit)}>

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