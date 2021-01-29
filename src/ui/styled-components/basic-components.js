import styled from 'styled-components';
import { media } from './media-breakpoints'
import { 
    Button, Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui/core'

export const StandardDialogTitle = styled(DialogTitle)`
    color: ${(props) => props.color ? props.color : props.theme.lightest};
    background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.darkest};
`
export const StandardDialogContent = styled(DialogContent)`
    padding: 40px;
    min-width: 400px;
    min-height: 400px;
`
export const MediumDialogContent = styled(StandardDialogContent)`
    width: 60vw;
`
export const StandardDialogActions = styled(DialogActions)`
    button {
        width: 100%;
    }
`
export const StyledAnchor = styled.span`
    color: ${(props) => props.color ? props.color : props.theme.highlight};
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 15px;
`
