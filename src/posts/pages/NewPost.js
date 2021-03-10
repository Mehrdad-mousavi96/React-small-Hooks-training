import React from 'react'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { validatorRequire } from '../../shared/util/validators'
import { useFrom } from '../../shared/hooks/form-hook'

import './NewPost.css'

const NewPost = () => {
    const [formState, inputHandler] = useFrom({
        title: {
            value: '',
            isValid: false
        },
        decription: {
            value: '',
            isValid: false
        }
    }, false)
    const postSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }
    return(
        <div className="center main post">
            <form onSubmit={postSubmitHandler}>
                <Input 
                    id="title"
                    element="input"
                    type="text"
                    placeholder="عنوان"
                    errorText="لطفا عنوان معتبر وارد کنید."
                    validators={[validatorRequire()]}
                    onInput={inputHandler}
                />
                <Input 
                    id="decription"
                    element="textarea"
                    placeholder="توضیح"
                    errorText="لطفا توضیح معتبر وارد کنید."
                    validators={[validatorRequire()]}
                    onInput={inputHandler}
                />
                <Button
                    type="submit"
                    disabled={!formState.isValid}
                >
                    افزودن
                </Button>
            </form>
        </div>
    )
}

export default NewPost