import { connect } from 'react-redux';
import * as React from 'react';

const Inputs = (mapStateToProps: any, options?: any): any => {
    return connect(mapStateToProps, {});
};

const Outputs = (mapDispatchToProps: any, options?: any): any => {
    const mapStateToProps = () => ({});
    return connect(mapStateToProps, mapDispatchToProps);
};

const Inject = (mapServices: any): any => {
    return (WrappedComponent: any): any => {
        return class extends React.Component {
            render() {
                return <WrappedComponent {...this.props} {...mapServices} />
            }
        }
    }
};

export { Inputs, Outputs, Inject };
