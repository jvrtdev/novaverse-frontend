'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaRegUserCircle } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Cadastro from "./Cadastro";
import Login from "./Login";

export default function User(){


return( 
    <Popover>
      <PopoverTrigger><FaRegUserCircle /></PopoverTrigger>
      
      <PopoverContent>
      <Tabs defaultValue="cadastro" className="p-10  flex items-center flex-col">
        <TabsList className="text-black">
          <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="cadastro"><Cadastro /></TabsContent>
        <TabsContent value="login"><Login /></TabsContent>
      </Tabs>
      </PopoverContent>
    </Popover>
  )
  }