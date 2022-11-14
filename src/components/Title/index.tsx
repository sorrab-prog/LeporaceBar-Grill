import React from 'react';

// Styles
import { SectionTitle } from './styles';

interface titleProps{
    backgroundColor: string;
    fontSize: string;
    title: string;
}

function Title(props:titleProps) {
    const titleStyle = {
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize,
    }
    return (
        <SectionTitle style={titleStyle}>{props.title}</SectionTitle>
    )
};

export default Title