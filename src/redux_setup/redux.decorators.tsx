import { connect } from 'react-redux';

const Inputs = (mapStateToProps: any, options?: any): any => {
    return connect(mapStateToProps, {});
};

const Outputs = (mapDispatchToProps: any, options?: any): any => {
    const mapStateToProps = () => ({});
    return connect(mapStateToProps, mapDispatchToProps);
};

const Injectable = (mapServices: any) => {
    console.log(mapServices);
    return (wrappedComponent: any) => {
        console.log(wrappedComponent);
    }
};

export { Inputs, Outputs, Injectable };
