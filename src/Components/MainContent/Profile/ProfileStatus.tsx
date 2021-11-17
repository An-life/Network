import React from 'react';


type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    disActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }


    render() {
        return (<div>
            {!this.state.editMode &&
            <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>}

            {this.state.editMode &&
            <div><input autoFocus={true} onBlur={this.disActivateEditMode.bind(this)} value={this.props.status}/></div>}
        </div>)
    }

}