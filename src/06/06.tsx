import {ChangeEvent} from "react";

export const User = () => {

   const deleteUser = () => {
       alert("User deleted successfully.");
   }
   const saveUser = () => {
       alert("User saved successfully.");
   }

   const nameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
       console.log(e.currentTarget.value);
   }

   const focusLostHandler = () => {
       console.log("focus Lost");
   }

    return <div>
        <textarea onBlur={focusLostHandler} onChange={nameChanged}>Alina</textarea>

        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}