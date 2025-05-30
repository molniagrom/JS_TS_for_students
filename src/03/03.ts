import {StudentProps} from "../02/02";

export const addSkill = (st: StudentProps, skill: string) => {
    st.technologies.push({
            id: new Date().getTime(),
            title: skill,
        })
}

export const makeStudentActive = (st: StudentProps) => {
    st.isActive = true
}

export const isLiveInCity = (st: StudentProps, city: string) => {
     return st.address.city === city;
}