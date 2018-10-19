import React, { Component } from 'react';
import { connect } from 'react-redux';
import PuppyList from '../components/puppyList';
import { adoptPuppy, fetchPuppies } from '../redux/actions/puppyActions';

class PuppyListContainer extends Component {
    componentDidMount() {
        this.props.fetchPuppies()
    }

    render() {
        const { fetchPuppies, ...rest } = this.props;
        return <PuppyList {...rest} />
    }
}

const mapStateToProps = (state) => {
    return {
        puppies: state.puppyReducer,
        loading: state.loading.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adoptPuppy: (id) => { dispatch(adoptPuppy(id)) },
        fetchPuppies: () => { dispatch(fetchPuppies()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyListContainer)