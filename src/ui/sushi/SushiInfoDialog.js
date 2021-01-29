import React, { useState } from 'react'
import styled from 'styled-components'
import { 
    Button, Dialog,
} from '@material-ui/core'
import { MediumDialogContent, StandardDialogActions, StandardDialogTitle } from '../styled-components/basic-components';
import EditSushiInfoDialog from './EditSushiInfoDialog';

const PreviewImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
`
const PreviewImage = styled.div`
    background: ${({imgSrc}) => imgSrc ? `url(${imgSrc})` : "grey"};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: ${({bgSize}) => bgSize ? bgSize : "cover"};
`

export default function SushiInfoDialog({open, _setOpen, sushi}) {
    const [editDialogOpen, setEditDialogOpen] = useState(false)

    if(!sushi)
        return <div>No sushi found</div>

    return (
        <React.Fragment>
            <Dialog open={open} onClose={()=>_setOpen(false)} maxWidth={false}>
                <StandardDialogTitle>{sushi.name}</StandardDialogTitle>
                <MediumDialogContent>
                    Full info of {sushi.name} will be here later.
                    <PreviewImageContainer>
                        <PreviewImage imgSrc={sushi.image} />
                    </PreviewImageContainer>
                </MediumDialogContent>
                <StandardDialogActions>
                    <Button onClick={()=>setEditDialogOpen(true)} color="primary" variant="contained">Edit</Button>
                    <Button onClick={()=>_setOpen(false)} variant="contained">Close</Button>
                </StandardDialogActions>
            </Dialog>
            
            <EditSushiInfoDialog sushi={sushi} open={editDialogOpen} _setOpen={setEditDialogOpen} _closeParentDialog={()=>_setOpen(false)}/>

        </React.Fragment>
    )
}
