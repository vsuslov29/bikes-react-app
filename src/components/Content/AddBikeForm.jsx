import React from 'react';
import s from './AddBikeForm.module.css';
import { useForm } from 'react-hook-form';

const AddBikeForm = ({ onFormSubmit, bikesId }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

    console.log(errors)
    return (
        <form className={s.addBikeForm} onSubmit={handleSubmit(onFormSubmit)}>
            <div className={errors.name && s.error}>
                <input autocomplete='off' type='text' {...register('name', { required: 'This input is required', minLength: 5 })} placeholder='Name' />
                {errors.name && errors.name.type === 'required' && <p>Field is required</p>}
                {errors.name && errors.name.type === 'minLength' && <p>Minimum length is 5 characters</p>}
            </div>


            <div className={errors.type && s.error}>
                <input autocomplete='off' type='text' {...register('type', { required: true, minLength: 5 })} placeholder='Type' />
                {errors.type && errors.type.type === 'required' && <p>Field is required</p>}
                {errors.type && errors.type.type === 'minLength' && <p>Minimum length is 5 characters</p>}
            </div>

            <div className={errors.color && s.error}>
                <input autocomplete='off' type='text' {...register('color', { required: true, minLength: 5 })} placeholder='Color' />
                {errors.color && errors.color.type === 'required' && <p>Field is required</p>}
                {errors.color && errors.color.type === 'minLength' && <p>Minimum length is 5 characters</p>}
            </div>

            <div className={errors.wheelSize && s.error}>
                <input autocomplete='off' type='text' {...register('wheelSize', { required: true, validate: (value) => !isNaN(value) })} placeholder='Wheel size' />
                {errors.wheelSize && errors.wheelSize.type === 'required' && <p>Field is required</p>}
                {errors.wheelSize && errors.wheelSize.type === 'validate' && <p>Only number required</p>}
            </div>


            <div className={errors.price && s.error}>
                <input autocomplete='off' type='text' {...register('price', { required: true, validate: (value) => !isNaN(value) })} placeholder='Price' />
                {errors.price && errors.price.type === 'required' && <p>Field is required</p>}
                {errors.price && errors.price.type === 'validate' && <p>Only number required</p>}
            </div>


            <div className={errors.id && s.error}>
                <input type='text'
                    {...register('id', {
                        required: true,
                        validate: {
                            isNumber: (value) => !isNaN(value),
                            isRepeat: (value) => bikesId.every(id => id != value)
                        }
                    })} placeholder='ID (slug): ХХХХХХХХХХХХХ' autocomplete='off'
                />
                {errors.id && errors.id.type === 'required' && <p>Field is required</p>}
                {errors.id && errors.id.type === 'isNumber' && <p>Only number required</p>}
                {errors.id && errors.id.type === 'isRepeat' && <p>This id is already exists</p>}
            </div>


            <div className={`${s.description} ${errors.description && s.error}`}>
                <textarea autocomplete='off' placeholder='Description' {...register('description', { required: true, minLength: 5 })} />
                {errors.description && errors.description.type === 'required' && <p>Field is required</p>}
                {errors.description && errors.description.type === 'minLength' && <p>Minimum length is 5 characters</p>}
            </div>


            <input type='submit' value='SAVE' />
            <input type='reset' value='CLEAR' />
        </form>
    )
}

export default AddBikeForm;