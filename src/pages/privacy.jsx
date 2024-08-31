import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Privacy from '../components/privacy';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Privacy"}/>
            <Privacy />
        </Wrapper>
    );
};

export default index;