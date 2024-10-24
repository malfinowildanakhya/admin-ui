/* eslint-disable react/prop-types */

import Input from "./Input";
import Label from "./Label";


const FormField = ({ label, type, placeholder, id, required }) => (
    <div>
        <Label htmlFor={id}>{label}</Label>
        <Input type={type} placeholder={placeholder} id={id} required={required} />
    </div>
);

export default FormField;