import * as React from 'react';
import { Inject, Inputs, Outputs } from '../../../decorators/redux.decorators';
import { DummyActions, DummyState } from '../dummy.reducer';
import logo from '../../../assets/logo.svg';
import produce from 'immer';
import { AppState } from '../../../redux_setup/root.reducer';
import UserServiceInstance, { UserService } from '../../../shared/services/User.service';

interface PropType {
    isDummy: boolean;
    setDummyStatus: (value: boolean) => void
    userService: UserService
}

interface StateType {
    isDummy: boolean;
}

@Inputs((state: AppState): DummyState => ({
    isDummy: state.dummy.isDummy
}))
@Outputs((dispatch: Function, ownProps: PropType) => ({
    setDummyStatus: (value: boolean) => {
        dispatch(DummyActions.setDummyState(value));
    }
}))
@Inject({ userService: UserServiceInstance })
export default class DummyScreen extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            isDummy: this.props.isDummy
        }
        // UserService is available through this.props.userService
    }

    componentWillReceiveProps(nextProps: PropType): void {
        this.setState(produce(this.state, (draftState) => {
            draftState.isDummy = nextProps.isDummy;
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span>
                        Is dummy? <p>{this.state.isDummy ? 'Yes' : 'No'}</p>
                    </span>
                    <button onClick={() => {
                        this.props.setDummyStatus(!this.state.isDummy);
                    }}>
                        {this.state.isDummy ? 'Make it no dummy' : 'Make it dummy'}</button>
                </header>
            </div>
        );
    }
}
