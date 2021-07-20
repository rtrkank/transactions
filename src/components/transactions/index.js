import {Container} from 'react-bootstrap';
import RewardPoints from './rewardPoints';
import RewardsHistory from './rewardsHistory';
import './index.css';

function TransactionsComponent(props) {
    const {totalRewards, rewardsExpiration} = props.transactionsList;
    return (
        <Container className="mt-5">
            <RewardPoints totalRewards={totalRewards} rewardsExpiration={rewardsExpiration}/>
            <RewardsHistory transactionsList={props.transactionsList}/>
        </Container>
    );
}

export default TransactionsComponent;