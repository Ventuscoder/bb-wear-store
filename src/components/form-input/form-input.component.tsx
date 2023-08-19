import { InputHTMLAttributes } from 'react'

import './form-input.styles.scss'

type FormInputProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

function FormInput({ label, ...inputOptions }: FormInputProps) {
    return (
        <div className="group">
            <input className='form-input' {...inputOptions} />
            <label className={`${(Boolean(inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length)) ? 'shrink': ''} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInput