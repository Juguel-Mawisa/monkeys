import ForgotPasswordView from "./forgot-password-view";
import { SubmitHandler, useForm } from "react-hook-form";
import {ForgotPasswordFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";

import { sendEmailToResetPassword } from "@/api/authentificattion";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


export default function ForgotPasswordContainer() {
      const router = useRouter()
      const {value: isLoading, setValue:setIsLoading} = useToggle()
      const {
        handleSubmit, 
        formState: { errors }, 
        register,  
        reset
      } = useForm<ForgotPasswordFormFieldsType>()

      const HandleResetPassword = async ({email}:ForgotPasswordFormFieldsType) => {
        const {error } = await sendEmailToResetPassword(email)
        if(error) {
          setIsLoading(false)
          toast.error(error.message)
          return
        }
        toast.success(`Si cette adresse e-mail est associée à un compte, un lien de réinitialisation a été envoyé. ${email}`)
        setIsLoading(false)
        reset()
        router.push("/connexion")
      }
    
      const onSubmit:SubmitHandler<ForgotPasswordFormFieldsType> = async (formData) => {
        setIsLoading(true)
        HandleResetPassword(formData)
      }
  return (
      <ForgotPasswordView
        form={{
          control: null,
          onSubmit: handleSubmit(onSubmit),
          errors: errors,
          isLoading: isLoading,
          register: register,
          handleSubmit: handleSubmit
        }}
      />
  )
}
