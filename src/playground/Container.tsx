
import * as React from 'react'
import styled from 'styled-components'

const View = styled.div`
    
    border-top: 2em solid #425452;
    box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
    position: relative;
    border-radius: 3px 3px 0 0;
    height: 100%;
    width: 100%;

    &::before {
        display: block;
        position: absolute;
        content: '';
        top: -1.25em;
        left: 1em;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: #6FB549;
        box-shadow: 0 0 0 2px #6FB549, 1.5em 0 0 2px #DEAC54, 3em 0 0 2px #D8665D;
    }
`

export class Container extends React.Component {
    
    public render() {
        return (
            <View>{ this.props.children }</View>
        )
    }
}