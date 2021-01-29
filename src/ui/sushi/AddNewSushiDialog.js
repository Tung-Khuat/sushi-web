import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { 
    Button, Dialog, TextField
  } from '@material-ui/core'
import { MediumDialogContent, StandardDialogActions, StandardDialogTitle } from '../styled-components/basic-components';
import { withSnackbar } from 'notistack';
import * as sushiActions from '../../actions/sushi-actions'

const InputField = styled(TextField)`
    display: block;
    margin-bottom: 15px;
    input {
        background-color: rgb(255 255 255 / 59%)
    }
`
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

function AddNewSushiDialog({open, _setOpen, _create, enqueueSnackbar}) {
    const [sushiName, setSushiName] = useState("")
    const [sushiImage, setSushiImage] = useState("")
    const [processing, setProcessing] = useState(false)

    const handleOnSubmit = async () => {
        const newSushi = {
            name: sushiName,
            image: sushiImage,
        }

        if(processing)
            return 

        if(newSushi.name.length < 1)
        return  enqueueSnackbar("Please fill the all the required fields", { variant: "error" })
        
        setProcessing(true)
        const success = await _create(newSushi)
        if (success) {
            enqueueSnackbar("Successfully created a new sushi.", { variant: "success" })
        } else {
            enqueueSnackbar("Something went wrong. Please try again later.", { variant: "error" })
        }
        setProcessing(false)
    }

    return (
        <Dialog open={open} onClose={()=>_setOpen(false)} maxWidth={false}>
            <StandardDialogTitle>New Sushi</StandardDialogTitle>
            <MediumDialogContent>
                <InputField 
                    onChange={(e)=>setSushiName(e.target.value)} 
                    label="Sushi Name" 
                    value={sushiName} 
                    variant="filled"
                    fullWidth
                    required
                />
                <InputField 
                    onChange={(e)=>setSushiImage(e.target.value)} 
                    label="Image URL" 
                    value={sushiImage} 
                    variant="filled"
                    fullWidth
                />
                <PreviewImageContainer>
                    <PreviewImage imgSrc={sushiImage} />
                </PreviewImageContainer>
            </MediumDialogContent>
            <StandardDialogActions>
                <Button onClick={handleOnSubmit} color="primary" variant="contained">Submit</Button>
                <Button onClick={()=>_setOpen(false)} variant="contained">Cancel</Button>
            </StandardDialogActions>
        </Dialog>
    )
}

const mapDispatchToProps = (dispatch) => ({
    _create: bindActionCreators(sushiActions._create, dispatch),
})

export default compose(
    withSnackbar,
    connect(null, mapDispatchToProps),
  )(AddNewSushiDialog)

