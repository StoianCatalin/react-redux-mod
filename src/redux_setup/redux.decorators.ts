import { connect } from 'react-redux'

const inputs = (mapStateToProps: any, options?: any): any => {
    return connect(mapStateToProps, {});
};

const outputs = (mapDispatchToProps: any, options?: any): any => {
    const mapStateToProps = () => ({});
    return connect(mapStateToProps, mapDispatchToProps);
};

export { inputs, outputs };
