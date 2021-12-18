import React, {useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    let stateWithSetState = useState(false)
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];

    return (<div>
        {!editMode &&
        <div><span>{props.status || 'No status'}</span></div>}

        {editMode &&
        <div><input autoFocus={true}
        /></div>}
    </div>)


}