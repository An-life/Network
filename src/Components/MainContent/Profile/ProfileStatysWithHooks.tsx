import React, {useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    let [editMode,setEditMode ] = useState(false)
    let [status,setStatus]=useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activateMode=()=>{
        setEditMode(true)
    }
    const disActivateEditMode = () => {
        setEditMode(false)
       props.updateStatus(status)
    }
    const onStatusChange = (e: any) => {
        setStatus( e.currentTarget.value);
    }

    return (<div>
        {!editMode &&
        <div><span onDoubleClick={activateMode}>{props.status || 'No status'}</span></div>}

        {editMode &&
        <div><input onChange={onStatusChange} autoFocus={true} onBlur={disActivateEditMode} value={status}/></div>}
    </div>)


}