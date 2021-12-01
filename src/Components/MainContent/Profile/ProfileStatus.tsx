import React from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    disActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onStatusChange = (e: any) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<div>
            {!this.state.editMode &&
            <div><span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span></div>}

            {this.state.editMode &&
            <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disActivateEditMode}
                        value={this.state.status}/></div>}
        </div>)
    }

}