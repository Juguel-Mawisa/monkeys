import LoginView from "./login-view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentificattion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function LoginContainer() {
  const router = useRouter()
   const {value: isLoading, setValue:setIsLoading} = useToggle()

    const {
      handleSubmit, 
      formState: { errors }, 
      register, 
      setError, 
      reset
    } = useForm<LoginFormFieldsType>()

    const handleSignInUser = async ({email, password}:LoginFormFieldsType) => {
        const {  error } = await firebaseSignInUser(email, password)
        if(error) {
          setIsLoading(false)
          toast.error(error.message)
          return
        }
        toast.success("Bienvenue sur codeurs monkeys!")
        setIsLoading(false)
        reset()
        router.push("/mon-espace")
      }
  
    const onSubmit:SubmitHandler<LoginFormFieldsType> = async (formData) => {
      setIsLoading(true)
      const { password } = formData;

      if(password.length <= 5) {
        setError("password", {
          type: "manual",
          message: "Ton mot de passe doit contenir au moins 6 caractères"
        })
        setIsLoading(false)
        return
      } 
      handleSignInUser(formData)
    }
  return (
      <LoginView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading
        }}
      />
  )
}
