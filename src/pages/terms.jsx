import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import TermsCondition from '../components/terms-condition';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Terms & Condition"}/>
            <TermsCondition />
        </Wrapper>
    );
};

export default index;