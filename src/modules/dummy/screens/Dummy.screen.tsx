import * as React from 'react';
import { inputs, outputs } from '../../../redux_setup/redux.decorators';
import { DummyActions } from '../dummy.reducer';
import logo from '../../../assets/logo.svg';
import produce from 'immer';
import { AppState } from '../../../redux_setup/root.reducer';

interface PropType {
    isDummy: boolean;
    setDummyStatus: (value: boolean) => void
}

interface StateType {
    isDummy: boolean;
}

@inputs((state: Pick<AppState, 'dummy'>) => ({
    isDummy: state.dummy.isDummy
}))
@outputs((dispatch: Function, ownProps: PropType) => ({
    setDummyStatus: (value: boolean) => {
        dispatch(DummyActions.setDummyState(value));
    }
}))
export default class DummyScreen extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            isDummy: this.props.isDummy
        }
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
                    <p>
                        Is dummy? <p>{this.state.isDummy ? 'Yes' : 'No'}</p>
                    </p>
                    <button onClick={() => {
                        this.props.setDummyStatus(!this.state.isDummy);
                    }}>
                        {this.state.isDummy ? 'Make it no dummy' : 'Make it dummy'}</button>
                </header>
            </div>
        );
    }
}
