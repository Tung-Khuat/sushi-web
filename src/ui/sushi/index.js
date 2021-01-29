import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Add } from '@material-ui/icons';
import { Card, Fab } from '@material-ui/core';
import * as sushiActions from '../../actions/sushi-actions'
import SushiInfoDialog from './SushiInfoDialog';
import AddNewSushiDialog from './AddNewSushiDialog';
import { animated, useTransition, useSpring, config } from 'react-spring';

const DisplayContainer = styled.div`
    max-width: 90vw;
    max-height: 90vh;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
const SushiOverviewCard = styled(Card)`
    width: 250px;
    height: 250px;
    display: grid;
    grid-template-rows: 1fr minmax(80px, 30%);
    place-items: center;
    flex: 0 1 250px; 
    margin: 5px;
    cursor: pointer;
`
const CardImage = styled.div`
    width: 100%;
    height: 100%;
    background: ${({imgSrc}) => imgSrc ? `url(${imgSrc})` : "grey"};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: ${({bgSize}) => bgSize ? bgSize : "contain"};
`
const AddNewSushiButton = styled(Fab)`
    position: fixed;
    bottom: 50px;
    right: 50px;
`

function SushiDisplay({sushiList, _fetchList, _create}) {
    const [currentSushiInDialog, setCurrentSushiInDialog] = useState(null)
    const [infoDialogOpen, setInfoDialogOpen] = useState(false)
    const [addNewDialogOpen, setAddNewDialogOpen] = useState(false)

    useEffect(()=>{
        if(!sushiList || sushiList.length < 1)
            _fetchList()
    },[sushiList, _fetchList])

    useEffect(()=>{
        if(currentSushiInDialog) {
            const updatedSushi = sushiList.find((sushi) => sushi._id === currentSushiInDialog._id)
            setCurrentSushiInDialog(updatedSushi)
        }
    },[sushiList])

    const overviewCardTransition = useTransition(true, item => item.name, {
        from: { opacity: 0, transform: 'scale(0)', transformOrigin: "center" },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
        unique: true,
        trail: 400,
        config: config.stiff,
    })

    return (
        <DisplayContainer>
            {
                sushiList && sushiList.map((sushi, index)=>(
                    overviewCardTransition.map(({ item, key, props})=> 
                        item && (
                            <animated.div key={key} style={props}>
                                <SushiOverviewCard onClick={()=>{setCurrentSushiInDialog(sushi); setInfoDialogOpen(true)}}>
                                    <CardImage imgSrc={sushi.image}></CardImage>
                                    <div>{sushi.name}</div>
                                </SushiOverviewCard>
                            </animated.div>
                        )
                    )
                ))
            }
            {
                currentSushiInDialog && (
                    <SushiInfoDialog sushi={currentSushiInDialog} _setOpen={setInfoDialogOpen} open={infoDialogOpen}/>
                )
            }
            <AddNewSushiButton color="primary" aria-label="add" onClick={()=>setAddNewDialogOpen(true)}>
                <Add />
            </AddNewSushiButton>
            <AddNewSushiDialog open={addNewDialogOpen} _setOpen={setAddNewDialogOpen} />
        </DisplayContainer>
    )
}

const mapStateToProps = ({ sushiStore: { sushiList } }) => (
    { sushiList } 
)

const mapDispatchToProps = (dispatch) => ({
    _fetchList: bindActionCreators(sushiActions._fetch, dispatch),
    _create: bindActionCreators(sushiActions._create, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SushiDisplay)