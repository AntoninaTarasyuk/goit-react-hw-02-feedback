import PropTypes from 'prop-types';
import { SWrap, STitle } from './Section.styled';

const Section = ({ title, children }) => {
    return <SWrap>
        <STitle>{title}</STitle>
        {children}
    </SWrap>
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;