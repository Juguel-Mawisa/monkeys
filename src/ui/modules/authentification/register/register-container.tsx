import { SubmitHandler, useForm } from "react-hook-form";
import RegisterView from "./register-view";
import { RegisterFormFieldsType } from "@/types/forms";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentificattion";
import {  toast } from 'react-toastify';
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument} from "@/api/firestore";


export default function RegisterContainer() {
  const {value: isLoading, setValue: setIsLoading} = useToggle({initial: false})
  const {
    handleSubmit, 
    formState: { errors }, 
    register, 
    setError, 
    reset
  } = useForm<RegisterFormFieldsType>()

  const handleCreateUserDocument = async (collectionName: string, documentId: string, document: object) => {
    const { data, error } = await firestoreCreateDocument (collectionName, documentId, document)
    if(error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }
    toast.success("Bienvenue sur notre application des singes codeurs!")
    setIsLoading(false)
    reset()
    sendEmailVerificationProcedure()
  }

  const handleCreateUserAuthentification = async ({email, password, how_did_hear}:RegisterFormFieldsType) => {
    const { data, error } = await firebaseCreateUser(email, password)
    if(error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }
    const userDocumentData = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      createdAt: new Date().toISOString()
    };
    handleCreateUserDocument("users", data.uid, userDocumentData)
  } 

  const onSubmit:SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true)
    const { password } = formData;

    if(password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit contenir au moins 6 caractères"
      })
      return
    }
    handleCreateUserAuthentification(formData)
  }

  
  return (
      <RegisterView
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
