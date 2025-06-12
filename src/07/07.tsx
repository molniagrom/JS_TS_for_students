import React, {useState} from "react"

export type AddressType = {
    street: StreetType;
}

type StreetType = {
    title: string;
}

export type ManType = {
    name: "Alina",
    age: 17,
    lessons: Array<{ title: string }>,
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = ({title, man}) => {
   const [message, setMessage] = useState<string>("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}