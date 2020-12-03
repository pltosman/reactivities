import React, { useContext } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import {observer} from 'mobx-react-lite';
import ActivityList from './ActivityList';
import ActivityStore from '../../../app/stores/activityStore';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';


const ActivityDashboard: React.FC = () => {

const activityStore = useContext(ActivityStore)
const {editMode, selectedActivity} = activityStore;
    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList />
            </GridColumn>
            <GridColumn width={6}>
                {selectedActivity && !editMode && (<ActivityDetails />)}
                {editMode && <ActivityForm key={selectedActivity && (selectedActivity.id || 0)} activity={selectedActivity!} />}

            </GridColumn>
        </Grid>
    );
};


export default observer(ActivityDashboard);
