'use client'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, TextField, } from '@radix-ui/themes'
import {useForm , Controller} from 'react-hook-form';
import axios from 'axios'
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
    title: string;
    description: string;
}


const NewIssuePage = () => {
    const router = useRouter()
    const{register, handleSubmit, control} = useForm<IssueForm>()
    const [error, setError] = useState<string>()

    const onSubmit = async (data: IssueForm) => {
        try {
            await axios.post('/api/issues', data)
            router.push('/issues')    
        } catch (err) {
            setError('An unexpected error occured')
        }
    }
    
  return (
    <div className="max-w-xl space-y-5">
        {error && <Callout.Root color="red">
            <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className=' space-y-3' onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
            <TextField.Input {...register('title')} placeholder='Title' />
        </TextField.Root>
        <Controller
            name="description"
            control={control}
            render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        <Button>Create New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage