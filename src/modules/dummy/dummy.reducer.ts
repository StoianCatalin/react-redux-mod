import { ImmerReducer, createActionCreators, createReducerFunction } from 'immer-reducer';

export interface DummyState {
    isDummy: boolean;
}

const initialState: DummyState = {
    isDummy: false
};

class DummyReducer extends ImmerReducer<DummyState> {

    setDummyState(isDummy: boolean) {
        this.draftState.isDummy = isDummy;
    }
}

export const DummyActions = createActionCreators(DummyReducer);
export const dummyReducerFunc = createReducerFunction(DummyReducer, initialState);
